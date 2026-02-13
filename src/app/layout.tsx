import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";
import "./globals.css";

// Load Inter font for non-Apple devices
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "BAYA Chaymae Portfolio",
  description: "Portfolio de Chaymae Baya, spécialiste en électronique embarquée et intelligence artificielle. Projets en vision par ordinateur, Jetson Nano, ROS, RFID et systèmes intelligents.",
  keywords: [
    "Chaymae Baya",
    "Portfolio",
    "Electronique embarquée",
    "Embedded Systems",
    "Intelligence Artificielle",
    "Computer Vision",
    "Jetson Nano",
    "Raspberry Pi",
    "ROS",
    "RFID",
    "Face Recognition",
    "Next.js",
    "React",
  ],
  authors: [
    {
      name: "BAYA Chaymae",
      url: "https://portfolio_chaymae.vercel.app",
    },
  ],
  creator: "BAYA Chaymae",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio_chaymae.vercel.app",
    title: "BAYA Chaymae Portfolio",
    description: "Portfolio professionnel de Chaymae Baya : électronique embarquée, IA, vision artificielle et systèmes intelligents intelligents.",
    siteName: "BAYA Chaymae Portfolio",
  },

  icons: {
    icon: [
      {
        url: "/logo_baya.svg",
        sizes: "any",
      }
    ],
    shortcut: "/logo_baya.svg",
    apple: "/apple-touch-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/logo_baya.svg" sizes="any" />
        {/* Google Analytics */}
        <Script
           async
           src="https://www.googletagmanager.com/gtag/js?id=G-QQFKG0VDH9"
           strategy="afterInteractive"
           />
        <Script

        
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-QQFKG0VDH9');
               `, 
              }}
        />
      </head>
      <body
        className={cn(
          // "min-h-screen bg-background font-sans antialiased",
          "min-h-screen bg-white text-black dark:bg-black dark:text-white font-sans antialiased transition-colors duration-500 ease-in-out",
          inter.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <main className="flex min-h-screen flex-col">
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}