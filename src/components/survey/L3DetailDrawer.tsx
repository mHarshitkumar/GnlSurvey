"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { CommentaryField } from "@/components/survey/CommentaryField";
import { InfoTooltip } from "@/components/survey/InfoTooltip";
import {
  calculateVariance,
  formatVariance,
  needsCommentary,
} from "@/components/survey/surveyMath";
import type { L3DetailDraft, L3DetailState, RiskLevel, SurveyNode } from "@/types/survey";

const deploymentModels = ["Multi-cloud", "Hybrid", "Private cloud", "Public cloud"];
const hostingTypes = ["IaaS", "PaaS", "SaaS", "On-prem", "Managed network", "Edge"];
const statuses = ["In Production", "Pilot", "Planned", "Retiring"];
const riskLevels: RiskLevel[] = ["Low", "Medium", "High"];
const fieldTooltips = {
  annualBudget: "Enter the annual budget allocated to this capability.",
  commentary:
    "Required when the absolute variance exceeds ±15%. Explain the reason for the change.",
  current: "Enter the current-year value for this capability.",
  deploymentModel: "Select the primary deployment model used for this capability.",
  expectedSavings: "Enter the expected savings associated with this capability.",
  hostingType: "Select the hosting arrangement used for this capability.",
  prior: "Previous-year value for this capability.",
  riskLevel: "Select the current risk level for this capability.",
  status: "Select the current operational status of this capability.",
  strategicTechnology:
    "Indicate whether this capability is considered strategically important.",
  variance: "Percentage change between Prior and Current values.",
};

type L3DetailDrawerProps = {
  breadcrumb: string[];
  commentary: string;
  currentValue: string;
  detail: L3DetailState;
  isReadOnly?: boolean;
  node: SurveyNode;
  onClose: () => void;
  onDelete?: (node: SurveyNode) => void;
  onSave: (nodeId: string, draft: L3DetailDraft) => void;
  priorValue: string;
};

function toDraft(
  currentValue: string,
  commentary: string,
  detail: L3DetailState,
): L3DetailDraft {
  return {
    ...detail,
    current: currentValue,
    commentary,
    annualBudget: detail.annualBudget.toFixed(1),
    expectedSavings: detail.expectedSavings.toFixed(1),
  };
}

function FieldLabel({
  children,
  required = false,
  tooltip,
}: {
  children: React.ReactNode;
  required?: boolean;
  tooltip: string;
}) {
  return (
    <span className="mb-1.5 flex items-center gap-1.5 text-[11px] font-semibold leading-4 text-[#24324B]">
      {children}
      <InfoTooltip text={tooltip} />
      {required ? <span className="text-[#EA580C]">*</span> : null}
    </span>
  );
}

function SelectField({
  label,
  onChange,
  options,
  readOnly = false,
  required,
  tooltip,
  value,
}: {
  label: string;
  onChange: (value: string) => void;
  options: string[];
  readOnly?: boolean;
  required?: boolean;
  tooltip: string;
  value: string;
}) {
  return (
    <label className="block">
      <FieldLabel required={required} tooltip={tooltip}>{label}</FieldLabel>
      <span className="relative block">
        <select
          className="h-9 w-full appearance-none rounded-md border border-[#D8DEE8] bg-white px-3 pr-9 text-[12px] text-[#0F172A] outline-none transition focus:border-[#93A3BA] focus:ring-2 focus:ring-[#E7EEF7]"
          disabled={readOnly}
          onChange={(event) => onChange(event.target.value)}
          value={value}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown
          aria-hidden="true"
          className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#66758F]"
          strokeWidth={2}
        />
      </span>
    </label>
  );
}

function CurrencyInput({
  label,
  onChange,
  readOnly = false,
  required,
  tooltip,
  value,
}: {
  label: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
  required?: boolean;
  tooltip: string;
  value: string;
}) {
  return (
    <label className="block">
      <FieldLabel required={required} tooltip={tooltip}>{label}</FieldLabel>
      <span className="flex h-9 overflow-hidden rounded-md border border-[#D8DEE8] bg-white focus-within:border-[#93A3BA] focus-within:ring-2 focus-within:ring-[#E7EEF7]">
        <span className="flex w-8 items-center justify-center border-r border-[#E5E7EB] bg-[#F8FAFC] text-[12px] text-[#64748B]">
          $
        </span>
        <input
          className="min-w-0 flex-1 bg-transparent px-3 text-[12px] text-[#0F172A] outline-none"
          inputMode="decimal"
          onChange={(event) => onChange?.(event.target.value)}
          readOnly={readOnly}
          step="0.1"
          type="number"
          value={value}
        />
      </span>
    </label>
  );
}

