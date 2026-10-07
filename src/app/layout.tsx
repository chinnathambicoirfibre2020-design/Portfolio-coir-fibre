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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://chinnathambicoirfibre.com'),
  title: {
    default: "Chinnathambi Coir Fibre (CCF) | Coir Fibre Manufacturer & Exporter India",
    template: "%s | Chinnathambi Coir Fibre Manufacturer & Exporter",
  },
  description: "Chinnathambi Coir Fibre (CCF) - 35+ Years Industry Mastery. Leading Direct Manufacturer & Exporter of Premium Dyed Black Bristle Coir Fibre in Standard Commercial Length 8\"-12\" (200-300mm). 52-56kg Manual Gunny Bales for Brush & Broom Manufacturers across India and Global Export.",
  keywords: [
    "Manufacturer",
    "Exporter",
    "Coir fibre manufacturer",
    "Coir fibre exporter",
    "Fabric product manufacturer",
    "Fibre product manufacturer",
    "Black coir fibre manufacturer",
    "Black coir fibre exporter",
    "Bristle fibre manufacturer",
    "Natural coir fibre manufacturer India",
    "Dyed black bristle fibre factory",
    "Chinnathambi Coir Fibre",
    "CCF Kanyakumari",
    "Industrial brush raw material manufacturer",
    "Broom fibre manufacturer India",
    "Coconut husk fibre processing factory",
    "Standard length coir 8-12 inch",
    "200-300mm black bristle coir",
    "Coir manufacturer Tamil Nadu",
    "Manual gunny bale coir 52-56kg",
    "B2B coir wholesale supplier India",
    "Coir exporter India"
  ],
  authors: [{ name: "Chinnathambi Coir Fibre" }],
  creator: "Chinnathambi Coir Fibre",
  publisher: "Chinnathambi Coir Fibre",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/assets/images/CCF.jpg",
    apple: "/assets/images/CCF.jpg",
  },
  openGraph: {
    title: "Chinnathambi Coir Fibre (CCF) | Coir Manufacturer & Exporter",
    description: "35+ Years Coir Field Experience. Premier direct manufacturer & exporter of dyed black coconut bristle fibre in 8\"-12\" (200-300mm) commercial length. Manual 52-56kg gunny bales, all-India wholesale & export dispatch.",
    url: "https://chinnathambicoirfibre.com",
    siteName: "Chinnathambi Coir Fibre (CCF)",
    images: [
      {
        url: "/assets/images/hero-section.jpg",
        width: 1200,
        height: 630,
        alt: "Chinnathambi Coir Fibre - Black Bristle Coir Manufacturer & Exporter",
      },
      {
        url: "/assets/images/CCF.jpg",
        width: 800,
        height: 800,
        alt: "Chinnathambi Coir Fibre Factory Logo",
      }
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chinnathambi Coir Fibre (CCF) | Coir Manufacturer & Exporter",
    description: "Direct Manufacturer & Exporter of Dyed Black Bristle Coir Fibre (8\"-12\" / 200-300mm). 35+ Years Experience in Kanyakumari. 52-56kg Gunny Bales.",
    images: ["/assets/images/hero-section.jpg"],
  },
  category: "Manufacturer, Exporter & Industrial Supply",
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "Manufacturer", "LocalBusiness", "WholesaleStore"],
      "@id": "https://chinnathambicoirfibre.com/#organization",
      "name": "Chinnathambi Coir Fibre",
      "alternateName": [
        "CCF",
        "CCF Coir Manufacturer",
        "Chinnathambi Coir Fibre Manufacturer & Exporter",
        "Chinnathambi Fibre Product Manufacturer",
        "Chinnathambi Coir Factory Kanyakumari"
      ],
      "url": "https://chinnathambicoirfibre.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://chinnathambicoirfibre.com/assets/images/CCF.jpg",
        "width": 512,
        "height": 512
      },
      "image": "https://chinnathambicoirfibre.com/assets/images/hero-section.jpg",
      "description": "Premier manufacturer and exporter of dyed black coconut bristle coir fibre and natural fibre products in standard commercial length 8\" - 12\" (200 - 300 mm). Over 35 years of field experience based in Kanyakumari, Tamil Nadu, India.",
      "telephone": "+91 94865 72584",
      "email": "chinnathambicoirfibre2020@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Chinnathambi Coir Fibre Processing Facility, Kanyakumari District",
        "addressLocality": "Kanyakumari",
        "addressRegion": "Tamil Nadu",
        "postalCode": "629001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 8.0883,
        "longitude": 77.5385
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "08:00",
          "closes": "18:00"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "bestRating": "5.0",
        "worstRating": "1.0",
        "ratingCount": "25",
        "reviewCount": "25"
      },
      "priceRange": "₹₹",
      "currenciesAccepted": "INR, USD",
      "paymentAccepted": "Bank Transfer, RTGS, NEFT, Cheque, Cash",
      "areaServed": [
        { "@type": "Country", "name": "India" },
        { "@type": "AdministrativeArea", "name": "Tamil Nadu" },
        { "@type": "AdministrativeArea", "name": "Kerala" },
        { "@type": "AdministrativeArea", "name": "Karnataka" },
        { "@type": "AdministrativeArea", "name": "Maharashtra" },
        { "@type": "AdministrativeArea", "name": "Gujarat" },
        { "@type": "AdministrativeArea", "name": "Andhra Pradesh" },
        { "@type": "AdministrativeArea", "name": "Telangana" },
        { "@type": "AdministrativeArea", "name": "Delhi" }
      ],
      "knowsAbout": [
        "Coir Fibre Manufacturing",
        "Coir Fibre Exporting",
        "Fabric & Fibre Product Manufacturing",
        "Natural Fibre Products",
        "Dyed Black Bristle Fibre Processing",
        "Industrial Brush Raw Material Production",
        "Broom Raw Material Manufacturing",
        "Coconut Husk Decortication",
        "Manual Gunny Baling (52-56kg)"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Coir & Fibre Products Catalog",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Dyed Black Bristle Coir Fibre",
            "itemListElement": [
              {
                "@type": "Product",
                "name": "Dyed Black Bristle Coir Fibre (8\"-12\" / 200-300mm)",
                "image": "https://chinnathambicoirfibre.com/assets/images/bristle-lenght.jpg",
                "description": "Standard commercial length 8\" to 12\" (200-300mm) dyed black bristle coir fibre, double combed and hackled, packed in 52-56kg manual gunny bales for brush and broom manufacturing.",
                "category": "Manufacturer & Exporter",
                "material": "100% Natural Coconut Bristle Fibre",
                "brand": {
                  "@type": "Brand",
                  "name": "CCF"
                },
                "manufacturer": {
                  "@id": "https://chinnathambicoirfibre.com/#organization"
                },
                "offers": {
                  "@type": "AggregateOffer",
                  "priceCurrency": "INR",
                  "availability": "https://schema.org/InStock",
                  "itemCondition": "https://schema.org/NewCondition"
                }
              }
            ]
          }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://chinnathambicoirfibre.com/#website",
      "url": "https://chinnathambicoirfibre.com",
      "name": "Chinnathambi Coir Fibre (CCF)",
      "publisher": {
        "@id": "https://chinnathambicoirfibre.com/#organization"
      },
      "inLanguage": "en-IN"
    }
  ]
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
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
