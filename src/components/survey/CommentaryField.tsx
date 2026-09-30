import { AlertTriangle } from "lucide-react";
import { InfoTooltip } from "@/components/survey/InfoTooltip";

type CommentaryFieldProps = {
  error?: string;
  value: string;
  onChange: (value: string) => void;
  maxLength?: number;
  infoTooltipText?: string;
  requiresCommentary?: boolean;
  readOnly?: boolean;
};

export function CommentaryField({
  error,
  value,
  onChange,
  infoTooltipText,
  maxLength,
  readOnly = false,
  requiresCommentary = true,
}: CommentaryFieldProps) {
  return (
    <div
      className={[
        "px-4 py-2 max-[420px]:px-3",
        requiresCommentary
          ? "border-y border-[#FED7AA] bg-survey-warning"
          : "border-y border-[#E5E7EB] bg-white",
      ].join(" ")}
    >
      {requiresCommentary ? (
        <div className="mb-1.5 flex items-center gap-2 text-[11px] font-medium leading-4 text-[#C2410C]">
          <AlertTriangle className="h-4 w-4 shrink-0" strokeWidth={1.8} />
          <span>Commentary required &mdash; variance exceeds &plusmn;15%</span>
          {infoTooltipText ? <InfoTooltip text={infoTooltipText} /> : null}
        </div>
      ) : null}
      <textarea
        aria-label="Variance commentary"
        className={[
          "h-[52px] w-full resize-y rounded-md bg-white px-3 py-2 text-[11px] leading-4 text-survey-text outline-none placeholder:text-[#6B7280] focus:ring-2",
          requiresCommentary
            ? "border border-[#F97316] focus:ring-orange-100"
            : "border border-[#E5E7EB] focus:border-[#B9C2D0] focus:ring-slate-100",
        ].join(" ")}
        maxLength={maxLength}
        onChange={(event) => {
          if (!readOnly) {
            onChange(event.target.value);
          }
        }}
        onClick={(event) => event.stopPropagation()}
        onKeyDown={(event) => event.stopPropagation()}
        onMouseDown={(event) => event.stopPropagation()}
        placeholder="Explain the change (e.g. new contract, migration, decommission)..."
        readOnly={readOnly}
        value={value}
      />
      {error ? (
        <p className="mt-1 text-[11px] font-medium leading-4 text-[#DC2626]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
