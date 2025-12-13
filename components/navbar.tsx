"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/SimPPL-Logo.png"
              alt="AI 4 Health"
              width={100}
              height={32}
              className="h-8 w-auto"
            />
            <span className="text-xl font-poppins text-gray-900">
              AI4health
            </span>
          </Link>

          <div className="hidden md:flex space-x-8">
            
            <Link
              href="/#about"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              About
            </Link>
            <Link
              href="/#projects"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Projects
            </Link>
            <a
              href="https://simppl.org/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Contact
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`bg-gray-900 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                }`}
              ></span>
              <span
                className={`bg-gray-900 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`bg-gray-900 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                }`}
              ></span>
            </div>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              <Link
                href="https://simppl.org/"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/#about"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/#projects"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <a
                href="https://simppl.org/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
