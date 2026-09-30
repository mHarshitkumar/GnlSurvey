import { surveyData } from "@/data/surveyData";
import type { SurveyNode, SurveyWorkingState } from "@/types/survey";

export function collectInitialWorkingState(nodes: SurveyNode[] = surveyData) {
  const priorValues: SurveyWorkingState["priorValues"] = {};
  const currentValues: SurveyWorkingState["currentValues"] = {};
  const commentaryValues: SurveyWorkingState["commentaryValues"] = {};
  const customRows: SurveyWorkingState["customRows"] = {};
  const detailValues: SurveyWorkingState["detailValues"] = {};
  const expanded: SurveyWorkingState["expanded"] = {};

  const visit = (node: SurveyNode) => {
    if (node.prior !== undefined) {
      priorValues[node.id] = node.prior.toFixed(1);
    }

    if (node.current !== undefined) {
      currentValues[node.id] = node.current.toFixed(1);
    }

    if (node.commentary !== undefined) {
      commentaryValues[node.id] = node.commentary;
    }

    if (node.level === 3) {
      const current = node.current?.toFixed(1) ?? "";
      const commentary = node.commentary ?? "";

      detailValues[node.id] = {
        annualBudget: node.annualBudget ?? node.current ?? 0,
        commentary,
        current,
        deploymentModel: node.deploymentModel ?? "Hybrid",
        expectedSavings: node.expectedSavings ?? 0,
        hostingType: node.hostingType ?? "IaaS",
        riskLevel: node.riskLevel ?? "Medium",
        status: node.status ?? "In Production",
        strategicTechnology: node.strategicTechnology ?? false,
      };
    }

    if (node.children?.length) {
      expanded[node.id] = true;
      node.children.forEach(visit);
    }
  };

  nodes.forEach(visit);

  return {
    priorValues,
    currentValues,
    commentaryValues,
    customRows,
    detailValues,
    expanded,
  };
}

export function mergeCustomRowsIntoSurveyData(
  nodes: SurveyNode[],
  customRows: SurveyWorkingState["customRows"],
): SurveyNode[] {
  return nodes.map((node) => {
    const mergedChildren = node.children
      ? mergeCustomRowsIntoSurveyData(node.children, customRows)
      : undefined;

    if (node.level === 2) {
      return {
        ...node,
        children: [...(mergedChildren ?? []), ...(customRows[node.id] ?? [])],
      };
    }

    return {
      ...node,
      children: mergedChildren,
    };
  });
}

export function findSelectedContext(
  nodes: SurveyNode[],
  id: string | null,
  parents: string[] = ["Core Technology"],
): { breadcrumb: string[]; node: SurveyNode } | null {
  if (!id) {
    return null;
  }

  for (const node of nodes) {
    if (node.id === id && node.level === 3) {
      return { breadcrumb: parents, node };
    }

    if (node.children?.length) {
      const found = findSelectedContext(node.children, id, [...parents, node.name]);

      if (found) {
        return found;
      }
    }
  }

  return null;
}

export function parseFormNumber(value: string, fallback: number) {
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}
