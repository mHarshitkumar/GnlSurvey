import type { LucideIcon } from "lucide-react";

type SidebarItemProps = {
  active?: boolean;
  icon: LucideIcon;
  label: string;
};

export function SidebarItem({ active = false, icon: Icon, label }: SidebarItemProps) {
  return (
    <button
      className={[
        "flex h-[46px] w-full items-center gap-3.5 rounded-[10px] px-4 text-left text-[15px] font-semibold transition-colors",
        active
          ? "bg-[#FBD9CB] text-[#8A1F0A]"
          : "text-[#1F2937] hover:bg-[#F8FAFC]",
      ].join(" ")}
      type="button"
    >
      <Icon
        className={active ? "text-[#D04A02]" : "text-[#8C9197]"}
        size={20}
        strokeWidth={1.9}
      />
      <span>{label}</span>
    </button>
  );
}
