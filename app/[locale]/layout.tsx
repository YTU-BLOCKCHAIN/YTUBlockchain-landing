import { Inter } from "next/font/google";
import NavBar from "@/components/ui/navbar";
import { ThemeProvider } from "next-themes";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`flex flex-col ${inter.className}  dark:bg-gray-900 bg-gray-100`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class">
            <NavBar />
            <div className=" my-[78px] ">{children}</div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
