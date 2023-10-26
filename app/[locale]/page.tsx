import Navbar from '@/components/Navbar';
import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations();
  return (
    <main className="min-h-screen bg-light-1 dark:bg-dark-1">
      {t("Index.title")}
      <Navbar />
    </main>
  )
}
