import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  },
  twitter: {
    card: "summary_large_image",
    title: "RentRun Luxury",
    description:
      "Premium cars, private charter and curated cruise experiences arranged around you.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#090909] text-[#f5efe6]">{children}</body>
    </html>
  );
}
