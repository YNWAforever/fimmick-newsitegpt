import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://fimmick-ai-workforce-copy.laichiwillyjp.chatgpt.site"),
  title: {
    default: "FIMMICK — Build Your AI Workforce (Copy)",
    template: "%s | FIMMICK",
  },
  description: "Build a managed AI workforce for marketing, sales, content, reporting, and customer engagement with FIMMICK, Hong Kong's AI business transformation agency.",
  applicationName: "FIMMICK",
  authors: [{ name: "FIMMICK", url: "https://www.fimmick.com" }],
  creator: "FIMMICK",
  publisher: "FIMMICK",
  alternates: {
    canonical: "https://www.fimmick.com/en/",
    languages: {
      "en": "/en/",
      "zh-Hant-HK": "https://www.fimmick.com/zh-hk/",
      "zh-Hans-CN": "https://www.fimmick.com/zh-cn/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_HK",
    siteName: "FIMMICK",
    title: "Build Your AI Workforce. Not Just Another AI Tool.",
    description: "Managed AI agents. Enterprise transformation. Built in Hong Kong for the complexity of Asia.",
    url: "https://www.fimmick.com/en/",
    images: [{ url: "/og.png", width: 1672, height: 941, alt: "FIMMICK — Build Your AI Workforce" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Build Your AI Workforce | FIMMICK",
    description: "Managed AI agents. Enterprise transformation. Built in Hong Kong for the complexity of Asia.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#020509",
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
