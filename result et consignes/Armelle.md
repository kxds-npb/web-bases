# Correction du projet de Armelle

## **Note finale : 49/100 = 49% ⚠️ Insuffisant**

### **Détail par section :**

---

## **Partie 1 : HTML Structure**

**Note : 14/20 = 70%** ✅ Satisfaisant

### **Points positifs :**

- ✅ Doctype HTML5 correct avec `lang="fr"`
- ✅ Fichiers séparés (HTML, CSS)
- ✅ Structure avec toutes les sections demandées
- ✅ Navigation avec menu burger
- ✅ Image avec alt text
- ✅ Boutons dans les projets
- ✅ Balises sémantiques (header, section, article, footer)

### **Problèmes :**

- ❌ **JavaScript intégré** dans HTML au lieu de fichier séparé
- ❌ **Navigation sans ancres** : `href="a_propos"` au lieu de `href="#a_propos"`
- ❌ **IDs vs classes incohérents** : `id="a_propos"` vs `class="a_proposContainer"`
- ❌ **Contenu minimal/placeholders** : "nkzmoiehf", "jeeje", "gfdytza"
- ❌ **Section contact vide** : seulement un titre
- ❌ **Footer vide**
- ❌ **Pas de formulaire de contact** (juste une section avec titre)

---

## **Partie 2 : CSS Styling**

**Note : 20/30 = 67%** ✅ Satisfaisant

### **Points positifs :**

- ✅ Variables CSS bien définies
- ✅ Reset CSS de base
- ✅ Menu burger avec animation (transform, transition)
- ✅ Design responsive (flexbox, grid)
- ✅ Media queries implicites via unités relatives
- ✅ Transitions fluides pour le menu
- ✅ Unités modernes (`dvh` utilisé)

### **Problèmes :**

- ❌ **Pas de media queries explicites** pour le responsive
- ❌ **Variables mal référencées** : `var(--polic)` au lieu de `var(--police)`
- ❌ **Code CSS incomplet** : classes `.logo`, `.navigation` vides
- ❌ **Pas d'animations d'entrée** pour les sections
- ❌ **Pas de header fixe** (position non définie)
- ❌ **Pas de grille responsive** pour les compétences (grid définie mais non fonctionnelle)
- ❌ **Styles incohérents** : largeurs en pourcentage vs pixels fixes

### **Erreurs CSS :**

```css
/* Erreur: Variable mal orthographiée */
font-family: var(--polic); /* DEVRAIT ÊTRE var(--police) */

/* Classes vides inutiles */
.logo {
} /* RIEN DÉFINI */
.navigation {
} /* RIEN DÉFINI */

/* Grid non fonctionnelle */
#competences {
  display: grid;
  flex-wrap: wrap; /* INCOMPATIBLE AVEC GRID */
}
```

---

## **Partie 3 : JavaScript Interactivité**

**Note : 10/40 = 25%** ❌ Échec

### **Points positifs :**

- ✅ Menu burger fonctionnel avec toggle
- ✅ Animation du bouton burger

### **Problèmes majeurs :**

- ❌ **JavaScript dans HTML** au lieu de fichier séparé
- ❌ **Code très limité** : seulement menu burger
- ❌ **Pas de smooth scroll** (navigation non fonctionnelle sans ancres)
- ❌ **Pas de filtrage des projets** (boutons "voir plus" inactifs)
- ❌ **Pas de validation de formulaire** (pas de formulaire)
- ❌ **Pas de données projets** en JavaScript
- ❌ **Pas de highlight des liens actifs**
- ❌ **Pas de fermeture auto du menu** au clic sur les liens

### **Problème technique :**

```javascript
// Navigation ne fonctionne pas car pas d'ancres (#)
// Les liens href="a_propos" ne pointent nulle part
```

---

## **Partie 4 : Git & Déploiement**

**Note : 5/10 = 50%** ✅ Satisfaisant

### **Points positifs :**

- ✅ Repository GitHub existant

### **Problèmes :**

- ❌ **Pas de README**
- ❌ **Pas de site déployé**
- ❌ **Structure inconnue** (difficile à évaluer sans accès au repo)
- ❌ **Pas d'instructions ou documentation**

---

## **Récapitulatif détaillé :**

| Section               | Points max | Points obtenus | Pourcentage |
| --------------------- | ---------- | -------------- | ----------- |
| **HTML**              | 20         | 14             | **70%**     |
| **CSS**               | 30         | 20             | **67%**     |
| **JavaScript**        | 40         | 10             | **25%**     |
| **Git & Déploiement** | 10         | 5              | **50%**     |
| **TOTAL**             | **100**    | **49**         | **49%**     |

