import React from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { BlogSection } from "./components/BlogSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { Footer } from "./components/Footer";
export function App() {
  return <div className="w-full min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <BlogSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>;
}