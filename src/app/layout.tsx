import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anish Enterprises | Premium Sanitaryware & Plumbing Solutions in Jharkhand",
  description: "Authorized dealer of Hindware & leading supplier of sanitaryware, bath fittings, uPVC pipes, water heaters & plumbing solutions in Ranchi. 22+ years of trusted service with 600+ satisfied clients.",
  keywords: [
    "Sanitaryware Supplier Jharkhand",
    "Bathroom Fittings Ranchi",
    "uPVC Pipes Dealer",
    "Hindware Showroom Ranchi",
    "Plumbing Solutions Jharkhand",
    "Water Tank Supplier",
    "Bathroom Accessories",
    "CPVC Pipe Fittings"
  ],
  openGraph: {
    title: "Anish Enterprises | Premium Sanitaryware & Bath Fittings in Ranchi",
    description: "Authorized Hindware dealer offering 22+ years of trusted plumbing solutions in Jharkhand. Explore our range of sanitaryware, pipes & bathroom accessories.",
    url: "https://www.anishenterprises.in",
    siteName: "Anish Enterprises",
    images: [
      {
        url: "https://www.anishenterprises.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Anish Enterprises Showroom",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anish Enterprises | Trusted Plumbing Solutions Since 2001",
    description: "Jharkhand's leading supplier of sanitaryware, bath fittings & plumbing materials with 600+ satisfied clients",
    images: ["https://www.anishenterprises.in/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://www.anishenterprises.in",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        {/* Geo-Region Tagging */}
        <meta name="geo.region" content="IN-JH" />
        <meta name="geo.placename" content="Ranchi" />

        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Anish Enterprises",
            "image": "https://www.anishenterprises.in/logo.jpg",
            "@id": "",
            "url": "https://www.anishenterprises.in",
            "telephone": "+916512283633",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Harit Bhawan, Beside Vishal Mega Mart",
              "addressLocality": "Ranchi",
              "postalCode": "834001",
              "addressRegion": "Jharkhand",
              "addressCountry": "IN"
            },
            "priceRange": "₹₹",
            "sameAs": [
              "https://www.facebook.com/AnishEnterprises",
              "https://www.linkedin.com/company/anish-enterprises"
            ]
          })}
        </script>
      </head>
      <body className={`font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
