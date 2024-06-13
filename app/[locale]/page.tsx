import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export default function Index({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("HomePage");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="text-center mt-16">
        <h1 className="text-5xl font-extrabold">{t("welcome")}</h1>
        <p className="mt-6 text-xl text-gray-700">{t("description")}</p>
      </div>
    </main>
  );
}
