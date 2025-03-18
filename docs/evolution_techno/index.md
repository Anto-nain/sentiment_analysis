---
id: index
title: Apparition des premières technologies
sidebar_label: Évolutions des Technologies
---

# 📊 Analyse de Sentiment en Finance : Approches Basées sur les Dictionnaires

## 1️⃣ Introduction
L'analyse de sentiment appliquée au secteur financier vise à **quantifier l'opinion exprimée dans des documents financiers** tels que les rapports annuels, les articles de presse économique ou encore les discussions d'investisseurs. Parmi les méthodes les plus classiques, celles basées sur des **dictionnaires de sentiment** offrent une approche efficace et interprétable.

Dans cette section, nous explorerons les travaux ayant conduit au développement de ces méthodes, en nous basant sur les recherches suivantes :
- Création d’un **dictionnaire spécifique à la finance** [1].
- Analyse des **communiqués de presse d’entreprises** [5].
- Étude de l’impact du **ton des articles de presse** sur les marchés financiers [6].
- Exploitation des **forums boursiers** pour en extraire des signaux financiers [7].

---

## 2️⃣ Méthodes Basées sur les Dictionnaires
Les approches par dictionnaires reposent sur l’utilisation de **lexiques prédéfinis** contenant des listes de mots associés à une polarité **positive** ou **négative**. Chaque texte est ensuite analysé pour mesurer la fréquence des mots issus de ces listes et en déduire une tonalité globale.

**Formule générale pour le score de sentiment :**

$$
S = \frac{N_{pos} - N_{neg}}{N_{total}}
$$

Où :
- $N_{pos}$ est le nombre de mots positifs.
- $N_{neg}$ est le nombre de mots négatifs.
- $N_{total}$ est le nombre total de mots analysés.

---

## 3️⃣ Travaux de Recherche

### 📌 [1] Loughran & McDonald (2011) – Dictionnaire Financier
- Problème : Les **dictionnaires classiques** comme Harvard IV-4 contiennent des biais dans un contexte financier (ex. *liability* classé comme négatif alors qu'il est neutre en finance).
- Solution : Construction d’un **lexique adapté aux textes financiers** avec des catégories comme **positif, négatif, litigieux, incertain**.
- Résultat : Le ton des **rapports financiers (10-K, 10-Q)** est corrélé aux performances boursières.

### 📌 [5] Henry (2008) – Impact des Communiqués de Presse
- Étude du **ton des annonces de résultats** des entreprises.
- Méthode : Comptage des mots issus d’un dictionnaire de sentiment appliqué aux communiqués.
- Conclusion : Une tonalité négative est **associée à une réaction défavorable** des marchés.

### 📌 [6] Tetlock (2007) – Influence des Médias sur le Marché
- Analyse de **centaines d’articles du Wall Street Journal**.
- Utilisation d’un **indice de négativité** basé sur un dictionnaire de mots pessimistes.
- Observation : Plus un article est **négatif**, plus les marchés chutent temporairement.

### 📌 [7] Das & Chen (2007) – Forums Boursiers
- Étude des **discussions en ligne** (Yahoo Finance, forums d’investisseurs).
- Technique : Extraction de sentiment à partir de messages boursiers.
- Résultat : La **fréquence des termes négatifs prédit les fluctuations de prix**.

---

## 4️⃣ Contenu des Bases de Données
| **Étude** | **Données analysées** | **Sources** |
|-----------|----------------------|-------------|
| **[1] Loughran & McDonald** | Rapports financiers | 10-K, 10-Q |
| **[5] Henry** | Communiqués de presse | Entreprises du S&P 500 |
| **[6] Tetlock** | Articles de presse | Wall Street Journal |
| **[7] Das & Chen** | Messages de forums | Yahoo Finance |

---

## 5️⃣ Lexique des Termes Techniques
- **10-K / 10-Q** : Documents financiers annuels et trimestriels soumis par les entreprises cotées en bourse.
- **Polarité de sentiment** : Score indiquant si un texte est **positif ou négatif**.
- **Indice de négativité** : Mesure basée sur la fréquence des mots négatifs dans un texte.
- **Réaction du marché** : Variation du prix des actions en réponse aux nouvelles informations.

---

## 6️⃣ Conclusion
Les méthodes basées sur les dictionnaires offrent une **approche simple et robuste** pour l’analyse de sentiment en finance. Toutefois, elles présentent certaines **limites** :
- **Sensibilité au contexte** : Un même mot peut avoir une signification différente selon l’usage.
- **Absence de prise en compte de la syntaxe** : Les nuances du langage ne sont pas analysées.
- **Nécessité d’un dictionnaire spécialisé** pour obtenir des résultats pertinents en finance.

Dans la section suivante, nous explorerons comment le **machine learning** et les **modèles neuronaux** ont permis d’affiner ces analyses. 🚀
