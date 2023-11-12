import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations();
  return (
    <main className="min-h-[300vh] bg-light-1 dark:bg-dark-1">
      {t("Index.warning")}
    </main>
  )
}
