"use client";

import { useId, useState } from "react";
import { Info } from "lucide-react";

type InfoTooltipProps = {
  text: string;
};

export function InfoTooltip({ text }: InfoTooltipProps) {
  const id = useId();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <span className="relative inline-flex">
      <button
        aria-describedby={isOpen ? id : undefined}
        aria-label={text}
        className="inline-flex h-3.5 w-3.5 items-center justify-center rounded-full text-[#8191AC] outline-none transition hover:text-[#52627A] focus:text-[#52627A] focus:ring-1 focus:ring-[#B9C2D0]"
        onBlur={() => setIsOpen(false)}
        onClick={(event) => event.stopPropagation()}
        onFocus={() => setIsOpen(true)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        type="button"
      >
        <Info className="h-3.5 w-3.5" strokeWidth={2} />
      </button>
      {isOpen ? (
        <span
          className="absolute left-1/2 top-[calc(100%+6px)] z-[60] w-max max-w-[240px] -translate-x-1/2 rounded-md bg-[#111827] px-2.5 py-1.5 text-[10px] font-medium leading-4 text-white shadow-lg"
          id={id}
          role="tooltip"
        >
          {text}
        </span>
      ) : null}
    </span>
  );
}
