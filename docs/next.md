---
id: next
sidebar_label: Et après ?
---

# Et après ?

Comme nous l'avons vu dans les deux dernières sections, l'analyse de sentiment a énormément évolué au cours des 10 dernières années. Alors qu'elle n'était initialement réalisée qu'avec des dictionnaires de mots, l'arrivée des LLMs lui a permis de devenir beaucoup plus précise et de s'adapter à de nombreux domaines. Dans le secteur financier, elle a notamment pu être utilisée sur les flux de données de nouvelles comme *Twitter* ou bien des forums spécialisés afin de prédir les mouvements du marché.

:::warning[Les limites des LLMs]
Les LLMs ont beau être puissants, leur analyse sur les sentiments reste décorélé de son utilisation à des fins de prédiction sur les marchés. En effet actuellement, nous procédons en 2 étapes distinctes :
1. Analyse de sentiment sur des flux d'information
2. Interprétation du sentiment mesuré afin d'investir sur les marchés

Cependant, cette seconde étape, réalisée par un humain, ne se base pas uniquement sur l'analyse du sentiment en lui-même. En effet, un qualitative trader va aussi regarder l'évolution chiffrée du marché pour interpréter le sentiment mesuré. Ainsi, les LLMs ne suffisent plus.
:::

**Comment faire pour intégrer l'interprétation quantitative du marché à notre analyse de sentiment ?**

## Utiliser le sentiment dans un outils de prévision

Comme nous l'avons vu dans les pages précédentes, il existe en finance de nombreux algorithmes de prédiction d'évolution. Une solution possible serait d'utiliser le sentiment comme nouvelle donnée d'entrée de notre modèle de prévision. Avec des réseaux de neurones par exemple, il existe de nombreuses structures permettant de réaliser des prédictions sur des séries temporelles :
* **Les réseaux de neurones récurents (RNN)** : ce sont des réseaux de neurones construits pour apprendre a déterminer la suite d'une séquence temporelle d'évènements [\[1,2\]](#sources).
* **Les long short-term memory (LSTM)** : ce sont une variante des réseaux de neurones récurrents (RNN) conçue pour mieux capturer les dépendances à long terme. Ils y parviennent grâce à une architecture de cellules mémoire avec trois portes (entrée, oubli, sortie) qui contrôlent le flux d'information, permettant de conserver ou d'oublier sélectivement des informations au fil du temps [\[3\]](#sources).

:::warning[Inconvénient]
Cependant, une telle structure aurait un inconvénient majeur : elle utilisera **deux réseaux de neurones décorrélés**. Cela jouera donc sur sa performance. La meilleure solution serait encore d'arriver à imbriquer ces deux réseaux de neurones en un seul.
:::


## Création d'un modèle multimodal

Les modèles multi-modaux sont des modèles d’apprentissage capables de traiter et d’intégrer plusieurs types de données en entrée, comme du texte, des images, ou des séries temporelles numériques. Dans le cadre de l’analyse de sentiment appliquée aux marchés financiers, ils sont particulièrement pertinents, car ils permettent de combiner des flux de données textuelles (articles de presse, tweets financiers, rapports d’analyse) avec des données quantitatives (cours boursiers, volatilité, indicateurs macroéconomiques). En croisant ces informations, le modèle peut mieux capturer les dynamiques de marché, en tenant compte non seulement des tendances chiffrées, mais aussi du contexte émotionnel et narratif qui influence les décisions des investisseurs. Cette approche améliore la prédiction de l’évolution des actifs financiers, en intégrant à la fois la réaction des acteurs économiques et les facteurs structurels sous-jacents. Cette structure est d'autant plus cohérent qu'elle permet de mimiquer dans son entièreté le travail d'un qualitative et quantitative trader en utilisant toutes les données et connaissances qu'il utilise.

:::tip[Défis]

Les modèles multi-modaux appliqués à l’analyse de sentiment financier rencontrent plusieurs défis majeurs. Tout d’abord, **la fusion des données hétérogènes** (textuelles et numériques) nécessite des architectures capables d’apprendre des représentations communes tout en préservant les spécificités de chaque modalité. Ensuite, l’**alignement temporel** est un enjeu crucial : les réactions du marché peuvent être immédiates ou différées par rapport aux nouvelles informations, rendant complexe l’association entre un signal textuel et une variation de prix. **De plus, la qualité et la fiabilité des données** posent problème, car les flux textuels peuvent contenir du bruit (rumeurs, biais journalistiques), tandis que les données financières sont soumises à une forte volatilité. Enfin, l’**interprétabilité** des modèles multi-modaux est un défi, car la combinaison de plusieurs sources d’information peut rendre difficile l’identification des facteurs réellement influents sur les prédictions.

:::














## Sources 




[\[1\] Michael I. Jordan (1986). "Serial order: A parallel distributed processing approach."](https://doi.org/10.1038/323533a0)

[\[2\] Jeffrey L. Elman (1990). "Finding Structure in Time." Cognitive Science, 14(2), 179–211.](https://doi.org/10.1016/S0166-4115(97)80111-2)


[\[3\] Sepp Hochreiter & Jürgen Schmidhuber (1997). "Long Short-Term Memory." Neural Computation, 9(8), 1735–1780.](https://doi.org/10.1162/neco.1997.9.8.1735)