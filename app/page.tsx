import Image from "next/image";
import Link from "next/link";
import Topbar from "@/components/Topbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HoursToday from "@/components/HoursToday";

const featuredDishes = [
  {
    name: "Côte de bœuf maturée",
    badge: "à partager",
    price: "38 €",
    desc: "Race limousine, maturée 40 jours, frites maison, sauce béarnaise minute, salade de saison.",
    meta: "Plat signature · 800g pour deux",
  },
  {
    name: "Tartare de bœuf",
    price: "22 €",
    desc: "Coupé au couteau, condiments classiques, jaune d'œuf, frites maison.",
    meta: "Le préféré du chef",
  },
  {
    name: "Boulets à la liégeoise",
    price: "21 €",
    desc: "Recette de grand-mère, sauce lapin maison, sirop de Liège, frites belges et compote.",
    meta: "Spécialité locale",
  },
  {
    name: "Risotto aux cèpes",
    badge: "de saison",
    price: "24 €",
    desc: "Carnaroli, cèpes frais, parmesan affiné 24 mois, huile de truffe blanche.",
    meta: "Végétarien",
  },
];

const testimonials = [
  {
    quote:
      "Une vraie cuisine de cœur. La côte de bœuf est exceptionnelle, le service attentif sans être pesant, et la carte des vins fait honneur aux producteurs.",
    author: "Mathilde L.",
    source: "Google Reviews",
  },
  {
    quote:
      "Tombé par hasard sur ce restaurant en sortant de la gare Guillemins. Quelle découverte ! Bistronomie au sens noble du terme. On reviendra.",
    author: "Pierre D.",
    source: "TheFork",
  },
  {
    quote:
      "Les boulets à la liégeoise comme à la maison, en mieux. Adresse à recommander les yeux fermés à tous ceux qui aiment manger sérieusement.",
    author: "Anne-Sophie M.",
    source: "Google Reviews",
  },
];

