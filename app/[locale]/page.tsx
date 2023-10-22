import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations();
  return (
    <main className="">
      {t("Index.title")}
    </main>
  )
}