import { Inter } from "next/font/google";
import NavBar from "@/components/ui/navbar";
import { ThemeProvider } from "next-themes";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Footer from "@/components/ui/footer";
import { AuthProvider } from "@/context/AuthContext";
import { NextUIProvider } from "@nextui-org/react";

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
        className={`flex flex-col ${inter.className} dark:bg-zinc-900 bg-gray-100`}
      >
        <NextIntlClientProvider messages={messages}>
          <NextUIProvider>
            <ThemeProvider attribute="class">
              <AuthProvider>
                <NavBar />
                <div className="my-[78px]">{children}</div>
                <Footer locale={locale} />
              </AuthProvider>
            </ThemeProvider>
          </NextUIProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
