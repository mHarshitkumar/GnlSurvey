import { calculateVariance } from "@/components/survey/surveyMath";
import type { ReviewIssue, SurveyNode, SurveyWorkingState } from "@/types/survey";

type BuildReviewIssuesArgs = {
  capabilitySelections: Record<string, boolean>;
  nodes: SurveyNode[];
  workingState: SurveyWorkingState;
};

export function formatReviewVariance(variance: number) {
  const prefix = variance > 0 ? "+" : "";
  return `${prefix}${variance.toFixed(1)}%`;
}

function visitActiveRows(
  nodes: SurveyNode[],
  capabilitySelections: Record<string, boolean>,
  onRow: (row: SurveyNode) => void,
  active = true,
) {
  nodes.forEach((node) => {
    const isActiveCapability =
      node.level === 1 ? capabilitySelections[node.id] ?? true : active;

    if (!isActiveCapability) {
      return;
    }

    if (node.level === 3) {
      onRow(node);
      return;
    }

    visitActiveRows(node.children ?? [], capabilitySelections, onRow, isActiveCapability);
  });
}

function hasNumericValue(value: string | undefined) {
  return Number.isFinite(Number.parseFloat(value ?? ""));
}

export function buildReviewIssues({
  capabilitySelections,
  nodes,
  workingState,
}: BuildReviewIssuesArgs) {
  const issues: ReviewIssue[] = [];

  visitActiveRows(nodes, capabilitySelections, (row) => {
    const priorValue = workingState.priorValues[row.id];
    const currentValue = workingState.currentValues[row.id];

    if (!hasNumericValue(priorValue) || !hasNumericValue(currentValue)) {
      issues.push({
        capabilityId: row.id,
        description: "Prior and Current values are required before submission.",
        id: `required_values:${row.id}`,
        severity: "blocker",
        title: `Required values missing — ${row.name}`,
        type: "required_values_missing",
      });
      return;
    }

    const variance = calculateVariance(priorValue, currentValue);

    if (
      variance !== null &&
      Math.abs(variance) > 15 &&
      !workingState.commentaryValues[row.id]?.trim()
    ) {
      issues.push({
        capabilityId: row.id,
        description: `Variance of ${formatReviewVariance(
          variance,
        )} exceeds the ±15% threshold. Add a note explaining the change.`,
        id: `commentary_required:${row.id}`,
        severity: "blocker",
        title: `Commentary required — ${row.name}`,
        type: "commentary_required",
      });
    }
  });

  return issues;
}

