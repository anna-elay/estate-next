"use client";
import { ReactNode, useState } from "react";
import PromoBanner from "./banner/PromoBanner";
import Header from './layout/Header'
import Footer from "./layout/Footer";
interface  ClientLayoutProps {
  children: ReactNode
}
const ClientLayout = ({children}: ClientLayoutProps) => {
  const [isBannerVisible, setBannerVisible] = useState<boolean>(true);
  return (
    <>
      {
        <PromoBanner
          isVisible={isBannerVisible}
          onClose={() => setBannerVisible(false)}
        />
      }
      <Header isBannerVisible={isBannerVisible} />
      <main className={isBannerVisible ? "pt-39" : "pt-24"}>{children}</main>
      <Footer />
    </>
  );
};

export default ClientLayout;
