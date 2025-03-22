---
id: dict_senti
title: Apparition des premières technologies
sidebar_label: Les premières technologies
---

# Apparition des premières technologies

Depuis le début des années 2000, les technologies de l'information ont connu une spectaculaire évolution. La richesse en connaissances et en information croissante des canaux de communication a permis l'émergence de nouvelles méthodes d'analyse de données. Les premières technologies d'analyse de sentiment ont vu le jour sous la forme de méthodes basées sur des dictionnaires de sentiment. Ces approches ont ouvert la voie à des avancées majeures dans le domaine de l'analyse de sentiment appliquée à la finance.

## Prédiction du rendement et de la volatilité du marché

Une des premières applications de l'analyse de sentiment en finance a été la prédiction de la volatilité du marché à partir de données textuelles. Les premiers outils apparus dans les années 2010 se composent de dictionnaires de sentiment, tels que *VADER* (Valence Aware Dictionary and sEntiment Reasoner) [\[2\]](#sources).

*VADER* est un outil d'analyse de sentiment sous la forme d'un dictionnaire. Développé en 2014 par C.J. Hutto et Eric Gilbert, il est particulièrement adapté à l'analyse de textes provenant des réseaux sociaux. VADER est capable de détecter les émotions exprimées dans un texte, telles que la joie, la tristesse, la colère ou la peur. Il attribue à chaque mot un score de sentiment en fonction de sa polarité (positive, négative ou neutre) et de son intensité. Historiquement, il a été construit manuellement par 10 personnes indépendantes en annotant des milliers de mots. Le score attribué va de -4 (très négatif) à +4 (très positif) en passant par 0 (neutre). Finalement, en aggrégeant leurs résultats on obtient pour chaque mot :

* Le score de sentiment moyen du mot
* L'écart-type de ce score
* Les scores de sentiment attribués par les 10 individus pour ce mot

Ce dictionnaire permet ainsi de mesurer la tonalité d'un texte en agrégeant les scores de sentiment de chaque mot.


