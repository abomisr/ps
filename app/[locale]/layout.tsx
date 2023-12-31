import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { localesType } from "../types";
import pick from 'lodash/pick';
import ThemeProvider from "@/providers/ThemeProvider";
import AnimatedCursor from "react-animated-cursor";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/shared/Navbar";
import Message from "@/components/shared/Message";
import ClientOnly from "@/components/shared/ClientOnly";
import { NextIntlClientProvider, useMessages, useTranslations } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export function generateMetadata({
  params: { locale },
}: {
  params: { locale: localesType };
}): Metadata {
  const metaData = {
    ar: {
      t: "جرائم الاحتلال الإرهابي الإسرائيلي",
      d: "جرائم الاحتلال الإرهابي الإسرائيلي",
    },
    en: {
      t: "Crimes of the Israeli terrorist occupation",
      d: "Crimes of the Israeli terrorist occupation",
    },
  };

  return {
    title: metaData[locale].t || metaData.en.t,
    description: metaData[locale].d || metaData.en.d,
  };
}

interface Props {
  children: React.ReactNode;
  params: { locale: any };
}
export default function RootLayout({ children, params: { locale } }: Props) {
  const t = useTranslations();


  return (
    <html lang={locale} dir={locale === "ar"? "rtl":"ltr"}>
      <body className={inter.className}>
        <TooltipProvider>
          <ThemeProvider>
              {children}
            <ClientOnly>
              <Navbar />
              <Message
                btnLabel={t("accept")}
                warningMessage={t("Home.warning")}
              />
            </ClientOnly>
          </ThemeProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}

{
  /* <AnimatedCursor 
          innerSize={14}
          outerSize={14}
          innerStyle={{backgroundColor:"rgb(0,0,0,0.1)", backdropFilter:"invert(100%)"}}
          outerStyle={{backgroundColor:"rgb(0,0,0,0.1)", backdropFilter:"invert(100%)"}}
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={1.5}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        /> */
}
