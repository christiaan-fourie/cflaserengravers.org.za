'use client';

import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  // useEffect to prevent scrolling when the menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to remove the style when the component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const navigationLinks = [
    { href: '/', label: 'Home' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    
    
    <header className="bg-white/30 glass fixed t-0 w-full z-50 shadow-md">
      
      <div className="container mx-auto flex justify-between items-center p-4 py-4">

        {/* Logo */}
        <Link href="/">
            <Image src="/logo.png" alt="Logo" width={200} height={100} className="" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="text-2xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            menuOpen
              ? 'fixed top-0 left-0 w-full h-screen bg-white/90  z-50 flex flex-col items-center justify-center'
              : 'hidden'
          } md:static md:block md:w-auto transition-all duration-300`}
        >
          {menuOpen && (
            <>
              <button
                className="absolute top-6 right-6 text-3xl"
                onClick={() => setMenuOpen(false)}
                aria-label="Close Menu"
              >
                <FaTimes />
              </button>
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={200}
                  height={100}
                  className="mb-8"
                  onClick={() => setMenuOpen(false)}
                />
              </Link>
              <ul className="flex flex-col items-center justify-center gap-8">
                {navigationLinks.map((item) => (
                  <li key={item.href} className="px-4 md:px-0">
                    <Link
                      href={item.href}
                      className={`px-6 py-2 rounded-xl transition-all duration-300 ${
                        pathname === item.href
                          ? 'bg-[#c65f3e] text-white'
                          : 'text-[#1e1c2c] hover:text-[#c65f3e] hover:bg-[#f5f5f5]'
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li className="px-4 md:px-0">
                  <Link
                    href="https://wa.me/" // Replace with your WhatsApp number
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:text-green-600 transition-all duration-300 text-3xl"
                    aria-label="WhatsApp Us"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaWhatsapp />
                  </Link>
                </li>
              </ul>
            </>
          )}

          <ul className="hidden md:flex flex-row md:space-x-6 md:items-center md:justify-center bg-white md:bg-transparent p-4 md:p-0">
            {navigationLinks.map((item) => (
              <li key={item.href} className="px-4 md:px-0">
                <Link
                  href={item.href}
                  className={`px-6 py-2 rounded-xl transition-all duration-300 ${
                    pathname === item.href
                      ? 'bg-[#c65f3e] text-white'
                      : 'text-[#1e1c2c] hover:text-[#c65f3e] hover:bg-[#f5f5f5]'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/* Whatsapp Icon */}
            <li className="px-4 md:px-0">
              <Link
                href="https://wa.me/27761682245" // Replace with your WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-600 transition-all duration-300 text-3xl"
                aria-label="WhatsApp Us"
              >
                <FaWhatsapp />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
