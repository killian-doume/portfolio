"use client";

export default function Contact() {
  return (
    <div className="bg-black text-white font-sans min-h-screen p-4 sm:p-20 flex flex-col">
     {/* Header */}
      <header className="flex items-center justify-between w-full py-4 mb-16">
        {/* Logo */}
        <div className="text-2xl sm:text-3xl font-bold tracking-wider">KD</div>
        {/* Navigation */}
        <nav>
          <ul className="flex gap-4 sm:gap-8 text-lg sm:text-xl text-white">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="projet" className="hover:underline">Projet</a></li>
            <li><a href="contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>

    </div>
  );
}