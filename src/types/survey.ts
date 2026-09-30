export type RiskLevel = "Low" | "Medium" | "High";

export type SurveyNode = {
  id: string;
  name: string;
  level: 1 | 2 | 3;
  prior?: number;
  current?: number;
  commentary?: string;
  deploymentModel?: string;
  hostingType?: string;
  strategicTechnology?: boolean;
  status?: string;
  annualBudget?: number;
  expectedSavings?: number;
  riskLevel?: RiskLevel;
  completion?: string;
  isCustom?: boolean;
  parentL2Id?: string;
  children?: SurveyNode[];
};

export type SurveyTab = {
  id: string;
  label: string;
};

export type L3DetailDraft = {
  current: string;
  commentary: string;
  deploymentModel: string;
  hostingType: string;
  strategicTechnology: boolean;
  status: string;
  annualBudget: string;
  expectedSavings: string;
  riskLevel: RiskLevel;
};

export type L3DetailState = Omit<L3DetailDraft, "annualBudget" | "expectedSavings"> & {
  annualBudget: number;
  expectedSavings: number;
};

export type SurveyWorkingState = {
  commentaryValues: Record<string, string>;
  currentValues: Record<string, string>;
  customRows: Record<string, SurveyNode[]>;
  detailValues: Record<string, L3DetailState>;
  expanded: Record<string, boolean>;
  priorValues: Record<string, string>;
};

export type SurveyStatus = "Draft" | "Submitted";

export type ReviewIssue = {
  capabilityId?: string;
  description: string;
  id: string;
  severity: "blocker" | "advisory";
  title: string;
  type: string;
};
