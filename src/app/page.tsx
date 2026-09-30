"use client";

import { AppShell } from "@/components/layout/AppShell";
import { CapabilityReviewSection } from "@/components/survey/CapabilityReviewSection";
import { ReviewSubmitSection } from "@/components/survey/ReviewSubmitSection";
import { SurveyCard } from "@/components/survey/SurveyCard";
import { SurveyFooterActions } from "@/components/survey/SurveyFooterActions";
import { SurveyHeader } from "@/components/survey/SurveyHeader";
import { SurveyStepper } from "@/components/survey/SurveyStepper";
import { buildReviewIssues } from "@/components/survey/reviewIssues";
import {
  collectInitialWorkingState,
  mergeCustomRowsIntoSurveyData,
} from "@/components/survey/surveyState";
import { capabilityReviewData } from "@/data/capabilityReviewData";
import { allSurveyData, surveyData, surveyDataByTab } from "@/data/surveyData";
import type { SurveyNode, SurveyStatus, SurveyWorkingState } from "@/types/survey";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type SurveyStep = 1 | 2 | 3;
type StoredSurveyFlowState = {
  capabilitySelections?: Record<string, boolean>;
  currentStep?: SurveyStep;
  status?: SurveyStatus;
  workingState?: Partial<SurveyWorkingState>;
};

const flowStorageKey = "annual-labour-cost-survey-state";

function findAncestorIds(
  nodes: SurveyNode[],
  id: string,
  ancestors: string[] = [],
): string[] | null {
  for (const node of nodes) {
    if (node.id === id) {
      return ancestors;
    }

    const found = findAncestorIds(node.children ?? [], id, [...ancestors, node.id]);

    if (found) {
      return found;
    }
  }

  return null;
}

function findTabIdForNode(
  dataByTab: Record<string, SurveyNode[]>,
  id: string,
): string | null {
  for (const [tabId, nodes] of Object.entries(dataByTab)) {
    if (findAncestorIds(nodes, id)) {
      return tabId;
    }
  }

  return null;
}

function filterSurveyDataByCapabilities(
  nodes: SurveyNode[],
  capabilitySelections: Record<string, boolean>,
): SurveyNode[] {
  return nodes
    .filter((node) => node.level !== 1 || (capabilitySelections[node.id] ?? true))
    .map((node) => ({
      ...node,
      children: node.children
        ? filterSurveyDataByCapabilities(node.children, capabilitySelections)
        : undefined,
    }));
}

