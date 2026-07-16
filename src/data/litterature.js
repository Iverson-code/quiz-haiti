const litteratureQuestions = [
  {
    q: "Jacques Roumain est notamment l'auteur(e) de :",
    options: ["Bois d'ébène", "L'Alphabet des nuits", "La Belle Amour humaine", "L'Amour oui. La mort non"],
    correct: 0
  },
  {
    q: "Le livre « Le Rond-point » est dû à la plume de :",
    options: ["Pradel Pompilus", "Évelyne Trouillot", "Stanley Péan", "Gary Klang"],
    correct: 1
  },
  {
    q: "Georges Sylvain est identifié(e) à quel courant dans l'histoire littéraire d'Haïti ?",
    options: ["Haïti Littéraire", "Génération de la Ronde", "Spiralisme", "Indigénisme"],
    correct: 1
  },
  {
    q: "Frédéric Marcelin a notamment donné naissance à quelle œuvre ?",
    options: ["Thémistocle-Épaminondas Labasterre", "L'Heure hybride", "Mosochwazi Kout Fè", "L'Amour oui. La mort non"],
    correct: 0
  },
  {
    q: "Dans le paysage des lettres haïtiennes, Roland Morisseau incarne quel mouvement ?",
    options: ["Spiralisme", "Haïti Littéraire", "Génération de la Ronde", "Réalisme merveilleux"],
    correct: 1
  },
  {
    q: "On doit à la plume de Yanick Lahens l'œuvre suivante :",
    options: ["Dezafi", "Rosalie l'infâme", "La Plage des songes", "Douces déroutes"],
    correct: 3
  },
  {
    q: "« Silhouettes de nègres et de négrophiles » est signé par quel auteur haïtien ?",
    options: ["Émile Roumer", "Jean Price-Mars", "Marie Vieux-Chauvet", "Windsor Bellegarde"],
    correct: 1
  },
  {
    q: "« Bicentenaire » a été publié(e) par quel écrivain haïtien ?",
    options: ["Carl Brouard", "Lyonel Trouillot", "Anthony Phelps", "Léon Laleau"],
    correct: 1
  },
  {
    q: "Jean Métellus a notamment donné naissance à quelle œuvre ?",
    options: ["Pèlentèt", "La Dot de Sara", "Ferdinand je suis à Paris", "Au pipirite chantant"],
    correct: 3
  },
  {
    q: "Quel écrivain haïtien a écrit « Le Fusil et la croix » ?",
    options: ["Jean-Euphèle Milcé", "Gary Klang", "Michel Soukar", "Etzer Vilaire"],
    correct: 2
  },
  {
    q: "Quelle est l'œuvre de Rodney Saint-Éloi parmi cette liste ?",
    options: ["Haïti kenbe la !", "Mère-Solitude", "Adieu, mon frère", "Ces îles qui marchent"],
    correct: 0
  },
  {
    q: "Quel courant littéraire est associé au nom de Roland Morisseau ?",
    options: ["Indigénisme", "Réalisme merveilleux", "Haïti Littéraire", "Génération de la Ronde"],
    correct: 2
  },
  {
    q: "Quel label littéraire est le plus souvent accolé au nom de Carl Brouard ?",
    options: ["Génération de la Ronde", "Réalisme merveilleux", "Indigénisme", "Haïti Littéraire"],
    correct: 2
  },
  {
    q: "« Maître-Minuit » compte parmi les œuvres de quel auteur ?",
    options: ["Tertulien Guilbaud", "Émile Ollivier", "Marie-Célie Agnant", "Makenzy Orcel"],
    correct: 3
  },
  {
    q: "L'écrivain Serge Legagneur est souvent associé(e) au mouvement :",
    options: ["Haïti Littéraire", "Spiralisme", "Indigénisme", "Réalisme merveilleux"],
    correct: 0
  },
  {
    q: "Quel nom d'auteur associez-vous à « Ferdinand je suis à Paris » ?",
    options: ["Jean-Claude Charles", "Antoine Innocent", "Demesvar Delorme", "Carl Brouard"],
    correct: 0
  },
  {
    q: "Quel label littéraire est le plus souvent accolé au nom de Jacques Stephen Alexis ?",
    options: ["Indigénisme", "Génération de la Ronde", "Haïti Littéraire", "Réalisme merveilleux"],
    correct: 3
  },
  {
    q: "Émile Roumer a notamment donné naissance à quelle œuvre ?",
    options: ["Rhapsodie sale", "Mère-Solitude", "Mimola", "Poèmes d'Haïti et de France"],
    correct: 3
  },
  {
    q: "On doit à la plume de Émile Roumer l'œuvre suivante :",
    options: ["Poèmes d'Haïti et de France", "Rapatriés", "Cric? Crac!", "Le Cri de l'oiseau rouge"],
    correct: 0
  },
  {
    q: "« Textes interdits » a été publié(e) par quel écrivain haïtien ?",
    options: ["Rodney Saint-Éloi", "Pradel Pompilus", "Léon Laleau", "Serge Legagneur"],
    correct: 3
  },
  {
    q: "Quel écrivain haïtien a écrit « Haïti, terre mystique » ?",
    options: ["Edwidge Danticat", "Jean-Claude Charles", "Gary Klang", "Jean-Robert Léonidas"],
    correct: 2
  },
  {
    q: "« De Saint-Domingue à Haïti » a été publié(e) par quel écrivain haïtien ?",
    options: ["Yanick Lahens", "Jean Price-Mars", "Suzanne Comhaire-Sylvain", "Ignace Nau"],
    correct: 1
  },
  {
    q: "L'œuvre « Les Possédés de la pleine lune » a été écrite par :",
    options: ["Jean-Claude Fignolé", "Jean Price-Mars", "Fresnel Sylvestre", "Georges Anglade"],
    correct: 0
  },
  {
    q: "« Treize nouvelles vaudou » a été publié(e) par quel écrivain haïtien ?",
    options: ["Nadine Magloire", "Louis Joseph Janvier", "Gary Victor", "Edwidge Danticat"],
    correct: 2
  },
  {
    q: "Roussan Camille est notamment l'auteur(e) de :",
    options: ["Yanvalou pour Charlie", "Belle merveille", "Assaut à la nuit", "La Crête-à-Pierrot"],
    correct: 2
  },
  {
    q: "À qui doit-on l'œuvre littéraire « La Couleur de l'aube » ?",
    options: ["Charles Moravia", "Davertige", "Serge Legagneur", "Yanick Lahens"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Manhattan Blues » ?",
    options: ["Ida Faubert", "Jean-Claude Charles", "Serge Legagneur", "Syto Cavé"],
    correct: 1
  },
  {
    q: "Serge Legagneur est une figure représentative de quel courant littéraire haïtien ?",
    options: ["Indigénisme", "Spiralisme", "Haïti Littéraire", "Réalisme merveilleux"],
    correct: 2
  },
  {
    q: "De quelle plume est issue l'œuvre « Le Fusil et la croix » ?",
    options: ["Justin Chrysostome Dorsainvil", "Joujou Turenne", "Jean-Robert Cadet", "Michel Soukar"],
    correct: 3
  },
  {
    q: "Qui a publié le livre « Krik? Krak! » ?",
    options: ["Jacques Roumain", "Jean Métellus", "Edwidge Danticat", "Liliane Devieux-Dehoux"],
    correct: 2
  },
  {
    q: "Le livre « Pays sans chapeau » est dû à la plume de :",
    options: ["Dany Laferrière", "Jean-Euphèle Milcé", "Pradel Pompilus", "Jean-Robert Cadet"],
    correct: 0
  },
  {
    q: "« Romulus » est signé par quel auteur haïtien ?",
    options: ["Fernand Hibbert", "Guy Régis Jr", "Jean-Euphèle Milcé", "Jean-Claude Charles"],
    correct: 0
  },
  {
    q: "De quelle plume est issue l'œuvre « Boulevard Baie des Anges » ?",
    options: ["Néhémy Pierre-Dahomey", "Marie-Célie Agnant", "Makenzy Orcel", "Évelyne Trouillot"],
    correct: 0
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Zoune chez sa ninnaine » ?",
    options: ["Oswald Durand", "Lyonel Trouillot", "Justin Lhérisson", "Placide David"],
    correct: 2
  },
  {
    q: "Tertulien Guilbaud est notamment l'auteur(e) de :",
    options: ["La Couleur de l'aube", "Vieilles chansons", "Au pipirite chantant", "Textes interdits"],
    correct: 1
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Stanley Péan ?",
    options: ["Assaut à la nuit", "Compère Général Soleil", "Silhouettes de nègres et de négrophiles", "Zombi Blues"],
    correct: 3
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Demesvar Delorme ?",
    options: ["Le Qui-vive", "Francesca", "Dezafi", "Le Nègre crucifié"],
    correct: 1
  },
  {
    q: "Quel label littéraire est le plus souvent accolé au nom de Oswald Durand ?",
    options: ["Génération de la Ronde", "Haïti Littéraire", "Indigénisme", "Réalisme merveilleux"],
    correct: 0
  },
  {
    q: "Lyonel Trouillot est notamment l'auteur(e) de :",
    options: ["Manhattan Blues", "Bicentenaire", "Le Mal de terre", "Impasse Dignité"],
    correct: 1
  },
  {
    q: "« Au pipirite chantant » compte parmi les œuvres de quel auteur ?",
    options: ["Yanick Lahens", "Jean Métellus", "Hénock Trouillot", "Jacques Roumain"],
    correct: 1
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de René Depestre ?",
    options: ["De l'égalité des races humaines", "Bonjour et adieu à la négritude", "Avant que les ombres s'effacent", "Choucoune"],
    correct: 1
  },
  {
    q: "Quel ouvrage a été publié par Frédéric Marcelin ?",
    options: ["Kasalé", "Compère Général Soleil", "La Vengeance de Mama", "Pays sans chapeau"],
    correct: 2
  },
  {
    q: "Qui a publié le livre « Un Arc-en-ciel pour l'occident chrétien » ?",
    options: ["Tertulien Guilbaud", "Georges Sylvain", "René Depestre", "Georges Castera"],
    correct: 2
  },
  {
    q: "Carl Brouard est identifié(e) à quel courant dans l'histoire littéraire d'Haïti ?",
    options: ["Spiralisme", "Réalisme merveilleux", "Haïti Littéraire", "Indigénisme"],
    correct: 3
  },
  {
    q: "L'écrivain(e) Dany Laferrière est célèbre pour avoir publié :",
    options: ["Théâtre", "Les Thazar", "Les Blancs de mémoire", "Pays sans chapeau"],
    correct: 3
  },
  {
    q: "On rattache généralement Serge Legagneur à quel mouvement des lettres haïtiennes ?",
    options: ["Indigénisme", "Haïti Littéraire", "Spiralisme", "Réalisme merveilleux"],
    correct: 1
  },
  {
    q: "De quelle plume est issue l'œuvre « L'Autre Face de la mer » ?",
    options: ["Anténor Firmin", "Louis-Philippe Dalembert", "Charles Moravia", "Jacques Roumain"],
    correct: 1
  },
  {
    q: "« Hadriana dans tous mes rêves » a été publié(e) par quel écrivain haïtien ?",
    options: ["Ida Faubert", "Emmelie Prophète", "Marie-Célie Agnant", "René Depestre"],
    correct: 3
  },
  {
    q: "Dans quel grand mouvement littéraire s'inscrit Frankétienne ?",
    options: ["Indigénisme", "Spiralisme", "Génération de la Ronde", "Réalisme merveilleux"],
    correct: 1
  },
  {
    q: "L'écrivain(e) Jean-Claude Charles est célèbre pour avoir publié :",
    options: ["Guillaume et Nathalie", "Je suis vivant", "Manhattan Blues", "Les Immortelles"],
    correct: 2
  },
  {
    q: "René Philoctète est identifié(e) à quel courant dans l'histoire littéraire d'Haïti ?",
    options: ["Spiralisme", "Indigénisme", "Haïti Littéraire", "Réalisme merveilleux"],
    correct: 0
  },
  {
    q: "Dans quel grand mouvement littéraire s'inscrit Roland Morisseau ?",
    options: ["Spiralisme", "Indigénisme", "Génération de la Ronde", "Haïti Littéraire"],
    correct: 3
  },
  {
    q: "Qui a publié le livre « L'Oiseau schizophone » ?",
    options: ["Fernand Hibbert", "Frankétienne", "Jean-Euphèle Milcé", "Louis-Philippe Dalembert"],
    correct: 1
  },
  {
    q: "Dany Laferrière est notamment l'auteur(e) de :",
    options: ["Les Thazar", "L'Énigme du retour", "L'Héritage colonial en Haïti", "La Crête-à-Pierrot"],
    correct: 1
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Ida Faubert ?",
    options: ["Cœur des Îles", "Ferdinand je suis à Paris", "Le Choc", "Dezafi"],
    correct: 0
  },
  {
    q: "Quel nom d'auteur associez-vous à « Nouveaux poèmes » ?",
    options: ["Serge Legagneur", "Jean-Claude Bajeux", "Jean D'Amérique", "Etzer Vilaire"],
    correct: 3
  },
  {
    q: "Quel courant littéraire est associé au nom de Léon Laleau ?",
    options: ["Haïti Littéraire", "Spiralisme", "Génération de la Ronde", "Indigénisme"],
    correct: 3
  },
  {
    q: "« Cœur des Îles » compte parmi les œuvres de quel auteur ?",
    options: ["Gary Victor", "Roland Morisseau", "James Noël", "Ida Faubert"],
    correct: 3
  },
  {
    q: "Retrouvez l'auteur de « Rapatriés » parmi ces propositions :",
    options: ["Isnardin Vieux", "Marie-Thérèse Colimon-Hall", "Makenzy Orcel", "Néhémy Pierre-Dahomey"],
    correct: 3
  },
  {
    q: "À quel mouvement littéraire haïtien appartient l'auteur Georges Sylvain ?",
    options: ["Spiralisme", "Haïti Littéraire", "Réalisme merveilleux", "Génération de la Ronde"],
    correct: 3
  },
  {
    q: "Le livre « Yanvalou pour Charlie » est dû à la plume de :",
    options: ["Kettly Mars", "Lyonel Trouillot", "Roland Morisseau", "Yanick Lahens"],
    correct: 1
  },
  {
    q: "« Bicentenaire » est signé par quel auteur haïtien ?",
    options: ["Lyonel Trouillot", "Demesvar Delorme", "Roussan Camille", "Davertige"],
    correct: 0
  },
  {
    q: "Quel titre figure dans la bibliographie de Lyonel Trouillot ?",
    options: ["Rue des pas perdus", "Moi, Toussaint Louverture", "L'Oiseau schizophone", "Restavec"],
    correct: 0
  },
  {
    q: "Syto Cavé est notamment l'auteur(e) de :",
    options: ["Désirée Congo", "Le Reste du temps", "Théâtre", "Belle merveille"],
    correct: 2
  },
  {
    q: "« Frayeur » est signé par quel auteur haïtien ?",
    options: ["Etzer Vilaire", "Jean-Euphèle Milcé", "Jean-Claude Fignolé", "Kettly Mars"],
    correct: 3
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Yanick Lahens ?",
    options: ["Aube tranquille", "La Vengeance de Mama", "Bain de lune", "Manuel illustré d'histoire de la littérature haïtienne"],
    correct: 2
  },
  {
    q: "Quelle école littéraire haïtienne est représentée par Frankétienne ?",
    options: ["Spiralisme", "Indigénisme", "Génération de la Ronde", "Haïti Littéraire"],
    correct: 0
  },
  {
    q: "Qui a publié le livre « Rêver debout » ?",
    options: ["Roland Morisseau", "Justin Chrysostome Dorsainvil", "Lyonel Trouillot", "Frankétienne"],
    correct: 0
  },
  {
    q: "Quel titre figure dans la bibliographie de Makenzy Orcel ?",
    options: ["La mémoire aux abois", "Corps mêlés", "L'Ombre animale", "Vieilles chansons"],
    correct: 2
  },
  {
    q: "« Clair de Manbo » a été publié(e) par quel écrivain haïtien ?",
    options: ["Anthony Phelps", "Gary Victor", "Jean D'Amérique", "Makenzy Orcel"],
    correct: 1
  },
  {
    q: "Identifiez l'œuvre écrite par Guy Régis Jr :",
    options: ["Les Rapaces", "Séna", "Assaut à la nuit", "Moi, fardeau inhérent"],
    correct: 3
  },
  {
    q: "Quel écrivain haïtien a écrit « La Vocation de l'élite » ?",
    options: ["Jean Price-Mars", "Emmelie Prophète", "Faubert Bolivar", "Oswald Durand"],
    correct: 0
  },
  {
    q: "On doit à la plume de Edwidge Danticat l'œuvre suivante :",
    options: ["Le Briseur de rosée", "Rêver debout", "Musique nègre", "Jacmel au crépuscule"],
    correct: 0
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Le Manuscrit de mon ami » ?",
    options: ["Georges Castera", "Gary Klang", "Marie-Célie Agnant", "Fernand Hibbert"],
    correct: 3
  },
  {
    q: "À quel mouvement littéraire haïtien appartient l'auteur Léon Laleau ?",
    options: ["Réalisme merveilleux", "Indigénisme", "Spiralisme", "Génération de la Ronde"],
    correct: 1
  },
  {
    q: "« Yanvalou pour Charlie » est signé par quel auteur haïtien ?",
    options: ["Lyonel Trouillot", "René Depestre", "Justin Lhérisson", "Antoine Innocent"],
    correct: 0
  },
  {
    q: "Dans le paysage des lettres haïtiennes, Jacques Roumain incarne quel mouvement ?",
    options: ["Haïti Littéraire", "Réalisme merveilleux", "Spiralisme", "Indigénisme"],
    correct: 3
  },
  {
    q: "Parmi ces titres, lequel est signé Massillon Coicou ?",
    options: ["La Famille des Pitite-Caille", "Anacaona", "L'Empereur Dessalines", "Musa-Paidica"],
    correct: 2
  },
  {
    q: "Dans quel grand mouvement littéraire s'inscrit René Philoctète ?",
    options: ["Génération de la Ronde", "Spiralisme", "Haïti Littéraire", "Indigénisme"],
    correct: 1
  },
  {
    q: "Quelle école littéraire haïtienne est représentée par Léon Laleau ?",
    options: ["Spiralisme", "Indigénisme", "Haïti Littéraire", "Génération de la Ronde"],
    correct: 1
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Louis-Philippe Dalembert ?",
    options: ["Moi, fardeau inhérent", "Maître-Minuit", "Avant que les ombres s'effacent", "Désirée Congo"],
    correct: 2
  },
  {
    q: "Jean Price-Mars est une figure représentative de quel courant littéraire haïtien ?",
    options: ["Réalisme merveilleux", "Haïti Littéraire", "Génération de la Ronde", "Indigénisme"],
    correct: 3
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Rosalie l'infâme » ?",
    options: ["René Depestre", "Jean-Euphèle Milcé", "Marvin Victor", "Évelyne Trouillot"],
    correct: 3
  },
  {
    q: "Dans le paysage des lettres haïtiennes, Émile Roumer incarne quel mouvement ?",
    options: ["Génération de la Ronde", "Haïti Littéraire", "Réalisme merveilleux", "Indigénisme"],
    correct: 3
  },
  {
    q: "L'écrivain Oswald Durand est souvent associé(e) au mouvement :",
    options: ["Réalisme merveilleux", "Haïti Littéraire", "Génération de la Ronde", "Spiralisme"],
    correct: 2
  },
  {
    q: "Quel livre porte la signature de Georges Castera ?",
    options: ["Le Rond-point", "Encre allègre", "Jacmel au crépuscule", "Les Arbres musiciens"],
    correct: 1
  },
  {
    q: "Quel écrivain haïtien a écrit « Un Arc-en-ciel pour l'occident chrétien » ?",
    options: ["René Depestre", "Marie-Thérèse Colimon-Hall", "Louis Joseph Janvier", "Gérard Étienne"],
    correct: 0
  },
  {
    q: "Le livre « Silhouettes de nègres et de négrophiles » est dû à la plume de :",
    options: ["Alibée Féry", "Jean Price-Mars", "Charles Moravia", "Georges Sylvain"],
    correct: 1
  },
  {
    q: "À quel mouvement littéraire haïtien appartient l'auteur Anthony Phelps ?",
    options: ["Haïti Littéraire", "Génération de la Ronde", "Spiralisme", "Réalisme merveilleux"],
    correct: 0
  },
  {
    q: "Serge Legagneur est notamment l'auteur(e) de :",
    options: ["Textes interdits", "Gouverneurs de la rosée", "Rue des pas perdus", "À l'angle des rues parallèles"],
    correct: 0
  },
  {
    q: "Le livre « Rue Frontière » est dû à la plume de :",
    options: ["Paula Clermont Péan", "Faubert Bolivar", "Ignace Nau", "Etzer Vilaire"],
    correct: 1
  },
  {
    q: "Jean-Claude Bajeux est notamment l'auteur(e) de :",
    options: ["La Famille des Pitite-Caille", "Fils de misère", "Le Qui-vive", "Mosochwazi Kout Fè"],
    correct: 3
  },
  {
    q: "Quel ouvrage a été publié par Justin Chrysostome Dorsainvil ?",
    options: ["Rires et Pleurs", "Rosalie l'infâme", "Manuel d'histoire d'Haïti", "Rapatriés"],
    correct: 2
  },
  {
    q: "Parmi ces titres, lequel est signé Jean D'Amérique ?",
    options: ["Soleil à coudre", "Silhouettes de nègres et de négrophiles", "Ferdinand je suis à Paris", "Mosochwazi Kout Fè"],
    correct: 0
  },
  {
    q: "Serge Legagneur est identifié(e) à quel courant dans l'histoire littéraire d'Haïti ?",
    options: ["Haïti Littéraire", "Spiralisme", "Génération de la Ronde", "Réalisme merveilleux"],
    correct: 0
  },
  {
    q: "Identifiez l'œuvre écrite par Évelyne Trouillot :",
    options: ["Manuel d'histoire d'Haïti", "La mémoire aux abois", "La Blanche Négresse", "Treize nouvelles vaudou"],
    correct: 1
  },
  {
    q: "On rattache généralement Émile Roumer à quel mouvement des lettres haïtiennes ?",
    options: ["Génération de la Ronde", "Spiralisme", "Haïti Littéraire", "Indigénisme"],
    correct: 3
  },
  {
    q: "L'écrivain René Philoctète est souvent associé(e) au mouvement :",
    options: ["Indigénisme", "Réalisme merveilleux", "Haïti Littéraire", "Spiralisme"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Écrivains haïtiens » ?",
    options: ["Néhémy Pierre-Dahomey", "Serge Legagneur", "Windsor Bellegarde", "Jean-Claude Fignolé"],
    correct: 2
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Jean-Euphèle Milcé ?",
    options: ["Boulevard Baie des Anges", "Les Étrangers de la maison", "L'Alphabet des nuits", "Clair de Manbo"],
    correct: 2
  },
  {
    q: "Quelle école littéraire haïtienne est représentée par Jacques Stephen Alexis ?",
    options: ["Indigénisme", "Réalisme merveilleux", "Spiralisme", "Génération de la Ronde"],
    correct: 1
  },
  {
    q: "« Pèlentèt » compte parmi les œuvres de quel auteur ?",
    options: ["Frankétienne", "Kettly Mars", "Fresnel Sylvestre", "Joujou Turenne"],
    correct: 0
  },
  {
    q: "Quel titre figure dans la bibliographie de Jacques Roumain ?",
    options: ["Théâtre", "Mes années Duvalier", "Assaut à la nuit", "Bois d'ébène"],
    correct: 3
  },
  {
    q: "L'écrivain Frankétienne est souvent associé(e) au mouvement :",
    options: ["Réalisme merveilleux", "Spiralisme", "Indigénisme", "Génération de la Ronde"],
    correct: 1
  },
  {
    q: "Le livre « Moi, Toussaint Louverture » est dû à la plume de :",
    options: ["Ida Faubert", "Dany Laferrière", "Placide David", "Jean-Claude Fignolé"],
    correct: 3
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Anthony Phelps ?",
    options: ["La Récolte douce des larmes", "De Saint-Domingue à Haïti", "Des fleurs pour les héros", "Moi, fardeau inhérent"],
    correct: 2
  },
  {
    q: "À quel mouvement littéraire haïtien appartient l'auteur Frankétienne ?",
    options: ["Génération de la Ronde", "Spiralisme", "Haïti Littéraire", "Indigénisme"],
    correct: 1
  },
  {
    q: "Anthony Phelps est notamment l'auteur(e) de :",
    options: ["L'Héritage colonial en Haïti", "Pays sans chapeau", "Rosalie l'infâme", "Le Conditionnel"],
    correct: 3
  },
  {
    q: "Quel nom d'auteur associez-vous à « Saison de porcs » ?",
    options: ["Josaphat-Robert Large", "Émile Roumer", "Gary Victor", "Edwidge Danticat"],
    correct: 2
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Jean Price-Mars ?",
    options: ["Kasalé", "Soleil à coudre", "Bois d'ébène", "Silhouettes de nègres et de négrophiles"],
    correct: 3
  },
  {
    q: "On rattache généralement Carl Brouard à quel mouvement des lettres haïtiennes ?",
    options: ["Haïti Littéraire", "Indigénisme", "Génération de la Ronde", "Réalisme merveilleux"],
    correct: 1
  },
  {
    q: "Jacques Stephen Alexis est une figure représentative de quel courant littéraire haïtien ?",
    options: ["Indigénisme", "Réalisme merveilleux", "Génération de la Ronde", "Haïti Littéraire"],
    correct: 1
  },
  {
    q: "On rattache généralement Jacques Roumain à quel mouvement des lettres haïtiennes ?",
    options: ["Réalisme merveilleux", "Indigénisme", "Haïti Littéraire", "Génération de la Ronde"],
    correct: 1
  },
  {
    q: "Le livre « Aube tranquille » est dû à la plume de :",
    options: ["Syto Cavé", "Jean-Euphèle Milcé", "Jean-Claude Fignolé", "Néhémy Pierre-Dahomey"],
    correct: 2
  },
  {
    q: "L'écrivain Etzer Vilaire est souvent associé(e) au mouvement :",
    options: ["Indigénisme", "Génération de la Ronde", "Spiralisme", "Réalisme merveilleux"],
    correct: 1
  },
  {
    q: "Retrouvez l'auteur de « Les Étrangers de la maison » parmi ces propositions :",
    options: ["Josaphat-Robert Large", "Serge Legagneur", "Émile Roumer", "Anténor Firmin"],
    correct: 0
  },
  {
    q: "L'écrivain(e) René Depestre est célèbre pour avoir publié :",
    options: ["Désirée Congo", "Bain de lune", "Francesca", "Le Mât de cocagne"],
    correct: 3
  },
  {
    q: "Historiquement, Serge Legagneur appartient à quel mouvement littéraire ?",
    options: ["Haïti Littéraire", "Spiralisme", "Génération de la Ronde", "Réalisme merveilleux"],
    correct: 0
  },
  {
    q: "Quel livre porte la signature de Dany Laferrière ?",
    options: ["Avant que les ombres s'effacent", "L'Odeur du café", "Ferdinand je suis à Paris", "Un Arc-en-ciel pour l'occident chrétien"],
    correct: 1
  },
  {
    q: "À quel mouvement littéraire haïtien appartient l'auteur Jean-Claude Fignolé ?",
    options: ["Spiralisme", "Indigénisme", "Génération de la Ronde", "Réalisme merveilleux"],
    correct: 0
  },
  {
    q: "L'écrivain Jean Price-Mars est souvent associé(e) au mouvement :",
    options: ["Haïti Littéraire", "Indigénisme", "Spiralisme", "Réalisme merveilleux"],
    correct: 1
  },
  {
    q: "De quelle plume est issue l'œuvre « Fils de misère » ?",
    options: ["Etzer Vilaire", "Charles Moravia", "Marie-Thérèse Colimon-Hall", "Windsor Bellegarde"],
    correct: 2
  },
  {
    q: "« Le Rond-point » est signé par quel auteur haïtien ?",
    options: ["Makenzy Orcel", "Jean Price-Mars", "Évelyne Trouillot", "Jean-Claude Charles"],
    correct: 2
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Syto Cavé ?",
    options: ["Le Qui-vive", "Silhouettes de nègres et de négrophiles", "Les Fantoches", "Alléluia pour une femme-jardin"],
    correct: 0
  },
  {
    q: "« Le Testament des solitudes » compte parmi les œuvres de quel auteur ?",
    options: ["Emmelie Prophète", "Louis Joseph Janvier", "Jean Price-Mars", "Marvin Victor"],
    correct: 0
  },
  {
    q: "Quel écrivain haïtien a écrit « Pèlentèt » ?",
    options: ["Marie-Thérèse Colimon-Hall", "Josaphat-Robert Large", "Georges Sylvain", "Frankétienne"],
    correct: 3
  },
  {
    q: "Retrouvez l'auteur de « Le Qui-vive » parmi ces propositions :",
    options: ["Stanley Péan", "Carl Brouard", "Pradel Pompilus", "Syto Cavé"],
    correct: 3
  },
  {
    q: "L'écrivain(e) Jean-Claude Fignolé est célèbre pour avoir publié :",
    options: ["La Plage des songes", "Les Possédés de la pleine lune", "La Couleur de l'aube", "Le Sang et la Mer"],
    correct: 1
  },
  {
    q: "On rattache généralement Léon Laleau à quel mouvement des lettres haïtiennes ?",
    options: ["Haïti Littéraire", "Indigénisme", "Génération de la Ronde", "Spiralisme"],
    correct: 1
  },
  {
    q: "On doit à la plume de Lyonel Trouillot l'œuvre suivante :",
    options: ["Les Fantoches", "Thérèse en mille morceaux", "Encre allègre", "Saison de porcs"],
    correct: 1
  },
  {
    q: "Quel livre porte la signature de Michel Soukar ?",
    options: ["Une eau-forte", "Le Livre d'Emma", "Thérèse en mille morceaux", "Le Fusil et la croix"],
    correct: 3
  },
  {
    q: "Oswald Durand figure parmi les représentants de quel mouvement ?",
    options: ["Haïti Littéraire", "Génération de la Ronde", "Indigénisme", "Réalisme merveilleux"],
    correct: 1
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Yanick Lahens ?",
    options: ["Le Mal de terre", "La Couleur de l'aube", "Rêver debout", "Restavec"],
    correct: 1
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Contes et légendes d'Haïti » ?",
    options: ["Joujou Turenne", "Anténor Firmin", "Serge Legagneur", "Pradel Pompilus"],
    correct: 0
  },
  {
    q: "Qui a publié le livre « Avant que les ombres s'effacent » ?",
    options: ["Paula Clermont Péan", "Louis-Philippe Dalembert", "Dany Laferrière", "Marie-Célie Agnant"],
    correct: 1
  },
  {
    q: "Georges Sylvain est une figure représentative de quel courant littéraire haïtien ?",
    options: ["Réalisme merveilleux", "Génération de la Ronde", "Spiralisme", "Haïti Littéraire"],
    correct: 1
  },
  {
    q: "Oswald Durand est identifié(e) à quel courant dans l'histoire littéraire d'Haïti ?",
    options: ["Haïti Littéraire", "Indigénisme", "Génération de la Ronde", "Réalisme merveilleux"],
    correct: 2
  },
  {
    q: "« Le Nègre crucifié » est signé par quel auteur haïtien ?",
    options: ["Joujou Turenne", "René Depestre", "Jean-Euphèle Milcé", "Gérard Étienne"],
    correct: 3
  },
  {
    q: "Qui a publié le livre « Comment faire l'amour avec un Nègre sans se fatiguer » ?",
    options: ["Dany Laferrière", "Serge Legagneur", "Jean D'Amérique", "Ida Faubert"],
    correct: 0
  },
  {
    q: "Le livre « Rêver debout » est dû à la plume de :",
    options: ["Alibée Féry", "Roland Morisseau", "Georges Anglade", "Anthony Phelps"],
    correct: 1
  },
  {
    q: "Quel titre figure dans la bibliographie de Emmelie Prophète ?",
    options: ["Passages", "Aube tranquille", "Les Villages de Dieu", "Dessalines ou le sang du Pont-Rouge"],
    correct: 2
  },
  {
    q: "Quel nom d'auteur associez-vous à « Les Immortelles » ?",
    options: ["Gérard Étienne", "Makenzy Orcel", "Serge Legagneur", "Jean Métellus"],
    correct: 1
  },
  {
    q: "« L'Empereur Dessalines » compte parmi les œuvres de quel auteur ?",
    options: ["Massillon Coicou", "Jacques Roumain", "Edwidge Danticat", "Marie-Alice Théard"],
    correct: 0
  },
  {
    q: "Jacques Stephen Alexis est identifié(e) à quel courant dans l'histoire littéraire d'Haïti ?",
    options: ["Réalisme merveilleux", "Indigénisme", "Spiralisme", "Haïti Littéraire"],
    correct: 0
  },
  {
    q: "« Jacques Roche, la vie entière » a été publié(e) par quel écrivain haïtien ?",
    options: ["Jean-Robert Léonidas", "Anthony Phelps", "Rodney Saint-Éloi", "Faubert Bolivar"],
    correct: 2
  },
  {
    q: "À quel mouvement littéraire haïtien appartient l'auteur Roland Morisseau ?",
    options: ["Indigénisme", "Génération de la Ronde", "Haïti Littéraire", "Spiralisme"],
    correct: 2
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Justin Lhérisson ?",
    options: ["La République d'Haïti et ses visiteurs", "Zoune chez sa ninnaine", "Moi, fardeau inhérent", "Les Thazar"],
    correct: 1
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Huit jours dans un no man's land » ?",
    options: ["Guy Régis Jr", "Frankétienne", "Marie-Thérèse Colimon-Hall", "Georges Castera"],
    correct: 1
  },
  {
    q: "Dans le paysage des lettres haïtiennes, Georges Sylvain incarne quel mouvement ?",
    options: ["Haïti Littéraire", "Spiralisme", "Réalisme merveilleux", "Génération de la Ronde"],
    correct: 3
  },
  {
    q: "Retrouvez l'auteur de « Douces déroutes » parmi ces propositions :",
    options: ["Jean-Robert Léonidas", "Yanick Lahens", "Faubert Bolivar", "Suzanne Comhaire-Sylvain"],
    correct: 1
  },
  {
    q: "Parmi ces titres, lequel est signé Fernand Hibbert ?",
    options: ["Romulus", "La Crête-à-Pierrot", "Rapatriés", "Avant que les ombres s'effacent"],
    correct: 0
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Anthony Phelps ?",
    options: ["Haïti, terre mystique", "La Dot de Sara", "Rapatriés", "Des fleurs pour les héros"],
    correct: 3
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Jean-Claude Fignolé ?",
    options: ["Le Rond-point", "Guillaume et Nathalie", "Les Possédés de la pleine lune", "Mûr à crever"],
    correct: 2
  },
  {
    q: "L'œuvre « Le Conditionnel » a été écrite par :",
    options: ["Anthony Phelps", "Syto Cavé", "Léon Laleau", "Fresnel Sylvestre"],
    correct: 0
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Louis-Philippe Dalembert ?",
    options: ["Milwaukee Blues", "Belle merveille", "Le Peuple des terres mêlées", "La Bélière Caraïbe"],
    correct: 0
  },
  {
    q: "Quel courant littéraire est associé au nom de Jean-Claude Fignolé ?",
    options: ["Génération de la Ronde", "Réalisme merveilleux", "Haïti Littéraire", "Spiralisme"],
    correct: 3
  },
  {
    q: "Le livre « Un amour à trois temps » est dû à la plume de :",
    options: ["Néhémy Pierre-Dahomey", "Faubert Bolivar", "René Philoctète", "Fresnel Sylvestre"],
    correct: 3
  },
  {
    q: "L'œuvre « Un Arc-en-ciel pour l'occident chrétien » a été écrite par :",
    options: ["Léon Laleau", "René Depestre", "Jean-Claude Charles", "Etzer Vilaire"],
    correct: 1
  },
  {
    q: "« Passions » est signé par quel auteur haïtien ?",
    options: ["René Depestre", "Georges Sylvain", "Massillon Coicou", "Carl Brouard"],
    correct: 2
  },
  {
    q: "L'écrivain Georges Sylvain est souvent associé(e) au mouvement :",
    options: ["Haïti Littéraire", "Génération de la Ronde", "Réalisme merveilleux", "Indigénisme"],
    correct: 1
  },
  {
    q: "Quel courant littéraire est associé au nom de Serge Legagneur ?",
    options: ["Haïti Littéraire", "Réalisme merveilleux", "Génération de la Ronde", "Indigénisme"],
    correct: 0
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Marie-Célie Agnant ?",
    options: ["Ces îles qui marchent", "Le Livre d'Emma", "Je suis vivant", "À l'angle des rues parallèles"],
    correct: 1
  },
  {
    q: "Dans le paysage des lettres haïtiennes, Carl Brouard incarne quel mouvement ?",
    options: ["Indigénisme", "Génération de la Ronde", "Haïti Littéraire", "Spiralisme"],
    correct: 0
  },
  {
    q: "Quel courant littéraire est associé au nom de Jacques Roumain ?",
    options: ["Réalisme merveilleux", "Indigénisme", "Spiralisme", "Génération de la Ronde"],
    correct: 1
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Textes interdits » ?",
    options: ["Serge Legagneur", "Makenzy Orcel", "Emmelie Prophète", "Demesvar Delorme"],
    correct: 0
  },
  {
    q: "Quel label littéraire est le plus souvent accolé au nom de Jacques Roumain ?",
    options: ["Spiralisme", "Génération de la Ronde", "Réalisme merveilleux", "Indigénisme"],
    correct: 3
  },
  {
    q: "Quel écrivain haïtien a écrit « La Dot de Sara » ?",
    options: ["Windsor Bellegarde", "Oswald Durand", "Marie-Célie Agnant", "Michel Soukar"],
    correct: 2
  },
  {
    q: "Jacques Roumain est une figure représentative de quel courant littéraire haïtien ?",
    options: ["Haïti Littéraire", "Spiralisme", "Indigénisme", "Réalisme merveilleux"],
    correct: 2
  },
  {
    q: "Qui a publié le livre « Une eau-forte » ?",
    options: ["Cléante Valcin", "Jean Métellus", "James Noël", "Georges Anglade"],
    correct: 1
  },
  {
    q: "Georges Sylvain figure parmi les représentants de quel mouvement ?",
    options: ["Spiralisme", "Réalisme merveilleux", "Haïti Littéraire", "Génération de la Ronde"],
    correct: 3
  },
  {
    q: "Jean Price-Mars est notamment l'auteur(e) de :",
    options: ["Le Roman de l'occupation", "L'Empereur Dessalines", "Ainsi parla l'oncle", "Poèmes d'Haïti et de France"],
    correct: 2
  },
  {
    q: "« Rêver debout » compte parmi les œuvres de quel auteur ?",
    options: ["Roland Morisseau", "Georges Anglade", "Évelyne Trouillot", "Massillon Coicou"],
    correct: 0
  },
  {
    q: "Quel livre porte la signature de Fresnel Sylvestre ?",
    options: ["Krik? Krak!", "Un amour à trois temps", "La Blanche Négresse", "Boulevard Baie des Anges"],
    correct: 1
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Windsor Bellegarde ?",
    options: ["Écrivains haïtiens", "L'Oiseau schizophone", "L'Heure hybride", "Le Nègre crucifié"],
    correct: 0
  },
  {
    q: "Frankétienne est identifié(e) à quel courant dans l'histoire littéraire d'Haïti ?",
    options: ["Réalisme merveilleux", "Spiralisme", "Haïti Littéraire", "Indigénisme"],
    correct: 1
  },
  {
    q: "« Boulevard Baie des Anges » a été publié(e) par quel écrivain haïtien ?",
    options: ["Jean Métellus", "René Depestre", "Néhémy Pierre-Dahomey", "Louis Joseph Janvier"],
    correct: 2
  },
  {
    q: "Quel écrivain haïtien a écrit « La Vengeance de Mama » ?",
    options: ["Placide David", "Georges Castera", "Frédéric Marcelin", "Kettly Mars"],
    correct: 2
  },
  {
    q: "« Les Dix hommes noirs » compte parmi les œuvres de quel auteur ?",
    options: ["Jean-Robert Cadet", "Gary Klang", "Etzer Vilaire", "Paula Clermont Péan"],
    correct: 2
  },
  {
    q: "On doit à la plume de Jean Métellus l'œuvre suivante :",
    options: ["Textes interdits", "Épisode de la Révolution", "Romancero aux étoiles", "La Famille Vortex"],
    correct: 3
  },
  {
    q: "« Boulevard Baie des Anges » compte parmi les œuvres de quel auteur ?",
    options: ["Nadine Magloire", "Néhémy Pierre-Dahomey", "Jacques Stephen Alexis", "Jean-Claude Fignolé"],
    correct: 1
  },
  {
    q: "Marie-Célie Agnant est notamment l'auteur(e) de :",
    options: ["Les Étrangers de la maison", "Le Livre d'Emma", "Francesca", "Mur Méditerranée"],
    correct: 1
  },
  {
    q: "Quel écrivain haïtien a écrit « Le Mal de terre » ?",
    options: ["Gary Victor", "Isnardin Vieux", "Paula Clermont Péan", "Carl Brouard"],
    correct: 2
  },
  {
    q: "Retrouvez l'auteur de « L'Oiseau schizophone » parmi ces propositions :",
    options: ["Alibée Féry", "Ignace Nau", "Frankétienne", "Jean-Claude Bajeux"],
    correct: 2
  },
  {
    q: "Retrouvez l'auteur de « Krik? Krak! » parmi ces propositions :",
    options: ["Edwidge Danticat", "Jean-Euphèle Milcé", "Gary Klang", "Etzer Vilaire"],
    correct: 0
  },
  {
    q: "Dans le paysage des lettres haïtiennes, Anthony Phelps incarne quel mouvement ?",
    options: ["Indigénisme", "Génération de la Ronde", "Haïti Littéraire", "Spiralisme"],
    correct: 2
  },
  {
    q: "Quel label littéraire est le plus souvent accolé au nom de René Philoctète ?",
    options: ["Spiralisme", "Réalisme merveilleux", "Indigénisme", "Génération de la Ronde"],
    correct: 0
  },
  {
    q: "Jean-Robert Léonidas a notamment donné naissance à quelle œuvre ?",
    options: ["Maître-Minuit", "La Couleur de l'aube", "Île à vau-l'eau", "L'Ombre animale"],
    correct: 2
  },
  {
    q: "On doit à la plume de Etzer Vilaire l'œuvre suivante :",
    options: ["Moi, Toussaint Louverture", "Nouveaux poèmes", "Manhattan Blues", "L'Énigme du retour"],
    correct: 1
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Anacaona » ?",
    options: ["Serge Legagneur", "Justin Chrysostome Dorsainvil", "Jean Métellus", "Louis Joseph Janvier"],
    correct: 2
  },
  {
    q: "Jacques Roumain est identifié(e) à quel courant dans l'histoire littéraire d'Haïti ?",
    options: ["Haïti Littéraire", "Génération de la Ronde", "Indigénisme", "Réalisme merveilleux"],
    correct: 2
  },
  {
    q: "Quel nom d'auteur associez-vous à « Le Livre d'Emma » ?",
    options: ["Jacques Stephen Alexis", "Ida Faubert", "Georges Anglade", "Marie-Célie Agnant"],
    correct: 3
  },
  {
    q: "Quel titre figure dans la bibliographie de Ida Faubert ?",
    options: ["Encre allègre", "Cœur des Îles", "Fils de misère", "Assaut à la nuit"],
    correct: 1
  },
  {
    q: "Parmi ces titres, lequel est signé Léon Laleau ?",
    options: ["Les Immortelles", "Le Choc", "Adieu, mon frère", "Huit jours dans un no man's land"],
    correct: 1
  },
  {
    q: "Quel courant littéraire est associé au nom de René Philoctète ?",
    options: ["Haïti Littéraire", "Génération de la Ronde", "Spiralisme", "Réalisme merveilleux"],
    correct: 2
  },
  {
    q: "Stanley Péan a notamment donné naissance à quelle œuvre ?",
    options: ["Les Étrangers de la maison", "Les Rapaces", "Zombi Blues", "Les Villages de Dieu"],
    correct: 2
  },
  {
    q: "Parmi ces titres, lequel est signé Louis-Philippe Dalembert ?",
    options: ["Mur Méditerranée", "Les Étrangers de la maison", "La Montagne ensorcelée", "Écrit sur du ruban rose"],
    correct: 0
  },
  {
    q: "Kettly Mars a notamment donné naissance à quelle œuvre ?",
    options: ["Rue Frontière", "L'Heure hybride", "Mosochwazi Kout Fè", "Le Briseur de rosée"],
    correct: 1
  },
  {
    q: "« Contes et légendes d'Haïti » compte parmi les œuvres de quel auteur ?",
    options: ["Joujou Turenne", "Hénock Trouillot", "Stanley Péan", "Kettly Mars"],
    correct: 0
  },
  {
    q: "Dans quel grand mouvement littéraire s'inscrit Jean-Claude Fignolé ?",
    options: ["Réalisme merveilleux", "Spiralisme", "Indigénisme", "Génération de la Ronde"],
    correct: 1
  },
  {
    q: "On doit à la plume de Jean-Claude Fignolé l'œuvre suivante :",
    options: ["Poésies nationales", "Mur Méditerranée", "Je suis vivant", "Aube tranquille"],
    correct: 3
  },
  {
    q: "Qui a publié le livre « Le Qui-vive » ?",
    options: ["Marie Vieux-Chauvet", "Marie-Célie Agnant", "Syto Cavé", "Oswald Durand"],
    correct: 2
  },
  {
    q: "Quelle est l'œuvre de Émile Ollivier parmi cette liste ?",
    options: ["L'Énigme du retour", "La Couleur de l'aube", "La Danse sur le volcan", "Mère-Solitude"],
    correct: 3
  },
  {
    q: "Quel label littéraire est le plus souvent accolé au nom de Anthony Phelps ?",
    options: ["Indigénisme", "Génération de la Ronde", "Spiralisme", "Haïti Littéraire"],
    correct: 3
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Ignace Nau ?",
    options: ["Ferdinand je suis à Paris", "Le Lambi", "Le Trou du souffleur", "Fonds des Nègres"],
    correct: 1
  },
  {
    q: "Davertige est identifié(e) à quel courant dans l'histoire littéraire d'Haïti ?",
    options: ["Réalisme merveilleux", "Indigénisme", "Haïti Littéraire", "Génération de la Ronde"],
    correct: 2
  },
  {
    q: "Quelle école littéraire haïtienne est représentée par Oswald Durand ?",
    options: ["Spiralisme", "Réalisme merveilleux", "Génération de la Ronde", "Haïti Littéraire"],
    correct: 2
  },
  {
    q: "Massillon Coicou est identifié(e) à quel courant dans l'histoire littéraire d'Haïti ?",
    options: ["Spiralisme", "Haïti Littéraire", "Indigénisme", "Génération de la Ronde"],
    correct: 3
  },
  {
    q: "« Vers le sud » compte parmi les œuvres de quel auteur ?",
    options: ["Makenzy Orcel", "Pradel Pompilus", "Dany Laferrière", "Jean-Robert Cadet"],
    correct: 2
  },
  {
    q: "Quel écrivain haïtien a écrit « Le Conditionnel » ?",
    options: ["Anthony Phelps", "Makenzy Orcel", "Jean-Euphèle Milcé", "Liliane Devieux-Dehoux"],
    correct: 0
  },
  {
    q: "Identifiez l'œuvre écrite par Marie-Célie Agnant :",
    options: ["Manuel illustré d'histoire de la littérature haïtienne", "Textes interdits", "La Dot de Sara", "Guillaume et Nathalie"],
    correct: 2
  },
  {
    q: "« La Récolte douce des larmes » a été publié(e) par quel écrivain haïtien ?",
    options: ["Gary Victor", "Charles Moravia", "Tertulien Guilbaud", "Edwidge Danticat"],
    correct: 3
  },
  {
    q: "Quelle école littéraire haïtienne est représentée par Émile Roumer ?",
    options: ["Génération de la Ronde", "Spiralisme", "Réalisme merveilleux", "Indigénisme"],
    correct: 3
  },
  {
    q: "Louis Joseph Janvier est notamment l'auteur(e) de :",
    options: ["Rêver debout", "Épisode de la Révolution", "La République d'Haïti et ses visiteurs", "Pèlentèt"],
    correct: 2
  },
  {
    q: "À quel mouvement littéraire haïtien appartient l'auteur Carl Brouard ?",
    options: ["Génération de la Ronde", "Haïti Littéraire", "Réalisme merveilleux", "Indigénisme"],
    correct: 3
  },
  {
    q: "Quelle école littéraire haïtienne est représentée par René Philoctète ?",
    options: ["Génération de la Ronde", "Spiralisme", "Indigénisme", "Haïti Littéraire"],
    correct: 1
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Musa-Paidica » ?",
    options: ["Alibée Féry", "Etzer Vilaire", "Jean D'Amérique", "Makenzy Orcel"],
    correct: 0
  },
  {
    q: "Etzer Vilaire est identifié(e) à quel courant dans l'histoire littéraire d'Haïti ?",
    options: ["Réalisme merveilleux", "Haïti Littéraire", "Spiralisme", "Génération de la Ronde"],
    correct: 3
  },
  {
    q: "L'œuvre « Musique nègre » a été écrite par :",
    options: ["Pradel Pompilus", "Louis Joseph Janvier", "Léon Laleau", "Gary Klang"],
    correct: 2
  },
  {
    q: "Identifiez l'œuvre écrite par Charles Moravia :",
    options: ["Kasalé", "Aube tranquille", "La Crête-à-Pierrot", "Cric? Crac!"],
    correct: 2
  },
  {
    q: "Anthony Phelps figure parmi les représentants de quel mouvement ?",
    options: ["Spiralisme", "Réalisme merveilleux", "Indigénisme", "Haïti Littéraire"],
    correct: 3
  },
  {
    q: "À qui doit-on l'œuvre littéraire « L'Héritage colonial en Haïti » ?",
    options: ["Michel Soukar", "Placide David", "Faubert Bolivar", "Louis-Philippe Dalembert"],
    correct: 1
  },
  {
    q: "Quel courant littéraire est associé au nom de Frankétienne ?",
    options: ["Haïti Littéraire", "Spiralisme", "Réalisme merveilleux", "Génération de la Ronde"],
    correct: 1
  },
  {
    q: "« La Plage des songes » compte parmi les œuvres de quel auteur ?",
    options: ["Jean-Claude Charles", "Marie-Alice Théard", "Stanley Péan", "Emmelie Prophète"],
    correct: 2
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Lyonel Trouillot ?",
    options: ["Compère Général Soleil", "Le Mal de terre", "Thérèse en mille morceaux", "Rhapsodie sale"],
    correct: 2
  },
  {
    q: "Quel label littéraire est le plus souvent accolé au nom de Émile Roumer ?",
    options: ["Indigénisme", "Haïti Littéraire", "Génération de la Ronde", "Réalisme merveilleux"],
    correct: 0
  },
  {
    q: "Liliane Devieux-Dehoux est notamment l'auteur(e) de :",
    options: ["Réflexions diverses sur Haïti", "Écrivains haïtiens", "L'Amour oui. La mort non", "Pays sans chapeau"],
    correct: 2
  },
  {
    q: "Retrouvez l'auteur de « Réflexions diverses sur Haïti » parmi ces propositions :",
    options: ["Carl Brouard", "Guy Régis Jr", "Demesvar Delorme", "Marvin Victor"],
    correct: 2
  },
  {
    q: "Quel nom d'auteur associez-vous à « Musique nègre » ?",
    options: ["Léon Laleau", "Anténor Firmin", "Windsor Bellegarde", "Marie Vieux-Chauvet"],
    correct: 0
  },
  {
    q: "On rattache généralement Jean Price-Mars à quel mouvement des lettres haïtiennes ?",
    options: ["Réalisme merveilleux", "Indigénisme", "Spiralisme", "Haïti Littéraire"],
    correct: 1
  },
  {
    q: "Le livre « Rhapsodie sale » est dû à la plume de :",
    options: ["Dany Laferrière", "Jean-Robert Léonidas", "Lyonel Trouillot", "Jean D'Amérique"],
    correct: 3
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Séna » ?",
    options: ["Roland Morisseau", "Fernand Hibbert", "Georges Anglade", "Jean-Robert Léonidas"],
    correct: 1
  },
  {
    q: "Quel écrivain haïtien a écrit « Fonds des Nègres » ?",
    options: ["James Noël", "Makenzy Orcel", "Marie Vieux-Chauvet", "Fresnel Sylvestre"],
    correct: 2
  },
  {
    q: "Quel nom d'auteur associez-vous à « Une eau-forte » ?",
    options: ["Jean-Euphèle Milcé", "Jean Métellus", "Jean-Claude Charles", "Carl Brouard"],
    correct: 1
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « L'Oiseau schizophone » ?",
    options: ["Cléante Valcin", "Michel Soukar", "Liliane Devieux-Dehoux", "Frankétienne"],
    correct: 3
  },
  {
    q: "« Sous le soleil d'Haïti » compte parmi les œuvres de quel auteur ?",
    options: ["Gary Klang", "Windsor Bellegarde", "Ida Faubert", "Léon Laleau"],
    correct: 2
  },
  {
    q: "De quelle plume est issue l'œuvre « Sous le soleil d'Haïti » ?",
    options: ["Ida Faubert", "Yanick Lahens", "Alibée Féry", "Léon Laleau"],
    correct: 0
  },
  {
    q: "Dans le paysage des lettres haïtiennes, Massillon Coicou incarne quel mouvement ?",
    options: ["Réalisme merveilleux", "Spiralisme", "Génération de la Ronde", "Indigénisme"],
    correct: 2
  },
  {
    q: "Dans quel grand mouvement littéraire s'inscrit Anthony Phelps ?",
    options: ["Génération de la Ronde", "Spiralisme", "Indigénisme", "Haïti Littéraire"],
    correct: 3
  },
  {
    q: "Quel écrivain haïtien a écrit « Rue des pas perdus » ?",
    options: ["Windsor Bellegarde", "Dany Laferrière", "Makenzy Orcel", "Lyonel Trouillot"],
    correct: 3
  },
  {
    q: "L'écrivain(e) Louis-Philippe Dalembert est célèbre pour avoir publié :",
    options: ["Une somme humaine", "Le Conditionnel", "Milwaukee Blues", "Musa-Paidica"],
    correct: 2
  },
  {
    q: "Le livre « Un Arc-en-ciel pour l'occident chrétien » est dû à la plume de :",
    options: ["Emmelie Prophète", "Antoine Innocent", "René Depestre", "Jean-Claude Charles"],
    correct: 2
  },
  {
    q: "Historiquement, Carl Brouard appartient à quel mouvement littéraire ?",
    options: ["Spiralisme", "Indigénisme", "Génération de la Ronde", "Haïti Littéraire"],
    correct: 1
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Cléante Valcin ?",
    options: ["L'Heure hybride", "La Blanche Négresse", "Rires et Pleurs", "Je suis vivant"],
    correct: 1
  },
  {
    q: "Dans quel grand mouvement littéraire s'inscrit Massillon Coicou ?",
    options: ["Génération de la Ronde", "Spiralisme", "Réalisme merveilleux", "Haïti Littéraire"],
    correct: 0
  },
  {
    q: "Quel ouvrage a été publié par Rodney Saint-Éloi ?",
    options: ["Jacques Roche, la vie entière", "L'Amour oui. La mort non", "L'Espace d'un cillement", "Huit jours dans un no man's land"],
    correct: 0
  },
  {
    q: "Historiquement, Jacques Stephen Alexis appartient à quel mouvement littéraire ?",
    options: ["Indigénisme", "Réalisme merveilleux", "Haïti Littéraire", "Spiralisme"],
    correct: 1
  },
  {
    q: "Qui a publié le livre « Épisode de la Révolution » ?",
    options: ["Oswald Durand", "Ignace Nau", "Guy Régis Jr", "Jean D'Amérique"],
    correct: 1
  },
  {
    q: "Quel livre porte la signature de Marie Vieux-Chauvet ?",
    options: ["Les Rapaces", "Le Rond-point", "Idem", "Fils de misère"],
    correct: 0
  },
  {
    q: "Quel label littéraire est le plus souvent accolé au nom de Léon Laleau ?",
    options: ["Haïti Littéraire", "Réalisme merveilleux", "Spiralisme", "Indigénisme"],
    correct: 3
  },
  {
    q: "On rattache généralement Georges Sylvain à quel mouvement des lettres haïtiennes ?",
    options: ["Indigénisme", "Spiralisme", "Génération de la Ronde", "Haïti Littéraire"],
    correct: 2
  },
  {
    q: "Quel label littéraire est le plus souvent accolé au nom de Georges Sylvain ?",
    options: ["Indigénisme", "Spiralisme", "Génération de la Ronde", "Réalisme merveilleux"],
    correct: 2
  },
  {
    q: "Quel ouvrage a été publié par Jean-Claude Charles ?",
    options: ["Rhapsodie sale", "Je suis vivant", "Manhattan Blues", "Passions"],
    correct: 2
  },
  {
    q: "Quel ouvrage a été publié par Jean D'Amérique ?",
    options: ["De l'égalité des races humaines", "Fonds des Nègres", "Mûr à crever", "Soleil à coudre"],
    correct: 3
  },
  {
    q: "Historiquement, Etzer Vilaire appartient à quel mouvement littéraire ?",
    options: ["Haïti Littéraire", "Réalisme merveilleux", "Génération de la Ronde", "Indigénisme"],
    correct: 2
  },
  {
    q: "L'écrivain(e) Marie Vieux-Chauvet est célèbre pour avoir publié :",
    options: ["Gouverneurs de la rosée", "Poésies nationales", "Le bout du monde est une fenêtre", "La Danse sur le volcan"],
    correct: 3
  },
  {
    q: "Frankétienne a notamment donné naissance à quelle œuvre ?",
    options: ["Le Livre d'Emma", "Dezafi", "Les Possédés de la pleine lune", "Maître-Minuit"],
    correct: 1
  },
  {
    q: "Parmi ces titres, lequel est signé René Depestre ?",
    options: ["Un Arc-en-ciel pour l'occident chrétien", "Le Testament des solitudes", "Vers le sud", "Écrivains haïtiens"],
    correct: 0
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Louis-Philippe Dalembert ?",
    options: ["La mémoire aux abois", "L'Autre Face de la mer", "Le Livre d'Emma", "Manuel illustré d'histoire de la littérature haïtienne"],
    correct: 1
  },
  {
    q: "« Aube tranquille » a été publié(e) par quel écrivain haïtien ?",
    options: ["Jean-Robert Léonidas", "Jean-Claude Fignolé", "Serge Legagneur", "Dany Laferrière"],
    correct: 1
  },
  {
    q: "« À l'angle des rues parallèles » compte parmi les œuvres de quel auteur ?",
    options: ["Antoine Innocent", "Ignace Nau", "Makenzy Orcel", "Gary Victor"],
    correct: 3
  },
  {
    q: "« Milwaukee Blues » est signé par quel auteur haïtien ?",
    options: ["Jean-Robert Cadet", "Louis-Philippe Dalembert", "Anténor Firmin", "Georges Sylvain"],
    correct: 1
  },
  {
    q: "Parmi ces titres, lequel est signé Jean Price-Mars ?",
    options: ["La Vocation de l'élite", "Pages retrouvées", "Krik? Krak!", "Île à vau-l'eau"],
    correct: 0
  },
  {
    q: "Quel ouvrage a été publié par Marie-Célie Agnant ?",
    options: ["L'Énigme du retour", "Le Trou du souffleur", "Saison de porcs", "La Dot de Sara"],
    correct: 3
  },
  {
    q: "Identifiez l'œuvre écrite par Anthony Phelps :",
    options: ["Nouveaux poèmes", "Bois d'ébène", "Corps mêlés", "La Bélière Caraïbe"],
    correct: 3
  },
  {
    q: "Quel titre figure dans la bibliographie de Jean Métellus ?",
    options: ["Anacaona", "L'Oiseau schizophone", "Francesca", "Le Lambi"],
    correct: 0
  },
  {
    q: "« Mes années Duvalier » compte parmi les œuvres de quel auteur ?",
    options: ["Marie-Alice Théard", "Justin Chrysostome Dorsainvil", "Jean D'Amérique", "René Philoctète"],
    correct: 0
  },
  {
    q: "Léon Laleau est une figure représentative de quel courant littéraire haïtien ?",
    options: ["Spiralisme", "Haïti Littéraire", "Réalisme merveilleux", "Indigénisme"],
    correct: 3
  },
  {
    q: "L'écrivain Davertige est souvent associé(e) au mouvement :",
    options: ["Indigénisme", "Réalisme merveilleux", "Haïti Littéraire", "Génération de la Ronde"],
    correct: 2
  },
  {
    q: "Quel titre figure dans la bibliographie de Davertige ?",
    options: ["Le Mât de cocagne", "Écrivains haïtiens", "Le Peuple des terres mêlées", "Idem"],
    correct: 3
  },
  {
    q: "Le livre « La Dot de Sara » est dû à la plume de :",
    options: ["Jean-Claude Bajeux", "Léon Laleau", "Etzer Vilaire", "Marie-Célie Agnant"],
    correct: 3
  },
  {
    q: "« Un Arc-en-ciel pour l'occident chrétien » compte parmi les œuvres de quel auteur ?",
    options: ["René Depestre", "Georges Sylvain", "Etzer Vilaire", "Pradel Pompilus"],
    correct: 0
  },
  {
    q: "Parmi ces titres, lequel est signé Marie-Alice Théard ?",
    options: ["Le Mal de vivre", "Ferdinand je suis à Paris", "Mes années Duvalier", "Thérèse en mille morceaux"],
    correct: 2
  },
  {
    q: "L'écrivain(e) Edwidge Danticat est célèbre pour avoir publié :",
    options: ["La Bélière Caraïbe", "Soleil à coudre", "Adieu, mon frère", "Amour, Colère et Folie"],
    correct: 2
  },
  {
    q: "« Le Peuple des terres mêlées » a été publié(e) par quel écrivain haïtien ?",
    options: ["Suzanne Comhaire-Sylvain", "René Philoctète", "Louis Joseph Janvier", "Jean Price-Mars"],
    correct: 1
  },
  {
    q: "Quel livre porte la signature de Jacques Roumain ?",
    options: ["Une eau-forte", "La Montagne ensorcelée", "Soleil à coudre", "La Danse sur le volcan"],
    correct: 1
  },
  {
    q: "Historiquement, Frankétienne appartient à quel mouvement littéraire ?",
    options: ["Spiralisme", "Haïti Littéraire", "Réalisme merveilleux", "Indigénisme"],
    correct: 0
  },
  {
    q: "À quel mouvement littéraire haïtien appartient l'auteur Etzer Vilaire ?",
    options: ["Réalisme merveilleux", "Indigénisme", "Génération de la Ronde", "Spiralisme"],
    correct: 2
  },
  {
    q: "René Philoctète est une figure représentative de quel courant littéraire haïtien ?",
    options: ["Génération de la Ronde", "Spiralisme", "Réalisme merveilleux", "Haïti Littéraire"],
    correct: 1
  },
  {
    q: "Quel écrivain haïtien a écrit « Romulus » ?",
    options: ["Jean D'Amérique", "Fernand Hibbert", "Jean-Robert Léonidas", "Antoine Innocent"],
    correct: 1
  },
  {
    q: "Quel courant littéraire est associé au nom de Carl Brouard ?",
    options: ["Indigénisme", "Génération de la Ronde", "Spiralisme", "Haïti Littéraire"],
    correct: 0
  },
  {
    q: "Quel courant littéraire est associé au nom de Etzer Vilaire ?",
    options: ["Spiralisme", "Indigénisme", "Réalisme merveilleux", "Génération de la Ronde"],
    correct: 3
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Frankétienne ?",
    options: ["Textes interdits", "Les Fantoches", "Huit jours dans un no man's land", "Musique nègre"],
    correct: 2
  },
  {
    q: "Quel nom d'auteur associez-vous à « Fille d'Haïti » ?",
    options: ["Syto Cavé", "Serge Legagneur", "Marie Vieux-Chauvet", "Tertulien Guilbaud"],
    correct: 2
  },
  {
    q: "On doit à la plume de Anthony Phelps l'œuvre suivante :",
    options: ["La Bélière Caraïbe", "L'Odeur du café", "Le Sang et la Mer", "À l'angle des rues parallèles"],
    correct: 0
  },
  {
    q: "Quel nom d'auteur associez-vous à « Pages retrouvées » ?",
    options: ["Davertige", "Syto Cavé", "Georges Anglade", "Carl Brouard"],
    correct: 3
  },
  {
    q: "Hénock Trouillot est notamment l'auteur(e) de :",
    options: ["Le Mât de cocagne", "Le Manuscrit de mon ami", "Dessalines ou le sang du Pont-Rouge", "Treize nouvelles vaudou"],
    correct: 2
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « À l'angle des rues parallèles » ?",
    options: ["Georges Castera", "Jean Métellus", "Marie-Célie Agnant", "Gary Victor"],
    correct: 3
  },
  {
    q: "Dans le paysage des lettres haïtiennes, Oswald Durand incarne quel mouvement ?",
    options: ["Haïti Littéraire", "Spiralisme", "Indigénisme", "Génération de la Ronde"],
    correct: 3
  },
  {
    q: "Quelle école littéraire haïtienne est représentée par Georges Sylvain ?",
    options: ["Indigénisme", "Spiralisme", "Haïti Littéraire", "Génération de la Ronde"],
    correct: 3
  },
  {
    q: "Quel titre figure dans la bibliographie de Jean D'Amérique ?",
    options: ["Ultravocal", "Idem", "La Danse sur le volcan", "Rhapsodie sale"],
    correct: 3
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Ignace Nau ?",
    options: ["Manhattan Blues", "Corps mêlés", "Une eau-forte", "Le Lambi"],
    correct: 3
  },
  {
    q: "L'écrivain Jacques Roumain est souvent associé(e) au mouvement :",
    options: ["Haïti Littéraire", "Génération de la Ronde", "Indigénisme", "Spiralisme"],
    correct: 2
  },
  {
    q: "Dans quel grand mouvement littéraire s'inscrit Oswald Durand ?",
    options: ["Haïti Littéraire", "Génération de la Ronde", "Indigénisme", "Réalisme merveilleux"],
    correct: 1
  },
  {
    q: "On doit à la plume de Josaphat-Robert Large l'œuvre suivante :",
    options: ["Les Étrangers de la maison", "Cric? Crac!", "Manuel d'histoire d'Haïti", "Maître-Minuit"],
    correct: 0
  },
  {
    q: "« Douces déroutes » est signé par quel auteur haïtien ?",
    options: ["Yanick Lahens", "Gary Victor", "Placide David", "Gérard Étienne"],
    correct: 0
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Saison de porcs » ?",
    options: ["Jean-Claude Fignolé", "Gary Victor", "Stanley Péan", "Georges Anglade"],
    correct: 1
  },
  {
    q: "Jean Métellus est notamment l'auteur(e) de :",
    options: ["Yanvalou pour Charlie", "L'Année Dessalines", "Fonds des Nègres", "Les Dix hommes noirs"],
    correct: 1
  },
  {
    q: "Quel ouvrage a été publié par Stanley Péan ?",
    options: ["L'Année Dessalines", "La Plage des songes", "Romancero aux étoiles", "Manuel illustré d'histoire de la littérature haïtienne"],
    correct: 1
  },
  {
    q: "L'œuvre « Cric? Crac! » a été écrite par :",
    options: ["Marie Vieux-Chauvet", "Fernand Hibbert", "Gary Klang", "Georges Sylvain"],
    correct: 3
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Manhattan Blues » ?",
    options: ["Frankétienne", "Jean-Claude Charles", "Roussan Camille", "Faubert Bolivar"],
    correct: 1
  },
  {
    q: "Quel écrivain haïtien a écrit « Rapatriés » ?",
    options: ["Makenzy Orcel", "Roland Morisseau", "Néhémy Pierre-Dahomey", "Anthony Phelps"],
    correct: 2
  },
  {
    q: "Le livre « Île à vau-l'eau » est dû à la plume de :",
    options: ["Jean-Robert Léonidas", "Ignace Nau", "Demesvar Delorme", "Jean-Euphèle Milcé"],
    correct: 0
  },
  {
    q: "Quelle est l'œuvre de René Philoctète parmi cette liste ?",
    options: ["Ces îles qui marchent", "Le Rond-point", "Dessalines ou le sang du Pont-Rouge", "Les Thazar"],
    correct: 0
  },
  {
    q: "Quelle école littéraire haïtienne est représentée par Davertige ?",
    options: ["Génération de la Ronde", "Indigénisme", "Haïti Littéraire", "Réalisme merveilleux"],
    correct: 2
  },
  {
    q: "Quel courant littéraire est associé au nom de Jean Price-Mars ?",
    options: ["Spiralisme", "Haïti Littéraire", "Indigénisme", "Réalisme merveilleux"],
    correct: 2
  },
  {
    q: "Retrouvez l'auteur de « Thémistocle-Épaminondas Labasterre » parmi ces propositions :",
    options: ["René Philoctète", "Frédéric Marcelin", "Jean-Robert Cadet", "Alibée Féry"],
    correct: 1
  },
  {
    q: "« Treize nouvelles vaudou » compte parmi les œuvres de quel auteur ?",
    options: ["Gary Victor", "Jean D'Amérique", "Jean-Claude Bajeux", "Anténor Firmin"],
    correct: 0
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « La Famille Vortex » ?",
    options: ["Jean Métellus", "Marvin Victor", "Carl Brouard", "Yanick Lahens"],
    correct: 0
  },
  {
    q: "Quel écrivain haïtien a écrit « Krik? Krak! » ?",
    options: ["Georges Sylvain", "Edwidge Danticat", "Emmelie Prophète", "Alibée Féry"],
    correct: 1
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Fils de misère » ?",
    options: ["Makenzy Orcel", "Marie-Thérèse Colimon-Hall", "Georges Castera", "Louis-Philippe Dalembert"],
    correct: 1
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Bois d'ébène » ?",
    options: ["Ida Faubert", "Jacques Roumain", "Marvin Victor", "Roland Morisseau"],
    correct: 1
  },
  {
    q: "Parmi ces titres, lequel est signé Rodney Saint-Éloi ?",
    options: ["Francesca", "Boulevard Baie des Anges", "Nouveaux poèmes", "Haïti kenbe la !"],
    correct: 3
  },
  {
    q: "L'œuvre « Une somme humaine » a été écrite par :",
    options: ["Jean Price-Mars", "Makenzy Orcel", "Massillon Coicou", "Pradel Pompilus"],
    correct: 1
  },
  {
    q: "Quel nom d'auteur associez-vous à « Vieilles chansons » ?",
    options: ["Louis Joseph Janvier", "Roland Morisseau", "Fresnel Sylvestre", "Tertulien Guilbaud"],
    correct: 3
  },
  {
    q: "On rattache généralement Oswald Durand à quel mouvement des lettres haïtiennes ?",
    options: ["Haïti Littéraire", "Réalisme merveilleux", "Génération de la Ronde", "Spiralisme"],
    correct: 2
  },
  {
    q: "L'œuvre « La Bélière Caraïbe » a été écrite par :",
    options: ["Fernand Hibbert", "Davertige", "Anthony Phelps", "Justin Lhérisson"],
    correct: 2
  },
  {
    q: "Massillon Coicou a notamment donné naissance à quelle œuvre ?",
    options: ["Dezafi", "L'Espace d'un cillement", "Passions", "Écrivains haïtiens"],
    correct: 2
  },
  {
    q: "De quelle plume est issue l'œuvre « La Danse sur le volcan » ?",
    options: ["Syto Cavé", "Placide David", "James Noël", "Marie Vieux-Chauvet"],
    correct: 3
  },
  {
    q: "Quelle école littéraire haïtienne est représentée par Anthony Phelps ?",
    options: ["Haïti Littéraire", "Spiralisme", "Réalisme merveilleux", "Indigénisme"],
    correct: 0
  },
  {
    q: "Retrouvez l'auteur de « Le Nègre crucifié » parmi ces propositions :",
    options: ["Jean-Robert Cadet", "Gérard Étienne", "Josaphat-Robert Large", "Ida Faubert"],
    correct: 1
  },
  {
    q: "Historiquement, Roland Morisseau appartient à quel mouvement littéraire ?",
    options: ["Indigénisme", "Haïti Littéraire", "Génération de la Ronde", "Spiralisme"],
    correct: 1
  },
  {
    q: "Historiquement, Georges Sylvain appartient à quel mouvement littéraire ?",
    options: ["Réalisme merveilleux", "Génération de la Ronde", "Spiralisme", "Indigénisme"],
    correct: 1
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Marie-Célie Agnant ?",
    options: ["La Récolte douce des larmes", "La Dot de Sara", "Le Peuple des terres mêlées", "Passages"],
    correct: 1
  },
  {
    q: "Michel Soukar est notamment l'auteur(e) de :",
    options: ["Silhouettes de nègres et de négrophiles", "Désirée Congo", "Le Fusil et la croix", "Huit jours dans un no man's land"],
    correct: 2
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Stanley Péan ?",
    options: ["Huit jours dans un no man's land", "L'Oiseau schizophone", "Pays sans chapeau", "Zombi Blues"],
    correct: 3
  },
  {
    q: "Quel label littéraire est le plus souvent accolé au nom de Etzer Vilaire ?",
    options: ["Indigénisme", "Haïti Littéraire", "Génération de la Ronde", "Spiralisme"],
    correct: 2
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Jean-Claude Charles ?",
    options: ["L'Autre Face de la mer", "Textes interdits", "Huit jours dans un no man's land", "Ferdinand je suis à Paris"],
    correct: 3
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Zombi Blues » ?",
    options: ["Stanley Péan", "Évelyne Trouillot", "Jean-Euphèle Milcé", "Jean-Claude Charles"],
    correct: 0
  },
  {
    q: "Quel ouvrage a été publié par Marie-Thérèse Colimon-Hall ?",
    options: ["La mémoire aux abois", "La République d'Haïti et ses visiteurs", "Le Mal de vivre", "Fils de misère"],
    correct: 3
  },
  {
    q: "Historiquement, Oswald Durand appartient à quel mouvement littéraire ?",
    options: ["Génération de la Ronde", "Haïti Littéraire", "Réalisme merveilleux", "Indigénisme"],
    correct: 0
  },
  {
    q: "Identifiez l'œuvre écrite par Néhémy Pierre-Dahomey :",
    options: ["Le Qui-vive", "Saisons sauvages", "Passages", "Boulevard Baie des Anges"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Fils de misère » ?",
    options: ["Évelyne Trouillot", "Paula Clermont Péan", "Georges Anglade", "Marie-Thérèse Colimon-Hall"],
    correct: 3
  },
  {
    q: "Le livre « La mémoire aux abois » est dû à la plume de :",
    options: ["Faubert Bolivar", "Évelyne Trouillot", "Émile Roumer", "Néhémy Pierre-Dahomey"],
    correct: 1
  },
  {
    q: "« Huit jours dans un no man's land » a été publié(e) par quel écrivain haïtien ?",
    options: ["Emmelie Prophète", "Marie-Thérèse Colimon-Hall", "Davertige", "Frankétienne"],
    correct: 3
  },
  {
    q: "On doit à la plume de Frankétienne l'œuvre suivante :",
    options: ["Des fleurs pour les héros", "Pèlentèt", "Douces déroutes", "Romancero aux étoiles"],
    correct: 1
  },
  {
    q: "L'œuvre « L'Empereur Dessalines » a été écrite par :",
    options: ["Davertige", "Tertulien Guilbaud", "Hénock Trouillot", "Massillon Coicou"],
    correct: 3
  },
  {
    q: "Quelle est l'œuvre de Marie-Célie Agnant parmi cette liste ?",
    options: ["Le Livre d'Emma", "Francesca", "Haïti, terre mystique", "Séna"],
    correct: 0
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « La Famille des Pitite-Caille » ?",
    options: ["Jacques Roumain", "Justin Lhérisson", "Marie-Alice Théard", "Léon Laleau"],
    correct: 1
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Jacques Roche, la vie entière » ?",
    options: ["Rodney Saint-Éloi", "Roussan Camille", "Anthony Phelps", "Marvin Victor"],
    correct: 0
  },
  {
    q: "Faubert Bolivar est notamment l'auteur(e) de :",
    options: ["Silhouettes de nègres et de négrophiles", "Séna", "Rue Frontière", "Nouveaux poèmes"],
    correct: 2
  },
  {
    q: "Historiquement, René Philoctète appartient à quel mouvement littéraire ?",
    options: ["Génération de la Ronde", "Haïti Littéraire", "Indigénisme", "Spiralisme"],
    correct: 3
  },
  {
    q: "Qui a publié le livre « Le Sang et la Mer » ?",
    options: ["Gary Victor", "Guy Régis Jr", "Anthony Phelps", "Stanley Péan"],
    correct: 0
  },
  {
    q: "L'écrivain Jacques Stephen Alexis est souvent associé(e) au mouvement :",
    options: ["Réalisme merveilleux", "Haïti Littéraire", "Génération de la Ronde", "Indigénisme"],
    correct: 0
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Le Roman de l'occupation » ?",
    options: ["Yanick Lahens", "Pradel Pompilus", "Michel Soukar", "Isnardin Vieux"],
    correct: 3
  },
  {
    q: "Dans le paysage des lettres haïtiennes, Jean-Claude Fignolé incarne quel mouvement ?",
    options: ["Génération de la Ronde", "Réalisme merveilleux", "Spiralisme", "Indigénisme"],
    correct: 2
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Syto Cavé ?",
    options: ["Belle merveille", "La Récolte douce des larmes", "Le Qui-vive", "L'Espace d'un cillement"],
    correct: 2
  },
  {
    q: "« Compère Général Soleil » compte parmi les œuvres de quel auteur ?",
    options: ["Léon Laleau", "Emmelie Prophète", "Faubert Bolivar", "Jacques Stephen Alexis"],
    correct: 3
  },
  {
    q: "De quelle plume est issue l'œuvre « Nouveaux poèmes » ?",
    options: ["Gary Klang", "Etzer Vilaire", "Jean D'Amérique", "Jean-Claude Charles"],
    correct: 1
  },
  {
    q: "Quel label littéraire est le plus souvent accolé au nom de Serge Legagneur ?",
    options: ["Haïti Littéraire", "Réalisme merveilleux", "Spiralisme", "Génération de la Ronde"],
    correct: 0
  },
  {
    q: "René Philoctète figure parmi les représentants de quel mouvement ?",
    options: ["Génération de la Ronde", "Spiralisme", "Haïti Littéraire", "Indigénisme"],
    correct: 1
  },
  {
    q: "Parmi ces titres, lequel est signé Dany Laferrière ?",
    options: ["Fille d'Haïti", "Le Briseur de rosée", "Comment faire l'amour avec un Nègre sans se fatiguer", "L'Empereur Dessalines"],
    correct: 2
  },
  {
    q: "Quel écrivain haïtien a écrit « Le bout du monde est une fenêtre » ?",
    options: ["Justin Lhérisson", "René Philoctète", "Kettly Mars", "Emmelie Prophète"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « La mémoire aux abois » ?",
    options: ["Gérard Étienne", "Évelyne Trouillot", "Demesvar Delorme", "Néhémy Pierre-Dahomey"],
    correct: 1
  },
  {
    q: "Quel label littéraire est le plus souvent accolé au nom de Jean Price-Mars ?",
    options: ["Haïti Littéraire", "Réalisme merveilleux", "Indigénisme", "Spiralisme"],
    correct: 2
  },
  {
    q: "Parmi ces titres, lequel est signé Jacques Roumain ?",
    options: ["L'Odeur du café", "Bois d'ébène", "Écrivains haïtiens", "Les Thazar"],
    correct: 1
  },
  {
    q: "L'œuvre « Cœur des Îles » a été écrite par :",
    options: ["Anthony Phelps", "Josaphat-Robert Large", "James Noël", "Ida Faubert"],
    correct: 3
  },
  {
    q: "On rattache généralement Roland Morisseau à quel mouvement des lettres haïtiennes ?",
    options: ["Haïti Littéraire", "Spiralisme", "Réalisme merveilleux", "Génération de la Ronde"],
    correct: 0
  },
  {
    q: "On rattache généralement Etzer Vilaire à quel mouvement des lettres haïtiennes ?",
    options: ["Génération de la Ronde", "Haïti Littéraire", "Indigénisme", "Réalisme merveilleux"],
    correct: 0
  },
  {
    q: "Quel nom d'auteur associez-vous à « Le Manuscrit de mon ami » ?",
    options: ["Jean-Claude Bajeux", "Jean-Robert Cadet", "Fernand Hibbert", "Isnardin Vieux"],
    correct: 2
  },
  {
    q: "Quel titre figure dans la bibliographie de Évelyne Trouillot ?",
    options: ["Désirée Congo", "Séna", "L'Espace d'un cillement", "Pays sans chapeau"],
    correct: 0
  },
  {
    q: "De quelle plume est issue l'œuvre « Épisode de la Révolution » ?",
    options: ["Placide David", "Jacques Roumain", "Ignace Nau", "Émile Ollivier"],
    correct: 2
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Aube tranquille » ?",
    options: ["Liliane Devieux-Dehoux", "Michel Soukar", "Jean-Claude Fignolé", "Georges Castera"],
    correct: 2
  },
  {
    q: "Quel nom d'auteur associez-vous à « Aube tranquille » ?",
    options: ["Jean-Claude Fignolé", "Frédéric Marcelin", "Windsor Bellegarde", "Paula Clermont Péan"],
    correct: 0
  },
  {
    q: "Quel livre porte la signature de Jean Métellus ?",
    options: ["Une eau-forte", "Rires et Pleurs", "Musa-Paidica", "Le Choc"],
    correct: 0
  },
  {
    q: "Quel livre porte la signature de René Philoctète ?",
    options: ["Belle merveille", "Frayeur", "Gouverneurs de la rosée", "Le Peuple des terres mêlées"],
    correct: 3
  },
  {
    q: "L'écrivain Roland Morisseau est souvent associé(e) au mouvement :",
    options: ["Haïti Littéraire", "Spiralisme", "Réalisme merveilleux", "Génération de la Ronde"],
    correct: 0
  },
  {
    q: "Retrouvez l'auteur de « Assaut à la nuit » parmi ces propositions :",
    options: ["Roland Morisseau", "Kettly Mars", "Roussan Camille", "Massillon Coicou"],
    correct: 2
  },
  {
    q: "« Jacmel au crépuscule » est signé par quel auteur haïtien ?",
    options: ["Makenzy Orcel", "Joujou Turenne", "Fresnel Sylvestre", "Jean Métellus"],
    correct: 3
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Le Livre d'Emma » ?",
    options: ["Marie-Célie Agnant", "Carl Brouard", "Jacques Roumain", "Léon Laleau"],
    correct: 0
  },
  {
    q: "Historiquement, Anthony Phelps appartient à quel mouvement littéraire ?",
    options: ["Réalisme merveilleux", "Indigénisme", "Spiralisme", "Haïti Littéraire"],
    correct: 3
  },
  {
    q: "Le livre « Les Rapaces » est dû à la plume de :",
    options: ["Anthony Phelps", "Marie Vieux-Chauvet", "Fernand Hibbert", "Davertige"],
    correct: 1
  },
  {
    q: "Identifiez l'œuvre écrite par René Philoctète :",
    options: ["Passions", "Bicentenaire", "La Famille des Pitite-Caille", "Le Peuple des terres mêlées"],
    correct: 3
  },
  {
    q: "On rattache généralement René Philoctète à quel mouvement des lettres haïtiennes ?",
    options: ["Indigénisme", "Haïti Littéraire", "Spiralisme", "Génération de la Ronde"],
    correct: 2
  },
  {
    q: "Quel livre porte la signature de Jacques Stephen Alexis ?",
    options: ["Haïti, terre mystique", "Avant que les ombres s'effacent", "Théâtre", "Compère Général Soleil"],
    correct: 3
  },
  {
    q: "Quel nom d'auteur associez-vous à « Belle merveille » ?",
    options: ["Georges Castera", "James Noël", "Roland Morisseau", "Joujou Turenne"],
    correct: 1
  },
  {
    q: "Edwidge Danticat a notamment donné naissance à quelle œuvre ?",
    options: ["Haïti, terre mystique", "Le Cri de l'oiseau rouge", "Je suis vivant", "Frayeur"],
    correct: 1
  },
  {
    q: "« L'Année Dessalines » compte parmi les œuvres de quel auteur ?",
    options: ["Hénock Trouillot", "Makenzy Orcel", "Frédéric Marcelin", "Jean Métellus"],
    correct: 3
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Ignace Nau ?",
    options: ["Le Conditionnel", "Cric? Crac!", "Épisode de la Révolution", "Dessalines ou le sang du Pont-Rouge"],
    correct: 2
  },
  {
    q: "Dans le paysage des lettres haïtiennes, Jean Price-Mars incarne quel mouvement ?",
    options: ["Spiralisme", "Génération de la Ronde", "Indigénisme", "Haïti Littéraire"],
    correct: 2
  },
  {
    q: "Identifiez l'œuvre écrite par Marie Vieux-Chauvet :",
    options: ["Les Blancs de mémoire", "Écrivains haïtiens", "Fonds des Nègres", "À l'angle des rues parallèles"],
    correct: 2
  },
  {
    q: "Georges Castera est notamment l'auteur(e) de :",
    options: ["Encre allègre", "Rêver debout", "Fils de misère", "La Blanche Négresse"],
    correct: 0
  },
  {
    q: "Quel ouvrage a été publié par Anthony Phelps ?",
    options: ["La Dot de Sara", "L'Heure hybride", "Rapatriés", "Des fleurs pour les héros"],
    correct: 3
  },
  {
    q: "Edwidge Danticat est notamment l'auteur(e) de :",
    options: ["La Récolte douce des larmes", "Assaut à la nuit", "Bonjour et adieu à la négritude", "Yanvalou pour Charlie"],
    correct: 0
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Louis-Philippe Dalembert ?",
    options: ["L'Autre Face de la mer", "L'Empereur Dessalines", "Le Manuscrit de mon ami", "Bain de lune"],
    correct: 0
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Évelyne Trouillot ?",
    options: ["Musique nègre", "Au pipirite chantant", "Désirée Congo", "L'Héritage colonial en Haïti"],
    correct: 2
  },
  {
    q: "Retrouvez l'auteur de « Le Sang et la Mer » parmi ces propositions :",
    options: ["Émile Ollivier", "Gary Victor", "Pradel Pompilus", "Nadine Magloire"],
    correct: 1
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Edwidge Danticat ?",
    options: ["Rêver debout", "Le Cri de l'oiseau rouge", "Manhattan Blues", "L'Amour oui. La mort non"],
    correct: 1
  },
  {
    q: "Guy Régis Jr a notamment donné naissance à quelle œuvre ?",
    options: ["Corps mêlés", "Moi, fardeau inhérent", "Clair de Manbo", "Écrit sur du ruban rose"],
    correct: 1
  },
  {
    q: "Le livre « Nouveaux poèmes » est dû à la plume de :",
    options: ["Jean-Claude Charles", "Massillon Coicou", "James Noël", "Etzer Vilaire"],
    correct: 3
  },
  {
    q: "Parmi ces titres, lequel est signé Justin Lhérisson ?",
    options: ["Je suis vivant", "La Famille des Pitite-Caille", "Frayeur", "Guillaume et Nathalie"],
    correct: 1
  },
  {
    q: "« Manhattan Blues » compte parmi les œuvres de quel auteur ?",
    options: ["Roland Morisseau", "Louis Joseph Janvier", "Jean-Claude Charles", "Windsor Bellegarde"],
    correct: 2
  },
  {
    q: "Quelle est l'œuvre de Jean D'Amérique parmi cette liste ?",
    options: ["Ultravocal", "Le Mât de cocagne", "Rhapsodie sale", "Des fleurs pour les héros"],
    correct: 2
  },
  {
    q: "Quel titre figure dans la bibliographie de Jacques Stephen Alexis ?",
    options: ["Krik? Krak!", "Le Testament des solitudes", "Kasalé", "Compère Général Soleil"],
    correct: 3
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Corps mêlés » ?",
    options: ["Charles Moravia", "Jean-Claude Charles", "Marvin Victor", "Josaphat-Robert Large"],
    correct: 2
  },
  {
    q: "L'œuvre « La Récolte douce des larmes » a été écrite par :",
    options: ["Edwidge Danticat", "Jean-Claude Bajeux", "Serge Legagneur", "Jean Price-Mars"],
    correct: 0
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Le Roman de l'occupation » ?",
    options: ["Isnardin Vieux", "Néhémy Pierre-Dahomey", "Cléante Valcin", "Edwidge Danticat"],
    correct: 0
  },
  {
    q: "Dans le paysage des lettres haïtiennes, Davertige incarne quel mouvement ?",
    options: ["Haïti Littéraire", "Génération de la Ronde", "Indigénisme", "Spiralisme"],
    correct: 0
  },
  {
    q: "Qui a publié le livre « Bois d'ébène » ?",
    options: ["Jacques Roumain", "Évelyne Trouillot", "Serge Legagneur", "Isnardin Vieux"],
    correct: 0
  },
  {
    q: "Quelle est l'œuvre de Lyonel Trouillot parmi cette liste ?",
    options: ["Une eau-forte", "Rue des pas perdus", "Un amour à trois temps", "Choucoune"],
    correct: 1
  },
  {
    q: "Quel courant littéraire est associé au nom de Émile Roumer ?",
    options: ["Réalisme merveilleux", "Indigénisme", "Génération de la Ronde", "Spiralisme"],
    correct: 1
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Jean-Claude Charles ?",
    options: ["Les Dix hommes noirs", "Ferdinand je suis à Paris", "Mûr à crever", "Le Peuple des terres mêlées"],
    correct: 1
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « L'Amour oui. La mort non » ?",
    options: ["Paula Clermont Péan", "Makenzy Orcel", "Jean-Claude Fignolé", "Liliane Devieux-Dehoux"],
    correct: 3
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Joujou Turenne ?",
    options: ["Ultravocal", "Haïti kenbe la !", "Contes et légendes d'Haïti", "La République d'Haïti et ses visiteurs"],
    correct: 2
  },
  {
    q: "Quelle est l'œuvre de Frankétienne parmi cette liste ?",
    options: ["Vers le sud", "L'Année Dessalines", "Ultravocal", "Les Arbres musiciens"],
    correct: 2
  },
  {
    q: "Quel ouvrage a été publié par Joujou Turenne ?",
    options: ["Textes interdits", "Maître-Minuit", "L'Oiseau schizophone", "Contes et légendes d'Haïti"],
    correct: 3
  },
  {
    q: "On doit à la plume de Dany Laferrière l'œuvre suivante :",
    options: ["Moi, fardeau inhérent", "Pèlentèt", "Vers le sud", "Treize nouvelles vaudou"],
    correct: 2
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Bonjour et adieu à la négritude » ?",
    options: ["Jean-Claude Bajeux", "René Depestre", "Placide David", "Demesvar Delorme"],
    correct: 1
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « La Danse sur le volcan » ?",
    options: ["Marie Vieux-Chauvet", "Antoine Innocent", "Gérard Étienne", "James Noël"],
    correct: 0
  },
  {
    q: "Anthony Phelps a notamment donné naissance à quelle œuvre ?",
    options: ["La Bélière Caraïbe", "La mémoire aux abois", "Contes et légendes d'Haïti", "Aube tranquille"],
    correct: 0
  },
  {
    q: "Quel titre figure dans la bibliographie de Rodney Saint-Éloi ?",
    options: ["Jacques Roche, la vie entière", "L'Autre Face de la mer", "La Couleur de l'aube", "Le Nègre crucifié"],
    correct: 0
  },
  {
    q: "Quel ouvrage a été publié par Marie Vieux-Chauvet ?",
    options: ["Épisode de la Révolution", "Avant que les ombres s'effacent", "Haïti kenbe la !", "Fonds des Nègres"],
    correct: 3
  },
  {
    q: "Identifiez l'œuvre écrite par Fernand Hibbert :",
    options: ["Le Manuscrit de mon ami", "Un Arc-en-ciel pour l'occident chrétien", "La Danse sur le volcan", "Rhapsodie sale"],
    correct: 0
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Justin Lhérisson ?",
    options: ["Une somme humaine", "L'Ombre animale", "La Famille des Pitite-Caille", "La Blanche Négresse"],
    correct: 2
  },
  {
    q: "Dans le paysage des lettres haïtiennes, Serge Legagneur incarne quel mouvement ?",
    options: ["Réalisme merveilleux", "Génération de la Ronde", "Haïti Littéraire", "Indigénisme"],
    correct: 2
  },
  {
    q: "Qui a publié le livre « Rapatriés » ?",
    options: ["Néhémy Pierre-Dahomey", "Gérard Étienne", "Faubert Bolivar", "Marie-Célie Agnant"],
    correct: 0
  },
  {
    q: "De quelle plume est issue l'œuvre « Idem » ?",
    options: ["Joujou Turenne", "Davertige", "Marie Vieux-Chauvet", "Alibée Féry"],
    correct: 1
  },
  {
    q: "Le livre « Haïti kenbe la ! » est dû à la plume de :",
    options: ["Cléante Valcin", "Marie Vieux-Chauvet", "Rodney Saint-Éloi", "Paula Clermont Péan"],
    correct: 2
  },
  {
    q: "Quel titre figure dans la bibliographie de Hénock Trouillot ?",
    options: ["Ainsi parla l'oncle", "Dessalines ou le sang du Pont-Rouge", "La Plage des songes", "Textes interdits"],
    correct: 1
  },
  {
    q: "Dans quel grand mouvement littéraire s'inscrit Émile Roumer ?",
    options: ["Indigénisme", "Haïti Littéraire", "Génération de la Ronde", "Réalisme merveilleux"],
    correct: 0
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Massillon Coicou ?",
    options: ["Moi, Toussaint Louverture", "Bicentenaire", "L'Empereur Dessalines", "Le Fusil et la croix"],
    correct: 2
  },
  {
    q: "Léon Laleau figure parmi les représentants de quel mouvement ?",
    options: ["Haïti Littéraire", "Génération de la Ronde", "Réalisme merveilleux", "Indigénisme"],
    correct: 3
  },
  {
    q: "Qui a publié le livre « L'Alphabet des nuits » ?",
    options: ["Jean-Euphèle Milcé", "Ignace Nau", "Georges Castera", "Antoine Innocent"],
    correct: 0
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Serge Legagneur ?",
    options: ["Rêver debout", "Saisons sauvages", "L'Ombre animale", "Textes interdits"],
    correct: 3
  },
  {
    q: "Quel écrivain haïtien a écrit « La Couleur de l'aube » ?",
    options: ["Fernand Hibbert", "Yanick Lahens", "Jean-Robert Cadet", "Anténor Firmin"],
    correct: 1
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Fresnel Sylvestre ?",
    options: ["Impasse Dignité", "Les Arbres musiciens", "Un amour à trois temps", "La Plage des songes"],
    correct: 2
  },
  {
    q: "Lyonel Trouillot a notamment donné naissance à quelle œuvre ?",
    options: ["La Récolte douce des larmes", "Milwaukee Blues", "Bicentenaire", "Je suis vivant"],
    correct: 2
  },
  {
    q: "Jean-Claude Fignolé est identifié(e) à quel courant dans l'histoire littéraire d'Haïti ?",
    options: ["Spiralisme", "Haïti Littéraire", "Génération de la Ronde", "Réalisme merveilleux"],
    correct: 0
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Moi, fardeau inhérent » ?",
    options: ["Ignace Nau", "Guy Régis Jr", "Cléante Valcin", "René Philoctète"],
    correct: 1
  },
  {
    q: "De quelle plume est issue l'œuvre « Mon pays que voici » ?",
    options: ["Évelyne Trouillot", "Anthony Phelps", "Serge Legagneur", "Louis-Philippe Dalembert"],
    correct: 1
  },
  {
    q: "Retrouvez l'auteur de « La Récolte douce des larmes » parmi ces propositions :",
    options: ["Oswald Durand", "Carl Brouard", "Edwidge Danticat", "Marie-Thérèse Colimon-Hall"],
    correct: 2
  },
  {
    q: "Quel livre porte la signature de Fernand Hibbert ?",
    options: ["L'Odeur du café", "Restavec", "Le Manuscrit de mon ami", "Les Villages de Dieu"],
    correct: 2
  },
  {
    q: "Quel courant littéraire est associé au nom de Georges Sylvain ?",
    options: ["Indigénisme", "Spiralisme", "Réalisme merveilleux", "Génération de la Ronde"],
    correct: 3
  },
  {
    q: "Quel ouvrage a été publié par Tertulien Guilbaud ?",
    options: ["Mûr à crever", "L'Heure hybride", "Les Arbres musiciens", "Vieilles chansons"],
    correct: 3
  },
  {
    q: "Retrouvez l'auteur de « Jacmel au crépuscule » parmi ces propositions :",
    options: ["Marie Vieux-Chauvet", "Jean-Robert Cadet", "Josaphat-Robert Large", "Jean Métellus"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Saisons sauvages » ?",
    options: ["Justin Lhérisson", "Frédéric Marcelin", "Kettly Mars", "Jean-Robert Cadet"],
    correct: 2
  },
  {
    q: "Le livre « Romancero aux étoiles » est dû à la plume de :",
    options: ["Fresnel Sylvestre", "Léon Laleau", "Roussan Camille", "Jacques Stephen Alexis"],
    correct: 3
  },
  {
    q: "L'œuvre « Rue des pas perdus » a été écrite par :",
    options: ["Nadine Magloire", "Lyonel Trouillot", "Gary Klang", "Josaphat-Robert Large"],
    correct: 1
  },
  {
    q: "Quel écrivain haïtien a écrit « Un amour à trois temps » ?",
    options: ["Georges Sylvain", "Jean-Claude Fignolé", "Fresnel Sylvestre", "Josaphat-Robert Large"],
    correct: 2
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Douces déroutes » ?",
    options: ["Jean-Claude Fignolé", "Faubert Bolivar", "Yanick Lahens", "Gary Klang"],
    correct: 2
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Josaphat-Robert Large ?",
    options: ["Restavec", "Les Étrangers de la maison", "Mon pays que voici", "Pèlentèt"],
    correct: 1
  },
  {
    q: "Historiquement, Davertige appartient à quel mouvement littéraire ?",
    options: ["Haïti Littéraire", "Génération de la Ronde", "Indigénisme", "Réalisme merveilleux"],
    correct: 0
  },
  {
    q: "Quel titre figure dans la bibliographie de Gary Victor ?",
    options: ["L'Autre Face de la mer", "Clair de Manbo", "Passages", "Rires et Pleurs"],
    correct: 1
  },
  {
    q: "L'écrivain(e) Néhémy Pierre-Dahomey est célèbre pour avoir publié :",
    options: ["La mémoire aux abois", "Milwaukee Blues", "Les Thazar", "Rapatriés"],
    correct: 3
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Mosochwazi Kout Fè » ?",
    options: ["Charles Moravia", "Jean-Robert Cadet", "Nadine Magloire", "Jean-Claude Bajeux"],
    correct: 3
  },
  {
    q: "Quel label littéraire est le plus souvent accolé au nom de Roland Morisseau ?",
    options: ["Indigénisme", "Réalisme merveilleux", "Génération de la Ronde", "Haïti Littéraire"],
    correct: 3
  },
  {
    q: "« Zoune chez sa ninnaine » compte parmi les œuvres de quel auteur ?",
    options: ["Louis Joseph Janvier", "Fresnel Sylvestre", "Jean-Claude Charles", "Justin Lhérisson"],
    correct: 3
  },
  {
    q: "« Un amour à trois temps » compte parmi les œuvres de quel auteur ?",
    options: ["Antoine Innocent", "Cléante Valcin", "Fresnel Sylvestre", "Davertige"],
    correct: 2
  },
  {
    q: "L'écrivain(e) Alibée Féry est célèbre pour avoir publié :",
    options: ["Musa-Paidica", "Les Villages de Dieu", "Mosochwazi Kout Fè", "Les Arbres musiciens"],
    correct: 0
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Les Contes haïtiens » ?",
    options: ["Suzanne Comhaire-Sylvain", "Guy Régis Jr", "Georges Castera", "Marie-Célie Agnant"],
    correct: 0
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Belle merveille » ?",
    options: ["Michel Soukar", "James Noël", "Faubert Bolivar", "Jacques Roumain"],
    correct: 1
  },
  {
    q: "L'œuvre « Nouveaux poèmes » a été écrite par :",
    options: ["Etzer Vilaire", "Gary Klang", "Michel Soukar", "Windsor Bellegarde"],
    correct: 0
  },
  {
    q: "De quelle plume est issue l'œuvre « Rêver debout » ?",
    options: ["Roland Morisseau", "Émile Ollivier", "Jean-Robert Cadet", "Oswald Durand"],
    correct: 0
  },
  {
    q: "Quel nom d'auteur associez-vous à « Un amour à trois temps » ?",
    options: ["Gary Victor", "Fresnel Sylvestre", "Joujou Turenne", "Emmelie Prophète"],
    correct: 1
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Rodney Saint-Éloi ?",
    options: ["Théâtre", "Treize nouvelles vaudou", "Jacques Roche, la vie entière", "Fonds des Nègres"],
    correct: 2
  },
  {
    q: "Retrouvez l'auteur de « Le Choc » parmi ces propositions :",
    options: ["Jean-Claude Charles", "Justin Chrysostome Dorsainvil", "Léon Laleau", "Jean-Robert Léonidas"],
    correct: 2
  },
  {
    q: "Jacques Roumain figure parmi les représentants de quel mouvement ?",
    options: ["Indigénisme", "Spiralisme", "Génération de la Ronde", "Réalisme merveilleux"],
    correct: 0
  },
  {
    q: "Quel écrivain haïtien a écrit « Jacmel au crépuscule » ?",
    options: ["Justin Chrysostome Dorsainvil", "Ignace Nau", "Paula Clermont Péan", "Jean Métellus"],
    correct: 3
  },
  {
    q: "Quel livre porte la signature de Lyonel Trouillot ?",
    options: ["Le Sang et la Mer", "La Belle Amour humaine", "Le Trou du souffleur", "La Bélière Caraïbe"],
    correct: 1
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Thémistocle-Épaminondas Labasterre » ?",
    options: ["Suzanne Comhaire-Sylvain", "René Depestre", "Emmelie Prophète", "Frédéric Marcelin"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « L'Autre Face de la mer » ?",
    options: ["Windsor Bellegarde", "Louis-Philippe Dalembert", "Roland Morisseau", "Ignace Nau"],
    correct: 1
  },
  {
    q: "L'écrivain(e) Jean-Euphèle Milcé est célèbre pour avoir publié :",
    options: ["L'Alphabet des nuits", "L'Autre Face de la mer", "La Montagne ensorcelée", "Poèmes d'Haïti et de France"],
    correct: 0
  },
  {
    q: "Quel titre figure dans la bibliographie de Justin Chrysostome Dorsainvil ?",
    options: ["L'Espace d'un cillement", "Hadriana dans tous mes rêves", "Manuel d'histoire d'Haïti", "Guillaume et Nathalie"],
    correct: 2
  },
  {
    q: "Qui a publié le livre « Pèlentèt » ?",
    options: ["Frankétienne", "Jean Métellus", "Anténor Firmin", "Pradel Pompilus"],
    correct: 0
  },
  {
    q: "L'écrivain Léon Laleau est souvent associé(e) au mouvement :",
    options: ["Haïti Littéraire", "Spiralisme", "Indigénisme", "Génération de la Ronde"],
    correct: 2
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « La Vocation de l'élite » ?",
    options: ["Jean Price-Mars", "Paula Clermont Péan", "Makenzy Orcel", "Hénock Trouillot"],
    correct: 0
  },
  {
    q: "« Un amour à trois temps » est signé par quel auteur haïtien ?",
    options: ["Jean Métellus", "Windsor Bellegarde", "Fernand Hibbert", "Fresnel Sylvestre"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Gouverneurs de la rosée » ?",
    options: ["Georges Castera", "Jacques Roumain", "Gary Victor", "Lyonel Trouillot"],
    correct: 1
  },
  {
    q: "Dans le paysage des lettres haïtiennes, Frankétienne incarne quel mouvement ?",
    options: ["Indigénisme", "Haïti Littéraire", "Réalisme merveilleux", "Spiralisme"],
    correct: 3
  },
  {
    q: "Quel écrivain haïtien a écrit « Zoune chez sa ninnaine » ?",
    options: ["Justin Lhérisson", "Nadine Magloire", "Jean-Robert Léonidas", "Ida Faubert"],
    correct: 0
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Carl Brouard ?",
    options: ["Cric? Crac!", "Pages retrouvées", "Ces îles qui marchent", "Milwaukee Blues"],
    correct: 1
  },
  {
    q: "Dans quel grand mouvement littéraire s'inscrit Jacques Roumain ?",
    options: ["Spiralisme", "Indigénisme", "Haïti Littéraire", "Génération de la Ronde"],
    correct: 1
  },
  {
    q: "Roland Morisseau est une figure représentative de quel courant littéraire haïtien ?",
    options: ["Réalisme merveilleux", "Spiralisme", "Génération de la Ronde", "Haïti Littéraire"],
    correct: 3
  },
  {
    q: "Le livre « Une somme humaine » est dû à la plume de :",
    options: ["Jean-Claude Bajeux", "Liliane Devieux-Dehoux", "Makenzy Orcel", "Guy Régis Jr"],
    correct: 2
  },
  {
    q: "Quel livre porte la signature de Jean-Robert Léonidas ?",
    options: ["Île à vau-l'eau", "Séna", "Romancero aux étoiles", "Bois d'ébène"],
    correct: 0
  },
  {
    q: "L'écrivain(e) Léon Laleau est célèbre pour avoir publié :",
    options: ["Mes années Duvalier", "Musique nègre", "Compère Général Soleil", "La Dot de Sara"],
    correct: 1
  },
  {
    q: "Retrouvez l'auteur de « Comment faire l'amour avec un Nègre sans se fatiguer » parmi ces propositions :",
    options: ["Joujou Turenne", "Frankétienne", "Etzer Vilaire", "Dany Laferrière"],
    correct: 3
  },
  {
    q: "Quel livre porte la signature de Antoine Innocent ?",
    options: ["Le Sang et la Mer", "L'Odeur du café", "Cric? Crac!", "Mimola"],
    correct: 3
  },
  {
    q: "Dans le paysage des lettres haïtiennes, Etzer Vilaire incarne quel mouvement ?",
    options: ["Indigénisme", "Spiralisme", "Haïti Littéraire", "Génération de la Ronde"],
    correct: 3
  },
  {
    q: "Qui a publié le livre « Fonds des Nègres » ?",
    options: ["Marie-Alice Théard", "Marie Vieux-Chauvet", "Ida Faubert", "Dany Laferrière"],
    correct: 1
  },
  {
    q: "Quelle est l'œuvre de Etzer Vilaire parmi cette liste ?",
    options: ["La Belle Amour humaine", "La Bélière Caraïbe", "Nouveaux poèmes", "Mère-Solitude"],
    correct: 2
  },
  {
    q: "À quel mouvement littéraire haïtien appartient l'auteur Serge Legagneur ?",
    options: ["Indigénisme", "Réalisme merveilleux", "Haïti Littéraire", "Spiralisme"],
    correct: 2
  },
  {
    q: "L'œuvre « Impasse Dignité » a été écrite par :",
    options: ["Emmelie Prophète", "Évelyne Trouillot", "Gérard Étienne", "René Depestre"],
    correct: 0
  },
  {
    q: "On doit à la plume de Marie-Thérèse Colimon-Hall l'œuvre suivante :",
    options: ["La Belle Amour humaine", "Île à vau-l'eau", "Ultravocal", "Fils de misère"],
    correct: 3
  },
  {
    q: "On doit à la plume de Cléante Valcin l'œuvre suivante :",
    options: ["La Blanche Négresse", "La Danse sur le volcan", "À l'angle des rues parallèles", "Cœur des Îles"],
    correct: 0
  },
  {
    q: "Quel livre porte la signature de René Depestre ?",
    options: ["Mon pays que voici", "Épisode de la Révolution", "Un Arc-en-ciel pour l'occident chrétien", "Une eau-forte"],
    correct: 2
  },
  {
    q: "Identifiez l'œuvre écrite par Lyonel Trouillot :",
    options: ["Bicentenaire", "Clair de Manbo", "Je suis vivant", "Le Briseur de rosée"],
    correct: 0
  },
  {
    q: "Identifiez l'œuvre écrite par Marvin Victor :",
    options: ["Corps mêlés", "Manuel illustré d'histoire de la littérature haïtienne", "Aube tranquille", "Le Cri de l'oiseau rouge"],
    correct: 0
  },
  {
    q: "Dany Laferrière a notamment donné naissance à quelle œuvre ?",
    options: ["Yanvalou pour Charlie", "Saison de porcs", "L'Énigme du retour", "L'Heure hybride"],
    correct: 2
  },
  {
    q: "L'œuvre « Soleil à coudre » a été écrite par :",
    options: ["Massillon Coicou", "Jean Price-Mars", "Jean D'Amérique", "Faubert Bolivar"],
    correct: 2
  },
  {
    q: "Identifiez l'œuvre écrite par Jean-Robert Léonidas :",
    options: ["Guillaume et Nathalie", "La Blanche Négresse", "Écrit sur du ruban rose", "Île à vau-l'eau"],
    correct: 3
  },
  {
    q: "Quel ouvrage a été publié par Frankétienne ?",
    options: ["Ces îles qui marchent", "Épisode de la Révolution", "La mémoire aux abois", "Huit jours dans un no man's land"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Aube tranquille » ?",
    options: ["Jean-Claude Fignolé", "Émile Roumer", "Rodney Saint-Éloi", "Liliane Devieux-Dehoux"],
    correct: 0
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Ferdinand je suis à Paris » ?",
    options: ["Fresnel Sylvestre", "René Depestre", "Jean-Claude Charles", "Marie-Thérèse Colimon-Hall"],
    correct: 2
  },
  {
    q: "Frankétienne est notamment l'auteur(e) de :",
    options: ["Corps mêlés", "Ces îles qui marchent", "La Blanche Négresse", "Mûr à crever"],
    correct: 3
  },
  {
    q: "Le livre « Manhattan Blues » est dû à la plume de :",
    options: ["Léon Laleau", "Michel Soukar", "Faubert Bolivar", "Jean-Claude Charles"],
    correct: 3
  },
  {
    q: "Quel écrivain haïtien a écrit « Contes et légendes d'Haïti » ?",
    options: ["Joujou Turenne", "Marie-Célie Agnant", "Massillon Coicou", "Cléante Valcin"],
    correct: 0
  },
  {
    q: "Roussan Camille a notamment donné naissance à quelle œuvre ?",
    options: ["Assaut à la nuit", "Rosalie l'infâme", "Les Immortelles", "La Couleur de l'aube"],
    correct: 0
  },
  {
    q: "Anténor Firmin est notamment l'auteur(e) de :",
    options: ["Musa-Paidica", "Pèlentèt", "Le Fusil et la croix", "De l'égalité des races humaines"],
    correct: 3
  },
  {
    q: "Quelle est l'œuvre de René Depestre parmi cette liste ?",
    options: ["Ces îles qui marchent", "Sous le soleil d'Haïti", "L'Empereur Dessalines", "Un Arc-en-ciel pour l'occident chrétien"],
    correct: 3
  },
  {
    q: "« L'Amour oui. La mort non » est signé par quel auteur haïtien ?",
    options: ["Jean-Claude Fignolé", "Demesvar Delorme", "Nadine Magloire", "Liliane Devieux-Dehoux"],
    correct: 3
  },
  {
    q: "On rattache généralement Massillon Coicou à quel mouvement des lettres haïtiennes ?",
    options: ["Spiralisme", "Génération de la Ronde", "Réalisme merveilleux", "Haïti Littéraire"],
    correct: 1
  },
  {
    q: "Le livre « Fils de misère » est dû à la plume de :",
    options: ["Gérard Étienne", "Léon Laleau", "Frédéric Marcelin", "Marie-Thérèse Colimon-Hall"],
    correct: 3
  },
  {
    q: "Frankétienne est une figure représentative de quel courant littéraire haïtien ?",
    options: ["Réalisme merveilleux", "Spiralisme", "Indigénisme", "Génération de la Ronde"],
    correct: 1
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à René Depestre ?",
    options: ["Guillaume et Nathalie", "Bonjour et adieu à la négritude", "L'Héritage colonial en Haïti", "Gouverneurs de la rosée"],
    correct: 1
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Fresnel Sylvestre ?",
    options: ["Un amour à trois temps", "L'Année Dessalines", "Encre allègre", "Choucoune"],
    correct: 0
  },
  {
    q: "L'œuvre « Pèlentèt » a été écrite par :",
    options: ["Frankétienne", "Roussan Camille", "Guy Régis Jr", "Marie-Thérèse Colimon-Hall"],
    correct: 0
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Kettly Mars ?",
    options: ["Contes et légendes d'Haïti", "Je suis vivant", "Dessalines ou le sang du Pont-Rouge", "Le Qui-vive"],
    correct: 1
  },
  {
    q: "Roland Morisseau est identifié(e) à quel courant dans l'histoire littéraire d'Haïti ?",
    options: ["Spiralisme", "Haïti Littéraire", "Indigénisme", "Réalisme merveilleux"],
    correct: 1
  },
  {
    q: "À quel mouvement littéraire haïtien appartient l'auteur Jean Price-Mars ?",
    options: ["Indigénisme", "Haïti Littéraire", "Génération de la Ronde", "Réalisme merveilleux"],
    correct: 0
  },
  {
    q: "Quelle est l'œuvre de Suzanne Comhaire-Sylvain parmi cette liste ?",
    options: ["La Crête-à-Pierrot", "Les Contes haïtiens", "Amour, Colère et Folie", "Écrit sur du ruban rose"],
    correct: 1
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Paula Clermont Péan ?",
    options: ["Le Mal de terre", "Une eau-forte", "Cœur des Îles", "La Vengeance de Mama"],
    correct: 0
  },
  {
    q: "Identifiez l'œuvre écrite par Jean Métellus :",
    options: ["Saisons sauvages", "Belle merveille", "Au pipirite chantant", "Fille d'Haïti"],
    correct: 2
  },
  {
    q: "Le livre « Le Livre d'Emma » est dû à la plume de :",
    options: ["Kettly Mars", "Charles Moravia", "Marie-Célie Agnant", "Néhémy Pierre-Dahomey"],
    correct: 2
  },
  {
    q: "Le livre « Gouverneurs de la rosée » est dû à la plume de :",
    options: ["Pradel Pompilus", "Georges Anglade", "Jacques Roumain", "Jacques Stephen Alexis"],
    correct: 2
  },
  {
    q: "Quelle est l'œuvre de Jacques Roumain parmi cette liste ?",
    options: ["Le Choc", "Boulevard Baie des Anges", "Les Fantoches", "Fille d'Haïti"],
    correct: 2
  },
  {
    q: "Identifiez l'œuvre écrite par Emmelie Prophète :",
    options: ["Impasse Dignité", "Le Qui-vive", "Anacaona", "Les Possédés de la pleine lune"],
    correct: 0
  },
  {
    q: "Quelle école littéraire haïtienne est représentée par Etzer Vilaire ?",
    options: ["Spiralisme", "Réalisme merveilleux", "Génération de la Ronde", "Indigénisme"],
    correct: 2
  },
  {
    q: "Parmi ces titres, lequel est signé Makenzy Orcel ?",
    options: ["L'Espace d'un cillement", "La Montagne ensorcelée", "Belle merveille", "Maître-Minuit"],
    correct: 3
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à René Philoctète ?",
    options: ["L'Autre Face de la mer", "Le Peuple des terres mêlées", "La République d'Haïti et ses visiteurs", "Guillaume et Nathalie"],
    correct: 1
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Théâtre » ?",
    options: ["Lyonel Trouillot", "Marie-Alice Théard", "Jacques Roumain", "Syto Cavé"],
    correct: 3
  },
  {
    q: "L'œuvre « Dezafi » a été écrite par :",
    options: ["Georges Anglade", "Justin Chrysostome Dorsainvil", "Frankétienne", "Michel Soukar"],
    correct: 2
  },
  {
    q: "L'œuvre « Les Blancs de mémoire » a été écrite par :",
    options: ["Edwidge Danticat", "Georges Anglade", "James Noël", "Jean-Claude Bajeux"],
    correct: 1
  },
  {
    q: "« Musa-Paidica » est signé par quel auteur haïtien ?",
    options: ["Justin Chrysostome Dorsainvil", "Edwidge Danticat", "Alibée Féry", "Serge Legagneur"],
    correct: 2
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Contes et légendes d'Haïti » ?",
    options: ["Georges Anglade", "Joujou Turenne", "Jean D'Amérique", "Fresnel Sylvestre"],
    correct: 1
  },
  {
    q: "L'écrivain(e) Jacques Roumain est célèbre pour avoir publié :",
    options: ["Boulevard Baie des Anges", "L'Ombre animale", "Le Sang et la Mer", "La Montagne ensorcelée"],
    correct: 3
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Bonjour et adieu à la négritude » ?",
    options: ["René Depestre", "Justin Chrysostome Dorsainvil", "Roland Morisseau", "Davertige"],
    correct: 0
  },
  {
    q: "Retrouvez l'auteur de « Thérèse en mille morceaux » parmi ces propositions :",
    options: ["Jean-Claude Charles", "Jean-Euphèle Milcé", "Paula Clermont Péan", "Lyonel Trouillot"],
    correct: 3
  },
  {
    q: "Quel nom d'auteur associez-vous à « Vers le sud » ?",
    options: ["Carl Brouard", "Dany Laferrière", "Tertulien Guilbaud", "Emmelie Prophète"],
    correct: 1
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Désirée Congo » ?",
    options: ["Jean-Claude Bajeux", "Évelyne Trouillot", "Marie-Alice Théard", "Michel Soukar"],
    correct: 1
  },
  {
    q: "Dans quel grand mouvement littéraire s'inscrit Jacques Stephen Alexis ?",
    options: ["Génération de la Ronde", "Réalisme merveilleux", "Haïti Littéraire", "Spiralisme"],
    correct: 1
  },
  {
    q: "Quel titre figure dans la bibliographie de Tertulien Guilbaud ?",
    options: ["Les Villages de Dieu", "L'Héritage colonial en Haïti", "Vieilles chansons", "Frayeur"],
    correct: 2
  },
  {
    q: "René Depestre a notamment donné naissance à quelle œuvre ?",
    options: ["Treize nouvelles vaudou", "Le Livre d'Emma", "Soleil à coudre", "Le Mât de cocagne"],
    correct: 3
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Gary Klang ?",
    options: ["Pages retrouvées", "Haïti kenbe la !", "Haïti, terre mystique", "Ultravocal"],
    correct: 2
  },
  {
    q: "Carl Brouard est une figure représentative de quel courant littéraire haïtien ?",
    options: ["Indigénisme", "Haïti Littéraire", "Génération de la Ronde", "Réalisme merveilleux"],
    correct: 0
  },
  {
    q: "Dans quel grand mouvement littéraire s'inscrit Léon Laleau ?",
    options: ["Réalisme merveilleux", "Indigénisme", "Génération de la Ronde", "Haïti Littéraire"],
    correct: 1
  },
  {
    q: "Qui a publié le livre « La Dot de Sara » ?",
    options: ["Marie-Thérèse Colimon-Hall", "Marie-Célie Agnant", "Jean-Euphèle Milcé", "Kettly Mars"],
    correct: 1
  },
  {
    q: "Parmi ces titres, lequel est signé Lyonel Trouillot ?",
    options: ["De Saint-Domingue à Haïti", "Le Trou du souffleur", "Passages", "Yanvalou pour Charlie"],
    correct: 3
  },
  {
    q: "À quel mouvement littéraire haïtien appartient l'auteur Davertige ?",
    options: ["Spiralisme", "Réalisme merveilleux", "Haïti Littéraire", "Indigénisme"],
    correct: 2
  },
  {
    q: "De quelle plume est issue l'œuvre « Le Cri de l'oiseau rouge » ?",
    options: ["Ignace Nau", "Frédéric Marcelin", "Edwidge Danticat", "Jacques Stephen Alexis"],
    correct: 2
  },
  {
    q: "Quel nom d'auteur associez-vous à « La Dot de Sara » ?",
    options: ["Émile Ollivier", "Marie-Célie Agnant", "Jacques Roumain", "Alibée Féry"],
    correct: 1
  },
  {
    q: "De quelle plume est issue l'œuvre « La Vocation de l'élite » ?",
    options: ["Léon Laleau", "Ignace Nau", "Jean Price-Mars", "Carl Brouard"],
    correct: 2
  },
  {
    q: "Quel nom d'auteur associez-vous à « Avant que les ombres s'effacent » ?",
    options: ["Gary Klang", "Nadine Magloire", "Louis-Philippe Dalembert", "Cléante Valcin"],
    correct: 2
  },
  {
    q: "« Le Peuple des terres mêlées » compte parmi les œuvres de quel auteur ?",
    options: ["Emmelie Prophète", "Gary Klang", "Louis Joseph Janvier", "René Philoctète"],
    correct: 3
  },
  {
    q: "Quel ouvrage a été publié par Évelyne Trouillot ?",
    options: ["De Saint-Domingue à Haïti", "Désirée Congo", "La Montagne ensorcelée", "Le Peuple des terres mêlées"],
    correct: 1
  },
  {
    q: "« Fils de misère » compte parmi les œuvres de quel auteur ?",
    options: ["Marie-Alice Théard", "Massillon Coicou", "Marie-Thérèse Colimon-Hall", "Nadine Magloire"],
    correct: 2
  },
  {
    q: "Le livre « Le Trou du souffleur » est dû à la plume de :",
    options: ["Jean-Robert Cadet", "Ida Faubert", "Paula Clermont Péan", "Georges Castera"],
    correct: 3
  },
  {
    q: "Quel livre porte la signature de Marvin Victor ?",
    options: ["Kasalé", "L'Ombre animale", "Le Reste du temps", "Corps mêlés"],
    correct: 3
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Cléante Valcin ?",
    options: ["Poèmes d'Haïti et de France", "Compère Général Soleil", "Zoune chez sa ninnaine", "La Blanche Négresse"],
    correct: 3
  },
  {
    q: "Dans quel grand mouvement littéraire s'inscrit Etzer Vilaire ?",
    options: ["Génération de la Ronde", "Spiralisme", "Indigénisme", "Réalisme merveilleux"],
    correct: 0
  },
  {
    q: "Oswald Durand est une figure représentative de quel courant littéraire haïtien ?",
    options: ["Spiralisme", "Indigénisme", "Génération de la Ronde", "Haïti Littéraire"],
    correct: 2
  },
  {
    q: "Jean Price-Mars figure parmi les représentants de quel mouvement ?",
    options: ["Indigénisme", "Spiralisme", "Génération de la Ronde", "Réalisme merveilleux"],
    correct: 0
  },
  {
    q: "De quelle plume est issue l'œuvre « Milwaukee Blues » ?",
    options: ["Josaphat-Robert Large", "Néhémy Pierre-Dahomey", "Liliane Devieux-Dehoux", "Louis-Philippe Dalembert"],
    correct: 3
  },
  {
    q: "À quel mouvement littéraire haïtien appartient l'auteur Jacques Roumain ?",
    options: ["Haïti Littéraire", "Réalisme merveilleux", "Indigénisme", "Génération de la Ronde"],
    correct: 2
  },
  {
    q: "Quel écrivain haïtien a écrit « Écrit sur du ruban rose » ?",
    options: ["Rodney Saint-Éloi", "Fernand Hibbert", "Oswald Durand", "Carl Brouard"],
    correct: 3
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Jacques Stephen Alexis ?",
    options: ["Romancero aux étoiles", "Le Roman de l'occupation", "Une somme humaine", "Bonjour et adieu à la négritude"],
    correct: 0
  },
  {
    q: "« Épisode de la Révolution » a été publié(e) par quel écrivain haïtien ?",
    options: ["Georges Anglade", "Ignace Nau", "Néhémy Pierre-Dahomey", "Oswald Durand"],
    correct: 1
  },
  {
    q: "Quel courant littéraire est associé au nom de Anthony Phelps ?",
    options: ["Indigénisme", "Réalisme merveilleux", "Génération de la Ronde", "Haïti Littéraire"],
    correct: 3
  },
  {
    q: "Frankétienne figure parmi les représentants de quel mouvement ?",
    options: ["Réalisme merveilleux", "Indigénisme", "Spiralisme", "Génération de la Ronde"],
    correct: 2
  },
  {
    q: "Qui a publié le livre « Les Dix hommes noirs » ?",
    options: ["Etzer Vilaire", "Massillon Coicou", "Tertulien Guilbaud", "Oswald Durand"],
    correct: 0
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Louis Joseph Janvier ?",
    options: ["Mûr à crever", "Thémistocle-Épaminondas Labasterre", "La République d'Haïti et ses visiteurs", "La mémoire aux abois"],
    correct: 2
  },
  {
    q: "Davertige figure parmi les représentants de quel mouvement ?",
    options: ["Spiralisme", "Réalisme merveilleux", "Haïti Littéraire", "Indigénisme"],
    correct: 2
  },
  {
    q: "De quelle plume est issue l'œuvre « Le Sang et la Mer » ?",
    options: ["Stanley Péan", "Fernand Hibbert", "Suzanne Comhaire-Sylvain", "Gary Victor"],
    correct: 3
  },
  {
    q: "Quel nom d'auteur associez-vous à « La Plage des songes » ?",
    options: ["Stanley Péan", "Marvin Victor", "Jacques Roumain", "Demesvar Delorme"],
    correct: 0
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Les Contes haïtiens » ?",
    options: ["Anténor Firmin", "Suzanne Comhaire-Sylvain", "Frédéric Marcelin", "Guy Régis Jr"],
    correct: 1
  },
  {
    q: "Jean Price-Mars a notamment donné naissance à quelle œuvre ?",
    options: ["Ainsi parla l'oncle", "Les Blancs de mémoire", "L'Oiseau schizophone", "Mimola"],
    correct: 0
  },
  {
    q: "De quelle plume est issue l'œuvre « Adieu, mon frère » ?",
    options: ["Edwidge Danticat", "Dany Laferrière", "Jean-Claude Fignolé", "Frankétienne"],
    correct: 0
  },
  {
    q: "Parmi ces titres, lequel est signé Frankétienne ?",
    options: ["Écrit sur du ruban rose", "L'Odeur du café", "Ultravocal", "Douces déroutes"],
    correct: 2
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Mes années Duvalier » ?",
    options: ["Marie-Alice Théard", "Guy Régis Jr", "Jean-Euphèle Milcé", "Louis Joseph Janvier"],
    correct: 0
  },
  {
    q: "De quelle plume est issue l'œuvre « Écrivains haïtiens » ?",
    options: ["Windsor Bellegarde", "Justin Chrysostome Dorsainvil", "Jean-Claude Charles", "Carl Brouard"],
    correct: 0
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Fernand Hibbert ?",
    options: ["Adieu, mon frère", "Clair de Manbo", "Séna", "Les Arbres musiciens"],
    correct: 2
  },
  {
    q: "Quel nom d'auteur associez-vous à « Musa-Paidica » ?",
    options: ["Massillon Coicou", "Serge Legagneur", "Lyonel Trouillot", "Alibée Féry"],
    correct: 3
  },
  {
    q: "On doit à la plume de Jean Price-Mars l'œuvre suivante :",
    options: ["Désirée Congo", "Silhouettes de nègres et de négrophiles", "Écrivains haïtiens", "Encre allègre"],
    correct: 1
  },
  {
    q: "Quel nom d'auteur associez-vous à « La Blanche Négresse » ?",
    options: ["Jean-Robert Léonidas", "Marvin Victor", "Cléante Valcin", "Carl Brouard"],
    correct: 2
  },
  {
    q: "« Ainsi parla l'oncle » est signé par quel auteur haïtien ?",
    options: ["Placide David", "Nadine Magloire", "Jean Price-Mars", "Makenzy Orcel"],
    correct: 2
  },
  {
    q: "Quel titre figure dans la bibliographie de Louis-Philippe Dalembert ?",
    options: ["Boulevard Baie des Anges", "Le Trou du souffleur", "Saisons sauvages", "L'Autre Face de la mer"],
    correct: 3
  },
  {
    q: "À quel mouvement littéraire haïtien appartient l'auteur René Philoctète ?",
    options: ["Indigénisme", "Génération de la Ronde", "Haïti Littéraire", "Spiralisme"],
    correct: 3
  },
  {
    q: "« Manuel d'histoire d'Haïti » a été publié(e) par quel écrivain haïtien ?",
    options: ["Justin Chrysostome Dorsainvil", "Jean-Euphèle Milcé", "Makenzy Orcel", "Jean Price-Mars"],
    correct: 0
  },
  {
    q: "« Vieilles chansons » est signé par quel auteur haïtien ?",
    options: ["Gary Klang", "Évelyne Trouillot", "Tertulien Guilbaud", "Isnardin Vieux"],
    correct: 2
  },
  {
    q: "Quel titre figure dans la bibliographie de Etzer Vilaire ?",
    options: ["Le Briseur de rosée", "Treize nouvelles vaudou", "Le Rond-point", "Les Dix hommes noirs"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Belle merveille » ?",
    options: ["Jean-Claude Bajeux", "James Noël", "Windsor Bellegarde", "Jacques Roumain"],
    correct: 1
  },
  {
    q: "Quelle école littéraire haïtienne est représentée par Jean-Claude Fignolé ?",
    options: ["Spiralisme", "Génération de la Ronde", "Haïti Littéraire", "Indigénisme"],
    correct: 0
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Fernand Hibbert ?",
    options: ["Le Manuscrit de mon ami", "Douces déroutes", "Moi, fardeau inhérent", "Je suis vivant"],
    correct: 0
  },
  {
    q: "Jean-Claude Fignolé est une figure représentative de quel courant littéraire haïtien ?",
    options: ["Haïti Littéraire", "Génération de la Ronde", "Réalisme merveilleux", "Spiralisme"],
    correct: 3
  },
  {
    q: "Quel titre figure dans la bibliographie de Jean-Claude Charles ?",
    options: ["Anacaona", "Musique nègre", "Ferdinand je suis à Paris", "Rhapsodie sale"],
    correct: 2
  },
  {
    q: "Quel écrivain haïtien a écrit « L'Année Dessalines » ?",
    options: ["Edwidge Danticat", "Jean Métellus", "Léon Laleau", "Ignace Nau"],
    correct: 1
  },
  {
    q: "Quel nom d'auteur associez-vous à « Rue Frontière » ?",
    options: ["Syto Cavé", "Faubert Bolivar", "Émile Ollivier", "Etzer Vilaire"],
    correct: 1
  },
  {
    q: "Le livre « De Saint-Domingue à Haïti » est dû à la plume de :",
    options: ["Jean Price-Mars", "Kettly Mars", "Isnardin Vieux", "Jacques Stephen Alexis"],
    correct: 0
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Edwidge Danticat ?",
    options: ["Saison de porcs", "Jacques Roche, la vie entière", "Contes et légendes d'Haïti", "Adieu, mon frère"],
    correct: 3
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Yanick Lahens ?",
    options: ["La Plage des songes", "L'Heure hybride", "La Couleur de l'aube", "Treize nouvelles vaudou"],
    correct: 2
  },
  {
    q: "Historiquement, Jacques Roumain appartient à quel mouvement littéraire ?",
    options: ["Réalisme merveilleux", "Spiralisme", "Haïti Littéraire", "Indigénisme"],
    correct: 3
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Jacques Stephen Alexis ?",
    options: ["Zoune chez sa ninnaine", "Restavec", "Romancero aux étoiles", "Un Arc-en-ciel pour l'occident chrétien"],
    correct: 2
  },
  {
    q: "Massillon Coicou figure parmi les représentants de quel mouvement ?",
    options: ["Génération de la Ronde", "Spiralisme", "Réalisme merveilleux", "Indigénisme"],
    correct: 0
  },
  {
    q: "Retrouvez l'auteur de « Cœur des Îles » parmi ces propositions :",
    options: ["Dany Laferrière", "Demesvar Delorme", "Jean-Claude Fignolé", "Ida Faubert"],
    correct: 3
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Les Thazar » ?",
    options: ["Windsor Bellegarde", "Gary Klang", "Fernand Hibbert", "Louis Joseph Janvier"],
    correct: 2
  },
  {
    q: "À quel mouvement littéraire haïtien appartient l'auteur Émile Roumer ?",
    options: ["Génération de la Ronde", "Haïti Littéraire", "Indigénisme", "Spiralisme"],
    correct: 2
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Dany Laferrière ?",
    options: ["L'Odeur du café", "Musique nègre", "Francesca", "Zoune chez sa ninnaine"],
    correct: 0
  },
  {
    q: "L'écrivain(e) Marvin Victor est célèbre pour avoir publié :",
    options: ["Écrivains haïtiens", "Romancero aux étoiles", "Corps mêlés", "La Famille Vortex"],
    correct: 2
  },
  {
    q: "« Romancero aux étoiles » compte parmi les œuvres de quel auteur ?",
    options: ["Demesvar Delorme", "Jean D'Amérique", "Josaphat-Robert Large", "Jacques Stephen Alexis"],
    correct: 3
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Jean Métellus ?",
    options: ["L'Année Dessalines", "Zoune chez sa ninnaine", "Les Villages de Dieu", "Mosochwazi Kout Fè"],
    correct: 0
  },
  {
    q: "À quel mouvement littéraire haïtien appartient l'auteur Massillon Coicou ?",
    options: ["Génération de la Ronde", "Spiralisme", "Haïti Littéraire", "Réalisme merveilleux"],
    correct: 0
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Un Arc-en-ciel pour l'occident chrétien » ?",
    options: ["Syto Cavé", "René Depestre", "Marie-Alice Théard", "Marvin Victor"],
    correct: 1
  },
  {
    q: "L'œuvre « De l'égalité des races humaines » a été écrite par :",
    options: ["Liliane Devieux-Dehoux", "Anténor Firmin", "Jean-Claude Fignolé", "Makenzy Orcel"],
    correct: 1
  },
  {
    q: "Quelle école littéraire haïtienne est représentée par Massillon Coicou ?",
    options: ["Spiralisme", "Réalisme merveilleux", "Génération de la Ronde", "Haïti Littéraire"],
    correct: 2
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Kettly Mars ?",
    options: ["Hadriana dans tous mes rêves", "Le Trou du souffleur", "Kasalé", "Dezafi"],
    correct: 2
  },
  {
    q: "Dans quel grand mouvement littéraire s'inscrit Serge Legagneur ?",
    options: ["Spiralisme", "Génération de la Ronde", "Indigénisme", "Haïti Littéraire"],
    correct: 3
  },
  {
    q: "Quel label littéraire est le plus souvent accolé au nom de Jean-Claude Fignolé ?",
    options: ["Génération de la Ronde", "Haïti Littéraire", "Indigénisme", "Spiralisme"],
    correct: 3
  },
  {
    q: "Retrouvez l'auteur de « Haïti, terre mystique » parmi ces propositions :",
    options: ["Joujou Turenne", "Tertulien Guilbaud", "Jean-Robert Cadet", "Gary Klang"],
    correct: 3
  },
  {
    q: "Jean-Claude Fignolé est notamment l'auteur(e) de :",
    options: ["Bonjour et adieu à la négritude", "Aube tranquille", "La mémoire aux abois", "De l'égalité des races humaines"],
    correct: 1
  },
  {
    q: "Parmi ces titres, lequel est signé Paula Clermont Péan ?",
    options: ["Je suis vivant", "Saisons sauvages", "Le Mal de terre", "Clair de Manbo"],
    correct: 2
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Lyonel Trouillot ?",
    options: ["Dessalines ou le sang du Pont-Rouge", "Fonds des Nègres", "Rue des pas perdus", "La Famille des Pitite-Caille"],
    correct: 2
  },
  {
    q: "Quel ouvrage a été publié par Léon Laleau ?",
    options: ["Rue des pas perdus", "Le Choc", "Krik? Krak!", "Île à vau-l'eau"],
    correct: 1
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Des fleurs pour les héros » ?",
    options: ["Anthony Phelps", "Georges Castera", "Cléante Valcin", "Marie-Alice Théard"],
    correct: 0
  },
  {
    q: "Serge Legagneur figure parmi les représentants de quel mouvement ?",
    options: ["Spiralisme", "Haïti Littéraire", "Réalisme merveilleux", "Génération de la Ronde"],
    correct: 1
  },
  {
    q: "Nadine Magloire est notamment l'auteur(e) de :",
    options: ["Le Mal de vivre", "Le Mal de terre", "L'Alphabet des nuits", "Avant que les ombres s'effacent"],
    correct: 0
  },
  {
    q: "Dans quel grand mouvement littéraire s'inscrit Jean Price-Mars ?",
    options: ["Réalisme merveilleux", "Indigénisme", "Génération de la Ronde", "Haïti Littéraire"],
    correct: 1
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Isnardin Vieux ?",
    options: ["Silhouettes de nègres et de négrophiles", "Je suis vivant", "Poèmes d'Haïti et de France", "Le Roman de l'occupation"],
    correct: 3
  },
  {
    q: "Quel nom d'auteur associez-vous à « De l'égalité des races humaines » ?",
    options: ["Fresnel Sylvestre", "Anténor Firmin", "Hénock Trouillot", "Anthony Phelps"],
    correct: 1
  },
  {
    q: "Néhémy Pierre-Dahomey a notamment donné naissance à quelle œuvre ?",
    options: ["Rapatriés", "Sous le soleil d'Haïti", "Cric? Crac!", "Thémistocle-Épaminondas Labasterre"],
    correct: 0
  },
  {
    q: "Quelle est l'œuvre de Jean-Claude Fignolé parmi cette liste ?",
    options: ["L'Année Dessalines", "La Couleur de l'aube", "Moi, Toussaint Louverture", "Alléluia pour une femme-jardin"],
    correct: 2
  },
  {
    q: "Frédéric Marcelin est notamment l'auteur(e) de :",
    options: ["Boulevard Baie des Anges", "Restavec", "La Vengeance de Mama", "Contes et légendes d'Haïti"],
    correct: 2
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Davertige ?",
    options: ["Romulus", "Idem", "Poésies nationales", "L'Héritage colonial en Haïti"],
    correct: 1
  },
  {
    q: "De quelle plume est issue l'œuvre « Les Arbres musiciens » ?",
    options: ["Jacques Roumain", "Carl Brouard", "Jacques Stephen Alexis", "Lyonel Trouillot"],
    correct: 2
  },
  {
    q: "Quel écrivain haïtien a écrit « Thémistocle-Épaminondas Labasterre » ?",
    options: ["Stanley Péan", "Néhémy Pierre-Dahomey", "Guy Régis Jr", "Frédéric Marcelin"],
    correct: 3
  },
  {
    q: "Retrouvez l'auteur de « Romulus » parmi ces propositions :",
    options: ["Emmelie Prophète", "Alibée Féry", "Fernand Hibbert", "Etzer Vilaire"],
    correct: 2
  },
  {
    q: "L'écrivain(e) Syto Cavé est célèbre pour avoir publié :",
    options: ["Belle merveille", "Anacaona", "Je suis vivant", "Le Qui-vive"],
    correct: 3
  },
  {
    q: "« Les Contes haïtiens » compte parmi les œuvres de quel auteur ?",
    options: ["Etzer Vilaire", "Jean-Robert Cadet", "Suzanne Comhaire-Sylvain", "Jacques Stephen Alexis"],
    correct: 2
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Davertige ?",
    options: ["Le Reste du temps", "Romancero aux étoiles", "Idem", "Le Choc"],
    correct: 2
  },
  {
    q: "On rattache généralement Jean-Claude Fignolé à quel mouvement des lettres haïtiennes ?",
    options: ["Haïti Littéraire", "Spiralisme", "Génération de la Ronde", "Indigénisme"],
    correct: 1
  },
  {
    q: "Retrouvez l'auteur de « Les Villages de Dieu » parmi ces propositions :",
    options: ["Josaphat-Robert Large", "Emmelie Prophète", "Davertige", "Windsor Bellegarde"],
    correct: 1
  },
  {
    q: "Identifiez l'œuvre écrite par Massillon Coicou :",
    options: ["Rapatriés", "Boulevard Baie des Anges", "L'Empereur Dessalines", "Compère Général Soleil"],
    correct: 2
  },
  {
    q: "L'écrivain Émile Roumer est souvent associé(e) au mouvement :",
    options: ["Génération de la Ronde", "Indigénisme", "Spiralisme", "Haïti Littéraire"],
    correct: 1
  },
  {
    q: "Quel nom d'auteur associez-vous à « Moi, Toussaint Louverture » ?",
    options: ["Edwidge Danticat", "Jean-Claude Fignolé", "Oswald Durand", "Georges Sylvain"],
    correct: 1
  },
  {
    q: "Quel nom d'auteur associez-vous à « Manuel d'histoire d'Haïti » ?",
    options: ["Justin Chrysostome Dorsainvil", "Suzanne Comhaire-Sylvain", "Placide David", "Anténor Firmin"],
    correct: 0
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Les Villages de Dieu » ?",
    options: ["Jean-Claude Fignolé", "Emmelie Prophète", "Antoine Innocent", "Josaphat-Robert Large"],
    correct: 1
  },
  {
    q: "Retrouvez l'auteur de « De l'égalité des races humaines » parmi ces propositions :",
    options: ["James Noël", "Suzanne Comhaire-Sylvain", "Rodney Saint-Éloi", "Anténor Firmin"],
    correct: 3
  },
  {
    q: "Quelle est l'œuvre de Fernand Hibbert parmi cette liste ?",
    options: ["Le Sang et la Mer", "Dezafi", "Le Manuscrit de mon ami", "Fils de misère"],
    correct: 2
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Cléante Valcin ?",
    options: ["Zoune chez sa ninnaine", "Au pipirite chantant", "La Blanche Négresse", "Les Arbres musiciens"],
    correct: 2
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Musique nègre » ?",
    options: ["Ida Faubert", "Stanley Péan", "Kettly Mars", "Léon Laleau"],
    correct: 3
  },
  {
    q: "Le livre « La Bélière Caraïbe » est dû à la plume de :",
    options: ["Anthony Phelps", "Ida Faubert", "Yanick Lahens", "René Philoctète"],
    correct: 0
  },
  {
    q: "« La Dot de Sara » a été publié(e) par quel écrivain haïtien ?",
    options: ["Suzanne Comhaire-Sylvain", "Jean-Robert Léonidas", "Marie-Célie Agnant", "Gary Victor"],
    correct: 2
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Emmelie Prophète ?",
    options: ["Le Testament des solitudes", "Douces déroutes", "Théâtre", "Silhouettes de nègres et de négrophiles"],
    correct: 0
  },
  {
    q: "L'œuvre « Le Choc » a été écrite par :",
    options: ["Placide David", "Jean-Claude Fignolé", "Rodney Saint-Éloi", "Léon Laleau"],
    correct: 3
  },
  {
    q: "Quel courant littéraire est associé au nom de Oswald Durand ?",
    options: ["Haïti Littéraire", "Spiralisme", "Indigénisme", "Génération de la Ronde"],
    correct: 3
  },
  {
    q: "Emmelie Prophète a notamment donné naissance à quelle œuvre ?",
    options: ["Textes interdits", "Le bout du monde est une fenêtre", "Moi, fardeau inhérent", "Cric? Crac!"],
    correct: 1
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Le Trou du souffleur » ?",
    options: ["Marie Vieux-Chauvet", "Georges Castera", "Etzer Vilaire", "Emmelie Prophète"],
    correct: 1
  },
  {
    q: "Louis-Philippe Dalembert a notamment donné naissance à quelle œuvre ?",
    options: ["Réflexions diverses sur Haïti", "Milwaukee Blues", "Bicentenaire", "L'Odeur du café"],
    correct: 1
  },
  {
    q: "Quelle école littéraire haïtienne est représentée par Carl Brouard ?",
    options: ["Spiralisme", "Indigénisme", "Génération de la Ronde", "Réalisme merveilleux"],
    correct: 1
  },
  {
    q: "Makenzy Orcel est notamment l'auteur(e) de :",
    options: ["Les Contes haïtiens", "Ainsi parla l'oncle", "L'Heure hybride", "Les Immortelles"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Passions » ?",
    options: ["Charles Moravia", "Massillon Coicou", "Jean-Claude Bajeux", "Roussan Camille"],
    correct: 1
  },
  {
    q: "Émile Roumer est une figure représentative de quel courant littéraire haïtien ?",
    options: ["Génération de la Ronde", "Spiralisme", "Réalisme merveilleux", "Indigénisme"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Bain de lune » ?",
    options: ["Marie Vieux-Chauvet", "Yanick Lahens", "Louis-Philippe Dalembert", "Ignace Nau"],
    correct: 1
  },
  {
    q: "Identifiez l'œuvre écrite par Jean Price-Mars :",
    options: ["Le Conditionnel", "De Saint-Domingue à Haïti", "Le Roman de l'occupation", "L'Alphabet des nuits"],
    correct: 1
  },
  {
    q: "Qui a publié le livre « Thérèse en mille morceaux » ?",
    options: ["Émile Roumer", "Néhémy Pierre-Dahomey", "Lyonel Trouillot", "Georges Castera"],
    correct: 2
  },
  {
    q: "Quel nom d'auteur associez-vous à « Un Arc-en-ciel pour l'occident chrétien » ?",
    options: ["René Depestre", "Frédéric Marcelin", "Georges Sylvain", "Gary Victor"],
    correct: 0
  },
  {
    q: "« Ultravocal » a été publié(e) par quel écrivain haïtien ?",
    options: ["Carl Brouard", "Jean D'Amérique", "Marie-Thérèse Colimon-Hall", "Frankétienne"],
    correct: 3
  },
  {
    q: "Quelle est l'œuvre de Massillon Coicou parmi cette liste ?",
    options: ["Poésies nationales", "Le Trou du souffleur", "La Famille Vortex", "Rosalie l'infâme"],
    correct: 0
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Le Lambi » ?",
    options: ["Davertige", "Jean-Claude Bajeux", "Antoine Innocent", "Ignace Nau"],
    correct: 3
  },
  {
    q: "Quel nom d'auteur associez-vous à « Rires et Pleurs » ?",
    options: ["Jean-Claude Fignolé", "Oswald Durand", "Justin Lhérisson", "Rodney Saint-Éloi"],
    correct: 1
  },
  {
    q: "Quel écrivain haïtien a écrit « Le Sang et la Mer » ?",
    options: ["Jacques Stephen Alexis", "Serge Legagneur", "Marvin Victor", "Gary Victor"],
    correct: 3
  },
  {
    q: "« Avant que les ombres s'effacent » compte parmi les œuvres de quel auteur ?",
    options: ["Émile Ollivier", "Ida Faubert", "Louis-Philippe Dalembert", "Jean Price-Mars"],
    correct: 2
  },
  {
    q: "Quel ouvrage a été publié par René Depestre ?",
    options: ["Silhouettes de nègres et de négrophiles", "Textes interdits", "Hadriana dans tous mes rêves", "Compère Général Soleil"],
    correct: 2
  },
  {
    q: "L'œuvre « Avant que les ombres s'effacent » a été écrite par :",
    options: ["Louis-Philippe Dalembert", "Jean-Robert Cadet", "Rodney Saint-Éloi", "Hénock Trouillot"],
    correct: 0
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Bicentenaire » ?",
    options: ["Lyonel Trouillot", "Georges Sylvain", "Liliane Devieux-Dehoux", "Émile Ollivier"],
    correct: 0
  },
  {
    q: "Quel label littéraire est le plus souvent accolé au nom de Frankétienne ?",
    options: ["Indigénisme", "Génération de la Ronde", "Spiralisme", "Haïti Littéraire"],
    correct: 2
  },
  {
    q: "« Bonjour et adieu à la négritude » est signé par quel auteur haïtien ?",
    options: ["Marie-Célie Agnant", "Suzanne Comhaire-Sylvain", "Serge Legagneur", "René Depestre"],
    correct: 3
  },
  {
    q: "Identifiez l'œuvre écrite par James Noël :",
    options: ["Assaut à la nuit", "Frayeur", "Belle merveille", "Le Livre d'Emma"],
    correct: 2
  },
  {
    q: "« Romancero aux étoiles » est signé par quel auteur haïtien ?",
    options: ["Jacques Stephen Alexis", "Justin Lhérisson", "Emmelie Prophète", "Pradel Pompilus"],
    correct: 0
  },
  {
    q: "Quel courant littéraire est associé au nom de Massillon Coicou ?",
    options: ["Génération de la Ronde", "Indigénisme", "Haïti Littéraire", "Réalisme merveilleux"],
    correct: 0
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Moi, fardeau inhérent » ?",
    options: ["Jean-Claude Fignolé", "Émile Ollivier", "Guy Régis Jr", "Frédéric Marcelin"],
    correct: 2
  },
  {
    q: "Quel nom d'auteur associez-vous à « Réflexions diverses sur Haïti » ?",
    options: ["Placide David", "Lyonel Trouillot", "Gary Klang", "Demesvar Delorme"],
    correct: 3
  },
  {
    q: "Historiquement, Massillon Coicou appartient à quel mouvement littéraire ?",
    options: ["Réalisme merveilleux", "Indigénisme", "Génération de la Ronde", "Haïti Littéraire"],
    correct: 2
  },
  {
    q: "On rattache généralement Davertige à quel mouvement des lettres haïtiennes ?",
    options: ["Réalisme merveilleux", "Haïti Littéraire", "Génération de la Ronde", "Spiralisme"],
    correct: 1
  },
  {
    q: "Yanick Lahens est notamment l'auteur(e) de :",
    options: ["Fille d'Haïti", "Bain de lune", "Zoune chez sa ninnaine", "Mosochwazi Kout Fè"],
    correct: 1
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Jean-Robert Cadet ?",
    options: ["Restavec", "La mémoire aux abois", "L'Amour oui. La mort non", "La Récolte douce des larmes"],
    correct: 0
  },
  {
    q: "L'œuvre « Je suis vivant » a été écrite par :",
    options: ["Guy Régis Jr", "Kettly Mars", "Frankétienne", "Serge Legagneur"],
    correct: 1
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Alibée Féry ?",
    options: ["Rapatriés", "Mes années Duvalier", "Musa-Paidica", "Le Conditionnel"],
    correct: 2
  },
  {
    q: "Le livre « Corps mêlés » est dû à la plume de :",
    options: ["Georges Castera", "Anthony Phelps", "Anténor Firmin", "Marvin Victor"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Ultravocal » ?",
    options: ["Frédéric Marcelin", "Jean D'Amérique", "Oswald Durand", "Frankétienne"],
    correct: 3
  },
  {
    q: "Quelle école littéraire haïtienne est représentée par Serge Legagneur ?",
    options: ["Haïti Littéraire", "Indigénisme", "Génération de la Ronde", "Réalisme merveilleux"],
    correct: 0
  },
  {
    q: "Quel livre porte la signature de Jean D'Amérique ?",
    options: ["Rhapsodie sale", "Hadriana dans tous mes rêves", "Le Manuscrit de mon ami", "Zoune chez sa ninnaine"],
    correct: 0
  },
  {
    q: "Quel nom d'auteur associez-vous à « Kasalé » ?",
    options: ["Massillon Coicou", "Louis-Philippe Dalembert", "Kettly Mars", "Marie-Thérèse Colimon-Hall"],
    correct: 2
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « La Belle Amour humaine » ?",
    options: ["Lyonel Trouillot", "Évelyne Trouillot", "Georges Anglade", "Gary Victor"],
    correct: 0
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Compère Général Soleil » ?",
    options: ["Jacques Stephen Alexis", "Makenzy Orcel", "Oswald Durand", "Georges Sylvain"],
    correct: 0
  },
  {
    q: "L'écrivain(e) Tertulien Guilbaud est célèbre pour avoir publié :",
    options: ["La Bélière Caraïbe", "Le Lambi", "Vieilles chansons", "Kasalé"],
    correct: 2
  },
  {
    q: "Émile Roumer est identifié(e) à quel courant dans l'histoire littéraire d'Haïti ?",
    options: ["Spiralisme", "Indigénisme", "Haïti Littéraire", "Génération de la Ronde"],
    correct: 1
  },
  {
    q: "Dans le paysage des lettres haïtiennes, Jacques Stephen Alexis incarne quel mouvement ?",
    options: ["Indigénisme", "Réalisme merveilleux", "Spiralisme", "Génération de la Ronde"],
    correct: 1
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « L'Amour oui. La mort non » ?",
    options: ["Kettly Mars", "Liliane Devieux-Dehoux", "Jean-Robert Léonidas", "Marie-Célie Agnant"],
    correct: 1
  },
  {
    q: "On rattache généralement Jacques Stephen Alexis à quel mouvement des lettres haïtiennes ?",
    options: ["Réalisme merveilleux", "Spiralisme", "Génération de la Ronde", "Indigénisme"],
    correct: 0
  },
  {
    q: "Le livre « Le Conditionnel » est dû à la plume de :",
    options: ["Jean D'Amérique", "James Noël", "Kettly Mars", "Anthony Phelps"],
    correct: 3
  },
  {
    q: "Quelle est l'œuvre de Dany Laferrière parmi cette liste ?",
    options: ["Krik? Krak!", "Comment faire l'amour avec un Nègre sans se fatiguer", "Une eau-forte", "Théâtre"],
    correct: 1
  },
  {
    q: "L'écrivain(e) Jean D'Amérique est célèbre pour avoir publié :",
    options: ["Pages retrouvées", "Rhapsodie sale", "Le Sang et la Mer", "Vers le sud"],
    correct: 1
  },
  {
    q: "Quel écrivain haïtien a écrit « Guillaume et Nathalie » ?",
    options: ["Justin Chrysostome Dorsainvil", "Jean-Euphèle Milcé", "Serge Legagneur", "Yanick Lahens"],
    correct: 3
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Rodney Saint-Éloi ?",
    options: ["Désirée Congo", "Le Trou du souffleur", "Huit jours dans un no man's land", "Haïti kenbe la !"],
    correct: 3
  },
  {
    q: "Retrouvez l'auteur de « Clair de Manbo » parmi ces propositions :",
    options: ["Gary Victor", "Marie Vieux-Chauvet", "René Philoctète", "James Noël"],
    correct: 0
  },
  {
    q: "L'œuvre « L'Autre Face de la mer » a été écrite par :",
    options: ["Frédéric Marcelin", "Émile Roumer", "Roussan Camille", "Louis-Philippe Dalembert"],
    correct: 3
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Hénock Trouillot ?",
    options: ["Dessalines ou le sang du Pont-Rouge", "Fonds des Nègres", "Le Rond-point", "La Plage des songes"],
    correct: 0
  },
  {
    q: "Etzer Vilaire est une figure représentative de quel courant littéraire haïtien ?",
    options: ["Génération de la Ronde", "Indigénisme", "Haïti Littéraire", "Spiralisme"],
    correct: 0
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Emmelie Prophète ?",
    options: ["Le Testament des solitudes", "Réflexions diverses sur Haïti", "Mes années Duvalier", "Huit jours dans un no man's land"],
    correct: 0
  },
  {
    q: "Qui a publié le livre « Contes et légendes d'Haïti » ?",
    options: ["Évelyne Trouillot", "Marvin Victor", "Emmelie Prophète", "Joujou Turenne"],
    correct: 3
  },
  {
    q: "De quelle plume est issue l'œuvre « Désirée Congo » ?",
    options: ["Placide David", "Évelyne Trouillot", "Guy Régis Jr", "Isnardin Vieux"],
    correct: 1
  },
  {
    q: "Quel nom d'auteur associez-vous à « Amour, Colère et Folie » ?",
    options: ["Marie Vieux-Chauvet", "Marie-Alice Théard", "Anthony Phelps", "Jean-Robert Léonidas"],
    correct: 0
  },
  {
    q: "Quel label littéraire est le plus souvent accolé au nom de Massillon Coicou ?",
    options: ["Haïti Littéraire", "Génération de la Ronde", "Spiralisme", "Indigénisme"],
    correct: 1
  },
  {
    q: "De quelle plume est issue l'œuvre « Le Mât de cocagne » ?",
    options: ["Suzanne Comhaire-Sylvain", "Edwidge Danticat", "Jean-Claude Bajeux", "René Depestre"],
    correct: 3
  },
  {
    q: "Qui a publié le livre « Jacmel au crépuscule » ?",
    options: ["Léon Laleau", "Georges Sylvain", "Georges Castera", "Jean Métellus"],
    correct: 3
  },
  {
    q: "Le livre « Les Arbres musiciens » est dû à la plume de :",
    options: ["Jacques Stephen Alexis", "Marie Vieux-Chauvet", "Marie-Thérèse Colimon-Hall", "Jean-Claude Charles"],
    correct: 0
  },
  {
    q: "Quel livre porte la signature de Edwidge Danticat ?",
    options: ["Krik? Krak!", "Corps mêlés", "Les Étrangers de la maison", "Assaut à la nuit"],
    correct: 0
  },
  {
    q: "Quelle est l'œuvre de Léon Laleau parmi cette liste ?",
    options: ["Douces déroutes", "Comment faire l'amour avec un Nègre sans se fatiguer", "Le Choc", "Mimola"],
    correct: 2
  },
  {
    q: "« Adieu, mon frère » compte parmi les œuvres de quel auteur ?",
    options: ["Jean-Robert Léonidas", "Edwidge Danticat", "Dany Laferrière", "Frédéric Marcelin"],
    correct: 1
  },
  {
    q: "Le livre « Désirée Congo » est dû à la plume de :",
    options: ["Hénock Trouillot", "Évelyne Trouillot", "Serge Legagneur", "James Noël"],
    correct: 1
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Liliane Devieux-Dehoux ?",
    options: ["L'Amour oui. La mort non", "La Montagne ensorcelée", "La République d'Haïti et ses visiteurs", "Amour, Colère et Folie"],
    correct: 0
  },
  {
    q: "Quel titre figure dans la bibliographie de Kettly Mars ?",
    options: ["Le Lambi", "Les Dix hommes noirs", "Frayeur", "La Bélière Caraïbe"],
    correct: 2
  },
  {
    q: "Le livre « Poésies nationales » est dû à la plume de :",
    options: ["Georges Castera", "Massillon Coicou", "Marie-Célie Agnant", "Gérard Étienne"],
    correct: 1
  },
  {
    q: "L'œuvre « Thérèse en mille morceaux » a été écrite par :",
    options: ["Faubert Bolivar", "Justin Lhérisson", "Lyonel Trouillot", "Makenzy Orcel"],
    correct: 2
  },
  {
    q: "Le livre « Saison de porcs » est dû à la plume de :",
    options: ["Gary Victor", "Louis-Philippe Dalembert", "Fresnel Sylvestre", "Stanley Péan"],
    correct: 0
  },
  {
    q: "Le livre « Les Villages de Dieu » est dû à la plume de :",
    options: ["Emmelie Prophète", "Charles Moravia", "Justin Chrysostome Dorsainvil", "Frédéric Marcelin"],
    correct: 0
  },
  {
    q: "Quel courant littéraire est associé au nom de Davertige ?",
    options: ["Indigénisme", "Spiralisme", "Haïti Littéraire", "Génération de la Ronde"],
    correct: 2
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Vers le sud » ?",
    options: ["Georges Sylvain", "Davertige", "Jean-Euphèle Milcé", "Dany Laferrière"],
    correct: 3
  },
  {
    q: "L'écrivain(e) Makenzy Orcel est célèbre pour avoir publié :",
    options: ["Une somme humaine", "Kasalé", "Le Fusil et la croix", "La Bélière Caraïbe"],
    correct: 0
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Makenzy Orcel ?",
    options: ["La Récolte douce des larmes", "Nouveaux poèmes", "La République d'Haïti et ses visiteurs", "Une somme humaine"],
    correct: 3
  },
  {
    q: "Quel ouvrage a été publié par Kettly Mars ?",
    options: ["Je suis vivant", "Jacques Roche, la vie entière", "Écrit sur du ruban rose", "Le Livre d'Emma"],
    correct: 0
  },
  {
    q: "Quelle est l'œuvre de Emmelie Prophète parmi cette liste ?",
    options: ["Restavec", "Musique nègre", "Une eau-forte", "Le bout du monde est une fenêtre"],
    correct: 3
  },
  {
    q: "Émile Roumer figure parmi les représentants de quel mouvement ?",
    options: ["Génération de la Ronde", "Haïti Littéraire", "Indigénisme", "Réalisme merveilleux"],
    correct: 2
  },
  {
    q: "On doit à la plume de Marie Vieux-Chauvet l'œuvre suivante :",
    options: ["Les Rapaces", "Les Dix hommes noirs", "Mes années Duvalier", "Les Blancs de mémoire"],
    correct: 0
  },
  {
    q: "Quel livre porte la signature de Placide David ?",
    options: ["Manhattan Blues", "L'Héritage colonial en Haïti", "Francesca", "L'Énigme du retour"],
    correct: 1
  },
  {
    q: "Quel livre porte la signature de Makenzy Orcel ?",
    options: ["Les Immortelles", "Je suis vivant", "Le Conditionnel", "Avant que les ombres s'effacent"],
    correct: 0
  },
  {
    q: "Quel ouvrage a été publié par Ignace Nau ?",
    options: ["La Dot de Sara", "Épisode de la Révolution", "La République d'Haïti et ses visiteurs", "Le Conditionnel"],
    correct: 1
  },
  {
    q: "Quel nom d'auteur associez-vous à « Manuel illustré d'histoire de la littérature haïtienne » ?",
    options: ["René Philoctète", "Joujou Turenne", "Évelyne Trouillot", "Pradel Pompilus"],
    correct: 3
  },
  {
    q: "« Impasse Dignité » est signé par quel auteur haïtien ?",
    options: ["Emmelie Prophète", "Justin Chrysostome Dorsainvil", "Frankétienne", "Émile Ollivier"],
    correct: 0
  },
  {
    q: "Historiquement, Jean Price-Mars appartient à quel mouvement littéraire ?",
    options: ["Indigénisme", "Réalisme merveilleux", "Génération de la Ronde", "Spiralisme"],
    correct: 0
  },
  {
    q: "Le livre « Le Cri de l'oiseau rouge » est dû à la plume de :",
    options: ["Suzanne Comhaire-Sylvain", "Georges Sylvain", "Edwidge Danticat", "Roland Morisseau"],
    correct: 2
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Zombi Blues » ?",
    options: ["Massillon Coicou", "Jacques Roumain", "Stanley Péan", "Gérard Étienne"],
    correct: 2
  },
  {
    q: "Quelle est l'œuvre de Anthony Phelps parmi cette liste ?",
    options: ["Le Conditionnel", "Mosochwazi Kout Fè", "Moi, Toussaint Louverture", "Passions"],
    correct: 0
  },
  {
    q: "Quelle école littéraire haïtienne est représentée par Roland Morisseau ?",
    options: ["Génération de la Ronde", "Indigénisme", "Réalisme merveilleux", "Haïti Littéraire"],
    correct: 3
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Jean Métellus ?",
    options: ["Au pipirite chantant", "La Crête-à-Pierrot", "Rue des pas perdus", "L'Oiseau schizophone"],
    correct: 0
  },
  {
    q: "Dans quel grand mouvement littéraire s'inscrit Carl Brouard ?",
    options: ["Indigénisme", "Génération de la Ronde", "Réalisme merveilleux", "Haïti Littéraire"],
    correct: 0
  },
  {
    q: "« Rhapsodie sale » est signé par quel auteur haïtien ?",
    options: ["Georges Anglade", "Georges Castera", "Jean-Euphèle Milcé", "Jean D'Amérique"],
    correct: 3
  },
  {
    q: "Léon Laleau est identifié(e) à quel courant dans l'histoire littéraire d'Haïti ?",
    options: ["Réalisme merveilleux", "Indigénisme", "Spiralisme", "Génération de la Ronde"],
    correct: 1
  },
  {
    q: "Quel titre figure dans la bibliographie de Fernand Hibbert ?",
    options: ["Les Thazar", "Pages retrouvées", "Fonds des Nègres", "Une eau-forte"],
    correct: 0
  },
  {
    q: "On doit à la plume de Jean-Robert Léonidas l'œuvre suivante :",
    options: ["Je suis vivant", "Île à vau-l'eau", "La Dot de Sara", "Textes interdits"],
    correct: 1
  },
  {
    q: "L'œuvre « Pays sans chapeau » a été écrite par :",
    options: ["Anthony Phelps", "Dany Laferrière", "Jean-Robert Léonidas", "Jean-Claude Fignolé"],
    correct: 1
  },
  {
    q: "« Le Mal de terre » compte parmi les œuvres de quel auteur ?",
    options: ["Paula Clermont Péan", "Justin Lhérisson", "Josaphat-Robert Large", "Georges Castera"],
    correct: 0
  },
  {
    q: "Qui a publié le livre « Restavec » ?",
    options: ["Yanick Lahens", "Marvin Victor", "Jean-Robert Cadet", "Cléante Valcin"],
    correct: 2
  },
  {
    q: "Quelle est l'œuvre de Gérard Étienne parmi cette liste ?",
    options: ["Alléluia pour une femme-jardin", "Bonjour et adieu à la négritude", "Le Lambi", "Le Nègre crucifié"],
    correct: 3
  },
  {
    q: "De quelle plume est issue l'œuvre « La Crête-à-Pierrot » ?",
    options: ["Makenzy Orcel", "Windsor Bellegarde", "Charles Moravia", "Lyonel Trouillot"],
    correct: 2
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Néhémy Pierre-Dahomey ?",
    options: ["Romancero aux étoiles", "Rapatriés", "Treize nouvelles vaudou", "Les Villages de Dieu"],
    correct: 1
  },
  {
    q: "L'œuvre « Saisons sauvages » a été écrite par :",
    options: ["Kettly Mars", "Justin Chrysostome Dorsainvil", "Roussan Camille", "Georges Anglade"],
    correct: 0
  },
  {
    q: "« Moi, fardeau inhérent » est signé par quel auteur haïtien ?",
    options: ["Guy Régis Jr", "Frédéric Marcelin", "Faubert Bolivar", "Anténor Firmin"],
    correct: 0
  },
  {
    q: "Retrouvez l'auteur de « Le Cri de l'oiseau rouge » parmi ces propositions :",
    options: ["Edwidge Danticat", "Léon Laleau", "Jean-Euphèle Milcé", "Marie-Célie Agnant"],
    correct: 0
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Jean-Claude Fignolé ?",
    options: ["Les Étrangers de la maison", "Les Villages de Dieu", "Aube tranquille", "Une somme humaine"],
    correct: 2
  },
  {
    q: "Quel nom d'auteur associez-vous à « Les Arbres musiciens » ?",
    options: ["Émile Ollivier", "Jacques Stephen Alexis", "Frédéric Marcelin", "Emmelie Prophète"],
    correct: 1
  },
  {
    q: "Etzer Vilaire figure parmi les représentants de quel mouvement ?",
    options: ["Spiralisme", "Génération de la Ronde", "Indigénisme", "Haïti Littéraire"],
    correct: 1
  },
  {
    q: "Quel écrivain haïtien a écrit « La Famille des Pitite-Caille » ?",
    options: ["Ida Faubert", "Jacques Roumain", "Dany Laferrière", "Justin Lhérisson"],
    correct: 3
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Passions » ?",
    options: ["Liliane Devieux-Dehoux", "Massillon Coicou", "Serge Legagneur", "Georges Castera"],
    correct: 1
  },
  {
    q: "Qui a publié le livre « Les Immortelles » ?",
    options: ["Jean-Claude Charles", "Jean-Claude Bajeux", "Makenzy Orcel", "Joujou Turenne"],
    correct: 2
  },
  {
    q: "« Corps mêlés » est signé par quel auteur haïtien ?",
    options: ["Marvin Victor", "Louis-Philippe Dalembert", "Frankétienne", "Charles Moravia"],
    correct: 0
  },
  {
    q: "Quel ouvrage a été publié par Jean Price-Mars ?",
    options: ["Un Arc-en-ciel pour l'occident chrétien", "L'Amour oui. La mort non", "L'Alphabet des nuits", "De Saint-Domingue à Haïti"],
    correct: 3
  },
  {
    q: "Quel livre porte la signature de Léon Laleau ?",
    options: ["Les Possédés de la pleine lune", "Rapatriés", "Rires et Pleurs", "Le Choc"],
    correct: 3
  },
  {
    q: "Dans le paysage des lettres haïtiennes, René Philoctète incarne quel mouvement ?",
    options: ["Indigénisme", "Spiralisme", "Réalisme merveilleux", "Haïti Littéraire"],
    correct: 1
  },
  {
    q: "Quel livre porte la signature de Frankétienne ?",
    options: ["Boulevard Baie des Anges", "L'Oiseau schizophone", "La Belle Amour humaine", "Bicentenaire"],
    correct: 1
  },
  {
    q: "Quel écrivain haïtien a écrit « Séna » ?",
    options: ["Fernand Hibbert", "Charles Moravia", "Placide David", "Paula Clermont Péan"],
    correct: 0
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Marie-Thérèse Colimon-Hall ?",
    options: ["Poésies nationales", "Fils de misère", "Les Contes haïtiens", "Le Manuscrit de mon ami"],
    correct: 1
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Gary Klang ?",
    options: ["L'Année Dessalines", "Haïti, terre mystique", "Pèlentèt", "Ainsi parla l'oncle"],
    correct: 1
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Vers le sud » ?",
    options: ["Dany Laferrière", "Marie Vieux-Chauvet", "Stanley Péan", "Fernand Hibbert"],
    correct: 0
  },
  {
    q: "On doit à la plume de Néhémy Pierre-Dahomey l'œuvre suivante :",
    options: ["La République d'Haïti et ses visiteurs", "Bonjour et adieu à la négritude", "Boulevard Baie des Anges", "Pages retrouvées"],
    correct: 2
  },
  {
    q: "Quel nom d'auteur associez-vous à « Le Nègre crucifié » ?",
    options: ["Placide David", "Etzer Vilaire", "Michel Soukar", "Gérard Étienne"],
    correct: 3
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Mère-Solitude » ?",
    options: ["Émile Ollivier", "Georges Sylvain", "Isnardin Vieux", "Guy Régis Jr"],
    correct: 0
  },
  {
    q: "Qui a publié le livre « Le Cri de l'oiseau rouge » ?",
    options: ["Guy Régis Jr", "Davertige", "Joujou Turenne", "Edwidge Danticat"],
    correct: 3
  },
  {
    q: "De quelle plume est issue l'œuvre « Le Manuscrit de mon ami » ?",
    options: ["Jean-Robert Léonidas", "Alibée Féry", "Fernand Hibbert", "Rodney Saint-Éloi"],
    correct: 2
  },
  {
    q: "Quelle est l'œuvre de Alibée Féry parmi cette liste ?",
    options: ["Musa-Paidica", "Dezafi", "Les Villages de Dieu", "Je suis vivant"],
    correct: 0
  },
  {
    q: "Quel écrivain haïtien a écrit « Ainsi parla l'oncle » ?",
    options: ["Makenzy Orcel", "Marvin Victor", "Jean Price-Mars", "Oswald Durand"],
    correct: 2
  },
  {
    q: "Le livre « Saisons sauvages » est dû à la plume de :",
    options: ["Demesvar Delorme", "Kettly Mars", "Fresnel Sylvestre", "Évelyne Trouillot"],
    correct: 1
  },
  {
    q: "Quelle est l'œuvre de Georges Sylvain parmi cette liste ?",
    options: ["Le Briseur de rosée", "Bicentenaire", "Cric? Crac!", "Le Choc"],
    correct: 2
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Marie Vieux-Chauvet ?",
    options: ["La Danse sur le volcan", "La mémoire aux abois", "De Saint-Domingue à Haïti", "Je suis vivant"],
    correct: 0
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Emmelie Prophète ?",
    options: ["Je suis vivant", "Le Testament des solitudes", "La Bélière Caraïbe", "Avant que les ombres s'effacent"],
    correct: 1
  },
  {
    q: "De quelle plume est issue l'œuvre « Le Roman de l'occupation » ?",
    options: ["Jean-Euphèle Milcé", "Émile Roumer", "Frédéric Marcelin", "Isnardin Vieux"],
    correct: 3
  },
  {
    q: "Quelle est l'œuvre de Hénock Trouillot parmi cette liste ?",
    options: ["Dessalines ou le sang du Pont-Rouge", "Belle merveille", "Thémistocle-Épaminondas Labasterre", "Passions"],
    correct: 0
  },
  {
    q: "L'écrivain(e) René Philoctète est célèbre pour avoir publié :",
    options: ["Désirée Congo", "L'Alphabet des nuits", "Le Peuple des terres mêlées", "Moi, fardeau inhérent"],
    correct: 2
  },
  {
    q: "Quel livre porte la signature de Évelyne Trouillot ?",
    options: ["Manuel d'histoire d'Haïti", "La mémoire aux abois", "Le Lambi", "La Bélière Caraïbe"],
    correct: 1
  },
  {
    q: "Retrouvez l'auteur de « L'Odeur du café » parmi ces propositions :",
    options: ["Dany Laferrière", "Marie-Célie Agnant", "Frankétienne", "Georges Sylvain"],
    correct: 0
  },
  {
    q: "Quel titre figure dans la bibliographie de Anthony Phelps ?",
    options: ["Kasalé", "Le Manuscrit de mon ami", "Le Mal de vivre", "Mon pays que voici"],
    correct: 3
  },
  {
    q: "« La Danse sur le volcan » compte parmi les œuvres de quel auteur ?",
    options: ["Liliane Devieux-Dehoux", "Marie Vieux-Chauvet", "Justin Chrysostome Dorsainvil", "Fernand Hibbert"],
    correct: 1
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Jean-Claude Fignolé ?",
    options: ["Les Possédés de la pleine lune", "Le Qui-vive", "Fonds des Nègres", "Le Lambi"],
    correct: 0
  },
  {
    q: "Quelle est l'œuvre de Évelyne Trouillot parmi cette liste ?",
    options: ["La mémoire aux abois", "Pages retrouvées", "Jacques Roche, la vie entière", "Aube tranquille"],
    correct: 0
  },
  {
    q: "Quel écrivain haïtien a écrit « Assaut à la nuit » ?",
    options: ["Jean-Euphèle Milcé", "Roussan Camille", "Jean-Claude Charles", "Roland Morisseau"],
    correct: 1
  },
  {
    q: "Qui a publié le livre « La Crête-à-Pierrot » ?",
    options: ["Fernand Hibbert", "Yanick Lahens", "Charles Moravia", "Émile Ollivier"],
    correct: 2
  },
  {
    q: "Quel écrivain haïtien a écrit « Le Peuple des terres mêlées » ?",
    options: ["Jean-Robert Cadet", "Jean-Claude Charles", "Louis Joseph Janvier", "René Philoctète"],
    correct: 3
  },
  {
    q: "Quel ouvrage a été publié par Syto Cavé ?",
    options: ["Théâtre", "Rue Frontière", "Réflexions diverses sur Haïti", "Kasalé"],
    correct: 0
  },
  {
    q: "Anthony Phelps est identifié(e) à quel courant dans l'histoire littéraire d'Haïti ?",
    options: ["Haïti Littéraire", "Génération de la Ronde", "Spiralisme", "Indigénisme"],
    correct: 0
  },
  {
    q: "« Rires et Pleurs » est signé par quel auteur haïtien ?",
    options: ["James Noël", "Rodney Saint-Éloi", "Anthony Phelps", "Oswald Durand"],
    correct: 3
  },
  {
    q: "Marie-Célie Agnant a notamment donné naissance à quelle œuvre ?",
    options: ["Francesca", "La Dot de Sara", "Rhapsodie sale", "Le Trou du souffleur"],
    correct: 1
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Théâtre » ?",
    options: ["Georges Castera", "Jean D'Amérique", "Syto Cavé", "Jacques Stephen Alexis"],
    correct: 2
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Léon Laleau ?",
    options: ["Haïti, terre mystique", "Douces déroutes", "Le Choc", "L'Odeur du café"],
    correct: 2
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Haïti kenbe la ! » ?",
    options: ["Alibée Féry", "Rodney Saint-Éloi", "Léon Laleau", "Marie-Thérèse Colimon-Hall"],
    correct: 1
  },
  {
    q: "Le livre « Restavec » est dû à la plume de :",
    options: ["Jean-Robert Cadet", "Windsor Bellegarde", "Cléante Valcin", "Liliane Devieux-Dehoux"],
    correct: 0
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Justin Lhérisson ?",
    options: ["Krik? Krak!", "Jacmel au crépuscule", "Le Mât de cocagne", "Zoune chez sa ninnaine"],
    correct: 3
  },
  {
    q: "Retrouvez l'auteur de « L'Heure hybride » parmi ces propositions :",
    options: ["Kettly Mars", "Pradel Pompilus", "Émile Roumer", "Placide David"],
    correct: 0
  },
  {
    q: "« Rires et Pleurs » compte parmi les œuvres de quel auteur ?",
    options: ["Jacques Roumain", "Justin Chrysostome Dorsainvil", "Oswald Durand", "Louis Joseph Janvier"],
    correct: 2
  },
  {
    q: "Retrouvez l'auteur de « L'Autre Face de la mer » parmi ces propositions :",
    options: ["Justin Chrysostome Dorsainvil", "Marvin Victor", "Fernand Hibbert", "Louis-Philippe Dalembert"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Romancero aux étoiles » ?",
    options: ["Georges Anglade", "Évelyne Trouillot", "Fresnel Sylvestre", "Jacques Stephen Alexis"],
    correct: 3
  },
  {
    q: "L'œuvre « La Plage des songes » a été écrite par :",
    options: ["Charles Moravia", "Stanley Péan", "Hénock Trouillot", "Gérard Étienne"],
    correct: 1
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Anténor Firmin ?",
    options: ["Les Contes haïtiens", "Bain de lune", "De l'égalité des races humaines", "L'Ombre animale"],
    correct: 2
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Un amour à trois temps » ?",
    options: ["Edwidge Danticat", "Fresnel Sylvestre", "Anténor Firmin", "Antoine Innocent"],
    correct: 1
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Pradel Pompilus ?",
    options: ["Treize nouvelles vaudou", "L'Énigme du retour", "Au pipirite chantant", "Manuel illustré d'histoire de la littérature haïtienne"],
    correct: 3
  },
  {
    q: "L'œuvre « Des fleurs pour les héros » a été écrite par :",
    options: ["James Noël", "Placide David", "Anthony Phelps", "Yanick Lahens"],
    correct: 2
  },
  {
    q: "Quel écrivain haïtien a écrit « Des fleurs pour les héros » ?",
    options: ["Dany Laferrière", "Makenzy Orcel", "Anthony Phelps", "Ignace Nau"],
    correct: 2
  },
  {
    q: "« Le Trou du souffleur » est signé par quel auteur haïtien ?",
    options: ["Justin Chrysostome Dorsainvil", "Fresnel Sylvestre", "Gary Victor", "Georges Castera"],
    correct: 3
  },
  {
    q: "« Thémistocle-Épaminondas Labasterre » a été publié(e) par quel écrivain haïtien ?",
    options: ["Jean Métellus", "Jean-Robert Léonidas", "Demesvar Delorme", "Frédéric Marcelin"],
    correct: 3
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Roussan Camille ?",
    options: ["Anacaona", "Vieilles chansons", "Assaut à la nuit", "Le Manuscrit de mon ami"],
    correct: 2
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Jean Price-Mars ?",
    options: ["Les Possédés de la pleine lune", "Les Rapaces", "La Montagne ensorcelée", "De Saint-Domingue à Haïti"],
    correct: 3
  },
  {
    q: "L'écrivain Carl Brouard est souvent associé(e) au mouvement :",
    options: ["Haïti Littéraire", "Spiralisme", "Génération de la Ronde", "Indigénisme"],
    correct: 3
  },
  {
    q: "Parmi ces titres, lequel est signé Jean-Euphèle Milcé ?",
    options: ["L'Alphabet des nuits", "Ces îles qui marchent", "Le Sang et la Mer", "Les Blancs de mémoire"],
    correct: 0
  },
  {
    q: "Parmi ces titres, lequel est signé René Philoctète ?",
    options: ["Rosalie l'infâme", "Soleil à coudre", "Le Peuple des terres mêlées", "Assaut à la nuit"],
    correct: 2
  },
  {
    q: "« Francesca » a été publié(e) par quel écrivain haïtien ?",
    options: ["Windsor Bellegarde", "Demesvar Delorme", "Lyonel Trouillot", "Jean-Robert Léonidas"],
    correct: 1
  },
  {
    q: "Retrouvez l'auteur de « L'Espace d'un cillement » parmi ces propositions :",
    options: ["Jacques Stephen Alexis", "Tertulien Guilbaud", "Michel Soukar", "Kettly Mars"],
    correct: 0
  },
  {
    q: "De quelle plume est issue l'œuvre « Les Rapaces » ?",
    options: ["Jean-Claude Bajeux", "Marie Vieux-Chauvet", "Windsor Bellegarde", "Antoine Innocent"],
    correct: 1
  },
  {
    q: "De quelle plume est issue l'œuvre « L'Oiseau schizophone » ?",
    options: ["Frankétienne", "Serge Legagneur", "Justin Chrysostome Dorsainvil", "Paula Clermont Péan"],
    correct: 0
  },
  {
    q: "Le livre « Idem » est dû à la plume de :",
    options: ["Davertige", "Syto Cavé", "Charles Moravia", "Emmelie Prophète"],
    correct: 0
  },
  {
    q: "L'écrivain(e) Serge Legagneur est célèbre pour avoir publié :",
    options: ["L'Ombre animale", "La Montagne ensorcelée", "Textes interdits", "Bonjour et adieu à la négritude"],
    correct: 2
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Fresnel Sylvestre ?",
    options: ["L'Odeur du café", "Les Rapaces", "Le bout du monde est une fenêtre", "Un amour à trois temps"],
    correct: 3
  },
  {
    q: "Quel ouvrage a été publié par Charles Moravia ?",
    options: ["Les Villages de Dieu", "La Crête-à-Pierrot", "La Vengeance de Mama", "Le Qui-vive"],
    correct: 1
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Assaut à la nuit » ?",
    options: ["Oswald Durand", "Guy Régis Jr", "Roussan Camille", "Évelyne Trouillot"],
    correct: 2
  },
  {
    q: "« La Crête-à-Pierrot » compte parmi les œuvres de quel auteur ?",
    options: ["Justin Chrysostome Dorsainvil", "Ida Faubert", "Marie-Célie Agnant", "Charles Moravia"],
    correct: 3
  },
  {
    q: "De quelle plume est issue l'œuvre « Ultravocal » ?",
    options: ["Frankétienne", "Jean Métellus", "René Philoctète", "Demesvar Delorme"],
    correct: 0
  },
  {
    q: "« Rue des pas perdus » a été publié(e) par quel écrivain haïtien ?",
    options: ["Tertulien Guilbaud", "Marie-Thérèse Colimon-Hall", "Jean D'Amérique", "Lyonel Trouillot"],
    correct: 3
  },
  {
    q: "« Rires et Pleurs » a été publié(e) par quel écrivain haïtien ?",
    options: ["Oswald Durand", "Ida Faubert", "Frankétienne", "Anténor Firmin"],
    correct: 0
  },
  {
    q: "Qui a publié le livre « Passages » ?",
    options: ["Fernand Hibbert", "Émile Ollivier", "Serge Legagneur", "Michel Soukar"],
    correct: 1
  },
  {
    q: "« Fonds des Nègres » compte parmi les œuvres de quel auteur ?",
    options: ["Guy Régis Jr", "Hénock Trouillot", "Marie Vieux-Chauvet", "Louis Joseph Janvier"],
    correct: 2
  },
  {
    q: "« Un Arc-en-ciel pour l'occident chrétien » est signé par quel auteur haïtien ?",
    options: ["Josaphat-Robert Large", "Fernand Hibbert", "René Depestre", "Paula Clermont Péan"],
    correct: 2
  },
  {
    q: "Retrouvez l'auteur de « Contes et légendes d'Haïti » parmi ces propositions :",
    options: ["René Philoctète", "Charles Moravia", "Joujou Turenne", "Tertulien Guilbaud"],
    correct: 2
  },
  {
    q: "Quel écrivain haïtien a écrit « Le Rond-point » ?",
    options: ["Faubert Bolivar", "Évelyne Trouillot", "Makenzy Orcel", "Fresnel Sylvestre"],
    correct: 1
  },
  {
    q: "Identifiez l'œuvre écrite par Jacques Roumain :",
    options: ["La Vocation de l'élite", "La Montagne ensorcelée", "Les Rapaces", "Le Mât de cocagne"],
    correct: 1
  },
  {
    q: "L'œuvre « L'Ombre animale » a été écrite par :",
    options: ["Évelyne Trouillot", "Jean-Robert Léonidas", "Georges Castera", "Makenzy Orcel"],
    correct: 3
  },
  {
    q: "L'écrivain(e) Isnardin Vieux est célèbre pour avoir publié :",
    options: ["Des fleurs pour les héros", "Passages", "Bicentenaire", "Le Roman de l'occupation"],
    correct: 3
  },
  {
    q: "Quelle école littéraire haïtienne est représentée par Jacques Roumain ?",
    options: ["Indigénisme", "Réalisme merveilleux", "Génération de la Ronde", "Haïti Littéraire"],
    correct: 0
  },
  {
    q: "« La Bélière Caraïbe » compte parmi les œuvres de quel auteur ?",
    options: ["Jean D'Amérique", "Roussan Camille", "Yanick Lahens", "Anthony Phelps"],
    correct: 3
  },
  {
    q: "Quelle est l'œuvre de Cléante Valcin parmi cette liste ?",
    options: ["Le Mal de terre", "Une somme humaine", "La Blanche Négresse", "Thérèse en mille morceaux"],
    correct: 2
  },
  {
    q: "Anthony Phelps est une figure représentative de quel courant littéraire haïtien ?",
    options: ["Réalisme merveilleux", "Haïti Littéraire", "Spiralisme", "Indigénisme"],
    correct: 1
  },
  {
    q: "« La Dot de Sara » compte parmi les œuvres de quel auteur ?",
    options: ["Carl Brouard", "Antoine Innocent", "René Philoctète", "Marie-Célie Agnant"],
    correct: 3
  },
  {
    q: "Le livre « La Vocation de l'élite » est dû à la plume de :",
    options: ["Emmelie Prophète", "Georges Castera", "Marie-Célie Agnant", "Jean Price-Mars"],
    correct: 3
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Contes et légendes d'Haïti » ?",
    options: ["Jean-Claude Fignolé", "Marie-Thérèse Colimon-Hall", "Jean-Claude Charles", "Joujou Turenne"],
    correct: 3
  },
  {
    q: "Parmi ces titres, lequel est signé Stanley Péan ?",
    options: ["Fils de misère", "La Plage des songes", "L'Alphabet des nuits", "Le Rond-point"],
    correct: 1
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Les Arbres musiciens » ?",
    options: ["Tertulien Guilbaud", "Kettly Mars", "Frankétienne", "Jacques Stephen Alexis"],
    correct: 3
  },
  {
    q: "L'œuvre « Une eau-forte » a été écrite par :",
    options: ["Suzanne Comhaire-Sylvain", "Jean Métellus", "Antoine Innocent", "Ignace Nau"],
    correct: 1
  },
  {
    q: "Quelle est l'œuvre de Isnardin Vieux parmi cette liste ?",
    options: ["Une eau-forte", "Le Roman de l'occupation", "Poésies nationales", "Rosalie l'infâme"],
    correct: 1
  },
  {
    q: "« Pèlentèt » a été publié(e) par quel écrivain haïtien ?",
    options: ["Anthony Phelps", "Frankétienne", "Roussan Camille", "Carl Brouard"],
    correct: 1
  },
  {
    q: "Quel ouvrage a été publié par Dany Laferrière ?",
    options: ["Saison de porcs", "L'Énigme du retour", "Romancero aux étoiles", "Contes et légendes d'Haïti"],
    correct: 1
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Makenzy Orcel ?",
    options: ["Les Immortelles", "Encre allègre", "La Plage des songes", "Restavec"],
    correct: 0
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Anténor Firmin ?",
    options: ["Manuel d'histoire d'Haïti", "Île à vau-l'eau", "Aube tranquille", "De l'égalité des races humaines"],
    correct: 3
  },
  {
    q: "Placide David a notamment donné naissance à quelle œuvre ?",
    options: ["Rosalie l'infâme", "Zoune chez sa ninnaine", "L'Héritage colonial en Haïti", "Gouverneurs de la rosée"],
    correct: 2
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Marie Vieux-Chauvet ?",
    options: ["Bicentenaire", "Rapatriés", "La Danse sur le volcan", "Sous le soleil d'Haïti"],
    correct: 2
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Compère Général Soleil » ?",
    options: ["Anténor Firmin", "Makenzy Orcel", "James Noël", "Jacques Stephen Alexis"],
    correct: 3
  },
  {
    q: "Quel ouvrage a été publié par Carl Brouard ?",
    options: ["L'Heure hybride", "Thérèse en mille morceaux", "Soleil à coudre", "Écrit sur du ruban rose"],
    correct: 3
  },
  {
    q: "Identifiez l'œuvre écrite par Dany Laferrière :",
    options: ["Fils de misère", "Restavec", "L'Odeur du café", "Le Fusil et la croix"],
    correct: 2
  },
  {
    q: "Quel livre porte la signature de Massillon Coicou ?",
    options: ["L'Odeur du café", "Les Immortelles", "Passions", "Le Livre d'Emma"],
    correct: 2
  },
  {
    q: "Quel titre figure dans la bibliographie de Jean-Claude Fignolé ?",
    options: ["Moi, Toussaint Louverture", "Le Qui-vive", "Choucoune", "Jacmel au crépuscule"],
    correct: 0
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Dany Laferrière ?",
    options: ["La Belle Amour humaine", "Vieilles chansons", "L'Odeur du café", "L'Alphabet des nuits"],
    correct: 2
  },
  {
    q: "Retrouvez l'auteur de « Francesca » parmi ces propositions :",
    options: ["Pradel Pompilus", "Demesvar Delorme", "Anténor Firmin", "Dany Laferrière"],
    correct: 1
  },
  {
    q: "Retrouvez l'auteur de « Le Mal de vivre » parmi ces propositions :",
    options: ["Nadine Magloire", "Demesvar Delorme", "Jacques Roumain", "Louis-Philippe Dalembert"],
    correct: 0
  },
  {
    q: "Quel titre figure dans la bibliographie de Frédéric Marcelin ?",
    options: ["Soleil à coudre", "Thémistocle-Épaminondas Labasterre", "L'Amour oui. La mort non", "Huit jours dans un no man's land"],
    correct: 1
  },
  {
    q: "Quel écrivain haïtien a écrit « La Bélière Caraïbe » ?",
    options: ["Anthony Phelps", "Kettly Mars", "Davertige", "Michel Soukar"],
    correct: 0
  },
  {
    q: "L'œuvre « Les Arbres musiciens » a été écrite par :",
    options: ["Makenzy Orcel", "Jacques Stephen Alexis", "Marie-Thérèse Colimon-Hall", "Marie-Célie Agnant"],
    correct: 1
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Comment faire l'amour avec un Nègre sans se fatiguer » ?",
    options: ["Josaphat-Robert Large", "Roussan Camille", "Georges Anglade", "Dany Laferrière"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Adieu, mon frère » ?",
    options: ["Edwidge Danticat", "Georges Anglade", "Jean Price-Mars", "Lyonel Trouillot"],
    correct: 0
  },
  {
    q: "Identifiez l'œuvre écrite par Georges Anglade :",
    options: ["Le Mât de cocagne", "De Saint-Domingue à Haïti", "Les Blancs de mémoire", "Textes interdits"],
    correct: 2
  },
  {
    q: "Le livre « Romulus » est dû à la plume de :",
    options: ["Fernand Hibbert", "Massillon Coicou", "René Depestre", "Jean-Claude Fignolé"],
    correct: 0
  },
  {
    q: "Historiquement, Jean-Claude Fignolé appartient à quel mouvement littéraire ?",
    options: ["Haïti Littéraire", "Réalisme merveilleux", "Génération de la Ronde", "Spiralisme"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Rêver debout » ?",
    options: ["Paula Clermont Péan", "Georges Sylvain", "Roland Morisseau", "Edwidge Danticat"],
    correct: 2
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Georges Castera ?",
    options: ["La Famille des Pitite-Caille", "Désirée Congo", "Passions", "Encre allègre"],
    correct: 3
  },
  {
    q: "Le livre « Comment faire l'amour avec un Nègre sans se fatiguer » est dû à la plume de :",
    options: ["Dany Laferrière", "René Depestre", "Pradel Pompilus", "Justin Lhérisson"],
    correct: 0
  },
  {
    q: "L'écrivain(e) Massillon Coicou est célèbre pour avoir publié :",
    options: ["Treize nouvelles vaudou", "Théâtre", "L'Empereur Dessalines", "Hadriana dans tous mes rêves"],
    correct: 2
  },
  {
    q: "Parmi ces titres, lequel est signé Anthony Phelps ?",
    options: ["Réflexions diverses sur Haïti", "Le bout du monde est une fenêtre", "Belle merveille", "Des fleurs pour les héros"],
    correct: 3
  },
  {
    q: "Quelle est l'œuvre de Edwidge Danticat parmi cette liste ?",
    options: ["Corps mêlés", "Adieu, mon frère", "La République d'Haïti et ses visiteurs", "Belle merveille"],
    correct: 1
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Théâtre » ?",
    options: ["Charles Moravia", "Évelyne Trouillot", "Syto Cavé", "Léon Laleau"],
    correct: 2
  },
  {
    q: "« La Plage des songes » est signé par quel auteur haïtien ?",
    options: ["Léon Laleau", "Marie Vieux-Chauvet", "Stanley Péan", "Edwidge Danticat"],
    correct: 2
  },
  {
    q: "« Le Mal de terre » est signé par quel auteur haïtien ?",
    options: ["René Depestre", "Placide David", "Georges Castera", "Paula Clermont Péan"],
    correct: 3
  },
  {
    q: "Identifiez l'œuvre écrite par Serge Legagneur :",
    options: ["Textes interdits", "Écrit sur du ruban rose", "Fonds des Nègres", "Saisons sauvages"],
    correct: 0
  },
  {
    q: "René Philoctète a notamment donné naissance à quelle œuvre ?",
    options: ["Le Peuple des terres mêlées", "Vers le sud", "Zombi Blues", "Le Trou du souffleur"],
    correct: 0
  },
  {
    q: "Quel ouvrage a été publié par Fernand Hibbert ?",
    options: ["L'Année Dessalines", "Les Thazar", "Jacmel au crépuscule", "Rêver debout"],
    correct: 1
  },
  {
    q: "« Bois d'ébène » a été publié(e) par quel écrivain haïtien ?",
    options: ["Davertige", "Georges Anglade", "René Depestre", "Jacques Roumain"],
    correct: 3
  },
  {
    q: "L'écrivain(e) Davertige est célèbre pour avoir publié :",
    options: ["Au pipirite chantant", "Ainsi parla l'oncle", "Silhouettes de nègres et de négrophiles", "Idem"],
    correct: 3
  },
  {
    q: "Quel titre figure dans la bibliographie de René Depestre ?",
    options: ["Douces déroutes", "Le Mât de cocagne", "Fils de misère", "Zoune chez sa ninnaine"],
    correct: 1
  },
  {
    q: "Parmi ces titres, lequel est signé Michel Soukar ?",
    options: ["Le Fusil et la croix", "Musa-Paidica", "Les Arbres musiciens", "Amour, Colère et Folie"],
    correct: 0
  },
  {
    q: "On doit à la plume de Gary Victor l'œuvre suivante :",
    options: ["Thérèse en mille morceaux", "Le Briseur de rosée", "Mère-Solitude", "Saison de porcs"],
    correct: 3
  },
  {
    q: "Le livre « La Belle Amour humaine » est dû à la plume de :",
    options: ["Josaphat-Robert Large", "Lyonel Trouillot", "René Depestre", "Jean-Robert Léonidas"],
    correct: 1
  },
  {
    q: "« Guillaume et Nathalie » est signé par quel auteur haïtien ?",
    options: ["Nadine Magloire", "Yanick Lahens", "Edwidge Danticat", "Makenzy Orcel"],
    correct: 1
  },
  {
    q: "« Le Sang et la Mer » est signé par quel auteur haïtien ?",
    options: ["Gary Victor", "Makenzy Orcel", "Émile Roumer", "Jean-Robert Léonidas"],
    correct: 0
  },
  {
    q: "« Écrivains haïtiens » est signé par quel auteur haïtien ?",
    options: ["Anthony Phelps", "Windsor Bellegarde", "Gérard Étienne", "Marie-Célie Agnant"],
    correct: 1
  },
  {
    q: "Davertige est notamment l'auteur(e) de :",
    options: ["Idem", "Des fleurs pour les héros", "Mur Méditerranée", "L'Année Dessalines"],
    correct: 0
  },
  {
    q: "Retrouvez l'auteur de « Le bout du monde est une fenêtre » parmi ces propositions :",
    options: ["Marie-Célie Agnant", "Emmelie Prophète", "Faubert Bolivar", "Ida Faubert"],
    correct: 1
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Marvin Victor ?",
    options: ["Douces déroutes", "Jacques Roche, la vie entière", "Dessalines ou le sang du Pont-Rouge", "Corps mêlés"],
    correct: 3
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Comment faire l'amour avec un Nègre sans se fatiguer » ?",
    options: ["Frankétienne", "Dany Laferrière", "Ida Faubert", "René Philoctète"],
    correct: 1
  },
  {
    q: "L'œuvre « Aube tranquille » a été écrite par :",
    options: ["Marie-Thérèse Colimon-Hall", "Josaphat-Robert Large", "Alibée Féry", "Jean-Claude Fignolé"],
    correct: 3
  },
  {
    q: "« Fils de misère » a été publié(e) par quel écrivain haïtien ?",
    options: ["Marie-Thérèse Colimon-Hall", "Gary Victor", "Michel Soukar", "Jean-Claude Charles"],
    correct: 0
  },
  {
    q: "« Manuel illustré d'histoire de la littérature haïtienne » est signé par quel auteur haïtien ?",
    options: ["Pradel Pompilus", "Jean-Robert Cadet", "Néhémy Pierre-Dahomey", "Louis-Philippe Dalembert"],
    correct: 0
  },
  {
    q: "Retrouvez l'auteur de « Ferdinand je suis à Paris » parmi ces propositions :",
    options: ["Anthony Phelps", "Syto Cavé", "Isnardin Vieux", "Jean-Claude Charles"],
    correct: 3
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Jean-Claude Charles ?",
    options: ["Ferdinand je suis à Paris", "Idem", "Clair de Manbo", "Passages"],
    correct: 0
  },
  {
    q: "Quel écrivain haïtien a écrit « Les Étrangers de la maison » ?",
    options: ["Josaphat-Robert Large", "Makenzy Orcel", "Jean-Euphèle Milcé", "Fernand Hibbert"],
    correct: 0
  },
  {
    q: "Quelle est l'œuvre de Jacques Stephen Alexis parmi cette liste ?",
    options: ["Les Arbres musiciens", "Rêver debout", "La Vengeance de Mama", "Le Qui-vive"],
    correct: 0
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Isnardin Vieux ?",
    options: ["Soleil à coudre", "Avant que les ombres s'effacent", "Le Roman de l'occupation", "Mûr à crever"],
    correct: 2
  },
  {
    q: "L'écrivain(e) Frankétienne est célèbre pour avoir publié :",
    options: ["Aube tranquille", "Passages", "Textes interdits", "L'Oiseau schizophone"],
    correct: 3
  },
  {
    q: "Quel nom d'auteur associez-vous à « Passages » ?",
    options: ["Émile Ollivier", "Edwidge Danticat", "Anthony Phelps", "Frédéric Marcelin"],
    correct: 0
  },
  {
    q: "« Anacaona » est signé par quel auteur haïtien ?",
    options: ["Liliane Devieux-Dehoux", "Serge Legagneur", "Louis Joseph Janvier", "Jean Métellus"],
    correct: 3
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Le Nègre crucifié » ?",
    options: ["Jean Métellus", "Gérard Étienne", "Jean-Claude Bajeux", "Joujou Turenne"],
    correct: 1
  },
  {
    q: "L'œuvre « Le Testament des solitudes » a été écrite par :",
    options: ["Emmelie Prophète", "Néhémy Pierre-Dahomey", "Frédéric Marcelin", "Kettly Mars"],
    correct: 0
  },
  {
    q: "« De Saint-Domingue à Haïti » compte parmi les œuvres de quel auteur ?",
    options: ["Jean Price-Mars", "Rodney Saint-Éloi", "Jean-Euphèle Milcé", "Émile Roumer"],
    correct: 0
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Passages » ?",
    options: ["Émile Ollivier", "Jacques Stephen Alexis", "Demesvar Delorme", "Antoine Innocent"],
    correct: 0
  },
  {
    q: "Identifiez l'œuvre écrite par Justin Lhérisson :",
    options: ["L'Odeur du café", "Ferdinand je suis à Paris", "La Blanche Négresse", "Zoune chez sa ninnaine"],
    correct: 3
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Restavec » ?",
    options: ["Davertige", "Jean-Robert Cadet", "Joujou Turenne", "Yanick Lahens"],
    correct: 1
  },
  {
    q: "On doit à la plume de Jean-Claude Charles l'œuvre suivante :",
    options: ["Une eau-forte", "Épisode de la Révolution", "L'Oiseau schizophone", "Ferdinand je suis à Paris"],
    correct: 3
  },
  {
    q: "Qui a publié le livre « Vers le sud » ?",
    options: ["Dany Laferrière", "Jean-Claude Charles", "Stanley Péan", "Anténor Firmin"],
    correct: 0
  },
  {
    q: "Quel titre figure dans la bibliographie de Marie Vieux-Chauvet ?",
    options: ["Le bout du monde est une fenêtre", "La Montagne ensorcelée", "Thémistocle-Épaminondas Labasterre", "Fille d'Haïti"],
    correct: 3
  },
  {
    q: "Qui a publié le livre « Adieu, mon frère » ?",
    options: ["Stanley Péan", "Marie Vieux-Chauvet", "Roland Morisseau", "Edwidge Danticat"],
    correct: 3
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Lyonel Trouillot ?",
    options: ["Gouverneurs de la rosée", "Soleil à coudre", "La Blanche Négresse", "Yanvalou pour Charlie"],
    correct: 3
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Émile Ollivier ?",
    options: ["Mère-Solitude", "Rires et Pleurs", "Épisode de la Révolution", "Passions"],
    correct: 0
  },
  {
    q: "Qui a publié le livre « Ultravocal » ?",
    options: ["Georges Anglade", "Serge Legagneur", "Frankétienne", "Tertulien Guilbaud"],
    correct: 2
  },
  {
    q: "Jean Price-Mars est identifié(e) à quel courant dans l'histoire littéraire d'Haïti ?",
    options: ["Génération de la Ronde", "Indigénisme", "Spiralisme", "Réalisme merveilleux"],
    correct: 1
  },
  {
    q: "Qui a publié le livre « Moi, Toussaint Louverture » ?",
    options: ["Roland Morisseau", "Anthony Phelps", "Demesvar Delorme", "Jean-Claude Fignolé"],
    correct: 3
  },
  {
    q: "« Poésies nationales » compte parmi les œuvres de quel auteur ?",
    options: ["Alibée Féry", "Massillon Coicou", "Suzanne Comhaire-Sylvain", "Jean-Robert Léonidas"],
    correct: 1
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Le Choc » ?",
    options: ["Jean Price-Mars", "Léon Laleau", "Jean-Claude Bajeux", "Louis-Philippe Dalembert"],
    correct: 1
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de René Depestre ?",
    options: ["La Famille des Pitite-Caille", "L'Amour oui. La mort non", "Pays sans chapeau", "Le Mât de cocagne"],
    correct: 3
  },
  {
    q: "« Mère-Solitude » a été publié(e) par quel écrivain haïtien ?",
    options: ["James Noël", "Émile Ollivier", "Charles Moravia", "Isnardin Vieux"],
    correct: 1
  },
  {
    q: "Parmi ces titres, lequel est signé Antoine Innocent ?",
    options: ["Le Reste du temps", "Mimola", "Fils de misère", "Les Immortelles"],
    correct: 1
  },
  {
    q: "Qui a publié le livre « Le Mal de vivre » ?",
    options: ["Émile Ollivier", "Demesvar Delorme", "Justin Lhérisson", "Nadine Magloire"],
    correct: 3
  },
  {
    q: "Quel label littéraire est le plus souvent accolé au nom de Davertige ?",
    options: ["Haïti Littéraire", "Réalisme merveilleux", "Indigénisme", "Génération de la Ronde"],
    correct: 0
  },
  {
    q: "Jacques Stephen Alexis a notamment donné naissance à quelle œuvre ?",
    options: ["Les Arbres musiciens", "Silhouettes de nègres et de négrophiles", "L'Année Dessalines", "Le Mal de terre"],
    correct: 0
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Cœur des Îles » ?",
    options: ["Serge Legagneur", "Isnardin Vieux", "Jean D'Amérique", "Ida Faubert"],
    correct: 3
  },
  {
    q: "Quel écrivain haïtien a écrit « La Récolte douce des larmes » ?",
    options: ["Edwidge Danticat", "Yanick Lahens", "Jacques Stephen Alexis", "Gérard Étienne"],
    correct: 0
  },
  {
    q: "« Les Thazar » est signé par quel auteur haïtien ?",
    options: ["Jacques Stephen Alexis", "Jean-Claude Charles", "Fernand Hibbert", "Windsor Bellegarde"],
    correct: 2
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Idem » ?",
    options: ["Ignace Nau", "Davertige", "Yanick Lahens", "Jean-Claude Fignolé"],
    correct: 1
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par René Depestre ?",
    options: ["Le Manuscrit de mon ami", "Le Mal de vivre", "Un Arc-en-ciel pour l'occident chrétien", "Maître-Minuit"],
    correct: 2
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Le Mal de terre » ?",
    options: ["Évelyne Trouillot", "Paula Clermont Péan", "Demesvar Delorme", "Néhémy Pierre-Dahomey"],
    correct: 1
  },
  {
    q: "L'œuvre « Krik? Krak! » a été écrite par :",
    options: ["Jacques Stephen Alexis", "Dany Laferrière", "Etzer Vilaire", "Edwidge Danticat"],
    correct: 3
  },
  {
    q: "Quel livre porte la signature de Alibée Féry ?",
    options: ["Musa-Paidica", "Le Qui-vive", "Écrivains haïtiens", "Au pipirite chantant"],
    correct: 0
  },
  {
    q: "L'œuvre « Romancero aux étoiles » a été écrite par :",
    options: ["Jacques Stephen Alexis", "Anthony Phelps", "Fernand Hibbert", "Fresnel Sylvestre"],
    correct: 0
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Le Conditionnel » ?",
    options: ["Edwidge Danticat", "Jean-Claude Bajeux", "Anthony Phelps", "Dany Laferrière"],
    correct: 2
  },
  {
    q: "Ida Faubert est notamment l'auteur(e) de :",
    options: ["Fils de misère", "Nouveaux poèmes", "Cœur des Îles", "Yanvalou pour Charlie"],
    correct: 2
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Clair de Manbo » ?",
    options: ["Justin Chrysostome Dorsainvil", "Faubert Bolivar", "Gary Victor", "Jean-Robert Cadet"],
    correct: 2
  },
  {
    q: "Quel nom d'auteur associez-vous à « Passions » ?",
    options: ["Windsor Bellegarde", "Isnardin Vieux", "Massillon Coicou", "Fresnel Sylvestre"],
    correct: 2
  },
  {
    q: "Quel nom d'auteur associez-vous à « Les Villages de Dieu » ?",
    options: ["Emmelie Prophète", "Évelyne Trouillot", "Marie-Thérèse Colimon-Hall", "Etzer Vilaire"],
    correct: 0
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Les Villages de Dieu » ?",
    options: ["Marie-Thérèse Colimon-Hall", "Léon Laleau", "Emmelie Prophète", "Tertulien Guilbaud"],
    correct: 2
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Mûr à crever » ?",
    options: ["Jean-Robert Cadet", "Syto Cavé", "Gérard Étienne", "Frankétienne"],
    correct: 3
  },
  {
    q: "Quel nom d'auteur associez-vous à « Rapatriés » ?",
    options: ["Jacques Roumain", "Néhémy Pierre-Dahomey", "René Philoctète", "Fresnel Sylvestre"],
    correct: 1
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Etzer Vilaire ?",
    options: ["Les Dix hommes noirs", "Moi, Toussaint Louverture", "Mère-Solitude", "Jacmel au crépuscule"],
    correct: 0
  },
  {
    q: "Quel titre figure dans la bibliographie de Georges Castera ?",
    options: ["Encre allègre", "Comment faire l'amour avec un Nègre sans se fatiguer", "Jacmel au crépuscule", "La Vocation de l'élite"],
    correct: 0
  },
  {
    q: "Quel ouvrage a été publié par Liliane Devieux-Dehoux ?",
    options: ["Bois d'ébène", "L'Amour oui. La mort non", "Zombi Blues", "La République d'Haïti et ses visiteurs"],
    correct: 1
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Jean Métellus ?",
    options: ["Une eau-forte", "Fils de misère", "Réflexions diverses sur Haïti", "Écrivains haïtiens"],
    correct: 0
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Carl Brouard ?",
    options: ["Contes et légendes d'Haïti", "Écrit sur du ruban rose", "Les Fantoches", "Mère-Solitude"],
    correct: 1
  },
  {
    q: "Le livre « Rosalie l'infâme » est dû à la plume de :",
    options: ["Évelyne Trouillot", "Dany Laferrière", "Cléante Valcin", "Jacques Stephen Alexis"],
    correct: 0
  },
  {
    q: "Jean-Claude Fignolé figure parmi les représentants de quel mouvement ?",
    options: ["Spiralisme", "Réalisme merveilleux", "Indigénisme", "Génération de la Ronde"],
    correct: 0
  },
  {
    q: "Parmi ces titres, lequel est signé Roland Morisseau ?",
    options: ["Hadriana dans tous mes rêves", "Je suis vivant", "Rêver debout", "Le Mal de terre"],
    correct: 2
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Justin Chrysostome Dorsainvil ?",
    options: ["Rapatriés", "Ultravocal", "Manuel illustré d'histoire de la littérature haïtienne", "Manuel d'histoire d'Haïti"],
    correct: 3
  },
  {
    q: "Quel nom d'auteur associez-vous à « La Danse sur le volcan » ?",
    options: ["Marie Vieux-Chauvet", "Windsor Bellegarde", "Hénock Trouillot", "Léon Laleau"],
    correct: 0
  },
  {
    q: "De quelle plume est issue l'œuvre « Le Trou du souffleur » ?",
    options: ["Fernand Hibbert", "James Noël", "Jean-Euphèle Milcé", "Georges Castera"],
    correct: 3
  },
  {
    q: "Identifiez l'œuvre écrite par Ida Faubert :",
    options: ["Une somme humaine", "Sous le soleil d'Haïti", "La Danse sur le volcan", "Les Étrangers de la maison"],
    correct: 1
  },
  {
    q: "« Mûr à crever » a été publié(e) par quel écrivain haïtien ?",
    options: ["Frankétienne", "Jacques Stephen Alexis", "René Depestre", "Marvin Victor"],
    correct: 0
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Pages retrouvées » ?",
    options: ["Carl Brouard", "Jacques Stephen Alexis", "Jean-Euphèle Milcé", "Jean-Claude Charles"],
    correct: 0
  },
  {
    q: "L'œuvre « Fille d'Haïti » a été écrite par :",
    options: ["Marvin Victor", "Marie Vieux-Chauvet", "Georges Anglade", "Frédéric Marcelin"],
    correct: 1
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Dany Laferrière ?",
    options: ["Compère Général Soleil", "Idem", "Impasse Dignité", "L'Odeur du café"],
    correct: 3
  },
  {
    q: "« De l'égalité des races humaines » compte parmi les œuvres de quel auteur ?",
    options: ["Anténor Firmin", "Georges Castera", "Georges Sylvain", "Jean-Claude Fignolé"],
    correct: 0
  },
  {
    q: "« Alléluia pour une femme-jardin » a été publié(e) par quel écrivain haïtien ?",
    options: ["Jean-Claude Bajeux", "René Depestre", "Pradel Pompilus", "Fresnel Sylvestre"],
    correct: 1
  },
  {
    q: "L'écrivain(e) Yanick Lahens est célèbre pour avoir publié :",
    options: ["Rires et Pleurs", "Passions", "Guillaume et Nathalie", "Le Nègre crucifié"],
    correct: 2
  },
  {
    q: "Quel écrivain haïtien a écrit « Nouveaux poèmes » ?",
    options: ["Etzer Vilaire", "Marie-Thérèse Colimon-Hall", "Émile Ollivier", "Cléante Valcin"],
    correct: 0
  },
  {
    q: "L'écrivain(e) Frédéric Marcelin est célèbre pour avoir publié :",
    options: ["Les Thazar", "Vieilles chansons", "La Vengeance de Mama", "Assaut à la nuit"],
    correct: 2
  },
  {
    q: "Dans quel grand mouvement littéraire s'inscrit Davertige ?",
    options: ["Spiralisme", "Haïti Littéraire", "Génération de la Ronde", "Réalisme merveilleux"],
    correct: 1
  },
  {
    q: "Le livre « Musique nègre » est dû à la plume de :",
    options: ["Léon Laleau", "Jean D'Amérique", "Anthony Phelps", "Fernand Hibbert"],
    correct: 0
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Bois d'ébène » ?",
    options: ["Jacques Roumain", "Gary Klang", "Jean-Claude Charles", "Marie-Alice Théard"],
    correct: 0
  },
  {
    q: "Retrouvez l'auteur de « L'Empereur Dessalines » parmi ces propositions :",
    options: ["Georges Sylvain", "Faubert Bolivar", "Léon Laleau", "Massillon Coicou"],
    correct: 3
  },
  {
    q: "Quelle école littéraire haïtienne est représentée par Jean Price-Mars ?",
    options: ["Indigénisme", "Réalisme merveilleux", "Génération de la Ronde", "Haïti Littéraire"],
    correct: 0
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Gary Victor ?",
    options: ["Épisode de la Révolution", "Rêver debout", "Les Immortelles", "Clair de Manbo"],
    correct: 3
  },
  {
    q: "« L'Alphabet des nuits » est signé par quel auteur haïtien ?",
    options: ["Isnardin Vieux", "Jean-Euphèle Milcé", "Demesvar Delorme", "Jean Métellus"],
    correct: 1
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Le Manuscrit de mon ami » ?",
    options: ["Marie-Célie Agnant", "Fresnel Sylvestre", "Fernand Hibbert", "Charles Moravia"],
    correct: 2
  },
  {
    q: "« L'Espace d'un cillement » est signé par quel auteur haïtien ?",
    options: ["Justin Chrysostome Dorsainvil", "Paula Clermont Péan", "Jacques Stephen Alexis", "Ida Faubert"],
    correct: 2
  },
  {
    q: "« Ferdinand je suis à Paris » est signé par quel auteur haïtien ?",
    options: ["Marvin Victor", "Jean-Claude Charles", "Antoine Innocent", "Davertige"],
    correct: 1
  },
  {
    q: "Massillon Coicou est notamment l'auteur(e) de :",
    options: ["Anacaona", "Thémistocle-Épaminondas Labasterre", "Poésies nationales", "Île à vau-l'eau"],
    correct: 2
  },
  {
    q: "Parmi ces titres, lequel est signé Marie Vieux-Chauvet ?",
    options: ["Adieu, mon frère", "Amour, Colère et Folie", "Textes interdits", "Cœur des Îles"],
    correct: 1
  },
  {
    q: "Gérard Étienne est notamment l'auteur(e) de :",
    options: ["Le Briseur de rosée", "Romancero aux étoiles", "Le Nègre crucifié", "Le Livre d'Emma"],
    correct: 2
  },
  {
    q: "Quel ouvrage a été publié par Jean-Euphèle Milcé ?",
    options: ["L'Héritage colonial en Haïti", "Des fleurs pour les héros", "L'Alphabet des nuits", "La Vengeance de Mama"],
    correct: 2
  },
  {
    q: "Identifiez l'œuvre écrite par Faubert Bolivar :",
    options: ["L'Héritage colonial en Haïti", "La Blanche Négresse", "Rue Frontière", "Bain de lune"],
    correct: 2
  },
  {
    q: "On doit à la plume de Demesvar Delorme l'œuvre suivante :",
    options: ["La Vocation de l'élite", "Réflexions diverses sur Haïti", "Haïti kenbe la !", "Le Testament des solitudes"],
    correct: 1
  },
  {
    q: "De quelle plume est issue l'œuvre « Le Testament des solitudes » ?",
    options: ["Faubert Bolivar", "Emmelie Prophète", "Jacques Stephen Alexis", "Syto Cavé"],
    correct: 1
  },
  {
    q: "Quel nom d'auteur associez-vous à « Treize nouvelles vaudou » ?",
    options: ["Hénock Trouillot", "Gary Victor", "Makenzy Orcel", "Yanick Lahens"],
    correct: 1
  },
  {
    q: "Quel écrivain haïtien a écrit « La Blanche Négresse » ?",
    options: ["Roussan Camille", "Antoine Innocent", "Cléante Valcin", "Justin Chrysostome Dorsainvil"],
    correct: 2
  },
  {
    q: "« Passages » est signé par quel auteur haïtien ?",
    options: ["Jean-Euphèle Milcé", "Jean-Claude Charles", "Émile Ollivier", "Frédéric Marcelin"],
    correct: 2
  },
  {
    q: "« Frayeur » compte parmi les œuvres de quel auteur ?",
    options: ["James Noël", "Kettly Mars", "Georges Anglade", "Roussan Camille"],
    correct: 1
  },
  {
    q: "Quel nom d'auteur associez-vous à « Le bout du monde est une fenêtre » ?",
    options: ["Emmelie Prophète", "Oswald Durand", "Léon Laleau", "Rodney Saint-Éloi"],
    correct: 0
  },
  {
    q: "Quel écrivain haïtien a écrit « Ferdinand je suis à Paris » ?",
    options: ["Davertige", "Marie-Célie Agnant", "Rodney Saint-Éloi", "Jean-Claude Charles"],
    correct: 3
  },
  {
    q: "Quel nom d'auteur associez-vous à « Assaut à la nuit » ?",
    options: ["Georges Anglade", "Roussan Camille", "Stanley Péan", "Léon Laleau"],
    correct: 1
  },
  {
    q: "On doit à la plume de Kettly Mars l'œuvre suivante :",
    options: ["Le Manuscrit de mon ami", "Saisons sauvages", "Les Blancs de mémoire", "Les Rapaces"],
    correct: 1
  },
  {
    q: "L'écrivain(e) Jacques Stephen Alexis est célèbre pour avoir publié :",
    options: ["L'Héritage colonial en Haïti", "Amour, Colère et Folie", "Huit jours dans un no man's land", "Les Arbres musiciens"],
    correct: 3
  },
  {
    q: "Le livre « Le Testament des solitudes » est dû à la plume de :",
    options: ["Évelyne Trouillot", "Joujou Turenne", "Carl Brouard", "Emmelie Prophète"],
    correct: 3
  },
  {
    q: "Quel livre porte la signature de Jean-Claude Fignolé ?",
    options: ["Aube tranquille", "Les Villages de Dieu", "Guillaume et Nathalie", "La mémoire aux abois"],
    correct: 0
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Makenzy Orcel ?",
    options: ["Poésies nationales", "L'Ombre animale", "Le Mal de vivre", "Sous le soleil d'Haïti"],
    correct: 1
  },
  {
    q: "De quelle plume est issue l'œuvre « Le Rond-point » ?",
    options: ["Émile Roumer", "Évelyne Trouillot", "Jean-Euphèle Milcé", "Demesvar Delorme"],
    correct: 1
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Moi, fardeau inhérent » ?",
    options: ["Emmelie Prophète", "Pradel Pompilus", "Guy Régis Jr", "Windsor Bellegarde"],
    correct: 2
  },
  {
    q: "Parmi ces titres, lequel est signé Marie-Célie Agnant ?",
    options: ["Bicentenaire", "Le Manuscrit de mon ami", "Le Livre d'Emma", "Les Thazar"],
    correct: 2
  },
  {
    q: "Quel livre porte la signature de Kettly Mars ?",
    options: ["L'Empereur Dessalines", "L'Heure hybride", "La Couleur de l'aube", "Les Thazar"],
    correct: 1
  },
  {
    q: "« Zombi Blues » a été publié(e) par quel écrivain haïtien ?",
    options: ["Massillon Coicou", "Lyonel Trouillot", "Stanley Péan", "Roussan Camille"],
    correct: 2
  },
  {
    q: "Quel titre figure dans la bibliographie de Edwidge Danticat ?",
    options: ["Rhapsodie sale", "Le Cri de l'oiseau rouge", "Thémistocle-Épaminondas Labasterre", "La Blanche Négresse"],
    correct: 1
  },
  {
    q: "Identifiez l'œuvre écrite par Louis-Philippe Dalembert :",
    options: ["La Blanche Négresse", "Jacques Roche, la vie entière", "Milwaukee Blues", "Le Sang et la Mer"],
    correct: 2
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Le Fusil et la croix » ?",
    options: ["Massillon Coicou", "Michel Soukar", "Demesvar Delorme", "Marie-Alice Théard"],
    correct: 1
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « La Dot de Sara » ?",
    options: ["Frankétienne", "Jean Métellus", "Marie-Célie Agnant", "Fernand Hibbert"],
    correct: 2
  },
  {
    q: "Gary Victor est notamment l'auteur(e) de :",
    options: ["Alléluia pour une femme-jardin", "Bicentenaire", "Saison de porcs", "Moi, Toussaint Louverture"],
    correct: 2
  },
  {
    q: "Retrouvez l'auteur de « La Vengeance de Mama » parmi ces propositions :",
    options: ["Emmelie Prophète", "Jean-Claude Charles", "Frédéric Marcelin", "Ida Faubert"],
    correct: 2
  },
  {
    q: "Qui a publié le livre « La Vengeance de Mama » ?",
    options: ["Frédéric Marcelin", "Demesvar Delorme", "Windsor Bellegarde", "Néhémy Pierre-Dahomey"],
    correct: 0
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Manuel illustré d'histoire de la littérature haïtienne » ?",
    options: ["Josaphat-Robert Large", "Émile Roumer", "Joujou Turenne", "Pradel Pompilus"],
    correct: 3
  },
  {
    q: "L'écrivain(e) Emmelie Prophète est célèbre pour avoir publié :",
    options: ["Ces îles qui marchent", "Assaut à la nuit", "Le Testament des solitudes", "Maître-Minuit"],
    correct: 2
  },
  {
    q: "Quel écrivain haïtien a écrit « Île à vau-l'eau » ?",
    options: ["Marie Vieux-Chauvet", "Nadine Magloire", "Rodney Saint-Éloi", "Jean-Robert Léonidas"],
    correct: 3
  },
  {
    q: "À qui doit-on l'œuvre littéraire « L'Énigme du retour » ?",
    options: ["Dany Laferrière", "Anténor Firmin", "Emmelie Prophète", "Suzanne Comhaire-Sylvain"],
    correct: 0
  },
  {
    q: "L'écrivain Jean-Claude Fignolé est souvent associé(e) au mouvement :",
    options: ["Génération de la Ronde", "Spiralisme", "Haïti Littéraire", "Indigénisme"],
    correct: 1
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Émile Roumer ?",
    options: ["Poèmes d'Haïti et de France", "Bois d'ébène", "L'Autre Face de la mer", "Milwaukee Blues"],
    correct: 0
  },
  {
    q: "« Séna » compte parmi les œuvres de quel auteur ?",
    options: ["Louis Joseph Janvier", "Fernand Hibbert", "Suzanne Comhaire-Sylvain", "Marie-Célie Agnant"],
    correct: 1
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Une somme humaine » ?",
    options: ["Makenzy Orcel", "Marie-Thérèse Colimon-Hall", "Oswald Durand", "Marie Vieux-Chauvet"],
    correct: 0
  },
  {
    q: "À qui doit-on l'œuvre littéraire « L'Alphabet des nuits » ?",
    options: ["Jean-Euphèle Milcé", "Etzer Vilaire", "Cléante Valcin", "Yanick Lahens"],
    correct: 0
  },
  {
    q: "L'écrivain Anthony Phelps est souvent associé(e) au mouvement :",
    options: ["Haïti Littéraire", "Réalisme merveilleux", "Spiralisme", "Indigénisme"],
    correct: 0
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Jean-Claude Fignolé ?",
    options: ["Les Possédés de la pleine lune", "Compère Général Soleil", "La Bélière Caraïbe", "Maître-Minuit"],
    correct: 0
  },
  {
    q: "Quel écrivain haïtien a écrit « Le Choc » ?",
    options: ["Léon Laleau", "Gérard Étienne", "Roussan Camille", "Paula Clermont Péan"],
    correct: 0
  },
  {
    q: "Dans le paysage des lettres haïtiennes, Léon Laleau incarne quel mouvement ?",
    options: ["Indigénisme", "Génération de la Ronde", "Réalisme merveilleux", "Spiralisme"],
    correct: 0
  },
  {
    q: "Quel écrivain haïtien a écrit « L'Espace d'un cillement » ?",
    options: ["Roussan Camille", "Jacques Stephen Alexis", "Marie-Célie Agnant", "Jean-Euphèle Milcé"],
    correct: 1
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de René Philoctète ?",
    options: ["Clair de Manbo", "Zombi Blues", "Ces îles qui marchent", "Rue des pas perdus"],
    correct: 2
  },
  {
    q: "« Au pipirite chantant » a été publié(e) par quel écrivain haïtien ?",
    options: ["Windsor Bellegarde", "Alibée Féry", "Rodney Saint-Éloi", "Jean Métellus"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Encre allègre » ?",
    options: ["Tertulien Guilbaud", "René Philoctète", "Georges Castera", "René Depestre"],
    correct: 2
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Edwidge Danticat ?",
    options: ["Choucoune", "La Crête-à-Pierrot", "L'Alphabet des nuits", "Le Briseur de rosée"],
    correct: 3
  },
  {
    q: "Quel écrivain haïtien a écrit « Passions » ?",
    options: ["Liliane Devieux-Dehoux", "James Noël", "Jean-Robert Cadet", "Massillon Coicou"],
    correct: 3
  },
  {
    q: "Quel ouvrage a été publié par Gary Victor ?",
    options: ["Vers le sud", "Treize nouvelles vaudou", "Romancero aux étoiles", "Kasalé"],
    correct: 1
  },
  {
    q: "Historiquement, Léon Laleau appartient à quel mouvement littéraire ?",
    options: ["Spiralisme", "Indigénisme", "Réalisme merveilleux", "Génération de la Ronde"],
    correct: 1
  },
  {
    q: "Quel ouvrage a été publié par Jacques Stephen Alexis ?",
    options: ["La mémoire aux abois", "Romancero aux étoiles", "Soleil à coudre", "Impasse Dignité"],
    correct: 1
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Edwidge Danticat ?",
    options: ["Ferdinand je suis à Paris", "Le Briseur de rosée", "Silhouettes de nègres et de négrophiles", "Romulus"],
    correct: 1
  },
  {
    q: "L'œuvre « Rosalie l'infâme » a été écrite par :",
    options: ["James Noël", "Évelyne Trouillot", "Makenzy Orcel", "Gary Klang"],
    correct: 1
  },
  {
    q: "Quelle est l'œuvre de Jean-Robert Léonidas parmi cette liste ?",
    options: ["Yanvalou pour Charlie", "L'Héritage colonial en Haïti", "Île à vau-l'eau", "L'Heure hybride"],
    correct: 2
  },
  {
    q: "René Depestre est notamment l'auteur(e) de :",
    options: ["Les Thazar", "La République d'Haïti et ses visiteurs", "Clair de Manbo", "Un Arc-en-ciel pour l'occident chrétien"],
    correct: 3
  },
  {
    q: "Identifiez l'œuvre écrite par Josaphat-Robert Large :",
    options: ["Les Étrangers de la maison", "Zombi Blues", "Le Rond-point", "Mère-Solitude"],
    correct: 0
  },
  {
    q: "Quel nom d'auteur associez-vous à « Silhouettes de nègres et de négrophiles » ?",
    options: ["Jean Price-Mars", "Michel Soukar", "Yanick Lahens", "Nadine Magloire"],
    correct: 0
  },
  {
    q: "« La République d'Haïti et ses visiteurs » a été publié(e) par quel écrivain haïtien ?",
    options: ["Louis Joseph Janvier", "Gary Victor", "Justin Chrysostome Dorsainvil", "Jean-Claude Fignolé"],
    correct: 0
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Les Immortelles » ?",
    options: ["Makenzy Orcel", "Etzer Vilaire", "Émile Roumer", "Isnardin Vieux"],
    correct: 0
  },
  {
    q: "Quel écrivain haïtien a écrit « Soleil à coudre » ?",
    options: ["Emmelie Prophète", "Jean-Euphèle Milcé", "Jean D'Amérique", "Néhémy Pierre-Dahomey"],
    correct: 2
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Une eau-forte » ?",
    options: ["Jean Métellus", "Isnardin Vieux", "Fresnel Sylvestre", "Faubert Bolivar"],
    correct: 0
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Une somme humaine » ?",
    options: ["Edwidge Danticat", "Josaphat-Robert Large", "Louis-Philippe Dalembert", "Makenzy Orcel"],
    correct: 3
  },
  {
    q: "Le livre « Impasse Dignité » est dû à la plume de :",
    options: ["Isnardin Vieux", "Emmelie Prophète", "Gary Victor", "Léon Laleau"],
    correct: 1
  },
  {
    q: "Retrouvez l'auteur de « L'Année Dessalines » parmi ces propositions :",
    options: ["Massillon Coicou", "Antoine Innocent", "Jean Métellus", "Liliane Devieux-Dehoux"],
    correct: 2
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Jacques Roche, la vie entière » ?",
    options: ["Rodney Saint-Éloi", "Georges Anglade", "Windsor Bellegarde", "Carl Brouard"],
    correct: 0
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Léon Laleau ?",
    options: ["L'Espace d'un cillement", "Manuel illustré d'histoire de la littérature haïtienne", "Le Choc", "La Montagne ensorcelée"],
    correct: 2
  },
  {
    q: "Jean D'Amérique a notamment donné naissance à quelle œuvre ?",
    options: ["Soleil à coudre", "Un amour à trois temps", "Maître-Minuit", "Passages"],
    correct: 0
  },
  {
    q: "On doit à la plume de Jean D'Amérique l'œuvre suivante :",
    options: ["Soleil à coudre", "Le Mal de vivre", "Contes et légendes d'Haïti", "La Montagne ensorcelée"],
    correct: 0
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Le bout du monde est une fenêtre » ?",
    options: ["Makenzy Orcel", "Faubert Bolivar", "Emmelie Prophète", "Jean-Euphèle Milcé"],
    correct: 2
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Cœur des Îles » ?",
    options: ["Ida Faubert", "Hénock Trouillot", "Jean-Claude Bajeux", "Émile Ollivier"],
    correct: 0
  },
  {
    q: "L'écrivain(e) Émile Ollivier est célèbre pour avoir publié :",
    options: ["Séna", "Comment faire l'amour avec un Nègre sans se fatiguer", "Mère-Solitude", "Silhouettes de nègres et de négrophiles"],
    correct: 2
  },
  {
    q: "« Kasalé » compte parmi les œuvres de quel auteur ?",
    options: ["Edwidge Danticat", "René Philoctète", "Émile Roumer", "Kettly Mars"],
    correct: 3
  },
  {
    q: "Identifiez l'œuvre écrite par Windsor Bellegarde :",
    options: ["La Vocation de l'élite", "Écrivains haïtiens", "Guillaume et Nathalie", "Rapatriés"],
    correct: 1
  },
  {
    q: "Emmelie Prophète est notamment l'auteur(e) de :",
    options: ["Au pipirite chantant", "Les Possédés de la pleine lune", "Impasse Dignité", "Douces déroutes"],
    correct: 2
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « La Belle Amour humaine » ?",
    options: ["Lyonel Trouillot", "Georges Sylvain", "Joujou Turenne", "Anténor Firmin"],
    correct: 0
  },
  {
    q: "Hénock Trouillot a notamment donné naissance à quelle œuvre ?",
    options: ["Dezafi", "Dessalines ou le sang du Pont-Rouge", "Le Testament des solitudes", "La République d'Haïti et ses visiteurs"],
    correct: 1
  },
  {
    q: "Retrouvez l'auteur de « Les Dix hommes noirs » parmi ces propositions :",
    options: ["Marie-Célie Agnant", "Georges Anglade", "Demesvar Delorme", "Etzer Vilaire"],
    correct: 3
  },
  {
    q: "« Mosochwazi Kout Fè » a été publié(e) par quel écrivain haïtien ?",
    options: ["Jean-Claude Bajeux", "Josaphat-Robert Large", "Michel Soukar", "Jean-Claude Fignolé"],
    correct: 0
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Georges Castera ?",
    options: ["Le Trou du souffleur", "Moi, Toussaint Louverture", "Fille d'Haïti", "Romulus"],
    correct: 0
  },
  {
    q: "Quel écrivain haïtien a écrit « Ces îles qui marchent » ?",
    options: ["Serge Legagneur", "Stanley Péan", "Carl Brouard", "René Philoctète"],
    correct: 3
  },
  {
    q: "Qui a publié le livre « Frayeur » ?",
    options: ["Roussan Camille", "Néhémy Pierre-Dahomey", "Kettly Mars", "Jacques Stephen Alexis"],
    correct: 2
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Les Possédés de la pleine lune » ?",
    options: ["James Noël", "Jean-Claude Fignolé", "Louis-Philippe Dalembert", "Anténor Firmin"],
    correct: 1
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Gary Victor ?",
    options: ["À l'angle des rues parallèles", "L'Ombre animale", "Sous le soleil d'Haïti", "Rêver debout"],
    correct: 0
  },
  {
    q: "Charles Moravia a notamment donné naissance à quelle œuvre ?",
    options: ["Impasse Dignité", "Ainsi parla l'oncle", "L'Héritage colonial en Haïti", "La Crête-à-Pierrot"],
    correct: 3
  },
  {
    q: "Cléante Valcin a notamment donné naissance à quelle œuvre ?",
    options: ["Bain de lune", "Le Livre d'Emma", "La Blanche Négresse", "Zombi Blues"],
    correct: 2
  },
  {
    q: "Jacques Stephen Alexis figure parmi les représentants de quel mouvement ?",
    options: ["Spiralisme", "Haïti Littéraire", "Réalisme merveilleux", "Indigénisme"],
    correct: 2
  },
  {
    q: "Identifiez l'œuvre écrite par Léon Laleau :",
    options: ["Encre allègre", "Francesca", "Musique nègre", "Rosalie l'infâme"],
    correct: 2
  },
  {
    q: "« Le Testament des solitudes » a été publié(e) par quel écrivain haïtien ?",
    options: ["Carl Brouard", "Edwidge Danticat", "Emmelie Prophète", "Jacques Roumain"],
    correct: 2
  },
  {
    q: "Le livre « La République d'Haïti et ses visiteurs » est dû à la plume de :",
    options: ["Kettly Mars", "Louis Joseph Janvier", "James Noël", "Gary Victor"],
    correct: 1
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Alléluia pour une femme-jardin » ?",
    options: ["Évelyne Trouillot", "Jean Price-Mars", "René Depestre", "Ignace Nau"],
    correct: 2
  },
  {
    q: "À qui doit-on l'œuvre littéraire « À l'angle des rues parallèles » ?",
    options: ["Gary Victor", "Marie-Célie Agnant", "Léon Laleau", "Néhémy Pierre-Dahomey"],
    correct: 0
  },
  {
    q: "Le livre « Cric? Crac! » est dû à la plume de :",
    options: ["Liliane Devieux-Dehoux", "Léon Laleau", "Jacques Stephen Alexis", "Georges Sylvain"],
    correct: 3
  },
  {
    q: "Le livre « Au pipirite chantant » est dû à la plume de :",
    options: ["Jean Métellus", "Emmelie Prophète", "Syto Cavé", "Lyonel Trouillot"],
    correct: 0
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Corps mêlés » ?",
    options: ["Jacques Stephen Alexis", "Marvin Victor", "Carl Brouard", "Marie-Alice Théard"],
    correct: 1
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Émile Ollivier ?",
    options: ["La Récolte douce des larmes", "Rires et Pleurs", "Soleil à coudre", "Mère-Solitude"],
    correct: 3
  },
  {
    q: "Parmi ces titres, lequel est signé James Noël ?",
    options: ["Boulevard Baie des Anges", "Belle merveille", "Douces déroutes", "L'Ombre animale"],
    correct: 1
  },
  {
    q: "On doit à la plume de Roussan Camille l'œuvre suivante :",
    options: ["Assaut à la nuit", "Musa-Paidica", "Le Sang et la Mer", "Île à vau-l'eau"],
    correct: 0
  },
  {
    q: "L'œuvre « La Danse sur le volcan » a été écrite par :",
    options: ["Gary Klang", "Marie Vieux-Chauvet", "Oswald Durand", "Jean-Claude Bajeux"],
    correct: 1
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Jacques Roumain ?",
    options: ["Treize nouvelles vaudou", "Rapatriés", "Mur Méditerranée", "Les Fantoches"],
    correct: 3
  },
  {
    q: "Identifiez l'œuvre écrite par Paula Clermont Péan :",
    options: ["Mosochwazi Kout Fè", "Le Mal de terre", "Le Sang et la Mer", "Ferdinand je suis à Paris"],
    correct: 1
  },
  {
    q: "On doit à la plume de Suzanne Comhaire-Sylvain l'œuvre suivante :",
    options: ["Vers le sud", "Les Contes haïtiens", "Le Reste du temps", "Treize nouvelles vaudou"],
    correct: 1
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Massillon Coicou ?",
    options: ["Corps mêlés", "Contes et légendes d'Haïti", "Poésies nationales", "Comment faire l'amour avec un Nègre sans se fatiguer"],
    correct: 2
  },
  {
    q: "Retrouvez l'auteur de « Dessalines ou le sang du Pont-Rouge » parmi ces propositions :",
    options: ["Louis-Philippe Dalembert", "Roussan Camille", "James Noël", "Hénock Trouillot"],
    correct: 3
  },
  {
    q: "Georges Sylvain est notamment l'auteur(e) de :",
    options: ["Cric? Crac!", "La Famille des Pitite-Caille", "Le Nègre crucifié", "L'Amour oui. La mort non"],
    correct: 0
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Gary Klang ?",
    options: ["Clair de Manbo", "Haïti, terre mystique", "Mon pays que voici", "Théâtre"],
    correct: 1
  },
  {
    q: "Parmi ces titres, lequel est signé Edwidge Danticat ?",
    options: ["Krik? Krak!", "Bicentenaire", "Bonjour et adieu à la négritude", "Ainsi parla l'oncle"],
    correct: 0
  },
  {
    q: "L'œuvre « L'Énigme du retour » a été écrite par :",
    options: ["Dany Laferrière", "Néhémy Pierre-Dahomey", "Paula Clermont Péan", "Anthony Phelps"],
    correct: 0
  },
  {
    q: "Le livre « Moi, fardeau inhérent » est dû à la plume de :",
    options: ["Marie Vieux-Chauvet", "Gérard Étienne", "Jean D'Amérique", "Guy Régis Jr"],
    correct: 3
  },
  {
    q: "Quel écrivain haïtien a écrit « Hadriana dans tous mes rêves » ?",
    options: ["René Philoctète", "Gary Klang", "René Depestre", "Frankétienne"],
    correct: 2
  },
  {
    q: "Quelle est l'œuvre de Kettly Mars parmi cette liste ?",
    options: ["La Crête-à-Pierrot", "Francesca", "Haïti kenbe la !", "Frayeur"],
    correct: 3
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Jean D'Amérique ?",
    options: ["Zombi Blues", "Cœur des Îles", "Ferdinand je suis à Paris", "Rhapsodie sale"],
    correct: 3
  },
  {
    q: "Quel ouvrage a été publié par Oswald Durand ?",
    options: ["Un amour à trois temps", "Les Fantoches", "Choucoune", "Le Briseur de rosée"],
    correct: 2
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Le Mât de cocagne » ?",
    options: ["René Depestre", "Cléante Valcin", "Anténor Firmin", "Fernand Hibbert"],
    correct: 0
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Dany Laferrière ?",
    options: ["Contes et légendes d'Haïti", "Rue des pas perdus", "L'Énigme du retour", "Dezafi"],
    correct: 2
  },
  {
    q: "Quel livre porte la signature de Emmelie Prophète ?",
    options: ["Alléluia pour une femme-jardin", "La Dot de Sara", "Le Reste du temps", "Moi, Toussaint Louverture"],
    correct: 2
  },
  {
    q: "L'écrivain(e) Josaphat-Robert Large est célèbre pour avoir publié :",
    options: ["L'Énigme du retour", "Les Étrangers de la maison", "Passages", "Mes années Duvalier"],
    correct: 1
  },
  {
    q: "Quel ouvrage a été publié par Lyonel Trouillot ?",
    options: ["Épisode de la Révolution", "Manuel d'histoire d'Haïti", "Yanvalou pour Charlie", "La Vengeance de Mama"],
    correct: 2
  },
  {
    q: "Historiquement, Émile Roumer appartient à quel mouvement littéraire ?",
    options: ["Indigénisme", "Génération de la Ronde", "Réalisme merveilleux", "Haïti Littéraire"],
    correct: 0
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Manuel illustré d'histoire de la littérature haïtienne » ?",
    options: ["Pradel Pompilus", "Yanick Lahens", "Jean Métellus", "Ida Faubert"],
    correct: 0
  },
  {
    q: "Quel ouvrage a été publié par James Noël ?",
    options: ["Rêver debout", "Le Choc", "Belle merveille", "Mère-Solitude"],
    correct: 2
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Gary Victor ?",
    options: ["Bicentenaire", "Le Lambi", "Corps mêlés", "Saison de porcs"],
    correct: 3
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Marie-Célie Agnant ?",
    options: ["La Dot de Sara", "Mosochwazi Kout Fè", "Silhouettes de nègres et de négrophiles", "Thérèse en mille morceaux"],
    correct: 0
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Mur Méditerranée » ?",
    options: ["Jean-Euphèle Milcé", "Nadine Magloire", "Louis-Philippe Dalembert", "Jean-Claude Bajeux"],
    correct: 2
  },
  {
    q: "Le livre « Mon pays que voici » est dû à la plume de :",
    options: ["Edwidge Danticat", "René Depestre", "Anthony Phelps", "Ignace Nau"],
    correct: 2
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Mère-Solitude » ?",
    options: ["Josaphat-Robert Large", "Kettly Mars", "Émile Ollivier", "Jean-Claude Charles"],
    correct: 2
  },
  {
    q: "Quel écrivain haïtien a écrit « Poésies nationales » ?",
    options: ["Massillon Coicou", "Tertulien Guilbaud", "Marie-Thérèse Colimon-Hall", "Louis Joseph Janvier"],
    correct: 0
  },
  {
    q: "Parmi ces titres, lequel est signé Alibée Féry ?",
    options: ["L'Empereur Dessalines", "Idem", "Poésies nationales", "Musa-Paidica"],
    correct: 3
  },
  {
    q: "Quel nom d'auteur associez-vous à « Les Fantoches » ?",
    options: ["Fresnel Sylvestre", "Suzanne Comhaire-Sylvain", "Anténor Firmin", "Jacques Roumain"],
    correct: 3
  },
  {
    q: "Quel écrivain haïtien a écrit « Manhattan Blues » ?",
    options: ["Makenzy Orcel", "Gary Victor", "Jean-Claude Charles", "Alibée Féry"],
    correct: 2
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Jacques Stephen Alexis ?",
    options: ["Les Arbres musiciens", "Passages", "Zoune chez sa ninnaine", "Les Fantoches"],
    correct: 0
  },
  {
    q: "Parmi ces titres, lequel est signé Tertulien Guilbaud ?",
    options: ["Kasalé", "Sous le soleil d'Haïti", "Bois d'ébène", "Vieilles chansons"],
    correct: 3
  },
  {
    q: "Identifiez l'œuvre écrite par Jean-Claude Charles :",
    options: ["Ferdinand je suis à Paris", "Les Rapaces", "L'Autre Face de la mer", "Manuel illustré d'histoire de la littérature haïtienne"],
    correct: 0
  },
  {
    q: "« Rue Frontière » a été publié(e) par quel écrivain haïtien ?",
    options: ["Roussan Camille", "Marie Vieux-Chauvet", "Faubert Bolivar", "Isnardin Vieux"],
    correct: 2
  },
  {
    q: "Quel livre porte la signature de Louis-Philippe Dalembert ?",
    options: ["Un Arc-en-ciel pour l'occident chrétien", "Guillaume et Nathalie", "Milwaukee Blues", "Mûr à crever"],
    correct: 2
  },
  {
    q: "Parmi ces titres, lequel est signé Jacques Stephen Alexis ?",
    options: ["La Dot de Sara", "L'Alphabet des nuits", "Compère Général Soleil", "Ces îles qui marchent"],
    correct: 2
  },
  {
    q: "Quel titre figure dans la bibliographie de Placide David ?",
    options: ["La Bélière Caraïbe", "Le Lambi", "L'Héritage colonial en Haïti", "Kasalé"],
    correct: 2
  },
  {
    q: "Quelle est l'œuvre de Tertulien Guilbaud parmi cette liste ?",
    options: ["Épisode de la Révolution", "Dezafi", "Vieilles chansons", "Frayeur"],
    correct: 2
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Jacques Roumain ?",
    options: ["Musique nègre", "Hadriana dans tous mes rêves", "Les Fantoches", "Un Arc-en-ciel pour l'occident chrétien"],
    correct: 2
  },
  {
    q: "« La Famille Vortex » est signé par quel auteur haïtien ?",
    options: ["Marie-Alice Théard", "Roland Morisseau", "Suzanne Comhaire-Sylvain", "Jean Métellus"],
    correct: 3
  },
  {
    q: "L'œuvre « Thémistocle-Épaminondas Labasterre » a été écrite par :",
    options: ["Roussan Camille", "Frédéric Marcelin", "Anthony Phelps", "Charles Moravia"],
    correct: 1
  },
  {
    q: "Le livre « Compère Général Soleil » est dû à la plume de :",
    options: ["Ida Faubert", "Antoine Innocent", "Jacques Stephen Alexis", "Demesvar Delorme"],
    correct: 2
  },
  {
    q: "Quel écrivain haïtien a écrit « L'Alphabet des nuits » ?",
    options: ["Hénock Trouillot", "Jean-Euphèle Milcé", "Marie-Célie Agnant", "Massillon Coicou"],
    correct: 1
  },
  {
    q: "Quel nom d'auteur associez-vous à « Guillaume et Nathalie » ?",
    options: ["Liliane Devieux-Dehoux", "Émile Ollivier", "Guy Régis Jr", "Yanick Lahens"],
    correct: 3
  },
  {
    q: "Identifiez l'œuvre écrite par Gary Victor :",
    options: ["Treize nouvelles vaudou", "Rue des pas perdus", "Le Mal de terre", "Épisode de la Révolution"],
    correct: 0
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Oswald Durand ?",
    options: ["Maître-Minuit", "Des fleurs pour les héros", "Le Fusil et la croix", "Choucoune"],
    correct: 3
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Marie-Célie Agnant ?",
    options: ["Bonjour et adieu à la négritude", "L'Odeur du café", "La Dot de Sara", "Impasse Dignité"],
    correct: 2
  },
  {
    q: "Parmi ces titres, lequel est signé Frédéric Marcelin ?",
    options: ["Rapatriés", "Vieilles chansons", "Poèmes d'Haïti et de France", "Thémistocle-Épaminondas Labasterre"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Le Qui-vive » ?",
    options: ["Jean-Claude Bajeux", "Syto Cavé", "Jean Price-Mars", "Marvin Victor"],
    correct: 1
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Manuel illustré d'histoire de la littérature haïtienne » ?",
    options: ["Windsor Bellegarde", "Roussan Camille", "Pradel Pompilus", "Jacques Roumain"],
    correct: 2
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Fonds des Nègres » ?",
    options: ["Nadine Magloire", "Marie Vieux-Chauvet", "Faubert Bolivar", "Jean-Robert Léonidas"],
    correct: 1
  },
  {
    q: "Retrouvez l'auteur de « Je suis vivant » parmi ces propositions :",
    options: ["Kettly Mars", "Michel Soukar", "Jean-Euphèle Milcé", "Marie-Thérèse Colimon-Hall"],
    correct: 0
  },
  {
    q: "L'écrivain Massillon Coicou est souvent associé(e) au mouvement :",
    options: ["Haïti Littéraire", "Réalisme merveilleux", "Spiralisme", "Génération de la Ronde"],
    correct: 3
  },
  {
    q: "Le livre « La Couleur de l'aube » est dû à la plume de :",
    options: ["Dany Laferrière", "Louis Joseph Janvier", "Yanick Lahens", "Guy Régis Jr"],
    correct: 2
  },
  {
    q: "De quelle plume est issue l'œuvre « La Famille des Pitite-Caille » ?",
    options: ["Placide David", "Faubert Bolivar", "Justin Lhérisson", "Lyonel Trouillot"],
    correct: 2
  },
  {
    q: "L'œuvre « Bain de lune » a été écrite par :",
    options: ["Marvin Victor", "Hénock Trouillot", "Tertulien Guilbaud", "Yanick Lahens"],
    correct: 3
  },
  {
    q: "Parmi ces titres, lequel est signé Emmelie Prophète ?",
    options: ["Avant que les ombres s'effacent", "L'Oiseau schizophone", "Les Dix hommes noirs", "Impasse Dignité"],
    correct: 3
  },
  {
    q: "« Zombi Blues » compte parmi les œuvres de quel auteur ?",
    options: ["Stanley Péan", "Makenzy Orcel", "Louis-Philippe Dalembert", "Roussan Camille"],
    correct: 0
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Frédéric Marcelin ?",
    options: ["La Vengeance de Mama", "Bicentenaire", "La Blanche Négresse", "L'Espace d'un cillement"],
    correct: 0
  },
  {
    q: "Qui a publié le livre « Corps mêlés » ?",
    options: ["Marvin Victor", "Frankétienne", "Kettly Mars", "Serge Legagneur"],
    correct: 0
  },
  {
    q: "Identifiez l'œuvre écrite par Ignace Nau :",
    options: ["Épisode de la Révolution", "Les Contes haïtiens", "Musa-Paidica", "Compère Général Soleil"],
    correct: 0
  },
  {
    q: "De quelle plume est issue l'œuvre « Les Thazar » ?",
    options: ["Ignace Nau", "Gary Klang", "Fernand Hibbert", "Yanick Lahens"],
    correct: 2
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par René Philoctète ?",
    options: ["La Récolte douce des larmes", "Musa-Paidica", "Rosalie l'infâme", "Le Peuple des terres mêlées"],
    correct: 3
  },
  {
    q: "Yanick Lahens a notamment donné naissance à quelle œuvre ?",
    options: ["La Couleur de l'aube", "La Dot de Sara", "Boulevard Baie des Anges", "Zombi Blues"],
    correct: 0
  },
  {
    q: "Dans quel grand mouvement littéraire s'inscrit Georges Sylvain ?",
    options: ["Réalisme merveilleux", "Spiralisme", "Génération de la Ronde", "Haïti Littéraire"],
    correct: 2
  },
  {
    q: "De quelle plume est issue l'œuvre « Les Fantoches » ?",
    options: ["Windsor Bellegarde", "Anthony Phelps", "Jacques Roumain", "Alibée Féry"],
    correct: 2
  },
  {
    q: "Quel nom d'auteur associez-vous à « Choucoune » ?",
    options: ["Georges Sylvain", "Oswald Durand", "Georges Castera", "Guy Régis Jr"],
    correct: 1
  },
  {
    q: "Parmi ces titres, lequel est signé Jean Métellus ?",
    options: ["Anacaona", "L'Alphabet des nuits", "Bois d'ébène", "Jacques Roche, la vie entière"],
    correct: 0
  },
  {
    q: "Retrouvez l'auteur de « Le Mât de cocagne » parmi ces propositions :",
    options: ["Marie Vieux-Chauvet", "Georges Anglade", "Davertige", "René Depestre"],
    correct: 3
  },
  {
    q: "Qui a publié le livre « Mes années Duvalier » ?",
    options: ["Marie-Alice Théard", "Oswald Durand", "Carl Brouard", "Windsor Bellegarde"],
    correct: 0
  },
  {
    q: "Le livre « Alléluia pour une femme-jardin » est dû à la plume de :",
    options: ["Jean-Claude Bajeux", "Charles Moravia", "René Depestre", "Pradel Pompilus"],
    correct: 2
  },
  {
    q: "Qui a publié le livre « Sous le soleil d'Haïti » ?",
    options: ["Jean Price-Mars", "Ida Faubert", "Anthony Phelps", "Jean-Claude Charles"],
    correct: 1
  },
  {
    q: "Parmi ces titres, lequel est signé Oswald Durand ?",
    options: ["Bois d'ébène", "Pages retrouvées", "Les Étrangers de la maison", "Choucoune"],
    correct: 3
  },
  {
    q: "Jacques Stephen Alexis est notamment l'auteur(e) de :",
    options: ["Zoune chez sa ninnaine", "Romancero aux étoiles", "Mes années Duvalier", "La Plage des songes"],
    correct: 1
  },
  {
    q: "Le livre « Écrivains haïtiens » est dû à la plume de :",
    options: ["Anthony Phelps", "Hénock Trouillot", "Windsor Bellegarde", "Carl Brouard"],
    correct: 2
  },
  {
    q: "« Ultravocal » est signé par quel auteur haïtien ?",
    options: ["Jacques Stephen Alexis", "Frankétienne", "Jacques Roumain", "Edwidge Danticat"],
    correct: 1
  },
  {
    q: "« Haïti, terre mystique » compte parmi les œuvres de quel auteur ?",
    options: ["Rodney Saint-Éloi", "Gary Klang", "Marie-Thérèse Colimon-Hall", "René Depestre"],
    correct: 1
  },
  {
    q: "« Une eau-forte » compte parmi les œuvres de quel auteur ?",
    options: ["Fresnel Sylvestre", "Jean Métellus", "Fernand Hibbert", "Jean-Robert Léonidas"],
    correct: 1
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Marvin Victor ?",
    options: ["La Bélière Caraïbe", "Corps mêlés", "De Saint-Domingue à Haïti", "Encre allègre"],
    correct: 1
  },
  {
    q: "René Philoctète est notamment l'auteur(e) de :",
    options: ["Assaut à la nuit", "Ces îles qui marchent", "Passages", "Thérèse en mille morceaux"],
    correct: 1
  },
  {
    q: "Qui a publié le livre « Textes interdits » ?",
    options: ["Anténor Firmin", "Georges Sylvain", "Makenzy Orcel", "Serge Legagneur"],
    correct: 3
  },
  {
    q: "Carl Brouard figure parmi les représentants de quel mouvement ?",
    options: ["Réalisme merveilleux", "Indigénisme", "Spiralisme", "Génération de la Ronde"],
    correct: 1
  },
  {
    q: "Quel titre figure dans la bibliographie de Massillon Coicou ?",
    options: ["Manuel d'histoire d'Haïti", "Rires et Pleurs", "Ultravocal", "Poésies nationales"],
    correct: 3
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Bain de lune » ?",
    options: ["Évelyne Trouillot", "Fresnel Sylvestre", "Yanick Lahens", "Georges Sylvain"],
    correct: 2
  },
  {
    q: "L'écrivain(e) Kettly Mars est célèbre pour avoir publié :",
    options: ["Mes années Duvalier", "Des fleurs pour les héros", "Cœur des Îles", "Frayeur"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Mon pays que voici » ?",
    options: ["Anthony Phelps", "Jean Price-Mars", "Évelyne Trouillot", "Marie-Célie Agnant"],
    correct: 0
  },
  {
    q: "De quelle plume est issue l'œuvre « Hadriana dans tous mes rêves » ?",
    options: ["Isnardin Vieux", "Frankétienne", "Jean D'Amérique", "René Depestre"],
    correct: 3
  },
  {
    q: "Quel ouvrage a été publié par Émile Ollivier ?",
    options: ["La Famille Vortex", "Écrit sur du ruban rose", "Écrivains haïtiens", "Passages"],
    correct: 3
  },
  {
    q: "« Le Roman de l'occupation » compte parmi les œuvres de quel auteur ?",
    options: ["Joujou Turenne", "Isnardin Vieux", "Jean-Claude Charles", "Michel Soukar"],
    correct: 1
  },
  {
    q: "Qui a publié le livre « Cœur des Îles » ?",
    options: ["Antoine Innocent", "Cléante Valcin", "Ida Faubert", "Marvin Victor"],
    correct: 2
  },
  {
    q: "Quel livre porte la signature de Marie-Célie Agnant ?",
    options: ["Comment faire l'amour avec un Nègre sans se fatiguer", "La Dot de Sara", "Haïti kenbe la !", "Passages"],
    correct: 1
  },
  {
    q: "« La Vocation de l'élite » compte parmi les œuvres de quel auteur ?",
    options: ["Jean Price-Mars", "Roland Morisseau", "Ida Faubert", "Émile Roumer"],
    correct: 0
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Île à vau-l'eau » ?",
    options: ["Charles Moravia", "Anthony Phelps", "Jean-Robert Léonidas", "Jean-Robert Cadet"],
    correct: 2
  },
  {
    q: "Quel ouvrage a été publié par René Philoctète ?",
    options: ["Romancero aux étoiles", "Réflexions diverses sur Haïti", "Ces îles qui marchent", "Vieilles chansons"],
    correct: 2
  },
  {
    q: "« Le Testament des solitudes » est signé par quel auteur haïtien ?",
    options: ["Emmelie Prophète", "Carl Brouard", "Marie Vieux-Chauvet", "Marie-Alice Théard"],
    correct: 0
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Mûr à crever » ?",
    options: ["Jean-Claude Fignolé", "Frankétienne", "Jean Price-Mars", "Demesvar Delorme"],
    correct: 1
  },
  {
    q: "On doit à la plume de Jacques Roumain l'œuvre suivante :",
    options: ["Écrit sur du ruban rose", "Mûr à crever", "La Montagne ensorcelée", "Le Lambi"],
    correct: 2
  },
  {
    q: "Roland Morisseau figure parmi les représentants de quel mouvement ?",
    options: ["Réalisme merveilleux", "Génération de la Ronde", "Haïti Littéraire", "Spiralisme"],
    correct: 2
  },
  {
    q: "Parmi ces titres, lequel est signé Pradel Pompilus ?",
    options: ["Fille d'Haïti", "Adieu, mon frère", "Manuel illustré d'histoire de la littérature haïtienne", "L'Autre Face de la mer"],
    correct: 2
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Mur Méditerranée » ?",
    options: ["Fernand Hibbert", "Louis-Philippe Dalembert", "Syto Cavé", "Marvin Victor"],
    correct: 1
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « L'Odeur du café » ?",
    options: ["Nadine Magloire", "Oswald Durand", "James Noël", "Dany Laferrière"],
    correct: 3
  },
  {
    q: "Quel nom d'auteur associez-vous à « Haïti, terre mystique » ?",
    options: ["Marie Vieux-Chauvet", "Marie-Alice Théard", "Gary Klang", "Josaphat-Robert Large"],
    correct: 2
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Jacques Stephen Alexis ?",
    options: ["Romancero aux étoiles", "La Blanche Négresse", "Les Dix hommes noirs", "Désirée Congo"],
    correct: 0
  },
  {
    q: "Fresnel Sylvestre est notamment l'auteur(e) de :",
    options: ["Un amour à trois temps", "Ainsi parla l'oncle", "Le Sang et la Mer", "La mémoire aux abois"],
    correct: 0
  },
  {
    q: "L'œuvre « Le Mal de terre » a été écrite par :",
    options: ["Marvin Victor", "Paula Clermont Péan", "Antoine Innocent", "Emmelie Prophète"],
    correct: 1
  },
  {
    q: "Quelle est l'œuvre de Liliane Devieux-Dehoux parmi cette liste ?",
    options: ["De l'égalité des races humaines", "Vieilles chansons", "L'Amour oui. La mort non", "Zoune chez sa ninnaine"],
    correct: 2
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Suzanne Comhaire-Sylvain ?",
    options: ["Le bout du monde est une fenêtre", "Passages", "Belle merveille", "Les Contes haïtiens"],
    correct: 3
  },
  {
    q: "« Saison de porcs » a été publié(e) par quel écrivain haïtien ?",
    options: ["Stanley Péan", "Antoine Innocent", "Anténor Firmin", "Gary Victor"],
    correct: 3
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Évelyne Trouillot ?",
    options: ["Cric? Crac!", "La Famille Vortex", "La mémoire aux abois", "La Crête-à-Pierrot"],
    correct: 2
  },
  {
    q: "« Rosalie l'infâme » a été publié(e) par quel écrivain haïtien ?",
    options: ["Évelyne Trouillot", "Fernand Hibbert", "Edwidge Danticat", "Etzer Vilaire"],
    correct: 0
  },
  {
    q: "Quel ouvrage a été publié par Edwidge Danticat ?",
    options: ["Jacmel au crépuscule", "Une eau-forte", "Le Cri de l'oiseau rouge", "L'Amour oui. La mort non"],
    correct: 2
  },
  {
    q: "On doit à la plume de René Philoctète l'œuvre suivante :",
    options: ["La Danse sur le volcan", "Ces îles qui marchent", "Fonds des Nègres", "Les Contes haïtiens"],
    correct: 1
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Treize nouvelles vaudou » ?",
    options: ["Edwidge Danticat", "Gary Victor", "Alibée Féry", "Léon Laleau"],
    correct: 1
  },
  {
    q: "L'écrivain(e) Marie-Célie Agnant est célèbre pour avoir publié :",
    options: ["Avant que les ombres s'effacent", "Milwaukee Blues", "Le bout du monde est une fenêtre", "Le Livre d'Emma"],
    correct: 3
  },
  {
    q: "« Le Cri de l'oiseau rouge » est signé par quel auteur haïtien ?",
    options: ["René Philoctète", "Marvin Victor", "Davertige", "Edwidge Danticat"],
    correct: 3
  },
  {
    q: "Quel ouvrage a été publié par Suzanne Comhaire-Sylvain ?",
    options: ["Les Contes haïtiens", "Rue des pas perdus", "Saisons sauvages", "Cœur des Îles"],
    correct: 0
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Mimola » ?",
    options: ["Windsor Bellegarde", "Ignace Nau", "Nadine Magloire", "Antoine Innocent"],
    correct: 3
  },
  {
    q: "James Noël a notamment donné naissance à quelle œuvre ?",
    options: ["Désirée Congo", "Belle merveille", "Clair de Manbo", "Textes interdits"],
    correct: 1
  },
  {
    q: "De quelle plume est issue l'œuvre « Bois d'ébène » ?",
    options: ["Serge Legagneur", "Jacques Roumain", "Marie Vieux-Chauvet", "Frédéric Marcelin"],
    correct: 1
  },
  {
    q: "Qui a publié le livre « Saisons sauvages » ?",
    options: ["Kettly Mars", "Isnardin Vieux", "Marie-Célie Agnant", "Pradel Pompilus"],
    correct: 0
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Lyonel Trouillot ?",
    options: ["Bicentenaire", "Le Qui-vive", "Milwaukee Blues", "Le Fusil et la croix"],
    correct: 0
  },
  {
    q: "Quel ouvrage a été publié par Georges Anglade ?",
    options: ["Les Blancs de mémoire", "Vers le sud", "Rêver debout", "Milwaukee Blues"],
    correct: 0
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Massillon Coicou ?",
    options: ["Épisode de la Révolution", "La Dot de Sara", "Passions", "Thémistocle-Épaminondas Labasterre"],
    correct: 2
  },
  {
    q: "À qui doit-on l'œuvre littéraire « La Crête-à-Pierrot » ?",
    options: ["Michel Soukar", "Serge Legagneur", "Charles Moravia", "Josaphat-Robert Large"],
    correct: 2
  },
  {
    q: "À qui doit-on l'œuvre littéraire « La mémoire aux abois » ?",
    options: ["Rodney Saint-Éloi", "Émile Ollivier", "Lyonel Trouillot", "Évelyne Trouillot"],
    correct: 3
  },
  {
    q: "Le livre « L'Année Dessalines » est dû à la plume de :",
    options: ["Fernand Hibbert", "Carl Brouard", "Jean Métellus", "Hénock Trouillot"],
    correct: 2
  },
  {
    q: "Retrouvez l'auteur de « Bonjour et adieu à la négritude » parmi ces propositions :",
    options: ["Jean-Claude Bajeux", "Placide David", "Etzer Vilaire", "René Depestre"],
    correct: 3
  },
  {
    q: "Josaphat-Robert Large est notamment l'auteur(e) de :",
    options: ["Les Étrangers de la maison", "Hadriana dans tous mes rêves", "Soleil à coudre", "Un amour à trois temps"],
    correct: 0
  },
  {
    q: "Marie Vieux-Chauvet a notamment donné naissance à quelle œuvre ?",
    options: ["Frayeur", "Amour, Colère et Folie", "Les Villages de Dieu", "Passions"],
    correct: 1
  },
  {
    q: "Retrouvez l'auteur de « Le Testament des solitudes » parmi ces propositions :",
    options: ["Antoine Innocent", "Emmelie Prophète", "Émile Roumer", "Oswald Durand"],
    correct: 1
  },
  {
    q: "« Saisons sauvages » a été publié(e) par quel écrivain haïtien ?",
    options: ["Jacques Roumain", "Jean-Robert Cadet", "Kettly Mars", "Suzanne Comhaire-Sylvain"],
    correct: 2
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Anthony Phelps ?",
    options: ["Ultravocal", "Vieilles chansons", "La Bélière Caraïbe", "Saison de porcs"],
    correct: 2
  },
  {
    q: "« Île à vau-l'eau » compte parmi les œuvres de quel auteur ?",
    options: ["Georges Anglade", "René Depestre", "Anthony Phelps", "Jean-Robert Léonidas"],
    correct: 3
  },
  {
    q: "Quel nom d'auteur associez-vous à « Bain de lune » ?",
    options: ["Edwidge Danticat", "Yanick Lahens", "Anténor Firmin", "Stanley Péan"],
    correct: 1
  },
  {
    q: "L'œuvre « La République d'Haïti et ses visiteurs » a été écrite par :",
    options: ["Louis Joseph Janvier", "Ignace Nau", "Roland Morisseau", "Charles Moravia"],
    correct: 0
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Marie Vieux-Chauvet ?",
    options: ["Fonds des Nègres", "Hadriana dans tous mes rêves", "Rue Frontière", "Mûr à crever"],
    correct: 0
  },
  {
    q: "« Ferdinand je suis à Paris » compte parmi les œuvres de quel auteur ?",
    options: ["Marie-Alice Théard", "Georges Anglade", "Isnardin Vieux", "Jean-Claude Charles"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Thémistocle-Épaminondas Labasterre » ?",
    options: ["Demesvar Delorme", "Joujou Turenne", "Émile Roumer", "Frédéric Marcelin"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Poèmes d'Haïti et de France » ?",
    options: ["Émile Roumer", "Oswald Durand", "Kettly Mars", "Nadine Magloire"],
    correct: 0
  },
  {
    q: "Quel titre figure dans la bibliographie de Marvin Victor ?",
    options: ["Île à vau-l'eau", "Mère-Solitude", "Corps mêlés", "Rêver debout"],
    correct: 2
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Rapatriés » ?",
    options: ["Néhémy Pierre-Dahomey", "Marie-Thérèse Colimon-Hall", "Liliane Devieux-Dehoux", "Roland Morisseau"],
    correct: 0
  },
  {
    q: "Identifiez l'œuvre écrite par Isnardin Vieux :",
    options: ["Le Roman de l'occupation", "Les Contes haïtiens", "Le Mât de cocagne", "Rhapsodie sale"],
    correct: 0
  },
  {
    q: "Quel ouvrage a été publié par Marie-Alice Théard ?",
    options: ["Mes années Duvalier", "Vers le sud", "Manuel d'histoire d'Haïti", "Hadriana dans tous mes rêves"],
    correct: 0
  },
  {
    q: "Identifiez l'œuvre écrite par Rodney Saint-Éloi :",
    options: ["La Plage des songes", "Le Mal de vivre", "Douces déroutes", "Jacques Roche, la vie entière"],
    correct: 3
  },
  {
    q: "Identifiez l'œuvre écrite par Frankétienne :",
    options: ["Milwaukee Blues", "Comment faire l'amour avec un Nègre sans se fatiguer", "Le Testament des solitudes", "Huit jours dans un no man's land"],
    correct: 3
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Zoune chez sa ninnaine » ?",
    options: ["Placide David", "Anthony Phelps", "Justin Lhérisson", "Marie Vieux-Chauvet"],
    correct: 2
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Fernand Hibbert ?",
    options: ["Le Livre d'Emma", "Le bout du monde est une fenêtre", "Le Manuscrit de mon ami", "Aube tranquille"],
    correct: 2
  },
  {
    q: "L'œuvre « Les Fantoches » a été écrite par :",
    options: ["Davertige", "Justin Lhérisson", "Jacques Roumain", "Suzanne Comhaire-Sylvain"],
    correct: 2
  },
  {
    q: "Quel courant littéraire est associé au nom de Jacques Stephen Alexis ?",
    options: ["Indigénisme", "Spiralisme", "Réalisme merveilleux", "Haïti Littéraire"],
    correct: 2
  },
  {
    q: "« La Blanche Négresse » compte parmi les œuvres de quel auteur ?",
    options: ["Jean-Euphèle Milcé", "Edwidge Danticat", "Marie Vieux-Chauvet", "Cléante Valcin"],
    correct: 3
  },
  {
    q: "Qui a publié le livre « L'Odeur du café » ?",
    options: ["Lyonel Trouillot", "Émile Ollivier", "Dany Laferrière", "Louis Joseph Janvier"],
    correct: 2
  },
  {
    q: "« L'Empereur Dessalines » a été publié(e) par quel écrivain haïtien ?",
    options: ["Georges Anglade", "Charles Moravia", "Massillon Coicou", "Alibée Féry"],
    correct: 2
  },
  {
    q: "« Thérèse en mille morceaux » est signé par quel auteur haïtien ?",
    options: ["Justin Lhérisson", "Anténor Firmin", "Jean-Robert Cadet", "Lyonel Trouillot"],
    correct: 3
  },
  {
    q: "L'écrivain(e) Fernand Hibbert est célèbre pour avoir publié :",
    options: ["L'Autre Face de la mer", "La Couleur de l'aube", "Romulus", "Mimola"],
    correct: 2
  },
  {
    q: "Parmi ces titres, lequel est signé Gary Victor ?",
    options: ["Kasalé", "Saison de porcs", "Anacaona", "Théâtre"],
    correct: 1
  },
  {
    q: "« Les Arbres musiciens » est signé par quel auteur haïtien ?",
    options: ["Josaphat-Robert Large", "Jacques Stephen Alexis", "Jean Price-Mars", "Roland Morisseau"],
    correct: 1
  },
  {
    q: "Quel écrivain haïtien a écrit « Une eau-forte » ?",
    options: ["Jean Métellus", "Yanick Lahens", "Fernand Hibbert", "Jean-Claude Charles"],
    correct: 0
  },
  {
    q: "Qui a publié le livre « Fille d'Haïti » ?",
    options: ["Marie Vieux-Chauvet", "Rodney Saint-Éloi", "Marie-Célie Agnant", "Marvin Victor"],
    correct: 0
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « L'Heure hybride » ?",
    options: ["Ignace Nau", "Kettly Mars", "Placide David", "Frankétienne"],
    correct: 1
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Bois d'ébène » ?",
    options: ["Jacques Roumain", "Emmelie Prophète", "Carl Brouard", "Justin Lhérisson"],
    correct: 0
  },
  {
    q: "De quelle plume est issue l'œuvre « Saisons sauvages » ?",
    options: ["Kettly Mars", "Emmelie Prophète", "Stanley Péan", "Frankétienne"],
    correct: 0
  },
  {
    q: "De quelle plume est issue l'œuvre « Théâtre » ?",
    options: ["Josaphat-Robert Large", "Isnardin Vieux", "Suzanne Comhaire-Sylvain", "Syto Cavé"],
    correct: 3
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Demesvar Delorme ?",
    options: ["De Saint-Domingue à Haïti", "Le Choc", "Réflexions diverses sur Haïti", "Le Nègre crucifié"],
    correct: 2
  },
  {
    q: "Le livre « L'Ombre animale » est dû à la plume de :",
    options: ["Makenzy Orcel", "Georges Castera", "James Noël", "Frankétienne"],
    correct: 0
  },
  {
    q: "Quel nom d'auteur associez-vous à « Rêver debout » ?",
    options: ["Faubert Bolivar", "Jean-Claude Fignolé", "Rodney Saint-Éloi", "Roland Morisseau"],
    correct: 3
  },
  {
    q: "Quel titre figure dans la bibliographie de James Noël ?",
    options: ["Idem", "La Montagne ensorcelée", "Haïti, terre mystique", "Belle merveille"],
    correct: 3
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Krik? Krak! » ?",
    options: ["Roland Morisseau", "Justin Chrysostome Dorsainvil", "Edwidge Danticat", "Jean-Euphèle Milcé"],
    correct: 2
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Léon Laleau ?",
    options: ["Ces îles qui marchent", "Pays sans chapeau", "Mimola", "Le Choc"],
    correct: 3
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Jean-Robert Léonidas ?",
    options: ["Île à vau-l'eau", "L'Heure hybride", "Le Reste du temps", "Gouverneurs de la rosée"],
    correct: 0
  },
  {
    q: "L'œuvre « L'Odeur du café » a été écrite par :",
    options: ["Dany Laferrière", "Edwidge Danticat", "Oswald Durand", "Massillon Coicou"],
    correct: 0
  },
  {
    q: "« Le Briseur de rosée » est signé par quel auteur haïtien ?",
    options: ["Marie-Alice Théard", "Fresnel Sylvestre", "Edwidge Danticat", "Etzer Vilaire"],
    correct: 2
  },
  {
    q: "« La Bélière Caraïbe » a été publié(e) par quel écrivain haïtien ?",
    options: ["Marie-Célie Agnant", "Makenzy Orcel", "Anthony Phelps", "Georges Anglade"],
    correct: 2
  },
  {
    q: "« Dessalines ou le sang du Pont-Rouge » est signé par quel auteur haïtien ?",
    options: ["Jean Price-Mars", "Emmelie Prophète", "Hénock Trouillot", "Isnardin Vieux"],
    correct: 2
  },
  {
    q: "L'écrivain(e) Oswald Durand est célèbre pour avoir publié :",
    options: ["Choucoune", "Écrit sur du ruban rose", "Idem", "Les Villages de Dieu"],
    correct: 0
  },
  {
    q: "Oswald Durand est notamment l'auteur(e) de :",
    options: ["Rires et Pleurs", "Le Mal de vivre", "La Famille des Pitite-Caille", "Le Peuple des terres mêlées"],
    correct: 0
  },
  {
    q: "L'œuvre « Contes et légendes d'Haïti » a été écrite par :",
    options: ["Joujou Turenne", "Etzer Vilaire", "Windsor Bellegarde", "Faubert Bolivar"],
    correct: 0
  },
  {
    q: "Quel titre figure dans la bibliographie de Demesvar Delorme ?",
    options: ["Zombi Blues", "Contes et légendes d'Haïti", "Réflexions diverses sur Haïti", "Rhapsodie sale"],
    correct: 2
  },
  {
    q: "Quel nom d'auteur associez-vous à « Théâtre » ?",
    options: ["Massillon Coicou", "Syto Cavé", "Jacques Stephen Alexis", "Pradel Pompilus"],
    correct: 1
  },
  {
    q: "On rattache généralement Frankétienne à quel mouvement des lettres haïtiennes ?",
    options: ["Réalisme merveilleux", "Haïti Littéraire", "Génération de la Ronde", "Spiralisme"],
    correct: 3
  },
  {
    q: "Jean D'Amérique est notamment l'auteur(e) de :",
    options: ["Des fleurs pour les héros", "Soleil à coudre", "Moi, fardeau inhérent", "La Plage des songes"],
    correct: 1
  },
  {
    q: "L'écrivain(e) Georges Anglade est célèbre pour avoir publié :",
    options: ["La Vengeance de Mama", "Mère-Solitude", "Le Fusil et la croix", "Les Blancs de mémoire"],
    correct: 3
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Rhapsodie sale » ?",
    options: ["Charles Moravia", "Marie Vieux-Chauvet", "Faubert Bolivar", "Jean D'Amérique"],
    correct: 3
  },
  {
    q: "Quel livre porte la signature de Etzer Vilaire ?",
    options: ["Un amour à trois temps", "Nouveaux poèmes", "La Famille Vortex", "Haïti kenbe la !"],
    correct: 1
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Huit jours dans un no man's land » ?",
    options: ["Frankétienne", "Guy Régis Jr", "Émile Roumer", "Jean D'Amérique"],
    correct: 0
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Demesvar Delorme ?",
    options: ["Dessalines ou le sang du Pont-Rouge", "Textes interdits", "Réflexions diverses sur Haïti", "Frayeur"],
    correct: 2
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Georges Sylvain ?",
    options: ["Cric? Crac!", "Mon pays que voici", "Épisode de la Révolution", "Les Arbres musiciens"],
    correct: 0
  },
  {
    q: "Parmi ces titres, lequel est signé Jean-Robert Cadet ?",
    options: ["Les Villages de Dieu", "Musique nègre", "Krik? Krak!", "Restavec"],
    correct: 3
  },
  {
    q: "Quel ouvrage a été publié par Néhémy Pierre-Dahomey ?",
    options: ["Boulevard Baie des Anges", "L'Année Dessalines", "Soleil à coudre", "Bicentenaire"],
    correct: 0
  },
  {
    q: "Quel écrivain haïtien a écrit « Mon pays que voici » ?",
    options: ["Marie-Alice Théard", "Serge Legagneur", "Anthony Phelps", "Louis-Philippe Dalembert"],
    correct: 2
  },
  {
    q: "Qui a publié le livre « L'Espace d'un cillement » ?",
    options: ["Anténor Firmin", "René Philoctète", "Jacques Stephen Alexis", "Jean-Claude Bajeux"],
    correct: 2
  },
  {
    q: "« Moi, Toussaint Louverture » compte parmi les œuvres de quel auteur ?",
    options: ["Jean-Claude Fignolé", "Jean-Robert Cadet", "Jean Métellus", "Josaphat-Robert Large"],
    correct: 0
  },
  {
    q: "Le livre « Passages » est dû à la plume de :",
    options: ["Georges Castera", "Jacques Stephen Alexis", "Massillon Coicou", "Émile Ollivier"],
    correct: 3
  },
  {
    q: "L'écrivain(e) Jean Price-Mars est célèbre pour avoir publié :",
    options: ["Contes et légendes d'Haïti", "À l'angle des rues parallèles", "Silhouettes de nègres et de négrophiles", "Corps mêlés"],
    correct: 2
  },
  {
    q: "Quel nom d'auteur associez-vous à « Textes interdits » ?",
    options: ["Paula Clermont Péan", "Serge Legagneur", "Windsor Bellegarde", "Suzanne Comhaire-Sylvain"],
    correct: 1
  },
  {
    q: "On doit à la plume de Roland Morisseau l'œuvre suivante :",
    options: ["Les Thazar", "Compère Général Soleil", "Zoune chez sa ninnaine", "Rêver debout"],
    correct: 3
  },
  {
    q: "Quel nom d'auteur associez-vous à « La Vocation de l'élite » ?",
    options: ["Marie-Célie Agnant", "Frédéric Marcelin", "Jean Price-Mars", "Kettly Mars"],
    correct: 2
  },
  {
    q: "Retrouvez l'auteur de « Désirée Congo » parmi ces propositions :",
    options: ["Georges Anglade", "Évelyne Trouillot", "Justin Chrysostome Dorsainvil", "Fernand Hibbert"],
    correct: 1
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Milwaukee Blues » ?",
    options: ["Justin Chrysostome Dorsainvil", "Jean Métellus", "Louis-Philippe Dalembert", "Jean D'Amérique"],
    correct: 2
  },
  {
    q: "Le livre « Le Briseur de rosée » est dû à la plume de :",
    options: ["Windsor Bellegarde", "Dany Laferrière", "Edwidge Danticat", "Gérard Étienne"],
    correct: 2
  },
  {
    q: "Qui a publié le livre « Une somme humaine » ?",
    options: ["René Depestre", "Gary Klang", "Jean Métellus", "Makenzy Orcel"],
    correct: 3
  },
  {
    q: "Quel titre figure dans la bibliographie de Émile Ollivier ?",
    options: ["L'Année Dessalines", "Nouveaux poèmes", "Les Arbres musiciens", "Passages"],
    correct: 3
  },
  {
    q: "« Le Nègre crucifié » compte parmi les œuvres de quel auteur ?",
    options: ["Joujou Turenne", "Marie Vieux-Chauvet", "Gérard Étienne", "Makenzy Orcel"],
    correct: 2
  },
  {
    q: "« Poèmes d'Haïti et de France » compte parmi les œuvres de quel auteur ?",
    options: ["Marie Vieux-Chauvet", "Ida Faubert", "René Philoctète", "Émile Roumer"],
    correct: 3
  },
  {
    q: "Quelle est l'œuvre de Marie Vieux-Chauvet parmi cette liste ?",
    options: ["Jacmel au crépuscule", "La Dot de Sara", "Fonds des Nègres", "Boulevard Baie des Anges"],
    correct: 2
  },
  {
    q: "Le livre « Ces îles qui marchent » est dû à la plume de :",
    options: ["Carl Brouard", "René Philoctète", "Suzanne Comhaire-Sylvain", "Justin Lhérisson"],
    correct: 1
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « La Blanche Négresse » ?",
    options: ["Demesvar Delorme", "Marie-Thérèse Colimon-Hall", "Émile Roumer", "Cléante Valcin"],
    correct: 3
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Yanick Lahens ?",
    options: ["La Famille des Pitite-Caille", "Les Possédés de la pleine lune", "La Couleur de l'aube", "Sous le soleil d'Haïti"],
    correct: 2
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Dessalines ou le sang du Pont-Rouge » ?",
    options: ["Rodney Saint-Éloi", "Hénock Trouillot", "Makenzy Orcel", "Ignace Nau"],
    correct: 1
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Un amour à trois temps » ?",
    options: ["Charles Moravia", "Léon Laleau", "Fresnel Sylvestre", "Suzanne Comhaire-Sylvain"],
    correct: 2
  },
  {
    q: "De quelle plume est issue l'œuvre « Avant que les ombres s'effacent » ?",
    options: ["Louis-Philippe Dalembert", "James Noël", "Frédéric Marcelin", "Oswald Durand"],
    correct: 0
  },
  {
    q: "Quelle est l'œuvre de Jean Métellus parmi cette liste ?",
    options: ["Manuel illustré d'histoire de la littérature haïtienne", "Anacaona", "La Crête-à-Pierrot", "L'Heure hybride"],
    correct: 1
  },
  {
    q: "Le livre « Ultravocal » est dû à la plume de :",
    options: ["Isnardin Vieux", "Frankétienne", "Jean D'Amérique", "Anthony Phelps"],
    correct: 1
  },
  {
    q: "L'œuvre « Ultravocal » a été écrite par :",
    options: ["Frankétienne", "Gary Victor", "Yanick Lahens", "Jean-Euphèle Milcé"],
    correct: 0
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Nadine Magloire ?",
    options: ["Poèmes d'Haïti et de France", "Le Mal de vivre", "Les Arbres musiciens", "L'Odeur du café"],
    correct: 1
  },
  {
    q: "Identifiez l'œuvre écrite par Alibée Féry :",
    options: ["Musa-Paidica", "Silhouettes de nègres et de négrophiles", "Un Arc-en-ciel pour l'occident chrétien", "Les Possédés de la pleine lune"],
    correct: 0
  },
  {
    q: "Quelle est l'œuvre de Nadine Magloire parmi cette liste ?",
    options: ["L'Héritage colonial en Haïti", "Le Mât de cocagne", "Ferdinand je suis à Paris", "Le Mal de vivre"],
    correct: 3
  },
  {
    q: "Le livre « Pèlentèt » est dû à la plume de :",
    options: ["Louis Joseph Janvier", "Évelyne Trouillot", "Oswald Durand", "Frankétienne"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « La Récolte douce des larmes » ?",
    options: ["Jean Price-Mars", "Alibée Féry", "Edwidge Danticat", "Oswald Durand"],
    correct: 2
  },
  {
    q: "Quel nom d'auteur associez-vous à « Désirée Congo » ?",
    options: ["Évelyne Trouillot", "Roland Morisseau", "Anthony Phelps", "Fresnel Sylvestre"],
    correct: 0
  },
  {
    q: "« La Vengeance de Mama » a été publié(e) par quel écrivain haïtien ?",
    options: ["Émile Ollivier", "James Noël", "Frédéric Marcelin", "Josaphat-Robert Large"],
    correct: 2
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Justin Chrysostome Dorsainvil ?",
    options: ["Le Fusil et la croix", "La mémoire aux abois", "L'Oiseau schizophone", "Manuel d'histoire d'Haïti"],
    correct: 3
  },
  {
    q: "Quel écrivain haïtien a écrit « Jacques Roche, la vie entière » ?",
    options: ["Rodney Saint-Éloi", "Roland Morisseau", "Yanick Lahens", "Antoine Innocent"],
    correct: 0
  },
  {
    q: "Quel nom d'auteur associez-vous à « L'Odeur du café » ?",
    options: ["Dany Laferrière", "Émile Roumer", "Suzanne Comhaire-Sylvain", "Jacques Roumain"],
    correct: 0
  },
  {
    q: "Retrouvez l'auteur de « Corps mêlés » parmi ces propositions :",
    options: ["Marvin Victor", "Yanick Lahens", "Ida Faubert", "Georges Sylvain"],
    correct: 0
  },
  {
    q: "Quel écrivain haïtien a écrit « Alléluia pour une femme-jardin » ?",
    options: ["Paula Clermont Péan", "René Depestre", "Oswald Durand", "Marie-Alice Théard"],
    correct: 1
  },
  {
    q: "« Théâtre » est signé par quel auteur haïtien ?",
    options: ["Emmelie Prophète", "Marie Vieux-Chauvet", "Syto Cavé", "Massillon Coicou"],
    correct: 2
  },
  {
    q: "Kettly Mars est notamment l'auteur(e) de :",
    options: ["Épisode de la Révolution", "Le Mal de terre", "Romancero aux étoiles", "L'Heure hybride"],
    correct: 3
  },
  {
    q: "« Bicentenaire » compte parmi les œuvres de quel auteur ?",
    options: ["Joujou Turenne", "Rodney Saint-Éloi", "Lyonel Trouillot", "Jean-Claude Charles"],
    correct: 2
  },
  {
    q: "Quel titre figure dans la bibliographie de Dany Laferrière ?",
    options: ["Pays sans chapeau", "Désirée Congo", "Textes interdits", "Mur Méditerranée"],
    correct: 0
  },
  {
    q: "Identifiez l'œuvre écrite par Carl Brouard :",
    options: ["Rapatriés", "Avant que les ombres s'effacent", "Île à vau-l'eau", "Écrit sur du ruban rose"],
    correct: 3
  },
  {
    q: "Quel ouvrage a été publié par Jean Métellus ?",
    options: ["Ces îles qui marchent", "Jacmel au crépuscule", "Le Choc", "Guillaume et Nathalie"],
    correct: 1
  },
  {
    q: "Charles Moravia est notamment l'auteur(e) de :",
    options: ["L'Oiseau schizophone", "Le Peuple des terres mêlées", "Corps mêlés", "La Crête-à-Pierrot"],
    correct: 3
  },
  {
    q: "Qui a publié le livre « Treize nouvelles vaudou » ?",
    options: ["Émile Ollivier", "Gary Victor", "René Depestre", "Demesvar Delorme"],
    correct: 1
  },
  {
    q: "On doit à la plume de Emmelie Prophète l'œuvre suivante :",
    options: ["Idem", "Le Sang et la Mer", "Mon pays que voici", "Impasse Dignité"],
    correct: 3
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Hénock Trouillot ?",
    options: ["Dessalines ou le sang du Pont-Rouge", "Fonds des Nègres", "Les Contes haïtiens", "Assaut à la nuit"],
    correct: 0
  },
  {
    q: "Quel ouvrage a été publié par Gérard Étienne ?",
    options: ["Le Nègre crucifié", "Le Sang et la Mer", "Les Dix hommes noirs", "Les Fantoches"],
    correct: 0
  },
  {
    q: "Quel nom d'auteur associez-vous à « L'Héritage colonial en Haïti » ?",
    options: ["Émile Ollivier", "Placide David", "Yanick Lahens", "Jean-Robert Cadet"],
    correct: 1
  },
  {
    q: "Quel ouvrage a été publié par Emmelie Prophète ?",
    options: ["Francesca", "Les Villages de Dieu", "Écrit sur du ruban rose", "Les Étrangers de la maison"],
    correct: 1
  },
  {
    q: "Marie-Alice Théard a notamment donné naissance à quelle œuvre ?",
    options: ["Mosochwazi Kout Fè", "Ultravocal", "Mes années Duvalier", "Mur Méditerranée"],
    correct: 2
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Saison de porcs » ?",
    options: ["Jean-Robert Cadet", "Gary Victor", "Paula Clermont Péan", "René Depestre"],
    correct: 1
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Choucoune » ?",
    options: ["Jean D'Amérique", "Oswald Durand", "Antoine Innocent", "Anténor Firmin"],
    correct: 1
  },
  {
    q: "« Dessalines ou le sang du Pont-Rouge » a été publié(e) par quel écrivain haïtien ?",
    options: ["Hénock Trouillot", "Michel Soukar", "Josaphat-Robert Large", "Edwidge Danticat"],
    correct: 0
  },
  {
    q: "Retrouvez l'auteur de « Vers le sud » parmi ces propositions :",
    options: ["Fresnel Sylvestre", "Anthony Phelps", "Émile Ollivier", "Dany Laferrière"],
    correct: 3
  },
  {
    q: "Quel nom d'auteur associez-vous à « Écrivains haïtiens » ?",
    options: ["Fernand Hibbert", "Serge Legagneur", "Windsor Bellegarde", "Demesvar Delorme"],
    correct: 2
  },
  {
    q: "Demesvar Delorme a notamment donné naissance à quelle œuvre ?",
    options: ["Réflexions diverses sur Haïti", "Le Mât de cocagne", "Thémistocle-Épaminondas Labasterre", "Le Livre d'Emma"],
    correct: 0
  },
  {
    q: "Placide David est notamment l'auteur(e) de :",
    options: ["Rue Frontière", "Milwaukee Blues", "L'Héritage colonial en Haïti", "Adieu, mon frère"],
    correct: 2
  },
  {
    q: "L'œuvre « Compère Général Soleil » a été écrite par :",
    options: ["Emmelie Prophète", "Marie-Célie Agnant", "Jacques Stephen Alexis", "Georges Sylvain"],
    correct: 2
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « L'Odeur du café » ?",
    options: ["Frédéric Marcelin", "Dany Laferrière", "Kettly Mars", "Carl Brouard"],
    correct: 1
  },
  {
    q: "« Les Thazar » compte parmi les œuvres de quel auteur ?",
    options: ["Marie-Célie Agnant", "Davertige", "Ida Faubert", "Fernand Hibbert"],
    correct: 3
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Paula Clermont Péan ?",
    options: ["Bain de lune", "Le Mal de terre", "Ferdinand je suis à Paris", "Assaut à la nuit"],
    correct: 1
  },
  {
    q: "Identifiez l'œuvre écrite par Roussan Camille :",
    options: ["Assaut à la nuit", "Une somme humaine", "Un amour à trois temps", "La Couleur de l'aube"],
    correct: 0
  },
  {
    q: "« L'Ombre animale » est signé par quel auteur haïtien ?",
    options: ["Léon Laleau", "Makenzy Orcel", "Suzanne Comhaire-Sylvain", "Jean Métellus"],
    correct: 1
  },
  {
    q: "« Désirée Congo » a été publié(e) par quel écrivain haïtien ?",
    options: ["Jean-Robert Cadet", "Faubert Bolivar", "Michel Soukar", "Évelyne Trouillot"],
    correct: 3
  },
  {
    q: "L'écrivain(e) Ida Faubert est célèbre pour avoir publié :",
    options: ["Le Qui-vive", "Sous le soleil d'Haïti", "Dessalines ou le sang du Pont-Rouge", "Rosalie l'infâme"],
    correct: 1
  },
  {
    q: "« Maître-Minuit » a été publié(e) par quel écrivain haïtien ?",
    options: ["Marie-Thérèse Colimon-Hall", "Makenzy Orcel", "Dany Laferrière", "Placide David"],
    correct: 1
  },
  {
    q: "Retrouvez l'auteur de « Restavec » parmi ces propositions :",
    options: ["Jean-Robert Cadet", "Josaphat-Robert Large", "Makenzy Orcel", "Justin Chrysostome Dorsainvil"],
    correct: 0
  },
  {
    q: "« Séna » est signé par quel auteur haïtien ?",
    options: ["Roussan Camille", "Marie Vieux-Chauvet", "Yanick Lahens", "Fernand Hibbert"],
    correct: 3
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Guillaume et Nathalie » ?",
    options: ["Marie-Célie Agnant", "Yanick Lahens", "Oswald Durand", "Marvin Victor"],
    correct: 1
  },
  {
    q: "Le livre « Ainsi parla l'oncle » est dû à la plume de :",
    options: ["Windsor Bellegarde", "Jean Price-Mars", "Davertige", "Léon Laleau"],
    correct: 1
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Frankétienne ?",
    options: ["Le Nègre crucifié", "Mûr à crever", "La Blanche Négresse", "Le Rond-point"],
    correct: 1
  },
  {
    q: "Qui a publié le livre « La République d'Haïti et ses visiteurs » ?",
    options: ["James Noël", "Joujou Turenne", "Georges Anglade", "Louis Joseph Janvier"],
    correct: 3
  },
  {
    q: "Paula Clermont Péan a notamment donné naissance à quelle œuvre ?",
    options: ["Les Possédés de la pleine lune", "Le Briseur de rosée", "La Dot de Sara", "Le Mal de terre"],
    correct: 3
  },
  {
    q: "« L'Odeur du café » compte parmi les œuvres de quel auteur ?",
    options: ["Jean-Claude Charles", "Faubert Bolivar", "Massillon Coicou", "Dany Laferrière"],
    correct: 3
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Ferdinand je suis à Paris » ?",
    options: ["Gary Klang", "Ignace Nau", "Jean-Claude Charles", "Makenzy Orcel"],
    correct: 2
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Le Peuple des terres mêlées » ?",
    options: ["Fresnel Sylvestre", "René Philoctète", "Serge Legagneur", "Lyonel Trouillot"],
    correct: 1
  },
  {
    q: "Parmi ces titres, lequel est signé Carl Brouard ?",
    options: ["Encre allègre", "Pages retrouvées", "Impasse Dignité", "Poésies nationales"],
    correct: 1
  },
  {
    q: "Identifiez l'œuvre écrite par Michel Soukar :",
    options: ["Corps mêlés", "Pays sans chapeau", "Le Fusil et la croix", "Yanvalou pour Charlie"],
    correct: 2
  },
  {
    q: "Qui a publié le livre « Le Reste du temps » ?",
    options: ["Justin Chrysostome Dorsainvil", "Josaphat-Robert Large", "Jean-Robert Cadet", "Emmelie Prophète"],
    correct: 3
  },
  {
    q: "Quel écrivain haïtien a écrit « Romancero aux étoiles » ?",
    options: ["Davertige", "Jean D'Amérique", "Jacques Stephen Alexis", "Louis Joseph Janvier"],
    correct: 2
  },
  {
    q: "« Écrivains haïtiens » a été publié(e) par quel écrivain haïtien ?",
    options: ["Ida Faubert", "Marie Vieux-Chauvet", "Windsor Bellegarde", "Edwidge Danticat"],
    correct: 2
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Les Villages de Dieu » ?",
    options: ["Jean D'Amérique", "Carl Brouard", "Edwidge Danticat", "Emmelie Prophète"],
    correct: 3
  },
  {
    q: "L'œuvre « La Famille des Pitite-Caille » a été écrite par :",
    options: ["Massillon Coicou", "Anténor Firmin", "Demesvar Delorme", "Justin Lhérisson"],
    correct: 3
  },
  {
    q: "Le livre « Assaut à la nuit » est dû à la plume de :",
    options: ["Jacques Roumain", "Ida Faubert", "Roussan Camille", "Hénock Trouillot"],
    correct: 2
  },
  {
    q: "À qui doit-on l'œuvre littéraire « L'Autre Face de la mer » ?",
    options: ["Louis-Philippe Dalembert", "Fernand Hibbert", "Anténor Firmin", "Antoine Innocent"],
    correct: 0
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Hénock Trouillot ?",
    options: ["Dessalines ou le sang du Pont-Rouge", "Manhattan Blues", "Le Choc", "Jacmel au crépuscule"],
    correct: 0
  },
  {
    q: "L'œuvre « Textes interdits » a été écrite par :",
    options: ["Pradel Pompilus", "Serge Legagneur", "Isnardin Vieux", "Joujou Turenne"],
    correct: 1
  },
  {
    q: "Quel écrivain haïtien a écrit « Le Reste du temps » ?",
    options: ["Antoine Innocent", "Georges Sylvain", "Louis-Philippe Dalembert", "Emmelie Prophète"],
    correct: 3
  },
  {
    q: "Le livre « Rires et Pleurs » est dû à la plume de :",
    options: ["Léon Laleau", "Oswald Durand", "René Depestre", "Joujou Turenne"],
    correct: 1
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Antoine Innocent ?",
    options: ["Mimola", "Le Fusil et la croix", "Manhattan Blues", "Corps mêlés"],
    correct: 0
  },
  {
    q: "« Le Livre d'Emma » compte parmi les œuvres de quel auteur ?",
    options: ["Serge Legagneur", "Gary Klang", "Marvin Victor", "Marie-Célie Agnant"],
    correct: 3
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Émile Roumer ?",
    options: ["Passages", "Poèmes d'Haïti et de France", "L'Ombre animale", "Moi, fardeau inhérent"],
    correct: 1
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Yanvalou pour Charlie » ?",
    options: ["Massillon Coicou", "Lyonel Trouillot", "Émile Roumer", "Justin Chrysostome Dorsainvil"],
    correct: 1
  },
  {
    q: "Quel livre porte la signature de Ida Faubert ?",
    options: ["Yanvalou pour Charlie", "Sous le soleil d'Haïti", "Le Mal de terre", "Mère-Solitude"],
    correct: 1
  },
  {
    q: "L'écrivain(e) Évelyne Trouillot est célèbre pour avoir publié :",
    options: ["Je suis vivant", "Maître-Minuit", "Rosalie l'infâme", "La République d'Haïti et ses visiteurs"],
    correct: 2
  },
  {
    q: "Le livre « Kasalé » est dû à la plume de :",
    options: ["Kettly Mars", "Etzer Vilaire", "Justin Chrysostome Dorsainvil", "Ignace Nau"],
    correct: 0
  },
  {
    q: "Liliane Devieux-Dehoux a notamment donné naissance à quelle œuvre ?",
    options: ["L'Amour oui. La mort non", "Moi, Toussaint Louverture", "Romancero aux étoiles", "Moi, fardeau inhérent"],
    correct: 0
  },
  {
    q: "Quel nom d'auteur associez-vous à « Je suis vivant » ?",
    options: ["Dany Laferrière", "Léon Laleau", "Liliane Devieux-Dehoux", "Kettly Mars"],
    correct: 3
  },
  {
    q: "L'œuvre « La Crête-à-Pierrot » a été écrite par :",
    options: ["Jean-Claude Charles", "Windsor Bellegarde", "Charles Moravia", "Suzanne Comhaire-Sylvain"],
    correct: 2
  },
  {
    q: "Jean-Robert Cadet a notamment donné naissance à quelle œuvre ?",
    options: ["Restavec", "Nouveaux poèmes", "Mère-Solitude", "L'Alphabet des nuits"],
    correct: 0
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Suzanne Comhaire-Sylvain ?",
    options: ["Corps mêlés", "Les Arbres musiciens", "Les Contes haïtiens", "Les Blancs de mémoire"],
    correct: 2
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Dezafi » ?",
    options: ["Frankétienne", "Serge Legagneur", "Isnardin Vieux", "Marie Vieux-Chauvet"],
    correct: 0
  },
  {
    q: "« Romancero aux étoiles » a été publié(e) par quel écrivain haïtien ?",
    options: ["Jacques Stephen Alexis", "Louis Joseph Janvier", "Dany Laferrière", "Marie Vieux-Chauvet"],
    correct: 0
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « La Crête-à-Pierrot » ?",
    options: ["Tertulien Guilbaud", "Edwidge Danticat", "Charles Moravia", "Fresnel Sylvestre"],
    correct: 2
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Les Fantoches » ?",
    options: ["René Philoctète", "Jacques Roumain", "Roland Morisseau", "Josaphat-Robert Large"],
    correct: 1
  },
  {
    q: "De quelle plume est issue l'œuvre « La mémoire aux abois » ?",
    options: ["Anténor Firmin", "Oswald Durand", "Pradel Pompilus", "Évelyne Trouillot"],
    correct: 3
  },
  {
    q: "Quel titre figure dans la bibliographie de Serge Legagneur ?",
    options: ["Textes interdits", "Les Villages de Dieu", "Francesca", "Les Dix hommes noirs"],
    correct: 0
  },
  {
    q: "L'écrivain(e) Jean-Claude Bajeux est célèbre pour avoir publié :",
    options: ["Aube tranquille", "Manuel d'histoire d'Haïti", "Mosochwazi Kout Fè", "Alléluia pour une femme-jardin"],
    correct: 2
  },
  {
    q: "À quel mouvement littéraire haïtien appartient l'auteur Oswald Durand ?",
    options: ["Spiralisme", "Réalisme merveilleux", "Génération de la Ronde", "Indigénisme"],
    correct: 2
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Georges Castera ?",
    options: ["Le Trou du souffleur", "Assaut à la nuit", "Théâtre", "Le Conditionnel"],
    correct: 0
  },
  {
    q: "De quelle plume est issue l'œuvre « Silhouettes de nègres et de négrophiles » ?",
    options: ["Jean Price-Mars", "Georges Sylvain", "René Depestre", "Ida Faubert"],
    correct: 0
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Guillaume et Nathalie » ?",
    options: ["Georges Sylvain", "Louis Joseph Janvier", "Yanick Lahens", "Georges Anglade"],
    correct: 2
  },
  {
    q: "Quel ouvrage a été publié par Yanick Lahens ?",
    options: ["L'Année Dessalines", "La Couleur de l'aube", "Moi, fardeau inhérent", "Nouveaux poèmes"],
    correct: 1
  },
  {
    q: "Quel nom d'auteur associez-vous à « Soleil à coudre » ?",
    options: ["Joujou Turenne", "Yanick Lahens", "Jean D'Amérique", "Marie-Célie Agnant"],
    correct: 2
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Silhouettes de nègres et de négrophiles » ?",
    options: ["Charles Moravia", "Carl Brouard", "René Depestre", "Jean Price-Mars"],
    correct: 3
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « La Danse sur le volcan » ?",
    options: ["Louis-Philippe Dalembert", "Davertige", "Marie Vieux-Chauvet", "Tertulien Guilbaud"],
    correct: 2
  },
  {
    q: "Identifiez l'œuvre écrite par Nadine Magloire :",
    options: ["Dezafi", "Le Mal de vivre", "Fille d'Haïti", "Les Immortelles"],
    correct: 1
  },
  {
    q: "Parmi ces titres, lequel est signé Kettly Mars ?",
    options: ["Le Fusil et la croix", "La Blanche Négresse", "L'Heure hybride", "Les Étrangers de la maison"],
    correct: 2
  },
  {
    q: "À quel mouvement littéraire haïtien appartient l'auteur Jacques Stephen Alexis ?",
    options: ["Spiralisme", "Haïti Littéraire", "Réalisme merveilleux", "Indigénisme"],
    correct: 2
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Mimola » ?",
    options: ["Antoine Innocent", "Anthony Phelps", "Yanick Lahens", "Edwidge Danticat"],
    correct: 0
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Le Briseur de rosée » ?",
    options: ["Émile Ollivier", "Justin Chrysostome Dorsainvil", "Justin Lhérisson", "Edwidge Danticat"],
    correct: 3
  },
  {
    q: "« Le Mât de cocagne » compte parmi les œuvres de quel auteur ?",
    options: ["Placide David", "René Depestre", "Kettly Mars", "Stanley Péan"],
    correct: 1
  },
  {
    q: "Quel écrivain haïtien a écrit « Le Mât de cocagne » ?",
    options: ["Marie-Célie Agnant", "René Depestre", "Lyonel Trouillot", "Cléante Valcin"],
    correct: 1
  },
  {
    q: "L'écrivain(e) Lyonel Trouillot est célèbre pour avoir publié :",
    options: ["L'Alphabet des nuits", "Frayeur", "Milwaukee Blues", "Yanvalou pour Charlie"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Les Dix hommes noirs » ?",
    options: ["Michel Soukar", "Jean Métellus", "Tertulien Guilbaud", "Etzer Vilaire"],
    correct: 3
  },
  {
    q: "Retrouvez l'auteur de « Saisons sauvages » parmi ces propositions :",
    options: ["Carl Brouard", "René Philoctète", "Kettly Mars", "Guy Régis Jr"],
    correct: 2
  },
  {
    q: "Quel titre figure dans la bibliographie de Syto Cavé ?",
    options: ["Ainsi parla l'oncle", "Huit jours dans un no man's land", "Le Qui-vive", "Le Manuscrit de mon ami"],
    correct: 2
  },
  {
    q: "Quelle est l'œuvre de Louis-Philippe Dalembert parmi cette liste ?",
    options: ["L'Autre Face de la mer", "Le Sang et la Mer", "Haïti kenbe la !", "Pays sans chapeau"],
    correct: 0
  },
  {
    q: "« Mimola » compte parmi les œuvres de quel auteur ?",
    options: ["Serge Legagneur", "Antoine Innocent", "Marie-Célie Agnant", "Jean-Claude Fignolé"],
    correct: 1
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Demesvar Delorme ?",
    options: ["Pages retrouvées", "Réflexions diverses sur Haïti", "Gouverneurs de la rosée", "Haïti, terre mystique"],
    correct: 1
  },
  {
    q: "L'œuvre « Les Thazar » a été écrite par :",
    options: ["Fernand Hibbert", "Frankétienne", "Joujou Turenne", "Faubert Bolivar"],
    correct: 0
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Pays sans chapeau » ?",
    options: ["Anthony Phelps", "Marvin Victor", "Dany Laferrière", "Etzer Vilaire"],
    correct: 2
  },
  {
    q: "Retrouvez l'auteur de « Mimola » parmi ces propositions :",
    options: ["Jean Métellus", "Justin Lhérisson", "Pradel Pompilus", "Antoine Innocent"],
    correct: 3
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Les Contes haïtiens » ?",
    options: ["Josaphat-Robert Large", "Jacques Roumain", "Makenzy Orcel", "Suzanne Comhaire-Sylvain"],
    correct: 3
  },
  {
    q: "Le livre « Belle merveille » est dû à la plume de :",
    options: ["Stanley Péan", "Ida Faubert", "Frédéric Marcelin", "James Noël"],
    correct: 3
  },
  {
    q: "Qui a publié le livre « Compère Général Soleil » ?",
    options: ["Jacques Stephen Alexis", "Alibée Féry", "Etzer Vilaire", "Jean-Robert Cadet"],
    correct: 0
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Le Choc » ?",
    options: ["Cléante Valcin", "Léon Laleau", "Windsor Bellegarde", "Jean-Euphèle Milcé"],
    correct: 1
  },
  {
    q: "« Soleil à coudre » compte parmi les œuvres de quel auteur ?",
    options: ["Anthony Phelps", "Jean D'Amérique", "Gary Klang", "Georges Castera"],
    correct: 1
  },
  {
    q: "Quel ouvrage a été publié par Massillon Coicou ?",
    options: ["L'Alphabet des nuits", "Les Arbres musiciens", "Ces îles qui marchent", "Passions"],
    correct: 3
  },
  {
    q: "Retrouvez l'auteur de « Romancero aux étoiles » parmi ces propositions :",
    options: ["Louis-Philippe Dalembert", "Faubert Bolivar", "Jacques Stephen Alexis", "Pradel Pompilus"],
    correct: 2
  },
  {
    q: "« Cric? Crac! » compte parmi les œuvres de quel auteur ?",
    options: ["James Noël", "Windsor Bellegarde", "Georges Sylvain", "Suzanne Comhaire-Sylvain"],
    correct: 2
  },
  {
    q: "Parmi ces titres, lequel est signé Émile Ollivier ?",
    options: ["Mère-Solitude", "La mémoire aux abois", "La Belle Amour humaine", "Rue des pas perdus"],
    correct: 0
  },
  {
    q: "De quelle plume est issue l'œuvre « Le Livre d'Emma » ?",
    options: ["Jean-Robert Léonidas", "Marie-Célie Agnant", "Roussan Camille", "Georges Castera"],
    correct: 1
  },
  {
    q: "Quel écrivain haïtien a écrit « La Montagne ensorcelée » ?",
    options: ["Jacques Roumain", "Marie-Alice Théard", "Emmelie Prophète", "Marie-Célie Agnant"],
    correct: 0
  },
  {
    q: "« Le Conditionnel » est signé par quel auteur haïtien ?",
    options: ["Anthony Phelps", "Jean-Robert Cadet", "Évelyne Trouillot", "Guy Régis Jr"],
    correct: 0
  },
  {
    q: "Quel nom d'auteur associez-vous à « Romancero aux étoiles » ?",
    options: ["Jacques Stephen Alexis", "Etzer Vilaire", "Makenzy Orcel", "Gary Victor"],
    correct: 0
  },
  {
    q: "« La République d'Haïti et ses visiteurs » compte parmi les œuvres de quel auteur ?",
    options: ["Guy Régis Jr", "Louis Joseph Janvier", "Lyonel Trouillot", "Suzanne Comhaire-Sylvain"],
    correct: 1
  },
  {
    q: "Quel écrivain haïtien a écrit « Dezafi » ?",
    options: ["Stanley Péan", "Frankétienne", "Georges Castera", "Demesvar Delorme"],
    correct: 1
  },
  {
    q: "Quelle est l'œuvre de Marie-Thérèse Colimon-Hall parmi cette liste ?",
    options: ["Mimola", "Fils de misère", "De l'égalité des races humaines", "Dezafi"],
    correct: 1
  },
  {
    q: "Quel ouvrage a été publié par Makenzy Orcel ?",
    options: ["Clair de Manbo", "Le Peuple des terres mêlées", "Les Immortelles", "Ultravocal"],
    correct: 2
  },
  {
    q: "« L'Ombre animale » a été publié(e) par quel écrivain haïtien ?",
    options: ["Jean-Claude Charles", "Léon Laleau", "Windsor Bellegarde", "Makenzy Orcel"],
    correct: 3
  },
  {
    q: "L'œuvre « Saison de porcs » a été écrite par :",
    options: ["Gary Victor", "Émile Ollivier", "Faubert Bolivar", "Liliane Devieux-Dehoux"],
    correct: 0
  },
  {
    q: "De quelle plume est issue l'œuvre « Romancero aux étoiles » ?",
    options: ["Roland Morisseau", "Jacques Stephen Alexis", "Louis Joseph Janvier", "René Philoctète"],
    correct: 1
  },
  {
    q: "Quel nom d'auteur associez-vous à « Les Rapaces » ?",
    options: ["Fresnel Sylvestre", "Évelyne Trouillot", "Louis-Philippe Dalembert", "Marie Vieux-Chauvet"],
    correct: 3
  },
  {
    q: "L'œuvre « Rhapsodie sale » a été écrite par :",
    options: ["Jean D'Amérique", "Carl Brouard", "Marie-Célie Agnant", "Tertulien Guilbaud"],
    correct: 0
  },
  {
    q: "« Les Étrangers de la maison » a été publié(e) par quel écrivain haïtien ?",
    options: ["Josaphat-Robert Large", "Néhémy Pierre-Dahomey", "Marie Vieux-Chauvet", "Jacques Roumain"],
    correct: 0
  },
  {
    q: "Jean-Claude Charles a notamment donné naissance à quelle œuvre ?",
    options: ["Mes années Duvalier", "Ferdinand je suis à Paris", "Corps mêlés", "Romancero aux étoiles"],
    correct: 1
  },
  {
    q: "« L'Espace d'un cillement » a été publié(e) par quel écrivain haïtien ?",
    options: ["Marie-Thérèse Colimon-Hall", "Yanick Lahens", "Jacques Stephen Alexis", "Louis-Philippe Dalembert"],
    correct: 2
  },
  {
    q: "Qui a publié le livre « Théâtre » ?",
    options: ["René Philoctète", "Makenzy Orcel", "Jean-Claude Fignolé", "Syto Cavé"],
    correct: 3
  },
  {
    q: "Quelle est l'œuvre de Jean-Claude Charles parmi cette liste ?",
    options: ["Mimola", "Ferdinand je suis à Paris", "Les Blancs de mémoire", "Dezafi"],
    correct: 1
  },
  {
    q: "« Rue des pas perdus » compte parmi les œuvres de quel auteur ?",
    options: ["Dany Laferrière", "Évelyne Trouillot", "Alibée Féry", "Lyonel Trouillot"],
    correct: 3
  },
  {
    q: "Syto Cavé a notamment donné naissance à quelle œuvre ?",
    options: ["Le Roman de l'occupation", "Le Peuple des terres mêlées", "Le Qui-vive", "Corps mêlés"],
    correct: 2
  },
  {
    q: "« Les Arbres musiciens » compte parmi les œuvres de quel auteur ?",
    options: ["Josaphat-Robert Large", "René Philoctète", "Alibée Féry", "Jacques Stephen Alexis"],
    correct: 3
  },
  {
    q: "Quel écrivain haïtien a écrit « Francesca » ?",
    options: ["Georges Castera", "Etzer Vilaire", "Demesvar Delorme", "Jacques Stephen Alexis"],
    correct: 2
  },
  {
    q: "Quel nom d'auteur associez-vous à « L'Alphabet des nuits » ?",
    options: ["Josaphat-Robert Large", "Jean-Euphèle Milcé", "Néhémy Pierre-Dahomey", "Fresnel Sylvestre"],
    correct: 1
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Kasalé » ?",
    options: ["Kettly Mars", "Roland Morisseau", "Carl Brouard", "Marie-Thérèse Colimon-Hall"],
    correct: 0
  },
  {
    q: "Retrouvez l'auteur de « Les Fantoches » parmi ces propositions :",
    options: ["Marie-Alice Théard", "Pradel Pompilus", "Cléante Valcin", "Jacques Roumain"],
    correct: 3
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Georges Sylvain ?",
    options: ["Mes années Duvalier", "Cric? Crac!", "Vieilles chansons", "Les Villages de Dieu"],
    correct: 1
  },
  {
    q: "Qui a publié le livre « Au pipirite chantant » ?",
    options: ["Jean Price-Mars", "Jean Métellus", "James Noël", "René Depestre"],
    correct: 1
  },
  {
    q: "L'œuvre « Passages » a été écrite par :",
    options: ["Josaphat-Robert Large", "Davertige", "Émile Ollivier", "Georges Sylvain"],
    correct: 2
  },
  {
    q: "Quel titre figure dans la bibliographie de René Philoctète ?",
    options: ["Fille d'Haïti", "Ces îles qui marchent", "Pèlentèt", "La Famille des Pitite-Caille"],
    correct: 1
  },
  {
    q: "L'œuvre « Au pipirite chantant » a été écrite par :",
    options: ["Justin Lhérisson", "Demesvar Delorme", "Jean Métellus", "Windsor Bellegarde"],
    correct: 2
  },
  {
    q: "Justin Chrysostome Dorsainvil est notamment l'auteur(e) de :",
    options: ["Cœur des Îles", "La Blanche Négresse", "Manuel d'histoire d'Haïti", "Le Livre d'Emma"],
    correct: 2
  },
  {
    q: "Quel livre porte la signature de Jean Price-Mars ?",
    options: ["L'Alphabet des nuits", "De Saint-Domingue à Haïti", "Le Roman de l'occupation", "La Plage des songes"],
    correct: 1
  },
  {
    q: "Quel nom d'auteur associez-vous à « Poésies nationales » ?",
    options: ["Marie-Célie Agnant", "Antoine Innocent", "Joujou Turenne", "Massillon Coicou"],
    correct: 3
  },
  {
    q: "« Corps mêlés » compte parmi les œuvres de quel auteur ?",
    options: ["Louis-Philippe Dalembert", "Nadine Magloire", "Marvin Victor", "Louis Joseph Janvier"],
    correct: 2
  },
  {
    q: "Quel ouvrage a été publié par Jean-Claude Fignolé ?",
    options: ["Vieilles chansons", "Moi, Toussaint Louverture", "À l'angle des rues parallèles", "Écrit sur du ruban rose"],
    correct: 1
  },
  {
    q: "« Poésies nationales » a été publié(e) par quel écrivain haïtien ?",
    options: ["Massillon Coicou", "Jean Price-Mars", "Charles Moravia", "Anténor Firmin"],
    correct: 0
  },
  {
    q: "De quelle plume est issue l'œuvre « Corps mêlés » ?",
    options: ["Oswald Durand", "Serge Legagneur", "Joujou Turenne", "Marvin Victor"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « La Bélière Caraïbe » ?",
    options: ["Jacques Roumain", "Émile Ollivier", "Anthony Phelps", "Louis Joseph Janvier"],
    correct: 2
  },
  {
    q: "« Les Rapaces » a été publié(e) par quel écrivain haïtien ?",
    options: ["Faubert Bolivar", "Marie Vieux-Chauvet", "Louis-Philippe Dalembert", "Pradel Pompilus"],
    correct: 1
  },
  {
    q: "Quel écrivain haïtien a écrit « Manuel d'histoire d'Haïti » ?",
    options: ["Louis-Philippe Dalembert", "Jacques Stephen Alexis", "Justin Chrysostome Dorsainvil", "Hénock Trouillot"],
    correct: 2
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Jean Price-Mars ?",
    options: ["Mes années Duvalier", "Désirée Congo", "Moi, Toussaint Louverture", "De Saint-Domingue à Haïti"],
    correct: 3
  },
  {
    q: "Qui a publié le livre « Hadriana dans tous mes rêves » ?",
    options: ["Louis Joseph Janvier", "Georges Anglade", "Jean Métellus", "René Depestre"],
    correct: 3
  },
  {
    q: "L'œuvre « Le Sang et la Mer » a été écrite par :",
    options: ["Placide David", "Gary Victor", "Alibée Féry", "Jacques Roumain"],
    correct: 1
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Rapatriés » ?",
    options: ["Néhémy Pierre-Dahomey", "Marie-Thérèse Colimon-Hall", "Isnardin Vieux", "Carl Brouard"],
    correct: 0
  },
  {
    q: "À qui doit-on l'œuvre littéraire « La Famille des Pitite-Caille » ?",
    options: ["René Depestre", "Léon Laleau", "Justin Lhérisson", "Oswald Durand"],
    correct: 2
  },
  {
    q: "On doit à la plume de Marie-Célie Agnant l'œuvre suivante :",
    options: ["Les Étrangers de la maison", "La Dot de Sara", "Rue Frontière", "Romancero aux étoiles"],
    correct: 1
  },
  {
    q: "« Soleil à coudre » est signé par quel auteur haïtien ?",
    options: ["Jean D'Amérique", "Kettly Mars", "René Philoctète", "Justin Chrysostome Dorsainvil"],
    correct: 0
  },
  {
    q: "Identifiez l'œuvre écrite par Jacques Stephen Alexis :",
    options: ["Les Arbres musiciens", "Bicentenaire", "Francesca", "La Vocation de l'élite"],
    correct: 0
  },
  {
    q: "Quel écrivain haïtien a écrit « De l'égalité des races humaines » ?",
    options: ["Roussan Camille", "Ida Faubert", "Anténor Firmin", "Justin Lhérisson"],
    correct: 2
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Gérard Étienne ?",
    options: ["Le Qui-vive", "Le Nègre crucifié", "Passages", "Zoune chez sa ninnaine"],
    correct: 1
  },
  {
    q: "Quel écrivain haïtien a écrit « Bain de lune » ?",
    options: ["Yanick Lahens", "Néhémy Pierre-Dahomey", "Jacques Roumain", "Georges Anglade"],
    correct: 0
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Textes interdits » ?",
    options: ["Rodney Saint-Éloi", "Georges Sylvain", "Serge Legagneur", "Roland Morisseau"],
    correct: 2
  },
  {
    q: "Identifiez l'œuvre écrite par Syto Cavé :",
    options: ["Milwaukee Blues", "Le bout du monde est une fenêtre", "Le Qui-vive", "Écrit sur du ruban rose"],
    correct: 2
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Michel Soukar ?",
    options: ["Hadriana dans tous mes rêves", "Rhapsodie sale", "Le Fusil et la croix", "Passages"],
    correct: 2
  },
  {
    q: "« Adieu, mon frère » est signé par quel auteur haïtien ?",
    options: ["Josaphat-Robert Large", "Edwidge Danticat", "Gary Victor", "Georges Castera"],
    correct: 1
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Île à vau-l'eau » ?",
    options: ["Évelyne Trouillot", "Jean-Robert Léonidas", "Gary Victor", "Carl Brouard"],
    correct: 1
  },
  {
    q: "Quel nom d'auteur associez-vous à « L'Espace d'un cillement » ?",
    options: ["Gérard Étienne", "Nadine Magloire", "Jacques Stephen Alexis", "Marie-Alice Théard"],
    correct: 2
  },
  {
    q: "Quelle est l'œuvre de Marvin Victor parmi cette liste ?",
    options: ["De Saint-Domingue à Haïti", "Krik? Krak!", "Une somme humaine", "Corps mêlés"],
    correct: 3
  },
  {
    q: "De quelle plume est issue l'œuvre « Textes interdits » ?",
    options: ["Serge Legagneur", "Kettly Mars", "Joujou Turenne", "Émile Ollivier"],
    correct: 0
  },
  {
    q: "Quelle est l'œuvre de Guy Régis Jr parmi cette liste ?",
    options: ["Ainsi parla l'oncle", "Jacques Roche, la vie entière", "Moi, fardeau inhérent", "Encre allègre"],
    correct: 2
  },
  {
    q: "Qui a publié le livre « Maître-Minuit » ?",
    options: ["Jean-Robert Cadet", "Ida Faubert", "Antoine Innocent", "Makenzy Orcel"],
    correct: 3
  },
  {
    q: "Identifiez l'œuvre écrite par Pradel Pompilus :",
    options: ["Des fleurs pour les héros", "La mémoire aux abois", "Manuel illustré d'histoire de la littérature haïtienne", "Anacaona"],
    correct: 2
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Néhémy Pierre-Dahomey ?",
    options: ["Pays sans chapeau", "Krik? Krak!", "Boulevard Baie des Anges", "Écrit sur du ruban rose"],
    correct: 2
  },
  {
    q: "Quel nom d'auteur associez-vous à « La mémoire aux abois » ?",
    options: ["Évelyne Trouillot", "Jean D'Amérique", "Ignace Nau", "Jean-Euphèle Milcé"],
    correct: 0
  },
  {
    q: "On doit à la plume de Justin Lhérisson l'œuvre suivante :",
    options: ["Le Roman de l'occupation", "Les Arbres musiciens", "Corps mêlés", "La Famille des Pitite-Caille"],
    correct: 3
  },
  {
    q: "Parmi ces titres, lequel est signé Hénock Trouillot ?",
    options: ["Bois d'ébène", "Les Villages de Dieu", "Dessalines ou le sang du Pont-Rouge", "Textes interdits"],
    correct: 2
  },
  {
    q: "« L'Année Dessalines » a été publié(e) par quel écrivain haïtien ?",
    options: ["Jean Métellus", "Roussan Camille", "Hénock Trouillot", "Jacques Stephen Alexis"],
    correct: 0
  },
  {
    q: "On doit à la plume de Ignace Nau l'œuvre suivante :",
    options: ["Anacaona", "Épisode de la Révolution", "Les Immortelles", "Bain de lune"],
    correct: 1
  },
  {
    q: "Quelle est l'œuvre de Carl Brouard parmi cette liste ?",
    options: ["Idem", "Les Étrangers de la maison", "De Saint-Domingue à Haïti", "Pages retrouvées"],
    correct: 3
  },
  {
    q: "« Ainsi parla l'oncle » a été publié(e) par quel écrivain haïtien ?",
    options: ["Jean Price-Mars", "Stanley Péan", "Louis Joseph Janvier", "Nadine Magloire"],
    correct: 0
  },
  {
    q: "Identifiez l'œuvre écrite par Kettly Mars :",
    options: ["L'Amour oui. La mort non", "Saisons sauvages", "Silhouettes de nègres et de négrophiles", "Le Mal de terre"],
    correct: 1
  },
  {
    q: "L'écrivain(e) Nadine Magloire est célèbre pour avoir publié :",
    options: ["Contes et légendes d'Haïti", "Fonds des Nègres", "Le Mal de vivre", "Poèmes d'Haïti et de France"],
    correct: 2
  },
  {
    q: "Quel écrivain haïtien a écrit « Fils de misère » ?",
    options: ["Georges Sylvain", "Ignace Nau", "Jean-Claude Fignolé", "Marie-Thérèse Colimon-Hall"],
    correct: 3
  },
  {
    q: "Quel écrivain haïtien a écrit « Les Fantoches » ?",
    options: ["Dany Laferrière", "Georges Anglade", "Jacques Roumain", "Stanley Péan"],
    correct: 2
  },
  {
    q: "À qui doit-on l'œuvre littéraire « La Vocation de l'élite » ?",
    options: ["Jean Price-Mars", "Marvin Victor", "Kettly Mars", "Jean-Euphèle Milcé"],
    correct: 0
  },
  {
    q: "Quel nom d'auteur associez-vous à « La Couleur de l'aube » ?",
    options: ["Yanick Lahens", "Stanley Péan", "Jean-Robert Léonidas", "Tertulien Guilbaud"],
    correct: 0
  },
  {
    q: "Quel livre porte la signature de Carl Brouard ?",
    options: ["Rapatriés", "Écrit sur du ruban rose", "Cœur des Îles", "Une eau-forte"],
    correct: 1
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Gérard Étienne ?",
    options: ["Le Nègre crucifié", "Yanvalou pour Charlie", "Les Rapaces", "Des fleurs pour les héros"],
    correct: 0
  },
  {
    q: "Quel ouvrage a été publié par Jean-Robert Léonidas ?",
    options: ["Les Contes haïtiens", "Rires et Pleurs", "Une eau-forte", "Île à vau-l'eau"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Ces îles qui marchent » ?",
    options: ["Paula Clermont Péan", "René Philoctète", "Alibée Féry", "Jean-Robert Léonidas"],
    correct: 1
  },
  {
    q: "Qui a publié le livre « Le Choc » ?",
    options: ["Georges Sylvain", "Léon Laleau", "Hénock Trouillot", "Jean-Robert Léonidas"],
    correct: 1
  },
  {
    q: "« Adieu, mon frère » a été publié(e) par quel écrivain haïtien ?",
    options: ["Edwidge Danticat", "Michel Soukar", "Jean D'Amérique", "Yanick Lahens"],
    correct: 0
  },
  {
    q: "L'écrivain(e) Anthony Phelps est célèbre pour avoir publié :",
    options: ["Le Conditionnel", "Douces déroutes", "Amour, Colère et Folie", "Zombi Blues"],
    correct: 0
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Dezafi » ?",
    options: ["Frankétienne", "Marie-Thérèse Colimon-Hall", "Roussan Camille", "Makenzy Orcel"],
    correct: 0
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Avant que les ombres s'effacent » ?",
    options: ["Nadine Magloire", "Louis-Philippe Dalembert", "Évelyne Trouillot", "Placide David"],
    correct: 1
  },
  {
    q: "On rattache généralement Anthony Phelps à quel mouvement des lettres haïtiennes ?",
    options: ["Indigénisme", "Réalisme merveilleux", "Spiralisme", "Haïti Littéraire"],
    correct: 3
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Le Cri de l'oiseau rouge » ?",
    options: ["Edwidge Danticat", "Léon Laleau", "Frankétienne", "Cléante Valcin"],
    correct: 0
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Treize nouvelles vaudou » ?",
    options: ["Gary Victor", "Gary Klang", "Dany Laferrière", "Marie-Thérèse Colimon-Hall"],
    correct: 0
  },
  {
    q: "Oswald Durand a notamment donné naissance à quelle œuvre ?",
    options: ["Choucoune", "Soleil à coudre", "Bicentenaire", "Réflexions diverses sur Haïti"],
    correct: 0
  },
  {
    q: "Qui a publié le livre « La Belle Amour humaine » ?",
    options: ["Justin Lhérisson", "James Noël", "Fernand Hibbert", "Lyonel Trouillot"],
    correct: 3
  },
  {
    q: "« Hadriana dans tous mes rêves » compte parmi les œuvres de quel auteur ?",
    options: ["Gary Klang", "Edwidge Danticat", "Georges Castera", "René Depestre"],
    correct: 3
  },
  {
    q: "À qui doit-on l'œuvre littéraire « L'Année Dessalines » ?",
    options: ["Jacques Roumain", "Syto Cavé", "Jean Métellus", "Massillon Coicou"],
    correct: 2
  },
  {
    q: "Quel nom d'auteur associez-vous à « Le Testament des solitudes » ?",
    options: ["Emmelie Prophète", "Massillon Coicou", "Jean-Claude Bajeux", "Placide David"],
    correct: 0
  },
  {
    q: "« Rapatriés » a été publié(e) par quel écrivain haïtien ?",
    options: ["Marie Vieux-Chauvet", "Néhémy Pierre-Dahomey", "Antoine Innocent", "Serge Legagneur"],
    correct: 1
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Fernand Hibbert ?",
    options: ["Restavec", "Romulus", "Le Lambi", "Le Reste du temps"],
    correct: 1
  },
  {
    q: "« Musa-Paidica » a été publié(e) par quel écrivain haïtien ?",
    options: ["Tertulien Guilbaud", "Alibée Féry", "Demesvar Delorme", "Ida Faubert"],
    correct: 1
  },
  {
    q: "Quel titre figure dans la bibliographie de Faubert Bolivar ?",
    options: ["Pages retrouvées", "Rue Frontière", "Vieilles chansons", "Écrit sur du ruban rose"],
    correct: 1
  },
  {
    q: "Quel écrivain haïtien a écrit « Vieilles chansons » ?",
    options: ["Tertulien Guilbaud", "Makenzy Orcel", "Etzer Vilaire", "Guy Régis Jr"],
    correct: 0
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Le Nègre crucifié » ?",
    options: ["Serge Legagneur", "Gérard Étienne", "Etzer Vilaire", "Marie-Célie Agnant"],
    correct: 1
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Émile Ollivier ?",
    options: ["Passages", "Pages retrouvées", "Yanvalou pour Charlie", "La Vocation de l'élite"],
    correct: 0
  },
  {
    q: "Retrouvez l'auteur de « Une somme humaine » parmi ces propositions :",
    options: ["Anthony Phelps", "Davertige", "Justin Chrysostome Dorsainvil", "Makenzy Orcel"],
    correct: 3
  },
  {
    q: "L'œuvre « Sous le soleil d'Haïti » a été écrite par :",
    options: ["Paula Clermont Péan", "Liliane Devieux-Dehoux", "Ida Faubert", "Emmelie Prophète"],
    correct: 2
  },
  {
    q: "« Rhapsodie sale » compte parmi les œuvres de quel auteur ?",
    options: ["Jean D'Amérique", "Lyonel Trouillot", "René Depestre", "Émile Roumer"],
    correct: 0
  },
  {
    q: "« Les Thazar » a été publié(e) par quel écrivain haïtien ?",
    options: ["Fernand Hibbert", "Marie-Célie Agnant", "Isnardin Vieux", "Gary Victor"],
    correct: 0
  },
  {
    q: "Parmi ces titres, lequel est signé Roussan Camille ?",
    options: ["Assaut à la nuit", "Douces déroutes", "Manuel d'histoire d'Haïti", "La Montagne ensorcelée"],
    correct: 0
  },
  {
    q: "« Vieilles chansons » compte parmi les œuvres de quel auteur ?",
    options: ["Nadine Magloire", "Jean-Robert Léonidas", "Tertulien Guilbaud", "Guy Régis Jr"],
    correct: 2
  },
  {
    q: "Quel écrivain haïtien a écrit « Treize nouvelles vaudou » ?",
    options: ["Oswald Durand", "Tertulien Guilbaud", "Syto Cavé", "Gary Victor"],
    correct: 3
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Roussan Camille ?",
    options: ["Assaut à la nuit", "Aube tranquille", "Une somme humaine", "Boulevard Baie des Anges"],
    correct: 0
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Frédéric Marcelin ?",
    options: ["Le Rond-point", "Thémistocle-Épaminondas Labasterre", "Le Peuple des terres mêlées", "Adieu, mon frère"],
    correct: 1
  },
  {
    q: "Quel nom d'auteur associez-vous à « Une somme humaine » ?",
    options: ["Makenzy Orcel", "Paula Clermont Péan", "Edwidge Danticat", "Ignace Nau"],
    correct: 0
  },
  {
    q: "Quel titre figure dans la bibliographie de Yanick Lahens ?",
    options: ["La Couleur de l'aube", "Passions", "Manuel d'histoire d'Haïti", "Les Fantoches"],
    correct: 0
  },
  {
    q: "De quelle plume est issue l'œuvre « Passages » ?",
    options: ["Marie-Alice Théard", "Émile Ollivier", "Serge Legagneur", "Georges Sylvain"],
    correct: 1
  },
  {
    q: "Retrouvez l'auteur de « Bois d'ébène » parmi ces propositions :",
    options: ["Georges Sylvain", "Marie-Célie Agnant", "Gary Klang", "Jacques Roumain"],
    correct: 3
  },
  {
    q: "De quelle plume est issue l'œuvre « Fonds des Nègres » ?",
    options: ["Antoine Innocent", "Léon Laleau", "Marie Vieux-Chauvet", "Louis-Philippe Dalembert"],
    correct: 2
  },
  {
    q: "Qui a publié le livre « Le bout du monde est une fenêtre » ?",
    options: ["Antoine Innocent", "Marie-Thérèse Colimon-Hall", "Etzer Vilaire", "Emmelie Prophète"],
    correct: 3
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Avant que les ombres s'effacent » ?",
    options: ["Louis-Philippe Dalembert", "Georges Anglade", "Pradel Pompilus", "Gary Victor"],
    correct: 0
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Ainsi parla l'oncle » ?",
    options: ["Roussan Camille", "Jean Price-Mars", "Josaphat-Robert Large", "Marvin Victor"],
    correct: 1
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « La Bélière Caraïbe » ?",
    options: ["Ida Faubert", "Oswald Durand", "Makenzy Orcel", "Anthony Phelps"],
    correct: 3
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Saisons sauvages » ?",
    options: ["Kettly Mars", "Emmelie Prophète", "Placide David", "Jean-Claude Fignolé"],
    correct: 0
  },
  {
    q: "« Pages retrouvées » compte parmi les œuvres de quel auteur ?",
    options: ["Rodney Saint-Éloi", "Carl Brouard", "Néhémy Pierre-Dahomey", "Marie-Thérèse Colimon-Hall"],
    correct: 1
  },
  {
    q: "Quel nom d'auteur associez-vous à « Anacaona » ?",
    options: ["Jean Métellus", "Anthony Phelps", "Marie-Célie Agnant", "Jean-Robert Cadet"],
    correct: 0
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Francesca » ?",
    options: ["Liliane Devieux-Dehoux", "Edwidge Danticat", "Demesvar Delorme", "Nadine Magloire"],
    correct: 2
  },
  {
    q: "« Dezafi » compte parmi les œuvres de quel auteur ?",
    options: ["Kettly Mars", "Jean-Claude Fignolé", "Jean-Robert Cadet", "Frankétienne"],
    correct: 3
  },
  {
    q: "Retrouvez l'auteur de « Les Contes haïtiens » parmi ces propositions :",
    options: ["Josaphat-Robert Large", "Roland Morisseau", "Pradel Pompilus", "Suzanne Comhaire-Sylvain"],
    correct: 3
  },
  {
    q: "Quel titre figure dans la bibliographie de Michel Soukar ?",
    options: ["Bonjour et adieu à la négritude", "L'Année Dessalines", "Le Fusil et la croix", "L'Odeur du café"],
    correct: 2
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « De l'égalité des races humaines » ?",
    options: ["Fernand Hibbert", "Marie Vieux-Chauvet", "Joujou Turenne", "Anténor Firmin"],
    correct: 3
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Ida Faubert ?",
    options: ["Gouverneurs de la rosée", "Passages", "La Dot de Sara", "Sous le soleil d'Haïti"],
    correct: 3
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Syto Cavé ?",
    options: ["Pays sans chapeau", "Théâtre", "Maître-Minuit", "L'Année Dessalines"],
    correct: 1
  },
  {
    q: "Le livre « Zombi Blues » est dû à la plume de :",
    options: ["Faubert Bolivar", "Roland Morisseau", "Pradel Pompilus", "Stanley Péan"],
    correct: 3
  },
  {
    q: "Jean-Claude Bajeux a notamment donné naissance à quelle œuvre ?",
    options: ["Mosochwazi Kout Fè", "Au pipirite chantant", "La mémoire aux abois", "Restavec"],
    correct: 0
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Frayeur » ?",
    options: ["Antoine Innocent", "Windsor Bellegarde", "Suzanne Comhaire-Sylvain", "Kettly Mars"],
    correct: 3
  },
  {
    q: "Quelle est l'œuvre de Jean-Claude Bajeux parmi cette liste ?",
    options: ["Mosochwazi Kout Fè", "Au pipirite chantant", "Rapatriés", "Pays sans chapeau"],
    correct: 0
  },
  {
    q: "Identifiez l'œuvre écrite par Stanley Péan :",
    options: ["Musa-Paidica", "Les Rapaces", "La Plage des songes", "Rue Frontière"],
    correct: 2
  },
  {
    q: "Quel ouvrage a été publié par Paula Clermont Péan ?",
    options: ["Le Mal de terre", "Le Briseur de rosée", "Désirée Congo", "Mon pays que voici"],
    correct: 0
  },
  {
    q: "Qui a publié le livre « Je suis vivant » ?",
    options: ["Justin Lhérisson", "Massillon Coicou", "Kettly Mars", "Georges Anglade"],
    correct: 2
  },
  {
    q: "Quel nom d'auteur associez-vous à « Douces déroutes » ?",
    options: ["Yanick Lahens", "Josaphat-Robert Large", "Marvin Victor", "Cléante Valcin"],
    correct: 0
  },
  {
    q: "Le livre « Thérèse en mille morceaux » est dû à la plume de :",
    options: ["Marie-Thérèse Colimon-Hall", "Lyonel Trouillot", "Émile Roumer", "Edwidge Danticat"],
    correct: 1
  },
  {
    q: "Quel nom d'auteur associez-vous à « Mosochwazi Kout Fè » ?",
    options: ["Anténor Firmin", "Etzer Vilaire", "Marie Vieux-Chauvet", "Jean-Claude Bajeux"],
    correct: 3
  },
  {
    q: "« L'Oiseau schizophone » est signé par quel auteur haïtien ?",
    options: ["Frankétienne", "Rodney Saint-Éloi", "Émile Roumer", "Massillon Coicou"],
    correct: 0
  },
  {
    q: "L'œuvre « Zombi Blues » a été écrite par :",
    options: ["Cléante Valcin", "Stanley Péan", "Jean-Claude Charles", "Placide David"],
    correct: 1
  },
  {
    q: "Évelyne Trouillot est notamment l'auteur(e) de :",
    options: ["Au pipirite chantant", "Le Rond-point", "Amour, Colère et Folie", "Les Dix hommes noirs"],
    correct: 1
  },
  {
    q: "« Passages » a été publié(e) par quel écrivain haïtien ?",
    options: ["Émile Ollivier", "Emmelie Prophète", "Frédéric Marcelin", "Charles Moravia"],
    correct: 0
  },
  {
    q: "L'œuvre « Corps mêlés » a été écrite par :",
    options: ["Jean Métellus", "Marvin Victor", "Émile Ollivier", "Windsor Bellegarde"],
    correct: 1
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Fresnel Sylvestre ?",
    options: ["Moi, Toussaint Louverture", "La Famille Vortex", "Le Lambi", "Un amour à trois temps"],
    correct: 3
  },
  {
    q: "Quel nom d'auteur associez-vous à « Rue des pas perdus » ?",
    options: ["Ignace Nau", "Lyonel Trouillot", "Marie Vieux-Chauvet", "Joujou Turenne"],
    correct: 1
  },
  {
    q: "Qui a publié le livre « Idem » ?",
    options: ["Michel Soukar", "Justin Lhérisson", "Placide David", "Davertige"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Le Mât de cocagne » ?",
    options: ["Dany Laferrière", "Marie-Alice Théard", "René Depestre", "Cléante Valcin"],
    correct: 2
  },
  {
    q: "Quel nom d'auteur associez-vous à « Hadriana dans tous mes rêves » ?",
    options: ["Carl Brouard", "Frankétienne", "Ida Faubert", "René Depestre"],
    correct: 3
  },
  {
    q: "« Le Rond-point » compte parmi les œuvres de quel auteur ?",
    options: ["Syto Cavé", "René Philoctète", "Évelyne Trouillot", "Jean Métellus"],
    correct: 2
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « L'Empereur Dessalines » ?",
    options: ["Serge Legagneur", "Massillon Coicou", "Antoine Innocent", "Emmelie Prophète"],
    correct: 1
  },
  {
    q: "L'écrivain(e) Justin Lhérisson est célèbre pour avoir publié :",
    options: ["La Famille des Pitite-Caille", "Cœur des Îles", "Treize nouvelles vaudou", "Mimola"],
    correct: 0
  },
  {
    q: "L'écrivain(e) Rodney Saint-Éloi est célèbre pour avoir publié :",
    options: ["Mère-Solitude", "Haïti kenbe la !", "Comment faire l'amour avec un Nègre sans se fatiguer", "Jacmel au crépuscule"],
    correct: 1
  },
  {
    q: "Jacques Roumain a notamment donné naissance à quelle œuvre ?",
    options: ["Réflexions diverses sur Haïti", "Thémistocle-Épaminondas Labasterre", "À l'angle des rues parallèles", "Les Fantoches"],
    correct: 3
  },
  {
    q: "De quelle plume est issue l'œuvre « Mûr à crever » ?",
    options: ["Jacques Stephen Alexis", "Jacques Roumain", "Frankétienne", "Léon Laleau"],
    correct: 2
  },
  {
    q: "Quelle est l'œuvre de Georges Castera parmi cette liste ?",
    options: ["Encre allègre", "Milwaukee Blues", "Assaut à la nuit", "Les Rapaces"],
    correct: 0
  },
  {
    q: "Quel nom d'auteur associez-vous à « Le Trou du souffleur » ?",
    options: ["Georges Castera", "Fernand Hibbert", "Justin Lhérisson", "Gary Klang"],
    correct: 0
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Le Peuple des terres mêlées » ?",
    options: ["René Philoctète", "Windsor Bellegarde", "René Depestre", "Lyonel Trouillot"],
    correct: 0
  },
  {
    q: "« Bonjour et adieu à la négritude » a été publié(e) par quel écrivain haïtien ?",
    options: ["René Depestre", "Louis-Philippe Dalembert", "Michel Soukar", "Anthony Phelps"],
    correct: 0
  },
  {
    q: "Qui a publié le livre « Thémistocle-Épaminondas Labasterre » ?",
    options: ["Cléante Valcin", "Jean-Euphèle Milcé", "Carl Brouard", "Frédéric Marcelin"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Hadriana dans tous mes rêves » ?",
    options: ["Alibée Féry", "Pradel Pompilus", "Marvin Victor", "René Depestre"],
    correct: 3
  },
  {
    q: "« Le Roman de l'occupation » a été publié(e) par quel écrivain haïtien ?",
    options: ["Isnardin Vieux", "Frankétienne", "Roussan Camille", "Justin Lhérisson"],
    correct: 0
  },
  {
    q: "Le livre « Le Mal de terre » est dû à la plume de :",
    options: ["Davertige", "Paula Clermont Péan", "Gérard Étienne", "Pradel Pompilus"],
    correct: 1
  },
  {
    q: "Quel nom d'auteur associez-vous à « Romulus » ?",
    options: ["Paula Clermont Péan", "Fernand Hibbert", "Tertulien Guilbaud", "Jacques Roumain"],
    correct: 1
  },
  {
    q: "Quel livre porte la signature de Anthony Phelps ?",
    options: ["Le Lambi", "Rhapsodie sale", "Textes interdits", "La Bélière Caraïbe"],
    correct: 3
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Charles Moravia ?",
    options: ["Sous le soleil d'Haïti", "La Crête-à-Pierrot", "Île à vau-l'eau", "Impasse Dignité"],
    correct: 1
  },
  {
    q: "Windsor Bellegarde est notamment l'auteur(e) de :",
    options: ["Boulevard Baie des Anges", "Rapatriés", "Écrivains haïtiens", "Corps mêlés"],
    correct: 2
  },
  {
    q: "Retrouvez l'auteur de « Passions » parmi ces propositions :",
    options: ["Carl Brouard", "Jean Price-Mars", "Oswald Durand", "Massillon Coicou"],
    correct: 3
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Le Reste du temps » ?",
    options: ["Jean Métellus", "Emmelie Prophète", "Louis-Philippe Dalembert", "Guy Régis Jr"],
    correct: 1
  },
  {
    q: "Quel livre porte la signature de Justin Lhérisson ?",
    options: ["Poésies nationales", "La Famille des Pitite-Caille", "Vers le sud", "Encre allègre"],
    correct: 1
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Marie Vieux-Chauvet ?",
    options: ["Aube tranquille", "La Danse sur le volcan", "Jacques Roche, la vie entière", "Une eau-forte"],
    correct: 1
  },
  {
    q: "L'œuvre « La Vengeance de Mama » a été écrite par :",
    options: ["Emmelie Prophète", "Massillon Coicou", "Frédéric Marcelin", "Fresnel Sylvestre"],
    correct: 2
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Jean-Claude Charles ?",
    options: ["L'Héritage colonial en Haïti", "Ferdinand je suis à Paris", "La Crête-à-Pierrot", "L'Amour oui. La mort non"],
    correct: 1
  },
  {
    q: "« Le Mal de vivre » compte parmi les œuvres de quel auteur ?",
    options: ["Néhémy Pierre-Dahomey", "Nadine Magloire", "Jean-Claude Fignolé", "Georges Anglade"],
    correct: 1
  },
  {
    q: "« Jacques Roche, la vie entière » compte parmi les œuvres de quel auteur ?",
    options: ["Rodney Saint-Éloi", "Kettly Mars", "René Philoctète", "Windsor Bellegarde"],
    correct: 0
  },
  {
    q: "« La Dot de Sara » est signé par quel auteur haïtien ?",
    options: ["Marie Vieux-Chauvet", "Emmelie Prophète", "Frédéric Marcelin", "Marie-Célie Agnant"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Milwaukee Blues » ?",
    options: ["Liliane Devieux-Dehoux", "Marie-Célie Agnant", "Louis-Philippe Dalembert", "Marie-Alice Théard"],
    correct: 2
  },
  {
    q: "« La Blanche Négresse » a été publié(e) par quel écrivain haïtien ?",
    options: ["Placide David", "Cléante Valcin", "Georges Sylvain", "Carl Brouard"],
    correct: 1
  },
  {
    q: "De quelle plume est issue l'œuvre « Bonjour et adieu à la négritude » ?",
    options: ["Marie-Célie Agnant", "Jean-Claude Fignolé", "Makenzy Orcel", "René Depestre"],
    correct: 3
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Frankétienne ?",
    options: ["Le Cri de l'oiseau rouge", "Ultravocal", "Hadriana dans tous mes rêves", "La Dot de Sara"],
    correct: 1
  },
  {
    q: "Qui a publié le livre « Passions » ?",
    options: ["Émile Ollivier", "Marie-Thérèse Colimon-Hall", "Massillon Coicou", "Isnardin Vieux"],
    correct: 2
  },
  {
    q: "Quel titre figure dans la bibliographie de Gérard Étienne ?",
    options: ["Les Arbres musiciens", "De Saint-Domingue à Haïti", "Le Nègre crucifié", "Compère Général Soleil"],
    correct: 2
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Jacmel au crépuscule » ?",
    options: ["Joujou Turenne", "Jean Métellus", "Placide David", "Marie Vieux-Chauvet"],
    correct: 1
  },
  {
    q: "Quel écrivain haïtien a écrit « Pages retrouvées » ?",
    options: ["Placide David", "Carl Brouard", "Josaphat-Robert Large", "Frédéric Marcelin"],
    correct: 1
  },
  {
    q: "Quel écrivain haïtien a écrit « Le Mal de vivre » ?",
    options: ["Marie-Alice Théard", "Demesvar Delorme", "Ida Faubert", "Nadine Magloire"],
    correct: 3
  },
  {
    q: "Quel nom d'auteur associez-vous à « Épisode de la Révolution » ?",
    options: ["Isnardin Vieux", "Ignace Nau", "Dany Laferrière", "Demesvar Delorme"],
    correct: 1
  },
  {
    q: "« Le Conditionnel » a été publié(e) par quel écrivain haïtien ?",
    options: ["Nadine Magloire", "Jean-Robert Léonidas", "Louis-Philippe Dalembert", "Anthony Phelps"],
    correct: 3
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Liliane Devieux-Dehoux ?",
    options: ["L'Amour oui. La mort non", "Silhouettes de nègres et de négrophiles", "Le Rond-point", "La Vengeance de Mama"],
    correct: 0
  },
  {
    q: "Quel nom d'auteur associez-vous à « La Montagne ensorcelée » ?",
    options: ["Etzer Vilaire", "Charles Moravia", "Jacques Roumain", "Roussan Camille"],
    correct: 2
  },
  {
    q: "L'écrivain(e) Jean-Robert Cadet est célèbre pour avoir publié :",
    options: ["La Récolte douce des larmes", "Restavec", "Un amour à trois temps", "Les Contes haïtiens"],
    correct: 1
  },
  {
    q: "Quel ouvrage a été publié par Pradel Pompilus ?",
    options: ["Manuel illustré d'histoire de la littérature haïtienne", "Le Sang et la Mer", "Passages", "À l'angle des rues parallèles"],
    correct: 0
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Jean-Robert Léonidas ?",
    options: ["Île à vau-l'eau", "Le Testament des solitudes", "Mimola", "Romancero aux étoiles"],
    correct: 0
  },
  {
    q: "Quel écrivain haïtien a écrit « Gouverneurs de la rosée » ?",
    options: ["Louis Joseph Janvier", "Évelyne Trouillot", "Frédéric Marcelin", "Jacques Roumain"],
    correct: 3
  },
  {
    q: "Quel ouvrage a été publié par Justin Lhérisson ?",
    options: ["Les Fantoches", "Zoune chez sa ninnaine", "Cric? Crac!", "La République d'Haïti et ses visiteurs"],
    correct: 1
  },
  {
    q: "Quel nom d'auteur associez-vous à « Adieu, mon frère » ?",
    options: ["Edwidge Danticat", "Emmelie Prophète", "Émile Ollivier", "René Depestre"],
    correct: 0
  },
  {
    q: "L'œuvre « Le Trou du souffleur » a été écrite par :",
    options: ["Kettly Mars", "Anthony Phelps", "Marie-Alice Théard", "Georges Castera"],
    correct: 3
  },
  {
    q: "Quel nom d'auteur associez-vous à « Ces îles qui marchent » ?",
    options: ["Émile Roumer", "Lyonel Trouillot", "René Philoctète", "Cléante Valcin"],
    correct: 2
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « L'Ombre animale » ?",
    options: ["Massillon Coicou", "Évelyne Trouillot", "Makenzy Orcel", "Jean-Robert Cadet"],
    correct: 2
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Rodney Saint-Éloi ?",
    options: ["Pays sans chapeau", "Haïti kenbe la !", "Le Conditionnel", "Bois d'ébène"],
    correct: 1
  },
  {
    q: "L'œuvre « Le Briseur de rosée » a été écrite par :",
    options: ["Edwidge Danticat", "Yanick Lahens", "Guy Régis Jr", "Isnardin Vieux"],
    correct: 0
  },
  {
    q: "L'œuvre « Mimola » a été écrite par :",
    options: ["Edwidge Danticat", "Jean Métellus", "Antoine Innocent", "Jacques Stephen Alexis"],
    correct: 2
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Jean Price-Mars ?",
    options: ["Poésies nationales", "Silhouettes de nègres et de négrophiles", "Le Qui-vive", "Le Reste du temps"],
    correct: 1
  },
  {
    q: "Qui a publié le livre « Désirée Congo » ?",
    options: ["Georges Castera", "Antoine Innocent", "Frédéric Marcelin", "Évelyne Trouillot"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « L'Alphabet des nuits » ?",
    options: ["Jean-Euphèle Milcé", "Joujou Turenne", "Gérard Étienne", "Émile Ollivier"],
    correct: 0
  },
  {
    q: "Quel nom d'auteur associez-vous à « Boulevard Baie des Anges » ?",
    options: ["Emmelie Prophète", "Roussan Camille", "Néhémy Pierre-Dahomey", "Windsor Bellegarde"],
    correct: 2
  },
  {
    q: "L'œuvre « Jacmel au crépuscule » a été écrite par :",
    options: ["Marie Vieux-Chauvet", "Marie-Célie Agnant", "Jean Métellus", "Jean-Claude Charles"],
    correct: 2
  },
  {
    q: "Quelle est l'œuvre de Gary Klang parmi cette liste ?",
    options: ["Mère-Solitude", "Moi, Toussaint Louverture", "Haïti, terre mystique", "Romulus"],
    correct: 2
  },
  {
    q: "Quelle est l'œuvre de Davertige parmi cette liste ?",
    options: ["Jacques Roche, la vie entière", "Assaut à la nuit", "Idem", "Le bout du monde est une fenêtre"],
    correct: 2
  },
  {
    q: "« Mes années Duvalier » est signé par quel auteur haïtien ?",
    options: ["Georges Sylvain", "Marie-Alice Théard", "Émile Roumer", "Yanick Lahens"],
    correct: 1
  },
  {
    q: "Qui a publié le livre « Fils de misère » ?",
    options: ["Rodney Saint-Éloi", "Marie-Thérèse Colimon-Hall", "Louis Joseph Janvier", "Cléante Valcin"],
    correct: 1
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Emmelie Prophète ?",
    options: ["Épisode de la Révolution", "Les Possédés de la pleine lune", "Le Reste du temps", "Romulus"],
    correct: 2
  },
  {
    q: "Quel nom d'auteur associez-vous à « L'Ombre animale » ?",
    options: ["Jean Price-Mars", "Makenzy Orcel", "Gary Klang", "Kettly Mars"],
    correct: 1
  },
  {
    q: "L'écrivain(e) Charles Moravia est célèbre pour avoir publié :",
    options: ["Jacmel au crépuscule", "La Crête-à-Pierrot", "Passages", "Écrivains haïtiens"],
    correct: 1
  },
  {
    q: "Marie Vieux-Chauvet est notamment l'auteur(e) de :",
    options: ["Fille d'Haïti", "Ainsi parla l'oncle", "Au pipirite chantant", "Île à vau-l'eau"],
    correct: 0
  },
  {
    q: "Évelyne Trouillot a notamment donné naissance à quelle œuvre ?",
    options: ["La Vocation de l'élite", "Mes années Duvalier", "Désirée Congo", "Zombi Blues"],
    correct: 2
  },
  {
    q: "Retrouvez l'auteur de « La République d'Haïti et ses visiteurs » parmi ces propositions :",
    options: ["Jean D'Amérique", "Emmelie Prophète", "Frankétienne", "Louis Joseph Janvier"],
    correct: 3
  },
  {
    q: "Parmi ces titres, lequel est signé Néhémy Pierre-Dahomey ?",
    options: ["Manuel d'histoire d'Haïti", "Jacques Roche, la vie entière", "Choucoune", "Rapatriés"],
    correct: 3
  },
  {
    q: "Le livre « Séna » est dû à la plume de :",
    options: ["Isnardin Vieux", "Fernand Hibbert", "Cléante Valcin", "Anténor Firmin"],
    correct: 1
  },
  {
    q: "De quelle plume est issue l'œuvre « Haïti, terre mystique » ?",
    options: ["Frédéric Marcelin", "Dany Laferrière", "Etzer Vilaire", "Gary Klang"],
    correct: 3
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Une eau-forte » ?",
    options: ["Rodney Saint-Éloi", "Jean Métellus", "Néhémy Pierre-Dahomey", "Roland Morisseau"],
    correct: 1
  },
  {
    q: "Qui a publié le livre « Le Lambi » ?",
    options: ["Suzanne Comhaire-Sylvain", "Gary Victor", "Ignace Nau", "Frédéric Marcelin"],
    correct: 2
  },
  {
    q: "De quelle plume est issue l'œuvre « Compère Général Soleil » ?",
    options: ["Davertige", "Anthony Phelps", "Jacques Stephen Alexis", "Marie-Célie Agnant"],
    correct: 2
  },
  {
    q: "« L'Héritage colonial en Haïti » est signé par quel auteur haïtien ?",
    options: ["Jean-Robert Cadet", "Marvin Victor", "Fernand Hibbert", "Placide David"],
    correct: 3
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Roland Morisseau ?",
    options: ["Rêver debout", "La Famille des Pitite-Caille", "L'Heure hybride", "Mon pays que voici"],
    correct: 0
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Stanley Péan ?",
    options: ["La Plage des songes", "Gouverneurs de la rosée", "La Danse sur le volcan", "Bonjour et adieu à la négritude"],
    correct: 0
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Windsor Bellegarde ?",
    options: ["Belle merveille", "Contes et légendes d'Haïti", "Douces déroutes", "Écrivains haïtiens"],
    correct: 3
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Clair de Manbo » ?",
    options: ["Gary Victor", "Jean-Claude Charles", "Jean-Claude Bajeux", "Guy Régis Jr"],
    correct: 0
  },
  {
    q: "Retrouvez l'auteur de « La Danse sur le volcan » parmi ces propositions :",
    options: ["Évelyne Trouillot", "Stanley Péan", "Marie Vieux-Chauvet", "Georges Anglade"],
    correct: 2
  },
  {
    q: "On doit à la plume de Jacques Stephen Alexis l'œuvre suivante :",
    options: ["Les Blancs de mémoire", "Une eau-forte", "Le Sang et la Mer", "L'Espace d'un cillement"],
    correct: 3
  },
  {
    q: "Retrouvez l'auteur de « Des fleurs pour les héros » parmi ces propositions :",
    options: ["Émile Roumer", "Anthony Phelps", "Fernand Hibbert", "Léon Laleau"],
    correct: 1
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « L'Espace d'un cillement » ?",
    options: ["Jean-Robert Cadet", "Jacques Stephen Alexis", "Anthony Phelps", "Windsor Bellegarde"],
    correct: 1
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Mosochwazi Kout Fè » ?",
    options: ["Jean-Claude Bajeux", "Liliane Devieux-Dehoux", "Faubert Bolivar", "Josaphat-Robert Large"],
    correct: 0
  },
  {
    q: "Louis Joseph Janvier a notamment donné naissance à quelle œuvre ?",
    options: ["Zoune chez sa ninnaine", "Désirée Congo", "Écrit sur du ruban rose", "La République d'Haïti et ses visiteurs"],
    correct: 3
  },
  {
    q: "De quelle plume est issue l'œuvre « Rires et Pleurs » ?",
    options: ["Massillon Coicou", "Frédéric Marcelin", "Pradel Pompilus", "Oswald Durand"],
    correct: 3
  },
  {
    q: "Retrouvez l'auteur de « Dezafi » parmi ces propositions :",
    options: ["Jean D'Amérique", "Frankétienne", "Antoine Innocent", "Joujou Turenne"],
    correct: 1
  },
  {
    q: "Parmi ces titres, lequel est signé Évelyne Trouillot ?",
    options: ["Sous le soleil d'Haïti", "Épisode de la Révolution", "Nouveaux poèmes", "La mémoire aux abois"],
    correct: 3
  },
  {
    q: "Quel nom d'auteur associez-vous à « Zombi Blues » ?",
    options: ["Jacques Stephen Alexis", "Jean D'Amérique", "Stanley Péan", "René Philoctète"],
    correct: 2
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Josaphat-Robert Large ?",
    options: ["Le Nègre crucifié", "Les Étrangers de la maison", "Les Contes haïtiens", "Le Briseur de rosée"],
    correct: 1
  },
  {
    q: "Le livre « Choucoune » est dû à la plume de :",
    options: ["Oswald Durand", "Roland Morisseau", "Rodney Saint-Éloi", "Carl Brouard"],
    correct: 0
  },
  {
    q: "De quelle plume est issue l'œuvre « Pages retrouvées » ?",
    options: ["Jean Métellus", "Carl Brouard", "Roland Morisseau", "Ida Faubert"],
    correct: 1
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Musa-Paidica » ?",
    options: ["Alibée Féry", "Windsor Bellegarde", "Demesvar Delorme", "Georges Sylvain"],
    correct: 0
  },
  {
    q: "« Les Arbres musiciens » a été publié(e) par quel écrivain haïtien ?",
    options: ["Placide David", "Jean-Claude Fignolé", "Jacques Stephen Alexis", "Gary Victor"],
    correct: 2
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « La Plage des songes » ?",
    options: ["Hénock Trouillot", "Stanley Péan", "Cléante Valcin", "Rodney Saint-Éloi"],
    correct: 1
  },
  {
    q: "De quelle plume est issue l'œuvre « Aube tranquille » ?",
    options: ["Marie-Alice Théard", "Jean-Claude Fignolé", "Makenzy Orcel", "Roussan Camille"],
    correct: 1
  },
  {
    q: "Le livre « Maître-Minuit » est dû à la plume de :",
    options: ["Josaphat-Robert Large", "Makenzy Orcel", "Tertulien Guilbaud", "Louis-Philippe Dalembert"],
    correct: 1
  },
  {
    q: "Retrouvez l'auteur de « Le Mal de terre » parmi ces propositions :",
    options: ["Placide David", "Néhémy Pierre-Dahomey", "Léon Laleau", "Paula Clermont Péan"],
    correct: 3
  },
  {
    q: "Le livre « Soleil à coudre » est dû à la plume de :",
    options: ["Charles Moravia", "Jean D'Amérique", "Justin Lhérisson", "Cléante Valcin"],
    correct: 1
  },
  {
    q: "Quel ouvrage a été publié par Ida Faubert ?",
    options: ["Cœur des Îles", "L'Alphabet des nuits", "Pays sans chapeau", "Le Reste du temps"],
    correct: 0
  },
  {
    q: "« Douces déroutes » compte parmi les œuvres de quel auteur ?",
    options: ["René Depestre", "Jean-Euphèle Milcé", "Yanick Lahens", "Jacques Roumain"],
    correct: 2
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Les Arbres musiciens » ?",
    options: ["Jacques Stephen Alexis", "Jean-Robert Cadet", "Josaphat-Robert Large", "Marie Vieux-Chauvet"],
    correct: 0
  },
  {
    q: "Quel écrivain haïtien a écrit « Restavec » ?",
    options: ["Émile Roumer", "Liliane Devieux-Dehoux", "Justin Lhérisson", "Jean-Robert Cadet"],
    correct: 3
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Haïti kenbe la ! » ?",
    options: ["Pradel Pompilus", "Rodney Saint-Éloi", "Marie Vieux-Chauvet", "Nadine Magloire"],
    correct: 1
  },
  {
    q: "Parmi ces titres, lequel est signé Cléante Valcin ?",
    options: ["La mémoire aux abois", "Le Mal de vivre", "Mère-Solitude", "La Blanche Négresse"],
    correct: 3
  },
  {
    q: "De quelle plume est issue l'œuvre « Un Arc-en-ciel pour l'occident chrétien » ?",
    options: ["Nadine Magloire", "Placide David", "René Depestre", "Jacques Stephen Alexis"],
    correct: 2
  },
  {
    q: "« Gouverneurs de la rosée » a été publié(e) par quel écrivain haïtien ?",
    options: ["James Noël", "Justin Lhérisson", "René Philoctète", "Jacques Roumain"],
    correct: 3
  },
  {
    q: "De quelle plume est issue l'œuvre « Bain de lune » ?",
    options: ["Georges Castera", "Yanick Lahens", "Stanley Péan", "Jacques Stephen Alexis"],
    correct: 1
  },
  {
    q: "Le livre « Passions » est dû à la plume de :",
    options: ["Jacques Stephen Alexis", "Massillon Coicou", "Évelyne Trouillot", "Placide David"],
    correct: 1
  },
  {
    q: "Le livre « Le Mal de vivre » est dû à la plume de :",
    options: ["Nadine Magloire", "Syto Cavé", "Placide David", "Guy Régis Jr"],
    correct: 0
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Faubert Bolivar ?",
    options: ["Rapatriés", "Au pipirite chantant", "Rue Frontière", "Nouveaux poèmes"],
    correct: 2
  },
  {
    q: "Le livre « Sous le soleil d'Haïti » est dû à la plume de :",
    options: ["Ignace Nau", "Ida Faubert", "Demesvar Delorme", "Jean-Euphèle Milcé"],
    correct: 1
  },
  {
    q: "Quel livre porte la signature de Guy Régis Jr ?",
    options: ["Le Choc", "La Famille des Pitite-Caille", "Le Sang et la Mer", "Moi, fardeau inhérent"],
    correct: 3
  },
  {
    q: "Parmi ces titres, lequel est signé Yanick Lahens ?",
    options: ["Romancero aux étoiles", "Fille d'Haïti", "La Couleur de l'aube", "Musique nègre"],
    correct: 2
  },
  {
    q: "Quel titre figure dans la bibliographie de Jean-Robert Cadet ?",
    options: ["Ces îles qui marchent", "L'Alphabet des nuits", "Bicentenaire", "Restavec"],
    correct: 3
  },
  {
    q: "L'œuvre « Romulus » a été écrite par :",
    options: ["René Depestre", "Alibée Féry", "Georges Anglade", "Fernand Hibbert"],
    correct: 3
  },
  {
    q: "« Mon pays que voici » compte parmi les œuvres de quel auteur ?",
    options: ["Jacques Stephen Alexis", "Anthony Phelps", "Alibée Féry", "Kettly Mars"],
    correct: 1
  },
  {
    q: "Quel nom d'auteur associez-vous à « Pèlentèt » ?",
    options: ["Émile Ollivier", "Jean-Robert Cadet", "Frankétienne", "Yanick Lahens"],
    correct: 2
  },
  {
    q: "À qui doit-on l'œuvre littéraire « La Vengeance de Mama » ?",
    options: ["Anténor Firmin", "Etzer Vilaire", "Jean D'Amérique", "Frédéric Marcelin"],
    correct: 3
  },
  {
    q: "Quel livre porte la signature de Joujou Turenne ?",
    options: ["Contes et légendes d'Haïti", "Jacmel au crépuscule", "Rue Frontière", "Guillaume et Nathalie"],
    correct: 0
  },
  {
    q: "Parmi ces titres, lequel est signé Windsor Bellegarde ?",
    options: ["Écrivains haïtiens", "Les Thazar", "Le Conditionnel", "Les Blancs de mémoire"],
    correct: 0
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Rue Frontière » ?",
    options: ["Faubert Bolivar", "Ida Faubert", "Placide David", "Roland Morisseau"],
    correct: 0
  },
  {
    q: "Le livre « La Blanche Négresse » est dû à la plume de :",
    options: ["Makenzy Orcel", "Cléante Valcin", "Hénock Trouillot", "Ignace Nau"],
    correct: 1
  },
  {
    q: "Identifiez l'œuvre écrite par Demesvar Delorme :",
    options: ["La Famille des Pitite-Caille", "Assaut à la nuit", "Contes et légendes d'Haïti", "Francesca"],
    correct: 3
  },
  {
    q: "Parmi ces titres, lequel est signé Ignace Nau ?",
    options: ["L'Année Dessalines", "Épisode de la Révolution", "La Dot de Sara", "Mûr à crever"],
    correct: 1
  },
  {
    q: "Quel écrivain haïtien a écrit « La Crête-à-Pierrot » ?",
    options: ["Justin Lhérisson", "Roussan Camille", "Charles Moravia", "Marie-Thérèse Colimon-Hall"],
    correct: 2
  },
  {
    q: "Quel ouvrage a été publié par Georges Castera ?",
    options: ["Ferdinand je suis à Paris", "L'Heure hybride", "Mimola", "Encre allègre"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Jacmel au crépuscule » ?",
    options: ["Jean Métellus", "Jean-Robert Léonidas", "Jean-Robert Cadet", "Néhémy Pierre-Dahomey"],
    correct: 0
  },
  {
    q: "« Un Arc-en-ciel pour l'occident chrétien » a été publié(e) par quel écrivain haïtien ?",
    options: ["René Depestre", "Stanley Péan", "Émile Roumer", "Oswald Durand"],
    correct: 0
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « La Montagne ensorcelée » ?",
    options: ["Georges Anglade", "Jean-Claude Charles", "James Noël", "Jacques Roumain"],
    correct: 3
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Une somme humaine » ?",
    options: ["Ida Faubert", "Jean-Claude Bajeux", "Makenzy Orcel", "Serge Legagneur"],
    correct: 2
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Les Arbres musiciens » ?",
    options: ["Josaphat-Robert Large", "Jacques Stephen Alexis", "Jean-Claude Bajeux", "Yanick Lahens"],
    correct: 1
  },
  {
    q: "L'écrivain(e) Carl Brouard est célèbre pour avoir publié :",
    options: ["Le Briseur de rosée", "Une eau-forte", "Restavec", "Écrit sur du ruban rose"],
    correct: 3
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Dezafi » ?",
    options: ["Jean D'Amérique", "Frankétienne", "Paula Clermont Péan", "Louis Joseph Janvier"],
    correct: 1
  },
  {
    q: "Quel livre porte la signature de Suzanne Comhaire-Sylvain ?",
    options: ["Les Arbres musiciens", "Les Villages de Dieu", "Les Contes haïtiens", "Je suis vivant"],
    correct: 2
  },
  {
    q: "Identifiez l'œuvre écrite par Jean-Claude Fignolé :",
    options: ["Les Possédés de la pleine lune", "Le Livre d'Emma", "Mûr à crever", "Le Trou du souffleur"],
    correct: 0
  },
  {
    q: "« La Plage des songes » a été publié(e) par quel écrivain haïtien ?",
    options: ["Demesvar Delorme", "Kettly Mars", "Justin Chrysostome Dorsainvil", "Stanley Péan"],
    correct: 3
  },
  {
    q: "Le livre « Francesca » est dû à la plume de :",
    options: ["Demesvar Delorme", "Massillon Coicou", "Charles Moravia", "Placide David"],
    correct: 0
  },
  {
    q: "L'œuvre « La Dot de Sara » a été écrite par :",
    options: ["Néhémy Pierre-Dahomey", "Alibée Féry", "Marie-Alice Théard", "Marie-Célie Agnant"],
    correct: 3
  },
  {
    q: "Quel ouvrage a été publié par Roland Morisseau ?",
    options: ["La Couleur de l'aube", "L'Héritage colonial en Haïti", "Rêver debout", "Jacques Roche, la vie entière"],
    correct: 2
  },
  {
    q: "« Pays sans chapeau » a été publié(e) par quel écrivain haïtien ?",
    options: ["Kettly Mars", "Guy Régis Jr", "Dany Laferrière", "Jacques Stephen Alexis"],
    correct: 2
  },
  {
    q: "Guy Régis Jr est notamment l'auteur(e) de :",
    options: ["Avant que les ombres s'effacent", "De Saint-Domingue à Haïti", "Moi, fardeau inhérent", "Gouverneurs de la rosée"],
    correct: 2
  },
  {
    q: "« Ces îles qui marchent » compte parmi les œuvres de quel auteur ?",
    options: ["Yanick Lahens", "René Philoctète", "Jean-Robert Léonidas", "Emmelie Prophète"],
    correct: 1
  },
  {
    q: "L'œuvre « Mur Méditerranée » a été écrite par :",
    options: ["Emmelie Prophète", "Rodney Saint-Éloi", "Anténor Firmin", "Louis-Philippe Dalembert"],
    correct: 3
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Georges Anglade ?",
    options: ["Les Blancs de mémoire", "Zombi Blues", "Pages retrouvées", "L'Année Dessalines"],
    correct: 0
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Alibée Féry ?",
    options: ["Musa-Paidica", "Silhouettes de nègres et de négrophiles", "La Couleur de l'aube", "Écrit sur du ruban rose"],
    correct: 0
  },
  {
    q: "Qui a publié le livre « Les Thazar » ?",
    options: ["Lyonel Trouillot", "Jean-Claude Charles", "Fernand Hibbert", "Marie-Célie Agnant"],
    correct: 2
  },
  {
    q: "Quelle est l'œuvre de Stanley Péan parmi cette liste ?",
    options: ["La Plage des songes", "Écrit sur du ruban rose", "Manhattan Blues", "Amour, Colère et Folie"],
    correct: 0
  },
  {
    q: "Quel livre porte la signature de Faubert Bolivar ?",
    options: ["Le Manuscrit de mon ami", "De Saint-Domingue à Haïti", "Jacques Roche, la vie entière", "Rue Frontière"],
    correct: 3
  },
  {
    q: "Quel écrivain haïtien a écrit « Les Villages de Dieu » ?",
    options: ["Emmelie Prophète", "Jean Métellus", "Lyonel Trouillot", "Syto Cavé"],
    correct: 0
  },
  {
    q: "Quel écrivain haïtien a écrit « Manuel illustré d'histoire de la littérature haïtienne » ?",
    options: ["Pradel Pompilus", "Jean-Euphèle Milcé", "Faubert Bolivar", "Fernand Hibbert"],
    correct: 0
  },
  {
    q: "Pradel Pompilus a notamment donné naissance à quelle œuvre ?",
    options: ["Treize nouvelles vaudou", "Le Fusil et la croix", "Manuel illustré d'histoire de la littérature haïtienne", "Le Livre d'Emma"],
    correct: 2
  },
  {
    q: "Quelle est l'œuvre de Roussan Camille parmi cette liste ?",
    options: ["L'Amour oui. La mort non", "Mûr à crever", "À l'angle des rues parallèles", "Assaut à la nuit"],
    correct: 3
  },
  {
    q: "Retrouvez l'auteur de « Moi, fardeau inhérent » parmi ces propositions :",
    options: ["Guy Régis Jr", "Frédéric Marcelin", "Évelyne Trouillot", "Jean D'Amérique"],
    correct: 0
  },
  {
    q: "Retrouvez l'auteur de « Manuel illustré d'histoire de la littérature haïtienne » parmi ces propositions :",
    options: ["Charles Moravia", "Pradel Pompilus", "Antoine Innocent", "Josaphat-Robert Large"],
    correct: 1
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Jean-Euphèle Milcé ?",
    options: ["À l'angle des rues parallèles", "L'Alphabet des nuits", "La Couleur de l'aube", "Cœur des Îles"],
    correct: 1
  },
  {
    q: "De quelle plume est issue l'œuvre « Moi, fardeau inhérent » ?",
    options: ["Kettly Mars", "Anthony Phelps", "Néhémy Pierre-Dahomey", "Guy Régis Jr"],
    correct: 3
  },
  {
    q: "Gary Victor a notamment donné naissance à quelle œuvre ?",
    options: ["Une eau-forte", "Saison de porcs", "Écrit sur du ruban rose", "Épisode de la Révolution"],
    correct: 1
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Kettly Mars ?",
    options: ["La Vocation de l'élite", "Romancero aux étoiles", "Fille d'Haïti", "Je suis vivant"],
    correct: 3
  },
  {
    q: "Quel titre figure dans la bibliographie de Suzanne Comhaire-Sylvain ?",
    options: ["Textes interdits", "Les Possédés de la pleine lune", "Compère Général Soleil", "Les Contes haïtiens"],
    correct: 3
  },
  {
    q: "Identifiez l'œuvre écrite par Marie-Thérèse Colimon-Hall :",
    options: ["Zombi Blues", "Anacaona", "Réflexions diverses sur Haïti", "Fils de misère"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Le Livre d'Emma » ?",
    options: ["Justin Lhérisson", "Marie-Célie Agnant", "Demesvar Delorme", "Justin Chrysostome Dorsainvil"],
    correct: 1
  },
  {
    q: "Quel titre figure dans la bibliographie de Justin Lhérisson ?",
    options: ["La Famille des Pitite-Caille", "Des fleurs pour les héros", "Le Trou du souffleur", "Le Choc"],
    correct: 0
  },
  {
    q: "Qui a publié le livre « La Danse sur le volcan » ?",
    options: ["Cléante Valcin", "Jean D'Amérique", "Marie Vieux-Chauvet", "Nadine Magloire"],
    correct: 2
  },
  {
    q: "« À l'angle des rues parallèles » a été publié(e) par quel écrivain haïtien ?",
    options: ["Gary Victor", "Louis Joseph Janvier", "Stanley Péan", "Anténor Firmin"],
    correct: 0
  },
  {
    q: "Quel ouvrage a été publié par Anténor Firmin ?",
    options: ["Musique nègre", "De l'égalité des races humaines", "Le Mal de vivre", "La Couleur de l'aube"],
    correct: 1
  },
  {
    q: "À qui doit-on l'œuvre littéraire « L'Heure hybride » ?",
    options: ["Jean-Claude Fignolé", "Kettly Mars", "Rodney Saint-Éloi", "Jean-Claude Charles"],
    correct: 1
  },
  {
    q: "Parmi ces titres, lequel est signé Joujou Turenne ?",
    options: ["Impasse Dignité", "Le Fusil et la croix", "Contes et légendes d'Haïti", "La Vocation de l'élite"],
    correct: 2
  },
  {
    q: "Identifiez l'œuvre écrite par Makenzy Orcel :",
    options: ["Maître-Minuit", "Je suis vivant", "Cœur des Îles", "Mère-Solitude"],
    correct: 0
  },
  {
    q: "« Fille d'Haïti » est signé par quel auteur haïtien ?",
    options: ["Fernand Hibbert", "Louis-Philippe Dalembert", "Placide David", "Marie Vieux-Chauvet"],
    correct: 3
  },
  {
    q: "Le livre « Les Blancs de mémoire » est dû à la plume de :",
    options: ["Kettly Mars", "Jean Métellus", "Georges Anglade", "Ida Faubert"],
    correct: 2
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Gouverneurs de la rosée » ?",
    options: ["Jacques Roumain", "Kettly Mars", "Jean Price-Mars", "Marie-Célie Agnant"],
    correct: 0
  },
  {
    q: "« Le Rond-point » a été publié(e) par quel écrivain haïtien ?",
    options: ["Évelyne Trouillot", "Marvin Victor", "Carl Brouard", "Louis-Philippe Dalembert"],
    correct: 0
  },
  {
    q: "Le livre « Frayeur » est dû à la plume de :",
    options: ["Jean-Claude Bajeux", "Kettly Mars", "Pradel Pompilus", "Jean D'Amérique"],
    correct: 1
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Adieu, mon frère » ?",
    options: ["Stanley Péan", "Edwidge Danticat", "Michel Soukar", "Marie-Alice Théard"],
    correct: 1
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Guy Régis Jr ?",
    options: ["Moi, fardeau inhérent", "Le Livre d'Emma", "Les Villages de Dieu", "La Dot de Sara"],
    correct: 0
  },
  {
    q: "Retrouvez l'auteur de « Mur Méditerranée » parmi ces propositions :",
    options: ["Pradel Pompilus", "Louis-Philippe Dalembert", "Isnardin Vieux", "Davertige"],
    correct: 1
  },
  {
    q: "« Zoune chez sa ninnaine » a été publié(e) par quel écrivain haïtien ?",
    options: ["Demesvar Delorme", "Yanick Lahens", "Justin Lhérisson", "Émile Ollivier"],
    correct: 2
  },
  {
    q: "Quel livre porte la signature de Gary Klang ?",
    options: ["Haïti, terre mystique", "Vers le sud", "Le Reste du temps", "Kasalé"],
    correct: 0
  },
  {
    q: "Le livre « Avant que les ombres s'effacent » est dû à la plume de :",
    options: ["Oswald Durand", "Gary Victor", "Louis-Philippe Dalembert", "Stanley Péan"],
    correct: 2
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Rapatriés » ?",
    options: ["Jean-Claude Bajeux", "Faubert Bolivar", "Michel Soukar", "Néhémy Pierre-Dahomey"],
    correct: 3
  },
  {
    q: "De quelle plume est issue l'œuvre « Vers le sud » ?",
    options: ["Dany Laferrière", "Kettly Mars", "Marie-Alice Théard", "Fernand Hibbert"],
    correct: 0
  },
  {
    q: "Massillon Coicou est une figure représentative de quel courant littéraire haïtien ?",
    options: ["Génération de la Ronde", "Spiralisme", "Réalisme merveilleux", "Haïti Littéraire"],
    correct: 0
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Fille d'Haïti » ?",
    options: ["Ida Faubert", "Gérard Étienne", "Marie Vieux-Chauvet", "Michel Soukar"],
    correct: 2
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Alléluia pour une femme-jardin » ?",
    options: ["Serge Legagneur", "Jean-Claude Bajeux", "Rodney Saint-Éloi", "René Depestre"],
    correct: 3
  },
  {
    q: "Quel livre porte la signature de Jean-Claude Bajeux ?",
    options: ["Haïti kenbe la !", "Fille d'Haïti", "Mosochwazi Kout Fè", "Le bout du monde est une fenêtre"],
    correct: 2
  },
  {
    q: "Le livre « Hadriana dans tous mes rêves » est dû à la plume de :",
    options: ["René Depestre", "Makenzy Orcel", "Frankétienne", "Pradel Pompilus"],
    correct: 0
  },
  {
    q: "Justin Lhérisson a notamment donné naissance à quelle œuvre ?",
    options: ["Zoune chez sa ninnaine", "Mes années Duvalier", "Théâtre", "Poèmes d'Haïti et de France"],
    correct: 0
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Des fleurs pour les héros » ?",
    options: ["Anthony Phelps", "Justin Lhérisson", "Frédéric Marcelin", "Pradel Pompilus"],
    correct: 0
  },
  {
    q: "Le livre « La Famille des Pitite-Caille » est dû à la plume de :",
    options: ["Massillon Coicou", "Jean D'Amérique", "Justin Lhérisson", "Tertulien Guilbaud"],
    correct: 2
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Kasalé » ?",
    options: ["Frankétienne", "Kettly Mars", "Jean-Claude Fignolé", "Jean Price-Mars"],
    correct: 1
  },
  {
    q: "On doit à la plume de Frédéric Marcelin l'œuvre suivante :",
    options: ["Manuel d'histoire d'Haïti", "Silhouettes de nègres et de négrophiles", "La Vengeance de Mama", "L'Héritage colonial en Haïti"],
    correct: 2
  },
  {
    q: "Le livre « Encre allègre » est dû à la plume de :",
    options: ["Marie-Thérèse Colimon-Hall", "Josaphat-Robert Large", "Georges Castera", "Frankétienne"],
    correct: 2
  },
  {
    q: "Qui a publié le livre « Boulevard Baie des Anges » ?",
    options: ["Serge Legagneur", "Gary Victor", "Fernand Hibbert", "Néhémy Pierre-Dahomey"],
    correct: 3
  },
  {
    q: "L'écrivain(e) Gary Victor est célèbre pour avoir publié :",
    options: ["La République d'Haïti et ses visiteurs", "Saison de porcs", "Boulevard Baie des Anges", "Nouveaux poèmes"],
    correct: 1
  },
  {
    q: "Quel ouvrage a été publié par Louis-Philippe Dalembert ?",
    options: ["Milwaukee Blues", "Le Manuscrit de mon ami", "L'Odeur du café", "La Vocation de l'élite"],
    correct: 0
  },
  {
    q: "De quelle plume est issue l'œuvre « Le Qui-vive » ?",
    options: ["Suzanne Comhaire-Sylvain", "Évelyne Trouillot", "Kettly Mars", "Syto Cavé"],
    correct: 3
  },
  {
    q: "Retrouvez l'auteur de « La Dot de Sara » parmi ces propositions :",
    options: ["Émile Ollivier", "Marvin Victor", "Carl Brouard", "Marie-Célie Agnant"],
    correct: 3
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Les Rapaces » ?",
    options: ["Marie Vieux-Chauvet", "René Philoctète", "Oswald Durand", "Gary Klang"],
    correct: 0
  },
  {
    q: "L'œuvre « Rires et Pleurs » a été écrite par :",
    options: ["Kettly Mars", "Emmelie Prophète", "Fernand Hibbert", "Oswald Durand"],
    correct: 3
  },
  {
    q: "Quelle est l'œuvre de Ida Faubert parmi cette liste ?",
    options: ["Cœur des Îles", "Je suis vivant", "Musa-Paidica", "Impasse Dignité"],
    correct: 0
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Au pipirite chantant » ?",
    options: ["Davertige", "Marie-Célie Agnant", "Jean Métellus", "Michel Soukar"],
    correct: 2
  },
  {
    q: "Quel nom d'auteur associez-vous à « Bois d'ébène » ?",
    options: ["Liliane Devieux-Dehoux", "Jacques Roumain", "Roussan Camille", "Anténor Firmin"],
    correct: 1
  },
  {
    q: "Quelle est l'œuvre de Pradel Pompilus parmi cette liste ?",
    options: ["Le Fusil et la croix", "Zoune chez sa ninnaine", "Avant que les ombres s'effacent", "Manuel illustré d'histoire de la littérature haïtienne"],
    correct: 3
  },
  {
    q: "« Zombi Blues » est signé par quel auteur haïtien ?",
    options: ["Stanley Péan", "Tertulien Guilbaud", "Alibée Féry", "Jean-Robert Cadet"],
    correct: 0
  },
  {
    q: "L'œuvre « Encre allègre » a été écrite par :",
    options: ["Georges Castera", "Emmelie Prophète", "Pradel Pompilus", "Suzanne Comhaire-Sylvain"],
    correct: 0
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Marie-Thérèse Colimon-Hall ?",
    options: ["Fils de misère", "L'Oiseau schizophone", "Fonds des Nègres", "Treize nouvelles vaudou"],
    correct: 0
  },
  {
    q: "Quel nom d'auteur associez-vous à « La Belle Amour humaine » ?",
    options: ["Lyonel Trouillot", "Émile Ollivier", "Fernand Hibbert", "Marie-Thérèse Colimon-Hall"],
    correct: 0
  },
  {
    q: "De quelle plume est issue l'œuvre « Pèlentèt » ?",
    options: ["Jean-Robert Cadet", "Georges Castera", "Yanick Lahens", "Frankétienne"],
    correct: 3
  },
  {
    q: "Joujou Turenne a notamment donné naissance à quelle œuvre ?",
    options: ["La mémoire aux abois", "Maître-Minuit", "Thémistocle-Épaminondas Labasterre", "Contes et légendes d'Haïti"],
    correct: 3
  },
  {
    q: "Quel écrivain haïtien a écrit « Épisode de la Révolution » ?",
    options: ["Dany Laferrière", "Tertulien Guilbaud", "Jean Price-Mars", "Ignace Nau"],
    correct: 3
  },
  {
    q: "Quel nom d'auteur associez-vous à « Les Contes haïtiens » ?",
    options: ["Jean-Claude Fignolé", "Suzanne Comhaire-Sylvain", "James Noël", "Marvin Victor"],
    correct: 1
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Thémistocle-Épaminondas Labasterre » ?",
    options: ["Frédéric Marcelin", "Gary Klang", "Hénock Trouillot", "Marvin Victor"],
    correct: 0
  },
  {
    q: "« Avant que les ombres s'effacent » a été publié(e) par quel écrivain haïtien ?",
    options: ["Louis Joseph Janvier", "Louis-Philippe Dalembert", "Gary Klang", "Isnardin Vieux"],
    correct: 1
  },
  {
    q: "Quel écrivain haïtien a écrit « Musique nègre » ?",
    options: ["Léon Laleau", "Faubert Bolivar", "René Depestre", "Georges Sylvain"],
    correct: 0
  },
  {
    q: "« La mémoire aux abois » a été publié(e) par quel écrivain haïtien ?",
    options: ["Jean-Claude Bajeux", "Michel Soukar", "Évelyne Trouillot", "Suzanne Comhaire-Sylvain"],
    correct: 2
  },
  {
    q: "De quelle plume est issue l'œuvre « L'Heure hybride » ?",
    options: ["Alibée Féry", "Kettly Mars", "Dany Laferrière", "Frédéric Marcelin"],
    correct: 1
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Frankétienne ?",
    options: ["Manuel d'histoire d'Haïti", "Pages retrouvées", "Dezafi", "La Vocation de l'élite"],
    correct: 2
  },
  {
    q: "Quel nom d'auteur associez-vous à « Jacques Roche, la vie entière » ?",
    options: ["Rodney Saint-Éloi", "Ignace Nau", "Placide David", "Paula Clermont Péan"],
    correct: 0
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Jean-Claude Bajeux ?",
    options: ["Passions", "Avant que les ombres s'effacent", "Mosochwazi Kout Fè", "Rêver debout"],
    correct: 2
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Alibée Féry ?",
    options: ["Vieilles chansons", "La Crête-à-Pierrot", "Musa-Paidica", "La Famille Vortex"],
    correct: 2
  },
  {
    q: "De quelle plume est issue l'œuvre « La Couleur de l'aube » ?",
    options: ["Yanick Lahens", "Serge Legagneur", "Suzanne Comhaire-Sylvain", "Jacques Roumain"],
    correct: 0
  },
  {
    q: "Quel écrivain haïtien a écrit « Zombi Blues » ?",
    options: ["Stanley Péan", "Antoine Innocent", "Louis Joseph Janvier", "Dany Laferrière"],
    correct: 0
  },
  {
    q: "De quelle plume est issue l'œuvre « Mimola » ?",
    options: ["Rodney Saint-Éloi", "Josaphat-Robert Large", "Antoine Innocent", "Jean D'Amérique"],
    correct: 2
  },
  {
    q: "De quelle plume est issue l'œuvre « Jacmel au crépuscule » ?",
    options: ["Jean Métellus", "Demesvar Delorme", "Justin Chrysostome Dorsainvil", "Etzer Vilaire"],
    correct: 0
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « L'Espace d'un cillement » ?",
    options: ["Cléante Valcin", "Jean-Claude Bajeux", "Jacques Stephen Alexis", "Demesvar Delorme"],
    correct: 2
  },
  {
    q: "Identifiez l'œuvre écrite par Frédéric Marcelin :",
    options: ["Le Trou du souffleur", "Thémistocle-Épaminondas Labasterre", "Pages retrouvées", "La Vocation de l'élite"],
    correct: 1
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Gérard Étienne ?",
    options: ["Manhattan Blues", "Musique nègre", "Le Nègre crucifié", "Amour, Colère et Folie"],
    correct: 2
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Impasse Dignité » ?",
    options: ["Émile Roumer", "Marie-Thérèse Colimon-Hall", "Jacques Roumain", "Emmelie Prophète"],
    correct: 3
  },
  {
    q: "« Passages » compte parmi les œuvres de quel auteur ?",
    options: ["Paula Clermont Péan", "Frankétienne", "Émile Ollivier", "Jean-Euphèle Milcé"],
    correct: 2
  },
  {
    q: "Retrouvez l'auteur de « La Famille Vortex » parmi ces propositions :",
    options: ["Carl Brouard", "Dany Laferrière", "Jean Métellus", "Jean D'Amérique"],
    correct: 2
  },
  {
    q: "Quel titre figure dans la bibliographie de Isnardin Vieux ?",
    options: ["Le Roman de l'occupation", "Moi, Toussaint Louverture", "Manuel d'histoire d'Haïti", "L'Année Dessalines"],
    correct: 0
  },
  {
    q: "« Poésies nationales » est signé par quel auteur haïtien ?",
    options: ["Marie-Alice Théard", "Massillon Coicou", "Marie Vieux-Chauvet", "Roland Morisseau"],
    correct: 1
  },
  {
    q: "Émile Roumer est notamment l'auteur(e) de :",
    options: ["Dessalines ou le sang du Pont-Rouge", "Le bout du monde est une fenêtre", "Poèmes d'Haïti et de France", "Un amour à trois temps"],
    correct: 2
  },
  {
    q: "Quel livre porte la signature de Roussan Camille ?",
    options: ["Jacques Roche, la vie entière", "Le Sang et la Mer", "Assaut à la nuit", "Choucoune"],
    correct: 2
  },
  {
    q: "« La Bélière Caraïbe » est signé par quel auteur haïtien ?",
    options: ["Oswald Durand", "Guy Régis Jr", "Yanick Lahens", "Anthony Phelps"],
    correct: 3
  },
  {
    q: "Quel écrivain haïtien a écrit « Le Nègre crucifié » ?",
    options: ["Justin Lhérisson", "Massillon Coicou", "Gérard Étienne", "Louis Joseph Janvier"],
    correct: 2
  },
  {
    q: "Le livre « Des fleurs pour les héros » est dû à la plume de :",
    options: ["René Depestre", "Anthony Phelps", "Alibée Féry", "Yanick Lahens"],
    correct: 1
  },
  {
    q: "Parmi ces titres, lequel est signé Faubert Bolivar ?",
    options: ["Rêver debout", "Kasalé", "Aube tranquille", "Rue Frontière"],
    correct: 3
  },
  {
    q: "« Le Cri de l'oiseau rouge » compte parmi les œuvres de quel auteur ?",
    options: ["Edwidge Danticat", "Jean-Claude Charles", "Oswald Durand", "Jean-Euphèle Milcé"],
    correct: 0
  },
  {
    q: "Quel nom d'auteur associez-vous à « Bonjour et adieu à la négritude » ?",
    options: ["Marvin Victor", "René Depestre", "Marie-Alice Théard", "Gary Victor"],
    correct: 1
  },
  {
    q: "« La Couleur de l'aube » compte parmi les œuvres de quel auteur ?",
    options: ["Gary Victor", "Rodney Saint-Éloi", "Jacques Stephen Alexis", "Yanick Lahens"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « La Couleur de l'aube » ?",
    options: ["Cléante Valcin", "Rodney Saint-Éloi", "Faubert Bolivar", "Yanick Lahens"],
    correct: 3
  },
  {
    q: "Retrouvez l'auteur de « Zombi Blues » parmi ces propositions :",
    options: ["Oswald Durand", "Stanley Péan", "Marie-Alice Théard", "Fresnel Sylvestre"],
    correct: 1
  },
  {
    q: "« Anacaona » compte parmi les œuvres de quel auteur ?",
    options: ["Jean Métellus", "Carl Brouard", "Jean-Euphèle Milcé", "Antoine Innocent"],
    correct: 0
  },
  {
    q: "Qui a publié le livre « Zoune chez sa ninnaine » ?",
    options: ["Joujou Turenne", "Frédéric Marcelin", "Syto Cavé", "Justin Lhérisson"],
    correct: 3
  },
  {
    q: "On doit à la plume de René Depestre l'œuvre suivante :",
    options: ["Une eau-forte", "La Bélière Caraïbe", "Hadriana dans tous mes rêves", "Bois d'ébène"],
    correct: 2
  },
  {
    q: "« Guillaume et Nathalie » compte parmi les œuvres de quel auteur ?",
    options: ["Jean Métellus", "Marvin Victor", "Yanick Lahens", "Rodney Saint-Éloi"],
    correct: 2
  },
  {
    q: "« La Montagne ensorcelée » est signé par quel auteur haïtien ?",
    options: ["Davertige", "Gary Klang", "Carl Brouard", "Jacques Roumain"],
    correct: 3
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Gary Victor ?",
    options: ["L'Héritage colonial en Haïti", "Saison de porcs", "Sous le soleil d'Haïti", "Au pipirite chantant"],
    correct: 1
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Les Étrangers de la maison » ?",
    options: ["Jacques Stephen Alexis", "Roussan Camille", "Fresnel Sylvestre", "Josaphat-Robert Large"],
    correct: 3
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Pradel Pompilus ?",
    options: ["Musa-Paidica", "Manuel illustré d'histoire de la littérature haïtienne", "Mère-Solitude", "Haïti kenbe la !"],
    correct: 1
  },
  {
    q: "De quelle plume est issue l'œuvre « L'Énigme du retour » ?",
    options: ["Émile Roumer", "Edwidge Danticat", "Etzer Vilaire", "Dany Laferrière"],
    correct: 3
  },
  {
    q: "Quelle est l'œuvre de Ignace Nau parmi cette liste ?",
    options: ["Idem", "Épisode de la Révolution", "Adieu, mon frère", "L'Ombre animale"],
    correct: 1
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Maître-Minuit » ?",
    options: ["Makenzy Orcel", "René Depestre", "Néhémy Pierre-Dahomey", "Jean Métellus"],
    correct: 0
  },
  {
    q: "L'écrivain(e) Georges Sylvain est célèbre pour avoir publié :",
    options: ["Cric? Crac!", "Au pipirite chantant", "De l'égalité des races humaines", "De Saint-Domingue à Haïti"],
    correct: 0
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Le Nègre crucifié » ?",
    options: ["Jean-Claude Fignolé", "Alibée Féry", "Faubert Bolivar", "Gérard Étienne"],
    correct: 3
  },
  {
    q: "Quel écrivain haïtien a écrit « Au pipirite chantant » ?",
    options: ["Isnardin Vieux", "Makenzy Orcel", "Jean Métellus", "Roussan Camille"],
    correct: 2
  },
  {
    q: "Identifiez l'œuvre écrite par Edwidge Danticat :",
    options: ["Les Étrangers de la maison", "Guillaume et Nathalie", "Clair de Manbo", "Le Cri de l'oiseau rouge"],
    correct: 3
  },
  {
    q: "Le livre « L'Espace d'un cillement » est dû à la plume de :",
    options: ["Jacques Stephen Alexis", "Jean-Claude Charles", "Makenzy Orcel", "Roussan Camille"],
    correct: 0
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Georges Anglade ?",
    options: ["Écrivains haïtiens", "Les Blancs de mémoire", "Romulus", "Ainsi parla l'oncle"],
    correct: 1
  },
  {
    q: "Quelle est l'œuvre de Gary Victor parmi cette liste ?",
    options: ["Clair de Manbo", "La mémoire aux abois", "Huit jours dans un no man's land", "Kasalé"],
    correct: 0
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Mosochwazi Kout Fè » ?",
    options: ["Justin Chrysostome Dorsainvil", "Lyonel Trouillot", "Jean-Claude Bajeux", "René Philoctète"],
    correct: 2
  },
  {
    q: "Qui a publié le livre « Mosochwazi Kout Fè » ?",
    options: ["Massillon Coicou", "Jean-Claude Bajeux", "Jean-Euphèle Milcé", "Windsor Bellegarde"],
    correct: 1
  },
  {
    q: "« La Belle Amour humaine » compte parmi les œuvres de quel auteur ?",
    options: ["Lyonel Trouillot", "Jean-Robert Cadet", "Jean D'Amérique", "Néhémy Pierre-Dahomey"],
    correct: 0
  },
  {
    q: "Quel titre figure dans la bibliographie de Paula Clermont Péan ?",
    options: ["Krik? Krak!", "L'Année Dessalines", "Le Mal de terre", "Le Mât de cocagne"],
    correct: 2
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Sous le soleil d'Haïti » ?",
    options: ["Ida Faubert", "Marie-Célie Agnant", "Georges Sylvain", "Gary Victor"],
    correct: 0
  },
  {
    q: "Quel livre porte la signature de Charles Moravia ?",
    options: ["Contes et légendes d'Haïti", "Mûr à crever", "La Crête-à-Pierrot", "Restavec"],
    correct: 2
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Jacques Roumain ?",
    options: ["La République d'Haïti et ses visiteurs", "Bois d'ébène", "Corps mêlés", "Les Rapaces"],
    correct: 1
  },
  {
    q: "De quelle plume est issue l'œuvre « Choucoune » ?",
    options: ["Demesvar Delorme", "Oswald Durand", "Ignace Nau", "Suzanne Comhaire-Sylvain"],
    correct: 1
  },
  {
    q: "« Rue Frontière » est signé par quel auteur haïtien ?",
    options: ["Kettly Mars", "Carl Brouard", "Faubert Bolivar", "Roussan Camille"],
    correct: 2
  },
  {
    q: "Cléante Valcin est notamment l'auteur(e) de :",
    options: ["Manhattan Blues", "Assaut à la nuit", "La Blanche Négresse", "Douces déroutes"],
    correct: 2
  },
  {
    q: "On doit à la plume de Georges Castera l'œuvre suivante :",
    options: ["Théâtre", "Manuel d'histoire d'Haïti", "Le Trou du souffleur", "Manhattan Blues"],
    correct: 2
  },
  {
    q: "« Séna » a été publié(e) par quel écrivain haïtien ?",
    options: ["Paula Clermont Péan", "Syto Cavé", "Fernand Hibbert", "Justin Chrysostome Dorsainvil"],
    correct: 2
  },
  {
    q: "L'œuvre « Rêver debout » a été écrite par :",
    options: ["Etzer Vilaire", "Roland Morisseau", "Marie-Alice Théard", "Fernand Hibbert"],
    correct: 1
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Etzer Vilaire ?",
    options: ["Boulevard Baie des Anges", "Les Fantoches", "Romancero aux étoiles", "Nouveaux poèmes"],
    correct: 3
  },
  {
    q: "De quelle plume est issue l'œuvre « Mur Méditerranée » ?",
    options: ["Louis-Philippe Dalembert", "Frankétienne", "Léon Laleau", "Jean-Robert Léonidas"],
    correct: 0
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Un Arc-en-ciel pour l'occident chrétien » ?",
    options: ["Gary Klang", "René Depestre", "Émile Roumer", "Georges Anglade"],
    correct: 1
  },
  {
    q: "Quel livre porte la signature de Josaphat-Robert Large ?",
    options: ["Passions", "Restavec", "Pays sans chapeau", "Les Étrangers de la maison"],
    correct: 3
  },
  {
    q: "L'œuvre « Milwaukee Blues » a été écrite par :",
    options: ["Louis Joseph Janvier", "Marie-Célie Agnant", "Louis-Philippe Dalembert", "Marie-Alice Théard"],
    correct: 2
  },
  {
    q: "Retrouvez l'auteur de « Rhapsodie sale » parmi ces propositions :",
    options: ["Emmelie Prophète", "Josaphat-Robert Large", "Jean D'Amérique", "Edwidge Danticat"],
    correct: 2
  },
  {
    q: "L'œuvre « Le Roman de l'occupation » a été écrite par :",
    options: ["Gérard Étienne", "Jean Métellus", "Gary Victor", "Isnardin Vieux"],
    correct: 3
  },
  {
    q: "De quelle plume est issue l'œuvre « Vieilles chansons » ?",
    options: ["Tertulien Guilbaud", "Davertige", "Placide David", "Léon Laleau"],
    correct: 0
  },
  {
    q: "Le livre « La Montagne ensorcelée » est dû à la plume de :",
    options: ["Louis Joseph Janvier", "Jacques Roumain", "Gérard Étienne", "Makenzy Orcel"],
    correct: 1
  },
  {
    q: "De quelle plume est issue l'œuvre « Des fleurs pour les héros » ?",
    options: ["Carl Brouard", "Liliane Devieux-Dehoux", "Hénock Trouillot", "Anthony Phelps"],
    correct: 3
  },
  {
    q: "Identifiez l'œuvre écrite par Jean-Euphèle Milcé :",
    options: ["Amour, Colère et Folie", "Dezafi", "L'Alphabet des nuits", "Les Immortelles"],
    correct: 2
  },
  {
    q: "De quelle plume est issue l'œuvre « Musa-Paidica » ?",
    options: ["René Philoctète", "Alibée Féry", "René Depestre", "Jacques Stephen Alexis"],
    correct: 1
  },
  {
    q: "Qui a publié le livre « Les Contes haïtiens » ?",
    options: ["Etzer Vilaire", "Suzanne Comhaire-Sylvain", "Yanick Lahens", "Syto Cavé"],
    correct: 1
  },
  {
    q: "Quel ouvrage a été publié par Windsor Bellegarde ?",
    options: ["Krik? Krak!", "L'Heure hybride", "Écrivains haïtiens", "La République d'Haïti et ses visiteurs"],
    correct: 2
  },
  {
    q: "Quel livre porte la signature de Georges Sylvain ?",
    options: ["Adieu, mon frère", "Haïti kenbe la !", "Le Livre d'Emma", "Cric? Crac!"],
    correct: 3
  },
  {
    q: "Le livre « Mère-Solitude » est dû à la plume de :",
    options: ["Émile Ollivier", "Évelyne Trouillot", "Jean-Claude Bajeux", "Louis Joseph Janvier"],
    correct: 0
  },
  {
    q: "Quel ouvrage a été publié par Jacques Roumain ?",
    options: ["La Belle Amour humaine", "Gouverneurs de la rosée", "L'Année Dessalines", "Treize nouvelles vaudou"],
    correct: 1
  },
  {
    q: "« Vers le sud » est signé par quel auteur haïtien ?",
    options: ["Dany Laferrière", "Josaphat-Robert Large", "René Philoctète", "Demesvar Delorme"],
    correct: 0
  },
  {
    q: "« Le Manuscrit de mon ami » compte parmi les œuvres de quel auteur ?",
    options: ["Fernand Hibbert", "Néhémy Pierre-Dahomey", "Yanick Lahens", "Jean-Robert Léonidas"],
    correct: 0
  },
  {
    q: "Fernand Hibbert est notamment l'auteur(e) de :",
    options: ["La Plage des songes", "Idem", "Séna", "Huit jours dans un no man's land"],
    correct: 2
  },
  {
    q: "« Compère Général Soleil » a été publié(e) par quel écrivain haïtien ?",
    options: ["Anthony Phelps", "Alibée Féry", "Fernand Hibbert", "Jacques Stephen Alexis"],
    correct: 3
  },
  {
    q: "Retrouvez l'auteur de « Écrivains haïtiens » parmi ces propositions :",
    options: ["Anthony Phelps", "Émile Roumer", "Edwidge Danticat", "Windsor Bellegarde"],
    correct: 3
  },
  {
    q: "« Restavec » compte parmi les œuvres de quel auteur ?",
    options: ["Roland Morisseau", "Jean-Robert Cadet", "Georges Castera", "Gérard Étienne"],
    correct: 1
  },
  {
    q: "L'œuvre « Mûr à crever » a été écrite par :",
    options: ["Jean Price-Mars", "Louis-Philippe Dalembert", "Frankétienne", "Lyonel Trouillot"],
    correct: 2
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Encre allègre » ?",
    options: ["Lyonel Trouillot", "Frédéric Marcelin", "Rodney Saint-Éloi", "Georges Castera"],
    correct: 3
  },
  {
    q: "Qui a publié le livre « La Récolte douce des larmes » ?",
    options: ["Makenzy Orcel", "Edwidge Danticat", "Syto Cavé", "Joujou Turenne"],
    correct: 1
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Louis Joseph Janvier ?",
    options: ["Bain de lune", "Poésies nationales", "La République d'Haïti et ses visiteurs", "Amour, Colère et Folie"],
    correct: 2
  },
  {
    q: "Léon Laleau a notamment donné naissance à quelle œuvre ?",
    options: ["La Récolte douce des larmes", "Des fleurs pour les héros", "Le Choc", "Manuel illustré d'histoire de la littérature haïtienne"],
    correct: 2
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Manuel d'histoire d'Haïti » ?",
    options: ["Anténor Firmin", "Georges Castera", "Jean-Claude Charles", "Justin Chrysostome Dorsainvil"],
    correct: 3
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Romulus » ?",
    options: ["Justin Chrysostome Dorsainvil", "Jean Métellus", "Fernand Hibbert", "Roussan Camille"],
    correct: 2
  },
  {
    q: "Le livre « La Vengeance de Mama » est dû à la plume de :",
    options: ["Jean-Robert Cadet", "Anthony Phelps", "Jacques Stephen Alexis", "Frédéric Marcelin"],
    correct: 3
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Guy Régis Jr ?",
    options: ["Sous le soleil d'Haïti", "L'Empereur Dessalines", "Moi, fardeau inhérent", "Hadriana dans tous mes rêves"],
    correct: 2
  },
  {
    q: "Quel nom d'auteur associez-vous à « Rosalie l'infâme » ?",
    options: ["Néhémy Pierre-Dahomey", "Jean Price-Mars", "James Noël", "Évelyne Trouillot"],
    correct: 3
  },
  {
    q: "Quel nom d'auteur associez-vous à « L'Amour oui. La mort non » ?",
    options: ["Liliane Devieux-Dehoux", "Jean-Robert Cadet", "Hénock Trouillot", "Jean-Euphèle Milcé"],
    correct: 0
  },
  {
    q: "Quelle est l'œuvre de Jean Price-Mars parmi cette liste ?",
    options: ["Fonds des Nègres", "Ainsi parla l'oncle", "Gouverneurs de la rosée", "Les Étrangers de la maison"],
    correct: 1
  },
  {
    q: "« Les Dix hommes noirs » a été publié(e) par quel écrivain haïtien ?",
    options: ["Anthony Phelps", "Gérard Étienne", "Massillon Coicou", "Etzer Vilaire"],
    correct: 3
  },
  {
    q: "On doit à la plume de Louis Joseph Janvier l'œuvre suivante :",
    options: ["La République d'Haïti et ses visiteurs", "Moi, Toussaint Louverture", "Hadriana dans tous mes rêves", "Cœur des Îles"],
    correct: 0
  },
  {
    q: "« Vieilles chansons » a été publié(e) par quel écrivain haïtien ?",
    options: ["Faubert Bolivar", "Roland Morisseau", "Tertulien Guilbaud", "Serge Legagneur"],
    correct: 2
  },
  {
    q: "« De l'égalité des races humaines » a été publié(e) par quel écrivain haïtien ?",
    options: ["Marvin Victor", "Anténor Firmin", "Cléante Valcin", "Placide David"],
    correct: 1
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Jean-Claude Bajeux ?",
    options: ["Le Lambi", "Mosochwazi Kout Fè", "Les Possédés de la pleine lune", "Dezafi"],
    correct: 1
  },
  {
    q: "Qui a publié le livre « Le Manuscrit de mon ami » ?",
    options: ["Fernand Hibbert", "Justin Chrysostome Dorsainvil", "Fresnel Sylvestre", "Ida Faubert"],
    correct: 0
  },
  {
    q: "De quelle plume est issue l'œuvre « Le Conditionnel » ?",
    options: ["Néhémy Pierre-Dahomey", "Anthony Phelps", "Guy Régis Jr", "Rodney Saint-Éloi"],
    correct: 1
  },
  {
    q: "Quel écrivain haïtien a écrit « Mère-Solitude » ?",
    options: ["Émile Ollivier", "Windsor Bellegarde", "Gary Victor", "Ignace Nau"],
    correct: 0
  },
  {
    q: "De quelle plume est issue l'œuvre « La République d'Haïti et ses visiteurs » ?",
    options: ["Fernand Hibbert", "Léon Laleau", "Marvin Victor", "Louis Joseph Janvier"],
    correct: 3
  },
  {
    q: "Quelle est l'œuvre de Émile Roumer parmi cette liste ?",
    options: ["Rue des pas perdus", "La Blanche Négresse", "Encre allègre", "Poèmes d'Haïti et de France"],
    correct: 3
  },
  {
    q: "Quel livre porte la signature de Marie-Thérèse Colimon-Hall ?",
    options: ["Vers le sud", "Le Briseur de rosée", "La Blanche Négresse", "Fils de misère"],
    correct: 3
  },
  {
    q: "Quel nom d'auteur associez-vous à « Des fleurs pour les héros » ?",
    options: ["Joujou Turenne", "Serge Legagneur", "Anthony Phelps", "Paula Clermont Péan"],
    correct: 2
  },
  {
    q: "Qui a publié le livre « Guillaume et Nathalie » ?",
    options: ["Yanick Lahens", "Isnardin Vieux", "Charles Moravia", "Michel Soukar"],
    correct: 0
  },
  {
    q: "Quel ouvrage a été publié par Davertige ?",
    options: ["Idem", "Haïti kenbe la !", "La mémoire aux abois", "Textes interdits"],
    correct: 0
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Moi, Toussaint Louverture » ?",
    options: ["Jean-Robert Léonidas", "Jean-Claude Bajeux", "Stanley Péan", "Jean-Claude Fignolé"],
    correct: 3
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Jacques Roumain ?",
    options: ["Haïti, terre mystique", "Yanvalou pour Charlie", "Les Fantoches", "Anacaona"],
    correct: 2
  },
  {
    q: "L'œuvre « Le bout du monde est une fenêtre » a été écrite par :",
    options: ["Emmelie Prophète", "Antoine Innocent", "Fresnel Sylvestre", "Serge Legagneur"],
    correct: 0
  },
  {
    q: "Quel écrivain haïtien a écrit « Rêver debout » ?",
    options: ["Yanick Lahens", "Marie Vieux-Chauvet", "Roland Morisseau", "Anthony Phelps"],
    correct: 2
  },
  {
    q: "L'œuvre « Écrivains haïtiens » a été écrite par :",
    options: ["Edwidge Danticat", "Justin Chrysostome Dorsainvil", "Faubert Bolivar", "Windsor Bellegarde"],
    correct: 3
  },
  {
    q: "De quelle plume est issue l'œuvre « Rapatriés » ?",
    options: ["Jean-Robert Léonidas", "Néhémy Pierre-Dahomey", "Gary Klang", "Georges Anglade"],
    correct: 1
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Passages » ?",
    options: ["Émile Ollivier", "Jacques Stephen Alexis", "Placide David", "Rodney Saint-Éloi"],
    correct: 0
  },
  {
    q: "De quelle plume est issue l'œuvre « Fille d'Haïti » ?",
    options: ["Justin Chrysostome Dorsainvil", "Marie Vieux-Chauvet", "Etzer Vilaire", "Josaphat-Robert Large"],
    correct: 1
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Jean-Euphèle Milcé ?",
    options: ["Rue Frontière", "L'Alphabet des nuits", "Les Dix hommes noirs", "Musa-Paidica"],
    correct: 1
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Marie-Alice Théard ?",
    options: ["Rhapsodie sale", "Manhattan Blues", "Mes années Duvalier", "Je suis vivant"],
    correct: 2
  },
  {
    q: "« La Vocation de l'élite » a été publié(e) par quel écrivain haïtien ?",
    options: ["Léon Laleau", "Nadine Magloire", "Jean Price-Mars", "Jean-Claude Charles"],
    correct: 2
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Le Trou du souffleur » ?",
    options: ["Georges Castera", "Louis-Philippe Dalembert", "Carl Brouard", "Jean-Claude Charles"],
    correct: 0
  },
  {
    q: "« Fonds des Nègres » a été publié(e) par quel écrivain haïtien ?",
    options: ["Josaphat-Robert Large", "Jacques Roumain", "Roland Morisseau", "Marie Vieux-Chauvet"],
    correct: 3
  },
  {
    q: "Retrouvez l'auteur de « Cric? Crac! » parmi ces propositions :",
    options: ["Justin Chrysostome Dorsainvil", "Pradel Pompilus", "Georges Sylvain", "Antoine Innocent"],
    correct: 2
  },
  {
    q: "Marie-Alice Théard est notamment l'auteur(e) de :",
    options: ["Mur Méditerranée", "L'Empereur Dessalines", "Mes années Duvalier", "Contes et légendes d'Haïti"],
    correct: 2
  },
  {
    q: "« La Couleur de l'aube » a été publié(e) par quel écrivain haïtien ?",
    options: ["Yanick Lahens", "Anténor Firmin", "Charles Moravia", "Kettly Mars"],
    correct: 0
  },
  {
    q: "« Pèlentèt » est signé par quel auteur haïtien ?",
    options: ["Jean Métellus", "Yanick Lahens", "Frankétienne", "James Noël"],
    correct: 2
  },
  {
    q: "Retrouvez l'auteur de « Compère Général Soleil » parmi ces propositions :",
    options: ["Marie-Alice Théard", "Jacques Stephen Alexis", "Roland Morisseau", "Guy Régis Jr"],
    correct: 1
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « La Dot de Sara » ?",
    options: ["Faubert Bolivar", "Ida Faubert", "Marie-Célie Agnant", "Guy Régis Jr"],
    correct: 2
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Léon Laleau ?",
    options: ["Le Livre d'Emma", "Zombi Blues", "Musique nègre", "Bain de lune"],
    correct: 2
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Restavec » ?",
    options: ["Néhémy Pierre-Dahomey", "Windsor Bellegarde", "Marie-Célie Agnant", "Jean-Robert Cadet"],
    correct: 3
  },
  {
    q: "Qui a publié le livre « Les Arbres musiciens » ?",
    options: ["Jean-Claude Fignolé", "Carl Brouard", "Edwidge Danticat", "Jacques Stephen Alexis"],
    correct: 3
  },
  {
    q: "« Comment faire l'amour avec un Nègre sans se fatiguer » compte parmi les œuvres de quel auteur ?",
    options: ["Dany Laferrière", "Marie Vieux-Chauvet", "Serge Legagneur", "Alibée Féry"],
    correct: 0
  },
  {
    q: "« L'Amour oui. La mort non » a été publié(e) par quel écrivain haïtien ?",
    options: ["Jacques Roumain", "Émile Roumer", "Liliane Devieux-Dehoux", "Jacques Stephen Alexis"],
    correct: 2
  },
  {
    q: "Quel livre porte la signature de Demesvar Delorme ?",
    options: ["Musa-Paidica", "Francesca", "Les Rapaces", "Vers le sud"],
    correct: 1
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Romulus » ?",
    options: ["Fernand Hibbert", "Ida Faubert", "Gérard Étienne", "Jean-Claude Fignolé"],
    correct: 0
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Le Manuscrit de mon ami » ?",
    options: ["Fernand Hibbert", "Ignace Nau", "Gary Klang", "Michel Soukar"],
    correct: 0
  },
  {
    q: "L'écrivain(e) Hénock Trouillot est célèbre pour avoir publié :",
    options: ["Dezafi", "L'Oiseau schizophone", "L'Autre Face de la mer", "Dessalines ou le sang du Pont-Rouge"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Clair de Manbo » ?",
    options: ["Louis-Philippe Dalembert", "Jean-Claude Fignolé", "Gary Victor", "Faubert Bolivar"],
    correct: 2
  },
  {
    q: "Le livre « Les Thazar » est dû à la plume de :",
    options: ["Jacques Roumain", "Joujou Turenne", "Fernand Hibbert", "Frédéric Marcelin"],
    correct: 2
  },
  {
    q: "De quelle plume est issue l'œuvre « Poésies nationales » ?",
    options: ["Massillon Coicou", "Josaphat-Robert Large", "Gary Victor", "Makenzy Orcel"],
    correct: 0
  },
  {
    q: "Le livre « Mimola » est dû à la plume de :",
    options: ["Antoine Innocent", "Justin Chrysostome Dorsainvil", "Edwidge Danticat", "Michel Soukar"],
    correct: 0
  },
  {
    q: "Qui a publié le livre « Le Roman de l'occupation » ?",
    options: ["Isnardin Vieux", "Gary Klang", "Rodney Saint-Éloi", "Charles Moravia"],
    correct: 0
  },
  {
    q: "Identifiez l'œuvre écrite par Etzer Vilaire :",
    options: ["Les Contes haïtiens", "Nouveaux poèmes", "La Crête-à-Pierrot", "Mur Méditerranée"],
    correct: 1
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « À l'angle des rues parallèles » ?",
    options: ["Gary Victor", "Rodney Saint-Éloi", "Frankétienne", "Liliane Devieux-Dehoux"],
    correct: 0
  },
  {
    q: "Quel livre porte la signature de Jean-Claude Charles ?",
    options: ["Les Immortelles", "Manhattan Blues", "Manuel d'histoire d'Haïti", "Encre allègre"],
    correct: 1
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Serge Legagneur ?",
    options: ["Les Villages de Dieu", "Textes interdits", "La Dot de Sara", "Krik? Krak!"],
    correct: 1
  },
  {
    q: "« L'Autre Face de la mer » est signé par quel auteur haïtien ?",
    options: ["Jacques Roumain", "Stanley Péan", "Lyonel Trouillot", "Louis-Philippe Dalembert"],
    correct: 3
  },
  {
    q: "« Mosochwazi Kout Fè » est signé par quel auteur haïtien ?",
    options: ["Frankétienne", "Gary Victor", "Louis Joseph Janvier", "Jean-Claude Bajeux"],
    correct: 3
  },
  {
    q: "Quel nom d'auteur associez-vous à « L'Heure hybride » ?",
    options: ["Jean-Claude Charles", "Kettly Mars", "James Noël", "Demesvar Delorme"],
    correct: 1
  },
  {
    q: "Quel nom d'auteur associez-vous à « La Récolte douce des larmes » ?",
    options: ["Oswald Durand", "Edwidge Danticat", "Serge Legagneur", "Hénock Trouillot"],
    correct: 1
  },
  {
    q: "Identifiez l'œuvre écrite par Joujou Turenne :",
    options: ["Contes et légendes d'Haïti", "La Montagne ensorcelée", "Théâtre", "Musa-Paidica"],
    correct: 0
  },
  {
    q: "Identifiez l'œuvre écrite par Yanick Lahens :",
    options: ["Le Sang et la Mer", "Au pipirite chantant", "Bain de lune", "Compère Général Soleil"],
    correct: 2
  },
  {
    q: "Quel nom d'auteur associez-vous à « Le Mal de vivre » ?",
    options: ["Nadine Magloire", "Davertige", "Yanick Lahens", "Gérard Étienne"],
    correct: 0
  },
  {
    q: "Retrouvez l'auteur de « La Plage des songes » parmi ces propositions :",
    options: ["Ignace Nau", "Jean Price-Mars", "Stanley Péan", "Georges Sylvain"],
    correct: 2
  },
  {
    q: "Retrouvez l'auteur de « La Crête-à-Pierrot » parmi ces propositions :",
    options: ["Charles Moravia", "Jean D'Amérique", "Nadine Magloire", "Joujou Turenne"],
    correct: 0
  },
  {
    q: "Quel écrivain haïtien a écrit « Le Manuscrit de mon ami » ?",
    options: ["Gary Klang", "Georges Sylvain", "Fresnel Sylvestre", "Fernand Hibbert"],
    correct: 3
  },
  {
    q: "Retrouvez l'auteur de « Rosalie l'infâme » parmi ces propositions :",
    options: ["Évelyne Trouillot", "Fernand Hibbert", "Georges Anglade", "Marie Vieux-Chauvet"],
    correct: 0
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Passions » ?",
    options: ["Nadine Magloire", "Massillon Coicou", "Joujou Turenne", "Liliane Devieux-Dehoux"],
    correct: 1
  },
  {
    q: "« Le Mal de vivre » est signé par quel auteur haïtien ?",
    options: ["Josaphat-Robert Large", "Paula Clermont Péan", "Nadine Magloire", "Massillon Coicou"],
    correct: 2
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Les Étrangers de la maison » ?",
    options: ["Justin Lhérisson", "Josaphat-Robert Large", "Jean-Robert Léonidas", "Jean D'Amérique"],
    correct: 1
  },
  {
    q: "On doit à la plume de Louis-Philippe Dalembert l'œuvre suivante :",
    options: ["La Dot de Sara", "Guillaume et Nathalie", "La Récolte douce des larmes", "Milwaukee Blues"],
    correct: 3
  },
  {
    q: "On doit à la plume de Tertulien Guilbaud l'œuvre suivante :",
    options: ["Thérèse en mille morceaux", "Vieilles chansons", "Manhattan Blues", "L'Espace d'un cillement"],
    correct: 1
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Guy Régis Jr ?",
    options: ["Rue des pas perdus", "La Montagne ensorcelée", "Moi, fardeau inhérent", "Moi, Toussaint Louverture"],
    correct: 2
  },
  {
    q: "L'œuvre « Mes années Duvalier » a été écrite par :",
    options: ["Liliane Devieux-Dehoux", "Jean-Robert Cadet", "Ignace Nau", "Marie-Alice Théard"],
    correct: 3
  },
  {
    q: "Quel nom d'auteur associez-vous à « Le Peuple des terres mêlées » ?",
    options: ["Louis Joseph Janvier", "Ida Faubert", "René Philoctète", "Justin Lhérisson"],
    correct: 2
  },
  {
    q: "L'œuvre « Jacques Roche, la vie entière » a été écrite par :",
    options: ["Jean-Claude Fignolé", "Rodney Saint-Éloi", "Isnardin Vieux", "Massillon Coicou"],
    correct: 1
  },
  {
    q: "À qui doit-on l'œuvre littéraire « L'Oiseau schizophone » ?",
    options: ["Néhémy Pierre-Dahomey", "Faubert Bolivar", "Frankétienne", "Liliane Devieux-Dehoux"],
    correct: 2
  },
  {
    q: "Retrouvez l'auteur de « Huit jours dans un no man's land » parmi ces propositions :",
    options: ["Oswald Durand", "Justin Lhérisson", "Frankétienne", "Gary Klang"],
    correct: 2
  },
  {
    q: "De quelle plume est issue l'œuvre « Thérèse en mille morceaux » ?",
    options: ["Lyonel Trouillot", "Frédéric Marcelin", "Yanick Lahens", "Serge Legagneur"],
    correct: 0
  },
  {
    q: "Quel titre figure dans la bibliographie de Léon Laleau ?",
    options: ["Rue des pas perdus", "La République d'Haïti et ses visiteurs", "Musique nègre", "Yanvalou pour Charlie"],
    correct: 2
  },
  {
    q: "De quelle plume est issue l'œuvre « Maître-Minuit » ?",
    options: ["René Depestre", "Frédéric Marcelin", "Makenzy Orcel", "René Philoctète"],
    correct: 2
  },
  {
    q: "L'œuvre « Yanvalou pour Charlie » a été écrite par :",
    options: ["Georges Anglade", "Nadine Magloire", "Lyonel Trouillot", "Émile Roumer"],
    correct: 2
  },
  {
    q: "« Krik? Krak! » compte parmi les œuvres de quel auteur ?",
    options: ["Louis Joseph Janvier", "Marie Vieux-Chauvet", "Marvin Victor", "Edwidge Danticat"],
    correct: 3
  },
  {
    q: "De quelle plume est issue l'œuvre « Ferdinand je suis à Paris » ?",
    options: ["Anténor Firmin", "Jean-Claude Charles", "Etzer Vilaire", "Joujou Turenne"],
    correct: 1
  },
  {
    q: "De quelle plume est issue l'œuvre « Un amour à trois temps » ?",
    options: ["Rodney Saint-Éloi", "Makenzy Orcel", "Cléante Valcin", "Fresnel Sylvestre"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Les Étrangers de la maison » ?",
    options: ["Josaphat-Robert Large", "Gary Victor", "Roussan Camille", "Ignace Nau"],
    correct: 0
  },
  {
    q: "Jean-Claude Fignolé a notamment donné naissance à quelle œuvre ?",
    options: ["Silhouettes de nègres et de négrophiles", "Anacaona", "Aube tranquille", "Contes et légendes d'Haïti"],
    correct: 2
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « L'Heure hybride » ?",
    options: ["Léon Laleau", "Carl Brouard", "Rodney Saint-Éloi", "Kettly Mars"],
    correct: 3
  },
  {
    q: "« Je suis vivant » a été publié(e) par quel écrivain haïtien ?",
    options: ["Massillon Coicou", "Yanick Lahens", "Kettly Mars", "Ignace Nau"],
    correct: 2
  },
  {
    q: "Quelle est l'œuvre de Jean-Euphèle Milcé parmi cette liste ?",
    options: ["La mémoire aux abois", "L'Alphabet des nuits", "Le Nègre crucifié", "L'Année Dessalines"],
    correct: 1
  },
  {
    q: "Quel titre figure dans la bibliographie de Louis Joseph Janvier ?",
    options: ["Choucoune", "La République d'Haïti et ses visiteurs", "Impasse Dignité", "Les Arbres musiciens"],
    correct: 1
  },
  {
    q: "« Francesca » est signé par quel auteur haïtien ?",
    options: ["Demesvar Delorme", "Jean D'Amérique", "Marie-Célie Agnant", "Joujou Turenne"],
    correct: 0
  },
  {
    q: "« Les Fantoches » compte parmi les œuvres de quel auteur ?",
    options: ["Georges Anglade", "Jacques Roumain", "Jean Price-Mars", "Roland Morisseau"],
    correct: 1
  },
  {
    q: "Louis-Philippe Dalembert est notamment l'auteur(e) de :",
    options: ["Cœur des Îles", "L'Espace d'un cillement", "Avant que les ombres s'effacent", "Maître-Minuit"],
    correct: 2
  },
  {
    q: "Quel écrivain haïtien a écrit « La Famille Vortex » ?",
    options: ["Faubert Bolivar", "Paula Clermont Péan", "Joujou Turenne", "Jean Métellus"],
    correct: 3
  },
  {
    q: "De quelle plume est issue l'œuvre « Le Nègre crucifié » ?",
    options: ["Cléante Valcin", "Edwidge Danticat", "Gérard Étienne", "Syto Cavé"],
    correct: 2
  },
  {
    q: "L'œuvre « Moi, Toussaint Louverture » a été écrite par :",
    options: ["Charles Moravia", "Kettly Mars", "Jean-Claude Fignolé", "Roussan Camille"],
    correct: 2
  },
  {
    q: "Quel titre figure dans la bibliographie de Nadine Magloire ?",
    options: ["La Blanche Négresse", "Le Mal de vivre", "Ferdinand je suis à Paris", "Le Sang et la Mer"],
    correct: 1
  },
  {
    q: "De quelle plume est issue l'œuvre « Moi, Toussaint Louverture » ?",
    options: ["Roussan Camille", "Georges Anglade", "Nadine Magloire", "Jean-Claude Fignolé"],
    correct: 3
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Bicentenaire » ?",
    options: ["Dany Laferrière", "Paula Clermont Péan", "Lyonel Trouillot", "Michel Soukar"],
    correct: 2
  },
  {
    q: "Georges Sylvain a notamment donné naissance à quelle œuvre ?",
    options: ["Romancero aux étoiles", "Cric? Crac!", "Désirée Congo", "Bonjour et adieu à la négritude"],
    correct: 1
  },
  {
    q: "Qui a publié le livre « Le Livre d'Emma » ?",
    options: ["Serge Legagneur", "Windsor Bellegarde", "Justin Chrysostome Dorsainvil", "Marie-Célie Agnant"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Rue des pas perdus » ?",
    options: ["Lyonel Trouillot", "Charles Moravia", "Jean-Robert Cadet", "Joujou Turenne"],
    correct: 0
  },
  {
    q: "Jean-Claude Charles est notamment l'auteur(e) de :",
    options: ["Ferdinand je suis à Paris", "Clair de Manbo", "Mosochwazi Kout Fè", "La Famille Vortex"],
    correct: 0
  },
  {
    q: "Le livre « Clair de Manbo » est dû à la plume de :",
    options: ["Yanick Lahens", "Lyonel Trouillot", "Isnardin Vieux", "Gary Victor"],
    correct: 3
  },
  {
    q: "« Sous le soleil d'Haïti » est signé par quel auteur haïtien ?",
    options: ["Fernand Hibbert", "Ida Faubert", "Georges Sylvain", "Lyonel Trouillot"],
    correct: 1
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Krik? Krak! » ?",
    options: ["Jean-Claude Bajeux", "Edwidge Danticat", "Etzer Vilaire", "Rodney Saint-Éloi"],
    correct: 1
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Jean-Euphèle Milcé ?",
    options: ["Silhouettes de nègres et de négrophiles", "L'Alphabet des nuits", "Manuel d'histoire d'Haïti", "Une eau-forte"],
    correct: 1
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Musa-Paidica » ?",
    options: ["Justin Chrysostome Dorsainvil", "Anténor Firmin", "Windsor Bellegarde", "Alibée Féry"],
    correct: 3
  },
  {
    q: "Identifiez l'œuvre écrite par René Depestre :",
    options: ["Zombi Blues", "Écrivains haïtiens", "Un Arc-en-ciel pour l'occident chrétien", "Sous le soleil d'Haïti"],
    correct: 2
  },
  {
    q: "Retrouvez l'auteur de « Belle merveille » parmi ces propositions :",
    options: ["James Noël", "Jean-Claude Charles", "Guy Régis Jr", "Émile Ollivier"],
    correct: 0
  },
  {
    q: "Retrouvez l'auteur de « Fils de misère » parmi ces propositions :",
    options: ["Marie-Thérèse Colimon-Hall", "Tertulien Guilbaud", "Paula Clermont Péan", "Etzer Vilaire"],
    correct: 0
  },
  {
    q: "Le livre « Poèmes d'Haïti et de France » est dû à la plume de :",
    options: ["Davertige", "Pradel Pompilus", "Makenzy Orcel", "Émile Roumer"],
    correct: 3
  },
  {
    q: "« Manhattan Blues » a été publié(e) par quel écrivain haïtien ?",
    options: ["Nadine Magloire", "Jean-Claude Charles", "Anténor Firmin", "Tertulien Guilbaud"],
    correct: 1
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Pays sans chapeau » ?",
    options: ["Kettly Mars", "Gary Klang", "Évelyne Trouillot", "Dany Laferrière"],
    correct: 3
  },
  {
    q: "De quelle plume est issue l'œuvre « Ces îles qui marchent » ?",
    options: ["Paula Clermont Péan", "Fresnel Sylvestre", "René Philoctète", "Louis Joseph Janvier"],
    correct: 2
  },
  {
    q: "Identifiez l'œuvre écrite par Antoine Innocent :",
    options: ["Mimola", "Manhattan Blues", "Jacmel au crépuscule", "Le Fusil et la croix"],
    correct: 0
  },
  {
    q: "Parmi ces titres, lequel est signé Georges Castera ?",
    options: ["Bain de lune", "La Récolte douce des larmes", "Encre allègre", "Le Rond-point"],
    correct: 2
  },
  {
    q: "« Écrit sur du ruban rose » a été publié(e) par quel écrivain haïtien ?",
    options: ["Carl Brouard", "Jean-Euphèle Milcé", "Suzanne Comhaire-Sylvain", "Alibée Féry"],
    correct: 0
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Ultravocal » ?",
    options: ["Néhémy Pierre-Dahomey", "Frankétienne", "Hénock Trouillot", "Marvin Victor"],
    correct: 1
  },
  {
    q: "« Mûr à crever » compte parmi les œuvres de quel auteur ?",
    options: ["Etzer Vilaire", "Frankétienne", "Dany Laferrière", "Jean-Euphèle Milcé"],
    correct: 1
  },
  {
    q: "De quelle plume est issue l'œuvre « Cœur des Îles » ?",
    options: ["Guy Régis Jr", "Makenzy Orcel", "Ida Faubert", "Jean-Claude Charles"],
    correct: 2
  },
  {
    q: "Quel écrivain haïtien a écrit « Adieu, mon frère » ?",
    options: ["Emmelie Prophète", "Gary Victor", "Edwidge Danticat", "Marie-Thérèse Colimon-Hall"],
    correct: 2
  },
  {
    q: "Etzer Vilaire a notamment donné naissance à quelle œuvre ?",
    options: ["Compère Général Soleil", "Nouveaux poèmes", "Mes années Duvalier", "Dessalines ou le sang du Pont-Rouge"],
    correct: 1
  },
  {
    q: "Pradel Pompilus est notamment l'auteur(e) de :",
    options: ["Boulevard Baie des Anges", "Sous le soleil d'Haïti", "Adieu, mon frère", "Manuel illustré d'histoire de la littérature haïtienne"],
    correct: 3
  },
  {
    q: "Qui a publié le livre « L'Autre Face de la mer » ?",
    options: ["Louis-Philippe Dalembert", "James Noël", "Massillon Coicou", "Oswald Durand"],
    correct: 0
  },
  {
    q: "Quel nom d'auteur associez-vous à « La Famille des Pitite-Caille » ?",
    options: ["Anténor Firmin", "Justin Lhérisson", "Néhémy Pierre-Dahomey", "Yanick Lahens"],
    correct: 1
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Ces îles qui marchent » ?",
    options: ["Frédéric Marcelin", "Justin Lhérisson", "Nadine Magloire", "René Philoctète"],
    correct: 3
  },
  {
    q: "« Aube tranquille » est signé par quel auteur haïtien ?",
    options: ["Justin Chrysostome Dorsainvil", "Placide David", "Davertige", "Jean-Claude Fignolé"],
    correct: 3
  },
  {
    q: "L'œuvre « Les Étrangers de la maison » a été écrite par :",
    options: ["Windsor Bellegarde", "Anténor Firmin", "Josaphat-Robert Large", "Charles Moravia"],
    correct: 2
  },
  {
    q: "On doit à la plume de Hénock Trouillot l'œuvre suivante :",
    options: ["La Belle Amour humaine", "Dessalines ou le sang du Pont-Rouge", "Le Choc", "Rhapsodie sale"],
    correct: 1
  },
  {
    q: "« Impasse Dignité » a été publié(e) par quel écrivain haïtien ?",
    options: ["Jean Price-Mars", "Justin Lhérisson", "Emmelie Prophète", "Anténor Firmin"],
    correct: 2
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Le Peuple des terres mêlées » ?",
    options: ["Marvin Victor", "René Philoctète", "Suzanne Comhaire-Sylvain", "Jean-Robert Cadet"],
    correct: 1
  },
  {
    q: "Quel écrivain haïtien a écrit « L'Énigme du retour » ?",
    options: ["Dany Laferrière", "Etzer Vilaire", "Gary Victor", "Anthony Phelps"],
    correct: 0
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Thérèse en mille morceaux » ?",
    options: ["Pradel Pompilus", "Lyonel Trouillot", "Syto Cavé", "René Depestre"],
    correct: 1
  },
  {
    q: "Le livre « Le Manuscrit de mon ami » est dû à la plume de :",
    options: ["Roland Morisseau", "Marvin Victor", "Antoine Innocent", "Fernand Hibbert"],
    correct: 3
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Kettly Mars ?",
    options: ["Les Blancs de mémoire", "Cric? Crac!", "Saisons sauvages", "Avant que les ombres s'effacent"],
    correct: 2
  },
  {
    q: "« La Famille Vortex » compte parmi les œuvres de quel auteur ?",
    options: ["Suzanne Comhaire-Sylvain", "Jean Métellus", "Liliane Devieux-Dehoux", "Stanley Péan"],
    correct: 1
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Les Fantoches » ?",
    options: ["Georges Anglade", "Jacques Roumain", "Edwidge Danticat", "Josaphat-Robert Large"],
    correct: 1
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Georges Anglade ?",
    options: ["Les Étrangers de la maison", "Silhouettes de nègres et de négrophiles", "Le Manuscrit de mon ami", "Les Blancs de mémoire"],
    correct: 3
  },
  {
    q: "Retrouvez l'auteur de « Alléluia pour une femme-jardin » parmi ces propositions :",
    options: ["Jean-Robert Cadet", "René Depestre", "Jean-Claude Fignolé", "Georges Sylvain"],
    correct: 1
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de René Philoctète ?",
    options: ["Le Peuple des terres mêlées", "Écrit sur du ruban rose", "Corps mêlés", "Une somme humaine"],
    correct: 0
  },
  {
    q: "« Ainsi parla l'oncle » compte parmi les œuvres de quel auteur ?",
    options: ["Émile Roumer", "Jean Price-Mars", "Georges Anglade", "Jacques Roumain"],
    correct: 1
  },
  {
    q: "Qui a publié le livre « Les Rapaces » ?",
    options: ["Marie-Thérèse Colimon-Hall", "Marie Vieux-Chauvet", "Faubert Bolivar", "Demesvar Delorme"],
    correct: 1
  },
  {
    q: "Quel nom d'auteur associez-vous à « Mes années Duvalier » ?",
    options: ["Léon Laleau", "Jean-Euphèle Milcé", "Marie-Alice Théard", "Carl Brouard"],
    correct: 2
  },
  {
    q: "L'œuvre « Séna » a été écrite par :",
    options: ["Fernand Hibbert", "Louis Joseph Janvier", "Emmelie Prophète", "Makenzy Orcel"],
    correct: 0
  },
  {
    q: "On doit à la plume de Placide David l'œuvre suivante :",
    options: ["L'Héritage colonial en Haïti", "Le Nègre crucifié", "Ainsi parla l'oncle", "Bois d'ébène"],
    correct: 0
  },
  {
    q: "Émile Ollivier est notamment l'auteur(e) de :",
    options: ["Manhattan Blues", "Idem", "De Saint-Domingue à Haïti", "Mère-Solitude"],
    correct: 3
  },
  {
    q: "Le livre « Les Fantoches » est dû à la plume de :",
    options: ["Stanley Péan", "Néhémy Pierre-Dahomey", "Serge Legagneur", "Jacques Roumain"],
    correct: 3
  },
  {
    q: "Quelle est l'œuvre de Georges Anglade parmi cette liste ?",
    options: ["Les Arbres musiciens", "Les Blancs de mémoire", "Le Roman de l'occupation", "Gouverneurs de la rosée"],
    correct: 1
  },
  {
    q: "Quel écrivain haïtien a écrit « Une somme humaine » ?",
    options: ["Anthony Phelps", "René Depestre", "Makenzy Orcel", "Josaphat-Robert Large"],
    correct: 2
  },
  {
    q: "Parmi ces titres, lequel est signé Davertige ?",
    options: ["Idem", "L'Année Dessalines", "Musa-Paidica", "La Crête-à-Pierrot"],
    correct: 0
  },
  {
    q: "Qui a publié le livre « Le Rond-point » ?",
    options: ["Dany Laferrière", "Tertulien Guilbaud", "Marie-Alice Théard", "Évelyne Trouillot"],
    correct: 3
  },
  {
    q: "« Rapatriés » compte parmi les œuvres de quel auteur ?",
    options: ["Demesvar Delorme", "Néhémy Pierre-Dahomey", "James Noël", "René Depestre"],
    correct: 1
  },
  {
    q: "L'œuvre « La Montagne ensorcelée » a été écrite par :",
    options: ["René Depestre", "Jacques Roumain", "Faubert Bolivar", "Placide David"],
    correct: 1
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Hadriana dans tous mes rêves » ?",
    options: ["René Depestre", "Faubert Bolivar", "Gary Klang", "Jean Price-Mars"],
    correct: 0
  },
  {
    q: "À qui doit-on l'œuvre littéraire « La Belle Amour humaine » ?",
    options: ["Dany Laferrière", "Tertulien Guilbaud", "Jean-Robert Cadet", "Lyonel Trouillot"],
    correct: 3
  },
  {
    q: "Quel écrivain haïtien a écrit « Moi, fardeau inhérent » ?",
    options: ["Jean Price-Mars", "Guy Régis Jr", "Liliane Devieux-Dehoux", "Émile Roumer"],
    correct: 1
  },
  {
    q: "Quel écrivain haïtien a écrit « Choucoune » ?",
    options: ["Oswald Durand", "Marie Vieux-Chauvet", "Jean Métellus", "Jean D'Amérique"],
    correct: 0
  },
  {
    q: "De quelle plume est issue l'œuvre « Les Blancs de mémoire » ?",
    options: ["Jean-Robert Cadet", "Georges Anglade", "Cléante Valcin", "Yanick Lahens"],
    correct: 1
  },
  {
    q: "Quel écrivain haïtien a écrit « Yanvalou pour Charlie » ?",
    options: ["Georges Sylvain", "Jean Métellus", "Lyonel Trouillot", "Frankétienne"],
    correct: 2
  },
  {
    q: "Retrouvez l'auteur de « Le Briseur de rosée » parmi ces propositions :",
    options: ["Edwidge Danticat", "Émile Roumer", "Georges Anglade", "Gérard Étienne"],
    correct: 0
  },
  {
    q: "Quel ouvrage a été publié par Nadine Magloire ?",
    options: ["L'Amour oui. La mort non", "Choucoune", "Zoune chez sa ninnaine", "Le Mal de vivre"],
    correct: 3
  },
  {
    q: "On doit à la plume de Massillon Coicou l'œuvre suivante :",
    options: ["Le Roman de l'occupation", "Passions", "Le Testament des solitudes", "L'Ombre animale"],
    correct: 1
  },
  {
    q: "L'œuvre « Le Reste du temps » a été écrite par :",
    options: ["Lyonel Trouillot", "Emmelie Prophète", "Marie-Alice Théard", "Tertulien Guilbaud"],
    correct: 1
  },
  {
    q: "De quelle plume est issue l'œuvre « Cric? Crac! » ?",
    options: ["Georges Sylvain", "Marie Vieux-Chauvet", "Frankétienne", "Jean-Robert Cadet"],
    correct: 0
  },
  {
    q: "On doit à la plume de Stanley Péan l'œuvre suivante :",
    options: ["Rhapsodie sale", "Yanvalou pour Charlie", "La Plage des songes", "La Couleur de l'aube"],
    correct: 2
  },
  {
    q: "Quel nom d'auteur associez-vous à « L'Année Dessalines » ?",
    options: ["Jean-Euphèle Milcé", "Gary Victor", "Windsor Bellegarde", "Jean Métellus"],
    correct: 3
  },
  {
    q: "De quelle plume est issue l'œuvre « Le Briseur de rosée » ?",
    options: ["Gary Victor", "Hénock Trouillot", "Jean-Euphèle Milcé", "Edwidge Danticat"],
    correct: 3
  },
  {
    q: "« Douces déroutes » a été publié(e) par quel écrivain haïtien ?",
    options: ["Yanick Lahens", "Jean-Claude Charles", "Jean D'Amérique", "Cléante Valcin"],
    correct: 0
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Etzer Vilaire ?",
    options: ["Bonjour et adieu à la négritude", "Nouveaux poèmes", "Rhapsodie sale", "Frayeur"],
    correct: 1
  },
  {
    q: "De quelle plume est issue l'œuvre « Les Étrangers de la maison » ?",
    options: ["Demesvar Delorme", "Josaphat-Robert Large", "Gary Victor", "Léon Laleau"],
    correct: 1
  },
  {
    q: "Qui a publié le livre « Poèmes d'Haïti et de France » ?",
    options: ["Anténor Firmin", "Makenzy Orcel", "Émile Roumer", "Pradel Pompilus"],
    correct: 2
  },
  {
    q: "« Boulevard Baie des Anges » est signé par quel auteur haïtien ?",
    options: ["Néhémy Pierre-Dahomey", "Jacques Roumain", "Paula Clermont Péan", "Jean-Claude Fignolé"],
    correct: 0
  },
  {
    q: "De quelle plume est issue l'œuvre « Frayeur » ?",
    options: ["Frankétienne", "Kettly Mars", "Ignace Nau", "Jean-Claude Fignolé"],
    correct: 1
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Frédéric Marcelin ?",
    options: ["Restavec", "Dezafi", "Le Peuple des terres mêlées", "La Vengeance de Mama"],
    correct: 3
  },
  {
    q: "Quel nom d'auteur associez-vous à « Idem » ?",
    options: ["Davertige", "Jean-Claude Fignolé", "Roland Morisseau", "Hénock Trouillot"],
    correct: 0
  },
  {
    q: "L'œuvre « Poésies nationales » a été écrite par :",
    options: ["Fresnel Sylvestre", "Massillon Coicou", "Jean D'Amérique", "Lyonel Trouillot"],
    correct: 1
  },
  {
    q: "Qui a publié le livre « L'Empereur Dessalines » ?",
    options: ["Makenzy Orcel", "Massillon Coicou", "Fresnel Sylvestre", "Jean-Claude Charles"],
    correct: 1
  },
  {
    q: "Le livre « Ferdinand je suis à Paris » est dû à la plume de :",
    options: ["Justin Lhérisson", "René Philoctète", "Kettly Mars", "Jean-Claude Charles"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Boulevard Baie des Anges » ?",
    options: ["Georges Sylvain", "Jean-Claude Fignolé", "Carl Brouard", "Néhémy Pierre-Dahomey"],
    correct: 3
  },
  {
    q: "Parmi ces titres, lequel est signé Nadine Magloire ?",
    options: ["Le Mal de vivre", "Haïti, terre mystique", "Ces îles qui marchent", "Mère-Solitude"],
    correct: 0
  },
  {
    q: "« Le Reste du temps » est signé par quel auteur haïtien ?",
    options: ["Hénock Trouillot", "Frankétienne", "Emmelie Prophète", "Gary Victor"],
    correct: 2
  },
  {
    q: "L'écrivain(e) Roland Morisseau est célèbre pour avoir publié :",
    options: ["Rêver debout", "Krik? Krak!", "Passages", "Compère Général Soleil"],
    correct: 0
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Jacques Roche, la vie entière » ?",
    options: ["Rodney Saint-Éloi", "Néhémy Pierre-Dahomey", "Louis-Philippe Dalembert", "Hénock Trouillot"],
    correct: 0
  },
  {
    q: "« Soleil à coudre » a été publié(e) par quel écrivain haïtien ?",
    options: ["Jean D'Amérique", "Lyonel Trouillot", "Gary Victor", "Demesvar Delorme"],
    correct: 0
  },
  {
    q: "Le livre « Épisode de la Révolution » est dû à la plume de :",
    options: ["Ignace Nau", "Anthony Phelps", "Justin Lhérisson", "Isnardin Vieux"],
    correct: 0
  },
  {
    q: "Quel écrivain haïtien a écrit « Silhouettes de nègres et de négrophiles » ?",
    options: ["Isnardin Vieux", "Marie-Thérèse Colimon-Hall", "Jean Price-Mars", "Fresnel Sylvestre"],
    correct: 2
  },
  {
    q: "Quel écrivain haïtien a écrit « Textes interdits » ?",
    options: ["Isnardin Vieux", "Gérard Étienne", "Jacques Stephen Alexis", "Serge Legagneur"],
    correct: 3
  },
  {
    q: "À qui doit-on l'œuvre littéraire « La Bélière Caraïbe » ?",
    options: ["Anthony Phelps", "Michel Soukar", "Massillon Coicou", "Syto Cavé"],
    correct: 0
  },
  {
    q: "« La Famille Vortex » a été publié(e) par quel écrivain haïtien ?",
    options: ["Jean Métellus", "Georges Castera", "Gary Victor", "Charles Moravia"],
    correct: 0
  },
  {
    q: "Quel nom d'auteur associez-vous à « Le Mât de cocagne » ?",
    options: ["Tertulien Guilbaud", "Roland Morisseau", "Frédéric Marcelin", "René Depestre"],
    correct: 3
  },
  {
    q: "« Nouveaux poèmes » a été publié(e) par quel écrivain haïtien ?",
    options: ["Roland Morisseau", "Etzer Vilaire", "Josaphat-Robert Large", "Kettly Mars"],
    correct: 1
  },
  {
    q: "Qui a publié le livre « Le Briseur de rosée » ?",
    options: ["Guy Régis Jr", "Edwidge Danticat", "René Depestre", "Roland Morisseau"],
    correct: 1
  },
  {
    q: "Quel nom d'auteur associez-vous à « Le Rond-point » ?",
    options: ["Dany Laferrière", "Georges Anglade", "Jean-Claude Fignolé", "Évelyne Trouillot"],
    correct: 3
  },
  {
    q: "Identifiez l'œuvre écrite par Jean D'Amérique :",
    options: ["La République d'Haïti et ses visiteurs", "L'Héritage colonial en Haïti", "Rhapsodie sale", "Zombi Blues"],
    correct: 2
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Thérèse en mille morceaux » ?",
    options: ["Kettly Mars", "Jean Métellus", "Lyonel Trouillot", "Gary Victor"],
    correct: 2
  },
  {
    q: "L'œuvre « Anacaona » a été écrite par :",
    options: ["Joujou Turenne", "Jean-Robert Cadet", "Jean Métellus", "Emmelie Prophète"],
    correct: 2
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Jean-Robert Léonidas ?",
    options: ["Île à vau-l'eau", "La Bélière Caraïbe", "Les Dix hommes noirs", "Désirée Congo"],
    correct: 0
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Amour, Colère et Folie » ?",
    options: ["Frankétienne", "Dany Laferrière", "Marie Vieux-Chauvet", "Anténor Firmin"],
    correct: 2
  },
  {
    q: "Qui a publié le livre « Vieilles chansons » ?",
    options: ["Georges Sylvain", "Marie-Thérèse Colimon-Hall", "Joujou Turenne", "Tertulien Guilbaud"],
    correct: 3
  },
  {
    q: "« Treize nouvelles vaudou » est signé par quel auteur haïtien ?",
    options: ["Frédéric Marcelin", "Gary Victor", "Antoine Innocent", "Anthony Phelps"],
    correct: 1
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Bain de lune » ?",
    options: ["Georges Anglade", "Jacques Roumain", "Marie Vieux-Chauvet", "Yanick Lahens"],
    correct: 3
  },
  {
    q: "De quelle plume est issue l'œuvre « Soleil à coudre » ?",
    options: ["Windsor Bellegarde", "Yanick Lahens", "Alibée Féry", "Jean D'Amérique"],
    correct: 3
  },
  {
    q: "« Réflexions diverses sur Haïti » a été publié(e) par quel écrivain haïtien ?",
    options: ["Demesvar Delorme", "Ida Faubert", "Jean-Robert Léonidas", "Gérard Étienne"],
    correct: 0
  },
  {
    q: "« Le Lambi » compte parmi les œuvres de quel auteur ?",
    options: ["Emmelie Prophète", "Ignace Nau", "Marie-Alice Théard", "René Philoctète"],
    correct: 1
  },
  {
    q: "Le livre « Cœur des Îles » est dû à la plume de :",
    options: ["René Depestre", "Stanley Péan", "Frankétienne", "Ida Faubert"],
    correct: 3
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Guillaume et Nathalie » ?",
    options: ["Émile Ollivier", "Yanick Lahens", "Josaphat-Robert Large", "Suzanne Comhaire-Sylvain"],
    correct: 1
  },
  {
    q: "« Belle merveille » est signé par quel auteur haïtien ?",
    options: ["Gary Klang", "Kettly Mars", "Demesvar Delorme", "James Noël"],
    correct: 3
  },
  {
    q: "« Ces îles qui marchent » est signé par quel auteur haïtien ?",
    options: ["Kettly Mars", "Pradel Pompilus", "Gary Klang", "René Philoctète"],
    correct: 3
  },
  {
    q: "« La Danse sur le volcan » a été publié(e) par quel écrivain haïtien ?",
    options: ["Lyonel Trouillot", "Marie-Alice Théard", "Marie Vieux-Chauvet", "Michel Soukar"],
    correct: 2
  },
  {
    q: "De quelle plume est issue l'œuvre « Romulus » ?",
    options: ["Fernand Hibbert", "Faubert Bolivar", "Jacques Stephen Alexis", "Jean-Claude Fignolé"],
    correct: 0
  },
  {
    q: "Qui a publié le livre « La Bélière Caraïbe » ?",
    options: ["Edwidge Danticat", "Lyonel Trouillot", "Anthony Phelps", "Georges Sylvain"],
    correct: 2
  },
  {
    q: "Qui a publié le livre « Douces déroutes » ?",
    options: ["Carl Brouard", "Yanick Lahens", "Faubert Bolivar", "Rodney Saint-Éloi"],
    correct: 1
  },
  {
    q: "L'œuvre « Écrit sur du ruban rose » a été écrite par :",
    options: ["Demesvar Delorme", "Carl Brouard", "Néhémy Pierre-Dahomey", "Michel Soukar"],
    correct: 1
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Paula Clermont Péan ?",
    options: ["Le Mal de terre", "La Crête-à-Pierrot", "Au pipirite chantant", "Soleil à coudre"],
    correct: 0
  },
  {
    q: "« Le Fusil et la croix » a été publié(e) par quel écrivain haïtien ?",
    options: ["James Noël", "Antoine Innocent", "Jacques Roumain", "Michel Soukar"],
    correct: 3
  },
  {
    q: "L'écrivain(e) Anténor Firmin est célèbre pour avoir publié :",
    options: ["Dessalines ou le sang du Pont-Rouge", "Contes et légendes d'Haïti", "De l'égalité des races humaines", "Les Contes haïtiens"],
    correct: 2
  },
  {
    q: "Identifiez l'œuvre écrite par Jean-Robert Cadet :",
    options: ["Compère Général Soleil", "Restavec", "Bois d'ébène", "Romancero aux étoiles"],
    correct: 1
  },
  {
    q: "Qui a publié le livre « L'Ombre animale » ?",
    options: ["Roland Morisseau", "Justin Chrysostome Dorsainvil", "Makenzy Orcel", "Frédéric Marcelin"],
    correct: 2
  },
  {
    q: "Retrouvez l'auteur de « Une eau-forte » parmi ces propositions :",
    options: ["Marie-Thérèse Colimon-Hall", "Davertige", "Jean Métellus", "Jean Price-Mars"],
    correct: 2
  },
  {
    q: "« Moi, fardeau inhérent » a été publié(e) par quel écrivain haïtien ?",
    options: ["Guy Régis Jr", "Stanley Péan", "Jean Price-Mars", "Davertige"],
    correct: 0
  },
  {
    q: "Makenzy Orcel a notamment donné naissance à quelle œuvre ?",
    options: ["Douces déroutes", "Vieilles chansons", "La Récolte douce des larmes", "Maître-Minuit"],
    correct: 3
  },
  {
    q: "De quelle plume est issue l'œuvre « La Montagne ensorcelée » ?",
    options: ["Léon Laleau", "Jacques Roumain", "Jean Métellus", "Marie-Célie Agnant"],
    correct: 1
  },
  {
    q: "« Le Fusil et la croix » est signé par quel auteur haïtien ?",
    options: ["Suzanne Comhaire-Sylvain", "Kettly Mars", "Stanley Péan", "Michel Soukar"],
    correct: 3
  },
  {
    q: "« Les Rapaces » compte parmi les œuvres de quel auteur ?",
    options: ["Suzanne Comhaire-Sylvain", "Marie Vieux-Chauvet", "Georges Castera", "Tertulien Guilbaud"],
    correct: 1
  },
  {
    q: "Parmi ces titres, lequel est signé Louis Joseph Janvier ?",
    options: ["La République d'Haïti et ses visiteurs", "Avant que les ombres s'effacent", "Pays sans chapeau", "Fille d'Haïti"],
    correct: 0
  },
  {
    q: "Georges Anglade a notamment donné naissance à quelle œuvre ?",
    options: ["Le Qui-vive", "La Belle Amour humaine", "Les Blancs de mémoire", "Textes interdits"],
    correct: 2
  },
  {
    q: "Quelle est l'œuvre de Syto Cavé parmi cette liste ?",
    options: ["Frayeur", "Contes et légendes d'Haïti", "Mûr à crever", "Théâtre"],
    correct: 3
  },
  {
    q: "« Choucoune » a été publié(e) par quel écrivain haïtien ?",
    options: ["Edwidge Danticat", "Oswald Durand", "Suzanne Comhaire-Sylvain", "Fresnel Sylvestre"],
    correct: 1
  },
  {
    q: "Quel livre porte la signature de Hénock Trouillot ?",
    options: ["Corps mêlés", "Dessalines ou le sang du Pont-Rouge", "Hadriana dans tous mes rêves", "De l'égalité des races humaines"],
    correct: 1
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Rosalie l'infâme » ?",
    options: ["Michel Soukar", "Dany Laferrière", "Justin Lhérisson", "Évelyne Trouillot"],
    correct: 3
  },
  {
    q: "Quelle est l'œuvre de Windsor Bellegarde parmi cette liste ?",
    options: ["Écrivains haïtiens", "L'Odeur du café", "Bicentenaire", "Adieu, mon frère"],
    correct: 0
  },
  {
    q: "« Les Dix hommes noirs » est signé par quel auteur haïtien ?",
    options: ["Paula Clermont Péan", "Josaphat-Robert Large", "René Depestre", "Etzer Vilaire"],
    correct: 3
  },
  {
    q: "Quel nom d'auteur associez-vous à « Sous le soleil d'Haïti » ?",
    options: ["Ida Faubert", "Marvin Victor", "Frankétienne", "Isnardin Vieux"],
    correct: 0
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Mur Méditerranée » ?",
    options: ["Nadine Magloire", "Carl Brouard", "Louis-Philippe Dalembert", "Serge Legagneur"],
    correct: 2
  },
  {
    q: "Quel écrivain haïtien a écrit « Saisons sauvages » ?",
    options: ["Marvin Victor", "Georges Anglade", "Kettly Mars", "Jean-Claude Fignolé"],
    correct: 2
  },
  {
    q: "Josaphat-Robert Large a notamment donné naissance à quelle œuvre ?",
    options: ["Yanvalou pour Charlie", "Huit jours dans un no man's land", "Les Étrangers de la maison", "Assaut à la nuit"],
    correct: 2
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « La Récolte douce des larmes » ?",
    options: ["Edwidge Danticat", "Stanley Péan", "Ida Faubert", "Massillon Coicou"],
    correct: 0
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Réflexions diverses sur Haïti » ?",
    options: ["Demesvar Delorme", "Justin Lhérisson", "Gary Victor", "Rodney Saint-Éloi"],
    correct: 0
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Roland Morisseau ?",
    options: ["Un Arc-en-ciel pour l'occident chrétien", "Les Rapaces", "Idem", "Rêver debout"],
    correct: 3
  },
  {
    q: "De quelle plume est issue l'œuvre « Séna » ?",
    options: ["Fernand Hibbert", "Edwidge Danticat", "Dany Laferrière", "Roussan Camille"],
    correct: 0
  },
  {
    q: "L'œuvre « Douces déroutes » a été écrite par :",
    options: ["Jean-Claude Bajeux", "Rodney Saint-Éloi", "Émile Roumer", "Yanick Lahens"],
    correct: 3
  },
  {
    q: "On doit à la plume de Émile Ollivier l'œuvre suivante :",
    options: ["Compère Général Soleil", "Les Villages de Dieu", "Passages", "Le Manuscrit de mon ami"],
    correct: 2
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « La République d'Haïti et ses visiteurs » ?",
    options: ["Léon Laleau", "Oswald Durand", "Rodney Saint-Éloi", "Louis Joseph Janvier"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Poésies nationales » ?",
    options: ["Massillon Coicou", "Nadine Magloire", "Fernand Hibbert", "Léon Laleau"],
    correct: 0
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Suzanne Comhaire-Sylvain ?",
    options: ["Les Contes haïtiens", "Mimola", "Corps mêlés", "Musique nègre"],
    correct: 0
  },
  {
    q: "Davertige est une figure représentative de quel courant littéraire haïtien ?",
    options: ["Génération de la Ronde", "Spiralisme", "Indigénisme", "Haïti Littéraire"],
    correct: 3
  },
  {
    q: "L'écrivain(e) Ignace Nau est célèbre pour avoir publié :",
    options: ["Le Lambi", "Boulevard Baie des Anges", "La Vengeance de Mama", "Le Roman de l'occupation"],
    correct: 0
  },
  {
    q: "Carl Brouard est notamment l'auteur(e) de :",
    options: ["Romulus", "La mémoire aux abois", "Anacaona", "Écrit sur du ruban rose"],
    correct: 3
  },
  {
    q: "L'œuvre « La Couleur de l'aube » a été écrite par :",
    options: ["Isnardin Vieux", "Serge Legagneur", "René Philoctète", "Yanick Lahens"],
    correct: 3
  },
  {
    q: "Retrouvez l'auteur de « Vieilles chansons » parmi ces propositions :",
    options: ["Tertulien Guilbaud", "Jean Price-Mars", "Jean-Claude Bajeux", "Rodney Saint-Éloi"],
    correct: 0
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « De Saint-Domingue à Haïti » ?",
    options: ["Émile Roumer", "Évelyne Trouillot", "Makenzy Orcel", "Jean Price-Mars"],
    correct: 3
  },
  {
    q: "Retrouvez l'auteur de « L'Héritage colonial en Haïti » parmi ces propositions :",
    options: ["Georges Sylvain", "Placide David", "Liliane Devieux-Dehoux", "Émile Roumer"],
    correct: 1
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Poèmes d'Haïti et de France » ?",
    options: ["Émile Ollivier", "Georges Castera", "Émile Roumer", "Dany Laferrière"],
    correct: 2
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Rires et Pleurs » ?",
    options: ["Oswald Durand", "Etzer Vilaire", "Liliane Devieux-Dehoux", "Lyonel Trouillot"],
    correct: 0
  },
  {
    q: "L'écrivain(e) Stanley Péan est célèbre pour avoir publié :",
    options: ["Anacaona", "La Couleur de l'aube", "Zombi Blues", "Les Possédés de la pleine lune"],
    correct: 2
  },
  {
    q: "Identifiez l'œuvre écrite par Émile Ollivier :",
    options: ["Zoune chez sa ninnaine", "Bain de lune", "Haïti, terre mystique", "Mère-Solitude"],
    correct: 3
  },
  {
    q: "« Bain de lune » a été publié(e) par quel écrivain haïtien ?",
    options: ["Yanick Lahens", "Liliane Devieux-Dehoux", "Davertige", "Jacques Stephen Alexis"],
    correct: 0
  },
  {
    q: "« Passions » a été publié(e) par quel écrivain haïtien ?",
    options: ["Massillon Coicou", "Justin Lhérisson", "Placide David", "Frédéric Marcelin"],
    correct: 0
  },
  {
    q: "Quel écrivain haïtien a écrit « Rhapsodie sale » ?",
    options: ["Jean-Claude Fignolé", "Jean D'Amérique", "Fresnel Sylvestre", "Isnardin Vieux"],
    correct: 1
  },
  {
    q: "Qui a publié le livre « Zombi Blues » ?",
    options: ["Serge Legagneur", "Stanley Péan", "Lyonel Trouillot", "Fernand Hibbert"],
    correct: 1
  },
  {
    q: "Le livre « Je suis vivant » est dû à la plume de :",
    options: ["Paula Clermont Péan", "Louis-Philippe Dalembert", "Roland Morisseau", "Kettly Mars"],
    correct: 3
  },
  {
    q: "L'œuvre « Manuel illustré d'histoire de la littérature haïtienne » a été écrite par :",
    options: ["Michel Soukar", "Léon Laleau", "Pradel Pompilus", "Windsor Bellegarde"],
    correct: 2
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Au pipirite chantant » ?",
    options: ["Justin Chrysostome Dorsainvil", "Jean Métellus", "Georges Anglade", "Lyonel Trouillot"],
    correct: 1
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Haïti, terre mystique » ?",
    options: ["Gary Klang", "Gérard Étienne", "Jacques Roumain", "Faubert Bolivar"],
    correct: 0
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « La Famille des Pitite-Caille » ?",
    options: ["Anthony Phelps", "Cléante Valcin", "Kettly Mars", "Justin Lhérisson"],
    correct: 3
  },
  {
    q: "« Fille d'Haïti » compte parmi les œuvres de quel auteur ?",
    options: ["Rodney Saint-Éloi", "Guy Régis Jr", "Edwidge Danticat", "Marie Vieux-Chauvet"],
    correct: 3
  },
  {
    q: "Quel nom d'auteur associez-vous à « Frayeur » ?",
    options: ["Marie Vieux-Chauvet", "Kettly Mars", "Justin Chrysostome Dorsainvil", "Roland Morisseau"],
    correct: 1
  },
  {
    q: "Quelle est l'œuvre de Yanick Lahens parmi cette liste ?",
    options: ["Douces déroutes", "Musique nègre", "Le Cri de l'oiseau rouge", "Cœur des Îles"],
    correct: 0
  },
  {
    q: "On doit à la plume de Rodney Saint-Éloi l'œuvre suivante :",
    options: ["Le Livre d'Emma", "Zoune chez sa ninnaine", "La Vengeance de Mama", "Jacques Roche, la vie entière"],
    correct: 3
  },
  {
    q: "« Clair de Manbo » compte parmi les œuvres de quel auteur ?",
    options: ["Marie-Célie Agnant", "Serge Legagneur", "Gary Victor", "Marvin Victor"],
    correct: 2
  },
  {
    q: "De quelle plume est issue l'œuvre « Kasalé » ?",
    options: ["Gary Victor", "Jean Métellus", "Kettly Mars", "Jacques Roumain"],
    correct: 2
  },
  {
    q: "L'œuvre « Le Mât de cocagne » a été écrite par :",
    options: ["Justin Lhérisson", "Dany Laferrière", "René Depestre", "René Philoctète"],
    correct: 2
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « La Vengeance de Mama » ?",
    options: ["Ida Faubert", "Marie-Alice Théard", "Frédéric Marcelin", "Jean-Euphèle Milcé"],
    correct: 2
  },
  {
    q: "Quelle est l'œuvre de Néhémy Pierre-Dahomey parmi cette liste ?",
    options: ["Les Étrangers de la maison", "Boulevard Baie des Anges", "Huit jours dans un no man's land", "Le bout du monde est une fenêtre"],
    correct: 1
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Le Conditionnel » ?",
    options: ["Émile Roumer", "Justin Lhérisson", "Jean-Claude Bajeux", "Anthony Phelps"],
    correct: 3
  },
  {
    q: "Quel nom d'auteur associez-vous à « Ainsi parla l'oncle » ?",
    options: ["Jean Price-Mars", "Léon Laleau", "Jean D'Amérique", "Nadine Magloire"],
    correct: 0
  },
  {
    q: "« Théâtre » a été publié(e) par quel écrivain haïtien ?",
    options: ["Jean Price-Mars", "Oswald Durand", "Émile Roumer", "Syto Cavé"],
    correct: 3
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Georges Sylvain ?",
    options: ["Silhouettes de nègres et de négrophiles", "Mes années Duvalier", "Cric? Crac!", "Fille d'Haïti"],
    correct: 2
  },
  {
    q: "Le livre « Vieilles chansons » est dû à la plume de :",
    options: ["Tertulien Guilbaud", "Ida Faubert", "James Noël", "Jean-Robert Cadet"],
    correct: 0
  },
  {
    q: "L'œuvre « Idem » a été écrite par :",
    options: ["Davertige", "Marie-Thérèse Colimon-Hall", "Anthony Phelps", "Jean-Euphèle Milcé"],
    correct: 0
  },
  {
    q: "Parmi ces titres, lequel est signé Jean-Claude Charles ?",
    options: ["Passions", "Ferdinand je suis à Paris", "Jacmel au crépuscule", "Le Mal de vivre"],
    correct: 1
  },
  {
    q: "« Le Manuscrit de mon ami » est signé par quel auteur haïtien ?",
    options: ["Paula Clermont Péan", "Jean-Claude Bajeux", "Alibée Féry", "Fernand Hibbert"],
    correct: 3
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Pradel Pompilus ?",
    options: ["Rue des pas perdus", "Ferdinand je suis à Paris", "Manuel illustré d'histoire de la littérature haïtienne", "L'Autre Face de la mer"],
    correct: 2
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Oswald Durand ?",
    options: ["Passages", "Choucoune", "Mimola", "Le Conditionnel"],
    correct: 1
  },
  {
    q: "Quel nom d'auteur associez-vous à « Le Fusil et la croix » ?",
    options: ["Michel Soukar", "Paula Clermont Péan", "Makenzy Orcel", "Jacques Roumain"],
    correct: 0
  },
  {
    q: "« Les Villages de Dieu » compte parmi les œuvres de quel auteur ?",
    options: ["Marie Vieux-Chauvet", "Antoine Innocent", "Yanick Lahens", "Emmelie Prophète"],
    correct: 3
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Isnardin Vieux ?",
    options: ["Le Roman de l'occupation", "De Saint-Domingue à Haïti", "Choucoune", "La Crête-à-Pierrot"],
    correct: 0
  },
  {
    q: "Parmi ces titres, lequel est signé Serge Legagneur ?",
    options: ["La Danse sur le volcan", "Textes interdits", "Fille d'Haïti", "L'Énigme du retour"],
    correct: 1
  },
  {
    q: "Identifiez l'œuvre écrite par Hénock Trouillot :",
    options: ["La Blanche Négresse", "Dessalines ou le sang du Pont-Rouge", "Idem", "Rapatriés"],
    correct: 1
  },
  {
    q: "Le livre « Milwaukee Blues » est dû à la plume de :",
    options: ["Louis-Philippe Dalembert", "Paula Clermont Péan", "Georges Castera", "Frankétienne"],
    correct: 0
  },
  {
    q: "Quel écrivain haïtien a écrit « Mes années Duvalier » ?",
    options: ["Rodney Saint-Éloi", "Marie-Alice Théard", "James Noël", "Jean Price-Mars"],
    correct: 1
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Cric? Crac! » ?",
    options: ["Davertige", "Georges Sylvain", "Josaphat-Robert Large", "Jacques Stephen Alexis"],
    correct: 1
  },
  {
    q: "On doit à la plume de Fresnel Sylvestre l'œuvre suivante :",
    options: ["De Saint-Domingue à Haïti", "Un amour à trois temps", "Sous le soleil d'Haïti", "Le Mal de vivre"],
    correct: 1
  },
  {
    q: "De quelle plume est issue l'œuvre « Le bout du monde est une fenêtre » ?",
    options: ["Frankétienne", "Emmelie Prophète", "Michel Soukar", "René Philoctète"],
    correct: 1
  },
  {
    q: "De quelle plume est issue l'œuvre « Belle merveille » ?",
    options: ["James Noël", "Lyonel Trouillot", "Jacques Roumain", "Gary Klang"],
    correct: 0
  },
  {
    q: "De quelle plume est issue l'œuvre « Une eau-forte » ?",
    options: ["Jean-Robert Cadet", "Marie-Célie Agnant", "Jean Métellus", "Yanick Lahens"],
    correct: 2
  },
  {
    q: "De quelle plume est issue l'œuvre « Au pipirite chantant » ?",
    options: ["Rodney Saint-Éloi", "Jean Métellus", "Anténor Firmin", "Frédéric Marcelin"],
    correct: 1
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Louis Joseph Janvier ?",
    options: ["Les Villages de Dieu", "Séna", "La République d'Haïti et ses visiteurs", "Yanvalou pour Charlie"],
    correct: 2
  },
  {
    q: "« Cœur des Îles » a été publié(e) par quel écrivain haïtien ?",
    options: ["Ida Faubert", "Gérard Étienne", "Georges Anglade", "Antoine Innocent"],
    correct: 0
  },
  {
    q: "Quel livre porte la signature de Stanley Péan ?",
    options: ["Comment faire l'amour avec un Nègre sans se fatiguer", "La Plage des songes", "Haïti, terre mystique", "Silhouettes de nègres et de négrophiles"],
    correct: 1
  },
  {
    q: "Quelle est l'œuvre de Frédéric Marcelin parmi cette liste ?",
    options: ["Le Mât de cocagne", "La Vengeance de Mama", "De l'égalité des races humaines", "L'Année Dessalines"],
    correct: 1
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Le Briseur de rosée » ?",
    options: ["Lyonel Trouillot", "Edwidge Danticat", "Justin Lhérisson", "Louis Joseph Janvier"],
    correct: 1
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « L'Alphabet des nuits » ?",
    options: ["Louis Joseph Janvier", "Nadine Magloire", "Jean-Euphèle Milcé", "Frankétienne"],
    correct: 2
  },
  {
    q: "On doit à la plume de Fernand Hibbert l'œuvre suivante :",
    options: ["Théâtre", "Saison de porcs", "Séna", "Vers le sud"],
    correct: 2
  },
  {
    q: "Le livre « L'Énigme du retour » est dû à la plume de :",
    options: ["Louis-Philippe Dalembert", "Dany Laferrière", "Antoine Innocent", "Jean-Robert Cadet"],
    correct: 1
  },
  {
    q: "« Silhouettes de nègres et de négrophiles » compte parmi les œuvres de quel auteur ?",
    options: ["Louis-Philippe Dalembert", "René Depestre", "Jean Price-Mars", "Ida Faubert"],
    correct: 2
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Alibée Féry ?",
    options: ["Contes et légendes d'Haïti", "Boulevard Baie des Anges", "Musa-Paidica", "Corps mêlés"],
    correct: 2
  },
  {
    q: "On doit à la plume de Paula Clermont Péan l'œuvre suivante :",
    options: ["Le Mal de terre", "Ainsi parla l'oncle", "Passions", "Restavec"],
    correct: 0
  },
  {
    q: "Le livre « Rapatriés » est dû à la plume de :",
    options: ["Néhémy Pierre-Dahomey", "Windsor Bellegarde", "Suzanne Comhaire-Sylvain", "Émile Roumer"],
    correct: 0
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Le Sang et la Mer » ?",
    options: ["Josaphat-Robert Large", "Nadine Magloire", "Alibée Féry", "Gary Victor"],
    correct: 3
  },
  {
    q: "On doit à la plume de Évelyne Trouillot l'œuvre suivante :",
    options: ["L'Oiseau schizophone", "Manuel illustré d'histoire de la littérature haïtienne", "Désirée Congo", "Bonjour et adieu à la négritude"],
    correct: 2
  },
  {
    q: "L'œuvre « Dessalines ou le sang du Pont-Rouge » a été écrite par :",
    options: ["Hénock Trouillot", "Paula Clermont Péan", "Antoine Innocent", "Pradel Pompilus"],
    correct: 0
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Musique nègre » ?",
    options: ["Liliane Devieux-Dehoux", "Léon Laleau", "Frankétienne", "Évelyne Trouillot"],
    correct: 1
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « L'Énigme du retour » ?",
    options: ["Jean Métellus", "Georges Castera", "Dany Laferrière", "Davertige"],
    correct: 2
  },
  {
    q: "Quel titre figure dans la bibliographie de Guy Régis Jr ?",
    options: ["Poésies nationales", "Moi, fardeau inhérent", "Fonds des Nègres", "De Saint-Domingue à Haïti"],
    correct: 1
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « L'Année Dessalines » ?",
    options: ["Émile Ollivier", "Carl Brouard", "Jean Métellus", "Michel Soukar"],
    correct: 2
  },
  {
    q: "« Ultravocal » compte parmi les œuvres de quel auteur ?",
    options: ["Jean Price-Mars", "Frankétienne", "Carl Brouard", "Georges Sylvain"],
    correct: 1
  },
  {
    q: "Quel ouvrage a été publié par Isnardin Vieux ?",
    options: ["Le Roman de l'occupation", "Rêver debout", "Bain de lune", "Vers le sud"],
    correct: 0
  },
  {
    q: "L'œuvre « Boulevard Baie des Anges » a été écrite par :",
    options: ["Syto Cavé", "Nadine Magloire", "Néhémy Pierre-Dahomey", "Ida Faubert"],
    correct: 2
  },
  {
    q: "Quel nom d'auteur associez-vous à « Francesca » ?",
    options: ["Demesvar Delorme", "Syto Cavé", "Suzanne Comhaire-Sylvain", "Jean-Claude Fignolé"],
    correct: 0
  },
  {
    q: "« Mosochwazi Kout Fè » compte parmi les œuvres de quel auteur ?",
    options: ["Rodney Saint-Éloi", "Jean-Claude Bajeux", "Gérard Étienne", "Windsor Bellegarde"],
    correct: 1
  },
  {
    q: "Quel écrivain haïtien a écrit « Les Dix hommes noirs » ?",
    options: ["Etzer Vilaire", "Windsor Bellegarde", "Émile Ollivier", "Jean-Euphèle Milcé"],
    correct: 0
  },
  {
    q: "Le livre « Bicentenaire » est dû à la plume de :",
    options: ["Tertulien Guilbaud", "Liliane Devieux-Dehoux", "Alibée Féry", "Lyonel Trouillot"],
    correct: 3
  },
  {
    q: "Parmi ces titres, lequel est signé Ida Faubert ?",
    options: ["Rue Frontière", "Cœur des Îles", "Le Reste du temps", "Poésies nationales"],
    correct: 1
  },
  {
    q: "Qui a publié le livre « La Couleur de l'aube » ?",
    options: ["Carl Brouard", "Pradel Pompilus", "Gérard Étienne", "Yanick Lahens"],
    correct: 3
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Les Possédés de la pleine lune » ?",
    options: ["Oswald Durand", "Jean-Claude Fignolé", "Marvin Victor", "René Philoctète"],
    correct: 1
  },
  {
    q: "« Choucoune » est signé par quel auteur haïtien ?",
    options: ["Louis-Philippe Dalembert", "Gary Victor", "Oswald Durand", "Suzanne Comhaire-Sylvain"],
    correct: 2
  },
  {
    q: "L'œuvre « La Famille Vortex » a été écrite par :",
    options: ["Anthony Phelps", "Néhémy Pierre-Dahomey", "Jean-Claude Bajeux", "Jean Métellus"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Vers le sud » ?",
    options: ["Louis-Philippe Dalembert", "Suzanne Comhaire-Sylvain", "Faubert Bolivar", "Dany Laferrière"],
    correct: 3
  },
  {
    q: "« La Danse sur le volcan » est signé par quel auteur haïtien ?",
    options: ["Emmelie Prophète", "Jean-Claude Fignolé", "Jean-Claude Bajeux", "Marie Vieux-Chauvet"],
    correct: 3
  },
  {
    q: "Identifiez l'œuvre écrite par Fresnel Sylvestre :",
    options: ["Yanvalou pour Charlie", "Un amour à trois temps", "L'Espace d'un cillement", "Les Possédés de la pleine lune"],
    correct: 1
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Faubert Bolivar ?",
    options: ["Le Sang et la Mer", "Fils de misère", "Bois d'ébène", "Rue Frontière"],
    correct: 3
  },
  {
    q: "Quelle est l'œuvre de Louis Joseph Janvier parmi cette liste ?",
    options: ["Compère Général Soleil", "Le Reste du temps", "L'Empereur Dessalines", "La République d'Haïti et ses visiteurs"],
    correct: 3
  },
  {
    q: "« Textes interdits » est signé par quel auteur haïtien ?",
    options: ["Serge Legagneur", "René Philoctète", "Jean-Euphèle Milcé", "Edwidge Danticat"],
    correct: 0
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Davertige ?",
    options: ["Cric? Crac!", "Idem", "Je suis vivant", "La Vengeance de Mama"],
    correct: 1
  },
  {
    q: "Quel écrivain haïtien a écrit « Kasalé » ?",
    options: ["Marvin Victor", "Kettly Mars", "Frédéric Marcelin", "Marie-Thérèse Colimon-Hall"],
    correct: 1
  },
  {
    q: "« Guillaume et Nathalie » a été publié(e) par quel écrivain haïtien ?",
    options: ["Yanick Lahens", "Antoine Innocent", "Cléante Valcin", "Marie-Célie Agnant"],
    correct: 0
  },
  {
    q: "Le livre « Boulevard Baie des Anges » est dû à la plume de :",
    options: ["Faubert Bolivar", "Jean-Claude Charles", "Justin Lhérisson", "Néhémy Pierre-Dahomey"],
    correct: 3
  },
  {
    q: "Justin Lhérisson est notamment l'auteur(e) de :",
    options: ["Le Fusil et la croix", "Haïti, terre mystique", "La Famille des Pitite-Caille", "Restavec"],
    correct: 2
  },
  {
    q: "De quelle plume est issue l'œuvre « Le Choc » ?",
    options: ["Léon Laleau", "Massillon Coicou", "Jean-Claude Fignolé", "Faubert Bolivar"],
    correct: 0
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Ida Faubert ?",
    options: ["Cœur des Îles", "La Danse sur le volcan", "Saisons sauvages", "Hadriana dans tous mes rêves"],
    correct: 0
  },
  {
    q: "« Anacaona » a été publié(e) par quel écrivain haïtien ?",
    options: ["Roland Morisseau", "Jean Métellus", "Marie-Alice Théard", "René Depestre"],
    correct: 1
  },
  {
    q: "Quel nom d'auteur associez-vous à « Manhattan Blues » ?",
    options: ["Louis-Philippe Dalembert", "Marie-Célie Agnant", "Dany Laferrière", "Jean-Claude Charles"],
    correct: 3
  },
  {
    q: "L'œuvre « Le Manuscrit de mon ami » a été écrite par :",
    options: ["Yanick Lahens", "Rodney Saint-Éloi", "Isnardin Vieux", "Fernand Hibbert"],
    correct: 3
  },
  {
    q: "Quel écrivain haïtien a écrit « Haïti kenbe la ! » ?",
    options: ["Jean D'Amérique", "Rodney Saint-Éloi", "Davertige", "Léon Laleau"],
    correct: 1
  },
  {
    q: "L'écrivain(e) Demesvar Delorme est célèbre pour avoir publié :",
    options: ["Réflexions diverses sur Haïti", "La mémoire aux abois", "Le Qui-vive", "La Dot de Sara"],
    correct: 0
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Anthony Phelps ?",
    options: ["Boulevard Baie des Anges", "Le Conditionnel", "Haïti kenbe la !", "L'Empereur Dessalines"],
    correct: 1
  },
  {
    q: "Quel nom d'auteur associez-vous à « Le Mal de terre » ?",
    options: ["Guy Régis Jr", "Paula Clermont Péan", "Pradel Pompilus", "Serge Legagneur"],
    correct: 1
  },
  {
    q: "L'œuvre « Huit jours dans un no man's land » a été écrite par :",
    options: ["Fresnel Sylvestre", "Jean-Claude Charles", "Frankétienne", "Dany Laferrière"],
    correct: 2
  },
  {
    q: "Retrouvez l'auteur de « L'Alphabet des nuits » parmi ces propositions :",
    options: ["Charles Moravia", "Jean-Euphèle Milcé", "Etzer Vilaire", "Kettly Mars"],
    correct: 1
  },
  {
    q: "Retrouvez l'auteur de « Les Immortelles » parmi ces propositions :",
    options: ["Hénock Trouillot", "Suzanne Comhaire-Sylvain", "Marie-Thérèse Colimon-Hall", "Makenzy Orcel"],
    correct: 3
  },
  {
    q: "Parmi ces titres, lequel est signé Gérard Étienne ?",
    options: ["Maître-Minuit", "L'Héritage colonial en Haïti", "L'Odeur du café", "Le Nègre crucifié"],
    correct: 3
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Émile Roumer ?",
    options: ["Zoune chez sa ninnaine", "Poèmes d'Haïti et de France", "La Couleur de l'aube", "Compère Général Soleil"],
    correct: 1
  },
  {
    q: "Le livre « Les Contes haïtiens » est dû à la plume de :",
    options: ["Marie Vieux-Chauvet", "Justin Chrysostome Dorsainvil", "Émile Ollivier", "Suzanne Comhaire-Sylvain"],
    correct: 3
  },
  {
    q: "« Le Trou du souffleur » a été publié(e) par quel écrivain haïtien ?",
    options: ["Etzer Vilaire", "Georges Castera", "Justin Lhérisson", "Placide David"],
    correct: 1
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Syto Cavé ?",
    options: ["Théâtre", "Musique nègre", "Rue Frontière", "L'Année Dessalines"],
    correct: 0
  },
  {
    q: "Quel nom d'auteur associez-vous à « Dezafi » ?",
    options: ["Gérard Étienne", "Jean-Euphèle Milcé", "Jean Métellus", "Frankétienne"],
    correct: 3
  },
  {
    q: "Le livre « Mosochwazi Kout Fè » est dû à la plume de :",
    options: ["Jean-Claude Bajeux", "Émile Ollivier", "Liliane Devieux-Dehoux", "Serge Legagneur"],
    correct: 0
  },
  {
    q: "« Un amour à trois temps » a été publié(e) par quel écrivain haïtien ?",
    options: ["Anténor Firmin", "Cléante Valcin", "Fresnel Sylvestre", "René Depestre"],
    correct: 2
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Carl Brouard ?",
    options: ["Maître-Minuit", "Passions", "Pages retrouvées", "Les Immortelles"],
    correct: 2
  },
  {
    q: "L'œuvre « Comment faire l'amour avec un Nègre sans se fatiguer » a été écrite par :",
    options: ["Dany Laferrière", "Jean-Claude Charles", "Joujou Turenne", "Josaphat-Robert Large"],
    correct: 0
  },
  {
    q: "L'œuvre « Bicentenaire » a été écrite par :",
    options: ["Pradel Pompilus", "Lyonel Trouillot", "Ignace Nau", "Paula Clermont Péan"],
    correct: 1
  },
  {
    q: "Quelle est l'œuvre de Demesvar Delorme parmi cette liste ?",
    options: ["Douces déroutes", "De Saint-Domingue à Haïti", "Ces îles qui marchent", "Réflexions diverses sur Haïti"],
    correct: 3
  },
  {
    q: "« Manuel d'histoire d'Haïti » est signé par quel auteur haïtien ?",
    options: ["Évelyne Trouillot", "Oswald Durand", "René Depestre", "Justin Chrysostome Dorsainvil"],
    correct: 3
  },
  {
    q: "Qui a publié le livre « Écrivains haïtiens » ?",
    options: ["Windsor Bellegarde", "Marie-Thérèse Colimon-Hall", "Jacques Stephen Alexis", "Faubert Bolivar"],
    correct: 0
  },
  {
    q: "« L'Odeur du café » a été publié(e) par quel écrivain haïtien ?",
    options: ["Dany Laferrière", "Jean-Claude Bajeux", "Cléante Valcin", "Marie-Alice Théard"],
    correct: 0
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Au pipirite chantant » ?",
    options: ["Carl Brouard", "Josaphat-Robert Large", "Georges Anglade", "Jean Métellus"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Treize nouvelles vaudou » ?",
    options: ["Néhémy Pierre-Dahomey", "Etzer Vilaire", "Jean-Robert Léonidas", "Gary Victor"],
    correct: 3
  },
  {
    q: "Quel écrivain haïtien a écrit « Saison de porcs » ?",
    options: ["Rodney Saint-Éloi", "Nadine Magloire", "Gary Victor", "Jacques Roumain"],
    correct: 2
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Un amour à trois temps » ?",
    options: ["Fresnel Sylvestre", "Syto Cavé", "Davertige", "René Depestre"],
    correct: 0
  },
  {
    q: "Demesvar Delorme est notamment l'auteur(e) de :",
    options: ["Gouverneurs de la rosée", "Réflexions diverses sur Haïti", "Encre allègre", "Ferdinand je suis à Paris"],
    correct: 1
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Assaut à la nuit » ?",
    options: ["Roussan Camille", "Jean D'Amérique", "Anthony Phelps", "René Philoctète"],
    correct: 0
  },
  {
    q: "Carl Brouard a notamment donné naissance à quelle œuvre ?",
    options: ["Le Reste du temps", "Amour, Colère et Folie", "La Vocation de l'élite", "Écrit sur du ruban rose"],
    correct: 3
  },
  {
    q: "Quel ouvrage a été publié par Faubert Bolivar ?",
    options: ["Les Immortelles", "Rue Frontière", "La République d'Haïti et ses visiteurs", "Le Rond-point"],
    correct: 1
  },
  {
    q: "On doit à la plume de Georges Anglade l'œuvre suivante :",
    options: ["Le Qui-vive", "Le Conditionnel", "Les Blancs de mémoire", "Rêver debout"],
    correct: 2
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Roussan Camille ?",
    options: ["Séna", "La Famille des Pitite-Caille", "Pèlentèt", "Assaut à la nuit"],
    correct: 3
  },
  {
    q: "Identifiez l'œuvre écrite par Placide David :",
    options: ["Ainsi parla l'oncle", "L'Héritage colonial en Haïti", "Nouveaux poèmes", "Ultravocal"],
    correct: 1
  },
  {
    q: "Quel écrivain haïtien a écrit « Musa-Paidica » ?",
    options: ["Alibée Féry", "Demesvar Delorme", "Charles Moravia", "Jean-Claude Bajeux"],
    correct: 0
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Le Reste du temps » ?",
    options: ["Justin Lhérisson", "Georges Sylvain", "Cléante Valcin", "Emmelie Prophète"],
    correct: 3
  },
  {
    q: "Retrouvez l'auteur de « La Belle Amour humaine » parmi ces propositions :",
    options: ["Antoine Innocent", "Hénock Trouillot", "Gary Klang", "Lyonel Trouillot"],
    correct: 3
  },
  {
    q: "Quel écrivain haïtien a écrit « À l'angle des rues parallèles » ?",
    options: ["Fernand Hibbert", "Tertulien Guilbaud", "Serge Legagneur", "Gary Victor"],
    correct: 3
  },
  {
    q: "Retrouvez l'auteur de « Fille d'Haïti » parmi ces propositions :",
    options: ["Émile Ollivier", "Marie Vieux-Chauvet", "Marvin Victor", "Oswald Durand"],
    correct: 1
  },
  {
    q: "Alibée Féry a notamment donné naissance à quelle œuvre ?",
    options: ["Choucoune", "Musa-Paidica", "Un Arc-en-ciel pour l'occident chrétien", "Bois d'ébène"],
    correct: 1
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Charles Moravia ?",
    options: ["Ces îles qui marchent", "Cric? Crac!", "La Crête-à-Pierrot", "Le Fusil et la croix"],
    correct: 2
  },
  {
    q: "Quel nom d'auteur associez-vous à « Zoune chez sa ninnaine » ?",
    options: ["Frédéric Marcelin", "Jean D'Amérique", "Justin Lhérisson", "Marie-Célie Agnant"],
    correct: 2
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Tertulien Guilbaud ?",
    options: ["L'Alphabet des nuits", "Jacques Roche, la vie entière", "Vieilles chansons", "Mûr à crever"],
    correct: 2
  },
  {
    q: "Retrouvez l'auteur de « Poésies nationales » parmi ces propositions :",
    options: ["Fernand Hibbert", "Massillon Coicou", "Marie-Célie Agnant", "Justin Chrysostome Dorsainvil"],
    correct: 1
  },
  {
    q: "L'œuvre « L'Alphabet des nuits » a été écrite par :",
    options: ["Gérard Étienne", "Kettly Mars", "Jean-Euphèle Milcé", "Isnardin Vieux"],
    correct: 2
  },
  {
    q: "De quelle plume est issue l'œuvre « Mère-Solitude » ?",
    options: ["Oswald Durand", "Georges Sylvain", "Émile Ollivier", "Kettly Mars"],
    correct: 2
  },
  {
    q: "On doit à la plume de Anténor Firmin l'œuvre suivante :",
    options: ["La Crête-à-Pierrot", "Milwaukee Blues", "Un Arc-en-ciel pour l'occident chrétien", "De l'égalité des races humaines"],
    correct: 3
  },
  {
    q: "De quelle plume est issue l'œuvre « Ainsi parla l'oncle » ?",
    options: ["Anthony Phelps", "Davertige", "Ignace Nau", "Jean Price-Mars"],
    correct: 3
  },
  {
    q: "De quelle plume est issue l'œuvre « Rosalie l'infâme » ?",
    options: ["Paula Clermont Péan", "Justin Lhérisson", "Louis Joseph Janvier", "Évelyne Trouillot"],
    correct: 3
  },
  {
    q: "De quelle plume est issue l'œuvre « Le Mal de vivre » ?",
    options: ["Nadine Magloire", "Ignace Nau", "Justin Lhérisson", "René Philoctète"],
    correct: 0
  },
  {
    q: "Le livre « Zoune chez sa ninnaine » est dû à la plume de :",
    options: ["Paula Clermont Péan", "Dany Laferrière", "Justin Lhérisson", "Louis-Philippe Dalembert"],
    correct: 2
  },
  {
    q: "« Sous le soleil d'Haïti » a été publié(e) par quel écrivain haïtien ?",
    options: ["Oswald Durand", "Gérard Étienne", "Ida Faubert", "Edwidge Danticat"],
    correct: 2
  },
  {
    q: "Parmi ces titres, lequel est signé Fresnel Sylvestre ?",
    options: ["Amour, Colère et Folie", "Je suis vivant", "Le Qui-vive", "Un amour à trois temps"],
    correct: 3
  },
  {
    q: "Quel écrivain haïtien a écrit « Le Qui-vive » ?",
    options: ["Jean-Claude Charles", "Frankétienne", "Syto Cavé", "Demesvar Delorme"],
    correct: 2
  },
  {
    q: "Quel titre figure dans la bibliographie de Ignace Nau ?",
    options: ["Pèlentèt", "Bonjour et adieu à la négritude", "L'Énigme du retour", "Le Lambi"],
    correct: 3
  },
  {
    q: "De quelle plume est issue l'œuvre « Dessalines ou le sang du Pont-Rouge » ?",
    options: ["Hénock Trouillot", "Serge Legagneur", "Alibée Féry", "Jean Métellus"],
    correct: 0
  },
  {
    q: "L'écrivain(e) Louis Joseph Janvier est célèbre pour avoir publié :",
    options: ["La République d'Haïti et ses visiteurs", "Maître-Minuit", "Ferdinand je suis à Paris", "Haïti kenbe la !"],
    correct: 0
  },
  {
    q: "« Assaut à la nuit » a été publié(e) par quel écrivain haïtien ?",
    options: ["Roland Morisseau", "James Noël", "Georges Anglade", "Roussan Camille"],
    correct: 3
  },
  {
    q: "Le livre « Le Peuple des terres mêlées » est dû à la plume de :",
    options: ["Marvin Victor", "Emmelie Prophète", "Edwidge Danticat", "René Philoctète"],
    correct: 3
  },
  {
    q: "Qui a publié le livre « Le Testament des solitudes » ?",
    options: ["Marie Vieux-Chauvet", "Gary Victor", "Emmelie Prophète", "Fresnel Sylvestre"],
    correct: 2
  },
  {
    q: "« Le Choc » a été publié(e) par quel écrivain haïtien ?",
    options: ["Makenzy Orcel", "Pradel Pompilus", "Jean Price-Mars", "Léon Laleau"],
    correct: 3
  },
  {
    q: "On doit à la plume de Charles Moravia l'œuvre suivante :",
    options: ["La Crête-à-Pierrot", "Écrivains haïtiens", "Les Contes haïtiens", "Le Peuple des terres mêlées"],
    correct: 0
  },
  {
    q: "Quelle est l'œuvre de Marie-Alice Théard parmi cette liste ?",
    options: ["Les Thazar", "Mes années Duvalier", "Contes et légendes d'Haïti", "Le Fusil et la croix"],
    correct: 1
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Textes interdits » ?",
    options: ["Jean-Claude Fignolé", "Serge Legagneur", "Alibée Féry", "Jean Price-Mars"],
    correct: 1
  },
  {
    q: "L'écrivain(e) Liliane Devieux-Dehoux est célèbre pour avoir publié :",
    options: ["Mes années Duvalier", "La Blanche Négresse", "L'Amour oui. La mort non", "Douces déroutes"],
    correct: 2
  },
  {
    q: "Identifiez l'œuvre écrite par Justin Chrysostome Dorsainvil :",
    options: ["Jacmel au crépuscule", "Cric? Crac!", "Le Peuple des terres mêlées", "Manuel d'histoire d'Haïti"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Écrit sur du ruban rose » ?",
    options: ["Demesvar Delorme", "Marie Vieux-Chauvet", "Carl Brouard", "Stanley Péan"],
    correct: 2
  },
  {
    q: "Quel nom d'auteur associez-vous à « Corps mêlés » ?",
    options: ["Marvin Victor", "René Philoctète", "Jacques Stephen Alexis", "Edwidge Danticat"],
    correct: 0
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Le Conditionnel » ?",
    options: ["Josaphat-Robert Large", "Louis-Philippe Dalembert", "Marvin Victor", "Anthony Phelps"],
    correct: 3
  },
  {
    q: "Retrouvez l'auteur de « Adieu, mon frère » parmi ces propositions :",
    options: ["Roland Morisseau", "Fernand Hibbert", "Joujou Turenne", "Edwidge Danticat"],
    correct: 3
  },
  {
    q: "De quelle plume est issue l'œuvre « Île à vau-l'eau » ?",
    options: ["Jean-Robert Léonidas", "Justin Lhérisson", "Cléante Valcin", "Michel Soukar"],
    correct: 0
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Ignace Nau ?",
    options: ["Ces îles qui marchent", "Mûr à crever", "Le Lambi", "Cœur des Îles"],
    correct: 2
  },
  {
    q: "Qui a publié le livre « Moi, fardeau inhérent » ?",
    options: ["Guy Régis Jr", "Émile Roumer", "Cléante Valcin", "Gérard Étienne"],
    correct: 0
  },
  {
    q: "Etzer Vilaire est notamment l'auteur(e) de :",
    options: ["De l'égalité des races humaines", "Poèmes d'Haïti et de France", "Désirée Congo", "Nouveaux poèmes"],
    correct: 3
  },
  {
    q: "Retrouvez l'auteur de « Ces îles qui marchent » parmi ces propositions :",
    options: ["René Philoctète", "Demesvar Delorme", "Georges Sylvain", "Jean D'Amérique"],
    correct: 0
  },
  {
    q: "Quel titre figure dans la bibliographie de Jean-Robert Léonidas ?",
    options: ["Saison de porcs", "Île à vau-l'eau", "Ainsi parla l'oncle", "Fils de misère"],
    correct: 1
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « L'Héritage colonial en Haïti » ?",
    options: ["Jean-Robert Cadet", "James Noël", "Jean Price-Mars", "Placide David"],
    correct: 3
  },
  {
    q: "« L'Oiseau schizophone » compte parmi les œuvres de quel auteur ?",
    options: ["Gérard Étienne", "René Philoctète", "Roussan Camille", "Frankétienne"],
    correct: 3
  },
  {
    q: "Quel ouvrage a été publié par Marvin Victor ?",
    options: ["Le Livre d'Emma", "Corps mêlés", "Le Trou du souffleur", "Jacques Roche, la vie entière"],
    correct: 1
  },
  {
    q: "L'écrivain(e) Windsor Bellegarde est célèbre pour avoir publié :",
    options: ["Romulus", "Rosalie l'infâme", "Écrivains haïtiens", "La Famille Vortex"],
    correct: 2
  },
  {
    q: "L'œuvre « Bonjour et adieu à la négritude » a été écrite par :",
    options: ["Anténor Firmin", "Marie-Alice Théard", "René Depestre", "Jean-Claude Bajeux"],
    correct: 2
  },
  {
    q: "Quel écrivain haïtien a écrit « L'Héritage colonial en Haïti » ?",
    options: ["Carl Brouard", "Placide David", "Jean D'Amérique", "Jean-Euphèle Milcé"],
    correct: 1
  },
  {
    q: "« L'Énigme du retour » est signé par quel auteur haïtien ?",
    options: ["Edwidge Danticat", "Dany Laferrière", "Guy Régis Jr", "Ignace Nau"],
    correct: 1
  },
  {
    q: "Quel écrivain haïtien a écrit « Aube tranquille » ?",
    options: ["James Noël", "Gary Klang", "Jean-Claude Fignolé", "Jean-Robert Léonidas"],
    correct: 2
  },
  {
    q: "Retrouvez l'auteur de « La mémoire aux abois » parmi ces propositions :",
    options: ["Louis Joseph Janvier", "Antoine Innocent", "Évelyne Trouillot", "Fernand Hibbert"],
    correct: 2
  },
  {
    q: "Qui a publié le livre « Le Trou du souffleur » ?",
    options: ["Kettly Mars", "Rodney Saint-Éloi", "Marvin Victor", "Georges Castera"],
    correct: 3
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « L'Énigme du retour » ?",
    options: ["Suzanne Comhaire-Sylvain", "Dany Laferrière", "Tertulien Guilbaud", "Roland Morisseau"],
    correct: 1
  },
  {
    q: "Quelle est l'œuvre de Charles Moravia parmi cette liste ?",
    options: ["La Crête-à-Pierrot", "Les Arbres musiciens", "Zombi Blues", "Dezafi"],
    correct: 0
  },
  {
    q: "Retrouvez l'auteur de « Manhattan Blues » parmi ces propositions :",
    options: ["Ignace Nau", "Oswald Durand", "Jean-Claude Charles", "Jean Price-Mars"],
    correct: 2
  },
  {
    q: "Joujou Turenne est notamment l'auteur(e) de :",
    options: ["Milwaukee Blues", "Vieilles chansons", "Saisons sauvages", "Contes et légendes d'Haïti"],
    correct: 3
  },
  {
    q: "L'écrivain(e) Joujou Turenne est célèbre pour avoir publié :",
    options: ["Les Thazar", "Anacaona", "Vers le sud", "Contes et légendes d'Haïti"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Kasalé » ?",
    options: ["Faubert Bolivar", "Nadine Magloire", "Kettly Mars", "Léon Laleau"],
    correct: 2
  },
  {
    q: "Quel nom d'auteur associez-vous à « Le Qui-vive » ?",
    options: ["Carl Brouard", "Jacques Roumain", "Syto Cavé", "Nadine Magloire"],
    correct: 2
  },
  {
    q: "On doit à la plume de James Noël l'œuvre suivante :",
    options: ["Rires et Pleurs", "Rue des pas perdus", "Belle merveille", "Thémistocle-Épaminondas Labasterre"],
    correct: 2
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Les Rapaces » ?",
    options: ["Fernand Hibbert", "Marie Vieux-Chauvet", "Léon Laleau", "Jean-Claude Bajeux"],
    correct: 1
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Tertulien Guilbaud ?",
    options: ["La République d'Haïti et ses visiteurs", "Le Trou du souffleur", "Vieilles chansons", "Yanvalou pour Charlie"],
    correct: 2
  },
  {
    q: "Parmi ces titres, lequel est signé Suzanne Comhaire-Sylvain ?",
    options: ["Le Sang et la Mer", "Anacaona", "Les Contes haïtiens", "L'Heure hybride"],
    correct: 2
  },
  {
    q: "Le livre « Dezafi » est dû à la plume de :",
    options: ["Fernand Hibbert", "Frankétienne", "Placide David", "Ida Faubert"],
    correct: 1
  },
  {
    q: "Quel écrivain haïtien a écrit « Passages » ?",
    options: ["Émile Ollivier", "Dany Laferrière", "René Philoctète", "Faubert Bolivar"],
    correct: 0
  },
  {
    q: "Le livre « Bois d'ébène » est dû à la plume de :",
    options: ["Jacques Roumain", "Pradel Pompilus", "Michel Soukar", "Serge Legagneur"],
    correct: 0
  },
  {
    q: "Le livre « Pages retrouvées » est dû à la plume de :",
    options: ["Louis-Philippe Dalembert", "Carl Brouard", "Justin Lhérisson", "Louis Joseph Janvier"],
    correct: 1
  },
  {
    q: "« Yanvalou pour Charlie » a été publié(e) par quel écrivain haïtien ?",
    options: ["James Noël", "Jean-Euphèle Milcé", "Lyonel Trouillot", "Fresnel Sylvestre"],
    correct: 2
  },
  {
    q: "Quel nom d'auteur associez-vous à « Haïti kenbe la ! » ?",
    options: ["Émile Ollivier", "Georges Castera", "Carl Brouard", "Rodney Saint-Éloi"],
    correct: 3
  },
  {
    q: "Qui a publié le livre « Rosalie l'infâme » ?",
    options: ["Demesvar Delorme", "Jean Price-Mars", "Nadine Magloire", "Évelyne Trouillot"],
    correct: 3
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Le Trou du souffleur » ?",
    options: ["Hénock Trouillot", "Makenzy Orcel", "Georges Castera", "Louis-Philippe Dalembert"],
    correct: 2
  },
  {
    q: "« Zoune chez sa ninnaine » est signé par quel auteur haïtien ?",
    options: ["Georges Anglade", "Alibée Féry", "Anthony Phelps", "Justin Lhérisson"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « L'Année Dessalines » ?",
    options: ["Jean Price-Mars", "Jean Métellus", "Gérard Étienne", "Justin Chrysostome Dorsainvil"],
    correct: 1
  },
  {
    q: "Parmi ces titres, lequel est signé Marvin Victor ?",
    options: ["Un Arc-en-ciel pour l'occident chrétien", "Le bout du monde est une fenêtre", "Les Fantoches", "Corps mêlés"],
    correct: 3
  },
  {
    q: "Alibée Féry est notamment l'auteur(e) de :",
    options: ["Musa-Paidica", "La Plage des songes", "Pays sans chapeau", "La Famille Vortex"],
    correct: 0
  },
  {
    q: "Qui a publié le livre « Manuel illustré d'histoire de la littérature haïtienne » ?",
    options: ["Jacques Stephen Alexis", "Georges Sylvain", "Pradel Pompilus", "Joujou Turenne"],
    correct: 2
  },
  {
    q: "Rodney Saint-Éloi a notamment donné naissance à quelle œuvre ?",
    options: ["Mon pays que voici", "Le Reste du temps", "Haïti kenbe la !", "Au pipirite chantant"],
    correct: 2
  },
  {
    q: "« Le Choc » compte parmi les œuvres de quel auteur ?",
    options: ["Demesvar Delorme", "Rodney Saint-Éloi", "Léon Laleau", "Yanick Lahens"],
    correct: 2
  },
  {
    q: "Quel nom d'auteur associez-vous à « La Bélière Caraïbe » ?",
    options: ["Anthony Phelps", "Anténor Firmin", "Gary Victor", "Joujou Turenne"],
    correct: 0
  },
  {
    q: "On doit à la plume de Makenzy Orcel l'œuvre suivante :",
    options: ["Le Lambi", "Le Nègre crucifié", "Le Reste du temps", "Une somme humaine"],
    correct: 3
  },
  {
    q: "Quel nom d'auteur associez-vous à « Huit jours dans un no man's land » ?",
    options: ["Émile Roumer", "Frankétienne", "Jean-Robert Cadet", "Émile Ollivier"],
    correct: 1
  },
  {
    q: "Quel écrivain haïtien a écrit « Mûr à crever » ?",
    options: ["Carl Brouard", "Frankétienne", "Kettly Mars", "Marie-Thérèse Colimon-Hall"],
    correct: 1
  },
  {
    q: "L'écrivain(e) Michel Soukar est célèbre pour avoir publié :",
    options: ["L'Amour oui. La mort non", "Le Fusil et la croix", "Fils de misère", "L'Année Dessalines"],
    correct: 1
  },
  {
    q: "De quelle plume est issue l'œuvre « Poèmes d'Haïti et de France » ?",
    options: ["Paula Clermont Péan", "Léon Laleau", "Émile Roumer", "Jean-Claude Charles"],
    correct: 2
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Pèlentèt » ?",
    options: ["Anthony Phelps", "Émile Ollivier", "Frankétienne", "Edwidge Danticat"],
    correct: 2
  },
  {
    q: "Quel nom d'auteur associez-vous à « Les Dix hommes noirs » ?",
    options: ["Lyonel Trouillot", "Gary Victor", "Etzer Vilaire", "Gérard Étienne"],
    correct: 2
  },
  {
    q: "Qui a publié le livre « Écrit sur du ruban rose » ?",
    options: ["Marie-Thérèse Colimon-Hall", "Carl Brouard", "Louis Joseph Janvier", "Jean Price-Mars"],
    correct: 1
  },
  {
    q: "Quel titre figure dans la bibliographie de Anténor Firmin ?",
    options: ["Le Sang et la Mer", "Mon pays que voici", "Musa-Paidica", "De l'égalité des races humaines"],
    correct: 3
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Mes années Duvalier » ?",
    options: ["Marie-Alice Théard", "Jacques Stephen Alexis", "Georges Castera", "Massillon Coicou"],
    correct: 0
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Le Choc » ?",
    options: ["Windsor Bellegarde", "Jean-Robert Léonidas", "Léon Laleau", "Stanley Péan"],
    correct: 2
  },
  {
    q: "De quelle plume est issue l'œuvre « Jacques Roche, la vie entière » ?",
    options: ["Roussan Camille", "Windsor Bellegarde", "Rodney Saint-Éloi", "Pradel Pompilus"],
    correct: 2
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Fils de misère » ?",
    options: ["Stanley Péan", "Marie-Thérèse Colimon-Hall", "Carl Brouard", "Jean-Claude Bajeux"],
    correct: 1
  },
  {
    q: "Retrouvez l'auteur de « Manuel d'histoire d'Haïti » parmi ces propositions :",
    options: ["Justin Chrysostome Dorsainvil", "Guy Régis Jr", "Justin Lhérisson", "Jean-Claude Bajeux"],
    correct: 0
  },
  {
    q: "On doit à la plume de Pradel Pompilus l'œuvre suivante :",
    options: ["Une eau-forte", "Adieu, mon frère", "Manuel illustré d'histoire de la littérature haïtienne", "Les Rapaces"],
    correct: 2
  },
  {
    q: "Quel titre figure dans la bibliographie de Jean Price-Mars ?",
    options: ["Anacaona", "Belle merveille", "L'Heure hybride", "Silhouettes de nègres et de négrophiles"],
    correct: 3
  },
  {
    q: "De quelle plume est issue l'œuvre « Krik? Krak! » ?",
    options: ["Kettly Mars", "Emmelie Prophète", "Edwidge Danticat", "Michel Soukar"],
    correct: 2
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Anacaona » ?",
    options: ["Jean Métellus", "Kettly Mars", "Fernand Hibbert", "Faubert Bolivar"],
    correct: 0
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Le Cri de l'oiseau rouge » ?",
    options: ["Gérard Étienne", "Jean-Robert Léonidas", "Makenzy Orcel", "Edwidge Danticat"],
    correct: 3
  },
  {
    q: "De quelle plume est issue l'œuvre « Manuel d'histoire d'Haïti » ?",
    options: ["Gérard Étienne", "Justin Chrysostome Dorsainvil", "Stanley Péan", "Davertige"],
    correct: 1
  },
  {
    q: "De quelle plume est issue l'œuvre « Les Contes haïtiens » ?",
    options: ["Marie Vieux-Chauvet", "Léon Laleau", "Suzanne Comhaire-Sylvain", "Georges Sylvain"],
    correct: 2
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Justin Lhérisson ?",
    options: ["Belle merveille", "Rue des pas perdus", "Le Mal de terre", "La Famille des Pitite-Caille"],
    correct: 3
  },
  {
    q: "Quelle est l'œuvre de Michel Soukar parmi cette liste ?",
    options: ["Haïti, terre mystique", "Le Peuple des terres mêlées", "Idem", "Le Fusil et la croix"],
    correct: 3
  },
  {
    q: "« Une eau-forte » a été publié(e) par quel écrivain haïtien ?",
    options: ["Fresnel Sylvestre", "Etzer Vilaire", "Oswald Durand", "Jean Métellus"],
    correct: 3
  },
  {
    q: "Quel écrivain haïtien a écrit « La Plage des songes » ?",
    options: ["Marie-Thérèse Colimon-Hall", "Stanley Péan", "Léon Laleau", "Georges Anglade"],
    correct: 1
  },
  {
    q: "« Haïti, terre mystique » est signé par quel auteur haïtien ?",
    options: ["Georges Anglade", "Ida Faubert", "Gary Klang", "Frédéric Marcelin"],
    correct: 2
  },
  {
    q: "Quel écrivain haïtien a écrit « Vers le sud » ?",
    options: ["Jean Métellus", "Fresnel Sylvestre", "Évelyne Trouillot", "Dany Laferrière"],
    correct: 3
  },
  {
    q: "Retrouvez l'auteur de « Les Rapaces » parmi ces propositions :",
    options: ["Louis-Philippe Dalembert", "Etzer Vilaire", "Marie Vieux-Chauvet", "Windsor Bellegarde"],
    correct: 2
  },
  {
    q: "« Manuel illustré d'histoire de la littérature haïtienne » a été publié(e) par quel écrivain haïtien ?",
    options: ["Louis Joseph Janvier", "Roussan Camille", "Pradel Pompilus", "Marie-Alice Théard"],
    correct: 2
  },
  {
    q: "Quel nom d'auteur associez-vous à « Milwaukee Blues » ?",
    options: ["Anthony Phelps", "Louis-Philippe Dalembert", "Frédéric Marcelin", "Serge Legagneur"],
    correct: 1
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Serge Legagneur ?",
    options: ["Textes interdits", "Dezafi", "Soleil à coudre", "Moi, Toussaint Louverture"],
    correct: 0
  },
  {
    q: "« Comment faire l'amour avec un Nègre sans se fatiguer » a été publié(e) par quel écrivain haïtien ?",
    options: ["Placide David", "Dany Laferrière", "Serge Legagneur", "Frédéric Marcelin"],
    correct: 1
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Suzanne Comhaire-Sylvain ?",
    options: ["Frayeur", "Les Contes haïtiens", "Treize nouvelles vaudou", "Manuel illustré d'histoire de la littérature haïtienne"],
    correct: 1
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Jean-Claude Bajeux ?",
    options: ["Dessalines ou le sang du Pont-Rouge", "Mosochwazi Kout Fè", "Zombi Blues", "Passions"],
    correct: 1
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Georges Castera ?",
    options: ["Le Rond-point", "Le Trou du souffleur", "Le Reste du temps", "Milwaukee Blues"],
    correct: 1
  },
  {
    q: "« Je suis vivant » compte parmi les œuvres de quel auteur ?",
    options: ["Jean-Claude Fignolé", "Néhémy Pierre-Dahomey", "Lyonel Trouillot", "Kettly Mars"],
    correct: 3
  },
  {
    q: "Quel livre porte la signature de Rodney Saint-Éloi ?",
    options: ["Jacques Roche, la vie entière", "Le Testament des solitudes", "L'Héritage colonial en Haïti", "Amour, Colère et Folie"],
    correct: 0
  },
  {
    q: "« Dezafi » a été publié(e) par quel écrivain haïtien ?",
    options: ["Placide David", "Serge Legagneur", "Syto Cavé", "Frankétienne"],
    correct: 3
  },
  {
    q: "Qui a publié le livre « La Plage des songes » ?",
    options: ["Émile Ollivier", "Rodney Saint-Éloi", "Frédéric Marcelin", "Stanley Péan"],
    correct: 3
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Michel Soukar ?",
    options: ["Le Fusil et la croix", "À l'angle des rues parallèles", "Cric? Crac!", "Mur Méditerranée"],
    correct: 0
  },
  {
    q: "« Moi, fardeau inhérent » compte parmi les œuvres de quel auteur ?",
    options: ["Jean D'Amérique", "Guy Régis Jr", "Louis-Philippe Dalembert", "Anthony Phelps"],
    correct: 1
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Épisode de la Révolution » ?",
    options: ["Marie-Célie Agnant", "Ignace Nau", "Charles Moravia", "Josaphat-Robert Large"],
    correct: 1
  },
  {
    q: "L'écrivain(e) Marie-Alice Théard est célèbre pour avoir publié :",
    options: ["Nouveaux poèmes", "Le Mal de terre", "Vers le sud", "Mes années Duvalier"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Soleil à coudre » ?",
    options: ["Dany Laferrière", "Jacques Stephen Alexis", "Jean D'Amérique", "Tertulien Guilbaud"],
    correct: 2
  },
  {
    q: "Retrouvez l'auteur de « La Bélière Caraïbe » parmi ces propositions :",
    options: ["Anthony Phelps", "Fernand Hibbert", "Etzer Vilaire", "Paula Clermont Péan"],
    correct: 0
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Le Testament des solitudes » ?",
    options: ["Georges Anglade", "Rodney Saint-Éloi", "Emmelie Prophète", "Anthony Phelps"],
    correct: 2
  },
  {
    q: "L'œuvre « À l'angle des rues parallèles » a été écrite par :",
    options: ["Marie-Alice Théard", "Kettly Mars", "Gary Victor", "Josaphat-Robert Large"],
    correct: 2
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Makenzy Orcel ?",
    options: ["L'Ombre animale", "Le Roman de l'occupation", "Les Étrangers de la maison", "Boulevard Baie des Anges"],
    correct: 0
  },
  {
    q: "« Les Contes haïtiens » a été publié(e) par quel écrivain haïtien ?",
    options: ["Ida Faubert", "Roussan Camille", "Suzanne Comhaire-Sylvain", "Georges Sylvain"],
    correct: 2
  },
  {
    q: "Quel écrivain haïtien a écrit « Les Blancs de mémoire » ?",
    options: ["Etzer Vilaire", "Cléante Valcin", "Georges Anglade", "Nadine Magloire"],
    correct: 2
  },
  {
    q: "Le livre « À l'angle des rues parallèles » est dû à la plume de :",
    options: ["Cléante Valcin", "Michel Soukar", "Gary Victor", "Marie-Thérèse Colimon-Hall"],
    correct: 2
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Bicentenaire » ?",
    options: ["Gérard Étienne", "Justin Chrysostome Dorsainvil", "Évelyne Trouillot", "Lyonel Trouillot"],
    correct: 3
  },
  {
    q: "Le livre « Bain de lune » est dû à la plume de :",
    options: ["Marie-Thérèse Colimon-Hall", "Guy Régis Jr", "Yanick Lahens", "Frankétienne"],
    correct: 2
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Boulevard Baie des Anges » ?",
    options: ["Néhémy Pierre-Dahomey", "Oswald Durand", "Carl Brouard", "Cléante Valcin"],
    correct: 0
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Antoine Innocent ?",
    options: ["Mimola", "Idem", "Le Livre d'Emma", "La Couleur de l'aube"],
    correct: 0
  },
  {
    q: "« Contes et légendes d'Haïti » a été publié(e) par quel écrivain haïtien ?",
    options: ["Cléante Valcin", "Gary Klang", "Roussan Camille", "Joujou Turenne"],
    correct: 3
  },
  {
    q: "De quelle plume est issue l'œuvre « Haïti kenbe la ! » ?",
    options: ["Frankétienne", "Liliane Devieux-Dehoux", "Kettly Mars", "Rodney Saint-Éloi"],
    correct: 3
  },
  {
    q: "On doit à la plume de Ida Faubert l'œuvre suivante :",
    options: ["Les Arbres musiciens", "Le Livre d'Emma", "Cœur des Îles", "Rêver debout"],
    correct: 2
  },
  {
    q: "L'écrivain(e) James Noël est célèbre pour avoir publié :",
    options: ["Belle merveille", "Mon pays que voici", "Mes années Duvalier", "Zombi Blues"],
    correct: 0
  },
  {
    q: "On doit à la plume de Léon Laleau l'œuvre suivante :",
    options: ["Le Choc", "L'Espace d'un cillement", "Passions", "Le Peuple des terres mêlées"],
    correct: 0
  },
  {
    q: "Quel nom d'auteur associez-vous à « Le Choc » ?",
    options: ["Évelyne Trouillot", "Léon Laleau", "Syto Cavé", "Kettly Mars"],
    correct: 1
  },
  {
    q: "Retrouvez l'auteur de « L'Amour oui. La mort non » parmi ces propositions :",
    options: ["Liliane Devieux-Dehoux", "Josaphat-Robert Large", "Marie-Alice Théard", "Massillon Coicou"],
    correct: 0
  },
  {
    q: "De quelle plume est issue l'œuvre « La Blanche Négresse » ?",
    options: ["Cléante Valcin", "Jean-Claude Fignolé", "Jean-Claude Bajeux", "Marie-Célie Agnant"],
    correct: 0
  },
  {
    q: "Quel nom d'auteur associez-vous à « Restavec » ?",
    options: ["Charles Moravia", "Frédéric Marcelin", "Jean-Robert Cadet", "Émile Roumer"],
    correct: 2
  },
  {
    q: "« La Vengeance de Mama » compte parmi les œuvres de quel auteur ?",
    options: ["Suzanne Comhaire-Sylvain", "Frédéric Marcelin", "René Depestre", "Anthony Phelps"],
    correct: 1
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Maître-Minuit » ?",
    options: ["Syto Cavé", "Makenzy Orcel", "Jean Métellus", "Jean-Claude Fignolé"],
    correct: 1
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Antoine Innocent ?",
    options: ["Mimola", "Les Dix hommes noirs", "Les Immortelles", "La Montagne ensorcelée"],
    correct: 0
  },
  {
    q: "De quelle plume est issue l'œuvre « Amour, Colère et Folie » ?",
    options: ["Alibée Féry", "Marie-Alice Théard", "Marie Vieux-Chauvet", "Roussan Camille"],
    correct: 2
  },
  {
    q: "De quelle plume est issue l'œuvre « Les Immortelles » ?",
    options: ["Gary Victor", "Charles Moravia", "Makenzy Orcel", "René Philoctète"],
    correct: 2
  },
  {
    q: "De quelle plume est issue l'œuvre « Huit jours dans un no man's land » ?",
    options: ["Jean-Robert Cadet", "Frankétienne", "Gary Victor", "Oswald Durand"],
    correct: 1
  },
  {
    q: "Ignace Nau a notamment donné naissance à quelle œuvre ?",
    options: ["Le Lambi", "La Couleur de l'aube", "Jacques Roche, la vie entière", "Moi, Toussaint Louverture"],
    correct: 0
  },
  {
    q: "L'œuvre « Le Livre d'Emma » a été écrite par :",
    options: ["Isnardin Vieux", "Syto Cavé", "Pradel Pompilus", "Marie-Célie Agnant"],
    correct: 3
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Guy Régis Jr ?",
    options: ["Moi, fardeau inhérent", "Dezafi", "L'Ombre animale", "Théâtre"],
    correct: 0
  },
  {
    q: "Quelle est l'œuvre de Faubert Bolivar parmi cette liste ?",
    options: ["Les Contes haïtiens", "Rue Frontière", "Le Roman de l'occupation", "Bain de lune"],
    correct: 1
  },
  {
    q: "Qui a publié le livre « Les Étrangers de la maison » ?",
    options: ["Louis-Philippe Dalembert", "Jean-Robert Léonidas", "Josaphat-Robert Large", "Tertulien Guilbaud"],
    correct: 2
  },
  {
    q: "On doit à la plume de Windsor Bellegarde l'œuvre suivante :",
    options: ["Musique nègre", "Mosochwazi Kout Fè", "Écrivains haïtiens", "Manuel d'histoire d'Haïti"],
    correct: 2
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Haïti, terre mystique » ?",
    options: ["Gary Klang", "Carl Brouard", "Anthony Phelps", "Jean-Euphèle Milcé"],
    correct: 0
  },
  {
    q: "De quelle plume est issue l'œuvre « Francesca » ?",
    options: ["Demesvar Delorme", "Pradel Pompilus", "Ignace Nau", "Serge Legagneur"],
    correct: 0
  },
  {
    q: "Quel nom d'auteur associez-vous à « Jacmel au crépuscule » ?",
    options: ["Massillon Coicou", "Jean Métellus", "Fresnel Sylvestre", "Guy Régis Jr"],
    correct: 1
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Tertulien Guilbaud ?",
    options: ["Le Testament des solitudes", "Clair de Manbo", "Vieilles chansons", "Idem"],
    correct: 2
  },
  {
    q: "Retrouvez l'auteur de « Mûr à crever » parmi ces propositions :",
    options: ["Justin Lhérisson", "Émile Roumer", "Frankétienne", "Makenzy Orcel"],
    correct: 2
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Jean D'Amérique ?",
    options: ["Rhapsodie sale", "La Vocation de l'élite", "L'Empereur Dessalines", "Aube tranquille"],
    correct: 0
  },
  {
    q: "L'œuvre « L'Année Dessalines » a été écrite par :",
    options: ["Fernand Hibbert", "Jean Métellus", "Georges Castera", "Joujou Turenne"],
    correct: 1
  },
  {
    q: "Jean-Robert Cadet est notamment l'auteur(e) de :",
    options: ["La Blanche Négresse", "La Danse sur le volcan", "Restavec", "Nouveaux poèmes"],
    correct: 2
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Émile Ollivier ?",
    options: ["Yanvalou pour Charlie", "De Saint-Domingue à Haïti", "Passages", "Maître-Minuit"],
    correct: 2
  },
  {
    q: "L'œuvre « Belle merveille » a été écrite par :",
    options: ["Oswald Durand", "Faubert Bolivar", "James Noël", "Hénock Trouillot"],
    correct: 2
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Boulevard Baie des Anges » ?",
    options: ["Néhémy Pierre-Dahomey", "Fernand Hibbert", "Michel Soukar", "Gary Klang"],
    correct: 0
  },
  {
    q: "Le livre « Théâtre » est dû à la plume de :",
    options: ["Syto Cavé", "Charles Moravia", "Jean Métellus", "Kettly Mars"],
    correct: 0
  },
  {
    q: "« Pays sans chapeau » est signé par quel auteur haïtien ?",
    options: ["Dany Laferrière", "Roland Morisseau", "René Depestre", "Frankétienne"],
    correct: 0
  },
  {
    q: "Quel nom d'auteur associez-vous à « Rhapsodie sale » ?",
    options: ["Anténor Firmin", "Josaphat-Robert Large", "Georges Castera", "Jean D'Amérique"],
    correct: 3
  },
  {
    q: "Qui a publié le livre « Assaut à la nuit » ?",
    options: ["Louis-Philippe Dalembert", "Roussan Camille", "Marie Vieux-Chauvet", "Cléante Valcin"],
    correct: 1
  },
  {
    q: "« L'Alphabet des nuits » compte parmi les œuvres de quel auteur ?",
    options: ["Nadine Magloire", "Suzanne Comhaire-Sylvain", "Demesvar Delorme", "Jean-Euphèle Milcé"],
    correct: 3
  },
  {
    q: "Parmi ces titres, lequel est signé Syto Cavé ?",
    options: ["Une eau-forte", "Le Qui-vive", "Alléluia pour une femme-jardin", "L'Oiseau schizophone"],
    correct: 1
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Rodney Saint-Éloi ?",
    options: ["La Plage des songes", "Boulevard Baie des Anges", "Jacques Roche, la vie entière", "Un Arc-en-ciel pour l'occident chrétien"],
    correct: 2
  },
  {
    q: "« Mimola » a été publié(e) par quel écrivain haïtien ?",
    options: ["Néhémy Pierre-Dahomey", "Jean D'Amérique", "Emmelie Prophète", "Antoine Innocent"],
    correct: 3
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Le Briseur de rosée » ?",
    options: ["Georges Castera", "Faubert Bolivar", "Demesvar Delorme", "Edwidge Danticat"],
    correct: 3
  },
  {
    q: "Parmi ces titres, lequel est signé Jean-Robert Léonidas ?",
    options: ["Clair de Manbo", "Île à vau-l'eau", "Le Testament des solitudes", "Pages retrouvées"],
    correct: 1
  },
  {
    q: "« Mur Méditerranée » a été publié(e) par quel écrivain haïtien ?",
    options: ["Roland Morisseau", "Louis-Philippe Dalembert", "James Noël", "Massillon Coicou"],
    correct: 1
  },
  {
    q: "Parmi ces titres, lequel est signé Guy Régis Jr ?",
    options: ["Mère-Solitude", "Idem", "Moi, fardeau inhérent", "Mur Méditerranée"],
    correct: 2
  },
  {
    q: "Le livre « La Famille Vortex » est dû à la plume de :",
    options: ["Joujou Turenne", "Jacques Roumain", "Georges Castera", "Jean Métellus"],
    correct: 3
  },
  {
    q: "« Le Reste du temps » compte parmi les œuvres de quel auteur ?",
    options: ["Marie-Alice Théard", "Emmelie Prophète", "René Depestre", "Alibée Féry"],
    correct: 1
  },
  {
    q: "On doit à la plume de Syto Cavé l'œuvre suivante :",
    options: ["Le Briseur de rosée", "Le Qui-vive", "L'Alphabet des nuits", "Épisode de la Révolution"],
    correct: 1
  },
  {
    q: "L'œuvre « Poèmes d'Haïti et de France » a été écrite par :",
    options: ["Évelyne Trouillot", "Roussan Camille", "Jean-Claude Bajeux", "Émile Roumer"],
    correct: 3
  },
  {
    q: "Le livre « Le Choc » est dû à la plume de :",
    options: ["Oswald Durand", "Léon Laleau", "Jean Métellus", "Dany Laferrière"],
    correct: 1
  },
  {
    q: "Quel nom d'auteur associez-vous à « Bicentenaire » ?",
    options: ["Lyonel Trouillot", "Roland Morisseau", "Placide David", "Charles Moravia"],
    correct: 0
  },
  {
    q: "L'œuvre « Alléluia pour une femme-jardin » a été écrite par :",
    options: ["René Depestre", "Frédéric Marcelin", "Marie-Célie Agnant", "Lyonel Trouillot"],
    correct: 0
  },
  {
    q: "« L'Alphabet des nuits » a été publié(e) par quel écrivain haïtien ?",
    options: ["Edwidge Danticat", "Hénock Trouillot", "Jean Métellus", "Jean-Euphèle Milcé"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Rhapsodie sale » ?",
    options: ["Jacques Stephen Alexis", "Anténor Firmin", "Jean D'Amérique", "Marie Vieux-Chauvet"],
    correct: 2
  },
  {
    q: "L'œuvre « Kasalé » a été écrite par :",
    options: ["Serge Legagneur", "Lyonel Trouillot", "Kettly Mars", "Joujou Turenne"],
    correct: 2
  },
  {
    q: "Le livre « Le Sang et la Mer » est dû à la plume de :",
    options: ["Roland Morisseau", "Pradel Pompilus", "Isnardin Vieux", "Gary Victor"],
    correct: 3
  },
  {
    q: "« Le Sang et la Mer » a été publié(e) par quel écrivain haïtien ?",
    options: ["Frankétienne", "Gary Victor", "Cléante Valcin", "Jean-Claude Fignolé"],
    correct: 1
  },
  {
    q: "Quel écrivain haïtien a écrit « Encre allègre » ?",
    options: ["Jean-Robert Cadet", "Isnardin Vieux", "Georges Castera", "Paula Clermont Péan"],
    correct: 2
  },
  {
    q: "Quel écrivain haïtien a écrit « Clair de Manbo » ?",
    options: ["Kettly Mars", "Gary Victor", "Georges Sylvain", "Ida Faubert"],
    correct: 1
  },
  {
    q: "« Textes interdits » compte parmi les œuvres de quel auteur ?",
    options: ["Roussan Camille", "Marie Vieux-Chauvet", "Serge Legagneur", "Emmelie Prophète"],
    correct: 2
  },
  {
    q: "Quel livre porte la signature de Georges Anglade ?",
    options: ["Les Blancs de mémoire", "Musique nègre", "Fonds des Nègres", "Le Mal de terre"],
    correct: 0
  },
  {
    q: "Quel livre porte la signature de Louis Joseph Janvier ?",
    options: ["Fille d'Haïti", "Bois d'ébène", "Désirée Congo", "La République d'Haïti et ses visiteurs"],
    correct: 3
  },
  {
    q: "On doit à la plume de Carl Brouard l'œuvre suivante :",
    options: ["Pages retrouvées", "L'Héritage colonial en Haïti", "Rue des pas perdus", "Écrivains haïtiens"],
    correct: 0
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Jean D'Amérique ?",
    options: ["Hadriana dans tous mes rêves", "Clair de Manbo", "Rhapsodie sale", "Idem"],
    correct: 2
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Haïti, terre mystique » ?",
    options: ["Gary Klang", "Tertulien Guilbaud", "Émile Roumer", "Lyonel Trouillot"],
    correct: 0
  },
  {
    q: "L'œuvre « La Vocation de l'élite » a été écrite par :",
    options: ["Jean Price-Mars", "Georges Sylvain", "Jean D'Amérique", "Paula Clermont Péan"],
    correct: 0
  },
  {
    q: "Le livre « Krik? Krak! » est dû à la plume de :",
    options: ["Fresnel Sylvestre", "Rodney Saint-Éloi", "Anténor Firmin", "Edwidge Danticat"],
    correct: 3
  },
  {
    q: "Quel écrivain haïtien a écrit « Compère Général Soleil » ?",
    options: ["Jacques Stephen Alexis", "James Noël", "Émile Ollivier", "Louis-Philippe Dalembert"],
    correct: 0
  },
  {
    q: "« Bain de lune » est signé par quel auteur haïtien ?",
    options: ["Frédéric Marcelin", "Yanick Lahens", "Marvin Victor", "Louis-Philippe Dalembert"],
    correct: 1
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Romulus » ?",
    options: ["Pradel Pompilus", "Liliane Devieux-Dehoux", "Suzanne Comhaire-Sylvain", "Fernand Hibbert"],
    correct: 3
  },
  {
    q: "L'écrivain(e) Marie-Thérèse Colimon-Hall est célèbre pour avoir publié :",
    options: ["Gouverneurs de la rosée", "La mémoire aux abois", "Bois d'ébène", "Fils de misère"],
    correct: 3
  },
  {
    q: "« Ferdinand je suis à Paris » a été publié(e) par quel écrivain haïtien ?",
    options: ["Émile Roumer", "Isnardin Vieux", "Jean-Claude Charles", "Georges Castera"],
    correct: 2
  },
  {
    q: "Quel nom d'auteur associez-vous à « Au pipirite chantant » ?",
    options: ["Georges Anglade", "James Noël", "Jean-Robert Léonidas", "Jean Métellus"],
    correct: 3
  },
  {
    q: "Michel Soukar a notamment donné naissance à quelle œuvre ?",
    options: ["Frayeur", "Le Fusil et la croix", "La Couleur de l'aube", "Pages retrouvées"],
    correct: 1
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « La Couleur de l'aube » ?",
    options: ["Yanick Lahens", "Etzer Vilaire", "Justin Lhérisson", "Jean-Claude Fignolé"],
    correct: 0
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Justin Chrysostome Dorsainvil ?",
    options: ["Cœur des Îles", "Manuel d'histoire d'Haïti", "Fils de misère", "Saisons sauvages"],
    correct: 1
  },
  {
    q: "L'écrivain(e) Fresnel Sylvestre est célèbre pour avoir publié :",
    options: ["Un amour à trois temps", "Un Arc-en-ciel pour l'occident chrétien", "Les Villages de Dieu", "Rires et Pleurs"],
    correct: 0
  },
  {
    q: "Qui a publié le livre « L'Amour oui. La mort non » ?",
    options: ["Fresnel Sylvestre", "Joujou Turenne", "Demesvar Delorme", "Liliane Devieux-Dehoux"],
    correct: 3
  },
  {
    q: "Qui a publié le livre « Mère-Solitude » ?",
    options: ["Josaphat-Robert Large", "Placide David", "Tertulien Guilbaud", "Émile Ollivier"],
    correct: 3
  },
  {
    q: "Quel écrivain haïtien a écrit « Écrivains haïtiens » ?",
    options: ["Demesvar Delorme", "Windsor Bellegarde", "Jean-Robert Léonidas", "René Depestre"],
    correct: 1
  },
  {
    q: "Parmi ces titres, lequel est signé Georges Sylvain ?",
    options: ["Les Dix hommes noirs", "De Saint-Domingue à Haïti", "Cric? Crac!", "Dessalines ou le sang du Pont-Rouge"],
    correct: 2
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Rue Frontière » ?",
    options: ["Louis-Philippe Dalembert", "Faubert Bolivar", "Oswald Durand", "Frankétienne"],
    correct: 1
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Marie-Thérèse Colimon-Hall ?",
    options: ["Clair de Manbo", "Fils de misère", "Impasse Dignité", "Saison de porcs"],
    correct: 1
  },
  {
    q: "L'œuvre « Les Immortelles » a été écrite par :",
    options: ["Liliane Devieux-Dehoux", "Makenzy Orcel", "Jean D'Amérique", "Carl Brouard"],
    correct: 1
  },
  {
    q: "« Écrit sur du ruban rose » compte parmi les œuvres de quel auteur ?",
    options: ["Serge Legagneur", "Carl Brouard", "Charles Moravia", "Frédéric Marcelin"],
    correct: 1
  },
  {
    q: "L'œuvre « Moi, fardeau inhérent » a été écrite par :",
    options: ["Guy Régis Jr", "Émile Ollivier", "Évelyne Trouillot", "Cléante Valcin"],
    correct: 0
  },
  {
    q: "L'œuvre « Choucoune » a été écrite par :",
    options: ["Oswald Durand", "Louis Joseph Janvier", "Jean-Robert Léonidas", "Jean Métellus"],
    correct: 0
  },
  {
    q: "Quel titre figure dans la bibliographie de Georges Sylvain ?",
    options: ["Cric? Crac!", "Bain de lune", "Textes interdits", "Dessalines ou le sang du Pont-Rouge"],
    correct: 0
  },
  {
    q: "Parmi ces titres, lequel est signé Demesvar Delorme ?",
    options: ["Réflexions diverses sur Haïti", "L'Année Dessalines", "Bonjour et adieu à la négritude", "Le Rond-point"],
    correct: 0
  },
  {
    q: "« La Crête-à-Pierrot » est signé par quel auteur haïtien ?",
    options: ["Ida Faubert", "Isnardin Vieux", "Paula Clermont Péan", "Charles Moravia"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Francesca » ?",
    options: ["Yanick Lahens", "Justin Chrysostome Dorsainvil", "Frédéric Marcelin", "Demesvar Delorme"],
    correct: 3
  },
  {
    q: "L'œuvre « Les Dix hommes noirs » a été écrite par :",
    options: ["Etzer Vilaire", "Massillon Coicou", "Anténor Firmin", "Oswald Durand"],
    correct: 0
  },
  {
    q: "Qui a publié le livre « Les Fantoches » ?",
    options: ["Tertulien Guilbaud", "Antoine Innocent", "Jacques Roumain", "Oswald Durand"],
    correct: 2
  },
  {
    q: "De quelle plume est issue l'œuvre « Les Possédés de la pleine lune » ?",
    options: ["Marie-Alice Théard", "Kettly Mars", "Jean-Claude Fignolé", "Justin Chrysostome Dorsainvil"],
    correct: 2
  },
  {
    q: "Le livre « La Danse sur le volcan » est dû à la plume de :",
    options: ["Charles Moravia", "Anténor Firmin", "Marie Vieux-Chauvet", "Jean-Robert Léonidas"],
    correct: 2
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Jean Métellus ?",
    options: ["Rires et Pleurs", "Anacaona", "Gouverneurs de la rosée", "L'Odeur du café"],
    correct: 1
  },
  {
    q: "« Le bout du monde est une fenêtre » compte parmi les œuvres de quel auteur ?",
    options: ["Jacques Stephen Alexis", "Emmelie Prophète", "Émile Roumer", "Josaphat-Robert Large"],
    correct: 1
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Jean-Robert Cadet ?",
    options: ["La République d'Haïti et ses visiteurs", "L'Odeur du café", "Rires et Pleurs", "Restavec"],
    correct: 3
  },
  {
    q: "« Assaut à la nuit » est signé par quel auteur haïtien ?",
    options: ["Ignace Nau", "Roussan Camille", "Jean-Robert Léonidas", "Jean-Robert Cadet"],
    correct: 1
  },
  {
    q: "L'écrivain(e) Faubert Bolivar est célèbre pour avoir publié :",
    options: ["Idem", "Comment faire l'amour avec un Nègre sans se fatiguer", "Rue Frontière", "Treize nouvelles vaudou"],
    correct: 2
  },
  {
    q: "Quel écrivain haïtien a écrit « Belle merveille » ?",
    options: ["James Noël", "Jean-Claude Bajeux", "Joujou Turenne", "Liliane Devieux-Dehoux"],
    correct: 0
  },
  {
    q: "On doit à la plume de Georges Sylvain l'œuvre suivante :",
    options: ["Musique nègre", "Rosalie l'infâme", "Cric? Crac!", "L'Alphabet des nuits"],
    correct: 2
  },
  {
    q: "« Le Nègre crucifié » a été publié(e) par quel écrivain haïtien ?",
    options: ["Pradel Pompilus", "Guy Régis Jr", "Emmelie Prophète", "Gérard Étienne"],
    correct: 3
  },
  {
    q: "L'écrivain(e) Jean Métellus est célèbre pour avoir publié :",
    options: ["Fille d'Haïti", "De Saint-Domingue à Haïti", "La Famille Vortex", "La Plage des songes"],
    correct: 2
  },
  {
    q: "Identifiez l'œuvre écrite par Tertulien Guilbaud :",
    options: ["Le Manuscrit de mon ami", "L'Héritage colonial en Haïti", "Vieilles chansons", "La Vengeance de Mama"],
    correct: 2
  },
  {
    q: "Quel nom d'auteur associez-vous à « Le Briseur de rosée » ?",
    options: ["Ignace Nau", "Nadine Magloire", "Edwidge Danticat", "Etzer Vilaire"],
    correct: 2
  },
  {
    q: "Le livre « Contes et légendes d'Haïti » est dû à la plume de :",
    options: ["Jean Métellus", "Joujou Turenne", "Dany Laferrière", "Frankétienne"],
    correct: 1
  },
  {
    q: "« La Récolte douce des larmes » est signé par quel auteur haïtien ?",
    options: ["Edwidge Danticat", "Demesvar Delorme", "Jean-Robert Léonidas", "Jean-Claude Fignolé"],
    correct: 0
  },
  {
    q: "Identifiez l'œuvre écrite par Georges Sylvain :",
    options: ["Cric? Crac!", "Le Peuple des terres mêlées", "Compère Général Soleil", "Dessalines ou le sang du Pont-Rouge"],
    correct: 0
  },
  {
    q: "L'œuvre « L'Heure hybride » a été écrite par :",
    options: ["Yanick Lahens", "Jean-Claude Charles", "Kettly Mars", "Guy Régis Jr"],
    correct: 2
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Les Immortelles » ?",
    options: ["Émile Roumer", "Roland Morisseau", "Makenzy Orcel", "Placide David"],
    correct: 2
  },
  {
    q: "De quelle plume est issue l'œuvre « Guillaume et Nathalie » ?",
    options: ["Cléante Valcin", "Yanick Lahens", "Emmelie Prophète", "Anténor Firmin"],
    correct: 1
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Île à vau-l'eau » ?",
    options: ["Jean-Robert Léonidas", "Marie-Thérèse Colimon-Hall", "Roland Morisseau", "Marie-Célie Agnant"],
    correct: 0
  },
  {
    q: "Qui a publié le livre « L'Héritage colonial en Haïti » ?",
    options: ["Placide David", "Fresnel Sylvestre", "Anténor Firmin", "Gérard Étienne"],
    correct: 0
  },
  {
    q: "Quelle est l'œuvre de Justin Lhérisson parmi cette liste ?",
    options: ["La Récolte douce des larmes", "L'Amour oui. La mort non", "Zoune chez sa ninnaine", "Des fleurs pour les héros"],
    correct: 2
  },
  {
    q: "« La Vocation de l'élite » est signé par quel auteur haïtien ?",
    options: ["Josaphat-Robert Large", "Jean Price-Mars", "Jacques Roumain", "Ignace Nau"],
    correct: 1
  },
  {
    q: "Retrouvez l'auteur de « Yanvalou pour Charlie » parmi ces propositions :",
    options: ["Demesvar Delorme", "Edwidge Danticat", "Roland Morisseau", "Lyonel Trouillot"],
    correct: 3
  },
  {
    q: "L'écrivain(e) Jean-Robert Léonidas est célèbre pour avoir publié :",
    options: ["Zoune chez sa ninnaine", "Contes et légendes d'Haïti", "De l'égalité des races humaines", "Île à vau-l'eau"],
    correct: 3
  },
  {
    q: "« Thémistocle-Épaminondas Labasterre » compte parmi les œuvres de quel auteur ?",
    options: ["Charles Moravia", "Suzanne Comhaire-Sylvain", "Placide David", "Frédéric Marcelin"],
    correct: 3
  },
  {
    q: "Qui a publié le livre « Yanvalou pour Charlie » ?",
    options: ["Joujou Turenne", "Fernand Hibbert", "Lyonel Trouillot", "Justin Chrysostome Dorsainvil"],
    correct: 2
  },
  {
    q: "Retrouvez l'auteur de « Jacques Roche, la vie entière » parmi ces propositions :",
    options: ["Marie-Célie Agnant", "Massillon Coicou", "Marvin Victor", "Rodney Saint-Éloi"],
    correct: 3
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de James Noël ?",
    options: ["Belle merveille", "Haïti kenbe la !", "Ferdinand je suis à Paris", "La Vengeance de Mama"],
    correct: 0
  },
  {
    q: "« Le Peuple des terres mêlées » est signé par quel auteur haïtien ?",
    options: ["René Philoctète", "Gary Klang", "Hénock Trouillot", "Frédéric Marcelin"],
    correct: 0
  },
  {
    q: "Identifiez l'œuvre écrite par Oswald Durand :",
    options: ["Écrivains haïtiens", "Rires et Pleurs", "La mémoire aux abois", "Moi, Toussaint Louverture"],
    correct: 1
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Jean D'Amérique ?",
    options: ["Soleil à coudre", "Les Dix hommes noirs", "Rêver debout", "Mère-Solitude"],
    correct: 0
  },
  {
    q: "Quel écrivain haïtien a écrit « La République d'Haïti et ses visiteurs » ?",
    options: ["Néhémy Pierre-Dahomey", "Yanick Lahens", "Makenzy Orcel", "Louis Joseph Janvier"],
    correct: 3
  },
  {
    q: "Quel nom d'auteur associez-vous à « L'Oiseau schizophone » ?",
    options: ["Frankétienne", "Frédéric Marcelin", "Roussan Camille", "Stanley Péan"],
    correct: 0
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Cœur des Îles » ?",
    options: ["Ida Faubert", "Suzanne Comhaire-Sylvain", "Georges Castera", "Dany Laferrière"],
    correct: 0
  },
  {
    q: "« Les Étrangers de la maison » compte parmi les œuvres de quel auteur ?",
    options: ["Cléante Valcin", "Josaphat-Robert Large", "Faubert Bolivar", "Frédéric Marcelin"],
    correct: 1
  },
  {
    q: "Qui a publié le livre « Les Possédés de la pleine lune » ?",
    options: ["Marvin Victor", "Liliane Devieux-Dehoux", "Jean-Claude Fignolé", "Syto Cavé"],
    correct: 2
  },
  {
    q: "Qui a publié le livre « Bain de lune » ?",
    options: ["Suzanne Comhaire-Sylvain", "Jean-Robert Cadet", "Hénock Trouillot", "Yanick Lahens"],
    correct: 3
  },
  {
    q: "Retrouvez l'auteur de « La Montagne ensorcelée » parmi ces propositions :",
    options: ["Justin Lhérisson", "Ignace Nau", "Jean-Claude Charles", "Jacques Roumain"],
    correct: 3
  },
  {
    q: "Quel écrivain haïtien a écrit « Avant que les ombres s'effacent » ?",
    options: ["Louis-Philippe Dalembert", "Cléante Valcin", "Jean-Claude Fignolé", "Etzer Vilaire"],
    correct: 0
  },
  {
    q: "« Écrivains haïtiens » compte parmi les œuvres de quel auteur ?",
    options: ["Lyonel Trouillot", "Anthony Phelps", "Windsor Bellegarde", "Charles Moravia"],
    correct: 2
  },
  {
    q: "L'œuvre « Rapatriés » a été écrite par :",
    options: ["Néhémy Pierre-Dahomey", "Jean-Claude Bajeux", "Oswald Durand", "Louis-Philippe Dalembert"],
    correct: 0
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Mimola » ?",
    options: ["Oswald Durand", "Jean D'Amérique", "Frankétienne", "Antoine Innocent"],
    correct: 3
  },
  {
    q: "Quel nom d'auteur associez-vous à « Dessalines ou le sang du Pont-Rouge » ?",
    options: ["Suzanne Comhaire-Sylvain", "Jacques Roumain", "Hénock Trouillot", "Louis-Philippe Dalembert"],
    correct: 2
  },
  {
    q: "Quel écrivain haïtien a écrit « Bicentenaire » ?",
    options: ["Lyonel Trouillot", "Marvin Victor", "Frédéric Marcelin", "Yanick Lahens"],
    correct: 0
  },
  {
    q: "« Les Fantoches » est signé par quel auteur haïtien ?",
    options: ["Gary Victor", "Évelyne Trouillot", "Jacques Roumain", "Léon Laleau"],
    correct: 2
  },
  {
    q: "Quelle est l'œuvre de James Noël parmi cette liste ?",
    options: ["Le Livre d'Emma", "Belle merveille", "L'Autre Face de la mer", "Les Villages de Dieu"],
    correct: 1
  },
  {
    q: "« Kasalé » a été publié(e) par quel écrivain haïtien ?",
    options: ["Jean Métellus", "Hénock Trouillot", "Roland Morisseau", "Kettly Mars"],
    correct: 3
  },
  {
    q: "Antoine Innocent a notamment donné naissance à quelle œuvre ?",
    options: ["Le Choc", "Les Thazar", "Frayeur", "Mimola"],
    correct: 3
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Le Sang et la Mer » ?",
    options: ["Gary Victor", "Hénock Trouillot", "Lyonel Trouillot", "Demesvar Delorme"],
    correct: 0
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Placide David ?",
    options: ["Mon pays que voici", "Adieu, mon frère", "Ainsi parla l'oncle", "L'Héritage colonial en Haïti"],
    correct: 3
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Silhouettes de nègres et de négrophiles » ?",
    options: ["Ignace Nau", "Jean-Robert Léonidas", "Émile Roumer", "Jean Price-Mars"],
    correct: 3
  },
  {
    q: "Quel écrivain haïtien a écrit « Huit jours dans un no man's land » ?",
    options: ["Jean-Robert Cadet", "Frankétienne", "Gary Klang", "Jean D'Amérique"],
    correct: 1
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Oswald Durand ?",
    options: ["Textes interdits", "La République d'Haïti et ses visiteurs", "Cric? Crac!", "Rires et Pleurs"],
    correct: 3
  },
  {
    q: "« Musique nègre » a été publié(e) par quel écrivain haïtien ?",
    options: ["Jacques Roumain", "Paula Clermont Péan", "Léon Laleau", "Gary Klang"],
    correct: 2
  },
  {
    q: "Quel livre porte la signature de Néhémy Pierre-Dahomey ?",
    options: ["L'Empereur Dessalines", "Poèmes d'Haïti et de France", "L'Ombre animale", "Boulevard Baie des Anges"],
    correct: 3
  },
  {
    q: "Le livre « Mur Méditerranée » est dû à la plume de :",
    options: ["Marie-Célie Agnant", "Suzanne Comhaire-Sylvain", "Louis-Philippe Dalembert", "Anténor Firmin"],
    correct: 2
  },
  {
    q: "Quel écrivain haïtien a écrit « Idem » ?",
    options: ["Justin Chrysostome Dorsainvil", "Frankétienne", "Davertige", "Jean-Euphèle Milcé"],
    correct: 2
  },
  {
    q: "De quelle plume est issue l'œuvre « Je suis vivant » ?",
    options: ["Kettly Mars", "Dany Laferrière", "Léon Laleau", "Marie Vieux-Chauvet"],
    correct: 0
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Tertulien Guilbaud ?",
    options: ["Vieilles chansons", "Rapatriés", "Kasalé", "Romancero aux étoiles"],
    correct: 0
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Faubert Bolivar ?",
    options: ["L'Espace d'un cillement", "Pays sans chapeau", "Fonds des Nègres", "Rue Frontière"],
    correct: 3
  },
  {
    q: "Quel titre figure dans la bibliographie de Néhémy Pierre-Dahomey ?",
    options: ["Pays sans chapeau", "Les Dix hommes noirs", "Réflexions diverses sur Haïti", "Boulevard Baie des Anges"],
    correct: 3
  },
  {
    q: "Quel écrivain haïtien a écrit « Les Arbres musiciens » ?",
    options: ["Marie-Alice Théard", "Jacques Stephen Alexis", "Kettly Mars", "Paula Clermont Péan"],
    correct: 1
  },
  {
    q: "Parmi ces titres, lequel est signé Josaphat-Robert Large ?",
    options: ["Les Étrangers de la maison", "Dessalines ou le sang du Pont-Rouge", "Bois d'ébène", "Kasalé"],
    correct: 0
  },
  {
    q: "Quel livre porte la signature de Oswald Durand ?",
    options: ["Choucoune", "Ferdinand je suis à Paris", "La Dot de Sara", "Mon pays que voici"],
    correct: 0
  },
  {
    q: "Parmi ces titres, lequel est signé Justin Chrysostome Dorsainvil ?",
    options: ["Manuel d'histoire d'Haïti", "Une somme humaine", "Fonds des Nègres", "Moi, fardeau inhérent"],
    correct: 0
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Aube tranquille » ?",
    options: ["Anténor Firmin", "Marie-Thérèse Colimon-Hall", "Windsor Bellegarde", "Jean-Claude Fignolé"],
    correct: 3
  },
  {
    q: "Quel ouvrage a été publié par Guy Régis Jr ?",
    options: ["Ces îles qui marchent", "Le Trou du souffleur", "Moi, fardeau inhérent", "Krik? Krak!"],
    correct: 2
  },
  {
    q: "Le livre « Le Mât de cocagne » est dû à la plume de :",
    options: ["René Depestre", "Dany Laferrière", "Jacques Roumain", "Nadine Magloire"],
    correct: 0
  },
  {
    q: "L'œuvre « Frayeur » a été écrite par :",
    options: ["Gary Klang", "René Philoctète", "Évelyne Trouillot", "Kettly Mars"],
    correct: 3
  },
  {
    q: "« Désirée Congo » compte parmi les œuvres de quel auteur ?",
    options: ["Alibée Féry", "Évelyne Trouillot", "Anténor Firmin", "Faubert Bolivar"],
    correct: 1
  },
  {
    q: "On doit à la plume de Jean-Euphèle Milcé l'œuvre suivante :",
    options: ["Idem", "Romancero aux étoiles", "Passions", "L'Alphabet des nuits"],
    correct: 3
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Etzer Vilaire ?",
    options: ["Le Reste du temps", "Huit jours dans un no man's land", "Nouveaux poèmes", "Le Conditionnel"],
    correct: 2
  },
  {
    q: "Retrouvez l'auteur de « Bicentenaire » parmi ces propositions :",
    options: ["Michel Soukar", "Lyonel Trouillot", "Jean Price-Mars", "Jean-Robert Cadet"],
    correct: 1
  },
  {
    q: "De quelle plume est issue l'œuvre « Le Reste du temps » ?",
    options: ["Jean-Claude Charles", "Emmelie Prophète", "Jean-Euphèle Milcé", "René Philoctète"],
    correct: 1
  },
  {
    q: "Quelle est l'œuvre de Makenzy Orcel parmi cette liste ?",
    options: ["La Couleur de l'aube", "Les Rapaces", "La République d'Haïti et ses visiteurs", "Maître-Minuit"],
    correct: 3
  },
  {
    q: "L'œuvre « Rue Frontière » a été écrite par :",
    options: ["Faubert Bolivar", "Jean-Robert Cadet", "Émile Roumer", "Guy Régis Jr"],
    correct: 0
  },
  {
    q: "Qui a publié le livre « Les Villages de Dieu » ?",
    options: ["Emmelie Prophète", "Jean-Claude Charles", "Faubert Bolivar", "Louis-Philippe Dalembert"],
    correct: 0
  },
  {
    q: "« Krik? Krak! » est signé par quel auteur haïtien ?",
    options: ["René Depestre", "Edwidge Danticat", "Guy Régis Jr", "Hénock Trouillot"],
    correct: 1
  },
  {
    q: "« Jacques Roche, la vie entière » est signé par quel auteur haïtien ?",
    options: ["Antoine Innocent", "Rodney Saint-Éloi", "Gary Klang", "Guy Régis Jr"],
    correct: 1
  },
  {
    q: "Quel écrivain haïtien a écrit « L'Oiseau schizophone » ?",
    options: ["Ignace Nau", "Frankétienne", "Michel Soukar", "Joujou Turenne"],
    correct: 1
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Faubert Bolivar ?",
    options: ["La Belle Amour humaine", "Fonds des Nègres", "Ultravocal", "Rue Frontière"],
    correct: 3
  },
  {
    q: "On doit à la plume de Liliane Devieux-Dehoux l'œuvre suivante :",
    options: ["L'Amour oui. La mort non", "Comment faire l'amour avec un Nègre sans se fatiguer", "Dezafi", "La Vengeance de Mama"],
    correct: 0
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Marvin Victor ?",
    options: ["Mosochwazi Kout Fè", "La République d'Haïti et ses visiteurs", "Corps mêlés", "Séna"],
    correct: 2
  },
  {
    q: "L'œuvre « Amour, Colère et Folie » a été écrite par :",
    options: ["Marie Vieux-Chauvet", "Carl Brouard", "Guy Régis Jr", "Évelyne Trouillot"],
    correct: 0
  },
  {
    q: "L'œuvre « Haïti, terre mystique » a été écrite par :",
    options: ["Gary Klang", "Léon Laleau", "Gary Victor", "Lyonel Trouillot"],
    correct: 0
  },
  {
    q: "Quel écrivain haïtien a écrit « Thérèse en mille morceaux » ?",
    options: ["Lyonel Trouillot", "Etzer Vilaire", "Stanley Péan", "Georges Anglade"],
    correct: 0
  },
  {
    q: "Qui a publié le livre « De l'égalité des races humaines » ?",
    options: ["Jean D'Amérique", "Anténor Firmin", "Tertulien Guilbaud", "Lyonel Trouillot"],
    correct: 1
  },
  {
    q: "Quel livre porte la signature de Anténor Firmin ?",
    options: ["De l'égalité des races humaines", "Moi, Toussaint Louverture", "Les Fantoches", "Francesca"],
    correct: 0
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Rêver debout » ?",
    options: ["Kettly Mars", "Jean D'Amérique", "Roland Morisseau", "Tertulien Guilbaud"],
    correct: 2
  },
  {
    q: "Quel écrivain haïtien a écrit « Frayeur » ?",
    options: ["Ignace Nau", "Davertige", "Kettly Mars", "Justin Chrysostome Dorsainvil"],
    correct: 2
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Paula Clermont Péan ?",
    options: ["Le Manuscrit de mon ami", "Le Mal de terre", "Bois d'ébène", "Saison de porcs"],
    correct: 1
  },
  {
    q: "Quel nom d'auteur associez-vous à « Île à vau-l'eau » ?",
    options: ["Jean-Euphèle Milcé", "Marie-Thérèse Colimon-Hall", "René Philoctète", "Jean-Robert Léonidas"],
    correct: 3
  },
  {
    q: "Quel écrivain haïtien a écrit « Rosalie l'infâme » ?",
    options: ["Évelyne Trouillot", "Dany Laferrière", "Rodney Saint-Éloi", "Lyonel Trouillot"],
    correct: 0
  },
  {
    q: "« Nouveaux poèmes » compte parmi les œuvres de quel auteur ?",
    options: ["Néhémy Pierre-Dahomey", "Etzer Vilaire", "Jean-Euphèle Milcé", "René Depestre"],
    correct: 1
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Mes années Duvalier » ?",
    options: ["Justin Lhérisson", "Évelyne Trouillot", "Marie-Alice Théard", "Jacques Roumain"],
    correct: 2
  },
  {
    q: "Retrouvez l'auteur de « Maître-Minuit » parmi ces propositions :",
    options: ["Makenzy Orcel", "Tertulien Guilbaud", "Louis-Philippe Dalembert", "Jacques Roumain"],
    correct: 0
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Nadine Magloire ?",
    options: ["Les Possédés de la pleine lune", "Textes interdits", "Le Mal de vivre", "La Famille Vortex"],
    correct: 2
  },
  {
    q: "Quel écrivain haïtien a écrit « L'Odeur du café » ?",
    options: ["Kettly Mars", "Jean Métellus", "Josaphat-Robert Large", "Dany Laferrière"],
    correct: 3
  },
  {
    q: "Identifiez l'œuvre écrite par Georges Castera :",
    options: ["Passages", "Rêver debout", "Le Trou du souffleur", "La Vengeance de Mama"],
    correct: 2
  },
  {
    q: "Le livre « Bonjour et adieu à la négritude » est dû à la plume de :",
    options: ["Gary Victor", "Davertige", "René Depestre", "Émile Roumer"],
    correct: 2
  },
  {
    q: "Qui a publié le livre « Aube tranquille » ?",
    options: ["Jean-Claude Fignolé", "Georges Castera", "Faubert Bolivar", "Jean-Robert Cadet"],
    correct: 0
  },
  {
    q: "« Encre allègre » est signé par quel auteur haïtien ?",
    options: ["Georges Castera", "Hénock Trouillot", "Paula Clermont Péan", "Guy Régis Jr"],
    correct: 0
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Douces déroutes » ?",
    options: ["Marie-Célie Agnant", "Ignace Nau", "Yanick Lahens", "Émile Roumer"],
    correct: 2
  },
  {
    q: "« Le Livre d'Emma » a été publié(e) par quel écrivain haïtien ?",
    options: ["Georges Anglade", "Marie-Célie Agnant", "Tertulien Guilbaud", "Joujou Turenne"],
    correct: 1
  },
  {
    q: "Quel livre porte la signature de Émile Ollivier ?",
    options: ["Mère-Solitude", "Les Thazar", "Guillaume et Nathalie", "Les Contes haïtiens"],
    correct: 0
  },
  {
    q: "Gary Klang est notamment l'auteur(e) de :",
    options: ["Jacques Roche, la vie entière", "Gouverneurs de la rosée", "Ultravocal", "Haïti, terre mystique"],
    correct: 3
  },
  {
    q: "Quelle est l'œuvre de Paula Clermont Péan parmi cette liste ?",
    options: ["Le Mal de terre", "Maître-Minuit", "Kasalé", "Séna"],
    correct: 0
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Dessalines ou le sang du Pont-Rouge » ?",
    options: ["René Philoctète", "Hénock Trouillot", "Etzer Vilaire", "Jacques Stephen Alexis"],
    correct: 1
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Les Dix hommes noirs » ?",
    options: ["Tertulien Guilbaud", "Suzanne Comhaire-Sylvain", "Etzer Vilaire", "Isnardin Vieux"],
    correct: 2
  },
  {
    q: "« Le Mal de terre » a été publié(e) par quel écrivain haïtien ?",
    options: ["Roland Morisseau", "Etzer Vilaire", "Paula Clermont Péan", "Justin Chrysostome Dorsainvil"],
    correct: 2
  },
  {
    q: "« Amour, Colère et Folie » a été publié(e) par quel écrivain haïtien ?",
    options: ["Louis Joseph Janvier", "Carl Brouard", "Néhémy Pierre-Dahomey", "Marie Vieux-Chauvet"],
    correct: 3
  },
  {
    q: "De quelle plume est issue l'œuvre « La Famille Vortex » ?",
    options: ["Jean Métellus", "Stanley Péan", "Marie-Alice Théard", "Suzanne Comhaire-Sylvain"],
    correct: 0
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Yanvalou pour Charlie » ?",
    options: ["Lyonel Trouillot", "Georges Castera", "Gérard Étienne", "Anthony Phelps"],
    correct: 0
  },
  {
    q: "L'œuvre « De Saint-Domingue à Haïti » a été écrite par :",
    options: ["Etzer Vilaire", "Jean Price-Mars", "Léon Laleau", "Roussan Camille"],
    correct: 1
  },
  {
    q: "Quel écrivain haïtien a écrit « Impasse Dignité » ?",
    options: ["Marvin Victor", "Fernand Hibbert", "Emmelie Prophète", "Windsor Bellegarde"],
    correct: 2
  },
  {
    q: "« Moi, Toussaint Louverture » est signé par quel auteur haïtien ?",
    options: ["Jean-Claude Fignolé", "Antoine Innocent", "Louis Joseph Janvier", "Cléante Valcin"],
    correct: 0
  },
  {
    q: "« Alléluia pour une femme-jardin » compte parmi les œuvres de quel auteur ?",
    options: ["Oswald Durand", "Jean Métellus", "Jean Price-Mars", "René Depestre"],
    correct: 3
  },
  {
    q: "L'œuvre « Gouverneurs de la rosée » a été écrite par :",
    options: ["Roland Morisseau", "Jacques Roumain", "Pradel Pompilus", "Jean-Claude Fignolé"],
    correct: 1
  },
  {
    q: "« L'Ombre animale » compte parmi les œuvres de quel auteur ?",
    options: ["Guy Régis Jr", "Gary Klang", "Josaphat-Robert Large", "Makenzy Orcel"],
    correct: 3
  },
  {
    q: "Qui a publié le livre « De Saint-Domingue à Haïti » ?",
    options: ["Jean-Claude Bajeux", "Jean Price-Mars", "Marie Vieux-Chauvet", "René Philoctète"],
    correct: 1
  },
  {
    q: "« La Crête-à-Pierrot » a été publié(e) par quel écrivain haïtien ?",
    options: ["Liliane Devieux-Dehoux", "Gérard Étienne", "Jean Price-Mars", "Charles Moravia"],
    correct: 3
  },
  {
    q: "« Fils de misère » est signé par quel auteur haïtien ?",
    options: ["Frédéric Marcelin", "Marie-Thérèse Colimon-Hall", "Lyonel Trouillot", "Paula Clermont Péan"],
    correct: 1
  },
  {
    q: "Quel nom d'auteur associez-vous à « Encre allègre » ?",
    options: ["Georges Castera", "Carl Brouard", "Justin Lhérisson", "Gary Klang"],
    correct: 0
  },
  {
    q: "Marie-Thérèse Colimon-Hall est notamment l'auteur(e) de :",
    options: ["Fils de misère", "Avant que les ombres s'effacent", "Zombi Blues", "Les Thazar"],
    correct: 0
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Sous le soleil d'Haïti » ?",
    options: ["Jean-Claude Bajeux", "Ida Faubert", "Liliane Devieux-Dehoux", "Marie-Thérèse Colimon-Hall"],
    correct: 1
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de James Noël ?",
    options: ["Manuel d'histoire d'Haïti", "Le Nègre crucifié", "Des fleurs pour les héros", "Belle merveille"],
    correct: 3
  },
  {
    q: "Retrouvez l'auteur de « Zoune chez sa ninnaine » parmi ces propositions :",
    options: ["Oswald Durand", "Windsor Bellegarde", "Serge Legagneur", "Justin Lhérisson"],
    correct: 3
  },
  {
    q: "Quelle est l'œuvre de Oswald Durand parmi cette liste ?",
    options: ["Choucoune", "Le Conditionnel", "Le Trou du souffleur", "L'Espace d'un cillement"],
    correct: 0
  },
  {
    q: "Quel nom d'auteur associez-vous à « Les Thazar » ?",
    options: ["Fernand Hibbert", "Léon Laleau", "Makenzy Orcel", "Alibée Féry"],
    correct: 0
  },
  {
    q: "Qui a publié le livre « Romulus » ?",
    options: ["Fernand Hibbert", "Gérard Étienne", "Guy Régis Jr", "Jacques Roumain"],
    correct: 0
  },
  {
    q: "Qui a publié le livre « Silhouettes de nègres et de négrophiles » ?",
    options: ["Jean Price-Mars", "Jean D'Amérique", "Carl Brouard", "Néhémy Pierre-Dahomey"],
    correct: 0
  },
  {
    q: "« Dessalines ou le sang du Pont-Rouge » compte parmi les œuvres de quel auteur ?",
    options: ["Oswald Durand", "Hénock Trouillot", "Davertige", "Liliane Devieux-Dehoux"],
    correct: 1
  },
  {
    q: "Davertige a notamment donné naissance à quelle œuvre ?",
    options: ["Idem", "Moi, fardeau inhérent", "Compère Général Soleil", "Le Manuscrit de mon ami"],
    correct: 0
  },
  {
    q: "Qui a publié le livre « Encre allègre » ?",
    options: ["Jean-Claude Charles", "Georges Castera", "Marie-Célie Agnant", "Gary Victor"],
    correct: 1
  },
  {
    q: "« Rêver debout » est signé par quel auteur haïtien ?",
    options: ["Liliane Devieux-Dehoux", "Roland Morisseau", "Davertige", "Louis Joseph Janvier"],
    correct: 1
  },
  {
    q: "De quelle plume est issue l'œuvre « Rue Frontière » ?",
    options: ["Nadine Magloire", "Faubert Bolivar", "Georges Sylvain", "James Noël"],
    correct: 1
  },
  {
    q: "Quel titre figure dans la bibliographie de Fresnel Sylvestre ?",
    options: ["Guillaume et Nathalie", "Un amour à trois temps", "Le Manuscrit de mon ami", "Le Qui-vive"],
    correct: 1
  },
  {
    q: "« Le Mât de cocagne » a été publié(e) par quel écrivain haïtien ?",
    options: ["Josaphat-Robert Large", "René Depestre", "Jean-Claude Fignolé", "Georges Castera"],
    correct: 1
  },
  {
    q: "Le livre « Les Possédés de la pleine lune » est dû à la plume de :",
    options: ["Carl Brouard", "Jacques Stephen Alexis", "Jean-Claude Fignolé", "Etzer Vilaire"],
    correct: 2
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Le Rond-point » ?",
    options: ["James Noël", "Louis-Philippe Dalembert", "Pradel Pompilus", "Évelyne Trouillot"],
    correct: 3
  },
  {
    q: "Qui a publié le livre « Le Mal de terre » ?",
    options: ["Paula Clermont Péan", "Carl Brouard", "Justin Chrysostome Dorsainvil", "Anténor Firmin"],
    correct: 0
  },
  {
    q: "« De l'égalité des races humaines » est signé par quel auteur haïtien ?",
    options: ["Anténor Firmin", "Ida Faubert", "Jean Price-Mars", "Jean D'Amérique"],
    correct: 0
  },
  {
    q: "De quelle plume est issue l'œuvre « Passions » ?",
    options: ["Fernand Hibbert", "Massillon Coicou", "Rodney Saint-Éloi", "Frankétienne"],
    correct: 1
  },
  {
    q: "Qui a publié le livre « La Famille des Pitite-Caille » ?",
    options: ["Justin Lhérisson", "Dany Laferrière", "Kettly Mars", "Isnardin Vieux"],
    correct: 0
  },
  {
    q: "Quel ouvrage a été publié par Jean-Claude Bajeux ?",
    options: ["L'Odeur du café", "Jacmel au crépuscule", "Vers le sud", "Mosochwazi Kout Fè"],
    correct: 3
  },
  {
    q: "Le livre « La Crête-à-Pierrot » est dû à la plume de :",
    options: ["Marie-Thérèse Colimon-Hall", "Davertige", "Charles Moravia", "Fresnel Sylvestre"],
    correct: 2
  },
  {
    q: "« Les Villages de Dieu » a été publié(e) par quel écrivain haïtien ?",
    options: ["Lyonel Trouillot", "Emmelie Prophète", "Etzer Vilaire", "Frédéric Marcelin"],
    correct: 1
  },
  {
    q: "Quel livre porte la signature de Cléante Valcin ?",
    options: ["Yanvalou pour Charlie", "Les Villages de Dieu", "La Blanche Négresse", "Romulus"],
    correct: 2
  },
  {
    q: "L'œuvre « Les Contes haïtiens » a été écrite par :",
    options: ["Suzanne Comhaire-Sylvain", "Frankétienne", "Anthony Phelps", "Jacques Stephen Alexis"],
    correct: 0
  },
  {
    q: "Quel livre porte la signature de Frédéric Marcelin ?",
    options: ["Musique nègre", "Thémistocle-Épaminondas Labasterre", "Mère-Solitude", "Gouverneurs de la rosée"],
    correct: 1
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Placide David ?",
    options: ["Les Thazar", "L'Héritage colonial en Haïti", "Le Rond-point", "Au pipirite chantant"],
    correct: 1
  },
  {
    q: "Qui a publié le livre « Milwaukee Blues » ?",
    options: ["Charles Moravia", "Roland Morisseau", "Louis-Philippe Dalembert", "Jean-Robert Cadet"],
    correct: 2
  },
  {
    q: "L'œuvre « La Belle Amour humaine » a été écrite par :",
    options: ["Cléante Valcin", "Tertulien Guilbaud", "Georges Anglade", "Lyonel Trouillot"],
    correct: 3
  },
  {
    q: "Quel livre porte la signature de Nadine Magloire ?",
    options: ["La République d'Haïti et ses visiteurs", "Le Conditionnel", "Rêver debout", "Le Mal de vivre"],
    correct: 3
  },
  {
    q: "Quel nom d'auteur associez-vous à « Comment faire l'amour avec un Nègre sans se fatiguer » ?",
    options: ["Roland Morisseau", "Dany Laferrière", "Placide David", "Néhémy Pierre-Dahomey"],
    correct: 1
  },
  {
    q: "L'écrivain(e) Justin Chrysostome Dorsainvil est célèbre pour avoir publié :",
    options: ["Assaut à la nuit", "Manuel d'histoire d'Haïti", "Écrivains haïtiens", "L'Amour oui. La mort non"],
    correct: 1
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « L'Empereur Dessalines » ?",
    options: ["James Noël", "Nadine Magloire", "Makenzy Orcel", "Massillon Coicou"],
    correct: 3
  },
  {
    q: "Retrouvez l'auteur de « À l'angle des rues parallèles » parmi ces propositions :",
    options: ["Fresnel Sylvestre", "René Depestre", "Gary Victor", "Gérard Étienne"],
    correct: 2
  },
  {
    q: "Le livre « Douces déroutes » est dû à la plume de :",
    options: ["Dany Laferrière", "Emmelie Prophète", "Jean-Robert Cadet", "Yanick Lahens"],
    correct: 3
  },
  {
    q: "Quel écrivain haïtien a écrit « De Saint-Domingue à Haïti » ?",
    options: ["Roussan Camille", "René Philoctète", "Jean-Robert Cadet", "Jean Price-Mars"],
    correct: 3
  },
  {
    q: "Quel nom d'auteur associez-vous à « Thérèse en mille morceaux » ?",
    options: ["Gary Klang", "Demesvar Delorme", "Lyonel Trouillot", "James Noël"],
    correct: 2
  },
  {
    q: "Quel écrivain haïtien a écrit « Réflexions diverses sur Haïti » ?",
    options: ["Edwidge Danticat", "Demesvar Delorme", "Roland Morisseau", "Jean-Claude Bajeux"],
    correct: 1
  },
  {
    q: "Quel nom d'auteur associez-vous à « Yanvalou pour Charlie » ?",
    options: ["Windsor Bellegarde", "Évelyne Trouillot", "Lyonel Trouillot", "Tertulien Guilbaud"],
    correct: 2
  },
  {
    q: "« Île à vau-l'eau » est signé par quel auteur haïtien ?",
    options: ["Jean D'Amérique", "Suzanne Comhaire-Sylvain", "Windsor Bellegarde", "Jean-Robert Léonidas"],
    correct: 3
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Carl Brouard ?",
    options: ["Le Roman de l'occupation", "Le Sang et la Mer", "Écrit sur du ruban rose", "Nouveaux poèmes"],
    correct: 2
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Frédéric Marcelin ?",
    options: ["Mes années Duvalier", "Choucoune", "La Vengeance de Mama", "La Couleur de l'aube"],
    correct: 2
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Zoune chez sa ninnaine » ?",
    options: ["Carl Brouard", "Léon Laleau", "Marie-Alice Théard", "Justin Lhérisson"],
    correct: 3
  },
  {
    q: "« La Belle Amour humaine » est signé par quel auteur haïtien ?",
    options: ["Jacques Stephen Alexis", "Lyonel Trouillot", "Massillon Coicou", "Davertige"],
    correct: 1
  },
  {
    q: "Jean-Euphèle Milcé a notamment donné naissance à quelle œuvre ?",
    options: ["L'Alphabet des nuits", "Douces déroutes", "Dessalines ou le sang du Pont-Rouge", "La Plage des songes"],
    correct: 0
  },
  {
    q: "Retrouvez l'auteur de « Choucoune » parmi ces propositions :",
    options: ["Louis-Philippe Dalembert", "Marvin Victor", "Oswald Durand", "Edwidge Danticat"],
    correct: 2
  },
  {
    q: "Retrouvez l'auteur de « Le Peuple des terres mêlées » parmi ces propositions :",
    options: ["Yanick Lahens", "Josaphat-Robert Large", "René Philoctète", "Georges Anglade"],
    correct: 2
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Le bout du monde est une fenêtre » ?",
    options: ["Emmelie Prophète", "Jacques Roumain", "Jean-Euphèle Milcé", "Liliane Devieux-Dehoux"],
    correct: 0
  },
  {
    q: "Parmi ces titres, lequel est signé Etzer Vilaire ?",
    options: ["Épisode de la Révolution", "Nouveaux poèmes", "Rires et Pleurs", "Poèmes d'Haïti et de France"],
    correct: 1
  },
  {
    q: "« Une somme humaine » est signé par quel auteur haïtien ?",
    options: ["Ignace Nau", "Gary Victor", "Makenzy Orcel", "Josaphat-Robert Large"],
    correct: 2
  },
  {
    q: "Qui a publié le livre « Ferdinand je suis à Paris » ?",
    options: ["Jean-Claude Charles", "Suzanne Comhaire-Sylvain", "Néhémy Pierre-Dahomey", "Émile Ollivier"],
    correct: 0
  },
  {
    q: "L'œuvre « Fils de misère » a été écrite par :",
    options: ["Louis Joseph Janvier", "Marie-Thérèse Colimon-Hall", "Gérard Étienne", "Émile Roumer"],
    correct: 1
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Liliane Devieux-Dehoux ?",
    options: ["Le Conditionnel", "L'Amour oui. La mort non", "Je suis vivant", "Musa-Paidica"],
    correct: 1
  },
  {
    q: "« Manhattan Blues » est signé par quel auteur haïtien ?",
    options: ["Louis Joseph Janvier", "Jean-Claude Charles", "Kettly Mars", "Placide David"],
    correct: 1
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Émile Roumer ?",
    options: ["Un Arc-en-ciel pour l'occident chrétien", "Le Conditionnel", "Le Livre d'Emma", "Poèmes d'Haïti et de France"],
    correct: 3
  },
  {
    q: "« Rhapsodie sale » a été publié(e) par quel écrivain haïtien ?",
    options: ["Guy Régis Jr", "Stanley Péan", "Jean D'Amérique", "Marie Vieux-Chauvet"],
    correct: 2
  },
  {
    q: "Quel titre figure dans la bibliographie de Marie-Célie Agnant ?",
    options: ["Le Livre d'Emma", "Le Mal de terre", "Rue des pas perdus", "Les Immortelles"],
    correct: 0
  },
  {
    q: "De quelle plume est issue l'œuvre « Les Villages de Dieu » ?",
    options: ["Emmelie Prophète", "René Philoctète", "Gary Victor", "Stanley Péan"],
    correct: 0
  },
  {
    q: "Quel ouvrage a été publié par Michel Soukar ?",
    options: ["Nouveaux poèmes", "Le Fusil et la croix", "Les Rapaces", "Le Mât de cocagne"],
    correct: 1
  },
  {
    q: "« L'Héritage colonial en Haïti » compte parmi les œuvres de quel auteur ?",
    options: ["Louis Joseph Janvier", "Roland Morisseau", "Placide David", "Marie-Thérèse Colimon-Hall"],
    correct: 2
  },
  {
    q: "Quel titre figure dans la bibliographie de Oswald Durand ?",
    options: ["Théâtre", "Rires et Pleurs", "Une eau-forte", "La Bélière Caraïbe"],
    correct: 1
  },
  {
    q: "Paula Clermont Péan est notamment l'auteur(e) de :",
    options: ["Adieu, mon frère", "Choucoune", "Haïti, terre mystique", "Le Mal de terre"],
    correct: 3
  },
  {
    q: "Retrouvez l'auteur de « Pèlentèt » parmi ces propositions :",
    options: ["Frankétienne", "Jean-Robert Léonidas", "Antoine Innocent", "Jean-Claude Charles"],
    correct: 0
  },
  {
    q: "L'écrivain(e) Guy Régis Jr est célèbre pour avoir publié :",
    options: ["Désirée Congo", "Le Testament des solitudes", "Moi, fardeau inhérent", "Rêver debout"],
    correct: 2
  },
  {
    q: "Quel écrivain haïtien a écrit « L'Heure hybride » ?",
    options: ["Roussan Camille", "Kettly Mars", "Cléante Valcin", "Pradel Pompilus"],
    correct: 1
  },
  {
    q: "« Mimola » est signé par quel auteur haïtien ?",
    options: ["René Depestre", "Antoine Innocent", "Makenzy Orcel", "Jean-Claude Bajeux"],
    correct: 1
  },
  {
    q: "Retrouvez l'auteur de « Les Possédés de la pleine lune » parmi ces propositions :",
    options: ["Windsor Bellegarde", "Carl Brouard", "Jean-Claude Fignolé", "Alibée Féry"],
    correct: 2
  },
  {
    q: "L'œuvre « Musa-Paidica » a été écrite par :",
    options: ["James Noël", "Etzer Vilaire", "Alibée Féry", "Émile Ollivier"],
    correct: 2
  },
  {
    q: "« Mère-Solitude » est signé par quel auteur haïtien ?",
    options: ["Émile Ollivier", "Frédéric Marcelin", "Jean-Claude Fignolé", "Marie-Alice Théard"],
    correct: 0
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Séna » ?",
    options: ["Anthony Phelps", "Fresnel Sylvestre", "Fernand Hibbert", "Roussan Camille"],
    correct: 2
  },
  {
    q: "Qui a publié le livre « Haïti, terre mystique » ?",
    options: ["Edwidge Danticat", "Rodney Saint-Éloi", "Gérard Étienne", "Gary Klang"],
    correct: 3
  },
  {
    q: "Quel ouvrage a été publié par Placide David ?",
    options: ["Le Lambi", "Treize nouvelles vaudou", "Les Blancs de mémoire", "L'Héritage colonial en Haïti"],
    correct: 3
  },
  {
    q: "Quel livre porte la signature de Paula Clermont Péan ?",
    options: ["Mère-Solitude", "Adieu, mon frère", "Aube tranquille", "Le Mal de terre"],
    correct: 3
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Gary Klang ?",
    options: ["La Vocation de l'élite", "Rhapsodie sale", "Haïti, terre mystique", "Le Manuscrit de mon ami"],
    correct: 2
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Le Livre d'Emma » ?",
    options: ["Guy Régis Jr", "Rodney Saint-Éloi", "Marie-Célie Agnant", "Stanley Péan"],
    correct: 2
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « La Plage des songes » ?",
    options: ["Stanley Péan", "Edwidge Danticat", "Tertulien Guilbaud", "Jean-Claude Charles"],
    correct: 0
  },
  {
    q: "On doit à la plume de Oswald Durand l'œuvre suivante :",
    options: ["Vers le sud", "Mon pays que voici", "Rires et Pleurs", "Les Étrangers de la maison"],
    correct: 2
  },
  {
    q: "Quel livre porte la signature de Marie-Alice Théard ?",
    options: ["Le bout du monde est une fenêtre", "L'Ombre animale", "Mes années Duvalier", "Mon pays que voici"],
    correct: 2
  },
  {
    q: "Quel écrivain haïtien a écrit « Mur Méditerranée » ?",
    options: ["Roland Morisseau", "Louis-Philippe Dalembert", "Antoine Innocent", "René Philoctète"],
    correct: 1
  },
  {
    q: "Quel nom d'auteur associez-vous à « Le Sang et la Mer » ?",
    options: ["Gary Victor", "Louis Joseph Janvier", "Paula Clermont Péan", "Joujou Turenne"],
    correct: 0
  },
  {
    q: "Quel titre figure dans la bibliographie de Frankétienne ?",
    options: ["La Couleur de l'aube", "Huit jours dans un no man's land", "Krik? Krak!", "Pays sans chapeau"],
    correct: 1
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Joujou Turenne ?",
    options: ["Les Arbres musiciens", "Séna", "Contes et légendes d'Haïti", "La Crête-à-Pierrot"],
    correct: 2
  },
  {
    q: "Quel écrivain haïtien a écrit « Le Livre d'Emma » ?",
    options: ["Joujou Turenne", "Ignace Nau", "Edwidge Danticat", "Marie-Célie Agnant"],
    correct: 3
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Les Rapaces » ?",
    options: ["Fresnel Sylvestre", "Marie-Alice Théard", "Émile Roumer", "Marie Vieux-Chauvet"],
    correct: 3
  },
  {
    q: "« La Famille des Pitite-Caille » a été publié(e) par quel écrivain haïtien ?",
    options: ["Jean D'Amérique", "Justin Lhérisson", "Edwidge Danticat", "Paula Clermont Péan"],
    correct: 1
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Le Fusil et la croix » ?",
    options: ["Makenzy Orcel", "Michel Soukar", "Lyonel Trouillot", "Marie-Célie Agnant"],
    correct: 1
  },
  {
    q: "« Je suis vivant » est signé par quel auteur haïtien ?",
    options: ["Joujou Turenne", "Roland Morisseau", "Kettly Mars", "René Philoctète"],
    correct: 2
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « De Saint-Domingue à Haïti » ?",
    options: ["Émile Ollivier", "Jacques Stephen Alexis", "Jean Price-Mars", "Guy Régis Jr"],
    correct: 2
  },
  {
    q: "« Milwaukee Blues » compte parmi les œuvres de quel auteur ?",
    options: ["Louis-Philippe Dalembert", "Marie-Thérèse Colimon-Hall", "Stanley Péan", "Justin Lhérisson"],
    correct: 0
  },
  {
    q: "On doit à la plume de Faubert Bolivar l'œuvre suivante :",
    options: ["Rue Frontière", "Clair de Manbo", "De l'égalité des races humaines", "Avant que les ombres s'effacent"],
    correct: 0
  },
  {
    q: "Qui a publié le livre « Pays sans chapeau » ?",
    options: ["Dany Laferrière", "Joujou Turenne", "Fernand Hibbert", "Anténor Firmin"],
    correct: 0
  },
  {
    q: "Quel titre figure dans la bibliographie de Marie-Thérèse Colimon-Hall ?",
    options: ["Séna", "Romulus", "Francesca", "Fils de misère"],
    correct: 3
  },
  {
    q: "« Dezafi » est signé par quel auteur haïtien ?",
    options: ["Liliane Devieux-Dehoux", "Frankétienne", "Jacques Roumain", "Anténor Firmin"],
    correct: 1
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Les Possédés de la pleine lune » ?",
    options: ["Makenzy Orcel", "Isnardin Vieux", "Jean-Claude Fignolé", "Placide David"],
    correct: 2
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Josaphat-Robert Large ?",
    options: ["Les Étrangers de la maison", "Assaut à la nuit", "Le Mal de terre", "La Bélière Caraïbe"],
    correct: 0
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Mère-Solitude » ?",
    options: ["Anténor Firmin", "Lyonel Trouillot", "René Philoctète", "Émile Ollivier"],
    correct: 3
  },
  {
    q: "« Au pipirite chantant » est signé par quel auteur haïtien ?",
    options: ["Ida Faubert", "Jean Métellus", "Kettly Mars", "Cléante Valcin"],
    correct: 1
  },
  {
    q: "Jean-Euphèle Milcé est notamment l'auteur(e) de :",
    options: ["Bonjour et adieu à la négritude", "Dezafi", "Les Contes haïtiens", "L'Alphabet des nuits"],
    correct: 3
  },
  {
    q: "L'œuvre « L'Oiseau schizophone » a été écrite par :",
    options: ["Léon Laleau", "Etzer Vilaire", "Frankétienne", "Néhémy Pierre-Dahomey"],
    correct: 2
  },
  {
    q: "« Le Mal de vivre » a été publié(e) par quel écrivain haïtien ?",
    options: ["Nadine Magloire", "Roussan Camille", "Évelyne Trouillot", "Jean Métellus"],
    correct: 0
  },
  {
    q: "Retrouvez l'auteur de « Rue Frontière » parmi ces propositions :",
    options: ["Marie-Thérèse Colimon-Hall", "Massillon Coicou", "Jean D'Amérique", "Faubert Bolivar"],
    correct: 3
  },
  {
    q: "L'œuvre « Le Cri de l'oiseau rouge » a été écrite par :",
    options: ["Edwidge Danticat", "Louis-Philippe Dalembert", "Emmelie Prophète", "Antoine Innocent"],
    correct: 0
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Sous le soleil d'Haïti » ?",
    options: ["Alibée Féry", "Isnardin Vieux", "Émile Ollivier", "Ida Faubert"],
    correct: 3
  },
  {
    q: "Rodney Saint-Éloi est notamment l'auteur(e) de :",
    options: ["Vers le sud", "Romulus", "La Crête-à-Pierrot", "Haïti kenbe la !"],
    correct: 3
  },
  {
    q: "Quel nom d'auteur associez-vous à « Mère-Solitude » ?",
    options: ["Guy Régis Jr", "Gary Victor", "Émile Ollivier", "Jacques Stephen Alexis"],
    correct: 2
  },
  {
    q: "Qui a publié le livre « Île à vau-l'eau » ?",
    options: ["Jean-Robert Léonidas", "Michel Soukar", "Edwidge Danticat", "Jean Price-Mars"],
    correct: 0
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Des fleurs pour les héros » ?",
    options: ["James Noël", "Anthony Phelps", "Tertulien Guilbaud", "Liliane Devieux-Dehoux"],
    correct: 1
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Le Mal de vivre » ?",
    options: ["Louis-Philippe Dalembert", "Nadine Magloire", "Jean-Euphèle Milcé", "Justin Lhérisson"],
    correct: 1
  },
  {
    q: "Retrouvez l'auteur de « Rêver debout » parmi ces propositions :",
    options: ["Demesvar Delorme", "Roland Morisseau", "Jacques Roumain", "Jean Métellus"],
    correct: 1
  },
  {
    q: "De quelle plume est issue l'œuvre « Manhattan Blues » ?",
    options: ["Emmelie Prophète", "Georges Sylvain", "Pradel Pompilus", "Jean-Claude Charles"],
    correct: 3
  },
  {
    q: "Quel nom d'auteur associez-vous à « Saisons sauvages » ?",
    options: ["Kettly Mars", "Néhémy Pierre-Dahomey", "Etzer Vilaire", "Jacques Roumain"],
    correct: 0
  },
  {
    q: "Quel livre porte la signature de Syto Cavé ?",
    options: ["Les Immortelles", "Le Qui-vive", "La Vengeance de Mama", "Rue des pas perdus"],
    correct: 1
  },
  {
    q: "Le livre « Réflexions diverses sur Haïti » est dû à la plume de :",
    options: ["Jean-Claude Charles", "Isnardin Vieux", "René Depestre", "Demesvar Delorme"],
    correct: 3
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Yanvalou pour Charlie » ?",
    options: ["Georges Castera", "Pradel Pompilus", "Louis Joseph Janvier", "Lyonel Trouillot"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Pages retrouvées » ?",
    options: ["Justin Chrysostome Dorsainvil", "Gary Klang", "Marie-Thérèse Colimon-Hall", "Carl Brouard"],
    correct: 3
  },
  {
    q: "« Le Briseur de rosée » compte parmi les œuvres de quel auteur ?",
    options: ["Suzanne Comhaire-Sylvain", "Edwidge Danticat", "Fernand Hibbert", "Kettly Mars"],
    correct: 1
  },
  {
    q: "De quelle plume est issue l'œuvre « Dezafi » ?",
    options: ["Jean-Claude Fignolé", "René Depestre", "Frankétienne", "Edwidge Danticat"],
    correct: 2
  },
  {
    q: "Quel écrivain haïtien a écrit « Désirée Congo » ?",
    options: ["Suzanne Comhaire-Sylvain", "Évelyne Trouillot", "Serge Legagneur", "Syto Cavé"],
    correct: 1
  },
  {
    q: "Quel nom d'auteur associez-vous à « Les Possédés de la pleine lune » ?",
    options: ["Jean-Claude Fignolé", "Cléante Valcin", "Fernand Hibbert", "Hénock Trouillot"],
    correct: 0
  },
  {
    q: "Qui a publié le livre « Le Fusil et la croix » ?",
    options: ["Jean Price-Mars", "Michel Soukar", "Jean-Claude Fignolé", "Louis-Philippe Dalembert"],
    correct: 1
  },
  {
    q: "Retrouvez l'auteur de « Les Thazar » parmi ces propositions :",
    options: ["Fernand Hibbert", "Marie-Thérèse Colimon-Hall", "Ida Faubert", "Antoine Innocent"],
    correct: 0
  },
  {
    q: "L'œuvre « L'Héritage colonial en Haïti » a été écrite par :",
    options: ["Jean-Robert Cadet", "Néhémy Pierre-Dahomey", "Placide David", "Anthony Phelps"],
    correct: 2
  },
  {
    q: "« Amour, Colère et Folie » compte parmi les œuvres de quel auteur ?",
    options: ["Louis Joseph Janvier", "Gary Victor", "Jean-Robert Léonidas", "Marie Vieux-Chauvet"],
    correct: 3
  },
  {
    q: "L'œuvre « Assaut à la nuit » a été écrite par :",
    options: ["Roussan Camille", "Guy Régis Jr", "Jacques Stephen Alexis", "Isnardin Vieux"],
    correct: 0
  },
  {
    q: "Léon Laleau est notamment l'auteur(e) de :",
    options: ["L'Autre Face de la mer", "Rhapsodie sale", "Le Choc", "Le Manuscrit de mon ami"],
    correct: 2
  },
  {
    q: "De quelle plume est issue l'œuvre « Contes et légendes d'Haïti » ?",
    options: ["Pradel Pompilus", "Guy Régis Jr", "Joujou Turenne", "René Philoctète"],
    correct: 2
  },
  {
    q: "L'œuvre « Le Rond-point » a été écrite par :",
    options: ["Dany Laferrière", "Emmelie Prophète", "Jacques Stephen Alexis", "Évelyne Trouillot"],
    correct: 3
  },
  {
    q: "De quelle plume est issue l'œuvre « Gouverneurs de la rosée » ?",
    options: ["Edwidge Danticat", "Jacques Roumain", "Yanick Lahens", "Frédéric Marcelin"],
    correct: 1
  },
  {
    q: "Quel livre porte la signature de Gérard Étienne ?",
    options: ["Le Mât de cocagne", "L'Odeur du café", "Le Nègre crucifié", "Fonds des Nègres"],
    correct: 2
  },
  {
    q: "Retrouvez l'auteur de « Mère-Solitude » parmi ces propositions :",
    options: ["Justin Chrysostome Dorsainvil", "Émile Ollivier", "James Noël", "Edwidge Danticat"],
    correct: 1
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Néhémy Pierre-Dahomey ?",
    options: ["Désirée Congo", "Saison de porcs", "Rapatriés", "Épisode de la Révolution"],
    correct: 2
  },
  {
    q: "Quel nom d'auteur associez-vous à « Le Reste du temps » ?",
    options: ["Emmelie Prophète", "Jean-Claude Charles", "Jean-Claude Fignolé", "Jean-Robert Cadet"],
    correct: 0
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Gérard Étienne ?",
    options: ["L'Odeur du café", "Le Nègre crucifié", "Contes et légendes d'Haïti", "Aube tranquille"],
    correct: 1
  },
  {
    q: "Quel livre porte la signature de Jean-Euphèle Milcé ?",
    options: ["Jacques Roche, la vie entière", "L'Alphabet des nuits", "L'Ombre animale", "La Plage des songes"],
    correct: 1
  },
  {
    q: "À qui doit-on l'œuvre littéraire « La Récolte douce des larmes » ?",
    options: ["Alibée Féry", "Roland Morisseau", "Edwidge Danticat", "René Depestre"],
    correct: 2
  },
  {
    q: "« Poèmes d'Haïti et de France » a été publié(e) par quel écrivain haïtien ?",
    options: ["Liliane Devieux-Dehoux", "Edwidge Danticat", "Frédéric Marcelin", "Émile Roumer"],
    correct: 3
  },
  {
    q: "Serge Legagneur a notamment donné naissance à quelle œuvre ?",
    options: ["Textes interdits", "Poésies nationales", "Rosalie l'infâme", "Clair de Manbo"],
    correct: 0
  },
  {
    q: "« La République d'Haïti et ses visiteurs » est signé par quel auteur haïtien ?",
    options: ["Frédéric Marcelin", "Marvin Victor", "Louis Joseph Janvier", "Georges Castera"],
    correct: 2
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Oswald Durand ?",
    options: ["Rires et Pleurs", "Thémistocle-Épaminondas Labasterre", "Anacaona", "Compère Général Soleil"],
    correct: 0
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Évelyne Trouillot ?",
    options: ["Musique nègre", "Ultravocal", "La Récolte douce des larmes", "Le Rond-point"],
    correct: 3
  },
  {
    q: "Retrouvez l'auteur de « Amour, Colère et Folie » parmi ces propositions :",
    options: ["Marie Vieux-Chauvet", "Stanley Péan", "Justin Chrysostome Dorsainvil", "René Depestre"],
    correct: 0
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Ultravocal » ?",
    options: ["Frankétienne", "René Philoctète", "Jean Métellus", "Placide David"],
    correct: 0
  },
  {
    q: "Retrouvez l'auteur de « Moi, Toussaint Louverture » parmi ces propositions :",
    options: ["Liliane Devieux-Dehoux", "Jean-Claude Fignolé", "Anthony Phelps", "Georges Anglade"],
    correct: 1
  },
  {
    q: "Quel écrivain haïtien a écrit « Bonjour et adieu à la négritude » ?",
    options: ["Fresnel Sylvestre", "René Depestre", "Serge Legagneur", "James Noël"],
    correct: 1
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Le Qui-vive » ?",
    options: ["Jean D'Amérique", "Cléante Valcin", "Syto Cavé", "Paula Clermont Péan"],
    correct: 2
  },
  {
    q: "Qui a publié le livre « Belle merveille » ?",
    options: ["Edwidge Danticat", "Hénock Trouillot", "Jean D'Amérique", "James Noël"],
    correct: 3
  },
  {
    q: "« Le Roman de l'occupation » est signé par quel auteur haïtien ?",
    options: ["Georges Sylvain", "Isnardin Vieux", "Marvin Victor", "René Depestre"],
    correct: 1
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Rires et Pleurs » ?",
    options: ["Yanick Lahens", "René Depestre", "Dany Laferrière", "Oswald Durand"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Anacaona » ?",
    options: ["Gary Klang", "Dany Laferrière", "Évelyne Trouillot", "Jean Métellus"],
    correct: 3
  },
  {
    q: "À qui doit-on l'œuvre littéraire « De l'égalité des races humaines » ?",
    options: ["Anténor Firmin", "Dany Laferrière", "Jean-Claude Bajeux", "Roland Morisseau"],
    correct: 0
  },
  {
    q: "« Francesca » compte parmi les œuvres de quel auteur ?",
    options: ["Emmelie Prophète", "Justin Lhérisson", "Demesvar Delorme", "Jacques Roumain"],
    correct: 2
  },
  {
    q: "Qui a publié le livre « Musa-Paidica » ?",
    options: ["Alibée Féry", "Léon Laleau", "Guy Régis Jr", "Anténor Firmin"],
    correct: 0
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Les Thazar » ?",
    options: ["Marie Vieux-Chauvet", "Georges Anglade", "Jean-Claude Fignolé", "Fernand Hibbert"],
    correct: 3
  },
  {
    q: "Quel livre porte la signature de Ignace Nau ?",
    options: ["Des fleurs pour les héros", "L'Empereur Dessalines", "Épisode de la Révolution", "Haïti kenbe la !"],
    correct: 2
  },
  {
    q: "De quelle plume est issue l'œuvre « Clair de Manbo » ?",
    options: ["Gary Victor", "Edwidge Danticat", "Nadine Magloire", "Justin Chrysostome Dorsainvil"],
    correct: 0
  },
  {
    q: "Qui a publié le livre « Anacaona » ?",
    options: ["Liliane Devieux-Dehoux", "Jean Métellus", "Frankétienne", "Fresnel Sylvestre"],
    correct: 1
  },
  {
    q: "Qui a publié le livre « Mimola » ?",
    options: ["Rodney Saint-Éloi", "Antoine Innocent", "Jean D'Amérique", "Josaphat-Robert Large"],
    correct: 1
  },
  {
    q: "À qui doit-on l'œuvre littéraire « La Plage des songes » ?",
    options: ["Stanley Péan", "Etzer Vilaire", "Jean-Claude Bajeux", "Emmelie Prophète"],
    correct: 0
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « La mémoire aux abois » ?",
    options: ["Évelyne Trouillot", "Jean D'Amérique", "Guy Régis Jr", "Cléante Valcin"],
    correct: 0
  },
  {
    q: "« L'Empereur Dessalines » est signé par quel auteur haïtien ?",
    options: ["Isnardin Vieux", "Edwidge Danticat", "Alibée Féry", "Massillon Coicou"],
    correct: 3
  },
  {
    q: "Quelle est l'œuvre de Antoine Innocent parmi cette liste ?",
    options: ["Kasalé", "Mimola", "La Famille Vortex", "Le Lambi"],
    correct: 1
  },
  {
    q: "L'œuvre « Vers le sud » a été écrite par :",
    options: ["Ida Faubert", "Marie-Thérèse Colimon-Hall", "Dany Laferrière", "Georges Anglade"],
    correct: 2
  },
  {
    q: "L'œuvre « Pages retrouvées » a été écrite par :",
    options: ["Ida Faubert", "Dany Laferrière", "Carl Brouard", "Etzer Vilaire"],
    correct: 2
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Jean-Robert Cadet ?",
    options: ["Rapatriés", "Le Sang et la Mer", "Restavec", "La Famille Vortex"],
    correct: 2
  },
  {
    q: "« Le Livre d'Emma » est signé par quel auteur haïtien ?",
    options: ["Pradel Pompilus", "Windsor Bellegarde", "Georges Anglade", "Marie-Célie Agnant"],
    correct: 3
  },
  {
    q: "« Encre allègre » compte parmi les œuvres de quel auteur ?",
    options: ["Georges Castera", "Jean Métellus", "Yanick Lahens", "Évelyne Trouillot"],
    correct: 0
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Le Testament des solitudes » ?",
    options: ["Placide David", "Carl Brouard", "Georges Castera", "Emmelie Prophète"],
    correct: 3
  },
  {
    q: "Qui a publié le livre « La Montagne ensorcelée » ?",
    options: ["Faubert Bolivar", "Jacques Roumain", "James Noël", "Jacques Stephen Alexis"],
    correct: 1
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Roland Morisseau ?",
    options: ["La Blanche Négresse", "Francesca", "Rêver debout", "Romancero aux étoiles"],
    correct: 2
  },
  {
    q: "« L'Autre Face de la mer » compte parmi les œuvres de quel auteur ?",
    options: ["Georges Sylvain", "Jean D'Amérique", "Louis-Philippe Dalembert", "Edwidge Danticat"],
    correct: 2
  },
  {
    q: "Retrouvez l'auteur de « Mon pays que voici » parmi ces propositions :",
    options: ["Anthony Phelps", "Joujou Turenne", "Syto Cavé", "Jean-Claude Charles"],
    correct: 0
  },
  {
    q: "Fernand Hibbert a notamment donné naissance à quelle œuvre ?",
    options: ["Cric? Crac!", "Francesca", "La Plage des songes", "Séna"],
    correct: 3
  },
  {
    q: "James Noël est notamment l'auteur(e) de :",
    options: ["L'Énigme du retour", "Moi, Toussaint Louverture", "Belle merveille", "Le Trou du souffleur"],
    correct: 2
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Anténor Firmin ?",
    options: ["De l'égalité des races humaines", "La Plage des songes", "Musique nègre", "Le Rond-point"],
    correct: 0
  },
  {
    q: "De quelle plume est issue l'œuvre « L'Année Dessalines » ?",
    options: ["Massillon Coicou", "Makenzy Orcel", "Jean Métellus", "Georges Sylvain"],
    correct: 2
  },
  {
    q: "Quelle est l'œuvre de Anténor Firmin parmi cette liste ?",
    options: ["Les Villages de Dieu", "De l'égalité des races humaines", "La Belle Amour humaine", "Le Lambi"],
    correct: 1
  },
  {
    q: "De quelle plume est issue l'œuvre « L'Ombre animale » ?",
    options: ["Makenzy Orcel", "Emmelie Prophète", "Jean-Robert Léonidas", "Windsor Bellegarde"],
    correct: 0
  },
  {
    q: "Quel livre porte la signature de Émile Roumer ?",
    options: ["Musa-Paidica", "Une eau-forte", "Poèmes d'Haïti et de France", "Contes et légendes d'Haïti"],
    correct: 2
  },
  {
    q: "De quelle plume est issue l'œuvre « Une somme humaine » ?",
    options: ["René Philoctète", "Rodney Saint-Éloi", "Émile Ollivier", "Makenzy Orcel"],
    correct: 3
  },
  {
    q: "L'écrivain(e) Cléante Valcin est célèbre pour avoir publié :",
    options: ["Théâtre", "Assaut à la nuit", "La Blanche Négresse", "La Plage des songes"],
    correct: 2
  },
  {
    q: "Qui a publié le livre « Réflexions diverses sur Haïti » ?",
    options: ["Demesvar Delorme", "Lyonel Trouillot", "Jacques Stephen Alexis", "Charles Moravia"],
    correct: 0
  },
  {
    q: "Le livre « Les Étrangers de la maison » est dû à la plume de :",
    options: ["Serge Legagneur", "Josaphat-Robert Large", "Jean D'Amérique", "Néhémy Pierre-Dahomey"],
    correct: 1
  },
  {
    q: "« Moi, Toussaint Louverture » a été publié(e) par quel écrivain haïtien ?",
    options: ["Kettly Mars", "Demesvar Delorme", "Jean-Claude Fignolé", "Frédéric Marcelin"],
    correct: 2
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Anténor Firmin ?",
    options: ["Le Mal de vivre", "De l'égalité des races humaines", "Treize nouvelles vaudou", "Milwaukee Blues"],
    correct: 1
  },
  {
    q: "L'œuvre « Le Nègre crucifié » a été écrite par :",
    options: ["Louis Joseph Janvier", "Emmelie Prophète", "Gérard Étienne", "Michel Soukar"],
    correct: 2
  },
  {
    q: "Quel titre figure dans la bibliographie de Jean-Euphèle Milcé ?",
    options: ["Frayeur", "Jacques Roche, la vie entière", "Le Mât de cocagne", "L'Alphabet des nuits"],
    correct: 3
  },
  {
    q: "« Le Manuscrit de mon ami » a été publié(e) par quel écrivain haïtien ?",
    options: ["Emmelie Prophète", "Fernand Hibbert", "Justin Lhérisson", "Etzer Vilaire"],
    correct: 1
  },
  {
    q: "L'écrivain(e) Gérard Étienne est célèbre pour avoir publié :",
    options: ["Le Cri de l'oiseau rouge", "Le Nègre crucifié", "Rapatriés", "La Famille des Pitite-Caille"],
    correct: 1
  },
  {
    q: "Retrouvez l'auteur de « Le Conditionnel » parmi ces propositions :",
    options: ["Anthony Phelps", "Néhémy Pierre-Dahomey", "Anténor Firmin", "Ida Faubert"],
    correct: 0
  },
  {
    q: "Quel livre porte la signature de Jean-Robert Cadet ?",
    options: ["Restavec", "Choucoune", "La Famille des Pitite-Caille", "La Famille Vortex"],
    correct: 0
  },
  {
    q: "« Réflexions diverses sur Haïti » est signé par quel auteur haïtien ?",
    options: ["Jean-Robert Léonidas", "Gary Klang", "Justin Chrysostome Dorsainvil", "Demesvar Delorme"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Avant que les ombres s'effacent » ?",
    options: ["Ida Faubert", "Charles Moravia", "Hénock Trouillot", "Louis-Philippe Dalembert"],
    correct: 3
  },
  {
    q: "Quel nom d'auteur associez-vous à « Gouverneurs de la rosée » ?",
    options: ["Fresnel Sylvestre", "Jacques Roumain", "James Noël", "Léon Laleau"],
    correct: 1
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Le Reste du temps » ?",
    options: ["Anténor Firmin", "Gary Klang", "Jean-Robert Léonidas", "Emmelie Prophète"],
    correct: 3
  },
  {
    q: "Georges Castera a notamment donné naissance à quelle œuvre ?",
    options: ["Guillaume et Nathalie", "Encre allègre", "La Récolte douce des larmes", "Assaut à la nuit"],
    correct: 1
  },
  {
    q: "Qui a publié le livre « Les Blancs de mémoire » ?",
    options: ["Louis-Philippe Dalembert", "Évelyne Trouillot", "Georges Anglade", "Jean D'Amérique"],
    correct: 2
  },
  {
    q: "Retrouvez l'auteur de « Le Lambi » parmi ces propositions :",
    options: ["Ignace Nau", "Néhémy Pierre-Dahomey", "Justin Chrysostome Dorsainvil", "Hénock Trouillot"],
    correct: 0
  },
  {
    q: "Quel écrivain haïtien a écrit « Les Contes haïtiens » ?",
    options: ["Émile Ollivier", "Davertige", "Suzanne Comhaire-Sylvain", "Marie-Thérèse Colimon-Hall"],
    correct: 2
  },
  {
    q: "Quel écrivain haïtien a écrit « Anacaona » ?",
    options: ["Alibée Féry", "Gary Victor", "Guy Régis Jr", "Jean Métellus"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Les Thazar » ?",
    options: ["Emmelie Prophète", "Fernand Hibbert", "Évelyne Trouillot", "Dany Laferrière"],
    correct: 1
  },
  {
    q: "Quel titre figure dans la bibliographie de Liliane Devieux-Dehoux ?",
    options: ["Rêver debout", "La Famille Vortex", "Manhattan Blues", "L'Amour oui. La mort non"],
    correct: 3
  },
  {
    q: "L'œuvre « Réflexions diverses sur Haïti » a été écrite par :",
    options: ["Louis Joseph Janvier", "Jean-Claude Charles", "Massillon Coicou", "Demesvar Delorme"],
    correct: 3
  },
  {
    q: "Quel écrivain haïtien a écrit « Moi, Toussaint Louverture » ?",
    options: ["Roussan Camille", "Justin Chrysostome Dorsainvil", "Louis-Philippe Dalembert", "Jean-Claude Fignolé"],
    correct: 3
  },
  {
    q: "Quel nom d'auteur associez-vous à « La Famille Vortex » ?",
    options: ["Jean Métellus", "Joujou Turenne", "Marie-Célie Agnant", "Anténor Firmin"],
    correct: 0
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Le bout du monde est une fenêtre » ?",
    options: ["Marie Vieux-Chauvet", "René Philoctète", "Faubert Bolivar", "Emmelie Prophète"],
    correct: 3
  },
  {
    q: "L'écrivain(e) Georges Castera est célèbre pour avoir publié :",
    options: ["Encre allègre", "L'Espace d'un cillement", "La Bélière Caraïbe", "Zoune chez sa ninnaine"],
    correct: 0
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Séna » ?",
    options: ["Jean Price-Mars", "Liliane Devieux-Dehoux", "Georges Sylvain", "Fernand Hibbert"],
    correct: 3
  },
  {
    q: "Retrouvez l'auteur de « Passages » parmi ces propositions :",
    options: ["Jean-Robert Léonidas", "Émile Ollivier", "Suzanne Comhaire-Sylvain", "Isnardin Vieux"],
    correct: 1
  },
  {
    q: "On doit à la plume de Alibée Féry l'œuvre suivante :",
    options: ["Un Arc-en-ciel pour l'occident chrétien", "Musa-Paidica", "L'Empereur Dessalines", "Dessalines ou le sang du Pont-Rouge"],
    correct: 1
  },
  {
    q: "L'œuvre « Francesca » a été écrite par :",
    options: ["Yanick Lahens", "Antoine Innocent", "Jean-Robert Cadet", "Demesvar Delorme"],
    correct: 3
  },
  {
    q: "Le livre « Mûr à crever » est dû à la plume de :",
    options: ["Frankétienne", "Gary Victor", "Justin Chrysostome Dorsainvil", "Stanley Péan"],
    correct: 0
  },
  {
    q: "Quel écrivain haïtien a écrit « Corps mêlés » ?",
    options: ["Jean-Robert Cadet", "Michel Soukar", "Paula Clermont Péan", "Marvin Victor"],
    correct: 3
  },
  {
    q: "« L'Héritage colonial en Haïti » a été publié(e) par quel écrivain haïtien ?",
    options: ["Pradel Pompilus", "Davertige", "Georges Anglade", "Placide David"],
    correct: 3
  },
  {
    q: "Quel écrivain haïtien a écrit « Amour, Colère et Folie » ?",
    options: ["Hénock Trouillot", "Jean Métellus", "Placide David", "Marie Vieux-Chauvet"],
    correct: 3
  },
  {
    q: "Retrouvez l'auteur de « Le Trou du souffleur » parmi ces propositions :",
    options: ["Michel Soukar", "Georges Castera", "Jean Métellus", "Pradel Pompilus"],
    correct: 1
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « La Crête-à-Pierrot » ?",
    options: ["Marvin Victor", "Jean-Robert Léonidas", "Charles Moravia", "Emmelie Prophète"],
    correct: 2
  },
  {
    q: "De quelle plume est issue l'œuvre « Le Lambi » ?",
    options: ["Jean-Claude Bajeux", "Ignace Nau", "Stanley Péan", "Marie Vieux-Chauvet"],
    correct: 1
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Idem » ?",
    options: ["Néhémy Pierre-Dahomey", "Marie-Alice Théard", "Fresnel Sylvestre", "Davertige"],
    correct: 3
  },
  {
    q: "Qui a publié le livre « Romancero aux étoiles » ?",
    options: ["Charles Moravia", "Fresnel Sylvestre", "Jean-Claude Fignolé", "Jacques Stephen Alexis"],
    correct: 3
  },
  {
    q: "Quel écrivain haïtien a écrit « La mémoire aux abois » ?",
    options: ["Émile Ollivier", "Évelyne Trouillot", "Néhémy Pierre-Dahomey", "Frankétienne"],
    correct: 1
  },
  {
    q: "« Le Qui-vive » a été publié(e) par quel écrivain haïtien ?",
    options: ["Josaphat-Robert Large", "Suzanne Comhaire-Sylvain", "Syto Cavé", "Frédéric Marcelin"],
    correct: 2
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Ida Faubert ?",
    options: ["Les Rapaces", "Sous le soleil d'Haïti", "Gouverneurs de la rosée", "Kasalé"],
    correct: 1
  },
  {
    q: "Retrouvez l'auteur de « Les Arbres musiciens » parmi ces propositions :",
    options: ["Jacques Stephen Alexis", "Alibée Féry", "Gary Klang", "Émile Roumer"],
    correct: 0
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Une eau-forte » ?",
    options: ["Isnardin Vieux", "Dany Laferrière", "Charles Moravia", "Jean Métellus"],
    correct: 3
  },
  {
    q: "« Les Fantoches » a été publié(e) par quel écrivain haïtien ?",
    options: ["Jean-Euphèle Milcé", "Jacques Roumain", "Joujou Turenne", "Jean D'Amérique"],
    correct: 1
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Néhémy Pierre-Dahomey ?",
    options: ["Rapatriés", "Un amour à trois temps", "Haïti kenbe la !", "Les Dix hommes noirs"],
    correct: 0
  },
  {
    q: "L'œuvre « Théâtre » a été écrite par :",
    options: ["Frédéric Marcelin", "Anthony Phelps", "Syto Cavé", "Jean-Claude Charles"],
    correct: 2
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Jean-Claude Bajeux ?",
    options: ["Vieilles chansons", "Francesca", "Le Trou du souffleur", "Mosochwazi Kout Fè"],
    correct: 3
  },
  {
    q: "Quel nom d'auteur associez-vous à « Alléluia pour une femme-jardin » ?",
    options: ["Georges Sylvain", "René Depestre", "Jean D'Amérique", "Massillon Coicou"],
    correct: 1
  },
  {
    q: "À qui doit-on l'œuvre littéraire « L'Odeur du café » ?",
    options: ["Tertulien Guilbaud", "Fernand Hibbert", "Dany Laferrière", "Emmelie Prophète"],
    correct: 2
  },
  {
    q: "« Saisons sauvages » compte parmi les œuvres de quel auteur ?",
    options: ["Gary Klang", "Placide David", "Kettly Mars", "Josaphat-Robert Large"],
    correct: 2
  },
  {
    q: "« Pays sans chapeau » compte parmi les œuvres de quel auteur ?",
    options: ["Frédéric Marcelin", "James Noël", "Jean D'Amérique", "Dany Laferrière"],
    correct: 3
  },
  {
    q: "À qui doit-on l'œuvre littéraire « L'Amour oui. La mort non » ?",
    options: ["Louis-Philippe Dalembert", "Davertige", "Émile Ollivier", "Liliane Devieux-Dehoux"],
    correct: 3
  },
  {
    q: "Quel écrivain haïtien a écrit « Mimola » ?",
    options: ["Marie-Alice Théard", "Antoine Innocent", "Léon Laleau", "Marie Vieux-Chauvet"],
    correct: 1
  },
  {
    q: "Identifiez l'œuvre écrite par Liliane Devieux-Dehoux :",
    options: ["L'Amour oui. La mort non", "Les Villages de Dieu", "Thérèse en mille morceaux", "Choucoune"],
    correct: 0
  },
  {
    q: "Le livre « Manuel d'histoire d'Haïti » est dû à la plume de :",
    options: ["Tertulien Guilbaud", "Demesvar Delorme", "René Philoctète", "Justin Chrysostome Dorsainvil"],
    correct: 3
  },
  {
    q: "L'œuvre « Restavec » a été écrite par :",
    options: ["Tertulien Guilbaud", "Jean-Claude Fignolé", "Jean-Robert Cadet", "Carl Brouard"],
    correct: 2
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Désirée Congo » ?",
    options: ["Évelyne Trouillot", "Néhémy Pierre-Dahomey", "Edwidge Danticat", "Antoine Innocent"],
    correct: 0
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Cléante Valcin ?",
    options: ["La Blanche Négresse", "Avant que les ombres s'effacent", "Les Fantoches", "Romancero aux étoiles"],
    correct: 0
  },
  {
    q: "Quel écrivain haïtien a écrit « Maître-Minuit » ?",
    options: ["Jean-Robert Léonidas", "Makenzy Orcel", "Jean-Robert Cadet", "Marvin Victor"],
    correct: 1
  },
  {
    q: "Quel écrivain haïtien a écrit « Sous le soleil d'Haïti » ?",
    options: ["Ida Faubert", "Justin Lhérisson", "Gérard Étienne", "Émile Roumer"],
    correct: 0
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Mûr à crever » ?",
    options: ["Marie-Thérèse Colimon-Hall", "Frankétienne", "Louis Joseph Janvier", "Marie-Célie Agnant"],
    correct: 1
  },
  {
    q: "« Hadriana dans tous mes rêves » est signé par quel auteur haïtien ?",
    options: ["Makenzy Orcel", "René Depestre", "Charles Moravia", "Georges Sylvain"],
    correct: 1
  },
  {
    q: "Quel nom d'auteur associez-vous à « L'Autre Face de la mer » ?",
    options: ["Louis-Philippe Dalembert", "Jean-Robert Léonidas", "Émile Roumer", "Jacques Roumain"],
    correct: 0
  },
  {
    q: "Quelle est l'œuvre de Justin Chrysostome Dorsainvil parmi cette liste ?",
    options: ["Krik? Krak!", "Pèlentèt", "Manuel d'histoire d'Haïti", "Belle merveille"],
    correct: 2
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Huit jours dans un no man's land » ?",
    options: ["Antoine Innocent", "Oswald Durand", "Hénock Trouillot", "Frankétienne"],
    correct: 3
  },
  {
    q: "« Huit jours dans un no man's land » est signé par quel auteur haïtien ?",
    options: ["Frankétienne", "Windsor Bellegarde", "René Philoctète", "Demesvar Delorme"],
    correct: 0
  },
  {
    q: "Quel titre figure dans la bibliographie de Joujou Turenne ?",
    options: ["Vieilles chansons", "L'Heure hybride", "L'Amour oui. La mort non", "Contes et légendes d'Haïti"],
    correct: 3
  },
  {
    q: "L'œuvre « La mémoire aux abois » a été écrite par :",
    options: ["Ignace Nau", "Joujou Turenne", "Évelyne Trouillot", "Lyonel Trouillot"],
    correct: 2
  },
  {
    q: "« Saison de porcs » compte parmi les œuvres de quel auteur ?",
    options: ["Gary Victor", "Jacques Roumain", "Frankétienne", "Davertige"],
    correct: 0
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « L'Héritage colonial en Haïti » ?",
    options: ["Anthony Phelps", "Placide David", "Marie Vieux-Chauvet", "René Philoctète"],
    correct: 1
  },
  {
    q: "« La Blanche Négresse » est signé par quel auteur haïtien ?",
    options: ["Jean-Claude Fignolé", "Serge Legagneur", "Dany Laferrière", "Cléante Valcin"],
    correct: 3
  },
  {
    q: "L'œuvre « Désirée Congo » a été écrite par :",
    options: ["Suzanne Comhaire-Sylvain", "Évelyne Trouillot", "Marie-Alice Théard", "Gérard Étienne"],
    correct: 1
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Nouveaux poèmes » ?",
    options: ["James Noël", "Etzer Vilaire", "Lyonel Trouillot", "Jean Métellus"],
    correct: 1
  },
  {
    q: "Qui a publié le livre « Rires et Pleurs » ?",
    options: ["Placide David", "Georges Sylvain", "Oswald Durand", "Liliane Devieux-Dehoux"],
    correct: 2
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Thérèse en mille morceaux » ?",
    options: ["Oswald Durand", "Lyonel Trouillot", "Marvin Victor", "Gary Victor"],
    correct: 1
  },
  {
    q: "L'œuvre « Épisode de la Révolution » a été écrite par :",
    options: ["Jean Métellus", "Frankétienne", "Kettly Mars", "Ignace Nau"],
    correct: 3
  },
  {
    q: "De quelle plume est issue l'œuvre « Rue des pas perdus » ?",
    options: ["Pradel Pompilus", "Suzanne Comhaire-Sylvain", "Lyonel Trouillot", "Néhémy Pierre-Dahomey"],
    correct: 2
  },
  {
    q: "Quel écrivain haïtien a écrit « L'Amour oui. La mort non » ?",
    options: ["Syto Cavé", "Liliane Devieux-Dehoux", "Demesvar Delorme", "Évelyne Trouillot"],
    correct: 1
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Krik? Krak! » ?",
    options: ["Makenzy Orcel", "Edwidge Danticat", "Guy Régis Jr", "Isnardin Vieux"],
    correct: 1
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Rhapsodie sale » ?",
    options: ["Marie-Célie Agnant", "Jean D'Amérique", "Davertige", "Carl Brouard"],
    correct: 1
  },
  {
    q: "À qui doit-on l'œuvre littéraire « De Saint-Domingue à Haïti » ?",
    options: ["Jean Price-Mars", "Jean-Euphèle Milcé", "Paula Clermont Péan", "Marie Vieux-Chauvet"],
    correct: 0
  },
  {
    q: "Retrouvez l'auteur de « Les Blancs de mémoire » parmi ces propositions :",
    options: ["Louis Joseph Janvier", "Georges Anglade", "Jacques Roumain", "Paula Clermont Péan"],
    correct: 1
  },
  {
    q: "« Maître-Minuit » est signé par quel auteur haïtien ?",
    options: ["Makenzy Orcel", "Davertige", "Charles Moravia", "Jean-Claude Bajeux"],
    correct: 0
  },
  {
    q: "Qui a publié le livre « Bonjour et adieu à la négritude » ?",
    options: ["Jean-Claude Bajeux", "René Depestre", "Émile Roumer", "Anthony Phelps"],
    correct: 1
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Bonjour et adieu à la négritude » ?",
    options: ["Placide David", "René Depestre", "Dany Laferrière", "Carl Brouard"],
    correct: 1
  },
  {
    q: "Quel écrivain haïtien a écrit « Le Testament des solitudes » ?",
    options: ["Fresnel Sylvestre", "René Depestre", "Suzanne Comhaire-Sylvain", "Emmelie Prophète"],
    correct: 3
  },
  {
    q: "Le livre « Textes interdits » est dû à la plume de :",
    options: ["Antoine Innocent", "Jean-Claude Bajeux", "Josaphat-Robert Large", "Serge Legagneur"],
    correct: 3
  },
  {
    q: "L'œuvre « L'Espace d'un cillement » a été écrite par :",
    options: ["Carl Brouard", "Frédéric Marcelin", "Makenzy Orcel", "Jacques Stephen Alexis"],
    correct: 3
  },
  {
    q: "« Les Possédés de la pleine lune » a été publié(e) par quel écrivain haïtien ?",
    options: ["Jean-Claude Fignolé", "Louis-Philippe Dalembert", "Frankétienne", "Hénock Trouillot"],
    correct: 0
  },
  {
    q: "L'écrivain(e) Émile Roumer est célèbre pour avoir publié :",
    options: ["Manhattan Blues", "Le Qui-vive", "Poèmes d'Haïti et de France", "Ainsi parla l'oncle"],
    correct: 2
  },
  {
    q: "Fresnel Sylvestre a notamment donné naissance à quelle œuvre ?",
    options: ["Un amour à trois temps", "Thémistocle-Épaminondas Labasterre", "Huit jours dans un no man's land", "Écrivains haïtiens"],
    correct: 0
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Manuel d'histoire d'Haïti » ?",
    options: ["Justin Chrysostome Dorsainvil", "René Depestre", "Paula Clermont Péan", "Georges Sylvain"],
    correct: 0
  },
  {
    q: "Quel ouvrage a été publié par Serge Legagneur ?",
    options: ["Cric? Crac!", "Les Fantoches", "L'Héritage colonial en Haïti", "Textes interdits"],
    correct: 3
  },
  {
    q: "Qui a publié le livre « Saison de porcs » ?",
    options: ["Marie-Célie Agnant", "Placide David", "Marie-Thérèse Colimon-Hall", "Gary Victor"],
    correct: 3
  },
  {
    q: "Quel ouvrage a été publié par Etzer Vilaire ?",
    options: ["Nouveaux poèmes", "Le Qui-vive", "Amour, Colère et Folie", "Le Cri de l'oiseau rouge"],
    correct: 0
  },
  {
    q: "Quel écrivain haïtien a écrit « Poèmes d'Haïti et de France » ?",
    options: ["Émile Roumer", "Jean-Claude Fignolé", "Massillon Coicou", "Louis Joseph Janvier"],
    correct: 0
  },
  {
    q: "De quelle plume est issue l'œuvre « L'Espace d'un cillement » ?",
    options: ["Jacques Stephen Alexis", "Lyonel Trouillot", "Émile Ollivier", "Alibée Féry"],
    correct: 0
  },
  {
    q: "Le livre « Thémistocle-Épaminondas Labasterre » est dû à la plume de :",
    options: ["Jean-Claude Bajeux", "Frédéric Marcelin", "Josaphat-Robert Large", "Jean Métellus"],
    correct: 1
  },
  {
    q: "« Kasalé » est signé par quel auteur haïtien ?",
    options: ["Carl Brouard", "Kettly Mars", "Justin Chrysostome Dorsainvil", "Edwidge Danticat"],
    correct: 1
  },
  {
    q: "Qui a publié le livre « Le Conditionnel » ?",
    options: ["Faubert Bolivar", "Jean-Robert Léonidas", "Anthony Phelps", "Jean Métellus"],
    correct: 2
  },
  {
    q: "À qui doit-on l'œuvre littéraire « La Famille Vortex » ?",
    options: ["Anténor Firmin", "Jean Métellus", "Emmelie Prophète", "Justin Lhérisson"],
    correct: 1
  },
  {
    q: "Qui a publié le livre « Le Nègre crucifié » ?",
    options: ["Marie Vieux-Chauvet", "Gérard Étienne", "Lyonel Trouillot", "Roussan Camille"],
    correct: 1
  },
  {
    q: "Quel écrivain haïtien a écrit « Le Trou du souffleur » ?",
    options: ["Jean-Claude Charles", "Georges Castera", "Léon Laleau", "Kettly Mars"],
    correct: 1
  },
  {
    q: "De quelle plume est issue l'œuvre « Douces déroutes » ?",
    options: ["Jean Métellus", "Jacques Stephen Alexis", "Edwidge Danticat", "Yanick Lahens"],
    correct: 3
  },
  {
    q: "« Impasse Dignité » compte parmi les œuvres de quel auteur ?",
    options: ["James Noël", "Syto Cavé", "Emmelie Prophète", "Etzer Vilaire"],
    correct: 2
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Évelyne Trouillot ?",
    options: ["Les Fantoches", "Le Livre d'Emma", "Rhapsodie sale", "La mémoire aux abois"],
    correct: 3
  },
  {
    q: "Gary Klang a notamment donné naissance à quelle œuvre ?",
    options: ["Guillaume et Nathalie", "Encre allègre", "Haïti, terre mystique", "Rhapsodie sale"],
    correct: 2
  },
  {
    q: "Retrouvez l'auteur de « Rue des pas perdus » parmi ces propositions :",
    options: ["Lyonel Trouillot", "Tertulien Guilbaud", "René Philoctète", "Émile Roumer"],
    correct: 0
  },
  {
    q: "Quel nom d'auteur associez-vous à « L'Énigme du retour » ?",
    options: ["Justin Lhérisson", "Marie-Thérèse Colimon-Hall", "Marie Vieux-Chauvet", "Dany Laferrière"],
    correct: 3
  },
  {
    q: "« Les Immortelles » est signé par quel auteur haïtien ?",
    options: ["Lyonel Trouillot", "Josaphat-Robert Large", "Ignace Nau", "Makenzy Orcel"],
    correct: 3
  },
  {
    q: "« Thémistocle-Épaminondas Labasterre » est signé par quel auteur haïtien ?",
    options: ["Jean D'Amérique", "Frédéric Marcelin", "Faubert Bolivar", "Yanick Lahens"],
    correct: 1
  },
  {
    q: "« Mes années Duvalier » a été publié(e) par quel écrivain haïtien ?",
    options: ["Marie-Alice Théard", "René Philoctète", "Jacques Roumain", "Gérard Étienne"],
    correct: 0
  },
  {
    q: "Le livre « L'Oiseau schizophone » est dû à la plume de :",
    options: ["Charles Moravia", "Frankétienne", "Émile Ollivier", "Kettly Mars"],
    correct: 1
  },
  {
    q: "Quel écrivain haïtien a écrit « Comment faire l'amour avec un Nègre sans se fatiguer » ?",
    options: ["Roland Morisseau", "Justin Chrysostome Dorsainvil", "Dany Laferrière", "Fernand Hibbert"],
    correct: 2
  },
  {
    q: "Retrouvez l'auteur de « Boulevard Baie des Anges » parmi ces propositions :",
    options: ["Néhémy Pierre-Dahomey", "Marie Vieux-Chauvet", "Josaphat-Robert Large", "Liliane Devieux-Dehoux"],
    correct: 0
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Saison de porcs » ?",
    options: ["Faubert Bolivar", "Gary Klang", "Gary Victor", "Émile Roumer"],
    correct: 2
  },
  {
    q: "Quel nom d'auteur associez-vous à « Maître-Minuit » ?",
    options: ["Jean-Robert Léonidas", "Makenzy Orcel", "Ida Faubert", "Carl Brouard"],
    correct: 1
  },
  {
    q: "« Restavec » a été publié(e) par quel écrivain haïtien ?",
    options: ["Jean-Robert Cadet", "Suzanne Comhaire-Sylvain", "Ignace Nau", "Marie-Alice Théard"],
    correct: 0
  },
  {
    q: "« Rêver debout » a été publié(e) par quel écrivain haïtien ?",
    options: ["René Depestre", "Jean-Claude Fignolé", "Gary Victor", "Roland Morisseau"],
    correct: 3
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Amour, Colère et Folie » ?",
    options: ["Frédéric Marcelin", "Jean-Robert Léonidas", "Marie Vieux-Chauvet", "Justin Lhérisson"],
    correct: 2
  },
  {
    q: "Quel titre figure dans la bibliographie de Stanley Péan ?",
    options: ["Pages retrouvées", "La Plage des songes", "La Famille Vortex", "Romulus"],
    correct: 1
  },
  {
    q: "Qui a publié le livre « Un amour à trois temps » ?",
    options: ["Fresnel Sylvestre", "Demesvar Delorme", "Jean-Euphèle Milcé", "Paula Clermont Péan"],
    correct: 0
  },
  {
    q: "Quel titre figure dans la bibliographie de Gary Klang ?",
    options: ["Rêver debout", "Les Dix hommes noirs", "Les Contes haïtiens", "Haïti, terre mystique"],
    correct: 3
  },
  {
    q: "Qui a publié le livre « Poésies nationales » ?",
    options: ["Massillon Coicou", "Jean-Claude Fignolé", "Antoine Innocent", "Jean-Claude Charles"],
    correct: 0
  },
  {
    q: "On doit à la plume de Antoine Innocent l'œuvre suivante :",
    options: ["Dezafi", "L'Amour oui. La mort non", "Poésies nationales", "Mimola"],
    correct: 3
  },
  {
    q: "« Le Qui-vive » compte parmi les œuvres de quel auteur ?",
    options: ["Antoine Innocent", "Hénock Trouillot", "Dany Laferrière", "Syto Cavé"],
    correct: 3
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Liliane Devieux-Dehoux ?",
    options: ["Thérèse en mille morceaux", "L'Amour oui. La mort non", "Guillaume et Nathalie", "L'Autre Face de la mer"],
    correct: 1
  },
  {
    q: "Identifiez l'œuvre écrite par Anténor Firmin :",
    options: ["Les Fantoches", "De l'égalité des races humaines", "Rosalie l'infâme", "Saison de porcs"],
    correct: 1
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Le Cri de l'oiseau rouge » ?",
    options: ["Jacques Roumain", "Ignace Nau", "Edwidge Danticat", "Marie-Thérèse Colimon-Hall"],
    correct: 2
  },
  {
    q: "Identifiez l'œuvre écrite par Roland Morisseau :",
    options: ["Rêver debout", "Vers le sud", "Les Blancs de mémoire", "Ultravocal"],
    correct: 0
  },
  {
    q: "« Le Trou du souffleur » compte parmi les œuvres de quel auteur ?",
    options: ["René Philoctète", "Lyonel Trouillot", "Jean-Robert Cadet", "Georges Castera"],
    correct: 3
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Nadine Magloire ?",
    options: ["Le Mal de vivre", "Jacques Roche, la vie entière", "Mimola", "Impasse Dignité"],
    correct: 0
  },
  {
    q: "Quel nom d'auteur associez-vous à « Moi, fardeau inhérent » ?",
    options: ["Émile Ollivier", "Stanley Péan", "Guy Régis Jr", "Antoine Innocent"],
    correct: 2
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Mon pays que voici » ?",
    options: ["Georges Castera", "Syto Cavé", "Stanley Péan", "Anthony Phelps"],
    correct: 3
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Le Mal de vivre » ?",
    options: ["Yanick Lahens", "Georges Castera", "Louis-Philippe Dalembert", "Nadine Magloire"],
    correct: 3
  },
  {
    q: "Quel nom d'auteur associez-vous à « Séna » ?",
    options: ["Jean Métellus", "Jean-Claude Charles", "Fernand Hibbert", "Émile Ollivier"],
    correct: 2
  },
  {
    q: "Le livre « La Plage des songes » est dû à la plume de :",
    options: ["Jean-Robert Cadet", "Rodney Saint-Éloi", "Stanley Péan", "Roussan Camille"],
    correct: 2
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Jean-Robert Cadet ?",
    options: ["Le Choc", "Thérèse en mille morceaux", "Restavec", "Une eau-forte"],
    correct: 2
  },
  {
    q: "Quel nom d'auteur associez-vous à « La République d'Haïti et ses visiteurs » ?",
    options: ["Josaphat-Robert Large", "Louis Joseph Janvier", "Georges Sylvain", "Demesvar Delorme"],
    correct: 1
  },
  {
    q: "« La Montagne ensorcelée » a été publié(e) par quel écrivain haïtien ?",
    options: ["Jacques Roumain", "Jean-Claude Charles", "Antoine Innocent", "Gary Klang"],
    correct: 0
  },
  {
    q: "« Gouverneurs de la rosée » compte parmi les œuvres de quel auteur ?",
    options: ["Joujou Turenne", "Jacques Roumain", "Louis-Philippe Dalembert", "Roussan Camille"],
    correct: 1
  },
  {
    q: "Quel écrivain haïtien a écrit « Je suis vivant » ?",
    options: ["Kettly Mars", "Fernand Hibbert", "Jacques Roumain", "Alibée Féry"],
    correct: 0
  },
  {
    q: "L'œuvre « Haïti kenbe la ! » a été écrite par :",
    options: ["Rodney Saint-Éloi", "Dany Laferrière", "Frédéric Marcelin", "Kettly Mars"],
    correct: 0
  },
  {
    q: "L'œuvre « Mon pays que voici » a été écrite par :",
    options: ["Jean Price-Mars", "Paula Clermont Péan", "Anthony Phelps", "Dany Laferrière"],
    correct: 2
  },
  {
    q: "« Le bout du monde est une fenêtre » a été publié(e) par quel écrivain haïtien ?",
    options: ["Yanick Lahens", "Jean-Claude Fignolé", "Emmelie Prophète", "Carl Brouard"],
    correct: 2
  },
  {
    q: "Retrouvez l'auteur de « Un Arc-en-ciel pour l'occident chrétien » parmi ces propositions :",
    options: ["Jean Métellus", "Josaphat-Robert Large", "René Depestre", "Anténor Firmin"],
    correct: 2
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Les Immortelles » ?",
    options: ["Carl Brouard", "Anthony Phelps", "Dany Laferrière", "Makenzy Orcel"],
    correct: 3
  },
  {
    q: "Identifiez l'œuvre écrite par Suzanne Comhaire-Sylvain :",
    options: ["Milwaukee Blues", "Le Testament des solitudes", "Les Contes haïtiens", "Alléluia pour une femme-jardin"],
    correct: 2
  },
  {
    q: "Retrouvez l'auteur de « Un amour à trois temps » parmi ces propositions :",
    options: ["Fernand Hibbert", "Gérard Étienne", "Fresnel Sylvestre", "Jean-Claude Charles"],
    correct: 2
  },
  {
    q: "« Mon pays que voici » est signé par quel auteur haïtien ?",
    options: ["Anthony Phelps", "Charles Moravia", "Hénock Trouillot", "Roussan Camille"],
    correct: 0
  },
  {
    q: "Retrouvez l'auteur de « La Couleur de l'aube » parmi ces propositions :",
    options: ["Charles Moravia", "Anthony Phelps", "Yanick Lahens", "Émile Roumer"],
    correct: 2
  },
  {
    q: "L'écrivain(e) Placide David est célèbre pour avoir publié :",
    options: ["La Récolte douce des larmes", "Ainsi parla l'oncle", "Le Trou du souffleur", "L'Héritage colonial en Haïti"],
    correct: 3
  },
  {
    q: "Quel livre porte la signature de Isnardin Vieux ?",
    options: ["Le Roman de l'occupation", "Désirée Congo", "L'Alphabet des nuits", "Pages retrouvées"],
    correct: 0
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Assaut à la nuit » ?",
    options: ["Marvin Victor", "Roussan Camille", "Paula Clermont Péan", "Ignace Nau"],
    correct: 1
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Un Arc-en-ciel pour l'occident chrétien » ?",
    options: ["René Depestre", "Fresnel Sylvestre", "James Noël", "Ida Faubert"],
    correct: 0
  },
  {
    q: "Le livre « Anacaona » est dû à la plume de :",
    options: ["Jean Métellus", "Fernand Hibbert", "Marie Vieux-Chauvet", "Suzanne Comhaire-Sylvain"],
    correct: 0
  },
  {
    q: "« Des fleurs pour les héros » compte parmi les œuvres de quel auteur ?",
    options: ["Anthony Phelps", "Charles Moravia", "Frédéric Marcelin", "Frankétienne"],
    correct: 0
  },
  {
    q: "« Les Villages de Dieu » est signé par quel auteur haïtien ?",
    options: ["Josaphat-Robert Large", "Michel Soukar", "Edwidge Danticat", "Emmelie Prophète"],
    correct: 3
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Justin Chrysostome Dorsainvil ?",
    options: ["Contes et légendes d'Haïti", "Manuel d'histoire d'Haïti", "Épisode de la Révolution", "Choucoune"],
    correct: 1
  },
  {
    q: "Le livre « L'Heure hybride » est dû à la plume de :",
    options: ["Gérard Étienne", "Yanick Lahens", "Kettly Mars", "Faubert Bolivar"],
    correct: 2
  },
  {
    q: "Parmi ces titres, lequel est signé Liliane Devieux-Dehoux ?",
    options: ["L'Amour oui. La mort non", "Le Mal de terre", "Bonjour et adieu à la négritude", "La Famille des Pitite-Caille"],
    correct: 0
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Josaphat-Robert Large ?",
    options: ["Écrivains haïtiens", "Les Étrangers de la maison", "Bicentenaire", "Dessalines ou le sang du Pont-Rouge"],
    correct: 1
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Désirée Congo » ?",
    options: ["Évelyne Trouillot", "Demesvar Delorme", "Placide David", "Anténor Firmin"],
    correct: 0
  },
  {
    q: "Quel ouvrage a été publié par Gary Klang ?",
    options: ["L'Heure hybride", "Haïti, terre mystique", "L'Ombre animale", "Le Mât de cocagne"],
    correct: 1
  },
  {
    q: "Quel écrivain haïtien a écrit « Rue Frontière » ?",
    options: ["Faubert Bolivar", "Gary Klang", "Makenzy Orcel", "Jean D'Amérique"],
    correct: 0
  },
  {
    q: "L'écrivain(e) Etzer Vilaire est célèbre pour avoir publié :",
    options: ["Sous le soleil d'Haïti", "Les Dix hommes noirs", "Rue Frontière", "Fils de misère"],
    correct: 1
  },
  {
    q: "« Rapatriés » est signé par quel auteur haïtien ?",
    options: ["Néhémy Pierre-Dahomey", "Jean-Euphèle Milcé", "Jean Price-Mars", "Josaphat-Robert Large"],
    correct: 0
  },
  {
    q: "« Cric? Crac! » a été publié(e) par quel écrivain haïtien ?",
    options: ["Georges Sylvain", "Évelyne Trouillot", "Michel Soukar", "Tertulien Guilbaud"],
    correct: 0
  },
  {
    q: "De quelle plume est issue l'œuvre « Bicentenaire » ?",
    options: ["Massillon Coicou", "Jean D'Amérique", "Fresnel Sylvestre", "Lyonel Trouillot"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Compère Général Soleil » ?",
    options: ["Émile Ollivier", "Justin Chrysostome Dorsainvil", "Stanley Péan", "Jacques Stephen Alexis"],
    correct: 3
  },
  {
    q: "L'écrivain(e) Pradel Pompilus est célèbre pour avoir publié :",
    options: ["Francesca", "Bicentenaire", "La Dot de Sara", "Manuel illustré d'histoire de la littérature haïtienne"],
    correct: 3
  },
  {
    q: "Quelle est l'œuvre de Placide David parmi cette liste ?",
    options: ["L'Héritage colonial en Haïti", "Contes et légendes d'Haïti", "L'Autre Face de la mer", "Adieu, mon frère"],
    correct: 0
  },
  {
    q: "Qui a publié le livre « Le Peuple des terres mêlées » ?",
    options: ["Hénock Trouillot", "Charles Moravia", "René Philoctète", "Alibée Féry"],
    correct: 2
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Amour, Colère et Folie » ?",
    options: ["Dany Laferrière", "Justin Chrysostome Dorsainvil", "Michel Soukar", "Marie Vieux-Chauvet"],
    correct: 3
  },
  {
    q: "L'œuvre « Zoune chez sa ninnaine » a été écrite par :",
    options: ["Etzer Vilaire", "Makenzy Orcel", "Justin Lhérisson", "Évelyne Trouillot"],
    correct: 2
  },
  {
    q: "Quel ouvrage a été publié par Jean-Robert Cadet ?",
    options: ["De l'égalité des races humaines", "Francesca", "Restavec", "Thérèse en mille morceaux"],
    correct: 2
  },
  {
    q: "De quelle plume est issue l'œuvre « Le Mal de terre » ?",
    options: ["Alibée Féry", "Jacques Stephen Alexis", "Néhémy Pierre-Dahomey", "Paula Clermont Péan"],
    correct: 3
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « La République d'Haïti et ses visiteurs » ?",
    options: ["Charles Moravia", "Georges Sylvain", "Serge Legagneur", "Louis Joseph Janvier"],
    correct: 3
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Écrit sur du ruban rose » ?",
    options: ["Isnardin Vieux", "Carl Brouard", "Rodney Saint-Éloi", "Edwidge Danticat"],
    correct: 1
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Silhouettes de nègres et de négrophiles » ?",
    options: ["Jean Price-Mars", "Faubert Bolivar", "Serge Legagneur", "René Philoctète"],
    correct: 0
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Placide David ?",
    options: ["L'Héritage colonial en Haïti", "Restavec", "Vers le sud", "Les Thazar"],
    correct: 0
  },
  {
    q: "L'œuvre « Les Rapaces » a été écrite par :",
    options: ["Gary Klang", "Marie Vieux-Chauvet", "Lyonel Trouillot", "Louis-Philippe Dalembert"],
    correct: 1
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Joujou Turenne ?",
    options: ["Le Qui-vive", "Sous le soleil d'Haïti", "L'Oiseau schizophone", "Contes et légendes d'Haïti"],
    correct: 3
  },
  {
    q: "On doit à la plume de Joujou Turenne l'œuvre suivante :",
    options: ["Alléluia pour une femme-jardin", "Les Contes haïtiens", "Contes et légendes d'Haïti", "De l'égalité des races humaines"],
    correct: 2
  },
  {
    q: "Parmi ces titres, lequel est signé Anténor Firmin ?",
    options: ["Zombi Blues", "Écrivains haïtiens", "De l'égalité des races humaines", "Sous le soleil d'Haïti"],
    correct: 2
  },
  {
    q: "« L'Autre Face de la mer » a été publié(e) par quel écrivain haïtien ?",
    options: ["Louis-Philippe Dalembert", "Jean-Claude Fignolé", "René Philoctète", "Josaphat-Robert Large"],
    correct: 0
  },
  {
    q: "Retrouvez l'auteur de « Bain de lune » parmi ces propositions :",
    options: ["Jean-Claude Fignolé", "Marvin Victor", "Yanick Lahens", "James Noël"],
    correct: 2
  },
  {
    q: "Quel nom d'auteur associez-vous à « Poèmes d'Haïti et de France » ?",
    options: ["Syto Cavé", "Émile Roumer", "Jacques Stephen Alexis", "Nadine Magloire"],
    correct: 1
  },
  {
    q: "Retrouvez l'auteur de « Séna » parmi ces propositions :",
    options: ["Fernand Hibbert", "Justin Lhérisson", "Michel Soukar", "Marie-Alice Théard"],
    correct: 0
  },
  {
    q: "Qui a publié le livre « À l'angle des rues parallèles » ?",
    options: ["Marie-Célie Agnant", "Gary Victor", "Jean-Robert Cadet", "Pradel Pompilus"],
    correct: 1
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Massillon Coicou ?",
    options: ["Poésies nationales", "Ferdinand je suis à Paris", "Gouverneurs de la rosée", "Écrit sur du ruban rose"],
    correct: 0
  },
  {
    q: "Quel écrivain haïtien a écrit « La Belle Amour humaine » ?",
    options: ["Georges Anglade", "Lyonel Trouillot", "Georges Castera", "Georges Sylvain"],
    correct: 1
  },
  {
    q: "« L'Heure hybride » compte parmi les œuvres de quel auteur ?",
    options: ["Kettly Mars", "Syto Cavé", "James Noël", "Léon Laleau"],
    correct: 0
  },
  {
    q: "Quel écrivain haïtien a écrit « L'Empereur Dessalines » ?",
    options: ["Hénock Trouillot", "Massillon Coicou", "Jean Métellus", "Nadine Magloire"],
    correct: 1
  },
  {
    q: "Qui a publié le livre « Mur Méditerranée » ?",
    options: ["Gérard Étienne", "Jean-Robert Léonidas", "Pradel Pompilus", "Louis-Philippe Dalembert"],
    correct: 3
  },
  {
    q: "Le livre « Adieu, mon frère » est dû à la plume de :",
    options: ["Isnardin Vieux", "Stanley Péan", "Edwidge Danticat", "Justin Lhérisson"],
    correct: 2
  },
  {
    q: "Quel livre porte la signature de Liliane Devieux-Dehoux ?",
    options: ["La Danse sur le volcan", "L'Amour oui. La mort non", "Les Thazar", "La Couleur de l'aube"],
    correct: 1
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Serge Legagneur ?",
    options: ["Textes interdits", "Les Contes haïtiens", "La Récolte douce des larmes", "Restavec"],
    correct: 0
  },
  {
    q: "Quel ouvrage a été publié par Émile Roumer ?",
    options: ["Poèmes d'Haïti et de France", "Le Nègre crucifié", "Théâtre", "La Récolte douce des larmes"],
    correct: 0
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Michel Soukar ?",
    options: ["Le Fusil et la croix", "Le Lambi", "Le Nègre crucifié", "Le Manuscrit de mon ami"],
    correct: 0
  },
  {
    q: "Identifiez l'œuvre écrite par Émile Roumer :",
    options: ["Le Mal de terre", "Poèmes d'Haïti et de France", "À l'angle des rues parallèles", "Un Arc-en-ciel pour l'occident chrétien"],
    correct: 1
  },
  {
    q: "De quelle plume est issue l'œuvre « L'Alphabet des nuits » ?",
    options: ["Jean-Euphèle Milcé", "Windsor Bellegarde", "Oswald Durand", "Makenzy Orcel"],
    correct: 0
  },
  {
    q: "« Les Blancs de mémoire » est signé par quel auteur haïtien ?",
    options: ["Émile Ollivier", "Léon Laleau", "Georges Anglade", "Roland Morisseau"],
    correct: 2
  },
  {
    q: "Quel écrivain haïtien a écrit « Les Possédés de la pleine lune » ?",
    options: ["Syto Cavé", "Cléante Valcin", "Jean-Claude Fignolé", "Anthony Phelps"],
    correct: 2
  },
  {
    q: "« Manuel d'histoire d'Haïti » compte parmi les œuvres de quel auteur ?",
    options: ["Stanley Péan", "Jean-Claude Bajeux", "Justin Chrysostome Dorsainvil", "Suzanne Comhaire-Sylvain"],
    correct: 2
  },
  {
    q: "Quel nom d'auteur associez-vous à « Écrit sur du ruban rose » ?",
    options: ["Georges Anglade", "Oswald Durand", "Windsor Bellegarde", "Carl Brouard"],
    correct: 3
  },
  {
    q: "« Avant que les ombres s'effacent » est signé par quel auteur haïtien ?",
    options: ["Louis-Philippe Dalembert", "Antoine Innocent", "Placide David", "Jean-Robert Léonidas"],
    correct: 0
  },
  {
    q: "L'œuvre « Les Villages de Dieu » a été écrite par :",
    options: ["Joujou Turenne", "Pradel Pompilus", "Emmelie Prophète", "Néhémy Pierre-Dahomey"],
    correct: 2
  },
  {
    q: "De quelle plume est issue l'œuvre « De l'égalité des races humaines » ?",
    options: ["Massillon Coicou", "Alibée Féry", "Anténor Firmin", "Louis-Philippe Dalembert"],
    correct: 2
  },
  {
    q: "« La Couleur de l'aube » est signé par quel auteur haïtien ?",
    options: ["Marie-Alice Théard", "Yanick Lahens", "René Philoctète", "Massillon Coicou"],
    correct: 1
  },
  {
    q: "Retrouvez l'auteur de « L'Énigme du retour » parmi ces propositions :",
    options: ["Dany Laferrière", "Yanick Lahens", "Guy Régis Jr", "Josaphat-Robert Large"],
    correct: 0
  },
  {
    q: "« Les Immortelles » compte parmi les œuvres de quel auteur ?",
    options: ["Nadine Magloire", "Fresnel Sylvestre", "Isnardin Vieux", "Makenzy Orcel"],
    correct: 3
  },
  {
    q: "Quel livre porte la signature de Yanick Lahens ?",
    options: ["Le Peuple des terres mêlées", "Le Mât de cocagne", "Bain de lune", "Bonjour et adieu à la négritude"],
    correct: 2
  },
  {
    q: "Le livre « Le Lambi » est dû à la plume de :",
    options: ["Évelyne Trouillot", "Paula Clermont Péan", "Georges Anglade", "Ignace Nau"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Rosalie l'infâme » ?",
    options: ["Ignace Nau", "Jean Métellus", "Edwidge Danticat", "Évelyne Trouillot"],
    correct: 3
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Le Fusil et la croix » ?",
    options: ["Kettly Mars", "Michel Soukar", "Rodney Saint-Éloi", "Jean Métellus"],
    correct: 1
  },
  {
    q: "Le livre « L'Odeur du café » est dû à la plume de :",
    options: ["Fresnel Sylvestre", "Marie-Alice Théard", "Roussan Camille", "Dany Laferrière"],
    correct: 3
  },
  {
    q: "Le livre « Le Roman de l'occupation » est dû à la plume de :",
    options: ["Isnardin Vieux", "Davertige", "Marie-Alice Théard", "Georges Sylvain"],
    correct: 0
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Impasse Dignité » ?",
    options: ["Jean-Claude Bajeux", "Edwidge Danticat", "Emmelie Prophète", "Léon Laleau"],
    correct: 2
  },
  {
    q: "Parmi ces titres, lequel est signé Placide David ?",
    options: ["L'Héritage colonial en Haïti", "Jacques Roche, la vie entière", "Le Livre d'Emma", "Moi, fardeau inhérent"],
    correct: 0
  },
  {
    q: "Le livre « L'Amour oui. La mort non » est dû à la plume de :",
    options: ["Jean-Robert Léonidas", "Frédéric Marcelin", "Liliane Devieux-Dehoux", "Serge Legagneur"],
    correct: 2
  },
  {
    q: "« Thérèse en mille morceaux » compte parmi les œuvres de quel auteur ?",
    options: ["Louis Joseph Janvier", "Justin Chrysostome Dorsainvil", "Lyonel Trouillot", "Stanley Péan"],
    correct: 2
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Romancero aux étoiles » ?",
    options: ["Évelyne Trouillot", "Jacques Stephen Alexis", "Anténor Firmin", "Michel Soukar"],
    correct: 1
  },
  {
    q: "Qui a publié le livre « Haïti kenbe la ! » ?",
    options: ["Roland Morisseau", "Rodney Saint-Éloi", "Etzer Vilaire", "Marie Vieux-Chauvet"],
    correct: 1
  },
  {
    q: "L'œuvre « Adieu, mon frère » a été écrite par :",
    options: ["Oswald Durand", "Roland Morisseau", "Évelyne Trouillot", "Edwidge Danticat"],
    correct: 3
  },
  {
    q: "Quel titre figure dans la bibliographie de Windsor Bellegarde ?",
    options: ["Passages", "Écrivains haïtiens", "La Montagne ensorcelée", "Ainsi parla l'oncle"],
    correct: 1
  },
  {
    q: "Qui a publié le livre « Cric? Crac! » ?",
    options: ["Syto Cavé", "Serge Legagneur", "Georges Sylvain", "Frankétienne"],
    correct: 2
  },
  {
    q: "« Nouveaux poèmes » est signé par quel auteur haïtien ?",
    options: ["Ida Faubert", "Etzer Vilaire", "Frankétienne", "Jean-Claude Fignolé"],
    correct: 1
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Passages » ?",
    options: ["Ida Faubert", "James Noël", "Émile Ollivier", "Isnardin Vieux"],
    correct: 2
  },
  {
    q: "Jean-Robert Léonidas est notamment l'auteur(e) de :",
    options: ["Cric? Crac!", "Île à vau-l'eau", "Vieilles chansons", "Le Cri de l'oiseau rouge"],
    correct: 1
  },
  {
    q: "Qui a publié le livre « Nouveaux poèmes » ?",
    options: ["Georges Castera", "Lyonel Trouillot", "Liliane Devieux-Dehoux", "Etzer Vilaire"],
    correct: 3
  },
  {
    q: "Quel nom d'auteur associez-vous à « Le Cri de l'oiseau rouge » ?",
    options: ["Emmelie Prophète", "Rodney Saint-Éloi", "Edwidge Danticat", "Oswald Durand"],
    correct: 2
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Les Blancs de mémoire » ?",
    options: ["Demesvar Delorme", "Georges Anglade", "Gérard Étienne", "Rodney Saint-Éloi"],
    correct: 1
  },
  {
    q: "Parmi ces titres, lequel est signé Gary Klang ?",
    options: ["Ferdinand je suis à Paris", "La Belle Amour humaine", "Les Thazar", "Haïti, terre mystique"],
    correct: 3
  },
  {
    q: "« L'Énigme du retour » a été publié(e) par quel écrivain haïtien ?",
    options: ["Dany Laferrière", "Kettly Mars", "Suzanne Comhaire-Sylvain", "Pradel Pompilus"],
    correct: 0
  },
  {
    q: "Qui a publié le livre « Alléluia pour une femme-jardin » ?",
    options: ["Fresnel Sylvestre", "René Depestre", "Jean D'Amérique", "James Noël"],
    correct: 1
  },
  {
    q: "« Musa-Paidica » compte parmi les œuvres de quel auteur ?",
    options: ["Yanick Lahens", "Guy Régis Jr", "James Noël", "Alibée Féry"],
    correct: 3
  },
  {
    q: "« Belle merveille » compte parmi les œuvres de quel auteur ?",
    options: ["Justin Lhérisson", "Faubert Bolivar", "Évelyne Trouillot", "James Noël"],
    correct: 3
  },
  {
    q: "« Romulus » compte parmi les œuvres de quel auteur ?",
    options: ["Fernand Hibbert", "Jean-Claude Fignolé", "Kettly Mars", "Placide David"],
    correct: 0
  },
  {
    q: "Quel écrivain haïtien a écrit « Le Roman de l'occupation » ?",
    options: ["Frédéric Marcelin", "Hénock Trouillot", "Georges Sylvain", "Isnardin Vieux"],
    correct: 3
  },
  {
    q: "Stanley Péan est notamment l'auteur(e) de :",
    options: ["Zombi Blues", "Rhapsodie sale", "Assaut à la nuit", "Ultravocal"],
    correct: 0
  },
  {
    q: "Le livre « Jacmel au crépuscule » est dû à la plume de :",
    options: ["Jean-Claude Fignolé", "Massillon Coicou", "Jean Métellus", "Jean-Euphèle Milcé"],
    correct: 2
  },
  {
    q: "L'œuvre « Vieilles chansons » a été écrite par :",
    options: ["Windsor Bellegarde", "Antoine Innocent", "Tertulien Guilbaud", "Jean-Euphèle Milcé"],
    correct: 2
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Le Mât de cocagne » ?",
    options: ["Demesvar Delorme", "René Depestre", "Davertige", "Jacques Roumain"],
    correct: 1
  },
  {
    q: "« Fille d'Haïti » a été publié(e) par quel écrivain haïtien ?",
    options: ["Lyonel Trouillot", "Jean D'Amérique", "Marie Vieux-Chauvet", "Windsor Bellegarde"],
    correct: 2
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Windsor Bellegarde ?",
    options: ["Écrivains haïtiens", "Mimola", "Mûr à crever", "Krik? Krak!"],
    correct: 0
  },
  {
    q: "Quel livre porte la signature de Serge Legagneur ?",
    options: ["Les Villages de Dieu", "L'Empereur Dessalines", "Textes interdits", "Les Rapaces"],
    correct: 2
  },
  {
    q: "L'œuvre « Mère-Solitude » a été écrite par :",
    options: ["Émile Ollivier", "Jacques Roumain", "Jean-Robert Cadet", "Marie Vieux-Chauvet"],
    correct: 0
  },
  {
    q: "Identifiez l'œuvre écrite par Gary Klang :",
    options: ["Musique nègre", "Alléluia pour une femme-jardin", "Théâtre", "Haïti, terre mystique"],
    correct: 3
  },
  {
    q: "De quelle plume est issue l'œuvre « Saison de porcs » ?",
    options: ["Gary Victor", "Pradel Pompilus", "Makenzy Orcel", "Joujou Turenne"],
    correct: 0
  },
  {
    q: "De quelle plume est issue l'œuvre « La Belle Amour humaine » ?",
    options: ["Lyonel Trouillot", "Charles Moravia", "Emmelie Prophète", "Etzer Vilaire"],
    correct: 0
  },
  {
    q: "Le livre « Jacques Roche, la vie entière » est dû à la plume de :",
    options: ["Rodney Saint-Éloi", "Dany Laferrière", "Roland Morisseau", "Joujou Turenne"],
    correct: 0
  },
  {
    q: "Qui a publié le livre « Dezafi » ?",
    options: ["Jean-Robert Léonidas", "Tertulien Guilbaud", "Frankétienne", "Gary Klang"],
    correct: 2
  },
  {
    q: "De quelle plume est issue l'œuvre « Assaut à la nuit » ?",
    options: ["Roussan Camille", "Jean D'Amérique", "Placide David", "Guy Régis Jr"],
    correct: 0
  },
  {
    q: "Quel nom d'auteur associez-vous à « Cœur des Îles » ?",
    options: ["Alibée Féry", "James Noël", "Jean-Robert Léonidas", "Ida Faubert"],
    correct: 3
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Fonds des Nègres » ?",
    options: ["Marie Vieux-Chauvet", "Demesvar Delorme", "Charles Moravia", "James Noël"],
    correct: 0
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Marvin Victor ?",
    options: ["Mes années Duvalier", "Désirée Congo", "Corps mêlés", "Les Dix hommes noirs"],
    correct: 2
  },
  {
    q: "Quel ouvrage a été publié par Louis Joseph Janvier ?",
    options: ["Comment faire l'amour avec un Nègre sans se fatiguer", "Le Rond-point", "Contes et légendes d'Haïti", "La République d'Haïti et ses visiteurs"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Impasse Dignité » ?",
    options: ["Alibée Féry", "Hénock Trouillot", "Emmelie Prophète", "Jean-Claude Fignolé"],
    correct: 2
  },
  {
    q: "Quel nom d'auteur associez-vous à « Mûr à crever » ?",
    options: ["Frankétienne", "Stanley Péan", "Charles Moravia", "Etzer Vilaire"],
    correct: 0
  },
  {
    q: "Retrouvez l'auteur de « Aube tranquille » parmi ces propositions :",
    options: ["Ida Faubert", "Demesvar Delorme", "Jean-Claude Fignolé", "Rodney Saint-Éloi"],
    correct: 2
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Corps mêlés » ?",
    options: ["Justin Lhérisson", "Néhémy Pierre-Dahomey", "Massillon Coicou", "Marvin Victor"],
    correct: 3
  },
  {
    q: "Quel livre porte la signature de James Noël ?",
    options: ["Mère-Solitude", "Belle merveille", "Saison de porcs", "Pages retrouvées"],
    correct: 1
  },
  {
    q: "« Mon pays que voici » a été publié(e) par quel écrivain haïtien ?",
    options: ["Hénock Trouillot", "Anthony Phelps", "Évelyne Trouillot", "Georges Castera"],
    correct: 1
  },
  {
    q: "Parmi ces titres, lequel est signé Isnardin Vieux ?",
    options: ["Le Roman de l'occupation", "La Crête-à-Pierrot", "Pays sans chapeau", "Manuel d'histoire d'Haïti"],
    correct: 0
  },
  {
    q: "Quel écrivain haïtien a écrit « Douces déroutes » ?",
    options: ["Rodney Saint-Éloi", "Oswald Durand", "Yanick Lahens", "Marvin Victor"],
    correct: 2
  },
  {
    q: "On doit à la plume de Guy Régis Jr l'œuvre suivante :",
    options: ["Les Fantoches", "Musique nègre", "La Belle Amour humaine", "Moi, fardeau inhérent"],
    correct: 3
  },
  {
    q: "Retrouvez l'auteur de « Pays sans chapeau » parmi ces propositions :",
    options: ["Josaphat-Robert Large", "Faubert Bolivar", "Jacques Stephen Alexis", "Dany Laferrière"],
    correct: 3
  },
  {
    q: "« Le Mât de cocagne » est signé par quel auteur haïtien ?",
    options: ["Hénock Trouillot", "Roland Morisseau", "Jean-Robert Cadet", "René Depestre"],
    correct: 3
  },
  {
    q: "« Pages retrouvées » a été publié(e) par quel écrivain haïtien ?",
    options: ["Frankétienne", "Jean-Claude Fignolé", "Charles Moravia", "Carl Brouard"],
    correct: 3
  },
  {
    q: "« Manuel illustré d'histoire de la littérature haïtienne » compte parmi les œuvres de quel auteur ?",
    options: ["Hénock Trouillot", "Pradel Pompilus", "Jean-Euphèle Milcé", "Makenzy Orcel"],
    correct: 1
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Réflexions diverses sur Haïti » ?",
    options: ["Demesvar Delorme", "Charles Moravia", "Frankétienne", "Roussan Camille"],
    correct: 0
  },
  {
    q: "Quel écrivain haïtien a écrit « Théâtre » ?",
    options: ["Frédéric Marcelin", "Carl Brouard", "Massillon Coicou", "Syto Cavé"],
    correct: 3
  },
  {
    q: "« Rosalie l'infâme » compte parmi les œuvres de quel auteur ?",
    options: ["Windsor Bellegarde", "Jean-Robert Léonidas", "Évelyne Trouillot", "Pradel Pompilus"],
    correct: 2
  },
  {
    q: "De quelle plume est issue l'œuvre « L'Odeur du café » ?",
    options: ["Louis Joseph Janvier", "Gary Klang", "Emmelie Prophète", "Dany Laferrière"],
    correct: 3
  },
  {
    q: "Retrouvez l'auteur de « Silhouettes de nègres et de négrophiles » parmi ces propositions :",
    options: ["Jean-Claude Bajeux", "Marie-Thérèse Colimon-Hall", "Charles Moravia", "Jean Price-Mars"],
    correct: 3
  },
  {
    q: "« Alléluia pour une femme-jardin » est signé par quel auteur haïtien ?",
    options: ["René Depestre", "Michel Soukar", "Marie-Célie Agnant", "Roland Morisseau"],
    correct: 0
  },
  {
    q: "« Île à vau-l'eau » a été publié(e) par quel écrivain haïtien ?",
    options: ["Paula Clermont Péan", "Jean-Claude Bajeux", "Lyonel Trouillot", "Jean-Robert Léonidas"],
    correct: 3
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Poésies nationales » ?",
    options: ["Jean-Claude Charles", "Massillon Coicou", "Évelyne Trouillot", "Jean D'Amérique"],
    correct: 1
  },
  {
    q: "« Passions » compte parmi les œuvres de quel auteur ?",
    options: ["Joujou Turenne", "Massillon Coicou", "Windsor Bellegarde", "Jean-Claude Fignolé"],
    correct: 1
  },
  {
    q: "Le livre « Mes années Duvalier » est dû à la plume de :",
    options: ["Yanick Lahens", "Edwidge Danticat", "Marie-Alice Théard", "Paula Clermont Péan"],
    correct: 2
  },
  {
    q: "« L'Oiseau schizophone » a été publié(e) par quel écrivain haïtien ?",
    options: ["Gary Klang", "Lyonel Trouillot", "Anténor Firmin", "Frankétienne"],
    correct: 3
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Davertige ?",
    options: ["Jacmel au crépuscule", "Mur Méditerranée", "Un amour à trois temps", "Idem"],
    correct: 3
  },
  {
    q: "L'œuvre « Le Fusil et la croix » a été écrite par :",
    options: ["Jean D'Amérique", "Josaphat-Robert Large", "Georges Anglade", "Michel Soukar"],
    correct: 3
  },
  {
    q: "Le livre « Fille d'Haïti » est dû à la plume de :",
    options: ["Georges Castera", "Yanick Lahens", "Marie Vieux-Chauvet", "René Depestre"],
    correct: 2
  },
  {
    q: "« La Récolte douce des larmes » compte parmi les œuvres de quel auteur ?",
    options: ["Georges Anglade", "Serge Legagneur", "Edwidge Danticat", "Jean Métellus"],
    correct: 2
  },
  {
    q: "Ida Faubert a notamment donné naissance à quelle œuvre ?",
    options: ["Les Blancs de mémoire", "Sous le soleil d'Haïti", "Romancero aux étoiles", "Assaut à la nuit"],
    correct: 1
  },
  {
    q: "Qui a publié le livre « Francesca » ?",
    options: ["Jean-Claude Charles", "Demesvar Delorme", "Louis-Philippe Dalembert", "Kettly Mars"],
    correct: 1
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Le Lambi » ?",
    options: ["Louis Joseph Janvier", "Marie Vieux-Chauvet", "Ignace Nau", "Jean-Robert Cadet"],
    correct: 2
  },
  {
    q: "De quelle plume est issue l'œuvre « La Vengeance de Mama » ?",
    options: ["Alibée Féry", "Frédéric Marcelin", "Marie-Célie Agnant", "Évelyne Trouillot"],
    correct: 1
  },
  {
    q: "De quelle plume est issue l'œuvre « Les Dix hommes noirs » ?",
    options: ["Davertige", "Etzer Vilaire", "Georges Sylvain", "Demesvar Delorme"],
    correct: 1
  },
  {
    q: "De quelle plume est issue l'œuvre « La Bélière Caraïbe » ?",
    options: ["Jean-Robert Cadet", "Rodney Saint-Éloi", "Anthony Phelps", "Frankétienne"],
    correct: 2
  },
  {
    q: "« Comment faire l'amour avec un Nègre sans se fatiguer » est signé par quel auteur haïtien ?",
    options: ["Jean Métellus", "Serge Legagneur", "Dany Laferrière", "Frankétienne"],
    correct: 2
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Nadine Magloire ?",
    options: ["Krik? Krak!", "Le Qui-vive", "Rue des pas perdus", "Le Mal de vivre"],
    correct: 3
  },
  {
    q: "Retrouvez l'auteur de « Guillaume et Nathalie » parmi ces propositions :",
    options: ["Roussan Camille", "Kettly Mars", "Ida Faubert", "Yanick Lahens"],
    correct: 3
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Le Lambi » ?",
    options: ["Néhémy Pierre-Dahomey", "Jean-Claude Charles", "James Noël", "Ignace Nau"],
    correct: 3
  },
  {
    q: "« Fonds des Nègres » est signé par quel auteur haïtien ?",
    options: ["Frankétienne", "René Philoctète", "Marie Vieux-Chauvet", "Tertulien Guilbaud"],
    correct: 2
  },
  {
    q: "Retrouvez l'auteur de « Musique nègre » parmi ces propositions :",
    options: ["Léon Laleau", "Isnardin Vieux", "Kettly Mars", "Pradel Pompilus"],
    correct: 0
  },
  {
    q: "Qui a publié le livre « Mon pays que voici » ?",
    options: ["Rodney Saint-Éloi", "Anthony Phelps", "Massillon Coicou", "Jacques Stephen Alexis"],
    correct: 1
  },
  {
    q: "De quelle plume est issue l'œuvre « Musique nègre » ?",
    options: ["Syto Cavé", "Louis-Philippe Dalembert", "Léon Laleau", "Marie-Alice Théard"],
    correct: 2
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Milwaukee Blues » ?",
    options: ["Isnardin Vieux", "Émile Ollivier", "Louis-Philippe Dalembert", "Paula Clermont Péan"],
    correct: 2
  },
  {
    q: "Qui a publié le livre « Choucoune » ?",
    options: ["Rodney Saint-Éloi", "Isnardin Vieux", "Oswald Durand", "Cléante Valcin"],
    correct: 2
  },
  {
    q: "L'œuvre « Clair de Manbo » a été écrite par :",
    options: ["Anthony Phelps", "Pradel Pompilus", "Jean-Claude Fignolé", "Gary Victor"],
    correct: 3
  },
  {
    q: "Quel livre porte la signature de Gary Victor ?",
    options: ["La Belle Amour humaine", "Impasse Dignité", "Je suis vivant", "Saison de porcs"],
    correct: 3
  },
  {
    q: "« Le Lambi » a été publié(e) par quel écrivain haïtien ?",
    options: ["Jean-Claude Fignolé", "Demesvar Delorme", "Fernand Hibbert", "Ignace Nau"],
    correct: 3
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Rue des pas perdus » ?",
    options: ["Joujou Turenne", "Lyonel Trouillot", "Léon Laleau", "Évelyne Trouillot"],
    correct: 1
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Cric? Crac! » ?",
    options: ["Frankétienne", "Georges Sylvain", "Jean-Euphèle Milcé", "Fresnel Sylvestre"],
    correct: 1
  },
  {
    q: "« Une somme humaine » compte parmi les œuvres de quel auteur ?",
    options: ["Placide David", "Syto Cavé", "Anténor Firmin", "Makenzy Orcel"],
    correct: 3
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Alléluia pour une femme-jardin » ?",
    options: ["Carl Brouard", "Isnardin Vieux", "René Depestre", "Georges Anglade"],
    correct: 2
  },
  {
    q: "Quel nom d'auteur associez-vous à « Mon pays que voici » ?",
    options: ["Justin Lhérisson", "Hénock Trouillot", "Anthony Phelps", "Jean-Robert Léonidas"],
    correct: 2
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Georges Anglade ?",
    options: ["La Danse sur le volcan", "Les Blancs de mémoire", "Bain de lune", "L'Ombre animale"],
    correct: 1
  },
  {
    q: "De quelle plume est issue l'œuvre « Alléluia pour une femme-jardin » ?",
    options: ["Roland Morisseau", "Emmelie Prophète", "René Depestre", "Justin Chrysostome Dorsainvil"],
    correct: 2
  },
  {
    q: "De quelle plume est issue l'œuvre « Mes années Duvalier » ?",
    options: ["Marie-Alice Théard", "Massillon Coicou", "Davertige", "Jean-Euphèle Milcé"],
    correct: 0
  },
  {
    q: "Retrouvez l'auteur de « Ainsi parla l'oncle » parmi ces propositions :",
    options: ["Justin Chrysostome Dorsainvil", "Suzanne Comhaire-Sylvain", "Yanick Lahens", "Jean Price-Mars"],
    correct: 3
  },
  {
    q: "Parmi ces titres, lequel est signé Jean-Claude Fignolé ?",
    options: ["La République d'Haïti et ses visiteurs", "Moi, Toussaint Louverture", "L'Empereur Dessalines", "La Couleur de l'aube"],
    correct: 1
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « De l'égalité des races humaines » ?",
    options: ["Anténor Firmin", "Serge Legagneur", "Paula Clermont Péan", "Georges Anglade"],
    correct: 0
  },
  {
    q: "De quelle plume est issue l'œuvre « Mosochwazi Kout Fè » ?",
    options: ["Frédéric Marcelin", "Jean-Robert Léonidas", "Jean-Claude Bajeux", "Isnardin Vieux"],
    correct: 2
  },
  {
    q: "« Une eau-forte » est signé par quel auteur haïtien ?",
    options: ["Jacques Stephen Alexis", "Jean Métellus", "Cléante Valcin", "Georges Sylvain"],
    correct: 1
  },
  {
    q: "L'œuvre « Ainsi parla l'oncle » a été écrite par :",
    options: ["Léon Laleau", "Jean Price-Mars", "Davertige", "Georges Sylvain"],
    correct: 1
  },
  {
    q: "De quelle plume est issue l'œuvre « Yanvalou pour Charlie » ?",
    options: ["Davertige", "Marvin Victor", "Jean-Euphèle Milcé", "Lyonel Trouillot"],
    correct: 3
  },
  {
    q: "« L'Année Dessalines » est signé par quel auteur haïtien ?",
    options: ["Tertulien Guilbaud", "Jean Métellus", "Marie-Célie Agnant", "Pradel Pompilus"],
    correct: 1
  },
  {
    q: "« Le Briseur de rosée » a été publié(e) par quel écrivain haïtien ?",
    options: ["Jean-Euphèle Milcé", "Edwidge Danticat", "Lyonel Trouillot", "Fresnel Sylvestre"],
    correct: 1
  },
  {
    q: "Retrouvez l'auteur de « Pages retrouvées » parmi ces propositions :",
    options: ["Liliane Devieux-Dehoux", "Jean-Claude Fignolé", "Ida Faubert", "Carl Brouard"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « La Famille Vortex » ?",
    options: ["Marie-Célie Agnant", "Jean Métellus", "Kettly Mars", "Anthony Phelps"],
    correct: 1
  },
  {
    q: "« Restavec » est signé par quel auteur haïtien ?",
    options: ["Jean Price-Mars", "Anténor Firmin", "Jean-Robert Cadet", "Jacques Roumain"],
    correct: 2
  },
  {
    q: "Identifiez l'œuvre écrite par Cléante Valcin :",
    options: ["La Vocation de l'élite", "Le Conditionnel", "La Blanche Négresse", "Hadriana dans tous mes rêves"],
    correct: 2
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Zombi Blues » ?",
    options: ["Évelyne Trouillot", "Emmelie Prophète", "Stanley Péan", "Georges Anglade"],
    correct: 2
  },
  {
    q: "« Les Possédés de la pleine lune » compte parmi les œuvres de quel auteur ?",
    options: ["Syto Cavé", "Jean-Claude Fignolé", "Marvin Victor", "Guy Régis Jr"],
    correct: 1
  },
  {
    q: "De quelle plume est issue l'œuvre « Impasse Dignité » ?",
    options: ["Marvin Victor", "Gary Klang", "Emmelie Prophète", "Marie-Thérèse Colimon-Hall"],
    correct: 2
  },
  {
    q: "Le livre « Haïti, terre mystique » est dû à la plume de :",
    options: ["Georges Castera", "Joujou Turenne", "Marie Vieux-Chauvet", "Gary Klang"],
    correct: 3
  },
  {
    q: "De quelle plume est issue l'œuvre « Pays sans chapeau » ?",
    options: ["Serge Legagneur", "Oswald Durand", "Alibée Féry", "Dany Laferrière"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Pèlentèt » ?",
    options: ["Jean-Claude Charles", "Lyonel Trouillot", "Léon Laleau", "Frankétienne"],
    correct: 3
  },
  {
    q: "Retrouvez l'auteur de « Rires et Pleurs » parmi ces propositions :",
    options: ["Jean Métellus", "Carl Brouard", "Oswald Durand", "Néhémy Pierre-Dahomey"],
    correct: 2
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Louis Joseph Janvier ?",
    options: ["La Famille Vortex", "Romancero aux étoiles", "La République d'Haïti et ses visiteurs", "Pèlentèt"],
    correct: 2
  },
  {
    q: "Retrouvez l'auteur de « Mosochwazi Kout Fè » parmi ces propositions :",
    options: ["Serge Legagneur", "Demesvar Delorme", "Jean-Claude Bajeux", "Guy Régis Jr"],
    correct: 2
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Marie-Alice Théard ?",
    options: ["Mosochwazi Kout Fè", "Soleil à coudre", "Mes années Duvalier", "Des fleurs pour les héros"],
    correct: 2
  },
  {
    q: "Retrouvez l'auteur de « Soleil à coudre » parmi ces propositions :",
    options: ["Frédéric Marcelin", "Évelyne Trouillot", "Ida Faubert", "Jean D'Amérique"],
    correct: 3
  },
  {
    q: "« Choucoune » compte parmi les œuvres de quel auteur ?",
    options: ["Oswald Durand", "Josaphat-Robert Large", "Fernand Hibbert", "Faubert Bolivar"],
    correct: 0
  },
  {
    q: "Qui a publié le livre « Ainsi parla l'oncle » ?",
    options: ["Justin Lhérisson", "Justin Chrysostome Dorsainvil", "Jean Price-Mars", "Carl Brouard"],
    correct: 2
  },
  {
    q: "« La Belle Amour humaine » a été publié(e) par quel écrivain haïtien ?",
    options: ["Justin Lhérisson", "Paula Clermont Péan", "Georges Sylvain", "Lyonel Trouillot"],
    correct: 3
  },
  {
    q: "Quel écrivain haïtien a écrit « L'Ombre animale » ?",
    options: ["Makenzy Orcel", "Justin Lhérisson", "Gary Klang", "Gary Victor"],
    correct: 0
  },
  {
    q: "« Théâtre » compte parmi les œuvres de quel auteur ?",
    options: ["Jean-Claude Bajeux", "Jean-Euphèle Milcé", "Stanley Péan", "Syto Cavé"],
    correct: 3
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Le Mal de terre » ?",
    options: ["Dany Laferrière", "Marvin Victor", "Fresnel Sylvestre", "Paula Clermont Péan"],
    correct: 3
  },
  {
    q: "On doit à la plume de Gérard Étienne l'œuvre suivante :",
    options: ["Le Nègre crucifié", "Le Sang et la Mer", "Douces déroutes", "Moi, fardeau inhérent"],
    correct: 0
  },
  {
    q: "Anténor Firmin a notamment donné naissance à quelle œuvre ?",
    options: ["De l'égalité des races humaines", "Des fleurs pour les héros", "Fonds des Nègres", "Romancero aux étoiles"],
    correct: 0
  },
  {
    q: "De quelle plume est issue l'œuvre « Rhapsodie sale » ?",
    options: ["Jean-Claude Charles", "Marie-Célie Agnant", "Gary Victor", "Jean D'Amérique"],
    correct: 3
  },
  {
    q: "Quel écrivain haïtien a écrit « Boulevard Baie des Anges » ?",
    options: ["Néhémy Pierre-Dahomey", "Serge Legagneur", "James Noël", "Guy Régis Jr"],
    correct: 0
  },
  {
    q: "Quel nom d'auteur associez-vous à « Krik? Krak! » ?",
    options: ["Jacques Roumain", "Edwidge Danticat", "René Depestre", "Néhémy Pierre-Dahomey"],
    correct: 1
  },
  {
    q: "Retrouvez l'auteur de « Gouverneurs de la rosée » parmi ces propositions :",
    options: ["Hénock Trouillot", "Rodney Saint-Éloi", "Justin Chrysostome Dorsainvil", "Jacques Roumain"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Manuel d'histoire d'Haïti » ?",
    options: ["Stanley Péan", "Justin Chrysostome Dorsainvil", "Antoine Innocent", "Ida Faubert"],
    correct: 1
  },
  {
    q: "Retrouvez l'auteur de « Épisode de la Révolution » parmi ces propositions :",
    options: ["Georges Anglade", "Jean-Claude Bajeux", "Frédéric Marcelin", "Ignace Nau"],
    correct: 3
  },
  {
    q: "L'écrivain(e) Roussan Camille est célèbre pour avoir publié :",
    options: ["Le Qui-vive", "La Crête-à-Pierrot", "Rires et Pleurs", "Assaut à la nuit"],
    correct: 3
  },
  {
    q: "Quel livre porte la signature de Roland Morisseau ?",
    options: ["Alléluia pour une femme-jardin", "Hadriana dans tous mes rêves", "Le Peuple des terres mêlées", "Rêver debout"],
    correct: 3
  },
  {
    q: "« Musique nègre » compte parmi les œuvres de quel auteur ?",
    options: ["Demesvar Delorme", "Léon Laleau", "Michel Soukar", "Tertulien Guilbaud"],
    correct: 1
  },
  {
    q: "Qui a publié le livre « Clair de Manbo » ?",
    options: ["Lyonel Trouillot", "Gary Victor", "Guy Régis Jr", "Rodney Saint-Éloi"],
    correct: 1
  },
  {
    q: "« Bonjour et adieu à la négritude » compte parmi les œuvres de quel auteur ?",
    options: ["Gary Victor", "Jean-Robert Léonidas", "René Depestre", "Hénock Trouillot"],
    correct: 2
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Poèmes d'Haïti et de France » ?",
    options: ["Fresnel Sylvestre", "Georges Castera", "Émile Roumer", "Évelyne Trouillot"],
    correct: 2
  },
  {
    q: "« L'Amour oui. La mort non » compte parmi les œuvres de quel auteur ?",
    options: ["Georges Castera", "Liliane Devieux-Dehoux", "Pradel Pompilus", "Makenzy Orcel"],
    correct: 1
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Le Qui-vive » ?",
    options: ["Syto Cavé", "Louis-Philippe Dalembert", "Louis Joseph Janvier", "Lyonel Trouillot"],
    correct: 0
  },
  {
    q: "« La mémoire aux abois » est signé par quel auteur haïtien ?",
    options: ["Émile Ollivier", "Marie-Thérèse Colimon-Hall", "Jean-Robert Cadet", "Évelyne Trouillot"],
    correct: 3
  },
  {
    q: "Roland Morisseau est notamment l'auteur(e) de :",
    options: ["La Récolte douce des larmes", "Rêver debout", "Sous le soleil d'Haïti", "Haïti, terre mystique"],
    correct: 1
  },
  {
    q: "On doit à la plume de Marie-Alice Théard l'œuvre suivante :",
    options: ["La Blanche Négresse", "L'Énigme du retour", "Boulevard Baie des Anges", "Mes années Duvalier"],
    correct: 3
  },
  {
    q: "Le livre « Les Dix hommes noirs » est dû à la plume de :",
    options: ["Placide David", "Etzer Vilaire", "Emmelie Prophète", "Carl Brouard"],
    correct: 1
  },
  {
    q: "« Rue des pas perdus » est signé par quel auteur haïtien ?",
    options: ["Lyonel Trouillot", "Jean Métellus", "James Noël", "Stanley Péan"],
    correct: 0
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Les Blancs de mémoire » ?",
    options: ["Georges Anglade", "Guy Régis Jr", "Nadine Magloire", "Serge Legagneur"],
    correct: 0
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Marie-Thérèse Colimon-Hall ?",
    options: ["Fils de misère", "Haïti kenbe la !", "Avant que les ombres s'effacent", "Zombi Blues"],
    correct: 0
  },
  {
    q: "Le livre « Le bout du monde est une fenêtre » est dû à la plume de :",
    options: ["Jean-Robert Léonidas", "Jean D'Amérique", "Justin Lhérisson", "Emmelie Prophète"],
    correct: 3
  },
  {
    q: "Quel ouvrage a été publié par Demesvar Delorme ?",
    options: ["L'Alphabet des nuits", "Le Choc", "Francesca", "Le Lambi"],
    correct: 2
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Rue des pas perdus » ?",
    options: ["Isnardin Vieux", "Jean D'Amérique", "Lyonel Trouillot", "Anthony Phelps"],
    correct: 2
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Douces déroutes » ?",
    options: ["Georges Anglade", "Marvin Victor", "Lyonel Trouillot", "Yanick Lahens"],
    correct: 3
  },
  {
    q: "De quelle plume est issue l'œuvre « De Saint-Domingue à Haïti » ?",
    options: ["Jean Price-Mars", "Cléante Valcin", "Néhémy Pierre-Dahomey", "Jean-Claude Fignolé"],
    correct: 0
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Isnardin Vieux ?",
    options: ["Ces îles qui marchent", "La Crête-à-Pierrot", "Le Roman de l'occupation", "Assaut à la nuit"],
    correct: 2
  },
  {
    q: "« Haïti kenbe la ! » est signé par quel auteur haïtien ?",
    options: ["Jean-Claude Charles", "Ida Faubert", "Rodney Saint-Éloi", "Georges Castera"],
    correct: 2
  },
  {
    q: "Quel nom d'auteur associez-vous à « Cric? Crac! » ?",
    options: ["Georges Anglade", "Jean Price-Mars", "Suzanne Comhaire-Sylvain", "Georges Sylvain"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Nouveaux poèmes » ?",
    options: ["Georges Sylvain", "Cléante Valcin", "Etzer Vilaire", "Nadine Magloire"],
    correct: 2
  },
  {
    q: "« Mûr à crever » est signé par quel auteur haïtien ?",
    options: ["Ida Faubert", "Faubert Bolivar", "Frankétienne", "Jean-Claude Charles"],
    correct: 2
  },
  {
    q: "Néhémy Pierre-Dahomey est notamment l'auteur(e) de :",
    options: ["Réflexions diverses sur Haïti", "Boulevard Baie des Anges", "L'Héritage colonial en Haïti", "Le Mât de cocagne"],
    correct: 1
  },
  {
    q: "Quel nom d'auteur associez-vous à « Le Conditionnel » ?",
    options: ["Gérard Étienne", "René Depestre", "Oswald Durand", "Anthony Phelps"],
    correct: 3
  },
  {
    q: "« Pages retrouvées » est signé par quel auteur haïtien ?",
    options: ["Carl Brouard", "René Depestre", "Yanick Lahens", "Marie-Thérèse Colimon-Hall"],
    correct: 0
  },
  {
    q: "De quelle plume est issue l'œuvre « Zoune chez sa ninnaine » ?",
    options: ["Faubert Bolivar", "Hénock Trouillot", "Justin Lhérisson", "Alibée Féry"],
    correct: 2
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Frayeur » ?",
    options: ["Anténor Firmin", "Kettly Mars", "Charles Moravia", "Jean-Robert Léonidas"],
    correct: 1
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Manhattan Blues » ?",
    options: ["Pradel Pompilus", "Jean-Claude Charles", "René Depestre", "Marie Vieux-Chauvet"],
    correct: 1
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Choucoune » ?",
    options: ["Jean Price-Mars", "Oswald Durand", "Justin Lhérisson", "Faubert Bolivar"],
    correct: 1
  },
  {
    q: "On doit à la plume de Marvin Victor l'œuvre suivante :",
    options: ["Corps mêlés", "Théâtre", "Des fleurs pour les héros", "Rosalie l'infâme"],
    correct: 0
  },
  {
    q: "« Cric? Crac! » est signé par quel auteur haïtien ?",
    options: ["Georges Sylvain", "Jean D'Amérique", "Windsor Bellegarde", "Davertige"],
    correct: 0
  },
  {
    q: "Quel nom d'auteur associez-vous à « Thémistocle-Épaminondas Labasterre » ?",
    options: ["Frédéric Marcelin", "Cléante Valcin", "Justin Lhérisson", "Jean-Claude Fignolé"],
    correct: 0
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Maître-Minuit » ?",
    options: ["Davertige", "Makenzy Orcel", "Frédéric Marcelin", "Paula Clermont Péan"],
    correct: 1
  },
  {
    q: "Qui a publié le livre « Musique nègre » ?",
    options: ["Jean Price-Mars", "Marie-Thérèse Colimon-Hall", "René Philoctète", "Léon Laleau"],
    correct: 3
  },
  {
    q: "Justin Chrysostome Dorsainvil a notamment donné naissance à quelle œuvre ?",
    options: ["Saison de porcs", "Fille d'Haïti", "La Dot de Sara", "Manuel d'histoire d'Haïti"],
    correct: 3
  },
  {
    q: "Quel nom d'auteur associez-vous à « De Saint-Domingue à Haïti » ?",
    options: ["Ignace Nau", "Josaphat-Robert Large", "Jean Price-Mars", "Emmelie Prophète"],
    correct: 2
  },
  {
    q: "Qui a publié le livre « Mûr à crever » ?",
    options: ["Frankétienne", "Marvin Victor", "Alibée Féry", "Pradel Pompilus"],
    correct: 0
  },
  {
    q: "Qui a publié le livre « Manhattan Blues » ?",
    options: ["Nadine Magloire", "Syto Cavé", "Antoine Innocent", "Jean-Claude Charles"],
    correct: 3
  },
  {
    q: "Le livre « L'Héritage colonial en Haïti » est dû à la plume de :",
    options: ["Roussan Camille", "Placide David", "Marie-Thérèse Colimon-Hall", "Lyonel Trouillot"],
    correct: 1
  },
  {
    q: "De quelle plume est issue l'œuvre « Réflexions diverses sur Haïti » ?",
    options: ["René Philoctète", "Guy Régis Jr", "Demesvar Delorme", "Justin Lhérisson"],
    correct: 2
  },
  {
    q: "À qui doit-on l'œuvre littéraire « La République d'Haïti et ses visiteurs » ?",
    options: ["Jacques Stephen Alexis", "Georges Castera", "Louis Joseph Janvier", "Dany Laferrière"],
    correct: 2
  },
  {
    q: "« Assaut à la nuit » compte parmi les œuvres de quel auteur ?",
    options: ["Demesvar Delorme", "Windsor Bellegarde", "Marie-Thérèse Colimon-Hall", "Roussan Camille"],
    correct: 3
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Roussan Camille ?",
    options: ["Treize nouvelles vaudou", "Restavec", "Assaut à la nuit", "Vieilles chansons"],
    correct: 2
  },
  {
    q: "On doit à la plume de Nadine Magloire l'œuvre suivante :",
    options: ["Manuel d'histoire d'Haïti", "Rêver debout", "Le Mal de vivre", "Manuel illustré d'histoire de la littérature haïtienne"],
    correct: 2
  },
  {
    q: "On doit à la plume de Isnardin Vieux l'œuvre suivante :",
    options: ["Saisons sauvages", "Théâtre", "Ainsi parla l'oncle", "Le Roman de l'occupation"],
    correct: 3
  },
  {
    q: "Windsor Bellegarde a notamment donné naissance à quelle œuvre ?",
    options: ["Le Mât de cocagne", "Dessalines ou le sang du Pont-Rouge", "La Montagne ensorcelée", "Écrivains haïtiens"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Moi, Toussaint Louverture » ?",
    options: ["René Depestre", "Fresnel Sylvestre", "Jean-Claude Fignolé", "Évelyne Trouillot"],
    correct: 2
  },
  {
    q: "Quel écrivain haïtien a écrit « Cœur des Îles » ?",
    options: ["Charles Moravia", "Serge Legagneur", "Faubert Bolivar", "Ida Faubert"],
    correct: 3
  },
  {
    q: "Retrouvez l'auteur de « Idem » parmi ces propositions :",
    options: ["Serge Legagneur", "Davertige", "Placide David", "Justin Lhérisson"],
    correct: 1
  },
  {
    q: "Qui a publié le livre « L'Énigme du retour » ?",
    options: ["Dany Laferrière", "Marvin Victor", "Jean Métellus", "Syto Cavé"],
    correct: 0
  },
  {
    q: "De quelle plume est issue l'œuvre « Écrit sur du ruban rose » ?",
    options: ["Carl Brouard", "Antoine Innocent", "Kettly Mars", "Louis Joseph Janvier"],
    correct: 0
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Moi, Toussaint Louverture » ?",
    options: ["Yanick Lahens", "Liliane Devieux-Dehoux", "Jean-Claude Fignolé", "Joujou Turenne"],
    correct: 2
  },
  {
    q: "Quel nom d'auteur associez-vous à « Le Roman de l'occupation » ?",
    options: ["Louis Joseph Janvier", "Isnardin Vieux", "Jacques Stephen Alexis", "Cléante Valcin"],
    correct: 1
  },
  {
    q: "Quel écrivain haïtien a écrit « Rires et Pleurs » ?",
    options: ["Emmelie Prophète", "Roussan Camille", "Oswald Durand", "Émile Ollivier"],
    correct: 2
  },
  {
    q: "Le livre « Fonds des Nègres » est dû à la plume de :",
    options: ["Marie Vieux-Chauvet", "René Depestre", "Etzer Vilaire", "Paula Clermont Péan"],
    correct: 0
  },
  {
    q: "Retrouvez l'auteur de « Île à vau-l'eau » parmi ces propositions :",
    options: ["Michel Soukar", "Jean-Robert Léonidas", "Gérard Étienne", "Jean Price-Mars"],
    correct: 1
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Épisode de la Révolution » ?",
    options: ["Ignace Nau", "Frankétienne", "Jacques Roumain", "Windsor Bellegarde"],
    correct: 0
  },
  {
    q: "« Une somme humaine » a été publié(e) par quel écrivain haïtien ?",
    options: ["Jacques Roumain", "Makenzy Orcel", "Fresnel Sylvestre", "Frédéric Marcelin"],
    correct: 1
  },
  {
    q: "On doit à la plume de Serge Legagneur l'œuvre suivante :",
    options: ["Jacques Roche, la vie entière", "Ces îles qui marchent", "Textes interdits", "Passages"],
    correct: 2
  },
  {
    q: "L'œuvre « Le Lambi » a été écrite par :",
    options: ["Ignace Nau", "Gary Victor", "Liliane Devieux-Dehoux", "Jean-Claude Fignolé"],
    correct: 0
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Les Blancs de mémoire » ?",
    options: ["Georges Anglade", "Justin Lhérisson", "Windsor Bellegarde", "Léon Laleau"],
    correct: 0
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Hadriana dans tous mes rêves » ?",
    options: ["Fresnel Sylvestre", "René Philoctète", "Néhémy Pierre-Dahomey", "René Depestre"],
    correct: 3
  },
  {
    q: "De quelle plume est issue l'œuvre « Treize nouvelles vaudou » ?",
    options: ["Gary Victor", "Jean-Robert Cadet", "Roland Morisseau", "Jean Price-Mars"],
    correct: 0
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Choucoune » ?",
    options: ["Oswald Durand", "Lyonel Trouillot", "Louis Joseph Janvier", "Gary Victor"],
    correct: 0
  },
  {
    q: "« La Montagne ensorcelée » compte parmi les œuvres de quel auteur ?",
    options: ["Jacques Roumain", "Léon Laleau", "Alibée Féry", "Georges Anglade"],
    correct: 0
  },
  {
    q: "Quel titre figure dans la bibliographie de Charles Moravia ?",
    options: ["Huit jours dans un no man's land", "Bonjour et adieu à la négritude", "Clair de Manbo", "La Crête-à-Pierrot"],
    correct: 3
  },
  {
    q: "Quel livre porte la signature de Davertige ?",
    options: ["Idem", "Le Briseur de rosée", "Adieu, mon frère", "Moi, Toussaint Louverture"],
    correct: 0
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Pages retrouvées » ?",
    options: ["Carl Brouard", "Ida Faubert", "Georges Castera", "Placide David"],
    correct: 0
  },
  {
    q: "Retrouvez l'auteur de « Théâtre » parmi ces propositions :",
    options: ["Évelyne Trouillot", "Syto Cavé", "Jean-Claude Bajeux", "Joujou Turenne"],
    correct: 1
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Jacmel au crépuscule » ?",
    options: ["Jean-Claude Charles", "Michel Soukar", "Josaphat-Robert Large", "Jean Métellus"],
    correct: 3
  },
  {
    q: "L'œuvre « Treize nouvelles vaudou » a été écrite par :",
    options: ["Roussan Camille", "Gary Victor", "Etzer Vilaire", "Anténor Firmin"],
    correct: 1
  },
  {
    q: "« Saisons sauvages » est signé par quel auteur haïtien ?",
    options: ["Anténor Firmin", "Kettly Mars", "Louis-Philippe Dalembert", "Ida Faubert"],
    correct: 1
  },
  {
    q: "Quel titre figure dans la bibliographie de Roussan Camille ?",
    options: ["Les Arbres musiciens", "Assaut à la nuit", "Ainsi parla l'oncle", "Le Manuscrit de mon ami"],
    correct: 1
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Romancero aux étoiles » ?",
    options: ["Demesvar Delorme", "Jacques Stephen Alexis", "Windsor Bellegarde", "Davertige"],
    correct: 1
  },
  {
    q: "« Les Contes haïtiens » est signé par quel auteur haïtien ?",
    options: ["Josaphat-Robert Large", "Georges Castera", "Suzanne Comhaire-Sylvain", "Davertige"],
    correct: 2
  },
  {
    q: "Quel ouvrage a été publié par Cléante Valcin ?",
    options: ["Le Briseur de rosée", "La Blanche Négresse", "Un Arc-en-ciel pour l'occident chrétien", "Les Étrangers de la maison"],
    correct: 1
  },
  {
    q: "Quel titre figure dans la bibliographie de Marie-Alice Théard ?",
    options: ["Huit jours dans un no man's land", "Amour, Colère et Folie", "Mes années Duvalier", "Nouveaux poèmes"],
    correct: 2
  },
  {
    q: "Quel écrivain haïtien a écrit « Le Lambi » ?",
    options: ["Syto Cavé", "Georges Castera", "Ignace Nau", "Jean-Claude Fignolé"],
    correct: 2
  },
  {
    q: "« L'Heure hybride » a été publié(e) par quel écrivain haïtien ?",
    options: ["Justin Lhérisson", "Kettly Mars", "Marie Vieux-Chauvet", "Davertige"],
    correct: 1
  },
  {
    q: "« Yanvalou pour Charlie » compte parmi les œuvres de quel auteur ?",
    options: ["Fresnel Sylvestre", "Lyonel Trouillot", "Antoine Innocent", "Roland Morisseau"],
    correct: 1
  },
  {
    q: "L'œuvre « Mosochwazi Kout Fè » a été écrite par :",
    options: ["James Noël", "Jean-Claude Bajeux", "Carl Brouard", "Isnardin Vieux"],
    correct: 1
  },
  {
    q: "De quelle plume est issue l'œuvre « La Plage des songes » ?",
    options: ["Frankétienne", "Davertige", "Stanley Péan", "James Noël"],
    correct: 2
  },
  {
    q: "À qui doit-on l'œuvre littéraire « La Danse sur le volcan » ?",
    options: ["René Philoctète", "Gary Klang", "Marie Vieux-Chauvet", "Gary Victor"],
    correct: 2
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Pèlentèt » ?",
    options: ["Louis-Philippe Dalembert", "Évelyne Trouillot", "Rodney Saint-Éloi", "Frankétienne"],
    correct: 3
  },
  {
    q: "L'œuvre « L'Amour oui. La mort non » a été écrite par :",
    options: ["Liliane Devieux-Dehoux", "Lyonel Trouillot", "Hénock Trouillot", "Tertulien Guilbaud"],
    correct: 0
  },
  {
    q: "Tertulien Guilbaud a notamment donné naissance à quelle œuvre ?",
    options: ["Fonds des Nègres", "Krik? Krak!", "Vieilles chansons", "Pèlentèt"],
    correct: 2
  },
  {
    q: "De quelle plume est issue l'œuvre « La Récolte douce des larmes » ?",
    options: ["Makenzy Orcel", "Yanick Lahens", "Edwidge Danticat", "Rodney Saint-Éloi"],
    correct: 2
  },
  {
    q: "« Poèmes d'Haïti et de France » est signé par quel auteur haïtien ?",
    options: ["Marie-Alice Théard", "Émile Roumer", "Davertige", "Gary Victor"],
    correct: 1
  },
  {
    q: "Ignace Nau est notamment l'auteur(e) de :",
    options: ["Le Fusil et la croix", "Un amour à trois temps", "Épisode de la Révolution", "Rosalie l'infâme"],
    correct: 2
  },
  {
    q: "Quel nom d'auteur associez-vous à « Mimola » ?",
    options: ["Antoine Innocent", "Isnardin Vieux", "Emmelie Prophète", "Kettly Mars"],
    correct: 0
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Pays sans chapeau » ?",
    options: ["Dany Laferrière", "Nadine Magloire", "Jacques Roumain", "Yanick Lahens"],
    correct: 0
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Écrit sur du ruban rose » ?",
    options: ["Faubert Bolivar", "Pradel Pompilus", "Louis Joseph Janvier", "Carl Brouard"],
    correct: 3
  },
  {
    q: "L'œuvre « Le Qui-vive » a été écrite par :",
    options: ["Frédéric Marcelin", "Alibée Féry", "Fresnel Sylvestre", "Syto Cavé"],
    correct: 3
  },
  {
    q: "Retrouvez l'auteur de « Mes années Duvalier » parmi ces propositions :",
    options: ["Carl Brouard", "Fresnel Sylvestre", "Jean-Claude Bajeux", "Marie-Alice Théard"],
    correct: 3
  },
  {
    q: "Retrouvez l'auteur de « Impasse Dignité » parmi ces propositions :",
    options: ["Davertige", "Emmelie Prophète", "Émile Ollivier", "Nadine Magloire"],
    correct: 1
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « La Vocation de l'élite » ?",
    options: ["Jean-Claude Fignolé", "Gérard Étienne", "Jean Price-Mars", "Émile Ollivier"],
    correct: 2
  },
  {
    q: "Parmi ces titres, lequel est signé Charles Moravia ?",
    options: ["La Crête-à-Pierrot", "L'Oiseau schizophone", "Le bout du monde est une fenêtre", "Les Arbres musiciens"],
    correct: 0
  },
  {
    q: "Quel nom d'auteur associez-vous à « La Crête-à-Pierrot » ?",
    options: ["Nadine Magloire", "Marie-Thérèse Colimon-Hall", "Charles Moravia", "Marie-Alice Théard"],
    correct: 2
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Je suis vivant » ?",
    options: ["Kettly Mars", "Émile Ollivier", "Frédéric Marcelin", "Évelyne Trouillot"],
    correct: 0
  },
  {
    q: "Quel titre figure dans la bibliographie de Alibée Féry ?",
    options: ["Cœur des Îles", "Mûr à crever", "Douces déroutes", "Musa-Paidica"],
    correct: 3
  },
  {
    q: "De quelle plume est issue l'œuvre « La Dot de Sara » ?",
    options: ["Demesvar Delorme", "Marie-Célie Agnant", "Stanley Péan", "Lyonel Trouillot"],
    correct: 1
  },
  {
    q: "L'œuvre « Le Mal de vivre » a été écrite par :",
    options: ["Nadine Magloire", "Jacques Roumain", "Gary Victor", "Cléante Valcin"],
    correct: 0
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « L'Autre Face de la mer » ?",
    options: ["Justin Lhérisson", "Josaphat-Robert Large", "Louis-Philippe Dalembert", "Kettly Mars"],
    correct: 2
  },
  {
    q: "Le livre « La Récolte douce des larmes » est dû à la plume de :",
    options: ["Jean Métellus", "Jacques Stephen Alexis", "Edwidge Danticat", "Michel Soukar"],
    correct: 2
  },
  {
    q: "« Les Possédés de la pleine lune » est signé par quel auteur haïtien ?",
    options: ["Justin Chrysostome Dorsainvil", "Liliane Devieux-Dehoux", "Jean-Robert Léonidas", "Jean-Claude Fignolé"],
    correct: 3
  },
  {
    q: "« Milwaukee Blues » a été publié(e) par quel écrivain haïtien ?",
    options: ["Louis-Philippe Dalembert", "James Noël", "Jean Métellus", "Néhémy Pierre-Dahomey"],
    correct: 0
  },
  {
    q: "« Belle merveille » a été publié(e) par quel écrivain haïtien ?",
    options: ["Jean-Claude Bajeux", "Dany Laferrière", "Jean Price-Mars", "James Noël"],
    correct: 3
  },
  {
    q: "Quel ouvrage a été publié par Alibée Féry ?",
    options: ["Une somme humaine", "La Belle Amour humaine", "Musa-Paidica", "Guillaume et Nathalie"],
    correct: 2
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Frayeur » ?",
    options: ["Jean Price-Mars", "Placide David", "Suzanne Comhaire-Sylvain", "Kettly Mars"],
    correct: 3
  },
  {
    q: "Georges Anglade est notamment l'auteur(e) de :",
    options: ["Rêver debout", "Le Qui-vive", "Les Blancs de mémoire", "Moi, fardeau inhérent"],
    correct: 2
  },
  {
    q: "L'écrivain(e) Antoine Innocent est célèbre pour avoir publié :",
    options: ["Mimola", "Manuel illustré d'histoire de la littérature haïtienne", "Le Nègre crucifié", "Thérèse en mille morceaux"],
    correct: 0
  },
  {
    q: "Qui a publié le livre « Rhapsodie sale » ?",
    options: ["Anténor Firmin", "Jacques Stephen Alexis", "Jean D'Amérique", "Oswald Durand"],
    correct: 2
  },
  {
    q: "Quel livre porte la signature de Tertulien Guilbaud ?",
    options: ["L'Amour oui. La mort non", "Vieilles chansons", "Amour, Colère et Folie", "Réflexions diverses sur Haïti"],
    correct: 1
  },
  {
    q: "À qui doit-on l'œuvre littéraire « L'Ombre animale » ?",
    options: ["Jean-Robert Léonidas", "Oswald Durand", "Makenzy Orcel", "Anthony Phelps"],
    correct: 2
  },
  {
    q: "Quel nom d'auteur associez-vous à « Fonds des Nègres » ?",
    options: ["Marie Vieux-Chauvet", "Nadine Magloire", "Etzer Vilaire", "Lyonel Trouillot"],
    correct: 0
  },
  {
    q: "À qui doit-on l'œuvre littéraire « La Dot de Sara » ?",
    options: ["Hénock Trouillot", "Carl Brouard", "Louis Joseph Janvier", "Marie-Célie Agnant"],
    correct: 3
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Joujou Turenne ?",
    options: ["Vieilles chansons", "Contes et légendes d'Haïti", "La Danse sur le volcan", "Fonds des Nègres"],
    correct: 1
  },
  {
    q: "« Krik? Krak! » a été publié(e) par quel écrivain haïtien ?",
    options: ["Paula Clermont Péan", "Ida Faubert", "Alibée Féry", "Edwidge Danticat"],
    correct: 3
  },
  {
    q: "Le livre « Le Qui-vive » est dû à la plume de :",
    options: ["Joujou Turenne", "Alibée Féry", "Syto Cavé", "Lyonel Trouillot"],
    correct: 2
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Adieu, mon frère » ?",
    options: ["Edwidge Danticat", "Néhémy Pierre-Dahomey", "Jean-Robert Cadet", "Stanley Péan"],
    correct: 0
  },
  {
    q: "L'œuvre « Manhattan Blues » a été écrite par :",
    options: ["Jean-Claude Charles", "Suzanne Comhaire-Sylvain", "Fernand Hibbert", "Demesvar Delorme"],
    correct: 0
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Mon pays que voici » ?",
    options: ["Anthony Phelps", "Tertulien Guilbaud", "Nadine Magloire", "Davertige"],
    correct: 0
  },
  {
    q: "Quel nom d'auteur associez-vous à « Le Lambi » ?",
    options: ["Gary Victor", "Nadine Magloire", "Liliane Devieux-Dehoux", "Ignace Nau"],
    correct: 3
  },
  {
    q: "Le livre « Le Reste du temps » est dû à la plume de :",
    options: ["Emmelie Prophète", "René Depestre", "Josaphat-Robert Large", "Léon Laleau"],
    correct: 0
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Vieilles chansons » ?",
    options: ["Placide David", "Louis-Philippe Dalembert", "Tertulien Guilbaud", "Antoine Innocent"],
    correct: 2
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Le Mal de terre » ?",
    options: ["Jean-Robert Léonidas", "Paula Clermont Péan", "Etzer Vilaire", "Jacques Stephen Alexis"],
    correct: 1
  },
  {
    q: "Retrouvez l'auteur de « Musa-Paidica » parmi ces propositions :",
    options: ["Gérard Étienne", "Antoine Innocent", "Guy Régis Jr", "Alibée Féry"],
    correct: 3
  },
  {
    q: "Quel nom d'auteur associez-vous à « La Vengeance de Mama » ?",
    options: ["Frédéric Marcelin", "Marie-Célie Agnant", "Serge Legagneur", "Paula Clermont Péan"],
    correct: 0
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Antoine Innocent ?",
    options: ["Île à vau-l'eau", "Douces déroutes", "Mimola", "Francesca"],
    correct: 2
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Placide David ?",
    options: ["L'Héritage colonial en Haïti", "Pays sans chapeau", "Jacques Roche, la vie entière", "Comment faire l'amour avec un Nègre sans se fatiguer"],
    correct: 0
  },
  {
    q: "Antoine Innocent est notamment l'auteur(e) de :",
    options: ["Mère-Solitude", "Le Mât de cocagne", "L'Odeur du café", "Mimola"],
    correct: 3
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Je suis vivant » ?",
    options: ["Carl Brouard", "Jean-Claude Bajeux", "Jean Métellus", "Kettly Mars"],
    correct: 3
  },
  {
    q: "Quel écrivain haïtien a écrit « Milwaukee Blues » ?",
    options: ["Tertulien Guilbaud", "Justin Lhérisson", "Antoine Innocent", "Louis-Philippe Dalembert"],
    correct: 3
  },
  {
    q: "Quel écrivain haïtien a écrit « L'Autre Face de la mer » ?",
    options: ["Tertulien Guilbaud", "Georges Anglade", "Louis-Philippe Dalembert", "Roussan Camille"],
    correct: 2
  },
  {
    q: "Le livre « Rue des pas perdus » est dû à la plume de :",
    options: ["Oswald Durand", "Lyonel Trouillot", "Émile Roumer", "Syto Cavé"],
    correct: 1
  },
  {
    q: "Retrouvez l'auteur de « Fonds des Nègres » parmi ces propositions :",
    options: ["Marie-Thérèse Colimon-Hall", "Roussan Camille", "Etzer Vilaire", "Marie Vieux-Chauvet"],
    correct: 3
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Cric? Crac! » ?",
    options: ["Georges Sylvain", "Alibée Féry", "Marvin Victor", "Liliane Devieux-Dehoux"],
    correct: 0
  },
  {
    q: "Retrouvez l'auteur de « La Vocation de l'élite » parmi ces propositions :",
    options: ["Émile Ollivier", "Jean Price-Mars", "Charles Moravia", "Jean-Robert Léonidas"],
    correct: 1
  },
  {
    q: "Quel livre porte la signature de Justin Chrysostome Dorsainvil ?",
    options: ["La Bélière Caraïbe", "Alléluia pour une femme-jardin", "Île à vau-l'eau", "Manuel d'histoire d'Haïti"],
    correct: 3
  },
  {
    q: "« Compère Général Soleil » est signé par quel auteur haïtien ?",
    options: ["Marie Vieux-Chauvet", "Jacques Stephen Alexis", "Tertulien Guilbaud", "Justin Lhérisson"],
    correct: 1
  },
  {
    q: "« De Saint-Domingue à Haïti » est signé par quel auteur haïtien ?",
    options: ["Jean Price-Mars", "Marie-Thérèse Colimon-Hall", "Jean-Euphèle Milcé", "Georges Sylvain"],
    correct: 0
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Le Mal de vivre » ?",
    options: ["Nadine Magloire", "Suzanne Comhaire-Sylvain", "Fernand Hibbert", "Demesvar Delorme"],
    correct: 0
  },
  {
    q: "Le livre « L'Alphabet des nuits » est dû à la plume de :",
    options: ["Jean-Euphèle Milcé", "Placide David", "Syto Cavé", "Marie-Célie Agnant"],
    correct: 0
  },
  {
    q: "Retrouvez l'auteur de « Textes interdits » parmi ces propositions :",
    options: ["Serge Legagneur", "Antoine Innocent", "Massillon Coicou", "Emmelie Prophète"],
    correct: 0
  },
  {
    q: "Qui a publié le livre « Rue Frontière » ?",
    options: ["Serge Legagneur", "Jean-Claude Fignolé", "Émile Roumer", "Faubert Bolivar"],
    correct: 3
  },
  {
    q: "« Le Conditionnel » compte parmi les œuvres de quel auteur ?",
    options: ["René Philoctète", "Anthony Phelps", "Charles Moravia", "Emmelie Prophète"],
    correct: 1
  },
  {
    q: "Quel nom d'auteur associez-vous à « Mur Méditerranée » ?",
    options: ["Louis Joseph Janvier", "Serge Legagneur", "Oswald Durand", "Louis-Philippe Dalembert"],
    correct: 3
  },
  {
    q: "Quel ouvrage a été publié par Roussan Camille ?",
    options: ["Adieu, mon frère", "Assaut à la nuit", "Le Manuscrit de mon ami", "L'Heure hybride"],
    correct: 1
  },
  {
    q: "« Romulus » a été publié(e) par quel écrivain haïtien ?",
    options: ["Roland Morisseau", "Fernand Hibbert", "Nadine Magloire", "Frankétienne"],
    correct: 1
  },
  {
    q: "Quelle est l'œuvre de Roland Morisseau parmi cette liste ?",
    options: ["Rêver debout", "Pays sans chapeau", "Compère Général Soleil", "Mère-Solitude"],
    correct: 0
  },
  {
    q: "Retrouvez l'auteur de « Le Rond-point » parmi ces propositions :",
    options: ["Frédéric Marcelin", "Roland Morisseau", "Évelyne Trouillot", "Alibée Féry"],
    correct: 2
  },
  {
    q: "Qui a publié le livre « L'Heure hybride » ?",
    options: ["Lyonel Trouillot", "Justin Lhérisson", "Kettly Mars", "Ignace Nau"],
    correct: 2
  },
  {
    q: "Le livre « Les Immortelles » est dû à la plume de :",
    options: ["Demesvar Delorme", "Antoine Innocent", "René Philoctète", "Makenzy Orcel"],
    correct: 3
  },
  {
    q: "Quel livre porte la signature de Pradel Pompilus ?",
    options: ["Manuel illustré d'histoire de la littérature haïtienne", "Moi, Toussaint Louverture", "À l'angle des rues parallèles", "L'Alphabet des nuits"],
    correct: 0
  },
  {
    q: "L'œuvre « Fonds des Nègres » a été écrite par :",
    options: ["Guy Régis Jr", "Gary Victor", "Marie Vieux-Chauvet", "Paula Clermont Péan"],
    correct: 2
  },
  {
    q: "Le livre « L'Autre Face de la mer » est dû à la plume de :",
    options: ["Jean-Claude Fignolé", "Louis-Philippe Dalembert", "Cléante Valcin", "Liliane Devieux-Dehoux"],
    correct: 1
  },
  {
    q: "Retrouvez l'auteur de « Nouveaux poèmes » parmi ces propositions :",
    options: ["Davertige", "Etzer Vilaire", "Frankétienne", "Suzanne Comhaire-Sylvain"],
    correct: 1
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Rue Frontière » ?",
    options: ["Roussan Camille", "Windsor Bellegarde", "Faubert Bolivar", "Massillon Coicou"],
    correct: 2
  },
  {
    q: "Quel titre figure dans la bibliographie de Carl Brouard ?",
    options: ["Écrit sur du ruban rose", "Amour, Colère et Folie", "Rosalie l'infâme", "Poésies nationales"],
    correct: 0
  },
  {
    q: "Quel écrivain haïtien a écrit « Les Thazar » ?",
    options: ["Ignace Nau", "Néhémy Pierre-Dahomey", "Fernand Hibbert", "Frankétienne"],
    correct: 2
  },
  {
    q: "Quel écrivain haïtien a écrit « Dessalines ou le sang du Pont-Rouge » ?",
    options: ["Hénock Trouillot", "Davertige", "Justin Chrysostome Dorsainvil", "Jean-Robert Léonidas"],
    correct: 0
  },
  {
    q: "« Encre allègre » a été publié(e) par quel écrivain haïtien ?",
    options: ["Georges Castera", "Ignace Nau", "Massillon Coicou", "Jean-Claude Charles"],
    correct: 0
  },
  {
    q: "« Huit jours dans un no man's land » compte parmi les œuvres de quel auteur ?",
    options: ["Kettly Mars", "Yanick Lahens", "Rodney Saint-Éloi", "Frankétienne"],
    correct: 3
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « La Vengeance de Mama » ?",
    options: ["Frédéric Marcelin", "Frankétienne", "Michel Soukar", "Léon Laleau"],
    correct: 0
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Vieilles chansons » ?",
    options: ["Marie-Thérèse Colimon-Hall", "Ignace Nau", "Tertulien Guilbaud", "Demesvar Delorme"],
    correct: 2
  },
  {
    q: "Quel écrivain haïtien a écrit « Les Rapaces » ?",
    options: ["Justin Lhérisson", "Liliane Devieux-Dehoux", "Louis-Philippe Dalembert", "Marie Vieux-Chauvet"],
    correct: 3
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Michel Soukar ?",
    options: ["La Couleur de l'aube", "Le Fusil et la croix", "Rosalie l'infâme", "Théâtre"],
    correct: 1
  },
  {
    q: "Quel titre figure dans la bibliographie de Jean-Claude Bajeux ?",
    options: ["Mosochwazi Kout Fè", "L'Heure hybride", "Le Fusil et la croix", "Les Arbres musiciens"],
    correct: 0
  },
  {
    q: "Quel nom d'auteur associez-vous à « Fils de misère » ?",
    options: ["Marie-Thérèse Colimon-Hall", "Louis Joseph Janvier", "Léon Laleau", "Demesvar Delorme"],
    correct: 0
  },
  {
    q: "« Haïti kenbe la ! » compte parmi les œuvres de quel auteur ?",
    options: ["Marie-Thérèse Colimon-Hall", "Suzanne Comhaire-Sylvain", "Louis Joseph Janvier", "Rodney Saint-Éloi"],
    correct: 3
  },
  {
    q: "« Aube tranquille » compte parmi les œuvres de quel auteur ?",
    options: ["Jean-Claude Fignolé", "Hénock Trouillot", "Isnardin Vieux", "Josaphat-Robert Large"],
    correct: 0
  },
  {
    q: "Quel titre figure dans la bibliographie de Émile Roumer ?",
    options: ["Assaut à la nuit", "Poèmes d'Haïti et de France", "Impasse Dignité", "Ultravocal"],
    correct: 1
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Rires et Pleurs » ?",
    options: ["Ignace Nau", "Justin Chrysostome Dorsainvil", "René Depestre", "Oswald Durand"],
    correct: 3
  },
  {
    q: "On doit à la plume de Davertige l'œuvre suivante :",
    options: ["Maître-Minuit", "Théâtre", "Idem", "Un amour à trois temps"],
    correct: 2
  },
  {
    q: "« Les Blancs de mémoire » compte parmi les œuvres de quel auteur ?",
    options: ["Georges Sylvain", "Georges Anglade", "Jean-Euphèle Milcé", "Émile Ollivier"],
    correct: 1
  },
  {
    q: "« Idem » a été publié(e) par quel écrivain haïtien ?",
    options: ["Faubert Bolivar", "Marie-Alice Théard", "Davertige", "Jean Price-Mars"],
    correct: 2
  },
  {
    q: "« L'Odeur du café » est signé par quel auteur haïtien ?",
    options: ["James Noël", "Antoine Innocent", "Dany Laferrière", "Tertulien Guilbaud"],
    correct: 2
  },
  {
    q: "L'œuvre « Manuel d'histoire d'Haïti » a été écrite par :",
    options: ["Lyonel Trouillot", "Oswald Durand", "Justin Chrysostome Dorsainvil", "Jean-Claude Bajeux"],
    correct: 2
  },
  {
    q: "L'œuvre « Bois d'ébène » a été écrite par :",
    options: ["Marie Vieux-Chauvet", "Jacques Roumain", "Ignace Nau", "Tertulien Guilbaud"],
    correct: 1
  },
  {
    q: "Retrouvez l'auteur de « Treize nouvelles vaudou » parmi ces propositions :",
    options: ["Roussan Camille", "Marie-Thérèse Colimon-Hall", "Gary Victor", "Charles Moravia"],
    correct: 2
  },
  {
    q: "« Le Choc » est signé par quel auteur haïtien ?",
    options: ["Gary Victor", "Fernand Hibbert", "Léon Laleau", "Jean Métellus"],
    correct: 2
  },
  {
    q: "Quel ouvrage a été publié par Josaphat-Robert Large ?",
    options: ["L'Odeur du café", "Bicentenaire", "Les Étrangers de la maison", "Fils de misère"],
    correct: 2
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Idem » ?",
    options: ["Davertige", "Liliane Devieux-Dehoux", "Frédéric Marcelin", "Michel Soukar"],
    correct: 0
  },
  {
    q: "« Rosalie l'infâme » est signé par quel auteur haïtien ?",
    options: ["Marie-Alice Théard", "Isnardin Vieux", "Jean-Claude Bajeux", "Évelyne Trouillot"],
    correct: 3
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Pradel Pompilus ?",
    options: ["Les Contes haïtiens", "Manuel illustré d'histoire de la littérature haïtienne", "De l'égalité des races humaines", "Le Nègre crucifié"],
    correct: 1
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Haïti kenbe la ! » ?",
    options: ["Rodney Saint-Éloi", "Josaphat-Robert Large", "Paula Clermont Péan", "Oswald Durand"],
    correct: 0
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Stanley Péan ?",
    options: ["Le Cri de l'oiseau rouge", "Le Manuscrit de mon ami", "Thérèse en mille morceaux", "La Plage des songes"],
    correct: 3
  },
  {
    q: "Quel livre porte la signature de Windsor Bellegarde ?",
    options: ["Bois d'ébène", "Écrivains haïtiens", "Mimola", "Mur Méditerranée"],
    correct: 1
  },
  {
    q: "Retrouvez l'auteur de « Encre allègre » parmi ces propositions :",
    options: ["Nadine Magloire", "Lyonel Trouillot", "Demesvar Delorme", "Georges Castera"],
    correct: 3
  },
  {
    q: "Quel écrivain haïtien a écrit « Mosochwazi Kout Fè » ?",
    options: ["Jean-Claude Bajeux", "Carl Brouard", "Jean Price-Mars", "Emmelie Prophète"],
    correct: 0
  },
  {
    q: "Retrouvez l'auteur de « Le Manuscrit de mon ami » parmi ces propositions :",
    options: ["Gary Klang", "Fernand Hibbert", "Fresnel Sylvestre", "Léon Laleau"],
    correct: 1
  },
  {
    q: "Qui a publié le livre « Dessalines ou le sang du Pont-Rouge » ?",
    options: ["Serge Legagneur", "Hénock Trouillot", "Louis Joseph Janvier", "Jacques Stephen Alexis"],
    correct: 1
  },
  {
    q: "« Le Qui-vive » est signé par quel auteur haïtien ?",
    options: ["Syto Cavé", "Jean-Robert Cadet", "Jean Price-Mars", "Joujou Turenne"],
    correct: 0
  },
  {
    q: "On doit à la plume de Michel Soukar l'œuvre suivante :",
    options: ["Le Fusil et la croix", "Restavec", "Manuel d'histoire d'Haïti", "La Montagne ensorcelée"],
    correct: 0
  },
  {
    q: "« À l'angle des rues parallèles » est signé par quel auteur haïtien ?",
    options: ["Stanley Péan", "Émile Ollivier", "Guy Régis Jr", "Gary Victor"],
    correct: 3
  },
  {
    q: "Le livre « Le Nègre crucifié » est dû à la plume de :",
    options: ["Jean-Robert Cadet", "René Philoctète", "Gérard Étienne", "Ignace Nau"],
    correct: 2
  },
  {
    q: "« Le Fusil et la croix » compte parmi les œuvres de quel auteur ?",
    options: ["Michel Soukar", "Dany Laferrière", "Jean-Claude Bajeux", "Jean-Robert Cadet"],
    correct: 0
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Vieilles chansons » ?",
    options: ["Faubert Bolivar", "Alibée Féry", "Emmelie Prophète", "Tertulien Guilbaud"],
    correct: 3
  },
  {
    q: "Qui a publié le livre « Huit jours dans un no man's land » ?",
    options: ["Roussan Camille", "Jean-Claude Charles", "Carl Brouard", "Frankétienne"],
    correct: 3
  },
  {
    q: "Quel nom d'auteur associez-vous à « Clair de Manbo » ?",
    options: ["Gary Klang", "Alibée Féry", "Syto Cavé", "Gary Victor"],
    correct: 3
  },
  {
    q: "« Mur Méditerranée » est signé par quel auteur haïtien ?",
    options: ["Louis-Philippe Dalembert", "Gérard Étienne", "Charles Moravia", "Syto Cavé"],
    correct: 0
  },
  {
    q: "L'œuvre « Hadriana dans tous mes rêves » a été écrite par :",
    options: ["Jacques Roumain", "Pradel Pompilus", "Yanick Lahens", "René Depestre"],
    correct: 3
  },
  {
    q: "Qui a publié le livre « Amour, Colère et Folie » ?",
    options: ["Georges Sylvain", "Jean-Claude Bajeux", "Jean-Claude Charles", "Marie Vieux-Chauvet"],
    correct: 3
  },
  {
    q: "« Les Étrangers de la maison » est signé par quel auteur haïtien ?",
    options: ["Syto Cavé", "Isnardin Vieux", "Josaphat-Robert Large", "Oswald Durand"],
    correct: 2
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Écrivains haïtiens » ?",
    options: ["Alibée Féry", "Windsor Bellegarde", "Cléante Valcin", "Léon Laleau"],
    correct: 1
  },
  {
    q: "L'œuvre « Ferdinand je suis à Paris » a été écrite par :",
    options: ["Anthony Phelps", "Liliane Devieux-Dehoux", "Carl Brouard", "Jean-Claude Charles"],
    correct: 3
  },
  {
    q: "Le livre « Le Fusil et la croix » est dû à la plume de :",
    options: ["Jacques Roumain", "Syto Cavé", "Michel Soukar", "René Depestre"],
    correct: 2
  },
  {
    q: "Le livre « Manuel illustré d'histoire de la littérature haïtienne » est dû à la plume de :",
    options: ["Pradel Pompilus", "Marvin Victor", "Marie-Alice Théard", "Georges Castera"],
    correct: 0
  },
  {
    q: "« Les Blancs de mémoire » a été publié(e) par quel écrivain haïtien ?",
    options: ["Josaphat-Robert Large", "Michel Soukar", "Georges Anglade", "Léon Laleau"],
    correct: 2
  },
  {
    q: "Qui a publié le livre « La Vocation de l'élite » ?",
    options: ["Jean Price-Mars", "Stanley Péan", "Jacques Roumain", "Liliane Devieux-Dehoux"],
    correct: 0
  },
  {
    q: "Parmi les œuvres suivantes, laquelle a été écrite par Hénock Trouillot ?",
    options: ["Encre allègre", "Dessalines ou le sang du Pont-Rouge", "Vieilles chansons", "Guillaume et Nathalie"],
    correct: 1
  },
  {
    q: "Le livre « Guillaume et Nathalie » est dû à la plume de :",
    options: ["Yanick Lahens", "Makenzy Orcel", "Jean-Claude Charles", "Stanley Péan"],
    correct: 0
  },
  {
    q: "« Des fleurs pour les héros » est signé par quel auteur haïtien ?",
    options: ["Anthony Phelps", "Faubert Bolivar", "Makenzy Orcel", "Kettly Mars"],
    correct: 0
  },
  {
    q: "« Saison de porcs » est signé par quel auteur haïtien ?",
    options: ["Gary Victor", "Stanley Péan", "Guy Régis Jr", "Windsor Bellegarde"],
    correct: 0
  },
  {
    q: "Quel ouvrage a été publié par Antoine Innocent ?",
    options: ["Mimola", "Écrit sur du ruban rose", "Rêver debout", "De l'égalité des races humaines"],
    correct: 0
  },
  {
    q: "Qui a publié le livre « Des fleurs pour les héros » ?",
    options: ["Alibée Féry", "Makenzy Orcel", "Suzanne Comhaire-Sylvain", "Anthony Phelps"],
    correct: 3
  },
  {
    q: "« La Famille des Pitite-Caille » compte parmi les œuvres de quel auteur ?",
    options: ["Justin Lhérisson", "Faubert Bolivar", "Gérard Étienne", "Marie Vieux-Chauvet"],
    correct: 0
  },
  {
    q: "« Écrit sur du ruban rose » est signé par quel auteur haïtien ?",
    options: ["Carl Brouard", "Jean Métellus", "Jean-Claude Bajeux", "Stanley Péan"],
    correct: 0
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Restavec » ?",
    options: ["Jean-Robert Cadet", "Jean D'Amérique", "Syto Cavé", "Anténor Firmin"],
    correct: 0
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Marie-Alice Théard ?",
    options: ["Zoune chez sa ninnaine", "Le Testament des solitudes", "Mes années Duvalier", "Cœur des Îles"],
    correct: 2
  },
  {
    q: "De quelle plume est issue l'œuvre « Restavec » ?",
    options: ["James Noël", "Jean-Robert Cadet", "Antoine Innocent", "Michel Soukar"],
    correct: 1
  },
  {
    q: "Qui a publié le livre « Ces îles qui marchent » ?",
    options: ["René Philoctète", "Gary Victor", "Dany Laferrière", "Emmelie Prophète"],
    correct: 0
  },
  {
    q: "Le livre « Amour, Colère et Folie » est dû à la plume de :",
    options: ["Fernand Hibbert", "Pradel Pompilus", "Anthony Phelps", "Marie Vieux-Chauvet"],
    correct: 3
  },
  {
    q: "Quelle est l'œuvre de Fresnel Sylvestre parmi cette liste ?",
    options: ["La Danse sur le volcan", "Un amour à trois temps", "Fille d'Haïti", "Le Mal de vivre"],
    correct: 1
  },
  {
    q: "Quel titre figure dans la bibliographie de Cléante Valcin ?",
    options: ["Le Qui-vive", "La Blanche Négresse", "Les Thazar", "Soleil à coudre"],
    correct: 1
  },
  {
    q: "Le livre « Vers le sud » est dû à la plume de :",
    options: ["Dany Laferrière", "Suzanne Comhaire-Sylvain", "Massillon Coicou", "Roussan Camille"],
    correct: 0
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Fille d'Haïti » ?",
    options: ["Évelyne Trouillot", "Tertulien Guilbaud", "Ignace Nau", "Marie Vieux-Chauvet"],
    correct: 3
  },
  {
    q: "« L'Espace d'un cillement » compte parmi les œuvres de quel auteur ?",
    options: ["Jean D'Amérique", "Dany Laferrière", "Windsor Bellegarde", "Jacques Stephen Alexis"],
    correct: 3
  },
  {
    q: "Qui a publié le livre « Soleil à coudre » ?",
    options: ["Fresnel Sylvestre", "Georges Anglade", "Louis-Philippe Dalembert", "Jean D'Amérique"],
    correct: 3
  },
  {
    q: "À qui doit-on l'œuvre littéraire « La Blanche Négresse » ?",
    options: ["Cléante Valcin", "Jean D'Amérique", "Justin Chrysostome Dorsainvil", "Suzanne Comhaire-Sylvain"],
    correct: 0
  },
  {
    q: "Le livre « Une eau-forte » est dû à la plume de :",
    options: ["Jean Métellus", "Faubert Bolivar", "Placide David", "Jean Price-Mars"],
    correct: 0
  },
  {
    q: "On doit à la plume de Jean-Claude Bajeux l'œuvre suivante :",
    options: ["La Vocation de l'élite", "Passions", "Mosochwazi Kout Fè", "Guillaume et Nathalie"],
    correct: 2
  },
  {
    q: "Suzanne Comhaire-Sylvain est notamment l'auteur(e) de :",
    options: ["Les Contes haïtiens", "Fils de misère", "Le Livre d'Emma", "La République d'Haïti et ses visiteurs"],
    correct: 0
  },
  {
    q: "Quel titre figure dans la bibliographie de Josaphat-Robert Large ?",
    options: ["La Crête-à-Pierrot", "Les Étrangers de la maison", "Rapatriés", "Le Livre d'Emma"],
    correct: 1
  },
  {
    q: "« Frayeur » a été publié(e) par quel écrivain haïtien ?",
    options: ["Louis Joseph Janvier", "Jacques Stephen Alexis", "Frankétienne", "Kettly Mars"],
    correct: 3
  },
  {
    q: "Le livre « Huit jours dans un no man's land » est dû à la plume de :",
    options: ["Ignace Nau", "Frankétienne", "Dany Laferrière", "Paula Clermont Péan"],
    correct: 1
  },
  {
    q: "À qui doit-on l'œuvre littéraire « La Montagne ensorcelée » ?",
    options: ["Roussan Camille", "Néhémy Pierre-Dahomey", "Marie-Thérèse Colimon-Hall", "Jacques Roumain"],
    correct: 3
  },
  {
    q: "Quel écrivain haïtien a écrit « Le Briseur de rosée » ?",
    options: ["Michel Soukar", "Edwidge Danticat", "Jacques Roumain", "Josaphat-Robert Large"],
    correct: 1
  },
  {
    q: "L'œuvre « Guillaume et Nathalie » a été écrite par :",
    options: ["Marvin Victor", "Yanick Lahens", "Gary Klang", "Ignace Nau"],
    correct: 1
  },
  {
    q: "L'écrivain(e) Gary Klang est célèbre pour avoir publié :",
    options: ["Haïti, terre mystique", "Manuel illustré d'histoire de la littérature haïtienne", "Contes et légendes d'Haïti", "Douces déroutes"],
    correct: 0
  },
  {
    q: "« Des fleurs pour les héros » a été publié(e) par quel écrivain haïtien ?",
    options: ["Syto Cavé", "Anthony Phelps", "Dany Laferrière", "Emmelie Prophète"],
    correct: 1
  },
  {
    q: "De quelle plume est issue l'œuvre « L'Empereur Dessalines » ?",
    options: ["Paula Clermont Péan", "Jean-Robert Léonidas", "Massillon Coicou", "Jean-Claude Fignolé"],
    correct: 2
  },
  {
    q: "À qui doit-on l'œuvre littéraire « L'Espace d'un cillement » ?",
    options: ["Charles Moravia", "Jean-Claude Bajeux", "Jacques Stephen Alexis", "Jean Métellus"],
    correct: 2
  },
  {
    q: "Marie-Thérèse Colimon-Hall a notamment donné naissance à quelle œuvre ?",
    options: ["Alléluia pour une femme-jardin", "Sous le soleil d'Haïti", "Fils de misère", "Manhattan Blues"],
    correct: 2
  },
  {
    q: "« Les Immortelles » a été publié(e) par quel écrivain haïtien ?",
    options: ["Lyonel Trouillot", "Émile Roumer", "Makenzy Orcel", "Pradel Pompilus"],
    correct: 2
  },
  {
    q: "Quel écrivain haïtien a écrit « Le Cri de l'oiseau rouge » ?",
    options: ["Louis-Philippe Dalembert", "Edwidge Danticat", "Isnardin Vieux", "Ida Faubert"],
    correct: 1
  },
  {
    q: "Quel écrivain haïtien a écrit « Les Immortelles » ?",
    options: ["Edwidge Danticat", "Marvin Victor", "Marie-Célie Agnant", "Makenzy Orcel"],
    correct: 3
  },
  {
    q: "Identifiez l'œuvre écrite par Louis Joseph Janvier :",
    options: ["Encre allègre", "Rêver debout", "La Vengeance de Mama", "La République d'Haïti et ses visiteurs"],
    correct: 3
  },
  {
    q: "Qui a publié le livre « Kasalé » ?",
    options: ["Kettly Mars", "Emmelie Prophète", "Carl Brouard", "Serge Legagneur"],
    correct: 0
  },
  {
    q: "Le livre « Dessalines ou le sang du Pont-Rouge » est dû à la plume de :",
    options: ["Léon Laleau", "Carl Brouard", "Hénock Trouillot", "Alibée Féry"],
    correct: 2
  },
  {
    q: "« La mémoire aux abois » compte parmi les œuvres de quel auteur ?",
    options: ["Rodney Saint-Éloi", "Évelyne Trouillot", "Jean Métellus", "Anténor Firmin"],
    correct: 1
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Le Rond-point » ?",
    options: ["Gary Victor", "Évelyne Trouillot", "Placide David", "Justin Chrysostome Dorsainvil"],
    correct: 1
  },
  {
    q: "« La Vengeance de Mama » est signé par quel auteur haïtien ?",
    options: ["Frédéric Marcelin", "René Depestre", "Gary Victor", "Oswald Durand"],
    correct: 0
  },
  {
    q: "Identifiez l'œuvre écrite par Jean-Claude Bajeux :",
    options: ["Mosochwazi Kout Fè", "Dezafi", "La Famille des Pitite-Caille", "Le Reste du temps"],
    correct: 0
  },
  {
    q: "Quel écrivain haïtien a écrit « Cric? Crac! » ?",
    options: ["Josaphat-Robert Large", "Jacques Stephen Alexis", "Georges Sylvain", "Jean-Robert Cadet"],
    correct: 2
  },
  {
    q: "« Idem » est signé par quel auteur haïtien ?",
    options: ["Évelyne Trouillot", "Emmelie Prophète", "Jean-Euphèle Milcé", "Davertige"],
    correct: 3
  },
  {
    q: "Quel écrivain haïtien a écrit « Pays sans chapeau » ?",
    options: ["Marvin Victor", "Georges Castera", "Anténor Firmin", "Dany Laferrière"],
    correct: 3
  },
  {
    q: "Qui a publié le livre « Manuel d'histoire d'Haïti » ?",
    options: ["Justin Chrysostome Dorsainvil", "Jean D'Amérique", "Jean-Claude Charles", "Georges Anglade"],
    correct: 0
  },
  {
    q: "L'écrivain(e) Suzanne Comhaire-Sylvain est célèbre pour avoir publié :",
    options: ["Moi, Toussaint Louverture", "La Danse sur le volcan", "Les Contes haïtiens", "Je suis vivant"],
    correct: 2
  },
  {
    q: "Retrouvez l'auteur de « Le Reste du temps » parmi ces propositions :",
    options: ["Yanick Lahens", "Jean Price-Mars", "Charles Moravia", "Emmelie Prophète"],
    correct: 3
  },
  {
    q: "Quel écrivain haïtien a écrit « Bois d'ébène » ?",
    options: ["Jacques Roumain", "Louis-Philippe Dalembert", "Frédéric Marcelin", "Serge Legagneur"],
    correct: 0
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « L'Ombre animale » ?",
    options: ["Makenzy Orcel", "Demesvar Delorme", "Jean-Euphèle Milcé", "Faubert Bolivar"],
    correct: 0
  },
  {
    q: "L'œuvre « Ces îles qui marchent » a été écrite par :",
    options: ["Pradel Pompilus", "Gary Victor", "Isnardin Vieux", "René Philoctète"],
    correct: 3
  },
  {
    q: "On doit à la plume de Jean-Robert Cadet l'œuvre suivante :",
    options: ["L'Alphabet des nuits", "La Montagne ensorcelée", "Poésies nationales", "Restavec"],
    correct: 3
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Gouverneurs de la rosée » ?",
    options: ["Ignace Nau", "Jean-Robert Cadet", "Néhémy Pierre-Dahomey", "Jacques Roumain"],
    correct: 3
  },
  {
    q: "Quel ouvrage a été publié par Georges Sylvain ?",
    options: ["Cric? Crac!", "Pages retrouvées", "Le Briseur de rosée", "Le Choc"],
    correct: 0
  },
  {
    q: "Identifiez l'œuvre écrite par Gérard Étienne :",
    options: ["Ainsi parla l'oncle", "Sous le soleil d'Haïti", "Poèmes d'Haïti et de France", "Le Nègre crucifié"],
    correct: 3
  },
  {
    q: "« Amour, Colère et Folie » est signé par quel auteur haïtien ?",
    options: ["Alibée Féry", "Marie Vieux-Chauvet", "Rodney Saint-Éloi", "Isnardin Vieux"],
    correct: 1
  },
  {
    q: "Parmi ces titres, lequel est signé Georges Anglade ?",
    options: ["Vers le sud", "Belle merveille", "Douces déroutes", "Les Blancs de mémoire"],
    correct: 3
  },
  {
    q: "Le livre « L'Empereur Dessalines » est dû à la plume de :",
    options: ["Massillon Coicou", "Stanley Péan", "Hénock Trouillot", "Jacques Stephen Alexis"],
    correct: 0
  },
  {
    q: "« Cœur des Îles » est signé par quel auteur haïtien ?",
    options: ["Paula Clermont Péan", "Liliane Devieux-Dehoux", "Ida Faubert", "Roussan Camille"],
    correct: 2
  },
  {
    q: "Émile Ollivier a notamment donné naissance à quelle œuvre ?",
    options: ["Le Rond-point", "La Couleur de l'aube", "Passages", "À l'angle des rues parallèles"],
    correct: 2
  },
  {
    q: "« Réflexions diverses sur Haïti » compte parmi les œuvres de quel auteur ?",
    options: ["Demesvar Delorme", "Léon Laleau", "Émile Ollivier", "Roland Morisseau"],
    correct: 0
  },
  {
    q: "L'écrivain(e) Paula Clermont Péan est célèbre pour avoir publié :",
    options: ["Textes interdits", "Le Mal de terre", "Thémistocle-Épaminondas Labasterre", "Rue Frontière"],
    correct: 1
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Dessalines ou le sang du Pont-Rouge » ?",
    options: ["Hénock Trouillot", "Nadine Magloire", "Cléante Valcin", "Gérard Étienne"],
    correct: 0
  },
  {
    q: "Quel nom d'auteur associez-vous à « Les Étrangers de la maison » ?",
    options: ["Josaphat-Robert Large", "Yanick Lahens", "Anténor Firmin", "Marie-Alice Théard"],
    correct: 0
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Francesca » ?",
    options: ["James Noël", "Jacques Roumain", "Kettly Mars", "Demesvar Delorme"],
    correct: 3
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « La Montagne ensorcelée » ?",
    options: ["Louis Joseph Janvier", "Hénock Trouillot", "Jacques Roumain", "Jean D'Amérique"],
    correct: 2
  },
  {
    q: "Qui a publié le livre « La mémoire aux abois » ?",
    options: ["Frédéric Marcelin", "Évelyne Trouillot", "Carl Brouard", "Michel Soukar"],
    correct: 1
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Musique nègre » ?",
    options: ["Émile Ollivier", "Léon Laleau", "Rodney Saint-Éloi", "Gary Victor"],
    correct: 1
  },
  {
    q: "L'œuvre « Le Peuple des terres mêlées » a été écrite par :",
    options: ["René Philoctète", "Placide David", "Néhémy Pierre-Dahomey", "Émile Roumer"],
    correct: 0
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Jean-Robert Léonidas ?",
    options: ["Jacmel au crépuscule", "La mémoire aux abois", "Le Lambi", "Île à vau-l'eau"],
    correct: 3
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Le Sang et la Mer » ?",
    options: ["Suzanne Comhaire-Sylvain", "Serge Legagneur", "Gary Victor", "Marie-Alice Théard"],
    correct: 2
  },
  {
    q: "De quelle plume est issue l'œuvre « Thémistocle-Épaminondas Labasterre » ?",
    options: ["Évelyne Trouillot", "Frédéric Marcelin", "Georges Anglade", "Jean Métellus"],
    correct: 1
  },
  {
    q: "Qui a publié le livre « Le Mât de cocagne » ?",
    options: ["Cléante Valcin", "René Depestre", "Anténor Firmin", "Émile Roumer"],
    correct: 1
  },
  {
    q: "Retrouvez l'auteur de « Milwaukee Blues » parmi ces propositions :",
    options: ["Marie-Célie Agnant", "Jacques Roumain", "Ida Faubert", "Louis-Philippe Dalembert"],
    correct: 3
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Comment faire l'amour avec un Nègre sans se fatiguer » ?",
    options: ["Josaphat-Robert Large", "Néhémy Pierre-Dahomey", "Dany Laferrière", "Jean Price-Mars"],
    correct: 2
  },
  {
    q: "Qui a publié le livre « Impasse Dignité » ?",
    options: ["Jean Price-Mars", "Ignace Nau", "Emmelie Prophète", "Cléante Valcin"],
    correct: 2
  },
  {
    q: "« L'Énigme du retour » compte parmi les œuvres de quel auteur ?",
    options: ["Georges Anglade", "Michel Soukar", "Liliane Devieux-Dehoux", "Dany Laferrière"],
    correct: 3
  },
  {
    q: "Isnardin Vieux a notamment donné naissance à quelle œuvre ?",
    options: ["Le Roman de l'occupation", "La Blanche Négresse", "La Vocation de l'élite", "Désirée Congo"],
    correct: 0
  },
  {
    q: "Retrouvez l'auteur de « Au pipirite chantant » parmi ces propositions :",
    options: ["Davertige", "Fernand Hibbert", "Jean Métellus", "Georges Anglade"],
    correct: 2
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Le Roman de l'occupation » ?",
    options: ["Frédéric Marcelin", "Isnardin Vieux", "Guy Régis Jr", "Stanley Péan"],
    correct: 1
  },
  {
    q: "L'œuvre « Silhouettes de nègres et de négrophiles » a été écrite par :",
    options: ["Évelyne Trouillot", "Oswald Durand", "Isnardin Vieux", "Jean Price-Mars"],
    correct: 3
  },
  {
    q: "Quel nom d'auteur associez-vous à « Impasse Dignité » ?",
    options: ["Jean-Robert Cadet", "Emmelie Prophète", "René Depestre", "Dany Laferrière"],
    correct: 1
  },
  {
    q: "Retrouvez l'auteur de « Le Roman de l'occupation » parmi ces propositions :",
    options: ["Jean-Euphèle Milcé", "Antoine Innocent", "Isnardin Vieux", "Kettly Mars"],
    correct: 2
  },
  {
    q: "Lequel de ces titres appartient à la bibliographie de Charles Moravia ?",
    options: ["La Crête-à-Pierrot", "Épisode de la Révolution", "Aube tranquille", "Cœur des Îles"],
    correct: 0
  },
  {
    q: "Retrouvez l'auteur de « Kasalé » parmi ces propositions :",
    options: ["Justin Chrysostome Dorsainvil", "Kettly Mars", "René Depestre", "Georges Anglade"],
    correct: 1
  },
  {
    q: "Quel écrivain haïtien a écrit « Fille d'Haïti » ?",
    options: ["Frankétienne", "Marie Vieux-Chauvet", "Louis Joseph Janvier", "Émile Ollivier"],
    correct: 1
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Roland Morisseau ?",
    options: ["L'Énigme du retour", "La Dot de Sara", "Haïti, terre mystique", "Rêver debout"],
    correct: 3
  },
  {
    q: "Retrouvez l'auteur de « Sous le soleil d'Haïti » parmi ces propositions :",
    options: ["Joujou Turenne", "Rodney Saint-Éloi", "René Philoctète", "Ida Faubert"],
    correct: 3
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Épisode de la Révolution » ?",
    options: ["Ignace Nau", "Marvin Victor", "Fresnel Sylvestre", "Gary Klang"],
    correct: 0
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Ferdinand je suis à Paris » ?",
    options: ["Jean-Claude Charles", "Gérard Étienne", "Georges Sylvain", "Néhémy Pierre-Dahomey"],
    correct: 0
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Les Dix hommes noirs » ?",
    options: ["Ignace Nau", "Etzer Vilaire", "Jean-Claude Bajeux", "Marie-Thérèse Colimon-Hall"],
    correct: 1
  },
  {
    q: "Quelle est l'œuvre de Serge Legagneur parmi cette liste ?",
    options: ["Textes interdits", "Manuel d'histoire d'Haïti", "Le Lambi", "Frayeur"],
    correct: 0
  },
  {
    q: "Qui a publié le livre « Bicentenaire » ?",
    options: ["Lyonel Trouillot", "Jean-Claude Fignolé", "Faubert Bolivar", "Marie-Alice Théard"],
    correct: 0
  },
  {
    q: "Quel ouvrage a été publié par Fresnel Sylvestre ?",
    options: ["Dessalines ou le sang du Pont-Rouge", "Hadriana dans tous mes rêves", "Gouverneurs de la rosée", "Un amour à trois temps"],
    correct: 3
  },
  {
    q: "Le livre « Écrit sur du ruban rose » est dû à la plume de :",
    options: ["Marie-Thérèse Colimon-Hall", "Jean D'Amérique", "Carl Brouard", "Jean-Claude Fignolé"],
    correct: 2
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Fonds des Nègres » ?",
    options: ["Joujou Turenne", "Rodney Saint-Éloi", "Marie Vieux-Chauvet", "Windsor Bellegarde"],
    correct: 2
  },
  {
    q: "Retrouvez l'auteur de « Haïti kenbe la ! » parmi ces propositions :",
    options: ["Rodney Saint-Éloi", "Néhémy Pierre-Dahomey", "Jean-Robert Léonidas", "Pradel Pompilus"],
    correct: 0
  },
  {
    q: "« Désirée Congo » est signé par quel auteur haïtien ?",
    options: ["Serge Legagneur", "Nadine Magloire", "Makenzy Orcel", "Évelyne Trouillot"],
    correct: 3
  },
  {
    q: "L'œuvre « Île à vau-l'eau » a été écrite par :",
    options: ["Gary Klang", "Davertige", "Jean-Robert Léonidas", "Joujou Turenne"],
    correct: 2
  },
  {
    q: "« Corps mêlés » a été publié(e) par quel écrivain haïtien ?",
    options: ["Marvin Victor", "Etzer Vilaire", "Jean-Robert Léonidas", "Emmelie Prophète"],
    correct: 0
  },
  {
    q: "« Musique nègre » est signé par quel auteur haïtien ?",
    options: ["Léon Laleau", "Anténor Firmin", "Jean-Robert Cadet", "Serge Legagneur"],
    correct: 0
  },
  {
    q: "Retrouvez l'auteur de « Hadriana dans tous mes rêves » parmi ces propositions :",
    options: ["Jean-Claude Fignolé", "Justin Chrysostome Dorsainvil", "Louis-Philippe Dalembert", "René Depestre"],
    correct: 3
  },
  {
    q: "Quel nom d'auteur associez-vous à « Pays sans chapeau » ?",
    options: ["Marie-Thérèse Colimon-Hall", "René Philoctète", "Michel Soukar", "Dany Laferrière"],
    correct: 3
  },
  {
    q: "Qui a publié le livre « Séna » ?",
    options: ["Serge Legagneur", "Fernand Hibbert", "Jean-Claude Bajeux", "Josaphat-Robert Large"],
    correct: 1
  },
  {
    q: "De quelle plume est issue l'œuvre « L'Amour oui. La mort non » ?",
    options: ["Jean-Robert Léonidas", "Etzer Vilaire", "Liliane Devieux-Dehoux", "Massillon Coicou"],
    correct: 2
  },
  {
    q: "Retrouvez l'auteur de « L'Ombre animale » parmi ces propositions :",
    options: ["Jean-Robert Léonidas", "James Noël", "Makenzy Orcel", "Edwidge Danticat"],
    correct: 2
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Ainsi parla l'oncle » ?",
    options: ["Jean Price-Mars", "Georges Anglade", "Jean-Euphèle Milcé", "Frédéric Marcelin"],
    correct: 0
  },
  {
    q: "« Silhouettes de nègres et de négrophiles » a été publié(e) par quel écrivain haïtien ?",
    options: ["Fernand Hibbert", "Jean Price-Mars", "Jean-Robert Léonidas", "Frankétienne"],
    correct: 1
  },
  {
    q: "De quelle plume est issue l'œuvre « Le Peuple des terres mêlées » ?",
    options: ["Anthony Phelps", "Jean-Claude Fignolé", "René Philoctète", "Etzer Vilaire"],
    correct: 2
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Réflexions diverses sur Haïti » ?",
    options: ["Demesvar Delorme", "Georges Sylvain", "Yanick Lahens", "Pradel Pompilus"],
    correct: 0
  },
  {
    q: "« Clair de Manbo » est signé par quel auteur haïtien ?",
    options: ["Justin Chrysostome Dorsainvil", "Gary Victor", "Stanley Péan", "Jean Price-Mars"],
    correct: 1
  },
  {
    q: "Qui a publié le livre « Rue des pas perdus » ?",
    options: ["Frédéric Marcelin", "Louis-Philippe Dalembert", "Davertige", "Lyonel Trouillot"],
    correct: 3
  },
  {
    q: "Identifiez l'œuvre écrite par Davertige :",
    options: ["La Crête-à-Pierrot", "Île à vau-l'eau", "Idem", "La Récolte douce des larmes"],
    correct: 2
  },
  {
    q: "Quelle est l'œuvre de Josaphat-Robert Large parmi cette liste ?",
    options: ["Ferdinand je suis à Paris", "Ainsi parla l'oncle", "Les Étrangers de la maison", "L'Ombre animale"],
    correct: 2
  },
  {
    q: "Retrouvez l'auteur de « Saison de porcs » parmi ces propositions :",
    options: ["Gary Victor", "Léon Laleau", "Marie-Thérèse Colimon-Hall", "Rodney Saint-Éloi"],
    correct: 0
  },
  {
    q: "« Bois d'ébène » est signé par quel auteur haïtien ?",
    options: ["Jacques Roumain", "Guy Régis Jr", "Jean-Claude Charles", "Marvin Victor"],
    correct: 0
  },
  {
    q: "De quelle plume est issue l'œuvre « Anacaona » ?",
    options: ["Etzer Vilaire", "Jean-Euphèle Milcé", "Jean-Claude Fignolé", "Jean Métellus"],
    correct: 3
  },
  {
    q: "Isnardin Vieux est notamment l'auteur(e) de :",
    options: ["Le Roman de l'occupation", "Boulevard Baie des Anges", "La mémoire aux abois", "Textes interdits"],
    correct: 0
  },
  {
    q: "« Gouverneurs de la rosée » est signé par quel auteur haïtien ?",
    options: ["Émile Roumer", "Nadine Magloire", "Jacques Roumain", "Makenzy Orcel"],
    correct: 2
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Nouveaux poèmes » ?",
    options: ["Antoine Innocent", "Etzer Vilaire", "Évelyne Trouillot", "Jean-Robert Léonidas"],
    correct: 1
  },
  {
    q: "Nadine Magloire a notamment donné naissance à quelle œuvre ?",
    options: ["La Couleur de l'aube", "Poésies nationales", "Le Livre d'Emma", "Le Mal de vivre"],
    correct: 3
  },
  {
    q: "Quel titre figure dans la bibliographie de Roland Morisseau ?",
    options: ["L'Heure hybride", "Rêver debout", "Bicentenaire", "Les Contes haïtiens"],
    correct: 1
  },
  {
    q: "« Haïti kenbe la ! » a été publié(e) par quel écrivain haïtien ?",
    options: ["Rodney Saint-Éloi", "Jacques Stephen Alexis", "Gary Klang", "Oswald Durand"],
    correct: 0
  },
  {
    q: "Quel titre figure dans la bibliographie de Georges Anglade ?",
    options: ["Assaut à la nuit", "Encre allègre", "Les Blancs de mémoire", "Mère-Solitude"],
    correct: 2
  },
  {
    q: "Parmi ces titres, lequel est signé Marie-Thérèse Colimon-Hall ?",
    options: ["Le Cri de l'oiseau rouge", "Le bout du monde est une fenêtre", "Fils de misère", "Les Arbres musiciens"],
    correct: 2
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Ces îles qui marchent » ?",
    options: ["Frankétienne", "René Philoctète", "Tertulien Guilbaud", "Georges Anglade"],
    correct: 1
  },
  {
    q: "Quelle est l'œuvre de Joujou Turenne parmi cette liste ?",
    options: ["Contes et légendes d'Haïti", "La mémoire aux abois", "Musique nègre", "L'Heure hybride"],
    correct: 0
  },
  {
    q: "À qui doit-on l'œuvre littéraire « L'Empereur Dessalines » ?",
    options: ["Massillon Coicou", "Pradel Pompilus", "James Noël", "Georges Anglade"],
    correct: 0
  },
  {
    q: "Retrouvez l'auteur de « Frayeur » parmi ces propositions :",
    options: ["Anténor Firmin", "Jean Métellus", "Kettly Mars", "Jean D'Amérique"],
    correct: 2
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Encre allègre » ?",
    options: ["Anténor Firmin", "Georges Castera", "Ida Faubert", "Windsor Bellegarde"],
    correct: 1
  },
  {
    q: "On doit à la plume de Gary Klang l'œuvre suivante :",
    options: ["Bonjour et adieu à la négritude", "Haïti, terre mystique", "Romancero aux étoiles", "Bois d'ébène"],
    correct: 1
  },
  {
    q: "« Le Cri de l'oiseau rouge » a été publié(e) par quel écrivain haïtien ?",
    options: ["Marie-Alice Théard", "Marvin Victor", "Jean-Euphèle Milcé", "Edwidge Danticat"],
    correct: 3
  },
  {
    q: "Quel écrivain haïtien a écrit « La Danse sur le volcan » ?",
    options: ["Marie Vieux-Chauvet", "Edwidge Danticat", "Frédéric Marcelin", "Roland Morisseau"],
    correct: 0
  },
  {
    q: "Le livre « Musa-Paidica » est dû à la plume de :",
    options: ["Louis Joseph Janvier", "Alibée Féry", "Georges Castera", "Néhémy Pierre-Dahomey"],
    correct: 1
  },
  {
    q: "« Jacmel au crépuscule » a été publié(e) par quel écrivain haïtien ?",
    options: ["Jean Métellus", "Fernand Hibbert", "Edwidge Danticat", "Paula Clermont Péan"],
    correct: 0
  },
  {
    q: "Parmi ces propositions, laquelle sort de la plume de Charles Moravia ?",
    options: ["Le Testament des solitudes", "Restavec", "La Crête-à-Pierrot", "Ainsi parla l'oncle"],
    correct: 2
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Les Fantoches » ?",
    options: ["Jacques Roumain", "Charles Moravia", "Georges Anglade", "Hénock Trouillot"],
    correct: 0
  },
  {
    q: "Quel nom d'auteur associez-vous à « Les Blancs de mémoire » ?",
    options: ["Marie-Thérèse Colimon-Hall", "Ida Faubert", "Louis-Philippe Dalembert", "Georges Anglade"],
    correct: 3
  },
  {
    q: "Le livre « Treize nouvelles vaudou » est dû à la plume de :",
    options: ["James Noël", "Lyonel Trouillot", "Gary Victor", "Yanick Lahens"],
    correct: 2
  },
  {
    q: "« Épisode de la Révolution » est signé par quel auteur haïtien ?",
    options: ["Isnardin Vieux", "Pradel Pompilus", "Ignace Nau", "Jean Métellus"],
    correct: 2
  },
  {
    q: "« La Famille des Pitite-Caille » est signé par quel auteur haïtien ?",
    options: ["Carl Brouard", "Placide David", "Justin Lhérisson", "Kettly Mars"],
    correct: 2
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Écrivains haïtiens » ?",
    options: ["Jacques Stephen Alexis", "Louis-Philippe Dalembert", "Windsor Bellegarde", "Paula Clermont Péan"],
    correct: 2
  },
  {
    q: "On doit à la plume de Justin Chrysostome Dorsainvil l'œuvre suivante :",
    options: ["Épisode de la Révolution", "Dessalines ou le sang du Pont-Rouge", "Manuel d'histoire d'Haïti", "Idem"],
    correct: 2
  },
  {
    q: "Gérard Étienne a notamment donné naissance à quelle œuvre ?",
    options: ["Le Nègre crucifié", "Séna", "Manuel illustré d'histoire de la littérature haïtienne", "Désirée Congo"],
    correct: 0
  },
  {
    q: "Faubert Bolivar a notamment donné naissance à quelle œuvre ?",
    options: ["Pages retrouvées", "Un Arc-en-ciel pour l'occident chrétien", "L'Autre Face de la mer", "Rue Frontière"],
    correct: 3
  },
  {
    q: "De quelle plume est issue l'œuvre « L'Héritage colonial en Haïti » ?",
    options: ["Jean-Robert Cadet", "Oswald Durand", "Antoine Innocent", "Placide David"],
    correct: 3
  },
  {
    q: "Retrouvez l'auteur de « Le Fusil et la croix » parmi ces propositions :",
    options: ["Serge Legagneur", "Windsor Bellegarde", "Michel Soukar", "Gary Klang"],
    correct: 2
  },
  {
    q: "« L'Heure hybride » est signé par quel auteur haïtien ?",
    options: ["Kettly Mars", "James Noël", "René Philoctète", "Roussan Camille"],
    correct: 0
  },
  {
    q: "Quel titre figure dans la bibliographie de Antoine Innocent ?",
    options: ["Bicentenaire", "Mimola", "Mère-Solitude", "Romulus"],
    correct: 1
  },
  {
    q: "Identifiez l'œuvre écrite par Marie-Alice Théard :",
    options: ["Bonjour et adieu à la négritude", "Mes années Duvalier", "La Bélière Caraïbe", "Les Contes haïtiens"],
    correct: 1
  },
  {
    q: "Quel nom d'auteur associez-vous à « Contes et légendes d'Haïti » ?",
    options: ["Joujou Turenne", "Jean-Robert Cadet", "Guy Régis Jr", "Gérard Étienne"],
    correct: 0
  },
  {
    q: "Quel titre figure dans la bibliographie de Pradel Pompilus ?",
    options: ["L'Héritage colonial en Haïti", "Le Reste du temps", "La Couleur de l'aube", "Manuel illustré d'histoire de la littérature haïtienne"],
    correct: 3
  },
  {
    q: "« Le Lambi » est signé par quel auteur haïtien ?",
    options: ["Ignace Nau", "Hénock Trouillot", "Georges Anglade", "Jean Price-Mars"],
    correct: 0
  },
  {
    q: "Qui est l'auteur(e) de l'œuvre « Je suis vivant » ?",
    options: ["Roland Morisseau", "Kettly Mars", "James Noël", "Frédéric Marcelin"],
    correct: 1
  },
  {
    q: "Retrouvez l'auteur de « Anacaona » parmi ces propositions :",
    options: ["Jean-Claude Bajeux", "Isnardin Vieux", "Jean Métellus", "Jean-Claude Charles"],
    correct: 2
  },
  {
    q: "Qui a publié le livre « La Blanche Négresse » ?",
    options: ["Jean-Euphèle Milcé", "Antoine Innocent", "Isnardin Vieux", "Cléante Valcin"],
    correct: 3
  },
  {
    q: "Quel(le) écrivain(e) haïtien(ne) a créé l'œuvre « Soleil à coudre » ?",
    options: ["Jacques Roumain", "Jean D'Amérique", "Pradel Pompilus", "Jean-Claude Bajeux"],
    correct: 1
  },
  {
    q: "Quelle est l'œuvre de Jean-Robert Cadet parmi cette liste ?",
    options: ["L'Heure hybride", "Amour, Colère et Folie", "L'Année Dessalines", "Restavec"],
    correct: 3
  },
  {
    q: "De quelle plume est issue l'œuvre « Zombi Blues » ?",
    options: ["Dany Laferrière", "James Noël", "Pradel Pompilus", "Stanley Péan"],
    correct: 3
  },
  {
    q: "À qui doit-on l'œuvre littéraire « Soleil à coudre » ?",
    options: ["Jean-Robert Léonidas", "Jean D'Amérique", "Pradel Pompilus", "Nadine Magloire"],
    correct: 1
  },
  {
    q: "Retrouvez l'auteur de « Écrit sur du ruban rose » parmi ces propositions :",
    options: ["Kettly Mars", "Jean-Robert Cadet", "Carl Brouard", "Joujou Turenne"],
    correct: 2
  },
  {
    q: "Parmi ces titres, lequel est signé Émile Roumer ?",
    options: ["Le Nègre crucifié", "Poèmes d'Haïti et de France", "À l'angle des rues parallèles", "L'Odeur du café"],
    correct: 1
  },
  {
    q: "Quelle œuvre peut-on attribuer avec certitude à Georges Sylvain ?",
    options: ["Cric? Crac!", "Les Immortelles", "Une eau-forte", "Maître-Minuit"],
    correct: 0
  },
  {
    q: "Marvin Victor est notamment l'auteur(e) de :",
    options: ["Fils de misère", "L'Espace d'un cillement", "Corps mêlés", "Boulevard Baie des Anges"],
    correct: 2
  },
  {
    q: "Qui a publié le livre « Pages retrouvées » ?",
    options: ["Carl Brouard", "Nadine Magloire", "Évelyne Trouillot", "Louis Joseph Janvier"],
    correct: 0
  },
  {
    q: "« Rue Frontière » compte parmi les œuvres de quel auteur ?",
    options: ["Faubert Bolivar", "Gary Victor", "Ignace Nau", "Antoine Innocent"],
    correct: 0
  },
]

export default litteratureQuestions
