import "./globals.css";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import { Poppins } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsentManager from "@/components/shared/cmp/ConsentManager";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "900"],
  display: "swap",
  style: ["italic", "normal"],
});

export const metadata = {
  title: "Alfieri Gloria Osteopata",
  description:
    "Osteopata iscritta al ROI con sede ad Ancona nelle Marche. Collaboro con ortopedici, fisioterapisti e psicoterapeuti.",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="it">
      <body className={`${poppins.className}`}>
        {process.env.GTM_ID && <GoogleTagManager gtmId={process.env.GTM_ID} />}
        <Header />
        {children}
        <Footer />
        <ConsentManager />
      </body>
    </html>
  );
}
