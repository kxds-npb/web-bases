# **Test Final - Développeur Web Junior**

### **Durée :** 2 heures

#### **Objectif :** Évaluer l'ensemble des compétences acquises en 6 semaines

---

## **Instructions :**

- Tu as 2 heures pour compléter ce test
- Tu peux utiliser MDN et tes notes personnelles
- Internet est autorisé POUR LA DOCUMENTATION SEULEMENT
- Pas de copie de code, pas d'IA génératrice
- Le code doit être propre, commenté et fonctionnel

---

## **Projet : Site Portfolio Personnel**

Tu vas créer un site portfolio personnel responsive avec plusieurs sections interactives.

### **Structure Requise :**

```
1. Header avec navigation
2. Section "À propos"
3. Section "Compétences"
4. Section "Projets"
5. Section "Contact"
6. Footer
```

---

## **Partie 1 : HTML Structure (20 points - 25 min)**

Crée la structure HTML complète avec :

**Consignes :**

- Utilise HTML5 sémantique
- Toutes les sections doivent avoir un ID
- Le header doit contenir un logo et une navigation
- Utilise des classes descriptives
- Inclus les meta tags essentiels

**Code minimal attendu :**

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <!-- Meta tags, titre, viewport, lien CSS -->
  </head>
  <body>
    <!-- Header avec logo + nav -->
    <!-- Section À propos -->
    <!-- Section Compétences -->
    <!-- Section Projets -->
    <!-- Section Contact -->
    <!-- Footer -->

    <!-- Script JS -->
  </body>
</html>
```

---

## **Partie 2 : CSS Styling (30 points - 35 min)**

Crée un fichier `style.css` avec :

### **A. Variables CSS et Reset (5 points)**

```css
:root {
  /* Définis une palette de couleurs cohérente */
  /* Définis des polices */
  /* Définis des espacements */
}

/* Reset basique */
```

### **B. Layout Responsive (15 points)**

```css
/* 1. Header fixe qui disparaît au scroll down, réapparaît au scroll up */

/* 2. Section À propos :
   - Desktop : texte à gauche, image à droite (flexbox)
   - Mobile : empilé
*/

/* 3. Section Compétences :
   - Grille de 4 colonnes desktop
   - 2 colonnes tablette
   - 1 colonne mobile
   - Animation au survol
*/

/* 4. Section Projets :
   - Cartes avec effet hover
   - Overlay avec bouton "Voir plus"
   - Utilise grid ou flexbox au choix
*/
```

### **C. Animations et États (10 points)**

```css
/* 1. Animation d'entrée pour les sections */

/* 2. États hover pour les liens navigation */

/* 3. Animation pour les boutons */

/* 4. Transition pour les cartes projets */
```

---

## **Partie 3 : JavaScript Interactivité (40 points - 60 min)**

### **A. Navigation Dynamique (10 points)**

```javascript
// 1. Menu burger pour mobile
// 2. Navigation smooth scroll vers les sections
// 3. Highlight du lien actif au scroll
// 4. Fermeture auto du menu mobile au clic sur un lien
```

### **B. Filtrage des Projets (10 points)**

```javascript
// Données des projets
const projets = [
  {
    id: 1,
    title: "Site E-commerce",
    category: "web",
    tags: ["HTML", "CSS", "JS"],
  },
  { id: 2, title: "App Mobile", category: "mobile", tags: ["React Native"] },
  { id: 3, title: "Dashboard", category: "web", tags: ["React", "Chart.js"] },
];

