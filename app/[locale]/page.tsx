import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import TwitterFeed from "@/components/Common/TwitterFeed";
import Hero from "@/components/Hero";
import IntroductionSection from "@/components/content/IntroductionSection";

// import VideoSection from "@/components/VideoSection";

type Props = {
  params: { locale: string };
};

export default function Index({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("HomePage");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="max-w-screen-2xl ">
        <div className="text-center my-16">
          <h1 className="text-5xl font-extrabold">{t("welcome")}</h1>
        </div>
        <IntroductionSection />
        <Hero />
        {/* <VideoSection /> */}
        <TwitterFeed />
      </div>
    </main>
  );
}
