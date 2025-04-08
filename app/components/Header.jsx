'use client';

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  return (
    <header className="bg-white/30 backdrop-blur-lg text-white fixed t-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4 py-4">
        <h1 className="text-2xl text-[#d94948]">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={200} height={100} className="" />
          </Link>
        </h1>
        <button
          className="text-2xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <nav
          className={`${
            menuOpen ? 'block' : 'hidden'
          } absolute top-16 left-0 w-full md:static md:block md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6">
            {[
              { href: '/', label: 'Home' },
              { href: '/contact', label: 'Contact' },
            ].map((item) => (
              <li key={item.href} className="p-4 md:p-0">
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
          </ul>
        </nav>
      </div>
    </header>
  );
}
