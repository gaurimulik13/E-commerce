import { Inter } from "next/font/google";
import "./globals.css";
import HeaderTop from "@/components/HeaderTop";
import HeaderMain from "@/components/HeaderMain";
import Navbar from "@/components/Navbar";
import MobNavbar from "@/components/MobNavbar";
import Page from "@/components/Page";
import Hero from "@/components/Hero";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "@/components/Slide";
import NewProducts from "@/components/NewProducts";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Buy Fashion",
  description: "E-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderTop/>
        <HeaderMain/>
        <Navbar/>
        {/* <Hero/>
        <NewProducts/> */}
        <Page/>
        <MobNavbar/>
        {children}
        <Footer/>

      </body>
    </html>
  );
}
