import React from "react";
import { Facebook, Twitter, Mail, Instagram } from "lucide-react";
export function Footer() {
  return <footer className="bg-[#A01E3F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">OO Company</h3>
            <p className="text-gray-300">
              123 Business Street
              <br />
              Seoul, South Korea
              <br />
              info@oocompany.com
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About Us", "Services", "Blog", "Contact"].map(item => <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer" />
              <Twitter className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer" />
              <Instagram className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer" />
              <Mail className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <form className="space-y-4">
              <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-white" />
              <button className="w-full bg-white text-[#C0254D] px-4 py-2 rounded font-medium hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>;
}