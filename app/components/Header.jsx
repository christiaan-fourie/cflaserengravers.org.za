'use client'

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white/30 backdrop-blur-lg text-white fixed t-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4 py-8">
        <h1 className="text-2xl text-[#d94948]">
          <Link href="/">CF Laser Engravers</Link>
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
            <li className="p-4 md:p-0">
              <Link href="/" className="hover:text-gray-400 bg-[#d94948] px-6 py-2 rounded-xl">
                Home
              </Link>
            </li>
            <li className="p-4 md:p-0">
              <Link href="/contact" className="hover:text-gray-400 bg-[#d94948] px-6 py-2 rounded-xl">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
