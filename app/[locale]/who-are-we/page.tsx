import IntroductionSection from "@/components/whoAreWe/IntroductionSection";
import EventsSection from "@/components/whoAreWe/EventsSection";
import EducationSection from "@/components/whoAreWe/EducationSection";

const WhoAreWePage = () => {
  return (
    <main className="flex flex-col items-center w-ful justify-center min-h-screen py-8 px-4">
      <IntroductionSection />
      <EventsSection />
      <EducationSection />
    </main>
  );
};

export default WhoAreWePage;
