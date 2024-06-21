import { useTranslations } from "next-intl";

// Note that `app/[locale]/[...rest]/page.tsx`
// is necessary for this page to render.

export default function NotFoundPage() {
  const t = useTranslations("NotFound");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-100 dark:bg-gray-900">
      <h1 className="text-6xl font-extrabold text-gray-800 dark:text-gray-100 mb-4">
        {t("404")}
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 max-w-lg">
        {t("description")}
      </p>
      <a
        href="/"
        className="mt-8 px-6 py-3 bg-blue-600 text-white text-lg rounded-md hover:bg-blue-700 transition-colors"
      >
        {t("home")}
      </a>
    </div>
  );
}
