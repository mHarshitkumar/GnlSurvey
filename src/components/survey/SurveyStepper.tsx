import { Check } from "lucide-react";

type SurveyStepperProps = {
  currentStep: 1 | 2 | 3;
};

const steps = [
  { id: 1, label: "Capability Review" },
  { id: 2, label: "Working Data" },
  { id: 3, label: "Review & Submit" },
] as const;

export function SurveyStepper({ currentStep }: SurveyStepperProps) {
  return (
    <nav aria-label="Survey progress" className="my-5 flex items-center">
      {steps.map((step, index) => (
        <div
          className="flex min-w-0 flex-1 items-center last:flex-none"
          key={step.id}
        >
          <div className="flex shrink-0 items-center gap-2.5">
            <span
              className={[
                "flex h-8 w-8 items-center justify-center rounded-full text-[13px] font-semibold",
                step.id < currentStep
                  ? "bg-[#16A34A] text-white"
                  : step.id === currentStep
                    ? "bg-survey-orange text-white shadow-[0_0_0_3px_rgba(234,88,12,0.11)]"
                    : "bg-survey-step text-[#66809B]",
              ].join(" ")}
            >
              {step.id < currentStep ? (
                <Check className="h-4 w-4" strokeWidth={2.7} />
              ) : (
                step.id
              )}
            </span>
            <span
              className={[
                "whitespace-nowrap text-[13px] leading-5",
                step.id === currentStep
                  ? "font-semibold text-[#111827]"
                  : "font-medium text-[#52616F]",
              ].join(" ")}
            >
              {step.label}
            </span>
          </div>

          {index < steps.length - 1 ? (
            <span
              className={[
                "mx-5 h-px min-w-10 flex-1",
                step.id < currentStep ? "bg-[#16A34A]" : "bg-[#DDE6F0]",
              ].join(" ")}
            />
          ) : null}
        </div>
      ))}
    </nav>
  );
}
