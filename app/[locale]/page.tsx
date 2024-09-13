import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import TwitterFeed from "@/components/Common/TwitterFeed";
import Hero from "@/components/Hero";
import IntroductionSection from "@/components/content/IntroductionSection";
import Link from "next/link";

type Props = {
  params: { locale: string };
};

export default function Index({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("HomePage");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="max-w-screen-2xl mt-8">
        <IntroductionSection />
        <div className="relative  p-10 my-16"></div>
        <Hero />
        <TwitterFeed />
      </div>
    </main>
  );
}
