"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const partySizes = [1, 2, 3, 4, 5, 6, 7];
const slots = [
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
];

export default function ReservationPage() {
  const [confirmed, setConfirmed] = useState(false);
  const [size, setSize] = useState(2);

  return (
    <>
      <Header />

      {/* HERO COMPACT */}
      <section className="bg-charbon text-blanc-craie pt-40 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(92,26,27,0.18),transparent_60%)]" />
        <div className="container-content relative">
          <p className="font-script text-2xl text-blanc-craie/80 mb-2 leading-none">
            À deux clics de votre table
          </p>
          <h1 className="font-display font-semibold text-display tracking-tight leading-tight mb-4">
            Réserver une table
          </h1>
          <p className="text-blanc-craie/75 max-w-xl text-lg">
            Confirmation immédiate. Vous recevez un email avec votre confirmation et un rappel
            la veille du service.
          </p>
        </div>
      </section>

      <main className="bg-craie py-16">
        <div className="container-content">
          <div className="grid grid-cols-[1.5fr_1fr] gap-12 my-8 max-lg:grid-cols-1">
            {/* FORM */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setConfirmed(true);
                setTimeout(
                  () =>
                    document.getElementById("confirm")?.scrollIntoView({ behavior: "smooth" }),
                  50,
                );
              }}
              className="bg-blanc-craie p-10 rounded border border-ardoise/10"
            >
              <h3 className="font-display font-semibold text-2xl mb-6">Votre réservation</h3>

              {/* Party size */}
              <div className="mb-6">
                <label className="block text-xs uppercase tracking-wider text-ardoise font-medium mb-2">
                  Nombre de convives
                </label>
                <div className="flex gap-1 flex-wrap">
                  {partySizes.map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setSize(n)}
                      className={`flex-1 min-w-[50px] py-3 text-base font-medium border rounded-sm transition-all ${
                        size === n
                          ? "bg-bordeaux text-blanc-craie border-bordeaux"
                          : "bg-white text-encre border-ardoise/20 hover:bg-bordeaux hover:text-blanc-craie hover:border-bordeaux"
                      }`}
                    >
                      {n === 7 ? "7+" : n}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="date"
                    className="text-xs uppercase tracking-wider text-ardoise font-medium"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    required
                    defaultValue="2026-05-16"
                    className="font-body text-base px-4 py-3 border border-ardoise/20 rounded-sm bg-white text-encre focus:outline-none focus:border-bordeaux focus:ring-2 focus:ring-bordeaux/10"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="time"
                    className="text-xs uppercase tracking-wider text-ardoise font-medium"
                  >
                    Heure
                  </label>
                  <select
                    id="time"
                    required
                    defaultValue="19:00"
                    className="font-body text-base px-4 py-3 border border-ardoise/20 rounded-sm bg-white text-encre focus:outline-none focus:border-bordeaux focus:ring-2 focus:ring-bordeaux/10"
                  >
                    {slots.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5 col-span-2 max-md:col-span-1">
                  <label
                    htmlFor="name"
                    className="text-xs uppercase tracking-wider text-ardoise font-medium"
                  >
                    Votre nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Prénom et nom"
                    className="font-body text-base px-4 py-3 border border-ardoise/20 rounded-sm bg-white text-encre focus:outline-none focus:border-bordeaux focus:ring-2 focus:ring-bordeaux/10"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="phone"
                    className="text-xs uppercase tracking-wider text-ardoise font-medium"
                  >
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    placeholder="04 XX XX XX XX"
                    className="font-body text-base px-4 py-3 border border-ardoise/20 rounded-sm bg-white text-encre focus:outline-none focus:border-bordeaux focus:ring-2 focus:ring-bordeaux/10"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs uppercase tracking-wider text-ardoise font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="vous@email.com"
                    className="font-body text-base px-4 py-3 border border-ardoise/20 rounded-sm bg-white text-encre focus:outline-none focus:border-bordeaux focus:ring-2 focus:ring-bordeaux/10"
                  />
                </div>

                <div className="flex flex-col gap-1.5 col-span-2 max-md:col-span-1">
                  <label
                    htmlFor="notes"
                    className="text-xs uppercase tracking-wider text-ardoise font-medium"
                  >
                    Demandes particulières{" "}
                    <span className="normal-case opacity-60 tracking-normal">— optionnel</span>
                  </label>
                  <textarea
                    id="notes"
                    placeholder="Allergies, anniversaire, table près de la fenêtre, chaise haute…"
                    className="font-body text-base px-4 py-3 border border-ardoise/20 rounded-sm bg-white text-encre focus:outline-none focus:border-bordeaux focus:ring-2 focus:ring-bordeaux/10 min-h-[100px] resize-y"
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-large w-full justify-center mt-6">
                Confirmer la réservation
              </button>

              <p className="text-sm text-ardoise mt-4 text-center">
                En cliquant sur Confirmer, vous acceptez notre{" "}
                <a href="#" className="text-bordeaux">
                  politique de réservation
                </a>
                . Aucune carte bancaire requise.
              </p>
            </form>

            {/* SIDEBAR */}
            <aside className="flex flex-col gap-6">
              {[
                {
                  t: "Confirmation immédiate",
                  d: "Vous recevez un email de confirmation dans la minute. Pas d'attente, pas d'appel.",
                },
                {
                  t: "Annulation flexible",
                  d: (
                    <>
                      Vous pouvez modifier ou annuler jusqu&apos;à{" "}
                      <strong className="text-encre">2 heures avant</strong> votre venue, sans frais.
                    </>
                  ),
                },
                {
                  t: "Groupes & privatisations",
                  d: (
                    <>
                      Pour plus de 8 personnes ou la privatisation de la salle, contactez-nous au{" "}
                      <strong className="text-encre">0498 / 36 66 77</strong>.
                    </>
                  ),
                },
                {
                  t: "Annulation tardive ?",
                  d: (
                    <>
                      Appelez-nous au <strong className="text-encre">0498 / 36 66 77</strong>. On
                      comprend, ça arrive — un petit mot suffit.
                    </>
                  ),
                },
              ].map((block) => (
                <div key={block.t} className="bg-lin p-6 rounded">
                  <h4 className="font-display font-semibold text-base text-bordeaux mb-2">
                    {block.t}
                  </h4>
                  <p className="text-sm text-ardoise leading-relaxed m-0">{block.d}</p>
                </div>
              ))}
            </aside>
          </div>

          {confirmed && (
            <div
              id="confirm"
              className="bg-lin border-l-4 border-bordeaux p-8 rounded-r my-12"
            >
              <p className="font-script text-3xl text-bordeaux leading-none mb-2">
                Parfait, c&apos;est noté.
              </p>
              <p className="text-lg m-0">
                Un email de confirmation vous a été envoyé. À très bientôt !
              </p>
            </div>
          )}

          {/* ÉTAPES */}
          <h2 className="font-display font-semibold text-4xl mt-24 mb-2">Et après ?</h2>
          <p className="text-ardoise max-w-prose mb-6">
            Notre processus est simple, et conçu pour vous épargner les allers-retours téléphoniques.
          </p>

          <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
            {[
              {
                n: "1",
                t: "Confirmation immédiate",
                d: "Un email arrive dans la minute, avec le détail de votre réservation et un lien pour la modifier si besoin.",
              },
              {
                n: "2",
                t: "Rappel la veille",
                d: "Un SMS ou email de rappel la veille du service. Si un imprévu survient, vous pouvez annuler en un clic.",
              },
              {
                n: "3",
                t: "Bienvenue chez nous",
                d: "À votre arrivée, votre table est prête à votre nom. On vous attend.",
              },
            ].map((step) => (
              <div key={step.n} className="bg-craie p-6 rounded border-t-[3px] border-bordeaux">
                <div className="font-display font-semibold text-5xl text-bordeaux leading-none mb-2">
                  {step.n}
                </div>
                <h4 className="font-display font-semibold text-base mb-2">{step.t}</h4>
                <p className="text-sm text-ardoise leading-relaxed m-0">{step.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-24 bg-lin border-l-4 border-bordeaux rounded-r px-8 py-4">
            <strong className="text-bordeaux">Vous préférez réserver par téléphone ?</strong>
            <br />
            Aucun problème. Appelez-nous au{" "}
            <a href="tel:+32498366677" className="text-bordeaux font-semibold">
              0498 / 36 66 77
            </a>{" "}
            — du mardi au dimanche, aux heures de service.
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
