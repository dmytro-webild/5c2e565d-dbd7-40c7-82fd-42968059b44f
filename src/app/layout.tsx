import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Mulish } from "next/font/google";
import { Open_Sans } from "next/font/google";
import { Manrope } from "next/font/google";
import { DM_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Prabhawati Sweet House | Traditional Indian Sweets & Confectionery',
  description: 'Experience authentic, handcrafted Indian sweets for all occasions. Premium quality, traditional recipes, delivered fresh to your door. Explore our delightful collection.',
  openGraph: {
    "title": "Prabhawati Sweet House | Traditional Indian Sweets & Confectionery",
    "description": "Experience authentic, handcrafted Indian sweets for all occasions. Premium quality, traditional recipes, delivered fresh to your door. Explore our delightful collection.",
    "url": "/",
    "siteName": "Prabhawati Sweet House",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/tasty-salty-caramel-fudge-candies-with-sea-salt_114579-9217.jpg",
        "alt": "Assortment of traditional Indian sweets"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Prabhawati Sweet House | Traditional Indian Sweets & Confectionery",
    "description": "Experience authentic, handcrafted Indian sweets for all occasions. Premium quality, traditional recipes, delivered fresh to your door. Explore our delightful collection.",
    "images": [
      "http://img.b2bpic.net/free-photo/tasty-salty-caramel-fudge-candies-with-sea-salt_114579-9217.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};



const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${manrope.variable} ${dmSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
