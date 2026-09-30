import { AlertCircle, ArrowRight, CheckCircle2, LayoutGrid } from "lucide-react";
import type { ReviewIssue, SurveyStatus } from "@/types/survey";

type ReviewSubmitSectionProps = {
  activeCapabilitiesCount: number;
  issues: ReviewIssue[];
  onIssueSelect: (capabilityId: string) => void;
  status: SurveyStatus;
};

function SummaryCard({
  label,
  tone,
  value,
}: {
  label: string;
  tone: "dark" | "green" | "red";
  value: number;
}) {
  const numberColor =
    tone === "red"
      ? "text-[#DC2626]"
      : tone === "green"
        ? "text-[#16A34A]"
        : "text-[#111827]";

  return (
    <div className="flex h-[86px] flex-1 flex-col items-center justify-center rounded-lg border border-[#E5E7EB] bg-white text-center">
      <div className={`text-[22px] font-bold leading-7 ${numberColor}`}>{value}</div>
      <div className="mt-1 text-[12px] leading-4 text-[#6B7280]">{label}</div>
    </div>
  );
}

export function ReviewSubmitSection({
  activeCapabilitiesCount,
  issues,
  onIssueSelect,
  status,
}: ReviewSubmitSectionProps) {
  const blockers = issues.filter((issue) => issue.severity === "blocker");
  const advisories = issues.filter((issue) => issue.severity === "advisory");
  const isSubmitted = status === "Submitted";

  return (
    <section className="overflow-hidden rounded-lg border border-survey-border bg-white shadow-card">
      <div className="flex items-start gap-3 border-b border-survey-border px-5 py-[18px]">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-survey-orangeSoft text-survey-orange">
          <LayoutGrid className="h-4 w-4" strokeWidth={2} />
        </div>
        <div className="min-w-0">
          <h2 className="text-[13px] font-semibold leading-4 text-[#0F172A]">
            Section 3 &middot; Review &amp; Submit
          </h2>
          <p className="mt-1 text-[11px] leading-4 text-[#374151]">
            Resolve blockers before submitting. Advisories are optional but recommended.
          </p>
        </div>
      </div>

      <div className="space-y-6 p-6">
        {isSubmitted ? (
          <div className="flex items-start gap-3 rounded-lg border border-[#BBF7D0] bg-[#F0FDF4] px-4 py-3 text-[#166534]">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2} />
            <div>
              <h3 className="text-[13px] font-semibold leading-5">Survey submitted</h3>
              <p className="text-[12px] leading-5 text-[#3F6F4C]">
                Your responses are now read-only unless an administrator raises a query.
              </p>
            </div>
          </div>
        ) : null}

        <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
          <SummaryCard label="Blockers" tone="red" value={blockers.length} />
          <SummaryCard label="Advisories" tone="green" value={advisories.length} />
          <SummaryCard
            label="Active capabilities"
            tone="dark"
            value={activeCapabilitiesCount}
          />
        </div>

        <div>
          <div className="mb-3 flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-[#EF4444]" strokeWidth={2} />
            <h3 className="text-[14px] font-semibold leading-5 text-[#111827]">
              Blockers
            </h3>
            <span className="rounded-full bg-[#FEF2F2] px-2 py-0.5 text-[11px] font-semibold text-[#DC2626]">
              {blockers.length}
            </span>
          </div>

          {blockers.length ? (
            <div className="space-y-3">
              {blockers.map((issue) => (
                <article
                  className="flex items-center gap-4 rounded-lg border border-[#EEF0F3] border-l-2 border-l-[#EF4444] bg-white px-5 py-4"
                  key={issue.id}
                >
                  <AlertCircle
                    className="h-4 w-4 shrink-0 text-[#EF4444]"
                    strokeWidth={2}
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="truncate text-[13px] font-semibold leading-5 text-[#111827]">
                      {issue.title}
                    </h4>
                    <p className="mt-1 text-[12px] leading-4 text-[#6B7280]">
                      {issue.description}
                    </p>
                  </div>
                  {issue.capabilityId ? (
                    <button
                      className="inline-flex shrink-0 items-center gap-1 text-[12px] font-semibold text-[#B33A00] transition hover:text-[#8F2D00]"
                      onClick={() => onIssueSelect(issue.capabilityId as string)}
                      type="button"
                    >
                      Go to issue
                      <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                    </button>
                  ) : null}
                </article>
              ))}
            </div>
          ) : (
            <div className="flex items-start gap-3 rounded-lg border border-[#BBF7D0] bg-[#F0FDF4] px-4 py-3">
              <CheckCircle2
                className="mt-0.5 h-4 w-4 shrink-0 text-[#16A34A]"
                strokeWidth={2}
              />
              <div>
                <h4 className="text-[13px] font-semibold leading-5 text-[#166534]">
                  No blockers found
                </h4>
                <p className="text-[12px] leading-5 text-[#3F6F4C]">
                  All required survey information has been completed.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

