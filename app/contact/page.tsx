"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <Header />

      {/* HERO COMPACT */}
      <section className="bg-charbon text-blanc-craie pt-44 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(92,26,27,0.18),transparent_60%)]" />
        <div className="container-content relative">
          <p className="font-script text-2xl text-blanc-craie/80 mb-2 leading-none">
            Une question, un mot, une envie
          </p>
          <h1 className="font-display font-semibold text-display tracking-tight leading-tight mb-4">
            Nous contacter
          </h1>
          <p className="text-blanc-craie/75 max-w-xl text-lg">
            Par téléphone, par email, ou via le formulaire ci-dessous. On vous répond dans la
            journée — sauf le lundi où la cuisine prend une pause méritée.
          </p>
        </div>
      </section>

      <main className="bg-craie py-16">
        <div className="container-content">

          {/* INFOS PRATIQUES */}
          <div className="grid grid-cols-2 gap-12 mb-16 max-md:grid-cols-1">
            <div>
              <p className="section-eyebrow">Nous trouver</p>
              <h2 className="font-display font-semibold text-4xl mb-6">Infos pratiques</h2>

              <h3 className="font-display font-semibold text-lg text-bordeaux mt-6 mb-2">Adresse</h3>
              <p>
                1, Avenue Rogier
                <br />
                4000 Liège — Belgique
              </p>

              <h3 className="font-display font-semibold text-lg text-bordeaux mt-6 mb-2">Téléphone</h3>
              <p>
                <a
                  href="tel:+32498366677"
                  className="underline decoration-bordeaux underline-offset-4 hover:decoration-2"
                >
                  0498 / 36 66 77
                </a>
              </p>

              <h3 className="font-display font-semibold text-lg text-bordeaux mt-6 mb-2">Email</h3>
              <p>
                <a
                  href="mailto:info@lesterrasses-liege.com"
                  className="underline decoration-bordeaux underline-offset-4 hover:decoration-2"
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
                className="absolute inset-0"
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

          {/* FORMULAIRE */}
          <div className="bg-blanc-craie p-10 rounded border border-ardoise/10 max-w-3xl mx-auto">
            <p className="section-eyebrow">Écrivez-nous</p>
            <h2 className="font-display font-semibold text-3xl mb-2">Un message</h2>
            <p className="text-ardoise mb-8">
              Le formulaire est lu chaque matin par l&apos;équipe. Pour une réservation,{" "}
              <a
                href="/reservation"
                className="text-bordeaux underline decoration-bordeaux underline-offset-4"
              >
                utilisez la page dédiée
              </a>{" "}
              — c&apos;est plus rapide.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div className="grid grid-cols-2 gap-6 mb-2 max-md:grid-cols-1">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="c-name"
                    className="text-xs uppercase tracking-wider text-ardoise font-medium"
                  >
                    Votre nom
                  </label>
                  <input
                    type="text"
                    id="c-name"
                    required
                    placeholder="Prénom et nom"
                    className="font-body text-base px-4 py-3 border border-ardoise/20 rounded-sm bg-white text-encre focus:outline-none focus:border-bordeaux focus:ring-2 focus:ring-bordeaux/10"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="c-email"
                    className="text-xs uppercase tracking-wider text-ardoise font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="c-email"
                    required
                    placeholder="vous@email.com"
                    className="font-body text-base px-4 py-3 border border-ardoise/20 rounded-sm bg-white text-encre focus:outline-none focus:border-bordeaux focus:ring-2 focus:ring-bordeaux/10"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5 mb-2">
                <label
                  htmlFor="c-subject"
                  className="text-xs uppercase tracking-wider text-ardoise font-medium"
                >
                  Sujet
                </label>
                <select
                  id="c-subject"
                  required
                  className="font-body text-base px-4 py-3 border border-ardoise/20 rounded-sm bg-white text-encre focus:outline-none focus:border-bordeaux focus:ring-2 focus:ring-bordeaux/10"
                >
                  <option>Question sur la carte ou les allergènes</option>
                  <option>Privatisation, groupe de plus de 8 personnes</option>
                  <option>Demande de devis (événement, séminaire)</option>
                  <option>Candidature spontanée</option>
                  <option>Autre</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5 mb-6">
                <label
                  htmlFor="c-message"
                  className="text-xs uppercase tracking-wider text-ardoise font-medium"
                >
                  Votre message
                </label>
                <textarea
                  id="c-message"
                  required
                  placeholder="Dites-nous tout…"
                  className="font-body text-base px-4 py-3 border border-ardoise/20 rounded-sm bg-white text-encre focus:outline-none focus:border-bordeaux focus:ring-2 focus:ring-bordeaux/10 min-h-[160px] resize-y"
                />
              </div>

              <button type="submit" className="btn btn-primary btn-large w-full justify-center">
                Envoyer le message
              </button>

              {sent && (
                <div className="mt-6 bg-lin border-l-4 border-bordeaux p-6 rounded-r">
                  <p className="font-script text-2xl text-bordeaux leading-none mb-1">
                    Merci, c&apos;est envoyé.
                  </p>
                  <p className="text-sm m-0">
                    On revient vers vous dans la journée. À très bientôt.
                  </p>
                </div>
              )}

              <p className="text-xs text-ardoise text-center mt-4">
                Pour une urgence ou une réservation last-minute,{" "}
                <a href="tel:+32498366677" className="text-bordeaux font-medium">
                  appelez-nous au 0498 / 36 66 77
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
