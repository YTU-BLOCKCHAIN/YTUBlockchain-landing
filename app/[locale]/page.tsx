import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export default function Index({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("HomePage");
  return (
    <main className="flex min-h-screen flex-col items-center justify-center ">
      <div className="text-center">
        <h1 className="text-4xl font-bold ">{t("welcome")}</h1>
        <p className="mt-4 text-xl">{t("description")}</p>
      </div>
      <div className="h-[100vh]" />
    </main>
  );
}
