import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsentManager from "@/components/shared/cmp/ConsentManager";
import { cn } from "@/lib/utils";
import { poppins } from "./fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Alfieri Gloria Osteopata",
    default: "Alfieri Gloria Osteopata", // a default is required when creating a template
  },
  openGraph: {
    title: "Alfieri Gloria Osteopata",
    description: "Osteopata iscritta al ROI con sede ad Ancona nelle Marche",
    url: "https://alfierigloria-osteopata.it",
    siteName: "Alfieri Gloria Osteopata",
    images: [
      // {
      //   url: 'https://nextjs.org/og.png', // Must be an absolute URL
      //   width: 800,
      //   height: 600,
      // },
      // {
      //   url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
      //   width: 1800,
      //   height: 1600,
      //   alt: 'My custom alt',
      // },
    ],
    locale: "it_IT",
    type: "website",
  },
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
