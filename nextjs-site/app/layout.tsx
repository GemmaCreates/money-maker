import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://uptempoenterprises.com"),
  title: "Uptempo Enterprises — Digital Product Lab.",
  description: "Simple products that help people in their everyday lives.",
  keywords: ["Uptempo Enterprises", "Digital Products", "Family Apps", "Home Goods"],
  authors: [{ name: "Uptempo Enterprises" }],
  openGraph: {
    title: "Uptempo Enterprises — Digital Product Lab.",
    description: "Simple products that help people in their everyday lives.",
    url: "https://uptempoenterprises.com",
    siteName: "Uptempo Enterprises",
    images: [
      {
        url: "/assets/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Uptempo Enterprises — Digital Product Lab.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uptempo Enterprises — Digital Product Lab.",
    description: "Simple products that help people in their everyday lives.",
    images: ["/assets/og-image.svg"],
  },
  icons: {
    icon: "/assets/favicon.svg",
    shortcut: "/assets/favicon.svg",
    apple: "/assets/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
