'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { MagicButton } from './ui/MagicButton';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav
        className={`w-full flex items-center fixed transition-all duration-300 ease-in-out justify-between px-4 py-4 z-50 bg-gray-900 ${
          isScrolled && !menuOpen
            ? 'bg-opacity-60 backdrop-blur-md'
            : 'bg-opacity-0'
        }`}
      >
        <Link href="/" className="text-2xl text-blue-100 font-bold">
          Helsic
        </Link>
        <button
          onClick={toggleMenu}
          className="text-gray-100 focus:outline-none z-50"
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </nav>

      <div
        className={`fixed top-4 right-4 aspect-[50vw] w-[70vw] max-w-md bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-xl transform transition-all duration-300 ease-in-out z-[1000] isolation-isolate overflow-hidden ${
          menuOpen
            ? 'opacity-100 scale-100 pointer-events-auto'
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-3 right-3 text-gray-200 focus:outline-none"
        >
          <FiX size={24} />
        </button>

        <div className="flex flex-col items-start px-6  pt-10 pb-4 space-y-4 text-2xl md:text-4xl">
          <Link
            href="/coaching"
            className="text-gray-100 font-semibold hover:text-blue-100 transition-colors"
            onClick={toggleMenu}
          >
            1v1 coach
          </Link>
          <Link
            href="/dripp"
            className="text-gray-100 font-semibold hover:text-blue-100 transition-colors"
            onClick={toggleMenu}
          >
            CCC Dripp
          </Link>

          <a
            href="#beli"
            className="mt-4 text-blue-100 font-extrabold hover:text-blue-100 transition-colors"
            onClick={toggleMenu}
          >
            <MagicButton
              className="hover:bg-black transition-colors duration-200 bg-transparent ease-in text-base"
              title="Dapatkan Sekarang"
            />
          </a>
        </div>
      </div>
    </>
  );
};
