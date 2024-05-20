import { Poppins } from "next/font/google";
import { clsx } from 'clsx';
import Script from 'next/script'
import "./globals.css";
import HeaderMobile from "@/components/Layout/HeaderMobile";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"], variable: '--font-poppins' });

export const metadata = {
  title: "Candi Srigading",
  description: "Candi Srigading, Sejarah yang Terpendam di Tanah Srigading"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased tracking-tight font-base text-gray-500 text-base h-full bg-white dark:bg-gray-900 overflow-x-hidden`}>
        <div id="site-wrapper" className="flex flex-col h-full js-site-wrapper">
          <Header />
          <HeaderMobile />
          {children}
          <Footer/>
        </div>
        <Script src="/vendor/vendors/common/glightbox/js/glightbox.min.js" strategy="beforeInteractive" />
        <Script src="/vendor/vendors/common/swiper/js/swiper-bundle.min.js" strategy="beforeInteractive" />
        <Script src="/vendor/js/common.js" strategy="afterInteractive" />
        <Script src="/vendor/js/init.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
