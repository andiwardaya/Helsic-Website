import React from 'react';
import { FaYoutube, FaInstagram, FaTiktok } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto flex flex-col  gap-7 bg-gray-950 text-white px-6">
      {/* Title dan About */}
      <div className="flex flex-col gap-0 max-w-2xl">
        <h3 className="text-xl font-semibold mt-5">Helsic</h3>
        <p className="text-sm text-gray-400">
          Helsic percaya, badan impian bisa dicapai tanpa harus ke gym. Cukup
          dari rumah, dengan panduan berbasis sains dan pengalaman nyata, kamu
          bisa jadi versi terbaik dari dirimu.
        </p>
      </div>

      {/* hubungi kami dan Email */}
      <div>
        <h3 className=" font-semibold">Hubungi Kami</h3>
        <p className="text-gray-400 text-sm">
          ada pertanyaan terkait protokol Helsic? hubungi kami di
        </p>
        <p className="text-sm font-semibold">helsiccc@gmail.com</p>
      </div>

      {/* SOSIAL MEDIA*/}
      <div>
        <h3 className=" font-semibold">Sosial Media Helsic</h3>
        <div className="flex gap-6 mt-2">
          <a
            target="_blank"
            href="https://www.youtube.com/@helsiccc"
            aria-label="YouTube"
            className="text-xl hover:text-red-500 transition"
          >
            <FaYoutube />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/helsiccc/"
            aria-label="Instagram"
            className="text-xl hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
          <a
            target="_blank"
            href="https://www.tiktok.com/@helsiccc"
            aria-label="TikTok"
            className="text-xl hover:text-white transition"
          >
            <FaTiktok />
          </a>
        </div>
      </div>

      <div>
        {/* Garis Pemisah */}
        <div className="border-t border-white/10 mt-4"></div>

        {/* Copyright */}
        <div className="text-sm text-gray-400 my-4 text-center">
          © 2025 Helsic. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
