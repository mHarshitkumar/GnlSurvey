"use client";

import { Check, Lock } from "lucide-react";
import type { CapabilityReviewItem } from "@/data/capabilityReviewData";

type CapabilityReviewSectionProps = {
  capabilities: CapabilityReviewItem[];
  isReadOnly?: boolean;
  selections: Record<string, boolean>;
  onSelectionChange: (id: string, isActive: boolean) => void;
};

export function CapabilityReviewSection({
  capabilities,
  isReadOnly = false,
  selections,
  onSelectionChange,
}: CapabilityReviewSectionProps) {
  return (
    <section className="overflow-hidden rounded-lg border border-survey-border bg-white shadow-card">
      <div className="flex items-start gap-3 border-b border-survey-border px-5 py-4">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-survey-orangeSoft text-survey-orange">
          <span className="flex h-4 w-4 flex-col justify-between">
            <span className="h-1 rounded-sm border border-current" />
            <span className="h-1 rounded-sm border border-current" />
            <span className="h-1 rounded-sm border border-current" />
          </span>
        </div>
        <div className="min-w-0">
          <h2 className="text-[13px] font-semibold leading-4 text-[#0F172A]">
            Section 1 &middot; Capability Review
          </h2>
          <p className="mt-1 text-[12px] leading-4 text-[#374151]">
            Mark each capability Active or Not Applicable. Required capabilities are always in scope.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 p-5 max-lg:grid-cols-1">
        {capabilities.map((capability) => {
          const isActive = selections[capability.id] ?? true;

          return (
            <article
              className="rounded-lg border border-[#FDBA74] bg-white p-4"
              key={capability.id}
            >
              <div className="mb-1.5 flex items-center gap-2">
                <h3 className="text-[16px] font-semibold leading-5 text-[#111827]">
                  {capability.name}
                </h3>
                {capability.required ? (
                  <span className="rounded bg-[#FFF7ED] px-2 py-0.5 text-[11px] font-bold uppercase leading-4 text-[#9A3412]">
                    Required
                  </span>
                ) : null}
              </div>
              <p className="mb-3 text-[13px] leading-5 text-[#6B7280]">
                {capability.description}
              </p>

              <div className="mb-3 flex h-11 overflow-hidden rounded-lg border border-[#E5E7EB] bg-[#EEF2F6] p-1">
                <button
                  className={[
                    "h-full rounded-md px-4 text-[13px] font-semibold transition",
                    isActive ? "bg-[#16A34A] text-white" : "text-[#5F6B7A]",
                  ].join(" ")}
                  disabled={isReadOnly}
                  onClick={() => onSelectionChange(capability.id, true)}
                  type="button"
                >
                  Active
                </button>
                <button
                  className={[
                    "h-full rounded-md px-4 text-[13px] font-semibold transition",
                    !isActive
                      ? "bg-white text-[#111827] shadow-sm"
                      : capability.required
                        ? "cursor-not-allowed text-[#B9BDC4]"
                        : "text-[#5F6B7A]",
                  ].join(" ")}
                  disabled={capability.required || isReadOnly}
                  onClick={() => onSelectionChange(capability.id, false)}
                  type="button"
                >
                  Not Applicable
                </button>
              </div>

              <div className="flex items-center gap-2 text-[12px] leading-4 text-[#6B7280]">
                {capability.required ? (
                  <>
                    <Lock className="h-3.5 w-3.5" strokeWidth={1.8} />
                    Required capability &mdash; cannot be marked Not Applicable.
                  </>
                ) : isActive ? (
                  <>
                    <Check className="h-3.5 w-3.5" strokeWidth={1.8} />
                    Working-data lines for this capability will be enabled in Section 2.
                  </>
                ) : (
                  <>
                    <Check className="h-3.5 w-3.5" strokeWidth={1.8} />
                    Capability will be excluded from Section 2.
                  </>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
