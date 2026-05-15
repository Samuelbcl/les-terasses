import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "La Carte",
  description:
    "Découvrez la carte du restaurant Les Terrasses à Liège : entrées, plats, desserts, vins. Bistronomie liégeoise, produits choisis, prix justes.",
};

type Dish = {
  name: string;
  price: string;
  desc: string;
  allergens?: string;
  badge?: string;
};

const entrees: Dish[] = [
  {
    name: "Croquette de crevettes grises",
    price: "16 €",
    desc: "Crevettes d'Ostende, panure dorée, persil frit, citron jaune.",
    allergens: "contient · gluten, lait, crustacés",
  },
  {
    name: "Salade de chèvre chaud",
    price: "14 €",
    desc: "Chèvre du Pays de Herve, miel d'Aubel, noix, jeunes pousses, vinaigrette au sirop de Liège.",
    allergens: "végétarien · contient · lait, fruits à coque",
  },
  {
    name: "Œuf parfait, mousserons et lard",
    price: "15 €",
    desc: "Œuf cuit basse température, champignons sauvages, lard fumé, crème de persil.",
    allergens: "contient · œufs, lait",
  },
  {
    name: "Tartare de bœuf, version entrée",
    price: "14 €",
    desc: "Préparé au couteau, condiments classiques, toasts grillés.",
    allergens: "contient · gluten, œufs, moutarde",
  },
];

const plats: Dish[] = [
  {
    name: "Côte de bœuf maturée 40 jours",
    badge: "à partager",
    price: "38 €",
    desc: "Race limousine, maturée chez Hesbaye Frost, frites maison, béarnaise minute, salade de saison. Pour deux personnes, 800g.",
  },
  {
    name: "Filet pur sauce poivre",
    price: "28 €",
    desc: "Filet de bœuf 220g, sauce poivre vert au cognac, frites belges, légumes du marché.",
  },
  {
    name: "Cabillaud rôti, beurre blanc",
    price: "26 €",
    desc: "Dos de cabillaud, peau croustillante, beurre blanc aux herbes du jardin, écrasé de pommes de terre.",
    allergens: "contient · poisson, lait",
  },
  {
    name: "Risotto aux cèpes",
    badge: "végétarien",
    price: "24 €",
    desc: "Carnaroli, cèpes frais en saison, parmesan affiné 24 mois, huile de truffe blanche d'Alba.",
    allergens: "contient · lait, gluten possible",
  },
];

const liegeois: Dish[] = [
  {
    name: "Boulets à la liégeoise",
    price: "21 €",
    desc: "Boulets maison, sauce lapin, sirop de Liège authentique, oignons confits, frites belges, compote de pommes.",
  },
  {
    name: "Carbonnade flamande à la Chouffe",
    price: "22 €",
    desc: "Joue de bœuf braisée 6 heures à la bière Chouffe blonde, pain d'épices, frites maison.",
    allergens: "contient · gluten",
  },
  {
    name: "Anguilles au vert",
    price: "23 €",
    desc: "Anguille fraîche, fines herbes (cerfeuil, persil, oseille), pommes nature, vin blanc.",
    allergens: "contient · poisson, œufs",
  },
];

const desserts: Dish[] = [
  {
    name: "Tarte au sucre maison",
    price: "9 €",
    desc: "Recette traditionnelle, pâte briochée, cassonade brune, crème fraîche d'Ardenne.",
  },
  {
    name: "Moelleux chocolat noir",
    price: "10 €",
    desc: "Cœur coulant Callebaut 70%, glace vanille de Madagascar.",
  },
  {
    name: "Dame blanche",
    price: "8 €",
    desc: "Glace vanille, sauce chocolat chaud, chantilly maison, amandes effilées.",
  },
  {
    name: "Café gourmand",
    price: "11 €",
    desc: "Expresso et trois mignardises du chef pour goûter à tout.",
  },
];

const vins: Dish[] = [
  {
    name: "Chablis 1er cru — Domaine Drouhin Vaudon 2021",
    price: "48 €",
    desc: "Bourgogne blanc · 75cl · sec, minéral, idéal sur le cabillaud.",
  },
  {
    name: "Saint-Émilion Grand Cru — Château La Croix 2019",
    price: "52 €",
    desc: "Bordeaux rouge · 75cl · pour accompagner la côte de bœuf.",
  },
  {
    name: "Vin du mois — verre 14cl",
    price: "7 €",
    desc: "Sélection du chef, demandez à votre serveur.",
  },
  {
    name: "Bières belges artisanales",
    price: "5–8 €",
    desc: "Chouffe, Orval, Westmalle, Saison Dupont — la liste complète à table.",
  },
];

