import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Madiyar Qurylys | Ремонт квартир под ключ в Астане',
  description: 'Профессиональный ремонт и отделка квартир в Астане. Качественные услуги демонтажа, штукатурки, электрики, дизайна и чистовой отделки.',
  keywords: 'ремонт квартир, Астана, отделка, ремонт под ключ, демонтаж, штукатурка, электрика, дизайн интерьера',
  openGraph: {
    title: 'Madiyar Qurylys | Ремонт квартир под ключ в Астане',
    description: 'Профессиональный ремонт и отделка квартир в Астане. Качественные услуги от проверенной компании.',
    images: ['/public/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}

// // layout.tsx

// import { Inter } from 'next/font/google';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';


// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="ru">
//       <body className={inter.className}>
//         <Header />
//         <main>{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }
