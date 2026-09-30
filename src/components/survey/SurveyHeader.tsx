import { Circle } from "lucide-react";

export function SurveyHeader() {
  return (
    <header className="flex items-start justify-between gap-4">
      <div>
        <h1 className="text-[20px] font-bold leading-6 tracking-normal text-[#07111f]">
          Annual Labour & Cost Survey
        </h1>
        <p className="mt-1 text-[12px] leading-4 text-survey-muted">
          FY26 &middot; Territory: UK
        </p>
      </div>

      <div className="mt-1 inline-flex h-8 items-center gap-2 rounded-full bg-[#EEF7FF] px-3 text-[12px] font-semibold text-[#5A718A]">
        <Circle className="h-3.5 w-3.5 fill-transparent stroke-[#7D96B1]" strokeWidth={2} />
        Auto-save on
      </div>
    </header>
  );
}
