import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Header Section */}
      <section className="w-full text-center text-sm font-medium px-2 py-2 md:py-2 bg-gradient-to-r from-pink-700 via-purple-500 to-cyan-400">
        <p className="text-white font-semibold">
          🎉 <span className=" text-cyan-300">FRESH BEGINNINGS SALE</span>:
          Extra 25% OFF, Limited Spots -{" "}
          <span className="">start your journey today!</span>
        </p>
      </section>

      <nav className="w-full flex justify-between items-center px-6 py-4 bg-black">
        <div className="text-2xl font-bold">
          <span className="text-white">fame</span>
          <span className="text-pink-500">tonic</span>
        </div>
        <div className="space-x-6 hidden md:flex">
          <a href="#" className="hover:underline">
            About us
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>
        <div className="md:hidden">
          <button>
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
    </main>
  );
}
