"use client";

import { useState } from "react";
import ProductNavbar from "@/components/product/ProductNavbar";
import ProductHero from "@/components/product/ProductHero";
import CameraShowcase from "@/components/product/CameraShowcase";
import SiliconShowcase from "@/components/product/SiliconShowcase";
import DisplaySection from "@/components/product/DisplaySection";
import ColorStudio from "@/components/product/ColorStudio";
import TechSpecs from "@/components/product/TechSpecs";
import ProductReviews from "@/components/product/ProductReviews";
import ProductFooter from "@/components/product/ProductFooter";
import PreOrderConfigurator from "@/components/product/PreOrderConfigurator";
import KeynoteModal from "@/components/product/KeynoteModal";

export default function Home() {
  const [isPreOrderOpen, setIsPreOrderOpen] = useState(false);
  const [isKeynoteOpen, setIsKeynoteOpen] = useState(false);

  return (
    <>
      {/* Sticky Product Navigation */}
      <ProductNavbar onPreOrderClick={() => setIsPreOrderOpen(true)} />

      {/* Main Product Showcase Flow */}
      <main id="main-content">
        <ProductHero
          onPreOrderClick={() => setIsPreOrderOpen(true)}
          onWatchKeynote={() => setIsKeynoteOpen(true)}
        />
        <CameraShowcase />
        <SiliconShowcase />
        <DisplaySection />
        <ColorStudio />
        <TechSpecs />
        <ProductReviews />
      </main>

      {/* Product Footer with Box Accessories */}
      <ProductFooter onPreOrderClick={() => setIsPreOrderOpen(true)} />

      {/* Pre-Order Interactive Configurator Modal */}
      <PreOrderConfigurator
        isOpen={isPreOrderOpen}
        onClose={() => setIsPreOrderOpen(false)}
      />

      {/* Keynote Video Demo Modal */}
      <KeynoteModal
        isOpen={isKeynoteOpen}
        onClose={() => setIsKeynoteOpen(false)}
      />
    </>
  );
}
