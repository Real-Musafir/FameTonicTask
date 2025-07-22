import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./component/navbar";

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
    <main className="min-h-screen  text-white font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Content Section */}
      <section className="md:mt-40 mt-20 flex flex-col-reverse md:flex-row justify-between px-6 md:px-20 py-5 gap-12 ">
        {/* Left Part */}
        <div className="z-5 md:w-1/2 space-y-6 text-center md:text-left">
          <p className="text-2xl md:text-4xl font-semibold">
            Want to Turn Social Media Into a Profitable Career?
          </p>
          <p className="  text-cyan-400 font-extrabold text-2xl md:text-4xl leading-tight drop-shadow-[3px_3px_0_#ec4899]">
            Discover your way to success with Fametonic:
          </p>
          <ul className="text-sm md:text-base space-y-2">
            <li className="text-xl text-left pl-6 -indent-[1.7rem]">
              ✨ Start growing your influence right away—no waiting required!
            </li>
            <li className="text-xl text-left pl-6 -indent-[1.7rem]">
              ✨ Create viral TikToks and Reels step by step with easy-to-follow
              lessons
            </li>
            <li className="text-xl text-left pl-6 -indent-[1.7rem]">
              ✨ Use a Personal AI Worker to boost your content
            </li>
            <li className="text-xl text-left pl-6 -indent-[1.7rem]">
              ✨ Learn from expert-led courses designed for aspiring influencers
            </li>
          </ul>

          <div className="flex flex-col md:flex-col-reverse items-center w-full">
            <div>
              <p className="text-xs mt-4 text-gray-300">
                By clicking "Get Started", you agree with Terms and Conditions,
                Privacy Policy, Subscription Terms
              </p>
              <p className="text-xs mt-3 text-gray-300">
                Fametonic. 2025 ©All Rights Reserved.
              </p>
            </div>

            <div className=" w-full md:w-2/3">
              <button className="mt-3 mb-1 cursor-pointer w-full px-10 py-2 bg-pink-600 hover:bg-pink-500 text-white font-bold rounded-md drop-shadow-[4px_4px_6px_rgba(34,211,238,0.8)]">
                GET STARTED <span className="ml-1">&gt;</span>
              </button>
              <p className="text-xs text-center mt-1">
                1-minute quiz for personalized insights
              </p>
            </div>
          </div>
        </div>

        {/* Right Part */}
        <div className="md:w-1/2 w-full">
          <Image
            src="/assets/banner.png"
            alt="App Preview"
            width={400}
            height={400}
            className="mx-auto md:mx-0 scale-100 md:scale-[1.55] scale-[1.1]"
          />
        </div>
      </section>
    </main>
  );
}
