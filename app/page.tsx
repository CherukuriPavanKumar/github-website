import { PrismaHero } from "@/components/ui/prisma-hero";
import { WhoWeAre } from "@/components/sections/who-we-are";
import { DomainsSection } from "@/components/sections/domains";
import { ImpactSection } from "@/components/sections/impact";
import { ActivitySection } from "@/components/sections/activity";
import { ProjectsShowcase } from "@/components/sections/projects-showcase";
import { TheBuilders } from "@/components/sections/the-builders";
import { CTASection } from "@/components/ui/hero-dithering-card";
import { FAQSection } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="bg-black flex flex-col min-h-screen">
      <PrismaHero />
      <WhoWeAre />
      <DomainsSection />
      <ImpactSection />
      <ActivitySection />
      <ProjectsShowcase />
      <TheBuilders />
      <CTASection />
      <FAQSection />
      <Footer />
    </main>
  );
}
