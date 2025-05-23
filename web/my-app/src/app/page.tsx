// app/page.tsx (or pages/index.tsx in older routing)
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between px-6 py-16 sm:px-20 bg-white text-gray-900">
      <main className="flex flex-col items-center gap-8 text-center max-w-2xl">
        <Image
          src="/carelink-logo.svg" // Replace with your actual logo or use "/logo.png"
          alt="CareLink Logo"
          width={100}
          height={100}
          className="mb-4"
        />
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Welcome to CareLink
        </h1>
        <p className="text-lg sm:text-xl text-gray-600">
          Connecting underserved individuals to nearby clinics based on their
          ZIP code, insurance status, and documentation needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link
            href="/form"
            className="inline-block px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
          <a
            href="#about"
            className="inline-block px-6 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition"
          >
            Learn More
          </a>
        </div>
      </main>

      <section id="about" className="mt-20 max-w-2xl text-center text-gray-700">
        <h2 className="text-2xl font-semibold mb-4">How CareLink Works</h2>
        <p className="mb-2">
          CareLink asks simple questions like your ZIP code, insurance status,
          and school district affiliation.
        </p>
        <p className="mb-2">
          We match you with nearby clinics that best fit your needs and show you
          their hours, contact info, and more.
        </p>
        <p>No insurance? We’ll help guide what documentation you’ll need.</p>
      </section>

      <footer className="text-sm text-gray-400 mt-24">
        &copy; {new Date().getFullYear()} CareLink. All rights reserved.
      </footer>
    </div>
  );
}
