import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { localesType } from '../types';

const inter = Inter({ subsets: ['latin'] })


export function generateMetadata({params: {locale}}:{params:{locale: localesType}}):Metadata {

  const metaData = {
    "ar":{
      t:"فلسطين القصة كاملة",
      d:"فلسطين القصة كاملة"
    },
    "en":{
      t:'Palestine - israel the full story',
      d:'Palestine - israel the full story',
    },
  }

  return {
    title: metaData[locale].t || metaData.en.t,
    description: metaData[locale].d || metaData.en.d,
  };
}


interface Props {
  children: React.ReactNode,
  params: {locale:any}
}
export default function RootLayout({
  children,
  params: {locale},
}:Props) {
  
  return (
    <html lang={locale}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
