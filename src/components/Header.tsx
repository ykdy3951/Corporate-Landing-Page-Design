import React from "react";
import { Menu } from "lucide-react";
export function Header() {
  return <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-[#C0254D] text-2xl font-bold">
              OO Company
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            {["Home", "About Us", "Services", "Blog", "Contact"].map(item => <a key={item} href="#" className="text-gray-700 hover:text-[#C0254D] px-3 py-2 text-sm font-medium transition-colors">
                {item}
              </a>)}
          </nav>
          <button className="md:hidden p-2">
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
    </header>;
}