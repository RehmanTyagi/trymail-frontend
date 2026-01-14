import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const better_times = localFont({
  variable: "--font-better-times",
  src: "../public/fonts/Better-Times.ttf",
  fallback: ["sans-serif"],
});

const inter = localFont({
  variable: "--font-inter",
  src: [
    { path: "../public/fonts/Inter-Regular.ttf", weight: "400" },
    {
      path: "../public/fonts/Inter-Medium.ttf",
      weight: "500",
    },
    {
      path: "../public/fonts/Inter-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../public/fonts/Inter-Bold.ttf",
      weight: "800",
    },
    {
      path: "../public/fonts/Inter-Black.ttf",
      weight: "900",
    },
  ],
});

export const metadata: Metadata = {
  title: "Email, SMS, & Push for Shopify | TryMail",
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
        className={`${inter.variable} ${better_times.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
