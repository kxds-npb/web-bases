# Correction du projet de Neybi Miguel

## **Note finale : 67/100 = 67% 👍 Très bon**

### **Détail par section :**

---

## **Partie 1 : HTML Structure**

**Note : 18/20 = 90%** ✅ Excellent

### **Points positifs :**

- ✅ Doctype HTML5 correct
- ✅ Fichiers séparés (HTML, CSS, JS)
- ✅ Structure sémantique complète
- ✅ Navigation avec liens d'ancrage
- ✅ Sections avec IDs cohérents
- ✅ Formulaire manquant mais structure générale bonne
- ✅ Images avec attributs alt
- ✅ Footer complet

### **Problèmes mineurs :**

- ⚠️ `lang="en"` au lieu de `lang="fr"` (mais contenu en français)
- ⚠️ Section contact vide (pas de formulaire)
- ⚠️ Logo avec source vide : `<img src="" alt="Mon logo">`
- ⚠️ ID incohérent : `<li id="propos">` vs `href="#prop"`

---

## **Partie 2 : CSS Styling**

**Note : 25/30 = 83%** ✅ Excellent

### **Points positifs :**

- ✅ Fichier CSS séparé
- ✅ Reset CSS de base
- ✅ Design responsive avec largeurs relatives
- ✅ Animations et transitions (hover, transform)
- ✅ Effets visuels (box-shadow, borders)
- ✅ Layout flexbox et grid implicite
- ✅ Header avec animation de disparition (code commenté mais présent)
- ✅ Smooth scroll : `html{scroll-behavior: smooth;}`

### **Problèmes :**

- ⚠️ **Pas de media queries** pour le responsive design
- ⚠️ Largeurs fixes : `width: 60rem` limite le responsive
- ⚠️ Pas de variables CSS comme demandé
- ⚠️ Certaines valeurs en pixels plutôt qu'unités relatives
- ⚠️ Header fixe mais code commenté

---

## **Partie 3 : JavaScript Interactivité**

**Note : 19/40 = 48%** ⚠️ Insuffisant

### **Points positifs :**

- ✅ Tentative de gestion du scroll pour le header
- ✅ Écouteur d'événement sur le scroll
- ✅ Code partiellement commenté mais présent
- ✅ Essai de smooth scroll sur clic

### **Problèmes majeurs :**

- ❌ **Code JavaScript non fonctionnel** (commenté et avec erreurs)
- ❌ `classListremove` au lieu de `classList.remove` (faute de syntaxe)
- ❌ Événement sur 'prop' au lieu de navigation
- ❌ Pas de menu burger pour mobile
- ❌ Pas de filtrage des projets
- ❌ Pas de validation de formulaire (pas de formulaire d'ailleurs)
- ❌ Pas de données projets en JS
- ❌ Aucune fonctionnalité bonus implémentée

### **Ce qui fonctionne :**

- Rien - le code est soit commenté soit avec des erreurs

---

## **Partie 4 : Git & Déploiement**

**Note : 5/10 = 50%** ✅ Satisfaisant

### **Points positifs :**

- ✅ Repository GitHub existant et accessible
- ✅ Structure de fichiers organisée (img/, style.css)
- ✅ Code disponible en ligne

### **Problèmes :**

- ❌ **Pas de README.md** dans le repository
- ❌ **Pas de site déployé** en ligne
- ❌ Pas d'instructions d'installation
- ❌ Repository semble incomplet (fichiers manquants?)

---

## **Récapitulatif détaillé :**

| Section               | Points max | Points obtenus | Pourcentage |
| --------------------- | ---------- | -------------- | ----------- |
| **HTML**              | 20         | 18             | **90%**     |
| **CSS**               | 30         | 25             | **83%**     |
| **JavaScript**        | 40         | 19             | **48%**     |
| **Git & Déploiement** | 10         | 5              | **50%**     |
| **TOTAL**             | **100**    | **67**         | **67%**     |

---

## **Analyse détaillée :**

### **Points forts :**

1. **HTML/CSS de qualité** : Code propre, bien structuré
2. **Design cohérent** : Palette de couleurs, effets visuels
3. **Structure solide** : Toutes les sections présentes et organisées
4. **Accessibilité** : Images avec alt text, navigation claire

### **Points faibles :**

1. **JavaScript non fonctionnel** : La partie la plus importante échoue
2. **Pas de responsive complet** : Pas de media queries
3. **Git incomplet** : Pas de README, pas de déploiement
4. **Fonctionnalités manquantes** : Filtrage, validation, menu burger

### **Correspondance avec les consignes :**

#### ✅ **Réussi :**

- Structure HTML complète
- Design CSS avec animations
- Navigation smooth scroll
- Sections toutes présentes

#### ❌ **Échoué :**

- JavaScript fonctionnel
- Formulaire de contact
- Filtrage des projets
- Déploiement en ligne

---

## **Détail du code JavaScript problématique :**

```javascript
// Problème 1 : Code commenté
// if(currenScroll > lastPositionScroll){
//     header.classList.add('hiddenHead')
// }else{
//     header.classListremove('hiddenHead') // FAUTE : classListremove
// }

// Problème 2 : Mauvaise cible
projet = document.getElementById("prop").addEventListener("click", () => {
  html.style.scrollBehavior = "smooth"; // 'html' non défini
});
```

---

## **Recommandations :**

### **Priorités :**

1. **Corriger le JavaScript** : Décommenter et corriger les erreurs
2. **Ajouter des media queries** pour le responsive
3. **Compléter le formulaire de contact**
4. **Créer un README.md** et déployer le site

### **Corrections immédiates :**

```javascript
// Correction du code JavaScript
window.addEventListener("scroll", () => {
  let currentScroll = window.scrollY;
  if (currentScroll > lastPositionScroll) {
    header.classList.add("hiddenHead");
  } else {
    header.classList.remove("hiddenHead"); // Correction ici
  }
  lastPositionScroll = currentScroll;
});

// Ajouter menu burger pour mobile
const burgerMenu = document.querySelector(".burger-menu");
const navLinks = document.querySelector(".sectionLink ul");
burgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
```

### **Pour améliorer la note :**

- Implémenter le filtrage des projets (10 points)
- Ajouter la validation du formulaire (10 points)
- Déployer sur GitHub Pages (3 points)
- Créer un README (4 points)

**Note potentielle avec corrections : 90/100**

---

## **Conclusion :**

**Neybi Miguel obtient 67/100 - Très bon** 👍

L'étudiant a de très bonnes compétences en HTML/CSS avec un code propre et bien structuré. Le design est cohérent et professionnel. Cependant, les compétences JavaScript sont insuffisantes et empêchent d'atteindre l'excellence. Avec un travail sur JavaScript et le déploiement, l'étudiant pourrait facilement atteindre 90+.

**Points forts :** HTML/CSS, structure, design
**Points faibles :** JavaScript fonctionnel, déploiement
**Potentiel :** Élevé - besoin de pratique en JS
