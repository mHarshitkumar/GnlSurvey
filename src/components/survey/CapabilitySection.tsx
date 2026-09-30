import { ChevronDown, Plus } from "lucide-react";
import { useState } from "react";
import { AddCustomRowEditor } from "@/components/survey/AddCustomRowEditor";
import { DataRow } from "@/components/survey/DataRow";
import type { SurveyNode } from "@/types/survey";

type CapabilitySectionProps = {
  currentValues: Record<string, string>;
  priorValues: Record<string, string>;
  expanded: Record<string, boolean>;
  isReadOnly?: boolean;
  node: SurveyNode;
  validationErrors?: Record<string, string>;
  selectedNodeId: string | null;
  commentaryValues: Record<string, string>;
  onCommentaryChange: (id: string, value: string) => void;
  onCurrentChange: (id: string, value: string) => void;
  onCustomRowAdd: (
    parentId: string,
    draft: { current: string; name: string; prior: string },
  ) => void;
  onPriorChange: (id: string, value: string) => void;
  onSelectNode: (node: SurveyNode) => void;
  onToggle: (id: string) => void;
};

const levelPadding: Record<SurveyNode["level"], string> = {
  1: "pl-4",
  2: "pl-8",
  3: "pl-14",
};

function hasChildren(node: SurveyNode) {
  return Boolean(node.children?.length);
}

export function CapabilitySection({
  currentValues,
  priorValues,
  expanded,
  isReadOnly = false,
  node,
  validationErrors = {},
  selectedNodeId,
  commentaryValues,
  onCommentaryChange,
  onCurrentChange,
  onCustomRowAdd,
  onPriorChange,
  onSelectNode,
  onToggle,
}: CapabilitySectionProps) {
  const isParent = hasChildren(node);
  const isOpen = expanded[node.id] ?? true;
  const [editingParentId, setEditingParentId] = useState<string | null>(null);

  if (node.level === 3) {
    return (
      <DataRow
        commentary={commentaryValues[node.id] ?? ""}
        currentValue={currentValues[node.id] ?? ""}
        error={validationErrors[node.id]}
        isReadOnly={isReadOnly}
        isSelected={selectedNodeId === node.id}
        node={node}
        onCommentaryChange={onCommentaryChange}
        onCurrentChange={onCurrentChange}
        onPriorChange={onPriorChange}
        onSelect={onSelectNode}
        priorValue={priorValues[node.id] ?? ""}
      />
    );
  }

  return (
    <>
      <button
        aria-expanded={isOpen}
        className={[
          "survey-grid w-full border-b border-[#EDEFF2] bg-white text-left text-[12px] leading-4 text-[#111827]",
          node.level === 1 ? "min-h-[42px] font-semibold" : "min-h-[40px] font-medium",
        ].join(" ")}
        onClick={() => onToggle(node.id)}
        type="button"
      >
        <span
          className={[
            "flex min-w-0 items-center gap-2 pr-3",
            levelPadding[node.level],
          ].join(" ")}
        >
          {isParent ? (
            <ChevronDown
              className={[
                "h-3.5 w-3.5 shrink-0 text-[#9CA3AF] transition-transform",
                isOpen ? "" : "-rotate-90",
              ].join(" ")}
              strokeWidth={2}
            />
          ) : null}
          <span className="truncate">{node.name}</span>
        </span>

        {node.level === 1 ? (
          <>
            <span className="text-center text-[12px] font-normal text-[#111827]">
              Prior ($m)
            </span>
            <span className="text-center text-[12px] font-normal text-[#111827]">
              Current ($m)
            </span>
            <span className="text-center text-[12px] font-normal text-[#111827]">
              Variance
            </span>
          </>
        ) : node.level === 2 ? (
          <>
            <span className="col-span-3 flex justify-end">
              {!isReadOnly ? (
                <span
                  className="inline-flex h-7 items-center gap-1.5 rounded-md border border-[#93C5FD] bg-white px-3 text-[12px] font-semibold text-[#2563EB] shadow-sm transition hover:bg-[#EFF6FF]"
                  onClick={(event) => {
                    event.stopPropagation();
                    if (!isOpen) {
                      onToggle(node.id);
                    }
                    setEditingParentId(node.id);
                  }}
                  onKeyDown={(event) => {
                    event.stopPropagation();
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      if (!isOpen) {
                        onToggle(node.id);
                      }
                      setEditingParentId(node.id);
                    }
                  }}
                  onMouseDown={(event) => event.stopPropagation()}
                  role="button"
                  tabIndex={0}
                >
                  <Plus className="h-3.5 w-3.5" strokeWidth={2.2} />
                  Add row
                </span>
              ) : null}
            </span>
          </>
        ) : (
          <>
            <span />
            <span />
            <span />
          </>
        )}
      </button>

      {isOpen
        ? node.children?.map((child) => (
            <CapabilitySection
              commentaryValues={commentaryValues}
              currentValues={currentValues}
              expanded={expanded}
              isReadOnly={isReadOnly}
              key={child.id}
              node={child}
              priorValues={priorValues}
              selectedNodeId={selectedNodeId}
              validationErrors={validationErrors}
              onCommentaryChange={onCommentaryChange}
              onCurrentChange={onCurrentChange}
              onCustomRowAdd={onCustomRowAdd}
              onPriorChange={onPriorChange}
              onSelectNode={onSelectNode}
              onToggle={onToggle}
            />
          ))
        : null}

      {isOpen && node.level === 2 && editingParentId === node.id ? (
        <AddCustomRowEditor
          editorId={node.id}
          existingRows={node.children ?? []}
          onCancel={() => setEditingParentId(null)}
          onSave={(draft) => {
            onCustomRowAdd(node.id, draft);
            setEditingParentId(null);
          }}
        />
      ) : null}
    </>
  );
}
