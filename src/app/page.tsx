"use client";
import { CardBody, CardContainer, CardItem } from "@/components/ui/shadcn-io/3d-card";

export default function Home() {
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
<CardContainer className="inter-var" containerClassName="py-8">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[24rem] h-auto rounded-xl p-4 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Make things float in air
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-16">
          <CardItem
            translateZ={20}
            as="a"
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
      {/* Section principale */}
      <main className="flex flex-col items-center justify-center flex-1 w-full">
        <h2 className="text-center font-bold text-2xl sm:text-4xl mb-16 tracking-wide">PLUS D'INFOS</h2>

        <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl">
          {/* Coordonnées */}
          <div className="bg-white text-black flex-1 min-w-[300px] flex flex-col items-center justify-center p-8 rounded-3xl shadow-lg">
            <span className="text-3xl sm:text-5xl font-semibold mb-4 text-center">Coordonnées</span>
            <a href="mailto:killiandoume@gmail.com" className="text-lg sm:text-xl font-bold break-all hover:underline">
              killiandoume@gmail.com
            </a>
            <a href="tel:0777859784" className="text-lg sm:text-xl mt-2 hover:underline">
              07 77 85 97 84
            </a>
          </div>

          {/* Suivez-moi */}
          <div className="bg-gray-900 flex-1 min-w-[300px] flex flex-col items-center justify-center p-8 rounded-3xl shadow-lg">
            <span className="text-3xl sm:text-5xl mb-4 text-center">Suivez moi</span>
            <a href="https://www.linkedin.com/in/killian-doume/" target="_blank" rel="noopener noreferrer" className="text-lg sm:text-xl mb-2 hover:underline">
              Linkedin
            </a>
            <a href="https://github.com/killian-doume" target="_blank" rel="noopener noreferrer" className="text-lg sm:text-xl hover:underline">
              Github
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}