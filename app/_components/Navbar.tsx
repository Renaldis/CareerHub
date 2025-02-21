"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRef, useState } from "react";
import useClickOutside from "@/hooks/useClickOutside";
import { usePathname } from "next/navigation";
import useScroll from "@/hooks/useScroll";

export default function Navbar() {
  const isScrolled = useScroll();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useClickOutside(menuRef, () => setIsOpen(false));

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/jobs", label: "Job Vacancies" },
    { href: "/about", label: "About Us" },
  ];

  return (
    <nav
      className={`mx-auto py-3 fixed top-0 left-0 w-full   z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="px-6 mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="/Logo.png" alt="logo" width={"35px"} />
          <span className="font-serif font-semibold">CareerHub</span>
        </div>
        <div className="hidden sm:block">
          <ul className="flex items-center gap-7">
            {navItems.map((item) => {
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`p-2 rounded-md font-medium  ${
                      pathname === item.href
                        ? "text-orange-400 font-semibold"
                        : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href={"/login"}
            className="px-3 py-1 text-sm md:px-4 md:py-1 md:text-base sm:px-3 sm:py-1 sm:text-sm bg-orange-400 hover:bg-orange-600 rounded-md text-slate-200"
          >
            Login
          </Link>
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="block sm:hidden text-black text-2xl"
            variant={"ghost"}
          >
            {isOpen ? "✖" : "☰"}
          </Button>
        </div>

        {/* Mobile Menu (Tampil saat toggle aktif) */}
        {isOpen && (
          <div
            className="absolute top-12 right-0 w-48 bg-white shadow-lg rounded-lg border py-3"
            ref={menuRef}
          >
            <ul className="flex flex-col items-start space-y-2 px-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block w-full py-2 hover:text-orange-400"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
