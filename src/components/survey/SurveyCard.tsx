"use client";

import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { BarChart3 } from "lucide-react";
import { CapabilityTree } from "@/components/survey/CapabilityTree";
import { L3DetailDrawer } from "@/components/survey/L3DetailDrawer";
import { SurveyTabs } from "@/components/survey/SurveyTabs";
import { needsCommentary } from "@/components/survey/surveyMath";
import { findSelectedContext, parseFormNumber } from "@/components/survey/surveyState";
import { surveyData, surveyTabs } from "@/data/surveyData";
import type { L3DetailDraft, SurveyNode, SurveyWorkingState } from "@/types/survey";

type SurveyCardProps = {
  activeTab: string;
  data?: SurveyNode[];
  focusNodeId?: string | null;
  isReadOnly?: boolean;
  onTabChange: (tabId: string) => void;
  onFocusHandled?: () => void;
  onValidationErrorClear?: (id: string) => void;
  setWorkingState: Dispatch<SetStateAction<SurveyWorkingState>>;
  validationErrors?: Record<string, string>;
  workingState: SurveyWorkingState;
};

function hasNumericValue(value: string | undefined) {
  return Number.isFinite(Number.parseFloat(value ?? ""));
}

export function SurveyCard({
  activeTab,
  data = surveyData,
  focusNodeId,
  isReadOnly = false,
  onTabChange,
  onFocusHandled,
  onValidationErrorClear,
  setWorkingState,
  validationErrors = {},
  workingState,
}: SurveyCardProps) {
  const [deleteCandidate, setDeleteCandidate] = useState<SurveyNode | null>(null);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const { commentaryValues, currentValues, detailValues, expanded, priorValues } =
    workingState;

  const activeTabLabel =
    surveyTabs.find((tab) => tab.id === activeTab)?.label ?? "Core Technology";
  const selectedContext = useMemo(
    () => findSelectedContext(data, selectedNodeId, [activeTabLabel]),
    [activeTabLabel, data, selectedNodeId],
  );

  useEffect(() => {
    if (!focusNodeId) {
      return;
    }

    const focusTimer = window.setTimeout(() => {
      setSelectedNodeId(focusNodeId);
      document
        .getElementById(`survey-row-${focusNodeId}`)
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
      onFocusHandled?.();
    }, 0);

    return () => window.clearTimeout(focusTimer);
  }, [focusNodeId, onFocusHandled]);

  const handleToggle = (id: string) => {
    setWorkingState((previous) => ({
      ...previous,
      expanded: {
        ...previous.expanded,
        [id]: !(previous.expanded[id] ?? true),
      },
    }));
  };

  const handleCurrentChange = (id: string, value: string) => {
    if (isReadOnly) {
      return;
    }

    const commentary = commentaryValues[id] ?? "";

    if (
      validationErrors[id] &&
      hasNumericValue(priorValues[id]) &&
      hasNumericValue(value) &&
      (!needsCommentary(priorValues[id], value) || commentary.trim())
    ) {
      onValidationErrorClear?.(id);
    }

    setWorkingState((previous) => ({
      ...previous,
      currentValues: {
        ...previous.currentValues,
        [id]: value,
      },
    }));
  };

  const handlePriorChange = (id: string, value: string) => {
    if (isReadOnly) {
      return;
    }

    const commentary = commentaryValues[id] ?? "";

    if (
      validationErrors[id] &&
      hasNumericValue(value) &&
      hasNumericValue(currentValues[id]) &&
      (!needsCommentary(value, currentValues[id]) || commentary.trim())
    ) {
      onValidationErrorClear?.(id);
    }

    setWorkingState((previous) => ({
      ...previous,
      priorValues: {
        ...previous.priorValues,
        [id]: value,
      },
    }));
  };

  const handleCommentaryChange = (id: string, value: string) => {
    if (isReadOnly) {
      return;
    }

    if (
      validationErrors[id] &&
      hasNumericValue(priorValues[id]) &&
      hasNumericValue(currentValues[id]) &&
      (!needsCommentary(priorValues[id], currentValues[id]) || value.trim())
    ) {
      onValidationErrorClear?.(id);
    }

    setWorkingState((previous) => ({
      ...previous,
      commentaryValues: {
        ...previous.commentaryValues,
        [id]: value,
      },
    }));
  };

  const handleSelectNode = (node: SurveyNode) => {
    if (node.level === 3) {
      setSelectedNodeId(node.id);
    }
  };

  const handleCustomRowAdd = (
    parentId: string,
    draft: { current: string; name: string; prior: string },
  ) => {
    if (isReadOnly) {
      return;
    }

    const id = `custom-${parentId}-${Date.now()}`;
    const priorNumber = parseFormNumber(draft.prior, 0);
    const currentNumber = parseFormNumber(draft.current, 0);
    const customRow: SurveyNode = {
      id,
      name: draft.name,
      level: 3,
      prior: priorNumber,
      current: currentNumber,
      commentary: "",
      deploymentModel: "Hybrid",
      hostingType: "IaaS",
      strategicTechnology: false,
      status: "In Production",
      annualBudget: currentNumber,
      expectedSavings: 0,
      riskLevel: "Medium",
      completion: "1/3",
      isCustom: true,
      parentL2Id: parentId,
    };

    setWorkingState((previous) => ({
      ...previous,
      commentaryValues: {
        ...previous.commentaryValues,
        [id]: "",
      },
      currentValues: {
        ...previous.currentValues,
        [id]: draft.current,
      },
      customRows: {
        ...previous.customRows,
        [parentId]: [...(previous.customRows[parentId] ?? []), customRow],
      },
      detailValues: {
        ...previous.detailValues,
        [id]: {
          annualBudget: currentNumber,
          commentary: "",
          current: draft.current,
          deploymentModel: "Hybrid",
          expectedSavings: 0,
          hostingType: "IaaS",
          riskLevel: "Medium",
          status: "In Production",
          strategicTechnology: false,
        },
      },
      expanded: {
        ...previous.expanded,
        [parentId]: true,
      },
      priorValues: {
        ...previous.priorValues,
        [id]: draft.prior,
      },
    }));
  };

  const handleSaveDetails = (id: string, draft: L3DetailDraft) => {
    if (isReadOnly) {
      setSelectedNodeId(null);
      return;
    }

    if (
      validationErrors[id] &&
      hasNumericValue(priorValues[id]) &&
      hasNumericValue(draft.current) &&
      (!needsCommentary(priorValues[id], draft.current) || draft.commentary.trim())
    ) {
      onValidationErrorClear?.(id);
    }

    setWorkingState((previous) => {
      const existing = previous.detailValues[id];
      return {
        ...previous,
        commentaryValues: {
          ...previous.commentaryValues,
          [id]: draft.commentary,
        },
        currentValues: {
          ...previous.currentValues,
          [id]: draft.current,
        },
        detailValues: {
          ...previous.detailValues,
          [id]: {
            commentary: draft.commentary,
            current: draft.current,
            deploymentModel: draft.deploymentModel,
            hostingType: draft.hostingType,
            strategicTechnology: draft.strategicTechnology,
            status: draft.status,
            annualBudget: parseFormNumber(
              draft.annualBudget,
              existing?.annualBudget ?? 0,
            ),
            expectedSavings: parseFormNumber(
              draft.expectedSavings,
              existing?.expectedSavings ?? 0,
            ),
            riskLevel: draft.riskLevel,
          },
        },
      };
    });
    setSelectedNodeId(null);
  };

  const handleDeleteCustomRow = () => {
    if (!deleteCandidate?.parentL2Id) {
      setDeleteCandidate(null);
      return;
    }

    const deletedId = deleteCandidate.id;
    const parentId = deleteCandidate.parentL2Id;

    setWorkingState((previous) => {
      const {
        [deletedId]: _deletedCommentary,
        ...commentaryValuesNext
      } = previous.commentaryValues;
      const { [deletedId]: _deletedCurrent, ...currentValuesNext } =
        previous.currentValues;
      const { [deletedId]: _deletedDetail, ...detailValuesNext } =
        previous.detailValues;
      const { [deletedId]: _deletedPrior, ...priorValuesNext } = previous.priorValues;

      return {
        ...previous,
        commentaryValues: commentaryValuesNext,
        currentValues: currentValuesNext,
        customRows: {
          ...previous.customRows,
          [parentId]: (previous.customRows[parentId] ?? []).filter(
            (row) => row.id !== deletedId,
          ),
        },
        detailValues: detailValuesNext,
        priorValues: priorValuesNext,
      };
    });

    onValidationErrorClear?.(deletedId);
    setDeleteCandidate(null);
    setSelectedNodeId(null);
  };

  return (
    <>
      <section className="overflow-hidden rounded-lg border border-survey-border bg-white shadow-card">
        <div className="flex items-start gap-3 border-b border-survey-border px-6 py-[18px] lg:px-8">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-survey-orangeSoft text-survey-orange">
            <BarChart3 className="h-4 w-4" strokeWidth={2} />
          </div>
          <div className="min-w-0">
            <h2 className="text-[13px] font-semibold leading-4 text-[#0F172A]">
              Section 2 &middot; Working Data
            </h2>
            <p className="mt-1 text-[11px] leading-4 text-[#374151]">
              Enter current-year values. A warning appears when variance exceeds &plusmn;15%, and commentary becomes mandatory.
            </p>
          </div>
        </div>

        <div className="px-6 lg:px-8">
          <SurveyTabs activeTab={activeTab} tabs={surveyTabs} onTabChange={onTabChange} />

          <CapabilityTree
            commentaryValues={commentaryValues}
            currentValues={currentValues}
            data={data}
            expanded={expanded}
            isReadOnly={isReadOnly}
            priorValues={priorValues}
            selectedNodeId={selectedNodeId}
            validationErrors={validationErrors}
            onCommentaryChange={handleCommentaryChange}
            onCurrentChange={handleCurrentChange}
            onCustomRowAdd={handleCustomRowAdd}
            onPriorChange={handlePriorChange}
            onSelectNode={handleSelectNode}
            onToggle={handleToggle}
          />
        </div>
        {Object.keys(validationErrors).length ? (
          <div className="border-t border-[#FED7AA] bg-[#FFF7ED] px-5 py-3 text-[12px] font-medium text-[#C2410C]">
            Please complete required row values and add commentary where variance exceeds &plusmn;15%.
          </div>
        ) : null}
      </section>

      {selectedContext && selectedNodeId && detailValues[selectedNodeId] ? (
        <L3DetailDrawer
          breadcrumb={selectedContext.breadcrumb}
          commentary={commentaryValues[selectedNodeId] ?? ""}
          currentValue={currentValues[selectedNodeId] ?? ""}
          detail={detailValues[selectedNodeId]}
          key={selectedNodeId}
          node={selectedContext.node}
          isReadOnly={isReadOnly}
          onClose={() => setSelectedNodeId(null)}
          onDelete={(node) => setDeleteCandidate(node)}
          onSave={handleSaveDetails}
          priorValue={priorValues[selectedNodeId] ?? ""}
        />
      ) : null}

      {deleteCandidate ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#0F172A]/30 px-4">
          <div className="w-full max-w-[420px] rounded-lg border border-[#E5E7EB] bg-white p-5 shadow-xl">
            <h2 className="text-[18px] font-semibold leading-6 text-[#111827]">
              Delete custom row?
            </h2>
            <p className="mt-2 text-[13px] leading-5 text-[#4B5563]">
              &ldquo;{deleteCandidate.name}&rdquo; will be removed from this survey.
            </p>
            <div className="mt-5 flex justify-end gap-3">
              <button
                className="h-10 rounded-md border border-[#D8DEE8] bg-white px-4 text-[12px] font-semibold text-[#111827] transition hover:bg-[#F8FAFC]"
                onClick={() => setDeleteCandidate(null)}
                type="button"
              >
                Cancel
              </button>
              <button
                className="h-10 rounded-md bg-[#DC2626] px-4 text-[12px] font-semibold text-white transition hover:bg-[#B91C1C]"
                onClick={handleDeleteCustomRow}
                type="button"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
