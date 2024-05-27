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
      <body className={`flex flex-col ${inter.className}`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class">
            <NavBar />
            <div className="py-4 my-20 px-4">{children}</div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
