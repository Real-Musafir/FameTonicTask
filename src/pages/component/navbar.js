import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="z-50 fixed top-0 left-0 right-0">
      {/* Add Section */}
      <section className="w-full  text-center text-sm font-medium px-2 py-2 md:py-2 bg-gradient-to-r from-pink-700 via-purple-500 to-cyan-400">
        <p className="text-white font-semibold">
          🚀 <span className=" text-cyan-300">FRESH BEGINNINGS SALE</span>:
          Extra 25% OFF, Limited Spots -{" "}
          <span className="">start your journey today!</span>
        </p>
      </section>
      <nav className=" px-6 md:px-30 w-full flex justify-between items-center py-5 bg-black text-white shadow-md">
        <Image
          src="/assets/ftlogo.png"
          alt="App Preview"
          width={150}
          height={150}
          className="mx-auto md:mx-0 cursor-pointer"
        />

        {/* Desktop Links */}
        <div className="space-x-6 hidden md:flex">
          <Link href="/" className="hover:underline">
            About us
          </Link>
          <Link href="/" className="hover:underline">
            Contact
          </Link>
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu (Dropdown) */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-[85px] px-6 py-4 bg-black text-white space-y-4 fixed top-0 left-0 w-full z-40">
          <Link href="" className="block hover:underline">
            About us
          </Link>
          <Link href="" className="block hover:underline">
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}
