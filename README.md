# Les Terrasses — Brasserie & Restaurant

Site web du restaurant **Les Terrasses**, brasserie de bistronomie à Liège, à deux pas de la gare des Guillemins.

> Cette version est une refonte en HTML statique. Une version Astro / Next.js avec gestion de contenu est prévue pour la suite.

## Pages

- `index.html` — Accueil (hero, présentation, aperçu carte, avis, infos pratiques)
- `carte.html` — La carte complète (entrées, plats, classiques liégeois, desserts, vins)
- `reservation.html` — Formulaire de réservation

## Stack

Site statique en HTML / CSS pur. Aucun build, aucune dépendance JavaScript externe.
Polices : [Fraunces](https://fonts.google.com/specimen/Fraunces), [Inter](https://fonts.google.com/specimen/Inter), [Caveat](https://fonts.google.com/specimen/Caveat) via Google Fonts.

## Structure

```
.
├── index.html              Accueil
├── carte.html              La carte
├── reservation.html        Réservation
├── mockup.css              Styles spécifiques aux pages
├── shared/
│   └── styles.css          Design system (variables, typo, composants)
├── brand/
│   └── logo.avif           Logo
└── assets/
    └── hero.jpg            Image hero accueil
```

## Le restaurant

- **Adresse** : 1, Avenue Rogier, 4000 Liège — Belgique
- **Téléphone** : 0498 / 36 66 77
- **Email** : info@lesterrasses-liege.com

## Développement local

Aucune installation requise. Ouvre simplement `index.html` dans un navigateur, ou sers le dossier avec n'importe quel serveur statique :

```bash
# Avec Python
python -m http.server 8000

# Avec Node
npx serve .
```

## Déploiement

Déployé sur [Vercel](https://vercel.com). Tout push sur la branche `main` déclenche un déploiement automatique.

## À faire

- [ ] Vectoriser le logo (SVG)
- [ ] Shooting photo (chef, salle, plats signature)
- [ ] Intégration d'un widget de réservation en temps réel (Zenchef ou TheFork)
- [ ] Page "La Maison" avec storytelling du chef
- [ ] Galerie photo
- [ ] Schéma structuré JSON-LD pour le SEO local
- [ ] Création d'un compte Instagram
- [ ] Migration vers Astro pour gestion de contenu
