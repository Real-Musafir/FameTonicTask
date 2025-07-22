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

      {/* Navbar */}
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

      {/* Content Section */}
      <section className="flex flex-col-reverse md:flex-row justify-between items-center px-6 md:px-20 py-12 gap-12 bg-black">
        {/* Left Part */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-semibold">
            Want to Turn Social Media Into a Profitable Career?
          </h1>
          <p className="text-lg md:text-xl font-semibold text-cyan-400">
            Discover your way to success with Fametonic:
          </p>
          <ul className="text-sm md:text-base space-y-2">
            <li>
              🌟 Start growing your influence right away—no waiting required!
            </li>
            <li>
              🌟 Create viral TikToks and Reels step by step with easy-to-follow
              lessons
            </li>
            <li>🌟 Use a Personal AI Worker to boost your content</li>
            <li>
              🌟 Learn from expert-led courses designed for aspiring influencers
            </li>
          </ul>
          <button className="mt-6 px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-full shadow-md w-full md:w-auto">
            GET STARTED <span className="ml-1">&gt;</span>
          </button>
          <p className="text-xs mt-2">
            1-minute quiz for personalized insights
          </p>
          <p className="text-xs text-gray-400">
            By clicking "Get Started", you agree with Terms and Conditions,
            Privacy Policy, Subscription Terms
          </p>
          <p className="text-xs text-gray-500">
            Fametonic. 2025 ©All Rights Reserved.
          </p>
        </div>

        {/* Right Part */}
        <div className="md:w-1/2">
          <Image
            src="/Banner.png"
            alt="App Preview"
            width={500}
            height={500}
            className="mx-auto md:mx-0"
          />
        </div>
      </section>
    </main>
  );
}
