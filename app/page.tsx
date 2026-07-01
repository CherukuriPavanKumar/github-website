import { PrismaHero } from "@/components/ui/prisma-hero";
import { WhoWeAre } from "@/components/sections/who-we-are";
import { DomainsSection } from "@/components/sections/domains";
import { ImpactSection } from "@/components/sections/impact";

export default function Home() {
  return (
    <main className="bg-black">
      <PrismaHero />
      <WhoWeAre />
      <DomainsSection />
      <ImpactSection />
    </main>
  );
}
