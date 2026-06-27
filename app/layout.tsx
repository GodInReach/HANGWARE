import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";
import BinaryBackground from "./components/BinaryBackground";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "HANGWARE - Engineering Digital Products That Drive Business Growth",
    template: "%s | HANGWARE",
  },
  description:
    "HANGWARE is a digital product engineering company specializing in Full Stack Development, Mobile Apps, AI Solutions, SaaS Platforms, Cloud Solutions, and UI/UX Design. Trusted technology partner for startups and businesses.",
  keywords: [
    "software development company",
    "web development",
    "mobile app development",
    "SaaS development",
    "AI solutions",
    "cloud solutions",
    "UI/UX design",
    "startup consulting",
    "digital transformation",
    "HANGWARE",
  ],
  authors: [{ name: "HANGWARE" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "HANGWARE",
    title: "HANGWARE - Engineering Digital Products That Drive Business Growth",
    description:
      "Trusted technology partner helping startups and businesses transform ideas into scalable digital products.",
  },
  twitter: {
    card: "summary_large_image",
    title: "HANGWARE - Digital Product Engineering",
    description:
      "Full Stack Development, AI Solutions, SaaS Platforms & more.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const t = localStorage.getItem('hangware-theme');
                if (t) document.documentElement.setAttribute('data-theme', t);
                else if (window.matchMedia('(prefers-color-scheme: light)').matches)
                  document.documentElement.setAttribute('data-theme', 'light');
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider>
          <BinaryBackground />
          <Navbar />
          <main className="flex-1 relative z-10">
            {children}
          </main>
          <Footer />
          <WhatsAppWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
