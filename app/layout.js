import { CookieConsent, Footer, Header } from '@/components'
import './globals.css'
import 'vanilla-cookieconsent/dist/cookieconsent.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '900'], display: "swap", style: ["italic", "normal"] })

export const metadata = {
  title: 'Alfieri Gloria Osteopata',
  description: 'Osteopata iscritta al ROI con sede ad Ancona nelle Marche. Collaboro con ortopedici, fisioterapisti e psicoterapeuti.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Header />
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}