---

## **Analyse technique :**

### **Points forts :**

1. **Variables CSS bien utilisées** : palette définie
2. **Menu burger animé** : transitions fluides
3. **Structure HTML complète** : toutes les sections présentes
4. **Design cohérent** : couleurs uniformes

### **Points faibles critiques :**

1. **Navigation non fonctionnelle** : liens sans ancres (#)
2. **Contenu placeholder** : texte sans signification
3. **JavaScript minimal** : seulement menu burger
4. **Sections incomplètes** : contact vide, pas de formulaire

### **Correspondance avec les consignes du test :**

#### ✅ **Réussi partiellement :**

- Structure de base HTML
- Menu burger fonctionnel (visuellement)
- Variables CSS
- Sections toutes présentes

#### ❌ **Échoué :**

- Navigation fonctionnelle (ancres manquantes)
- Filtrage des projets (JavaScript)
- Validation formulaire (pas de formulaire)
- Contenu réel dans les sections
- JavaScript dans fichier séparé

---

## **Erreurs spécifiques à corriger :**

### **1. HTML : Navigation corrigée :**

```html
<!-- AVANT (INCORRECT) -->
<a href="a_propos">A propos</a>

<!-- APRÈS (CORRECT) -->
<a href="#a_propos">A propos</a>
```

### **2. CSS : Corrections nécessaires :**

```css
/* Correction variable */
html,
body {
  font-family: var(--police); /* polic → police */
}

/* Ajout media queries */
@media (max-width: 768px) {
  #competences {
    grid-template-columns: repeat(2, 1fr);
  }
  #projets {
    flex-direction: column;
  }
}

@media (min-width: 1024px) {
  #competences {
    grid-template-columns: repeat(4, 1fr);
  }
  #projets {
    flex-direction: row;
    justify-content: center;
  }
}
```

### **3. JavaScript : Améliorations minimales :**

```javascript
// Déplacer dans fichier script.js séparé

// 1. Menu burger (existant)
let btn = document.getElementsByClassName("sp")[0];
let menus = document.getElementsByClassName("menus")[0];
btn.addEventListener("click", () => {
  menus.classList.toggle("opened");
  btn.classList.toggle("opened");
});

// 2. Fermeture menu au clic sur liens
document.querySelectorAll(".menus a").forEach((link) => {
  link.addEventListener("click", () => {
    menus.classList.remove("opened");
    btn.classList.remove("opened");
  });
});

// 3. Smooth scroll (nécessite correction HTML des ancres)
document.querySelectorAll(".menus a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth",
    });
  });
});
```

---

## **Contenu manquant selon le test :**

### **Test demandait :**

1. **Filtrage projets avec boutons** : ❌ (présents mais non fonctionnels)
2. **Données projets en JS** : ❌ (aucune donnée)
3. **Formulaire contact avec validation** : ❌ (pas de formulaire)
4. **Animation entrée sections** : ❌
5. **Header fixe** : ❌

### **Score potentiel avec corrections :**

- **HTML** : 18/20 (ajouter formulaire, ancres)
- **CSS** : 25/30 (corriger erreurs, ajouter responsive)
- **JavaScript** : 25/40 (smooth scroll + menu complet)
- **Git** : 7/10 (README + structure)
- **Total possible : 75/100**

---

## **Conclusion :**

**Armelle obtient 49/100 - Insuffisant** ⚠️

L'étudiante a une **bonne compréhension de la structure HTML/CSS** et a créé un **menu burger fonctionnel avec animations**. Cependant, le projet souffre de **problèmes techniques critiques** (navigation non fonctionnelle, contenu placeholder, JavaScript minimal) qui le placent en dessous de la barre des 50%.

**Points forts :** Design CSS, animations menu, structure de base
**Points faibles :** Navigation cassée, contenu fictif, JavaScript insuffisant
**Potentiel :** Moyen - peut atteindre 70+ avec corrections techniques

**Recommandations :**

1. **Corriger la navigation** (ajouter # aux ancres)
2. **Ajouter un formulaire de contact** avec validation
3. **Développer le JavaScript** (smooth scroll, fonctionnalités projets)
4. **Remplacer le contenu placeholder** par du vrai contenu
5. **Séparer le JavaScript** dans un fichier externe
