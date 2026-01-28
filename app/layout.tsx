import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Landing/Header";
import React from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Intuitive email API and SMTP | TryMail",
  description:
    "Email Marketing, SMS Marketing, & Push Notifications for Shopify. Grow Shopify sales with unified email marketing, SMS marketing & web push. Launch popups and newsletters, run flash sales, and automate abandoned cart recovery, back-in-stock, and price-drop alerts with segmentation and analytics.",
  applicationName: "TryMail - Email Service for developers",
  authors: [{ name: "TryMail", url: "https://trymail.io" }],
  category: "Email Marketing, SMS Marketing, Push Notifications for Shopify",
  creator: "TryMail",
  keywords: [
    "email marketing Shopify",
    "SMS marketing platform",
    "push notifications",
    "abandoned cart recovery",
    "email automation",
    "Shopify email tools",
    "marketing automation",
    "customer engagement",
    "newsletter software",
    "segmentation analytics",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} mx-auto min-h-screen max-w-362 antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
