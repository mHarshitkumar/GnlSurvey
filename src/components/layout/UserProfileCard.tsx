export function UserProfileCard() {
  return (
    <div className="mx-4 mb-4 flex h-[68px] items-center gap-3 rounded-xl bg-[#F6F7F9] px-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1E2A44] text-[13px] font-semibold text-white">
        PB
      </div>
      <div className="min-w-0">
        <p className="truncate text-[15px] font-semibold leading-5 text-[#1F2937]">
          Patrick Beyers
        </p>
        <p className="truncate text-[12px] leading-4 text-[#6B7280]">
          Senior Manager
        </p>
      </div>
    </div>
  );
}
