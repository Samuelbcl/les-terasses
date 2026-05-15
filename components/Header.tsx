"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/carte", label: "La Carte" },
  { href: "/#galerie", label: "Galerie" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-charbon text-blanc-craie border-t border-blanc-craie/10 py-6">
      <div className="container-content flex items-center justify-between gap-8">
        <Link href="/" className="flex items-center gap-4 no-underline text-inherit">
          <Image
            src="/logo.avif"
            alt="Les Terrasses"
            width={56}
            height={56}
            priority
            className="h-14 w-auto"
          />
        </Link>

        <nav className="flex items-center gap-8 max-md:gap-4">
          {navItems.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href.split("#")[0]);
            return (
              <Link
                key={href}
                href={href}
                className={`max-md:hidden text-sm tracking-wide transition-opacity hover:opacity-70 relative ${
                  isActive ? "after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-2 after:h-px after:bg-ocre-soft" : ""
                }`}
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/reservation"
            className="bg-bordeaux text-blanc-craie hover:bg-bordeaux-hover px-6 py-2.5 rounded-sm text-xs uppercase tracking-wider font-medium transition-colors"
          >
            Réserver
          </Link>
        </nav>
      </div>
    </header>
  );
}