function RadioGroup<TValue extends string | boolean>({
  label,
  onChange,
  options,
  readOnly = false,
  required,
  tooltip,
  value,
}: {
  label: string;
  onChange: (value: TValue) => void;
  options: { label: string; tone?: "green" | "orange" | "red"; value: TValue }[];
  readOnly?: boolean;
  required?: boolean;
  tooltip: string;
  value: TValue;
}) {
  return (
    <fieldset>
      <FieldLabel required={required} tooltip={tooltip}>{label}</FieldLabel>
      <div className="flex flex-wrap gap-x-5 gap-y-2 pt-0.5">
        {options.map((option) => {
          const checked = option.value === value;
          const tone =
            option.tone === "green"
              ? "border-[#16A34A] bg-[#16A34A]"
              : option.tone === "red"
                ? "border-[#DC2626] bg-white"
                : "border-[#EA580C] bg-[#EA580C]";

          return (
            <label
              className="inline-flex cursor-pointer items-center gap-2 text-[12px] font-medium text-[#0F172A]"
              key={option.label}
            >
              <input
                checked={checked}
                className="sr-only"
                disabled={readOnly}
                onChange={() => onChange(option.value)}
                type="radio"
              />
              <span
                className={[
                  "flex h-4 w-4 items-center justify-center rounded-full border-2 transition",
                  checked ? tone : "border-[#A7B2C3] bg-white",
                ].join(" ")}
              >
                <span
                  className={[
                    "h-2 w-2 rounded-full",
                    checked
                      ? option.tone === "red"
                        ? "bg-[#DC2626]"
                        : "bg-white"
                      : "bg-transparent",
                  ].join(" ")}
                />
              </span>
              {option.label}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

export function L3DetailDrawer({
  breadcrumb,
  commentary,
  currentValue,
  detail,
  isReadOnly = false,
  node,
  onClose,
  onDelete,
  onSave,
  priorValue,
}: L3DetailDrawerProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [draft, setDraft] = useState<L3DetailDraft>(() =>
    toDraft(currentValue, commentary, detail),
  );

  useEffect(() => {
    window.setTimeout(() => closeButtonRef.current?.focus(), 0);
  }, [node.id]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const variance = calculateVariance(priorValue, draft.current);
  const requiresCommentary = needsCommentary(priorValue, draft.current);

  const setDraftField = <TKey extends keyof L3DetailDraft>(
    key: TKey,
    value: L3DetailDraft[TKey],
  ) => {
    setDraft((previous) => ({ ...previous, [key]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSave(node.id, draft);
  };

  return (
    <div aria-live="polite" className="fixed inset-0 z-50">
      <button
        aria-label="Close details panel"
        className="absolute inset-0 bg-[#0F172A]/10"
        onClick={onClose}
        type="button"
      />
      <aside
        aria-label={`${node.name} details`}
        aria-modal="true"
        className="absolute inset-y-0 right-0 flex h-full w-full max-w-[90vw] animate-[drawer-in_180ms_ease-out] flex-col border-l border-[#E5E7EB] bg-white shadow-[-12px_0_32px_rgba(15,23,42,0.12)] sm:w-[450px]"
        role="dialog"
      >
        <form className="flex min-h-0 flex-1 flex-col" onSubmit={handleSubmit}>
          <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h2 className="truncate text-[18px] font-semibold leading-6 text-[#0B1328]">
                  {node.name}
                </h2>
                <div className="mt-3 flex flex-wrap items-center gap-1.5 text-[11px] leading-4 text-[#66758F]">
                  {breadcrumb.map((item, index) => (
                    <span className="contents" key={item}>
                      <span>{item}</span>
                      {index < breadcrumb.length - 1 ? <span>&gt;</span> : null}
                    </span>
                  ))}
                </div>
              </div>

              <button
                aria-label="Close details panel"
                className="rounded-md p-1 text-[#24324B] outline-none transition hover:bg-[#F1F5F9] focus:ring-2 focus:ring-[#E7EEF7]"
                onClick={onClose}
                ref={closeButtonRef}
                type="button"
              >
                <X className="h-4 w-4" strokeWidth={2} />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <CurrencyInput
                label="Prior ($m)"
                readOnly
                tooltip={fieldTooltips.prior}
                value={priorValue}
              />
              <CurrencyInput
                label="Current ($m)"
                onChange={(value) => setDraftField("current", value)}
                readOnly={isReadOnly}
                tooltip={fieldTooltips.current}
                value={draft.current}
              />
              <label className="block">
                <FieldLabel tooltip={fieldTooltips.variance}>Variance</FieldLabel>
                <span
                  className={[
                    "flex h-9 items-center rounded-md border border-[#D8DEE8] bg-[#F8FAFC] px-3 text-[12px] font-semibold",
                    variance !== null && variance >= 0
                      ? "text-survey-red"
                      : "text-survey-green",
                  ].join(" ")}
                >
                  {formatVariance(variance)}
                </span>
              </label>
            </div>

            {requiresCommentary ? (
              <div className="mt-5 overflow-hidden rounded-md">
                <CommentaryField
                  infoTooltipText={fieldTooltips.commentary}
                  maxLength={500}
                  onChange={(value) => setDraftField("commentary", value)}
                  readOnly={isReadOnly}
                  value={draft.commentary}
                />
              </div>
            ) : null}

            <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-5">
              <SelectField
                label="Deployment Model"
                onChange={(value) => setDraftField("deploymentModel", value)}
                options={deploymentModels}
                readOnly={isReadOnly}
                required
                tooltip={fieldTooltips.deploymentModel}
                value={draft.deploymentModel}
              />
              <SelectField
                label="Hosting Type"
                onChange={(value) => setDraftField("hostingType", value)}
                options={hostingTypes}
                readOnly={isReadOnly}
                required
                tooltip={fieldTooltips.hostingType}
                value={draft.hostingType}
              />
              <RadioGroup
                label="Strategic Technology?"
                onChange={(value) => setDraftField("strategicTechnology", value)}
                options={[
                  { label: "Yes", value: true },
                  { label: "No", value: false },
                ]}
                readOnly={isReadOnly}
                required
                tooltip={fieldTooltips.strategicTechnology}
                value={draft.strategicTechnology}
              />
              <SelectField
                label="Status"
                onChange={(value) => setDraftField("status", value)}
                options={statuses}
                readOnly={isReadOnly}
                required
                tooltip={fieldTooltips.status}
                value={draft.status}
              />
              <CurrencyInput
                label="Annual Budget ($m)"
                onChange={(value) => setDraftField("annualBudget", value)}
                readOnly={isReadOnly}
                tooltip={fieldTooltips.annualBudget}
                value={draft.annualBudget}
              />
              <CurrencyInput
                label="Expected Savings ($m)"
                onChange={(value) => setDraftField("expectedSavings", value)}
                readOnly={isReadOnly}
                tooltip={fieldTooltips.expectedSavings}
                value={draft.expectedSavings}
              />
              <div className="col-span-2">
                <RadioGroup
                  label="Risk Level"
                  onChange={(value) => setDraftField("riskLevel", value)}
                  options={riskLevels.map((level) => ({
                    label: level,
                    tone:
                      level === "Low"
                        ? "green"
                        : level === "High"
                          ? "red"
                          : "orange",
                    value: level,
                  }))}
                  readOnly={isReadOnly}
                  required
                  tooltip={fieldTooltips.riskLevel}
                  value={draft.riskLevel}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3 border-t border-[#E5E7EB] px-5 py-4">
            <div>
              {node.isCustom && !isReadOnly && onDelete ? (
                <button
                  className="h-9 rounded-md border border-[#FECACA] bg-white px-4 text-[12px] font-semibold text-[#DC2626] transition hover:bg-[#FEF2F2] focus:outline-none focus:ring-2 focus:ring-red-100"
                  onClick={() => onDelete(node)}
                  type="button"
                >
                  Delete row
                </button>
              ) : null}
            </div>
            <div className="flex justify-end gap-3">
              <button
                className="h-9 rounded-md border border-[#D8DEE8] bg-white px-5 text-[12px] font-semibold text-[#0F172A] transition hover:bg-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-[#E7EEF7]"
                onClick={onClose}
                type="button"
              >
                {isReadOnly ? "Close" : "Cancel"}
              </button>
              {!isReadOnly ? (
                <button
                  className="h-9 rounded-md bg-[#EA580C] px-5 text-[12px] font-semibold text-white shadow-sm transition hover:bg-[#C2410C] focus:outline-none focus:ring-2 focus:ring-orange-200"
                  type="submit"
                >
                  Save changes
                </button>
              ) : null}
            </div>
          </div>
        </form>
      </aside>
    </div>
  );
}
