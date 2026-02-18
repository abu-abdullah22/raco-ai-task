import { DashboardPreview } from "@/components/dashboard/DashboardPreview";
import { Hero } from "@/components/hero/Hero";
import { InsightFlow } from "@/components/insight/InsightFlow";
import { Signature } from "@/components/wow/Signature";

export default function Home() {
  return (
    <main>
      <Hero />
      <InsightFlow />
      <DashboardPreview />
      <Signature />
    </main>
  );
}
