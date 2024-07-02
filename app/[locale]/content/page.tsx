import IntroductionSection from "@/components/content/IntroductionSection";
import EventsSection from "@/components/content/EventsSection";
import EducationSection from "@/components/content/EducationSection";

const WhoAreWePage = () => {
  return (
    <main className="flex flex-col items-center w-ful justify-start min-h-screen max-w-7xl mx-auto py-16 px-8">
      <IntroductionSection />
      <EventsSection />
      {/* <EducationSection /> */}
    </main>
  );
};

export default WhoAreWePage;
