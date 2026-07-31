import type { Metadata } from "next";
import { Merriweather, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// font Merriweather heading
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["700", "900"], // Bold and Black 
  variable: "--font-merriweather",
  display: "swap",
});

// font Plus Jakarta Sans Sub Heading & Body
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600"], // Regular and SemiBold
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PT. Sahabat Utama Industri",
  description: "Premium Timber Solutions for Global Markets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${merriweather.variable} ${plusJakartaSans.variable}`}>
      <body className="bg-neutral-base text-neutral-text font-sans antialiased">
        {children}
      </body>
    </html>
  );
}