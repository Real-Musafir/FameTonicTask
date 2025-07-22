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
    </main>
  );
}
