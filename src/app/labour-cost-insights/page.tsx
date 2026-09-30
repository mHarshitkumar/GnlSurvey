import { AppShell } from "@/components/layout/AppShell";

export default function LabourCostInsightsPage() {
  return (
    <AppShell>
      <main className="min-h-[calc(100vh-76px)] bg-[#F5F6F8] px-10 py-8 text-survey-text max-md:px-5">
        <section className="rounded-lg border border-survey-border bg-white p-6 shadow-card">
          <h1 className="text-[22px] font-semibold text-[#111827]">
            Labour &amp; Cost Insights
          </h1>
          <p className="mt-2 text-[14px] text-[#6B7280]">
            Survey flow exited. Your local survey data has not been cleared.
          </p>
        </section>
      </main>
    </AppShell>
  );
}