export default function HomePage() {
  return (
    <>
      <Topbar />
      <Header />

      {/* HERO */}
      <section className="relative bg-charbon text-blanc-craie min-h-[80vh] flex items-center overflow-hidden">
        <Image
          src="/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.45] saturate-[0.85] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charbon/40 to-charbon/85" />
        <div className="container-content relative z-10 w-full grid grid-cols-[1.2fr_1fr] gap-16 items-end py-24 max-md:grid-cols-1 max-md:gap-8">
          <div>
            <p className="font-script text-3xl text-blanc-craie/80 mb-4 leading-none">
              Brasserie · Restaurant · Liège
            </p>
            <h1 className="font-display font-semibold text-display leading-[1.05] mb-6 uppercase tracking-wider">
              Bonne cuisine
              <span className="block">Et bon vin,</span>
              <span className="block font-display font-normal italic text-2xl mt-4 normal-case text-blanc-craie/70 tracking-normal max-md:text-lg">
                c&apos;est le paradis sur terre.
              </span>
            </h1>
            <p className="text-lg max-w-lg text-blanc-craie/80 mb-8">
              Bistronomie liégeoise à deux pas des Guillemins. Convivialité, produits choisis,
              et le verre qui va avec.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/reservation" className="btn btn-primary btn-large">
                Réserver une table
              </Link>
              <Link href="/carte" className="btn btn-on-dark btn-large">
                Voir la carte
              </Link>
            </div>
          </div>
          <HoursToday />
        </div>
      </section>

      {/* BISTRONOMIE */}
      <section className="bg-craie py-32">
        <div className="container-content grid grid-cols-[1fr_1.2fr] gap-16 items-center max-md:grid-cols-1 max-md:gap-8">
          <div className="relative aspect-[4/5] rounded overflow-hidden max-md:aspect-[4/3]">
            <Image
              src="/bistronomie.jpg"
              alt="Cuisine de bistronomie aux Terrasses"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="section-eyebrow">Notre Maison</p>
            <h2 className="font-display font-semibold text-5xl tracking-tight leading-[1.1] mb-6">
              La bistronomie,
              <br />à notre façon
            </h2>
            <p className="text-lg leading-relaxed text-ardoise mb-4 max-w-lg">
              La <em>Bistronomie</em> est la contraction de deux termes : bistrot et
              gastronomie. Le concept allie convivialité et grande cuisine à un prix accessible.
            </p>
            <p className="text-lg leading-relaxed text-ardoise mb-4 max-w-lg">
              Chez Les Terrasses, on cuisine ce qu&apos;on aime manger : des produits choisis chez
              nos artisans, des recettes qui ont du sens, et des vins qui racontent une histoire.
              Sans manière, mais avec soin.
            </p>
            <div className="font-script text-3xl text-bordeaux mt-6">— Les Terrasses</div>
          </div>
        </div>
      </section>

      {/* MENU PREVIEW */}
      <section className="bg-blanc-craie py-24">
        <div className="container-content">
          <p className="section-eyebrow">Aujourd&apos;hui à la carte</p>
          <h2 className="section-title">Quelques suggestions du chef</h2>
          <p className="section-intro">
            La carte change avec les saisons et les arrivages. Voici un aperçu — pour le détail,{" "}
            <Link href="/carte" className="text-bordeaux underline decoration-bordeaux underline-offset-4">
              consultez la carte complète
            </Link>
            .
          </p>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-6">
            {featuredDishes.map((d) => (
              <article
                key={d.name}
                className="bg-craie p-6 rounded border border-ardoise/10 transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="flex justify-between items-baseline gap-4 mb-2">
                  <h3 className="font-display font-semibold text-lg leading-tight">
                    {d.name}
                    {d.badge && (
                      <span className="inline-block font-script text-bordeaux text-base -rotate-3 ml-2 align-middle">
                        {d.badge}
                      </span>
                    )}
                  </h3>
                  <span className="font-display font-semibold text-bordeaux whitespace-nowrap tabular-nums">
                    {d.price}
                  </span>
                </div>
                <p className="text-sm text-ardoise mb-4 leading-relaxed">{d.desc}</p>
                <div className="text-xs uppercase tracking-wider text-ardoise/70">{d.meta}</div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/carte" className="btn btn-secondary btn-large">
              Voir la carte complète
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-lin py-24">
        <div className="container-content">
          <p className="section-eyebrow">Ce qu&apos;ils en disent</p>
          <h2 className="section-title">5 étoiles sur Google</h2>
          <p className="section-intro">
            Plus de 200 avis avec une note moyenne de 4,7/5. Voici ceux qui nous touchent le plus.
          </p>

          <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
            {testimonials.map((t) => (
              <div key={t.author} className="bg-blanc-craie p-8 rounded">
                <div className="text-bordeaux text-lg tracking-widest mb-2">★★★★★</div>
                <p className="font-display italic leading-relaxed mb-4">«{" "}{t.quote}{" "}»</p>
                <div className="text-sm text-ardoise flex justify-between items-center">
                  <span>{t.author}</span>
                  <span className="text-xs uppercase tracking-wider text-bordeaux">
                    {t.source}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-bordeaux text-blanc-craie py-24 text-center">
        <div className="container-content">
          <h2 className="font-display font-semibold text-5xl tracking-tight mb-4">
            Une table vous attend
          </h2>
          <p className="max-w-lg mx-auto mb-8 text-blanc-craie/85 text-lg">
            Réservez en deux clics, confirmation immédiate. Les tables du jeudi soir partent vite.
          </p>
          <Link
            href="/reservation"
            className="btn btn-large bg-blanc-craie text-bordeaux hover:bg-craie border-transparent hover:-translate-y-px"
          >
            Réserver maintenant
          </Link>
        </div>
      </section>

      {/* INFOS */}
      <section id="contact" className="bg-craie py-24">
        <div className="container-content grid grid-cols-2 gap-12 max-md:grid-cols-1">
          <div>
            <p className="section-eyebrow">Nous trouver</p>
            <h2 className="font-display font-semibold text-4xl mb-6">Infos pratiques</h2>

            <h3 className="font-display font-semibold text-lg text-bordeaux mt-6 mb-2">Adresse</h3>
            <p>
              1, Avenue Rogier
              <br />
              4000 Liège — Belgique
            </p>

            <h3 className="font-display font-semibold text-lg text-bordeaux mt-6 mb-2">Contact</h3>
            <p>
              <a
                href="tel:+32498366677"
                className="underline decoration-bordeaux underline-offset-4"
              >
                0498 / 36 66 77
              </a>
              <br />
              <a
                href="mailto:info@lesterrasses-liege.com"
                className="underline decoration-bordeaux underline-offset-4"
              >
                info@lesterrasses-liege.com
              </a>
            </p>

            <h3 className="font-display font-semibold text-lg text-bordeaux mt-6 mb-2">
              Horaires de service
            </h3>
            <p className="leading-relaxed">
              <strong>Lundi → mercredi</strong> · 12h00–14h30 · 18h00–21h00
              <br />
              <strong>Jeudi → dimanche</strong> · 12h00–14h30 · 18h00–22h00
            </p>

            <h3 className="font-display font-semibold text-lg text-bordeaux mt-6 mb-2">Accès</h3>
            <p>
              À 5 minutes à pied de la gare Liège-Guillemins. Parkings publics à proximité
              (Place de la République Française).
            </p>
          </div>

          <div className="aspect-[4/3] bg-charbon rounded relative overflow-hidden flex items-center justify-center text-blanc-craie">
            <div
              className="absolute inset-0 opacity-100"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, transparent 0 30px, rgba(251,247,241,0.04) 30px 31px), repeating-linear-gradient(-45deg, transparent 0 30px, rgba(251,247,241,0.04) 30px 31px)",
              }}
            />
            <div className="relative z-10 text-center">
              <div className="w-4 h-4 bg-bordeaux rounded-full mx-auto mb-2 shadow-[0_0_0_8px_rgba(92,26,27,0.25)] animate-pulse" />
              <div className="font-script text-xl text-blanc-craie/80">
                Les Terrasses · Avenue Rogier
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
