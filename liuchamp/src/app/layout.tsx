import './globals.css'
import { inter, bodoniModa, graphik, blacker, blackerRegular } from '@/fonts'

export const metadata = {
  title: 'Liuchamp',
  description: 'Mouseum, Events, art, Tours & shop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      className={`${inter.variable} ${bodoniModa.variable} ${graphik.variable} ${blacker.variable} ${blackerRegular.variable}`}
      lang="en"
    >
      <body>{children}</body>
    </html>
  )
}
