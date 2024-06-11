import { Inter } from "next/font/google";
import NavBar from "@/components/ui/navbar";
import { ThemeProvider } from "next-themes";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Footer from "@/components/ui/footer";

const inter = Inter({ subsets: ["latin"] });

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`flex flex-col ${inter.className} dark:bg-zinc-700 bg-gray-100`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class">
            <NavBar />
            <div className="my-[78px]">{children}</div>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
