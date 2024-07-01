import { useTranslations } from "next-intl";
import React from "react";

const IntroductionSection = () => {
  const t = useTranslations("WhoAreWe");
  return (
    <section className="text-center py-8 px-4">
      <h2 className="text-4xl font-bold mb-4">{t("whoAreWe")}</h2>
      <p className="text-lg ">{t("description1")}</p>
    </section>
  );
};

export default IntroductionSection;
