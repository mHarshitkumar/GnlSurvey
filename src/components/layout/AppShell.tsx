"use client";

import { useState } from "react";
import { AppHeader } from "@/components/layout/AppHeader";
import { Sidebar } from "@/components/layout/Sidebar";

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F6F8] text-[#111827]">
      <Sidebar isOpen={sidebarOpen} />
      {sidebarOpen ? (
        <button
          aria-label="Close navigation"
          className="fixed inset-0 z-30 bg-slate-950/20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
          type="button"
        />
      ) : null}
      <div className="min-h-screen lg:pl-[280px]">
        <AppHeader onMenuClick={() => setSidebarOpen((isOpen) => !isOpen)} />
        {children}
      </div>
    </div>
  );
}
