import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-charbon text-blanc-craie pt-20 pb-8 mt-24">
      <div className="container-content">
        <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 mb-16 max-md:grid-cols-2 max-md:gap-8">
          <div>
            <Image
              src="/logo.avif"
              alt="Les Terrasses"
              width={80}
              height={80}
              className="h-20 w-auto mb-4"
            />
            <p className="text-sm opacity-75 leading-relaxed">
              Brasserie · Restaurant. Bistronomie liégeoise à deux pas des Guillemins.
            </p>
          </div>
          <div>
            <h4 className="font-display text-lg mb-4">Nous trouver</h4>
            <p className="text-sm opacity-75 leading-relaxed">
              1, Avenue Rogier
              <br />
              4000 Liège
            </p>
          </div>
          <div>
            <h4 className="font-display text-lg mb-4">Contact</h4>
            <a
              href="tel:+32498366677"
              className="text-sm opacity-75 hover:opacity-100 transition-opacity block"
            >
              0498 / 36 66 77
            </a>
            <a
              href="mailto:info@lesterrasses-liege.com"
              className="text-sm opacity-75 hover:opacity-100 transition-opacity block"
            >
              info@lesterrasses-liege.com
            </a>
          </div>
          <div>
            <h4 className="font-display text-lg mb-4">Suivez-nous</h4>
            <a
              href="https://www.facebook.com/pages/Les-Terrasses/117223591956325"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm opacity-75 hover:opacity-100 transition-opacity block"
            >
              Facebook
            </a>
            <span className="text-sm opacity-75 block">
              Instagram{" "}
              <span className="font-script text-ocre-soft text-base">à venir</span>
            </span>
          </div>
        </div>
        <div className="border-t border-blanc-craie/10 pt-6 flex justify-between text-xs opacity-50 max-md:flex-col max-md:gap-2">
          <span className="font-script text-base opacity-80">Bonne cuisine, et bon vin.</span>
          <span>© {new Date().getFullYear()} Les Terrasses</span>
        </div>
      </div>
    </footer>
  );
}