// Fonctionnalités :
// 1. Boutons de filtrage par catégorie
// 2. Affichage dynamique des projets filtrés
// 3. Compteur de projets visibles
// 4. Animation à l'apparition des projets
```

### **C. Formulaire de Contact (10 points)**

```javascript
// Validation en temps réel :
// 1. Nom : minimum 2 caractères
// 2. Email : format valide
// 3. Message : minimum 10 caractères
// 4. Affichage des messages d'erreur/succès
// 5. Prévention du spam (honeypot)
// 6. Simulation d'envoi avec feedback
```

### **D. Fonctionnalités Bonus (10 points)**

```javascript
// Choisis 2 fonctionnalités parmi :
// 1. Mode sombre/clair avec localStorage
// 2. Carousel pour les projets
// 3. Compteur de visiteurs
// 4. Téléchargement CV
// 5. Animation de typing dans la section À propos
```

---

## **Partie 4 : Git & Déploiement (10 points - 10 min)**

### **Questions :**

1. Quelle commande Git utiliserais-tu pour initialiser ton projet ?
2. Comment organiserais-tu tes commits ?
3. Sur quelle plateforme déploierais-tu ton site ? Pourquoi ?
4. Quelle est l'URL de ton repository GitHub ?

### **Production :**

- Initialise un repo Git
- Fais au moins 3 commits significatifs
- Crée un README.md avec :
  - Description du projet
  - Technologies utilisées
  - Instructions d'installation
  - Lien vers le site en ligne

---

## **Barème de Correction**

### **HTML (20 points)**

- Structure sémantique : 5 pts
- Accessibilité : 5 pts
- Organisation du code : 5 pts
- Validation W3C : 5 pts

### **CSS (30 points)**

- Design responsive : 10 pts
- Organisation/Architecture : 5 pts
- Animations/Transitions : 5 pts
- Bonnes pratiques : 5 pts
- Originalité du design : 5 pts

### **JavaScript (40 points)**

- Navigation fonctionnelle : 10 pts
- Filtrage projets : 10 pts
- Formulaire validation : 10 pts
- Code propre/maintenable : 5 pts
- Fonctionnalités bonus : 5 pts

### **Git & Déploiement (10 points)**

- Commits propres : 3 pts
- README complet : 4 pts
- Site en ligne : 3 pts

**Total : 100 points**

---

## **Niveaux d'Évaluation**

### **✅ Excellent (80-100 points)**

- Site complètement fonctionnel et responsive
- Code propre, bien organisé, commenté
- Animations fluides, UX excellente
- Déployé et accessible en ligne
- Bonus implémentés

### **👍 Très bon (65-79 points)**

- Site fonctionnel, quelques bugs mineurs
- Code propre mais peut être optimisé
- Design responsive basique
- Déployé mais peut être amélioré

### **👌 Satisfaisant (50-64 points)**

- Fonctionnalités de base implémentées
- Code fonctionnel mais désorganisé
- Design responsive avec problèmes
- Non déployé ou déploiement incomplet

### **⚠️ Insuffisant (30-49 points)**

- Fonctionnalités manquantes
- Bugs importants
- Code difficile à lire
- Pas responsive

### **❌ Échec (<30 points)**

- Site non fonctionnel
- Code incompréhensible
- Ne respecte pas les consignes

---

## **Instructions pour le Correcteur**

### **Checklist d'Évaluation :**

**HTML :**

- [ ] Doctype HTML5
- [ ] Langue définie
- [ ] Viewport présent
- [ ] Balises sémantiques utilisées
- [ ] Alt pour les images
- [ ] Structure logique

**CSS :**

- [ ] Reset/normalize
- [ ] Variables CSS
- [ ] Media queries
- [ ] Flexbox/Grid utilisés
- [ ] Unités relatives
- [ ] Mobile first

**JavaScript :**

- [ ] Pas d'erreurs console
- [ ] Code organisé en fonctions
- [ ] Gestion des erreurs
- [ ] Événements bien gérés
- [ ] localStorage utilisé

**Git :**

- [ ] Repository créé
- [ ] Commits significatifs
- [ ] README complet
- [ ] Site déployé

### **Points Bonus (jusqu'à +10 points) :**

- Design exceptionnel
- Accessibilité avancée
- Performance optimisée
- Code modulaire
- Tests unitaires

---

## **Conseils pour les Étudiants**

### **Gestion du temps :**

- **0-25 min** : HTML structure
- **25-60 min** : CSS styling
- **60-120 min** : JavaScript
- **Dernières 10 min** : Git et vérifications

### **Priorités :**

1. Fonctionnalités de base ✅
2. Responsive design ✅
3. Code propre ✅
4. Bonus si temps ⭐

### **À vérifier avant de soumettre :**

- [ ] Site fonctionne sans erreurs
- [ ] Responsive sur mobile/desktop
- [ ] Formulaire valide correctement
- [ ] Navigation fonctionne
- [ ] Code indenté et commenté
- [ ] Repository à jour

---

## **Soumission du Projet**

### **Format de soumission :**

1. Lien GitHub du repository
2. Lien vers le site déployé (Netlify, Vercel, GitHub Pages)
3. Screenshot du site sur desktop et mobile

### **Délai :**

- Test en présentiel : 2 heures exactes
- Livrable à remettre à la fin de la session

---

**Bon courage ! Montrez-nous ce que vous avez appris en 6 semaines ! 🚀**
