import TargetCursor from '@/components/TargetCursor';
import Projectiles from '@/components/Projectiles';
import ShinyText from '@/components/ShinyText';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center py-20">

      {/* Add Projectiles canvas */}
      <Projectiles />

      {/* Add TargetCursor */}
      <TargetCursor targetSelector=".cursor-target" spinDuration={2} hideDefaultCursor={true} />

      {/* Page Title */}
      <h1 className="text-5xl sm:text-6xl text-white font-bold mb-16 cursor-target drop-shadow-lg">
        Contact Me
      </h1>

      {/* Buttons Container */}
      <div className="flex flex-col sm:flex-row gap-6 items-center">
        <a href="mailto:worm.and.whimsy@gmail.com" className="cursor-target px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition drop-shadow-lg">
          <ShinyText text="Email Me" speed={3} />
        </a>
        <a href="https://www.tumblr.com/gurbies-blurbies" target="_blank" rel="noopener noreferrer" className="cursor-target px-8 py-4 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition drop-shadow-lg">
          <ShinyText text="Tumblr" speed={3} />
        </a>
        <a href="https://www.instagram.com/gurbies.art/" target="_blank" rel="noopener noreferrer" className="cursor-target px-8 py-4 bg-pink-500 text-white rounded-full font-semibold hover:bg-pink-600 transition drop-shadow-lg">
          <ShinyText text="Instagram" speed={3} />
        </a>
      </div>

      <p className="text-gray-400 mt-16 cursor-target text-center max-w-md">
        Follow me for updates & art!
      </p>
    </main>
  );
}
