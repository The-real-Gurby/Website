"use client";

import Galaxy from '@/components/Galaxy';
import '@/components/Galaxy.css';
import ASCIIText from "@/components/ASCIIText";
import TextType from '@/components/TextType';
import Image from "next/image";

export default function Page() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center">
        <Galaxy
          className="absolute inset-0 w-full h-full"
          mouseRepulsion={true}
          mouseInteraction={true}
          density={2.5}
          glowIntensity={0.5}
          saturation={0.8}
          hueShift={240}
          transparent={false}
        />

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white drop-shadow-lg">
            Hi, I&apos;m Gurby
          </h1>
          <p className="mt-4 text-xl sm:text-2xl text-white drop-shadow">
            CyberSecurity • Artist • Programmer (kind of)
          </p>
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <a
              href="/projects"
              className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              View Projects
            </a>
            <a
              href="/contacts"
              className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* About / Projects Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
          {/* Text box on the left */}
          <div className="md:w-1/2 text-left text-white">
            <h2 className="text-4xl font-semibold mb-4">About me</h2>
            <p className="text-white mb-6">
              Hello! My name is Gurby. I am currently a freshman in college studying CyberSecurity. I like to draw occasionally, and I used to do 3D modeling but I couldn&apos;t bring my 3D printer to college with me, so I haven&apos;t done much.  
              If you click the button below you can view some of my artworks!
            </p>
            <a
              href="/artwork"
              className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition"
            >
              Artwork
            </a>
          </div>

          {/* Image / GIFs on the right */}
          <div className="md:w-1/2 flex justify-center bg-black relative z-10 space-y-4">
            <Image src="/Trans.gif" alt="Cool animated GIF" width={200} height={200} />
            <Image src="/gurbiee.gif" alt="Another GIF" width={355} height={261} />
          </div>
        </div>
      </section>

      {/* ASCII / Text Section */}
      <section className="bg-black w-full py-20 flex flex-col items-center">
        <div className="w-full max-w-3xl h-64 flex justify-center items-center mb-10">
          <ASCIIText text="COMPUTER THINGS!" textFontSize={18} asciiFontSize={3} />
        </div>
        <div className="text-center text-white px-4">
          <h3 className="text-4xl font-semibold mb-4">How I am Making This website</h3>
          <p className="mb-6 text-white text-lg">
            So, I&apos;ve never made a website before. I&apos;ve never coded in JavaScript either, just Python, so this whole thing is new to me!  
            I&apos;ve been having to look up how to do a lot of things because of this. I wanted to make a website so I would have something fun to do for at least a little while. College is stressful, and I don&apos;t have many college friends, so this is my outlet for things.  
            The vibe is supposed to be very unprofessional, and I&apos;ll probably have a lot of mistakes in here, but maybe someone will find it neat! My plans for the rest of this website are kind of up in the air.
          </p>
        </div>
      </section>

      {/* Background Video */}
      <section className="relative w-full h-screen flex items-center justify-center bg-black">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/websites.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </section>

      {/* Fun Websites Section */}
      <section className="bg-black py-20 w-full flex flex-col items-center">
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://reactbits.dev/text-animations/split-text"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition"
          >
            React Bits (used a lot here)
          </a>
          <a
            href="https://wigglypaint.com/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition"
          >
            Wiggly paint
          </a>
          <a
            href="https://spacetypegenerator.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition"
          >
            Space Type Generator (also super cool)
          </a>
        </div>
      </section>
    </main>
  );
}
