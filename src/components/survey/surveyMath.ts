function toNumber(value: string | number | undefined) {
  if (typeof value === "number") {
    return value;
  }

  const parsed = Number.parseFloat(value ?? "");
  return Number.isFinite(parsed) ? parsed : null;
}

export function calculateVariance(
  priorValue: string | number | undefined = 0,
  currentValue: string | number,
) {
  const prior = toNumber(priorValue);
  const current =
    typeof currentValue === "number"
      ? currentValue
      : Number.parseFloat(currentValue);

  if (prior === null || !Number.isFinite(current) || prior === 0) {
    return null;
  }

  return ((current - prior) / prior) * 100;
}

export function needsCommentary(
  priorValue: string | number | undefined,
  currentValue: string | number,
) {
  const variance = calculateVariance(priorValue, currentValue);
  return variance !== null && Math.abs(Number(variance.toFixed(1))) > 15;
}

export function formatVariance(variance: number | null) {
  if (variance === null) {
    return "-";
  }

  const prefix = variance > 0 ? "+" : "";
  return `${prefix}${variance.toFixed(1)}%`;
}
