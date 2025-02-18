import React from "react";
import { Shield, Lightbulb, TrendingUp } from "lucide-react";
const services = [{
  icon: <Lightbulb className="h-8 w-8 text-[#C0254D]" />,
  title: "Strategic Consulting",
  description: "Expert guidance to help your business reach its full potential through innovative strategies."
}, {
  icon: <TrendingUp className="h-8 w-8 text-[#C0254D]" />,
  title: "Business Growth",
  description: "Accelerate your business growth with our data-driven approach and market insights."
}, {
  icon: <Shield className="h-8 w-8 text-[#C0254D]" />,
  title: "Risk Management",
  description: "Protect your business with comprehensive risk assessment and management solutions."
}];
export function ServicesSection() {
  return <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive solutions for your business needs
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
}