import dynamic from "next/dynamic";
import ourStoryData from "@/data/ourStoryData";
import HeroSection from "@/components/pages/ourStory/HeroSection";
import CompanyJourney from "@/components/pages/ourStory/CompanyJourney";
import MilestoneHighlights from "@/components/pages/ourStory/MilestoneHighlights";

// Dynamically load MissionVision component (SSR disabled)
const MissionVision = dynamic(
  () => import("@/components/pages/ourStory/MissionVision"),
  { ssr: false }
);

export default function OurStoryPage() {
  return (
    <>
      <HeroSection
        title={ourStoryData.hero.title}
        subtitle={ourStoryData.hero.subtitle}
        image={ourStoryData.hero.image}
      />

      <CompanyJourney
        title={ourStoryData.journey.title}
        paragraphs={ourStoryData.journey.paragraphs}
      />

      <MilestoneHighlights milestones={ourStoryData.milestones} />

      {/* This will now load only on the client side */}
      <MissionVision
        mission={ourStoryData.mission}
        vision={ourStoryData.vision}
      />
    </>
  );
}
