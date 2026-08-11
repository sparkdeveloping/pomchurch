import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "The Pentecostals of Manhattan | Life Gets Better Here", template: "%s | POM" },
  description: site.description,
  applicationName: site.name,
  keywords: ["Pentecostal church Manhattan KS", "Apostolic church Manhattan Kansas", "UPCI Manhattan KS", "POM Church"],
  openGraph: { title: site.name, description: site.description, url: site.url, siteName: site.name, locale: "en_US", type: "website", images: [{ url: "/images/community-wide.jpg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: site.name, description: site.description, images: ["/images/community-wide.jpg"] },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = { themeColor: "#101010", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Header />{children}<Footer /></body></html>;
}
