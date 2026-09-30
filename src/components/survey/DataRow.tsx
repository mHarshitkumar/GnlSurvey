import { AlertTriangle } from "lucide-react";
import { CommentaryField } from "@/components/survey/CommentaryField";
import {
  calculateVariance,
  formatVariance,
  needsCommentary,
} from "@/components/survey/surveyMath";
import type { SurveyNode } from "@/types/survey";

type DataRowProps = {
  node: SurveyNode;
  priorValue: string;
  currentValue: string;
  commentary: string;
  error?: string;
  isReadOnly?: boolean;
  isSelected: boolean;
  onCommentaryChange: (id: string, value: string) => void;
  onCurrentChange: (id: string, value: string) => void;
  onPriorChange: (id: string, value: string) => void;
  onSelect: (node: SurveyNode) => void;
};

export function DataRow({
  node,
  priorValue,
  currentValue,
  commentary,
  error,
  isReadOnly = false,
  isSelected,
  onCommentaryChange,
  onCurrentChange,
  onPriorChange,
  onSelect,
}: DataRowProps) {
  const variance = calculateVariance(priorValue, currentValue);
  const requiresCommentary = needsCommentary(priorValue, currentValue);
  const varianceColor =
    variance === null
      ? "text-survey-muted"
      : variance >= 0
        ? "text-survey-red"
        : "text-survey-green";

  return (
    <>
      <div
        aria-label={`Open details for ${node.name}`}
        className={[
          "survey-grid min-h-[44px] cursor-pointer border-b border-[#EEF0F3] text-[12px] leading-4 transition-colors",
          isSelected
            ? "bg-[#EAF4FF]"
            : requiresCommentary
              ? "bg-[#FFFDF6] hover:bg-[#FFF9ED]"
              : "bg-white hover:bg-[#F8FBFF]",
        ].join(" ")}
        onClick={() => onSelect(node)}
        id={`survey-row-${node.id}`}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onSelect(node);
          }
        }}
        role="button"
        tabIndex={0}
      >
        <div className="flex min-w-0 items-center gap-2 pl-[54px] pr-3 text-[#223044] sm:pl-[56px]">
          <span className="truncate">{node.name}</span>
          {node.isCustom ? (
            <span className="shrink-0 rounded-full bg-[#DBEAFE] px-2 py-0.5 text-[10px] font-semibold text-[#2563EB]">
              Custom
            </span>
          ) : null}
        </div>
        <div className="flex justify-center">
          <input
            aria-label={`${node.name} prior value`}
            className="current-value-input h-7 rounded-md border border-survey-border bg-white px-2 text-center text-[11px] font-medium text-[#111827] outline-none transition focus:border-[#B9C2D0] focus:ring-2 focus:ring-slate-100"
            inputMode="decimal"
            onChange={(event) => {
              if (!isReadOnly) {
                onPriorChange(node.id, event.target.value);
              }
            }}
            onClick={(event) => event.stopPropagation()}
            onKeyDown={(event) => event.stopPropagation()}
            onMouseDown={(event) => event.stopPropagation()}
            readOnly={isReadOnly}
            step="0.1"
            type="number"
            value={priorValue}
          />
        </div>
        <div className="flex justify-center">
          <input
            aria-label={`${node.name} current value`}
            className={[
              "current-value-input h-7 rounded-md border bg-white px-2 text-center text-[11px] font-medium text-[#111827] outline-none transition focus:ring-2",
              requiresCommentary
                ? "border-[#F97316] focus:ring-orange-100"
                : "border-survey-border focus:border-[#B9C2D0] focus:ring-slate-100",
            ].join(" ")}
            inputMode="decimal"
            onChange={(event) => {
              if (!isReadOnly) {
                onCurrentChange(node.id, event.target.value);
              }
            }}
            onClick={(event) => event.stopPropagation()}
            onKeyDown={(event) => event.stopPropagation()}
            onMouseDown={(event) => event.stopPropagation()}
            readOnly={isReadOnly}
            type="number"
            step="0.1"
            value={currentValue}
          />
        </div>
        <div
          className={[
            "flex items-center justify-center gap-1.5 text-[12px] font-semibold",
            varianceColor,
          ].join(" ")}
        >
          <span>{formatVariance(variance)}</span>
          {requiresCommentary ? (
            <AlertTriangle className="h-4 w-4 text-[#F97316]" strokeWidth={1.8} />
          ) : null}
        </div>
      </div>

      {requiresCommentary ? (
        <CommentaryField
          error={error}
          onChange={(value) => onCommentaryChange(node.id, value)}
          readOnly={isReadOnly}
          value={commentary}
        />
      ) : error ? (
        <div className="border-b border-[#FECACA] bg-[#FEF2F2] px-4 py-2 text-[11px] font-medium leading-4 text-[#DC2626] max-[420px]:px-3">
          {error}
        </div>
      ) : null}
    </>
  );
}
