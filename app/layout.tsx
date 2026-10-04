import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { company } from "@/data/site-data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://luxury.rentrun.in"),
  title: "RentRun Luxury | Premium Cars, Private Charter & Luxury Cruises",
  description:
    "Luxury car rental with chauffeur, premium charter arrangements and curated cruise experiences for executive travel, weddings, VIP transport and private groups.",
  applicationName: "RentRun Luxury",
  authors: [{ name: "RentRun Travel Company" }],
  keywords: [
    "luxury car rental",
    "luxury car rental with chauffeur",
    "luxury chauffeur service",
    "premium airport transfer",
    "executive car service",
    "VIP transportation",
    "private charter service",
    "private jet charter",
    "helicopter charter",
    "yacht charter",
    "luxury cruise",
    "private yacht experience",
    "luxury travel services",
  ],
  openGraph: {
    title: "RentRun Luxury",
    description:
      "Luxury cars, private charters and curated cruise experiences arranged with privacy, comfort and concierge-led support.",
    url: "https://luxury.rentrun.in",
    siteName: "RentRun Luxury",
    locale: "en_IN",
    type: "website",
    images: ["https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85"],
  },
  twitter: {
    card: "summary_large_image",
    title: "RentRun Luxury",
    description:
      "Premium cars, private charter and curated cruise experiences arranged around you.",
    images: ["https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    parentOrganization: { "@type": "Organization", name: company.parent },
    url: "https://luxury.rentrun.in",
    description: "Luxury mobility, private journeys and exceptional experiences curated through a network of verified service partners.",
    email: company.emailPrimary,
    contactPoint: [
      { "@type": "ContactPoint", telephone: `+91${company.phonePrimary}`, contactType: "customer service", availableLanguage: ["English", "Hindi"] },
      { "@type": "ContactPoint", telephone: `+91${company.phoneSecondary}`, contactType: "customer service", availableLanguage: ["English", "Hindi"] },
    ],
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#090909] text-[#f5efe6]">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
        {children}
      </body>
    </html>
  );
}