En 2020, une étude a été menée par 4 chercheurs anglais sur une application potentielle de VADER pour prédire le *rendement* et la *volatilité* du marché [\[1\]](#sources)
.

:::info[Rendement et volatilité]

$$
r_t = log(\frac{P_t}{P_{t-1}})
$$  
<br/>
$$
V_t = \sqrt{\frac{1}{N} \sum_{t=1}^{N} (r_{t} - \bar{r})^2}*\sqrt{252}
$$
  
Où :
- $P_t$ est le prix de l'actif à la date $t$.
- $r_t$ est le rendement de l'actif à la date $t$.
- $V_t$ est la volatilité de l'actif à la date $t$.
:::

Ces quantités étant présentes chaque jour, il a d'abord été intéressant de se concentrer sur des données provenant de *Twitter* pour avoir des informations en temps réel. Leur objectif était de mettre en évidence la corrélation entre la *volatilité*, *rendement*,  de l'indice *FTSE100* et le sentiment des tweets. 

:::note
Le *FTSE100* est un indice boursier britannique qui regroupe les 100 plus grandes entreprises cotées à la bourse de Londres. Il est l'équivalent du *CAC40* en France.
:::

Pour ce faire, ils se sont notamment appuyé sur l'étude de Gabrovšek et al. [\[3\]](#sources) et sur sa formule de calcul du sentiment.

:::info[Score de sentiment (*Gabrovšek et al.*)]
$$
Sent_d = \frac{N_d(pos) - N_d(neg)}{N_d(pos) + N_d(neut) + N_d(neg) + 3}
$$


Où :
- $N_d(pos)$ est le nombre de tweets positifs le jour $d$.
- $N_d(neg)$ est le nombre de tweets négatifs le jour $d$.
- $N_d(neut)$ est le nombre de tweets neutres le jour $d$.
:::

Cette corrélation a été testée avec le *coefficient de correlation de Pearson* et le *test de causalité de Granger*. Il en ressort que :

* Le sentiment négatif des titres des articles de presse est corrélé avec le *rendement* du marché au même jour. Autrement dit, un sentiment négatif dans les articles de presse est associé à une baisse du marché le jour même.
* Le sentiment positif des tweets est fortement corrélé négativement à la *volatilité* du marché le jour suivant. Autrement dit, un sentiment positif dans les tweets est associé à une baisse de la volatilité le lendemain (le marché se stabilise).
* Sur l'ensemble des données, la prédiction de l'évolution de la *volatilité* est de **63%**.

Ces résultats montrent que l'analyse de sentiment notamment avec un dictionnaire comme VADER peut être utilisée pour prédire la *volatilité* du marché et son *rendement*. Cela ouvre des perspectives intéressantes pour les investisseurs et les analystes financiers qui pourraient utiliser ces informations pour prendre des décisions plus éclairées.

:::warning[Attention]
Il est important de noter que ces résultats sont encourageants, mais qu'ils ne permettent pas de prédire de façon fiable la *volatilité* et le *rendement* du marché. D'autres facteurs entrent en jeu dans la variation des marchés financiers, et l'analyse de sentiment ne peut pas tout expliquer.
:::

:::tip[Potentielle amélioration]
En Juin 2023, Petr Korab a publié un article sur *FinVADER*, une version améliorée de VADER pour l'analyse de sentiment financier [\[6\]](#sources). Cette version a été spécifiquement construite sur le lexique financier. Une utilisation de ce dictionnaire spécialisé pourrait permettre d'améliorer les prédictions réalisées.
:::

## Prédiction de l'évolution des obligations financières

Une métrique financière que l'on peut analyser concerne les obligations financières. À l'inverse d'un indice boursier comme le *FTSE100*, les obligations financières sont des titres de créances émis par des entreprises ou des États pour se financer. Elles se distingue des actions en étant une dette pour l'émetteur, et non une part du capital.

En 2011, une étude menée par Tim Loughran et Bill McDonald a permis de mettre en évidence la corrélation entre le sentiment des rapports financiers *10-K* et les performances boursières des entreprises ; notamment concernant leurs obligations [\[4\]](#sources).

:::note[Rapport *10-K*]

Le rapport *10-K* est un document financier annuel déposé par les entreprises cotées en bourse auprès de la *Securities and Exchange Commission* (SEC) aux États-Unis. Il contient des informations détaillées sur la situation financière de l'entreprise, ses performances et ses risques.

:::

Dans leur étude, les chercheurs ont appliqué 2 dictionnaires de sentiment sur les mots des rapports *10-K* pour mesurer la tonalité des informations financières :

* Le dictionnaire *Harvard IV-4* : un dictionnaire de sentiment généraliste
* Le dictionnaire *Loughran-McDonald* : un dictionnaire de sentiment spécifique à la finance créé par les chercheurs

:::info[Harvard IV-4]
Le dictionnaire de sentiment Harvard IV-4 (ou Harvard General Inquirer IV-4) est un lexique de référence utilisé pour l'analyse de sentiment et l'étude du langage dans les sciences sociales et le traitement du langage naturel. Il a été développé dans le cadre du General Inquirer Project, dirigé par Philip J. Stone à l’Université Harvard dans les années 1960 [\[5\]](#sources). Il contient des listes de mots étiquetés selon leur charge émotionnelle :
- Positif
- Négatif
- Neutre
- Catégorie spécifique (ex, économie, finance, affect, sport ...)
:::


Le second dictionnaire qui nous intéresse plus est le dictionnaire *Loughran-McDonald*. Ce dictionnaire a été construit spécifiquement pour l'analyse de sentiment dans le domaine financier. Il sépare les mots en 6 catégories :
- Positif : mettant en avant des éléments favorables
- Négatif : indiquant des potentiels problèmes pour l'entreprise
- Litigieux : indiquant des risques juridiques
- Incertain : désignant une situation ambiguë ou volatile
- Modal faible : faisant référence aux obstacles et limitations financières
- Modale fort : exprimant des obligations et contraintes strictes

Afin d'obtenir le score de sentiment d'un rapport *10-K*, les chercheurs ont mesuré la fréquence des mots de chaque catégorie dans le texte. Cela leur a donc donné 6 scores de sentiment pour chaque rapport. Ils ont ensuite observé une corrélation entre les scores de sentiment et les performances boursières des entreprises.

:::note[Mise à l'échelle]
Pour mettre en évidence cette corrélation, les chercheurs ont mis à l'échelle les scores de sentiment en incluant un certain nombre de variables de contrôle. On trouve par exemple la taille de l'entreprise, le turnover des actions, l'apha de Fama-French, un indicateur NASDAQ ...
:::


Les résultats de cette étude ont montré plusieurs relations encourageantes :
- les scores des mots négatifs de la liste *Loughran-McDonald* sont corrélés aux erformances boursières des entreprises. Le *R²* moyen atteint même **70%** lorsque les sentiments des mots négatifs sont pondérés.
- les mots positifs n'ont pas d'impact significatif sur les performances boursières.
- l'ajustement des scores de sentiment en fonction des variables de contrôles montre que la stratégie n'est pas significativement rentable.

:::tip[Ce qu'il faut retenir]
L'utilisation de dictionnaires de sentiment spécifiques à la finance peut permettre de prédire les performances boursières des entreprises. Le choix de la donnée sur laquelle appliquer cette analyse est crucial pour obtenir des résultats significatifs. Bien que les résultats soient encourageants, il faut tout de même noter que la performance n'est jamais significative. Dans une optique d'améliorer la prédiction des performances boursières, cette seule analyse ne suffit pas. Elle ne peut que servir d'aide à la décision pour les investisseurs et les analystes financiers.
:::

## Sources 

[\[1\] Deveikyte J, Geman H, Piccari C and Provetti A (2022) A sentiment analysis approach to the prediction of market volatility. Front. Artif. Intell. 5:836809. doi: 10.3389/frai.2022.836809](https://www.researchgate.net/publication/347947909_A_Sentiment_Analysis_Approach_to_the_Prediction_of_Market_Volatility)

[\[2\] Hutto, C.J. & Gilbert, E.E. (2014). VADER: A Parsimonious Rule-based Model for Sentiment Analysis of Social Media Text. Eighth International Conference on Weblogs and Social Media (ICWSM-14). Ann Arbor, MI, June 2014](https://www.researchgate.net/publication/275828927_VADER_A_Parsimonious_Rule-based_Model_for_Sentiment_Analysis_of_Social_Media_Text)
[\[3\] Peter Gabrovšek, Darko Aleksovski, Igor Mozetic, and Miha Grcar. 2016. Twitter Sentiment around the Earnings Announcement Events. PLOS ONE 12 (11 2016)](https://doi.org/10.1371/journal.pone.0173151)

[\[4\] Tim Loughran, Bill McDonald (2011). When Is a Liability NOT a Liability? Textual Analysis, Dictionaries, and 10-Ks](https://onlinelibrary.wiley.com/doi/10.1111/j.1540-6261.2010.01625.x)

[\[5\] Philip J. Stone, Dexter C. Dunphy, Marshall S. Smith, Daniel M. Ogilvie (1966). The General Inquirer: A Computer Approach to Content Analysis. Cambridge, MA: MIT Press](https://www.researchgate.net/publication/215470778_The_General_Inquirer_A_Computer_Approach_to_Content_Analysis)

[\[6\] Petr Korab, FinVADER: Sentiment Analysis for Financial Applications (2023)](https://python.plainenglish.io/finvader-sentiment-analysis-for-financial-applications-6ab3c08840b4)