import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { LightboxProvider } from "@/context/LightboxContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LightboxModal from "@/components/LightboxModal";
import WhatsAppFloating from "@/components/WhatsAppFloating";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CCF | Chinnathambi Coir Fibre - 35+ Years Field Experience",
  description: "Chinnathambi Coir Fibre (CCF) - 35+ Years of Coir Field Experience. Modern Direct Processor in Kanyakumari. Premium Dyed Black Bristle Coir Fibre in Standard Commercial Length 8\" - 12\" (200 - 300 mm) for Wholesale Supply across India.",
  keywords: [
    "Chinnathambi Coir Fibre",
    "CCF",
    "35 years field experience",
    "bristle fibre black manufacturer",
    "black coir fibre",
    "standard length coir",
    "8-12 inch coir",
    "Kanyakumari coir",
    "brush fibre India",
    "coir exporter Tamil Nadu",
    "broom fibre wholesale"
  ],
  icons: {
    icon: "/assets/images/CCF.jpg",
  },
  openGraph: {
    title: "Chinnathambi Coir Fibre (CCF) - Kanyakumari Dyed Black Bristle Coir",
    description: "35+ Years Coir Field Experience. Direct factory production of dyed black coconut bristle fibre in 8\"-12\" standard lengths, 52-56kg manual gunny bales, all-India wholesale dispatch.",
    images: [
      {
        url: "/assets/images/hero-section.jpg",
        width: 1200,
        height: 630,
        alt: "CCF Black Bristle Coir Fibre",
      }
    ],
    locale: "en_IN",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${bricolageGrotesque.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[#F5EBE1] text-[#22130C] font-sans antialiased selection:bg-caramel selection:text-white">
        <LightboxProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <LightboxModal />
          <WhatsAppFloating />
        </LightboxProvider>
      </body>
    </html>
  );
}
