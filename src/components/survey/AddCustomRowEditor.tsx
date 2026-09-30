import { AlertTriangle, Check, GripVertical, X } from "lucide-react";
import { FormEvent, SyntheticEvent, useEffect, useMemo, useState } from "react";
import { calculateVariance, formatVariance } from "@/components/survey/surveyMath";
import type { SurveyNode } from "@/types/survey";

type AddCustomRowEditorProps = {
  editorId: string;
  existingRows: SurveyNode[];
  onCancel: () => void;
  onSave: (draft: { current: string; name: string; prior: string }) => void;
};

export function AddCustomRowEditor({
  editorId,
  existingRows,
  onCancel,
  onSave,
}: AddCustomRowEditorProps) {
  const [name, setName] = useState("");
  const [prior, setPrior] = useState("");
  const [current, setCurrent] = useState("");
  const [error, setError] = useState("");
  const variance = calculateVariance(prior, current);
  const requiresCommentary = variance !== null && Math.abs(variance) > 15;
  const duplicateNames = useMemo(
    () => new Set(existingRows.map((row) => row.name.trim().toLowerCase())),
    [existingRows],
  );

  useEffect(() => {
    const editorElement = document.getElementById(`new-row-editor-${editorId}`);

    editorElement?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    const focusFrame = window.requestAnimationFrame(() => {
      document.getElementById(`new-row-name-${editorId}`)?.focus();
    });

    return () => window.cancelAnimationFrame(focusFrame);
  }, [editorId]);

  const varianceColor =
    variance === null
      ? "text-survey-muted"
      : variance >= 0
        ? "text-survey-red"
        : "text-survey-green";

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedName = name.trim();

    if (!trimmedName) {
      setError("Name is required.");
      return;
    }

    if (duplicateNames.has(trimmedName.toLowerCase())) {
      setError("A row with this name already exists under this section.");
      return;
    }

    if (!Number.isFinite(Number.parseFloat(prior))) {
      setError("Prior value is required.");
      return;
    }

    if (!Number.isFinite(Number.parseFloat(current))) {
      setError("Current value is required.");
      return;
    }

    onSave({ current, name: trimmedName, prior });
  };

  const stopPropagation = (event: SyntheticEvent) => event.stopPropagation();

  return (
    <form onSubmit={handleSubmit}>
      <div
        className="survey-grid min-h-[44px] scroll-mt-32 border-b border-[#DCEBFF] bg-[#EAF4FF] text-[12px] leading-4"
        id={`new-row-editor-${editorId}`}
      >
        <div className="flex min-w-0 items-center gap-3 pl-[70px] pr-3">
          <GripVertical className="h-4 w-4 shrink-0 text-[#64748B]" strokeWidth={2} />
          <input
            aria-label="Custom row name"
            className="h-7 min-w-0 flex-1 rounded-md border border-[#CBD5E1] bg-white px-3 text-[12px] text-[#111827] outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100"
            id={`new-row-name-${editorId}`}
            onChange={(event) => {
              setName(event.target.value);
              setError("");
            }}
            onClick={stopPropagation}
            onKeyDown={stopPropagation}
            onMouseDown={stopPropagation}
            placeholder="Enter capability / technology name..."
            value={name}
          />
          <span className="shrink-0 rounded-full bg-[#DBEAFE] px-2 py-0.5 text-[10px] font-semibold text-[#2563EB]">
            Custom
          </span>
          <span className="ml-auto flex shrink-0 items-center gap-1.5">
            <button
              aria-label="Save custom row"
              className="flex h-7 w-7 items-center justify-center rounded-md bg-[#2563EB] text-white transition hover:bg-[#1D4ED8]"
              onClick={stopPropagation}
              type="submit"
            >
              <Check className="h-4 w-4" strokeWidth={2.2} />
            </button>
            <button
              aria-label="Cancel custom row"
              className="flex h-7 w-7 items-center justify-center rounded-md border border-[#CBD5E1] bg-white text-[#64748B] transition hover:bg-[#F8FAFC]"
              onClick={(event) => {
                event.stopPropagation();
                onCancel();
              }}
              type="button"
            >
              <X className="h-4 w-4" strokeWidth={2} />
            </button>
          </span>
        </div>
        <div className="flex justify-center">
          <input
            aria-label="Custom row prior value"
            className="current-value-input h-7 rounded-md border border-[#CBD5E1] bg-white px-2 text-center text-[11px] font-medium text-[#111827] outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100"
            inputMode="decimal"
            onChange={(event) => {
              setPrior(event.target.value);
              setError("");
            }}
            onClick={stopPropagation}
            onKeyDown={stopPropagation}
            onMouseDown={stopPropagation}
            step="0.1"
            type="number"
            value={prior}
          />
        </div>
        <div className="flex justify-center">
          <input
            aria-label="Custom row current value"
            className="current-value-input h-7 rounded-md border border-[#2563EB] bg-white px-2 text-center text-[11px] font-medium text-[#111827] outline-none focus:ring-2 focus:ring-blue-100"
            inputMode="decimal"
            onChange={(event) => {
              setCurrent(event.target.value);
              setError("");
            }}
            onClick={stopPropagation}
            onKeyDown={stopPropagation}
            onMouseDown={stopPropagation}
            step="0.1"
            type="number"
            value={current}
          />
        </div>
        <div className="flex items-center justify-center">
          <span className={`text-[12px] font-semibold ${varianceColor}`}>
            {variance === null ? "—" : formatVariance(variance)}
          </span>
          {requiresCommentary ? (
            <AlertTriangle
              className="ml-1.5 h-4 w-4 text-[#F97316]"
              strokeWidth={1.8}
            />
          ) : null}
        </div>
      </div>
      {error ? (
        <div className="border-b border-[#FECACA] bg-[#FEF2F2] px-4 py-2 pl-[102px] text-[11px] font-medium text-[#DC2626]">
          {error}
        </div>
      ) : null}
    </form>
  );
}

