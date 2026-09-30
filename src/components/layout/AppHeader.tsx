"use client";

import { Bell, ChevronDown, Menu } from "lucide-react";

type AppHeaderProps = {
  onMenuClick: () => void;
};

export function AppHeader({ onMenuClick }: AppHeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-[76px] items-center justify-between border-b border-[#E5E7EB] bg-white px-7">
      <div className="flex min-w-0 items-center gap-5">
        <button
          aria-label="Toggle navigation"
          className="rounded-md p-1 text-[#595F66] transition-colors hover:bg-[#F3F4F6] focus:outline-none focus:ring-2 focus:ring-[#D1D5DB]"
          onClick={onMenuClick}
          type="button"
        >
          <Menu className="h-5 w-5" strokeWidth={1.8} />
        </button>
        <h1 className="truncate text-[17px] font-semibold leading-6 text-[#252525]">
          Global Tech &amp; NIS Leadership Platform
        </h1>
      </div>

      <div className="flex items-center gap-5">
        <button
          className="flex h-10 items-center gap-3 rounded-[10px] border border-[#E5E7EB] bg-white px-4 text-[15px] font-semibold text-[#4B4B4B] shadow-[0_2px_7px_rgba(15,23,42,0.10)]"
          type="button"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-[#D04A02]" />
          Global Leadership
          <ChevronDown className="h-4 w-4 text-[#7A828A]" strokeWidth={1.8} />
        </button>

        <button
          aria-label="Notifications"
          className="relative rounded-md p-1.5 text-[#5F6368] transition-colors hover:bg-[#F3F4F6] focus:outline-none focus:ring-2 focus:ring-[#D1D5DB]"
          type="button"
        >
          <Bell className="h-5 w-5" strokeWidth={1.7} />
          <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#D04A02] px-1 text-[11px] font-bold leading-none text-white">
            6
          </span>
        </button>
      </div>
    </header>
  );
}
