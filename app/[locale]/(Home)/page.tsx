import { NextIntlClientProvider, useMessages, useTranslations } from "next-intl";
import Title from "./Title";
import Experience from "./Experience";
import pick from "lodash/pick";

export default function Home({ params: { locale } }: {params:{locale:any}}) {
  const t = useTranslations();
  const messages = useMessages();

  return (
    <main className="bg-light-1 dark:bg-dark-1 text-slate-800 dark:text-slate-200">
      <Title title={t("Home.criminal_ex")} />
      <NextIntlClientProvider
        locale={locale}
        //@ts-ignore
        messages={
          // Only provide the minimum of messages
          pick(messages, "Crimes")
        }
      >
        <Experience />
      </NextIntlClientProvider>
    </main>
  );
}
