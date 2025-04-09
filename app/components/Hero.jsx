
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative h-[100vh] overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 -z-10 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/hero_section_paralax.jpeg')" }}
      ></div>

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black flex flex-col items-center justify-center z-10"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <div className="text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            Welcome to CF Laser Engravers
          </h1>
          <p className="mt-4 text-lg md:text-2xl">
            Precision and creativity brought to life.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="mt-6 flex flex-col md:flex-row gap-4 items-center justify-center">
            {/* Get Started Button */}
            <Link
              href="/contact"
              className="glass px-6 py-3 text-white hover:text-[#c65f3e] hover:font-bold border hover:border-[#c65f3e] rounded-lg transition-all duration-300 text-lg"
            >
              Get Started
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
}
