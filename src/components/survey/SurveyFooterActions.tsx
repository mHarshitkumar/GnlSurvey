import { ArrowLeft, ArrowRight, Save } from "lucide-react";

type SurveyFooterActionsProps = {
  continueLabel?: string;
  continueDisabled?: boolean;
  continueTitle?: string;
  onBack?: () => void;
  onContinue: () => void;
  onExit: () => void;
  onSaveLater: () => void;
  savedMessage?: string;
  showContinueArrow?: boolean;
  showBack?: boolean;
};

export function SurveyFooterActions({
  continueLabel = "Save & continue",
  continueDisabled = false,
  continueTitle,
  onBack,
  onContinue,
  onExit,
  onSaveLater,
  savedMessage,
  showContinueArrow = true,
  showBack = true,
}: SurveyFooterActionsProps) {
  return (
    <div className="sticky bottom-0 z-20 -mx-10 mt-8 border-t border-[#E5E7EB] bg-[#F5F6F8] px-8 py-4 max-md:-mx-5 max-md:px-5">
      <div className="flex items-center justify-between gap-4 max-md:flex-col max-md:items-stretch">
        <div className="flex items-center gap-3 max-sm:flex-wrap">
          <button
            className="inline-flex h-11 items-center gap-2 rounded-lg border border-[#E5E7EB] bg-white px-5 text-[13px] font-semibold text-[#5F6368] shadow-sm transition hover:bg-[#F8FAFC]"
            onClick={onSaveLater}
            type="button"
          >
            <Save className="h-4 w-4" strokeWidth={1.8} />
            Save &amp; Continue Later
          </button>
          <button
            className="h-11 rounded-lg border border-[#E5E7EB] bg-white px-5 text-[13px] font-semibold text-[#5F6368] shadow-sm transition hover:bg-[#F8FAFC]"
            onClick={onExit}
            type="button"
          >
            Exit
          </button>
          {savedMessage ? (
            <span className="text-[12px] font-medium text-[#15803D]">
              {savedMessage}
            </span>
          ) : null}
        </div>

        <div className="flex items-center justify-end gap-3 max-sm:justify-start">
          {showBack ? (
            <button
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-[#E5E7EB] bg-white px-5 text-[13px] font-semibold text-[#111827] shadow-sm transition hover:bg-[#F8FAFC]"
              onClick={onBack}
              type="button"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={1.8} />
              Back
            </button>
          ) : null}
          <button
            className={[
              "inline-flex h-11 items-center gap-2 rounded-lg px-6 text-[13px] font-semibold shadow-sm transition",
              continueDisabled
                ? "cursor-not-allowed bg-[#D1D5DB] text-[#6B7280]"
                : "bg-[#D94F00] text-white hover:bg-[#B94700]",
            ].join(" ")}
            disabled={continueDisabled}
            onClick={onContinue}
            title={continueTitle}
            type="button"
          >
            {continueLabel}
            {showContinueArrow ? (
              <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
            ) : null}
          </button>
        </div>
      </div>
    </div>
  );
}
