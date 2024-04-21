import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsentManager from "@/components/shared/cmp/ConsentManager";
import { cn } from "@/lib/utils";
import { poppins } from "./fonts";

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
    <html lang="it" className={cn(poppins.variable)}>
      <body>
        {process.env.GTM_ID && <GoogleTagManager gtmId={process.env.GTM_ID} />}
        <Header />
        {children}
        <Footer />
        <ConsentManager />
      </body>
    </html>
  );
}
