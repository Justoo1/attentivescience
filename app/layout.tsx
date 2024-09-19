import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { SpeedInsights } from "@vercel/speed-insights/next"

import "./globals.css";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: {
    default: "Attentive Science",
    template: "%s | Attentive Science"
  },
  authors: [{name: "Attentive Science", url: "https://attentivescience.com"}],
  description: "In your mission to develop cures and remedies, contract our research services to provide the necessary support to fortify your quest. Toxicology",
  icons:{
    icon: '/assets/icons/logo.png',
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_METADATA_BASE || 'http://localhost:3000'), // Use environment variable
  twitter:{
    card: "summary_large_image",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.variable}>
          {children}
          <SpeedInsights/>
        </body>
      </html>
    </ClerkProvider>
  );
}
