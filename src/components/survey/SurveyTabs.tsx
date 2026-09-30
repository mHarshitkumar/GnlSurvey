import type { SurveyTab } from "@/types/survey";

type SurveyTabsProps = {
  activeTab: string;
  onTabChange: (tabId: string) => void;
  tabs: SurveyTab[];
};

export function SurveyTabs({ activeTab, onTabChange, tabs }: SurveyTabsProps) {
  return (
    <div className="border-b border-survey-border pt-[19px]">
      <div className="flex h-[34px] items-end gap-7">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;

          return (
            <button
              className={[
                "relative h-full whitespace-nowrap px-0 text-[12px] leading-8 transition-colors",
                isActive ? "font-medium text-[#C2410C]" : "text-[#4B5563]",
              ].join(" ")}
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              type="button"
            >
              {tab.label}
              {isActive ? (
                <span className="absolute inset-x-0 bottom-[-1px] h-px bg-survey-orange" />
              ) : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}
