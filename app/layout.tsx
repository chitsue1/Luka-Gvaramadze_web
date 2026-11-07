import type { Metadata, Viewport } from "next";
import "@fontsource-variable/newsreader/standard.css";
import "@fontsource-variable/noto-serif-georgian/standard.css";
import "@fontsource-variable/noto-sans-georgian";
import "@fontsource-variable/public-sans";
import "./globals.css";

const title = "Luka Gvaramadze — AI & full-stack developer";
const description =
  "Full-stack developer in Tbilisi who builds AI products end to end: compas.ge, vaka.ge and TradeAlly. Open to internships.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://luka-gvaramadze.vercel.app"),
  title,
  description,
  authors: [{ name: "Luka Gvaramadze" }],
  openGraph: { title, description, type: "website", images: ["/luka.jpg"] },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = { themeColor: "#1d2126" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
