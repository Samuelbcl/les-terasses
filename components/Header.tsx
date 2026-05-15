"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/carte", label: "La Carte" },
  { href: "/contact", label: "Contact" },
];

function isLinkActive(href: string, pathname: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Transparent uniquement sur la home, en haut de page
  const transparent = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 text-blanc-craie transition-all duration-300
        ${transparent
          ? "bg-transparent"
          : "bg-charbon/95 backdrop-blur-md border-b border-blanc-craie/10"}
      `}
    >
      {/* Topbar info — visible au top, masquée au scroll */}
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-out
          ${scrolled ? "max-h-0" : "max-h-12"}`}
      >
        <div className="container-content py-2 flex items-center justify-between gap-8 flex-wrap text-xs uppercase tracking-wider">
          <span>1, Avenue Rogier — 4000 Liège</span>
          <span>
            <a
              href="tel:+32498366677"
              className="opacity-85 hover:opacity-100 transition-opacity"
            >
              0498 / 36 66 77
            </a>{" "}
            ·{" "}
            <a
              href="mailto:info@lesterrasses-liege.com"
              className="opacity-85 hover:opacity-100 transition-opacity"
            >
              info@lesterrasses-liege.com
            </a>
          </span>
        </div>
      </div>

      {/* Main bar */}
      <div className="container-content flex items-center justify-between gap-8 py-3">
        <Link
          href="/"
          className="flex items-center gap-4 no-underline text-inherit rounded-sm
                     outline-none focus-visible:ring-2 focus-visible:ring-blanc-craie/40 focus-visible:ring-offset-4 focus-visible:ring-offset-charbon"
        >
          <Image
            src="/logo.png"
            alt="Les Terrasses"
            width={96}
            height={96}
            priority
            className="h-16 w-auto"
          />
        </Link>

        <nav className="flex items-center gap-8 max-md:gap-4">
          {navItems.map(({ href, label }) => {
            const active = isLinkActive(href, pathname);
            return (
              <Link
                key={href}
                href={href}
                className={`max-md:hidden text-sm tracking-wide relative py-1
                  transition-opacity hover:opacity-80
                  outline-none focus-visible:ring-2 focus-visible:ring-blanc-craie/40 focus-visible:ring-offset-4 focus-visible:ring-offset-charbon rounded-sm
                  after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-px after:bg-blanc-craie
                  after:transition-opacity after:duration-300
                  ${active ? "after:opacity-100" : "after:opacity-0 hover:after:opacity-100"}
                `}
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/reservation"
            className="bg-bordeaux text-blanc-craie hover:bg-bordeaux-hover px-6 py-2.5 rounded-sm text-xs uppercase tracking-wider font-medium transition-colors
                       outline-none focus-visible:ring-2 focus-visible:ring-blanc-craie/40 focus-visible:ring-offset-2 focus-visible:ring-offset-charbon"
          >
            Réserver
          </Link>
        </nav>
      </div>
    </header>
  );
}