function MenuSection({
  id,
  title,
  note,
  intro,
  items,
}: {
  id: string;
  title: string;
  note: string;
  intro?: string;
  items: Dish[];
}) {
  return (
    <section id={id} className="my-24">
      <h2 className="font-display font-semibold text-4xl mb-2 flex items-baseline gap-4 flex-wrap">
        {title}
        <span className="font-script text-bordeaux text-xl font-normal">{note}</span>
      </h2>
      {intro && <p className="text-ardoise max-w-prose mb-12">{intro}</p>}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-6 gap-x-12">
        {items.map((item) => (
          <article key={item.name} className="py-4 border-b border-dashed border-ardoise/20">
            <div className="flex justify-between items-baseline gap-4 mb-1">
              <h3 className="font-display font-semibold text-lg leading-tight">
                {item.name}
                {item.badge && (
                  <span className="inline-block font-script text-bordeaux text-base -rotate-3 ml-2 align-middle">
                    {item.badge}
                  </span>
                )}
              </h3>
              <span className="font-display font-semibold text-bordeaux whitespace-nowrap tabular-nums">
                {item.price}
              </span>
            </div>
            <p className="text-sm text-ardoise leading-relaxed m-0">{item.desc}</p>
            {item.allergens && (
              <div className="mt-1 text-xs text-ardoise/75 tracking-wide">{item.allergens}</div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default function CartePage() {
  return (
    <>
      <Header />

      {/* HERO COMPACT */}
      <section className="bg-charbon text-blanc-craie pt-44 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(92,26,27,0.18),transparent_60%)]" />
        <div className="container-content relative">
          <p className="font-script text-2xl text-blanc-craie/80 mb-2 leading-none">
            Au feu, au four, et à la cave
          </p>
          <h1 className="font-display font-semibold text-display tracking-tight leading-tight mb-4">
            La carte
          </h1>
          <p className="text-blanc-craie/75 max-w-xl text-lg">
            Elle change avec les saisons et les arrivages. Tous les plats sont préparés sur place,
            à partir de produits locaux quand c&apos;est possible.
          </p>
        </div>
      </section>

      <main className="bg-craie py-16">
        <div className="container-content">
          {/* Onglets */}
          <nav className="flex gap-2 border-b border-ardoise/15 mb-8 flex-wrap">
            {[
              ["entrees", "Entrées"],
              ["plats", "Plats"],
              ["liegeois", "Liège oblige"],
              ["desserts", "Desserts"],
              ["vins", "Vins & boissons"],
            ].map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="px-5 py-3 text-ardoise hover:text-encre text-sm uppercase tracking-wider
                           border-b-2 border-transparent hover:border-bordeaux -mb-px
                           transition-all duration-200
                           outline-none focus-visible:ring-2 focus-visible:ring-bordeaux/30 rounded-sm"
              >
                {label}
              </a>
            ))}
          </nav>

          <MenuSection
            id="entrees"
            title="Entrées"
            note="pour commencer"
            intro="À partager, ou pour soi. Selon l'humeur."
            items={entrees}
          />

          <MenuSection
            id="plats"
            title="Plats"
            note="le cœur du métier"
            intro="Toutes les viandes sont sourcées chez nos artisans bouchers. Le poisson change selon les arrivages."
            items={plats}
          />

          <MenuSection
            id="liegeois"
            title="Liège oblige"
            note="les classiques de la maison"
            intro="Les recettes du coin, faites avec sérieux et sans concession."
            items={liegeois}
          />

          <div className="my-16 px-10 py-8 bg-lin border-l-4 border-bordeaux rounded-r font-display italic text-lg text-encre leading-relaxed">
            Notre carte évolue chaque semaine selon les arrivages du marché de la Batte et des
            producteurs locaux. N&apos;hésitez pas à demander les suggestions du jour à votre serveur.
            <span className="block font-script text-bordeaux text-2xl mt-4 not-italic">— Le Chef</span>
          </div>

          <MenuSection id="desserts" title="Desserts" note="pour finir en beauté" items={desserts} />

          <MenuSection
            id="vins"
            title="Vins & boissons"
            note="la cave a son mot à dire"
            intro="Notre carte des vins compte plus de 80 références. Voici une sélection. Demandez la carte complète à table."
            items={vins}
          />

          <div className="mt-24 bg-lin border-l-4 border-bordeaux rounded-r px-8 py-4">
            <strong className="text-bordeaux">Allergies &amp; intolérances</strong> : nos plats
            sont préparés en cuisine ouverte. Les allergènes courants sont indiqués sous chaque
            plat, mais des traces peuvent subsister. Signalez-le à votre serveur — on s&apos;adapte.
          </div>

          <div className="text-center mt-24">
            <Link href="/reservation" className="btn btn-primary btn-large">
              Réserver une table
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
