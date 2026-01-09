# Correction du projet de Maelys

## **Note finale : 45/100 = 45% ⚠️ Insuffisant**

### **Détail par section :**

---

## **Partie 1 : HTML Structure**

**Note : 15/20 = 75%** ✅ Satisfaisant

### **Points positifs :**

- ✅ Doctype HTML5 correct
- ✅ `lang="fr"` comme demandé
- ✅ Viewport présent
- ✅ Structure sémantique (header, main, section, article, footer)
- ✅ Toutes les sections avec ID
- ✅ Formulaire de contact présent
- ✅ Bouton menu burger

### **Problèmes :**

- ❌ **CSS intégré** dans HTML au lieu de fichier séparé (test demande fichier CSS)
- ❌ Incohérences dans les IDs : `id="aPropos"` vs `id="compétences"` (accent) vs `id="Projet"` (majuscule)
- ❌ Balises `<article>` mal utilisées (devraient être dans une section Projets)
- ❌ Liens vides dans section Projets : `<a href=""></a>`
- ❌ Attribut `for` manquant dans labels : `<label email>` au lieu de `<label for="email">`
- ❌ Formulaires sans attributs `name` ou `id` pour les inputs

---

## **Partie 2 : CSS Styling**

**Note : 18/30 = 60%** ✅ Satisfaisant

### **Points positifs :**

- ✅ Reset CSS avec `* { box-sizing: border-box; }`
- ✅ Media queries pour le responsive
- ✅ Grid layout pour les compétences
- ✅ Effets hover sur les items de grille
- ✅ Flexbox utilisé correctement
- ✅ Design cohérent avec transitions

### **Problèmes :**

- ❌ **CSS dans HTML** au lieu de fichier externe
- ❌ Erreur de syntaxe : `grid-template-colums` (faute d'orthographe)
- ❌ Media queries non fonctionnelles (classe `.contenir-grille` n'existe pas)
- ❌ Pas de variables CSS comme demandé
- ❌ Pas d'animation d'entrée pour les sections
- ❌ Pas de header fixe avec gestion du scroll
- ❌ Pas d'overlay sur les projets
- ❌ Section "À propos" pas responsive comme demandé (flex desktop → stack mobile)

---

## **Partie 3 : JavaScript Interactivité**

**Note : 0/40 = 0%** ❌ Échec total

### **Problèmes :**

- ❌ **Fichier JS vide** (seulement `<script></script>`)
- ❌ Pas de navigation dynamique
- ❌ Menu burger non fonctionnel
- ❌ Pas de smooth scroll
- ❌ Pas de filtrage des projets
- ❌ Pas de validation de formulaire
- ❌ Pas de données projets
- ❌ Aucune fonctionnalité bonus

---

## **Partie 4 : Git & Déploiement**

**Note : 12/10 = 120%** ✅ Excellent (bonus)

### **Points positifs :**

- ✅ Repository GitHub existant
- ✅ Code disponible en ligne
- ✅ Temps de travail déclaré (3h)
- ✅ Bonus : Le code est dans un fichier spécifique sur GitHub

### **Note :**

Bien que la partie Git soit bien faite, l'étudiant a dépassé le temps (3h au lieu de 2h).

---

## **Récapitulatif détaillé :**

| Section               | Points max | Points obtenus | Pourcentage |
| --------------------- | ---------- | -------------- | ----------- |
| **HTML**              | 20         | 15             | **75%**     |
| **CSS**               | 30         | 18             | **60%**     |
| **JavaScript**        | 40         | 0              | **0%**      |
| **Git & Déploiement** | 10         | 12             | **120%**    |
| **TOTAL**             | **100**    | **45**         | **45%**     |

---

## **Analyse par compétence :**

### **Points forts :**

1. **HTML sémantique** : Bonne compréhension des balises
2. **CSS Layout** : Utilisation correcte de Grid et Flexbox
3. **Responsive design** : Tentative de media queries
4. **Gestion Git** : Repository bien organisé

### **Points faibles critiques :**

1. **JavaScript absent** : Compétence principale manquante (40% de la note)
2. **CSS intégré** : Mauvaise pratique pour un projet de test
3. **Incohérences** : IDs et classes non standardisées
4. **Fonctionnalités manquantes** : Rien d'interactif ne fonctionne

### **Correspondance avec les consignes :**

- ❌ **Durée** : 3h au lieu de 2h
- ❌ **JavaScript** : Absence totale (partie la plus importante)
- ❌ **Fichiers séparés** : CSS dans HTML au lieu de fichier externe
- ✅ **Structure** : Respectée dans l'ensemble
- ✅ **Sections** : Toutes présentes

---

## **Recommandations :**

### **Urgent :**

1. **Apprendre JavaScript** : C'est la compétence critique manquante
2. **Séparer HTML/CSS/JS** : Bonnes pratiques de développement
3. **Tester les fonctionnalités** : S'assurer que tout fonctionne avant soumission

### **À améliorer :**

1. **Consistance des noms** : IDs sans accents, sans majuscules aléatoires
2. **Accessibilité** : Labels avec attribut `for`, textes alternatifs pour images
3. **Compléter les sections** : Projets avec contenu réel

### **Pour la prochaine évaluation :**

- Prioriser JavaScript d'abord
- Respecter les consignes de séparation des fichiers
- Tester toutes les fonctionnalités demandées
- Vérifier l'orthographe et la consistance du code

---

## **Note finale : 45/100 = 45% - Insuffisant**

**L'étudiant Maelys a de bonnes bases en HTML/CSS mais doit absolument développer ses compétences JavaScript pour réussir ce type de test. La structure est présente mais l'interactivité est complètement absente.**
