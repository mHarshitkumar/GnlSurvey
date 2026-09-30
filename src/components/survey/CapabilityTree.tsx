import { CapabilitySection } from "@/components/survey/CapabilitySection";
import type { SurveyNode } from "@/types/survey";

type CapabilityTreeProps = {
  currentValues: Record<string, string>;
  data: SurveyNode[];
  expanded: Record<string, boolean>;
  isReadOnly?: boolean;
  priorValues: Record<string, string>;
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

export function CapabilityTree({
  currentValues,
  data,
  expanded,
  isReadOnly = false,
  priorValues,
  validationErrors = {},
  selectedNodeId,
  commentaryValues,
  onCommentaryChange,
  onCurrentChange,
  onCustomRowAdd,
  onPriorChange,
  onSelectNode,
  onToggle,
}: CapabilityTreeProps) {
  return (
    <div className="pb-3">
      {data.map((node) => (
        <CapabilitySection
          commentaryValues={commentaryValues}
          currentValues={currentValues}
          expanded={expanded}
          isReadOnly={isReadOnly}
          key={node.id}
          node={node}
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
      ))}
    </div>
  );
}
