"use client";
import { useTranslations } from "next-intl";

import Link from "next/link";

const NotFoundPage = () => {
  const t = useTranslations("NotFoundPage");

  return (
    <main className="flex min-h-[90vh] flex-col items-center justify-center  p-4">
      <div className="text-center mt-16 p-8 ">
        <h1 className="text-5xl font-extrabold text-blue-600">{t("404")}</h1>
        <p className="my-6 text-xl text-gray-700">{t("pageNotFound")}</p>

        <Link href="/">
          <p className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
            {t("goHome")}
          </p>
        </Link>
      </div>
    </main>
  );
};

export default NotFoundPage;
