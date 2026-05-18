"use client";
 
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
     
export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   
  const navItems = [
    { name: "About Us", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Admissions", href: "/admissions" },
    { name: "Infrastructure", href: "/infrastructure" },
    { name: "News & Events", href: "/news-events" },
    { name: "Faculty", href: "/faculty" },
    { name: "Alumni", href: "/alumni" },
    { name: "Placement & Internship", href: "/placement-internship" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      {/* HEADER */}
      <header className="main-header absolute top-0 left-0 w-full flex items-center justify-between px-6 md:px-20 py-4 md:py-8 z-[9999] transition-all duration-300">
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center cursor-pointer relative z-[10001]"
        >
          <Image
            src="/nomad-logo_new.png"
            width={200}
            height={60}
            alt="NoMAD Logo"
            className="h-11 md:h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden min-[1375px]:flex gap-6 text-[14px] lg:text-[15px] font-medium tracking-widest uppercase text-black/80">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="cursor-pointer hover:text-[#ec008c] transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="min-[1375px]:hidden relative z-50 text-black p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* MOBILE MENU */}
        <div
          className={`fixed inset-0 bg-white/95 backdrop-blur-md z-40 transition-transform duration-300 ease-in-out flex flex-col items-center justify-start pt-32 pb-12 overflow-y-auto ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } min-[1375px]:hidden`}
        >
          <nav className="flex flex-col items-center gap-6 min-h-max text-lg md:text-2xl font-black tracking-widest uppercase text-black">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="cursor-pointer hover:text-[#ec008c] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
