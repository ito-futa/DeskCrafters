import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DeskCrafters 〜自分だけの作業空間〜',
  description: '作業環境についてご紹介',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
