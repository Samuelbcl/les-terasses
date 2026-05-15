# Les Terrasses — Brasserie & Restaurant

Site web du restaurant **Les Terrasses**, brasserie de bistronomie à Liège, à deux pas de la gare des Guillemins.

## Stack

- **Framework** : [Next.js 14](https://nextjs.org) avec App Router
- **Langage** : TypeScript
- **Styles** : [Tailwind CSS](https://tailwindcss.com)
- **Polices** : [Fraunces](https://fonts.google.com/specimen/Fraunces), [Inter](https://fonts.google.com/specimen/Inter), [Caveat](https://fonts.google.com/specimen/Caveat) via `next/font/google`
- **Hébergement** : [Vercel](https://vercel.com)

## Pages

- `/` — Accueil (hero, présentation, aperçu carte, avis, infos pratiques)
- `/carte` — La carte complète
- `/reservation` — Formulaire de réservation

## Structure

```
.
├── app/
│   ├── layout.tsx          Layout racine + polices
│   ├── globals.css         Styles globaux + Tailwind layers
│   ├── page.tsx            Accueil
│   ├── carte/page.tsx
│   └── reservation/page.tsx
├── components/
│   ├── Topbar.tsx
│   ├── Header.tsx
│   └── Footer.tsx
├── public/
│   ├── logo.avif
│   └── hero.jpg
├── tailwind.config.ts      Palette + polices customs
├── next.config.mjs
├── tsconfig.json
└── package.json
```

## Développement local

```bash
npm install
npm run dev
```

Le site est servi sur [http://localhost:3000](http://localhost:3000).

## Build production

```bash
npm run build
npm run start
```

## Déploiement

Déploiement automatique sur [Vercel](https://vercel.com) à chaque push sur `main`.

## Le restaurant

- **Adresse** : 1, Avenue Rogier, 4000 Liège — Belgique
- **Téléphone** : 0498 / 36 66 77
- **Email** : info@lesterrasses-liege.com

## À faire

- [ ] Vectoriser le logo (SVG)
- [ ] Shooting photo (chef, salle, plats signature)
- [ ] Intégration d'un widget de réservation en temps réel (Zenchef ou TheFork)
- [ ] Page "La Maison" avec storytelling du chef
- [ ] Galerie photo
- [ ] Schéma structuré JSON-LD pour le SEO local
- [ ] Création d'un compte Instagram
