const personnalitesQuestions = [
  {
    q: "Pour quelle raison Michael Brun est-il connu dans l'histoire ou la culture haïtienne ?",
    options: ["Succéda à son père comme « Président à vie » de 1971 à 1986", "DJ et producteur fusionnant konpa et musique électronique", "Première femme à assurer la présidence d'Haïti (1990-1991)", "Président élu en 2016, assassiné en fonction en 2021"],
    correct: 1
  },
  {
    q: "Comment reconnaît-on Benoît Batraville parmi les autres personnalités haïtiennes ?",
    options: ["Général cacos ayant poursuivi la résistance après la mort de Péralte", "Compagnon de Vincent Ogé dans la lutte pour les droits des libres de couleur", "Chanteur de konpa social devenu une icône engagée", "Militaire devenu président dans les années 1950"],
    correct: 0
  },
  {
    q: "Baron Samedi appartient à quel type de figure historique ou culturelle ?",
    options: ["Figure religieuse / vodou", "Père fondateur / figure de l'Indépendance", "Intellectuel / militant", "Peintre / artiste visuel"],
    correct: 0
  },
  {
    q: "Anténor Firmin appartient à quel type de figure historique ou culturelle ?",
    options: ["Intellectuel / militant", "Chef d'État", "Père fondateur / figure de l'Indépendance", "Peintre / artiste visuel"],
    correct: 0
  },
  {
    q: "Quelle est l'époque de référence pour Lyonel Trouillot ?",
    options: ["Intemporel (figure du folklore/vodou)", "Époque contemporaine (2000 à aujourd'hui)", "Début XXe siècle", "Révolution haïtienne (avant 1804)"],
    correct: 1
  },
  {
    q: "D'où est originaire Jean-Pierre Boyer, ou à quel lieu est-il le plus associé ?",
    options: ["Diaspora (New Jersey)", "Cap-Haïtien", "Port-au-Prince", "Jacmel"],
    correct: 2
  },
  {
    q: "Quel élément biographique distingue Samuel Dalembert ?",
    options: ["Poète et romancier, figure du mouvement Haïti Littéraire", "Pivot haïtiano-canadien ayant joué en NBA", "Autrice du triptyque romanesque « Amour, Colère et Folie »", "Poétesse haïtienne ayant vécu principalement en France"],
    correct: 1
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Charlemagne Péralte ?",
    options: ["Anse-à-Veau", "Quartier-Morin (Nord)", "Hinche (Centre)", "Port-Salut"],
    correct: 2
  },
  {
    q: "Dans quelle catégorie situerait-on Jean-Jacques Dessalines ?",
    options: ["Chef d'État", "Personnage du folklore", "Père fondateur / figure de l'Indépendance", "Écrivain"],
    correct: 2
  },
  {
    q: "Pour quoi Emeline Michel est-elle surtout reconnue ?",
    options: ["Poétesse haïtienne ayant vécu principalement en France", "Chanteuse surnommée « la Grande Dame de la chanson haïtienne »", "Chef de file de l'école du Cap dans la peinture haïtienne", "Poète et romancier, figure du mouvement Haïti Littéraire"],
    correct: 1
  },
  {
    q: "À quel moment de l'histoire haïtienne rattache-t-on Alexandre Pétion ?",
    options: ["Milieu XXe siècle (1930-1970)", "Début XXe siècle", "Révolution haïtienne (avant 1804)", "Fin XXe siècle (1970-2000)"],
    correct: 2
  },
  {
    q: "Quel rôle décrit le mieux Dany Laferrière dans l'histoire ou la culture haïtienne ?",
    options: ["Intellectuel / militant", "Figure religieuse / vodou", "Écrivain", "Musicien"],
    correct: 2
  },
  {
    q: "Pour quoi Ezili Freda est-elle surtout reconnue ?",
    options: ["Lwa associée à l'amour, la beauté et le luxe dans le vodou haïtien", "Se proclama roi d'Haïti et fit construire la Citadelle Laferrière", "Politologue devenu président pendant quelques mois en 1988", "Chef militaire et politique, figure centrale de la Révolution haïtienne"],
    correct: 0
  },
  {
    q: "À quel moment de l'histoire haïtienne rattache-t-on Garry Conille ?",
    options: ["XIXe siècle", "Époque contemporaine (2000 à aujourd'hui)", "Révolution haïtienne (avant 1804)", "Fin XXe siècle (1970-2000)"],
    correct: 1
  },
  {
    q: "Quel rôle décrit le mieux Ogou dans l'histoire ou la culture haïtienne ?",
    options: ["Père fondateur / figure de l'Indépendance", "Athlète / sportif", "Figure religieuse / vodou", "Personnage du folklore"],
    correct: 2
  },
  {
    q: "Castera Bazile est principalement associé à quel lieu ?",
    options: ["Jacmel", "Quartier-Morin (Nord)", "Nord (Grande-Rivière-du-Nord)", "Verrettes (Artibonite)"],
    correct: 0
  },
  {
    q: "Qu'est-ce qui rend Garry Conille célèbre ou important ?",
    options: ["Écrivain, peintre et dramaturge, pionnier du spiralisme", "Ancien fonctionnaire de l'ONU nommé Premier ministre à deux reprises", "Romancière contemporaine, autrice de « Saisons sauvages »", "Boxeur professionnel haïtiano-américain, ancien champion du monde"],
    correct: 1
  },
  {
    q: "Quel lieu géographique évoque le plus Vincent Ogé ?",
    options: ["Saint-Marc", "Nord (Bois-Caïman)", "Dondon (Nord)", "Quartier-Morin (Nord)"],
    correct: 2
  },
  {
    q: "À quelle époque associe-t-on Wilson Bigaud ?",
    options: ["Fin XXe siècle (1970-2000)", "Début XXe siècle", "Intemporel (figure du folklore/vodou)", "Milieu XXe siècle (1930-1970)"],
    correct: 3
  },
  {
    q: "Comment reconnaît-on Alexandre Pétion parmi les autres personnalités haïtiennes ?",
    options: ["Militaire devenu président dans les années 1950", "Premier président de la République d'Haïti (partie Sud)", "Artiste contemporain mêlant histoire haïtienne et symbolisme vodou", "Peintre célèbre pour sa fresque à la Cathédrale Sainte-Trinité"],
    correct: 1
  },
  {
    q: "D'où est originaire Vincent Ogé, ou à quel lieu est-il le plus associé ?",
    options: ["Dondon (Nord)", "Diaspora (New Jersey)", "Hinche (Centre)", "Plateau Central"],
    correct: 0
  },
  {
    q: "Où situe-t-on l'histoire de Sténio Vincent ?",
    options: ["Trou-du-Nord (Nord-Est)", "Port-au-Prince", "Diaspora (États-Unis)", "Port-Salut"],
    correct: 1
  },
  {
    q: "Comment Azaka (Papa Zaka) est-il principalement connu ?",
    options: ["Écrivain", "Figure religieuse / vodou", "Musicien", "Personnage du folklore"],
    correct: 1
  },
  {
    q: "De quel type de personnalité s'agit-il pour Charlemagne Péralte ?",
    options: ["Intellectuel / militant", "Père fondateur / figure de l'Indépendance", "Peintre / artiste visuel", "Musicien"],
    correct: 1
  },
  {
    q: "Quel rôle décrit le mieux Emmanuel Sanon dans l'histoire ou la culture haïtienne ?",
    options: ["Figure religieuse / vodou", "Athlète / sportif", "Chef d'État", "Écrivain"],
    correct: 1
  },
  {
    q: "Pour quelle raison Faustin Soulouque est-il connu dans l'histoire ou la culture haïtienne ?",
    options: ["Président puis empereur d'Haïti sous le nom de Faustin Ier", "Lwa associée à l'amour, la beauté et le luxe dans le vodou haïtien", "Président ayant unifié l'ensemble de l'île sous administration haïtienne", "Écrivain, peintre et dramaturge, pionnier du spiralisme"],
    correct: 0
  },
  {
    q: "Où Édouard Duval-Carrié a-t-il vécu ou marqué l'histoire ?",
    options: ["National / légendaire", "Ravine-Sèche", "Marmelade (Artibonite)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Dumarsais Estimé a marqué ou vécu principalement à quelle période ?",
    options: ["Début XXe siècle", "Milieu XXe siècle (1930-1970)", "Intemporel (figure du folklore/vodou)", "Révolution haïtienne (avant 1804)"],
    correct: 1
  },
  {
    q: "Quel élément biographique distingue Michael Brun ?",
    options: ["Lwa guerrier associé au fer et à la force dans le vodou haïtien", "Héroïne de la Révolution haïtienne exécutée par les troupes françaises", "Poète national, auteur du célèbre poème « Choucoune »", "DJ et producteur fusionnant konpa et musique électronique"],
    correct: 3
  },
  {
    q: "Pour quoi La Sirène (Lasirenn) est-elle surtout reconnue ?",
    options: ["Autrice du triptyque romanesque « Amour, Colère et Folie »", "Neurochirurgien devenu Premier ministre après l'assassinat de Jovenel Moïse", "Lwa des eaux et de la mer dans le vodou haïtien", "Artiste contemporain mêlant histoire haïtienne et symbolisme vodou"],
    correct: 2
  },
  {
    q: "D'où est originaire Azaka (Papa Zaka), ou à quel lieu est-il le plus associé ?",
    options: ["Grande Rivière du Nord", "Petit-Goâve", "Cap-Haïtien", "National / légendaire"],
    correct: 3
  },
  {
    q: "Edwidge Danticat a marqué ou vécu principalement à quelle période ?",
    options: ["Révolution haïtienne (avant 1804)", "Début XXe siècle", "Fin XXe siècle (1970-2000)", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 3
  },
  {
    q: "Quelle période correspond le mieux à Boniface Alexandre ?",
    options: ["Fin XXe siècle (1970-2000)", "Époque contemporaine (2000 à aujourd'hui)", "Intemporel (figure du folklore/vodou)", "Milieu XXe siècle (1930-1970)"],
    correct: 1
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Ariel Henry ?",
    options: ["Port-au-Prince", "Jérémie (Grande-Anse)", "Gonaïves", "Jacmel"],
    correct: 1
  },
  {
    q: "Comment reconnaît-on Sténio Vincent parmi les autres personnalités haïtiennes ?",
    options: ["Première femme à assurer la présidence d'Haïti (1990-1991)", "Général célèbre pour sa bravoure à la bataille de Vertières", "Ancien chanteur de konpa devenu président de la République", "Président ayant négocié la fin de l'occupation américaine"],
    correct: 3
  },
  {
    q: "Quand Gary Victor a-t-il été le plus actif ou influent ?",
    options: ["Fin XXe siècle (1970-2000)", "Début XXe siècle", "Époque contemporaine (2000 à aujourd'hui)", "XIXe siècle"],
    correct: 2
  },
  {
    q: "Myriam Merlet provient ou est rattachée à quelle zone ?",
    options: ["Port-Salut", "Cap-Haïtien", "Port-au-Prince", "Nord (Bois-Caïman)"],
    correct: 2
  },
  {
    q: "Qu'est-ce qui rend Bouki célèbre ou important ?",
    options: ["Anthropologue, auteur de « De l'égalité des races humaines »", "Personnage naïf et souvent trompé dans les contes populaires haïtiens", "Lwa gardien des carrefours et intermédiaire avec les autres esprits", "Président par intérim après le départ d'Aristide en 2004"],
    correct: 1
  },
  {
    q: "Où Ertha Pascal-Trouillot a-t-elle vécu ou marqué l'histoire ?",
    options: ["Hinche (Centre)", "Grande Rivière du Nord", "Trou-du-Nord (Nord-Est)", "Petit-Goâve"],
    correct: 3
  },
  {
    q: "Quel lieu géographique évoque le plus Coupé Cloué ?",
    options: ["Nord (Bois-Caïman)", "Jacmel", "Nord (Grande-Rivière-du-Nord)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Paul Magloire ?",
    options: ["Marmelade (Artibonite)", "Quartier-Morin (Nord)", "Port-au-Prince", "Verrettes (Artibonite)"],
    correct: 1
  },
  {
    q: "Dans quelle catégorie situerait-on Henri Christophe ?",
    options: ["Intellectuel / militant", "Père fondateur / figure de l'Indépendance", "Peintre / artiste visuel", "Écrivain"],
    correct: 1
  },
  {
    q: "Pour quelle raison Vincent Ogé est-il connu dans l'histoire ou la culture haïtienne ?",
    options: ["Poète national, auteur du célèbre poème « Choucoune »", "Lwa gardien des carrefours et intermédiaire avec les autres esprits", "Homme de couleur libre ayant mené une révolte avant l'indépendance", "Poète et romancier, prix Renaudot pour « Hadriana dans tous mes rêves »"],
    correct: 2
  },
  {
    q: "Qu'est-ce qui rend Ida Faubert célèbre ou importante ?",
    options: ["Militante féministe, cofondatrice d'organisations pour les droits des femmes", "Prêtresse vodou associée à la cérémonie du Bois-Caïman", "Poétesse haïtienne ayant vécu principalement en France", "Président ayant négocié la fin de l'occupation américaine"],
    correct: 2
  },
  {
    q: "À quelle époque associe-t-on Dany Laferrière ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Révolution haïtienne (avant 1804)", "XIXe siècle", "Début XXe siècle"],
    correct: 0
  },
  {
    q: "Quel lieu géographique évoque le plus Jean Price-Mars ?",
    options: ["Verrettes (Artibonite)", "Grande Rivière du Nord", "Nord (Bois-Caïman)", "Port-au-Prince"],
    correct: 1
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Boniface Alexandre ?",
    options: ["Président par intérim après le départ d'Aristide en 2004", "Ancien prêtre devenu président à deux reprises", "Poète et romancier, prix Renaudot pour « Hadriana dans tous mes rêves »", "Personnage rusé qui déjoue toujours son compère Bouki"],
    correct: 0
  },
  {
    q: "Quelle période correspond le mieux à Suzanne Comhaire-Sylvain ?",
    options: ["XIXe siècle", "Milieu XXe siècle (1930-1970)", "Fin XXe siècle (1970-2000)", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 1
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Lyonel Trouillot ?",
    options: ["Port-au-Prince", "Dondon (Nord)", "Marmelade (Artibonite)", "National / légendaire"],
    correct: 0
  },
  {
    q: "Qu'est-ce qui rend Dany Laferrière célèbre ou important ?",
    options: ["Poète national, auteur du célèbre poème « Choucoune »", "Écrivain élu à l'Académie française", "Chanteur engagé devenu maire de Port-au-Prince", "Premier président de la République d'Haïti (partie Sud)"],
    correct: 1
  },
  {
    q: "Dans quelle période de l'histoire haïtienne situe-t-on Benoît Batraville ?",
    options: ["Début XXe siècle", "Milieu XXe siècle (1930-1970)", "Époque contemporaine (2000 à aujourd'hui)", "XIXe siècle"],
    correct: 0
  },
  {
    q: "Pour quelle raison Charles Oscar Étienne (Jean-Baptiste Chavannes) est-il connu dans l'histoire ou la culture haïtienne ?",
    options: ["Anthropologue, auteur de « De l'égalité des races humaines »", "Artiste contemporain mêlant histoire haïtienne et symbolisme vodou", "Chanteuse et actrice, figure de la chanson racine haïtienne", "Compagnon de Vincent Ogé dans la lutte pour les droits des libres de couleur"],
    correct: 3
  },
  {
    q: "Quelle période correspond le mieux à Faustin Soulouque ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "XIXe siècle", "Intemporel (figure du folklore/vodou)", "Fin XXe siècle (1970-2000)"],
    correct: 1
  },
  {
    q: "Quelle étiquette correspond le mieux à Emmanuel Sanon ?",
    options: ["Diplomate / personnalité internationale", "Intellectuel / militant", "Peintre / artiste visuel", "Athlète / sportif"],
    correct: 3
  },
  {
    q: "Michel Martelly provient ou est rattaché à quelle zone ?",
    options: ["Anse-à-Veau", "Marmelade (Artibonite)", "Port-au-Prince", "Diaspora (Canada)"],
    correct: 2
  },
  {
    q: "Quel élément biographique distingue Wilson Bigaud ?",
    options: ["Écrivain élu à l'Académie française", "Peintre célèbre pour sa fresque à la Cathédrale Sainte-Trinité", "Figure fondatrice de la peinture naïve haïtienne", "Général cacos ayant poursuivi la résistance après la mort de Péralte"],
    correct: 1
  },
  {
    q: "Quel fait marquant est associé à Catherine Flon ?",
    options: ["Romancière haïtiano-américaine, autrice de « Breath, Eyes, Memory »", "Aurait cousu le premier drapeau haïtien en 1803", "Écrivain et diplomate défenseur de la dignité haïtienne", "Général célèbre pour sa bravoure à la bataille de Vertières"],
    correct: 1
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Jean-Claude Duvalier (Baby Doc) ?",
    options: ["Succéda à son père comme « Président à vie » de 1971 à 1986", "Chef militaire et politique, figure centrale de la Révolution haïtienne", "Neurochirurgien devenu Premier ministre après l'assassinat de Jovenel Moïse", "Prêtresse vodou associée à la cérémonie du Bois-Caïman"],
    correct: 0
  },
  {
    q: "Michel Martelly appartient à quelle période historique ?",
    options: ["Intemporel (figure du folklore/vodou)", "Révolution haïtienne (avant 1804)", "Début XXe siècle", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 3
  },
  {
    q: "Quelle étiquette correspond le mieux à La Sirène (Lasirenn) ?",
    options: ["Figure religieuse / vodou", "Intellectuel / militant", "Musicien", "Peintre / artiste visuel"],
    correct: 0
  },
  {
    q: "Quelle étiquette correspond le mieux à Castera Bazile ?",
    options: ["Chef d'État", "Musicien", "Peintre / artiste visuel", "Écrivain"],
    correct: 2
  },
  {
    q: "Louis Joseph Janvier appartient à quel type de figure historique ou culturelle ?",
    options: ["Intellectuel / militant", "Athlète / sportif", "Personnage du folklore", "Figure religieuse / vodou"],
    correct: 0
  },
  {
    q: "Quelle est l'époque de référence pour Rigaud Benoit ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Révolution haïtienne (avant 1804)", "Fin XXe siècle (1970-2000)", "Milieu XXe siècle (1930-1970)"],
    correct: 3
  },
  {
    q: "Comment reconnaît-on Anténor Firmin parmi les autres personnalités haïtiennes ?",
    options: ["Lwa protecteur de l'agriculture et des paysans dans le vodou haïtien", "Anthropologue, auteur de « De l'égalité des races humaines »", "Prêtresse vodou associée à la cérémonie du Bois-Caïman", "Poète et romancier, prix Renaudot pour « Hadriana dans tous mes rêves »"],
    correct: 1
  },
  {
    q: "Edwidge Danticat est principalement associée à quel lieu ?",
    options: ["Port-au-Prince", "Nord (Cap-Haïtien)", "Anse-à-Veau", "Cap-Haïtien"],
    correct: 0
  },
  {
    q: "Quel fait marquant est associé à Wyclef Jean ?",
    options: ["Musicien haïtiano-américain, ex-membre du groupe The Fugees", "Militante féministe, cofondatrice d'organisations pour les droits des femmes", "Poète et romancier, figure du mouvement Haïti Littéraire", "Aurait cousu le premier drapeau haïtien en 1803"],
    correct: 0
  },
  {
    q: "Comment reconnaît-on Ariel Henry parmi les autres personnalités haïtiennes ?",
    options: ["Lwa associée à l'amour, la beauté et le luxe dans le vodou haïtien", "Neurochirurgien devenu Premier ministre après l'assassinat de Jovenel Moïse", "Journaliste féministe pionnière en Haïti", "Président ayant unifié l'ensemble de l'île sous administration haïtienne"],
    correct: 1
  },
  {
    q: "Dans quelle période de l'histoire haïtienne situe-t-on Paul Magloire ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "XIXe siècle", "Début XXe siècle", "Milieu XXe siècle (1930-1970)"],
    correct: 3
  },
  {
    q: "Où situe-t-on l'histoire de Cécile Fatiman ?",
    options: ["Port-au-Prince", "Gonaïves", "Hinche (Centre)", "Nord (Bois-Caïman)"],
    correct: 3
  },
  {
    q: "Où Baron Samedi a-t-il vécu ou marqué l'histoire ?",
    options: ["Port-au-Prince", "Quartier-Morin (Nord)", "National / légendaire", "Grande Rivière du Nord"],
    correct: 2
  },
  {
    q: "Quelle est la nature du rôle joué par Andre Berto ?",
    options: ["Écrivain", "Athlète / sportif", "Musicien", "Personnage du folklore"],
    correct: 1
  },
  {
    q: "Comment Boukman Dutty est-il principalement connu ?",
    options: ["Écrivain", "Père fondateur / figure de l'Indépendance", "Figure religieuse / vodou", "Intellectuel / militant"],
    correct: 1
  },
  {
    q: "Où situe-t-on l'histoire de Ariel Henry ?",
    options: ["Diaspora (New Jersey)", "Jérémie (Grande-Anse)", "Jacmel", "Diaspora (États-Unis)"],
    correct: 1
  },
  {
    q: "Où situe-t-on l'histoire de Andre Berto ?",
    options: ["Diaspora (Floride)", "Verrettes (Artibonite)", "Nord (Arcahaie)", "Port-Salut"],
    correct: 0
  },
  {
    q: "Où situe-t-on l'histoire de Baron Samedi ?",
    options: ["Jérémie (Grande-Anse)", "Nord (Grande-Rivière-du-Nord)", "National / légendaire", "Ravine-Sèche"],
    correct: 2
  },
  {
    q: "Gary Victor appartient à quel type de figure historique ou culturelle ?",
    options: ["Père fondateur / figure de l'Indépendance", "Chef d'État", "Figure religieuse / vodou", "Écrivain"],
    correct: 3
  },
  {
    q: "De quel type de personnalité s'agit-il pour Jean-Jacques Dessalines ?",
    options: ["Père fondateur / figure de l'Indépendance", "Figure religieuse / vodou", "Musicien", "Intellectuel / militant"],
    correct: 0
  },
  {
    q: "Gary Victor provient ou est rattaché à quelle zone ?",
    options: ["Port-au-Prince", "Hinche (Centre)", "Nord (Arcahaie)", "Port-Salut"],
    correct: 0
  },
  {
    q: "Où Coupé Cloué a-t-il vécu ou marqué l'histoire ?",
    options: ["Port-au-Prince", "Nord (Grande-Rivière-du-Nord)", "Saint-Marc", "Sud (Grande-Anse)"],
    correct: 0
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Catherine Flon ?",
    options: ["Port-au-Prince", "Cap-Haïtien", "Jacmel", "Nord (Arcahaie)"],
    correct: 3
  },
  {
    q: "Quand Michaëlle Jean a-t-elle été la plus active ou influente ?",
    options: ["Fin XXe siècle (1970-2000)", "Époque contemporaine (2000 à aujourd'hui)", "Révolution haïtienne (avant 1804)", "XIXe siècle"],
    correct: 1
  },
  {
    q: "Alexandre Pétion a marqué ou vécu principalement à quelle période ?",
    options: ["Révolution haïtienne (avant 1804)", "Début XXe siècle", "XIXe siècle", "Fin XXe siècle (1970-2000)"],
    correct: 0
  },
  {
    q: "D'où est originaire Papa Legba, ou à quel lieu est-il le plus associé ?",
    options: ["Nord (Cap-Haïtien)", "National / légendaire", "Port-Salut", "Diaspora (États-Unis)"],
    correct: 1
  },
  {
    q: "De quel type de personnalité s'agit-il pour Paul Magloire ?",
    options: ["Personnage du folklore", "Peintre / artiste visuel", "Chef d'État", "Intellectuel / militant"],
    correct: 2
  },
  {
    q: "D'où est originaire Castera Bazile, ou à quel lieu est-il le plus associé ?",
    options: ["Grande Rivière du Nord", "Port-Salut", "Verrettes (Artibonite)", "Jacmel"],
    correct: 3
  },
  {
    q: "Wyclef Jean provient ou est rattaché à quelle zone ?",
    options: ["Port-au-Prince", "Anse-à-Veau", "Dondon (Nord)", "Diaspora (New Jersey)"],
    correct: 3
  },
  {
    q: "Quelle étiquette correspond le mieux à Jean-Jacques Dessalines ?",
    options: ["Père fondateur / figure de l'Indépendance", "Peintre / artiste visuel", "Chef d'État", "Écrivain"],
    correct: 0
  },
  {
    q: "Où situe-t-on l'histoire de Leslie Manigat ?",
    options: ["Port-au-Prince", "National / légendaire", "Jacmel", "Ravine-Sèche"],
    correct: 0
  },
  {
    q: "Comment classerait-on Kettly Mars parmi les personnalités haïtiennes ?",
    options: ["Peintre / artiste visuel", "Écrivain", "Intellectuel / militant", "Diplomate / personnalité internationale"],
    correct: 1
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Papa Legba ?",
    options: ["Chanteuse et actrice, figure de la chanson racine haïtienne", "Lwa gardien des carrefours et intermédiaire avec les autres esprits", "Artiste contemporain mêlant histoire haïtienne et symbolisme vodou", "Musicien haïtiano-américain, ex-membre du groupe The Fugees"],
    correct: 1
  },
  {
    q: "Où situe-t-on l'histoire de Ertha Pascal-Trouillot ?",
    options: ["Verrettes (Artibonite)", "Trou-du-Nord (Nord-Est)", "Nord (Bois-Caïman)", "Petit-Goâve"],
    correct: 3
  },
  {
    q: "Qu'est-ce qui rend Ariel Henry célèbre ou important ?",
    options: ["Aurait cousu le premier drapeau haïtien en 1803", "Homme de couleur libre ayant mené une révolte avant l'indépendance", "Chef militaire et politique, figure centrale de la Révolution haïtienne", "Neurochirurgien devenu Premier ministre après l'assassinat de Jovenel Moïse"],
    correct: 3
  },
  {
    q: "Quelle est la nature du rôle joué par Jacques Roumain ?",
    options: ["Personnage du folklore", "Écrivain", "Figure religieuse / vodou", "Musicien"],
    correct: 1
  },
  {
    q: "Pour quoi Jean-Claude Duvalier (Baby Doc) est-il surtout reconnu ?",
    options: ["Musicien haïtiano-américain, ex-membre du groupe The Fugees", "Ethnologue, auteur de « Ainsi parla l'oncle », père de l'indigénisme haïtien", "Succéda à son père comme « Président à vie » de 1971 à 1986", "Compagnon de Vincent Ogé dans la lutte pour les droits des libres de couleur"],
    correct: 2
  },
  {
    q: "Comment Yvonne Hakim-Rimpel est-elle principalement connue ?",
    options: ["Intellectuel / militant", "Athlète / sportif", "Diplomate / personnalité internationale", "Écrivain"],
    correct: 0
  },
  {
    q: "D'où est originaire Hector Hyppolite, ou à quel lieu est-il le plus associé ?",
    options: ["Saint-Marc", "Trou-du-Nord (Nord-Est)", "Sud (Grande-Anse)", "Dondon (Nord)"],
    correct: 0
  },
  {
    q: "Comment reconnaît-on René Préval parmi les autres personnalités haïtiennes ?",
    options: ["Premier président noir élu après une longue période d'influence mulâtre", "Seul président haïtien à avoir achevé deux mandats non consécutifs", "Général cacos ayant poursuivi la résistance après la mort de Péralte", "Chanteur de konpa social devenu une icône engagée"],
    correct: 1
  },
  {
    q: "Où situe-t-on l'histoire de Jean-Claude Duvalier (Baby Doc) ?",
    options: ["Port-au-Prince", "Nord (Grande-Rivière-du-Nord)", "Jacmel", "Petit-Goâve"],
    correct: 0
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Vincent Ogé ?",
    options: ["Diaspora (New Jersey)", "Hinche (Centre)", "Gonaïves", "Dondon (Nord)"],
    correct: 3
  },
  {
    q: "De quel type de personnalité s'agit-il pour Coupé Cloué ?",
    options: ["Père fondateur / figure de l'Indépendance", "Personnage du folklore", "Musicien", "Chef d'État"],
    correct: 2
  },
  {
    q: "Jean-Jacques Dessalines appartient à quelle période historique ?",
    options: ["XIXe siècle", "Fin XXe siècle (1970-2000)", "Intemporel (figure du folklore/vodou)", "Révolution haïtienne (avant 1804)"],
    correct: 3
  },
  {
    q: "Parmi les propositions suivantes, laquelle correspond à Castera Bazile ?",
    options: ["Figure religieuse / vodou", "Intellectuel / militant", "Chef d'État", "Peintre / artiste visuel"],
    correct: 3
  },
  {
    q: "Kettly Mars est principalement associée à quel lieu ?",
    options: ["Plateau Central", "Saint-Marc", "Trou-du-Nord (Nord-Est)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "De quel type de personnalité s'agit-il pour La Sirène (Lasirenn) ?",
    options: ["Chef d'État", "Diplomate / personnalité internationale", "Figure religieuse / vodou", "Écrivain"],
    correct: 2
  },
  {
    q: "Quelle étiquette correspond le mieux à Ezili Freda ?",
    options: ["Athlète / sportif", "Figure religieuse / vodou", "Chef d'État", "Intellectuel / militant"],
    correct: 1
  },
  {
    q: "Où situe-t-on l'histoire de Charles Oscar Étienne (Jean-Baptiste Chavannes) ?",
    options: ["Quartier-Morin (Nord)", "Sud (Grande-Anse)", "National / légendaire", "Grande Rivière du Nord"],
    correct: 1
  },
  {
    q: "Pour quoi Oswald Durand est-il surtout reconnu ?",
    options: ["Poète et romancier, figure du mouvement Haïti Littéraire", "Poète national, auteur du célèbre poème « Choucoune »", "Ancien fonctionnaire de l'ONU nommé Premier ministre à deux reprises", "Écrivain, peintre et dramaturge, pionnier du spiralisme"],
    correct: 1
  },
  {
    q: "Dans quelle période de l'histoire haïtienne situe-t-on Oswald Durand ?",
    options: ["XIXe siècle", "Époque contemporaine (2000 à aujourd'hui)", "Milieu XXe siècle (1930-1970)", "Intemporel (figure du folklore/vodou)"],
    correct: 0
  },
  {
    q: "Où Jean Dominique a-t-il vécu ou marqué l'histoire ?",
    options: ["Nord (Cap-Haïtien)", "Dondon (Nord)", "Port-au-Prince", "Jacmel"],
    correct: 2
  },
  {
    q: "Hector Hyppolite a marqué ou vécu principalement à quelle période ?",
    options: ["Fin XXe siècle (1970-2000)", "Milieu XXe siècle (1930-1970)", "Époque contemporaine (2000 à aujourd'hui)", "XIXe siècle"],
    correct: 1
  },
  {
    q: "Dumarsais Estimé appartient à quelle période historique ?",
    options: ["Milieu XXe siècle (1930-1970)", "Révolution haïtienne (avant 1804)", "XIXe siècle", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 0
  },
  {
    q: "Pour quoi Edwidge Danticat est-elle surtout reconnue ?",
    options: ["Romancière haïtiano-américaine, autrice de « Breath, Eyes, Memory »", "Chef de file de l'école du Cap dans la peinture haïtienne", "Chef militaire et politique, figure centrale de la Révolution haïtienne", "Première femme haïtienne docteure en lettres, anthropologue"],
    correct: 0
  },
  {
    q: "Où Leslie Manigat a-t-il vécu ou marqué l'histoire ?",
    options: ["Hinche (Centre)", "Gonaïves", "Port-au-Prince", "Anse-à-Veau"],
    correct: 2
  },
  {
    q: "Azaka (Papa Zaka) est principalement associé à quel lieu ?",
    options: ["Diaspora (New Jersey)", "Jérémie (Grande-Anse)", "Jacmel", "National / légendaire"],
    correct: 3
  },
  {
    q: "D'où est originaire Dumarsais Estimé, ou à quel lieu est-il le plus associé ?",
    options: ["Port-au-Prince", "Jacmel", "Verrettes (Artibonite)", "Cap-Haïtien"],
    correct: 2
  },
  {
    q: "Pour quoi Paul Magloire est-il surtout reconnu ?",
    options: ["Poète et romancier, prix Renaudot pour « Hadriana dans tous mes rêves »", "Chef de file de l'école du Cap dans la peinture haïtienne", "Militaire devenu président dans les années 1950", "Romancière haïtiano-américaine, autrice de « Breath, Eyes, Memory »"],
    correct: 2
  },
  {
    q: "Où situe-t-on l'histoire de Jacques Stephen Alexis ?",
    options: ["Jacmel", "Diaspora (Floride)", "Diaspora (Canada)", "Gonaïves"],
    correct: 3
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Jean-Robert Cadet ?",
    options: ["Romancière haïtiano-américaine, autrice de « Breath, Eyes, Memory »", "Lwa protecteur de l'agriculture et des paysans dans le vodou haïtien", "Poète national, auteur du célèbre poème « Choucoune »", "Auteur du récit autobiographique sur son enfance de « restavèk »"],
    correct: 3
  },
  {
    q: "Parmi les propositions suivantes, laquelle correspond à Fabre Geffrard ?",
    options: ["Musicien", "Écrivain", "Peintre / artiste visuel", "Chef d'État"],
    correct: 3
  },
  {
    q: "Où Cécile Fatiman a-t-elle vécu ou marqué l'histoire ?",
    options: ["Port-au-Prince", "Ravine-Sèche", "Nord (Bois-Caïman)", "Plateau Central"],
    correct: 2
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Fabre Geffrard ?",
    options: ["Politologue devenu président pendant quelques mois en 1988", "Président ayant modernisé l'éducation et les relations extérieures d'Haïti", "Président puis « Président à vie » d'Haïti de 1957 à 1971", "Journaliste féministe pionnière en Haïti"],
    correct: 1
  },
  {
    q: "Michaëlle Jean est principalement associée à quel lieu ?",
    options: ["Port-au-Prince", "Nord (Bois-Caïman)", "Diaspora (Canada)", "Diaspora (États-Unis)"],
    correct: 2
  },
  {
    q: "Quel fait marquant est associé à Ariel Henry ?",
    options: ["Chef de file de l'école du Cap dans la peinture haïtienne", "Neurochirurgien devenu Premier ministre après l'assassinat de Jovenel Moïse", "Autrice du triptyque romanesque « Amour, Colère et Folie »", "Romancière haïtiano-américaine, autrice de « Breath, Eyes, Memory »"],
    correct: 1
  },
  {
    q: "Pour quelle raison Myriam Merlet est-elle connue dans l'histoire ou la culture haïtienne ?",
    options: ["Militante féministe, cofondatrice d'organisations pour les droits des femmes", "Lwa protecteur de l'agriculture et des paysans dans le vodou haïtien", "Ancien chanteur de konpa devenu président de la République", "Journaliste féministe pionnière en Haïti"],
    correct: 0
  },
  {
    q: "Qu'est-ce qui rend Vincent Ogé célèbre ou important ?",
    options: ["Poète et romancier, figure du mouvement Haïti Littéraire", "Première femme à assurer la présidence d'Haïti (1990-1991)", "Homme de couleur libre ayant mené une révolte avant l'indépendance", "Prêtresse vodou associée à la cérémonie du Bois-Caïman"],
    correct: 2
  },
  {
    q: "De quel type de personnalité s'agit-il pour Kettly Mars ?",
    options: ["Écrivain", "Personnage du folklore", "Musicien", "Diplomate / personnalité internationale"],
    correct: 0
  },
  {
    q: "À quelle époque associe-t-on Michel Martelly ?",
    options: ["Intemporel (figure du folklore/vodou)", "Époque contemporaine (2000 à aujourd'hui)", "Début XXe siècle", "Fin XXe siècle (1970-2000)"],
    correct: 1
  },
  {
    q: "Quand Ertha Pascal-Trouillot a-t-elle été la plus active ou influente ?",
    options: ["Intemporel (figure du folklore/vodou)", "Fin XXe siècle (1970-2000)", "Époque contemporaine (2000 à aujourd'hui)", "XIXe siècle"],
    correct: 1
  },
  {
    q: "Lyonel Trouillot est principalement associé à quel lieu ?",
    options: ["Plateau Central", "Quartier-Morin (Nord)", "Grande Rivière du Nord", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Quel lieu géographique évoque le plus Ariel Henry ?",
    options: ["Jérémie (Grande-Anse)", "Gonaïves", "Nord (Cap-Haïtien)", "National / légendaire"],
    correct: 0
  },
  {
    q: "Quel lieu géographique évoque le plus Edwidge Danticat ?",
    options: ["Port-au-Prince", "Gonaïves", "Nord (Grande-Rivière-du-Nord)", "Nord (Arcahaie)"],
    correct: 0
  },
  {
    q: "Comment classerait-on Sténio Vincent parmi les personnalités haïtiennes ?",
    options: ["Diplomate / personnalité internationale", "Chef d'État", "Intellectuel / militant", "Père fondateur / figure de l'Indépendance"],
    correct: 1
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Ertha Pascal-Trouillot ?",
    options: ["Petit-Goâve", "Jérémie (Grande-Anse)", "Hinche (Centre)", "Cap-Haïtien"],
    correct: 0
  },
  {
    q: "Qu'est-ce qui rend Toussaint Louverture célèbre ou important ?",
    options: ["Auteur du roman « Gouverneurs de la rosée »", "Chef militaire et politique, figure centrale de la Révolution haïtienne", "Général cacos ayant poursuivi la résistance après la mort de Péralte", "Auteur du récit autobiographique sur son enfance de « restavèk »"],
    correct: 1
  },
  {
    q: "Quel lieu géographique évoque le plus Yvonne Hakim-Rimpel ?",
    options: ["Gonaïves", "Jacmel", "Jérémie (Grande-Anse)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Où situe-t-on l'histoire de Jacques Roumain ?",
    options: ["Nord (Arcahaie)", "Nord (Bois-Caïman)", "Port-au-Prince", "Verrettes (Artibonite)"],
    correct: 2
  },
  {
    q: "Quel lieu géographique évoque le plus Jean-Bertrand Aristide ?",
    options: ["Hinche (Centre)", "Cap-Haïtien", "Verrettes (Artibonite)", "Port-Salut"],
    correct: 3
  },
  {
    q: "Comment classerait-on Henri Christophe parmi les personnalités haïtiennes ?",
    options: ["Père fondateur / figure de l'Indépendance", "Chef d'État", "Intellectuel / militant", "Diplomate / personnalité internationale"],
    correct: 0
  },
  {
    q: "Quel fait marquant est associé à Kettly Mars ?",
    options: ["Attaquant international de l'équipe nationale de football d'Haïti", "Militante féministe, cofondatrice d'organisations pour les droits des femmes", "Romancière contemporaine, autrice de « Saisons sauvages »", "Prêtre vodou considéré comme un déclencheur de la révolte des esclaves de 1791"],
    correct: 2
  },
  {
    q: "À quelle époque associe-t-on Jean Dominique ?",
    options: ["Révolution haïtienne (avant 1804)", "Intemporel (figure du folklore/vodou)", "Fin XXe siècle (1970-2000)", "Milieu XXe siècle (1930-1970)"],
    correct: 2
  },
  {
    q: "Pour quelle raison Lyonel Trouillot est-il connu dans l'histoire ou la culture haïtienne ?",
    options: ["Homme de couleur libre ayant mené une révolte avant l'indépendance", "Peintre naïf associé au Centre d'Art de Port-au-Prince", "Romancier et poète contemporain engagé", "Proclama l'indépendance d'Haïti en 1804 et en devint le premier chef d'État"],
    correct: 2
  },
  {
    q: "Quel fait marquant est associé à Paul Magloire ?",
    options: ["Ancien chanteur de konpa devenu président de la République", "Prêtre vodou considéré comme un déclencheur de la révolte des esclaves de 1791", "Militaire devenu président dans les années 1950", "Attaquant international de l'équipe nationale de football d'Haïti"],
    correct: 2
  },
  {
    q: "Quel lieu géographique évoque le plus Castera Bazile ?",
    options: ["Ravine-Sèche", "Jacmel", "Diaspora (New Jersey)", "Trou-du-Nord (Nord-Est)"],
    correct: 1
  },
  {
    q: "Parmi les propositions suivantes, laquelle correspond à Marie Vieux-Chauvet ?",
    options: ["Figure religieuse / vodou", "Personnage du folklore", "Père fondateur / figure de l'Indépendance", "Écrivain"],
    correct: 3
  },
  {
    q: "Kettly Mars provient ou est rattachée à quelle zone ?",
    options: ["Diaspora (Canada)", "National / légendaire", "Jacmel", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Où Emeline Michel a-t-elle vécu ou marqué l'histoire ?",
    options: ["Jérémie (Grande-Anse)", "Marmelade (Artibonite)", "Nord (Bois-Caïman)", "Gonaïves"],
    correct: 3
  },
  {
    q: "Comment reconnaît-on Baron Samedi parmi les autres personnalités haïtiennes ?",
    options: ["Président ayant négocié la fin de l'occupation américaine", "Militante féministe, cofondatrice d'organisations pour les droits des femmes", "Première femme à assurer la présidence d'Haïti (1990-1991)", "Lwa des morts et gardien des cimetières dans le vodou haïtien"],
    correct: 3
  },
  {
    q: "Qu'est-ce qui rend Michel Martelly célèbre ou important ?",
    options: ["Poétesse haïtienne ayant vécu principalement en France", "Ancien chanteur de konpa devenu président de la République", "Boxeur professionnel haïtiano-américain, ancien champion du monde", "Auteur du roman « Gouverneurs de la rosée »"],
    correct: 1
  },
  {
    q: "Yvonne Hakim-Rimpel appartient à quelle période historique ?",
    options: ["Révolution haïtienne (avant 1804)", "Époque contemporaine (2000 à aujourd'hui)", "Milieu XXe siècle (1930-1970)", "Intemporel (figure du folklore/vodou)"],
    correct: 2
  },
  {
    q: "À quelle époque associe-t-on Boukman Dutty ?",
    options: ["Révolution haïtienne (avant 1804)", "Époque contemporaine (2000 à aujourd'hui)", "Fin XXe siècle (1970-2000)", "Intemporel (figure du folklore/vodou)"],
    correct: 0
  },
  {
    q: "Pour quoi Gary Victor est-il surtout reconnu ?",
    options: ["Romancier connu pour ses œuvres mêlant réalisme et fantastique", "Première femme haïtienne docteure en lettres, anthropologue", "Boxeur professionnel haïtiano-américain, ancien champion du monde", "Personnage rusé qui déjoue toujours son compère Bouki"],
    correct: 0
  },
  {
    q: "À quelle époque associe-t-on Castera Bazile ?",
    options: ["Milieu XXe siècle (1930-1970)", "Révolution haïtienne (avant 1804)", "Fin XXe siècle (1970-2000)", "Début XXe siècle"],
    correct: 0
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Michael Brun ?",
    options: ["Lwa guerrier associé au fer et à la force dans le vodou haïtien", "Compagnon de Vincent Ogé dans la lutte pour les droits des libres de couleur", "Homme de couleur libre ayant mené une révolte avant l'indépendance", "DJ et producteur fusionnant konpa et musique électronique"],
    correct: 3
  },
  {
    q: "Yvonne Hakim-Rimpel est principalement associée à quel lieu ?",
    options: ["Port-au-Prince", "Nord (Arcahaie)", "Dondon (Nord)", "Nord (Cap-Haïtien)"],
    correct: 0
  },
  {
    q: "Quel rôle décrit le mieux Sanite Bélair dans l'histoire ou la culture haïtienne ?",
    options: ["Athlète / sportif", "Personnage du folklore", "Père fondateur / figure de l'Indépendance", "Peintre / artiste visuel"],
    correct: 2
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Malice ?",
    options: ["National / légendaire", "Port-au-Prince", "Gonaïves", "Nord (Bois-Caïman)"],
    correct: 0
  },
  {
    q: "Pour quoi Castera Bazile est-il surtout reconnu ?",
    options: ["Auteur du roman « Gouverneurs de la rosée »", "Peintre ayant participé aux fresques de la Cathédrale Sainte-Trinité", "Président par intérim après le départ d'Aristide en 2004", "Politologue devenu président pendant quelques mois en 1988"],
    correct: 1
  },
  {
    q: "Ariel Henry a marqué ou vécu principalement à quelle période ?",
    options: ["XIXe siècle", "Milieu XXe siècle (1930-1970)", "Époque contemporaine (2000 à aujourd'hui)", "Fin XXe siècle (1970-2000)"],
    correct: 2
  },
  {
    q: "De quel type de personnalité s'agit-il pour Castera Bazile ?",
    options: ["Peintre / artiste visuel", "Chef d'État", "Musicien", "Figure religieuse / vodou"],
    correct: 0
  },
  {
    q: "Papa Legba provient ou est rattaché à quelle zone ?",
    options: ["Plateau Central", "Bréda (Cap-Haïtien)", "National / légendaire", "Trou-du-Nord (Nord-Est)"],
    correct: 2
  },
  {
    q: "Henri Christophe a marqué ou vécu principalement à quelle période ?",
    options: ["Milieu XXe siècle (1930-1970)", "Époque contemporaine (2000 à aujourd'hui)", "Début XXe siècle", "Révolution haïtienne (avant 1804)"],
    correct: 3
  },
  {
    q: "Pour quoi Emmanuel Sanon est-il surtout reconnu ?",
    options: ["Pivot haïtiano-canadien ayant joué en NBA", "Footballeur ayant marqué contre l'Italie à la Coupe du monde 1974", "Artiste contemporain mêlant histoire haïtienne et symbolisme vodou", "Politologue devenu président pendant quelques mois en 1988"],
    correct: 1
  },
  {
    q: "Quel lieu géographique évoque le plus Anténor Firmin ?",
    options: ["Jacmel", "Trou-du-Nord (Nord-Est)", "Cap-Haïtien", "Diaspora (Canada)"],
    correct: 2
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de La Sirène (Lasirenn) ?",
    options: ["Dondon (Nord)", "National / légendaire", "Port-au-Prince", "Bréda (Cap-Haïtien)"],
    correct: 1
  },
  {
    q: "Jean-Claude Duvalier (Baby Doc) appartient à quelle période historique ?",
    options: ["Intemporel (figure du folklore/vodou)", "Époque contemporaine (2000 à aujourd'hui)", "Milieu XXe siècle (1930-1970)", "Fin XXe siècle (1970-2000)"],
    correct: 3
  },
  {
    q: "Emeline Michel est principalement associée à quel lieu ?",
    options: ["Port-au-Prince", "Nord (Bois-Caïman)", "Gonaïves", "Verrettes (Artibonite)"],
    correct: 2
  },
  {
    q: "À quel moment de l'histoire haïtienne rattache-t-on Jean Dominique ?",
    options: ["Fin XXe siècle (1970-2000)", "Époque contemporaine (2000 à aujourd'hui)", "Début XXe siècle", "XIXe siècle"],
    correct: 0
  },
  {
    q: "Quelle est l'époque de référence pour Sanite Bélair ?",
    options: ["Révolution haïtienne (avant 1804)", "Époque contemporaine (2000 à aujourd'hui)", "Milieu XXe siècle (1930-1970)", "XIXe siècle"],
    correct: 0
  },
  {
    q: "Pour quelle raison Louis Joseph Janvier est-il connu dans l'histoire ou la culture haïtienne ?",
    options: ["Musicien haïtiano-américain, ex-membre du groupe The Fugees", "Lwa associée à l'amour, la beauté et le luxe dans le vodou haïtien", "Écrivain et diplomate défenseur de la dignité haïtienne", "Personnage naïf et souvent trompé dans les contes populaires haïtiens"],
    correct: 2
  },
  {
    q: "Pour quoi Ti Jean est-il surtout reconnu ?",
    options: ["Ethnologue, auteur de « Ainsi parla l'oncle », père de l'indigénisme haïtien", "Jeune héros malin des contes traditionnels haïtiens", "Chef de la résistance armée contre l'occupation américaine (1915-1934)", "Lwa gardien des carrefours et intermédiaire avec les autres esprits"],
    correct: 1
  },
  {
    q: "Quelle est l'époque de référence pour Garry Conille ?",
    options: ["Début XXe siècle", "Milieu XXe siècle (1930-1970)", "Époque contemporaine (2000 à aujourd'hui)", "Fin XXe siècle (1970-2000)"],
    correct: 2
  },
  {
    q: "Qu'est-ce qui rend Marie Vieux-Chauvet célèbre ou importante ?",
    options: ["Autrice du triptyque romanesque « Amour, Colère et Folie »", "Politologue devenu président pendant quelques mois en 1988", "Aurait cousu le premier drapeau haïtien en 1803", "Compagnon de Vincent Ogé dans la lutte pour les droits des libres de couleur"],
    correct: 0
  },
  {
    q: "René Préval est principalement associé à quel lieu ?",
    options: ["Marmelade (Artibonite)", "Gonaïves", "Port-au-Prince", "Jacmel"],
    correct: 0
  },
  {
    q: "Quelle est la nature du rôle joué par Wilson Bigaud ?",
    options: ["Peintre / artiste visuel", "Père fondateur / figure de l'Indépendance", "Intellectuel / militant", "Personnage du folklore"],
    correct: 0
  },
  {
    q: "Quelle période correspond le mieux à Wyclef Jean ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Milieu XXe siècle (1930-1970)", "Révolution haïtienne (avant 1804)", "Fin XXe siècle (1970-2000)"],
    correct: 0
  },
  {
    q: "Quel lieu géographique évoque le plus Jean-Pierre Boyer ?",
    options: ["Gonaïves", "Verrettes (Artibonite)", "Port-au-Prince", "Ravine-Sèche"],
    correct: 2
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Boniface Alexandre ?",
    options: ["Hinche (Centre)", "Diaspora (Floride)", "Port-au-Prince", "Nord (Bois-Caïman)"],
    correct: 2
  },
  {
    q: "À quelle époque associe-t-on Toussaint Louverture ?",
    options: ["Intemporel (figure du folklore/vodou)", "Fin XXe siècle (1970-2000)", "Révolution haïtienne (avant 1804)", "Milieu XXe siècle (1930-1970)"],
    correct: 2
  },
  {
    q: "Quel lieu géographique évoque le plus Emeline Michel ?",
    options: ["Gonaïves", "Port-au-Prince", "Diaspora (Floride)", "Nord (Arcahaie)"],
    correct: 0
  },
  {
    q: "Quel fait marquant est associé à Jacques Stephen Alexis ?",
    options: ["Aurait cousu le premier drapeau haïtien en 1803", "Footballeur ayant marqué contre l'Italie à la Coupe du monde 1974", "Romancier et médecin, auteur du « réalisme merveilleux »", "Se proclama roi d'Haïti et fit construire la Citadelle Laferrière"],
    correct: 2
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Edwidge Danticat ?",
    options: ["Nord (Grande-Rivière-du-Nord)", "Diaspora (New Jersey)", "Cap-Haïtien", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Quelle étiquette correspond le mieux à Philomé Obin ?",
    options: ["Écrivain", "Peintre / artiste visuel", "Personnage du folklore", "Intellectuel / militant"],
    correct: 1
  },
  {
    q: "Quel lieu géographique évoque le plus Michael Brun ?",
    options: ["Bréda (Cap-Haïtien)", "Nord (Grande-Rivière-du-Nord)", "Port-au-Prince", "Diaspora (New Jersey)"],
    correct: 2
  },
  {
    q: "Quand Oswald Durand a-t-il été le plus actif ou influent ?",
    options: ["Fin XXe siècle (1970-2000)", "XIXe siècle", "Révolution haïtienne (avant 1804)", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 1
  },
  {
    q: "Quelle période correspond le mieux à Michel Martelly ?",
    options: ["Intemporel (figure du folklore/vodou)", "Fin XXe siècle (1970-2000)", "Époque contemporaine (2000 à aujourd'hui)", "Début XXe siècle"],
    correct: 2
  },
  {
    q: "Parmi les propositions suivantes, laquelle correspond à Toto Bissainthe ?",
    options: ["Intellectuel / militant", "Musicien", "Personnage du folklore", "Athlète / sportif"],
    correct: 1
  },
  {
    q: "Myriam Merlet appartient à quelle période historique ?",
    options: ["Intemporel (figure du folklore/vodou)", "Fin XXe siècle (1970-2000)", "Milieu XXe siècle (1930-1970)", "Début XXe siècle"],
    correct: 1
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Toto Bissainthe ?",
    options: ["Poète national, auteur du célèbre poème « Choucoune »", "Jeune héros malin des contes traditionnels haïtiens", "Chanteuse et actrice, figure de la chanson racine haïtienne", "Président puis empereur d'Haïti sous le nom de Faustin Ier"],
    correct: 2
  },
  {
    q: "À quelle époque associe-t-on Gary Victor ?",
    options: ["Intemporel (figure du folklore/vodou)", "Époque contemporaine (2000 à aujourd'hui)", "Début XXe siècle", "Révolution haïtienne (avant 1804)"],
    correct: 1
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Jovenel Moïse ?",
    options: ["Trou-du-Nord (Nord-Est)", "Quartier-Morin (Nord)", "Gonaïves", "Ravine-Sèche"],
    correct: 0
  },
  {
    q: "Qu'est-ce qui rend Emmanuel Sanon célèbre ou important ?",
    options: ["Président puis « Président à vie » d'Haïti de 1957 à 1971", "Politologue devenu président pendant quelques mois en 1988", "Journaliste et directeur de Radio Haïti Inter, assassiné en 2000", "Footballeur ayant marqué contre l'Italie à la Coupe du monde 1974"],
    correct: 3
  },
  {
    q: "Quel élément biographique distingue Suzanne Comhaire-Sylvain ?",
    options: ["Lwa guerrier associé au fer et à la force dans le vodou haïtien", "Première femme haïtienne docteure en lettres, anthropologue", "Succéda à son père comme « Président à vie » de 1971 à 1986", "Première femme à assurer la présidence d'Haïti (1990-1991)"],
    correct: 1
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à François Duvalier (Papa Doc) ?",
    options: ["Neurochirurgien devenu Premier ministre après l'assassinat de Jovenel Moïse", "Président puis « Président à vie » d'Haïti de 1957 à 1971", "Militante féministe, cofondatrice d'organisations pour les droits des femmes", "Lwa associée à l'amour, la beauté et le luxe dans le vodou haïtien"],
    correct: 1
  },
  {
    q: "Cécile Fatiman a marqué ou vécu principalement à quelle période ?",
    options: ["Révolution haïtienne (avant 1804)", "Milieu XXe siècle (1930-1970)", "Fin XXe siècle (1970-2000)", "Début XXe siècle"],
    correct: 0
  },
  {
    q: "De quel type de personnalité s'agit-il pour Jacques Roumain ?",
    options: ["Personnage du folklore", "Peintre / artiste visuel", "Chef d'État", "Écrivain"],
    correct: 3
  },
  {
    q: "Parmi les propositions suivantes, laquelle correspond à Boukman Dutty ?",
    options: ["Chef d'État", "Père fondateur / figure de l'Indépendance", "Musicien", "Diplomate / personnalité internationale"],
    correct: 1
  },
  {
    q: "Quelle étiquette correspond le mieux à Charles Oscar Étienne (Jean-Baptiste Chavannes) ?",
    options: ["Figure religieuse / vodou", "Père fondateur / figure de l'Indépendance", "Personnage du folklore", "Musicien"],
    correct: 1
  },
  {
    q: "Jean-Jacques Dessalines est principalement associé à quel lieu ?",
    options: ["Nord (Grande-Rivière-du-Nord)", "National / légendaire", "Plateau Central", "Bréda (Cap-Haïtien)"],
    correct: 0
  },
  {
    q: "Quel élément biographique distingue Papa Legba ?",
    options: ["Lwa gardien des carrefours et intermédiaire avec les autres esprits", "Lwa guerrier associé au fer et à la force dans le vodou haïtien", "Chef de la résistance armée contre l'occupation américaine (1915-1934)", "Attaquant international de l'équipe nationale de football d'Haïti"],
    correct: 0
  },
  {
    q: "Dans quelle période de l'histoire haïtienne situe-t-on Kettly Mars ?",
    options: ["Début XXe siècle", "Époque contemporaine (2000 à aujourd'hui)", "XIXe siècle", "Fin XXe siècle (1970-2000)"],
    correct: 1
  },
  {
    q: "Dans quelle catégorie situerait-on Paul Magloire ?",
    options: ["Musicien", "Figure religieuse / vodou", "Personnage du folklore", "Chef d'État"],
    correct: 3
  },
  {
    q: "Quelle est la nature du rôle joué par Louis Joseph Janvier ?",
    options: ["Musicien", "Peintre / artiste visuel", "Chef d'État", "Intellectuel / militant"],
    correct: 3
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Fabre Geffrard ?",
    options: ["Dondon (Nord)", "Nord (Grande-Rivière-du-Nord)", "Grande Rivière du Nord", "Anse-à-Veau"],
    correct: 3
  },
  {
    q: "Quel élément biographique distingue Boniface Alexandre ?",
    options: ["Président par intérim après le départ d'Aristide en 2004", "Première femme haïtienne docteure en lettres, anthropologue", "Héroïne de la Révolution haïtienne exécutée par les troupes françaises", "Écrivain et diplomate défenseur de la dignité haïtienne"],
    correct: 0
  },
  {
    q: "Quel élément biographique distingue Jean Price-Mars ?",
    options: ["Ancien fonctionnaire de l'ONU nommé Premier ministre à deux reprises", "Ethnologue, auteur de « Ainsi parla l'oncle », père de l'indigénisme haïtien", "Lwa gardien des carrefours et intermédiaire avec les autres esprits", "Lwa serpent, considéré comme l'un des esprits les plus anciens du vodou"],
    correct: 1
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Sténio Vincent ?",
    options: ["Quartier-Morin (Nord)", "Port-au-Prince", "Jacmel", "Bréda (Cap-Haïtien)"],
    correct: 1
  },
  {
    q: "À quelle époque associe-t-on Manno Charlemagne ?",
    options: ["Fin XXe siècle (1970-2000)", "Milieu XXe siècle (1930-1970)", "Début XXe siècle", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 0
  },
  {
    q: "Comment reconnaît-on François Duvalier (Papa Doc) parmi les autres personnalités haïtiennes ?",
    options: ["Autrice du triptyque romanesque « Amour, Colère et Folie »", "Peintre naïf associé au Centre d'Art de Port-au-Prince", "Figure fondatrice de la peinture naïve haïtienne", "Président puis « Président à vie » d'Haïti de 1957 à 1971"],
    correct: 3
  },
  {
    q: "Comment Ogou est-il généralement présenté ?",
    options: ["Personnage du folklore", "Intellectuel / militant", "Athlète / sportif", "Figure religieuse / vodou"],
    correct: 3
  },
  {
    q: "Comment Faustin Soulouque est-il généralement présenté ?",
    options: ["Père fondateur / figure de l'Indépendance", "Diplomate / personnalité internationale", "Peintre / artiste visuel", "Chef d'État"],
    correct: 3
  },
  {
    q: "Leslie Manigat provient ou est rattaché à quelle zone ?",
    options: ["Gonaïves", "Ravine-Sèche", "Trou-du-Nord (Nord-Est)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Comment Philomé Obin est-il généralement présenté ?",
    options: ["Figure religieuse / vodou", "Musicien", "Peintre / artiste visuel", "Chef d'État"],
    correct: 2
  },
  {
    q: "Ti Jean appartient à quel type de figure historique ou culturelle ?",
    options: ["Personnage du folklore", "Figure religieuse / vodou", "Écrivain", "Chef d'État"],
    correct: 0
  },
  {
    q: "À quel moment de l'histoire haïtienne rattache-t-on Hector Hyppolite ?",
    options: ["XIXe siècle", "Révolution haïtienne (avant 1804)", "Fin XXe siècle (1970-2000)", "Milieu XXe siècle (1930-1970)"],
    correct: 3
  },
  {
    q: "Dans quelle catégorie situerait-on Leslie Manigat ?",
    options: ["Figure religieuse / vodou", "Chef d'État", "Personnage du folklore", "Père fondateur / figure de l'Indépendance"],
    correct: 1
  },
  {
    q: "Comment reconnaît-on Faustin Soulouque parmi les autres personnalités haïtiennes ?",
    options: ["Prêtresse vodou associée à la cérémonie du Bois-Caïman", "Président puis empereur d'Haïti sous le nom de Faustin Ier", "Lwa protecteur de l'agriculture et des paysans dans le vodou haïtien", "Ethnologue, auteur de « Ainsi parla l'oncle », père de l'indigénisme haïtien"],
    correct: 1
  },
  {
    q: "Comment Anthony Phelps est-il généralement présenté ?",
    options: ["Diplomate / personnalité internationale", "Père fondateur / figure de l'Indépendance", "Écrivain", "Peintre / artiste visuel"],
    correct: 2
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Faustin Soulouque ?",
    options: ["Président puis empereur d'Haïti sous le nom de Faustin Ier", "Neurochirurgien devenu Premier ministre après l'assassinat de Jovenel Moïse", "Haïtiano-canadienne, ancienne Gouverneure générale du Canada", "Président ayant unifié l'ensemble de l'île sous administration haïtienne"],
    correct: 0
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Anthony Phelps ?",
    options: ["Port-au-Prince", "Jacmel", "Nord (Arcahaie)", "Nord (Bois-Caïman)"],
    correct: 0
  },
  {
    q: "Pour quelle raison Hector Hyppolite est-il connu dans l'histoire ou la culture haïtienne ?",
    options: ["Chanteuse surnommée « la Grande Dame de la chanson haïtienne »", "Figure fondatrice de la peinture naïve haïtienne", "Première femme à assurer la présidence d'Haïti (1990-1991)", "Peintre ayant participé aux fresques de la Cathédrale Sainte-Trinité"],
    correct: 1
  },
  {
    q: "François Capois (Capois-La-Mort) provient ou est rattaché à quelle zone ?",
    options: ["Trou-du-Nord (Nord-Est)", "Port-au-Prince", "Nord (Arcahaie)", "Nord (Bataille de Vertières)"],
    correct: 3
  },
  {
    q: "Wyclef Jean appartient à quel type de figure historique ou culturelle ?",
    options: ["Athlète / sportif", "Peintre / artiste visuel", "Musicien", "Chef d'État"],
    correct: 2
  },
  {
    q: "Comment classerait-on Michel Martelly parmi les personnalités haïtiennes ?",
    options: ["Chef d'État", "Figure religieuse / vodou", "Intellectuel / militant", "Peintre / artiste visuel"],
    correct: 0
  },
  {
    q: "Quelle est l'époque de référence pour Charlemagne Péralte ?",
    options: ["Milieu XXe siècle (1930-1970)", "XIXe siècle", "Époque contemporaine (2000 à aujourd'hui)", "Début XXe siècle"],
    correct: 3
  },
  {
    q: "D'où est originaire Charlemagne Péralte, ou à quel lieu est-il le plus associé ?",
    options: ["Dondon (Nord)", "Port-au-Prince", "Hinche (Centre)", "Diaspora (États-Unis)"],
    correct: 2
  },
  {
    q: "Quelle est la nature du rôle joué par La Sirène (Lasirenn) ?",
    options: ["Diplomate / personnalité internationale", "Figure religieuse / vodou", "Père fondateur / figure de l'Indépendance", "Écrivain"],
    correct: 1
  },
  {
    q: "De quel type de personnalité s'agit-il pour Michaëlle Jean ?",
    options: ["Personnage du folklore", "Figure religieuse / vodou", "Diplomate / personnalité internationale", "Père fondateur / figure de l'Indépendance"],
    correct: 2
  },
  {
    q: "Quel fait marquant est associé à Dumarsais Estimé ?",
    options: ["Chef de file de l'école du Cap dans la peinture haïtienne", "Première femme à assurer la présidence d'Haïti (1990-1991)", "Premier président de la République d'Haïti (partie Sud)", "Premier président noir élu après une longue période d'influence mulâtre"],
    correct: 3
  },
  {
    q: "Quelle étiquette correspond le mieux à Hector Hyppolite ?",
    options: ["Personnage du folklore", "Diplomate / personnalité internationale", "Peintre / artiste visuel", "Chef d'État"],
    correct: 2
  },
  {
    q: "Quelle est l'époque de référence pour Gary Victor ?",
    options: ["Intemporel (figure du folklore/vodou)", "Début XXe siècle", "Fin XXe siècle (1970-2000)", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 3
  },
  {
    q: "À quel moment de l'histoire haïtienne rattache-t-on Préfète Duffaut ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Révolution haïtienne (avant 1804)", "XIXe siècle", "Milieu XXe siècle (1930-1970)"],
    correct: 3
  },
  {
    q: "Jean-Pierre Boyer appartient à quelle période historique ?",
    options: ["Fin XXe siècle (1970-2000)", "XIXe siècle", "Intemporel (figure du folklore/vodou)", "Révolution haïtienne (avant 1804)"],
    correct: 1
  },
  {
    q: "Comment reconnaît-on Préfète Duffaut parmi les autres personnalités haïtiennes ?",
    options: ["Succéda à son père comme « Président à vie » de 1971 à 1986", "Première femme à assurer la présidence d'Haïti (1990-1991)", "Se proclama roi d'Haïti et fit construire la Citadelle Laferrière", "Peintre connu pour ses « villes imaginaires » aux couleurs vives"],
    correct: 3
  },
  {
    q: "Comment Marie Vieux-Chauvet est-elle généralement présentée ?",
    options: ["Chef d'État", "Intellectuel / militant", "Écrivain", "Peintre / artiste visuel"],
    correct: 2
  },
  {
    q: "Pour quelle raison Jean-Bertrand Aristide est-il connu dans l'histoire ou la culture haïtienne ?",
    options: ["Proclama l'indépendance d'Haïti en 1804 et en devint le premier chef d'État", "Politologue devenu président pendant quelques mois en 1988", "Prêtresse vodou associée à la cérémonie du Bois-Caïman", "Ancien prêtre devenu président à deux reprises"],
    correct: 3
  },
  {
    q: "Comment La Sirène (Lasirenn) est-elle généralement présentée ?",
    options: ["Diplomate / personnalité internationale", "Musicien", "Figure religieuse / vodou", "Athlète / sportif"],
    correct: 2
  },
  {
    q: "Où Duckens Nazon a-t-il vécu ou marqué l'histoire ?",
    options: ["Port-au-Prince", "Verrettes (Artibonite)", "Hinche (Centre)", "Saint-Marc"],
    correct: 0
  },
  {
    q: "Quelle période correspond le mieux à François Duvalier (Papa Doc) ?",
    options: ["XIXe siècle", "Intemporel (figure du folklore/vodou)", "Milieu XXe siècle (1930-1970)", "Fin XXe siècle (1970-2000)"],
    correct: 2
  },
  {
    q: "Wilson Bigaud provient ou est rattaché à quelle zone ?",
    options: ["Dondon (Nord)", "Port-au-Prince", "Jacmel", "Nord (Cap-Haïtien)"],
    correct: 1
  },
  {
    q: "Quand Alexandre Pétion a-t-il été le plus actif ou influent ?",
    options: ["Révolution haïtienne (avant 1804)", "XIXe siècle", "Intemporel (figure du folklore/vodou)", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 0
  },
  {
    q: "Quelle étiquette correspond le mieux à Duckens Nazon ?",
    options: ["Chef d'État", "Musicien", "Athlète / sportif", "Figure religieuse / vodou"],
    correct: 2
  },
  {
    q: "Quelle est l'époque de référence pour Jean-Claude Duvalier (Baby Doc) ?",
    options: ["Fin XXe siècle (1970-2000)", "XIXe siècle", "Début XXe siècle", "Intemporel (figure du folklore/vodou)"],
    correct: 0
  },
  {
    q: "Quand Philomé Obin a-t-il été le plus actif ou influent ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Révolution haïtienne (avant 1804)", "Milieu XXe siècle (1930-1970)", "Intemporel (figure du folklore/vodou)"],
    correct: 2
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Ti Jean ?",
    options: ["Gonaïves", "National / légendaire", "Diaspora (New Jersey)", "Nord (Bataille de Vertières)"],
    correct: 1
  },
  {
    q: "Comment Ti Jean est-il principalement connu ?",
    options: ["Musicien", "Personnage du folklore", "Figure religieuse / vodou", "Diplomate / personnalité internationale"],
    correct: 1
  },
  {
    q: "Comment Paul Magloire est-il principalement connu ?",
    options: ["Peintre / artiste visuel", "Chef d'État", "Figure religieuse / vodou", "Personnage du folklore"],
    correct: 1
  },
  {
    q: "Où Suzanne Comhaire-Sylvain a-t-elle vécu ou marqué l'histoire ?",
    options: ["Dondon (Nord)", "Marmelade (Artibonite)", "Verrettes (Artibonite)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Quel élément biographique distingue Catherine Flon ?",
    options: ["Anthropologue, auteur de « De l'égalité des races humaines »", "Chanteur engagé devenu maire de Port-au-Prince", "Aurait cousu le premier drapeau haïtien en 1803", "Romancière contemporaine, autrice de « Saisons sauvages »"],
    correct: 2
  },
  {
    q: "Ariel Henry est principalement associé à quel lieu ?",
    options: ["Hinche (Centre)", "Ravine-Sèche", "Cap-Haïtien", "Jérémie (Grande-Anse)"],
    correct: 3
  },
  {
    q: "Dans quelle période de l'histoire haïtienne situe-t-on François Capois (Capois-La-Mort) ?",
    options: ["Début XXe siècle", "Révolution haïtienne (avant 1804)", "XIXe siècle", "Fin XXe siècle (1970-2000)"],
    correct: 1
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Jacques Roumain ?",
    options: ["Port-au-Prince", "Diaspora (Floride)", "Jacmel", "Plateau Central"],
    correct: 0
  },
  {
    q: "Ertha Pascal-Trouillot appartient à quelle période historique ?",
    options: ["Milieu XXe siècle (1930-1970)", "Intemporel (figure du folklore/vodou)", "Époque contemporaine (2000 à aujourd'hui)", "Fin XXe siècle (1970-2000)"],
    correct: 3
  },
  {
    q: "Quelle période correspond le mieux à Jean-Bertrand Aristide ?",
    options: ["XIXe siècle", "Époque contemporaine (2000 à aujourd'hui)", "Fin XXe siècle (1970-2000)", "Milieu XXe siècle (1930-1970)"],
    correct: 2
  },
  {
    q: "Comment Michaëlle Jean est-elle généralement présentée ?",
    options: ["Père fondateur / figure de l'Indépendance", "Diplomate / personnalité internationale", "Chef d'État", "Intellectuel / militant"],
    correct: 1
  },
  {
    q: "Dumarsais Estimé provient ou est rattaché à quelle zone ?",
    options: ["Port-au-Prince", "Port-Salut", "Verrettes (Artibonite)", "Diaspora (New Jersey)"],
    correct: 2
  },
  {
    q: "Quel rôle décrit le mieux Anténor Firmin dans l'histoire ou la culture haïtienne ?",
    options: ["Intellectuel / militant", "Figure religieuse / vodou", "Personnage du folklore", "Chef d'État"],
    correct: 0
  },
  {
    q: "Quel élément biographique distingue Jean-Claude Duvalier (Baby Doc) ?",
    options: ["Succéda à son père comme « Président à vie » de 1971 à 1986", "Peintre ayant participé aux fresques de la Cathédrale Sainte-Trinité", "Héroïne de la Révolution haïtienne exécutée par les troupes françaises", "Militante féministe, cofondatrice d'organisations pour les droits des femmes"],
    correct: 0
  },
  {
    q: "Sanite Bélair a marqué ou vécu principalement à quelle période ?",
    options: ["Fin XXe siècle (1970-2000)", "XIXe siècle", "Époque contemporaine (2000 à aujourd'hui)", "Révolution haïtienne (avant 1804)"],
    correct: 3
  },
  {
    q: "Edwidge Danticat appartient à quelle période historique ?",
    options: ["Intemporel (figure du folklore/vodou)", "Fin XXe siècle (1970-2000)", "Époque contemporaine (2000 à aujourd'hui)", "Début XXe siècle"],
    correct: 2
  },
  {
    q: "Quel rôle décrit le mieux Jean-Bertrand Aristide dans l'histoire ou la culture haïtienne ?",
    options: ["Père fondateur / figure de l'Indépendance", "Chef d'État", "Musicien", "Personnage du folklore"],
    correct: 1
  },
  {
    q: "Alexandre Pétion appartient à quel type de figure historique ou culturelle ?",
    options: ["Diplomate / personnalité internationale", "Intellectuel / militant", "Père fondateur / figure de l'Indépendance", "Chef d'État"],
    correct: 2
  },
  {
    q: "Pour quelle raison Andre Berto est-il connu dans l'histoire ou la culture haïtienne ?",
    options: ["Écrivain élu à l'Académie française", "Président par intérim après le départ d'Aristide en 2004", "Peintre célèbre pour sa fresque à la Cathédrale Sainte-Trinité", "Boxeur professionnel haïtiano-américain, ancien champion du monde"],
    correct: 3
  },
  {
    q: "Comment classerait-on Samuel Dalembert parmi les personnalités haïtiennes ?",
    options: ["Musicien", "Athlète / sportif", "Personnage du folklore", "Père fondateur / figure de l'Indépendance"],
    correct: 1
  },
  {
    q: "Quel fait marquant est associé à Ertha Pascal-Trouillot ?",
    options: ["Homme de couleur libre ayant mené une révolte avant l'indépendance", "Anthropologue, auteur de « De l'égalité des races humaines »", "Première femme à assurer la présidence d'Haïti (1990-1991)", "Ancien prêtre devenu président à deux reprises"],
    correct: 2
  },
  {
    q: "Parmi les propositions suivantes, laquelle correspond à Emmanuel Sanon ?",
    options: ["Chef d'État", "Figure religieuse / vodou", "Athlète / sportif", "Peintre / artiste visuel"],
    correct: 2
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Dany Laferrière ?",
    options: ["Petit-Goâve", "Trou-du-Nord (Nord-Est)", "Port-au-Prince", "Nord (Bois-Caïman)"],
    correct: 2
  },
  {
    q: "Comment reconnaît-on Ti Manno parmi les autres personnalités haïtiennes ?",
    options: ["Chanteur de konpa social devenu une icône engagée", "Lwa des eaux et de la mer dans le vodou haïtien", "Président par intérim après le départ d'Aristide en 2004", "Peintre ayant participé aux fresques de la Cathédrale Sainte-Trinité"],
    correct: 0
  },
  {
    q: "Quel lieu géographique évoque le plus Jean Dominique ?",
    options: ["Nord (Bataille de Vertières)", "Petit-Goâve", "Jacmel", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Comment classerait-on Benoît Batraville parmi les personnalités haïtiennes ?",
    options: ["Père fondateur / figure de l'Indépendance", "Intellectuel / militant", "Personnage du folklore", "Musicien"],
    correct: 0
  },
  {
    q: "Quel élément biographique distingue Anténor Firmin ?",
    options: ["Président puis empereur d'Haïti sous le nom de Faustin Ier", "Se proclama roi d'Haïti et fit construire la Citadelle Laferrière", "Lwa gardien des carrefours et intermédiaire avec les autres esprits", "Anthropologue, auteur de « De l'égalité des races humaines »"],
    correct: 3
  },
  {
    q: "Qu'est-ce qui rend Anténor Firmin célèbre ou important ?",
    options: ["Auteur du récit autobiographique sur son enfance de « restavèk »", "DJ et producteur fusionnant konpa et musique électronique", "Anthropologue, auteur de « De l'égalité des races humaines »", "Artiste contemporain mêlant histoire haïtienne et symbolisme vodou"],
    correct: 2
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Catherine Flon ?",
    options: ["Port-au-Prince", "Nord (Arcahaie)", "Nord (Bois-Caïman)", "Diaspora (Floride)"],
    correct: 1
  },
  {
    q: "Ti Manno provient ou est rattaché à quelle zone ?",
    options: ["Verrettes (Artibonite)", "Diaspora (New Jersey)", "Diaspora (Floride)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Où Louis Joseph Janvier a-t-il vécu ou marqué l'histoire ?",
    options: ["National / légendaire", "Marmelade (Artibonite)", "Port-au-Prince", "Saint-Marc"],
    correct: 2
  },
  {
    q: "D'où est originaire Frankétienne, ou à quel lieu est-il le plus associé ?",
    options: ["Gonaïves", "Jérémie (Grande-Anse)", "Ravine-Sèche", "Trou-du-Nord (Nord-Est)"],
    correct: 2
  },
  {
    q: "Quel lieu géographique évoque le plus Alexandre Pétion ?",
    options: ["Diaspora (New Jersey)", "Port-au-Prince", "Trou-du-Nord (Nord-Est)", "Jacmel"],
    correct: 1
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Rigaud Benoit ?",
    options: ["Port-au-Prince", "Grande Rivière du Nord", "Jérémie (Grande-Anse)", "Nord (Bois-Caïman)"],
    correct: 0
  },
  {
    q: "Toussaint Louverture est principalement associé à quel lieu ?",
    options: ["Nord (Arcahaie)", "Bréda (Cap-Haïtien)", "Verrettes (Artibonite)", "Port-au-Prince"],
    correct: 1
  },
  {
    q: "Anténor Firmin appartient à quelle période historique ?",
    options: ["Fin XXe siècle (1970-2000)", "XIXe siècle", "Début XXe siècle", "Révolution haïtienne (avant 1804)"],
    correct: 1
  },
  {
    q: "D'où est originaire Emmanuel Sanon, ou à quel lieu est-il le plus associé ?",
    options: ["Port-au-Prince", "Bréda (Cap-Haïtien)", "Cap-Haïtien", "Jérémie (Grande-Anse)"],
    correct: 0
  },
  {
    q: "Où Henri Christophe a-t-il vécu ou marqué l'histoire ?",
    options: ["Nord (Cap-Haïtien)", "Sud (Grande-Anse)", "Petit-Goâve", "Diaspora (Floride)"],
    correct: 0
  },
  {
    q: "Pour quoi Yvonne Hakim-Rimpel est-elle surtout reconnue ?",
    options: ["Chanteur engagé devenu maire de Port-au-Prince", "Journaliste féministe pionnière en Haïti", "Artiste contemporain mêlant histoire haïtienne et symbolisme vodou", "Auteur du récit autobiographique sur son enfance de « restavèk »"],
    correct: 1
  },
  {
    q: "D'où est originaire Boniface Alexandre, ou à quel lieu est-il le plus associé ?",
    options: ["Petit-Goâve", "Ravine-Sèche", "Nord (Bataille de Vertières)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Hector Hyppolite ?",
    options: ["National / légendaire", "Nord (Bataille de Vertières)", "Port-au-Prince", "Saint-Marc"],
    correct: 3
  },
  {
    q: "Qu'est-ce qui rend Toto Bissainthe célèbre ou importante ?",
    options: ["Poétesse haïtienne ayant vécu principalement en France", "Romancière contemporaine, autrice de « Saisons sauvages »", "Chanteuse et actrice, figure de la chanson racine haïtienne", "Président puis « Président à vie » d'Haïti de 1957 à 1971"],
    correct: 2
  },
  {
    q: "Dans quelle catégorie situerait-on Suzanne Comhaire-Sylvain ?",
    options: ["Diplomate / personnalité internationale", "Intellectuel / militant", "Personnage du folklore", "Figure religieuse / vodou"],
    correct: 1
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Bouki ?",
    options: ["Diaspora (Canada)", "National / légendaire", "Nord (Cap-Haïtien)", "Plateau Central"],
    correct: 1
  },
  {
    q: "Comment reconnaît-on Jean-Pierre Boyer parmi les autres personnalités haïtiennes ?",
    options: ["Auteur du roman « Gouverneurs de la rosée »", "Lwa associée à l'amour, la beauté et le luxe dans le vodou haïtien", "Président ayant unifié l'ensemble de l'île sous administration haïtienne", "Général cacos ayant poursuivi la résistance après la mort de Péralte"],
    correct: 2
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Damballah ?",
    options: ["Président puis empereur d'Haïti sous le nom de Faustin Ier", "Chef de la résistance armée contre l'occupation américaine (1915-1934)", "Lwa serpent, considéré comme l'un des esprits les plus anciens du vodou", "Premier président de la République d'Haïti (partie Sud)"],
    correct: 2
  },
  {
    q: "Quelle étiquette correspond le mieux à Sanite Bélair ?",
    options: ["Athlète / sportif", "Diplomate / personnalité internationale", "Figure religieuse / vodou", "Père fondateur / figure de l'Indépendance"],
    correct: 3
  },
  {
    q: "Quel élément biographique distingue Charles Oscar Étienne (Jean-Baptiste Chavannes) ?",
    options: ["Président ayant modernisé l'éducation et les relations extérieures d'Haïti", "Compagnon de Vincent Ogé dans la lutte pour les droits des libres de couleur", "Homme de couleur libre ayant mené une révolte avant l'indépendance", "Chanteuse et actrice, figure de la chanson racine haïtienne"],
    correct: 1
  },
  {
    q: "Où Fabre Geffrard a-t-il vécu ou marqué l'histoire ?",
    options: ["Petit-Goâve", "Diaspora (Canada)", "Nord (Bataille de Vertières)", "Anse-à-Veau"],
    correct: 3
  },
  {
    q: "Quel rôle décrit le mieux Marie Vieux-Chauvet dans l'histoire ou la culture haïtienne ?",
    options: ["Chef d'État", "Figure religieuse / vodou", "Écrivain", "Intellectuel / militant"],
    correct: 2
  },
  {
    q: "Comment reconnaît-on Michael Brun parmi les autres personnalités haïtiennes ?",
    options: ["Ancien prêtre devenu président à deux reprises", "Musicien haïtiano-américain, ex-membre du groupe The Fugees", "Héroïne de la Révolution haïtienne exécutée par les troupes françaises", "DJ et producteur fusionnant konpa et musique électronique"],
    correct: 3
  },
  {
    q: "Pour quoi Samuel Dalembert est-il surtout reconnu ?",
    options: ["Président puis « Président à vie » d'Haïti de 1957 à 1971", "Pivot haïtiano-canadien ayant joué en NBA", "Poète et romancier, prix Renaudot pour « Hadriana dans tous mes rêves »", "Personnage rusé qui déjoue toujours son compère Bouki"],
    correct: 1
  },
  {
    q: "Quel élément biographique distingue Garry Conille ?",
    options: ["Ancien fonctionnaire de l'ONU nommé Premier ministre à deux reprises", "Premier président noir élu après une longue période d'influence mulâtre", "Militaire devenu président dans les années 1950", "Héroïne de la Révolution haïtienne exécutée par les troupes françaises"],
    correct: 0
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Ti Jean ?",
    options: ["Peintre célèbre pour sa fresque à la Cathédrale Sainte-Trinité", "Ancien prêtre devenu président à deux reprises", "Poétesse haïtienne ayant vécu principalement en France", "Jeune héros malin des contes traditionnels haïtiens"],
    correct: 3
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Ariel Henry ?",
    options: ["Premier président noir élu après une longue période d'influence mulâtre", "Neurochirurgien devenu Premier ministre après l'assassinat de Jovenel Moïse", "Général célèbre pour sa bravoure à la bataille de Vertières", "Lwa serpent, considéré comme l'un des esprits les plus anciens du vodou"],
    correct: 1
  },
  {
    q: "Comment Castera Bazile est-il généralement présenté ?",
    options: ["Musicien", "Intellectuel / militant", "Écrivain", "Peintre / artiste visuel"],
    correct: 3
  },
  {
    q: "À quel moment de l'histoire haïtienne rattache-t-on Wyclef Jean ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Intemporel (figure du folklore/vodou)", "Fin XXe siècle (1970-2000)", "Début XXe siècle"],
    correct: 0
  },
  {
    q: "Gary Victor a marqué ou vécu principalement à quelle période ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "XIXe siècle", "Milieu XXe siècle (1930-1970)", "Révolution haïtienne (avant 1804)"],
    correct: 0
  },
  {
    q: "Ogou appartient à quel type de figure historique ou culturelle ?",
    options: ["Écrivain", "Père fondateur / figure de l'Indépendance", "Musicien", "Figure religieuse / vodou"],
    correct: 3
  },
  {
    q: "Quel élément biographique distingue Hector Hyppolite ?",
    options: ["Autrice du triptyque romanesque « Amour, Colère et Folie »", "Aurait cousu le premier drapeau haïtien en 1803", "Figure fondatrice de la peinture naïve haïtienne", "Ancien fonctionnaire de l'ONU nommé Premier ministre à deux reprises"],
    correct: 2
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Jovenel Moïse ?",
    options: ["Président élu en 2016, assassiné en fonction en 2021", "Compagnon de Vincent Ogé dans la lutte pour les droits des libres de couleur", "Peintre célèbre pour sa fresque à la Cathédrale Sainte-Trinité", "Lwa gardien des carrefours et intermédiaire avec les autres esprits"],
    correct: 0
  },
  {
    q: "Édouard Duval-Carrié a marqué ou vécu principalement à quelle période ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Fin XXe siècle (1970-2000)", "Intemporel (figure du folklore/vodou)", "Révolution haïtienne (avant 1804)"],
    correct: 0
  },
  {
    q: "Catherine Flon appartient à quel type de figure historique ou culturelle ?",
    options: ["Intellectuel / militant", "Athlète / sportif", "Figure religieuse / vodou", "Père fondateur / figure de l'Indépendance"],
    correct: 3
  },
  {
    q: "Oswald Durand appartient à quelle période historique ?",
    options: ["XIXe siècle", "Intemporel (figure du folklore/vodou)", "Révolution haïtienne (avant 1804)", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 0
  },
  {
    q: "Quel élément biographique distingue Henri Christophe ?",
    options: ["Lwa guerrier associé au fer et à la force dans le vodou haïtien", "Se proclama roi d'Haïti et fit construire la Citadelle Laferrière", "Romancière contemporaine, autrice de « Saisons sauvages »", "Écrivain élu à l'Académie française"],
    correct: 1
  },
  {
    q: "Où situe-t-on l'histoire de François Duvalier (Papa Doc) ?",
    options: ["Port-au-Prince", "Saint-Marc", "Jérémie (Grande-Anse)", "Ravine-Sèche"],
    correct: 0
  },
  {
    q: "Où Hector Hyppolite a-t-il vécu ou marqué l'histoire ?",
    options: ["Nord (Arcahaie)", "National / légendaire", "Petit-Goâve", "Saint-Marc"],
    correct: 3
  },
  {
    q: "De quel type de personnalité s'agit-il pour Anténor Firmin ?",
    options: ["Intellectuel / militant", "Athlète / sportif", "Chef d'État", "Père fondateur / figure de l'Indépendance"],
    correct: 0
  },
  {
    q: "Pour quoi Baron Samedi est-il surtout reconnu ?",
    options: ["Chanteuse et actrice, figure de la chanson racine haïtienne", "Lwa des morts et gardien des cimetières dans le vodou haïtien", "Poétesse haïtienne ayant vécu principalement en France", "Auteur du récit autobiographique sur son enfance de « restavèk »"],
    correct: 1
  },
  {
    q: "À quelle époque associe-t-on Sanite Bélair ?",
    options: ["Début XXe siècle", "Époque contemporaine (2000 à aujourd'hui)", "Intemporel (figure du folklore/vodou)", "Révolution haïtienne (avant 1804)"],
    correct: 3
  },
  {
    q: "À quelle époque associe-t-on Hector Hyppolite ?",
    options: ["Intemporel (figure du folklore/vodou)", "Milieu XXe siècle (1930-1970)", "Début XXe siècle", "Fin XXe siècle (1970-2000)"],
    correct: 1
  },
  {
    q: "Alexandre Pétion est principalement associé à quel lieu ?",
    options: ["Quartier-Morin (Nord)", "Port-au-Prince", "Nord (Grande-Rivière-du-Nord)", "Jérémie (Grande-Anse)"],
    correct: 1
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Benoît Batraville ?",
    options: ["Général célèbre pour sa bravoure à la bataille de Vertières", "Président élu en 2016, assassiné en fonction en 2021", "Militante féministe, cofondatrice d'organisations pour les droits des femmes", "Général cacos ayant poursuivi la résistance après la mort de Péralte"],
    correct: 3
  },
  {
    q: "Quel lieu géographique évoque le plus Rigaud Benoit ?",
    options: ["Saint-Marc", "Nord (Bois-Caïman)", "Port-au-Prince", "Sud (Grande-Anse)"],
    correct: 2
  },
  {
    q: "Quel élément biographique distingue Anthony Phelps ?",
    options: ["Attaquant international de l'équipe nationale de football d'Haïti", "Artiste contemporain mêlant histoire haïtienne et symbolisme vodou", "Poète et romancier, figure du mouvement Haïti Littéraire", "Proclama l'indépendance d'Haïti en 1804 et en devint le premier chef d'État"],
    correct: 2
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Malice ?",
    options: ["Proclama l'indépendance d'Haïti en 1804 et en devint le premier chef d'État", "Personnage naïf et souvent trompé dans les contes populaires haïtiens", "Chanteur de konpa social devenu une icône engagée", "Personnage rusé qui déjoue toujours son compère Bouki"],
    correct: 3
  },
  {
    q: "Comment classerait-on Charles Oscar Étienne (Jean-Baptiste Chavannes) parmi les personnalités haïtiennes ?",
    options: ["Figure religieuse / vodou", "Musicien", "Intellectuel / militant", "Père fondateur / figure de l'Indépendance"],
    correct: 3
  },
  {
    q: "Où situe-t-on l'histoire de René Depestre ?",
    options: ["Anse-à-Veau", "Diaspora (New Jersey)", "Jacmel", "Gonaïves"],
    correct: 2
  },
  {
    q: "Dans quelle période de l'histoire haïtienne situe-t-on Anténor Firmin ?",
    options: ["Révolution haïtienne (avant 1804)", "Intemporel (figure du folklore/vodou)", "XIXe siècle", "Milieu XXe siècle (1930-1970)"],
    correct: 2
  },
  {
    q: "Dans quelle catégorie situerait-on Ogou ?",
    options: ["Figure religieuse / vodou", "Intellectuel / militant", "Diplomate / personnalité internationale", "Musicien"],
    correct: 0
  },
  {
    q: "Quelle période correspond le mieux à Dany Laferrière ?",
    options: ["Révolution haïtienne (avant 1804)", "Époque contemporaine (2000 à aujourd'hui)", "Fin XXe siècle (1970-2000)", "XIXe siècle"],
    correct: 1
  },
  {
    q: "Parmi les propositions suivantes, laquelle correspond à Boniface Alexandre ?",
    options: ["Chef d'État", "Figure religieuse / vodou", "Père fondateur / figure de l'Indépendance", "Peintre / artiste visuel"],
    correct: 0
  },
  {
    q: "Quelle étiquette correspond le mieux à Faustin Soulouque ?",
    options: ["Chef d'État", "Athlète / sportif", "Musicien", "Intellectuel / militant"],
    correct: 0
  },
  {
    q: "Comment Anténor Firmin est-il principalement connu ?",
    options: ["Intellectuel / militant", "Figure religieuse / vodou", "Diplomate / personnalité internationale", "Musicien"],
    correct: 0
  },
  {
    q: "Quelle est l'époque de référence pour Marie Vieux-Chauvet ?",
    options: ["Fin XXe siècle (1970-2000)", "Époque contemporaine (2000 à aujourd'hui)", "Milieu XXe siècle (1930-1970)", "Révolution haïtienne (avant 1804)"],
    correct: 2
  },
  {
    q: "Quel fait marquant est associé à Lyonel Trouillot ?",
    options: ["Ancien chanteur de konpa devenu président de la République", "Auteur du roman « Gouverneurs de la rosée »", "Poète et romancier, prix Renaudot pour « Hadriana dans tous mes rêves »", "Romancier et poète contemporain engagé"],
    correct: 3
  },
  {
    q: "Suzanne Comhaire-Sylvain provient ou est rattachée à quelle zone ?",
    options: ["Diaspora (Floride)", "Gonaïves", "Port-au-Prince", "Cap-Haïtien"],
    correct: 2
  },
  {
    q: "À quel moment de l'histoire haïtienne rattache-t-on Rigaud Benoit ?",
    options: ["Milieu XXe siècle (1930-1970)", "XIXe siècle", "Fin XXe siècle (1970-2000)", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 0
  },
  {
    q: "Quel élément biographique distingue René Préval ?",
    options: ["Héroïne de la Révolution haïtienne exécutée par les troupes françaises", "Proclama l'indépendance d'Haïti en 1804 et en devint le premier chef d'État", "Premier président de la République d'Haïti (partie Sud)", "Seul président haïtien à avoir achevé deux mandats non consécutifs"],
    correct: 3
  },
  {
    q: "D'où est originaire Cécile Fatiman, ou à quel lieu est-elle le plus associée ?",
    options: ["Nord (Bois-Caïman)", "Diaspora (New Jersey)", "Nord (Cap-Haïtien)", "Hinche (Centre)"],
    correct: 0
  },
  {
    q: "Quel fait marquant est associé à Jacques Roumain ?",
    options: ["Attaquant international de l'équipe nationale de football d'Haïti", "DJ et producteur fusionnant konpa et musique électronique", "Auteur du roman « Gouverneurs de la rosée »", "Chanteur engagé devenu maire de Port-au-Prince"],
    correct: 2
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Garry Conille ?",
    options: ["Saint-Marc", "Port-au-Prince", "Marmelade (Artibonite)", "Jérémie (Grande-Anse)"],
    correct: 1
  },
  {
    q: "Yvonne Hakim-Rimpel a marqué ou vécu principalement à quelle période ?",
    options: ["Révolution haïtienne (avant 1804)", "Fin XXe siècle (1970-2000)", "Début XXe siècle", "Milieu XXe siècle (1930-1970)"],
    correct: 3
  },
  {
    q: "Comment classerait-on Rigaud Benoit parmi les personnalités haïtiennes ?",
    options: ["Athlète / sportif", "Intellectuel / militant", "Peintre / artiste visuel", "Père fondateur / figure de l'Indépendance"],
    correct: 2
  },
  {
    q: "Quel élément biographique distingue Ti Manno ?",
    options: ["Lwa protecteur de l'agriculture et des paysans dans le vodou haïtien", "Chanteur de konpa social devenu une icône engagée", "Lwa serpent, considéré comme l'un des esprits les plus anciens du vodou", "Romancier et médecin, auteur du « réalisme merveilleux »"],
    correct: 1
  },
  {
    q: "Dans quelle catégorie situerait-on Jean-Pierre Boyer ?",
    options: ["Écrivain", "Chef d'État", "Musicien", "Figure religieuse / vodou"],
    correct: 1
  },
  {
    q: "Où Castera Bazile a-t-il vécu ou marqué l'histoire ?",
    options: ["Bréda (Cap-Haïtien)", "Gonaïves", "Jacmel", "Quartier-Morin (Nord)"],
    correct: 2
  },
  {
    q: "Andre Berto est principalement associé à quel lieu ?",
    options: ["Bréda (Cap-Haïtien)", "Jacmel", "Port-au-Prince", "Diaspora (Floride)"],
    correct: 3
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Boukman Dutty ?",
    options: ["Seul président haïtien à avoir achevé deux mandats non consécutifs", "Lwa gardien des carrefours et intermédiaire avec les autres esprits", "Prêtre vodou considéré comme un déclencheur de la révolte des esclaves de 1791", "Haïtiano-canadienne, ancienne Gouverneure générale du Canada"],
    correct: 2
  },
  {
    q: "Qu'est-ce qui rend Boniface Alexandre célèbre ou important ?",
    options: ["Écrivain élu à l'Académie française", "Peintre ayant participé aux fresques de la Cathédrale Sainte-Trinité", "Président par intérim après le départ d'Aristide en 2004", "Romancière contemporaine, autrice de « Saisons sauvages »"],
    correct: 2
  },
  {
    q: "Où situe-t-on l'histoire de Oswald Durand ?",
    options: ["Diaspora (Canada)", "Trou-du-Nord (Nord-Est)", "Diaspora (États-Unis)", "Cap-Haïtien"],
    correct: 3
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Ertha Pascal-Trouillot ?",
    options: ["Président ayant négocié la fin de l'occupation américaine", "Poète national, auteur du célèbre poème « Choucoune »", "Première femme à assurer la présidence d'Haïti (1990-1991)", "Lwa des morts et gardien des cimetières dans le vodou haïtien"],
    correct: 2
  },
  {
    q: "Qu'est-ce qui rend Lyonel Trouillot célèbre ou important ?",
    options: ["Romancier et poète contemporain engagé", "Prêtresse vodou associée à la cérémonie du Bois-Caïman", "Général célèbre pour sa bravoure à la bataille de Vertières", "DJ et producteur fusionnant konpa et musique électronique"],
    correct: 0
  },
  {
    q: "Quel élément biographique distingue Emeline Michel ?",
    options: ["Romancier et médecin, auteur du « réalisme merveilleux »", "Général cacos ayant poursuivi la résistance après la mort de Péralte", "Chanteuse surnommée « la Grande Dame de la chanson haïtienne »", "Général célèbre pour sa bravoure à la bataille de Vertières"],
    correct: 2
  },
  {
    q: "Comment Benoît Batraville est-il généralement présenté ?",
    options: ["Diplomate / personnalité internationale", "Personnage du folklore", "Père fondateur / figure de l'Indépendance", "Musicien"],
    correct: 2
  },
  {
    q: "D'où est originaire Manno Charlemagne, ou à quel lieu est-il le plus associé ?",
    options: ["Diaspora (Floride)", "Cap-Haïtien", "Gonaïves", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Quel lieu géographique évoque le plus Wilson Bigaud ?",
    options: ["Ravine-Sèche", "Port-au-Prince", "Nord (Bataille de Vertières)", "Diaspora (Floride)"],
    correct: 1
  },
  {
    q: "Pour quelle raison Ti Manno est-il connu dans l'histoire ou la culture haïtienne ?",
    options: ["Héroïne de la Révolution haïtienne exécutée par les troupes françaises", "Première femme haïtienne docteure en lettres, anthropologue", "Ancien fonctionnaire de l'ONU nommé Premier ministre à deux reprises", "Chanteur de konpa social devenu une icône engagée"],
    correct: 3
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Charles Oscar Étienne (Jean-Baptiste Chavannes) ?",
    options: ["Écrivain élu à l'Académie française", "Compagnon de Vincent Ogé dans la lutte pour les droits des libres de couleur", "Président puis « Président à vie » d'Haïti de 1957 à 1971", "Poétesse haïtienne ayant vécu principalement en France"],
    correct: 1
  },
  {
    q: "Quand Coupé Cloué a-t-il été le plus actif ou influent ?",
    options: ["Début XXe siècle", "Fin XXe siècle (1970-2000)", "XIXe siècle", "Révolution haïtienne (avant 1804)"],
    correct: 1
  },
  {
    q: "À quel moment de l'histoire haïtienne rattache-t-on Sténio Vincent ?",
    options: ["XIXe siècle", "Milieu XXe siècle (1930-1970)", "Fin XXe siècle (1970-2000)", "Début XXe siècle"],
    correct: 1
  },
  {
    q: "Comment Jean-Bertrand Aristide est-il principalement connu ?",
    options: ["Figure religieuse / vodou", "Musicien", "Chef d'État", "Athlète / sportif"],
    correct: 2
  },
  {
    q: "De quel type de personnalité s'agit-il pour Bouki ?",
    options: ["Personnage du folklore", "Figure religieuse / vodou", "Musicien", "Père fondateur / figure de l'Indépendance"],
    correct: 0
  },
  {
    q: "Où situe-t-on l'histoire de Anténor Firmin ?",
    options: ["Nord (Arcahaie)", "Cap-Haïtien", "Quartier-Morin (Nord)", "Petit-Goâve"],
    correct: 1
  },
  {
    q: "Où Michaëlle Jean a-t-elle vécu ou marqué l'histoire ?",
    options: ["Nord (Bois-Caïman)", "Diaspora (Canada)", "Plateau Central", "Jérémie (Grande-Anse)"],
    correct: 1
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Ida Faubert ?",
    options: ["Président ayant modernisé l'éducation et les relations extérieures d'Haïti", "Poétesse haïtienne ayant vécu principalement en France", "Auteur du récit autobiographique sur son enfance de « restavèk »", "Héroïne de la Révolution haïtienne exécutée par les troupes françaises"],
    correct: 1
  },
  {
    q: "Leslie Manigat a marqué ou vécu principalement à quelle période ?",
    options: ["Fin XXe siècle (1970-2000)", "Époque contemporaine (2000 à aujourd'hui)", "Révolution haïtienne (avant 1804)", "XIXe siècle"],
    correct: 0
  },
  {
    q: "Quelle est l'époque de référence pour Ertha Pascal-Trouillot ?",
    options: ["Intemporel (figure du folklore/vodou)", "Fin XXe siècle (1970-2000)", "XIXe siècle", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 1
  },
  {
    q: "Jacques Roumain provient ou est rattaché à quelle zone ?",
    options: ["Quartier-Morin (Nord)", "Port-au-Prince", "Jacmel", "Gonaïves"],
    correct: 1
  },
  {
    q: "Malice provient ou est rattaché à quelle zone ?",
    options: ["National / légendaire", "Port-au-Prince", "Nord (Grande-Rivière-du-Nord)", "Hinche (Centre)"],
    correct: 0
  },
  {
    q: "Dans quelle catégorie situerait-on Ti Jean ?",
    options: ["Intellectuel / militant", "Diplomate / personnalité internationale", "Père fondateur / figure de l'Indépendance", "Personnage du folklore"],
    correct: 3
  },
  {
    q: "Comment Suzanne Comhaire-Sylvain est-elle principalement connue ?",
    options: ["Musicien", "Personnage du folklore", "Écrivain", "Intellectuel / militant"],
    correct: 3
  },
  {
    q: "Qu'est-ce qui rend Hector Hyppolite célèbre ou important ?",
    options: ["Haïtiano-canadienne, ancienne Gouverneure générale du Canada", "Figure fondatrice de la peinture naïve haïtienne", "Lwa serpent, considéré comme l'un des esprits les plus anciens du vodou", "Premier président de la République d'Haïti (partie Sud)"],
    correct: 1
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Michel Martelly ?",
    options: ["Anse-à-Veau", "Port-au-Prince", "Marmelade (Artibonite)", "Verrettes (Artibonite)"],
    correct: 1
  },
  {
    q: "Comment classerait-on Ogou parmi les personnalités haïtiennes ?",
    options: ["Intellectuel / militant", "Écrivain", "Père fondateur / figure de l'Indépendance", "Figure religieuse / vodou"],
    correct: 3
  },
  {
    q: "Pour quelle raison Yvonne Hakim-Rimpel est-elle connue dans l'histoire ou la culture haïtienne ?",
    options: ["Lwa des morts et gardien des cimetières dans le vodou haïtien", "Première femme haïtienne docteure en lettres, anthropologue", "Journaliste féministe pionnière en Haïti", "Peintre naïf associé au Centre d'Art de Port-au-Prince"],
    correct: 2
  },
  {
    q: "Quelle est la nature du rôle joué par Ida Faubert ?",
    options: ["Intellectuel / militant", "Chef d'État", "Écrivain", "Diplomate / personnalité internationale"],
    correct: 2
  },
  {
    q: "D'où est originaire Sténio Vincent, ou à quel lieu est-il le plus associé ?",
    options: ["Jacmel", "Quartier-Morin (Nord)", "Gonaïves", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Jean-Claude Duvalier (Baby Doc) provient ou est rattaché à quelle zone ?",
    options: ["Grande Rivière du Nord", "Saint-Marc", "Gonaïves", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Jean-Pierre Boyer ?",
    options: ["Anse-à-Veau", "Verrettes (Artibonite)", "Quartier-Morin (Nord)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "D'où est originaire Jean-Robert Cadet, ou à quel lieu est-il le plus associé ?",
    options: ["Marmelade (Artibonite)", "Port-Salut", "Diaspora (États-Unis)", "Quartier-Morin (Nord)"],
    correct: 2
  },
  {
    q: "Quelle est la nature du rôle joué par Marie Vieux-Chauvet ?",
    options: ["Écrivain", "Personnage du folklore", "Intellectuel / militant", "Chef d'État"],
    correct: 0
  },
  {
    q: "Anténor Firmin a marqué ou vécu principalement à quelle période ?",
    options: ["Intemporel (figure du folklore/vodou)", "Époque contemporaine (2000 à aujourd'hui)", "XIXe siècle", "Début XXe siècle"],
    correct: 2
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Toussaint Louverture ?",
    options: ["Chef de la résistance armée contre l'occupation américaine (1915-1934)", "Chanteur de konpa social devenu une icône engagée", "Chef militaire et politique, figure centrale de la Révolution haïtienne", "Peintre naïf associé au Centre d'Art de Port-au-Prince"],
    correct: 2
  },
  {
    q: "Quelle est la nature du rôle joué par Manno Charlemagne ?",
    options: ["Père fondateur / figure de l'Indépendance", "Peintre / artiste visuel", "Personnage du folklore", "Musicien"],
    correct: 3
  },
  {
    q: "Quelle est l'époque de référence pour Paul Magloire ?",
    options: ["XIXe siècle", "Milieu XXe siècle (1930-1970)", "Début XXe siècle", "Révolution haïtienne (avant 1804)"],
    correct: 1
  },
  {
    q: "Comment classerait-on Dumarsais Estimé parmi les personnalités haïtiennes ?",
    options: ["Diplomate / personnalité internationale", "Chef d'État", "Personnage du folklore", "Peintre / artiste visuel"],
    correct: 1
  },
  {
    q: "À quel moment de l'histoire haïtienne rattache-t-on Coupé Cloué ?",
    options: ["Intemporel (figure du folklore/vodou)", "Époque contemporaine (2000 à aujourd'hui)", "Fin XXe siècle (1970-2000)", "Début XXe siècle"],
    correct: 2
  },
  {
    q: "Quel rôle décrit le mieux Ariel Henry dans l'histoire ou la culture haïtienne ?",
    options: ["Chef d'État", "Musicien", "Intellectuel / militant", "Père fondateur / figure de l'Indépendance"],
    correct: 0
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Charlemagne Péralte ?",
    options: ["Président élu en 2016, assassiné en fonction en 2021", "Chef de la résistance armée contre l'occupation américaine (1915-1934)", "Artiste contemporain mêlant histoire haïtienne et symbolisme vodou", "Aurait cousu le premier drapeau haïtien en 1803"],
    correct: 1
  },
  {
    q: "De quel type de personnalité s'agit-il pour Édouard Duval-Carrié ?",
    options: ["Personnage du folklore", "Figure religieuse / vodou", "Peintre / artiste visuel", "Chef d'État"],
    correct: 2
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Garry Conille ?",
    options: ["Autrice du triptyque romanesque « Amour, Colère et Folie »", "Militante féministe, cofondatrice d'organisations pour les droits des femmes", "Auteur du roman « Gouverneurs de la rosée »", "Ancien fonctionnaire de l'ONU nommé Premier ministre à deux reprises"],
    correct: 3
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Ti Jean ?",
    options: ["National / légendaire", "Sud (Grande-Anse)", "Cap-Haïtien", "Port-au-Prince"],
    correct: 0
  },
  {
    q: "Où Charlemagne Péralte a-t-il vécu ou marqué l'histoire ?",
    options: ["Anse-à-Veau", "Hinche (Centre)", "Diaspora (Floride)", "Nord (Grande-Rivière-du-Nord)"],
    correct: 1
  },
  {
    q: "Pour quelle raison Henri Christophe est-il connu dans l'histoire ou la culture haïtienne ?",
    options: ["Se proclama roi d'Haïti et fit construire la Citadelle Laferrière", "Ancien prêtre devenu président à deux reprises", "Écrivain et diplomate défenseur de la dignité haïtienne", "Anthropologue, auteur de « De l'égalité des races humaines »"],
    correct: 0
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Henri Christophe ?",
    options: ["Romancier et poète contemporain engagé", "Poète et romancier, figure du mouvement Haïti Littéraire", "Chanteur engagé devenu maire de Port-au-Prince", "Se proclama roi d'Haïti et fit construire la Citadelle Laferrière"],
    correct: 3
  },
  {
    q: "Comment reconnaît-on Edwidge Danticat parmi les autres personnalités haïtiennes ?",
    options: ["Lwa serpent, considéré comme l'un des esprits les plus anciens du vodou", "Romancière haïtiano-américaine, autrice de « Breath, Eyes, Memory »", "Proclama l'indépendance d'Haïti en 1804 et en devint le premier chef d'État", "Compagnon de Vincent Ogé dans la lutte pour les droits des libres de couleur"],
    correct: 1
  },
  {
    q: "Quel fait marquant est associé à Sténio Vincent ?",
    options: ["Président ayant négocié la fin de l'occupation américaine", "Seul président haïtien à avoir achevé deux mandats non consécutifs", "Ancien chanteur de konpa devenu président de la République", "Figure fondatrice de la peinture naïve haïtienne"],
    correct: 0
  },
  {
    q: "Comment reconnaît-on Wyclef Jean parmi les autres personnalités haïtiennes ?",
    options: ["Prêtresse vodou associée à la cérémonie du Bois-Caïman", "Succéda à son père comme « Président à vie » de 1971 à 1986", "Musicien haïtiano-américain, ex-membre du groupe The Fugees", "Auteur du roman « Gouverneurs de la rosée »"],
    correct: 2
  },
  {
    q: "Jacques Stephen Alexis est principalement associé à quel lieu ?",
    options: ["Port-au-Prince", "Dondon (Nord)", "Jérémie (Grande-Anse)", "Gonaïves"],
    correct: 3
  },
  {
    q: "Comment Edwidge Danticat est-elle généralement présentée ?",
    options: ["Diplomate / personnalité internationale", "Musicien", "Figure religieuse / vodou", "Écrivain"],
    correct: 3
  },
  {
    q: "Dans quelle période de l'histoire haïtienne situe-t-on Toto Bissainthe ?",
    options: ["Fin XXe siècle (1970-2000)", "XIXe siècle", "Début XXe siècle", "Milieu XXe siècle (1930-1970)"],
    correct: 0
  },
  {
    q: "Pour quelle raison Manno Charlemagne est-il connu dans l'histoire ou la culture haïtienne ?",
    options: ["Peintre célèbre pour sa fresque à la Cathédrale Sainte-Trinité", "Écrivain élu à l'Académie française", "Chanteur engagé devenu maire de Port-au-Prince", "Lwa serpent, considéré comme l'un des esprits les plus anciens du vodou"],
    correct: 2
  },
  {
    q: "Charlemagne Péralte a marqué ou vécu principalement à quelle période ?",
    options: ["Fin XXe siècle (1970-2000)", "Intemporel (figure du folklore/vodou)", "Début XXe siècle", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 2
  },
  {
    q: "Comment Dany Laferrière est-il généralement présenté ?",
    options: ["Musicien", "Intellectuel / militant", "Personnage du folklore", "Écrivain"],
    correct: 3
  },
  {
    q: "Qu'est-ce qui rend François Capois (Capois-La-Mort) célèbre ou important ?",
    options: ["Autrice du triptyque romanesque « Amour, Colère et Folie »", "Romancière haïtiano-américaine, autrice de « Breath, Eyes, Memory »", "Général célèbre pour sa bravoure à la bataille de Vertières", "Peintre ayant participé aux fresques de la Cathédrale Sainte-Trinité"],
    correct: 2
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Jean Dominique ?",
    options: ["Aurait cousu le premier drapeau haïtien en 1803", "Journaliste et directeur de Radio Haïti Inter, assassiné en 2000", "Première femme à assurer la présidence d'Haïti (1990-1991)", "Seul président haïtien à avoir achevé deux mandats non consécutifs"],
    correct: 1
  },
  {
    q: "Dans quelle catégorie situerait-on Wilson Bigaud ?",
    options: ["Musicien", "Chef d'État", "Personnage du folklore", "Peintre / artiste visuel"],
    correct: 3
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Michael Brun ?",
    options: ["Figure fondatrice de la peinture naïve haïtienne", "DJ et producteur fusionnant konpa et musique électronique", "Chanteuse et actrice, figure de la chanson racine haïtienne", "Romancier et poète contemporain engagé"],
    correct: 1
  },
  {
    q: "Quand Dumarsais Estimé a-t-il été le plus actif ou influent ?",
    options: ["XIXe siècle", "Milieu XXe siècle (1930-1970)", "Fin XXe siècle (1970-2000)", "Révolution haïtienne (avant 1804)"],
    correct: 1
  },
  {
    q: "Quel élément biographique distingue Emmanuel Sanon ?",
    options: ["Président ayant modernisé l'éducation et les relations extérieures d'Haïti", "Footballeur ayant marqué contre l'Italie à la Coupe du monde 1974", "Proclama l'indépendance d'Haïti en 1804 et en devint le premier chef d'État", "Autrice du triptyque romanesque « Amour, Colère et Folie »"],
    correct: 1
  },
  {
    q: "Comment classerait-on Philomé Obin parmi les personnalités haïtiennes ?",
    options: ["Intellectuel / militant", "Athlète / sportif", "Musicien", "Peintre / artiste visuel"],
    correct: 3
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Baron Samedi ?",
    options: ["Peintre naïf associé au Centre d'Art de Port-au-Prince", "Lwa des morts et gardien des cimetières dans le vodou haïtien", "Peintre connu pour ses « villes imaginaires » aux couleurs vives", "Attaquant international de l'équipe nationale de football d'Haïti"],
    correct: 1
  },
  {
    q: "Comment Gary Victor est-il généralement présenté ?",
    options: ["Père fondateur / figure de l'Indépendance", "Écrivain", "Intellectuel / militant", "Figure religieuse / vodou"],
    correct: 1
  },
  {
    q: "Quel lieu géographique évoque le plus Damballah ?",
    options: ["National / légendaire", "Port-au-Prince", "Diaspora (New Jersey)", "Quartier-Morin (Nord)"],
    correct: 0
  },
  {
    q: "Quelle est la nature du rôle joué par Préfète Duffaut ?",
    options: ["Diplomate / personnalité internationale", "Peintre / artiste visuel", "Chef d'État", "Musicien"],
    correct: 1
  },
  {
    q: "Qu'est-ce qui rend Jean-Pierre Boyer célèbre ou important ?",
    options: ["Écrivain élu à l'Académie française", "Chef militaire et politique, figure centrale de la Révolution haïtienne", "Proclama l'indépendance d'Haïti en 1804 et en devint le premier chef d'État", "Président ayant unifié l'ensemble de l'île sous administration haïtienne"],
    correct: 3
  },
  {
    q: "Pour quoi Coupé Cloué est-il surtout reconnu ?",
    options: ["Ancien prêtre devenu président à deux reprises", "Lwa des morts et gardien des cimetières dans le vodou haïtien", "Footballeur devenu icône du konpa avec l'Ensemble Select", "Auteur du récit autobiographique sur son enfance de « restavèk »"],
    correct: 2
  },
  {
    q: "Quel fait marquant est associé à Manno Charlemagne ?",
    options: ["Chanteur engagé devenu maire de Port-au-Prince", "Musicien haïtiano-américain, ex-membre du groupe The Fugees", "Romancière contemporaine, autrice de « Saisons sauvages »", "Homme de couleur libre ayant mené une révolte avant l'indépendance"],
    correct: 0
  },
  {
    q: "De quel type de personnalité s'agit-il pour Andre Berto ?",
    options: ["Figure religieuse / vodou", "Diplomate / personnalité internationale", "Athlète / sportif", "Écrivain"],
    correct: 2
  },
  {
    q: "Quel lieu géographique évoque le plus Faustin Soulouque ?",
    options: ["Jérémie (Grande-Anse)", "Port-Salut", "Petit-Goâve", "Quartier-Morin (Nord)"],
    correct: 2
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à René Depestre ?",
    options: ["Jacmel", "Port-au-Prince", "Diaspora (États-Unis)", "Jérémie (Grande-Anse)"],
    correct: 0
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Papa Legba ?",
    options: ["Lwa gardien des carrefours et intermédiaire avec les autres esprits", "Poète national, auteur du célèbre poème « Choucoune »", "Personnage rusé qui déjoue toujours son compère Bouki", "Romancier et poète contemporain engagé"],
    correct: 0
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Jean-Pierre Boyer ?",
    options: ["Peintre célèbre pour sa fresque à la Cathédrale Sainte-Trinité", "Écrivain élu à l'Académie française", "Président ayant unifié l'ensemble de l'île sous administration haïtienne", "Anthropologue, auteur de « De l'égalité des races humaines »"],
    correct: 2
  },
  {
    q: "À quel moment de l'histoire haïtienne rattache-t-on Gary Victor ?",
    options: ["Intemporel (figure du folklore/vodou)", "XIXe siècle", "Fin XXe siècle (1970-2000)", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 3
  },
  {
    q: "Comment Hector Hyppolite est-il principalement connu ?",
    options: ["Athlète / sportif", "Chef d'État", "Musicien", "Peintre / artiste visuel"],
    correct: 3
  },
  {
    q: "Où situe-t-on l'histoire de Hector Hyppolite ?",
    options: ["Saint-Marc", "Grande Rivière du Nord", "Ravine-Sèche", "Diaspora (Floride)"],
    correct: 0
  },
  {
    q: "Dans quelle période de l'histoire haïtienne situe-t-on Fabre Geffrard ?",
    options: ["XIXe siècle", "Milieu XXe siècle (1930-1970)", "Intemporel (figure du folklore/vodou)", "Révolution haïtienne (avant 1804)"],
    correct: 0
  },
  {
    q: "Quand Michael Brun a-t-il été le plus actif ou influent ?",
    options: ["Fin XXe siècle (1970-2000)", "Époque contemporaine (2000 à aujourd'hui)", "XIXe siècle", "Milieu XXe siècle (1930-1970)"],
    correct: 1
  },
  {
    q: "Comment classerait-on Ariel Henry parmi les personnalités haïtiennes ?",
    options: ["Peintre / artiste visuel", "Chef d'État", "Intellectuel / militant", "Écrivain"],
    correct: 1
  },
  {
    q: "À quelle époque associe-t-on Jacques Stephen Alexis ?",
    options: ["Intemporel (figure du folklore/vodou)", "Révolution haïtienne (avant 1804)", "Début XXe siècle", "Milieu XXe siècle (1930-1970)"],
    correct: 3
  },
  {
    q: "Où situe-t-on l'histoire de Dumarsais Estimé ?",
    options: ["Grande Rivière du Nord", "Verrettes (Artibonite)", "Nord (Bois-Caïman)", "Cap-Haïtien"],
    correct: 1
  },
  {
    q: "Pour quelle raison Paul Magloire est-il connu dans l'histoire ou la culture haïtienne ?",
    options: ["Président par intérim après le départ d'Aristide en 2004", "Militaire devenu président dans les années 1950", "Anthropologue, auteur de « De l'égalité des races humaines »", "Prêtre vodou considéré comme un déclencheur de la révolte des esclaves de 1791"],
    correct: 1
  },
  {
    q: "À quel moment de l'histoire haïtienne rattache-t-on Anténor Firmin ?",
    options: ["XIXe siècle", "Fin XXe siècle (1970-2000)", "Époque contemporaine (2000 à aujourd'hui)", "Intemporel (figure du folklore/vodou)"],
    correct: 0
  },
  {
    q: "Comment Damballah est-il principalement connu ?",
    options: ["Figure religieuse / vodou", "Musicien", "Diplomate / personnalité internationale", "Écrivain"],
    correct: 0
  },
  {
    q: "Qu'est-ce qui rend Emeline Michel célèbre ou importante ?",
    options: ["Homme de couleur libre ayant mené une révolte avant l'indépendance", "Boxeur professionnel haïtiano-américain, ancien champion du monde", "Pivot haïtiano-canadien ayant joué en NBA", "Chanteuse surnommée « la Grande Dame de la chanson haïtienne »"],
    correct: 3
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Fabre Geffrard ?",
    options: ["Président ayant modernisé l'éducation et les relations extérieures d'Haïti", "Auteur du récit autobiographique sur son enfance de « restavèk »", "Compagnon de Vincent Ogé dans la lutte pour les droits des libres de couleur", "Première femme à assurer la présidence d'Haïti (1990-1991)"],
    correct: 0
  },
  {
    q: "Quand Jean-Pierre Boyer a-t-il été le plus actif ou influent ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Début XXe siècle", "Révolution haïtienne (avant 1804)", "XIXe siècle"],
    correct: 3
  },
  {
    q: "Quelle est la nature du rôle joué par Damballah ?",
    options: ["Intellectuel / militant", "Diplomate / personnalité internationale", "Athlète / sportif", "Figure religieuse / vodou"],
    correct: 3
  },
  {
    q: "Où situe-t-on l'histoire de Vincent Ogé ?",
    options: ["Dondon (Nord)", "Jérémie (Grande-Anse)", "Diaspora (Canada)", "Nord (Arcahaie)"],
    correct: 0
  },
  {
    q: "Quel lieu géographique évoque le plus Jean-Robert Cadet ?",
    options: ["Nord (Bois-Caïman)", "Marmelade (Artibonite)", "Diaspora (États-Unis)", "National / légendaire"],
    correct: 2
  },
  {
    q: "Quel lieu géographique évoque le plus Boniface Alexandre ?",
    options: ["Jacmel", "Port-au-Prince", "Port-Salut", "National / légendaire"],
    correct: 1
  },
  {
    q: "De quel type de personnalité s'agit-il pour Faustin Soulouque ?",
    options: ["Écrivain", "Athlète / sportif", "Chef d'État", "Intellectuel / militant"],
    correct: 2
  },
  {
    q: "Pour quelle raison Benoît Batraville est-il connu dans l'histoire ou la culture haïtienne ?",
    options: ["Écrivain élu à l'Académie française", "Général cacos ayant poursuivi la résistance après la mort de Péralte", "Lwa protecteur de l'agriculture et des paysans dans le vodou haïtien", "Romancière haïtiano-américaine, autrice de « Breath, Eyes, Memory »"],
    correct: 1
  },
  {
    q: "Comment Ariel Henry est-il généralement présenté ?",
    options: ["Athlète / sportif", "Peintre / artiste visuel", "Intellectuel / militant", "Chef d'État"],
    correct: 3
  },
  {
    q: "Où Jean-Pierre Boyer a-t-il vécu ou marqué l'histoire ?",
    options: ["Port-au-Prince", "Sud (Grande-Anse)", "Cap-Haïtien", "Jacmel"],
    correct: 3
  },
  {
    q: "À quel moment de l'histoire haïtienne rattache-t-on Frankétienne ?",
    options: ["Fin XXe siècle (1970-2000)", "Début XXe siècle", "Époque contemporaine (2000 à aujourd'hui)", "Intemporel (figure du folklore/vodou)"],
    correct: 0
  },
  {
    q: "Quand Samuel Dalembert a-t-il été le plus actif ou influent ?",
    options: ["Milieu XXe siècle (1930-1970)", "Intemporel (figure du folklore/vodou)", "Époque contemporaine (2000 à aujourd'hui)", "Révolution haïtienne (avant 1804)"],
    correct: 2
  },
  {
    q: "Damballah est principalement associé à quel lieu ?",
    options: ["Nord (Arcahaie)", "National / légendaire", "Nord (Grande-Rivière-du-Nord)", "Petit-Goâve"],
    correct: 1
  },
  {
    q: "Quelle est la nature du rôle joué par Fabre Geffrard ?",
    options: ["Peintre / artiste visuel", "Intellectuel / militant", "Personnage du folklore", "Chef d'État"],
    correct: 3
  },
  {
    q: "Bouki est principalement associé à quel lieu ?",
    options: ["Nord (Cap-Haïtien)", "Diaspora (Floride)", "Diaspora (États-Unis)", "National / légendaire"],
    correct: 3
  },
  {
    q: "Comment reconnaît-on Charles Oscar Étienne (Jean-Baptiste Chavannes) parmi les autres personnalités haïtiennes ?",
    options: ["Personnage rusé qui déjoue toujours son compère Bouki", "Figure fondatrice de la peinture naïve haïtienne", "Peintre naïf associé au Centre d'Art de Port-au-Prince", "Compagnon de Vincent Ogé dans la lutte pour les droits des libres de couleur"],
    correct: 3
  },
  {
    q: "Quel rôle décrit le mieux Bouki dans l'histoire ou la culture haïtienne ?",
    options: ["Personnage du folklore", "Peintre / artiste visuel", "Musicien", "Chef d'État"],
    correct: 0
  },
  {
    q: "Où situe-t-on l'histoire de Duckens Nazon ?",
    options: ["Verrettes (Artibonite)", "Jacmel", "Nord (Cap-Haïtien)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Pour quelle raison Garry Conille est-il connu dans l'histoire ou la culture haïtienne ?",
    options: ["Peintre célèbre pour sa fresque à la Cathédrale Sainte-Trinité", "Écrivain et diplomate défenseur de la dignité haïtienne", "Lwa gardien des carrefours et intermédiaire avec les autres esprits", "Ancien fonctionnaire de l'ONU nommé Premier ministre à deux reprises"],
    correct: 3
  },
  {
    q: "Quel lieu géographique évoque le plus Jacques Roumain ?",
    options: ["Port-au-Prince", "Ravine-Sèche", "Nord (Bois-Caïman)", "Jacmel"],
    correct: 3
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Préfète Duffaut ?",
    options: ["Poète et romancier, figure du mouvement Haïti Littéraire", "Peintre connu pour ses « villes imaginaires » aux couleurs vives", "Premier président de la République d'Haïti (partie Sud)", "Poète et romancier, prix Renaudot pour « Hadriana dans tous mes rêves »"],
    correct: 1
  },
  {
    q: "Quand François Duvalier (Papa Doc) a-t-il été le plus actif ou influent ?",
    options: ["Intemporel (figure du folklore/vodou)", "Milieu XXe siècle (1930-1970)", "Époque contemporaine (2000 à aujourd'hui)", "Début XXe siècle"],
    correct: 1
  },
  {
    q: "À quelle époque associe-t-on Henri Christophe ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Début XXe siècle", "Révolution haïtienne (avant 1804)", "Milieu XXe siècle (1930-1970)"],
    correct: 2
  },
  {
    q: "Qu'est-ce qui rend Cécile Fatiman célèbre ou importante ?",
    options: ["Prêtresse vodou associée à la cérémonie du Bois-Caïman", "Militante féministe, cofondatrice d'organisations pour les droits des femmes", "Président ayant unifié l'ensemble de l'île sous administration haïtienne", "Président ayant modernisé l'éducation et les relations extérieures d'Haïti"],
    correct: 0
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Ti Manno ?",
    options: ["Jeune héros malin des contes traditionnels haïtiens", "Figure fondatrice de la peinture naïve haïtienne", "Haïtiano-canadienne, ancienne Gouverneure générale du Canada", "Chanteur de konpa social devenu une icône engagée"],
    correct: 3
  },
  {
    q: "Comment Ezili Freda est-elle principalement connue ?",
    options: ["Chef d'État", "Athlète / sportif", "Figure religieuse / vodou", "Intellectuel / militant"],
    correct: 2
  },
  {
    q: "Quel rôle décrit le mieux Garry Conille dans l'histoire ou la culture haïtienne ?",
    options: ["Musicien", "Figure religieuse / vodou", "Chef d'État", "Athlète / sportif"],
    correct: 2
  },
  {
    q: "Quel lieu géographique évoque le plus Toussaint Louverture ?",
    options: ["Bréda (Cap-Haïtien)", "Nord (Bois-Caïman)", "Saint-Marc", "Ravine-Sèche"],
    correct: 0
  },
  {
    q: "Quel fait marquant est associé à Duckens Nazon ?",
    options: ["Écrivain élu à l'Académie française", "Lwa des eaux et de la mer dans le vodou haïtien", "Militaire devenu président dans les années 1950", "Attaquant international de l'équipe nationale de football d'Haïti"],
    correct: 3
  },
  {
    q: "Quelle période correspond le mieux à Hector Hyppolite ?",
    options: ["Milieu XXe siècle (1930-1970)", "Révolution haïtienne (avant 1804)", "XIXe siècle", "Début XXe siècle"],
    correct: 0
  },
  {
    q: "Quelle période correspond le mieux à Michael Brun ?",
    options: ["Révolution haïtienne (avant 1804)", "Début XXe siècle", "Fin XXe siècle (1970-2000)", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 3
  },
  {
    q: "À quel moment de l'histoire haïtienne rattache-t-on Suzanne Comhaire-Sylvain ?",
    options: ["Fin XXe siècle (1970-2000)", "Début XXe siècle", "Milieu XXe siècle (1930-1970)", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 2
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Emeline Michel ?",
    options: ["Président ayant modernisé l'éducation et les relations extérieures d'Haïti", "Chanteuse surnommée « la Grande Dame de la chanson haïtienne »", "Poète national, auteur du célèbre poème « Choucoune »", "Romancier connu pour ses œuvres mêlant réalisme et fantastique"],
    correct: 1
  },
  {
    q: "Quelle est la nature du rôle joué par Papa Legba ?",
    options: ["Chef d'État", "Figure religieuse / vodou", "Écrivain", "Musicien"],
    correct: 1
  },
  {
    q: "Comment reconnaît-on Hector Hyppolite parmi les autres personnalités haïtiennes ?",
    options: ["Militaire devenu président dans les années 1950", "Footballeur devenu icône du konpa avec l'Ensemble Select", "Figure fondatrice de la peinture naïve haïtienne", "Journaliste féministe pionnière en Haïti"],
    correct: 2
  },
  {
    q: "Comment reconnaît-on Lyonel Trouillot parmi les autres personnalités haïtiennes ?",
    options: ["Romancier et poète contemporain engagé", "Poétesse haïtienne ayant vécu principalement en France", "Se proclama roi d'Haïti et fit construire la Citadelle Laferrière", "Auteur du récit autobiographique sur son enfance de « restavèk »"],
    correct: 0
  },
  {
    q: "Michael Brun provient ou est rattaché à quelle zone ?",
    options: ["Bréda (Cap-Haïtien)", "National / légendaire", "Petit-Goâve", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Frankétienne appartient à quel type de figure historique ou culturelle ?",
    options: ["Écrivain", "Père fondateur / figure de l'Indépendance", "Intellectuel / militant", "Personnage du folklore"],
    correct: 0
  },
  {
    q: "Quelle est l'époque de référence pour Alexandre Pétion ?",
    options: ["Révolution haïtienne (avant 1804)", "Début XXe siècle", "XIXe siècle", "Intemporel (figure du folklore/vodou)"],
    correct: 0
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Ariel Henry ?",
    options: ["Compagnon de Vincent Ogé dans la lutte pour les droits des libres de couleur", "Peintre ayant participé aux fresques de la Cathédrale Sainte-Trinité", "Lwa protecteur de l'agriculture et des paysans dans le vodou haïtien", "Neurochirurgien devenu Premier ministre après l'assassinat de Jovenel Moïse"],
    correct: 3
  },
  {
    q: "Quel fait marquant est associé à Andre Berto ?",
    options: ["Auteur du récit autobiographique sur son enfance de « restavèk »", "Boxeur professionnel haïtiano-américain, ancien champion du monde", "Se proclama roi d'Haïti et fit construire la Citadelle Laferrière", "Romancière haïtiano-américaine, autrice de « Breath, Eyes, Memory »"],
    correct: 1
  },
  {
    q: "Baron Samedi est principalement associé à quel lieu ?",
    options: ["Diaspora (Canada)", "Port-Salut", "Verrettes (Artibonite)", "National / légendaire"],
    correct: 3
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Baron Samedi ?",
    options: ["Nord (Bois-Caïman)", "Trou-du-Nord (Nord-Est)", "Bréda (Cap-Haïtien)", "National / légendaire"],
    correct: 3
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de François Duvalier (Papa Doc) ?",
    options: ["Port-au-Prince", "Gonaïves", "Jacmel", "Marmelade (Artibonite)"],
    correct: 0
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Dumarsais Estimé ?",
    options: ["Port-Salut", "Verrettes (Artibonite)", "Petit-Goâve", "Nord (Cap-Haïtien)"],
    correct: 1
  },
  {
    q: "Quel rôle décrit le mieux Ertha Pascal-Trouillot dans l'histoire ou la culture haïtienne ?",
    options: ["Diplomate / personnalité internationale", "Père fondateur / figure de l'Indépendance", "Figure religieuse / vodou", "Chef d'État"],
    correct: 3
  },
  {
    q: "Quel lieu géographique évoque le plus Oswald Durand ?",
    options: ["Jérémie (Grande-Anse)", "Port-au-Prince", "Cap-Haïtien", "Nord (Bois-Caïman)"],
    correct: 2
  },
  {
    q: "Quel lieu géographique évoque le plus Hector Hyppolite ?",
    options: ["Saint-Marc", "Quartier-Morin (Nord)", "National / légendaire", "Jérémie (Grande-Anse)"],
    correct: 0
  },
  {
    q: "Quel élément biographique distingue Rigaud Benoit ?",
    options: ["Figure fondatrice de la peinture naïve haïtienne", "Succéda à son père comme « Président à vie » de 1971 à 1986", "Poète national, auteur du célèbre poème « Choucoune »", "Peintre naïf associé au Centre d'Art de Port-au-Prince"],
    correct: 3
  },
  {
    q: "D'où est originaire Ti Jean, ou à quel lieu est-il le plus associé ?",
    options: ["Anse-à-Veau", "Port-au-Prince", "Jacmel", "National / légendaire"],
    correct: 3
  },
  {
    q: "Quel élément biographique distingue Azaka (Papa Zaka) ?",
    options: ["Journaliste féministe pionnière en Haïti", "Lwa protecteur de l'agriculture et des paysans dans le vodou haïtien", "Lwa des morts et gardien des cimetières dans le vodou haïtien", "Prêtresse vodou associée à la cérémonie du Bois-Caïman"],
    correct: 1
  },
  {
    q: "Comment Jacques Stephen Alexis est-il principalement connu ?",
    options: ["Père fondateur / figure de l'Indépendance", "Chef d'État", "Écrivain", "Peintre / artiste visuel"],
    correct: 2
  },
  {
    q: "La Sirène (Lasirenn) appartient à quel type de figure historique ou culturelle ?",
    options: ["Écrivain", "Figure religieuse / vodou", "Diplomate / personnalité internationale", "Personnage du folklore"],
    correct: 1
  },
  {
    q: "Où situe-t-on l'histoire de Faustin Soulouque ?",
    options: ["Jacmel", "Dondon (Nord)", "Cap-Haïtien", "Petit-Goâve"],
    correct: 3
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Jean-Claude Duvalier (Baby Doc) ?",
    options: ["Nord (Grande-Rivière-du-Nord)", "Port-au-Prince", "Ravine-Sèche", "Jacmel"],
    correct: 1
  },
  {
    q: "Quelle étiquette correspond le mieux à René Préval ?",
    options: ["Chef d'État", "Peintre / artiste visuel", "Figure religieuse / vodou", "Personnage du folklore"],
    correct: 0
  },
  {
    q: "À quel moment de l'histoire haïtienne rattache-t-on Michaëlle Jean ?",
    options: ["Intemporel (figure du folklore/vodou)", "Fin XXe siècle (1970-2000)", "XIXe siècle", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 3
  },
  {
    q: "Parmi les propositions suivantes, laquelle correspond à Coupé Cloué ?",
    options: ["Musicien", "Père fondateur / figure de l'Indépendance", "Intellectuel / militant", "Athlète / sportif"],
    correct: 0
  },
  {
    q: "À quelle époque associe-t-on Jean Price-Mars ?",
    options: ["Milieu XXe siècle (1930-1970)", "Début XXe siècle", "XIXe siècle", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 1
  },
  {
    q: "Comment reconnaît-on Duckens Nazon parmi les autres personnalités haïtiennes ?",
    options: ["Attaquant international de l'équipe nationale de football d'Haïti", "Journaliste et directeur de Radio Haïti Inter, assassiné en 2000", "Auteur du récit autobiographique sur son enfance de « restavèk »", "Prêtresse vodou associée à la cérémonie du Bois-Caïman"],
    correct: 0
  },
  {
    q: "À quel moment de l'histoire haïtienne rattache-t-on Edwidge Danticat ?",
    options: ["Révolution haïtienne (avant 1804)", "Époque contemporaine (2000 à aujourd'hui)", "Milieu XXe siècle (1930-1970)", "Début XXe siècle"],
    correct: 1
  },
  {
    q: "Quelle est la nature du rôle joué par Jean Price-Mars ?",
    options: ["Père fondateur / figure de l'Indépendance", "Personnage du folklore", "Intellectuel / militant", "Diplomate / personnalité internationale"],
    correct: 2
  },
  {
    q: "Quelle période correspond le mieux à Rigaud Benoit ?",
    options: ["Fin XXe siècle (1970-2000)", "Révolution haïtienne (avant 1804)", "Milieu XXe siècle (1930-1970)", "Début XXe siècle"],
    correct: 2
  },
  {
    q: "Où Manno Charlemagne a-t-il vécu ou marqué l'histoire ?",
    options: ["Jérémie (Grande-Anse)", "Port-au-Prince", "Verrettes (Artibonite)", "Jacmel"],
    correct: 1
  },
  {
    q: "Quel fait marquant est associé à Marie Vieux-Chauvet ?",
    options: ["Proclama l'indépendance d'Haïti en 1804 et en devint le premier chef d'État", "DJ et producteur fusionnant konpa et musique électronique", "Chef de la résistance armée contre l'occupation américaine (1915-1934)", "Autrice du triptyque romanesque « Amour, Colère et Folie »"],
    correct: 3
  },
  {
    q: "Garry Conille est principalement associé à quel lieu ?",
    options: ["National / légendaire", "Diaspora (États-Unis)", "Port-au-Prince", "Jacmel"],
    correct: 3
  },
  {
    q: "Dans quelle catégorie situerait-on Lyonel Trouillot ?",
    options: ["Diplomate / personnalité internationale", "Musicien", "Écrivain", "Peintre / artiste visuel"],
    correct: 2
  },
  {
    q: "Pour quelle raison Toussaint Louverture est-il connu dans l'histoire ou la culture haïtienne ?",
    options: ["Poète national, auteur du célèbre poème « Choucoune »", "Première femme à assurer la présidence d'Haïti (1990-1991)", "Chef militaire et politique, figure centrale de la Révolution haïtienne", "Footballeur devenu icône du konpa avec l'Ensemble Select"],
    correct: 2
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Edwidge Danticat ?",
    options: ["Président par intérim après le départ d'Aristide en 2004", "Peintre connu pour ses « villes imaginaires » aux couleurs vives", "Romancière haïtiano-américaine, autrice de « Breath, Eyes, Memory »", "Anthropologue, auteur de « De l'égalité des races humaines »"],
    correct: 2
  },
  {
    q: "Quel élément biographique distingue Leslie Manigat ?",
    options: ["Lwa gardien des carrefours et intermédiaire avec les autres esprits", "Homme de couleur libre ayant mené une révolte avant l'indépendance", "Politologue devenu président pendant quelques mois en 1988", "Peintre naïf associé au Centre d'Art de Port-au-Prince"],
    correct: 2
  },
  {
    q: "Dans quelle période de l'histoire haïtienne situe-t-on Boukman Dutty ?",
    options: ["Révolution haïtienne (avant 1804)", "Milieu XXe siècle (1930-1970)", "Intemporel (figure du folklore/vodou)", "Début XXe siècle"],
    correct: 0
  },
  {
    q: "Où situe-t-on l'histoire de Jean-Jacques Dessalines ?",
    options: ["Nord (Grande-Rivière-du-Nord)", "Diaspora (Floride)", "Saint-Marc", "Ravine-Sèche"],
    correct: 0
  },
  {
    q: "Comment reconnaît-on Malice parmi les autres personnalités haïtiennes ?",
    options: ["Personnage rusé qui déjoue toujours son compère Bouki", "Lwa serpent, considéré comme l'un des esprits les plus anciens du vodou", "Prêtre vodou considéré comme un déclencheur de la révolte des esclaves de 1791", "Chanteur de konpa social devenu une icône engagée"],
    correct: 0
  },
  {
    q: "Où Dany Laferrière a-t-il vécu ou marqué l'histoire ?",
    options: ["Trou-du-Nord (Nord-Est)", "Marmelade (Artibonite)", "Bréda (Cap-Haïtien)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Hector Hyppolite appartient à quelle période historique ?",
    options: ["Fin XXe siècle (1970-2000)", "Époque contemporaine (2000 à aujourd'hui)", "Début XXe siècle", "Milieu XXe siècle (1930-1970)"],
    correct: 3
  },
  {
    q: "D'où est originaire Wilson Bigaud, ou à quel lieu est-il le plus associé ?",
    options: ["Diaspora (Floride)", "Gonaïves", "Nord (Bataille de Vertières)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "D'où est originaire Toto Bissainthe, ou à quel lieu est-elle le plus associée ?",
    options: ["Port-au-Prince", "Saint-Marc", "National / légendaire", "Jacmel"],
    correct: 0
  },
  {
    q: "Comment Jean Price-Mars est-il principalement connu ?",
    options: ["Chef d'État", "Intellectuel / militant", "Écrivain", "Peintre / artiste visuel"],
    correct: 1
  },
  {
    q: "Emmanuel Sanon a marqué ou vécu principalement à quelle période ?",
    options: ["Milieu XXe siècle (1930-1970)", "Fin XXe siècle (1970-2000)", "XIXe siècle", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 1
  },
  {
    q: "Quel fait marquant est associé à Toto Bissainthe ?",
    options: ["Écrivain, peintre et dramaturge, pionnier du spiralisme", "Aurait cousu le premier drapeau haïtien en 1803", "Lwa protecteur de l'agriculture et des paysans dans le vodou haïtien", "Chanteuse et actrice, figure de la chanson racine haïtienne"],
    correct: 3
  },
  {
    q: "Quel élément biographique distingue Jean-Pierre Boyer ?",
    options: ["Journaliste et directeur de Radio Haïti Inter, assassiné en 2000", "Poète national, auteur du célèbre poème « Choucoune »", "Président ayant unifié l'ensemble de l'île sous administration haïtienne", "Héroïne de la Révolution haïtienne exécutée par les troupes françaises"],
    correct: 2
  },
  {
    q: "Quel fait marquant est associé à Ezili Freda ?",
    options: ["Proclama l'indépendance d'Haïti en 1804 et en devint le premier chef d'État", "Lwa associée à l'amour, la beauté et le luxe dans le vodou haïtien", "Général célèbre pour sa bravoure à la bataille de Vertières", "Politologue devenu président pendant quelques mois en 1988"],
    correct: 1
  },
  {
    q: "Ertha Pascal-Trouillot est principalement associée à quel lieu ?",
    options: ["Petit-Goâve", "Anse-à-Veau", "Hinche (Centre)", "Nord (Arcahaie)"],
    correct: 0
  },
  {
    q: "À quel moment de l'histoire haïtienne rattache-t-on Anthony Phelps ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Milieu XXe siècle (1930-1970)", "Fin XXe siècle (1970-2000)", "XIXe siècle"],
    correct: 2
  },
  {
    q: "Quel lieu géographique évoque le plus Catherine Flon ?",
    options: ["Nord (Grande-Rivière-du-Nord)", "Nord (Arcahaie)", "Sud (Grande-Anse)", "Diaspora (Floride)"],
    correct: 1
  },
  {
    q: "Quel élément biographique distingue Paul Magloire ?",
    options: ["Président puis « Président à vie » d'Haïti de 1957 à 1971", "Ancien chanteur de konpa devenu président de la République", "Succéda à son père comme « Président à vie » de 1971 à 1986", "Militaire devenu président dans les années 1950"],
    correct: 3
  },
  {
    q: "Où situe-t-on l'histoire de Jean-Bertrand Aristide ?",
    options: ["Trou-du-Nord (Nord-Est)", "Nord (Bataille de Vertières)", "Port-Salut", "Diaspora (New Jersey)"],
    correct: 2
  },
  {
    q: "Lyonel Trouillot appartient à quelle période historique ?",
    options: ["XIXe siècle", "Fin XXe siècle (1970-2000)", "Milieu XXe siècle (1930-1970)", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 3
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Faustin Soulouque ?",
    options: ["Hinche (Centre)", "Port-au-Prince", "Petit-Goâve", "Grande Rivière du Nord"],
    correct: 2
  },
  {
    q: "Parmi les propositions suivantes, laquelle correspond à René Depestre ?",
    options: ["Personnage du folklore", "Écrivain", "Figure religieuse / vodou", "Intellectuel / militant"],
    correct: 1
  },
  {
    q: "Quel rôle décrit le mieux Samuel Dalembert dans l'histoire ou la culture haïtienne ?",
    options: ["Père fondateur / figure de l'Indépendance", "Écrivain", "Athlète / sportif", "Musicien"],
    correct: 2
  },
  {
    q: "Comment classerait-on René Préval parmi les personnalités haïtiennes ?",
    options: ["Écrivain", "Musicien", "Chef d'État", "Diplomate / personnalité internationale"],
    correct: 2
  },
  {
    q: "Pour quoi Faustin Soulouque est-il surtout reconnu ?",
    options: ["Chanteur de konpa social devenu une icône engagée", "Neurochirurgien devenu Premier ministre après l'assassinat de Jovenel Moïse", "Romancier et médecin, auteur du « réalisme merveilleux »", "Président puis empereur d'Haïti sous le nom de Faustin Ier"],
    correct: 3
  },
  {
    q: "Où Toto Bissainthe a-t-elle vécu ou marqué l'histoire ?",
    options: ["National / légendaire", "Diaspora (New Jersey)", "Port-au-Prince", "Trou-du-Nord (Nord-Est)"],
    correct: 2
  },
  {
    q: "Dans quelle catégorie situerait-on Sténio Vincent ?",
    options: ["Chef d'État", "Père fondateur / figure de l'Indépendance", "Musicien", "Écrivain"],
    correct: 0
  },
  {
    q: "Dans quelle catégorie situerait-on Yvonne Hakim-Rimpel ?",
    options: ["Intellectuel / militant", "Musicien", "Écrivain", "Père fondateur / figure de l'Indépendance"],
    correct: 0
  },
  {
    q: "Où situe-t-on l'histoire de Jean Price-Mars ?",
    options: ["Jacmel", "Port-au-Prince", "Grande Rivière du Nord", "Plateau Central"],
    correct: 2
  },
  {
    q: "Comment classerait-on Jovenel Moïse parmi les personnalités haïtiennes ?",
    options: ["Athlète / sportif", "Chef d'État", "Écrivain", "Figure religieuse / vodou"],
    correct: 1
  },
  {
    q: "Où Myriam Merlet a-t-elle vécu ou marqué l'histoire ?",
    options: ["Verrettes (Artibonite)", "Port-au-Prince", "Diaspora (Floride)", "Hinche (Centre)"],
    correct: 1
  },
  {
    q: "Comment Manno Charlemagne est-il principalement connu ?",
    options: ["Intellectuel / militant", "Musicien", "Peintre / artiste visuel", "Figure religieuse / vodou"],
    correct: 1
  },
  {
    q: "Papa Legba est principalement associé à quel lieu ?",
    options: ["Diaspora (États-Unis)", "Plateau Central", "National / légendaire", "Diaspora (Floride)"],
    correct: 2
  },
  {
    q: "Quel rôle décrit le mieux Papa Legba dans l'histoire ou la culture haïtienne ?",
    options: ["Athlète / sportif", "Figure religieuse / vodou", "Personnage du folklore", "Chef d'État"],
    correct: 1
  },
  {
    q: "Comment classerait-on Boukman Dutty parmi les personnalités haïtiennes ?",
    options: ["Peintre / artiste visuel", "Père fondateur / figure de l'Indépendance", "Écrivain", "Chef d'État"],
    correct: 1
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Jean Price-Mars ?",
    options: ["Prêtresse vodou associée à la cérémonie du Bois-Caïman", "Première femme à assurer la présidence d'Haïti (1990-1991)", "Romancier et médecin, auteur du « réalisme merveilleux »", "Ethnologue, auteur de « Ainsi parla l'oncle », père de l'indigénisme haïtien"],
    correct: 3
  },
  {
    q: "Coupé Cloué a marqué ou vécu principalement à quelle période ?",
    options: ["Révolution haïtienne (avant 1804)", "Milieu XXe siècle (1930-1970)", "Intemporel (figure du folklore/vodou)", "Fin XXe siècle (1970-2000)"],
    correct: 3
  },
  {
    q: "Dans quelle période de l'histoire haïtienne situe-t-on Manno Charlemagne ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Fin XXe siècle (1970-2000)", "Début XXe siècle", "Milieu XXe siècle (1930-1970)"],
    correct: 1
  },
  {
    q: "Pour quelle raison Jean-Robert Cadet est-il connu dans l'histoire ou la culture haïtienne ?",
    options: ["Héroïne de la Révolution haïtienne exécutée par les troupes françaises", "Attaquant international de l'équipe nationale de football d'Haïti", "Auteur du récit autobiographique sur son enfance de « restavèk »", "Journaliste féministe pionnière en Haïti"],
    correct: 2
  },
  {
    q: "Quelle période correspond le mieux à Jean-Jacques Dessalines ?",
    options: ["Début XXe siècle", "Fin XXe siècle (1970-2000)", "Révolution haïtienne (avant 1804)", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 2
  },
  {
    q: "Gary Victor est principalement associé à quel lieu ?",
    options: ["National / légendaire", "Grande Rivière du Nord", "Anse-à-Veau", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Ogou ?",
    options: ["Petit-Goâve", "National / légendaire", "Gonaïves", "Saint-Marc"],
    correct: 1
  },
  {
    q: "À quelle époque associe-t-on Frankétienne ?",
    options: ["XIXe siècle", "Intemporel (figure du folklore/vodou)", "Fin XXe siècle (1970-2000)", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 2
  },
  {
    q: "D'où est originaire Michel Martelly, ou à quel lieu est-il le plus associé ?",
    options: ["Petit-Goâve", "Cap-Haïtien", "Nord (Grande-Rivière-du-Nord)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Quelle est l'époque de référence pour Castera Bazile ?",
    options: ["XIXe siècle", "Milieu XXe siècle (1930-1970)", "Intemporel (figure du folklore/vodou)", "Fin XXe siècle (1970-2000)"],
    correct: 1
  },
  {
    q: "Quelle période correspond le mieux à Andre Berto ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Révolution haïtienne (avant 1804)", "Intemporel (figure du folklore/vodou)", "Début XXe siècle"],
    correct: 0
  },
  {
    q: "Pour quoi Louis Joseph Janvier est-il surtout reconnu ?",
    options: ["Poète et romancier, prix Renaudot pour « Hadriana dans tous mes rêves »", "Romancier et poète contemporain engagé", "Peintre ayant participé aux fresques de la Cathédrale Sainte-Trinité", "Écrivain et diplomate défenseur de la dignité haïtienne"],
    correct: 3
  },
  {
    q: "Pour quoi Michael Brun est-il surtout reconnu ?",
    options: ["DJ et producteur fusionnant konpa et musique électronique", "Personnage naïf et souvent trompé dans les contes populaires haïtiens", "Musicien haïtiano-américain, ex-membre du groupe The Fugees", "Personnage rusé qui déjoue toujours son compère Bouki"],
    correct: 0
  },
  {
    q: "À quel moment de l'histoire haïtienne rattache-t-on Jovenel Moïse ?",
    options: ["Début XXe siècle", "XIXe siècle", "Époque contemporaine (2000 à aujourd'hui)", "Intemporel (figure du folklore/vodou)"],
    correct: 2
  },
  {
    q: "René Préval appartient à quelle période historique ?",
    options: ["Début XXe siècle", "Révolution haïtienne (avant 1804)", "Milieu XXe siècle (1930-1970)", "Fin XXe siècle (1970-2000)"],
    correct: 3
  },
  {
    q: "Comment Édouard Duval-Carrié est-il principalement connu ?",
    options: ["Figure religieuse / vodou", "Athlète / sportif", "Peintre / artiste visuel", "Personnage du folklore"],
    correct: 2
  },
  {
    q: "Quelle étiquette correspond le mieux à Jacques Stephen Alexis ?",
    options: ["Figure religieuse / vodou", "Écrivain", "Athlète / sportif", "Diplomate / personnalité internationale"],
    correct: 1
  },
  {
    q: "Quelle étiquette correspond le mieux à Dany Laferrière ?",
    options: ["Écrivain", "Figure religieuse / vodou", "Personnage du folklore", "Peintre / artiste visuel"],
    correct: 0
  },
  {
    q: "Comment classerait-on La Sirène (Lasirenn) parmi les personnalités haïtiennes ?",
    options: ["Intellectuel / militant", "Peintre / artiste visuel", "Chef d'État", "Figure religieuse / vodou"],
    correct: 3
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Ezili Freda ?",
    options: ["Port-au-Prince", "Diaspora (États-Unis)", "National / légendaire", "Jacmel"],
    correct: 2
  },
  {
    q: "Comment Oswald Durand est-il principalement connu ?",
    options: ["Musicien", "Figure religieuse / vodou", "Écrivain", "Personnage du folklore"],
    correct: 2
  },
  {
    q: "Parmi les propositions suivantes, laquelle correspond à Michel Martelly ?",
    options: ["Peintre / artiste visuel", "Figure religieuse / vodou", "Diplomate / personnalité internationale", "Chef d'État"],
    correct: 3
  },
  {
    q: "D'où est originaire Paul Magloire, ou à quel lieu est-il le plus associé ?",
    options: ["Quartier-Morin (Nord)", "Port-au-Prince", "Cap-Haïtien", "Nord (Bataille de Vertières)"],
    correct: 0
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Yvonne Hakim-Rimpel ?",
    options: ["Journaliste féministe pionnière en Haïti", "Succéda à son père comme « Président à vie » de 1971 à 1986", "Romancière contemporaine, autrice de « Saisons sauvages »", "Lwa guerrier associé au fer et à la force dans le vodou haïtien"],
    correct: 0
  },
  {
    q: "Où situe-t-on l'histoire de Marie Vieux-Chauvet ?",
    options: ["Plateau Central", "Port-au-Prince", "Nord (Arcahaie)", "Nord (Cap-Haïtien)"],
    correct: 1
  },
  {
    q: "Comment Manno Charlemagne est-il généralement présenté ?",
    options: ["Peintre / artiste visuel", "Père fondateur / figure de l'Indépendance", "Athlète / sportif", "Musicien"],
    correct: 3
  },
  {
    q: "Où situe-t-on l'histoire de Malice ?",
    options: ["Ravine-Sèche", "Saint-Marc", "National / légendaire", "Diaspora (Canada)"],
    correct: 2
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à René Depestre ?",
    options: ["Héroïne de la Révolution haïtienne exécutée par les troupes françaises", "Poète et romancier, prix Renaudot pour « Hadriana dans tous mes rêves »", "Poétesse haïtienne ayant vécu principalement en France", "Président ayant négocié la fin de l'occupation américaine"],
    correct: 1
  },
  {
    q: "Dans quelle catégorie situerait-on Charlemagne Péralte ?",
    options: ["Chef d'État", "Père fondateur / figure de l'Indépendance", "Athlète / sportif", "Diplomate / personnalité internationale"],
    correct: 1
  },
  {
    q: "Comment Sanite Bélair est-elle généralement présentée ?",
    options: ["Écrivain", "Peintre / artiste visuel", "Intellectuel / militant", "Père fondateur / figure de l'Indépendance"],
    correct: 3
  },
  {
    q: "Vincent Ogé est principalement associé à quel lieu ?",
    options: ["Nord (Bois-Caïman)", "Dondon (Nord)", "Jérémie (Grande-Anse)", "Cap-Haïtien"],
    correct: 1
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à François Duvalier (Papa Doc) ?",
    options: ["Trou-du-Nord (Nord-Est)", "Jacmel", "National / légendaire", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Qu'est-ce qui rend Ti Manno célèbre ou important ?",
    options: ["Poète national, auteur du célèbre poème « Choucoune »", "Chanteur de konpa social devenu une icône engagée", "Chanteur engagé devenu maire de Port-au-Prince", "Première femme haïtienne docteure en lettres, anthropologue"],
    correct: 1
  },
  {
    q: "Quelle est l'époque de référence pour Henri Christophe ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Début XXe siècle", "Intemporel (figure du folklore/vodou)", "Révolution haïtienne (avant 1804)"],
    correct: 3
  },
  {
    q: "Comment La Sirène (Lasirenn) est-elle principalement connue ?",
    options: ["Intellectuel / militant", "Figure religieuse / vodou", "Écrivain", "Peintre / artiste visuel"],
    correct: 1
  },
  {
    q: "Pour quelle raison Boniface Alexandre est-il connu dans l'histoire ou la culture haïtienne ?",
    options: ["Président par intérim après le départ d'Aristide en 2004", "Président ayant négocié la fin de l'occupation américaine", "Écrivain élu à l'Académie française", "Première femme à assurer la présidence d'Haïti (1990-1991)"],
    correct: 0
  },
  {
    q: "Quel élément biographique distingue Dany Laferrière ?",
    options: ["Écrivain élu à l'Académie française", "Journaliste et directeur de Radio Haïti Inter, assassiné en 2000", "Lwa protecteur de l'agriculture et des paysans dans le vodou haïtien", "Figure fondatrice de la peinture naïve haïtienne"],
    correct: 0
  },
  {
    q: "Parmi les propositions suivantes, laquelle correspond à Manno Charlemagne ?",
    options: ["Père fondateur / figure de l'Indépendance", "Athlète / sportif", "Personnage du folklore", "Musicien"],
    correct: 3
  },
  {
    q: "Comment Myriam Merlet est-elle généralement présentée ?",
    options: ["Diplomate / personnalité internationale", "Chef d'État", "Peintre / artiste visuel", "Intellectuel / militant"],
    correct: 3
  },
  {
    q: "De quel type de personnalité s'agit-il pour Marie Vieux-Chauvet ?",
    options: ["Figure religieuse / vodou", "Athlète / sportif", "Écrivain", "Personnage du folklore"],
    correct: 2
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Myriam Merlet ?",
    options: ["Grande Rivière du Nord", "Port-au-Prince", "Sud (Grande-Anse)", "Gonaïves"],
    correct: 1
  },
  {
    q: "De quel type de personnalité s'agit-il pour Papa Legba ?",
    options: ["Figure religieuse / vodou", "Personnage du folklore", "Athlète / sportif", "Musicien"],
    correct: 0
  },
  {
    q: "Quelle est l'époque de référence pour Jean-Robert Cadet ?",
    options: ["XIXe siècle", "Époque contemporaine (2000 à aujourd'hui)", "Milieu XXe siècle (1930-1970)", "Intemporel (figure du folklore/vodou)"],
    correct: 1
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Kettly Mars ?",
    options: ["Saint-Marc", "Port-au-Prince", "Jacmel", "Trou-du-Nord (Nord-Est)"],
    correct: 1
  },
  {
    q: "Quel lieu géographique évoque le plus Myriam Merlet ?",
    options: ["Port-au-Prince", "Quartier-Morin (Nord)", "Dondon (Nord)", "Jacmel"],
    correct: 0
  },
  {
    q: "Parmi les propositions suivantes, laquelle correspond à Jean-Jacques Dessalines ?",
    options: ["Chef d'État", "Père fondateur / figure de l'Indépendance", "Musicien", "Figure religieuse / vodou"],
    correct: 1
  },
  {
    q: "Quelle est l'époque de référence pour René Depestre ?",
    options: ["Début XXe siècle", "Fin XXe siècle (1970-2000)", "Milieu XXe siècle (1930-1970)", "XIXe siècle"],
    correct: 1
  },
  {
    q: "Comment reconnaît-on Azaka (Papa Zaka) parmi les autres personnalités haïtiennes ?",
    options: ["Lwa des morts et gardien des cimetières dans le vodou haïtien", "Chanteuse surnommée « la Grande Dame de la chanson haïtienne »", "Militaire devenu président dans les années 1950", "Lwa protecteur de l'agriculture et des paysans dans le vodou haïtien"],
    correct: 3
  },
  {
    q: "Dans quelle catégorie situerait-on Cécile Fatiman ?",
    options: ["Personnage du folklore", "Figure religieuse / vodou", "Intellectuel / militant", "Père fondateur / figure de l'Indépendance"],
    correct: 3
  },
  {
    q: "Parmi les propositions suivantes, laquelle correspond à Papa Legba ?",
    options: ["Musicien", "Athlète / sportif", "Figure religieuse / vodou", "Intellectuel / militant"],
    correct: 2
  },
  {
    q: "Comment Samuel Dalembert est-il principalement connu ?",
    options: ["Peintre / artiste visuel", "Athlète / sportif", "Musicien", "Figure religieuse / vodou"],
    correct: 1
  },
  {
    q: "Dans quelle catégorie situerait-on Michael Brun ?",
    options: ["Figure religieuse / vodou", "Musicien", "Chef d'État", "Écrivain"],
    correct: 1
  },
  {
    q: "Où situe-t-on l'histoire de Michel Martelly ?",
    options: ["Grande Rivière du Nord", "Diaspora (New Jersey)", "Diaspora (Floride)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Comment Yvonne Hakim-Rimpel est-elle généralement présentée ?",
    options: ["Père fondateur / figure de l'Indépendance", "Personnage du folklore", "Intellectuel / militant", "Peintre / artiste visuel"],
    correct: 2
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de François Capois (Capois-La-Mort) ?",
    options: ["Petit-Goâve", "Verrettes (Artibonite)", "Port-au-Prince", "Nord (Bataille de Vertières)"],
    correct: 3
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Michel Martelly ?",
    options: ["Plateau Central", "Port-au-Prince", "Sud (Grande-Anse)", "Marmelade (Artibonite)"],
    correct: 1
  },
  {
    q: "Quelle est la nature du rôle joué par Edwidge Danticat ?",
    options: ["Écrivain", "Père fondateur / figure de l'Indépendance", "Intellectuel / militant", "Diplomate / personnalité internationale"],
    correct: 0
  },
  {
    q: "Pour quelle raison François Capois (Capois-La-Mort) est-il connu dans l'histoire ou la culture haïtienne ?",
    options: ["Écrivain et diplomate défenseur de la dignité haïtienne", "Succéda à son père comme « Président à vie » de 1971 à 1986", "Général célèbre pour sa bravoure à la bataille de Vertières", "Proclama l'indépendance d'Haïti en 1804 et en devint le premier chef d'État"],
    correct: 2
  },
  {
    q: "Où situe-t-on l'histoire de Damballah ?",
    options: ["Jacmel", "Diaspora (États-Unis)", "National / légendaire", "Nord (Bataille de Vertières)"],
    correct: 2
  },
  {
    q: "Où Kettly Mars a-t-elle vécu ou marqué l'histoire ?",
    options: ["Grande Rivière du Nord", "Anse-à-Veau", "Port-au-Prince", "Jérémie (Grande-Anse)"],
    correct: 2
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Bouki ?",
    options: ["Quartier-Morin (Nord)", "Verrettes (Artibonite)", "Bréda (Cap-Haïtien)", "National / légendaire"],
    correct: 3
  },
  {
    q: "Parmi les propositions suivantes, laquelle correspond à Anthony Phelps ?",
    options: ["Athlète / sportif", "Diplomate / personnalité internationale", "Peintre / artiste visuel", "Écrivain"],
    correct: 3
  },
  {
    q: "Andre Berto appartient à quelle période historique ?",
    options: ["Milieu XXe siècle (1930-1970)", "Intemporel (figure du folklore/vodou)", "XIXe siècle", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 3
  },
  {
    q: "Quel élément biographique distingue Duckens Nazon ?",
    options: ["Attaquant international de l'équipe nationale de football d'Haïti", "Lwa gardien des carrefours et intermédiaire avec les autres esprits", "Ancien prêtre devenu président à deux reprises", "Première femme haïtienne docteure en lettres, anthropologue"],
    correct: 0
  },
  {
    q: "Pour quoi Henri Christophe est-il surtout reconnu ?",
    options: ["Chanteur engagé devenu maire de Port-au-Prince", "Se proclama roi d'Haïti et fit construire la Citadelle Laferrière", "Succéda à son père comme « Président à vie » de 1971 à 1986", "Lwa serpent, considéré comme l'un des esprits les plus anciens du vodou"],
    correct: 1
  },
  {
    q: "Quel lieu géographique évoque le plus François Capois (Capois-La-Mort) ?",
    options: ["Diaspora (Canada)", "Nord (Arcahaie)", "Nord (Bataille de Vertières)", "Trou-du-Nord (Nord-Est)"],
    correct: 2
  },
  {
    q: "Comment Ti Jean est-il généralement présenté ?",
    options: ["Écrivain", "Chef d'État", "Figure religieuse / vodou", "Personnage du folklore"],
    correct: 3
  },
  {
    q: "Pour quelle raison Papa Legba est-il connu dans l'histoire ou la culture haïtienne ?",
    options: ["Lwa des eaux et de la mer dans le vodou haïtien", "Lwa gardien des carrefours et intermédiaire avec les autres esprits", "Autrice du triptyque romanesque « Amour, Colère et Folie »", "Prêtre vodou considéré comme un déclencheur de la révolte des esclaves de 1791"],
    correct: 1
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Jean-Pierre Boyer ?",
    options: ["Port-au-Prince", "Hinche (Centre)", "Jacmel", "Dondon (Nord)"],
    correct: 0
  },
  {
    q: "Quel rôle décrit le mieux Benoît Batraville dans l'histoire ou la culture haïtienne ?",
    options: ["Intellectuel / militant", "Chef d'État", "Père fondateur / figure de l'Indépendance", "Écrivain"],
    correct: 2
  },
  {
    q: "Quel élément biographique distingue Fabre Geffrard ?",
    options: ["Poète et romancier, prix Renaudot pour « Hadriana dans tous mes rêves »", "Peintre ayant participé aux fresques de la Cathédrale Sainte-Trinité", "Président ayant modernisé l'éducation et les relations extérieures d'Haïti", "DJ et producteur fusionnant konpa et musique électronique"],
    correct: 2
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Louis Joseph Janvier ?",
    options: ["Général célèbre pour sa bravoure à la bataille de Vertières", "Écrivain et diplomate défenseur de la dignité haïtienne", "Proclama l'indépendance d'Haïti en 1804 et en devint le premier chef d'État", "Homme de couleur libre ayant mené une révolte avant l'indépendance"],
    correct: 1
  },
  {
    q: "Où Bouki a-t-il vécu ou marqué l'histoire ?",
    options: ["Nord (Grande-Rivière-du-Nord)", "National / légendaire", "Ravine-Sèche", "Port-au-Prince"],
    correct: 1
  },
  {
    q: "Comment classerait-on Wyclef Jean parmi les personnalités haïtiennes ?",
    options: ["Athlète / sportif", "Musicien", "Écrivain", "Personnage du folklore"],
    correct: 1
  },
  {
    q: "Hector Hyppolite est principalement associé à quel lieu ?",
    options: ["Hinche (Centre)", "Nord (Bataille de Vertières)", "Saint-Marc", "Port-au-Prince"],
    correct: 2
  },
  {
    q: "Quelle étiquette correspond le mieux à Jean Dominique ?",
    options: ["Musicien", "Personnage du folklore", "Père fondateur / figure de l'Indépendance", "Intellectuel / militant"],
    correct: 3
  },
  {
    q: "Quel élément biographique distingue Sténio Vincent ?",
    options: ["Président ayant négocié la fin de l'occupation américaine", "Haïtiano-canadienne, ancienne Gouverneure générale du Canada", "Président puis « Président à vie » d'Haïti de 1957 à 1971", "Poète et romancier, prix Renaudot pour « Hadriana dans tous mes rêves »"],
    correct: 0
  },
  {
    q: "Comment classerait-on Fabre Geffrard parmi les personnalités haïtiennes ?",
    options: ["Père fondateur / figure de l'Indépendance", "Écrivain", "Chef d'État", "Personnage du folklore"],
    correct: 2
  },
  {
    q: "Dans quelle période de l'histoire haïtienne situe-t-on Coupé Cloué ?",
    options: ["Fin XXe siècle (1970-2000)", "Époque contemporaine (2000 à aujourd'hui)", "XIXe siècle", "Intemporel (figure du folklore/vodou)"],
    correct: 0
  },
  {
    q: "Comment classerait-on Louis Joseph Janvier parmi les personnalités haïtiennes ?",
    options: ["Peintre / artiste visuel", "Père fondateur / figure de l'Indépendance", "Chef d'État", "Intellectuel / militant"],
    correct: 3
  },
  {
    q: "Henri Christophe provient ou est rattaché à quelle zone ?",
    options: ["Nord (Cap-Haïtien)", "Port-au-Prince", "Saint-Marc", "Nord (Grande-Rivière-du-Nord)"],
    correct: 0
  },
  {
    q: "Préfète Duffaut a marqué ou vécu principalement à quelle période ?",
    options: ["Intemporel (figure du folklore/vodou)", "Milieu XXe siècle (1930-1970)", "XIXe siècle", "Révolution haïtienne (avant 1804)"],
    correct: 1
  },
  {
    q: "Pour quelle raison Anténor Firmin est-il connu dans l'histoire ou la culture haïtienne ?",
    options: ["Militante féministe, cofondatrice d'organisations pour les droits des femmes", "Anthropologue, auteur de « De l'égalité des races humaines »", "Lwa protecteur de l'agriculture et des paysans dans le vodou haïtien", "Auteur du roman « Gouverneurs de la rosée »"],
    correct: 1
  },
  {
    q: "Dans quelle période de l'histoire haïtienne situe-t-on Jacques Stephen Alexis ?",
    options: ["Milieu XXe siècle (1930-1970)", "Intemporel (figure du folklore/vodou)", "Époque contemporaine (2000 à aujourd'hui)", "XIXe siècle"],
    correct: 0
  },
  {
    q: "Quelle est l'époque de référence pour Myriam Merlet ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Fin XXe siècle (1970-2000)", "Révolution haïtienne (avant 1804)", "Milieu XXe siècle (1930-1970)"],
    correct: 1
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Baron Samedi ?",
    options: ["Port-au-Prince", "Marmelade (Artibonite)", "National / légendaire", "Jacmel"],
    correct: 2
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Samuel Dalembert ?",
    options: ["Écrivain et diplomate défenseur de la dignité haïtienne", "Pivot haïtiano-canadien ayant joué en NBA", "Première femme haïtienne docteure en lettres, anthropologue", "Militante féministe, cofondatrice d'organisations pour les droits des femmes"],
    correct: 1
  },
  {
    q: "Comment Faustin Soulouque est-il principalement connu ?",
    options: ["Diplomate / personnalité internationale", "Chef d'État", "Peintre / artiste visuel", "Figure religieuse / vodou"],
    correct: 1
  },
  {
    q: "Parmi les propositions suivantes, laquelle correspond à Sténio Vincent ?",
    options: ["Écrivain", "Diplomate / personnalité internationale", "Peintre / artiste visuel", "Chef d'État"],
    correct: 3
  },
  {
    q: "Comment Duckens Nazon est-il généralement présenté ?",
    options: ["Athlète / sportif", "Figure religieuse / vodou", "Diplomate / personnalité internationale", "Intellectuel / militant"],
    correct: 0
  },
  {
    q: "D'où est originaire Toussaint Louverture, ou à quel lieu est-il le plus associé ?",
    options: ["Bréda (Cap-Haïtien)", "Cap-Haïtien", "Diaspora (New Jersey)", "Saint-Marc"],
    correct: 0
  },
  {
    q: "Marie Vieux-Chauvet a marqué ou vécu principalement à quelle période ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "XIXe siècle", "Milieu XXe siècle (1930-1970)", "Début XXe siècle"],
    correct: 2
  },
  {
    q: "Quand Charles Oscar Étienne (Jean-Baptiste Chavannes) a-t-il été le plus actif ou influent ?",
    options: ["Fin XXe siècle (1970-2000)", "XIXe siècle", "Début XXe siècle", "Révolution haïtienne (avant 1804)"],
    correct: 3
  },
  {
    q: "Jean-Robert Cadet appartient à quel type de figure historique ou culturelle ?",
    options: ["Athlète / sportif", "Écrivain", "Peintre / artiste visuel", "Musicien"],
    correct: 1
  },
  {
    q: "De quel type de personnalité s'agit-il pour René Préval ?",
    options: ["Musicien", "Peintre / artiste visuel", "Chef d'État", "Intellectuel / militant"],
    correct: 2
  },
  {
    q: "De quel type de personnalité s'agit-il pour Wyclef Jean ?",
    options: ["Personnage du folklore", "Musicien", "Père fondateur / figure de l'Indépendance", "Diplomate / personnalité internationale"],
    correct: 1
  },
  {
    q: "Ertha Pascal-Trouillot appartient à quel type de figure historique ou culturelle ?",
    options: ["Figure religieuse / vodou", "Musicien", "Chef d'État", "Peintre / artiste visuel"],
    correct: 2
  },
  {
    q: "Rigaud Benoit a marqué ou vécu principalement à quelle période ?",
    options: ["Révolution haïtienne (avant 1804)", "Fin XXe siècle (1970-2000)", "Milieu XXe siècle (1930-1970)", "Intemporel (figure du folklore/vodou)"],
    correct: 2
  },
  {
    q: "Parmi les propositions suivantes, laquelle correspond à Wilson Bigaud ?",
    options: ["Intellectuel / militant", "Peintre / artiste visuel", "Personnage du folklore", "Écrivain"],
    correct: 1
  },
  {
    q: "Jean-Pierre Boyer a marqué ou vécu principalement à quelle période ?",
    options: ["Fin XXe siècle (1970-2000)", "Époque contemporaine (2000 à aujourd'hui)", "XIXe siècle", "Début XXe siècle"],
    correct: 2
  },
  {
    q: "Vincent Ogé appartient à quel type de figure historique ou culturelle ?",
    options: ["Père fondateur / figure de l'Indépendance", "Personnage du folklore", "Athlète / sportif", "Peintre / artiste visuel"],
    correct: 0
  },
  {
    q: "Quel rôle décrit le mieux Boniface Alexandre dans l'histoire ou la culture haïtienne ?",
    options: ["Chef d'État", "Diplomate / personnalité internationale", "Athlète / sportif", "Musicien"],
    correct: 0
  },
  {
    q: "Parmi les propositions suivantes, laquelle correspond à Malice ?",
    options: ["Chef d'État", "Père fondateur / figure de l'Indépendance", "Intellectuel / militant", "Personnage du folklore"],
    correct: 3
  },
  {
    q: "À quel moment de l'histoire haïtienne rattache-t-on Emmanuel Sanon ?",
    options: ["XIXe siècle", "Révolution haïtienne (avant 1804)", "Fin XXe siècle (1970-2000)", "Intemporel (figure du folklore/vodou)"],
    correct: 2
  },
  {
    q: "Quelle étiquette correspond le mieux à Myriam Merlet ?",
    options: ["Père fondateur / figure de l'Indépendance", "Musicien", "Personnage du folklore", "Intellectuel / militant"],
    correct: 3
  },
  {
    q: "Quelle période correspond le mieux à Jacques Stephen Alexis ?",
    options: ["Milieu XXe siècle (1930-1970)", "Intemporel (figure du folklore/vodou)", "Fin XXe siècle (1970-2000)", "Début XXe siècle"],
    correct: 0
  },
  {
    q: "Quel fait marquant est associé à Hector Hyppolite ?",
    options: ["Lwa des morts et gardien des cimetières dans le vodou haïtien", "Pivot haïtiano-canadien ayant joué en NBA", "Ethnologue, auteur de « Ainsi parla l'oncle », père de l'indigénisme haïtien", "Figure fondatrice de la peinture naïve haïtienne"],
    correct: 3
  },
  {
    q: "Toto Bissainthe a marqué ou vécu principalement à quelle période ?",
    options: ["Fin XXe siècle (1970-2000)", "Intemporel (figure du folklore/vodou)", "Début XXe siècle", "Révolution haïtienne (avant 1804)"],
    correct: 0
  },
  {
    q: "D'où est originaire Yvonne Hakim-Rimpel, ou à quel lieu est-elle le plus associée ?",
    options: ["National / légendaire", "Bréda (Cap-Haïtien)", "Port-au-Prince", "Diaspora (New Jersey)"],
    correct: 2
  },
  {
    q: "Quelle étiquette correspond le mieux à Gary Victor ?",
    options: ["Écrivain", "Intellectuel / militant", "Personnage du folklore", "Diplomate / personnalité internationale"],
    correct: 0
  },
  {
    q: "Qu'est-ce qui rend Jean-Claude Duvalier (Baby Doc) célèbre ou important ?",
    options: ["Succéda à son père comme « Président à vie » de 1971 à 1986", "Militante féministe, cofondatrice d'organisations pour les droits des femmes", "Premier président noir élu après une longue période d'influence mulâtre", "Président ayant modernisé l'éducation et les relations extérieures d'Haïti"],
    correct: 0
  },
  {
    q: "D'où est originaire Garry Conille, ou à quel lieu est-il le plus associé ?",
    options: ["Diaspora (New Jersey)", "Port-au-Prince", "Nord (Bataille de Vertières)", "Bréda (Cap-Haïtien)"],
    correct: 1
  },
  {
    q: "Jean-Bertrand Aristide est principalement associé à quel lieu ?",
    options: ["Port-Salut", "Petit-Goâve", "Jérémie (Grande-Anse)", "Trou-du-Nord (Nord-Est)"],
    correct: 0
  },
  {
    q: "Faustin Soulouque provient ou est rattaché à quelle zone ?",
    options: ["Plateau Central", "Petit-Goâve", "Port-au-Prince", "Cap-Haïtien"],
    correct: 1
  },
  {
    q: "À quel moment de l'histoire haïtienne rattache-t-on Michael Brun ?",
    options: ["Début XXe siècle", "XIXe siècle", "Époque contemporaine (2000 à aujourd'hui)", "Fin XXe siècle (1970-2000)"],
    correct: 2
  },
  {
    q: "Comment classerait-on Faustin Soulouque parmi les personnalités haïtiennes ?",
    options: ["Peintre / artiste visuel", "Diplomate / personnalité internationale", "Athlète / sportif", "Chef d'État"],
    correct: 3
  },
  {
    q: "Dans quelle catégorie situerait-on Jean-Claude Duvalier (Baby Doc) ?",
    options: ["Figure religieuse / vodou", "Chef d'État", "Musicien", "Peintre / artiste visuel"],
    correct: 1
  },
  {
    q: "Parmi les propositions suivantes, laquelle correspond à Jean-Claude Duvalier (Baby Doc) ?",
    options: ["Musicien", "Chef d'État", "Athlète / sportif", "Père fondateur / figure de l'Indépendance"],
    correct: 1
  },
  {
    q: "Quel élément biographique distingue Ariel Henry ?",
    options: ["Autrice du triptyque romanesque « Amour, Colère et Folie »", "Neurochirurgien devenu Premier ministre après l'assassinat de Jovenel Moïse", "Chef de file de l'école du Cap dans la peinture haïtienne", "Proclama l'indépendance d'Haïti en 1804 et en devint le premier chef d'État"],
    correct: 1
  },
  {
    q: "François Duvalier (Papa Doc) provient ou est rattaché à quelle zone ?",
    options: ["National / légendaire", "Grande Rivière du Nord", "Port-au-Prince", "Jacmel"],
    correct: 3
  },
  {
    q: "Dans quelle période de l'histoire haïtienne situe-t-on Michel Martelly ?",
    options: ["XIXe siècle", "Milieu XXe siècle (1930-1970)", "Intemporel (figure du folklore/vodou)", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 3
  },
  {
    q: "Comment Ti Manno est-il généralement présenté ?",
    options: ["Athlète / sportif", "Diplomate / personnalité internationale", "Figure religieuse / vodou", "Musicien"],
    correct: 3
  },
  {
    q: "Quel élément biographique distingue Yvonne Hakim-Rimpel ?",
    options: ["Jeune héros malin des contes traditionnels haïtiens", "Journaliste féministe pionnière en Haïti", "Personnage rusé qui déjoue toujours son compère Bouki", "Écrivain élu à l'Académie française"],
    correct: 1
  },
  {
    q: "À quel moment de l'histoire haïtienne rattache-t-on Jean-Bertrand Aristide ?",
    options: ["Révolution haïtienne (avant 1804)", "Début XXe siècle", "Intemporel (figure du folklore/vodou)", "Fin XXe siècle (1970-2000)"],
    correct: 3
  },
  {
    q: "Dans quelle période de l'histoire haïtienne situe-t-on Duckens Nazon ?",
    options: ["XIXe siècle", "Fin XXe siècle (1970-2000)", "Intemporel (figure du folklore/vodou)", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 3
  },
  {
    q: "Comment classerait-on Vincent Ogé parmi les personnalités haïtiennes ?",
    options: ["Figure religieuse / vodou", "Diplomate / personnalité internationale", "Père fondateur / figure de l'Indépendance", "Personnage du folklore"],
    correct: 2
  },
  {
    q: "Où situe-t-on l'histoire de Rigaud Benoit ?",
    options: ["Diaspora (Canada)", "Nord (Cap-Haïtien)", "Bréda (Cap-Haïtien)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Pour quoi Boniface Alexandre est-il surtout reconnu ?",
    options: ["Président puis empereur d'Haïti sous le nom de Faustin Ier", "Lwa guerrier associé au fer et à la force dans le vodou haïtien", "Lwa protecteur de l'agriculture et des paysans dans le vodou haïtien", "Président par intérim après le départ d'Aristide en 2004"],
    correct: 3
  },
  {
    q: "Michael Brun appartient à quel type de figure historique ou culturelle ?",
    options: ["Chef d'État", "Musicien", "Père fondateur / figure de l'Indépendance", "Figure religieuse / vodou"],
    correct: 1
  },
  {
    q: "Dans quelle catégorie situerait-on Coupé Cloué ?",
    options: ["Musicien", "Diplomate / personnalité internationale", "Père fondateur / figure de l'Indépendance", "Personnage du folklore"],
    correct: 0
  },
  {
    q: "Quelle est la nature du rôle joué par Édouard Duval-Carrié ?",
    options: ["Peintre / artiste visuel", "Musicien", "Diplomate / personnalité internationale", "Père fondateur / figure de l'Indépendance"],
    correct: 0
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Yvonne Hakim-Rimpel ?",
    options: ["Ancien chanteur de konpa devenu président de la République", "Personnage rusé qui déjoue toujours son compère Bouki", "Président ayant unifié l'ensemble de l'île sous administration haïtienne", "Journaliste féministe pionnière en Haïti"],
    correct: 3
  },
  {
    q: "Comment Louis Joseph Janvier est-il généralement présenté ?",
    options: ["Intellectuel / militant", "Écrivain", "Figure religieuse / vodou", "Chef d'État"],
    correct: 0
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Emeline Michel ?",
    options: ["Port-au-Prince", "Diaspora (Floride)", "Gonaïves", "Anse-à-Veau"],
    correct: 2
  },
  {
    q: "Dans quelle période de l'histoire haïtienne situe-t-on Anthony Phelps ?",
    options: ["Fin XXe siècle (1970-2000)", "Révolution haïtienne (avant 1804)", "XIXe siècle", "Début XXe siècle"],
    correct: 0
  },
  {
    q: "Quand Toussaint Louverture a-t-il été le plus actif ou influent ?",
    options: ["Fin XXe siècle (1970-2000)", "Révolution haïtienne (avant 1804)", "Milieu XXe siècle (1930-1970)", "XIXe siècle"],
    correct: 1
  },
  {
    q: "Faustin Soulouque appartient à quelle période historique ?",
    options: ["Début XXe siècle", "Époque contemporaine (2000 à aujourd'hui)", "XIXe siècle", "Révolution haïtienne (avant 1804)"],
    correct: 2
  },
  {
    q: "Comment François Duvalier (Papa Doc) est-il généralement présenté ?",
    options: ["Peintre / artiste visuel", "Chef d'État", "Intellectuel / militant", "Personnage du folklore"],
    correct: 1
  },
  {
    q: "Parmi les propositions suivantes, laquelle correspond à Emeline Michel ?",
    options: ["Personnage du folklore", "Écrivain", "Chef d'État", "Musicien"],
    correct: 3
  },
  {
    q: "Pour quoi Anténor Firmin est-il surtout reconnu ?",
    options: ["Seul président haïtien à avoir achevé deux mandats non consécutifs", "Anthropologue, auteur de « De l'égalité des races humaines »", "Romancière contemporaine, autrice de « Saisons sauvages »", "Auteur du roman « Gouverneurs de la rosée »"],
    correct: 1
  },
  {
    q: "Comment Alexandre Pétion est-il généralement présenté ?",
    options: ["Père fondateur / figure de l'Indépendance", "Personnage du folklore", "Figure religieuse / vodou", "Chef d'État"],
    correct: 0
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Rigaud Benoit ?",
    options: ["Peintre naïf associé au Centre d'Art de Port-au-Prince", "Auteur du récit autobiographique sur son enfance de « restavèk »", "Romancière contemporaine, autrice de « Saisons sauvages »", "Militante féministe, cofondatrice d'organisations pour les droits des femmes"],
    correct: 0
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Henri Christophe ?",
    options: ["Ravine-Sèche", "Petit-Goâve", "Nord (Cap-Haïtien)", "Quartier-Morin (Nord)"],
    correct: 2
  },
  {
    q: "Quel rôle décrit le mieux Manno Charlemagne dans l'histoire ou la culture haïtienne ?",
    options: ["Musicien", "Peintre / artiste visuel", "Diplomate / personnalité internationale", "Père fondateur / figure de l'Indépendance"],
    correct: 0
  },
  {
    q: "Où situe-t-on l'histoire de Samuel Dalembert ?",
    options: ["Diaspora (New Jersey)", "Saint-Marc", "Diaspora (États-Unis)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Quelle est l'époque de référence pour Coupé Cloué ?",
    options: ["Milieu XXe siècle (1930-1970)", "XIXe siècle", "Fin XXe siècle (1970-2000)", "Début XXe siècle"],
    correct: 2
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Louis Joseph Janvier ?",
    options: ["Ravine-Sèche", "Diaspora (New Jersey)", "Port-au-Prince", "Trou-du-Nord (Nord-Est)"],
    correct: 2
  },
  {
    q: "Pour quelle raison Philomé Obin est-il connu dans l'histoire ou la culture haïtienne ?",
    options: ["Chef de file de l'école du Cap dans la peinture haïtienne", "Président par intérim après le départ d'Aristide en 2004", "Poétesse haïtienne ayant vécu principalement en France", "Lwa des morts et gardien des cimetières dans le vodou haïtien"],
    correct: 0
  },
  {
    q: "D'où est originaire Anthony Phelps, ou à quel lieu est-il le plus associé ?",
    options: ["Port-au-Prince", "Nord (Grande-Rivière-du-Nord)", "Gonaïves", "National / légendaire"],
    correct: 0
  },
  {
    q: "Quel élément biographique distingue Boukman Dutty ?",
    options: ["Prêtre vodou considéré comme un déclencheur de la révolte des esclaves de 1791", "Lwa serpent, considéré comme l'un des esprits les plus anciens du vodou", "Personnage rusé qui déjoue toujours son compère Bouki", "Poète et romancier, figure du mouvement Haïti Littéraire"],
    correct: 0
  },
  {
    q: "À quelle époque associe-t-on Andre Berto ?",
    options: ["Fin XXe siècle (1970-2000)", "Milieu XXe siècle (1930-1970)", "Époque contemporaine (2000 à aujourd'hui)", "Début XXe siècle"],
    correct: 2
  },
  {
    q: "Quand Jacques Roumain a-t-il été le plus actif ou influent ?",
    options: ["XIXe siècle", "Intemporel (figure du folklore/vodou)", "Milieu XXe siècle (1930-1970)", "Fin XXe siècle (1970-2000)"],
    correct: 2
  },
  {
    q: "Quel fait marquant est associé à Jean Dominique ?",
    options: ["Journaliste et directeur de Radio Haïti Inter, assassiné en 2000", "Prêtre vodou considéré comme un déclencheur de la révolte des esclaves de 1791", "Lwa associée à l'amour, la beauté et le luxe dans le vodou haïtien", "Première femme haïtienne docteure en lettres, anthropologue"],
    correct: 0
  },
  {
    q: "Quel lieu géographique évoque le plus René Préval ?",
    options: ["National / légendaire", "Cap-Haïtien", "Marmelade (Artibonite)", "Diaspora (Canada)"],
    correct: 2
  },
  {
    q: "Quel lieu géographique évoque le plus Charles Oscar Étienne (Jean-Baptiste Chavannes) ?",
    options: ["National / légendaire", "Dondon (Nord)", "Sud (Grande-Anse)", "Nord (Cap-Haïtien)"],
    correct: 2
  },
  {
    q: "Quel fait marquant est associé à Ti Jean ?",
    options: ["Peintre connu pour ses « villes imaginaires » aux couleurs vives", "Jeune héros malin des contes traditionnels haïtiens", "Homme de couleur libre ayant mené une révolte avant l'indépendance", "Lwa associée à l'amour, la beauté et le luxe dans le vodou haïtien"],
    correct: 1
  },
  {
    q: "Dans quelle catégorie situerait-on Edwidge Danticat ?",
    options: ["Chef d'État", "Personnage du folklore", "Diplomate / personnalité internationale", "Écrivain"],
    correct: 3
  },
  {
    q: "Quelle est l'époque de référence pour Leslie Manigat ?",
    options: ["Début XXe siècle", "Intemporel (figure du folklore/vodou)", "Fin XXe siècle (1970-2000)", "Révolution haïtienne (avant 1804)"],
    correct: 2
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Dany Laferrière ?",
    options: ["Écrivain et diplomate défenseur de la dignité haïtienne", "Romancier et médecin, auteur du « réalisme merveilleux »", "Écrivain élu à l'Académie française", "Seul président haïtien à avoir achevé deux mandats non consécutifs"],
    correct: 2
  },
  {
    q: "Quelle étiquette correspond le mieux à Malice ?",
    options: ["Personnage du folklore", "Athlète / sportif", "Père fondateur / figure de l'Indépendance", "Écrivain"],
    correct: 0
  },
  {
    q: "Quel fait marquant est associé à Samuel Dalembert ?",
    options: ["Pivot haïtiano-canadien ayant joué en NBA", "Premier président noir élu après une longue période d'influence mulâtre", "Proclama l'indépendance d'Haïti en 1804 et en devint le premier chef d'État", "Chef militaire et politique, figure centrale de la Révolution haïtienne"],
    correct: 0
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Jovenel Moïse ?",
    options: ["Premier président noir élu après une longue période d'influence mulâtre", "Président élu en 2016, assassiné en fonction en 2021", "Lwa associée à l'amour, la beauté et le luxe dans le vodou haïtien", "Lwa guerrier associé au fer et à la force dans le vodou haïtien"],
    correct: 1
  },
  {
    q: "Quel lieu géographique évoque le plus Michel Martelly ?",
    options: ["Nord (Grande-Rivière-du-Nord)", "Port-au-Prince", "Nord (Cap-Haïtien)", "Jacmel"],
    correct: 1
  },
  {
    q: "À quel moment de l'histoire haïtienne rattache-t-on Cécile Fatiman ?",
    options: ["XIXe siècle", "Révolution haïtienne (avant 1804)", "Fin XXe siècle (1970-2000)", "Début XXe siècle"],
    correct: 1
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Vincent Ogé ?",
    options: ["Homme de couleur libre ayant mené une révolte avant l'indépendance", "Personnage rusé qui déjoue toujours son compère Bouki", "Poète national, auteur du célèbre poème « Choucoune »", "Autrice du triptyque romanesque « Amour, Colère et Folie »"],
    correct: 0
  },
  {
    q: "À quelle époque associe-t-on Jean-Bertrand Aristide ?",
    options: ["XIXe siècle", "Fin XXe siècle (1970-2000)", "Intemporel (figure du folklore/vodou)", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 1
  },
  {
    q: "Quel fait marquant est associé à Damballah ?",
    options: ["Ethnologue, auteur de « Ainsi parla l'oncle », père de l'indigénisme haïtien", "Romancier connu pour ses œuvres mêlant réalisme et fantastique", "Lwa des morts et gardien des cimetières dans le vodou haïtien", "Lwa serpent, considéré comme l'un des esprits les plus anciens du vodou"],
    correct: 3
  },
  {
    q: "Comment Cécile Fatiman est-elle principalement connue ?",
    options: ["Écrivain", "Père fondateur / figure de l'Indépendance", "Personnage du folklore", "Intellectuel / militant"],
    correct: 1
  },
  {
    q: "Quelle est l'époque de référence pour Samuel Dalembert ?",
    options: ["Révolution haïtienne (avant 1804)", "Époque contemporaine (2000 à aujourd'hui)", "XIXe siècle", "Fin XXe siècle (1970-2000)"],
    correct: 1
  },
  {
    q: "Comment Charlemagne Péralte est-il généralement présenté ?",
    options: ["Personnage du folklore", "Figure religieuse / vodou", "Peintre / artiste visuel", "Père fondateur / figure de l'Indépendance"],
    correct: 3
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Michaëlle Jean ?",
    options: ["Première femme haïtienne docteure en lettres, anthropologue", "Haïtiano-canadienne, ancienne Gouverneure générale du Canada", "Pivot haïtiano-canadien ayant joué en NBA", "Écrivain et diplomate défenseur de la dignité haïtienne"],
    correct: 1
  },
  {
    q: "Quel élément biographique distingue Jean-Bertrand Aristide ?",
    options: ["Lwa guerrier associé au fer et à la force dans le vodou haïtien", "Écrivain et diplomate défenseur de la dignité haïtienne", "Peintre connu pour ses « villes imaginaires » aux couleurs vives", "Ancien prêtre devenu président à deux reprises"],
    correct: 3
  },
  {
    q: "D'où est originaire Jean Dominique, ou à quel lieu est-il le plus associé ?",
    options: ["Ravine-Sèche", "Saint-Marc", "Verrettes (Artibonite)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Michaëlle Jean ?",
    options: ["Poète et romancier, figure du mouvement Haïti Littéraire", "Politologue devenu président pendant quelques mois en 1988", "Haïtiano-canadienne, ancienne Gouverneure générale du Canada", "DJ et producteur fusionnant konpa et musique électronique"],
    correct: 2
  },
  {
    q: "Quel lieu géographique évoque le plus Malice ?",
    options: ["Nord (Bois-Caïman)", "Diaspora (New Jersey)", "National / légendaire", "Diaspora (États-Unis)"],
    correct: 2
  },
  {
    q: "De quel type de personnalité s'agit-il pour Jean Dominique ?",
    options: ["Intellectuel / militant", "Diplomate / personnalité internationale", "Figure religieuse / vodou", "Musicien"],
    correct: 0
  },
  {
    q: "À quelle époque associe-t-on Louis Joseph Janvier ?",
    options: ["Milieu XXe siècle (1930-1970)", "Début XXe siècle", "XIXe siècle", "Révolution haïtienne (avant 1804)"],
    correct: 2
  },
  {
    q: "Quelle étiquette correspond le mieux à Toto Bissainthe ?",
    options: ["Figure religieuse / vodou", "Musicien", "Intellectuel / militant", "Peintre / artiste visuel"],
    correct: 1
  },
  {
    q: "Comment René Préval est-il principalement connu ?",
    options: ["Chef d'État", "Figure religieuse / vodou", "Peintre / artiste visuel", "Diplomate / personnalité internationale"],
    correct: 0
  },
  {
    q: "Dans quelle catégorie situerait-on Préfète Duffaut ?",
    options: ["Figure religieuse / vodou", "Père fondateur / figure de l'Indépendance", "Chef d'État", "Peintre / artiste visuel"],
    correct: 3
  },
  {
    q: "Où situe-t-on l'histoire de Michaëlle Jean ?",
    options: ["Nord (Bataille de Vertières)", "Cap-Haïtien", "Diaspora (Canada)", "Trou-du-Nord (Nord-Est)"],
    correct: 2
  },
  {
    q: "Benoît Batraville appartient à quelle période historique ?",
    options: ["Révolution haïtienne (avant 1804)", "Début XXe siècle", "Époque contemporaine (2000 à aujourd'hui)", "Milieu XXe siècle (1930-1970)"],
    correct: 1
  },
  {
    q: "D'où est originaire Damballah, ou à quel lieu est-il le plus associé ?",
    options: ["Diaspora (Floride)", "Sud (Grande-Anse)", "National / légendaire", "Bréda (Cap-Haïtien)"],
    correct: 2
  },
  {
    q: "Où Wilson Bigaud a-t-il vécu ou marqué l'histoire ?",
    options: ["Bréda (Cap-Haïtien)", "Jérémie (Grande-Anse)", "Port-au-Prince", "Petit-Goâve"],
    correct: 2
  },
  {
    q: "Quelle est la nature du rôle joué par Henri Christophe ?",
    options: ["Personnage du folklore", "Figure religieuse / vodou", "Père fondateur / figure de l'Indépendance", "Musicien"],
    correct: 2
  },
  {
    q: "Comment classerait-on Michaëlle Jean parmi les personnalités haïtiennes ?",
    options: ["Peintre / artiste visuel", "Musicien", "Diplomate / personnalité internationale", "Athlète / sportif"],
    correct: 2
  },
  {
    q: "Comment classerait-on Charlemagne Péralte parmi les personnalités haïtiennes ?",
    options: ["Athlète / sportif", "Père fondateur / figure de l'Indépendance", "Diplomate / personnalité internationale", "Intellectuel / militant"],
    correct: 1
  },
  {
    q: "Qu'est-ce qui rend René Préval célèbre ou important ?",
    options: ["Boxeur professionnel haïtiano-américain, ancien champion du monde", "Premier président de la République d'Haïti (partie Sud)", "Seul président haïtien à avoir achevé deux mandats non consécutifs", "Romancier connu pour ses œuvres mêlant réalisme et fantastique"],
    correct: 2
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Ida Faubert ?",
    options: ["Verrettes (Artibonite)", "Diaspora (États-Unis)", "Port-au-Prince", "Sud (Grande-Anse)"],
    correct: 2
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Emmanuel Sanon ?",
    options: ["Hinche (Centre)", "Port-au-Prince", "National / légendaire", "Nord (Arcahaie)"],
    correct: 1
  },
  {
    q: "Quel élément biographique distingue Sanite Bélair ?",
    options: ["Journaliste féministe pionnière en Haïti", "Héroïne de la Révolution haïtienne exécutée par les troupes françaises", "Autrice du triptyque romanesque « Amour, Colère et Folie »", "Attaquant international de l'équipe nationale de football d'Haïti"],
    correct: 1
  },
  {
    q: "Oswald Durand a marqué ou vécu principalement à quelle période ?",
    options: ["XIXe siècle", "Intemporel (figure du folklore/vodou)", "Révolution haïtienne (avant 1804)", "Début XXe siècle"],
    correct: 0
  },
  {
    q: "Quel fait marquant est associé à Ida Faubert ?",
    options: ["Footballeur devenu icône du konpa avec l'Ensemble Select", "Président ayant négocié la fin de l'occupation américaine", "Poétesse haïtienne ayant vécu principalement en France", "Peintre célèbre pour sa fresque à la Cathédrale Sainte-Trinité"],
    correct: 2
  },
  {
    q: "Philomé Obin a marqué ou vécu principalement à quelle période ?",
    options: ["XIXe siècle", "Fin XXe siècle (1970-2000)", "Milieu XXe siècle (1930-1970)", "Révolution haïtienne (avant 1804)"],
    correct: 2
  },
  {
    q: "Quel rôle décrit le mieux Toussaint Louverture dans l'histoire ou la culture haïtienne ?",
    options: ["Écrivain", "Intellectuel / militant", "Athlète / sportif", "Père fondateur / figure de l'Indépendance"],
    correct: 3
  },
  {
    q: "Quand Castera Bazile a-t-il été le plus actif ou influent ?",
    options: ["Milieu XXe siècle (1930-1970)", "Révolution haïtienne (avant 1804)", "Fin XXe siècle (1970-2000)", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 0
  },
  {
    q: "Quelle période correspond le mieux à Henri Christophe ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Révolution haïtienne (avant 1804)", "XIXe siècle", "Intemporel (figure du folklore/vodou)"],
    correct: 1
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Sanite Bélair ?",
    options: ["Bréda (Cap-Haïtien)", "Verrettes (Artibonite)", "Marmelade (Artibonite)", "National / légendaire"],
    correct: 1
  },
  {
    q: "Emmanuel Sanon provient ou est rattaché à quelle zone ?",
    options: ["Jacmel", "Bréda (Cap-Haïtien)", "Port-au-Prince", "Ravine-Sèche"],
    correct: 2
  },
  {
    q: "Samuel Dalembert appartient à quelle période historique ?",
    options: ["Intemporel (figure du folklore/vodou)", "Époque contemporaine (2000 à aujourd'hui)", "Révolution haïtienne (avant 1804)", "Fin XXe siècle (1970-2000)"],
    correct: 1
  },
  {
    q: "Comment classerait-on Jean-Robert Cadet parmi les personnalités haïtiennes ?",
    options: ["Écrivain", "Père fondateur / figure de l'Indépendance", "Intellectuel / militant", "Peintre / artiste visuel"],
    correct: 0
  },
  {
    q: "Louis Joseph Janvier appartient à quelle période historique ?",
    options: ["Révolution haïtienne (avant 1804)", "Intemporel (figure du folklore/vodou)", "XIXe siècle", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 2
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux François Capois (Capois-La-Mort) ?",
    options: ["Général célèbre pour sa bravoure à la bataille de Vertières", "Ancien fonctionnaire de l'ONU nommé Premier ministre à deux reprises", "Peintre célèbre pour sa fresque à la Cathédrale Sainte-Trinité", "Auteur du récit autobiographique sur son enfance de « restavèk »"],
    correct: 0
  },
  {
    q: "Quelle est l'époque de référence pour Dany Laferrière ?",
    options: ["Révolution haïtienne (avant 1804)", "Époque contemporaine (2000 à aujourd'hui)", "Fin XXe siècle (1970-2000)", "Intemporel (figure du folklore/vodou)"],
    correct: 1
  },
  {
    q: "Dans quelle période de l'histoire haïtienne situe-t-on Catherine Flon ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Révolution haïtienne (avant 1804)", "Fin XXe siècle (1970-2000)", "Milieu XXe siècle (1930-1970)"],
    correct: 1
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de René Préval ?",
    options: ["Trou-du-Nord (Nord-Est)", "Diaspora (Canada)", "Marmelade (Artibonite)", "Nord (Grande-Rivière-du-Nord)"],
    correct: 2
  },
  {
    q: "Toto Bissainthe provient ou est rattachée à quelle zone ?",
    options: ["Jacmel", "Nord (Bois-Caïman)", "Port-au-Prince", "Diaspora (New Jersey)"],
    correct: 2
  },
  {
    q: "Où Anthony Phelps a-t-il vécu ou marqué l'histoire ?",
    options: ["Port-au-Prince", "Port-Salut", "Grande Rivière du Nord", "Hinche (Centre)"],
    correct: 0
  },
  {
    q: "Quelle période correspond le mieux à Gary Victor ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Fin XXe siècle (1970-2000)", "Intemporel (figure du folklore/vodou)", "XIXe siècle"],
    correct: 0
  },
  {
    q: "Où François Capois (Capois-La-Mort) a-t-il vécu ou marqué l'histoire ?",
    options: ["Port-Salut", "Hinche (Centre)", "Nord (Bataille de Vertières)", "Marmelade (Artibonite)"],
    correct: 2
  },
  {
    q: "Dans quelle période de l'histoire haïtienne situe-t-on Sténio Vincent ?",
    options: ["Milieu XXe siècle (1930-1970)", "Époque contemporaine (2000 à aujourd'hui)", "Début XXe siècle", "Intemporel (figure du folklore/vodou)"],
    correct: 0
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Louis Joseph Janvier ?",
    options: ["Lwa associée à l'amour, la beauté et le luxe dans le vodou haïtien", "Écrivain et diplomate défenseur de la dignité haïtienne", "Chanteur engagé devenu maire de Port-au-Prince", "Politologue devenu président pendant quelques mois en 1988"],
    correct: 1
  },
  {
    q: "Où situe-t-on l'histoire de Lyonel Trouillot ?",
    options: ["Jacmel", "Petit-Goâve", "Port-au-Prince", "National / légendaire"],
    correct: 2
  },
  {
    q: "Samuel Dalembert provient ou est rattaché à quelle zone ?",
    options: ["Port-au-Prince", "Jacmel", "Port-Salut", "Hinche (Centre)"],
    correct: 0
  },
  {
    q: "Sanite Bélair provient ou est rattachée à quelle zone ?",
    options: ["Verrettes (Artibonite)", "Hinche (Centre)", "Nord (Grande-Rivière-du-Nord)", "Plateau Central"],
    correct: 0
  },
  {
    q: "De quel type de personnalité s'agit-il pour Malice ?",
    options: ["Personnage du folklore", "Diplomate / personnalité internationale", "Musicien", "Écrivain"],
    correct: 0
  },
  {
    q: "Rigaud Benoit est principalement associé à quel lieu ?",
    options: ["Diaspora (États-Unis)", "Cap-Haïtien", "Port-au-Prince", "Nord (Grande-Rivière-du-Nord)"],
    correct: 2
  },
  {
    q: "Quel rôle décrit le mieux Anthony Phelps dans l'histoire ou la culture haïtienne ?",
    options: ["Athlète / sportif", "Figure religieuse / vodou", "Chef d'État", "Écrivain"],
    correct: 3
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Michael Brun ?",
    options: ["Plateau Central", "Port-au-Prince", "Hinche (Centre)", "Petit-Goâve"],
    correct: 1
  },
  {
    q: "Comment Vincent Ogé est-il généralement présenté ?",
    options: ["Intellectuel / militant", "Musicien", "Père fondateur / figure de l'Indépendance", "Personnage du folklore"],
    correct: 2
  },
  {
    q: "Pour quoi François Duvalier (Papa Doc) est-il surtout reconnu ?",
    options: ["Autrice du triptyque romanesque « Amour, Colère et Folie »", "Président puis « Président à vie » d'Haïti de 1957 à 1971", "Haïtiano-canadienne, ancienne Gouverneure générale du Canada", "Aurait cousu le premier drapeau haïtien en 1803"],
    correct: 1
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Samuel Dalembert ?",
    options: ["Pivot haïtiano-canadien ayant joué en NBA", "Neurochirurgien devenu Premier ministre après l'assassinat de Jovenel Moïse", "Romancière haïtiano-américaine, autrice de « Breath, Eyes, Memory »", "Footballeur devenu icône du konpa avec l'Ensemble Select"],
    correct: 0
  },
  {
    q: "Quelle période correspond le mieux à Ertha Pascal-Trouillot ?",
    options: ["Début XXe siècle", "Fin XXe siècle (1970-2000)", "Milieu XXe siècle (1930-1970)", "Révolution haïtienne (avant 1804)"],
    correct: 1
  },
  {
    q: "Comment reconnaît-on Dumarsais Estimé parmi les autres personnalités haïtiennes ?",
    options: ["Prêtre vodou considéré comme un déclencheur de la révolte des esclaves de 1791", "Romancier connu pour ses œuvres mêlant réalisme et fantastique", "Premier président noir élu après une longue période d'influence mulâtre", "Pivot haïtiano-canadien ayant joué en NBA"],
    correct: 2
  },
  {
    q: "Quand René Préval a-t-il été le plus actif ou influent ?",
    options: ["Fin XXe siècle (1970-2000)", "XIXe siècle", "Début XXe siècle", "Milieu XXe siècle (1930-1970)"],
    correct: 0
  },
  {
    q: "Paul Magloire est principalement associé à quel lieu ?",
    options: ["Jacmel", "National / légendaire", "Plateau Central", "Quartier-Morin (Nord)"],
    correct: 3
  },
  {
    q: "Quelle période correspond le mieux à Jean-Claude Duvalier (Baby Doc) ?",
    options: ["Intemporel (figure du folklore/vodou)", "Révolution haïtienne (avant 1804)", "Fin XXe siècle (1970-2000)", "Début XXe siècle"],
    correct: 2
  },
  {
    q: "Quelle est l'époque de référence pour Anténor Firmin ?",
    options: ["Fin XXe siècle (1970-2000)", "XIXe siècle", "Milieu XXe siècle (1930-1970)", "Début XXe siècle"],
    correct: 1
  },
  {
    q: "Quel fait marquant est associé à Fabre Geffrard ?",
    options: ["Président ayant négocié la fin de l'occupation américaine", "Chef de la résistance armée contre l'occupation américaine (1915-1934)", "Chef militaire et politique, figure centrale de la Révolution haïtienne", "Président ayant modernisé l'éducation et les relations extérieures d'Haïti"],
    correct: 3
  },
  {
    q: "À quel moment de l'histoire haïtienne rattache-t-on René Préval ?",
    options: ["Début XXe siècle", "Intemporel (figure du folklore/vodou)", "Époque contemporaine (2000 à aujourd'hui)", "Fin XXe siècle (1970-2000)"],
    correct: 3
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Coupé Cloué ?",
    options: ["Port-au-Prince", "Ravine-Sèche", "Nord (Arcahaie)", "Quartier-Morin (Nord)"],
    correct: 0
  },
  {
    q: "Comment Bouki est-il principalement connu ?",
    options: ["Chef d'État", "Diplomate / personnalité internationale", "Personnage du folklore", "Musicien"],
    correct: 2
  },
  {
    q: "Parmi les propositions suivantes, laquelle correspond à Garry Conille ?",
    options: ["Musicien", "Personnage du folklore", "Intellectuel / militant", "Chef d'État"],
    correct: 3
  },
  {
    q: "Dans quelle période de l'histoire haïtienne situe-t-on Edwidge Danticat ?",
    options: ["Révolution haïtienne (avant 1804)", "Époque contemporaine (2000 à aujourd'hui)", "Fin XXe siècle (1970-2000)", "Milieu XXe siècle (1930-1970)"],
    correct: 1
  },
  {
    q: "Quel rôle décrit le mieux Leslie Manigat dans l'histoire ou la culture haïtienne ?",
    options: ["Intellectuel / militant", "Chef d'État", "Personnage du folklore", "Athlète / sportif"],
    correct: 1
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Cécile Fatiman ?",
    options: ["Nord (Bois-Caïman)", "Saint-Marc", "Diaspora (Floride)", "National / légendaire"],
    correct: 0
  },
  {
    q: "Jacques Roumain appartient à quel type de figure historique ou culturelle ?",
    options: ["Écrivain", "Diplomate / personnalité internationale", "Personnage du folklore", "Athlète / sportif"],
    correct: 0
  },
  {
    q: "Comment reconnaît-on Papa Legba parmi les autres personnalités haïtiennes ?",
    options: ["Lwa guerrier associé au fer et à la force dans le vodou haïtien", "Lwa gardien des carrefours et intermédiaire avec les autres esprits", "Romancier et médecin, auteur du « réalisme merveilleux »", "Haïtiano-canadienne, ancienne Gouverneure générale du Canada"],
    correct: 1
  },
  {
    q: "De quel type de personnalité s'agit-il pour Dumarsais Estimé ?",
    options: ["Écrivain", "Chef d'État", "Figure religieuse / vodou", "Intellectuel / militant"],
    correct: 1
  },
  {
    q: "Toussaint Louverture appartient à quelle période historique ?",
    options: ["Début XXe siècle", "Révolution haïtienne (avant 1804)", "Intemporel (figure du folklore/vodou)", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 1
  },
  {
    q: "Pour quoi Azaka (Papa Zaka) est-il surtout reconnu ?",
    options: ["Se proclama roi d'Haïti et fit construire la Citadelle Laferrière", "Auteur du récit autobiographique sur son enfance de « restavèk »", "Footballeur devenu icône du konpa avec l'Ensemble Select", "Lwa protecteur de l'agriculture et des paysans dans le vodou haïtien"],
    correct: 3
  },
  {
    q: "Quelle est la nature du rôle joué par Ariel Henry ?",
    options: ["Musicien", "Intellectuel / militant", "Personnage du folklore", "Chef d'État"],
    correct: 3
  },
  {
    q: "Quel fait marquant est associé à La Sirène (Lasirenn) ?",
    options: ["Président puis « Président à vie » d'Haïti de 1957 à 1971", "Anthropologue, auteur de « De l'égalité des races humaines »", "Lwa des eaux et de la mer dans le vodou haïtien", "Prêtresse vodou associée à la cérémonie du Bois-Caïman"],
    correct: 2
  },
  {
    q: "Qu'est-ce qui rend René Depestre célèbre ou important ?",
    options: ["Personnage naïf et souvent trompé dans les contes populaires haïtiens", "Militaire devenu président dans les années 1950", "Poète et romancier, prix Renaudot pour « Hadriana dans tous mes rêves »", "Chef militaire et politique, figure centrale de la Révolution haïtienne"],
    correct: 2
  },
  {
    q: "Dans quelle période de l'histoire haïtienne situe-t-on Alexandre Pétion ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Révolution haïtienne (avant 1804)", "Fin XXe siècle (1970-2000)", "XIXe siècle"],
    correct: 1
  },
  {
    q: "René Préval provient ou est rattaché à quelle zone ?",
    options: ["Jacmel", "Marmelade (Artibonite)", "Sud (Grande-Anse)", "Diaspora (États-Unis)"],
    correct: 1
  },
  {
    q: "Où Michel Martelly a-t-il vécu ou marqué l'histoire ?",
    options: ["Diaspora (Canada)", "Diaspora (Floride)", "Nord (Arcahaie)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Pour quoi Michel Martelly est-il surtout reconnu ?",
    options: ["Lwa protecteur de l'agriculture et des paysans dans le vodou haïtien", "Lwa associée à l'amour, la beauté et le luxe dans le vodou haïtien", "Lwa des morts et gardien des cimetières dans le vodou haïtien", "Ancien chanteur de konpa devenu président de la République"],
    correct: 3
  },
  {
    q: "Quelle étiquette correspond le mieux à Baron Samedi ?",
    options: ["Athlète / sportif", "Figure religieuse / vodou", "Écrivain", "Père fondateur / figure de l'Indépendance"],
    correct: 1
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Damballah ?",
    options: ["Lwa des morts et gardien des cimetières dans le vodou haïtien", "Prêtre vodou considéré comme un déclencheur de la révolte des esclaves de 1791", "Lwa serpent, considéré comme l'un des esprits les plus anciens du vodou", "Journaliste et directeur de Radio Haïti Inter, assassiné en 2000"],
    correct: 2
  },
  {
    q: "Pour quoi Jacques Stephen Alexis est-il surtout reconnu ?",
    options: ["Président ayant négocié la fin de l'occupation américaine", "Romancier et médecin, auteur du « réalisme merveilleux »", "Chef de la résistance armée contre l'occupation américaine (1915-1934)", "Chanteuse surnommée « la Grande Dame de la chanson haïtienne »"],
    correct: 1
  },
  {
    q: "Parmi les propositions suivantes, laquelle correspond à Kettly Mars ?",
    options: ["Écrivain", "Athlète / sportif", "Figure religieuse / vodou", "Personnage du folklore"],
    correct: 0
  },
  {
    q: "Parmi les propositions suivantes, laquelle correspond à Wyclef Jean ?",
    options: ["Peintre / artiste visuel", "Chef d'État", "Athlète / sportif", "Musicien"],
    correct: 3
  },
  {
    q: "Dans quelle catégorie situerait-on Anténor Firmin ?",
    options: ["Diplomate / personnalité internationale", "Personnage du folklore", "Intellectuel / militant", "Figure religieuse / vodou"],
    correct: 2
  },
  {
    q: "Ti Manno est principalement associé à quel lieu ?",
    options: ["National / légendaire", "Saint-Marc", "Port-au-Prince", "Diaspora (Floride)"],
    correct: 2
  },
  {
    q: "Pour quelle raison Ezili Freda est-elle connue dans l'histoire ou la culture haïtienne ?",
    options: ["Militaire devenu président dans les années 1950", "Politologue devenu président pendant quelques mois en 1988", "Lwa associée à l'amour, la beauté et le luxe dans le vodou haïtien", "Peintre célèbre pour sa fresque à la Cathédrale Sainte-Trinité"],
    correct: 2
  },
  {
    q: "Wyclef Jean appartient à quelle période historique ?",
    options: ["Début XXe siècle", "Intemporel (figure du folklore/vodou)", "Époque contemporaine (2000 à aujourd'hui)", "Milieu XXe siècle (1930-1970)"],
    correct: 2
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Rigaud Benoit ?",
    options: ["Peintre naïf associé au Centre d'Art de Port-au-Prince", "Journaliste féministe pionnière en Haïti", "Auteur du récit autobiographique sur son enfance de « restavèk »", "Chef de la résistance armée contre l'occupation américaine (1915-1934)"],
    correct: 0
  },
  {
    q: "Comment classerait-on Emmanuel Sanon parmi les personnalités haïtiennes ?",
    options: ["Athlète / sportif", "Personnage du folklore", "Diplomate / personnalité internationale", "Père fondateur / figure de l'Indépendance"],
    correct: 0
  },
  {
    q: "Quelle période correspond le mieux à Jean-Robert Cadet ?",
    options: ["XIXe siècle", "Révolution haïtienne (avant 1804)", "Époque contemporaine (2000 à aujourd'hui)", "Milieu XXe siècle (1930-1970)"],
    correct: 2
  },
  {
    q: "Comment reconnaît-on Fabre Geffrard parmi les autres personnalités haïtiennes ?",
    options: ["Chanteuse surnommée « la Grande Dame de la chanson haïtienne »", "Président ayant modernisé l'éducation et les relations extérieures d'Haïti", "Chanteur de konpa social devenu une icône engagée", "Président élu en 2016, assassiné en fonction en 2021"],
    correct: 1
  },
  {
    q: "Où situe-t-on l'histoire de Toussaint Louverture ?",
    options: ["Quartier-Morin (Nord)", "Sud (Grande-Anse)", "Bréda (Cap-Haïtien)", "Gonaïves"],
    correct: 2
  },
  {
    q: "Quelle est l'époque de référence pour Boniface Alexandre ?",
    options: ["Milieu XXe siècle (1930-1970)", "Début XXe siècle", "Époque contemporaine (2000 à aujourd'hui)", "Intemporel (figure du folklore/vodou)"],
    correct: 2
  },
  {
    q: "Quand Jean-Robert Cadet a-t-il été le plus actif ou influent ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "XIXe siècle", "Fin XXe siècle (1970-2000)", "Milieu XXe siècle (1930-1970)"],
    correct: 0
  },
  {
    q: "Quel fait marquant est associé à Anténor Firmin ?",
    options: ["Anthropologue, auteur de « De l'égalité des races humaines »", "Figure fondatrice de la peinture naïve haïtienne", "Lwa des eaux et de la mer dans le vodou haïtien", "Politologue devenu président pendant quelques mois en 1988"],
    correct: 0
  },
  {
    q: "Parmi les propositions suivantes, laquelle correspond à Lyonel Trouillot ?",
    options: ["Figure religieuse / vodou", "Diplomate / personnalité internationale", "Écrivain", "Peintre / artiste visuel"],
    correct: 2
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à La Sirène (Lasirenn) ?",
    options: ["National / légendaire", "Jacmel", "Grande Rivière du Nord", "Nord (Cap-Haïtien)"],
    correct: 0
  },
  {
    q: "Dany Laferrière a marqué ou vécu principalement à quelle période ?",
    options: ["Révolution haïtienne (avant 1804)", "Milieu XXe siècle (1930-1970)", "Époque contemporaine (2000 à aujourd'hui)", "XIXe siècle"],
    correct: 2
  },
  {
    q: "Où Boniface Alexandre a-t-il vécu ou marqué l'histoire ?",
    options: ["Saint-Marc", "Plateau Central", "Port-au-Prince", "Diaspora (Floride)"],
    correct: 2
  },
  {
    q: "Quelle est l'époque de référence pour Andre Berto ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Intemporel (figure du folklore/vodou)", "Fin XXe siècle (1970-2000)", "XIXe siècle"],
    correct: 0
  },
  {
    q: "Quelle étiquette correspond le mieux à Samuel Dalembert ?",
    options: ["Musicien", "Athlète / sportif", "Personnage du folklore", "Peintre / artiste visuel"],
    correct: 1
  },
  {
    q: "Comment Michel Martelly est-il généralement présenté ?",
    options: ["Chef d'État", "Diplomate / personnalité internationale", "Écrivain", "Musicien"],
    correct: 0
  },
  {
    q: "Samuel Dalembert est principalement associé à quel lieu ?",
    options: ["Nord (Bataille de Vertières)", "Port-au-Prince", "Petit-Goâve", "Verrettes (Artibonite)"],
    correct: 1
  },
  {
    q: "Quelle étiquette correspond le mieux à Sténio Vincent ?",
    options: ["Personnage du folklore", "Père fondateur / figure de l'Indépendance", "Chef d'État", "Diplomate / personnalité internationale"],
    correct: 2
  },
  {
    q: "Pour quoi Benoît Batraville est-il surtout reconnu ?",
    options: ["Chanteur engagé devenu maire de Port-au-Prince", "Général cacos ayant poursuivi la résistance après la mort de Péralte", "Romancier et poète contemporain engagé", "Lwa associée à l'amour, la beauté et le luxe dans le vodou haïtien"],
    correct: 1
  },
  {
    q: "Boniface Alexandre a marqué ou vécu principalement à quelle période ?",
    options: ["Milieu XXe siècle (1930-1970)", "XIXe siècle", "Fin XXe siècle (1970-2000)", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 3
  },
  {
    q: "Jean Dominique appartient à quel type de figure historique ou culturelle ?",
    options: ["Musicien", "Figure religieuse / vodou", "Intellectuel / militant", "Chef d'État"],
    correct: 2
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Garry Conille ?",
    options: ["Pivot haïtiano-canadien ayant joué en NBA", "Seul président haïtien à avoir achevé deux mandats non consécutifs", "Militaire devenu président dans les années 1950", "Ancien fonctionnaire de l'ONU nommé Premier ministre à deux reprises"],
    correct: 3
  },
  {
    q: "Qu'est-ce qui rend Leslie Manigat célèbre ou important ?",
    options: ["Politologue devenu président pendant quelques mois en 1988", "Président élu en 2016, assassiné en fonction en 2021", "Président ayant modernisé l'éducation et les relations extérieures d'Haïti", "Prêtresse vodou associée à la cérémonie du Bois-Caïman"],
    correct: 0
  },
  {
    q: "Quel lieu géographique évoque le plus Cécile Fatiman ?",
    options: ["Cap-Haïtien", "Nord (Bois-Caïman)", "Grande Rivière du Nord", "Saint-Marc"],
    correct: 1
  },
  {
    q: "Pour quelle raison Bouki est-il connu dans l'histoire ou la culture haïtienne ?",
    options: ["Chanteuse surnommée « la Grande Dame de la chanson haïtienne »", "Ethnologue, auteur de « Ainsi parla l'oncle », père de l'indigénisme haïtien", "Journaliste féministe pionnière en Haïti", "Personnage naïf et souvent trompé dans les contes populaires haïtiens"],
    correct: 3
  },
  {
    q: "Pour quoi Ida Faubert est-elle surtout reconnue ?",
    options: ["Poétesse haïtienne ayant vécu principalement en France", "Boxeur professionnel haïtiano-américain, ancien champion du monde", "Journaliste féministe pionnière en Haïti", "Peintre célèbre pour sa fresque à la Cathédrale Sainte-Trinité"],
    correct: 0
  },
  {
    q: "Où Jovenel Moïse a-t-il vécu ou marqué l'histoire ?",
    options: ["Cap-Haïtien", "Trou-du-Nord (Nord-Est)", "Gonaïves", "Nord (Cap-Haïtien)"],
    correct: 1
  },
  {
    q: "Quelle est la nature du rôle joué par Boukman Dutty ?",
    options: ["Père fondateur / figure de l'Indépendance", "Personnage du folklore", "Peintre / artiste visuel", "Athlète / sportif"],
    correct: 0
  },
  {
    q: "Sténio Vincent appartient à quelle période historique ?",
    options: ["Fin XXe siècle (1970-2000)", "Milieu XXe siècle (1930-1970)", "Révolution haïtienne (avant 1804)", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 1
  },
  {
    q: "Dans quelle période de l'histoire haïtienne situe-t-on Lyonel Trouillot ?",
    options: ["Début XXe siècle", "Fin XXe siècle (1970-2000)", "Époque contemporaine (2000 à aujourd'hui)", "Intemporel (figure du folklore/vodou)"],
    correct: 2
  },
  {
    q: "Quelle est l'époque de référence pour Faustin Soulouque ?",
    options: ["XIXe siècle", "Époque contemporaine (2000 à aujourd'hui)", "Milieu XXe siècle (1930-1970)", "Révolution haïtienne (avant 1804)"],
    correct: 0
  },
  {
    q: "Quelle est l'époque de référence pour Toto Bissainthe ?",
    options: ["Intemporel (figure du folklore/vodou)", "Début XXe siècle", "Fin XXe siècle (1970-2000)", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 2
  },
  {
    q: "Où Ogou a-t-il vécu ou marqué l'histoire ?",
    options: ["National / légendaire", "Nord (Cap-Haïtien)", "Anse-à-Veau", "Port-au-Prince"],
    correct: 0
  },
  {
    q: "Quelle est la nature du rôle joué par Sténio Vincent ?",
    options: ["Écrivain", "Peintre / artiste visuel", "Chef d'État", "Personnage du folklore"],
    correct: 2
  },
  {
    q: "Pour quoi François Capois (Capois-La-Mort) est-il surtout reconnu ?",
    options: ["Général célèbre pour sa bravoure à la bataille de Vertières", "Lwa associée à l'amour, la beauté et le luxe dans le vodou haïtien", "Peintre naïf associé au Centre d'Art de Port-au-Prince", "Général cacos ayant poursuivi la résistance après la mort de Péralte"],
    correct: 0
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Lyonel Trouillot ?",
    options: ["Lwa des morts et gardien des cimetières dans le vodou haïtien", "Romancier et poète contemporain engagé", "Première femme haïtienne docteure en lettres, anthropologue", "Chef de la résistance armée contre l'occupation américaine (1915-1934)"],
    correct: 1
  },
  {
    q: "À quelle époque associe-t-on Faustin Soulouque ?",
    options: ["Début XXe siècle", "Révolution haïtienne (avant 1804)", "Milieu XXe siècle (1930-1970)", "XIXe siècle"],
    correct: 3
  },
  {
    q: "Ariel Henry provient ou est rattaché à quelle zone ?",
    options: ["Jérémie (Grande-Anse)", "Port-Salut", "Verrettes (Artibonite)", "Hinche (Centre)"],
    correct: 0
  },
  {
    q: "Comment Dumarsais Estimé est-il généralement présenté ?",
    options: ["Chef d'État", "Musicien", "Personnage du folklore", "Diplomate / personnalité internationale"],
    correct: 0
  },
  {
    q: "À quelle époque associe-t-on Sténio Vincent ?",
    options: ["Fin XXe siècle (1970-2000)", "Début XXe siècle", "Milieu XXe siècle (1930-1970)", "Révolution haïtienne (avant 1804)"],
    correct: 2
  },
  {
    q: "Quelle est l'époque de référence pour Edwidge Danticat ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Milieu XXe siècle (1930-1970)", "Fin XXe siècle (1970-2000)", "Début XXe siècle"],
    correct: 0
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Emmanuel Sanon ?",
    options: ["Personnage naïf et souvent trompé dans les contes populaires haïtiens", "Footballeur ayant marqué contre l'Italie à la Coupe du monde 1974", "Président élu en 2016, assassiné en fonction en 2021", "Jeune héros malin des contes traditionnels haïtiens"],
    correct: 1
  },
  {
    q: "Quelle est l'époque de référence pour Benoît Batraville ?",
    options: ["Révolution haïtienne (avant 1804)", "XIXe siècle", "Début XXe siècle", "Fin XXe siècle (1970-2000)"],
    correct: 2
  },
  {
    q: "À quelle époque associe-t-on Préfète Duffaut ?",
    options: ["Intemporel (figure du folklore/vodou)", "Époque contemporaine (2000 à aujourd'hui)", "Milieu XXe siècle (1930-1970)", "Révolution haïtienne (avant 1804)"],
    correct: 2
  },
  {
    q: "Quand Anthony Phelps a-t-il été le plus actif ou influent ?",
    options: ["Début XXe siècle", "Fin XXe siècle (1970-2000)", "XIXe siècle", "Révolution haïtienne (avant 1804)"],
    correct: 1
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Catherine Flon ?",
    options: ["Aurait cousu le premier drapeau haïtien en 1803", "Chanteuse et actrice, figure de la chanson racine haïtienne", "Ancien prêtre devenu président à deux reprises", "Président par intérim après le départ d'Aristide en 2004"],
    correct: 0
  },
  {
    q: "Manno Charlemagne provient ou est rattaché à quelle zone ?",
    options: ["Port-au-Prince", "Jérémie (Grande-Anse)", "Plateau Central", "Jacmel"],
    correct: 0
  },
  {
    q: "Quel fait marquant est associé à Jean-Bertrand Aristide ?",
    options: ["Ancien chanteur de konpa devenu président de la République", "Lwa protecteur de l'agriculture et des paysans dans le vodou haïtien", "Président ayant modernisé l'éducation et les relations extérieures d'Haïti", "Ancien prêtre devenu président à deux reprises"],
    correct: 3
  },
  {
    q: "Dans quelle catégorie situerait-on Faustin Soulouque ?",
    options: ["Chef d'État", "Diplomate / personnalité internationale", "Musicien", "Écrivain"],
    correct: 0
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Toto Bissainthe ?",
    options: ["Jérémie (Grande-Anse)", "Anse-à-Veau", "Port-au-Prince", "Bréda (Cap-Haïtien)"],
    correct: 2
  },
  {
    q: "Jacques Stephen Alexis provient ou est rattaché à quelle zone ?",
    options: ["Gonaïves", "Grande Rivière du Nord", "Port-au-Prince", "Jacmel"],
    correct: 0
  },
  {
    q: "D'où est originaire Boukman Dutty, ou à quel lieu est-il le plus associé ?",
    options: ["Verrettes (Artibonite)", "Nord (Bois-Caïman)", "Gonaïves", "Jacmel"],
    correct: 1
  },
  {
    q: "Quelle est l'époque de référence pour Michel Martelly ?",
    options: ["Fin XXe siècle (1970-2000)", "Époque contemporaine (2000 à aujourd'hui)", "Révolution haïtienne (avant 1804)", "Début XXe siècle"],
    correct: 1
  },
  {
    q: "Quel rôle décrit le mieux Charles Oscar Étienne (Jean-Baptiste Chavannes) dans l'histoire ou la culture haïtienne ?",
    options: ["Peintre / artiste visuel", "Musicien", "Athlète / sportif", "Père fondateur / figure de l'Indépendance"],
    correct: 3
  },
  {
    q: "Quel élément biographique distingue Andre Berto ?",
    options: ["Haïtiano-canadienne, ancienne Gouverneure générale du Canada", "Lwa des morts et gardien des cimetières dans le vodou haïtien", "Boxeur professionnel haïtiano-américain, ancien champion du monde", "Aurait cousu le premier drapeau haïtien en 1803"],
    correct: 2
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Jacques Stephen Alexis ?",
    options: ["Président par intérim après le départ d'Aristide en 2004", "Peintre ayant participé aux fresques de la Cathédrale Sainte-Trinité", "Peintre naïf associé au Centre d'Art de Port-au-Prince", "Romancier et médecin, auteur du « réalisme merveilleux »"],
    correct: 3
  },
  {
    q: "Quel fait marquant est associé à Leslie Manigat ?",
    options: ["Politologue devenu président pendant quelques mois en 1988", "Militaire devenu président dans les années 1950", "Président puis empereur d'Haïti sous le nom de Faustin Ier", "Lwa serpent, considéré comme l'un des esprits les plus anciens du vodou"],
    correct: 0
  },
  {
    q: "Quel fait marquant est associé à Emeline Michel ?",
    options: ["Chanteuse surnommée « la Grande Dame de la chanson haïtienne »", "Personnage naïf et souvent trompé dans les contes populaires haïtiens", "Lwa protecteur de l'agriculture et des paysans dans le vodou haïtien", "Personnage rusé qui déjoue toujours son compère Bouki"],
    correct: 0
  },
  {
    q: "Où situe-t-on l'histoire de Jovenel Moïse ?",
    options: ["Diaspora (Floride)", "Dondon (Nord)", "Trou-du-Nord (Nord-Est)", "Saint-Marc"],
    correct: 2
  },
  {
    q: "Wilson Bigaud appartient à quel type de figure historique ou culturelle ?",
    options: ["Père fondateur / figure de l'Indépendance", "Chef d'État", "Peintre / artiste visuel", "Musicien"],
    correct: 2
  },
  {
    q: "Où situe-t-on l'histoire de Édouard Duval-Carrié ?",
    options: ["Jacmel", "Diaspora (Floride)", "Port-au-Prince", "Jérémie (Grande-Anse)"],
    correct: 3
  },
  {
    q: "Comment reconnaît-on Toussaint Louverture parmi les autres personnalités haïtiennes ?",
    options: ["Peintre ayant participé aux fresques de la Cathédrale Sainte-Trinité", "Chef militaire et politique, figure centrale de la Révolution haïtienne", "Artiste contemporain mêlant histoire haïtienne et symbolisme vodou", "Proclama l'indépendance d'Haïti en 1804 et en devint le premier chef d'État"],
    correct: 1
  },
  {
    q: "Quelle est la nature du rôle joué par Malice ?",
    options: ["Athlète / sportif", "Père fondateur / figure de l'Indépendance", "Personnage du folklore", "Diplomate / personnalité internationale"],
    correct: 2
  },
  {
    q: "Quand Wilson Bigaud a-t-il été le plus actif ou influent ?",
    options: ["Intemporel (figure du folklore/vodou)", "Époque contemporaine (2000 à aujourd'hui)", "Révolution haïtienne (avant 1804)", "Milieu XXe siècle (1930-1970)"],
    correct: 3
  },
  {
    q: "Qu'est-ce qui rend Alexandre Pétion célèbre ou important ?",
    options: ["Musicien haïtiano-américain, ex-membre du groupe The Fugees", "Lwa des eaux et de la mer dans le vodou haïtien", "DJ et producteur fusionnant konpa et musique électronique", "Premier président de la République d'Haïti (partie Sud)"],
    correct: 3
  },
  {
    q: "Michael Brun est principalement associé à quel lieu ?",
    options: ["Cap-Haïtien", "Diaspora (Floride)", "Dondon (Nord)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Sanite Bélair ?",
    options: ["Nord (Cap-Haïtien)", "Ravine-Sèche", "Plateau Central", "Verrettes (Artibonite)"],
    correct: 3
  },
  {
    q: "Quelle étiquette correspond le mieux à Andre Berto ?",
    options: ["Diplomate / personnalité internationale", "Athlète / sportif", "Père fondateur / figure de l'Indépendance", "Personnage du folklore"],
    correct: 1
  },
  {
    q: "Quel élément biographique distingue Dumarsais Estimé ?",
    options: ["Premier président noir élu après une longue période d'influence mulâtre", "Aurait cousu le premier drapeau haïtien en 1803", "Romancier connu pour ses œuvres mêlant réalisme et fantastique", "Proclama l'indépendance d'Haïti en 1804 et en devint le premier chef d'État"],
    correct: 0
  },
  {
    q: "Quel fait marquant est associé à Philomé Obin ?",
    options: ["Romancier et médecin, auteur du « réalisme merveilleux »", "Boxeur professionnel haïtiano-américain, ancien champion du monde", "Poète national, auteur du célèbre poème « Choucoune »", "Chef de file de l'école du Cap dans la peinture haïtienne"],
    correct: 3
  },
  {
    q: "Où situe-t-on l'histoire de Michael Brun ?",
    options: ["Diaspora (États-Unis)", "Port-au-Prince", "Gonaïves", "Nord (Cap-Haïtien)"],
    correct: 1
  },
  {
    q: "Jovenel Moïse appartient à quelle période historique ?",
    options: ["Fin XXe siècle (1970-2000)", "Milieu XXe siècle (1930-1970)", "Début XXe siècle", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 3
  },
  {
    q: "Quelle est l'époque de référence pour Manno Charlemagne ?",
    options: ["Intemporel (figure du folklore/vodou)", "Début XXe siècle", "XIXe siècle", "Fin XXe siècle (1970-2000)"],
    correct: 3
  },
  {
    q: "Quel fait marquant est associé à Garry Conille ?",
    options: ["Prêtresse vodou associée à la cérémonie du Bois-Caïman", "Lwa des morts et gardien des cimetières dans le vodou haïtien", "Romancier connu pour ses œuvres mêlant réalisme et fantastique", "Ancien fonctionnaire de l'ONU nommé Premier ministre à deux reprises"],
    correct: 3
  },
  {
    q: "Pour quoi Alexandre Pétion est-il surtout reconnu ?",
    options: ["Lwa associée à l'amour, la beauté et le luxe dans le vodou haïtien", "Premier président de la République d'Haïti (partie Sud)", "Prêtre vodou considéré comme un déclencheur de la révolte des esclaves de 1791", "Ethnologue, auteur de « Ainsi parla l'oncle », père de l'indigénisme haïtien"],
    correct: 1
  },
  {
    q: "Dans quelle catégorie situerait-on Jovenel Moïse ?",
    options: ["Athlète / sportif", "Écrivain", "Chef d'État", "Diplomate / personnalité internationale"],
    correct: 2
  },
  {
    q: "Quand Fabre Geffrard a-t-il été le plus actif ou influent ?",
    options: ["Intemporel (figure du folklore/vodou)", "Début XXe siècle", "Époque contemporaine (2000 à aujourd'hui)", "XIXe siècle"],
    correct: 3
  },
  {
    q: "Quel lieu géographique évoque le plus François Duvalier (Papa Doc) ?",
    options: ["National / légendaire", "Port-au-Prince", "Nord (Cap-Haïtien)", "Diaspora (New Jersey)"],
    correct: 1
  },
  {
    q: "Quel élément biographique distingue Oswald Durand ?",
    options: ["Se proclama roi d'Haïti et fit construire la Citadelle Laferrière", "Lwa associée à l'amour, la beauté et le luxe dans le vodou haïtien", "Poète national, auteur du célèbre poème « Choucoune »", "Succéda à son père comme « Président à vie » de 1971 à 1986"],
    correct: 2
  },
  {
    q: "Quel rôle décrit le mieux Faustin Soulouque dans l'histoire ou la culture haïtienne ?",
    options: ["Athlète / sportif", "Chef d'État", "Intellectuel / militant", "Père fondateur / figure de l'Indépendance"],
    correct: 1
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Cécile Fatiman ?",
    options: ["Premier président noir élu après une longue période d'influence mulâtre", "Homme de couleur libre ayant mené une révolte avant l'indépendance", "Président puis empereur d'Haïti sous le nom de Faustin Ier", "Prêtresse vodou associée à la cérémonie du Bois-Caïman"],
    correct: 3
  },
  {
    q: "Quand Manno Charlemagne a-t-il été le plus actif ou influent ?",
    options: ["Révolution haïtienne (avant 1804)", "Époque contemporaine (2000 à aujourd'hui)", "Intemporel (figure du folklore/vodou)", "Fin XXe siècle (1970-2000)"],
    correct: 3
  },
  {
    q: "Comment reconnaît-on Jacques Stephen Alexis parmi les autres personnalités haïtiennes ?",
    options: ["Romancier et médecin, auteur du « réalisme merveilleux »", "Premier président de la République d'Haïti (partie Sud)", "Jeune héros malin des contes traditionnels haïtiens", "Personnage naïf et souvent trompé dans les contes populaires haïtiens"],
    correct: 0
  },
  {
    q: "Toussaint Louverture a marqué ou vécu principalement à quelle période ?",
    options: ["Révolution haïtienne (avant 1804)", "Intemporel (figure du folklore/vodou)", "Milieu XXe siècle (1930-1970)", "Fin XXe siècle (1970-2000)"],
    correct: 0
  },
  {
    q: "À quelle époque associe-t-on Charles Oscar Étienne (Jean-Baptiste Chavannes) ?",
    options: ["Début XXe siècle", "Époque contemporaine (2000 à aujourd'hui)", "Milieu XXe siècle (1930-1970)", "Révolution haïtienne (avant 1804)"],
    correct: 3
  },
  {
    q: "De quel type de personnalité s'agit-il pour Baron Samedi ?",
    options: ["Intellectuel / militant", "Figure religieuse / vodou", "Peintre / artiste visuel", "Père fondateur / figure de l'Indépendance"],
    correct: 1
  },
  {
    q: "Comment reconnaît-on Henri Christophe parmi les autres personnalités haïtiennes ?",
    options: ["Général célèbre pour sa bravoure à la bataille de Vertières", "Personnage naïf et souvent trompé dans les contes populaires haïtiens", "Journaliste et directeur de Radio Haïti Inter, assassiné en 2000", "Se proclama roi d'Haïti et fit construire la Citadelle Laferrière"],
    correct: 3
  },
  {
    q: "Sténio Vincent provient ou est rattaché à quelle zone ?",
    options: ["Verrettes (Artibonite)", "Hinche (Centre)", "Port-au-Prince", "Jacmel"],
    correct: 3
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Gary Victor ?",
    options: ["Politologue devenu président pendant quelques mois en 1988", "Romancier connu pour ses œuvres mêlant réalisme et fantastique", "Chef de file de l'école du Cap dans la peinture haïtienne", "Écrivain élu à l'Académie française"],
    correct: 1
  },
  {
    q: "Qu'est-ce qui rend Charlemagne Péralte célèbre ou important ?",
    options: ["Compagnon de Vincent Ogé dans la lutte pour les droits des libres de couleur", "Peintre naïf associé au Centre d'Art de Port-au-Prince", "Prêtresse vodou associée à la cérémonie du Bois-Caïman", "Chef de la résistance armée contre l'occupation américaine (1915-1934)"],
    correct: 3
  },
  {
    q: "À quelle époque associe-t-on Myriam Merlet ?",
    options: ["Milieu XXe siècle (1930-1970)", "Époque contemporaine (2000 à aujourd'hui)", "Fin XXe siècle (1970-2000)", "XIXe siècle"],
    correct: 2
  },
  {
    q: "Comment classerait-on Toto Bissainthe parmi les personnalités haïtiennes ?",
    options: ["Peintre / artiste visuel", "Personnage du folklore", "Musicien", "Figure religieuse / vodou"],
    correct: 2
  },
  {
    q: "Comment classerait-on Ti Manno parmi les personnalités haïtiennes ?",
    options: ["Musicien", "Figure religieuse / vodou", "Diplomate / personnalité internationale", "Écrivain"],
    correct: 0
  },
  {
    q: "Lyonel Trouillot provient ou est rattaché à quelle zone ?",
    options: ["Port-au-Prince", "Diaspora (États-Unis)", "Grande Rivière du Nord", "Cap-Haïtien"],
    correct: 0
  },
  {
    q: "De quel type de personnalité s'agit-il pour Leslie Manigat ?",
    options: ["Intellectuel / militant", "Écrivain", "Chef d'État", "Diplomate / personnalité internationale"],
    correct: 2
  },
  {
    q: "Quelle est l'époque de référence pour Suzanne Comhaire-Sylvain ?",
    options: ["Milieu XXe siècle (1930-1970)", "XIXe siècle", "Révolution haïtienne (avant 1804)", "Début XXe siècle"],
    correct: 0
  },
  {
    q: "Comment Coupé Cloué est-il généralement présenté ?",
    options: ["Musicien", "Personnage du folklore", "Chef d'État", "Écrivain"],
    correct: 0
  },
  {
    q: "Quelle période correspond le mieux à Marie Vieux-Chauvet ?",
    options: ["Milieu XXe siècle (1930-1970)", "Fin XXe siècle (1970-2000)", "Début XXe siècle", "Intemporel (figure du folklore/vodou)"],
    correct: 0
  },
  {
    q: "Où Wyclef Jean a-t-il vécu ou marqué l'histoire ?",
    options: ["Bréda (Cap-Haïtien)", "Marmelade (Artibonite)", "Diaspora (New Jersey)", "National / légendaire"],
    correct: 2
  },
  {
    q: "À quelle époque associe-t-on Marie Vieux-Chauvet ?",
    options: ["Milieu XXe siècle (1930-1970)", "XIXe siècle", "Époque contemporaine (2000 à aujourd'hui)", "Intemporel (figure du folklore/vodou)"],
    correct: 0
  },
  {
    q: "Quelle étiquette correspond le mieux à Jean Price-Mars ?",
    options: ["Personnage du folklore", "Intellectuel / militant", "Diplomate / personnalité internationale", "Chef d'État"],
    correct: 1
  },
  {
    q: "Quelle étiquette correspond le mieux à Wyclef Jean ?",
    options: ["Peintre / artiste visuel", "Musicien", "Figure religieuse / vodou", "Diplomate / personnalité internationale"],
    correct: 1
  },
  {
    q: "Comment Jovenel Moïse est-il principalement connu ?",
    options: ["Personnage du folklore", "Athlète / sportif", "Chef d'État", "Figure religieuse / vodou"],
    correct: 2
  },
  {
    q: "Quel élément biographique distingue Kettly Mars ?",
    options: ["Footballeur devenu icône du konpa avec l'Ensemble Select", "Ancien chanteur de konpa devenu président de la République", "Écrivain, peintre et dramaturge, pionnier du spiralisme", "Romancière contemporaine, autrice de « Saisons sauvages »"],
    correct: 3
  },
  {
    q: "Où Dumarsais Estimé a-t-il vécu ou marqué l'histoire ?",
    options: ["Nord (Bataille de Vertières)", "Verrettes (Artibonite)", "Quartier-Morin (Nord)", "Diaspora (États-Unis)"],
    correct: 1
  },
  {
    q: "Quand Myriam Merlet a-t-elle été la plus active ou influente ?",
    options: ["Fin XXe siècle (1970-2000)", "Début XXe siècle", "Intemporel (figure du folklore/vodou)", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 0
  },
  {
    q: "Pour quoi Dumarsais Estimé est-il surtout reconnu ?",
    options: ["Aurait cousu le premier drapeau haïtien en 1803", "Militaire devenu président dans les années 1950", "Premier président noir élu après une longue période d'influence mulâtre", "DJ et producteur fusionnant konpa et musique électronique"],
    correct: 2
  },
  {
    q: "À quelle époque associe-t-on Samuel Dalembert ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Intemporel (figure du folklore/vodou)", "Début XXe siècle", "Fin XXe siècle (1970-2000)"],
    correct: 0
  },
  {
    q: "Ida Faubert appartient à quelle période historique ?",
    options: ["Intemporel (figure du folklore/vodou)", "XIXe siècle", "Début XXe siècle", "Milieu XXe siècle (1930-1970)"],
    correct: 2
  },
  {
    q: "Qu'est-ce qui rend Duckens Nazon célèbre ou important ?",
    options: ["Attaquant international de l'équipe nationale de football d'Haïti", "Footballeur devenu icône du konpa avec l'Ensemble Select", "Chanteur de konpa social devenu une icône engagée", "Militante féministe, cofondatrice d'organisations pour les droits des femmes"],
    correct: 0
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Suzanne Comhaire-Sylvain ?",
    options: ["Diaspora (New Jersey)", "Port-au-Prince", "Jacmel", "Nord (Grande-Rivière-du-Nord)"],
    correct: 2
  },
  {
    q: "Jean Price-Mars provient ou est rattaché à quelle zone ?",
    options: ["Grande Rivière du Nord", "Jérémie (Grande-Anse)", "Port-Salut", "Petit-Goâve"],
    correct: 0
  },
  {
    q: "Parmi les propositions suivantes, laquelle correspond à Alexandre Pétion ?",
    options: ["Intellectuel / militant", "Athlète / sportif", "Chef d'État", "Père fondateur / figure de l'Indépendance"],
    correct: 3
  },
  {
    q: "Où Sténio Vincent a-t-il vécu ou marqué l'histoire ?",
    options: ["Verrettes (Artibonite)", "Port-au-Prince", "Saint-Marc", "Bréda (Cap-Haïtien)"],
    correct: 1
  },
  {
    q: "Malice appartient à quel type de figure historique ou culturelle ?",
    options: ["Intellectuel / militant", "Musicien", "Peintre / artiste visuel", "Personnage du folklore"],
    correct: 3
  },
  {
    q: "Quelle est l'époque de référence pour Jean-Pierre Boyer ?",
    options: ["Début XXe siècle", "Intemporel (figure du folklore/vodou)", "XIXe siècle", "Fin XXe siècle (1970-2000)"],
    correct: 2
  },
  {
    q: "Dans quelle période de l'histoire haïtienne situe-t-on Charles Oscar Étienne (Jean-Baptiste Chavannes) ?",
    options: ["Intemporel (figure du folklore/vodou)", "Révolution haïtienne (avant 1804)", "Époque contemporaine (2000 à aujourd'hui)", "Milieu XXe siècle (1930-1970)"],
    correct: 1
  },
  {
    q: "De quel type de personnalité s'agit-il pour Alexandre Pétion ?",
    options: ["Figure religieuse / vodou", "Musicien", "Père fondateur / figure de l'Indépendance", "Intellectuel / militant"],
    correct: 2
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Anthony Phelps ?",
    options: ["Poète et romancier, figure du mouvement Haïti Littéraire", "Lwa associée à l'amour, la beauté et le luxe dans le vodou haïtien", "Chanteur de konpa social devenu une icône engagée", "Boxeur professionnel haïtiano-américain, ancien champion du monde"],
    correct: 0
  },
  {
    q: "Dans quelle catégorie situerait-on Boukman Dutty ?",
    options: ["Figure religieuse / vodou", "Chef d'État", "Peintre / artiste visuel", "Père fondateur / figure de l'Indépendance"],
    correct: 3
  },
  {
    q: "Comment reconnaît-on Kettly Mars parmi les autres personnalités haïtiennes ?",
    options: ["Premier président noir élu après une longue période d'influence mulâtre", "Lwa des eaux et de la mer dans le vodou haïtien", "Président puis « Président à vie » d'Haïti de 1957 à 1971", "Romancière contemporaine, autrice de « Saisons sauvages »"],
    correct: 3
  },
  {
    q: "Comment classerait-on Catherine Flon parmi les personnalités haïtiennes ?",
    options: ["Père fondateur / figure de l'Indépendance", "Personnage du folklore", "Écrivain", "Chef d'État"],
    correct: 0
  },
  {
    q: "Parmi les propositions suivantes, laquelle correspond à Samuel Dalembert ?",
    options: ["Athlète / sportif", "Diplomate / personnalité internationale", "Musicien", "Chef d'État"],
    correct: 0
  },
  {
    q: "Comment classerait-on Oswald Durand parmi les personnalités haïtiennes ?",
    options: ["Peintre / artiste visuel", "Écrivain", "Intellectuel / militant", "Personnage du folklore"],
    correct: 1
  },
  {
    q: "Où Benoît Batraville a-t-il vécu ou marqué l'histoire ?",
    options: ["Jérémie (Grande-Anse)", "Trou-du-Nord (Nord-Est)", "Plateau Central", "Nord (Grande-Rivière-du-Nord)"],
    correct: 2
  },
  {
    q: "Quand Emeline Michel a-t-elle été la plus active ou influente ?",
    options: ["Début XXe siècle", "Fin XXe siècle (1970-2000)", "Époque contemporaine (2000 à aujourd'hui)", "Milieu XXe siècle (1930-1970)"],
    correct: 1
  },
  {
    q: "Parmi les propositions suivantes, laquelle correspond à Charlemagne Péralte ?",
    options: ["Musicien", "Figure religieuse / vodou", "Père fondateur / figure de l'Indépendance", "Peintre / artiste visuel"],
    correct: 2
  },
  {
    q: "Comment Kettly Mars est-elle généralement présentée ?",
    options: ["Intellectuel / militant", "Écrivain", "Personnage du folklore", "Peintre / artiste visuel"],
    correct: 1
  },
  {
    q: "À quelle époque associe-t-on Jacques Roumain ?",
    options: ["Révolution haïtienne (avant 1804)", "Milieu XXe siècle (1930-1970)", "XIXe siècle", "Début XXe siècle"],
    correct: 1
  },
  {
    q: "Quand Yvonne Hakim-Rimpel a-t-elle été la plus active ou influente ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Intemporel (figure du folklore/vodou)", "Milieu XXe siècle (1930-1970)", "Début XXe siècle"],
    correct: 2
  },
  {
    q: "Quelle est la nature du rôle joué par Ezili Freda ?",
    options: ["Athlète / sportif", "Figure religieuse / vodou", "Peintre / artiste visuel", "Intellectuel / militant"],
    correct: 1
  },
  {
    q: "Quel lieu géographique évoque le plus Jean-Jacques Dessalines ?",
    options: ["Port-au-Prince", "Nord (Arcahaie)", "Nord (Grande-Rivière-du-Nord)", "Bréda (Cap-Haïtien)"],
    correct: 2
  },
  {
    q: "Pour quelle raison Cécile Fatiman est-elle connue dans l'histoire ou la culture haïtienne ?",
    options: ["Prêtresse vodou associée à la cérémonie du Bois-Caïman", "Aurait cousu le premier drapeau haïtien en 1803", "Président élu en 2016, assassiné en fonction en 2021", "Figure fondatrice de la peinture naïve haïtienne"],
    correct: 0
  },
  {
    q: "Quelle période correspond le mieux à Coupé Cloué ?",
    options: ["Début XXe siècle", "Fin XXe siècle (1970-2000)", "XIXe siècle", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 1
  },
  {
    q: "Qu'est-ce qui rend Sténio Vincent célèbre ou important ?",
    options: ["Première femme à assurer la présidence d'Haïti (1990-1991)", "Président ayant négocié la fin de l'occupation américaine", "Lwa protecteur de l'agriculture et des paysans dans le vodou haïtien", "Figure fondatrice de la peinture naïve haïtienne"],
    correct: 1
  },
  {
    q: "Quel fait marquant est associé à Anthony Phelps ?",
    options: ["Poète et romancier, figure du mouvement Haïti Littéraire", "Premier président noir élu après une longue période d'influence mulâtre", "Général célèbre pour sa bravoure à la bataille de Vertières", "Écrivain et diplomate défenseur de la dignité haïtienne"],
    correct: 0
  },
  {
    q: "Quel rôle décrit le mieux Wilson Bigaud dans l'histoire ou la culture haïtienne ?",
    options: ["Diplomate / personnalité internationale", "Intellectuel / militant", "Père fondateur / figure de l'Indépendance", "Peintre / artiste visuel"],
    correct: 3
  },
  {
    q: "Édouard Duval-Carrié est principalement associé à quel lieu ?",
    options: ["Jérémie (Grande-Anse)", "Quartier-Morin (Nord)", "Port-au-Prince", "Plateau Central"],
    correct: 2
  },
  {
    q: "Quelle période correspond le mieux à Préfète Duffaut ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Révolution haïtienne (avant 1804)", "XIXe siècle", "Milieu XXe siècle (1930-1970)"],
    correct: 3
  },
  {
    q: "Sténio Vincent est principalement associé à quel lieu ?",
    options: ["Port-au-Prince", "Bréda (Cap-Haïtien)", "Nord (Bois-Caïman)", "Jacmel"],
    correct: 0
  },
  {
    q: "Quelle période correspond le mieux à Jacques Roumain ?",
    options: ["Révolution haïtienne (avant 1804)", "Milieu XXe siècle (1930-1970)", "Époque contemporaine (2000 à aujourd'hui)", "Début XXe siècle"],
    correct: 1
  },
  {
    q: "Michaëlle Jean appartient à quelle période historique ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Début XXe siècle", "XIXe siècle", "Intemporel (figure du folklore/vodou)"],
    correct: 0
  },
  {
    q: "Comment Emmanuel Sanon est-il généralement présenté ?",
    options: ["Intellectuel / militant", "Athlète / sportif", "Figure religieuse / vodou", "Diplomate / personnalité internationale"],
    correct: 1
  },
  {
    q: "Ti Manno appartient à quel type de figure historique ou culturelle ?",
    options: ["Intellectuel / militant", "Père fondateur / figure de l'Indépendance", "Musicien", "Écrivain"],
    correct: 2
  },
  {
    q: "Comment Fabre Geffrard est-il généralement présenté ?",
    options: ["Figure religieuse / vodou", "Chef d'État", "Peintre / artiste visuel", "Personnage du folklore"],
    correct: 1
  },
  {
    q: "Comment classerait-on Ida Faubert parmi les personnalités haïtiennes ?",
    options: ["Écrivain", "Peintre / artiste visuel", "Figure religieuse / vodou", "Athlète / sportif"],
    correct: 0
  },
  {
    q: "Quelle période correspond le mieux à Frankétienne ?",
    options: ["Révolution haïtienne (avant 1804)", "Fin XXe siècle (1970-2000)", "Début XXe siècle", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 1
  },
  {
    q: "Quelle étiquette correspond le mieux à Manno Charlemagne ?",
    options: ["Écrivain", "Athlète / sportif", "Intellectuel / militant", "Musicien"],
    correct: 3
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Anthony Phelps ?",
    options: ["Dondon (Nord)", "Cap-Haïtien", "Port-au-Prince", "Jacmel"],
    correct: 3
  },
  {
    q: "Quelle est la nature du rôle joué par Emmanuel Sanon ?",
    options: ["Athlète / sportif", "Père fondateur / figure de l'Indépendance", "Musicien", "Diplomate / personnalité internationale"],
    correct: 0
  },
  {
    q: "Qu'est-ce qui rend Suzanne Comhaire-Sylvain célèbre ou importante ?",
    options: ["Première femme haïtienne docteure en lettres, anthropologue", "Président ayant négocié la fin de l'occupation américaine", "Ethnologue, auteur de « Ainsi parla l'oncle », père de l'indigénisme haïtien", "Écrivain, peintre et dramaturge, pionnier du spiralisme"],
    correct: 0
  },
  {
    q: "À quelle époque associe-t-on Charlemagne Péralte ?",
    options: ["Révolution haïtienne (avant 1804)", "Époque contemporaine (2000 à aujourd'hui)", "Début XXe siècle", "Fin XXe siècle (1970-2000)"],
    correct: 2
  },
  {
    q: "Quelle période correspond le mieux à Jean-Pierre Boyer ?",
    options: ["XIXe siècle", "Milieu XXe siècle (1930-1970)", "Début XXe siècle", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 0
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Manno Charlemagne ?",
    options: ["Nord (Grande-Rivière-du-Nord)", "Cap-Haïtien", "Port-au-Prince", "Jacmel"],
    correct: 2
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Leslie Manigat ?",
    options: ["Chanteur engagé devenu maire de Port-au-Prince", "Personnage rusé qui déjoue toujours son compère Bouki", "Politologue devenu président pendant quelques mois en 1988", "Général cacos ayant poursuivi la résistance après la mort de Péralte"],
    correct: 2
  },
  {
    q: "Quelle période correspond le mieux à Paul Magloire ?",
    options: ["Milieu XXe siècle (1930-1970)", "XIXe siècle", "Révolution haïtienne (avant 1804)", "Intemporel (figure du folklore/vodou)"],
    correct: 0
  },
  {
    q: "Comment reconnaît-on Cécile Fatiman parmi les autres personnalités haïtiennes ?",
    options: ["Aurait cousu le premier drapeau haïtien en 1803", "Militaire devenu président dans les années 1950", "Prêtresse vodou associée à la cérémonie du Bois-Caïman", "Poète et romancier, figure du mouvement Haïti Littéraire"],
    correct: 2
  },
  {
    q: "De quel type de personnalité s'agit-il pour Duckens Nazon ?",
    options: ["Chef d'État", "Athlète / sportif", "Diplomate / personnalité internationale", "Musicien"],
    correct: 1
  },
  {
    q: "Quelle période correspond le mieux à Toussaint Louverture ?",
    options: ["XIXe siècle", "Milieu XXe siècle (1930-1970)", "Fin XXe siècle (1970-2000)", "Révolution haïtienne (avant 1804)"],
    correct: 3
  },
  {
    q: "Qu'est-ce qui rend Andre Berto célèbre ou important ?",
    options: ["Lwa associée à l'amour, la beauté et le luxe dans le vodou haïtien", "Héroïne de la Révolution haïtienne exécutée par les troupes françaises", "Attaquant international de l'équipe nationale de football d'Haïti", "Boxeur professionnel haïtiano-américain, ancien champion du monde"],
    correct: 3
  },
  {
    q: "Quelle période correspond le mieux à Ti Manno ?",
    options: ["XIXe siècle", "Époque contemporaine (2000 à aujourd'hui)", "Fin XXe siècle (1970-2000)", "Début XXe siècle"],
    correct: 2
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Jacques Roumain ?",
    options: ["Footballeur devenu icône du konpa avec l'Ensemble Select", "Auteur du roman « Gouverneurs de la rosée »", "Artiste contemporain mêlant histoire haïtienne et symbolisme vodou", "Romancière haïtiano-américaine, autrice de « Breath, Eyes, Memory »"],
    correct: 1
  },
  {
    q: "Où Papa Legba a-t-il vécu ou marqué l'histoire ?",
    options: ["Sud (Grande-Anse)", "Ravine-Sèche", "National / légendaire", "Nord (Bois-Caïman)"],
    correct: 2
  },
  {
    q: "Rigaud Benoit provient ou est rattaché à quelle zone ?",
    options: ["Anse-à-Veau", "Cap-Haïtien", "Verrettes (Artibonite)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Quel fait marquant est associé à Benoît Batraville ?",
    options: ["Personnage rusé qui déjoue toujours son compère Bouki", "Général cacos ayant poursuivi la résistance après la mort de Péralte", "Poète et romancier, prix Renaudot pour « Hadriana dans tous mes rêves »", "Lwa associée à l'amour, la beauté et le luxe dans le vodou haïtien"],
    correct: 1
  },
  {
    q: "Où situe-t-on l'histoire de Toto Bissainthe ?",
    options: ["Diaspora (Canada)", "Port-au-Prince", "Diaspora (États-Unis)", "Marmelade (Artibonite)"],
    correct: 1
  },
  {
    q: "Où situe-t-on l'histoire de Jean-Pierre Boyer ?",
    options: ["Diaspora (Floride)", "Port-au-Prince", "Grande Rivière du Nord", "Hinche (Centre)"],
    correct: 1
  },
  {
    q: "Quelle période correspond le mieux à Alexandre Pétion ?",
    options: ["Révolution haïtienne (avant 1804)", "XIXe siècle", "Époque contemporaine (2000 à aujourd'hui)", "Intemporel (figure du folklore/vodou)"],
    correct: 0
  },
  {
    q: "Comment Baron Samedi est-il principalement connu ?",
    options: ["Intellectuel / militant", "Personnage du folklore", "Figure religieuse / vodou", "Diplomate / personnalité internationale"],
    correct: 2
  },
  {
    q: "Quel rôle décrit le mieux Toto Bissainthe dans l'histoire ou la culture haïtienne ?",
    options: ["Musicien", "Chef d'État", "Diplomate / personnalité internationale", "Athlète / sportif"],
    correct: 0
  },
  {
    q: "Qu'est-ce qui rend Jean Price-Mars célèbre ou important ?",
    options: ["Président ayant unifié l'ensemble de l'île sous administration haïtienne", "Compagnon de Vincent Ogé dans la lutte pour les droits des libres de couleur", "Héroïne de la Révolution haïtienne exécutée par les troupes françaises", "Ethnologue, auteur de « Ainsi parla l'oncle », père de l'indigénisme haïtien"],
    correct: 3
  },
  {
    q: "De quel type de personnalité s'agit-il pour Jacques Stephen Alexis ?",
    options: ["Père fondateur / figure de l'Indépendance", "Écrivain", "Chef d'État", "Diplomate / personnalité internationale"],
    correct: 1
  },
  {
    q: "D'où est originaire Ida Faubert, ou à quel lieu est-elle le plus associée ?",
    options: ["Plateau Central", "Port-au-Prince", "Jacmel", "Nord (Grande-Rivière-du-Nord)"],
    correct: 2
  },
  {
    q: "Duckens Nazon appartient à quelle période historique ?",
    options: ["Intemporel (figure du folklore/vodou)", "Début XXe siècle", "Époque contemporaine (2000 à aujourd'hui)", "Révolution haïtienne (avant 1804)"],
    correct: 2
  },
  {
    q: "Quel fait marquant est associé à Préfète Duffaut ?",
    options: ["Chef de la résistance armée contre l'occupation américaine (1915-1934)", "Peintre connu pour ses « villes imaginaires » aux couleurs vives", "Chanteuse et actrice, figure de la chanson racine haïtienne", "Lwa protecteur de l'agriculture et des paysans dans le vodou haïtien"],
    correct: 1
  },
  {
    q: "D'où est originaire Jovenel Moïse, ou à quel lieu est-il le plus associé ?",
    options: ["Trou-du-Nord (Nord-Est)", "Sud (Grande-Anse)", "Port-au-Prince", "Nord (Bois-Caïman)"],
    correct: 0
  },
  {
    q: "À quel moment de l'histoire haïtienne rattache-t-on Boukman Dutty ?",
    options: ["XIXe siècle", "Fin XXe siècle (1970-2000)", "Révolution haïtienne (avant 1804)", "Intemporel (figure du folklore/vodou)"],
    correct: 2
  },
  {
    q: "Quel rôle décrit le mieux Baron Samedi dans l'histoire ou la culture haïtienne ?",
    options: ["Figure religieuse / vodou", "Athlète / sportif", "Écrivain", "Personnage du folklore"],
    correct: 0
  },
  {
    q: "Philomé Obin est principalement associé à quel lieu ?",
    options: ["Diaspora (États-Unis)", "Cap-Haïtien", "Marmelade (Artibonite)", "Sud (Grande-Anse)"],
    correct: 1
  },
  {
    q: "Quelle période correspond le mieux à Fabre Geffrard ?",
    options: ["Fin XXe siècle (1970-2000)", "Époque contemporaine (2000 à aujourd'hui)", "XIXe siècle", "Milieu XXe siècle (1930-1970)"],
    correct: 2
  },
  {
    q: "Quelle période correspond le mieux à René Depestre ?",
    options: ["Fin XXe siècle (1970-2000)", "Milieu XXe siècle (1930-1970)", "XIXe siècle", "Intemporel (figure du folklore/vodou)"],
    correct: 0
  },
  {
    q: "De quel type de personnalité s'agit-il pour Fabre Geffrard ?",
    options: ["Chef d'État", "Personnage du folklore", "Diplomate / personnalité internationale", "Intellectuel / militant"],
    correct: 0
  },
  {
    q: "À quelle époque associe-t-on François Capois (Capois-La-Mort) ?",
    options: ["Début XXe siècle", "Révolution haïtienne (avant 1804)", "Milieu XXe siècle (1930-1970)", "XIXe siècle"],
    correct: 1
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Ogou ?",
    options: ["Poète national, auteur du célèbre poème « Choucoune »", "Chanteur de konpa social devenu une icône engagée", "Héroïne de la Révolution haïtienne exécutée par les troupes françaises", "Lwa guerrier associé au fer et à la force dans le vodou haïtien"],
    correct: 3
  },
  {
    q: "Charles Oscar Étienne (Jean-Baptiste Chavannes) provient ou est rattaché à quelle zone ?",
    options: ["Port-Salut", "Nord (Grande-Rivière-du-Nord)", "Sud (Grande-Anse)", "Nord (Arcahaie)"],
    correct: 2
  },
  {
    q: "Dans quelle période de l'histoire haïtienne situe-t-on Philomé Obin ?",
    options: ["Fin XXe siècle (1970-2000)", "Époque contemporaine (2000 à aujourd'hui)", "Milieu XXe siècle (1930-1970)", "XIXe siècle"],
    correct: 2
  },
  {
    q: "Quel élément biographique distingue Ezili Freda ?",
    options: ["Artiste contemporain mêlant histoire haïtienne et symbolisme vodou", "Proclama l'indépendance d'Haïti en 1804 et en devint le premier chef d'État", "Lwa associée à l'amour, la beauté et le luxe dans le vodou haïtien", "Chanteur engagé devenu maire de Port-au-Prince"],
    correct: 2
  },
  {
    q: "Comment classerait-on François Duvalier (Papa Doc) parmi les personnalités haïtiennes ?",
    options: ["Diplomate / personnalité internationale", "Chef d'État", "Peintre / artiste visuel", "Personnage du folklore"],
    correct: 1
  },
  {
    q: "Qu'est-ce qui rend Faustin Soulouque célèbre ou important ?",
    options: ["Président ayant modernisé l'éducation et les relations extérieures d'Haïti", "Poète national, auteur du célèbre poème « Choucoune »", "Président puis empereur d'Haïti sous le nom de Faustin Ier", "Personnage naïf et souvent trompé dans les contes populaires haïtiens"],
    correct: 2
  },
  {
    q: "Charles Oscar Étienne (Jean-Baptiste Chavannes) appartient à quel type de figure historique ou culturelle ?",
    options: ["Figure religieuse / vodou", "Père fondateur / figure de l'Indépendance", "Athlète / sportif", "Diplomate / personnalité internationale"],
    correct: 1
  },
  {
    q: "Quel fait marquant est associé à Charles Oscar Étienne (Jean-Baptiste Chavannes) ?",
    options: ["Président puis « Président à vie » d'Haïti de 1957 à 1971", "Compagnon de Vincent Ogé dans la lutte pour les droits des libres de couleur", "Proclama l'indépendance d'Haïti en 1804 et en devint le premier chef d'État", "Président ayant négocié la fin de l'occupation américaine"],
    correct: 1
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Emeline Michel ?",
    options: ["Peintre naïf associé au Centre d'Art de Port-au-Prince", "Lwa protecteur de l'agriculture et des paysans dans le vodou haïtien", "Chanteuse surnommée « la Grande Dame de la chanson haïtienne »", "Artiste contemporain mêlant histoire haïtienne et symbolisme vodou"],
    correct: 2
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Andre Berto ?",
    options: ["Nord (Arcahaie)", "Diaspora (Floride)", "Hinche (Centre)", "Jacmel"],
    correct: 1
  },
  {
    q: "Qu'est-ce qui rend Philomé Obin célèbre ou important ?",
    options: ["Chef de file de l'école du Cap dans la peinture haïtienne", "Général célèbre pour sa bravoure à la bataille de Vertières", "Écrivain et diplomate défenseur de la dignité haïtienne", "Jeune héros malin des contes traditionnels haïtiens"],
    correct: 0
  },
  {
    q: "Qu'est-ce qui rend Jovenel Moïse célèbre ou important ?",
    options: ["Président élu en 2016, assassiné en fonction en 2021", "Écrivain élu à l'Académie française", "Artiste contemporain mêlant histoire haïtienne et symbolisme vodou", "Chanteuse et actrice, figure de la chanson racine haïtienne"],
    correct: 0
  },
  {
    q: "D'où est originaire Malice, ou à quel lieu est-il le plus associé ?",
    options: ["Gonaïves", "National / légendaire", "Trou-du-Nord (Nord-Est)", "Nord (Arcahaie)"],
    correct: 1
  },
  {
    q: "Pour quelle raison Alexandre Pétion est-il connu dans l'histoire ou la culture haïtienne ?",
    options: ["Compagnon de Vincent Ogé dans la lutte pour les droits des libres de couleur", "Prêtresse vodou associée à la cérémonie du Bois-Caïman", "Premier président de la République d'Haïti (partie Sud)", "Journaliste et directeur de Radio Haïti Inter, assassiné en 2000"],
    correct: 2
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Ti Manno ?",
    options: ["Port-au-Prince", "Jacmel", "Jérémie (Grande-Anse)", "Hinche (Centre)"],
    correct: 1
  },
  {
    q: "Quelle est la nature du rôle joué par Bouki ?",
    options: ["Père fondateur / figure de l'Indépendance", "Athlète / sportif", "Chef d'État", "Personnage du folklore"],
    correct: 3
  },
  {
    q: "De quel type de personnalité s'agit-il pour Boukman Dutty ?",
    options: ["Peintre / artiste visuel", "Père fondateur / figure de l'Indépendance", "Athlète / sportif", "Intellectuel / militant"],
    correct: 1
  },
  {
    q: "Quel élément biographique distingue Jacques Stephen Alexis ?",
    options: ["Premier président de la République d'Haïti (partie Sud)", "Footballeur devenu icône du konpa avec l'Ensemble Select", "Romancier et médecin, auteur du « réalisme merveilleux »", "Peintre ayant participé aux fresques de la Cathédrale Sainte-Trinité"],
    correct: 2
  },
  {
    q: "Quel lieu géographique évoque le plus La Sirène (Lasirenn) ?",
    options: ["Marmelade (Artibonite)", "Nord (Bataille de Vertières)", "National / légendaire", "Nord (Bois-Caïman)"],
    correct: 2
  },
  {
    q: "Quand Ida Faubert a-t-elle été la plus active ou influente ?",
    options: ["XIXe siècle", "Début XXe siècle", "Milieu XXe siècle (1930-1970)", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 1
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Catherine Flon ?",
    options: ["Peintre connu pour ses « villes imaginaires » aux couleurs vives", "Aurait cousu le premier drapeau haïtien en 1803", "Écrivain et diplomate défenseur de la dignité haïtienne", "Ancien fonctionnaire de l'ONU nommé Premier ministre à deux reprises"],
    correct: 1
  },
  {
    q: "Marie Vieux-Chauvet appartient à quelle période historique ?",
    options: ["XIXe siècle", "Début XXe siècle", "Révolution haïtienne (avant 1804)", "Milieu XXe siècle (1930-1970)"],
    correct: 3
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Suzanne Comhaire-Sylvain ?",
    options: ["Compagnon de Vincent Ogé dans la lutte pour les droits des libres de couleur", "Succéda à son père comme « Président à vie » de 1971 à 1986", "Personnage rusé qui déjoue toujours son compère Bouki", "Première femme haïtienne docteure en lettres, anthropologue"],
    correct: 3
  },
  {
    q: "Qu'est-ce qui rend Baron Samedi célèbre ou important ?",
    options: ["Lwa serpent, considéré comme l'un des esprits les plus anciens du vodou", "Lwa des morts et gardien des cimetières dans le vodou haïtien", "Succéda à son père comme « Président à vie » de 1971 à 1986", "Neurochirurgien devenu Premier ministre après l'assassinat de Jovenel Moïse"],
    correct: 1
  },
  {
    q: "À quelle époque associe-t-on Ertha Pascal-Trouillot ?",
    options: ["Milieu XXe siècle (1930-1970)", "Époque contemporaine (2000 à aujourd'hui)", "Fin XXe siècle (1970-2000)", "XIXe siècle"],
    correct: 2
  },
  {
    q: "Comment classerait-on Emeline Michel parmi les personnalités haïtiennes ?",
    options: ["Personnage du folklore", "Figure religieuse / vodou", "Musicien", "Athlète / sportif"],
    correct: 2
  },
  {
    q: "Quelle est la nature du rôle joué par Catherine Flon ?",
    options: ["Intellectuel / militant", "Écrivain", "Père fondateur / figure de l'Indépendance", "Diplomate / personnalité internationale"],
    correct: 2
  },
  {
    q: "Dans quelle catégorie situerait-on Ida Faubert ?",
    options: ["Musicien", "Écrivain", "Personnage du folklore", "Intellectuel / militant"],
    correct: 1
  },
  {
    q: "De quel type de personnalité s'agit-il pour Edwidge Danticat ?",
    options: ["Diplomate / personnalité internationale", "Chef d'État", "Écrivain", "Père fondateur / figure de l'Indépendance"],
    correct: 2
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Ida Faubert ?",
    options: ["Port-au-Prince", "Jacmel", "Petit-Goâve", "Diaspora (Floride)"],
    correct: 1
  },
  {
    q: "Quelle est l'époque de référence pour Duckens Nazon ?",
    options: ["Fin XXe siècle (1970-2000)", "XIXe siècle", "Révolution haïtienne (avant 1804)", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 3
  },
  {
    q: "Quelle période correspond le mieux à Lyonel Trouillot ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Milieu XXe siècle (1930-1970)", "XIXe siècle", "Début XXe siècle"],
    correct: 0
  },
  {
    q: "Quelle est l'époque de référence pour François Duvalier (Papa Doc) ?",
    options: ["XIXe siècle", "Début XXe siècle", "Révolution haïtienne (avant 1804)", "Milieu XXe siècle (1930-1970)"],
    correct: 3
  },
  {
    q: "Quel lieu géographique évoque le plus René Depestre ?",
    options: ["Jacmel", "Port-au-Prince", "Port-Salut", "Marmelade (Artibonite)"],
    correct: 0
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Alexandre Pétion ?",
    options: ["Anthropologue, auteur de « De l'égalité des races humaines »", "Écrivain élu à l'Académie française", "Premier président de la République d'Haïti (partie Sud)", "Général célèbre pour sa bravoure à la bataille de Vertières"],
    correct: 2
  },
  {
    q: "Comment classerait-on Jacques Roumain parmi les personnalités haïtiennes ?",
    options: ["Écrivain", "Chef d'État", "Père fondateur / figure de l'Indépendance", "Personnage du folklore"],
    correct: 0
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Yvonne Hakim-Rimpel ?",
    options: ["Anse-à-Veau", "Diaspora (États-Unis)", "Port-Salut", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "D'où est originaire Ertha Pascal-Trouillot, ou à quel lieu est-elle le plus associée ?",
    options: ["Port-au-Prince", "Saint-Marc", "Quartier-Morin (Nord)", "Petit-Goâve"],
    correct: 3
  },
  {
    q: "Où Rigaud Benoit a-t-il vécu ou marqué l'histoire ?",
    options: ["Port-au-Prince", "Quartier-Morin (Nord)", "Dondon (Nord)", "Anse-à-Veau"],
    correct: 0
  },
  {
    q: "Dans quelle catégorie situerait-on Frankétienne ?",
    options: ["Figure religieuse / vodou", "Écrivain", "Intellectuel / militant", "Athlète / sportif"],
    correct: 1
  },
  {
    q: "Où situe-t-on l'histoire de Wilson Bigaud ?",
    options: ["Nord (Bataille de Vertières)", "Gonaïves", "Dondon (Nord)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Marie Vieux-Chauvet ?",
    options: ["Romancière haïtiano-américaine, autrice de « Breath, Eyes, Memory »", "DJ et producteur fusionnant konpa et musique électronique", "Autrice du triptyque romanesque « Amour, Colère et Folie »", "Héroïne de la Révolution haïtienne exécutée par les troupes françaises"],
    correct: 2
  },
  {
    q: "De quel type de personnalité s'agit-il pour Vincent Ogé ?",
    options: ["Musicien", "Père fondateur / figure de l'Indépendance", "Diplomate / personnalité internationale", "Personnage du folklore"],
    correct: 1
  },
  {
    q: "Quelle période correspond le mieux à Emeline Michel ?",
    options: ["Fin XXe siècle (1970-2000)", "XIXe siècle", "Époque contemporaine (2000 à aujourd'hui)", "Intemporel (figure du folklore/vodou)"],
    correct: 0
  },
  {
    q: "À quelle époque associe-t-on Rigaud Benoit ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Début XXe siècle", "Intemporel (figure du folklore/vodou)", "Milieu XXe siècle (1930-1970)"],
    correct: 3
  },
  {
    q: "De quel type de personnalité s'agit-il pour Michel Martelly ?",
    options: ["Écrivain", "Père fondateur / figure de l'Indépendance", "Chef d'État", "Athlète / sportif"],
    correct: 2
  },
  {
    q: "Où Préfète Duffaut a-t-il vécu ou marqué l'histoire ?",
    options: ["Bréda (Cap-Haïtien)", "Jacmel", "Saint-Marc", "Port-au-Prince"],
    correct: 1
  },
  {
    q: "Jacques Stephen Alexis appartient à quelle période historique ?",
    options: ["Révolution haïtienne (avant 1804)", "Milieu XXe siècle (1930-1970)", "XIXe siècle", "Fin XXe siècle (1970-2000)"],
    correct: 1
  },
  {
    q: "À quel moment de l'histoire haïtienne rattache-t-on Yvonne Hakim-Rimpel ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Fin XXe siècle (1970-2000)", "Révolution haïtienne (avant 1804)", "Milieu XXe siècle (1930-1970)"],
    correct: 3
  },
  {
    q: "Parmi les propositions suivantes, laquelle correspond à Frankétienne ?",
    options: ["Figure religieuse / vodou", "Père fondateur / figure de l'Indépendance", "Écrivain", "Musicien"],
    correct: 2
  },
  {
    q: "Comment reconnaît-on Jean-Claude Duvalier (Baby Doc) parmi les autres personnalités haïtiennes ?",
    options: ["Écrivain, peintre et dramaturge, pionnier du spiralisme", "Prêtresse vodou associée à la cérémonie du Bois-Caïman", "Héroïne de la Révolution haïtienne exécutée par les troupes françaises", "Succéda à son père comme « Président à vie » de 1971 à 1986"],
    correct: 3
  },
  {
    q: "Comment classerait-on Edwidge Danticat parmi les personnalités haïtiennes ?",
    options: ["Personnage du folklore", "Écrivain", "Chef d'État", "Musicien"],
    correct: 1
  },
  {
    q: "Comment Wilson Bigaud est-il généralement présenté ?",
    options: ["Figure religieuse / vodou", "Peintre / artiste visuel", "Écrivain", "Personnage du folklore"],
    correct: 1
  },
  {
    q: "Quel lieu géographique évoque le plus Henri Christophe ?",
    options: ["Sud (Grande-Anse)", "Marmelade (Artibonite)", "Hinche (Centre)", "Nord (Cap-Haïtien)"],
    correct: 3
  },
  {
    q: "Quel rôle décrit le mieux Charlemagne Péralte dans l'histoire ou la culture haïtienne ?",
    options: ["Peintre / artiste visuel", "Père fondateur / figure de l'Indépendance", "Diplomate / personnalité internationale", "Athlète / sportif"],
    correct: 1
  },
  {
    q: "À quelle époque associe-t-on Dumarsais Estimé ?",
    options: ["Fin XXe siècle (1970-2000)", "Intemporel (figure du folklore/vodou)", "Milieu XXe siècle (1930-1970)", "Révolution haïtienne (avant 1804)"],
    correct: 2
  },
  {
    q: "Quel rôle décrit le mieux Michaëlle Jean dans l'histoire ou la culture haïtienne ?",
    options: ["Intellectuel / militant", "Écrivain", "Diplomate / personnalité internationale", "Musicien"],
    correct: 2
  },
  {
    q: "Ida Faubert provient ou est rattachée à quelle zone ?",
    options: ["National / légendaire", "Nord (Grande-Rivière-du-Nord)", "Quartier-Morin (Nord)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Qu'est-ce qui rend Malice célèbre ou important ?",
    options: ["Personnage rusé qui déjoue toujours son compère Bouki", "Ethnologue, auteur de « Ainsi parla l'oncle », père de l'indigénisme haïtien", "Peintre connu pour ses « villes imaginaires » aux couleurs vives", "Lwa serpent, considéré comme l'un des esprits les plus anciens du vodou"],
    correct: 0
  },
  {
    q: "Gary Victor appartient à quelle période historique ?",
    options: ["Révolution haïtienne (avant 1804)", "Début XXe siècle", "Intemporel (figure du folklore/vodou)", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 3
  },
  {
    q: "Dans quelle période de l'histoire haïtienne situe-t-on Frankétienne ?",
    options: ["Fin XXe siècle (1970-2000)", "XIXe siècle", "Début XXe siècle", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 0
  },
  {
    q: "Pour quelle raison René Depestre est-il connu dans l'histoire ou la culture haïtienne ?",
    options: ["Footballeur devenu icône du konpa avec l'Ensemble Select", "Président par intérim après le départ d'Aristide en 2004", "Chef de file de l'école du Cap dans la peinture haïtienne", "Poète et romancier, prix Renaudot pour « Hadriana dans tous mes rêves »"],
    correct: 3
  },
  {
    q: "Quel lieu géographique évoque le plus Manno Charlemagne ?",
    options: ["Nord (Grande-Rivière-du-Nord)", "Quartier-Morin (Nord)", "Grande Rivière du Nord", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Quelle est la nature du rôle joué par Alexandre Pétion ?",
    options: ["Peintre / artiste visuel", "Père fondateur / figure de l'Indépendance", "Figure religieuse / vodou", "Athlète / sportif"],
    correct: 1
  },
  {
    q: "Quelle est l'époque de référence pour Louis Joseph Janvier ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Milieu XXe siècle (1930-1970)", "XIXe siècle", "Intemporel (figure du folklore/vodou)"],
    correct: 2
  },
  {
    q: "Quelle est la nature du rôle joué par Boniface Alexandre ?",
    options: ["Athlète / sportif", "Musicien", "Écrivain", "Chef d'État"],
    correct: 3
  },
  {
    q: "Quel fait marquant est associé à Toussaint Louverture ?",
    options: ["Lwa des morts et gardien des cimetières dans le vodou haïtien", "Premier président de la République d'Haïti (partie Sud)", "Lwa guerrier associé au fer et à la force dans le vodou haïtien", "Chef militaire et politique, figure centrale de la Révolution haïtienne"],
    correct: 3
  },
  {
    q: "Dans quelle catégorie situerait-on Ezili Freda ?",
    options: ["Père fondateur / figure de l'Indépendance", "Figure religieuse / vodou", "Écrivain", "Athlète / sportif"],
    correct: 1
  },
  {
    q: "Comment Louis Joseph Janvier est-il principalement connu ?",
    options: ["Figure religieuse / vodou", "Chef d'État", "Personnage du folklore", "Intellectuel / militant"],
    correct: 3
  },
  {
    q: "Où situe-t-on l'histoire de Fabre Geffrard ?",
    options: ["Anse-à-Veau", "Port-Salut", "Port-au-Prince", "Bréda (Cap-Haïtien)"],
    correct: 0
  },
  {
    q: "À quel moment de l'histoire haïtienne rattache-t-on Manno Charlemagne ?",
    options: ["Début XXe siècle", "Époque contemporaine (2000 à aujourd'hui)", "Fin XXe siècle (1970-2000)", "Milieu XXe siècle (1930-1970)"],
    correct: 2
  },
  {
    q: "Catherine Flon appartient à quelle période historique ?",
    options: ["Révolution haïtienne (avant 1804)", "Début XXe siècle", "XIXe siècle", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 0
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Damballah ?",
    options: ["National / légendaire", "Petit-Goâve", "Gonaïves", "Quartier-Morin (Nord)"],
    correct: 0
  },
  {
    q: "Boniface Alexandre appartient à quel type de figure historique ou culturelle ?",
    options: ["Diplomate / personnalité internationale", "Personnage du folklore", "Chef d'État", "Père fondateur / figure de l'Indépendance"],
    correct: 2
  },
  {
    q: "Comment Ogou est-il principalement connu ?",
    options: ["Figure religieuse / vodou", "Intellectuel / militant", "Père fondateur / figure de l'Indépendance", "Diplomate / personnalité internationale"],
    correct: 0
  },
  {
    q: "Dans quelle période de l'histoire haïtienne situe-t-on Charlemagne Péralte ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Début XXe siècle", "XIXe siècle", "Intemporel (figure du folklore/vodou)"],
    correct: 1
  },
  {
    q: "Quand Cécile Fatiman a-t-elle été la plus active ou influente ?",
    options: ["Révolution haïtienne (avant 1804)", "Milieu XXe siècle (1930-1970)", "XIXe siècle", "Début XXe siècle"],
    correct: 0
  },
  {
    q: "Dans quelle catégorie situerait-on René Depestre ?",
    options: ["Écrivain", "Figure religieuse / vodou", "Peintre / artiste visuel", "Personnage du folklore"],
    correct: 0
  },
  {
    q: "Comment classerait-on Frankétienne parmi les personnalités haïtiennes ?",
    options: ["Diplomate / personnalité internationale", "Écrivain", "Personnage du folklore", "Figure religieuse / vodou"],
    correct: 1
  },
  {
    q: "Quel élément biographique distingue Ogou ?",
    options: ["Militaire devenu président dans les années 1950", "Lwa guerrier associé au fer et à la force dans le vodou haïtien", "Chanteur de konpa social devenu une icône engagée", "Poétesse haïtienne ayant vécu principalement en France"],
    correct: 1
  },
  {
    q: "À quelle époque associe-t-on René Depestre ?",
    options: ["Début XXe siècle", "Fin XXe siècle (1970-2000)", "XIXe siècle", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 1
  },
  {
    q: "Michaëlle Jean a marqué ou vécu principalement à quelle période ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Milieu XXe siècle (1930-1970)", "Intemporel (figure du folklore/vodou)", "XIXe siècle"],
    correct: 0
  },
  {
    q: "D'où est originaire René Préval, ou à quel lieu est-il le plus associé ?",
    options: ["Anse-à-Veau", "Marmelade (Artibonite)", "Diaspora (New Jersey)", "Port-au-Prince"],
    correct: 1
  },
  {
    q: "Quand René Depestre a-t-il été le plus actif ou influent ?",
    options: ["XIXe siècle", "Révolution haïtienne (avant 1804)", "Fin XXe siècle (1970-2000)", "Début XXe siècle"],
    correct: 2
  },
  {
    q: "Pour quoi Édouard Duval-Carrié est-il surtout reconnu ?",
    options: ["Haïtiano-canadienne, ancienne Gouverneure générale du Canada", "Artiste contemporain mêlant histoire haïtienne et symbolisme vodou", "Romancier connu pour ses œuvres mêlant réalisme et fantastique", "Prêtre vodou considéré comme un déclencheur de la révolte des esclaves de 1791"],
    correct: 1
  },
  {
    q: "Ogou est principalement associé à quel lieu ?",
    options: ["Ravine-Sèche", "National / légendaire", "Quartier-Morin (Nord)", "Jérémie (Grande-Anse)"],
    correct: 1
  },
  {
    q: "Quel lieu géographique évoque le plus Benoît Batraville ?",
    options: ["Plateau Central", "Petit-Goâve", "Trou-du-Nord (Nord-Est)", "Jacmel"],
    correct: 0
  },
  {
    q: "Comment Jean-Claude Duvalier (Baby Doc) est-il principalement connu ?",
    options: ["Diplomate / personnalité internationale", "Écrivain", "Intellectuel / militant", "Chef d'État"],
    correct: 3
  },
  {
    q: "Parmi les propositions suivantes, laquelle correspond à Duckens Nazon ?",
    options: ["Chef d'État", "Athlète / sportif", "Personnage du folklore", "Figure religieuse / vodou"],
    correct: 1
  },
  {
    q: "Qu'est-ce qui rend Benoît Batraville célèbre ou important ?",
    options: ["Auteur du roman « Gouverneurs de la rosée »", "Romancier et poète contemporain engagé", "Général cacos ayant poursuivi la résistance après la mort de Péralte", "Pivot haïtiano-canadien ayant joué en NBA"],
    correct: 2
  },
  {
    q: "Boukman Dutty provient ou est rattaché à quelle zone ?",
    options: ["Nord (Bois-Caïman)", "Port-au-Prince", "Nord (Cap-Haïtien)", "Nord (Grande-Rivière-du-Nord)"],
    correct: 0
  },
  {
    q: "Quelle est l'époque de référence pour Philomé Obin ?",
    options: ["Milieu XXe siècle (1930-1970)", "XIXe siècle", "Intemporel (figure du folklore/vodou)", "Début XXe siècle"],
    correct: 0
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Wyclef Jean ?",
    options: ["Musicien haïtiano-américain, ex-membre du groupe The Fugees", "Militaire devenu président dans les années 1950", "Lwa guerrier associé au fer et à la force dans le vodou haïtien", "Militante féministe, cofondatrice d'organisations pour les droits des femmes"],
    correct: 0
  },
  {
    q: "À quel moment de l'histoire haïtienne rattache-t-on René Depestre ?",
    options: ["Révolution haïtienne (avant 1804)", "Fin XXe siècle (1970-2000)", "XIXe siècle", "Intemporel (figure du folklore/vodou)"],
    correct: 1
  },
  {
    q: "Quel lieu géographique évoque le plus Philomé Obin ?",
    options: ["Anse-à-Veau", "Diaspora (New Jersey)", "Cap-Haïtien", "Port-au-Prince"],
    correct: 2
  },
  {
    q: "Dans quelle période de l'histoire haïtienne situe-t-on Wyclef Jean ?",
    options: ["XIXe siècle", "Époque contemporaine (2000 à aujourd'hui)", "Fin XXe siècle (1970-2000)", "Intemporel (figure du folklore/vodou)"],
    correct: 1
  },
  {
    q: "Quel fait marquant est associé à Rigaud Benoit ?",
    options: ["Neurochirurgien devenu Premier ministre après l'assassinat de Jovenel Moïse", "Peintre naïf associé au Centre d'Art de Port-au-Prince", "Peintre connu pour ses « villes imaginaires » aux couleurs vives", "Pivot haïtiano-canadien ayant joué en NBA"],
    correct: 1
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Leslie Manigat ?",
    options: ["Cap-Haïtien", "Verrettes (Artibonite)", "Sud (Grande-Anse)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Qu'est-ce qui rend Gary Victor célèbre ou important ?",
    options: ["Romancier connu pour ses œuvres mêlant réalisme et fantastique", "Peintre célèbre pour sa fresque à la Cathédrale Sainte-Trinité", "Poète et romancier, prix Renaudot pour « Hadriana dans tous mes rêves »", "Aurait cousu le premier drapeau haïtien en 1803"],
    correct: 0
  },
  {
    q: "Quel rôle décrit le mieux René Depestre dans l'histoire ou la culture haïtienne ?",
    options: ["Diplomate / personnalité internationale", "Musicien", "Athlète / sportif", "Écrivain"],
    correct: 3
  },
  {
    q: "Où Michael Brun a-t-il vécu ou marqué l'histoire ?",
    options: ["Nord (Arcahaie)", "Port-au-Prince", "Jacmel", "Bréda (Cap-Haïtien)"],
    correct: 1
  },
  {
    q: "D'où est originaire Édouard Duval-Carrié, ou à quel lieu est-il le plus associé ?",
    options: ["Quartier-Morin (Nord)", "Jacmel", "Port-au-Prince", "Plateau Central"],
    correct: 2
  },
  {
    q: "De quel type de personnalité s'agit-il pour Toto Bissainthe ?",
    options: ["Musicien", "Père fondateur / figure de l'Indépendance", "Écrivain", "Intellectuel / militant"],
    correct: 0
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Duckens Nazon ?",
    options: ["Attaquant international de l'équipe nationale de football d'Haïti", "Lwa associée à l'amour, la beauté et le luxe dans le vodou haïtien", "Seul président haïtien à avoir achevé deux mandats non consécutifs", "Peintre ayant participé aux fresques de la Cathédrale Sainte-Trinité"],
    correct: 0
  },
  {
    q: "Comment classerait-on Jean Dominique parmi les personnalités haïtiennes ?",
    options: ["Chef d'État", "Musicien", "Peintre / artiste visuel", "Intellectuel / militant"],
    correct: 3
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Dumarsais Estimé ?",
    options: ["Écrivain et diplomate défenseur de la dignité haïtienne", "Premier président noir élu après une longue période d'influence mulâtre", "Romancière contemporaine, autrice de « Saisons sauvages »", "Écrivain élu à l'Académie française"],
    correct: 1
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Alexandre Pétion ?",
    options: ["Plateau Central", "Diaspora (États-Unis)", "Dondon (Nord)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "De quel type de personnalité s'agit-il pour Charles Oscar Étienne (Jean-Baptiste Chavannes) ?",
    options: ["Personnage du folklore", "Père fondateur / figure de l'Indépendance", "Peintre / artiste visuel", "Intellectuel / militant"],
    correct: 1
  },
  {
    q: "Qu'est-ce qui rend Rigaud Benoit célèbre ou important ?",
    options: ["Peintre naïf associé au Centre d'Art de Port-au-Prince", "Chef de file de l'école du Cap dans la peinture haïtienne", "Première femme haïtienne docteure en lettres, anthropologue", "DJ et producteur fusionnant konpa et musique électronique"],
    correct: 0
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Ogou ?",
    options: ["Prêtre vodou considéré comme un déclencheur de la révolte des esclaves de 1791", "Personnage rusé qui déjoue toujours son compère Bouki", "Général cacos ayant poursuivi la résistance après la mort de Péralte", "Lwa guerrier associé au fer et à la force dans le vodou haïtien"],
    correct: 3
  },
  {
    q: "Quand Wyclef Jean a-t-il été le plus actif ou influent ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "XIXe siècle", "Intemporel (figure du folklore/vodou)", "Début XXe siècle"],
    correct: 0
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Édouard Duval-Carrié ?",
    options: ["Quartier-Morin (Nord)", "Port-au-Prince", "Diaspora (Canada)", "Trou-du-Nord (Nord-Est)"],
    correct: 1
  },
  {
    q: "Dans quelle période de l'histoire haïtienne situe-t-on Jean Price-Mars ?",
    options: ["Intemporel (figure du folklore/vodou)", "Début XXe siècle", "Milieu XXe siècle (1930-1970)", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 1
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Benoît Batraville ?",
    options: ["Plateau Central", "Petit-Goâve", "Cap-Haïtien", "Trou-du-Nord (Nord-Est)"],
    correct: 0
  },
  {
    q: "Quel lieu géographique évoque le plus Kettly Mars ?",
    options: ["Port-au-Prince", "Nord (Arcahaie)", "Ravine-Sèche", "Nord (Bataille de Vertières)"],
    correct: 0
  },
  {
    q: "Pour quelle raison Marie Vieux-Chauvet est-elle connue dans l'histoire ou la culture haïtienne ?",
    options: ["Attaquant international de l'équipe nationale de football d'Haïti", "Musicien haïtiano-américain, ex-membre du groupe The Fugees", "Écrivain, peintre et dramaturge, pionnier du spiralisme", "Autrice du triptyque romanesque « Amour, Colère et Folie »"],
    correct: 3
  },
  {
    q: "À quel moment de l'histoire haïtienne rattache-t-on Benoît Batraville ?",
    options: ["Révolution haïtienne (avant 1804)", "Début XXe siècle", "Fin XXe siècle (1970-2000)", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 1
  },
  {
    q: "Dans quelle catégorie situerait-on Emeline Michel ?",
    options: ["Diplomate / personnalité internationale", "Intellectuel / militant", "Père fondateur / figure de l'Indépendance", "Musicien"],
    correct: 3
  },
  {
    q: "Quelle période correspond le mieux à Toto Bissainthe ?",
    options: ["Milieu XXe siècle (1930-1970)", "Fin XXe siècle (1970-2000)", "XIXe siècle", "Révolution haïtienne (avant 1804)"],
    correct: 1
  },
  {
    q: "Quelle est l'époque de référence pour Jacques Roumain ?",
    options: ["Milieu XXe siècle (1930-1970)", "Intemporel (figure du folklore/vodou)", "Révolution haïtienne (avant 1804)", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 0
  },
  {
    q: "Quel fait marquant est associé à Jean Price-Mars ?",
    options: ["Ethnologue, auteur de « Ainsi parla l'oncle », père de l'indigénisme haïtien", "DJ et producteur fusionnant konpa et musique électronique", "Militaire devenu président dans les années 1950", "Figure fondatrice de la peinture naïve haïtienne"],
    correct: 0
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Myriam Merlet ?",
    options: ["Port-au-Prince", "Diaspora (États-Unis)", "Port-Salut", "Nord (Cap-Haïtien)"],
    correct: 0
  },
  {
    q: "Quelle étiquette correspond le mieux à Emeline Michel ?",
    options: ["Écrivain", "Musicien", "Père fondateur / figure de l'Indépendance", "Chef d'État"],
    correct: 1
  },
  {
    q: "Quelle est la nature du rôle joué par Jean Dominique ?",
    options: ["Écrivain", "Chef d'État", "Athlète / sportif", "Intellectuel / militant"],
    correct: 3
  },
  {
    q: "Dans quelle catégorie situerait-on Catherine Flon ?",
    options: ["Père fondateur / figure de l'Indépendance", "Chef d'État", "Diplomate / personnalité internationale", "Personnage du folklore"],
    correct: 0
  },
  {
    q: "D'où est originaire Faustin Soulouque, ou à quel lieu est-il le plus associé ?",
    options: ["Verrettes (Artibonite)", "Bréda (Cap-Haïtien)", "Petit-Goâve", "Hinche (Centre)"],
    correct: 2
  },
  {
    q: "Wilson Bigaud a marqué ou vécu principalement à quelle période ?",
    options: ["Intemporel (figure du folklore/vodou)", "Début XXe siècle", "Révolution haïtienne (avant 1804)", "Milieu XXe siècle (1930-1970)"],
    correct: 3
  },
  {
    q: "Quel rôle décrit le mieux Ti Manno dans l'histoire ou la culture haïtienne ?",
    options: ["Figure religieuse / vodou", "Musicien", "Athlète / sportif", "Peintre / artiste visuel"],
    correct: 1
  },
  {
    q: "Quelle est l'époque de référence pour Vincent Ogé ?",
    options: ["Début XXe siècle", "Milieu XXe siècle (1930-1970)", "Époque contemporaine (2000 à aujourd'hui)", "Révolution haïtienne (avant 1804)"],
    correct: 3
  },
  {
    q: "Parmi les propositions suivantes, laquelle correspond à Hector Hyppolite ?",
    options: ["Athlète / sportif", "Figure religieuse / vodou", "Chef d'État", "Peintre / artiste visuel"],
    correct: 3
  },
  {
    q: "Pour quoi René Depestre est-il surtout reconnu ?",
    options: ["Président élu en 2016, assassiné en fonction en 2021", "Aurait cousu le premier drapeau haïtien en 1803", "Président puis « Président à vie » d'Haïti de 1957 à 1971", "Poète et romancier, prix Renaudot pour « Hadriana dans tous mes rêves »"],
    correct: 3
  },
  {
    q: "Quelle est l'époque de référence pour Hector Hyppolite ?",
    options: ["XIXe siècle", "Époque contemporaine (2000 à aujourd'hui)", "Intemporel (figure du folklore/vodou)", "Milieu XXe siècle (1930-1970)"],
    correct: 3
  },
  {
    q: "Qu'est-ce qui rend Jacques Stephen Alexis célèbre ou important ?",
    options: ["Romancier et médecin, auteur du « réalisme merveilleux »", "Écrivain élu à l'Académie française", "Lwa gardien des carrefours et intermédiaire avec les autres esprits", "Premier président de la République d'Haïti (partie Sud)"],
    correct: 0
  },
  {
    q: "Où Marie Vieux-Chauvet a-t-elle vécu ou marqué l'histoire ?",
    options: ["Port-au-Prince", "Saint-Marc", "Diaspora (Floride)", "Petit-Goâve"],
    correct: 0
  },
  {
    q: "D'où est originaire Wyclef Jean, ou à quel lieu est-il le plus associé ?",
    options: ["Dondon (Nord)", "Diaspora (New Jersey)", "Plateau Central", "Bréda (Cap-Haïtien)"],
    correct: 1
  },
  {
    q: "Pour quoi Wyclef Jean est-il surtout reconnu ?",
    options: ["Ancien prêtre devenu président à deux reprises", "Musicien haïtiano-américain, ex-membre du groupe The Fugees", "Peintre connu pour ses « villes imaginaires » aux couleurs vives", "Poète et romancier, figure du mouvement Haïti Littéraire"],
    correct: 1
  },
  {
    q: "Comment Rigaud Benoit est-il généralement présenté ?",
    options: ["Père fondateur / figure de l'Indépendance", "Diplomate / personnalité internationale", "Chef d'État", "Peintre / artiste visuel"],
    correct: 3
  },
  {
    q: "Qu'est-ce qui rend Dumarsais Estimé célèbre ou important ?",
    options: ["Personnage rusé qui déjoue toujours son compère Bouki", "Peintre naïf associé au Centre d'Art de Port-au-Prince", "Ancien fonctionnaire de l'ONU nommé Premier ministre à deux reprises", "Premier président noir élu après une longue période d'influence mulâtre"],
    correct: 3
  },
  {
    q: "Qu'est-ce qui rend Jean Dominique célèbre ou important ?",
    options: ["Journaliste et directeur de Radio Haïti Inter, assassiné en 2000", "Écrivain et diplomate défenseur de la dignité haïtienne", "Autrice du triptyque romanesque « Amour, Colère et Folie »", "Journaliste féministe pionnière en Haïti"],
    correct: 0
  },
  {
    q: "Où Frankétienne a-t-il vécu ou marqué l'histoire ?",
    options: ["Hinche (Centre)", "Gonaïves", "Ravine-Sèche", "Port-au-Prince"],
    correct: 2
  },
  {
    q: "Pour quelle raison Emmanuel Sanon est-il connu dans l'histoire ou la culture haïtienne ?",
    options: ["Romancier et médecin, auteur du « réalisme merveilleux »", "Footballeur ayant marqué contre l'Italie à la Coupe du monde 1974", "Romancière haïtiano-américaine, autrice de « Breath, Eyes, Memory »", "Lwa serpent, considéré comme l'un des esprits les plus anciens du vodou"],
    correct: 1
  },
  {
    q: "Quel rôle décrit le mieux La Sirène (Lasirenn) dans l'histoire ou la culture haïtienne ?",
    options: ["Figure religieuse / vodou", "Père fondateur / figure de l'Indépendance", "Peintre / artiste visuel", "Chef d'État"],
    correct: 0
  },
  {
    q: "Pour quelle raison Catherine Flon est-elle connue dans l'histoire ou la culture haïtienne ?",
    options: ["Artiste contemporain mêlant histoire haïtienne et symbolisme vodou", "Aurait cousu le premier drapeau haïtien en 1803", "Haïtiano-canadienne, ancienne Gouverneure générale du Canada", "Ancien fonctionnaire de l'ONU nommé Premier ministre à deux reprises"],
    correct: 1
  },
  {
    q: "Quelle période correspond le mieux à Leslie Manigat ?",
    options: ["XIXe siècle", "Milieu XXe siècle (1930-1970)", "Révolution haïtienne (avant 1804)", "Fin XXe siècle (1970-2000)"],
    correct: 3
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Sanite Bélair ?",
    options: ["Romancier connu pour ses œuvres mêlant réalisme et fantastique", "Héroïne de la Révolution haïtienne exécutée par les troupes françaises", "Militaire devenu président dans les années 1950", "Poète national, auteur du célèbre poème « Choucoune »"],
    correct: 1
  },
  {
    q: "Azaka (Papa Zaka) provient ou est rattaché à quelle zone ?",
    options: ["Anse-à-Veau", "National / légendaire", "Port-au-Prince", "Dondon (Nord)"],
    correct: 1
  },
  {
    q: "Comment reconnaît-on René Depestre parmi les autres personnalités haïtiennes ?",
    options: ["Footballeur ayant marqué contre l'Italie à la Coupe du monde 1974", "Président par intérim après le départ d'Aristide en 2004", "Première femme à assurer la présidence d'Haïti (1990-1991)", "Poète et romancier, prix Renaudot pour « Hadriana dans tous mes rêves »"],
    correct: 3
  },
  {
    q: "Dans quelle période de l'histoire haïtienne situe-t-on Boniface Alexandre ?",
    options: ["Intemporel (figure du folklore/vodou)", "Début XXe siècle", "Révolution haïtienne (avant 1804)", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 3
  },
  {
    q: "Jacques Roumain est principalement associé à quel lieu ?",
    options: ["Port-au-Prince", "Nord (Bois-Caïman)", "Nord (Grande-Rivière-du-Nord)", "Plateau Central"],
    correct: 0
  },
  {
    q: "Vincent Ogé a marqué ou vécu principalement à quelle période ?",
    options: ["XIXe siècle", "Fin XXe siècle (1970-2000)", "Milieu XXe siècle (1930-1970)", "Révolution haïtienne (avant 1804)"],
    correct: 3
  },
  {
    q: "Comment classerait-on Castera Bazile parmi les personnalités haïtiennes ?",
    options: ["Musicien", "Peintre / artiste visuel", "Personnage du folklore", "Père fondateur / figure de l'Indépendance"],
    correct: 1
  },
  {
    q: "Charlemagne Péralte appartient à quelle période historique ?",
    options: ["Fin XXe siècle (1970-2000)", "Révolution haïtienne (avant 1804)", "Début XXe siècle", "Intemporel (figure du folklore/vodou)"],
    correct: 2
  },
  {
    q: "Alexandre Pétion provient ou est rattaché à quelle zone ?",
    options: ["Jérémie (Grande-Anse)", "National / légendaire", "Port-au-Prince", "Saint-Marc"],
    correct: 2
  },
  {
    q: "D'où est originaire Benoît Batraville, ou à quel lieu est-il le plus associé ?",
    options: ["Trou-du-Nord (Nord-Est)", "Quartier-Morin (Nord)", "Gonaïves", "Plateau Central"],
    correct: 3
  },
  {
    q: "Quand Édouard Duval-Carrié a-t-il été le plus actif ou influent ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Fin XXe siècle (1970-2000)", "Intemporel (figure du folklore/vodou)", "Révolution haïtienne (avant 1804)"],
    correct: 0
  },
  {
    q: "Parmi les propositions suivantes, laquelle correspond à Ogou ?",
    options: ["Diplomate / personnalité internationale", "Personnage du folklore", "Père fondateur / figure de l'Indépendance", "Figure religieuse / vodou"],
    correct: 3
  },
  {
    q: "Quelle est l'époque de référence pour Jacques Stephen Alexis ?",
    options: ["Fin XXe siècle (1970-2000)", "Milieu XXe siècle (1930-1970)", "Intemporel (figure du folklore/vodou)", "Début XXe siècle"],
    correct: 1
  },
  {
    q: "Quelle est la nature du rôle joué par Dumarsais Estimé ?",
    options: ["Père fondateur / figure de l'Indépendance", "Athlète / sportif", "Écrivain", "Chef d'État"],
    correct: 3
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Michel Martelly ?",
    options: ["Seul président haïtien à avoir achevé deux mandats non consécutifs", "Ancien chanteur de konpa devenu président de la République", "Journaliste et directeur de Radio Haïti Inter, assassiné en 2000", "Héroïne de la Révolution haïtienne exécutée par les troupes françaises"],
    correct: 1
  },
  {
    q: "Comment reconnaît-on La Sirène (Lasirenn) parmi les autres personnalités haïtiennes ?",
    options: ["Chanteuse et actrice, figure de la chanson racine haïtienne", "Président puis empereur d'Haïti sous le nom de Faustin Ier", "Lwa des eaux et de la mer dans le vodou haïtien", "Poète national, auteur du célèbre poème « Choucoune »"],
    correct: 2
  },
  {
    q: "Dans quelle catégorie situerait-on Jean-Robert Cadet ?",
    options: ["Musicien", "Diplomate / personnalité internationale", "Père fondateur / figure de l'Indépendance", "Écrivain"],
    correct: 3
  },
  {
    q: "D'où est originaire Michaëlle Jean, ou à quel lieu est-elle le plus associée ?",
    options: ["Grande Rivière du Nord", "Diaspora (Canada)", "Port-au-Prince", "Diaspora (Floride)"],
    correct: 1
  },
  {
    q: "Parmi les propositions suivantes, laquelle correspond à Azaka (Papa Zaka) ?",
    options: ["Personnage du folklore", "Figure religieuse / vodou", "Peintre / artiste visuel", "Écrivain"],
    correct: 1
  },
  {
    q: "Lyonel Trouillot a marqué ou vécu principalement à quelle période ?",
    options: ["Début XXe siècle", "Milieu XXe siècle (1930-1970)", "Intemporel (figure du folklore/vodou)", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 3
  },
  {
    q: "Qu'est-ce qui rend Jean-Jacques Dessalines célèbre ou important ?",
    options: ["Proclama l'indépendance d'Haïti en 1804 et en devint le premier chef d'État", "Romancier et médecin, auteur du « réalisme merveilleux »", "Auteur du roman « Gouverneurs de la rosée »", "Chanteuse surnommée « la Grande Dame de la chanson haïtienne »"],
    correct: 0
  },
  {
    q: "Où Paul Magloire a-t-il vécu ou marqué l'histoire ?",
    options: ["Quartier-Morin (Nord)", "Ravine-Sèche", "Diaspora (États-Unis)", "Diaspora (New Jersey)"],
    correct: 0
  },
  {
    q: "Jean Price-Mars appartient à quelle période historique ?",
    options: ["Révolution haïtienne (avant 1804)", "Début XXe siècle", "Fin XXe siècle (1970-2000)", "Milieu XXe siècle (1930-1970)"],
    correct: 1
  },
  {
    q: "D'où est originaire Michael Brun, ou à quel lieu est-il le plus associé ?",
    options: ["Nord (Bataille de Vertières)", "Port-au-Prince", "Trou-du-Nord (Nord-Est)", "Marmelade (Artibonite)"],
    correct: 1
  },
  {
    q: "Alexandre Pétion appartient à quelle période historique ?",
    options: ["Intemporel (figure du folklore/vodou)", "Fin XXe siècle (1970-2000)", "Révolution haïtienne (avant 1804)", "XIXe siècle"],
    correct: 2
  },
  {
    q: "À quelle époque associe-t-on Alexandre Pétion ?",
    options: ["Intemporel (figure du folklore/vodou)", "XIXe siècle", "Révolution haïtienne (avant 1804)", "Début XXe siècle"],
    correct: 2
  },
  {
    q: "Où situe-t-on l'histoire de Alexandre Pétion ?",
    options: ["Hinche (Centre)", "Port-au-Prince", "Anse-à-Veau", "Jacmel"],
    correct: 3
  },
  {
    q: "Quand Garry Conille a-t-il été le plus actif ou influent ?",
    options: ["Intemporel (figure du folklore/vodou)", "Début XXe siècle", "Époque contemporaine (2000 à aujourd'hui)", "Milieu XXe siècle (1930-1970)"],
    correct: 2
  },
  {
    q: "Où Ti Jean a-t-il vécu ou marqué l'histoire ?",
    options: ["National / légendaire", "Port-au-Prince", "Grande Rivière du Nord", "Diaspora (États-Unis)"],
    correct: 0
  },
  {
    q: "Quel élément biographique distingue Edwidge Danticat ?",
    options: ["Peintre naïf associé au Centre d'Art de Port-au-Prince", "Journaliste et directeur de Radio Haïti Inter, assassiné en 2000", "Poète et romancier, figure du mouvement Haïti Littéraire", "Romancière haïtiano-américaine, autrice de « Breath, Eyes, Memory »"],
    correct: 3
  },
  {
    q: "Comment Philomé Obin est-il principalement connu ?",
    options: ["Figure religieuse / vodou", "Diplomate / personnalité internationale", "Peintre / artiste visuel", "Écrivain"],
    correct: 2
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Castera Bazile ?",
    options: ["Port-au-Prince", "National / légendaire", "Jacmel", "Petit-Goâve"],
    correct: 2
  },
  {
    q: "Quel fait marquant est associé à Gary Victor ?",
    options: ["Romancier connu pour ses œuvres mêlant réalisme et fantastique", "Peintre ayant participé aux fresques de la Cathédrale Sainte-Trinité", "DJ et producteur fusionnant konpa et musique électronique", "Première femme à assurer la présidence d'Haïti (1990-1991)"],
    correct: 0
  },
  {
    q: "Où Azaka (Papa Zaka) a-t-il vécu ou marqué l'histoire ?",
    options: ["Jérémie (Grande-Anse)", "Nord (Bataille de Vertières)", "National / légendaire", "Nord (Cap-Haïtien)"],
    correct: 2
  },
  {
    q: "Où situe-t-on l'histoire de Ida Faubert ?",
    options: ["Port-au-Prince", "Jacmel", "Sud (Grande-Anse)", "Plateau Central"],
    correct: 0
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Charles Oscar Étienne (Jean-Baptiste Chavannes) ?",
    options: ["Bréda (Cap-Haïtien)", "Jacmel", "Anse-à-Veau", "Sud (Grande-Anse)"],
    correct: 3
  },
  {
    q: "Dans quelle période de l'histoire haïtienne situe-t-on Toussaint Louverture ?",
    options: ["Fin XXe siècle (1970-2000)", "Époque contemporaine (2000 à aujourd'hui)", "Révolution haïtienne (avant 1804)", "Début XXe siècle"],
    correct: 2
  },
  {
    q: "Quelle étiquette correspond le mieux à Catherine Flon ?",
    options: ["Écrivain", "Personnage du folklore", "Père fondateur / figure de l'Indépendance", "Athlète / sportif"],
    correct: 2
  },
  {
    q: "Où Andre Berto a-t-il vécu ou marqué l'histoire ?",
    options: ["Port-Salut", "Petit-Goâve", "Diaspora (Floride)", "Jérémie (Grande-Anse)"],
    correct: 2
  },
  {
    q: "Quel fait marquant est associé à Yvonne Hakim-Rimpel ?",
    options: ["Seul président haïtien à avoir achevé deux mandats non consécutifs", "Ancien chanteur de konpa devenu président de la République", "Lwa gardien des carrefours et intermédiaire avec les autres esprits", "Journaliste féministe pionnière en Haïti"],
    correct: 3
  },
  {
    q: "Comment Ida Faubert est-elle principalement connue ?",
    options: ["Musicien", "Écrivain", "Père fondateur / figure de l'Indépendance", "Personnage du folklore"],
    correct: 1
  },
  {
    q: "Qu'est-ce qui rend Michaëlle Jean célèbre ou importante ?",
    options: ["Footballeur devenu icône du konpa avec l'Ensemble Select", "Écrivain et diplomate défenseur de la dignité haïtienne", "Personnage naïf et souvent trompé dans les contes populaires haïtiens", "Haïtiano-canadienne, ancienne Gouverneure générale du Canada"],
    correct: 3
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Toussaint Louverture ?",
    options: ["Bréda (Cap-Haïtien)", "Cap-Haïtien", "Nord (Bataille de Vertières)", "Gonaïves"],
    correct: 0
  },
  {
    q: "Pour quelle raison Jean-Pierre Boyer est-il connu dans l'histoire ou la culture haïtienne ?",
    options: ["Président ayant unifié l'ensemble de l'île sous administration haïtienne", "Attaquant international de l'équipe nationale de football d'Haïti", "Écrivain et diplomate défenseur de la dignité haïtienne", "Écrivain, peintre et dramaturge, pionnier du spiralisme"],
    correct: 0
  },
  {
    q: "Quelle étiquette correspond le mieux à Oswald Durand ?",
    options: ["Intellectuel / militant", "Personnage du folklore", "Écrivain", "Figure religieuse / vodou"],
    correct: 2
  },
  {
    q: "Qu'est-ce qui rend Jacques Roumain célèbre ou important ?",
    options: ["Chef de file de l'école du Cap dans la peinture haïtienne", "Se proclama roi d'Haïti et fit construire la Citadelle Laferrière", "Journaliste et directeur de Radio Haïti Inter, assassiné en 2000", "Auteur du roman « Gouverneurs de la rosée »"],
    correct: 3
  },
  {
    q: "Hector Hyppolite appartient à quel type de figure historique ou culturelle ?",
    options: ["Diplomate / personnalité internationale", "Athlète / sportif", "Peintre / artiste visuel", "Père fondateur / figure de l'Indépendance"],
    correct: 2
  },
  {
    q: "Comment reconnaît-on Ti Jean parmi les autres personnalités haïtiennes ?",
    options: ["Personnage naïf et souvent trompé dans les contes populaires haïtiens", "Journaliste féministe pionnière en Haïti", "Jeune héros malin des contes traditionnels haïtiens", "Poète et romancier, prix Renaudot pour « Hadriana dans tous mes rêves »"],
    correct: 2
  },
  {
    q: "Quel lieu géographique évoque le plus Frankétienne ?",
    options: ["Ravine-Sèche", "Hinche (Centre)", "Jacmel", "Plateau Central"],
    correct: 0
  },
  {
    q: "Quelle étiquette correspond le mieux à Coupé Cloué ?",
    options: ["Peintre / artiste visuel", "Intellectuel / militant", "Musicien", "Chef d'État"],
    correct: 2
  },
  {
    q: "Michael Brun a marqué ou vécu principalement à quelle période ?",
    options: ["Milieu XXe siècle (1930-1970)", "Début XXe siècle", "Révolution haïtienne (avant 1804)", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 3
  },
  {
    q: "Comment Charlemagne Péralte est-il principalement connu ?",
    options: ["Peintre / artiste visuel", "Chef d'État", "Père fondateur / figure de l'Indépendance", "Diplomate / personnalité internationale"],
    correct: 2
  },
  {
    q: "D'où est originaire Baron Samedi, ou à quel lieu est-il le plus associé ?",
    options: ["National / légendaire", "Ravine-Sèche", "Quartier-Morin (Nord)", "Port-au-Prince"],
    correct: 0
  },
  {
    q: "Quelle est la nature du rôle joué par Sanite Bélair ?",
    options: ["Figure religieuse / vodou", "Musicien", "Père fondateur / figure de l'Indépendance", "Intellectuel / militant"],
    correct: 2
  },
  {
    q: "Quel lieu géographique évoque le plus Samuel Dalembert ?",
    options: ["Port-au-Prince", "Jacmel", "Plateau Central", "National / légendaire"],
    correct: 0
  },
  {
    q: "Dans quelle période de l'histoire haïtienne situe-t-on Wilson Bigaud ?",
    options: ["Milieu XXe siècle (1930-1970)", "XIXe siècle", "Révolution haïtienne (avant 1804)", "Début XXe siècle"],
    correct: 0
  },
  {
    q: "Quelle est l'époque de référence pour Yvonne Hakim-Rimpel ?",
    options: ["Milieu XXe siècle (1930-1970)", "Révolution haïtienne (avant 1804)", "Intemporel (figure du folklore/vodou)", "Début XXe siècle"],
    correct: 0
  },
  {
    q: "Quelle période correspond le mieux à Samuel Dalembert ?",
    options: ["Fin XXe siècle (1970-2000)", "Époque contemporaine (2000 à aujourd'hui)", "Révolution haïtienne (avant 1804)", "Intemporel (figure du folklore/vodou)"],
    correct: 1
  },
  {
    q: "Quelle est la nature du rôle joué par Yvonne Hakim-Rimpel ?",
    options: ["Musicien", "Chef d'État", "Intellectuel / militant", "Athlète / sportif"],
    correct: 2
  },
  {
    q: "Quel lieu géographique évoque le plus Ogou ?",
    options: ["Nord (Grande-Rivière-du-Nord)", "National / légendaire", "Bréda (Cap-Haïtien)", "Diaspora (New Jersey)"],
    correct: 1
  },
  {
    q: "Quelle période correspond le mieux à Duckens Nazon ?",
    options: ["XIXe siècle", "Révolution haïtienne (avant 1804)", "Intemporel (figure du folklore/vodou)", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 3
  },
  {
    q: "Comment Jean-Jacques Dessalines est-il généralement présenté ?",
    options: ["Père fondateur / figure de l'Indépendance", "Écrivain", "Figure religieuse / vodou", "Athlète / sportif"],
    correct: 0
  },
  {
    q: "Quelle est l'époque de référence pour Kettly Mars ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Intemporel (figure du folklore/vodou)", "Fin XXe siècle (1970-2000)", "Révolution haïtienne (avant 1804)"],
    correct: 0
  },
  {
    q: "Quel rôle décrit le mieux Cécile Fatiman dans l'histoire ou la culture haïtienne ?",
    options: ["Écrivain", "Chef d'État", "Père fondateur / figure de l'Indépendance", "Personnage du folklore"],
    correct: 2
  },
  {
    q: "Quel rôle décrit le mieux Rigaud Benoit dans l'histoire ou la culture haïtienne ?",
    options: ["Chef d'État", "Père fondateur / figure de l'Indépendance", "Personnage du folklore", "Peintre / artiste visuel"],
    correct: 3
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Marie Vieux-Chauvet ?",
    options: ["Autrice du triptyque romanesque « Amour, Colère et Folie »", "Musicien haïtiano-américain, ex-membre du groupe The Fugees", "Lwa protecteur de l'agriculture et des paysans dans le vodou haïtien", "Ancien fonctionnaire de l'ONU nommé Premier ministre à deux reprises"],
    correct: 0
  },
  {
    q: "Boukman Dutty appartient à quelle période historique ?",
    options: ["Milieu XXe siècle (1930-1970)", "Révolution haïtienne (avant 1804)", "Fin XXe siècle (1970-2000)", "Début XXe siècle"],
    correct: 1
  },
  {
    q: "Quel fait marquant est associé à Oswald Durand ?",
    options: ["Chef militaire et politique, figure centrale de la Révolution haïtienne", "Poète national, auteur du célèbre poème « Choucoune »", "Ancien prêtre devenu président à deux reprises", "Lwa des morts et gardien des cimetières dans le vodou haïtien"],
    correct: 1
  },
  {
    q: "Comment René Préval est-il généralement présenté ?",
    options: ["Écrivain", "Chef d'État", "Musicien", "Père fondateur / figure de l'Indépendance"],
    correct: 1
  },
  {
    q: "Quel lieu géographique évoque le plus Louis Joseph Janvier ?",
    options: ["Saint-Marc", "Port-au-Prince", "Jacmel", "Nord (Arcahaie)"],
    correct: 1
  },
  {
    q: "Comment Wyclef Jean est-il principalement connu ?",
    options: ["Athlète / sportif", "Figure religieuse / vodou", "Peintre / artiste visuel", "Musicien"],
    correct: 3
  },
  {
    q: "D'où est originaire Suzanne Comhaire-Sylvain, ou à quel lieu est-elle le plus associée ?",
    options: ["Ravine-Sèche", "Port-au-Prince", "Nord (Bois-Caïman)", "Port-Salut"],
    correct: 1
  },
  {
    q: "Édouard Duval-Carrié appartient à quelle période historique ?",
    options: ["Début XXe siècle", "Époque contemporaine (2000 à aujourd'hui)", "Intemporel (figure du folklore/vodou)", "Fin XXe siècle (1970-2000)"],
    correct: 1
  },
  {
    q: "À quelle époque associe-t-on Toto Bissainthe ?",
    options: ["Début XXe siècle", "XIXe siècle", "Fin XXe siècle (1970-2000)", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 2
  },
  {
    q: "Leslie Manigat est principalement associé à quel lieu ?",
    options: ["Sud (Grande-Anse)", "Grande Rivière du Nord", "Nord (Bois-Caïman)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Wyclef Jean ?",
    options: ["Diaspora (New Jersey)", "Port-au-Prince", "Trou-du-Nord (Nord-Est)", "Nord (Cap-Haïtien)"],
    correct: 0
  },
  {
    q: "Comment Hector Hyppolite est-il généralement présenté ?",
    options: ["Diplomate / personnalité internationale", "Peintre / artiste visuel", "Écrivain", "Figure religieuse / vodou"],
    correct: 1
  },
  {
    q: "De quel type de personnalité s'agit-il pour Dany Laferrière ?",
    options: ["Intellectuel / militant", "Peintre / artiste visuel", "Père fondateur / figure de l'Indépendance", "Écrivain"],
    correct: 3
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Anténor Firmin ?",
    options: ["Port-au-Prince", "Port-Salut", "National / légendaire", "Cap-Haïtien"],
    correct: 3
  },
  {
    q: "Où Jean-Claude Duvalier (Baby Doc) a-t-il vécu ou marqué l'histoire ?",
    options: ["Port-au-Prince", "Jacmel", "Plateau Central", "Diaspora (Canada)"],
    correct: 1
  },
  {
    q: "Quel rôle décrit le mieux Jean Dominique dans l'histoire ou la culture haïtienne ?",
    options: ["Personnage du folklore", "Père fondateur / figure de l'Indépendance", "Musicien", "Intellectuel / militant"],
    correct: 3
  },
  {
    q: "Jean-Claude Duvalier (Baby Doc) a marqué ou vécu principalement à quelle période ?",
    options: ["Fin XXe siècle (1970-2000)", "XIXe siècle", "Milieu XXe siècle (1930-1970)", "Début XXe siècle"],
    correct: 0
  },
  {
    q: "René Depestre est principalement associé à quel lieu ?",
    options: ["Port-au-Prince", "Dondon (Nord)", "Jacmel", "Nord (Bois-Caïman)"],
    correct: 2
  },
  {
    q: "Quand Edwidge Danticat a-t-elle été la plus active ou influente ?",
    options: ["Milieu XXe siècle (1930-1970)", "Époque contemporaine (2000 à aujourd'hui)", "Fin XXe siècle (1970-2000)", "Début XXe siècle"],
    correct: 1
  },
  {
    q: "François Duvalier (Papa Doc) a marqué ou vécu principalement à quelle période ?",
    options: ["Début XXe siècle", "Époque contemporaine (2000 à aujourd'hui)", "Milieu XXe siècle (1930-1970)", "XIXe siècle"],
    correct: 2
  },
  {
    q: "Dans quelle période de l'histoire haïtienne situe-t-on Jean-Robert Cadet ?",
    options: ["Fin XXe siècle (1970-2000)", "Époque contemporaine (2000 à aujourd'hui)", "XIXe siècle", "Révolution haïtienne (avant 1804)"],
    correct: 1
  },
  {
    q: "Comment classerait-on Dany Laferrière parmi les personnalités haïtiennes ?",
    options: ["Diplomate / personnalité internationale", "Écrivain", "Musicien", "Chef d'État"],
    correct: 1
  },
  {
    q: "Quelle est la nature du rôle joué par Philomé Obin ?",
    options: ["Intellectuel / militant", "Peintre / artiste visuel", "Écrivain", "Musicien"],
    correct: 1
  },
  {
    q: "Quelle période correspond le mieux à Myriam Merlet ?",
    options: ["Milieu XXe siècle (1930-1970)", "Fin XXe siècle (1970-2000)", "Époque contemporaine (2000 à aujourd'hui)", "XIXe siècle"],
    correct: 1
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Michael Brun ?",
    options: ["Port-au-Prince", "Petit-Goâve", "Nord (Arcahaie)", "Cap-Haïtien"],
    correct: 0
  },
  {
    q: "Pour quoi Jacques Roumain est-il surtout reconnu ?",
    options: ["Journaliste féministe pionnière en Haïti", "Auteur du roman « Gouverneurs de la rosée »", "Musicien haïtiano-américain, ex-membre du groupe The Fugees", "Peintre connu pour ses « villes imaginaires » aux couleurs vives"],
    correct: 1
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Toto Bissainthe ?",
    options: ["Port-au-Prince", "Nord (Bois-Caïman)", "Nord (Bataille de Vertières)", "Cap-Haïtien"],
    correct: 0
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Jean-Bertrand Aristide ?",
    options: ["National / légendaire", "Trou-du-Nord (Nord-Est)", "Bréda (Cap-Haïtien)", "Port-Salut"],
    correct: 3
  },
  {
    q: "Où situe-t-on l'histoire de Paul Magloire ?",
    options: ["Sud (Grande-Anse)", "Quartier-Morin (Nord)", "Saint-Marc", "Dondon (Nord)"],
    correct: 1
  },
  {
    q: "Quel lieu géographique évoque le plus Paul Magloire ?",
    options: ["Bréda (Cap-Haïtien)", "Marmelade (Artibonite)", "Quartier-Morin (Nord)", "Nord (Arcahaie)"],
    correct: 2
  },
  {
    q: "Quel rôle décrit le mieux Michael Brun dans l'histoire ou la culture haïtienne ?",
    options: ["Père fondateur / figure de l'Indépendance", "Athlète / sportif", "Musicien", "Personnage du folklore"],
    correct: 2
  },
  {
    q: "Dany Laferrière est principalement associé à quel lieu ?",
    options: ["Cap-Haïtien", "Port-au-Prince", "Trou-du-Nord (Nord-Est)", "Verrettes (Artibonite)"],
    correct: 1
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Duckens Nazon ?",
    options: ["Gonaïves", "Bréda (Cap-Haïtien)", "Anse-à-Veau", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Quelle étiquette correspond le mieux à Michel Martelly ?",
    options: ["Peintre / artiste visuel", "Intellectuel / militant", "Chef d'État", "Figure religieuse / vodou"],
    correct: 2
  },
  {
    q: "Quelle est la nature du rôle joué par Ti Jean ?",
    options: ["Intellectuel / militant", "Peintre / artiste visuel", "Musicien", "Personnage du folklore"],
    correct: 3
  },
  {
    q: "À quelle époque associe-t-on Leslie Manigat ?",
    options: ["Fin XXe siècle (1970-2000)", "Intemporel (figure du folklore/vodou)", "Époque contemporaine (2000 à aujourd'hui)", "Début XXe siècle"],
    correct: 0
  },
  {
    q: "De quel type de personnalité s'agit-il pour Yvonne Hakim-Rimpel ?",
    options: ["Personnage du folklore", "Athlète / sportif", "Intellectuel / militant", "Diplomate / personnalité internationale"],
    correct: 2
  },
  {
    q: "Quelle est l'époque de référence pour Wyclef Jean ?",
    options: ["Fin XXe siècle (1970-2000)", "Époque contemporaine (2000 à aujourd'hui)", "Révolution haïtienne (avant 1804)", "XIXe siècle"],
    correct: 1
  },
  {
    q: "Michaëlle Jean provient ou est rattachée à quelle zone ?",
    options: ["Dondon (Nord)", "Diaspora (Canada)", "Marmelade (Artibonite)", "Petit-Goâve"],
    correct: 1
  },
  {
    q: "À quelle époque associe-t-on Boniface Alexandre ?",
    options: ["Intemporel (figure du folklore/vodou)", "Révolution haïtienne (avant 1804)", "Époque contemporaine (2000 à aujourd'hui)", "Début XXe siècle"],
    correct: 2
  },
  {
    q: "Fabre Geffrard appartient à quel type de figure historique ou culturelle ?",
    options: ["Peintre / artiste visuel", "Chef d'État", "Écrivain", "Diplomate / personnalité internationale"],
    correct: 1
  },
  {
    q: "Pour quoi Jovenel Moïse est-il surtout reconnu ?",
    options: ["Ethnologue, auteur de « Ainsi parla l'oncle », père de l'indigénisme haïtien", "Président élu en 2016, assassiné en fonction en 2021", "Ancien prêtre devenu président à deux reprises", "Jeune héros malin des contes traditionnels haïtiens"],
    correct: 1
  },
  {
    q: "Quelle est l'époque de référence pour Oswald Durand ?",
    options: ["Intemporel (figure du folklore/vodou)", "Époque contemporaine (2000 à aujourd'hui)", "Début XXe siècle", "XIXe siècle"],
    correct: 3
  },
  {
    q: "Duckens Nazon provient ou est rattaché à quelle zone ?",
    options: ["Diaspora (New Jersey)", "Nord (Cap-Haïtien)", "Quartier-Morin (Nord)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Jean Price-Mars appartient à quel type de figure historique ou culturelle ?",
    options: ["Père fondateur / figure de l'Indépendance", "Athlète / sportif", "Intellectuel / militant", "Écrivain"],
    correct: 2
  },
  {
    q: "Dans quelle période de l'histoire haïtienne situe-t-on Yvonne Hakim-Rimpel ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Révolution haïtienne (avant 1804)", "Milieu XXe siècle (1930-1970)", "XIXe siècle"],
    correct: 2
  },
  {
    q: "Quelle est l'époque de référence pour Jovenel Moïse ?",
    options: ["Fin XXe siècle (1970-2000)", "Début XXe siècle", "Milieu XXe siècle (1930-1970)", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 3
  },
  {
    q: "Quelle période correspond le mieux à Ariel Henry ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Fin XXe siècle (1970-2000)", "Début XXe siècle", "Révolution haïtienne (avant 1804)"],
    correct: 0
  },
  {
    q: "Qu'est-ce qui rend Oswald Durand célèbre ou important ?",
    options: ["Proclama l'indépendance d'Haïti en 1804 et en devint le premier chef d'État", "Personnage rusé qui déjoue toujours son compère Bouki", "Poète national, auteur du célèbre poème « Choucoune »", "Poétesse haïtienne ayant vécu principalement en France"],
    correct: 2
  },
  {
    q: "Pour quelle raison Edwidge Danticat est-elle connue dans l'histoire ou la culture haïtienne ?",
    options: ["Compagnon de Vincent Ogé dans la lutte pour les droits des libres de couleur", "Romancière haïtiano-américaine, autrice de « Breath, Eyes, Memory »", "Écrivain, peintre et dramaturge, pionnier du spiralisme", "Président ayant modernisé l'éducation et les relations extérieures d'Haïti"],
    correct: 1
  },
  {
    q: "Quel fait marquant est associé à Coupé Cloué ?",
    options: ["Peintre naïf associé au Centre d'Art de Port-au-Prince", "Lwa gardien des carrefours et intermédiaire avec les autres esprits", "Militante féministe, cofondatrice d'organisations pour les droits des femmes", "Footballeur devenu icône du konpa avec l'Ensemble Select"],
    correct: 3
  },
  {
    q: "Damballah provient ou est rattaché à quelle zone ?",
    options: ["Port-au-Prince", "Verrettes (Artibonite)", "National / légendaire", "Jérémie (Grande-Anse)"],
    correct: 2
  },
  {
    q: "Comment reconnaît-on Wilson Bigaud parmi les autres personnalités haïtiennes ?",
    options: ["Peintre célèbre pour sa fresque à la Cathédrale Sainte-Trinité", "Prêtresse vodou associée à la cérémonie du Bois-Caïman", "Président ayant modernisé l'éducation et les relations extérieures d'Haïti", "Neurochirurgien devenu Premier ministre après l'assassinat de Jovenel Moïse"],
    correct: 0
  },
  {
    q: "Quel fait marquant est associé à Bouki ?",
    options: ["Ancien prêtre devenu président à deux reprises", "Président puis « Président à vie » d'Haïti de 1957 à 1971", "Personnage naïf et souvent trompé dans les contes populaires haïtiens", "Aurait cousu le premier drapeau haïtien en 1803"],
    correct: 2
  },
  {
    q: "Pour quoi Duckens Nazon est-il surtout reconnu ?",
    options: ["Proclama l'indépendance d'Haïti en 1804 et en devint le premier chef d'État", "Ancien prêtre devenu président à deux reprises", "Prêtre vodou considéré comme un déclencheur de la révolte des esclaves de 1791", "Attaquant international de l'équipe nationale de football d'Haïti"],
    correct: 3
  },
  {
    q: "Qu'est-ce qui rend Louis Joseph Janvier célèbre ou important ?",
    options: ["Écrivain et diplomate défenseur de la dignité haïtienne", "Proclama l'indépendance d'Haïti en 1804 et en devint le premier chef d'État", "Écrivain élu à l'Académie française", "Lwa des eaux et de la mer dans le vodou haïtien"],
    correct: 0
  },
  {
    q: "Où Garry Conille a-t-il vécu ou marqué l'histoire ?",
    options: ["Nord (Arcahaie)", "Gonaïves", "Anse-à-Veau", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Paul Magloire appartient à quelle période historique ?",
    options: ["Milieu XXe siècle (1930-1970)", "Début XXe siècle", "Fin XXe siècle (1970-2000)", "Intemporel (figure du folklore/vodou)"],
    correct: 0
  },
  {
    q: "À quelle époque associe-t-on Ariel Henry ?",
    options: ["Intemporel (figure du folklore/vodou)", "Époque contemporaine (2000 à aujourd'hui)", "Révolution haïtienne (avant 1804)", "Fin XXe siècle (1970-2000)"],
    correct: 1
  },
  {
    q: "D'où est originaire Alexandre Pétion, ou à quel lieu est-il le plus associé ?",
    options: ["Trou-du-Nord (Nord-Est)", "Hinche (Centre)", "Port-Salut", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Jean-Jacques Dessalines provient ou est rattaché à quelle zone ?",
    options: ["Diaspora (New Jersey)", "Nord (Grande-Rivière-du-Nord)", "Ravine-Sèche", "Gonaïves"],
    correct: 1
  },
  {
    q: "De quel type de personnalité s'agit-il pour Ti Jean ?",
    options: ["Père fondateur / figure de l'Indépendance", "Peintre / artiste visuel", "Diplomate / personnalité internationale", "Personnage du folklore"],
    correct: 3
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Jean-Bertrand Aristide ?",
    options: ["Aurait cousu le premier drapeau haïtien en 1803", "Peintre naïf associé au Centre d'Art de Port-au-Prince", "Ancien prêtre devenu président à deux reprises", "Prêtre vodou considéré comme un déclencheur de la révolte des esclaves de 1791"],
    correct: 2
  },
  {
    q: "François Capois (Capois-La-Mort) appartient à quelle période historique ?",
    options: ["Révolution haïtienne (avant 1804)", "Époque contemporaine (2000 à aujourd'hui)", "Début XXe siècle", "Milieu XXe siècle (1930-1970)"],
    correct: 0
  },
  {
    q: "Parmi les propositions suivantes, laquelle correspond à Sanite Bélair ?",
    options: ["Père fondateur / figure de l'Indépendance", "Chef d'État", "Figure religieuse / vodou", "Musicien"],
    correct: 0
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Wilson Bigaud ?",
    options: ["Port-au-Prince", "Quartier-Morin (Nord)", "Jacmel", "Nord (Bois-Caïman)"],
    correct: 0
  },
  {
    q: "Comment reconnaît-on Charlemagne Péralte parmi les autres personnalités haïtiennes ?",
    options: ["Poète et romancier, figure du mouvement Haïti Littéraire", "Chef de la résistance armée contre l'occupation américaine (1915-1934)", "Président puis empereur d'Haïti sous le nom de Faustin Ier", "Chanteur engagé devenu maire de Port-au-Prince"],
    correct: 1
  },
  {
    q: "Comment Michel Martelly est-il principalement connu ?",
    options: ["Diplomate / personnalité internationale", "Père fondateur / figure de l'Indépendance", "Chef d'État", "Musicien"],
    correct: 2
  },
  {
    q: "Où Catherine Flon a-t-elle vécu ou marqué l'histoire ?",
    options: ["Nord (Arcahaie)", "Diaspora (Canada)", "Anse-à-Veau", "Trou-du-Nord (Nord-Est)"],
    correct: 0
  },
  {
    q: "Quelle est la nature du rôle joué par Coupé Cloué ?",
    options: ["Musicien", "Père fondateur / figure de l'Indépendance", "Personnage du folklore", "Intellectuel / militant"],
    correct: 0
  },
  {
    q: "Où Faustin Soulouque a-t-il vécu ou marqué l'histoire ?",
    options: ["Petit-Goâve", "Port-au-Prince", "Trou-du-Nord (Nord-Est)", "Nord (Bois-Caïman)"],
    correct: 0
  },
  {
    q: "Comment Damballah est-il généralement présenté ?",
    options: ["Chef d'État", "Père fondateur / figure de l'Indépendance", "Athlète / sportif", "Figure religieuse / vodou"],
    correct: 3
  },
  {
    q: "Michel Martelly est principalement associé à quel lieu ?",
    options: ["Verrettes (Artibonite)", "Dondon (Nord)", "Port-au-Prince", "Nord (Grande-Rivière-du-Nord)"],
    correct: 2
  },
  {
    q: "Dans quelle catégorie situerait-on La Sirène (Lasirenn) ?",
    options: ["Figure religieuse / vodou", "Peintre / artiste visuel", "Personnage du folklore", "Père fondateur / figure de l'Indépendance"],
    correct: 0
  },
  {
    q: "Pour quelle raison Suzanne Comhaire-Sylvain est-elle connue dans l'histoire ou la culture haïtienne ?",
    options: ["Ancien chanteur de konpa devenu président de la République", "Première femme haïtienne docteure en lettres, anthropologue", "Seul président haïtien à avoir achevé deux mandats non consécutifs", "Lwa des morts et gardien des cimetières dans le vodou haïtien"],
    correct: 1
  },
  {
    q: "Benoît Batraville a marqué ou vécu principalement à quelle période ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Début XXe siècle", "XIXe siècle", "Milieu XXe siècle (1930-1970)"],
    correct: 1
  },
  {
    q: "Comment Jean-Robert Cadet est-il généralement présenté ?",
    options: ["Musicien", "Père fondateur / figure de l'Indépendance", "Personnage du folklore", "Écrivain"],
    correct: 3
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Sténio Vincent ?",
    options: ["Président ayant négocié la fin de l'occupation américaine", "Chef militaire et politique, figure centrale de la Révolution haïtienne", "Romancière haïtiano-américaine, autrice de « Breath, Eyes, Memory »", "Général célèbre pour sa bravoure à la bataille de Vertières"],
    correct: 0
  },
  {
    q: "Dans quelle catégorie situerait-on Anthony Phelps ?",
    options: ["Écrivain", "Intellectuel / militant", "Chef d'État", "Peintre / artiste visuel"],
    correct: 0
  },
  {
    q: "Comment Jacques Stephen Alexis est-il généralement présenté ?",
    options: ["Chef d'État", "Écrivain", "Peintre / artiste visuel", "Athlète / sportif"],
    correct: 1
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Alexandre Pétion ?",
    options: ["Nord (Grande-Rivière-du-Nord)", "Port-au-Prince", "Dondon (Nord)", "Jérémie (Grande-Anse)"],
    correct: 1
  },
  {
    q: "Pour quelle raison Frankétienne est-il connu dans l'histoire ou la culture haïtienne ?",
    options: ["Jeune héros malin des contes traditionnels haïtiens", "Compagnon de Vincent Ogé dans la lutte pour les droits des libres de couleur", "Se proclama roi d'Haïti et fit construire la Citadelle Laferrière", "Écrivain, peintre et dramaturge, pionnier du spiralisme"],
    correct: 3
  },
  {
    q: "Quelle est l'époque de référence pour René Préval ?",
    options: ["XIXe siècle", "Milieu XXe siècle (1930-1970)", "Fin XXe siècle (1970-2000)", "Intemporel (figure du folklore/vodou)"],
    correct: 2
  },
  {
    q: "Quel lieu géographique évoque le plus Ida Faubert ?",
    options: ["Port-au-Prince", "Jérémie (Grande-Anse)", "Bréda (Cap-Haïtien)", "Anse-à-Veau"],
    correct: 0
  },
  {
    q: "Manno Charlemagne a marqué ou vécu principalement à quelle période ?",
    options: ["Fin XXe siècle (1970-2000)", "XIXe siècle", "Début XXe siècle", "Révolution haïtienne (avant 1804)"],
    correct: 0
  },
  {
    q: "Duckens Nazon appartient à quel type de figure historique ou culturelle ?",
    options: ["Peintre / artiste visuel", "Athlète / sportif", "Diplomate / personnalité internationale", "Intellectuel / militant"],
    correct: 1
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Jean-Robert Cadet ?",
    options: ["Ancien prêtre devenu président à deux reprises", "Lwa gardien des carrefours et intermédiaire avec les autres esprits", "Auteur du récit autobiographique sur son enfance de « restavèk »", "Chanteur de konpa social devenu une icône engagée"],
    correct: 2
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Oswald Durand ?",
    options: ["Saint-Marc", "Hinche (Centre)", "Dondon (Nord)", "Cap-Haïtien"],
    correct: 3
  },
  {
    q: "Pour quoi Cécile Fatiman est-elle surtout reconnue ?",
    options: ["Chanteuse surnommée « la Grande Dame de la chanson haïtienne »", "Autrice du triptyque romanesque « Amour, Colère et Folie »", "Compagnon de Vincent Ogé dans la lutte pour les droits des libres de couleur", "Prêtresse vodou associée à la cérémonie du Bois-Caïman"],
    correct: 3
  },
  {
    q: "D'où est originaire La Sirène (Lasirenn), ou à quel lieu est-elle le plus associée ?",
    options: ["National / légendaire", "Ravine-Sèche", "Nord (Cap-Haïtien)", "Plateau Central"],
    correct: 0
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Kettly Mars ?",
    options: ["Chanteuse et actrice, figure de la chanson racine haïtienne", "Lwa des morts et gardien des cimetières dans le vodou haïtien", "Neurochirurgien devenu Premier ministre après l'assassinat de Jovenel Moïse", "Romancière contemporaine, autrice de « Saisons sauvages »"],
    correct: 3
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à René Préval ?",
    options: ["National / légendaire", "Port-Salut", "Port-au-Prince", "Marmelade (Artibonite)"],
    correct: 3
  },
  {
    q: "Où situe-t-on l'histoire de Boniface Alexandre ?",
    options: ["Port-au-Prince", "Jacmel", "Grande Rivière du Nord", "Jérémie (Grande-Anse)"],
    correct: 0
  },
  {
    q: "Quel lieu géographique évoque le plus Ertha Pascal-Trouillot ?",
    options: ["Petit-Goâve", "Plateau Central", "Diaspora (Floride)", "Trou-du-Nord (Nord-Est)"],
    correct: 0
  },
  {
    q: "De quel type de personnalité s'agit-il pour Michael Brun ?",
    options: ["Musicien", "Peintre / artiste visuel", "Figure religieuse / vodou", "Écrivain"],
    correct: 0
  },
  {
    q: "Andre Berto provient ou est rattaché à quelle zone ?",
    options: ["Diaspora (Floride)", "Plateau Central", "Verrettes (Artibonite)", "Diaspora (New Jersey)"],
    correct: 0
  },
  {
    q: "Quel rôle décrit le mieux Ezili Freda dans l'histoire ou la culture haïtienne ?",
    options: ["Peintre / artiste visuel", "Figure religieuse / vodou", "Écrivain", "Père fondateur / figure de l'Indépendance"],
    correct: 1
  },
  {
    q: "Quelle est la nature du rôle joué par René Préval ?",
    options: ["Personnage du folklore", "Père fondateur / figure de l'Indépendance", "Figure religieuse / vodou", "Chef d'État"],
    correct: 3
  },
  {
    q: "Henri Christophe est principalement associé à quel lieu ?",
    options: ["Diaspora (Canada)", "Dondon (Nord)", "Grande Rivière du Nord", "Nord (Cap-Haïtien)"],
    correct: 3
  },
  {
    q: "Emeline Michel appartient à quelle période historique ?",
    options: ["XIXe siècle", "Intemporel (figure du folklore/vodou)", "Fin XXe siècle (1970-2000)", "Début XXe siècle"],
    correct: 2
  },
  {
    q: "Comment Bouki est-il généralement présenté ?",
    options: ["Musicien", "Personnage du folklore", "Figure religieuse / vodou", "Chef d'État"],
    correct: 1
  },
  {
    q: "Pour quelle raison Duckens Nazon est-il connu dans l'histoire ou la culture haïtienne ?",
    options: ["Chef de la résistance armée contre l'occupation américaine (1915-1934)", "Romancier connu pour ses œuvres mêlant réalisme et fantastique", "Président ayant unifié l'ensemble de l'île sous administration haïtienne", "Attaquant international de l'équipe nationale de football d'Haïti"],
    correct: 3
  },
  {
    q: "Où Jean-Jacques Dessalines a-t-il vécu ou marqué l'histoire ?",
    options: ["Nord (Grande-Rivière-du-Nord)", "Port-au-Prince", "Saint-Marc", "Petit-Goâve"],
    correct: 0
  },
  {
    q: "Comment Oswald Durand est-il généralement présenté ?",
    options: ["Musicien", "Écrivain", "Chef d'État", "Athlète / sportif"],
    correct: 1
  },
  {
    q: "Comment reconnaît-on Coupé Cloué parmi les autres personnalités haïtiennes ?",
    options: ["Footballeur devenu icône du konpa avec l'Ensemble Select", "Homme de couleur libre ayant mené une révolte avant l'indépendance", "Boxeur professionnel haïtiano-américain, ancien champion du monde", "Romancier et médecin, auteur du « réalisme merveilleux »"],
    correct: 0
  },
  {
    q: "Comment Henri Christophe est-il généralement présenté ?",
    options: ["Père fondateur / figure de l'Indépendance", "Peintre / artiste visuel", "Intellectuel / militant", "Figure religieuse / vodou"],
    correct: 0
  },
  {
    q: "Qu'est-ce qui rend Charles Oscar Étienne (Jean-Baptiste Chavannes) célèbre ou important ?",
    options: ["Lwa gardien des carrefours et intermédiaire avec les autres esprits", "Compagnon de Vincent Ogé dans la lutte pour les droits des libres de couleur", "Personnage naïf et souvent trompé dans les contes populaires haïtiens", "Romancier connu pour ses œuvres mêlant réalisme et fantastique"],
    correct: 1
  },
  {
    q: "Quel fait marquant est associé à Henri Christophe ?",
    options: ["Figure fondatrice de la peinture naïve haïtienne", "Personnage naïf et souvent trompé dans les contes populaires haïtiens", "Lwa protecteur de l'agriculture et des paysans dans le vodou haïtien", "Se proclama roi d'Haïti et fit construire la Citadelle Laferrière"],
    correct: 3
  },
  {
    q: "Quel fait marquant est associé à Ogou ?",
    options: ["Attaquant international de l'équipe nationale de football d'Haïti", "Lwa guerrier associé au fer et à la force dans le vodou haïtien", "Personnage naïf et souvent trompé dans les contes populaires haïtiens", "Footballeur devenu icône du konpa avec l'Ensemble Select"],
    correct: 1
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Edwidge Danticat ?",
    options: ["Bréda (Cap-Haïtien)", "Port-au-Prince", "Jacmel", "Cap-Haïtien"],
    correct: 2
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Jean-Robert Cadet ?",
    options: ["Nord (Bataille de Vertières)", "Grande Rivière du Nord", "Diaspora (États-Unis)", "Anse-à-Veau"],
    correct: 2
  },
  {
    q: "Jacques Stephen Alexis a marqué ou vécu principalement à quelle période ?",
    options: ["Révolution haïtienne (avant 1804)", "XIXe siècle", "Milieu XXe siècle (1930-1970)", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 2
  },
  {
    q: "Quelle est la nature du rôle joué par Jean-Bertrand Aristide ?",
    options: ["Chef d'État", "Père fondateur / figure de l'Indépendance", "Peintre / artiste visuel", "Personnage du folklore"],
    correct: 0
  },
  {
    q: "Benoît Batraville est principalement associé à quel lieu ?",
    options: ["Sud (Grande-Anse)", "Plateau Central", "Diaspora (États-Unis)", "Diaspora (Canada)"],
    correct: 1
  },
  {
    q: "Quel rôle décrit le mieux Frankétienne dans l'histoire ou la culture haïtienne ?",
    options: ["Peintre / artiste visuel", "Père fondateur / figure de l'Indépendance", "Figure religieuse / vodou", "Écrivain"],
    correct: 3
  },
  {
    q: "Pour quoi Charles Oscar Étienne (Jean-Baptiste Chavannes) est-il surtout reconnu ?",
    options: ["Poète et romancier, figure du mouvement Haïti Littéraire", "Président ayant unifié l'ensemble de l'île sous administration haïtienne", "Compagnon de Vincent Ogé dans la lutte pour les droits des libres de couleur", "Lwa gardien des carrefours et intermédiaire avec les autres esprits"],
    correct: 2
  },
  {
    q: "Parmi les propositions suivantes, laquelle correspond à Michael Brun ?",
    options: ["Écrivain", "Diplomate / personnalité internationale", "Musicien", "Intellectuel / militant"],
    correct: 2
  },
  {
    q: "Jean Dominique est principalement associé à quel lieu ?",
    options: ["Jacmel", "Nord (Bois-Caïman)", "Nord (Grande-Rivière-du-Nord)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Comment classerait-on Préfète Duffaut parmi les personnalités haïtiennes ?",
    options: ["Peintre / artiste visuel", "Père fondateur / figure de l'Indépendance", "Chef d'État", "Athlète / sportif"],
    correct: 0
  },
  {
    q: "Quelle période correspond le mieux à Manno Charlemagne ?",
    options: ["Intemporel (figure du folklore/vodou)", "Fin XXe siècle (1970-2000)", "Époque contemporaine (2000 à aujourd'hui)", "Milieu XXe siècle (1930-1970)"],
    correct: 1
  },
  {
    q: "De quel type de personnalité s'agit-il pour Garry Conille ?",
    options: ["Père fondateur / figure de l'Indépendance", "Chef d'État", "Intellectuel / militant", "Athlète / sportif"],
    correct: 1
  },
  {
    q: "À quel moment de l'histoire haïtienne rattache-t-on Kettly Mars ?",
    options: ["Début XXe siècle", "Milieu XXe siècle (1930-1970)", "Époque contemporaine (2000 à aujourd'hui)", "Intemporel (figure du folklore/vodou)"],
    correct: 2
  },
  {
    q: "Quand Jovenel Moïse a-t-il été le plus actif ou influent ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Début XXe siècle", "Intemporel (figure du folklore/vodou)", "XIXe siècle"],
    correct: 0
  },
  {
    q: "Myriam Merlet a marqué ou vécu principalement à quelle période ?",
    options: ["Début XXe siècle", "Intemporel (figure du folklore/vodou)", "Fin XXe siècle (1970-2000)", "XIXe siècle"],
    correct: 2
  },
  {
    q: "Kettly Mars a marqué ou vécu principalement à quelle période ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "XIXe siècle", "Révolution haïtienne (avant 1804)", "Milieu XXe siècle (1930-1970)"],
    correct: 0
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Préfète Duffaut ?",
    options: ["Port-au-Prince", "Nord (Grande-Rivière-du-Nord)", "Hinche (Centre)", "Jacmel"],
    correct: 3
  },
  {
    q: "Pour quoi Kettly Mars est-elle surtout reconnue ?",
    options: ["Président par intérim après le départ d'Aristide en 2004", "Autrice du triptyque romanesque « Amour, Colère et Folie »", "Compagnon de Vincent Ogé dans la lutte pour les droits des libres de couleur", "Romancière contemporaine, autrice de « Saisons sauvages »"],
    correct: 3
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Kettly Mars ?",
    options: ["Succéda à son père comme « Président à vie » de 1971 à 1986", "Romancière contemporaine, autrice de « Saisons sauvages »", "Pivot haïtiano-canadien ayant joué en NBA", "Chef militaire et politique, figure centrale de la Révolution haïtienne"],
    correct: 1
  },
  {
    q: "À quelle époque associe-t-on Michaëlle Jean ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Milieu XXe siècle (1930-1970)", "Fin XXe siècle (1970-2000)", "Révolution haïtienne (avant 1804)"],
    correct: 0
  },
  {
    q: "Toussaint Louverture provient ou est rattaché à quelle zone ?",
    options: ["Gonaïves", "Trou-du-Nord (Nord-Est)", "Hinche (Centre)", "Bréda (Cap-Haïtien)"],
    correct: 3
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Jacques Roumain ?",
    options: ["Poète et romancier, figure du mouvement Haïti Littéraire", "Artiste contemporain mêlant histoire haïtienne et symbolisme vodou", "Auteur du roman « Gouverneurs de la rosée »", "Seul président haïtien à avoir achevé deux mandats non consécutifs"],
    correct: 2
  },
  {
    q: "Où situe-t-on l'histoire de Philomé Obin ?",
    options: ["Marmelade (Artibonite)", "Saint-Marc", "Jacmel", "Cap-Haïtien"],
    correct: 3
  },
  {
    q: "Castera Bazile a marqué ou vécu principalement à quelle période ?",
    options: ["Début XXe siècle", "Milieu XXe siècle (1930-1970)", "XIXe siècle", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 1
  },
  {
    q: "Comment reconnaît-on Myriam Merlet parmi les autres personnalités haïtiennes ?",
    options: ["Ancien chanteur de konpa devenu président de la République", "Président ayant modernisé l'éducation et les relations extérieures d'Haïti", "Militante féministe, cofondatrice d'organisations pour les droits des femmes", "Personnage naïf et souvent trompé dans les contes populaires haïtiens"],
    correct: 2
  },
  {
    q: "Quelle période correspond le mieux à Edwidge Danticat ?",
    options: ["XIXe siècle", "Intemporel (figure du folklore/vodou)", "Fin XXe siècle (1970-2000)", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 3
  },
  {
    q: "Comment classerait-on Ertha Pascal-Trouillot parmi les personnalités haïtiennes ?",
    options: ["Chef d'État", "Peintre / artiste visuel", "Père fondateur / figure de l'Indépendance", "Écrivain"],
    correct: 0
  },
  {
    q: "Coupé Cloué appartient à quel type de figure historique ou culturelle ?",
    options: ["Intellectuel / militant", "Figure religieuse / vodou", "Personnage du folklore", "Musicien"],
    correct: 3
  },
  {
    q: "À quel moment de l'histoire haïtienne rattache-t-on Andre Berto ?",
    options: ["Révolution haïtienne (avant 1804)", "Intemporel (figure du folklore/vodou)", "Milieu XXe siècle (1930-1970)", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 3
  },
  {
    q: "À quel moment de l'histoire haïtienne rattache-t-on Ida Faubert ?",
    options: ["Milieu XXe siècle (1930-1970)", "Fin XXe siècle (1970-2000)", "XIXe siècle", "Début XXe siècle"],
    correct: 3
  },
  {
    q: "Comment reconnaît-on Ezili Freda parmi les autres personnalités haïtiennes ?",
    options: ["Général célèbre pour sa bravoure à la bataille de Vertières", "Écrivain et diplomate défenseur de la dignité haïtienne", "Chanteuse surnommée « la Grande Dame de la chanson haïtienne »", "Lwa associée à l'amour, la beauté et le luxe dans le vodou haïtien"],
    correct: 3
  },
  {
    q: "Comment Alexandre Pétion est-il principalement connu ?",
    options: ["Athlète / sportif", "Père fondateur / figure de l'Indépendance", "Musicien", "Personnage du folklore"],
    correct: 1
  },
  {
    q: "Ogou provient ou est rattaché à quelle zone ?",
    options: ["Trou-du-Nord (Nord-Est)", "Saint-Marc", "Plateau Central", "National / légendaire"],
    correct: 3
  },
  {
    q: "Pour quoi Papa Legba est-il surtout reconnu ?",
    options: ["Anthropologue, auteur de « De l'égalité des races humaines »", "Compagnon de Vincent Ogé dans la lutte pour les droits des libres de couleur", "Président élu en 2016, assassiné en fonction en 2021", "Lwa gardien des carrefours et intermédiaire avec les autres esprits"],
    correct: 3
  },
  {
    q: "Myriam Merlet est principalement associée à quel lieu ?",
    options: ["Port-au-Prince", "Verrettes (Artibonite)", "Diaspora (Floride)", "Dondon (Nord)"],
    correct: 0
  },
  {
    q: "Catherine Flon est principalement associée à quel lieu ?",
    options: ["Diaspora (Canada)", "Nord (Arcahaie)", "Saint-Marc", "Plateau Central"],
    correct: 1
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Charles Oscar Étienne (Jean-Baptiste Chavannes) ?",
    options: ["Nord (Bataille de Vertières)", "Port-au-Prince", "Trou-du-Nord (Nord-Est)", "Sud (Grande-Anse)"],
    correct: 3
  },
  {
    q: "Comment reconnaît-on Yvonne Hakim-Rimpel parmi les autres personnalités haïtiennes ?",
    options: ["Chanteuse surnommée « la Grande Dame de la chanson haïtienne »", "Journaliste féministe pionnière en Haïti", "Général célèbre pour sa bravoure à la bataille de Vertières", "Lwa des morts et gardien des cimetières dans le vodou haïtien"],
    correct: 1
  },
  {
    q: "Qu'est-ce qui rend Henri Christophe célèbre ou important ?",
    options: ["Se proclama roi d'Haïti et fit construire la Citadelle Laferrière", "Lwa guerrier associé au fer et à la force dans le vodou haïtien", "Président par intérim après le départ d'Aristide en 2004", "Footballeur ayant marqué contre l'Italie à la Coupe du monde 1974"],
    correct: 0
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Ti Jean ?",
    options: ["Jeune héros malin des contes traditionnels haïtiens", "Lwa des eaux et de la mer dans le vodou haïtien", "Chef de la résistance armée contre l'occupation américaine (1915-1934)", "Chanteur engagé devenu maire de Port-au-Prince"],
    correct: 0
  },
  {
    q: "À quelle époque associe-t-on Jean-Jacques Dessalines ?",
    options: ["Début XXe siècle", "XIXe siècle", "Époque contemporaine (2000 à aujourd'hui)", "Révolution haïtienne (avant 1804)"],
    correct: 3
  },
  {
    q: "Parmi les propositions suivantes, laquelle correspond à Baron Samedi ?",
    options: ["Figure religieuse / vodou", "Peintre / artiste visuel", "Chef d'État", "Athlète / sportif"],
    correct: 0
  },
  {
    q: "Quel élément biographique distingue Frankétienne ?",
    options: ["Écrivain, peintre et dramaturge, pionnier du spiralisme", "Proclama l'indépendance d'Haïti en 1804 et en devint le premier chef d'État", "Autrice du triptyque romanesque « Amour, Colère et Folie »", "Président puis empereur d'Haïti sous le nom de Faustin Ier"],
    correct: 0
  },
  {
    q: "De quel type de personnalité s'agit-il pour Jean-Bertrand Aristide ?",
    options: ["Musicien", "Athlète / sportif", "Chef d'État", "Peintre / artiste visuel"],
    correct: 2
  },
  {
    q: "À quelle époque associe-t-on Jean-Pierre Boyer ?",
    options: ["XIXe siècle", "Révolution haïtienne (avant 1804)", "Époque contemporaine (2000 à aujourd'hui)", "Intemporel (figure du folklore/vodou)"],
    correct: 0
  },
  {
    q: "Quel élément biographique distingue Ida Faubert ?",
    options: ["Romancière haïtiano-américaine, autrice de « Breath, Eyes, Memory »", "Chef de file de l'école du Cap dans la peinture haïtienne", "Journaliste féministe pionnière en Haïti", "Poétesse haïtienne ayant vécu principalement en France"],
    correct: 3
  },
  {
    q: "Dans quelle période de l'histoire haïtienne situe-t-on Michaëlle Jean ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Fin XXe siècle (1970-2000)", "Intemporel (figure du folklore/vodou)", "Début XXe siècle"],
    correct: 0
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Hector Hyppolite ?",
    options: ["Marmelade (Artibonite)", "Saint-Marc", "Nord (Bois-Caïman)", "Quartier-Morin (Nord)"],
    correct: 1
  },
  {
    q: "Pour quoi Jean Dominique est-il surtout reconnu ?",
    options: ["Président ayant modernisé l'éducation et les relations extérieures d'Haïti", "Ancien chanteur de konpa devenu président de la République", "Journaliste et directeur de Radio Haïti Inter, assassiné en 2000", "DJ et producteur fusionnant konpa et musique électronique"],
    correct: 2
  },
  {
    q: "Dans quelle période de l'histoire haïtienne situe-t-on Michael Brun ?",
    options: ["Milieu XXe siècle (1930-1970)", "Époque contemporaine (2000 à aujourd'hui)", "Intemporel (figure du folklore/vodou)", "XIXe siècle"],
    correct: 1
  },
  {
    q: "Quel fait marquant est associé à Dany Laferrière ?",
    options: ["Militaire devenu président dans les années 1950", "Compagnon de Vincent Ogé dans la lutte pour les droits des libres de couleur", "Écrivain élu à l'Académie française", "Président puis « Président à vie » d'Haïti de 1957 à 1971"],
    correct: 2
  },
  {
    q: "Comment Leslie Manigat est-il principalement connu ?",
    options: ["Chef d'État", "Athlète / sportif", "Figure religieuse / vodou", "Père fondateur / figure de l'Indépendance"],
    correct: 0
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Duckens Nazon ?",
    options: ["Attaquant international de l'équipe nationale de football d'Haïti", "Président élu en 2016, assassiné en fonction en 2021", "Anthropologue, auteur de « De l'égalité des races humaines »", "Auteur du récit autobiographique sur son enfance de « restavèk »"],
    correct: 0
  },
  {
    q: "Emmanuel Sanon est principalement associé à quel lieu ?",
    options: ["Nord (Arcahaie)", "Jacmel", "Port-au-Prince", "Diaspora (New Jersey)"],
    correct: 2
  },
  {
    q: "Comment classerait-on Papa Legba parmi les personnalités haïtiennes ?",
    options: ["Musicien", "Personnage du folklore", "Figure religieuse / vodou", "Athlète / sportif"],
    correct: 2
  },
  {
    q: "Samuel Dalembert a marqué ou vécu principalement à quelle période ?",
    options: ["Fin XXe siècle (1970-2000)", "Révolution haïtienne (avant 1804)", "Début XXe siècle", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 3
  },
  {
    q: "À quel moment de l'histoire haïtienne rattache-t-on Jean-Claude Duvalier (Baby Doc) ?",
    options: ["Milieu XXe siècle (1930-1970)", "Fin XXe siècle (1970-2000)", "Début XXe siècle", "Intemporel (figure du folklore/vodou)"],
    correct: 1
  },
  {
    q: "Dans quelle catégorie situerait-on Garry Conille ?",
    options: ["Peintre / artiste visuel", "Chef d'État", "Intellectuel / militant", "Personnage du folklore"],
    correct: 1
  },
  {
    q: "Paul Magloire provient ou est rattaché à quelle zone ?",
    options: ["Port-au-Prince", "Diaspora (États-Unis)", "Ravine-Sèche", "Quartier-Morin (Nord)"],
    correct: 3
  },
  {
    q: "Quel lieu géographique évoque le plus Préfète Duffaut ?",
    options: ["Port-au-Prince", "Quartier-Morin (Nord)", "National / légendaire", "Jacmel"],
    correct: 3
  },
  {
    q: "Cécile Fatiman est principalement associée à quel lieu ?",
    options: ["Quartier-Morin (Nord)", "Nord (Bois-Caïman)", "Bréda (Cap-Haïtien)", "Marmelade (Artibonite)"],
    correct: 1
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Malice ?",
    options: ["Port-au-Prince", "Anse-à-Veau", "Diaspora (États-Unis)", "National / légendaire"],
    correct: 3
  },
  {
    q: "Quelle est la nature du rôle joué par Toussaint Louverture ?",
    options: ["Père fondateur / figure de l'Indépendance", "Personnage du folklore", "Figure religieuse / vodou", "Écrivain"],
    correct: 0
  },
  {
    q: "Quel lieu géographique évoque le plus Emmanuel Sanon ?",
    options: ["Dondon (Nord)", "Nord (Bataille de Vertières)", "Port-au-Prince", "Jacmel"],
    correct: 2
  },
  {
    q: "Quel lieu géographique évoque le plus Jean-Claude Duvalier (Baby Doc) ?",
    options: ["Port-Salut", "Ravine-Sèche", "Port-au-Prince", "Sud (Grande-Anse)"],
    correct: 2
  },
  {
    q: "Qu'est-ce qui rend Jean-Bertrand Aristide célèbre ou important ?",
    options: ["Ancien prêtre devenu président à deux reprises", "Prêtresse vodou associée à la cérémonie du Bois-Caïman", "Poète et romancier, prix Renaudot pour « Hadriana dans tous mes rêves »", "Artiste contemporain mêlant histoire haïtienne et symbolisme vodou"],
    correct: 0
  },
  {
    q: "Dans quelle période de l'histoire haïtienne situe-t-on René Préval ?",
    options: ["Milieu XXe siècle (1930-1970)", "Intemporel (figure du folklore/vodou)", "Fin XXe siècle (1970-2000)", "XIXe siècle"],
    correct: 2
  },
  {
    q: "Quand Jean-Bertrand Aristide a-t-il été le plus actif ou influent ?",
    options: ["Fin XXe siècle (1970-2000)", "Intemporel (figure du folklore/vodou)", "Début XXe siècle", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 0
  },
  {
    q: "Quel lieu géographique évoque le plus Duckens Nazon ?",
    options: ["Port-au-Prince", "Dondon (Nord)", "Jacmel", "Saint-Marc"],
    correct: 0
  },
  {
    q: "D'où est originaire Emeline Michel, ou à quel lieu est-elle le plus associée ?",
    options: ["National / légendaire", "Gonaïves", "Hinche (Centre)", "Petit-Goâve"],
    correct: 1
  },
  {
    q: "Pour quoi Jean-Pierre Boyer est-il surtout reconnu ?",
    options: ["Peintre célèbre pour sa fresque à la Cathédrale Sainte-Trinité", "Militante féministe, cofondatrice d'organisations pour les droits des femmes", "Chanteur de konpa social devenu une icône engagée", "Président ayant unifié l'ensemble de l'île sous administration haïtienne"],
    correct: 3
  },
  {
    q: "Comment reconnaît-on Jovenel Moïse parmi les autres personnalités haïtiennes ?",
    options: ["Attaquant international de l'équipe nationale de football d'Haïti", "DJ et producteur fusionnant konpa et musique électronique", "Figure fondatrice de la peinture naïve haïtienne", "Président élu en 2016, assassiné en fonction en 2021"],
    correct: 3
  },
  {
    q: "Quel élément biographique distingue Préfète Duffaut ?",
    options: ["Boxeur professionnel haïtiano-américain, ancien champion du monde", "Président par intérim après le départ d'Aristide en 2004", "Auteur du récit autobiographique sur son enfance de « restavèk »", "Peintre connu pour ses « villes imaginaires » aux couleurs vives"],
    correct: 3
  },
  {
    q: "Dans quelle période de l'histoire haïtienne situe-t-on Ti Manno ?",
    options: ["Révolution haïtienne (avant 1804)", "Époque contemporaine (2000 à aujourd'hui)", "Intemporel (figure du folklore/vodou)", "Fin XXe siècle (1970-2000)"],
    correct: 3
  },
  {
    q: "Où Ti Manno a-t-il vécu ou marqué l'histoire ?",
    options: ["Port-au-Prince", "Diaspora (Floride)", "Port-Salut", "Grande Rivière du Nord"],
    correct: 0
  },
  {
    q: "Qu'est-ce qui rend Ti Jean célèbre ou important ?",
    options: ["Lwa serpent, considéré comme l'un des esprits les plus anciens du vodou", "Poétesse haïtienne ayant vécu principalement en France", "Jeune héros malin des contes traditionnels haïtiens", "Poète et romancier, prix Renaudot pour « Hadriana dans tous mes rêves »"],
    correct: 2
  },
  {
    q: "Quand Ariel Henry a-t-il été le plus actif ou influent ?",
    options: ["Intemporel (figure du folklore/vodou)", "Époque contemporaine (2000 à aujourd'hui)", "Milieu XXe siècle (1930-1970)", "Fin XXe siècle (1970-2000)"],
    correct: 1
  },
  {
    q: "Parmi les propositions suivantes, laquelle correspond à Charles Oscar Étienne (Jean-Baptiste Chavannes) ?",
    options: ["Musicien", "Athlète / sportif", "Père fondateur / figure de l'Indépendance", "Personnage du folklore"],
    correct: 2
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Jean-Pierre Boyer ?",
    options: ["Président ayant unifié l'ensemble de l'île sous administration haïtienne", "Poète et romancier, prix Renaudot pour « Hadriana dans tous mes rêves »", "Président puis « Président à vie » d'Haïti de 1957 à 1971", "Général célèbre pour sa bravoure à la bataille de Vertières"],
    correct: 0
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux René Préval ?",
    options: ["Président par intérim après le départ d'Aristide en 2004", "Anthropologue, auteur de « De l'égalité des races humaines »", "Seul président haïtien à avoir achevé deux mandats non consécutifs", "Lwa guerrier associé au fer et à la force dans le vodou haïtien"],
    correct: 2
  },
  {
    q: "Quelle étiquette correspond le mieux à Vincent Ogé ?",
    options: ["Athlète / sportif", "Personnage du folklore", "Père fondateur / figure de l'Indépendance", "Diplomate / personnalité internationale"],
    correct: 2
  },
  {
    q: "Dans quelle catégorie situerait-on Louis Joseph Janvier ?",
    options: ["Figure religieuse / vodou", "Chef d'État", "Personnage du folklore", "Intellectuel / militant"],
    correct: 3
  },
  {
    q: "Pour quoi Dany Laferrière est-il surtout reconnu ?",
    options: ["Écrivain élu à l'Académie française", "Seul président haïtien à avoir achevé deux mandats non consécutifs", "Poétesse haïtienne ayant vécu principalement en France", "Neurochirurgien devenu Premier ministre après l'assassinat de Jovenel Moïse"],
    correct: 0
  },
  {
    q: "Qu'est-ce qui rend Yvonne Hakim-Rimpel célèbre ou importante ?",
    options: ["Autrice du triptyque romanesque « Amour, Colère et Folie »", "Musicien haïtiano-américain, ex-membre du groupe The Fugees", "Militante féministe, cofondatrice d'organisations pour les droits des femmes", "Journaliste féministe pionnière en Haïti"],
    correct: 3
  },
  {
    q: "Comment Wilson Bigaud est-il principalement connu ?",
    options: ["Chef d'État", "Peintre / artiste visuel", "Intellectuel / militant", "Musicien"],
    correct: 1
  },
  {
    q: "Dans quelle catégorie situerait-on Damballah ?",
    options: ["Personnage du folklore", "Figure religieuse / vodou", "Père fondateur / figure de l'Indépendance", "Peintre / artiste visuel"],
    correct: 1
  },
  {
    q: "Anténor Firmin est principalement associé à quel lieu ?",
    options: ["Nord (Cap-Haïtien)", "Port-Salut", "Cap-Haïtien", "Diaspora (Canada)"],
    correct: 2
  },
  {
    q: "Quel lieu géographique évoque le plus Suzanne Comhaire-Sylvain ?",
    options: ["Port-au-Prince", "Plateau Central", "Nord (Arcahaie)", "Port-Salut"],
    correct: 0
  },
  {
    q: "Pour quoi Charlemagne Péralte est-il surtout reconnu ?",
    options: ["Attaquant international de l'équipe nationale de football d'Haïti", "Lwa serpent, considéré comme l'un des esprits les plus anciens du vodou", "Personnage rusé qui déjoue toujours son compère Bouki", "Chef de la résistance armée contre l'occupation américaine (1915-1934)"],
    correct: 3
  },
  {
    q: "Pour quelle raison Charlemagne Péralte est-il connu dans l'histoire ou la culture haïtienne ?",
    options: ["Chef de la résistance armée contre l'occupation américaine (1915-1934)", "Premier président de la République d'Haïti (partie Sud)", "Président élu en 2016, assassiné en fonction en 2021", "Chef de file de l'école du Cap dans la peinture haïtienne"],
    correct: 0
  },
  {
    q: "Parmi les propositions suivantes, laquelle correspond à Edwidge Danticat ?",
    options: ["Écrivain", "Intellectuel / militant", "Musicien", "Père fondateur / figure de l'Indépendance"],
    correct: 0
  },
  {
    q: "Quel rôle décrit le mieux Vincent Ogé dans l'histoire ou la culture haïtienne ?",
    options: ["Figure religieuse / vodou", "Peintre / artiste visuel", "Père fondateur / figure de l'Indépendance", "Athlète / sportif"],
    correct: 2
  },
  {
    q: "Où Jean Price-Mars a-t-il vécu ou marqué l'histoire ?",
    options: ["Diaspora (New Jersey)", "Port-au-Prince", "Trou-du-Nord (Nord-Est)", "Grande Rivière du Nord"],
    correct: 3
  },
  {
    q: "Comment Myriam Merlet est-elle principalement connue ?",
    options: ["Intellectuel / militant", "Écrivain", "Père fondateur / figure de l'Indépendance", "Peintre / artiste visuel"],
    correct: 0
  },
  {
    q: "Qu'est-ce qui rend Papa Legba célèbre ou important ?",
    options: ["Peintre ayant participé aux fresques de la Cathédrale Sainte-Trinité", "Poétesse haïtienne ayant vécu principalement en France", "Lwa gardien des carrefours et intermédiaire avec les autres esprits", "Peintre connu pour ses « villes imaginaires » aux couleurs vives"],
    correct: 2
  },
  {
    q: "Comment reconnaît-on Philomé Obin parmi les autres personnalités haïtiennes ?",
    options: ["Prêtresse vodou associée à la cérémonie du Bois-Caïman", "Général célèbre pour sa bravoure à la bataille de Vertières", "Chef de file de l'école du Cap dans la peinture haïtienne", "Premier président de la République d'Haïti (partie Sud)"],
    correct: 2
  },
  {
    q: "Quel élément biographique distingue Ertha Pascal-Trouillot ?",
    options: ["Figure fondatrice de la peinture naïve haïtienne", "Romancier et poète contemporain engagé", "Première femme à assurer la présidence d'Haïti (1990-1991)", "Prêtre vodou considéré comme un déclencheur de la révolte des esclaves de 1791"],
    correct: 2
  },
  {
    q: "À quel moment de l'histoire haïtienne rattache-t-on Marie Vieux-Chauvet ?",
    options: ["Révolution haïtienne (avant 1804)", "Époque contemporaine (2000 à aujourd'hui)", "Début XXe siècle", "Milieu XXe siècle (1930-1970)"],
    correct: 3
  },
  {
    q: "Quelle est la nature du rôle joué par Benoît Batraville ?",
    options: ["Musicien", "Intellectuel / militant", "Chef d'État", "Père fondateur / figure de l'Indépendance"],
    correct: 3
  },
  {
    q: "De quel type de personnalité s'agit-il pour Suzanne Comhaire-Sylvain ?",
    options: ["Intellectuel / militant", "Personnage du folklore", "Diplomate / personnalité internationale", "Chef d'État"],
    correct: 0
  },
  {
    q: "Quel fait marquant est associé à Edwidge Danticat ?",
    options: ["Proclama l'indépendance d'Haïti en 1804 et en devint le premier chef d'État", "Romancière haïtiano-américaine, autrice de « Breath, Eyes, Memory »", "Peintre ayant participé aux fresques de la Cathédrale Sainte-Trinité", "Jeune héros malin des contes traditionnels haïtiens"],
    correct: 1
  },
  {
    q: "À quelle époque associe-t-on Wyclef Jean ?",
    options: ["Milieu XXe siècle (1930-1970)", "XIXe siècle", "Époque contemporaine (2000 à aujourd'hui)", "Début XXe siècle"],
    correct: 2
  },
  {
    q: "Quelle est l'époque de référence pour Anthony Phelps ?",
    options: ["XIXe siècle", "Révolution haïtienne (avant 1804)", "Intemporel (figure du folklore/vodou)", "Fin XXe siècle (1970-2000)"],
    correct: 3
  },
  {
    q: "Dans quelle période de l'histoire haïtienne situe-t-on François Duvalier (Papa Doc) ?",
    options: ["Fin XXe siècle (1970-2000)", "Milieu XXe siècle (1930-1970)", "Intemporel (figure du folklore/vodou)", "Révolution haïtienne (avant 1804)"],
    correct: 1
  },
  {
    q: "Leslie Manigat appartient à quelle période historique ?",
    options: ["Fin XXe siècle (1970-2000)", "Révolution haïtienne (avant 1804)", "Époque contemporaine (2000 à aujourd'hui)", "Début XXe siècle"],
    correct: 0
  },
  {
    q: "Wyclef Jean a marqué ou vécu principalement à quelle période ?",
    options: ["Intemporel (figure du folklore/vodou)", "Révolution haïtienne (avant 1804)", "Époque contemporaine (2000 à aujourd'hui)", "Milieu XXe siècle (1930-1970)"],
    correct: 2
  },
  {
    q: "Quelle période correspond le mieux à Dumarsais Estimé ?",
    options: ["Révolution haïtienne (avant 1804)", "Intemporel (figure du folklore/vodou)", "XIXe siècle", "Milieu XXe siècle (1930-1970)"],
    correct: 3
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Jean-Bertrand Aristide ?",
    options: ["Poète et romancier, figure du mouvement Haïti Littéraire", "Ancien prêtre devenu président à deux reprises", "Musicien haïtiano-américain, ex-membre du groupe The Fugees", "Personnage rusé qui déjoue toujours son compère Bouki"],
    correct: 1
  },
  {
    q: "Comment Ariel Henry est-il principalement connu ?",
    options: ["Personnage du folklore", "Père fondateur / figure de l'Indépendance", "Chef d'État", "Musicien"],
    correct: 2
  },
  {
    q: "Quel élément biographique distingue Gary Victor ?",
    options: ["Peintre naïf associé au Centre d'Art de Port-au-Prince", "Romancier connu pour ses œuvres mêlant réalisme et fantastique", "Président puis « Président à vie » d'Haïti de 1957 à 1971", "Écrivain, peintre et dramaturge, pionnier du spiralisme"],
    correct: 1
  },
  {
    q: "Comment Ti Manno est-il principalement connu ?",
    options: ["Diplomate / personnalité internationale", "Père fondateur / figure de l'Indépendance", "Intellectuel / militant", "Musicien"],
    correct: 3
  },
  {
    q: "Où Lyonel Trouillot a-t-il vécu ou marqué l'histoire ?",
    options: ["Nord (Arcahaie)", "Diaspora (Canada)", "Port-au-Prince", "Dondon (Nord)"],
    correct: 2
  },
  {
    q: "Azaka (Papa Zaka) appartient à quel type de figure historique ou culturelle ?",
    options: ["Musicien", "Père fondateur / figure de l'Indépendance", "Diplomate / personnalité internationale", "Figure religieuse / vodou"],
    correct: 3
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Azaka (Papa Zaka) ?",
    options: ["Port-Salut", "Grande Rivière du Nord", "Nord (Bataille de Vertières)", "National / légendaire"],
    correct: 3
  },
  {
    q: "Où Jacques Stephen Alexis a-t-il vécu ou marqué l'histoire ?",
    options: ["Gonaïves", "Verrettes (Artibonite)", "Plateau Central", "Port-au-Prince"],
    correct: 0
  },
  {
    q: "Quand Andre Berto a-t-il été le plus actif ou influent ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Révolution haïtienne (avant 1804)", "XIXe siècle", "Intemporel (figure du folklore/vodou)"],
    correct: 0
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Andre Berto ?",
    options: ["Jérémie (Grande-Anse)", "Plateau Central", "Nord (Bois-Caïman)", "Diaspora (Floride)"],
    correct: 3
  },
  {
    q: "Parmi les propositions suivantes, laquelle correspond à Bouki ?",
    options: ["Personnage du folklore", "Intellectuel / militant", "Père fondateur / figure de l'Indépendance", "Peintre / artiste visuel"],
    correct: 0
  },
  {
    q: "Comment Dumarsais Estimé est-il principalement connu ?",
    options: ["Figure religieuse / vodou", "Père fondateur / figure de l'Indépendance", "Musicien", "Chef d'État"],
    correct: 3
  },
  {
    q: "Manno Charlemagne est principalement associé à quel lieu ?",
    options: ["Diaspora (États-Unis)", "Dondon (Nord)", "Port-au-Prince", "Hinche (Centre)"],
    correct: 2
  },
  {
    q: "Quel rôle décrit le mieux René Préval dans l'histoire ou la culture haïtienne ?",
    options: ["Intellectuel / militant", "Chef d'État", "Musicien", "Père fondateur / figure de l'Indépendance"],
    correct: 1
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Dany Laferrière ?",
    options: ["Chanteuse et actrice, figure de la chanson racine haïtienne", "Romancier et poète contemporain engagé", "Héroïne de la Révolution haïtienne exécutée par les troupes françaises", "Écrivain élu à l'Académie française"],
    correct: 3
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Manno Charlemagne ?",
    options: ["Attaquant international de l'équipe nationale de football d'Haïti", "Chanteur engagé devenu maire de Port-au-Prince", "Anthropologue, auteur de « De l'égalité des races humaines »", "Ancien fonctionnaire de l'ONU nommé Premier ministre à deux reprises"],
    correct: 1
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Dany Laferrière ?",
    options: ["Verrettes (Artibonite)", "Diaspora (Canada)", "Port-au-Prince", "Jacmel"],
    correct: 3
  },
  {
    q: "Charles Oscar Étienne (Jean-Baptiste Chavannes) a marqué ou vécu principalement à quelle période ?",
    options: ["Révolution haïtienne (avant 1804)", "Intemporel (figure du folklore/vodou)", "Époque contemporaine (2000 à aujourd'hui)", "Milieu XXe siècle (1930-1970)"],
    correct: 0
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Suzanne Comhaire-Sylvain ?",
    options: ["Saint-Marc", "Port-au-Prince", "Nord (Arcahaie)", "Jacmel"],
    correct: 3
  },
  {
    q: "Kettly Mars appartient à quel type de figure historique ou culturelle ?",
    options: ["Père fondateur / figure de l'Indépendance", "Écrivain", "Musicien", "Intellectuel / militant"],
    correct: 1
  },
  {
    q: "Comment classerait-on Andre Berto parmi les personnalités haïtiennes ?",
    options: ["Diplomate / personnalité internationale", "Figure religieuse / vodou", "Père fondateur / figure de l'Indépendance", "Athlète / sportif"],
    correct: 3
  },
  {
    q: "Quelle est l'époque de référence pour Jean-Bertrand Aristide ?",
    options: ["Intemporel (figure du folklore/vodou)", "Milieu XXe siècle (1930-1970)", "Révolution haïtienne (avant 1804)", "Fin XXe siècle (1970-2000)"],
    correct: 3
  },
  {
    q: "Quel lieu géographique évoque le plus Papa Legba ?",
    options: ["National / légendaire", "Port-au-Prince", "Verrettes (Artibonite)", "Cap-Haïtien"],
    correct: 0
  },
  {
    q: "De quel type de personnalité s'agit-il pour Azaka (Papa Zaka) ?",
    options: ["Père fondateur / figure de l'Indépendance", "Écrivain", "Personnage du folklore", "Figure religieuse / vodou"],
    correct: 3
  },
  {
    q: "Où Jean-Robert Cadet a-t-il vécu ou marqué l'histoire ?",
    options: ["Diaspora (Floride)", "Nord (Grande-Rivière-du-Nord)", "Diaspora (États-Unis)", "Ravine-Sèche"],
    correct: 2
  },
  {
    q: "À quel moment de l'histoire haïtienne rattache-t-on Lyonel Trouillot ?",
    options: ["Intemporel (figure du folklore/vodou)", "Fin XXe siècle (1970-2000)", "Époque contemporaine (2000 à aujourd'hui)", "Milieu XXe siècle (1930-1970)"],
    correct: 2
  },
  {
    q: "Quelle est la nature du rôle joué par Leslie Manigat ?",
    options: ["Intellectuel / militant", "Père fondateur / figure de l'Indépendance", "Chef d'État", "Musicien"],
    correct: 2
  },
  {
    q: "Quand Paul Magloire a-t-il été le plus actif ou influent ?",
    options: ["XIXe siècle", "Fin XXe siècle (1970-2000)", "Milieu XXe siècle (1930-1970)", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 2
  },
  {
    q: "Ezili Freda est principalement associée à quel lieu ?",
    options: ["Petit-Goâve", "Nord (Grande-Rivière-du-Nord)", "National / légendaire", "Diaspora (Floride)"],
    correct: 2
  },
  {
    q: "À quel moment de l'histoire haïtienne rattache-t-on Jacques Stephen Alexis ?",
    options: ["Intemporel (figure du folklore/vodou)", "Milieu XXe siècle (1930-1970)", "Début XXe siècle", "XIXe siècle"],
    correct: 1
  },
  {
    q: "D'où est originaire Marie Vieux-Chauvet, ou à quel lieu est-elle le plus associée ?",
    options: ["Dondon (Nord)", "Nord (Grande-Rivière-du-Nord)", "Nord (Cap-Haïtien)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Lyonel Trouillot ?",
    options: ["Peintre ayant participé aux fresques de la Cathédrale Sainte-Trinité", "Romancier et poète contemporain engagé", "Se proclama roi d'Haïti et fit construire la Citadelle Laferrière", "Jeune héros malin des contes traditionnels haïtiens"],
    correct: 1
  },
  {
    q: "Quel rôle décrit le mieux Wyclef Jean dans l'histoire ou la culture haïtienne ?",
    options: ["Intellectuel / militant", "Musicien", "Diplomate / personnalité internationale", "Peintre / artiste visuel"],
    correct: 1
  },
  {
    q: "Pour quoi Frankétienne est-il surtout reconnu ?",
    options: ["Écrivain, peintre et dramaturge, pionnier du spiralisme", "Chef militaire et politique, figure centrale de la Révolution haïtienne", "Première femme haïtienne docteure en lettres, anthropologue", "Lwa protecteur de l'agriculture et des paysans dans le vodou haïtien"],
    correct: 0
  },
  {
    q: "Qu'est-ce qui rend François Duvalier (Papa Doc) célèbre ou important ?",
    options: ["Footballeur ayant marqué contre l'Italie à la Coupe du monde 1974", "Général célèbre pour sa bravoure à la bataille de Vertières", "Boxeur professionnel haïtiano-américain, ancien champion du monde", "Président puis « Président à vie » d'Haïti de 1957 à 1971"],
    correct: 3
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Azaka (Papa Zaka) ?",
    options: ["Nord (Bataille de Vertières)", "Grande Rivière du Nord", "National / légendaire", "Marmelade (Artibonite)"],
    correct: 2
  },
  {
    q: "Comment Lyonel Trouillot est-il principalement connu ?",
    options: ["Peintre / artiste visuel", "Chef d'État", "Figure religieuse / vodou", "Écrivain"],
    correct: 3
  },
  {
    q: "Quel fait marquant est associé à Baron Samedi ?",
    options: ["Lwa des morts et gardien des cimetières dans le vodou haïtien", "Prêtresse vodou associée à la cérémonie du Bois-Caïman", "Président ayant modernisé l'éducation et les relations extérieures d'Haïti", "Chanteur de konpa social devenu une icône engagée"],
    correct: 0
  },
  {
    q: "Où Ariel Henry a-t-il vécu ou marqué l'histoire ?",
    options: ["Jérémie (Grande-Anse)", "Diaspora (Floride)", "Petit-Goâve", "Port-au-Prince"],
    correct: 0
  },
  {
    q: "Quel fait marquant est associé à Papa Legba ?",
    options: ["Chanteur engagé devenu maire de Port-au-Prince", "Lwa gardien des carrefours et intermédiaire avec les autres esprits", "Lwa des morts et gardien des cimetières dans le vodou haïtien", "Président ayant modernisé l'éducation et les relations extérieures d'Haïti"],
    correct: 1
  },
  {
    q: "Pour quelle raison Dany Laferrière est-il connu dans l'histoire ou la culture haïtienne ?",
    options: ["Écrivain élu à l'Académie française", "Romancier connu pour ses œuvres mêlant réalisme et fantastique", "Héroïne de la Révolution haïtienne exécutée par les troupes françaises", "Militaire devenu président dans les années 1950"],
    correct: 0
  },
  {
    q: "Pour quelle raison Sténio Vincent est-il connu dans l'histoire ou la culture haïtienne ?",
    options: ["Autrice du triptyque romanesque « Amour, Colère et Folie »", "Président ayant négocié la fin de l'occupation américaine", "Journaliste et directeur de Radio Haïti Inter, assassiné en 2000", "Footballeur ayant marqué contre l'Italie à la Coupe du monde 1974"],
    correct: 1
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Edwidge Danticat ?",
    options: ["Homme de couleur libre ayant mené une révolte avant l'indépendance", "Lwa gardien des carrefours et intermédiaire avec les autres esprits", "Romancière haïtiano-américaine, autrice de « Breath, Eyes, Memory »", "Footballeur devenu icône du konpa avec l'Ensemble Select"],
    correct: 2
  },
  {
    q: "Parmi les propositions suivantes, laquelle correspond à Benoît Batraville ?",
    options: ["Figure religieuse / vodou", "Chef d'État", "Père fondateur / figure de l'Indépendance", "Intellectuel / militant"],
    correct: 2
  },
  {
    q: "Ti Jean est principalement associé à quel lieu ?",
    options: ["National / légendaire", "Nord (Cap-Haïtien)", "Diaspora (Canada)", "Saint-Marc"],
    correct: 0
  },
  {
    q: "Comment Malice est-il principalement connu ?",
    options: ["Athlète / sportif", "Écrivain", "Peintre / artiste visuel", "Personnage du folklore"],
    correct: 3
  },
  {
    q: "Comment Emeline Michel est-elle généralement présentée ?",
    options: ["Peintre / artiste visuel", "Personnage du folklore", "Père fondateur / figure de l'Indépendance", "Musicien"],
    correct: 3
  },
  {
    q: "Pour quelle raison Dumarsais Estimé est-il connu dans l'histoire ou la culture haïtienne ?",
    options: ["Lwa serpent, considéré comme l'un des esprits les plus anciens du vodou", "Footballeur ayant marqué contre l'Italie à la Coupe du monde 1974", "Journaliste et directeur de Radio Haïti Inter, assassiné en 2000", "Premier président noir élu après une longue période d'influence mulâtre"],
    correct: 3
  },
  {
    q: "Quelle est l'époque de référence pour Ariel Henry ?",
    options: ["Fin XXe siècle (1970-2000)", "Époque contemporaine (2000 à aujourd'hui)", "Révolution haïtienne (avant 1804)", "Milieu XXe siècle (1930-1970)"],
    correct: 1
  },
  {
    q: "Quel élément biographique distingue Charlemagne Péralte ?",
    options: ["Président par intérim après le départ d'Aristide en 2004", "Première femme haïtienne docteure en lettres, anthropologue", "Prêtre vodou considéré comme un déclencheur de la révolte des esclaves de 1791", "Chef de la résistance armée contre l'occupation américaine (1915-1934)"],
    correct: 3
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Suzanne Comhaire-Sylvain ?",
    options: ["Première femme haïtienne docteure en lettres, anthropologue", "Chanteur de konpa social devenu une icône engagée", "Poète national, auteur du célèbre poème « Choucoune »", "Première femme à assurer la présidence d'Haïti (1990-1991)"],
    correct: 0
  },
  {
    q: "À quel moment de l'histoire haïtienne rattache-t-on Catherine Flon ?",
    options: ["Fin XXe siècle (1970-2000)", "XIXe siècle", "Révolution haïtienne (avant 1804)", "Milieu XXe siècle (1930-1970)"],
    correct: 2
  },
  {
    q: "Qu'est-ce qui rend Wyclef Jean célèbre ou important ?",
    options: ["Musicien haïtiano-américain, ex-membre du groupe The Fugees", "Peintre ayant participé aux fresques de la Cathédrale Sainte-Trinité", "Écrivain, peintre et dramaturge, pionnier du spiralisme", "Personnage rusé qui déjoue toujours son compère Bouki"],
    correct: 0
  },
  {
    q: "Quelle est la nature du rôle joué par Samuel Dalembert ?",
    options: ["Athlète / sportif", "Écrivain", "Père fondateur / figure de l'Indépendance", "Personnage du folklore"],
    correct: 0
  },
  {
    q: "François Duvalier (Papa Doc) est principalement associé à quel lieu ?",
    options: ["Diaspora (Floride)", "Petit-Goâve", "Trou-du-Nord (Nord-Est)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Dans quelle période de l'histoire haïtienne situe-t-on Sanite Bélair ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Intemporel (figure du folklore/vodou)", "Révolution haïtienne (avant 1804)", "Milieu XXe siècle (1930-1970)"],
    correct: 2
  },
  {
    q: "Quel fait marquant est associé à Boniface Alexandre ?",
    options: ["Président par intérim après le départ d'Aristide en 2004", "Romancière haïtiano-américaine, autrice de « Breath, Eyes, Memory »", "Président ayant négocié la fin de l'occupation américaine", "Peintre célèbre pour sa fresque à la Cathédrale Sainte-Trinité"],
    correct: 0
  },
  {
    q: "Louis Joseph Janvier provient ou est rattaché à quelle zone ?",
    options: ["Port-au-Prince", "Anse-à-Veau", "National / légendaire", "Diaspora (Floride)"],
    correct: 0
  },
  {
    q: "Comment Toussaint Louverture est-il principalement connu ?",
    options: ["Athlète / sportif", "Diplomate / personnalité internationale", "Peintre / artiste visuel", "Père fondateur / figure de l'Indépendance"],
    correct: 3
  },
  {
    q: "Quelle période correspond le mieux à Sanite Bélair ?",
    options: ["Fin XXe siècle (1970-2000)", "XIXe siècle", "Révolution haïtienne (avant 1804)", "Début XXe siècle"],
    correct: 2
  },
  {
    q: "Comment classerait-on Boniface Alexandre parmi les personnalités haïtiennes ?",
    options: ["Père fondateur / figure de l'Indépendance", "Écrivain", "Intellectuel / militant", "Chef d'État"],
    correct: 3
  },
  {
    q: "Quel lieu géographique évoque le plus Baron Samedi ?",
    options: ["Verrettes (Artibonite)", "National / légendaire", "Diaspora (Canada)", "Saint-Marc"],
    correct: 1
  },
  {
    q: "Comment Jean Dominique est-il principalement connu ?",
    options: ["Écrivain", "Peintre / artiste visuel", "Intellectuel / militant", "Père fondateur / figure de l'Indépendance"],
    correct: 2
  },
  {
    q: "À quel moment de l'histoire haïtienne rattache-t-on Philomé Obin ?",
    options: ["XIXe siècle", "Début XXe siècle", "Milieu XXe siècle (1930-1970)", "Intemporel (figure du folklore/vodou)"],
    correct: 2
  },
  {
    q: "Comment classerait-on Damballah parmi les personnalités haïtiennes ?",
    options: ["Intellectuel / militant", "Athlète / sportif", "Figure religieuse / vodou", "Diplomate / personnalité internationale"],
    correct: 2
  },
  {
    q: "Quel rôle décrit le mieux Jean-Claude Duvalier (Baby Doc) dans l'histoire ou la culture haïtienne ?",
    options: ["Peintre / artiste visuel", "Chef d'État", "Intellectuel / militant", "Écrivain"],
    correct: 1
  },
  {
    q: "Quelle étiquette correspond le mieux à Préfète Duffaut ?",
    options: ["Diplomate / personnalité internationale", "Père fondateur / figure de l'Indépendance", "Figure religieuse / vodou", "Peintre / artiste visuel"],
    correct: 3
  },
  {
    q: "Pour quoi Ogou est-il surtout reconnu ?",
    options: ["Général cacos ayant poursuivi la résistance après la mort de Péralte", "Chef de file de l'école du Cap dans la peinture haïtienne", "Lwa guerrier associé au fer et à la force dans le vodou haïtien", "Président par intérim après le départ d'Aristide en 2004"],
    correct: 2
  },
  {
    q: "Quelle est la nature du rôle joué par Michaëlle Jean ?",
    options: ["Peintre / artiste visuel", "Figure religieuse / vodou", "Diplomate / personnalité internationale", "Chef d'État"],
    correct: 2
  },
  {
    q: "Quelle période correspond le mieux à Louis Joseph Janvier ?",
    options: ["XIXe siècle", "Révolution haïtienne (avant 1804)", "Intemporel (figure du folklore/vodou)", "Début XXe siècle"],
    correct: 0
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Frankétienne ?",
    options: ["Ravine-Sèche", "Anse-à-Veau", "Port-au-Prince", "Gonaïves"],
    correct: 0
  },
  {
    q: "Quel élément biographique distingue François Capois (Capois-La-Mort) ?",
    options: ["Chef de file de l'école du Cap dans la peinture haïtienne", "Peintre célèbre pour sa fresque à la Cathédrale Sainte-Trinité", "Général célèbre pour sa bravoure à la bataille de Vertières", "Écrivain élu à l'Académie française"],
    correct: 2
  },
  {
    q: "De quel type de personnalité s'agit-il pour Ertha Pascal-Trouillot ?",
    options: ["Écrivain", "Personnage du folklore", "Père fondateur / figure de l'Indépendance", "Chef d'État"],
    correct: 3
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Samuel Dalembert ?",
    options: ["Plateau Central", "Diaspora (Floride)", "Port-au-Prince", "Quartier-Morin (Nord)"],
    correct: 2
  },
  {
    q: "Louis Joseph Janvier est principalement associé à quel lieu ?",
    options: ["Gonaïves", "Port-Salut", "Port-au-Prince", "Jérémie (Grande-Anse)"],
    correct: 2
  },
  {
    q: "Parmi les propositions suivantes, laquelle correspond à Ertha Pascal-Trouillot ?",
    options: ["Père fondateur / figure de l'Indépendance", "Peintre / artiste visuel", "Chef d'État", "Figure religieuse / vodou"],
    correct: 2
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Hector Hyppolite ?",
    options: ["Neurochirurgien devenu Premier ministre après l'assassinat de Jovenel Moïse", "Militante féministe, cofondatrice d'organisations pour les droits des femmes", "Peintre naïf associé au Centre d'Art de Port-au-Prince", "Figure fondatrice de la peinture naïve haïtienne"],
    correct: 3
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Dumarsais Estimé ?",
    options: ["Verrettes (Artibonite)", "Anse-à-Veau", "Trou-du-Nord (Nord-Est)", "Petit-Goâve"],
    correct: 0
  },
  {
    q: "Quel élément biographique distingue Castera Bazile ?",
    options: ["Président ayant unifié l'ensemble de l'île sous administration haïtienne", "Peintre ayant participé aux fresques de la Cathédrale Sainte-Trinité", "Poète et romancier, prix Renaudot pour « Hadriana dans tous mes rêves »", "Se proclama roi d'Haïti et fit construire la Citadelle Laferrière"],
    correct: 1
  },
  {
    q: "Quelle étiquette correspond le mieux à Ti Manno ?",
    options: ["Figure religieuse / vodou", "Peintre / artiste visuel", "Père fondateur / figure de l'Indépendance", "Musicien"],
    correct: 3
  },
  {
    q: "À quelle époque associe-t-on Edwidge Danticat ?",
    options: ["Intemporel (figure du folklore/vodou)", "Époque contemporaine (2000 à aujourd'hui)", "Révolution haïtienne (avant 1804)", "Milieu XXe siècle (1930-1970)"],
    correct: 1
  },
  {
    q: "Où situe-t-on l'histoire de Charlemagne Péralte ?",
    options: ["Nord (Arcahaie)", "Marmelade (Artibonite)", "Saint-Marc", "Hinche (Centre)"],
    correct: 3
  },
  {
    q: "Quel lieu géographique évoque le plus Charlemagne Péralte ?",
    options: ["Gonaïves", "Hinche (Centre)", "Trou-du-Nord (Nord-Est)", "Jacmel"],
    correct: 1
  },
  {
    q: "Quel rôle décrit le mieux François Capois (Capois-La-Mort) dans l'histoire ou la culture haïtienne ?",
    options: ["Peintre / artiste visuel", "Père fondateur / figure de l'Indépendance", "Chef d'État", "Personnage du folklore"],
    correct: 1
  },
  {
    q: "Dans quelle catégorie situerait-on Rigaud Benoit ?",
    options: ["Père fondateur / figure de l'Indépendance", "Figure religieuse / vodou", "Athlète / sportif", "Peintre / artiste visuel"],
    correct: 3
  },
  {
    q: "Quelle est la nature du rôle joué par Dany Laferrière ?",
    options: ["Intellectuel / militant", "Athlète / sportif", "Écrivain", "Peintre / artiste visuel"],
    correct: 2
  },
  {
    q: "Pour quoi Vincent Ogé est-il surtout reconnu ?",
    options: ["Écrivain élu à l'Académie française", "Proclama l'indépendance d'Haïti en 1804 et en devint le premier chef d'État", "Poète national, auteur du célèbre poème « Choucoune »", "Homme de couleur libre ayant mené une révolte avant l'indépendance"],
    correct: 3
  },
  {
    q: "Quand Jean-Claude Duvalier (Baby Doc) a-t-il été le plus actif ou influent ?",
    options: ["Fin XXe siècle (1970-2000)", "Milieu XXe siècle (1930-1970)", "Révolution haïtienne (avant 1804)", "Début XXe siècle"],
    correct: 0
  },
  {
    q: "Quand Vincent Ogé a-t-il été le plus actif ou influent ?",
    options: ["Milieu XXe siècle (1930-1970)", "Révolution haïtienne (avant 1804)", "Fin XXe siècle (1970-2000)", "Intemporel (figure du folklore/vodou)"],
    correct: 1
  },
  {
    q: "Pour quelle raison Baron Samedi est-il connu dans l'histoire ou la culture haïtienne ?",
    options: ["Chef militaire et politique, figure centrale de la Révolution haïtienne", "Lwa des morts et gardien des cimetières dans le vodou haïtien", "Lwa guerrier associé au fer et à la force dans le vodou haïtien", "Pivot haïtiano-canadien ayant joué en NBA"],
    correct: 1
  },
  {
    q: "Où situe-t-on l'histoire de Manno Charlemagne ?",
    options: ["Diaspora (New Jersey)", "Diaspora (Canada)", "Port-au-Prince", "National / légendaire"],
    correct: 2
  },
  {
    q: "À quel moment de l'histoire haïtienne rattache-t-on Charles Oscar Étienne (Jean-Baptiste Chavannes) ?",
    options: ["XIXe siècle", "Milieu XXe siècle (1930-1970)", "Époque contemporaine (2000 à aujourd'hui)", "Révolution haïtienne (avant 1804)"],
    correct: 3
  },
  {
    q: "Quel lieu géographique évoque le plus Azaka (Papa Zaka) ?",
    options: ["Saint-Marc", "National / légendaire", "Diaspora (Floride)", "Cap-Haïtien"],
    correct: 1
  },
  {
    q: "De quel type de personnalité s'agit-il pour Jovenel Moïse ?",
    options: ["Figure religieuse / vodou", "Chef d'État", "Diplomate / personnalité internationale", "Père fondateur / figure de l'Indépendance"],
    correct: 1
  },
  {
    q: "À quel moment de l'histoire haïtienne rattache-t-on Charlemagne Péralte ?",
    options: ["XIXe siècle", "Révolution haïtienne (avant 1804)", "Intemporel (figure du folklore/vodou)", "Début XXe siècle"],
    correct: 3
  },
  {
    q: "D'où est originaire Ariel Henry, ou à quel lieu est-il le plus associé ?",
    options: ["Jacmel", "Anse-à-Veau", "Cap-Haïtien", "Jérémie (Grande-Anse)"],
    correct: 3
  },
  {
    q: "D'où est originaire Ogou, ou à quel lieu est-il le plus associé ?",
    options: ["Anse-à-Veau", "National / légendaire", "Nord (Arcahaie)", "Nord (Cap-Haïtien)"],
    correct: 1
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Jean Price-Mars ?",
    options: ["Lwa serpent, considéré comme l'un des esprits les plus anciens du vodou", "Lwa des eaux et de la mer dans le vodou haïtien", "Lwa protecteur de l'agriculture et des paysans dans le vodou haïtien", "Ethnologue, auteur de « Ainsi parla l'oncle », père de l'indigénisme haïtien"],
    correct: 3
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Wilson Bigaud ?",
    options: ["Héroïne de la Révolution haïtienne exécutée par les troupes françaises", "Président puis « Président à vie » d'Haïti de 1957 à 1971", "Peintre célèbre pour sa fresque à la Cathédrale Sainte-Trinité", "Président puis empereur d'Haïti sous le nom de Faustin Ier"],
    correct: 2
  },
  {
    q: "Où situe-t-on l'histoire de Bouki ?",
    options: ["Quartier-Morin (Nord)", "Cap-Haïtien", "National / légendaire", "Nord (Grande-Rivière-du-Nord)"],
    correct: 2
  },
  {
    q: "Catherine Flon provient ou est rattachée à quelle zone ?",
    options: ["Diaspora (États-Unis)", "Plateau Central", "Nord (Arcahaie)", "Gonaïves"],
    correct: 2
  },
  {
    q: "Comment René Depestre est-il généralement présenté ?",
    options: ["Athlète / sportif", "Figure religieuse / vodou", "Chef d'État", "Écrivain"],
    correct: 3
  },
  {
    q: "Quelle période correspond le mieux à Kettly Mars ?",
    options: ["Fin XXe siècle (1970-2000)", "Époque contemporaine (2000 à aujourd'hui)", "Intemporel (figure du folklore/vodou)", "Début XXe siècle"],
    correct: 1
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Oswald Durand ?",
    options: ["Ravine-Sèche", "Grande Rivière du Nord", "Port-au-Prince", "Cap-Haïtien"],
    correct: 3
  },
  {
    q: "Comment reconnaît-on Jean-Jacques Dessalines parmi les autres personnalités haïtiennes ?",
    options: ["Proclama l'indépendance d'Haïti en 1804 et en devint le premier chef d'État", "Pivot haïtiano-canadien ayant joué en NBA", "Prêtre vodou considéré comme un déclencheur de la révolte des esclaves de 1791", "Se proclama roi d'Haïti et fit construire la Citadelle Laferrière"],
    correct: 0
  },
  {
    q: "Quelle est l'époque de référence pour Michael Brun ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Début XXe siècle", "Fin XXe siècle (1970-2000)", "XIXe siècle"],
    correct: 0
  },
  {
    q: "Quelle étiquette correspond le mieux à Michaëlle Jean ?",
    options: ["Musicien", "Diplomate / personnalité internationale", "Chef d'État", "Personnage du folklore"],
    correct: 1
  },
  {
    q: "Dans quelle catégorie situerait-on Malice ?",
    options: ["Personnage du folklore", "Musicien", "Athlète / sportif", "Intellectuel / militant"],
    correct: 0
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Boukman Dutty ?",
    options: ["Première femme haïtienne docteure en lettres, anthropologue", "DJ et producteur fusionnant konpa et musique électronique", "Prêtre vodou considéré comme un déclencheur de la révolte des esclaves de 1791", "Peintre célèbre pour sa fresque à la Cathédrale Sainte-Trinité"],
    correct: 2
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Boniface Alexandre ?",
    options: ["Chef militaire et politique, figure centrale de la Révolution haïtienne", "Lwa gardien des carrefours et intermédiaire avec les autres esprits", "Président par intérim après le départ d'Aristide en 2004", "Auteur du roman « Gouverneurs de la rosée »"],
    correct: 2
  },
  {
    q: "Comment Edwidge Danticat est-elle principalement connue ?",
    options: ["Personnage du folklore", "Chef d'État", "Écrivain", "Diplomate / personnalité internationale"],
    correct: 2
  },
  {
    q: "Dans quelle catégorie situerait-on Myriam Merlet ?",
    options: ["Chef d'État", "Athlète / sportif", "Intellectuel / militant", "Peintre / artiste visuel"],
    correct: 2
  },
  {
    q: "D'où est originaire Andre Berto, ou à quel lieu est-il le plus associé ?",
    options: ["Diaspora (Floride)", "Port-au-Prince", "Dondon (Nord)", "Cap-Haïtien"],
    correct: 0
  },
  {
    q: "Quel rôle décrit le mieux Lyonel Trouillot dans l'histoire ou la culture haïtienne ?",
    options: ["Athlète / sportif", "Écrivain", "Chef d'État", "Figure religieuse / vodou"],
    correct: 1
  },
  {
    q: "Pour quelle raison Rigaud Benoit est-il connu dans l'histoire ou la culture haïtienne ?",
    options: ["Militaire devenu président dans les années 1950", "Boxeur professionnel haïtiano-américain, ancien champion du monde", "Peintre naïf associé au Centre d'Art de Port-au-Prince", "Président ayant modernisé l'éducation et les relations extérieures d'Haïti"],
    correct: 2
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Hector Hyppolite ?",
    options: ["Figure fondatrice de la peinture naïve haïtienne", "Poète et romancier, prix Renaudot pour « Hadriana dans tous mes rêves »", "Lwa guerrier associé au fer et à la force dans le vodou haïtien", "Lwa associée à l'amour, la beauté et le luxe dans le vodou haïtien"],
    correct: 0
  },
  {
    q: "Où situe-t-on l'histoire de Gary Victor ?",
    options: ["Port-au-Prince", "Diaspora (Floride)", "Nord (Arcahaie)", "Jacmel"],
    correct: 3
  },
  {
    q: "Dans quelle période de l'histoire haïtienne situe-t-on Castera Bazile ?",
    options: ["Début XXe siècle", "Milieu XXe siècle (1930-1970)", "Époque contemporaine (2000 à aujourd'hui)", "XIXe siècle"],
    correct: 1
  },
  {
    q: "Qu'est-ce qui rend Wilson Bigaud célèbre ou important ?",
    options: ["Peintre célèbre pour sa fresque à la Cathédrale Sainte-Trinité", "Peintre ayant participé aux fresques de la Cathédrale Sainte-Trinité", "Footballeur devenu icône du konpa avec l'Ensemble Select", "Aurait cousu le premier drapeau haïtien en 1803"],
    correct: 0
  },
  {
    q: "Parmi les propositions suivantes, laquelle correspond à Jean-Bertrand Aristide ?",
    options: ["Peintre / artiste visuel", "Chef d'État", "Intellectuel / militant", "Diplomate / personnalité internationale"],
    correct: 1
  },
  {
    q: "Dans quelle catégorie situerait-on Jean-Bertrand Aristide ?",
    options: ["Chef d'État", "Intellectuel / militant", "Figure religieuse / vodou", "Personnage du folklore"],
    correct: 0
  },
  {
    q: "Quel fait marquant est associé à Édouard Duval-Carrié ?",
    options: ["Footballeur devenu icône du konpa avec l'Ensemble Select", "Artiste contemporain mêlant histoire haïtienne et symbolisme vodou", "Seul président haïtien à avoir achevé deux mandats non consécutifs", "Ancien prêtre devenu président à deux reprises"],
    correct: 1
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Jean-Claude Duvalier (Baby Doc) ?",
    options: ["Romancier et médecin, auteur du « réalisme merveilleux »", "Première femme haïtienne docteure en lettres, anthropologue", "Succéda à son père comme « Président à vie » de 1971 à 1986", "Premier président de la République d'Haïti (partie Sud)"],
    correct: 2
  },
  {
    q: "Quel lieu géographique évoque le plus Dumarsais Estimé ?",
    options: ["Dondon (Nord)", "Verrettes (Artibonite)", "Nord (Grande-Rivière-du-Nord)", "Marmelade (Artibonite)"],
    correct: 1
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Malice ?",
    options: ["Journaliste et directeur de Radio Haïti Inter, assassiné en 2000", "Personnage rusé qui déjoue toujours son compère Bouki", "Romancier connu pour ses œuvres mêlant réalisme et fantastique", "Poète et romancier, prix Renaudot pour « Hadriana dans tous mes rêves »"],
    correct: 1
  },
  {
    q: "Quelle étiquette correspond le mieux à Wilson Bigaud ?",
    options: ["Chef d'État", "Intellectuel / militant", "Écrivain", "Peintre / artiste visuel"],
    correct: 3
  },
  {
    q: "Quelle étiquette correspond le mieux à Jean-Bertrand Aristide ?",
    options: ["Père fondateur / figure de l'Indépendance", "Diplomate / personnalité internationale", "Personnage du folklore", "Chef d'État"],
    correct: 3
  },
  {
    q: "Quel élément biographique distingue Damballah ?",
    options: ["Peintre connu pour ses « villes imaginaires » aux couleurs vives", "Politologue devenu président pendant quelques mois en 1988", "Boxeur professionnel haïtiano-américain, ancien champion du monde", "Lwa serpent, considéré comme l'un des esprits les plus anciens du vodou"],
    correct: 3
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Wilson Bigaud ?",
    options: ["Saint-Marc", "Ravine-Sèche", "Cap-Haïtien", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Quel rôle décrit le mieux Jean-Pierre Boyer dans l'histoire ou la culture haïtienne ?",
    options: ["Diplomate / personnalité internationale", "Écrivain", "Peintre / artiste visuel", "Chef d'État"],
    correct: 3
  },
  {
    q: "Parmi les propositions suivantes, laquelle correspond à Ti Manno ?",
    options: ["Musicien", "Intellectuel / militant", "Écrivain", "Personnage du folklore"],
    correct: 0
  },
  {
    q: "Quel élément biographique distingue Baron Samedi ?",
    options: ["Pivot haïtiano-canadien ayant joué en NBA", "Prêtre vodou considéré comme un déclencheur de la révolte des esclaves de 1791", "Proclama l'indépendance d'Haïti en 1804 et en devint le premier chef d'État", "Lwa des morts et gardien des cimetières dans le vodou haïtien"],
    correct: 3
  },
  {
    q: "Comment Malice est-il généralement présenté ?",
    options: ["Musicien", "Athlète / sportif", "Écrivain", "Personnage du folklore"],
    correct: 3
  },
  {
    q: "Anthony Phelps appartient à quel type de figure historique ou culturelle ?",
    options: ["Chef d'État", "Diplomate / personnalité internationale", "Écrivain", "Musicien"],
    correct: 2
  },
  {
    q: "Qu'est-ce qui rend Coupé Cloué célèbre ou important ?",
    options: ["Footballeur devenu icône du konpa avec l'Ensemble Select", "Attaquant international de l'équipe nationale de football d'Haïti", "Jeune héros malin des contes traditionnels haïtiens", "Poète et romancier, prix Renaudot pour « Hadriana dans tous mes rêves »"],
    correct: 0
  },
  {
    q: "Rigaud Benoit appartient à quel type de figure historique ou culturelle ?",
    options: ["Figure religieuse / vodou", "Musicien", "Intellectuel / militant", "Peintre / artiste visuel"],
    correct: 3
  },
  {
    q: "Quel lieu géographique évoque le plus Andre Berto ?",
    options: ["Anse-à-Veau", "Port-au-Prince", "Diaspora (Floride)", "Trou-du-Nord (Nord-Est)"],
    correct: 2
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Préfète Duffaut ?",
    options: ["Romancier connu pour ses œuvres mêlant réalisme et fantastique", "Aurait cousu le premier drapeau haïtien en 1803", "Peintre connu pour ses « villes imaginaires » aux couleurs vives", "Chef de la résistance armée contre l'occupation américaine (1915-1934)"],
    correct: 2
  },
  {
    q: "Dans quelle période de l'histoire haïtienne situe-t-on Louis Joseph Janvier ?",
    options: ["Fin XXe siècle (1970-2000)", "Milieu XXe siècle (1930-1970)", "XIXe siècle", "Révolution haïtienne (avant 1804)"],
    correct: 2
  },
  {
    q: "Quelle est la nature du rôle joué par François Duvalier (Papa Doc) ?",
    options: ["Personnage du folklore", "Chef d'État", "Peintre / artiste visuel", "Écrivain"],
    correct: 1
  },
  {
    q: "Quelle étiquette correspond le mieux à Leslie Manigat ?",
    options: ["Diplomate / personnalité internationale", "Figure religieuse / vodou", "Chef d'État", "Père fondateur / figure de l'Indépendance"],
    correct: 2
  },
  {
    q: "Comment Cécile Fatiman est-elle généralement présentée ?",
    options: ["Intellectuel / militant", "Musicien", "Père fondateur / figure de l'Indépendance", "Figure religieuse / vodou"],
    correct: 2
  },
  {
    q: "Boukman Dutty a marqué ou vécu principalement à quelle période ?",
    options: ["Révolution haïtienne (avant 1804)", "Fin XXe siècle (1970-2000)", "XIXe siècle", "Intemporel (figure du folklore/vodou)"],
    correct: 0
  },
  {
    q: "Où Emmanuel Sanon a-t-il vécu ou marqué l'histoire ?",
    options: ["Marmelade (Artibonite)", "Port-au-Prince", "Ravine-Sèche", "Plateau Central"],
    correct: 1
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Toussaint Louverture ?",
    options: ["Chef militaire et politique, figure centrale de la Révolution haïtienne", "Président élu en 2016, assassiné en fonction en 2021", "Romancière haïtiano-américaine, autrice de « Breath, Eyes, Memory »", "Se proclama roi d'Haïti et fit construire la Citadelle Laferrière"],
    correct: 0
  },
  {
    q: "Quand Charlemagne Péralte a-t-il été le plus actif ou influent ?",
    options: ["Révolution haïtienne (avant 1804)", "Début XXe siècle", "XIXe siècle", "Intemporel (figure du folklore/vodou)"],
    correct: 1
  },
  {
    q: "Quel élément biographique distingue Jacques Roumain ?",
    options: ["Homme de couleur libre ayant mené une révolte avant l'indépendance", "Lwa associée à l'amour, la beauté et le luxe dans le vodou haïtien", "Chef de la résistance armée contre l'occupation américaine (1915-1934)", "Auteur du roman « Gouverneurs de la rosée »"],
    correct: 3
  },
  {
    q: "Dans quelle période de l'histoire haïtienne situe-t-on Marie Vieux-Chauvet ?",
    options: ["Révolution haïtienne (avant 1804)", "XIXe siècle", "Intemporel (figure du folklore/vodou)", "Milieu XXe siècle (1930-1970)"],
    correct: 3
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Jovenel Moïse ?",
    options: ["Verrettes (Artibonite)", "Saint-Marc", "Trou-du-Nord (Nord-Est)", "Petit-Goâve"],
    correct: 2
  },
  {
    q: "Quand Préfète Duffaut a-t-il été le plus actif ou influent ?",
    options: ["XIXe siècle", "Révolution haïtienne (avant 1804)", "Époque contemporaine (2000 à aujourd'hui)", "Milieu XXe siècle (1930-1970)"],
    correct: 3
  },
  {
    q: "Quel rôle décrit le mieux Henri Christophe dans l'histoire ou la culture haïtienne ?",
    options: ["Père fondateur / figure de l'Indépendance", "Figure religieuse / vodou", "Chef d'État", "Musicien"],
    correct: 0
  },
  {
    q: "Quelle est la nature du rôle joué par Castera Bazile ?",
    options: ["Personnage du folklore", "Chef d'État", "Peintre / artiste visuel", "Athlète / sportif"],
    correct: 2
  },
  {
    q: "Quelle est l'époque de référence pour Fabre Geffrard ?",
    options: ["Intemporel (figure du folklore/vodou)", "Fin XXe siècle (1970-2000)", "Milieu XXe siècle (1930-1970)", "XIXe siècle"],
    correct: 3
  },
  {
    q: "Quelle étiquette correspond le mieux à Jean-Pierre Boyer ?",
    options: ["Intellectuel / militant", "Chef d'État", "Peintre / artiste visuel", "Personnage du folklore"],
    correct: 1
  },
  {
    q: "D'où est originaire Jean-Bertrand Aristide, ou à quel lieu est-il le plus associé ?",
    options: ["Port-au-Prince", "Port-Salut", "Ravine-Sèche", "Gonaïves"],
    correct: 1
  },
  {
    q: "Quelle étiquette correspond le mieux à François Duvalier (Papa Doc) ?",
    options: ["Chef d'État", "Figure religieuse / vodou", "Musicien", "Personnage du folklore"],
    correct: 0
  },
  {
    q: "Parmi les propositions suivantes, laquelle correspond à Dumarsais Estimé ?",
    options: ["Écrivain", "Peintre / artiste visuel", "Chef d'État", "Personnage du folklore"],
    correct: 2
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Alexandre Pétion ?",
    options: ["Lwa protecteur de l'agriculture et des paysans dans le vodou haïtien", "Premier président de la République d'Haïti (partie Sud)", "Lwa associée à l'amour, la beauté et le luxe dans le vodou haïtien", "Héroïne de la Révolution haïtienne exécutée par les troupes françaises"],
    correct: 1
  },
  {
    q: "Quel rôle décrit le mieux Emeline Michel dans l'histoire ou la culture haïtienne ?",
    options: ["Musicien", "Chef d'État", "Intellectuel / militant", "Figure religieuse / vodou"],
    correct: 0
  },
  {
    q: "Dans quelle période de l'histoire haïtienne situe-t-on Jean-Bertrand Aristide ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Révolution haïtienne (avant 1804)", "Début XXe siècle", "Fin XXe siècle (1970-2000)"],
    correct: 3
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Ida Faubert ?",
    options: ["Ancien fonctionnaire de l'ONU nommé Premier ministre à deux reprises", "Poétesse haïtienne ayant vécu principalement en France", "Ancien chanteur de konpa devenu président de la République", "Lwa guerrier associé au fer et à la force dans le vodou haïtien"],
    correct: 1
  },
  {
    q: "Quel rôle décrit le mieux Paul Magloire dans l'histoire ou la culture haïtienne ?",
    options: ["Père fondateur / figure de l'Indépendance", "Écrivain", "Chef d'État", "Athlète / sportif"],
    correct: 2
  },
  {
    q: "Pour quoi Sténio Vincent est-il surtout reconnu ?",
    options: ["Prêtre vodou considéré comme un déclencheur de la révolte des esclaves de 1791", "Président ayant modernisé l'éducation et les relations extérieures d'Haïti", "Président ayant négocié la fin de l'occupation américaine", "Homme de couleur libre ayant mené une révolte avant l'indépendance"],
    correct: 2
  },
  {
    q: "Pour quelle raison Jacques Roumain est-il connu dans l'histoire ou la culture haïtienne ?",
    options: ["Écrivain et diplomate défenseur de la dignité haïtienne", "Romancière contemporaine, autrice de « Saisons sauvages »", "Auteur du roman « Gouverneurs de la rosée »", "Personnage rusé qui déjoue toujours son compère Bouki"],
    correct: 2
  },
  {
    q: "D'où est originaire Kettly Mars, ou à quel lieu est-elle le plus associée ?",
    options: ["Grande Rivière du Nord", "Port-Salut", "Nord (Grande-Rivière-du-Nord)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Quelle période correspond le mieux à Benoît Batraville ?",
    options: ["Intemporel (figure du folklore/vodou)", "Époque contemporaine (2000 à aujourd'hui)", "Début XXe siècle", "XIXe siècle"],
    correct: 2
  },
  {
    q: "Comment reconnaît-on Oswald Durand parmi les autres personnalités haïtiennes ?",
    options: ["Première femme à assurer la présidence d'Haïti (1990-1991)", "Lwa des morts et gardien des cimetières dans le vodou haïtien", "Poète national, auteur du célèbre poème « Choucoune »", "DJ et producteur fusionnant konpa et musique électronique"],
    correct: 2
  },
  {
    q: "À quel moment de l'histoire haïtienne rattache-t-on Vincent Ogé ?",
    options: ["Révolution haïtienne (avant 1804)", "Époque contemporaine (2000 à aujourd'hui)", "XIXe siècle", "Fin XXe siècle (1970-2000)"],
    correct: 0
  },
  {
    q: "Quelle période correspond le mieux à Jean Price-Mars ?",
    options: ["Début XXe siècle", "Fin XXe siècle (1970-2000)", "Époque contemporaine (2000 à aujourd'hui)", "Révolution haïtienne (avant 1804)"],
    correct: 0
  },
  {
    q: "Quel lieu géographique évoque le plus Sanite Bélair ?",
    options: ["Port-au-Prince", "Jérémie (Grande-Anse)", "Verrettes (Artibonite)", "Ravine-Sèche"],
    correct: 2
  },
  {
    q: "Quelle est la nature du rôle joué par Suzanne Comhaire-Sylvain ?",
    options: ["Diplomate / personnalité internationale", "Écrivain", "Musicien", "Intellectuel / militant"],
    correct: 3
  },
  {
    q: "Où situe-t-on l'histoire de Catherine Flon ?",
    options: ["Nord (Grande-Rivière-du-Nord)", "Diaspora (Floride)", "Nord (Arcahaie)", "Port-au-Prince"],
    correct: 2
  },
  {
    q: "Michel Martelly a marqué ou vécu principalement à quelle période ?",
    options: ["Milieu XXe siècle (1930-1970)", "Intemporel (figure du folklore/vodou)", "Époque contemporaine (2000 à aujourd'hui)", "Fin XXe siècle (1970-2000)"],
    correct: 2
  },
  {
    q: "Sanite Bélair appartient à quelle période historique ?",
    options: ["Fin XXe siècle (1970-2000)", "Révolution haïtienne (avant 1804)", "XIXe siècle", "Début XXe siècle"],
    correct: 1
  },
  {
    q: "Comment Charles Oscar Étienne (Jean-Baptiste Chavannes) est-il généralement présenté ?",
    options: ["Personnage du folklore", "Athlète / sportif", "Père fondateur / figure de l'Indépendance", "Chef d'État"],
    correct: 2
  },
  {
    q: "Emeline Michel provient ou est rattachée à quelle zone ?",
    options: ["Gonaïves", "Anse-à-Veau", "Verrettes (Artibonite)", "Diaspora (New Jersey)"],
    correct: 0
  },
  {
    q: "Quel rôle décrit le mieux Gary Victor dans l'histoire ou la culture haïtienne ?",
    options: ["Chef d'État", "Diplomate / personnalité internationale", "Père fondateur / figure de l'Indépendance", "Écrivain"],
    correct: 3
  },
  {
    q: "Quel lieu géographique évoque le plus Dany Laferrière ?",
    options: ["Port-au-Prince", "Sud (Grande-Anse)", "Nord (Bataille de Vertières)", "Cap-Haïtien"],
    correct: 0
  },
  {
    q: "Quand Rigaud Benoit a-t-il été le plus actif ou influent ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "XIXe siècle", "Milieu XXe siècle (1930-1970)", "Début XXe siècle"],
    correct: 2
  },
  {
    q: "Parmi les propositions suivantes, laquelle correspond à François Duvalier (Papa Doc) ?",
    options: ["Diplomate / personnalité internationale", "Chef d'État", "Écrivain", "Peintre / artiste visuel"],
    correct: 1
  },
  {
    q: "Comment reconnaît-on Manno Charlemagne parmi les autres personnalités haïtiennes ?",
    options: ["Chanteur engagé devenu maire de Port-au-Prince", "DJ et producteur fusionnant konpa et musique électronique", "Lwa des eaux et de la mer dans le vodou haïtien", "Président ayant unifié l'ensemble de l'île sous administration haïtienne"],
    correct: 0
  },
  {
    q: "Sténio Vincent a marqué ou vécu principalement à quelle période ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Fin XXe siècle (1970-2000)", "Révolution haïtienne (avant 1804)", "Milieu XXe siècle (1930-1970)"],
    correct: 3
  },
  {
    q: "Ti Manno a marqué ou vécu principalement à quelle période ?",
    options: ["Révolution haïtienne (avant 1804)", "Fin XXe siècle (1970-2000)", "Époque contemporaine (2000 à aujourd'hui)", "Intemporel (figure du folklore/vodou)"],
    correct: 1
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Marie Vieux-Chauvet ?",
    options: ["Port-au-Prince", "Bréda (Cap-Haïtien)", "Plateau Central", "Diaspora (Floride)"],
    correct: 0
  },
  {
    q: "Quelle est l'époque de référence pour Ida Faubert ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Intemporel (figure du folklore/vodou)", "Milieu XXe siècle (1930-1970)", "Début XXe siècle"],
    correct: 3
  },
  {
    q: "Comment reconnaît-on Samuel Dalembert parmi les autres personnalités haïtiennes ?",
    options: ["Pivot haïtiano-canadien ayant joué en NBA", "Première femme à assurer la présidence d'Haïti (1990-1991)", "Footballeur ayant marqué contre l'Italie à la Coupe du monde 1974", "Président ayant unifié l'ensemble de l'île sous administration haïtienne"],
    correct: 0
  },
  {
    q: "Quel rôle décrit le mieux Dumarsais Estimé dans l'histoire ou la culture haïtienne ?",
    options: ["Peintre / artiste visuel", "Intellectuel / militant", "Père fondateur / figure de l'Indépendance", "Chef d'État"],
    correct: 3
  },
  {
    q: "Pour quelle raison François Duvalier (Papa Doc) est-il connu dans l'histoire ou la culture haïtienne ?",
    options: ["Romancier et médecin, auteur du « réalisme merveilleux »", "Président puis « Président à vie » d'Haïti de 1957 à 1971", "Écrivain élu à l'Académie française", "Lwa des eaux et de la mer dans le vodou haïtien"],
    correct: 1
  },
  {
    q: "Quel fait marquant est associé à Malice ?",
    options: ["Lwa serpent, considéré comme l'un des esprits les plus anciens du vodou", "Musicien haïtiano-américain, ex-membre du groupe The Fugees", "Personnage rusé qui déjoue toujours son compère Bouki", "Romancier et médecin, auteur du « réalisme merveilleux »"],
    correct: 2
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Toussaint Louverture ?",
    options: ["Nord (Bataille de Vertières)", "Trou-du-Nord (Nord-Est)", "Diaspora (Canada)", "Bréda (Cap-Haïtien)"],
    correct: 3
  },
  {
    q: "Garry Conille appartient à quelle période historique ?",
    options: ["Intemporel (figure du folklore/vodou)", "Révolution haïtienne (avant 1804)", "Époque contemporaine (2000 à aujourd'hui)", "Milieu XXe siècle (1930-1970)"],
    correct: 2
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Myriam Merlet ?",
    options: ["Homme de couleur libre ayant mené une révolte avant l'indépendance", "Neurochirurgien devenu Premier ministre après l'assassinat de Jovenel Moïse", "Lwa protecteur de l'agriculture et des paysans dans le vodou haïtien", "Militante féministe, cofondatrice d'organisations pour les droits des femmes"],
    correct: 3
  },
  {
    q: "D'où est originaire Préfète Duffaut, ou à quel lieu est-il le plus associé ?",
    options: ["Grande Rivière du Nord", "Jacmel", "Port-Salut", "Jérémie (Grande-Anse)"],
    correct: 1
  },
  {
    q: "De quel type de personnalité s'agit-il pour Préfète Duffaut ?",
    options: ["Diplomate / personnalité internationale", "Peintre / artiste visuel", "Personnage du folklore", "Père fondateur / figure de l'Indépendance"],
    correct: 1
  },
  {
    q: "Où situe-t-on l'histoire de Kettly Mars ?",
    options: ["Port-au-Prince", "Hinche (Centre)", "National / légendaire", "Gonaïves"],
    correct: 0
  },
  {
    q: "Quel fait marquant est associé à Louis Joseph Janvier ?",
    options: ["Écrivain et diplomate défenseur de la dignité haïtienne", "Président ayant négocié la fin de l'occupation américaine", "Musicien haïtiano-américain, ex-membre du groupe The Fugees", "Général cacos ayant poursuivi la résistance après la mort de Péralte"],
    correct: 0
  },
  {
    q: "René Depestre provient ou est rattaché à quelle zone ?",
    options: ["Verrettes (Artibonite)", "Jacmel", "Grande Rivière du Nord", "Nord (Bois-Caïman)"],
    correct: 1
  },
  {
    q: "Comment Charles Oscar Étienne (Jean-Baptiste Chavannes) est-il principalement connu ?",
    options: ["Musicien", "Père fondateur / figure de l'Indépendance", "Intellectuel / militant", "Figure religieuse / vodou"],
    correct: 1
  },
  {
    q: "Où situe-t-on l'histoire de Castera Bazile ?",
    options: ["Dondon (Nord)", "Gonaïves", "Quartier-Morin (Nord)", "Jacmel"],
    correct: 3
  },
  {
    q: "Quelle est la nature du rôle joué par Gary Victor ?",
    options: ["Écrivain", "Peintre / artiste visuel", "Personnage du folklore", "Intellectuel / militant"],
    correct: 0
  },
  {
    q: "Pour quoi Marie Vieux-Chauvet est-elle surtout reconnue ?",
    options: ["Autrice du triptyque romanesque « Amour, Colère et Folie »", "Journaliste et directeur de Radio Haïti Inter, assassiné en 2000", "Lwa serpent, considéré comme l'un des esprits les plus anciens du vodou", "Président puis « Président à vie » d'Haïti de 1957 à 1971"],
    correct: 0
  },
  {
    q: "Préfète Duffaut est principalement associé à quel lieu ?",
    options: ["Jacmel", "National / légendaire", "Verrettes (Artibonite)", "Sud (Grande-Anse)"],
    correct: 0
  },
  {
    q: "Où situe-t-on l'histoire de Ezili Freda ?",
    options: ["National / légendaire", "Diaspora (Canada)", "Diaspora (Floride)", "Quartier-Morin (Nord)"],
    correct: 0
  },
  {
    q: "Quand Frankétienne a-t-il été le plus actif ou influent ?",
    options: ["Début XXe siècle", "Fin XXe siècle (1970-2000)", "Époque contemporaine (2000 à aujourd'hui)", "Intemporel (figure du folklore/vodou)"],
    correct: 1
  },
  {
    q: "Pour quelle raison Coupé Cloué est-il connu dans l'histoire ou la culture haïtienne ?",
    options: ["Chanteur engagé devenu maire de Port-au-Prince", "Militaire devenu président dans les années 1950", "Footballeur devenu icône du konpa avec l'Ensemble Select", "Romancier et médecin, auteur du « réalisme merveilleux »"],
    correct: 2
  },
  {
    q: "Pour quelle raison Jean Price-Mars est-il connu dans l'histoire ou la culture haïtienne ?",
    options: ["Compagnon de Vincent Ogé dans la lutte pour les droits des libres de couleur", "Neurochirurgien devenu Premier ministre après l'assassinat de Jovenel Moïse", "Ethnologue, auteur de « Ainsi parla l'oncle », père de l'indigénisme haïtien", "Haïtiano-canadienne, ancienne Gouverneure générale du Canada"],
    correct: 2
  },
  {
    q: "D'où est originaire Sanite Bélair, ou à quel lieu est-elle le plus associée ?",
    options: ["Dondon (Nord)", "Verrettes (Artibonite)", "Nord (Bois-Caïman)", "Nord (Arcahaie)"],
    correct: 1
  },
  {
    q: "Jovenel Moïse appartient à quel type de figure historique ou culturelle ?",
    options: ["Musicien", "Athlète / sportif", "Figure religieuse / vodou", "Chef d'État"],
    correct: 3
  },
  {
    q: "À quelle époque associe-t-on Lyonel Trouillot ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Intemporel (figure du folklore/vodou)", "Début XXe siècle", "Fin XXe siècle (1970-2000)"],
    correct: 0
  },
  {
    q: "Où situe-t-on l'histoire de Papa Legba ?",
    options: ["Dondon (Nord)", "National / légendaire", "Saint-Marc", "Ravine-Sèche"],
    correct: 1
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Jean-Jacques Dessalines ?",
    options: ["Lwa des morts et gardien des cimetières dans le vodou haïtien", "Chanteur engagé devenu maire de Port-au-Prince", "Proclama l'indépendance d'Haïti en 1804 et en devint le premier chef d'État", "Peintre naïf associé au Centre d'Art de Port-au-Prince"],
    correct: 2
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Frankétienne ?",
    options: ["Écrivain, peintre et dramaturge, pionnier du spiralisme", "Personnage rusé qui déjoue toujours son compère Bouki", "Première femme haïtienne docteure en lettres, anthropologue", "Romancière haïtiano-américaine, autrice de « Breath, Eyes, Memory »"],
    correct: 0
  },
  {
    q: "Dans quelle catégorie situerait-on Samuel Dalembert ?",
    options: ["Peintre / artiste visuel", "Écrivain", "Père fondateur / figure de l'Indépendance", "Athlète / sportif"],
    correct: 3
  },
  {
    q: "Comment reconnaît-on Jacques Roumain parmi les autres personnalités haïtiennes ?",
    options: ["Poète national, auteur du célèbre poème « Choucoune »", "Jeune héros malin des contes traditionnels haïtiens", "Auteur du roman « Gouverneurs de la rosée »", "Ancien prêtre devenu président à deux reprises"],
    correct: 2
  },
  {
    q: "Charles Oscar Étienne (Jean-Baptiste Chavannes) appartient à quelle période historique ?",
    options: ["Début XXe siècle", "Révolution haïtienne (avant 1804)", "XIXe siècle", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 1
  },
  {
    q: "Parmi les propositions suivantes, laquelle correspond à Rigaud Benoit ?",
    options: ["Personnage du folklore", "Père fondateur / figure de l'Indépendance", "Peintre / artiste visuel", "Écrivain"],
    correct: 2
  },
  {
    q: "Dans quelle catégorie situerait-on Castera Bazile ?",
    options: ["Peintre / artiste visuel", "Diplomate / personnalité internationale", "Intellectuel / militant", "Père fondateur / figure de l'Indépendance"],
    correct: 0
  },
  {
    q: "Quand Suzanne Comhaire-Sylvain a-t-elle été la plus active ou influente ?",
    options: ["Milieu XXe siècle (1930-1970)", "XIXe siècle", "Fin XXe siècle (1970-2000)", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 0
  },
  {
    q: "Parmi les propositions suivantes, laquelle correspond à Yvonne Hakim-Rimpel ?",
    options: ["Chef d'État", "Figure religieuse / vodou", "Diplomate / personnalité internationale", "Intellectuel / militant"],
    correct: 3
  },
  {
    q: "De quel type de personnalité s'agit-il pour Emeline Michel ?",
    options: ["Chef d'État", "Musicien", "Peintre / artiste visuel", "Athlète / sportif"],
    correct: 1
  },
  {
    q: "Dans quelle catégorie situerait-on Bouki ?",
    options: ["Personnage du folklore", "Figure religieuse / vodou", "Intellectuel / militant", "Père fondateur / figure de l'Indépendance"],
    correct: 0
  },
  {
    q: "Comment reconnaît-on Michaëlle Jean parmi les autres personnalités haïtiennes ?",
    options: ["Artiste contemporain mêlant histoire haïtienne et symbolisme vodou", "Ancien fonctionnaire de l'ONU nommé Premier ministre à deux reprises", "Général célèbre pour sa bravoure à la bataille de Vertières", "Haïtiano-canadienne, ancienne Gouverneure générale du Canada"],
    correct: 3
  },
  {
    q: "Où Vincent Ogé a-t-il vécu ou marqué l'histoire ?",
    options: ["Petit-Goâve", "Diaspora (États-Unis)", "Dondon (Nord)", "Port-au-Prince"],
    correct: 2
  },
  {
    q: "Quel fait marquant est associé à Jean-Claude Duvalier (Baby Doc) ?",
    options: ["Chanteur engagé devenu maire de Port-au-Prince", "Musicien haïtiano-américain, ex-membre du groupe The Fugees", "Succéda à son père comme « Président à vie » de 1971 à 1986", "Auteur du roman « Gouverneurs de la rosée »"],
    correct: 2
  },
  {
    q: "Quel rôle décrit le mieux Ti Jean dans l'histoire ou la culture haïtienne ?",
    options: ["Musicien", "Personnage du folklore", "Intellectuel / militant", "Athlète / sportif"],
    correct: 1
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Jean-Jacques Dessalines ?",
    options: ["Diaspora (Canada)", "Port-au-Prince", "Nord (Grande-Rivière-du-Nord)", "Saint-Marc"],
    correct: 2
  },
  {
    q: "De quel type de personnalité s'agit-il pour Oswald Durand ?",
    options: ["Diplomate / personnalité internationale", "Figure religieuse / vodou", "Personnage du folklore", "Écrivain"],
    correct: 3
  },
  {
    q: "Quelle étiquette correspond le mieux à Jean-Claude Duvalier (Baby Doc) ?",
    options: ["Chef d'État", "Écrivain", "Figure religieuse / vodou", "Athlète / sportif"],
    correct: 0
  },
  {
    q: "D'où est originaire Jean-Claude Duvalier (Baby Doc), ou à quel lieu est-il le plus associé ?",
    options: ["Port-au-Prince", "Verrettes (Artibonite)", "Trou-du-Nord (Nord-Est)", "Sud (Grande-Anse)"],
    correct: 0
  },
  {
    q: "Suzanne Comhaire-Sylvain appartient à quel type de figure historique ou culturelle ?",
    options: ["Diplomate / personnalité internationale", "Musicien", "Écrivain", "Intellectuel / militant"],
    correct: 3
  },
  {
    q: "Préfète Duffaut provient ou est rattaché à quelle zone ?",
    options: ["Jacmel", "Petit-Goâve", "Diaspora (États-Unis)", "Diaspora (New Jersey)"],
    correct: 0
  },
  {
    q: "Quel rôle décrit le mieux Michel Martelly dans l'histoire ou la culture haïtienne ?",
    options: ["Père fondateur / figure de l'Indépendance", "Peintre / artiste visuel", "Chef d'État", "Athlète / sportif"],
    correct: 2
  },
  {
    q: "Dumarsais Estimé appartient à quel type de figure historique ou culturelle ?",
    options: ["Chef d'État", "Athlète / sportif", "Peintre / artiste visuel", "Personnage du folklore"],
    correct: 0
  },
  {
    q: "Oswald Durand provient ou est rattaché à quelle zone ?",
    options: ["Verrettes (Artibonite)", "Nord (Bataille de Vertières)", "Cap-Haïtien", "Port-au-Prince"],
    correct: 2
  },
  {
    q: "Où Edwidge Danticat a-t-elle vécu ou marqué l'histoire ?",
    options: ["Sud (Grande-Anse)", "Diaspora (États-Unis)", "Port-au-Prince", "Jacmel"],
    correct: 3
  },
  {
    q: "Fabre Geffrard a marqué ou vécu principalement à quelle période ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Milieu XXe siècle (1930-1970)", "Révolution haïtienne (avant 1804)", "XIXe siècle"],
    correct: 3
  },
  {
    q: "Quelle étiquette correspond le mieux à Toussaint Louverture ?",
    options: ["Figure religieuse / vodou", "Chef d'État", "Père fondateur / figure de l'Indépendance", "Écrivain"],
    correct: 2
  },
  {
    q: "Quel élément biographique distingue Vincent Ogé ?",
    options: ["Chanteur de konpa social devenu une icône engagée", "Autrice du triptyque romanesque « Amour, Colère et Folie »", "Homme de couleur libre ayant mené une révolte avant l'indépendance", "Peintre ayant participé aux fresques de la Cathédrale Sainte-Trinité"],
    correct: 2
  },
  {
    q: "D'où est originaire Duckens Nazon, ou à quel lieu est-il le plus associé ?",
    options: ["Dondon (Nord)", "Nord (Arcahaie)", "Port-au-Prince", "Diaspora (Floride)"],
    correct: 2
  },
  {
    q: "D'où est originaire Philomé Obin, ou à quel lieu est-il le plus associé ?",
    options: ["Plateau Central", "Nord (Grande-Rivière-du-Nord)", "Cap-Haïtien", "Saint-Marc"],
    correct: 2
  },
  {
    q: "Dans quelle catégorie situerait-on Kettly Mars ?",
    options: ["Père fondateur / figure de l'Indépendance", "Écrivain", "Chef d'État", "Musicien"],
    correct: 1
  },
  {
    q: "Quel rôle décrit le mieux Oswald Durand dans l'histoire ou la culture haïtienne ?",
    options: ["Écrivain", "Musicien", "Athlète / sportif", "Personnage du folklore"],
    correct: 0
  },
  {
    q: "Comment reconnaît-on Ertha Pascal-Trouillot parmi les autres personnalités haïtiennes ?",
    options: ["Footballeur devenu icône du konpa avec l'Ensemble Select", "Héroïne de la Révolution haïtienne exécutée par les troupes françaises", "Première femme à assurer la présidence d'Haïti (1990-1991)", "Peintre ayant participé aux fresques de la Cathédrale Sainte-Trinité"],
    correct: 2
  },
  {
    q: "Parmi les propositions suivantes, laquelle correspond à Préfète Duffaut ?",
    options: ["Intellectuel / militant", "Peintre / artiste visuel", "Père fondateur / figure de l'Indépendance", "Diplomate / personnalité internationale"],
    correct: 1
  },
  {
    q: "Où situe-t-on l'histoire de Boukman Dutty ?",
    options: ["Hinche (Centre)", "Jacmel", "Nord (Bois-Caïman)", "Jérémie (Grande-Anse)"],
    correct: 2
  },
  {
    q: "Parmi les propositions suivantes, laquelle correspond à Louis Joseph Janvier ?",
    options: ["Intellectuel / militant", "Peintre / artiste visuel", "Athlète / sportif", "Chef d'État"],
    correct: 0
  },
  {
    q: "À quelle époque associe-t-on Paul Magloire ?",
    options: ["Révolution haïtienne (avant 1804)", "Fin XXe siècle (1970-2000)", "Milieu XXe siècle (1930-1970)", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 2
  },
  {
    q: "Quelle période correspond le mieux à Catherine Flon ?",
    options: ["Révolution haïtienne (avant 1804)", "Intemporel (figure du folklore/vodou)", "Milieu XXe siècle (1930-1970)", "Début XXe siècle"],
    correct: 0
  },
  {
    q: "Comment Michael Brun est-il principalement connu ?",
    options: ["Musicien", "Intellectuel / militant", "Figure religieuse / vodou", "Diplomate / personnalité internationale"],
    correct: 0
  },
  {
    q: "Comment Henri Christophe est-il principalement connu ?",
    options: ["Personnage du folklore", "Diplomate / personnalité internationale", "Intellectuel / militant", "Père fondateur / figure de l'Indépendance"],
    correct: 3
  },
  {
    q: "Quelle étiquette correspond le mieux à Lyonel Trouillot ?",
    options: ["Écrivain", "Athlète / sportif", "Diplomate / personnalité internationale", "Intellectuel / militant"],
    correct: 0
  },
  {
    q: "Pour quelle raison Castera Bazile est-il connu dans l'histoire ou la culture haïtienne ?",
    options: ["Ethnologue, auteur de « Ainsi parla l'oncle », père de l'indigénisme haïtien", "Peintre ayant participé aux fresques de la Cathédrale Sainte-Trinité", "Auteur du récit autobiographique sur son enfance de « restavèk »", "Président puis « Président à vie » d'Haïti de 1957 à 1971"],
    correct: 1
  },
  {
    q: "Papa Legba appartient à quel type de figure historique ou culturelle ?",
    options: ["Diplomate / personnalité internationale", "Figure religieuse / vodou", "Musicien", "Intellectuel / militant"],
    correct: 1
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Édouard Duval-Carrié ?",
    options: ["Général cacos ayant poursuivi la résistance après la mort de Péralte", "Artiste contemporain mêlant histoire haïtienne et symbolisme vodou", "DJ et producteur fusionnant konpa et musique électronique", "Jeune héros malin des contes traditionnels haïtiens"],
    correct: 1
  },
  {
    q: "Quel fait marquant est associé à Alexandre Pétion ?",
    options: ["Premier président de la République d'Haïti (partie Sud)", "Poétesse haïtienne ayant vécu principalement en France", "Militante féministe, cofondatrice d'organisations pour les droits des femmes", "Personnage naïf et souvent trompé dans les contes populaires haïtiens"],
    correct: 0
  },
  {
    q: "À quel moment de l'histoire haïtienne rattache-t-on François Duvalier (Papa Doc) ?",
    options: ["Intemporel (figure du folklore/vodou)", "XIXe siècle", "Fin XXe siècle (1970-2000)", "Milieu XXe siècle (1930-1970)"],
    correct: 3
  },
  {
    q: "Jean Dominique provient ou est rattaché à quelle zone ?",
    options: ["Diaspora (Floride)", "Nord (Grande-Rivière-du-Nord)", "Port-au-Prince", "Jérémie (Grande-Anse)"],
    correct: 2
  },
  {
    q: "Ariel Henry appartient à quelle période historique ?",
    options: ["XIXe siècle", "Début XXe siècle", "Révolution haïtienne (avant 1804)", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 3
  },
  {
    q: "Quel fait marquant est associé à Vincent Ogé ?",
    options: ["Auteur du récit autobiographique sur son enfance de « restavèk »", "Homme de couleur libre ayant mené une révolte avant l'indépendance", "Musicien haïtiano-américain, ex-membre du groupe The Fugees", "Écrivain, peintre et dramaturge, pionnier du spiralisme"],
    correct: 1
  },
  {
    q: "Comment reconnaît-on Boukman Dutty parmi les autres personnalités haïtiennes ?",
    options: ["Prêtre vodou considéré comme un déclencheur de la révolte des esclaves de 1791", "Romancière contemporaine, autrice de « Saisons sauvages »", "Président ayant unifié l'ensemble de l'île sous administration haïtienne", "Général célèbre pour sa bravoure à la bataille de Vertières"],
    correct: 0
  },
  {
    q: "Comment classerait-on René Depestre parmi les personnalités haïtiennes ?",
    options: ["Athlète / sportif", "Musicien", "Écrivain", "Peintre / artiste visuel"],
    correct: 2
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Michaëlle Jean ?",
    options: ["Diaspora (Floride)", "Port-au-Prince", "Diaspora (Canada)", "Jérémie (Grande-Anse)"],
    correct: 2
  },
  {
    q: "Pour quelle raison Azaka (Papa Zaka) est-il connu dans l'histoire ou la culture haïtienne ?",
    options: ["Lwa protecteur de l'agriculture et des paysans dans le vodou haïtien", "Footballeur ayant marqué contre l'Italie à la Coupe du monde 1974", "Chef militaire et politique, figure centrale de la Révolution haïtienne", "Peintre ayant participé aux fresques de la Cathédrale Sainte-Trinité"],
    correct: 0
  },
  {
    q: "Emmanuel Sanon appartient à quel type de figure historique ou culturelle ?",
    options: ["Père fondateur / figure de l'Indépendance", "Écrivain", "Athlète / sportif", "Personnage du folklore"],
    correct: 2
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Michaëlle Jean ?",
    options: ["Quartier-Morin (Nord)", "Diaspora (Canada)", "National / légendaire", "Petit-Goâve"],
    correct: 1
  },
  {
    q: "Comment classerait-on Anthony Phelps parmi les personnalités haïtiennes ?",
    options: ["Figure religieuse / vodou", "Chef d'État", "Intellectuel / militant", "Écrivain"],
    correct: 3
  },
  {
    q: "Jean-Bertrand Aristide a marqué ou vécu principalement à quelle période ?",
    options: ["Révolution haïtienne (avant 1804)", "Fin XXe siècle (1970-2000)", "Époque contemporaine (2000 à aujourd'hui)", "Début XXe siècle"],
    correct: 1
  },
  {
    q: "Quel rôle décrit le mieux Edwidge Danticat dans l'histoire ou la culture haïtienne ?",
    options: ["Personnage du folklore", "Figure religieuse / vodou", "Écrivain", "Chef d'État"],
    correct: 2
  },
  {
    q: "Dans quelle catégorie situerait-on François Duvalier (Papa Doc) ?",
    options: ["Chef d'État", "Musicien", "Personnage du folklore", "Diplomate / personnalité internationale"],
    correct: 0
  },
  {
    q: "Comment reconnaît-on Jean Price-Mars parmi les autres personnalités haïtiennes ?",
    options: ["Premier président noir élu après une longue période d'influence mulâtre", "Chef de file de l'école du Cap dans la peinture haïtienne", "Jeune héros malin des contes traditionnels haïtiens", "Ethnologue, auteur de « Ainsi parla l'oncle », père de l'indigénisme haïtien"],
    correct: 3
  },
  {
    q: "Louis Joseph Janvier a marqué ou vécu principalement à quelle période ?",
    options: ["XIXe siècle", "Début XXe siècle", "Fin XXe siècle (1970-2000)", "Intemporel (figure du folklore/vodou)"],
    correct: 0
  },
  {
    q: "Quelle est la nature du rôle joué par Ogou ?",
    options: ["Intellectuel / militant", "Peintre / artiste visuel", "Diplomate / personnalité internationale", "Figure religieuse / vodou"],
    correct: 3
  },
  {
    q: "Quel rôle décrit le mieux Castera Bazile dans l'histoire ou la culture haïtienne ?",
    options: ["Écrivain", "Diplomate / personnalité internationale", "Père fondateur / figure de l'Indépendance", "Peintre / artiste visuel"],
    correct: 3
  },
  {
    q: "Quel rôle décrit le mieux Jovenel Moïse dans l'histoire ou la culture haïtienne ?",
    options: ["Diplomate / personnalité internationale", "Écrivain", "Musicien", "Chef d'État"],
    correct: 3
  },
  {
    q: "Comment Préfète Duffaut est-il principalement connu ?",
    options: ["Chef d'État", "Père fondateur / figure de l'Indépendance", "Peintre / artiste visuel", "Diplomate / personnalité internationale"],
    correct: 2
  },
  {
    q: "Comment Catherine Flon est-elle généralement présentée ?",
    options: ["Intellectuel / militant", "Chef d'État", "Père fondateur / figure de l'Indépendance", "Musicien"],
    correct: 2
  },
  {
    q: "Boniface Alexandre appartient à quelle période historique ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Début XXe siècle", "XIXe siècle", "Révolution haïtienne (avant 1804)"],
    correct: 0
  },
  {
    q: "Pour quelle raison Anthony Phelps est-il connu dans l'histoire ou la culture haïtienne ?",
    options: ["Peintre connu pour ses « villes imaginaires » aux couleurs vives", "Écrivain et diplomate défenseur de la dignité haïtienne", "Romancière haïtiano-américaine, autrice de « Breath, Eyes, Memory »", "Poète et romancier, figure du mouvement Haïti Littéraire"],
    correct: 3
  },
  {
    q: "À quel moment de l'histoire haïtienne rattache-t-on Dumarsais Estimé ?",
    options: ["Milieu XXe siècle (1930-1970)", "Époque contemporaine (2000 à aujourd'hui)", "Fin XXe siècle (1970-2000)", "Révolution haïtienne (avant 1804)"],
    correct: 0
  },
  {
    q: "Dumarsais Estimé est principalement associé à quel lieu ?",
    options: ["Quartier-Morin (Nord)", "Diaspora (Canada)", "Port-au-Prince", "Verrettes (Artibonite)"],
    correct: 3
  },
  {
    q: "Duckens Nazon a marqué ou vécu principalement à quelle période ?",
    options: ["Milieu XXe siècle (1930-1970)", "Fin XXe siècle (1970-2000)", "XIXe siècle", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 3
  },
  {
    q: "Où situe-t-on l'histoire de Ti Jean ?",
    options: ["Plateau Central", "Port-au-Prince", "National / légendaire", "Quartier-Morin (Nord)"],
    correct: 2
  },
  {
    q: "Parmi les propositions suivantes, laquelle correspond à Ti Jean ?",
    options: ["Écrivain", "Chef d'État", "Intellectuel / militant", "Personnage du folklore"],
    correct: 3
  },
  {
    q: "Quel lieu géographique évoque le plus Leslie Manigat ?",
    options: ["Hinche (Centre)", "Saint-Marc", "Port-au-Prince", "Gonaïves"],
    correct: 2
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Bouki ?",
    options: ["Succéda à son père comme « Président à vie » de 1971 à 1986", "Personnage naïf et souvent trompé dans les contes populaires haïtiens", "Prêtresse vodou associée à la cérémonie du Bois-Caïman", "Président élu en 2016, assassiné en fonction en 2021"],
    correct: 1
  },
  {
    q: "Quel rôle décrit le mieux Fabre Geffrard dans l'histoire ou la culture haïtienne ?",
    options: ["Athlète / sportif", "Diplomate / personnalité internationale", "Chef d'État", "Personnage du folklore"],
    correct: 2
  },
  {
    q: "François Duvalier (Papa Doc) appartient à quelle période historique ?",
    options: ["Intemporel (figure du folklore/vodou)", "Milieu XXe siècle (1930-1970)", "Début XXe siècle", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 1
  },
  {
    q: "Dans quelle catégorie situerait-on Toto Bissainthe ?",
    options: ["Personnage du folklore", "Musicien", "Figure religieuse / vodou", "Écrivain"],
    correct: 1
  },
  {
    q: "Où Malice a-t-il vécu ou marqué l'histoire ?",
    options: ["National / légendaire", "Bréda (Cap-Haïtien)", "Diaspora (États-Unis)", "Port-au-Prince"],
    correct: 0
  },
  {
    q: "De quel type de personnalité s'agit-il pour Benoît Batraville ?",
    options: ["Père fondateur / figure de l'Indépendance", "Écrivain", "Diplomate / personnalité internationale", "Personnage du folklore"],
    correct: 0
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Jean-Robert Cadet ?",
    options: ["Diaspora (New Jersey)", "Plateau Central", "Ravine-Sèche", "Diaspora (États-Unis)"],
    correct: 3
  },
  {
    q: "Quelle étiquette correspond le mieux à Marie Vieux-Chauvet ?",
    options: ["Personnage du folklore", "Chef d'État", "Écrivain", "Musicien"],
    correct: 2
  },
  {
    q: "À quel moment de l'histoire haïtienne rattache-t-on Duckens Nazon ?",
    options: ["Intemporel (figure du folklore/vodou)", "Révolution haïtienne (avant 1804)", "Époque contemporaine (2000 à aujourd'hui)", "Début XXe siècle"],
    correct: 2
  },
  {
    q: "Quel lieu géographique évoque le plus Wyclef Jean ?",
    options: ["Verrettes (Artibonite)", "Diaspora (New Jersey)", "Port-Salut", "Grande Rivière du Nord"],
    correct: 1
  },
  {
    q: "Dans quelle catégorie situerait-on Ariel Henry ?",
    options: ["Diplomate / personnalité internationale", "Personnage du folklore", "Peintre / artiste visuel", "Chef d'État"],
    correct: 3
  },
  {
    q: "Manno Charlemagne appartient à quelle période historique ?",
    options: ["Fin XXe siècle (1970-2000)", "Milieu XXe siècle (1930-1970)", "Révolution haïtienne (avant 1804)", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 0
  },
  {
    q: "Pour quoi Jean-Jacques Dessalines est-il surtout reconnu ?",
    options: ["Romancier connu pour ses œuvres mêlant réalisme et fantastique", "Proclama l'indépendance d'Haïti en 1804 et en devint le premier chef d'État", "Président ayant unifié l'ensemble de l'île sous administration haïtienne", "Première femme à assurer la présidence d'Haïti (1990-1991)"],
    correct: 1
  },
  {
    q: "Pour quoi Myriam Merlet est-elle surtout reconnue ?",
    options: ["Ethnologue, auteur de « Ainsi parla l'oncle », père de l'indigénisme haïtien", "Chanteur engagé devenu maire de Port-au-Prince", "Romancière haïtiano-américaine, autrice de « Breath, Eyes, Memory »", "Militante féministe, cofondatrice d'organisations pour les droits des femmes"],
    correct: 3
  },
  {
    q: "Pour quelle raison Toto Bissainthe est-elle connue dans l'histoire ou la culture haïtienne ?",
    options: ["Héroïne de la Révolution haïtienne exécutée par les troupes françaises", "Succéda à son père comme « Président à vie » de 1971 à 1986", "Lwa protecteur de l'agriculture et des paysans dans le vodou haïtien", "Chanteuse et actrice, figure de la chanson racine haïtienne"],
    correct: 3
  },
  {
    q: "Comment classerait-on Édouard Duval-Carrié parmi les personnalités haïtiennes ?",
    options: ["Père fondateur / figure de l'Indépendance", "Peintre / artiste visuel", "Athlète / sportif", "Personnage du folklore"],
    correct: 1
  },
  {
    q: "Où situe-t-on l'histoire de Edwidge Danticat ?",
    options: ["Jérémie (Grande-Anse)", "Port-au-Prince", "Verrettes (Artibonite)", "Jacmel"],
    correct: 1
  },
  {
    q: "Quel lieu géographique évoque le plus Sténio Vincent ?",
    options: ["Jérémie (Grande-Anse)", "Port-au-Prince", "Jacmel", "Gonaïves"],
    correct: 3
  },
  {
    q: "Quand Duckens Nazon a-t-il été le plus actif ou influent ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Intemporel (figure du folklore/vodou)", "Fin XXe siècle (1970-2000)", "Début XXe siècle"],
    correct: 0
  },
  {
    q: "Où situe-t-on l'histoire de Préfète Duffaut ?",
    options: ["Nord (Cap-Haïtien)", "National / légendaire", "Jacmel", "Saint-Marc"],
    correct: 2
  },
  {
    q: "Comment classerait-on Paul Magloire parmi les personnalités haïtiennes ?",
    options: ["Peintre / artiste visuel", "Intellectuel / militant", "Personnage du folklore", "Chef d'État"],
    correct: 3
  },
  {
    q: "Quelle est la nature du rôle joué par Rigaud Benoit ?",
    options: ["Chef d'État", "Père fondateur / figure de l'Indépendance", "Musicien", "Peintre / artiste visuel"],
    correct: 3
  },
  {
    q: "Comment Édouard Duval-Carrié est-il généralement présenté ?",
    options: ["Peintre / artiste visuel", "Athlète / sportif", "Diplomate / personnalité internationale", "Écrivain"],
    correct: 0
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Anténor Firmin ?",
    options: ["Général cacos ayant poursuivi la résistance après la mort de Péralte", "Écrivain élu à l'Académie française", "Boxeur professionnel haïtiano-américain, ancien champion du monde", "Anthropologue, auteur de « De l'égalité des races humaines »"],
    correct: 3
  },
  {
    q: "Dans quelle période de l'histoire haïtienne situe-t-on Emeline Michel ?",
    options: ["Début XXe siècle", "Intemporel (figure du folklore/vodou)", "Fin XXe siècle (1970-2000)", "XIXe siècle"],
    correct: 2
  },
  {
    q: "D'où est originaire Henri Christophe, ou à quel lieu est-il le plus associé ?",
    options: ["National / légendaire", "Nord (Cap-Haïtien)", "Verrettes (Artibonite)", "Petit-Goâve"],
    correct: 1
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Philomé Obin ?",
    options: ["Trou-du-Nord (Nord-Est)", "Port-au-Prince", "Jacmel", "Cap-Haïtien"],
    correct: 3
  },
  {
    q: "Quel élément biographique distingue Toto Bissainthe ?",
    options: ["Général célèbre pour sa bravoure à la bataille de Vertières", "Chanteuse et actrice, figure de la chanson racine haïtienne", "Ancien fonctionnaire de l'ONU nommé Premier ministre à deux reprises", "Poète et romancier, figure du mouvement Haïti Littéraire"],
    correct: 1
  },
  {
    q: "Wyclef Jean est principalement associé à quel lieu ?",
    options: ["Diaspora (New Jersey)", "Diaspora (Canada)", "Verrettes (Artibonite)", "Hinche (Centre)"],
    correct: 0
  },
  {
    q: "Quel lieu géographique évoque le plus Fabre Geffrard ?",
    options: ["Ravine-Sèche", "Anse-à-Veau", "Grande Rivière du Nord", "Diaspora (New Jersey)"],
    correct: 1
  },
  {
    q: "Comment reconnaît-on Jean Dominique parmi les autres personnalités haïtiennes ?",
    options: ["Ancien chanteur de konpa devenu président de la République", "Journaliste et directeur de Radio Haïti Inter, assassiné en 2000", "Footballeur ayant marqué contre l'Italie à la Coupe du monde 1974", "Seul président haïtien à avoir achevé deux mandats non consécutifs"],
    correct: 1
  },
  {
    q: "Jovenel Moïse provient ou est rattaché à quelle zone ?",
    options: ["Port-au-Prince", "Trou-du-Nord (Nord-Est)", "Jacmel", "Bréda (Cap-Haïtien)"],
    correct: 1
  },
  {
    q: "Dans quelle période de l'histoire haïtienne situe-t-on Jean-Pierre Boyer ?",
    options: ["XIXe siècle", "Intemporel (figure du folklore/vodou)", "Époque contemporaine (2000 à aujourd'hui)", "Milieu XXe siècle (1930-1970)"],
    correct: 0
  },
  {
    q: "De quel type de personnalité s'agit-il pour Jean Price-Mars ?",
    options: ["Diplomate / personnalité internationale", "Musicien", "Intellectuel / militant", "Père fondateur / figure de l'Indépendance"],
    correct: 2
  },
  {
    q: "Quelle étiquette correspond le mieux à Michael Brun ?",
    options: ["Musicien", "Figure religieuse / vodou", "Intellectuel / militant", "Chef d'État"],
    correct: 0
  },
  {
    q: "Quel élément biographique distingue Wyclef Jean ?",
    options: ["Héroïne de la Révolution haïtienne exécutée par les troupes françaises", "Musicien haïtiano-américain, ex-membre du groupe The Fugees", "Poétesse haïtienne ayant vécu principalement en France", "Prêtre vodou considéré comme un déclencheur de la révolte des esclaves de 1791"],
    correct: 1
  },
  {
    q: "Quel rôle décrit le mieux Ida Faubert dans l'histoire ou la culture haïtienne ?",
    options: ["Écrivain", "Diplomate / personnalité internationale", "Athlète / sportif", "Chef d'État"],
    correct: 0
  },
  {
    q: "Quel élément biographique distingue Manno Charlemagne ?",
    options: ["Peintre connu pour ses « villes imaginaires » aux couleurs vives", "Poète national, auteur du célèbre poème « Choucoune »", "Ancien prêtre devenu président à deux reprises", "Chanteur engagé devenu maire de Port-au-Prince"],
    correct: 3
  },
  {
    q: "Où Oswald Durand a-t-il vécu ou marqué l'histoire ?",
    options: ["Saint-Marc", "Plateau Central", "Dondon (Nord)", "Cap-Haïtien"],
    correct: 3
  },
  {
    q: "Quelle étiquette correspond le mieux à Edwidge Danticat ?",
    options: ["Peintre / artiste visuel", "Personnage du folklore", "Athlète / sportif", "Écrivain"],
    correct: 3
  },
  {
    q: "Pour quoi Ariel Henry est-il surtout reconnu ?",
    options: ["Lwa gardien des carrefours et intermédiaire avec les autres esprits", "Poétesse haïtienne ayant vécu principalement en France", "Prêtresse vodou associée à la cérémonie du Bois-Caïman", "Neurochirurgien devenu Premier ministre après l'assassinat de Jovenel Moïse"],
    correct: 3
  },
  {
    q: "Dans quelle période de l'histoire haïtienne situe-t-on Gary Victor ?",
    options: ["Révolution haïtienne (avant 1804)", "Début XXe siècle", "Fin XXe siècle (1970-2000)", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 3
  },
  {
    q: "Comment Suzanne Comhaire-Sylvain est-elle généralement présentée ?",
    options: ["Diplomate / personnalité internationale", "Intellectuel / militant", "Chef d'État", "Personnage du folklore"],
    correct: 1
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Samuel Dalembert ?",
    options: ["Sud (Grande-Anse)", "Ravine-Sèche", "Port-au-Prince", "Grande Rivière du Nord"],
    correct: 2
  },
  {
    q: "D'où est originaire Charles Oscar Étienne (Jean-Baptiste Chavannes), ou à quel lieu est-il le plus associé ?",
    options: ["Saint-Marc", "Jacmel", "Sud (Grande-Anse)", "Petit-Goâve"],
    correct: 2
  },
  {
    q: "Pour quoi Ertha Pascal-Trouillot est-elle surtout reconnue ?",
    options: ["Première femme haïtienne docteure en lettres, anthropologue", "Poète et romancier, prix Renaudot pour « Hadriana dans tous mes rêves »", "Première femme à assurer la présidence d'Haïti (1990-1991)", "Journaliste féministe pionnière en Haïti"],
    correct: 2
  },
  {
    q: "Qu'est-ce qui rend Damballah célèbre ou important ?",
    options: ["Militante féministe, cofondatrice d'organisations pour les droits des femmes", "Lwa serpent, considéré comme l'un des esprits les plus anciens du vodou", "Jeune héros malin des contes traditionnels haïtiens", "Succéda à son père comme « Président à vie » de 1971 à 1986"],
    correct: 1
  },
  {
    q: "Quelle étiquette correspond le mieux à Ida Faubert ?",
    options: ["Peintre / artiste visuel", "Écrivain", "Intellectuel / militant", "Diplomate / personnalité internationale"],
    correct: 1
  },
  {
    q: "Charles Oscar Étienne (Jean-Baptiste Chavannes) est principalement associé à quel lieu ?",
    options: ["Sud (Grande-Anse)", "Port-au-Prince", "Quartier-Morin (Nord)", "Cap-Haïtien"],
    correct: 0
  },
  {
    q: "Quel fait marquant est associé à Jean-Jacques Dessalines ?",
    options: ["Boxeur professionnel haïtiano-américain, ancien champion du monde", "Proclama l'indépendance d'Haïti en 1804 et en devint le premier chef d'État", "Auteur du roman « Gouverneurs de la rosée »", "Personnage naïf et souvent trompé dans les contes populaires haïtiens"],
    correct: 1
  },
  {
    q: "Toto Bissainthe appartient à quelle période historique ?",
    options: ["Début XXe siècle", "Fin XXe siècle (1970-2000)", "Milieu XXe siècle (1930-1970)", "XIXe siècle"],
    correct: 1
  },
  {
    q: "Quelle est la nature du rôle joué par Jacques Stephen Alexis ?",
    options: ["Écrivain", "Figure religieuse / vodou", "Athlète / sportif", "Père fondateur / figure de l'Indépendance"],
    correct: 0
  },
  {
    q: "À quelle époque associe-t-on Emeline Michel ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Intemporel (figure du folklore/vodou)", "Fin XXe siècle (1970-2000)", "Révolution haïtienne (avant 1804)"],
    correct: 2
  },
  {
    q: "Dans quelle catégorie situerait-on Philomé Obin ?",
    options: ["Peintre / artiste visuel", "Diplomate / personnalité internationale", "Personnage du folklore", "Musicien"],
    correct: 0
  },
  {
    q: "Dans quelle catégorie situerait-on Vincent Ogé ?",
    options: ["Père fondateur / figure de l'Indépendance", "Diplomate / personnalité internationale", "Figure religieuse / vodou", "Peintre / artiste visuel"],
    correct: 0
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Coupé Cloué ?",
    options: ["Président puis « Président à vie » d'Haïti de 1957 à 1971", "Ethnologue, auteur de « Ainsi parla l'oncle », père de l'indigénisme haïtien", "Romancier connu pour ses œuvres mêlant réalisme et fantastique", "Footballeur devenu icône du konpa avec l'Ensemble Select"],
    correct: 3
  },
  {
    q: "Quel élément biographique distingue Jean-Robert Cadet ?",
    options: ["Auteur du récit autobiographique sur son enfance de « restavèk »", "Première femme à assurer la présidence d'Haïti (1990-1991)", "Écrivain élu à l'Académie française", "Footballeur ayant marqué contre l'Italie à la Coupe du monde 1974"],
    correct: 0
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Faustin Soulouque ?",
    options: ["Diaspora (Floride)", "Port-au-Prince", "Petit-Goâve", "Nord (Cap-Haïtien)"],
    correct: 2
  },
  {
    q: "Où situe-t-on l'histoire de Benoît Batraville ?",
    options: ["Plateau Central", "Hinche (Centre)", "Nord (Grande-Rivière-du-Nord)", "Bréda (Cap-Haïtien)"],
    correct: 0
  },
  {
    q: "À quel moment de l'histoire haïtienne rattache-t-on François Capois (Capois-La-Mort) ?",
    options: ["Fin XXe siècle (1970-2000)", "XIXe siècle", "Milieu XXe siècle (1930-1970)", "Révolution haïtienne (avant 1804)"],
    correct: 3
  },
  {
    q: "Quand Sanite Bélair a-t-elle été la plus active ou influente ?",
    options: ["Révolution haïtienne (avant 1804)", "Fin XXe siècle (1970-2000)", "Époque contemporaine (2000 à aujourd'hui)", "Début XXe siècle"],
    correct: 0
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Henri Christophe ?",
    options: ["Se proclama roi d'Haïti et fit construire la Citadelle Laferrière", "Lwa des eaux et de la mer dans le vodou haïtien", "Chef de la résistance armée contre l'occupation américaine (1915-1934)", "Ethnologue, auteur de « Ainsi parla l'oncle », père de l'indigénisme haïtien"],
    correct: 0
  },
  {
    q: "Baron Samedi provient ou est rattaché à quelle zone ?",
    options: ["National / légendaire", "Saint-Marc", "Diaspora (États-Unis)", "Bréda (Cap-Haïtien)"],
    correct: 0
  },
  {
    q: "Qu'est-ce qui rend Préfète Duffaut célèbre ou important ?",
    options: ["Premier président noir élu après une longue période d'influence mulâtre", "Prêtresse vodou associée à la cérémonie du Bois-Caïman", "Peintre connu pour ses « villes imaginaires » aux couleurs vives", "Se proclama roi d'Haïti et fit construire la Citadelle Laferrière"],
    correct: 2
  },
  {
    q: "Quelle période correspond le mieux à Wilson Bigaud ?",
    options: ["Intemporel (figure du folklore/vodou)", "Milieu XXe siècle (1930-1970)", "XIXe siècle", "Début XXe siècle"],
    correct: 1
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Coupé Cloué ?",
    options: ["Président ayant modernisé l'éducation et les relations extérieures d'Haïti", "Autrice du triptyque romanesque « Amour, Colère et Folie »", "Footballeur devenu icône du konpa avec l'Ensemble Select", "Président puis « Président à vie » d'Haïti de 1957 à 1971"],
    correct: 2
  },
  {
    q: "La Sirène (Lasirenn) est principalement associée à quel lieu ?",
    options: ["Diaspora (Canada)", "National / légendaire", "Marmelade (Artibonite)", "Nord (Bataille de Vertières)"],
    correct: 1
  },
  {
    q: "À quelle époque associe-t-on Cécile Fatiman ?",
    options: ["Fin XXe siècle (1970-2000)", "Époque contemporaine (2000 à aujourd'hui)", "Milieu XXe siècle (1930-1970)", "Révolution haïtienne (avant 1804)"],
    correct: 3
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Wyclef Jean ?",
    options: ["Musicien haïtiano-américain, ex-membre du groupe The Fugees", "Ancien chanteur de konpa devenu président de la République", "Général cacos ayant poursuivi la résistance après la mort de Péralte", "Chanteur de konpa social devenu une icône engagée"],
    correct: 0
  },
  {
    q: "Quel fait marquant est associé à Castera Bazile ?",
    options: ["Première femme à assurer la présidence d'Haïti (1990-1991)", "Romancière haïtiano-américaine, autrice de « Breath, Eyes, Memory »", "Lwa associée à l'amour, la beauté et le luxe dans le vodou haïtien", "Peintre ayant participé aux fresques de la Cathédrale Sainte-Trinité"],
    correct: 3
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Sanite Bélair ?",
    options: ["Héroïne de la Révolution haïtienne exécutée par les troupes françaises", "Poétesse haïtienne ayant vécu principalement en France", "Ethnologue, auteur de « Ainsi parla l'oncle », père de l'indigénisme haïtien", "Président ayant modernisé l'éducation et les relations extérieures d'Haïti"],
    correct: 0
  },
  {
    q: "Où Charles Oscar Étienne (Jean-Baptiste Chavannes) a-t-il vécu ou marqué l'histoire ?",
    options: ["Sud (Grande-Anse)", "Petit-Goâve", "Marmelade (Artibonite)", "Jacmel"],
    correct: 0
  },
  {
    q: "Quel élément biographique distingue Édouard Duval-Carrié ?",
    options: ["Seul président haïtien à avoir achevé deux mandats non consécutifs", "Ethnologue, auteur de « Ainsi parla l'oncle », père de l'indigénisme haïtien", "Président par intérim après le départ d'Aristide en 2004", "Artiste contemporain mêlant histoire haïtienne et symbolisme vodou"],
    correct: 3
  },
  {
    q: "Où La Sirène (Lasirenn) a-t-elle vécu ou marqué l'histoire ?",
    options: ["National / légendaire", "Nord (Bois-Caïman)", "Cap-Haïtien", "Port-Salut"],
    correct: 0
  },
  {
    q: "Parmi les propositions suivantes, laquelle correspond à Myriam Merlet ?",
    options: ["Chef d'État", "Personnage du folklore", "Intellectuel / militant", "Peintre / artiste visuel"],
    correct: 2
  },
  {
    q: "Quelle est l'époque de référence pour Boukman Dutty ?",
    options: ["Début XXe siècle", "Révolution haïtienne (avant 1804)", "Intemporel (figure du folklore/vodou)", "XIXe siècle"],
    correct: 1
  },
  {
    q: "De quel type de personnalité s'agit-il pour Myriam Merlet ?",
    options: ["Figure religieuse / vodou", "Personnage du folklore", "Intellectuel / militant", "Chef d'État"],
    correct: 2
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Édouard Duval-Carrié ?",
    options: ["Romancier connu pour ses œuvres mêlant réalisme et fantastique", "Journaliste et directeur de Radio Haïti Inter, assassiné en 2000", "Artiste contemporain mêlant histoire haïtienne et symbolisme vodou", "Chanteur de konpa social devenu une icône engagée"],
    correct: 2
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Boukman Dutty ?",
    options: ["Petit-Goâve", "Anse-à-Veau", "Nord (Bois-Caïman)", "Port-Salut"],
    correct: 2
  },
  {
    q: "Quelle période correspond le mieux à René Préval ?",
    options: ["XIXe siècle", "Intemporel (figure du folklore/vodou)", "Révolution haïtienne (avant 1804)", "Fin XXe siècle (1970-2000)"],
    correct: 3
  },
  {
    q: "Quel élément biographique distingue François Duvalier (Papa Doc) ?",
    options: ["Jeune héros malin des contes traditionnels haïtiens", "Attaquant international de l'équipe nationale de football d'Haïti", "Président puis « Président à vie » d'Haïti de 1957 à 1971", "Prêtre vodou considéré comme un déclencheur de la révolte des esclaves de 1791"],
    correct: 2
  },
  {
    q: "Garry Conille appartient à quel type de figure historique ou culturelle ?",
    options: ["Musicien", "Chef d'État", "Écrivain", "Athlète / sportif"],
    correct: 1
  },
  {
    q: "Quel élément biographique distingue Benoît Batraville ?",
    options: ["Haïtiano-canadienne, ancienne Gouverneure générale du Canada", "Peintre ayant participé aux fresques de la Cathédrale Sainte-Trinité", "Général cacos ayant poursuivi la résistance après la mort de Péralte", "Chanteur de konpa social devenu une icône engagée"],
    correct: 2
  },
  {
    q: "Ida Faubert appartient à quel type de figure historique ou culturelle ?",
    options: ["Écrivain", "Diplomate / personnalité internationale", "Figure religieuse / vodou", "Chef d'État"],
    correct: 0
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Benoît Batraville ?",
    options: ["Port-au-Prince", "Saint-Marc", "Plateau Central", "Dondon (Nord)"],
    correct: 2
  },
  {
    q: "Ertha Pascal-Trouillot provient ou est rattachée à quelle zone ?",
    options: ["Anse-à-Veau", "Petit-Goâve", "Nord (Bataille de Vertières)", "Port-au-Prince"],
    correct: 1
  },
  {
    q: "François Capois (Capois-La-Mort) a marqué ou vécu principalement à quelle période ?",
    options: ["Intemporel (figure du folklore/vodou)", "Époque contemporaine (2000 à aujourd'hui)", "Révolution haïtienne (avant 1804)", "Début XXe siècle"],
    correct: 2
  },
  {
    q: "Ezili Freda appartient à quel type de figure historique ou culturelle ?",
    options: ["Figure religieuse / vodou", "Personnage du folklore", "Athlète / sportif", "Écrivain"],
    correct: 0
  },
  {
    q: "À quelle époque associe-t-on Jean-Robert Cadet ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Milieu XXe siècle (1930-1970)", "Révolution haïtienne (avant 1804)", "Fin XXe siècle (1970-2000)"],
    correct: 0
  },
  {
    q: "Quel lieu géographique évoque le plus Toto Bissainthe ?",
    options: ["Bréda (Cap-Haïtien)", "Port-au-Prince", "Jacmel", "Jérémie (Grande-Anse)"],
    correct: 2
  },
  {
    q: "Qu'est-ce qui rend Sanite Bélair célèbre ou importante ?",
    options: ["Héroïne de la Révolution haïtienne exécutée par les troupes françaises", "Président puis empereur d'Haïti sous le nom de Faustin Ier", "Général célèbre pour sa bravoure à la bataille de Vertières", "Poète national, auteur du célèbre poème « Choucoune »"],
    correct: 0
  },
  {
    q: "Parmi les propositions suivantes, laquelle correspond à Ezili Freda ?",
    options: ["Athlète / sportif", "Écrivain", "Personnage du folklore", "Figure religieuse / vodou"],
    correct: 3
  },
  {
    q: "Où Philomé Obin a-t-il vécu ou marqué l'histoire ?",
    options: ["Diaspora (États-Unis)", "Cap-Haïtien", "Port-au-Prince", "National / légendaire"],
    correct: 1
  },
  {
    q: "Quel élément biographique distingue Alexandre Pétion ?",
    options: ["Président ayant modernisé l'éducation et les relations extérieures d'Haïti", "Premier président de la République d'Haïti (partie Sud)", "Romancière contemporaine, autrice de « Saisons sauvages »", "Prêtre vodou considéré comme un déclencheur de la révolte des esclaves de 1791"],
    correct: 1
  },
  {
    q: "Quand Toto Bissainthe a-t-elle été la plus active ou influente ?",
    options: ["Milieu XXe siècle (1930-1970)", "XIXe siècle", "Début XXe siècle", "Fin XXe siècle (1970-2000)"],
    correct: 3
  },
  {
    q: "Comment Garry Conille est-il généralement présenté ?",
    options: ["Personnage du folklore", "Athlète / sportif", "Diplomate / personnalité internationale", "Chef d'État"],
    correct: 3
  },
  {
    q: "De quel type de personnalité s'agit-il pour Henri Christophe ?",
    options: ["Intellectuel / militant", "Personnage du folklore", "Diplomate / personnalité internationale", "Père fondateur / figure de l'Indépendance"],
    correct: 3
  },
  {
    q: "Quelle période correspond le mieux à Ida Faubert ?",
    options: ["Intemporel (figure du folklore/vodou)", "Début XXe siècle", "Révolution haïtienne (avant 1804)", "XIXe siècle"],
    correct: 1
  },
  {
    q: "Samuel Dalembert appartient à quel type de figure historique ou culturelle ?",
    options: ["Écrivain", "Chef d'État", "Athlète / sportif", "Figure religieuse / vodou"],
    correct: 2
  },
  {
    q: "D'où est originaire Myriam Merlet, ou à quel lieu est-elle le plus associée ?",
    options: ["Trou-du-Nord (Nord-Est)", "Port-au-Prince", "Jacmel", "Nord (Cap-Haïtien)"],
    correct: 2
  },
  {
    q: "Où situe-t-on l'histoire de Azaka (Papa Zaka) ?",
    options: ["Nord (Grande-Rivière-du-Nord)", "National / légendaire", "Nord (Bataille de Vertières)", "Trou-du-Nord (Nord-Est)"],
    correct: 1
  },
  {
    q: "Quel rôle décrit le mieux Jean-Jacques Dessalines dans l'histoire ou la culture haïtienne ?",
    options: ["Diplomate / personnalité internationale", "Père fondateur / figure de l'Indépendance", "Écrivain", "Musicien"],
    correct: 1
  },
  {
    q: "Hector Hyppolite provient ou est rattaché à quelle zone ?",
    options: ["Saint-Marc", "Verrettes (Artibonite)", "Port-au-Prince", "Nord (Arcahaie)"],
    correct: 0
  },
  {
    q: "Quelle période correspond le mieux à Sténio Vincent ?",
    options: ["Début XXe siècle", "Époque contemporaine (2000 à aujourd'hui)", "Milieu XXe siècle (1930-1970)", "Fin XXe siècle (1970-2000)"],
    correct: 2
  },
  {
    q: "Quand Jean-Jacques Dessalines a-t-il été le plus actif ou influent ?",
    options: ["Milieu XXe siècle (1930-1970)", "XIXe siècle", "Révolution haïtienne (avant 1804)", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 2
  },
  {
    q: "De quel type de personnalité s'agit-il pour Samuel Dalembert ?",
    options: ["Intellectuel / militant", "Musicien", "Athlète / sportif", "Père fondateur / figure de l'Indépendance"],
    correct: 2
  },
  {
    q: "Quelle est la nature du rôle joué par Jovenel Moïse ?",
    options: ["Chef d'État", "Musicien", "Intellectuel / militant", "Peintre / artiste visuel"],
    correct: 0
  },
  {
    q: "Comment Frankétienne est-il généralement présenté ?",
    options: ["Diplomate / personnalité internationale", "Personnage du folklore", "Écrivain", "Figure religieuse / vodou"],
    correct: 2
  },
  {
    q: "Quelle étiquette correspond le mieux à Benoît Batraville ?",
    options: ["Peintre / artiste visuel", "Chef d'État", "Intellectuel / militant", "Père fondateur / figure de l'Indépendance"],
    correct: 3
  },
  {
    q: "Quelle étiquette correspond le mieux à Jovenel Moïse ?",
    options: ["Diplomate / personnalité internationale", "Peintre / artiste visuel", "Chef d'État", "Figure religieuse / vodou"],
    correct: 2
  },
  {
    q: "Quelle est la nature du rôle joué par Jean-Claude Duvalier (Baby Doc) ?",
    options: ["Athlète / sportif", "Figure religieuse / vodou", "Personnage du folklore", "Chef d'État"],
    correct: 3
  },
  {
    q: "Quel lieu géographique évoque le plus Michaëlle Jean ?",
    options: ["Diaspora (Canada)", "Port-au-Prince", "Diaspora (Floride)", "Jacmel"],
    correct: 0
  },
  {
    q: "Quelle période correspond le mieux à Édouard Duval-Carrié ?",
    options: ["Révolution haïtienne (avant 1804)", "Début XXe siècle", "Intemporel (figure du folklore/vodou)", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 3
  },
  {
    q: "À quelle époque associe-t-on Philomé Obin ?",
    options: ["Milieu XXe siècle (1930-1970)", "Début XXe siècle", "Intemporel (figure du folklore/vodou)", "Révolution haïtienne (avant 1804)"],
    correct: 0
  },
  {
    q: "Quelle est la nature du rôle joué par Frankétienne ?",
    options: ["Diplomate / personnalité internationale", "Athlète / sportif", "Écrivain", "Père fondateur / figure de l'Indépendance"],
    correct: 2
  },
  {
    q: "Quelle étiquette correspond le mieux à Alexandre Pétion ?",
    options: ["Personnage du folklore", "Père fondateur / figure de l'Indépendance", "Musicien", "Diplomate / personnalité internationale"],
    correct: 1
  },
  {
    q: "Comment Jean-Claude Duvalier (Baby Doc) est-il généralement présenté ?",
    options: ["Intellectuel / militant", "Chef d'État", "Figure religieuse / vodou", "Personnage du folklore"],
    correct: 1
  },
  {
    q: "Comment classerait-on Jean-Jacques Dessalines parmi les personnalités haïtiennes ?",
    options: ["Père fondateur / figure de l'Indépendance", "Musicien", "Intellectuel / militant", "Personnage du folklore"],
    correct: 0
  },
  {
    q: "De quel type de personnalité s'agit-il pour Ti Manno ?",
    options: ["Musicien", "Peintre / artiste visuel", "Père fondateur / figure de l'Indépendance", "Diplomate / personnalité internationale"],
    correct: 0
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Ezili Freda ?",
    options: ["Port-au-Prince", "Petit-Goâve", "Diaspora (États-Unis)", "National / légendaire"],
    correct: 3
  },
  {
    q: "Pour quoi Manno Charlemagne est-il surtout reconnu ?",
    options: ["Chanteur engagé devenu maire de Port-au-Prince", "Premier président noir élu après une longue période d'influence mulâtre", "Poète national, auteur du célèbre poème « Choucoune »", "Général célèbre pour sa bravoure à la bataille de Vertières"],
    correct: 0
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Leslie Manigat ?",
    options: ["Ethnologue, auteur de « Ainsi parla l'oncle », père de l'indigénisme haïtien", "Autrice du triptyque romanesque « Amour, Colère et Folie »", "Musicien haïtiano-américain, ex-membre du groupe The Fugees", "Politologue devenu président pendant quelques mois en 1988"],
    correct: 3
  },
  {
    q: "Où René Depestre a-t-il vécu ou marqué l'histoire ?",
    options: ["Jacmel", "Saint-Marc", "Port-au-Prince", "Quartier-Morin (Nord)"],
    correct: 0
  },
  {
    q: "Quel élément biographique distingue Myriam Merlet ?",
    options: ["Prêtresse vodou associée à la cérémonie du Bois-Caïman", "Peintre connu pour ses « villes imaginaires » aux couleurs vives", "Militante féministe, cofondatrice d'organisations pour les droits des femmes", "Lwa des morts et gardien des cimetières dans le vodou haïtien"],
    correct: 2
  },
  {
    q: "Comment Rigaud Benoit est-il principalement connu ?",
    options: ["Écrivain", "Diplomate / personnalité internationale", "Peintre / artiste visuel", "Père fondateur / figure de l'Indépendance"],
    correct: 2
  },
  {
    q: "Pour quoi Andre Berto est-il surtout reconnu ?",
    options: ["Neurochirurgien devenu Premier ministre après l'assassinat de Jovenel Moïse", "Footballeur ayant marqué contre l'Italie à la Coupe du monde 1974", "Personnage naïf et souvent trompé dans les contes populaires haïtiens", "Boxeur professionnel haïtiano-américain, ancien champion du monde"],
    correct: 3
  },
  {
    q: "Cécile Fatiman appartient à quel type de figure historique ou culturelle ?",
    options: ["Intellectuel / militant", "Chef d'État", "Père fondateur / figure de l'Indépendance", "Diplomate / personnalité internationale"],
    correct: 2
  },
  {
    q: "Quel fait marquant est associé à Jovenel Moïse ?",
    options: ["Président élu en 2016, assassiné en fonction en 2021", "Écrivain élu à l'Académie française", "Peintre ayant participé aux fresques de la Cathédrale Sainte-Trinité", "Romancière haïtiano-américaine, autrice de « Breath, Eyes, Memory »"],
    correct: 0
  },
  {
    q: "Quel élément biographique distingue René Depestre ?",
    options: ["Poète et romancier, prix Renaudot pour « Hadriana dans tous mes rêves »", "Première femme à assurer la présidence d'Haïti (1990-1991)", "Aurait cousu le premier drapeau haïtien en 1803", "Peintre célèbre pour sa fresque à la Cathédrale Sainte-Trinité"],
    correct: 0
  },
  {
    q: "Pour quoi Ti Manno est-il surtout reconnu ?",
    options: ["Politologue devenu président pendant quelques mois en 1988", "Chanteur de konpa social devenu une icône engagée", "Ancien prêtre devenu président à deux reprises", "Auteur du roman « Gouverneurs de la rosée »"],
    correct: 1
  },
  {
    q: "À quelle époque associe-t-on Garry Conille ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "XIXe siècle", "Révolution haïtienne (avant 1804)", "Début XXe siècle"],
    correct: 0
  },
  {
    q: "Quelle est la nature du rôle joué par François Capois (Capois-La-Mort) ?",
    options: ["Chef d'État", "Peintre / artiste visuel", "Père fondateur / figure de l'Indépendance", "Figure religieuse / vodou"],
    correct: 2
  },
  {
    q: "Pour quoi Wilson Bigaud est-il surtout reconnu ?",
    options: ["Peintre célèbre pour sa fresque à la Cathédrale Sainte-Trinité", "Lwa protecteur de l'agriculture et des paysans dans le vodou haïtien", "Président puis « Président à vie » d'Haïti de 1957 à 1971", "Général cacos ayant poursuivi la résistance après la mort de Péralte"],
    correct: 0
  },
  {
    q: "Quelle période correspond le mieux à Oswald Durand ?",
    options: ["Révolution haïtienne (avant 1804)", "Intemporel (figure du folklore/vodou)", "Milieu XXe siècle (1930-1970)", "XIXe siècle"],
    correct: 3
  },
  {
    q: "Où situe-t-on l'histoire de La Sirène (Lasirenn) ?",
    options: ["Port-au-Prince", "National / légendaire", "Ravine-Sèche", "Petit-Goâve"],
    correct: 1
  },
  {
    q: "Dans quelle catégorie situerait-on Jacques Roumain ?",
    options: ["Chef d'État", "Personnage du folklore", "Écrivain", "Intellectuel / militant"],
    correct: 2
  },
  {
    q: "Où Ezili Freda a-t-elle vécu ou marqué l'histoire ?",
    options: ["Cap-Haïtien", "Nord (Bois-Caïman)", "National / légendaire", "Nord (Arcahaie)"],
    correct: 2
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Myriam Merlet ?",
    options: ["Boxeur professionnel haïtiano-américain, ancien champion du monde", "Poète et romancier, figure du mouvement Haïti Littéraire", "Militante féministe, cofondatrice d'organisations pour les droits des femmes", "Jeune héros malin des contes traditionnels haïtiens"],
    correct: 2
  },
  {
    q: "Dans quelle catégorie situerait-on Boniface Alexandre ?",
    options: ["Figure religieuse / vodou", "Peintre / artiste visuel", "Chef d'État", "Personnage du folklore"],
    correct: 2
  },
  {
    q: "Frankétienne appartient à quelle période historique ?",
    options: ["Fin XXe siècle (1970-2000)", "Révolution haïtienne (avant 1804)", "XIXe siècle", "Début XXe siècle"],
    correct: 0
  },
  {
    q: "À quel moment de l'histoire haïtienne rattache-t-on Sanite Bélair ?",
    options: ["Début XXe siècle", "Révolution haïtienne (avant 1804)", "Époque contemporaine (2000 à aujourd'hui)", "Intemporel (figure du folklore/vodou)"],
    correct: 1
  },
  {
    q: "Pour quoi Rigaud Benoit est-il surtout reconnu ?",
    options: ["Héroïne de la Révolution haïtienne exécutée par les troupes françaises", "Peintre naïf associé au Centre d'Art de Port-au-Prince", "Chanteur de konpa social devenu une icône engagée", "Autrice du triptyque romanesque « Amour, Colère et Folie »"],
    correct: 1
  },
  {
    q: "Qu'est-ce qui rend Kettly Mars célèbre ou importante ?",
    options: ["Romancière contemporaine, autrice de « Saisons sauvages »", "Romancier et poète contemporain engagé", "Personnage naïf et souvent trompé dans les contes populaires haïtiens", "Proclama l'indépendance d'Haïti en 1804 et en devint le premier chef d'État"],
    correct: 0
  },
  {
    q: "Quel rôle décrit le mieux Duckens Nazon dans l'histoire ou la culture haïtienne ?",
    options: ["Intellectuel / militant", "Chef d'État", "Athlète / sportif", "Peintre / artiste visuel"],
    correct: 2
  },
  {
    q: "Dans quelle période de l'histoire haïtienne situe-t-on Leslie Manigat ?",
    options: ["Intemporel (figure du folklore/vodou)", "Début XXe siècle", "Révolution haïtienne (avant 1804)", "Fin XXe siècle (1970-2000)"],
    correct: 3
  },
  {
    q: "Comment classerait-on Myriam Merlet parmi les personnalités haïtiennes ?",
    options: ["Personnage du folklore", "Diplomate / personnalité internationale", "Intellectuel / militant", "Écrivain"],
    correct: 2
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Azaka (Papa Zaka) ?",
    options: ["Président puis empereur d'Haïti sous le nom de Faustin Ier", "Lwa protecteur de l'agriculture et des paysans dans le vodou haïtien", "Neurochirurgien devenu Premier ministre après l'assassinat de Jovenel Moïse", "Auteur du récit autobiographique sur son enfance de « restavèk »"],
    correct: 1
  },
  {
    q: "Qu'est-ce qui rend Boukman Dutty célèbre ou important ?",
    options: ["Prêtre vodou considéré comme un déclencheur de la révolte des esclaves de 1791", "Seul président haïtien à avoir achevé deux mandats non consécutifs", "Ancien chanteur de konpa devenu président de la République", "Romancière contemporaine, autrice de « Saisons sauvages »"],
    correct: 0
  },
  {
    q: "Quel rôle décrit le mieux Jacques Roumain dans l'histoire ou la culture haïtienne ?",
    options: ["Personnage du folklore", "Père fondateur / figure de l'Indépendance", "Écrivain", "Musicien"],
    correct: 2
  },
  {
    q: "Michael Brun appartient à quelle période historique ?",
    options: ["Milieu XXe siècle (1930-1970)", "Époque contemporaine (2000 à aujourd'hui)", "Révolution haïtienne (avant 1804)", "Fin XXe siècle (1970-2000)"],
    correct: 1
  },
  {
    q: "Quel fait marquant est associé à Jean-Robert Cadet ?",
    options: ["Président puis empereur d'Haïti sous le nom de Faustin Ier", "Auteur du récit autobiographique sur son enfance de « restavèk »", "Lwa des eaux et de la mer dans le vodou haïtien", "Premier président de la République d'Haïti (partie Sud)"],
    correct: 1
  },
  {
    q: "Comment Andre Berto est-il principalement connu ?",
    options: ["Écrivain", "Diplomate / personnalité internationale", "Athlète / sportif", "Père fondateur / figure de l'Indépendance"],
    correct: 2
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Édouard Duval-Carrié ?",
    options: ["Port-au-Prince", "Diaspora (New Jersey)", "Jérémie (Grande-Anse)", "Jacmel"],
    correct: 0
  },
  {
    q: "À quel moment de l'histoire haïtienne rattache-t-on Oswald Durand ?",
    options: ["XIXe siècle", "Époque contemporaine (2000 à aujourd'hui)", "Milieu XXe siècle (1930-1970)", "Intemporel (figure du folklore/vodou)"],
    correct: 0
  },
  {
    q: "Frankétienne est principalement associé à quel lieu ?",
    options: ["Diaspora (Floride)", "Ravine-Sèche", "Anse-à-Veau", "Sud (Grande-Anse)"],
    correct: 1
  },
  {
    q: "Parmi les propositions suivantes, laquelle correspond à Philomé Obin ?",
    options: ["Intellectuel / militant", "Personnage du folklore", "Peintre / artiste visuel", "Figure religieuse / vodou"],
    correct: 2
  },
  {
    q: "Pour quoi Jean Price-Mars est-il surtout reconnu ?",
    options: ["Ethnologue, auteur de « Ainsi parla l'oncle », père de l'indigénisme haïtien", "Romancière haïtiano-américaine, autrice de « Breath, Eyes, Memory »", "Écrivain élu à l'Académie française", "Romancier et médecin, auteur du « réalisme merveilleux »"],
    correct: 0
  },
  {
    q: "Quelle est la nature du rôle joué par Lyonel Trouillot ?",
    options: ["Père fondateur / figure de l'Indépendance", "Écrivain", "Musicien", "Chef d'État"],
    correct: 1
  },
  {
    q: "Comment Jovenel Moïse est-il généralement présenté ?",
    options: ["Chef d'État", "Écrivain", "Peintre / artiste visuel", "Figure religieuse / vodou"],
    correct: 0
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Anthony Phelps ?",
    options: ["Lwa associée à l'amour, la beauté et le luxe dans le vodou haïtien", "Boxeur professionnel haïtiano-américain, ancien champion du monde", "Chef de la résistance armée contre l'occupation américaine (1915-1934)", "Poète et romancier, figure du mouvement Haïti Littéraire"],
    correct: 3
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Gary Victor ?",
    options: ["Port-au-Prince", "Bréda (Cap-Haïtien)", "Diaspora (États-Unis)", "Port-Salut"],
    correct: 0
  },
  {
    q: "Parmi les propositions suivantes, laquelle correspond à Jovenel Moïse ?",
    options: ["Diplomate / personnalité internationale", "Intellectuel / militant", "Chef d'État", "Musicien"],
    correct: 2
  },
  {
    q: "Quelle période correspond le mieux à Anténor Firmin ?",
    options: ["Milieu XXe siècle (1930-1970)", "Intemporel (figure du folklore/vodou)", "XIXe siècle", "Révolution haïtienne (avant 1804)"],
    correct: 2
  },
  {
    q: "Comment reconnaît-on Toto Bissainthe parmi les autres personnalités haïtiennes ?",
    options: ["Chanteuse et actrice, figure de la chanson racine haïtienne", "Écrivain et diplomate défenseur de la dignité haïtienne", "Lwa gardien des carrefours et intermédiaire avec les autres esprits", "Journaliste et directeur de Radio Haïti Inter, assassiné en 2000"],
    correct: 0
  },
  {
    q: "Comment Duckens Nazon est-il principalement connu ?",
    options: ["Personnage du folklore", "Peintre / artiste visuel", "Intellectuel / militant", "Athlète / sportif"],
    correct: 3
  },
  {
    q: "Où situe-t-on l'histoire de Emmanuel Sanon ?",
    options: ["Quartier-Morin (Nord)", "Plateau Central", "Anse-à-Veau", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Ida Faubert a marqué ou vécu principalement à quelle période ?",
    options: ["Fin XXe siècle (1970-2000)", "Début XXe siècle", "XIXe siècle", "Intemporel (figure du folklore/vodou)"],
    correct: 1
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Faustin Soulouque ?",
    options: ["Président puis empereur d'Haïti sous le nom de Faustin Ier", "Chanteuse surnommée « la Grande Dame de la chanson haïtienne »", "Écrivain et diplomate défenseur de la dignité haïtienne", "Pivot haïtiano-canadien ayant joué en NBA"],
    correct: 0
  },
  {
    q: "Quand Emmanuel Sanon a-t-il été le plus actif ou influent ?",
    options: ["Fin XXe siècle (1970-2000)", "Époque contemporaine (2000 à aujourd'hui)", "Milieu XXe siècle (1930-1970)", "Début XXe siècle"],
    correct: 0
  },
  {
    q: "Comment reconnaît-on Jean-Bertrand Aristide parmi les autres personnalités haïtiennes ?",
    options: ["Écrivain, peintre et dramaturge, pionnier du spiralisme", "Militaire devenu président dans les années 1950", "Chanteuse surnommée « la Grande Dame de la chanson haïtienne »", "Ancien prêtre devenu président à deux reprises"],
    correct: 3
  },
  {
    q: "Quelle étiquette correspond le mieux à Anténor Firmin ?",
    options: ["Écrivain", "Intellectuel / militant", "Peintre / artiste visuel", "Père fondateur / figure de l'Indépendance"],
    correct: 1
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Jean Dominique ?",
    options: ["Port-Salut", "Jacmel", "Nord (Bataille de Vertières)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Où situe-t-on l'histoire de Ogou ?",
    options: ["Diaspora (Floride)", "Trou-du-Nord (Nord-Est)", "Verrettes (Artibonite)", "National / légendaire"],
    correct: 3
  },
  {
    q: "D'où est originaire Jacques Stephen Alexis, ou à quel lieu est-il le plus associé ?",
    options: ["Gonaïves", "Port-au-Prince", "Nord (Grande-Rivière-du-Nord)", "Marmelade (Artibonite)"],
    correct: 0
  },
  {
    q: "Quelle région ou ville est le plus étroitement liée à Duckens Nazon ?",
    options: ["Port-au-Prince", "Saint-Marc", "Gonaïves", "Jacmel"],
    correct: 0
  },
  {
    q: "À quelle époque associe-t-on Jean-Claude Duvalier (Baby Doc) ?",
    options: ["Fin XXe siècle (1970-2000)", "Révolution haïtienne (avant 1804)", "Époque contemporaine (2000 à aujourd'hui)", "Début XXe siècle"],
    correct: 0
  },
  {
    q: "Faustin Soulouque a marqué ou vécu principalement à quelle période ?",
    options: ["XIXe siècle", "Milieu XXe siècle (1930-1970)", "Époque contemporaine (2000 à aujourd'hui)", "Intemporel (figure du folklore/vodou)"],
    correct: 0
  },
  {
    q: "À quelle époque associe-t-on Yvonne Hakim-Rimpel ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "XIXe siècle", "Milieu XXe siècle (1930-1970)", "Intemporel (figure du folklore/vodou)"],
    correct: 2
  },
  {
    q: "Fabre Geffrard provient ou est rattaché à quelle zone ?",
    options: ["Petit-Goâve", "Anse-à-Veau", "Gonaïves", "Nord (Bois-Caïman)"],
    correct: 1
  },
  {
    q: "Quelle est la nature du rôle joué par Michael Brun ?",
    options: ["Écrivain", "Musicien", "Chef d'État", "Diplomate / personnalité internationale"],
    correct: 1
  },
  {
    q: "D'où est originaire Rigaud Benoit, ou à quel lieu est-il le plus associé ?",
    options: ["Saint-Marc", "Port-au-Prince", "Jacmel", "Jérémie (Grande-Anse)"],
    correct: 1
  },
  {
    q: "Quel fait marquant est associé à Faustin Soulouque ?",
    options: ["Président puis empereur d'Haïti sous le nom de Faustin Ier", "Journaliste et directeur de Radio Haïti Inter, assassiné en 2000", "Président ayant modernisé l'éducation et les relations extérieures d'Haïti", "Boxeur professionnel haïtiano-américain, ancien champion du monde"],
    correct: 0
  },
  {
    q: "Quelle est la nature du rôle joué par Anténor Firmin ?",
    options: ["Musicien", "Diplomate / personnalité internationale", "Chef d'État", "Intellectuel / militant"],
    correct: 3
  },
  {
    q: "Dans quelle période de l'histoire haïtienne situe-t-on Garry Conille ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Fin XXe siècle (1970-2000)", "Révolution haïtienne (avant 1804)", "XIXe siècle"],
    correct: 0
  },
  {
    q: "À quel moment de l'histoire haïtienne rattache-t-on Toussaint Louverture ?",
    options: ["Fin XXe siècle (1970-2000)", "XIXe siècle", "Révolution haïtienne (avant 1804)", "Milieu XXe siècle (1930-1970)"],
    correct: 2
  },
  {
    q: "Comment classerait-on Toussaint Louverture parmi les personnalités haïtiennes ?",
    options: ["Musicien", "Père fondateur / figure de l'Indépendance", "Diplomate / personnalité internationale", "Écrivain"],
    correct: 1
  },
  {
    q: "Quelle est la nature du rôle joué par Oswald Durand ?",
    options: ["Peintre / artiste visuel", "Musicien", "Père fondateur / figure de l'Indépendance", "Écrivain"],
    correct: 3
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Jean-Bertrand Aristide ?",
    options: ["Hinche (Centre)", "Port-au-Prince", "Diaspora (Canada)", "Port-Salut"],
    correct: 3
  },
  {
    q: "Quelle est l'époque de référence pour Toussaint Louverture ?",
    options: ["Milieu XXe siècle (1930-1970)", "Début XXe siècle", "Révolution haïtienne (avant 1804)", "XIXe siècle"],
    correct: 2
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Charles Oscar Étienne (Jean-Baptiste Chavannes) ?",
    options: ["Lwa protecteur de l'agriculture et des paysans dans le vodou haïtien", "Chef militaire et politique, figure centrale de la Révolution haïtienne", "Compagnon de Vincent Ogé dans la lutte pour les droits des libres de couleur", "Militaire devenu président dans les années 1950"],
    correct: 2
  },
  {
    q: "Quelle est l'époque de référence pour Emeline Michel ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Intemporel (figure du folklore/vodou)", "Fin XXe siècle (1970-2000)", "Début XXe siècle"],
    correct: 2
  },
  {
    q: "Où situe-t-on l'histoire de Anthony Phelps ?",
    options: ["Trou-du-Nord (Nord-Est)", "Grande Rivière du Nord", "Petit-Goâve", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "À quel moment de l'histoire haïtienne rattache-t-on Louis Joseph Janvier ?",
    options: ["Intemporel (figure du folklore/vodou)", "Début XXe siècle", "XIXe siècle", "Révolution haïtienne (avant 1804)"],
    correct: 2
  },
  {
    q: "Quel fait marquant est associé à Michael Brun ?",
    options: ["Pivot haïtiano-canadien ayant joué en NBA", "Peintre ayant participé aux fresques de la Cathédrale Sainte-Trinité", "Haïtiano-canadienne, ancienne Gouverneure générale du Canada", "DJ et producteur fusionnant konpa et musique électronique"],
    correct: 3
  },
  {
    q: "Comment René Depestre est-il principalement connu ?",
    options: ["Diplomate / personnalité internationale", "Écrivain", "Intellectuel / militant", "Père fondateur / figure de l'Indépendance"],
    correct: 1
  },
  {
    q: "Quelle est la nature du rôle joué par Cécile Fatiman ?",
    options: ["Musicien", "Écrivain", "Diplomate / personnalité internationale", "Père fondateur / figure de l'Indépendance"],
    correct: 3
  },
  {
    q: "Suzanne Comhaire-Sylvain est principalement associée à quel lieu ?",
    options: ["Port-au-Prince", "Trou-du-Nord (Nord-Est)", "Jacmel", "Verrettes (Artibonite)"],
    correct: 0
  },
  {
    q: "Jacques Roumain a marqué ou vécu principalement à quelle période ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Intemporel (figure du folklore/vodou)", "Milieu XXe siècle (1930-1970)", "Début XXe siècle"],
    correct: 2
  },
  {
    q: "Toussaint Louverture appartient à quel type de figure historique ou culturelle ?",
    options: ["Intellectuel / militant", "Père fondateur / figure de l'Indépendance", "Athlète / sportif", "Musicien"],
    correct: 1
  },
  {
    q: "Dans quelle catégorie situerait-on Benoît Batraville ?",
    options: ["Intellectuel / militant", "Père fondateur / figure de l'Indépendance", "Écrivain", "Peintre / artiste visuel"],
    correct: 1
  },
  {
    q: "Anthony Phelps a marqué ou vécu principalement à quelle période ?",
    options: ["XIXe siècle", "Début XXe siècle", "Milieu XXe siècle (1930-1970)", "Fin XXe siècle (1970-2000)"],
    correct: 3
  },
  {
    q: "Quelle période correspond le mieux à Charles Oscar Étienne (Jean-Baptiste Chavannes) ?",
    options: ["XIXe siècle", "Fin XXe siècle (1970-2000)", "Époque contemporaine (2000 à aujourd'hui)", "Révolution haïtienne (avant 1804)"],
    correct: 3
  },
  {
    q: "Qu'est-ce qui rend Jean-Robert Cadet célèbre ou important ?",
    options: ["Héroïne de la Révolution haïtienne exécutée par les troupes françaises", "Auteur du récit autobiographique sur son enfance de « restavèk »", "Peintre célèbre pour sa fresque à la Cathédrale Sainte-Trinité", "Chanteuse et actrice, figure de la chanson racine haïtienne"],
    correct: 1
  },
  {
    q: "Quel fait marquant est associé à François Capois (Capois-La-Mort) ?",
    options: ["Général célèbre pour sa bravoure à la bataille de Vertières", "Politologue devenu président pendant quelques mois en 1988", "Président ayant unifié l'ensemble de l'île sous administration haïtienne", "Ancien chanteur de konpa devenu président de la République"],
    correct: 0
  },
  {
    q: "Dans quelle catégorie situerait-on Dany Laferrière ?",
    options: ["Figure religieuse / vodou", "Peintre / artiste visuel", "Père fondateur / figure de l'Indépendance", "Écrivain"],
    correct: 3
  },
  {
    q: "Comment classerait-on Sanite Bélair parmi les personnalités haïtiennes ?",
    options: ["Chef d'État", "Athlète / sportif", "Écrivain", "Père fondateur / figure de l'Indépendance"],
    correct: 3
  },
  {
    q: "À quel moment de l'histoire haïtienne rattache-t-on Michel Martelly ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Intemporel (figure du folklore/vodou)", "Début XXe siècle", "Milieu XXe siècle (1930-1970)"],
    correct: 0
  },
  {
    q: "Dans quelle période de l'histoire haïtienne situe-t-on Jacques Roumain ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Début XXe siècle", "XIXe siècle", "Milieu XXe siècle (1930-1970)"],
    correct: 3
  },
  {
    q: "Comment reconnaît-on Garry Conille parmi les autres personnalités haïtiennes ?",
    options: ["Chanteuse surnommée « la Grande Dame de la chanson haïtienne »", "Romancière haïtiano-américaine, autrice de « Breath, Eyes, Memory »", "Ancien fonctionnaire de l'ONU nommé Premier ministre à deux reprises", "Lwa guerrier associé au fer et à la force dans le vodou haïtien"],
    correct: 2
  },
  {
    q: "Quand Boukman Dutty a-t-il été le plus actif ou influent ?",
    options: ["XIXe siècle", "Révolution haïtienne (avant 1804)", "Époque contemporaine (2000 à aujourd'hui)", "Début XXe siècle"],
    correct: 1
  },
  {
    q: "Henri Christophe appartient à quel type de figure historique ou culturelle ?",
    options: ["Personnage du folklore", "Intellectuel / militant", "Peintre / artiste visuel", "Père fondateur / figure de l'Indépendance"],
    correct: 3
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Charlemagne Péralte ?",
    options: ["Hinche (Centre)", "Jérémie (Grande-Anse)", "Nord (Bataille de Vertières)", "Petit-Goâve"],
    correct: 0
  },
  {
    q: "Quel lieu géographique évoque le plus Bouki ?",
    options: ["National / légendaire", "Port-au-Prince", "Nord (Bataille de Vertières)", "Cap-Haïtien"],
    correct: 0
  },
  {
    q: "Pour quelle raison Édouard Duval-Carrié est-il connu dans l'histoire ou la culture haïtienne ?",
    options: ["Militante féministe, cofondatrice d'organisations pour les droits des femmes", "Artiste contemporain mêlant histoire haïtienne et symbolisme vodou", "Autrice du triptyque romanesque « Amour, Colère et Folie »", "Pivot haïtiano-canadien ayant joué en NBA"],
    correct: 1
  },
  {
    q: "De quel type de personnalité s'agit-il pour Ida Faubert ?",
    options: ["Chef d'État", "Diplomate / personnalité internationale", "Écrivain", "Personnage du folklore"],
    correct: 2
  },
  {
    q: "Dans quelle période de l'histoire haïtienne situe-t-on Jean Dominique ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "Fin XXe siècle (1970-2000)", "Révolution haïtienne (avant 1804)", "Début XXe siècle"],
    correct: 1
  },
  {
    q: "Quel fait marquant est associé à Myriam Merlet ?",
    options: ["Président ayant modernisé l'éducation et les relations extérieures d'Haïti", "Ancien chanteur de konpa devenu président de la République", "Lwa des morts et gardien des cimetières dans le vodou haïtien", "Militante féministe, cofondatrice d'organisations pour les droits des femmes"],
    correct: 3
  },
  {
    q: "Pour quelle raison Samuel Dalembert est-il connu dans l'histoire ou la culture haïtienne ?",
    options: ["Aurait cousu le premier drapeau haïtien en 1803", "Homme de couleur libre ayant mené une révolte avant l'indépendance", "Président puis « Président à vie » d'Haïti de 1957 à 1971", "Pivot haïtiano-canadien ayant joué en NBA"],
    correct: 3
  },
  {
    q: "Comment classerait-on Alexandre Pétion parmi les personnalités haïtiennes ?",
    options: ["Diplomate / personnalité internationale", "Père fondateur / figure de l'Indépendance", "Écrivain", "Intellectuel / militant"],
    correct: 1
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Gary Victor ?",
    options: ["Port-au-Prince", "Cap-Haïtien", "Bréda (Cap-Haïtien)", "Diaspora (Canada)"],
    correct: 0
  },
  {
    q: "Comment reconnaît-on Marie Vieux-Chauvet parmi les autres personnalités haïtiennes ?",
    options: ["Figure fondatrice de la peinture naïve haïtienne", "Autrice du triptyque romanesque « Amour, Colère et Folie »", "Peintre connu pour ses « villes imaginaires » aux couleurs vives", "Lwa protecteur de l'agriculture et des paysans dans le vodou haïtien"],
    correct: 1
  },
  {
    q: "Pour quelle raison Jacques Stephen Alexis est-il connu dans l'histoire ou la culture haïtienne ?",
    options: ["Romancier et médecin, auteur du « réalisme merveilleux »", "Se proclama roi d'Haïti et fit construire la Citadelle Laferrière", "Première femme à assurer la présidence d'Haïti (1990-1991)", "Homme de couleur libre ayant mené une révolte avant l'indépendance"],
    correct: 0
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Wilson Bigaud ?",
    options: ["Lwa des eaux et de la mer dans le vodou haïtien", "Personnage naïf et souvent trompé dans les contes populaires haïtiens", "Président par intérim après le départ d'Aristide en 2004", "Peintre célèbre pour sa fresque à la Cathédrale Sainte-Trinité"],
    correct: 3
  },
  {
    q: "À quelle époque associe-t-on François Duvalier (Papa Doc) ?",
    options: ["Début XXe siècle", "Fin XXe siècle (1970-2000)", "Époque contemporaine (2000 à aujourd'hui)", "Milieu XXe siècle (1930-1970)"],
    correct: 3
  },
  {
    q: "Comment reconnaît-on Gary Victor parmi les autres personnalités haïtiennes ?",
    options: ["Lwa gardien des carrefours et intermédiaire avec les autres esprits", "Homme de couleur libre ayant mené une révolte avant l'indépendance", "Romancier connu pour ses œuvres mêlant réalisme et fantastique", "Président ayant unifié l'ensemble de l'île sous administration haïtienne"],
    correct: 2
  },
  {
    q: "D'où est originaire Leslie Manigat, ou à quel lieu est-il le plus associé ?",
    options: ["Nord (Bois-Caïman)", "Port-au-Prince", "Jacmel", "Dondon (Nord)"],
    correct: 1
  },
  {
    q: "Quand Michel Martelly a-t-il été le plus actif ou influent ?",
    options: ["Milieu XXe siècle (1930-1970)", "Époque contemporaine (2000 à aujourd'hui)", "XIXe siècle", "Révolution haïtienne (avant 1804)"],
    correct: 1
  },
  {
    q: "Fabre Geffrard appartient à quelle période historique ?",
    options: ["Fin XXe siècle (1970-2000)", "XIXe siècle", "Intemporel (figure du folklore/vodou)", "Milieu XXe siècle (1930-1970)"],
    correct: 1
  },
  {
    q: "À quel moment de l'histoire haïtienne rattache-t-on Ariel Henry ?",
    options: ["Époque contemporaine (2000 à aujourd'hui)", "XIXe siècle", "Milieu XXe siècle (1930-1970)", "Intemporel (figure du folklore/vodou)"],
    correct: 0
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Benoît Batraville ?",
    options: ["Poète national, auteur du célèbre poème « Choucoune »", "Premier président de la République d'Haïti (partie Sud)", "Général cacos ayant poursuivi la résistance après la mort de Péralte", "Romancier et poète contemporain engagé"],
    correct: 2
  },
  {
    q: "Qu'est-ce qui rend Castera Bazile célèbre ou important ?",
    options: ["Peintre ayant participé aux fresques de la Cathédrale Sainte-Trinité", "Musicien haïtiano-américain, ex-membre du groupe The Fugees", "Général célèbre pour sa bravoure à la bataille de Vertières", "Aurait cousu le premier drapeau haïtien en 1803"],
    correct: 0
  },
  {
    q: "Quel rôle décrit le mieux Jean Price-Mars dans l'histoire ou la culture haïtienne ?",
    options: ["Peintre / artiste visuel", "Intellectuel / militant", "Diplomate / personnalité internationale", "Personnage du folklore"],
    correct: 1
  },
  {
    q: "Quel élément biographique distingue Toussaint Louverture ?",
    options: ["Chef militaire et politique, figure centrale de la Révolution haïtienne", "Footballeur devenu icône du konpa avec l'Ensemble Select", "Se proclama roi d'Haïti et fit construire la Citadelle Laferrière", "Président élu en 2016, assassiné en fonction en 2021"],
    correct: 0
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Jean-Jacques Dessalines ?",
    options: ["Nord (Grande-Rivière-du-Nord)", "Ravine-Sèche", "Diaspora (États-Unis)", "Gonaïves"],
    correct: 0
  },
  {
    q: "Quel fait marquant est associé à Cécile Fatiman ?",
    options: ["Prêtresse vodou associée à la cérémonie du Bois-Caïman", "Attaquant international de l'équipe nationale de football d'Haïti", "Lwa protecteur de l'agriculture et des paysans dans le vodou haïtien", "Romancière haïtiano-américaine, autrice de « Breath, Eyes, Memory »"],
    correct: 0
  },
  {
    q: "Comment Jean-Robert Cadet est-il principalement connu ?",
    options: ["Figure religieuse / vodou", "Écrivain", "Intellectuel / militant", "Musicien"],
    correct: 1
  },
  {
    q: "Comment classerait-on Cécile Fatiman parmi les personnalités haïtiennes ?",
    options: ["Figure religieuse / vodou", "Athlète / sportif", "Diplomate / personnalité internationale", "Père fondateur / figure de l'Indépendance"],
    correct: 3
  },
  {
    q: "Jean-Claude Duvalier (Baby Doc) est principalement associé à quel lieu ?",
    options: ["Dondon (Nord)", "Port-au-Prince", "Jérémie (Grande-Anse)", "Diaspora (Floride)"],
    correct: 1
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à La Sirène (Lasirenn) ?",
    options: ["Chef de file de l'école du Cap dans la peinture haïtienne", "Haïtiano-canadienne, ancienne Gouverneure générale du Canada", "Journaliste et directeur de Radio Haïti Inter, assassiné en 2000", "Lwa des eaux et de la mer dans le vodou haïtien"],
    correct: 3
  },
  {
    q: "Dans quelle période de l'histoire haïtienne situe-t-on Emmanuel Sanon ?",
    options: ["Intemporel (figure du folklore/vodou)", "Début XXe siècle", "Fin XXe siècle (1970-2000)", "Époque contemporaine (2000 à aujourd'hui)"],
    correct: 2
  },
  {
    q: "François Duvalier (Papa Doc) appartient à quel type de figure historique ou culturelle ?",
    options: ["Athlète / sportif", "Chef d'État", "Peintre / artiste visuel", "Intellectuel / militant"],
    correct: 1
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Ezili Freda ?",
    options: ["Figure fondatrice de la peinture naïve haïtienne", "Première femme à assurer la présidence d'Haïti (1990-1991)", "Poète national, auteur du célèbre poème « Choucoune »", "Lwa associée à l'amour, la beauté et le luxe dans le vodou haïtien"],
    correct: 3
  },
  {
    q: "René Préval appartient à quel type de figure historique ou culturelle ?",
    options: ["Père fondateur / figure de l'Indépendance", "Intellectuel / militant", "Chef d'État", "Athlète / sportif"],
    correct: 2
  },
  {
    q: "Oswald Durand est principalement associé à quel lieu ?",
    options: ["Cap-Haïtien", "National / légendaire", "Port-au-Prince", "Sud (Grande-Anse)"],
    correct: 0
  },
  {
    q: "Jean-Jacques Dessalines a marqué ou vécu principalement à quelle période ?",
    options: ["Milieu XXe siècle (1930-1970)", "Fin XXe siècle (1970-2000)", "Intemporel (figure du folklore/vodou)", "Révolution haïtienne (avant 1804)"],
    correct: 3
  },
  {
    q: "À quel moment de l'histoire haïtienne rattache-t-on Dany Laferrière ?",
    options: ["XIXe siècle", "Époque contemporaine (2000 à aujourd'hui)", "Révolution haïtienne (avant 1804)", "Début XXe siècle"],
    correct: 1
  },
  {
    q: "Comment classerait-on Coupé Cloué parmi les personnalités haïtiennes ?",
    options: ["Père fondateur / figure de l'Indépendance", "Écrivain", "Personnage du folklore", "Musicien"],
    correct: 3
  },
  {
    q: "Pour quelle raison Sanite Bélair est-elle connue dans l'histoire ou la culture haïtienne ?",
    options: ["Héroïne de la Révolution haïtienne exécutée par les troupes françaises", "Succéda à son père comme « Président à vie » de 1971 à 1986", "Attaquant international de l'équipe nationale de football d'Haïti", "Chanteur de konpa social devenu une icône engagée"],
    correct: 0
  },
  {
    q: "Comment Ertha Pascal-Trouillot est-elle principalement connue ?",
    options: ["Écrivain", "Chef d'État", "Peintre / artiste visuel", "Athlète / sportif"],
    correct: 1
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de René Depestre ?",
    options: ["Jacmel", "Grande Rivière du Nord", "Marmelade (Artibonite)", "Quartier-Morin (Nord)"],
    correct: 0
  },
  {
    q: "Quel accomplissement est le plus souvent rattaché à Emmanuel Sanon ?",
    options: ["Peintre connu pour ses « villes imaginaires » aux couleurs vives", "Footballeur ayant marqué contre l'Italie à la Coupe du monde 1974", "Président élu en 2016, assassiné en fonction en 2021", "Lwa des eaux et de la mer dans le vodou haïtien"],
    correct: 1
  },
  {
    q: "Comment reconnaît-on Édouard Duval-Carrié parmi les autres personnalités haïtiennes ?",
    options: ["Artiste contemporain mêlant histoire haïtienne et symbolisme vodou", "Prêtre vodou considéré comme un déclencheur de la révolte des esclaves de 1791", "Chef militaire et politique, figure centrale de la Révolution haïtienne", "Lwa serpent, considéré comme l'un des esprits les plus anciens du vodou"],
    correct: 0
  },
  {
    q: "Quelle est la région d'origine ou d'ancrage de Ogou ?",
    options: ["Trou-du-Nord (Nord-Est)", "Marmelade (Artibonite)", "Ravine-Sèche", "National / légendaire"],
    correct: 3
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Toto Bissainthe ?",
    options: ["Auteur du récit autobiographique sur son enfance de « restavèk »", "Chanteuse et actrice, figure de la chanson racine haïtienne", "Président ayant unifié l'ensemble de l'île sous administration haïtienne", "Compagnon de Vincent Ogé dans la lutte pour les droits des libres de couleur"],
    correct: 1
  },
  {
    q: "Pour quelle raison Emeline Michel est-elle connue dans l'histoire ou la culture haïtienne ?",
    options: ["Lwa protecteur de l'agriculture et des paysans dans le vodou haïtien", "Aurait cousu le premier drapeau haïtien en 1803", "Prêtresse vodou associée à la cérémonie du Bois-Caïman", "Chanteuse surnommée « la Grande Dame de la chanson haïtienne »"],
    correct: 3
  },
  {
    q: "D'où est originaire Oswald Durand, ou à quel lieu est-il le plus associé ?",
    options: ["Hinche (Centre)", "Saint-Marc", "Petit-Goâve", "Cap-Haïtien"],
    correct: 3
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Jean-Jacques Dessalines ?",
    options: ["Écrivain et diplomate défenseur de la dignité haïtienne", "Homme de couleur libre ayant mené une révolte avant l'indépendance", "Écrivain élu à l'Académie française", "Proclama l'indépendance d'Haïti en 1804 et en devint le premier chef d'État"],
    correct: 3
  },
  {
    q: "Quelle étiquette correspond le mieux à Charlemagne Péralte ?",
    options: ["Figure religieuse / vodou", "Père fondateur / figure de l'Indépendance", "Diplomate / personnalité internationale", "Personnage du folklore"],
    correct: 1
  },
  {
    q: "Comment Ezili Freda est-elle généralement présentée ?",
    options: ["Personnage du folklore", "Peintre / artiste visuel", "Figure religieuse / vodou", "Écrivain"],
    correct: 2
  },
  {
    q: "Quelle réalisation ou caractéristique définit le mieux Manno Charlemagne ?",
    options: ["Haïtiano-canadienne, ancienne Gouverneure générale du Canada", "Attaquant international de l'équipe nationale de football d'Haïti", "Prêtresse vodou associée à la cérémonie du Bois-Caïman", "Chanteur engagé devenu maire de Port-au-Prince"],
    correct: 3
  },
]

export default personnalitesQuestions