export default function Home() {
  const router = useRouter();
  const [activeWorkingTab, setActiveWorkingTab] = useState("core-technology");
  const [currentStep, setCurrentStep] = useState<SurveyStep>(1);
  const [focusedIssueId, setFocusedIssueId] = useState<string | null>(null);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [savedMessage, setSavedMessage] = useState("");
  const [surveyStatus, setSurveyStatus] = useState<SurveyStatus>("Draft");
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [workingState, setWorkingState] = useState<SurveyWorkingState>(() =>
    collectInitialWorkingState(allSurveyData),
  );
  const [capabilitySelections, setCapabilitySelections] = useState<
    Record<string, boolean>
  >(() =>
    Object.fromEntries(
      capabilityReviewData.map((capability) => [capability.id, true]),
    ),
  );

  useEffect(() => {
    const restoreTimer = window.setTimeout(() => {
      const savedState = window.localStorage.getItem(flowStorageKey);

      if (!savedState) {
        return;
      }

      try {
        const parsed = JSON.parse(savedState) as StoredSurveyFlowState;

        if (parsed.capabilitySelections) {
          setCapabilitySelections((previous) => ({
            ...previous,
            ...parsed.capabilitySelections,
          }));
        }

        if (parsed.workingState) {
          const restoredWorkingState = parsed.workingState;

          setWorkingState((previous) => ({
            commentaryValues: {
              ...previous.commentaryValues,
              ...restoredWorkingState.commentaryValues,
            },
            currentValues: {
              ...previous.currentValues,
              ...restoredWorkingState.currentValues,
            },
            customRows: {
              ...previous.customRows,
              ...restoredWorkingState.customRows,
            },
            detailValues: {
              ...previous.detailValues,
              ...restoredWorkingState.detailValues,
            },
            expanded: {
              ...previous.expanded,
              ...restoredWorkingState.expanded,
            },
            priorValues: {
              ...previous.priorValues,
              ...restoredWorkingState.priorValues,
            },
          }));
        }

        if (parsed.status === "Submitted") {
          setSurveyStatus("Submitted");
        }
      } catch {
        window.localStorage.removeItem(flowStorageKey);
      }
    }, 0);

    return () => window.clearTimeout(restoreTimer);
  }, []);

  const showSavedMessage = (message: string) => {
    setSavedMessage(message);
    window.setTimeout(() => setSavedMessage(""), 1800);
  };

  const persistFlowState = (step = currentStep, status = surveyStatus) => {
    window.localStorage.setItem(
      flowStorageKey,
      JSON.stringify({
        capabilitySelections,
        currentStep: step,
        status,
        workingState,
      }),
    );
  };

  const saveFlowState = () => {
    persistFlowState();
    showSavedMessage("Saved");
  };

  const handleExit = () => {
    router.push("/labour-cost-insights");
  };

  const activeSurveyData = useMemo(
    () =>
      filterSurveyDataByCapabilities(
        mergeCustomRowsIntoSurveyData(
          surveyDataByTab[activeWorkingTab] ?? surveyData,
          workingState.customRows,
        ),
        capabilitySelections,
      ),
    [activeWorkingTab, capabilitySelections, workingState.customRows],
  );

  const reviewSurveyData = useMemo(
    () => mergeCustomRowsIntoSurveyData(allSurveyData, workingState.customRows),
    [workingState.customRows],
  );

  const activeCapabilitiesCount = useMemo(
    () =>
      capabilityReviewData.filter(
        (capability) => capabilitySelections[capability.id] ?? true,
      ).length,
    [capabilitySelections],
  );

  const reviewIssues = useMemo(
    () =>
      buildReviewIssues({
        capabilitySelections,
        nodes: reviewSurveyData,
        workingState,
      }),
    [capabilitySelections, reviewSurveyData, workingState],
  );

  const reviewBlockers = reviewIssues.filter(
    (issue) => issue.severity === "blocker",
  );

  const handleContinue = () => {
    if (currentStep === 1) {
      persistFlowState(2);
      setValidationErrors({});
      setCurrentStep(2);
      return;
    }

    if (currentStep === 2) {
      persistFlowState(3);
      setCurrentStep(3);
      return;
    }

    if (surveyStatus === "Submitted" || reviewBlockers.length > 0) {
      return;
    }

    setIsSubmitModalOpen(true);
  };

  const handleBack = () => {
    setCurrentStep((step) => (step > 1 ? ((step - 1) as SurveyStep) : step));
  };

  const handleCapabilitySelectionChange = (id: string, isActive: boolean) => {
    if (surveyStatus === "Submitted") {
      return;
    }

    setCapabilitySelections((previous) => ({
      ...previous,
      [id]: isActive,
    }));
  };

  const clearValidationError = (id: string) => {
    setValidationErrors((previous) => {
      if (!previous[id]) {
        return previous;
      }

      const next = { ...previous };
      delete next[id];
      return next;
    });
  };

  const handleIssueSelect = (capabilityId: string) => {
    const ancestorIds = findAncestorIds(reviewSurveyData, capabilityId) ?? [];
    const tabId = findTabIdForNode(
      Object.fromEntries(
        Object.entries(surveyDataByTab).map(([tabId, nodes]) => [
          tabId,
          mergeCustomRowsIntoSurveyData(nodes, workingState.customRows),
        ]),
      ),
      capabilityId,
    );
    const selectedIssue = reviewIssues.find(
      (issue) => issue.capabilityId === capabilityId,
    );

    setWorkingState((previous) => ({
      ...previous,
      expanded: {
        ...previous.expanded,
        ...Object.fromEntries(ancestorIds.map((id) => [id, true])),
      },
    }));

    if (selectedIssue) {
      setValidationErrors({
        [capabilityId]:
          selectedIssue.type === "required_values_missing"
            ? "Prior and Current values are required."
            : "Commentary is required for this variance.",
      });
    }

    if (tabId) {
      setActiveWorkingTab(tabId);
    }

    setFocusedIssueId(capabilityId);
    setCurrentStep(2);
  };

  const handleConfirmSubmit = () => {
    setSurveyStatus("Submitted");
    persistFlowState(3, "Submitted");
    setIsSubmitModalOpen(false);
    setCurrentStep(3);
    showSavedMessage("Submitted");
  };

  const isReadOnly = surveyStatus === "Submitted";
  const isSubmitDisabled = currentStep === 3 && (reviewBlockers.length > 0 || isReadOnly);

  return (
    <AppShell>
      <main className="min-h-[calc(100vh-76px)] bg-[#F5F6F8] px-10 pb-0 pt-6 text-survey-text max-md:px-5">
        <div className="w-full">
          <SurveyHeader />
          <SurveyStepper currentStep={currentStep} />
          {currentStep === 1 ? (
            <CapabilityReviewSection
              capabilities={capabilityReviewData}
              isReadOnly={isReadOnly}
              selections={capabilitySelections}
              onSelectionChange={handleCapabilitySelectionChange}
            />
          ) : null}
          {currentStep === 2 ? (
            <SurveyCard
              activeTab={activeWorkingTab}
              data={activeSurveyData}
              focusNodeId={focusedIssueId}
              isReadOnly={isReadOnly}
              onFocusHandled={() => setFocusedIssueId(null)}
              onTabChange={setActiveWorkingTab}
              onValidationErrorClear={clearValidationError}
              setWorkingState={setWorkingState}
              validationErrors={validationErrors}
              workingState={workingState}
            />
          ) : null}
          {currentStep === 3 ? (
            <ReviewSubmitSection
              activeCapabilitiesCount={activeCapabilitiesCount}
              issues={reviewIssues}
              status={surveyStatus}
              onIssueSelect={handleIssueSelect}
            />
          ) : null}
          <SurveyFooterActions
            continueDisabled={isSubmitDisabled}
            continueLabel={currentStep === 3 ? "Submit Survey" : undefined}
            continueTitle={
              currentStep === 3 && reviewBlockers.length > 0
                ? "Resolve all blockers before submitting."
                : undefined
            }
            savedMessage={savedMessage}
            showContinueArrow={currentStep !== 3}
            showBack={currentStep > 1}
            onBack={handleBack}
            onContinue={handleContinue}
            onExit={handleExit}
            onSaveLater={saveFlowState}
          />
          {isSubmitModalOpen ? (
            <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#0F172A]/30 px-4">
              <div className="w-full max-w-[420px] rounded-lg border border-[#E5E7EB] bg-white p-5 shadow-xl">
                <h2 className="text-[18px] font-semibold leading-6 text-[#111827]">
                  Submit survey?
                </h2>
                <p className="mt-2 text-[13px] leading-5 text-[#4B5563]">
                  Once submitted, your responses will become read-only unless an
                  administrator raises a query.
                </p>
                <div className="mt-5 flex justify-end gap-3">
                  <button
                    className="h-10 rounded-md border border-[#D8DEE8] bg-white px-4 text-[12px] font-semibold text-[#111827] transition hover:bg-[#F8FAFC]"
                    onClick={() => setIsSubmitModalOpen(false)}
                    type="button"
                  >
                    Cancel
                  </button>
                  <button
                    className="h-10 rounded-md bg-[#D94F00] px-4 text-[12px] font-semibold text-white transition hover:bg-[#B94700]"
                    onClick={handleConfirmSubmit}
                    type="button"
                  >
                    Submit survey
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </main>
    </AppShell>
  );
}
