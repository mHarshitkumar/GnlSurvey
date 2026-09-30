import Image from "next/image";
import { Building2, LayoutGrid, LineChart, Route } from "lucide-react";
import { SidebarItem } from "@/components/layout/SidebarItem";
import { UserProfileCard } from "@/components/layout/UserProfileCard";

type SidebarProps = {
  isOpen: boolean;
};

export function Sidebar({ isOpen }: SidebarProps) {
  return (
    <aside
      className={[
        "fixed inset-y-0 left-0 z-40 flex w-[280px] flex-col border-r border-[#E5E7EB] bg-white transition-transform duration-200 lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full",
      ].join(" ")}
    >
      <div className="flex h-[76px] items-center px-5">
        <Image
          alt="PwC"
          className="h-auto w-[82px]"
          height={58}
          priority
          src="/pwc-logo.png"
          width={118}
        />
      </div>

      <nav className="mt-4 space-y-2 px-3.5">
        <SidebarItem icon={LayoutGrid} label="Dashboard" />
        <SidebarItem icon={Route} label="Programme Roadmaps" />
        <SidebarItem icon={Building2} label="Member Firm Profile" />
        <SidebarItem active icon={LineChart} label="Labour & Cost Insights" />
      </nav>

      <div className="mt-auto">
        <UserProfileCard />
      </div>
    </aside>
  );
}
