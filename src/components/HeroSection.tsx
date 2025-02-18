import React from "react";
export function HeroSection() {
  return <section className="relative h-screen w-full bg-cover bg-center" style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3')`
  }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-start">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Transforming Business Through Innovation
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
          Empowering businesses with cutting-edge solutions for sustainable
          growth and success.
        </p>
        <button className="bg-[#C0254D] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#A01E3F] transition-colors">
          Learn More
        </button>
      </div>
    </section>;
}