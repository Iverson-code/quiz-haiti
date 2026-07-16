const cultureQuestions = [
  {
    q: "Comment décrit-on précisément le Lakou ?",
    options: ["Espace commun regroupant plusieurs habitations d'une même famille élargie, cœur de la vie sociale rurale", "Institution prévue par la Constitution de 1987 pour fixer et développer la langue créole", "Célébrée chaque 28 octobre depuis son instauration en 1981 à l'initiative de la Dominique", "Instrument rituel en forme de calebasse ornée de perles, symbole d'autorité spirituelle du prêtre ou de la prêtresse"],
    correct: 0
  },
  {
    q: "Dans quel contexte géographique situe-t-on le madras, tissu traditionnel ?",
    options: ["International", "Port-au-Prince", "National", "Zones rurales d'Haïti"],
    correct: 2
  },
  {
    q: "La tradition des contes de Bouki et Malice relève principalement de quel domaine culturel ?",
    options: ["Religion et spiritualité", "Langue", "Danse et expression culturelle", "Vie sociale et coutumes"],
    correct: 3
  },
  {
    q: "À quel aspect de la culture haïtienne se rattache la cérémonie du Bois-Caïman ?",
    options: ["Langue", "Danse et expression culturelle", "Religion et spiritualité", "Artisanat et art"],
    correct: 2
  },
  {
    q: "Le Carnaval de Jacmel remonte à quelle époque de l'histoire d'Haïti ?",
    options: ["XXe siècle", "Milieu XXe siècle", "Intemporel", "XIXe siècle"],
    correct: 2
  },
  {
    q: "Dans quel contexte géographique situe-t-on le houngan, prêtre du vodou ?",
    options: ["Port-au-Prince", "Jacmel", "National", "Milot (Nord)"],
    correct: 2
  },
  {
    q: "À quelle région ou quel contexte associe-t-on la Fête du Drapeau ?",
    options: ["Milot (Nord)", "National", "Haïti", "Nord d'Haïti"],
    correct: 1
  },
  {
    q: "Où le houngan, prêtre du vodou est-il/elle particulièrement présent(e) ou pratiqué(e) ?",
    options: ["National", "Croix-des-Bouquets", "Arcahaie", "Nord d'Haïti"],
    correct: 0
  },
  {
    q: "La Fête Gede se caractérise principalement par :",
    options: ["Expressions populaires transmises oralement, très présentes dans la sagesse et l'éducation traditionnelles", "Célébration vodou du début du mois de novembre honorant les esprits des morts", "Religion la plus pratiquée du pays aux côtés du protestantisme et du vodou, souvent en syncrétisme avec ce dernier", "Créole à base lexicale française parlé par environ onze millions de personnes en Haïti"],
    correct: 1
  },
  {
    q: "Le créole haïtien trouve son origine à quelle période ?",
    options: ["XXe siècle", "XIXe siècle", "Époque contemporaine", "Intemporel"],
    correct: 3
  },
  {
    q: "Le houngan, prêtre du vodou trouve son origine à quelle période ?",
    options: ["Intemporel", "XIXe siècle", "Époque contemporaine", "Années 1940"],
    correct: 0
  },
  {
    q: "Quel domaine de la vie culturelle haïtienne illustre le madras, tissu traditionnel ?",
    options: ["Artisanat et art", "Religion et spiritualité", "Vie sociale et coutumes", "Fête et tradition"],
    correct: 0
  },
  {
    q: "Quelle période historique est associée à l'ason, hochet sacré du vodou ?",
    options: ["Années 1960", "Révolution haïtienne", "Intemporel", "Époque contemporaine"],
    correct: 2
  },
  {
    q: "Quel repère temporel correspond au statut du français avant 1987 ?",
    options: ["XXe siècle", "Époque contemporaine", "Intemporel", "Années 1940"],
    correct: 0
  },
  {
    q: "Qu'est-ce qui définit la Fête du Drapeau avec exactitude ?",
    options: ["Célébrée chaque 18 mai, en commémoration de la création du drapeau haïtien en 1803", "Créé en 1803 lors du congrès de l'Arcahaie à partir du drapeau tricolore français dont la bande blanche fut retirée", "Fête nationale commémorant la proclamation de l'indépendance d'Haïti en 1804", "Expressions populaires transmises oralement, très présentes dans la sagesse et l'éducation traditionnelles"],
    correct: 0
  },
  {
    q: "Quelle affirmation décrit le mieux le Centre d'Art de Port-au-Prince ?",
    options: ["Rassemblement communautaire organisé après un décès, mêlant prières, chants et souvenirs du défunt", "Fondé en 1944, ce centre a révélé de nombreux artistes fondateurs de la peinture naïve haïtienne", "Grande fête populaire précédant le Mercredi des Cendres, rythmée par les orchestres de konpa", "On distingue traditionnellement le créole du Nord, du Centre et du Sud d'Haïti"],
    correct: 1
  },
  {
    q: "Comment classerait-on la peinture naïve haïtienne dans la culture haïtienne ?",
    options: ["Vie sociale et coutumes", "Langue", "Artisanat et art", "Danse et expression culturelle"],
    correct: 2
  },
  {
    q: "L'article 5 de la Constitution de 1987 remonte à quelle époque de l'histoire d'Haïti ?",
    options: ["Époque contemporaine", "XXe siècle", "XIXe siècle", "Années 1970"],
    correct: 0
  },
  {
    q: "Depuis quand la Fête Gede fait-il/elle partie de la culture haïtienne ?",
    options: ["Années 1960", "Milieu XXe siècle", "Intemporel", "Années 1970"],
    correct: 2
  },
  {
    q: "La reconnaissance du vodou comme religion est surtout ancré(e) dans quelle région d'Haïti ?",
    options: ["International", "Port-au-Prince (itinérant)", "Jacmel", "Haïti"],
    correct: 3
  },
  {
    q: "Depuis quand le Rara fait-il/elle partie de la culture haïtienne ?",
    options: ["Années 1940", "Années 1960", "Milieu XXe siècle", "Intemporel"],
    correct: 3
  },
  {
    q: "Quelle description correspond fidèlement au Centre d'Art de Port-au-Prince ?",
    options: ["Célébrée chaque 18 mai, en commémoration de la création du drapeau haïtien en 1803", "Expressions populaires transmises oralement, très présentes dans la sagesse et l'éducation traditionnelles", "Fondé en 1944, ce centre a révélé de nombreux artistes fondateurs de la peinture naïve haïtienne", "Célébrée chaque 28 octobre depuis son instauration en 1981 à l'initiative de la Dominique"],
    correct: 2
  },
  {
    q: "Que faut-il savoir sur le Carnaval de Jacmel ?",
    options: ["Espace commun regroupant plusieurs habitations d'une même famille élargie, cœur de la vie sociale rurale", "Carnaval réputé pour ses masques en papier mâché et ses costumes artisanaux élaborés", "« L'Union fait la Force » figure sur les armoiries et symbolise l'unité forgée pendant la lutte pour l'indépendance", "Danse de couple élégante, considérée comme un ancêtre du konpa moderne"],
    correct: 1
  },
  {
    q: "La karabela, tenue traditionnelle relève principalement de quel domaine culturel ?",
    options: ["Artisanat et art", "Religion et spiritualité", "Langue", "Vie sociale et coutumes"],
    correct: 0
  },
  {
    q: "Où le Konbit est-il/elle particulièrement présent(e) ou pratiqué(e) ?",
    options: ["Haïti", "Zones rurales d'Haïti", "Nord d'Haïti", "National"],
    correct: 1
  },
  {
    q: "Comment classerait-on l'Académie créole prévue par l'article 213 dans la culture haïtienne ?",
    options: ["Langue", "Fête et tradition", "Vie sociale et coutumes", "Danse et expression culturelle"],
    correct: 0
  },
  {
    q: "La Veye, veillée funéraire haïtienne est surtout ancré(e) dans quelle région d'Haïti ?",
    options: ["Arcahaie", "International", "National", "Port-au-Prince"],
    correct: 2
  },
  {
    q: "Quelle description correspond fidèlement au Rara ?",
    options: ["Drapeau cérémoniel richement brodé de perles et de sequins représentant un esprit du vodou", "Fondé en 1944, ce centre a révélé de nombreux artistes fondateurs de la peinture naïve haïtienne", "Procession musicale de rue jouée pendant la période du Carême, mêlant percussions et trompettes en bambou", "Première mention du créole dans un texte constitutionnel haïtien, avant sa pleine officialisation en 1987"],
    correct: 2
  },
  {
    q: "Comment classerait-on l'ason, hochet sacré du vodou dans la culture haïtienne ?",
    options: ["Fête et tradition", "Danse et expression culturelle", "Langue", "Religion et spiritualité"],
    correct: 3
  },
  {
    q: "Le 1er janvier, jour de l'indépendance se caractérise principalement par :",
    options: ["Religion la plus pratiquée du pays aux côtés du protestantisme et du vodou, souvent en syncrétisme avec ce dernier", "Tissu à carreaux colorés utilisé dans la confection des tenues traditionnelles féminines", "Fête nationale commémorant la proclamation de l'indépendance d'Haïti en 1804", "Tradition orale populaire mettant en scène deux personnages complices et rivaux dans la sagesse paysanne"],
    correct: 2
  },
  {
    q: "Quel repère temporel correspond au drapo vodou ?",
    options: ["Années 1940", "XXe siècle", "Intemporel", "Années 1970"],
    correct: 2
  },
  {
    q: "Que faut-il savoir sur l'article 5 de la Constitution de 1987 ?",
    options: ["« L'Union fait la Force » figure sur les armoiries et symbolise l'unité forgée pendant la lutte pour l'indépendance", "Cet article proclame que tous les Haïtiens sont unis par une langue commune, le créole", "Officiante féminine occupant un rôle spirituel équivalent à celui du houngan", "Célébration vodou du début du mois de novembre honorant les esprits des morts"],
    correct: 1
  },
  {
    q: "Quel lieu est le plus étroitement lié au madras, tissu traditionnel ?",
    options: ["Croix-des-Bouquets", "Arcahaie", "Jacmel", "National"],
    correct: 3
  },
  {
    q: "À quelle époque rattache-t-on la cérémonie du Bois-Caïman ?",
    options: ["XIXe siècle", "Milieu XXe siècle", "Révolution haïtienne", "Intemporel"],
    correct: 2
  },
  {
    q: "Comment décrirait-on la nature de l'Académie créole prévue par l'article 213 ?",
    options: ["Vie sociale et coutumes", "Fête et tradition", "Religion et spiritualité", "Langue"],
    correct: 3
  },
  {
    q: "La manbo, prêtresse du vodou relève principalement de quel domaine culturel ?",
    options: ["Religion et spiritualité", "Fête et tradition", "Artisanat et art", "Langue"],
    correct: 0
  },
  {
    q: "Le statut du français avant 1987 trouve son origine à quelle période ?",
    options: ["Milieu XXe siècle", "Années 1970", "Années 1940", "XXe siècle"],
    correct: 3
  },
  {
    q: "Où le Banda, danse rituelle vodou est-il/elle particulièrement présent(e) ou pratiqué(e) ?",
    options: ["Milot (Nord)", "Haïti", "National", "Jacmel"],
    correct: 2
  },
  {
    q: "À quelle région ou quel contexte associe-t-on le Banda, danse rituelle vodou ?",
    options: ["International", "National", "Nord d'Haïti", "Zones rurales d'Haïti"],
    correct: 1
  },
  {
    q: "Comment décrit-on précisément la tradition des pwovèb ayisyen (proverbes haïtiens) ?",
    options: ["Camionnette ou bus coloré, richement décoré de motifs religieux et populaires, servant de transport collectif", "Le vodou est officiellement reconnu comme religion en Haïti depuis le début des années 2000", "Expressions populaires transmises oralement, très présentes dans la sagesse et l'éducation traditionnelles", "Religion la plus pratiquée du pays aux côtés du protestantisme et du vodou, souvent en syncrétisme avec ce dernier"],
    correct: 2
  },
  {
    q: "Le Carnaval de Jacmel appartient à quel volet de la tradition haïtienne ?",
    options: ["Vie sociale et coutumes", "Artisanat et art", "Langue", "Fête et tradition"],
    correct: 3
  },
  {
    q: "Le catholicisme en Haïti se caractérise principalement par :",
    options: ["Religion la plus pratiquée du pays aux côtés du protestantisme et du vodou, souvent en syncrétisme avec ce dernier", "Tradition orale populaire mettant en scène deux personnages complices et rivaux dans la sagesse paysanne", "Procession musicale de rue jouée pendant la période du Carême, mêlant percussions et trompettes en bambou", "Instrument rituel en forme de calebasse ornée de perles, symbole d'autorité spirituelle du prêtre ou de la prêtresse"],
    correct: 0
  },
  {
    q: "Quel lieu est le plus étroitement lié à la Journée internationale du créole ?",
    options: ["Haïti", "Nord d'Haïti", "National", "International"],
    correct: 3
  },
  {
    q: "Comment décrit-on précisément la cérémonie du Bois-Caïman ?",
    options: ["« L'Union fait la Force » figure sur les armoiries et symbolise l'unité forgée pendant la lutte pour l'indépendance", "Art du métal martelé et découpé, né dans cette commune devenue capitale haïtienne de cet artisanat", "Cérémonie vodou d'août 1791 considérée comme un moment fondateur de l'insurrection des esclaves", "Forme traditionnelle d'entraide agricole où les paysans travaillent collectivement la terre"],
    correct: 2
  },
  {
    q: "Quel est le fait vérifié concernant la reconnaissance du vodou comme religion ?",
    options: ["Le vodou est officiellement reconnu comme religion en Haïti depuis le début des années 2000", "Danse associée aux esprits Gede, marquée par des mouvements de bassin très expressifs", "Carnaval réputé pour ses masques en papier mâché et ses costumes artisanaux élaborés", "Cérémonie vodou d'août 1791 considérée comme un moment fondateur de l'insurrection des esclaves"],
    correct: 0
  },
  {
    q: "Quel repère temporel correspond à dézafi, premier roman en créole haïtien ?",
    options: ["Années 1970", "Intemporel", "Époque contemporaine", "Révolution haïtienne"],
    correct: 0
  },
  {
    q: "Le 1er janvier, jour de l'indépendance remonte à quelle époque de l'histoire d'Haïti ?",
    options: ["Intemporel", "XXe siècle", "Époque contemporaine", "Milieu XXe siècle"],
    correct: 0
  },
  {
    q: "Le Centre d'Art de Port-au-Prince se caractérise principalement par :",
    options: ["Art du métal martelé et découpé, né dans cette commune devenue capitale haïtienne de cet artisanat", "Seule langue officielle d'Haïti depuis 1918, durant l'occupation américaine, jusqu'à l'arrivée du créole à ce statut", "Première mention du créole dans un texte constitutionnel haïtien, avant sa pleine officialisation en 1987", "Fondé en 1944, ce centre a révélé de nombreux artistes fondateurs de la peinture naïve haïtienne"],
    correct: 3
  },
  {
    q: "Comment décrirait-on la nature du créole haïtien ?",
    options: ["Fête et tradition", "Langue", "Vie sociale et coutumes", "Religion et spiritualité"],
    correct: 1
  },
  {
    q: "La tradition des pwovèb ayisyen (proverbes haïtiens) remonte à quelle époque de l'histoire d'Haïti ?",
    options: ["Intemporel", "XIXe siècle", "XXe siècle", "Époque contemporaine"],
    correct: 0
  },
  {
    q: "Depuis quand la mention du créole dans la Constitution de 1964 fait-il/elle partie de la culture haïtienne ?",
    options: ["Époque contemporaine", "Intemporel", "Années 1960", "Révolution haïtienne"],
    correct: 2
  },
  {
    q: "À quelle époque rattache-t-on la Méringue de salon ?",
    options: ["XIXe siècle", "Années 1960", "Milieu XXe siècle", "XXe siècle"],
    correct: 0
  },
  {
    q: "À quelle époque rattache-t-on la devise nationale d'Haïti ?",
    options: ["Révolution haïtienne", "Années 1940", "XXe siècle", "Intemporel"],
    correct: 0
  },
  {
    q: "Où la variation dialectale du créole haïtien est-il/elle particulièrement présent(e) ou pratiqué(e) ?",
    options: ["Haïti", "National", "Milot (Nord)", "Jacmel"],
    correct: 1
  },
  {
    q: "La Méringue de salon est surtout ancré(e) dans quelle région d'Haïti ?",
    options: ["Haïti", "Milot (Nord)", "Port-au-Prince", "Arcahaie"],
    correct: 2
  },
  {
    q: "Quelle affirmation décrit le mieux l'Académie créole prévue par l'article 213 ?",
    options: ["Religion la plus pratiquée du pays aux côtés du protestantisme et du vodou, souvent en syncrétisme avec ce dernier", "On distingue traditionnellement le créole du Nord, du Centre et du Sud d'Haïti", "Institution prévue par la Constitution de 1987 pour fixer et développer la langue créole", "Rassemblement communautaire organisé après un décès, mêlant prières, chants et souvenirs du défunt"],
    correct: 2
  },
  {
    q: "Depuis quand la devise nationale d'Haïti fait-il/elle partie de la culture haïtienne ?",
    options: ["Révolution haïtienne", "Années 1970", "XXe siècle", "Époque contemporaine"],
    correct: 0
  },
  {
    q: "La manbo, prêtresse du vodou se caractérise principalement par :",
    options: ["Célébrée chaque 28 octobre depuis son instauration en 1981 à l'initiative de la Dominique", "Première mention du créole dans un texte constitutionnel haïtien, avant sa pleine officialisation en 1987", "Officiante féminine occupant un rôle spirituel équivalent à celui du houngan", "Expressions populaires transmises oralement, très présentes dans la sagesse et l'éducation traditionnelles"],
    correct: 2
  },
  {
    q: "La devise nationale d'Haïti appartient à quel volet de la tradition haïtienne ?",
    options: ["Religion et spiritualité", "Vie sociale et coutumes", "Danse et expression culturelle", "Langue"],
    correct: 1
  },
  {
    q: "Quel domaine de la vie culturelle haïtienne illustre l'Académie créole prévue par l'article 213 ?",
    options: ["Fête et tradition", "Danse et expression culturelle", "Langue", "Vie sociale et coutumes"],
    correct: 2
  },
  {
    q: "La cérémonie du Bois-Caïman relève principalement de quel domaine culturel ?",
    options: ["Langue", "Fête et tradition", "Religion et spiritualité", "Artisanat et art"],
    correct: 2
  },
  {
    q: "L'article 5 de la Constitution de 1987 relève principalement de quel domaine culturel ?",
    options: ["Fête et tradition", "Vie sociale et coutumes", "Artisanat et art", "Langue"],
    correct: 3
  },
  {
    q: "Le fer découpé de la Croix-des-Bouquets est surtout ancré(e) dans quelle région d'Haïti ?",
    options: ["Port-au-Prince", "Croix-des-Bouquets", "Arcahaie", "National"],
    correct: 1
  },
  {
    q: "À quel aspect de la culture haïtienne se rattache le 1er janvier, jour de l'indépendance ?",
    options: ["Danse et expression culturelle", "Artisanat et art", "Langue", "Fête et tradition"],
    correct: 3
  },
  {
    q: "Quel lieu est le plus étroitement lié au drapo vodou ?",
    options: ["Nord d'Haïti", "Port-au-Prince", "Croix-des-Bouquets", "National"],
    correct: 3
  },
  {
    q: "Qu'est-ce qui définit la Veye, veillée funéraire haïtienne avec exactitude ?",
    options: ["Rassemblement communautaire organisé après un décès, mêlant prières, chants et souvenirs du défunt", "Tradition orale populaire mettant en scène deux personnages complices et rivaux dans la sagesse paysanne", "Le créole tire l'essentiel de son vocabulaire du français, avec des apports africains, taïnos et espagnols", "Créole à base lexicale française parlé par environ onze millions de personnes en Haïti"],
    correct: 0
  },
  {
    q: "Quel lieu est le plus étroitement lié au tap-tap, transport en commun peint ?",
    options: ["Zones rurales d'Haïti", "Croix-des-Bouquets", "National", "Milot (Nord)"],
    correct: 2
  },
  {
    q: "Comment décrit-on précisément l'Académie créole prévue par l'article 213 ?",
    options: ["Dessin tracé au sol, souvent à la farine ou à la cendre, représentant un esprit lors des cérémonies", "Institution prévue par la Constitution de 1987 pour fixer et développer la langue créole", "Espace commun regroupant plusieurs habitations d'une même famille élargie, cœur de la vie sociale rurale", "Camionnette ou bus coloré, richement décoré de motifs religieux et populaires, servant de transport collectif"],
    correct: 1
  },
  {
    q: "Le créole haïtien appartient à quel volet de la tradition haïtienne ?",
    options: ["Fête et tradition", "Langue", "Vie sociale et coutumes", "Danse et expression culturelle"],
    correct: 1
  },
  {
    q: "Quelle affirmation décrit le mieux la tradition des contes de Bouki et Malice ?",
    options: ["Procession musicale de rue jouée pendant la période du Carême, mêlant percussions et trompettes en bambou", "Art du métal martelé et découpé, né dans cette commune devenue capitale haïtienne de cet artisanat", "Tradition orale populaire mettant en scène deux personnages complices et rivaux dans la sagesse paysanne", "« L'Union fait la Force » figure sur les armoiries et symbolise l'unité forgée pendant la lutte pour l'indépendance"],
    correct: 2
  },
  {
    q: "Le Rara est avant tout une expression de quel domaine ?",
    options: ["Langue", "Religion et spiritualité", "Fête et tradition", "Danse et expression culturelle"],
    correct: 2
  },
  {
    q: "Comment classerait-on le Kanaval national dans la culture haïtienne ?",
    options: ["Danse et expression culturelle", "Artisanat et art", "Fête et tradition", "Langue"],
    correct: 2
  },
  {
    q: "Le catholicisme en Haïti remonte à quelle époque de l'histoire d'Haïti ?",
    options: ["Intemporel", "Milieu XXe siècle", "Révolution haïtienne", "Années 1940"],
    correct: 0
  },
  {
    q: "Quelle affirmation décrit le mieux le Yanvalou, danse rituelle vodou ?",
    options: ["Danse de couple élégante, considérée comme un ancêtre du konpa moderne", "Le créole tire l'essentiel de son vocabulaire du français, avec des apports africains, taïnos et espagnols", "Danse cérémonielle vodou caractérisée par des mouvements ondulants du dos et des épaules", "Instrument rituel en forme de calebasse ornée de perles, symbole d'autorité spirituelle du prêtre ou de la prêtresse"],
    correct: 2
  },
  {
    q: "Quel est le fait vérifié concernant le madras, tissu traditionnel ?",
    options: ["Officiante féminine occupant un rôle spirituel équivalent à celui du houngan", "Tissu à carreaux colorés utilisé dans la confection des tenues traditionnelles féminines", "Créole à base lexicale française parlé par environ onze millions de personnes en Haïti", "Forme traditionnelle d'entraide agricole où les paysans travaillent collectivement la terre"],
    correct: 1
  },
  {
    q: "Qu'est-ce qui définit le Carnaval de Jacmel avec exactitude ?",
    options: ["Seule langue officielle d'Haïti depuis 1918, durant l'occupation américaine, jusqu'à l'arrivée du créole à ce statut", "Cet article proclame que tous les Haïtiens sont unis par une langue commune, le créole", "Carnaval réputé pour ses masques en papier mâché et ses costumes artisanaux élaborés", "Religion syncrétique mêlant croyances ouest-africaines et éléments catholiques, pratiquée par une large partie de la population"],
    correct: 2
  },
  {
    q: "Où le drapo vodou est-il/elle particulièrement présent(e) ou pratiqué(e) ?",
    options: ["National", "Nord d'Haïti", "Arcahaie", "Haïti"],
    correct: 0
  },
  {
    q: "Dans quel contexte géographique situe-t-on le Rara ?",
    options: ["Port-au-Prince (itinérant)", "Arcahaie", "Zones rurales d'Haïti", "Milot (Nord)"],
    correct: 2
  },
  {
    q: "Le Centre d'Art de Port-au-Prince trouve son origine à quelle période ?",
    options: ["XXe siècle", "Années 1940", "Époque contemporaine", "Révolution haïtienne"],
    correct: 1
  },
  {
    q: "À quelle région ou quel contexte associe-t-on la co-officialisation du créole et du français ?",
    options: ["Nord d'Haïti", "National", "Port-au-Prince", "Milot (Nord)"],
    correct: 1
  },
  {
    q: "À quelle époque rattache-t-on le Banda, danse rituelle vodou ?",
    options: ["Années 1940", "XIXe siècle", "Intemporel", "Années 1970"],
    correct: 2
  },
  {
    q: "Quelle affirmation décrit le mieux le Banda, danse rituelle vodou ?",
    options: ["Religion la plus pratiquée du pays aux côtés du protestantisme et du vodou, souvent en syncrétisme avec ce dernier", "Danse associée aux esprits Gede, marquée par des mouvements de bassin très expressifs", "Drapeau cérémoniel richement brodé de perles et de sequins représentant un esprit du vodou", "Rassemblement communautaire organisé après un décès, mêlant prières, chants et souvenirs du défunt"],
    correct: 1
  },
  {
    q: "L'ason, hochet sacré du vodou se caractérise principalement par :",
    options: ["Instrument rituel en forme de calebasse ornée de perles, symbole d'autorité spirituelle du prêtre ou de la prêtresse", "Célébrée chaque 28 octobre depuis son instauration en 1981 à l'initiative de la Dominique", "Officiant masculin qui dirige les cérémonies et rituels du culte vodou", "Religion syncrétique mêlant croyances ouest-africaines et éléments catholiques, pratiquée par une large partie de la population"],
    correct: 0
  },
  {
    q: "Quelle période historique est associée à la cérémonie du Bois-Caïman ?",
    options: ["Époque contemporaine", "Années 1940", "XXe siècle", "Révolution haïtienne"],
    correct: 3
  },
  {
    q: "Quel lieu est le plus étroitement lié à l'influence lexicale du créole haïtien ?",
    options: ["Zones rurales d'Haïti", "Port-au-Prince (itinérant)", "Croix-des-Bouquets", "National"],
    correct: 3
  },
  {
    q: "Le vodou haïtien se caractérise principalement par :",
    options: ["Danse de couple élégante, considérée comme un ancêtre du konpa moderne", "Religion syncrétique mêlant croyances ouest-africaines et éléments catholiques, pratiquée par une large partie de la population", "Fondé en 1944, ce centre a révélé de nombreux artistes fondateurs de la peinture naïve haïtienne", "Danse cérémonielle vodou caractérisée par des mouvements ondulants du dos et des épaules"],
    correct: 1
  },
  {
    q: "Le drapo vodou est surtout ancré(e) dans quelle région d'Haïti ?",
    options: ["Jacmel", "National", "Port-au-Prince", "Haïti"],
    correct: 1
  },
  {
    q: "Le Konbit relève principalement de quel domaine culturel ?",
    options: ["Fête et tradition", "Danse et expression culturelle", "Vie sociale et coutumes", "Langue"],
    correct: 2
  },
  {
    q: "Que faut-il savoir sur la devise nationale d'Haïti ?",
    options: ["Expressions populaires transmises oralement, très présentes dans la sagesse et l'éducation traditionnelles", "Fête nationale commémorant la proclamation de l'indépendance d'Haïti en 1804", "« L'Union fait la Force » figure sur les armoiries et symbolise l'unité forgée pendant la lutte pour l'indépendance", "Religion syncrétique mêlant croyances ouest-africaines et éléments catholiques, pratiquée par une large partie de la population"],
    correct: 2
  },
  {
    q: "Dans quel contexte géographique situe-t-on la devise nationale d'Haïti ?",
    options: ["Haïti", "National", "Port-au-Prince (itinérant)", "International"],
    correct: 1
  },
  {
    q: "Le catholicisme en Haïti est surtout ancré(e) dans quelle région d'Haïti ?",
    options: ["National", "Milot (Nord)", "Zones rurales d'Haïti", "Haïti"],
    correct: 0
  },
  {
    q: "Comment décrirait-on la nature de la devise nationale d'Haïti ?",
    options: ["Vie sociale et coutumes", "Religion et spiritualité", "Danse et expression culturelle", "Langue"],
    correct: 0
  },
  {
    q: "À quelle région ou quel contexte associe-t-on le créole haïtien ?",
    options: ["Nord d'Haïti", "Zones rurales d'Haïti", "National", "Port-au-Prince (itinérant)"],
    correct: 2
  },
  {
    q: "Comment décrirait-on la nature de la Fête du Drapeau ?",
    options: ["Religion et spiritualité", "Fête et tradition", "Vie sociale et coutumes", "Danse et expression culturelle"],
    correct: 1
  },
  {
    q: "À quel aspect de la culture haïtienne se rattache le tap-tap, transport en commun peint ?",
    options: ["Fête et tradition", "Artisanat et art", "Religion et spiritualité", "Langue"],
    correct: 1
  },
  {
    q: "Quelle affirmation décrit le mieux la Fête du Drapeau ?",
    options: ["Forteresse classée à l'UNESCO, symbole de la résistance et de la fierté nationale haïtienne", "Célébrée chaque 18 mai, en commémoration de la création du drapeau haïtien en 1803", "Célébrée chaque 28 octobre depuis son instauration en 1981 à l'initiative de la Dominique", "Officiant masculin qui dirige les cérémonies et rituels du culte vodou"],
    correct: 1
  },
  {
    q: "Quelle description correspond fidèlement au Konbit ?",
    options: ["Procession musicale de rue jouée pendant la période du Carême, mêlant percussions et trompettes en bambou", "Célébrée chaque 18 mai, en commémoration de la création du drapeau haïtien en 1803", "Forme traditionnelle d'entraide agricole où les paysans travaillent collectivement la terre", "Grande fête populaire précédant le Mercredi des Cendres, rythmée par les orchestres de konpa"],
    correct: 2
  },
  {
    q: "Dézafi, premier roman en créole haïtien relève principalement de quel domaine culturel ?",
    options: ["Danse et expression culturelle", "Fête et tradition", "Artisanat et art", "Langue"],
    correct: 3
  },
  {
    q: "L'Académie créole prévue par l'article 213 se caractérise principalement par :",
    options: ["Institution prévue par la Constitution de 1987 pour fixer et développer la langue créole", "Le créole tire l'essentiel de son vocabulaire du français, avec des apports africains, taïnos et espagnols", "Tissu à carreaux colorés utilisé dans la confection des tenues traditionnelles féminines", "Danse associée aux esprits Gede, marquée par des mouvements de bassin très expressifs"],
    correct: 0
  },
  {
    q: "À quel aspect de la culture haïtienne se rattache la tradition des pwovèb ayisyen (proverbes haïtiens) ?",
    options: ["Religion et spiritualité", "Vie sociale et coutumes", "Fête et tradition", "Danse et expression culturelle"],
    correct: 1
  },
  {
    q: "Où le créole haïtien est-il/elle particulièrement présent(e) ou pratiqué(e) ?",
    options: ["Croix-des-Bouquets", "National", "Jacmel", "Haïti"],
    correct: 1
  },
  {
    q: "Comment classerait-on la karabela, tenue traditionnelle dans la culture haïtienne ?",
    options: ["Vie sociale et coutumes", "Artisanat et art", "Langue", "Fête et tradition"],
    correct: 1
  },
  {
    q: "Comment décrit-on précisément le fer découpé de la Croix-des-Bouquets ?",
    options: ["On distingue traditionnellement le créole du Nord, du Centre et du Sud d'Haïti", "Procession musicale de rue jouée pendant la période du Carême, mêlant percussions et trompettes en bambou", "Tissu à carreaux colorés utilisé dans la confection des tenues traditionnelles féminines", "Art du métal martelé et découpé, né dans cette commune devenue capitale haïtienne de cet artisanat"],
    correct: 3
  },
  {
    q: "Comment classerait-on le 1er janvier, jour de l'indépendance dans la culture haïtienne ?",
    options: ["Vie sociale et coutumes", "Artisanat et art", "Fête et tradition", "Danse et expression culturelle"],
    correct: 2
  },
  {
    q: "Quelle affirmation décrit le mieux le fer découpé de la Croix-des-Bouquets ?",
    options: ["Tissu à carreaux colorés utilisé dans la confection des tenues traditionnelles féminines", "Fondé en 1944, ce centre a révélé de nombreux artistes fondateurs de la peinture naïve haïtienne", "Art du métal martelé et découpé, né dans cette commune devenue capitale haïtienne de cet artisanat", "Actée par la Constitution de mars 1987, qui fait du créole une langue officielle à égalité avec le français"],
    correct: 2
  },
  {
    q: "Comment décrirait-on la nature du Banda, danse rituelle vodou ?",
    options: ["Fête et tradition", "Danse et expression culturelle", "Langue", "Vie sociale et coutumes"],
    correct: 1
  },
  {
    q: "Quelle description correspond fidèlement à la karabela, tenue traditionnelle ?",
    options: ["Seule langue officielle d'Haïti depuis 1918, durant l'occupation américaine, jusqu'à l'arrivée du créole à ce statut", "Art du métal martelé et découpé, né dans cette commune devenue capitale haïtienne de cet artisanat", "Costume traditionnel porté notamment lors des danses folkloriques et fêtes patriotiques", "Rassemblement communautaire organisé après un décès, mêlant prières, chants et souvenirs du défunt"],
    correct: 2
  },
  {
    q: "Quelle période historique est associée au vèvè, symbole rituel du vodou ?",
    options: ["XIXe siècle", "Années 1970", "Intemporel", "Époque contemporaine"],
    correct: 2
  },
  {
    q: "Quel est le fait vérifié concernant l'influence lexicale du créole haïtien ?",
    options: ["Ce roman de Frankétienne, publié en 1975, est considéré comme le tout premier roman écrit en créole haïtien", "Tradition orale populaire mettant en scène deux personnages complices et rivaux dans la sagesse paysanne", "Fondé en 1944, ce centre a révélé de nombreux artistes fondateurs de la peinture naïve haïtienne", "Le créole tire l'essentiel de son vocabulaire du français, avec des apports africains, taïnos et espagnols"],
    correct: 3
  },
  {
    q: "L'Académie créole prévue par l'article 213 est avant tout une expression de quel domaine ?",
    options: ["Vie sociale et coutumes", "Langue", "Danse et expression culturelle", "Fête et tradition"],
    correct: 1
  },
  {
    q: "À quelle époque rattache-t-on l'ason, hochet sacré du vodou ?",
    options: ["Époque contemporaine", "Révolution haïtienne", "Années 1940", "Intemporel"],
    correct: 3
  },
  {
    q: "La Fête Gede remonte à quelle époque de l'histoire d'Haïti ?",
    options: ["Années 1960", "Époque contemporaine", "XIXe siècle", "Intemporel"],
    correct: 3
  },
  {
    q: "Quel repère temporel correspond au Centre d'Art de Port-au-Prince ?",
    options: ["Révolution haïtienne", "Années 1940", "Années 1960", "Milieu XXe siècle"],
    correct: 1
  },
  {
    q: "Le drapo vodou remonte à quelle époque de l'histoire d'Haïti ?",
    options: ["Années 1970", "Milieu XXe siècle", "Intemporel", "Années 1960"],
    correct: 2
  },
  {
    q: "Quelle affirmation décrit le mieux le Rara ?",
    options: ["Forteresse classée à l'UNESCO, symbole de la résistance et de la fierté nationale haïtienne", "Célébrée chaque 28 octobre depuis son instauration en 1981 à l'initiative de la Dominique", "Créole à base lexicale française parlé par environ onze millions de personnes en Haïti", "Procession musicale de rue jouée pendant la période du Carême, mêlant percussions et trompettes en bambou"],
    correct: 3
  },
  {
    q: "À quelle région ou quel contexte associe-t-on le 1er janvier, jour de l'indépendance ?",
    options: ["National", "Milot (Nord)", "Haïti", "Croix-des-Bouquets"],
    correct: 0
  },
  {
    q: "Le créole haïtien est surtout ancré(e) dans quelle région d'Haïti ?",
    options: ["Zones rurales d'Haïti", "Port-au-Prince (itinérant)", "National", "Port-au-Prince"],
    correct: 2
  },
  {
    q: "Quelle période historique est associée au madras, tissu traditionnel ?",
    options: ["Années 1960", "XXe siècle", "Intemporel", "Années 1940"],
    correct: 2
  },
  {
    q: "Le drapeau haïtien se caractérise principalement par :",
    options: ["Costume traditionnel porté notamment lors des danses folkloriques et fêtes patriotiques", "Créé en 1803 lors du congrès de l'Arcahaie à partir du drapeau tricolore français dont la bande blanche fut retirée", "Procession musicale de rue jouée pendant la période du Carême, mêlant percussions et trompettes en bambou", "Courant pictural né autour du Centre d'Art, mêlant scènes de vie quotidienne et imaginaire vodou"],
    correct: 1
  },
  {
    q: "Où le fer découpé de la Croix-des-Bouquets est-il/elle particulièrement présent(e) ou pratiqué(e) ?",
    options: ["Milot (Nord)", "Croix-des-Bouquets", "International", "Port-au-Prince"],
    correct: 1
  },
  {
    q: "Depuis quand le Carnaval de Jacmel fait-il/elle partie de la culture haïtienne ?",
    options: ["XXe siècle", "Intemporel", "Années 1960", "Années 1970"],
    correct: 1
  },
  {
    q: "Le Kanaval national trouve son origine à quelle période ?",
    options: ["Milieu XXe siècle", "Intemporel", "Années 1960", "Années 1940"],
    correct: 1
  },
  {
    q: "La co-officialisation du créole et du français trouve son origine à quelle période ?",
    options: ["Milieu XXe siècle", "Années 1970", "XXe siècle", "Époque contemporaine"],
    correct: 3
  },
  {
    q: "À quelle région ou quel contexte associe-t-on l'influence lexicale du créole haïtien ?",
    options: ["Haïti", "National", "Nord d'Haïti", "Arcahaie"],
    correct: 1
  },
  {
    q: "Quelle affirmation décrit le mieux le Konbit ?",
    options: ["Forme traditionnelle d'entraide agricole où les paysans travaillent collectivement la terre", "Le vodou est officiellement reconnu comme religion en Haïti depuis le début des années 2000", "Courant pictural né autour du Centre d'Art, mêlant scènes de vie quotidienne et imaginaire vodou", "Créé en 1803 lors du congrès de l'Arcahaie à partir du drapeau tricolore français dont la bande blanche fut retirée"],
    correct: 0
  },
  {
    q: "Le Konbit se caractérise principalement par :",
    options: ["Expressions populaires transmises oralement, très présentes dans la sagesse et l'éducation traditionnelles", "Danse cérémonielle vodou caractérisée par des mouvements ondulants du dos et des épaules", "Fête nationale commémorant la proclamation de l'indépendance d'Haïti en 1804", "Forme traditionnelle d'entraide agricole où les paysans travaillent collectivement la terre"],
    correct: 3
  },
  {
    q: "Quelle période historique est associée à la Fête du Drapeau ?",
    options: ["XXe siècle", "XIXe siècle", "Intemporel", "Années 1960"],
    correct: 2
  },
  {
    q: "Comment décrirait-on la nature de la variation dialectale du créole haïtien ?",
    options: ["Danse et expression culturelle", "Religion et spiritualité", "Langue", "Artisanat et art"],
    correct: 2
  },
  {
    q: "Quelle description correspond fidèlement au créole haïtien ?",
    options: ["Costume traditionnel porté notamment lors des danses folkloriques et fêtes patriotiques", "Célébration vodou du début du mois de novembre honorant les esprits des morts", "Rassemblement communautaire organisé après un décès, mêlant prières, chants et souvenirs du défunt", "Créole à base lexicale française parlé par environ onze millions de personnes en Haïti"],
    correct: 3
  },
  {
    q: "Quelle période historique est associée au créole haïtien ?",
    options: ["Intemporel", "Révolution haïtienne", "XXe siècle", "Années 1970"],
    correct: 0
  },
  {
    q: "La reconnaissance du vodou comme religion est avant tout une expression de quel domaine ?",
    options: ["Vie sociale et coutumes", "Artisanat et art", "Religion et spiritualité", "Langue"],
    correct: 2
  },
  {
    q: "Le fer découpé de la Croix-des-Bouquets remonte à quelle époque de l'histoire d'Haïti ?",
    options: ["Milieu XXe siècle", "Années 1960", "XIXe siècle", "XXe siècle"],
    correct: 3
  },
  {
    q: "Le créole haïtien se caractérise principalement par :",
    options: ["Danse associée aux esprits Gede, marquée par des mouvements de bassin très expressifs", "Créole à base lexicale française parlé par environ onze millions de personnes en Haïti", "Religion la plus pratiquée du pays aux côtés du protestantisme et du vodou, souvent en syncrétisme avec ce dernier", "« L'Union fait la Force » figure sur les armoiries et symbolise l'unité forgée pendant la lutte pour l'indépendance"],
    correct: 1
  },
  {
    q: "À quel aspect de la culture haïtienne se rattache le drapo vodou ?",
    options: ["Artisanat et art", "Religion et spiritualité", "Langue", "Vie sociale et coutumes"],
    correct: 0
  },
  {
    q: "Où dézafi, premier roman en créole haïtien est-il/elle particulièrement présent(e) ou pratiqué(e) ?",
    options: ["International", "Haïti", "Croix-des-Bouquets", "Zones rurales d'Haïti"],
    correct: 1
  },
  {
    q: "Dans quelle catégorie situerait-on le créole haïtien ?",
    options: ["Langue", "Fête et tradition", "Religion et spiritualité", "Vie sociale et coutumes"],
    correct: 0
  },
  {
    q: "À quelle époque rattache-t-on le vèvè, symbole rituel du vodou ?",
    options: ["Intemporel", "Milieu XXe siècle", "Années 1940", "Années 1970"],
    correct: 0
  },
  {
    q: "Quel est le fait vérifié concernant le vèvè, symbole rituel du vodou ?",
    options: ["Ce roman de Frankétienne, publié en 1975, est considéré comme le tout premier roman écrit en créole haïtien", "Dessin tracé au sol, souvent à la farine ou à la cendre, représentant un esprit lors des cérémonies", "Art du métal martelé et découpé, né dans cette commune devenue capitale haïtienne de cet artisanat", "Cet article proclame que tous les Haïtiens sont unis par une langue commune, le créole"],
    correct: 1
  },
  {
    q: "Où le 1er janvier, jour de l'indépendance est-il/elle particulièrement présent(e) ou pratiqué(e) ?",
    options: ["National", "Port-au-Prince (itinérant)", "Croix-des-Bouquets", "Arcahaie"],
    correct: 0
  },
  {
    q: "Quelle période historique est associée au Konbit ?",
    options: ["Intemporel", "XIXe siècle", "Années 1940", "Années 1970"],
    correct: 0
  },
  {
    q: "Où le Rara est-il/elle particulièrement présent(e) ou pratiqué(e) ?",
    options: ["Milot (Nord)", "Jacmel", "International", "Zones rurales d'Haïti"],
    correct: 3
  },
  {
    q: "Dans quelle catégorie situerait-on le Rara ?",
    options: ["Artisanat et art", "Vie sociale et coutumes", "Fête et tradition", "Religion et spiritualité"],
    correct: 2
  },
  {
    q: "Qu'est-ce qui définit la Méringue de salon avec exactitude ?",
    options: ["Courant pictural né autour du Centre d'Art, mêlant scènes de vie quotidienne et imaginaire vodou", "Fondé en 1944, ce centre a révélé de nombreux artistes fondateurs de la peinture naïve haïtienne", "« L'Union fait la Force » figure sur les armoiries et symbolise l'unité forgée pendant la lutte pour l'indépendance", "Danse de couple élégante, considérée comme un ancêtre du konpa moderne"],
    correct: 3
  },
  {
    q: "L'article 5 de la Constitution de 1987 est avant tout une expression de quel domaine ?",
    options: ["Religion et spiritualité", "Vie sociale et coutumes", "Fête et tradition", "Langue"],
    correct: 3
  },
  {
    q: "Le 1er janvier, jour de l'indépendance est surtout ancré(e) dans quelle région d'Haïti ?",
    options: ["National", "Haïti", "Jacmel", "Croix-des-Bouquets"],
    correct: 0
  },
  {
    q: "Le tap-tap, transport en commun peint est surtout ancré(e) dans quelle région d'Haïti ?",
    options: ["Zones rurales d'Haïti", "Haïti", "Nord d'Haïti", "National"],
    correct: 3
  },
  {
    q: "Le vèvè, symbole rituel du vodou trouve son origine à quelle période ?",
    options: ["Années 1960", "XIXe siècle", "XXe siècle", "Intemporel"],
    correct: 3
  },
  {
    q: "Le Banda, danse rituelle vodou est surtout ancré(e) dans quelle région d'Haïti ?",
    options: ["Port-au-Prince (itinérant)", "Croix-des-Bouquets", "Jacmel", "National"],
    correct: 3
  },
  {
    q: "Depuis quand le vodou haïtien fait-il/elle partie de la culture haïtienne ?",
    options: ["Années 1960", "Époque contemporaine", "Milieu XXe siècle", "Intemporel"],
    correct: 3
  },
  {
    q: "Le Centre d'Art de Port-au-Prince appartient à quel volet de la tradition haïtienne ?",
    options: ["Vie sociale et coutumes", "Langue", "Fête et tradition", "Artisanat et art"],
    correct: 3
  },
  {
    q: "Quelle période historique est associée au 1er janvier, jour de l'indépendance ?",
    options: ["Années 1970", "XIXe siècle", "XXe siècle", "Intemporel"],
    correct: 3
  },
  {
    q: "La Citadelle Laferrière, symbole culturel est surtout ancré(e) dans quelle région d'Haïti ?",
    options: ["Croix-des-Bouquets", "Milot (Nord)", "Haïti", "International"],
    correct: 1
  },
  {
    q: "Quelle affirmation décrit le mieux le houngan, prêtre du vodou ?",
    options: ["Célébration vodou du début du mois de novembre honorant les esprits des morts", "Cérémonie vodou d'août 1791 considérée comme un moment fondateur de l'insurrection des esclaves", "Instrument rituel en forme de calebasse ornée de perles, symbole d'autorité spirituelle du prêtre ou de la prêtresse", "Officiant masculin qui dirige les cérémonies et rituels du culte vodou"],
    correct: 3
  },
  {
    q: "La peinture naïve haïtienne se caractérise principalement par :",
    options: ["Célébration vodou du début du mois de novembre honorant les esprits des morts", "Institution prévue par la Constitution de 1987 pour fixer et développer la langue créole", "Courant pictural né autour du Centre d'Art, mêlant scènes de vie quotidienne et imaginaire vodou", "Forme traditionnelle d'entraide agricole où les paysans travaillent collectivement la terre"],
    correct: 2
  },
  {
    q: "Le vèvè, symbole rituel du vodou appartient à quel volet de la tradition haïtienne ?",
    options: ["Langue", "Religion et spiritualité", "Artisanat et art", "Fête et tradition"],
    correct: 1
  },
  {
    q: "Quelle période historique est associée au fer découpé de la Croix-des-Bouquets ?",
    options: ["Époque contemporaine", "XXe siècle", "Révolution haïtienne", "Milieu XXe siècle"],
    correct: 1
  },
  {
    q: "Quel domaine de la vie culturelle haïtienne illustre le Kanaval national ?",
    options: ["Religion et spiritualité", "Artisanat et art", "Fête et tradition", "Danse et expression culturelle"],
    correct: 2
  },
  {
    q: "Qu'est-ce qui définit le Rara avec exactitude ?",
    options: ["Rassemblement communautaire organisé après un décès, mêlant prières, chants et souvenirs du défunt", "Danse de couple élégante, considérée comme un ancêtre du konpa moderne", "Créé en 1803 lors du congrès de l'Arcahaie à partir du drapeau tricolore français dont la bande blanche fut retirée", "Procession musicale de rue jouée pendant la période du Carême, mêlant percussions et trompettes en bambou"],
    correct: 3
  },
  {
    q: "Que faut-il savoir sur la Veye, veillée funéraire haïtienne ?",
    options: ["Officiante féminine occupant un rôle spirituel équivalent à celui du houngan", "Forme traditionnelle d'entraide agricole où les paysans travaillent collectivement la terre", "Actée par la Constitution de mars 1987, qui fait du créole une langue officielle à égalité avec le français", "Rassemblement communautaire organisé après un décès, mêlant prières, chants et souvenirs du défunt"],
    correct: 3
  },
  {
    q: "La reconnaissance du vodou comme religion trouve son origine à quelle période ?",
    options: ["Intemporel", "Années 1940", "Époque contemporaine", "Années 1970"],
    correct: 2
  },
  {
    q: "À quelle époque rattache-t-on la karabela, tenue traditionnelle ?",
    options: ["Intemporel", "Années 1970", "Révolution haïtienne", "XIXe siècle"],
    correct: 0
  },
  {
    q: "Le drapo vodou est avant tout une expression de quel domaine ?",
    options: ["Fête et tradition", "Langue", "Danse et expression culturelle", "Artisanat et art"],
    correct: 3
  },
  {
    q: "Comment décrit-on précisément le Yanvalou, danse rituelle vodou ?",
    options: ["« L'Union fait la Force » figure sur les armoiries et symbolise l'unité forgée pendant la lutte pour l'indépendance", "Danse cérémonielle vodou caractérisée par des mouvements ondulants du dos et des épaules", "Seule langue officielle d'Haïti depuis 1918, durant l'occupation américaine, jusqu'à l'arrivée du créole à ce statut", "Cet article proclame que tous les Haïtiens sont unis par une langue commune, le créole"],
    correct: 1
  },
  {
    q: "Le statut du français avant 1987 est avant tout une expression de quel domaine ?",
    options: ["Artisanat et art", "Religion et spiritualité", "Langue", "Danse et expression culturelle"],
    correct: 2
  },
  {
    q: "Le houngan, prêtre du vodou se caractérise principalement par :",
    options: ["Cet article proclame que tous les Haïtiens sont unis par une langue commune, le créole", "On distingue traditionnellement le créole du Nord, du Centre et du Sud d'Haïti", "Célébrée chaque 28 octobre depuis son instauration en 1981 à l'initiative de la Dominique", "Officiant masculin qui dirige les cérémonies et rituels du culte vodou"],
    correct: 3
  },
  {
    q: "Le Yanvalou, danse rituelle vodou se caractérise principalement par :",
    options: ["Instrument rituel en forme de calebasse ornée de perles, symbole d'autorité spirituelle du prêtre ou de la prêtresse", "Danse cérémonielle vodou caractérisée par des mouvements ondulants du dos et des épaules", "Cet article proclame que tous les Haïtiens sont unis par une langue commune, le créole", "Créé en 1803 lors du congrès de l'Arcahaie à partir du drapeau tricolore français dont la bande blanche fut retirée"],
    correct: 1
  },
  {
    q: "La Veye, veillée funéraire haïtienne est avant tout une expression de quel domaine ?",
    options: ["Artisanat et art", "Langue", "Vie sociale et coutumes", "Religion et spiritualité"],
    correct: 2
  },
  {
    q: "À quel aspect de la culture haïtienne se rattache la Citadelle Laferrière, symbole culturel ?",
    options: ["Langue", "Religion et spiritualité", "Fête et tradition", "Artisanat et art"],
    correct: 3
  },
  {
    q: "Quel domaine de la vie culturelle haïtienne illustre le Lakou ?",
    options: ["Vie sociale et coutumes", "Langue", "Artisanat et art", "Danse et expression culturelle"],
    correct: 0
  },
  {
    q: "La Fête Gede est surtout ancré(e) dans quelle région d'Haïti ?",
    options: ["Nord d'Haïti", "Croix-des-Bouquets", "International", "National"],
    correct: 3
  },
  {
    q: "Quel lieu est le plus étroitement lié au Konbit ?",
    options: ["Zones rurales d'Haïti", "National", "Milot (Nord)", "Jacmel"],
    correct: 0
  },
  {
    q: "La cérémonie du Bois-Caïman est surtout ancré(e) dans quelle région d'Haïti ?",
    options: ["Nord d'Haïti", "International", "Zones rurales d'Haïti", "Port-au-Prince (itinérant)"],
    correct: 0
  },
  {
    q: "Le catholicisme en Haïti relève principalement de quel domaine culturel ?",
    options: ["Langue", "Danse et expression culturelle", "Religion et spiritualité", "Vie sociale et coutumes"],
    correct: 2
  },
  {
    q: "La variation dialectale du créole haïtien se caractérise principalement par :",
    options: ["Le créole tire l'essentiel de son vocabulaire du français, avec des apports africains, taïnos et espagnols", "Expressions populaires transmises oralement, très présentes dans la sagesse et l'éducation traditionnelles", "On distingue traditionnellement le créole du Nord, du Centre et du Sud d'Haïti", "« L'Union fait la Force » figure sur les armoiries et symbolise l'unité forgée pendant la lutte pour l'indépendance"],
    correct: 2
  },
  {
    q: "Dans quelle catégorie situerait-on l'influence lexicale du créole haïtien ?",
    options: ["Fête et tradition", "Artisanat et art", "Langue", "Religion et spiritualité"],
    correct: 2
  },
  {
    q: "Dans quel contexte géographique situe-t-on la Méringue de salon ?",
    options: ["Nord d'Haïti", "Zones rurales d'Haïti", "Arcahaie", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Quel domaine de la vie culturelle haïtienne illustre la co-officialisation du créole et du français ?",
    options: ["Langue", "Danse et expression culturelle", "Religion et spiritualité", "Artisanat et art"],
    correct: 0
  },
  {
    q: "Qu'est-ce qui définit la tradition des pwovèb ayisyen (proverbes haïtiens) avec exactitude ?",
    options: ["Célébrée chaque 18 mai, en commémoration de la création du drapeau haïtien en 1803", "Institution prévue par la Constitution de 1987 pour fixer et développer la langue créole", "Expressions populaires transmises oralement, très présentes dans la sagesse et l'éducation traditionnelles", "Dessin tracé au sol, souvent à la farine ou à la cendre, représentant un esprit lors des cérémonies"],
    correct: 2
  },
  {
    q: "Depuis quand la co-officialisation du créole et du français fait-il/elle partie de la culture haïtienne ?",
    options: ["Années 1960", "Époque contemporaine", "Intemporel", "XIXe siècle"],
    correct: 1
  },
  {
    q: "À quelle région ou quel contexte associe-t-on dézafi, premier roman en créole haïtien ?",
    options: ["Port-au-Prince (itinérant)", "Haïti", "Croix-des-Bouquets", "Arcahaie"],
    correct: 1
  },
  {
    q: "À quelle région ou quel contexte associe-t-on le Centre d'Art de Port-au-Prince ?",
    options: ["Milot (Nord)", "Jacmel", "Arcahaie", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Quelle affirmation décrit le mieux la Veye, veillée funéraire haïtienne ?",
    options: ["Rassemblement communautaire organisé après un décès, mêlant prières, chants et souvenirs du défunt", "Fête nationale commémorant la proclamation de l'indépendance d'Haïti en 1804", "Tradition orale populaire mettant en scène deux personnages complices et rivaux dans la sagesse paysanne", "On distingue traditionnellement le créole du Nord, du Centre et du Sud d'Haïti"],
    correct: 0
  },
  {
    q: "Dans quel contexte géographique situe-t-on l'ason, hochet sacré du vodou ?",
    options: ["Haïti", "International", "National", "Zones rurales d'Haïti"],
    correct: 2
  },
  {
    q: "Où l'Académie créole prévue par l'article 213 est-il/elle particulièrement présent(e) ou pratiqué(e) ?",
    options: ["Arcahaie", "Port-au-Prince (itinérant)", "National", "Jacmel"],
    correct: 2
  },
  {
    q: "Comment classerait-on la Veye, veillée funéraire haïtienne dans la culture haïtienne ?",
    options: ["Danse et expression culturelle", "Langue", "Religion et spiritualité", "Vie sociale et coutumes"],
    correct: 3
  },
  {
    q: "Dans quelle catégorie situerait-on le madras, tissu traditionnel ?",
    options: ["Fête et tradition", "Danse et expression culturelle", "Artisanat et art", "Langue"],
    correct: 2
  },
  {
    q: "Quelle période historique est associée à la tradition des pwovèb ayisyen (proverbes haïtiens) ?",
    options: ["Intemporel", "Milieu XXe siècle", "Années 1960", "Révolution haïtienne"],
    correct: 0
  },
  {
    q: "Quel est le fait vérifié concernant le tap-tap, transport en commun peint ?",
    options: ["Créole à base lexicale française parlé par environ onze millions de personnes en Haïti", "Drapeau cérémoniel richement brodé de perles et de sequins représentant un esprit du vodou", "Camionnette ou bus coloré, richement décoré de motifs religieux et populaires, servant de transport collectif", "Célébrée chaque 18 mai, en commémoration de la création du drapeau haïtien en 1803"],
    correct: 2
  },
  {
    q: "Comment décrirait-on la nature de la cérémonie du Bois-Caïman ?",
    options: ["Fête et tradition", "Religion et spiritualité", "Artisanat et art", "Vie sociale et coutumes"],
    correct: 1
  },
  {
    q: "Le Lakou se caractérise principalement par :",
    options: ["Dessin tracé au sol, souvent à la farine ou à la cendre, représentant un esprit lors des cérémonies", "Ce roman de Frankétienne, publié en 1975, est considéré comme le tout premier roman écrit en créole haïtien", "Danse associée aux esprits Gede, marquée par des mouvements de bassin très expressifs", "Espace commun regroupant plusieurs habitations d'une même famille élargie, cœur de la vie sociale rurale"],
    correct: 3
  },
  {
    q: "Comment décrirait-on la nature du fer découpé de la Croix-des-Bouquets ?",
    options: ["Artisanat et art", "Vie sociale et coutumes", "Religion et spiritualité", "Danse et expression culturelle"],
    correct: 0
  },
  {
    q: "Qu'est-ce qui définit le créole haïtien avec exactitude ?",
    options: ["Religion syncrétique mêlant croyances ouest-africaines et éléments catholiques, pratiquée par une large partie de la population", "Danse cérémonielle vodou caractérisée par des mouvements ondulants du dos et des épaules", "Créole à base lexicale française parlé par environ onze millions de personnes en Haïti", "Institution prévue par la Constitution de 1987 pour fixer et développer la langue créole"],
    correct: 2
  },
  {
    q: "Quelle description correspond fidèlement à la manbo, prêtresse du vodou ?",
    options: ["Célébrée chaque 28 octobre depuis son instauration en 1981 à l'initiative de la Dominique", "Cet article proclame que tous les Haïtiens sont unis par une langue commune, le créole", "Officiante féminine occupant un rôle spirituel équivalent à celui du houngan", "Courant pictural né autour du Centre d'Art, mêlant scènes de vie quotidienne et imaginaire vodou"],
    correct: 2
  },
  {
    q: "Comment décrirait-on la nature du 1er janvier, jour de l'indépendance ?",
    options: ["Fête et tradition", "Langue", "Vie sociale et coutumes", "Artisanat et art"],
    correct: 0
  },
  {
    q: "Comment décrirait-on la nature de la tradition des contes de Bouki et Malice ?",
    options: ["Langue", "Religion et spiritualité", "Vie sociale et coutumes", "Artisanat et art"],
    correct: 2
  },
  {
    q: "À quelle région ou quel contexte associe-t-on le Carnaval de Jacmel ?",
    options: ["Haïti", "International", "Jacmel", "Port-au-Prince (itinérant)"],
    correct: 2
  },
  {
    q: "Quel domaine de la vie culturelle haïtienne illustre le Konbit ?",
    options: ["Fête et tradition", "Vie sociale et coutumes", "Artisanat et art", "Langue"],
    correct: 1
  },
  {
    q: "À quelle époque rattache-t-on le catholicisme en Haïti ?",
    options: ["Milieu XXe siècle", "Intemporel", "Époque contemporaine", "XIXe siècle"],
    correct: 1
  },
  {
    q: "La karabela, tenue traditionnelle est surtout ancré(e) dans quelle région d'Haïti ?",
    options: ["Port-au-Prince", "Nord d'Haïti", "National", "International"],
    correct: 2
  },
  {
    q: "Le Banda, danse rituelle vodou se caractérise principalement par :",
    options: ["Première mention du créole dans un texte constitutionnel haïtien, avant sa pleine officialisation en 1987", "Danse associée aux esprits Gede, marquée par des mouvements de bassin très expressifs", "Cet article proclame que tous les Haïtiens sont unis par une langue commune, le créole", "Grande fête populaire précédant le Mercredi des Cendres, rythmée par les orchestres de konpa"],
    correct: 1
  },
  {
    q: "Le statut du français avant 1987 se caractérise principalement par :",
    options: ["Seule langue officielle d'Haïti depuis 1918, durant l'occupation américaine, jusqu'à l'arrivée du créole à ce statut", "Célébrée chaque 28 octobre depuis son instauration en 1981 à l'initiative de la Dominique", "Célébrée chaque 18 mai, en commémoration de la création du drapeau haïtien en 1803", "Religion la plus pratiquée du pays aux côtés du protestantisme et du vodou, souvent en syncrétisme avec ce dernier"],
    correct: 0
  },
  {
    q: "À quelle région ou quel contexte associe-t-on l'Académie créole prévue par l'article 213 ?",
    options: ["Nord d'Haïti", "Port-au-Prince (itinérant)", "National", "Arcahaie"],
    correct: 2
  },
  {
    q: "Le vèvè, symbole rituel du vodou est avant tout une expression de quel domaine ?",
    options: ["Artisanat et art", "Religion et spiritualité", "Danse et expression culturelle", "Langue"],
    correct: 1
  },
  {
    q: "Quel repère temporel correspond au Carnaval de Jacmel ?",
    options: ["XIXe siècle", "Années 1970", "Milieu XXe siècle", "Intemporel"],
    correct: 3
  },
  {
    q: "À quelle région ou quel contexte associe-t-on la Fête Gede ?",
    options: ["Croix-des-Bouquets", "National", "Milot (Nord)", "Haïti"],
    correct: 1
  },
  {
    q: "Qu'est-ce qui définit l'influence lexicale du créole haïtien avec exactitude ?",
    options: ["Expressions populaires transmises oralement, très présentes dans la sagesse et l'éducation traditionnelles", "Seule langue officielle d'Haïti depuis 1918, durant l'occupation américaine, jusqu'à l'arrivée du créole à ce statut", "Fête nationale commémorant la proclamation de l'indépendance d'Haïti en 1804", "Le créole tire l'essentiel de son vocabulaire du français, avec des apports africains, taïnos et espagnols"],
    correct: 3
  },
  {
    q: "Comment classerait-on le Yanvalou, danse rituelle vodou dans la culture haïtienne ?",
    options: ["Religion et spiritualité", "Artisanat et art", "Fête et tradition", "Danse et expression culturelle"],
    correct: 3
  },
  {
    q: "Qu'est-ce qui définit l'ason, hochet sacré du vodou avec exactitude ?",
    options: ["Instrument rituel en forme de calebasse ornée de perles, symbole d'autorité spirituelle du prêtre ou de la prêtresse", "Tissu à carreaux colorés utilisé dans la confection des tenues traditionnelles féminines", "Drapeau cérémoniel richement brodé de perles et de sequins représentant un esprit du vodou", "Tradition orale populaire mettant en scène deux personnages complices et rivaux dans la sagesse paysanne"],
    correct: 0
  },
  {
    q: "Quel repère temporel correspond à la co-officialisation du créole et du français ?",
    options: ["Années 1970", "Époque contemporaine", "Milieu XXe siècle", "Années 1960"],
    correct: 1
  },
  {
    q: "Quel lieu est le plus étroitement lié au Banda, danse rituelle vodou ?",
    options: ["Port-au-Prince", "Milot (Nord)", "Port-au-Prince (itinérant)", "National"],
    correct: 3
  },
  {
    q: "Que faut-il savoir sur la reconnaissance du vodou comme religion ?",
    options: ["Fête nationale commémorant la proclamation de l'indépendance d'Haïti en 1804", "Officiante féminine occupant un rôle spirituel équivalent à celui du houngan", "Ce roman de Frankétienne, publié en 1975, est considéré comme le tout premier roman écrit en créole haïtien", "Le vodou est officiellement reconnu comme religion en Haïti depuis le début des années 2000"],
    correct: 3
  },
  {
    q: "À quel aspect de la culture haïtienne se rattache le Carnaval de Jacmel ?",
    options: ["Langue", "Religion et spiritualité", "Vie sociale et coutumes", "Fête et tradition"],
    correct: 3
  },
  {
    q: "Quelle période historique est associée au Lakou ?",
    options: ["Intemporel", "Révolution haïtienne", "Époque contemporaine", "Années 1940"],
    correct: 0
  },
  {
    q: "Le 1er janvier, jour de l'indépendance trouve son origine à quelle période ?",
    options: ["Révolution haïtienne", "Intemporel", "Années 1970", "Années 1960"],
    correct: 1
  },
  {
    q: "La Citadelle Laferrière, symbole culturel remonte à quelle époque de l'histoire d'Haïti ?",
    options: ["Milieu XXe siècle", "Années 1970", "Années 1960", "XIXe siècle"],
    correct: 3
  },
  {
    q: "Quelle affirmation décrit le mieux la devise nationale d'Haïti ?",
    options: ["Drapeau cérémoniel richement brodé de perles et de sequins représentant un esprit du vodou", "Institution prévue par la Constitution de 1987 pour fixer et développer la langue créole", "« L'Union fait la Force » figure sur les armoiries et symbolise l'unité forgée pendant la lutte pour l'indépendance", "Grande fête populaire précédant le Mercredi des Cendres, rythmée par les orchestres de konpa"],
    correct: 2
  },
  {
    q: "Comment décrirait-on la nature de la co-officialisation du créole et du français ?",
    options: ["Langue", "Fête et tradition", "Vie sociale et coutumes", "Danse et expression culturelle"],
    correct: 0
  },
  {
    q: "Quelle affirmation décrit le mieux le vèvè, symbole rituel du vodou ?",
    options: ["Danse cérémonielle vodou caractérisée par des mouvements ondulants du dos et des épaules", "Créé en 1803 lors du congrès de l'Arcahaie à partir du drapeau tricolore français dont la bande blanche fut retirée", "Instrument rituel en forme de calebasse ornée de perles, symbole d'autorité spirituelle du prêtre ou de la prêtresse", "Dessin tracé au sol, souvent à la farine ou à la cendre, représentant un esprit lors des cérémonies"],
    correct: 3
  },
  {
    q: "À quelle région ou quel contexte associe-t-on la mention du créole dans la Constitution de 1964 ?",
    options: ["National", "Port-au-Prince (itinérant)", "Port-au-Prince", "Zones rurales d'Haïti"],
    correct: 0
  },
  {
    q: "La tradition des pwovèb ayisyen (proverbes haïtiens) relève principalement de quel domaine culturel ?",
    options: ["Vie sociale et coutumes", "Artisanat et art", "Danse et expression culturelle", "Langue"],
    correct: 0
  },
  {
    q: "Quelle affirmation décrit le mieux dézafi, premier roman en créole haïtien ?",
    options: ["Carnaval réputé pour ses masques en papier mâché et ses costumes artisanaux élaborés", "Fondé en 1944, ce centre a révélé de nombreux artistes fondateurs de la peinture naïve haïtienne", "Ce roman de Frankétienne, publié en 1975, est considéré comme le tout premier roman écrit en créole haïtien", "Drapeau cérémoniel richement brodé de perles et de sequins représentant un esprit du vodou"],
    correct: 2
  },
  {
    q: "La Fête du Drapeau est surtout ancré(e) dans quelle région d'Haïti ?",
    options: ["Arcahaie", "Milot (Nord)", "National", "Port-au-Prince"],
    correct: 2
  },
  {
    q: "Qu'est-ce qui définit le catholicisme en Haïti avec exactitude ?",
    options: ["Expressions populaires transmises oralement, très présentes dans la sagesse et l'éducation traditionnelles", "Religion la plus pratiquée du pays aux côtés du protestantisme et du vodou, souvent en syncrétisme avec ce dernier", "Carnaval réputé pour ses masques en papier mâché et ses costumes artisanaux élaborés", "Procession musicale de rue jouée pendant la période du Carême, mêlant percussions et trompettes en bambou"],
    correct: 1
  },
  {
    q: "À quelle région ou quel contexte associe-t-on le Yanvalou, danse rituelle vodou ?",
    options: ["Croix-des-Bouquets", "Milot (Nord)", "National", "Arcahaie"],
    correct: 2
  },
  {
    q: "La co-officialisation du créole et du français est avant tout une expression de quel domaine ?",
    options: ["Danse et expression culturelle", "Fête et tradition", "Vie sociale et coutumes", "Langue"],
    correct: 3
  },
  {
    q: "Quelle affirmation décrit le mieux le statut du français avant 1987 ?",
    options: ["Seule langue officielle d'Haïti depuis 1918, durant l'occupation américaine, jusqu'à l'arrivée du créole à ce statut", "Costume traditionnel porté notamment lors des danses folkloriques et fêtes patriotiques", "Danse associée aux esprits Gede, marquée par des mouvements de bassin très expressifs", "Forme traditionnelle d'entraide agricole où les paysans travaillent collectivement la terre"],
    correct: 0
  },
  {
    q: "Le Konbit est surtout ancré(e) dans quelle région d'Haïti ?",
    options: ["Zones rurales d'Haïti", "Nord d'Haïti", "Haïti", "Milot (Nord)"],
    correct: 0
  },
  {
    q: "La devise nationale d'Haïti relève principalement de quel domaine culturel ?",
    options: ["Vie sociale et coutumes", "Langue", "Fête et tradition", "Religion et spiritualité"],
    correct: 0
  },
  {
    q: "Dans quelle catégorie situerait-on la tradition des pwovèb ayisyen (proverbes haïtiens) ?",
    options: ["Danse et expression culturelle", "Vie sociale et coutumes", "Fête et tradition", "Religion et spiritualité"],
    correct: 1
  },
  {
    q: "À quel aspect de la culture haïtienne se rattache l'influence lexicale du créole haïtien ?",
    options: ["Religion et spiritualité", "Vie sociale et coutumes", "Fête et tradition", "Langue"],
    correct: 3
  },
  {
    q: "La Fête du Drapeau relève principalement de quel domaine culturel ?",
    options: ["Religion et spiritualité", "Langue", "Fête et tradition", "Artisanat et art"],
    correct: 2
  },
  {
    q: "Quel repère temporel correspond au drapeau haïtien ?",
    options: ["Révolution haïtienne", "Années 1970", "Milieu XXe siècle", "Intemporel"],
    correct: 0
  },
  {
    q: "Comment classerait-on la tradition des contes de Bouki et Malice dans la culture haïtienne ?",
    options: ["Religion et spiritualité", "Fête et tradition", "Danse et expression culturelle", "Vie sociale et coutumes"],
    correct: 3
  },
  {
    q: "Quel est le fait vérifié concernant la mention du créole dans la Constitution de 1964 ?",
    options: ["Art du métal martelé et découpé, né dans cette commune devenue capitale haïtienne de cet artisanat", "Célébration vodou du début du mois de novembre honorant les esprits des morts", "Espace commun regroupant plusieurs habitations d'une même famille élargie, cœur de la vie sociale rurale", "Première mention du créole dans un texte constitutionnel haïtien, avant sa pleine officialisation en 1987"],
    correct: 3
  },
  {
    q: "Dans quel contexte géographique situe-t-on le Kanaval national ?",
    options: ["Croix-des-Bouquets", "Port-au-Prince (itinérant)", "Nord d'Haïti", "Jacmel"],
    correct: 1
  },
  {
    q: "Qu'est-ce qui définit la devise nationale d'Haïti avec exactitude ?",
    options: ["Drapeau cérémoniel richement brodé de perles et de sequins représentant un esprit du vodou", "« L'Union fait la Force » figure sur les armoiries et symbolise l'unité forgée pendant la lutte pour l'indépendance", "Grande fête populaire précédant le Mercredi des Cendres, rythmée par les orchestres de konpa", "Célébrée chaque 28 octobre depuis son instauration en 1981 à l'initiative de la Dominique"],
    correct: 1
  },
  {
    q: "Le Rara est surtout ancré(e) dans quelle région d'Haïti ?",
    options: ["Milot (Nord)", "Croix-des-Bouquets", "National", "Zones rurales d'Haïti"],
    correct: 3
  },
  {
    q: "À quelle époque rattache-t-on le madras, tissu traditionnel ?",
    options: ["Années 1970", "Époque contemporaine", "Révolution haïtienne", "Intemporel"],
    correct: 3
  },
  {
    q: "Depuis quand le tap-tap, transport en commun peint fait-il/elle partie de la culture haïtienne ?",
    options: ["Intemporel", "Années 1970", "Époque contemporaine", "XIXe siècle"],
    correct: 0
  },
  {
    q: "Dans quelle catégorie situerait-on le Centre d'Art de Port-au-Prince ?",
    options: ["Danse et expression culturelle", "Vie sociale et coutumes", "Artisanat et art", "Langue"],
    correct: 2
  },
  {
    q: "Qu'est-ce qui définit le drapeau haïtien avec exactitude ?",
    options: ["Tissu à carreaux colorés utilisé dans la confection des tenues traditionnelles féminines", "Créé en 1803 lors du congrès de l'Arcahaie à partir du drapeau tricolore français dont la bande blanche fut retirée", "Cérémonie vodou d'août 1791 considérée comme un moment fondateur de l'insurrection des esclaves", "Camionnette ou bus coloré, richement décoré de motifs religieux et populaires, servant de transport collectif"],
    correct: 1
  },
  {
    q: "Quelle affirmation décrit le mieux le vodou haïtien ?",
    options: ["Religion syncrétique mêlant croyances ouest-africaines et éléments catholiques, pratiquée par une large partie de la population", "Première mention du créole dans un texte constitutionnel haïtien, avant sa pleine officialisation en 1987", "Le vodou est officiellement reconnu comme religion en Haïti depuis le début des années 2000", "Célébration vodou du début du mois de novembre honorant les esprits des morts"],
    correct: 0
  },
  {
    q: "Le fer découpé de la Croix-des-Bouquets se caractérise principalement par :",
    options: ["Fête nationale commémorant la proclamation de l'indépendance d'Haïti en 1804", "Espace commun regroupant plusieurs habitations d'une même famille élargie, cœur de la vie sociale rurale", "Officiant masculin qui dirige les cérémonies et rituels du culte vodou", "Art du métal martelé et découpé, né dans cette commune devenue capitale haïtienne de cet artisanat"],
    correct: 3
  },
  {
    q: "Quel domaine de la vie culturelle haïtienne illustre l'influence lexicale du créole haïtien ?",
    options: ["Fête et tradition", "Artisanat et art", "Vie sociale et coutumes", "Langue"],
    correct: 3
  },
  {
    q: "Comment classerait-on la cérémonie du Bois-Caïman dans la culture haïtienne ?",
    options: ["Religion et spiritualité", "Langue", "Artisanat et art", "Fête et tradition"],
    correct: 0
  },
  {
    q: "L'Académie créole prévue par l'article 213 trouve son origine à quelle période ?",
    options: ["Années 1970", "Révolution haïtienne", "Époque contemporaine", "Intemporel"],
    correct: 2
  },
  {
    q: "Le drapeau haïtien est avant tout une expression de quel domaine ?",
    options: ["Fête et tradition", "Danse et expression culturelle", "Vie sociale et coutumes", "Religion et spiritualité"],
    correct: 2
  },
  {
    q: "Quelle période historique est associée au drapeau haïtien ?",
    options: ["Milieu XXe siècle", "Époque contemporaine", "Révolution haïtienne", "XIXe siècle"],
    correct: 2
  },
  {
    q: "Quel lieu est le plus étroitement lié à la Citadelle Laferrière, symbole culturel ?",
    options: ["Port-au-Prince", "International", "Zones rurales d'Haïti", "Milot (Nord)"],
    correct: 3
  },
  {
    q: "La reconnaissance du vodou comme religion se caractérise principalement par :",
    options: ["Seule langue officielle d'Haïti depuis 1918, durant l'occupation américaine, jusqu'à l'arrivée du créole à ce statut", "On distingue traditionnellement le créole du Nord, du Centre et du Sud d'Haïti", "Camionnette ou bus coloré, richement décoré de motifs religieux et populaires, servant de transport collectif", "Le vodou est officiellement reconnu comme religion en Haïti depuis le début des années 2000"],
    correct: 3
  },
  {
    q: "Le Rara relève principalement de quel domaine culturel ?",
    options: ["Fête et tradition", "Danse et expression culturelle", "Religion et spiritualité", "Langue"],
    correct: 0
  },
  {
    q: "L'ason, hochet sacré du vodou remonte à quelle époque de l'histoire d'Haïti ?",
    options: ["Intemporel", "Époque contemporaine", "Révolution haïtienne", "Années 1970"],
    correct: 0
  },
  {
    q: "Quel est le fait vérifié concernant le catholicisme en Haïti ?",
    options: ["Religion la plus pratiquée du pays aux côtés du protestantisme et du vodou, souvent en syncrétisme avec ce dernier", "Grande fête populaire précédant le Mercredi des Cendres, rythmée par les orchestres de konpa", "Actée par la Constitution de mars 1987, qui fait du créole une langue officielle à égalité avec le français", "Cet article proclame que tous les Haïtiens sont unis par une langue commune, le créole"],
    correct: 0
  },
  {
    q: "L'Académie créole prévue par l'article 213 est surtout ancré(e) dans quelle région d'Haïti ?",
    options: ["Port-au-Prince", "International", "National", "Haïti"],
    correct: 2
  },
  {
    q: "Le houngan, prêtre du vodou est avant tout une expression de quel domaine ?",
    options: ["Artisanat et art", "Vie sociale et coutumes", "Langue", "Religion et spiritualité"],
    correct: 3
  },
  {
    q: "Qu'est-ce qui définit la manbo, prêtresse du vodou avec exactitude ?",
    options: ["Courant pictural né autour du Centre d'Art, mêlant scènes de vie quotidienne et imaginaire vodou", "Art du métal martelé et découpé, né dans cette commune devenue capitale haïtienne de cet artisanat", "Officiante féminine occupant un rôle spirituel équivalent à celui du houngan", "Camionnette ou bus coloré, richement décoré de motifs religieux et populaires, servant de transport collectif"],
    correct: 2
  },
  {
    q: "Le Yanvalou, danse rituelle vodou est surtout ancré(e) dans quelle région d'Haïti ?",
    options: ["Arcahaie", "National", "Nord d'Haïti", "Jacmel"],
    correct: 1
  },
  {
    q: "La co-officialisation du créole et du français est surtout ancré(e) dans quelle région d'Haïti ?",
    options: ["Arcahaie", "International", "Croix-des-Bouquets", "National"],
    correct: 3
  },
  {
    q: "Comment classerait-on le créole haïtien dans la culture haïtienne ?",
    options: ["Danse et expression culturelle", "Artisanat et art", "Religion et spiritualité", "Langue"],
    correct: 3
  },
  {
    q: "À quel aspect de la culture haïtienne se rattache la Fête du Drapeau ?",
    options: ["Vie sociale et coutumes", "Religion et spiritualité", "Fête et tradition", "Danse et expression culturelle"],
    correct: 2
  },
  {
    q: "Quel domaine de la vie culturelle haïtienne illustre la reconnaissance du vodou comme religion ?",
    options: ["Artisanat et art", "Vie sociale et coutumes", "Fête et tradition", "Religion et spiritualité"],
    correct: 3
  },
  {
    q: "Quel repère temporel correspond au Rara ?",
    options: ["Intemporel", "XXe siècle", "Années 1960", "Années 1940"],
    correct: 0
  },
  {
    q: "Comment décrirait-on la nature du statut du français avant 1987 ?",
    options: ["Artisanat et art", "Religion et spiritualité", "Langue", "Danse et expression culturelle"],
    correct: 2
  },
  {
    q: "Dans quel contexte géographique situe-t-on le tap-tap, transport en commun peint ?",
    options: ["National", "Zones rurales d'Haïti", "Arcahaie", "Milot (Nord)"],
    correct: 0
  },
  {
    q: "Que faut-il savoir sur la co-officialisation du créole et du français ?",
    options: ["Carnaval réputé pour ses masques en papier mâché et ses costumes artisanaux élaborés", "Actée par la Constitution de mars 1987, qui fait du créole une langue officielle à égalité avec le français", "Religion syncrétique mêlant croyances ouest-africaines et éléments catholiques, pratiquée par une large partie de la population", "Tissu à carreaux colorés utilisé dans la confection des tenues traditionnelles féminines"],
    correct: 1
  },
  {
    q: "À quelle région ou quel contexte associe-t-on la manbo, prêtresse du vodou ?",
    options: ["International", "National", "Arcahaie", "Jacmel"],
    correct: 1
  },
  {
    q: "Quel repère temporel correspond à la peinture naïve haïtienne ?",
    options: ["Milieu XXe siècle", "XXe siècle", "Révolution haïtienne", "Époque contemporaine"],
    correct: 0
  },
  {
    q: "La manbo, prêtresse du vodou est surtout ancré(e) dans quelle région d'Haïti ?",
    options: ["Milot (Nord)", "National", "Zones rurales d'Haïti", "Port-au-Prince"],
    correct: 1
  },
  {
    q: "Comment classerait-on le statut du français avant 1987 dans la culture haïtienne ?",
    options: ["Religion et spiritualité", "Artisanat et art", "Langue", "Fête et tradition"],
    correct: 2
  },
  {
    q: "Le Kanaval national est surtout ancré(e) dans quelle région d'Haïti ?",
    options: ["Croix-des-Bouquets", "Port-au-Prince (itinérant)", "Milot (Nord)", "Zones rurales d'Haïti"],
    correct: 1
  },
  {
    q: "La Journée internationale du créole remonte à quelle époque de l'histoire d'Haïti ?",
    options: ["Révolution haïtienne", "Années 1960", "XXe siècle", "Époque contemporaine"],
    correct: 3
  },
  {
    q: "Comment classerait-on l'influence lexicale du créole haïtien dans la culture haïtienne ?",
    options: ["Fête et tradition", "Langue", "Artisanat et art", "Religion et spiritualité"],
    correct: 1
  },
  {
    q: "Qu'est-ce qui définit le Banda, danse rituelle vodou avec exactitude ?",
    options: ["Danse associée aux esprits Gede, marquée par des mouvements de bassin très expressifs", "Courant pictural né autour du Centre d'Art, mêlant scènes de vie quotidienne et imaginaire vodou", "Camionnette ou bus coloré, richement décoré de motifs religieux et populaires, servant de transport collectif", "Rassemblement communautaire organisé après un décès, mêlant prières, chants et souvenirs du défunt"],
    correct: 0
  },
  {
    q: "L'influence lexicale du créole haïtien est avant tout une expression de quel domaine ?",
    options: ["Religion et spiritualité", "Danse et expression culturelle", "Vie sociale et coutumes", "Langue"],
    correct: 3
  },
  {
    q: "Quel domaine de la vie culturelle haïtienne illustre la tradition des pwovèb ayisyen (proverbes haïtiens) ?",
    options: ["Danse et expression culturelle", "Religion et spiritualité", "Vie sociale et coutumes", "Fête et tradition"],
    correct: 2
  },
  {
    q: "Depuis quand la Méringue de salon fait-il/elle partie de la culture haïtienne ?",
    options: ["Milieu XXe siècle", "Années 1970", "Années 1960", "XIXe siècle"],
    correct: 3
  },
  {
    q: "Quel est le fait vérifié concernant le Lakou ?",
    options: ["Espace commun regroupant plusieurs habitations d'une même famille élargie, cœur de la vie sociale rurale", "Célébrée chaque 28 octobre depuis son instauration en 1981 à l'initiative de la Dominique", "Forme traditionnelle d'entraide agricole où les paysans travaillent collectivement la terre", "Danse cérémonielle vodou caractérisée par des mouvements ondulants du dos et des épaules"],
    correct: 0
  },
  {
    q: "L'influence lexicale du créole haïtien trouve son origine à quelle période ?",
    options: ["Années 1960", "XIXe siècle", "Années 1970", "Intemporel"],
    correct: 3
  },
  {
    q: "À quel aspect de la culture haïtienne se rattache le Lakou ?",
    options: ["Vie sociale et coutumes", "Langue", "Religion et spiritualité", "Danse et expression culturelle"],
    correct: 0
  },
  {
    q: "Que faut-il savoir sur le Centre d'Art de Port-au-Prince ?",
    options: ["Célébration vodou du début du mois de novembre honorant les esprits des morts", "Cet article proclame que tous les Haïtiens sont unis par une langue commune, le créole", "Rassemblement communautaire organisé après un décès, mêlant prières, chants et souvenirs du défunt", "Fondé en 1944, ce centre a révélé de nombreux artistes fondateurs de la peinture naïve haïtienne"],
    correct: 3
  },
  {
    q: "La Journée internationale du créole est avant tout une expression de quel domaine ?",
    options: ["Fête et tradition", "Religion et spiritualité", "Langue", "Vie sociale et coutumes"],
    correct: 2
  },
  {
    q: "Que faut-il savoir sur l'influence lexicale du créole haïtien ?",
    options: ["Le créole tire l'essentiel de son vocabulaire du français, avec des apports africains, taïnos et espagnols", "Tissu à carreaux colorés utilisé dans la confection des tenues traditionnelles féminines", "Forteresse classée à l'UNESCO, symbole de la résistance et de la fierté nationale haïtienne", "Officiante féminine occupant un rôle spirituel équivalent à celui du houngan"],
    correct: 0
  },
  {
    q: "Depuis quand le Lakou fait-il/elle partie de la culture haïtienne ?",
    options: ["XXe siècle", "Intemporel", "Milieu XXe siècle", "XIXe siècle"],
    correct: 1
  },
  {
    q: "Dans quelle catégorie situerait-on le Banda, danse rituelle vodou ?",
    options: ["Fête et tradition", "Vie sociale et coutumes", "Danse et expression culturelle", "Langue"],
    correct: 2
  },
  {
    q: "Le madras, tissu traditionnel relève principalement de quel domaine culturel ?",
    options: ["Vie sociale et coutumes", "Artisanat et art", "Religion et spiritualité", "Danse et expression culturelle"],
    correct: 1
  },
  {
    q: "Dézafi, premier roman en créole haïtien trouve son origine à quelle période ?",
    options: ["Révolution haïtienne", "Années 1970", "Époque contemporaine", "Années 1960"],
    correct: 1
  },
  {
    q: "Le fer découpé de la Croix-des-Bouquets appartient à quel volet de la tradition haïtienne ?",
    options: ["Artisanat et art", "Langue", "Religion et spiritualité", "Danse et expression culturelle"],
    correct: 0
  },
  {
    q: "La devise nationale d'Haïti remonte à quelle époque de l'histoire d'Haïti ?",
    options: ["XXe siècle", "Intemporel", "Révolution haïtienne", "Années 1940"],
    correct: 2
  },
  {
    q: "Où le drapeau haïtien est-il/elle particulièrement présent(e) ou pratiqué(e) ?",
    options: ["Arcahaie", "Nord d'Haïti", "Milot (Nord)", "Jacmel"],
    correct: 0
  },
  {
    q: "Que faut-il savoir sur la manbo, prêtresse du vodou ?",
    options: ["Expressions populaires transmises oralement, très présentes dans la sagesse et l'éducation traditionnelles", "Officiante féminine occupant un rôle spirituel équivalent à celui du houngan", "Célébration vodou du début du mois de novembre honorant les esprits des morts", "Costume traditionnel porté notamment lors des danses folkloriques et fêtes patriotiques"],
    correct: 1
  },
  {
    q: "À quel aspect de la culture haïtienne se rattache le fer découpé de la Croix-des-Bouquets ?",
    options: ["Fête et tradition", "Artisanat et art", "Religion et spiritualité", "Langue"],
    correct: 1
  },
  {
    q: "Quelle description correspond fidèlement à la co-officialisation du créole et du français ?",
    options: ["Costume traditionnel porté notamment lors des danses folkloriques et fêtes patriotiques", "Actée par la Constitution de mars 1987, qui fait du créole une langue officielle à égalité avec le français", "Première mention du créole dans un texte constitutionnel haïtien, avant sa pleine officialisation en 1987", "Forme traditionnelle d'entraide agricole où les paysans travaillent collectivement la terre"],
    correct: 1
  },
  {
    q: "Depuis quand le Konbit fait-il/elle partie de la culture haïtienne ?",
    options: ["Années 1960", "Intemporel", "Milieu XXe siècle", "Époque contemporaine"],
    correct: 1
  },
  {
    q: "Depuis quand dézafi, premier roman en créole haïtien fait-il/elle partie de la culture haïtienne ?",
    options: ["Années 1960", "Années 1970", "XXe siècle", "XIXe siècle"],
    correct: 1
  },
  {
    q: "Le Lakou trouve son origine à quelle période ?",
    options: ["Intemporel", "XIXe siècle", "Années 1960", "Époque contemporaine"],
    correct: 0
  },
  {
    q: "Quel repère temporel correspond à la Méringue de salon ?",
    options: ["XIXe siècle", "Années 1940", "Époque contemporaine", "Années 1970"],
    correct: 0
  },
  {
    q: "La mention du créole dans la Constitution de 1964 est surtout ancré(e) dans quelle région d'Haïti ?",
    options: ["Milot (Nord)", "National", "Nord d'Haïti", "Haïti"],
    correct: 1
  },
  {
    q: "Quel est le fait vérifié concernant le Banda, danse rituelle vodou ?",
    options: ["Danse associée aux esprits Gede, marquée par des mouvements de bassin très expressifs", "Ce roman de Frankétienne, publié en 1975, est considéré comme le tout premier roman écrit en créole haïtien", "Art du métal martelé et découpé, né dans cette commune devenue capitale haïtienne de cet artisanat", "Instrument rituel en forme de calebasse ornée de perles, symbole d'autorité spirituelle du prêtre ou de la prêtresse"],
    correct: 0
  },
  {
    q: "Où la co-officialisation du créole et du français est-il/elle particulièrement présent(e) ou pratiqué(e) ?",
    options: ["National", "Arcahaie", "Jacmel", "Nord d'Haïti"],
    correct: 0
  },
  {
    q: "L'ason, hochet sacré du vodou appartient à quel volet de la tradition haïtienne ?",
    options: ["Fête et tradition", "Artisanat et art", "Religion et spiritualité", "Vie sociale et coutumes"],
    correct: 2
  },
  {
    q: "Où la Citadelle Laferrière, symbole culturel est-il/elle particulièrement présent(e) ou pratiqué(e) ?",
    options: ["National", "Port-au-Prince", "International", "Milot (Nord)"],
    correct: 3
  },
  {
    q: "À quelle région ou quel contexte associe-t-on le statut du français avant 1987 ?",
    options: ["Jacmel", "Port-au-Prince (itinérant)", "International", "National"],
    correct: 3
  },
  {
    q: "Comment décrirait-on la nature du vodou haïtien ?",
    options: ["Danse et expression culturelle", "Artisanat et art", "Religion et spiritualité", "Langue"],
    correct: 2
  },
  {
    q: "Depuis quand l'Académie créole prévue par l'article 213 fait-il/elle partie de la culture haïtienne ?",
    options: ["Époque contemporaine", "Années 1940", "Milieu XXe siècle", "Années 1960"],
    correct: 0
  },
  {
    q: "Quel est le fait vérifié concernant la Citadelle Laferrière, symbole culturel ?",
    options: ["Le créole tire l'essentiel de son vocabulaire du français, avec des apports africains, taïnos et espagnols", "Fondé en 1944, ce centre a révélé de nombreux artistes fondateurs de la peinture naïve haïtienne", "Procession musicale de rue jouée pendant la période du Carême, mêlant percussions et trompettes en bambou", "Forteresse classée à l'UNESCO, symbole de la résistance et de la fierté nationale haïtienne"],
    correct: 3
  },
  {
    q: "Quelle période historique est associée à l'article 5 de la Constitution de 1987 ?",
    options: ["Intemporel", "Révolution haïtienne", "Époque contemporaine", "Années 1970"],
    correct: 2
  },
  {
    q: "La devise nationale d'Haïti est surtout ancré(e) dans quelle région d'Haïti ?",
    options: ["Zones rurales d'Haïti", "International", "National", "Port-au-Prince (itinérant)"],
    correct: 2
  },
  {
    q: "À quelle époque rattache-t-on le Rara ?",
    options: ["Époque contemporaine", "Intemporel", "Années 1970", "Années 1960"],
    correct: 1
  },
  {
    q: "Comment classerait-on le vèvè, symbole rituel du vodou dans la culture haïtienne ?",
    options: ["Religion et spiritualité", "Danse et expression culturelle", "Vie sociale et coutumes", "Langue"],
    correct: 0
  },
  {
    q: "Dans quelle catégorie situerait-on le Yanvalou, danse rituelle vodou ?",
    options: ["Danse et expression culturelle", "Fête et tradition", "Religion et spiritualité", "Vie sociale et coutumes"],
    correct: 0
  },
  {
    q: "Où la tradition des contes de Bouki et Malice est-il/elle particulièrement présent(e) ou pratiqué(e) ?",
    options: ["Zones rurales d'Haïti", "Nord d'Haïti", "National", "Arcahaie"],
    correct: 2
  },
  {
    q: "Le Carnaval de Jacmel est surtout ancré(e) dans quelle région d'Haïti ?",
    options: ["Port-au-Prince", "Arcahaie", "Jacmel", "International"],
    correct: 2
  },
  {
    q: "Quel lieu est le plus étroitement lié au Lakou ?",
    options: ["Milot (Nord)", "Zones rurales d'Haïti", "Nord d'Haïti", "International"],
    correct: 1
  },
  {
    q: "Que faut-il savoir sur la Fête Gede ?",
    options: ["Célébration vodou du début du mois de novembre honorant les esprits des morts", "Carnaval réputé pour ses masques en papier mâché et ses costumes artisanaux élaborés", "Danse cérémonielle vodou caractérisée par des mouvements ondulants du dos et des épaules", "Ce roman de Frankétienne, publié en 1975, est considéré comme le tout premier roman écrit en créole haïtien"],
    correct: 0
  },
  {
    q: "À quel aspect de la culture haïtienne se rattache le créole haïtien ?",
    options: ["Langue", "Fête et tradition", "Danse et expression culturelle", "Religion et spiritualité"],
    correct: 0
  },
  {
    q: "Quelle période historique est associée à la devise nationale d'Haïti ?",
    options: ["Époque contemporaine", "Années 1970", "Révolution haïtienne", "Années 1940"],
    correct: 2
  },
  {
    q: "Que faut-il savoir sur le créole haïtien ?",
    options: ["Cet article proclame que tous les Haïtiens sont unis par une langue commune, le créole", "Ce roman de Frankétienne, publié en 1975, est considéré comme le tout premier roman écrit en créole haïtien", "Danse de couple élégante, considérée comme un ancêtre du konpa moderne", "Créole à base lexicale française parlé par environ onze millions de personnes en Haïti"],
    correct: 3
  },
  {
    q: "Quelle période historique est associée au drapo vodou ?",
    options: ["Révolution haïtienne", "Années 1960", "Milieu XXe siècle", "Intemporel"],
    correct: 3
  },
  {
    q: "La Journée internationale du créole est surtout ancré(e) dans quelle région d'Haïti ?",
    options: ["Haïti", "Port-au-Prince", "Jacmel", "International"],
    correct: 3
  },
  {
    q: "À quel aspect de la culture haïtienne se rattache la peinture naïve haïtienne ?",
    options: ["Fête et tradition", "Langue", "Vie sociale et coutumes", "Artisanat et art"],
    correct: 3
  },
  {
    q: "Comment décrit-on précisément le vodou haïtien ?",
    options: ["Religion la plus pratiquée du pays aux côtés du protestantisme et du vodou, souvent en syncrétisme avec ce dernier", "Forteresse classée à l'UNESCO, symbole de la résistance et de la fierté nationale haïtienne", "Expressions populaires transmises oralement, très présentes dans la sagesse et l'éducation traditionnelles", "Religion syncrétique mêlant croyances ouest-africaines et éléments catholiques, pratiquée par une large partie de la population"],
    correct: 3
  },
  {
    q: "À quelle région ou quel contexte associe-t-on le madras, tissu traditionnel ?",
    options: ["Port-au-Prince (itinérant)", "National", "Haïti", "Milot (Nord)"],
    correct: 1
  },
  {
    q: "Quel est le fait vérifié concernant la manbo, prêtresse du vodou ?",
    options: ["Danse de couple élégante, considérée comme un ancêtre du konpa moderne", "Officiante féminine occupant un rôle spirituel équivalent à celui du houngan", "Tissu à carreaux colorés utilisé dans la confection des tenues traditionnelles féminines", "Tradition orale populaire mettant en scène deux personnages complices et rivaux dans la sagesse paysanne"],
    correct: 1
  },
  {
    q: "Quelle période historique est associée à l'Académie créole prévue par l'article 213 ?",
    options: ["Époque contemporaine", "Années 1970", "Intemporel", "XXe siècle"],
    correct: 0
  },
  {
    q: "Quel est le fait vérifié concernant la devise nationale d'Haïti ?",
    options: ["Grande fête populaire précédant le Mercredi des Cendres, rythmée par les orchestres de konpa", "« L'Union fait la Force » figure sur les armoiries et symbolise l'unité forgée pendant la lutte pour l'indépendance", "Espace commun regroupant plusieurs habitations d'une même famille élargie, cœur de la vie sociale rurale", "Danse cérémonielle vodou caractérisée par des mouvements ondulants du dos et des épaules"],
    correct: 1
  },
  {
    q: "L'article 5 de la Constitution de 1987 se caractérise principalement par :",
    options: ["Cérémonie vodou d'août 1791 considérée comme un moment fondateur de l'insurrection des esclaves", "Cet article proclame que tous les Haïtiens sont unis par une langue commune, le créole", "Célébrée chaque 28 octobre depuis son instauration en 1981 à l'initiative de la Dominique", "Créole à base lexicale française parlé par environ onze millions de personnes en Haïti"],
    correct: 1
  },
  {
    q: "Dézafi, premier roman en créole haïtien remonte à quelle époque de l'histoire d'Haïti ?",
    options: ["Intemporel", "Années 1970", "Années 1960", "Époque contemporaine"],
    correct: 1
  },
  {
    q: "Le Rara se caractérise principalement par :",
    options: ["Cet article proclame que tous les Haïtiens sont unis par une langue commune, le créole", "Officiant masculin qui dirige les cérémonies et rituels du culte vodou", "Procession musicale de rue jouée pendant la période du Carême, mêlant percussions et trompettes en bambou", "Actée par la Constitution de mars 1987, qui fait du créole une langue officielle à égalité avec le français"],
    correct: 2
  },
  {
    q: "La Fête Gede trouve son origine à quelle période ?",
    options: ["Intemporel", "Années 1970", "Révolution haïtienne", "Années 1940"],
    correct: 0
  },
  {
    q: "Quel est le fait vérifié concernant la Fête Gede ?",
    options: ["Célébration vodou du début du mois de novembre honorant les esprits des morts", "Rassemblement communautaire organisé après un décès, mêlant prières, chants et souvenirs du défunt", "Créé en 1803 lors du congrès de l'Arcahaie à partir du drapeau tricolore français dont la bande blanche fut retirée", "Célébrée chaque 18 mai, en commémoration de la création du drapeau haïtien en 1803"],
    correct: 0
  },
  {
    q: "Comment classerait-on le drapo vodou dans la culture haïtienne ?",
    options: ["Danse et expression culturelle", "Vie sociale et coutumes", "Langue", "Artisanat et art"],
    correct: 3
  },
  {
    q: "À quelle époque rattache-t-on la Fête du Drapeau ?",
    options: ["Époque contemporaine", "Milieu XXe siècle", "XXe siècle", "Intemporel"],
    correct: 3
  },
  {
    q: "Où la Veye, veillée funéraire haïtienne est-il/elle particulièrement présent(e) ou pratiqué(e) ?",
    options: ["Arcahaie", "Zones rurales d'Haïti", "Jacmel", "National"],
    correct: 3
  },
  {
    q: "À quelle époque rattache-t-on la Journée internationale du créole ?",
    options: ["Intemporel", "Époque contemporaine", "Années 1940", "XIXe siècle"],
    correct: 1
  },
  {
    q: "Comment décrirait-on la nature du Kanaval national ?",
    options: ["Langue", "Religion et spiritualité", "Artisanat et art", "Fête et tradition"],
    correct: 3
  },
  {
    q: "Quelle affirmation décrit le mieux la mention du créole dans la Constitution de 1964 ?",
    options: ["Forme traditionnelle d'entraide agricole où les paysans travaillent collectivement la terre", "Première mention du créole dans un texte constitutionnel haïtien, avant sa pleine officialisation en 1987", "On distingue traditionnellement le créole du Nord, du Centre et du Sud d'Haïti", "Tradition orale populaire mettant en scène deux personnages complices et rivaux dans la sagesse paysanne"],
    correct: 1
  },
  {
    q: "La cérémonie du Bois-Caïman se caractérise principalement par :",
    options: ["Cérémonie vodou d'août 1791 considérée comme un moment fondateur de l'insurrection des esclaves", "Première mention du créole dans un texte constitutionnel haïtien, avant sa pleine officialisation en 1987", "Art du métal martelé et découpé, né dans cette commune devenue capitale haïtienne de cet artisanat", "Rassemblement communautaire organisé après un décès, mêlant prières, chants et souvenirs du défunt"],
    correct: 0
  },
  {
    q: "La manbo, prêtresse du vodou remonte à quelle époque de l'histoire d'Haïti ?",
    options: ["XIXe siècle", "Années 1960", "Intemporel", "Années 1940"],
    correct: 2
  },
  {
    q: "À quelle époque rattache-t-on le vodou haïtien ?",
    options: ["Intemporel", "Milieu XXe siècle", "Années 1940", "Années 1960"],
    correct: 0
  },
  {
    q: "Quel domaine de la vie culturelle haïtienne illustre le créole haïtien ?",
    options: ["Religion et spiritualité", "Fête et tradition", "Langue", "Artisanat et art"],
    correct: 2
  },
  {
    q: "La Journée internationale du créole trouve son origine à quelle période ?",
    options: ["XXe siècle", "Années 1960", "Époque contemporaine", "Années 1940"],
    correct: 2
  },
  {
    q: "Quelle description correspond fidèlement à l'article 5 de la Constitution de 1987 ?",
    options: ["Cet article proclame que tous les Haïtiens sont unis par une langue commune, le créole", "On distingue traditionnellement le créole du Nord, du Centre et du Sud d'Haïti", "Danse de couple élégante, considérée comme un ancêtre du konpa moderne", "Forteresse classée à l'UNESCO, symbole de la résistance et de la fierté nationale haïtienne"],
    correct: 0
  },
  {
    q: "Dans quel contexte géographique situe-t-on le Carnaval de Jacmel ?",
    options: ["International", "Port-au-Prince", "National", "Jacmel"],
    correct: 3
  },
  {
    q: "Quel domaine de la vie culturelle haïtienne illustre la Journée internationale du créole ?",
    options: ["Artisanat et art", "Fête et tradition", "Danse et expression culturelle", "Langue"],
    correct: 3
  },
  {
    q: "Quel domaine de la vie culturelle haïtienne illustre dézafi, premier roman en créole haïtien ?",
    options: ["Fête et tradition", "Langue", "Vie sociale et coutumes", "Danse et expression culturelle"],
    correct: 1
  },
  {
    q: "Le drapo vodou se caractérise principalement par :",
    options: ["Courant pictural né autour du Centre d'Art, mêlant scènes de vie quotidienne et imaginaire vodou", "Drapeau cérémoniel richement brodé de perles et de sequins représentant un esprit du vodou", "Espace commun regroupant plusieurs habitations d'une même famille élargie, cœur de la vie sociale rurale", "Créé en 1803 lors du congrès de l'Arcahaie à partir du drapeau tricolore français dont la bande blanche fut retirée"],
    correct: 1
  },
  {
    q: "À quelle région ou quel contexte associe-t-on le houngan, prêtre du vodou ?",
    options: ["National", "International", "Zones rurales d'Haïti", "Croix-des-Bouquets"],
    correct: 0
  },
  {
    q: "Le Lakou remonte à quelle époque de l'histoire d'Haïti ?",
    options: ["Années 1940", "Intemporel", "Époque contemporaine", "Milieu XXe siècle"],
    correct: 1
  },
  {
    q: "Comment décrit-on précisément l'influence lexicale du créole haïtien ?",
    options: ["Le créole tire l'essentiel de son vocabulaire du français, avec des apports africains, taïnos et espagnols", "Dessin tracé au sol, souvent à la farine ou à la cendre, représentant un esprit lors des cérémonies", "Tissu à carreaux colorés utilisé dans la confection des tenues traditionnelles féminines", "Religion la plus pratiquée du pays aux côtés du protestantisme et du vodou, souvent en syncrétisme avec ce dernier"],
    correct: 0
  },
  {
    q: "Depuis quand la variation dialectale du créole haïtien fait-il/elle partie de la culture haïtienne ?",
    options: ["Révolution haïtienne", "Époque contemporaine", "Intemporel", "Années 1940"],
    correct: 2
  },
  {
    q: "Où la karabela, tenue traditionnelle est-il/elle particulièrement présent(e) ou pratiqué(e) ?",
    options: ["Haïti", "Arcahaie", "Nord d'Haïti", "National"],
    correct: 3
  },
  {
    q: "Comment classerait-on le Lakou dans la culture haïtienne ?",
    options: ["Vie sociale et coutumes", "Artisanat et art", "Danse et expression culturelle", "Religion et spiritualité"],
    correct: 0
  },
  {
    q: "Le drapeau haïtien est surtout ancré(e) dans quelle région d'Haïti ?",
    options: ["Jacmel", "Haïti", "Croix-des-Bouquets", "Arcahaie"],
    correct: 3
  },
  {
    q: "La mention du créole dans la Constitution de 1964 remonte à quelle époque de l'histoire d'Haïti ?",
    options: ["Révolution haïtienne", "XIXe siècle", "Milieu XXe siècle", "Années 1960"],
    correct: 3
  },
  {
    q: "Dézafi, premier roman en créole haïtien se caractérise principalement par :",
    options: ["Fondé en 1944, ce centre a révélé de nombreux artistes fondateurs de la peinture naïve haïtienne", "Actée par la Constitution de mars 1987, qui fait du créole une langue officielle à égalité avec le français", "On distingue traditionnellement le créole du Nord, du Centre et du Sud d'Haïti", "Ce roman de Frankétienne, publié en 1975, est considéré comme le tout premier roman écrit en créole haïtien"],
    correct: 3
  },
  {
    q: "La mention du créole dans la Constitution de 1964 se caractérise principalement par :",
    options: ["Art du métal martelé et découpé, né dans cette commune devenue capitale haïtienne de cet artisanat", "Première mention du créole dans un texte constitutionnel haïtien, avant sa pleine officialisation en 1987", "Danse de couple élégante, considérée comme un ancêtre du konpa moderne", "Rassemblement communautaire organisé après un décès, mêlant prières, chants et souvenirs du défunt"],
    correct: 1
  },
  {
    q: "Quel domaine de la vie culturelle haïtienne illustre la karabela, tenue traditionnelle ?",
    options: ["Religion et spiritualité", "Danse et expression culturelle", "Vie sociale et coutumes", "Artisanat et art"],
    correct: 3
  },
  {
    q: "Quel domaine de la vie culturelle haïtienne illustre la mention du créole dans la Constitution de 1964 ?",
    options: ["Langue", "Fête et tradition", "Vie sociale et coutumes", "Artisanat et art"],
    correct: 0
  },
  {
    q: "Où le Kanaval national est-il/elle particulièrement présent(e) ou pratiqué(e) ?",
    options: ["Arcahaie", "Croix-des-Bouquets", "Zones rurales d'Haïti", "Port-au-Prince (itinérant)"],
    correct: 3
  },
  {
    q: "Comment décrit-on précisément le Carnaval de Jacmel ?",
    options: ["Première mention du créole dans un texte constitutionnel haïtien, avant sa pleine officialisation en 1987", "Tradition orale populaire mettant en scène deux personnages complices et rivaux dans la sagesse paysanne", "Cérémonie vodou d'août 1791 considérée comme un moment fondateur de l'insurrection des esclaves", "Carnaval réputé pour ses masques en papier mâché et ses costumes artisanaux élaborés"],
    correct: 3
  },
  {
    q: "Depuis quand le catholicisme en Haïti fait-il/elle partie de la culture haïtienne ?",
    options: ["Époque contemporaine", "Années 1940", "Années 1970", "Intemporel"],
    correct: 3
  },
  {
    q: "Quel repère temporel correspond au vèvè, symbole rituel du vodou ?",
    options: ["Révolution haïtienne", "Années 1940", "Intemporel", "XIXe siècle"],
    correct: 2
  },
  {
    q: "Où la cérémonie du Bois-Caïman est-il/elle particulièrement présent(e) ou pratiqué(e) ?",
    options: ["Jacmel", "Zones rurales d'Haïti", "Nord d'Haïti", "National"],
    correct: 2
  },
  {
    q: "Le Yanvalou, danse rituelle vodou trouve son origine à quelle période ?",
    options: ["Révolution haïtienne", "XIXe siècle", "Intemporel", "Années 1940"],
    correct: 2
  },
  {
    q: "Le Carnaval de Jacmel est avant tout une expression de quel domaine ?",
    options: ["Religion et spiritualité", "Fête et tradition", "Langue", "Danse et expression culturelle"],
    correct: 1
  },
  {
    q: "Quelle affirmation décrit le mieux la Citadelle Laferrière, symbole culturel ?",
    options: ["On distingue traditionnellement le créole du Nord, du Centre et du Sud d'Haïti", "Expressions populaires transmises oralement, très présentes dans la sagesse et l'éducation traditionnelles", "Forteresse classée à l'UNESCO, symbole de la résistance et de la fierté nationale haïtienne", "Carnaval réputé pour ses masques en papier mâché et ses costumes artisanaux élaborés"],
    correct: 2
  },
  {
    q: "Le 1er janvier, jour de l'indépendance appartient à quel volet de la tradition haïtienne ?",
    options: ["Fête et tradition", "Danse et expression culturelle", "Artisanat et art", "Langue"],
    correct: 0
  },
  {
    q: "Le tap-tap, transport en commun peint est avant tout une expression de quel domaine ?",
    options: ["Fête et tradition", "Artisanat et art", "Religion et spiritualité", "Danse et expression culturelle"],
    correct: 1
  },
  {
    q: "Qu'est-ce qui définit le Lakou avec exactitude ?",
    options: ["Créé en 1803 lors du congrès de l'Arcahaie à partir du drapeau tricolore français dont la bande blanche fut retirée", "Religion syncrétique mêlant croyances ouest-africaines et éléments catholiques, pratiquée par une large partie de la population", "Fête nationale commémorant la proclamation de l'indépendance d'Haïti en 1804", "Espace commun regroupant plusieurs habitations d'une même famille élargie, cœur de la vie sociale rurale"],
    correct: 3
  },
  {
    q: "Quel lieu est le plus étroitement lié à la tradition des pwovèb ayisyen (proverbes haïtiens) ?",
    options: ["Port-au-Prince", "International", "National", "Nord d'Haïti"],
    correct: 2
  },
  {
    q: "Que faut-il savoir sur la Méringue de salon ?",
    options: ["Danse de couple élégante, considérée comme un ancêtre du konpa moderne", "Cet article proclame que tous les Haïtiens sont unis par une langue commune, le créole", "Expressions populaires transmises oralement, très présentes dans la sagesse et l'éducation traditionnelles", "Première mention du créole dans un texte constitutionnel haïtien, avant sa pleine officialisation en 1987"],
    correct: 0
  },
  {
    q: "Depuis quand l'influence lexicale du créole haïtien fait-il/elle partie de la culture haïtienne ?",
    options: ["Années 1940", "Intemporel", "XIXe siècle", "Époque contemporaine"],
    correct: 1
  },
  {
    q: "Comment décrit-on précisément le houngan, prêtre du vodou ?",
    options: ["Officiant masculin qui dirige les cérémonies et rituels du culte vodou", "On distingue traditionnellement le créole du Nord, du Centre et du Sud d'Haïti", "Drapeau cérémoniel richement brodé de perles et de sequins représentant un esprit du vodou", "Le créole tire l'essentiel de son vocabulaire du français, avec des apports africains, taïnos et espagnols"],
    correct: 0
  },
  {
    q: "Dans quel contexte géographique situe-t-on le vèvè, symbole rituel du vodou ?",
    options: ["National", "International", "Nord d'Haïti", "Croix-des-Bouquets"],
    correct: 0
  },
  {
    q: "L'influence lexicale du créole haïtien est surtout ancré(e) dans quelle région d'Haïti ?",
    options: ["Zones rurales d'Haïti", "International", "National", "Haïti"],
    correct: 2
  },
  {
    q: "Quel lieu est le plus étroitement lié au 1er janvier, jour de l'indépendance ?",
    options: ["National", "Jacmel", "Croix-des-Bouquets", "International"],
    correct: 0
  },
  {
    q: "Comment décrirait-on la nature de la Méringue de salon ?",
    options: ["Religion et spiritualité", "Danse et expression culturelle", "Artisanat et art", "Vie sociale et coutumes"],
    correct: 1
  },
  {
    q: "À quelle époque rattache-t-on le fer découpé de la Croix-des-Bouquets ?",
    options: ["Intemporel", "Années 1960", "XXe siècle", "Années 1970"],
    correct: 2
  },
  {
    q: "Comment décrirait-on la nature de la Journée internationale du créole ?",
    options: ["Fête et tradition", "Artisanat et art", "Danse et expression culturelle", "Langue"],
    correct: 3
  },
  {
    q: "La tradition des pwovèb ayisyen (proverbes haïtiens) se caractérise principalement par :",
    options: ["Le vodou est officiellement reconnu comme religion en Haïti depuis le début des années 2000", "Danse cérémonielle vodou caractérisée par des mouvements ondulants du dos et des épaules", "Art du métal martelé et découpé, né dans cette commune devenue capitale haïtienne de cet artisanat", "Expressions populaires transmises oralement, très présentes dans la sagesse et l'éducation traditionnelles"],
    correct: 3
  },
  {
    q: "Le madras, tissu traditionnel se caractérise principalement par :",
    options: ["Forme traditionnelle d'entraide agricole où les paysans travaillent collectivement la terre", "Carnaval réputé pour ses masques en papier mâché et ses costumes artisanaux élaborés", "Tissu à carreaux colorés utilisé dans la confection des tenues traditionnelles féminines", "Expressions populaires transmises oralement, très présentes dans la sagesse et l'éducation traditionnelles"],
    correct: 2
  },
  {
    q: "Dans quelle catégorie situerait-on le fer découpé de la Croix-des-Bouquets ?",
    options: ["Vie sociale et coutumes", "Artisanat et art", "Danse et expression culturelle", "Langue"],
    correct: 1
  },
  {
    q: "Quel repère temporel correspond au tap-tap, transport en commun peint ?",
    options: ["Années 1970", "Intemporel", "Années 1960", "XXe siècle"],
    correct: 1
  },
  {
    q: "À quelle époque rattache-t-on la tradition des contes de Bouki et Malice ?",
    options: ["Époque contemporaine", "Intemporel", "Milieu XXe siècle", "XIXe siècle"],
    correct: 1
  },
  {
    q: "Le vèvè, symbole rituel du vodou remonte à quelle époque de l'histoire d'Haïti ?",
    options: ["Intemporel", "Époque contemporaine", "XIXe siècle", "Années 1940"],
    correct: 0
  },
  {
    q: "Quelle description correspond fidèlement à la cérémonie du Bois-Caïman ?",
    options: ["Costume traditionnel porté notamment lors des danses folkloriques et fêtes patriotiques", "Seule langue officielle d'Haïti depuis 1918, durant l'occupation américaine, jusqu'à l'arrivée du créole à ce statut", "On distingue traditionnellement le créole du Nord, du Centre et du Sud d'Haïti", "Cérémonie vodou d'août 1791 considérée comme un moment fondateur de l'insurrection des esclaves"],
    correct: 3
  },
  {
    q: "Depuis quand l'article 5 de la Constitution de 1987 fait-il/elle partie de la culture haïtienne ?",
    options: ["Années 1970", "XIXe siècle", "Intemporel", "Époque contemporaine"],
    correct: 3
  },
  {
    q: "Quelle période historique est associée au Rara ?",
    options: ["Années 1960", "Milieu XXe siècle", "Années 1940", "Intemporel"],
    correct: 3
  },
  {
    q: "Que faut-il savoir sur l'Académie créole prévue par l'article 213 ?",
    options: ["Célébration vodou du début du mois de novembre honorant les esprits des morts", "Institution prévue par la Constitution de 1987 pour fixer et développer la langue créole", "Procession musicale de rue jouée pendant la période du Carême, mêlant percussions et trompettes en bambou", "Première mention du créole dans un texte constitutionnel haïtien, avant sa pleine officialisation en 1987"],
    correct: 1
  },
  {
    q: "La variation dialectale du créole haïtien relève principalement de quel domaine culturel ?",
    options: ["Vie sociale et coutumes", "Danse et expression culturelle", "Langue", "Artisanat et art"],
    correct: 2
  },
  {
    q: "Quel domaine de la vie culturelle haïtienne illustre le Rara ?",
    options: ["Langue", "Vie sociale et coutumes", "Danse et expression culturelle", "Fête et tradition"],
    correct: 3
  },
  {
    q: "Dans quel contexte géographique situe-t-on le Yanvalou, danse rituelle vodou ?",
    options: ["Nord d'Haïti", "Jacmel", "National", "Zones rurales d'Haïti"],
    correct: 2
  },
  {
    q: "Le tap-tap, transport en commun peint se caractérise principalement par :",
    options: ["Camionnette ou bus coloré, richement décoré de motifs religieux et populaires, servant de transport collectif", "Religion la plus pratiquée du pays aux côtés du protestantisme et du vodou, souvent en syncrétisme avec ce dernier", "Forme traditionnelle d'entraide agricole où les paysans travaillent collectivement la terre", "Célébrée chaque 18 mai, en commémoration de la création du drapeau haïtien en 1803"],
    correct: 0
  },
  {
    q: "Le créole haïtien est avant tout une expression de quel domaine ?",
    options: ["Artisanat et art", "Langue", "Fête et tradition", "Vie sociale et coutumes"],
    correct: 1
  },
  {
    q: "À quel aspect de la culture haïtienne se rattache la reconnaissance du vodou comme religion ?",
    options: ["Danse et expression culturelle", "Artisanat et art", "Fête et tradition", "Religion et spiritualité"],
    correct: 3
  },
  {
    q: "Quelle période historique est associée à la variation dialectale du créole haïtien ?",
    options: ["Milieu XXe siècle", "Années 1940", "Intemporel", "XXe siècle"],
    correct: 2
  },
  {
    q: "L'Académie créole prévue par l'article 213 remonte à quelle époque de l'histoire d'Haïti ?",
    options: ["Années 1960", "Révolution haïtienne", "XXe siècle", "Époque contemporaine"],
    correct: 3
  },
  {
    q: "Quel repère temporel correspond à la Fête du Drapeau ?",
    options: ["Milieu XXe siècle", "XXe siècle", "Intemporel", "Époque contemporaine"],
    correct: 2
  },
  {
    q: "L'ason, hochet sacré du vodou trouve son origine à quelle période ?",
    options: ["Intemporel", "Années 1970", "XIXe siècle", "Années 1960"],
    correct: 0
  },
  {
    q: "Quel lieu est le plus étroitement lié au Carnaval de Jacmel ?",
    options: ["Jacmel", "Milot (Nord)", "Port-au-Prince", "Haïti"],
    correct: 0
  },
  {
    q: "Quel domaine de la vie culturelle haïtienne illustre le Banda, danse rituelle vodou ?",
    options: ["Religion et spiritualité", "Danse et expression culturelle", "Langue", "Vie sociale et coutumes"],
    correct: 1
  },
  {
    q: "Dézafi, premier roman en créole haïtien est surtout ancré(e) dans quelle région d'Haïti ?",
    options: ["Zones rurales d'Haïti", "Jacmel", "Haïti", "International"],
    correct: 2
  },
  {
    q: "Depuis quand l'ason, hochet sacré du vodou fait-il/elle partie de la culture haïtienne ?",
    options: ["Intemporel", "Années 1960", "Révolution haïtienne", "Années 1970"],
    correct: 0
  },
  {
    q: "À quel aspect de la culture haïtienne se rattache le Centre d'Art de Port-au-Prince ?",
    options: ["Vie sociale et coutumes", "Langue", "Fête et tradition", "Artisanat et art"],
    correct: 3
  },
  {
    q: "Quelle description correspond fidèlement à la Méringue de salon ?",
    options: ["Seule langue officielle d'Haïti depuis 1918, durant l'occupation américaine, jusqu'à l'arrivée du créole à ce statut", "Danse de couple élégante, considérée comme un ancêtre du konpa moderne", "Drapeau cérémoniel richement brodé de perles et de sequins représentant un esprit du vodou", "Forteresse classée à l'UNESCO, symbole de la résistance et de la fierté nationale haïtienne"],
    correct: 1
  },
  {
    q: "À quelle région ou quel contexte associe-t-on la Méringue de salon ?",
    options: ["Zones rurales d'Haïti", "Croix-des-Bouquets", "Port-au-Prince", "Arcahaie"],
    correct: 2
  },
  {
    q: "Quel domaine de la vie culturelle haïtienne illustre l'ason, hochet sacré du vodou ?",
    options: ["Religion et spiritualité", "Artisanat et art", "Langue", "Danse et expression culturelle"],
    correct: 0
  },
  {
    q: "Quel est le fait vérifié concernant l'ason, hochet sacré du vodou ?",
    options: ["Grande fête populaire précédant le Mercredi des Cendres, rythmée par les orchestres de konpa", "Le créole tire l'essentiel de son vocabulaire du français, avec des apports africains, taïnos et espagnols", "Actée par la Constitution de mars 1987, qui fait du créole une langue officielle à égalité avec le français", "Instrument rituel en forme de calebasse ornée de perles, symbole d'autorité spirituelle du prêtre ou de la prêtresse"],
    correct: 3
  },
  {
    q: "Quelle période historique est associée au tap-tap, transport en commun peint ?",
    options: ["Intemporel", "Années 1940", "Années 1970", "Années 1960"],
    correct: 0
  },
  {
    q: "Quel lieu est le plus étroitement lié au statut du français avant 1987 ?",
    options: ["Port-au-Prince", "Arcahaie", "National", "Port-au-Prince (itinérant)"],
    correct: 2
  },
  {
    q: "Comment décrirait-on la nature de la Fête Gede ?",
    options: ["Religion et spiritualité", "Langue", "Fête et tradition", "Vie sociale et coutumes"],
    correct: 0
  },
  {
    q: "Le vodou haïtien remonte à quelle époque de l'histoire d'Haïti ?",
    options: ["Années 1970", "Intemporel", "Années 1960", "Époque contemporaine"],
    correct: 1
  },
  {
    q: "Comment décrirait-on la nature du vèvè, symbole rituel du vodou ?",
    options: ["Langue", "Religion et spiritualité", "Artisanat et art", "Danse et expression culturelle"],
    correct: 1
  },
  {
    q: "Que faut-il savoir sur la karabela, tenue traditionnelle ?",
    options: ["Rassemblement communautaire organisé après un décès, mêlant prières, chants et souvenirs du défunt", "Costume traditionnel porté notamment lors des danses folkloriques et fêtes patriotiques", "Drapeau cérémoniel richement brodé de perles et de sequins représentant un esprit du vodou", "Officiant masculin qui dirige les cérémonies et rituels du culte vodou"],
    correct: 1
  },
  {
    q: "Comment décrirait-on la nature du Konbit ?",
    options: ["Danse et expression culturelle", "Vie sociale et coutumes", "Artisanat et art", "Fête et tradition"],
    correct: 1
  },
  {
    q: "Le vodou haïtien trouve son origine à quelle période ?",
    options: ["Années 1970", "Intemporel", "Années 1940", "Époque contemporaine"],
    correct: 1
  },
  {
    q: "À quelle époque rattache-t-on la Fête Gede ?",
    options: ["XIXe siècle", "Années 1970", "Années 1940", "Intemporel"],
    correct: 3
  },
  {
    q: "La co-officialisation du créole et du français se caractérise principalement par :",
    options: ["Religion syncrétique mêlant croyances ouest-africaines et éléments catholiques, pratiquée par une large partie de la population", "Actée par la Constitution de mars 1987, qui fait du créole une langue officielle à égalité avec le français", "Célébration vodou du début du mois de novembre honorant les esprits des morts", "Courant pictural né autour du Centre d'Art, mêlant scènes de vie quotidienne et imaginaire vodou"],
    correct: 1
  },
  {
    q: "Dans quel contexte géographique situe-t-on le drapo vodou ?",
    options: ["Port-au-Prince", "Jacmel", "National", "Nord d'Haïti"],
    correct: 2
  },
  {
    q: "Le Carnaval de Jacmel se caractérise principalement par :",
    options: ["Le créole tire l'essentiel de son vocabulaire du français, avec des apports africains, taïnos et espagnols", "Seule langue officielle d'Haïti depuis 1918, durant l'occupation américaine, jusqu'à l'arrivée du créole à ce statut", "Forteresse classée à l'UNESCO, symbole de la résistance et de la fierté nationale haïtienne", "Carnaval réputé pour ses masques en papier mâché et ses costumes artisanaux élaborés"],
    correct: 3
  },
  {
    q: "Dans quel contexte géographique situe-t-on la Fête du Drapeau ?",
    options: ["National", "Port-au-Prince (itinérant)", "Croix-des-Bouquets", "Milot (Nord)"],
    correct: 0
  },
  {
    q: "Où le vodou haïtien est-il/elle particulièrement présent(e) ou pratiqué(e) ?",
    options: ["Croix-des-Bouquets", "Haïti", "National", "Nord d'Haïti"],
    correct: 2
  },
  {
    q: "À quel aspect de la culture haïtienne se rattache le madras, tissu traditionnel ?",
    options: ["Langue", "Artisanat et art", "Religion et spiritualité", "Danse et expression culturelle"],
    correct: 1
  },
  {
    q: "Comment décrirait-on la nature de dézafi, premier roman en créole haïtien ?",
    options: ["Danse et expression culturelle", "Artisanat et art", "Religion et spiritualité", "Langue"],
    correct: 3
  },
  {
    q: "Le Lakou est avant tout une expression de quel domaine ?",
    options: ["Vie sociale et coutumes", "Artisanat et art", "Fête et tradition", "Danse et expression culturelle"],
    correct: 0
  },
  {
    q: "Quel repère temporel correspond à la Fête Gede ?",
    options: ["XXe siècle", "Intemporel", "XIXe siècle", "Époque contemporaine"],
    correct: 1
  },
  {
    q: "Quel domaine de la vie culturelle haïtienne illustre la cérémonie du Bois-Caïman ?",
    options: ["Danse et expression culturelle", "Vie sociale et coutumes", "Religion et spiritualité", "Fête et tradition"],
    correct: 2
  },
  {
    q: "Depuis quand le Banda, danse rituelle vodou fait-il/elle partie de la culture haïtienne ?",
    options: ["Années 1940", "Époque contemporaine", "Années 1970", "Intemporel"],
    correct: 3
  },
  {
    q: "Comment classerait-on dézafi, premier roman en créole haïtien dans la culture haïtienne ?",
    options: ["Vie sociale et coutumes", "Langue", "Artisanat et art", "Fête et tradition"],
    correct: 1
  },
  {
    q: "Comment décrirait-on la nature de la reconnaissance du vodou comme religion ?",
    options: ["Fête et tradition", "Religion et spiritualité", "Danse et expression culturelle", "Vie sociale et coutumes"],
    correct: 1
  },
  {
    q: "À quel aspect de la culture haïtienne se rattache le statut du français avant 1987 ?",
    options: ["Artisanat et art", "Danse et expression culturelle", "Langue", "Vie sociale et coutumes"],
    correct: 2
  },
  {
    q: "Où la Journée internationale du créole est-il/elle particulièrement présent(e) ou pratiqué(e) ?",
    options: ["Zones rurales d'Haïti", "National", "Milot (Nord)", "International"],
    correct: 3
  },
  {
    q: "À quel aspect de la culture haïtienne se rattache le drapeau haïtien ?",
    options: ["Religion et spiritualité", "Artisanat et art", "Danse et expression culturelle", "Vie sociale et coutumes"],
    correct: 3
  },
  {
    q: "Quel est le fait vérifié concernant le Konbit ?",
    options: ["Danse associée aux esprits Gede, marquée par des mouvements de bassin très expressifs", "Forme traditionnelle d'entraide agricole où les paysans travaillent collectivement la terre", "Actée par la Constitution de mars 1987, qui fait du créole une langue officielle à égalité avec le français", "Cérémonie vodou d'août 1791 considérée comme un moment fondateur de l'insurrection des esclaves"],
    correct: 1
  },
  {
    q: "Quel lieu est le plus étroitement lié au créole haïtien ?",
    options: ["Port-au-Prince (itinérant)", "Croix-des-Bouquets", "Haïti", "National"],
    correct: 3
  },
  {
    q: "Comment décrit-on précisément le Banda, danse rituelle vodou ?",
    options: ["Dessin tracé au sol, souvent à la farine ou à la cendre, représentant un esprit lors des cérémonies", "Carnaval réputé pour ses masques en papier mâché et ses costumes artisanaux élaborés", "Danse associée aux esprits Gede, marquée par des mouvements de bassin très expressifs", "Actée par la Constitution de mars 1987, qui fait du créole une langue officielle à égalité avec le français"],
    correct: 2
  },
  {
    q: "Quelle description correspond fidèlement à la reconnaissance du vodou comme religion ?",
    options: ["Le vodou est officiellement reconnu comme religion en Haïti depuis le début des années 2000", "Danse cérémonielle vodou caractérisée par des mouvements ondulants du dos et des épaules", "Art du métal martelé et découpé, né dans cette commune devenue capitale haïtienne de cet artisanat", "Institution prévue par la Constitution de 1987 pour fixer et développer la langue créole"],
    correct: 0
  },
  {
    q: "Quelle description correspond fidèlement au statut du français avant 1987 ?",
    options: ["On distingue traditionnellement le créole du Nord, du Centre et du Sud d'Haïti", "Seule langue officielle d'Haïti depuis 1918, durant l'occupation américaine, jusqu'à l'arrivée du créole à ce statut", "Espace commun regroupant plusieurs habitations d'une même famille élargie, cœur de la vie sociale rurale", "Danse de couple élégante, considérée comme un ancêtre du konpa moderne"],
    correct: 1
  },
  {
    q: "Le Carnaval de Jacmel trouve son origine à quelle période ?",
    options: ["Années 1970", "Intemporel", "XIXe siècle", "Époque contemporaine"],
    correct: 1
  },
  {
    q: "Quel lieu est le plus étroitement lié à la peinture naïve haïtienne ?",
    options: ["Zones rurales d'Haïti", "Port-au-Prince", "National", "Port-au-Prince (itinérant)"],
    correct: 1
  },
  {
    q: "La peinture naïve haïtienne est avant tout une expression de quel domaine ?",
    options: ["Langue", "Religion et spiritualité", "Danse et expression culturelle", "Artisanat et art"],
    correct: 3
  },
  {
    q: "Le 1er janvier, jour de l'indépendance relève principalement de quel domaine culturel ?",
    options: ["Artisanat et art", "Vie sociale et coutumes", "Langue", "Fête et tradition"],
    correct: 3
  },
  {
    q: "À quelle époque rattache-t-on le Konbit ?",
    options: ["Révolution haïtienne", "Époque contemporaine", "Années 1960", "Intemporel"],
    correct: 3
  },
  {
    q: "Quelle période historique est associée à la Journée internationale du créole ?",
    options: ["Années 1970", "XXe siècle", "XIXe siècle", "Époque contemporaine"],
    correct: 3
  },
  {
    q: "Que faut-il savoir sur la Fête du Drapeau ?",
    options: ["Religion syncrétique mêlant croyances ouest-africaines et éléments catholiques, pratiquée par une large partie de la population", "Cérémonie vodou d'août 1791 considérée comme un moment fondateur de l'insurrection des esclaves", "« L'Union fait la Force » figure sur les armoiries et symbolise l'unité forgée pendant la lutte pour l'indépendance", "Célébrée chaque 18 mai, en commémoration de la création du drapeau haïtien en 1803"],
    correct: 3
  },
  {
    q: "Où le Lakou est-il/elle particulièrement présent(e) ou pratiqué(e) ?",
    options: ["Jacmel", "Zones rurales d'Haïti", "International", "Arcahaie"],
    correct: 1
  },
  {
    q: "Le Centre d'Art de Port-au-Prince est avant tout une expression de quel domaine ?",
    options: ["Religion et spiritualité", "Danse et expression culturelle", "Vie sociale et coutumes", "Artisanat et art"],
    correct: 3
  },
  {
    q: "Quel est le fait vérifié concernant le houngan, prêtre du vodou ?",
    options: ["Le vodou est officiellement reconnu comme religion en Haïti depuis le début des années 2000", "Officiant masculin qui dirige les cérémonies et rituels du culte vodou", "Tissu à carreaux colorés utilisé dans la confection des tenues traditionnelles féminines", "Première mention du créole dans un texte constitutionnel haïtien, avant sa pleine officialisation en 1987"],
    correct: 1
  },
  {
    q: "Dans quel contexte géographique situe-t-on la tradition des contes de Bouki et Malice ?",
    options: ["Jacmel", "Nord d'Haïti", "National", "Port-au-Prince (itinérant)"],
    correct: 2
  },
  {
    q: "Quelle affirmation décrit le mieux le 1er janvier, jour de l'indépendance ?",
    options: ["Fête nationale commémorant la proclamation de l'indépendance d'Haïti en 1804", "Camionnette ou bus coloré, richement décoré de motifs religieux et populaires, servant de transport collectif", "Cérémonie vodou d'août 1791 considérée comme un moment fondateur de l'insurrection des esclaves", "Célébrée chaque 18 mai, en commémoration de la création du drapeau haïtien en 1803"],
    correct: 0
  },
  {
    q: "Comment classerait-on la reconnaissance du vodou comme religion dans la culture haïtienne ?",
    options: ["Langue", "Fête et tradition", "Religion et spiritualité", "Artisanat et art"],
    correct: 2
  },
  {
    q: "Qu'est-ce qui définit la tradition des contes de Bouki et Malice avec exactitude ?",
    options: ["Tradition orale populaire mettant en scène deux personnages complices et rivaux dans la sagesse paysanne", "Religion syncrétique mêlant croyances ouest-africaines et éléments catholiques, pratiquée par une large partie de la population", "Courant pictural né autour du Centre d'Art, mêlant scènes de vie quotidienne et imaginaire vodou", "Célébration vodou du début du mois de novembre honorant les esprits des morts"],
    correct: 0
  },
  {
    q: "Quelle description correspond fidèlement à la Journée internationale du créole ?",
    options: ["Rassemblement communautaire organisé après un décès, mêlant prières, chants et souvenirs du défunt", "Célébrée chaque 28 octobre depuis son instauration en 1981 à l'initiative de la Dominique", "Cérémonie vodou d'août 1791 considérée comme un moment fondateur de l'insurrection des esclaves", "Courant pictural né autour du Centre d'Art, mêlant scènes de vie quotidienne et imaginaire vodou"],
    correct: 1
  },
  {
    q: "La Veye, veillée funéraire haïtienne remonte à quelle époque de l'histoire d'Haïti ?",
    options: ["Années 1940", "Années 1970", "XXe siècle", "Intemporel"],
    correct: 3
  },
  {
    q: "Quelle affirmation décrit le mieux l'influence lexicale du créole haïtien ?",
    options: ["Procession musicale de rue jouée pendant la période du Carême, mêlant percussions et trompettes en bambou", "Créole à base lexicale française parlé par environ onze millions de personnes en Haïti", "Le créole tire l'essentiel de son vocabulaire du français, avec des apports africains, taïnos et espagnols", "Créé en 1803 lors du congrès de l'Arcahaie à partir du drapeau tricolore français dont la bande blanche fut retirée"],
    correct: 2
  },
  {
    q: "Dans quelle catégorie situerait-on le drapo vodou ?",
    options: ["Danse et expression culturelle", "Vie sociale et coutumes", "Religion et spiritualité", "Artisanat et art"],
    correct: 3
  },
  {
    q: "Le Banda, danse rituelle vodou appartient à quel volet de la tradition haïtienne ?",
    options: ["Artisanat et art", "Vie sociale et coutumes", "Religion et spiritualité", "Danse et expression culturelle"],
    correct: 3
  },
  {
    q: "Où le catholicisme en Haïti est-il/elle particulièrement présent(e) ou pratiqué(e) ?",
    options: ["International", "Nord d'Haïti", "National", "Port-au-Prince"],
    correct: 2
  },
  {
    q: "Où le Carnaval de Jacmel est-il/elle particulièrement présent(e) ou pratiqué(e) ?",
    options: ["National", "Port-au-Prince", "Jacmel", "Zones rurales d'Haïti"],
    correct: 2
  },
  {
    q: "La variation dialectale du créole haïtien est surtout ancré(e) dans quelle région d'Haïti ?",
    options: ["Port-au-Prince (itinérant)", "National", "Zones rurales d'Haïti", "Milot (Nord)"],
    correct: 1
  },
  {
    q: "Où la Fête du Drapeau est-il/elle particulièrement présent(e) ou pratiqué(e) ?",
    options: ["International", "National", "Arcahaie", "Port-au-Prince (itinérant)"],
    correct: 1
  },
  {
    q: "Quelle description correspond fidèlement au catholicisme en Haïti ?",
    options: ["Carnaval réputé pour ses masques en papier mâché et ses costumes artisanaux élaborés", "Célébrée chaque 28 octobre depuis son instauration en 1981 à l'initiative de la Dominique", "Religion la plus pratiquée du pays aux côtés du protestantisme et du vodou, souvent en syncrétisme avec ce dernier", "Ce roman de Frankétienne, publié en 1975, est considéré comme le tout premier roman écrit en créole haïtien"],
    correct: 2
  },
  {
    q: "À quel aspect de la culture haïtienne se rattache l'article 5 de la Constitution de 1987 ?",
    options: ["Langue", "Danse et expression culturelle", "Religion et spiritualité", "Artisanat et art"],
    correct: 0
  },
  {
    q: "La peinture naïve haïtienne trouve son origine à quelle période ?",
    options: ["XXe siècle", "Milieu XXe siècle", "Années 1940", "Révolution haïtienne"],
    correct: 1
  },
  {
    q: "La mention du créole dans la Constitution de 1964 relève principalement de quel domaine culturel ?",
    options: ["Langue", "Vie sociale et coutumes", "Religion et spiritualité", "Artisanat et art"],
    correct: 0
  },
  {
    q: "Comment décrit-on précisément la Méringue de salon ?",
    options: ["Officiant masculin qui dirige les cérémonies et rituels du culte vodou", "Danse de couple élégante, considérée comme un ancêtre du konpa moderne", "Célébrée chaque 18 mai, en commémoration de la création du drapeau haïtien en 1803", "Danse cérémonielle vodou caractérisée par des mouvements ondulants du dos et des épaules"],
    correct: 1
  },
  {
    q: "La reconnaissance du vodou comme religion appartient à quel volet de la tradition haïtienne ?",
    options: ["Vie sociale et coutumes", "Artisanat et art", "Religion et spiritualité", "Danse et expression culturelle"],
    correct: 2
  },
  {
    q: "Le houngan, prêtre du vodou remonte à quelle époque de l'histoire d'Haïti ?",
    options: ["Intemporel", "XXe siècle", "XIXe siècle", "Années 1970"],
    correct: 0
  },
  {
    q: "Le Centre d'Art de Port-au-Prince remonte à quelle époque de l'histoire d'Haïti ?",
    options: ["XIXe siècle", "Années 1940", "Années 1970", "Révolution haïtienne"],
    correct: 1
  },
  {
    q: "L'influence lexicale du créole haïtien se caractérise principalement par :",
    options: ["Costume traditionnel porté notamment lors des danses folkloriques et fêtes patriotiques", "Dessin tracé au sol, souvent à la farine ou à la cendre, représentant un esprit lors des cérémonies", "Le créole tire l'essentiel de son vocabulaire du français, avec des apports africains, taïnos et espagnols", "Grande fête populaire précédant le Mercredi des Cendres, rythmée par les orchestres de konpa"],
    correct: 2
  },
  {
    q: "La cérémonie du Bois-Caïman appartient à quel volet de la tradition haïtienne ?",
    options: ["Danse et expression culturelle", "Langue", "Religion et spiritualité", "Artisanat et art"],
    correct: 2
  },
  {
    q: "Que faut-il savoir sur le Kanaval national ?",
    options: ["Officiant masculin qui dirige les cérémonies et rituels du culte vodou", "Grande fête populaire précédant le Mercredi des Cendres, rythmée par les orchestres de konpa", "Instrument rituel en forme de calebasse ornée de perles, symbole d'autorité spirituelle du prêtre ou de la prêtresse", "Forme traditionnelle d'entraide agricole où les paysans travaillent collectivement la terre"],
    correct: 1
  },
  {
    q: "À quelle époque rattache-t-on le Carnaval de Jacmel ?",
    options: ["XIXe siècle", "Intemporel", "XXe siècle", "Époque contemporaine"],
    correct: 1
  },
  {
    q: "Comment classerait-on le Centre d'Art de Port-au-Prince dans la culture haïtienne ?",
    options: ["Vie sociale et coutumes", "Artisanat et art", "Religion et spiritualité", "Langue"],
    correct: 1
  },
  {
    q: "Où l'article 5 de la Constitution de 1987 est-il/elle particulièrement présent(e) ou pratiqué(e) ?",
    options: ["Haïti", "Port-au-Prince", "International", "National"],
    correct: 3
  },
  {
    q: "Quel est le fait vérifié concernant la peinture naïve haïtienne ?",
    options: ["Courant pictural né autour du Centre d'Art, mêlant scènes de vie quotidienne et imaginaire vodou", "Officiant masculin qui dirige les cérémonies et rituels du culte vodou", "« L'Union fait la Force » figure sur les armoiries et symbolise l'unité forgée pendant la lutte pour l'indépendance", "Cérémonie vodou d'août 1791 considérée comme un moment fondateur de l'insurrection des esclaves"],
    correct: 0
  },
  {
    q: "Quel lieu est le plus étroitement lié au Yanvalou, danse rituelle vodou ?",
    options: ["Nord d'Haïti", "Port-au-Prince", "National", "Haïti"],
    correct: 2
  },
  {
    q: "Quel repère temporel correspond à l'ason, hochet sacré du vodou ?",
    options: ["Années 1940", "Années 1970", "Intemporel", "Milieu XXe siècle"],
    correct: 2
  },
  {
    q: "Quelle période historique est associée à la manbo, prêtresse du vodou ?",
    options: ["Années 1970", "Intemporel", "XIXe siècle", "Années 1940"],
    correct: 1
  },
  {
    q: "Le Konbit remonte à quelle époque de l'histoire d'Haïti ?",
    options: ["Époque contemporaine", "Révolution haïtienne", "Intemporel", "Années 1960"],
    correct: 2
  },
  {
    q: "À quelle région ou quel contexte associe-t-on le fer découpé de la Croix-des-Bouquets ?",
    options: ["Haïti", "Arcahaie", "Port-au-Prince", "Croix-des-Bouquets"],
    correct: 3
  },
  {
    q: "Quelle description correspond fidèlement au fer découpé de la Croix-des-Bouquets ?",
    options: ["Tissu à carreaux colorés utilisé dans la confection des tenues traditionnelles féminines", "Célébration vodou du début du mois de novembre honorant les esprits des morts", "Art du métal martelé et découpé, né dans cette commune devenue capitale haïtienne de cet artisanat", "Camionnette ou bus coloré, richement décoré de motifs religieux et populaires, servant de transport collectif"],
    correct: 2
  },
  {
    q: "Comment décrirait-on la nature de la tradition des pwovèb ayisyen (proverbes haïtiens) ?",
    options: ["Artisanat et art", "Vie sociale et coutumes", "Religion et spiritualité", "Danse et expression culturelle"],
    correct: 1
  },
  {
    q: "Quel lieu est le plus étroitement lié à la co-officialisation du créole et du français ?",
    options: ["Zones rurales d'Haïti", "Port-au-Prince (itinérant)", "National", "Arcahaie"],
    correct: 2
  },
  {
    q: "Où la tradition des pwovèb ayisyen (proverbes haïtiens) est-il/elle particulièrement présent(e) ou pratiqué(e) ?",
    options: ["National", "Port-au-Prince", "Milot (Nord)", "International"],
    correct: 0
  },
  {
    q: "À quelle région ou quel contexte associe-t-on l'ason, hochet sacré du vodou ?",
    options: ["Milot (Nord)", "Port-au-Prince", "Nord d'Haïti", "National"],
    correct: 3
  },
  {
    q: "Dans quelle catégorie situerait-on le Konbit ?",
    options: ["Fête et tradition", "Religion et spiritualité", "Artisanat et art", "Vie sociale et coutumes"],
    correct: 3
  },
  {
    q: "Quelle description correspond fidèlement au vodou haïtien ?",
    options: ["Officiant masculin qui dirige les cérémonies et rituels du culte vodou", "Religion syncrétique mêlant croyances ouest-africaines et éléments catholiques, pratiquée par une large partie de la population", "Ce roman de Frankétienne, publié en 1975, est considéré comme le tout premier roman écrit en créole haïtien", "« L'Union fait la Force » figure sur les armoiries et symbolise l'unité forgée pendant la lutte pour l'indépendance"],
    correct: 1
  },
  {
    q: "Dans quel contexte géographique situe-t-on la reconnaissance du vodou comme religion ?",
    options: ["Jacmel", "Nord d'Haïti", "Haïti", "Port-au-Prince (itinérant)"],
    correct: 2
  },
  {
    q: "Quel lieu est le plus étroitement lié à la tradition des contes de Bouki et Malice ?",
    options: ["Arcahaie", "Croix-des-Bouquets", "National", "Port-au-Prince (itinérant)"],
    correct: 2
  },
  {
    q: "Depuis quand la Fête du Drapeau fait-il/elle partie de la culture haïtienne ?",
    options: ["Années 1960", "Révolution haïtienne", "Intemporel", "XIXe siècle"],
    correct: 2
  },
  {
    q: "Que faut-il savoir sur le tap-tap, transport en commun peint ?",
    options: ["Seule langue officielle d'Haïti depuis 1918, durant l'occupation américaine, jusqu'à l'arrivée du créole à ce statut", "Créole à base lexicale française parlé par environ onze millions de personnes en Haïti", "Dessin tracé au sol, souvent à la farine ou à la cendre, représentant un esprit lors des cérémonies", "Camionnette ou bus coloré, richement décoré de motifs religieux et populaires, servant de transport collectif"],
    correct: 3
  },
  {
    q: "Où la peinture naïve haïtienne est-il/elle particulièrement présent(e) ou pratiqué(e) ?",
    options: ["Port-au-Prince", "Port-au-Prince (itinérant)", "International", "Haïti"],
    correct: 0
  },
  {
    q: "Où la Fête Gede est-il/elle particulièrement présent(e) ou pratiqué(e) ?",
    options: ["National", "Nord d'Haïti", "Zones rurales d'Haïti", "Milot (Nord)"],
    correct: 0
  },
  {
    q: "Quel lieu est le plus étroitement lié à dézafi, premier roman en créole haïtien ?",
    options: ["Haïti", "Nord d'Haïti", "Milot (Nord)", "National"],
    correct: 0
  },
  {
    q: "Le tap-tap, transport en commun peint appartient à quel volet de la tradition haïtienne ?",
    options: ["Danse et expression culturelle", "Fête et tradition", "Religion et spiritualité", "Artisanat et art"],
    correct: 3
  },
  {
    q: "L'ason, hochet sacré du vodou relève principalement de quel domaine culturel ?",
    options: ["Vie sociale et coutumes", "Religion et spiritualité", "Langue", "Fête et tradition"],
    correct: 1
  },
  {
    q: "Que faut-il savoir sur le drapo vodou ?",
    options: ["Drapeau cérémoniel richement brodé de perles et de sequins représentant un esprit du vodou", "Seule langue officielle d'Haïti depuis 1918, durant l'occupation américaine, jusqu'à l'arrivée du créole à ce statut", "Célébrée chaque 28 octobre depuis son instauration en 1981 à l'initiative de la Dominique", "On distingue traditionnellement le créole du Nord, du Centre et du Sud d'Haïti"],
    correct: 0
  },
  {
    q: "Depuis quand la Veye, veillée funéraire haïtienne fait-il/elle partie de la culture haïtienne ?",
    options: ["XXe siècle", "Intemporel", "Époque contemporaine", "Révolution haïtienne"],
    correct: 1
  },
  {
    q: "Quelle description correspond fidèlement au drapo vodou ?",
    options: ["Instrument rituel en forme de calebasse ornée de perles, symbole d'autorité spirituelle du prêtre ou de la prêtresse", "Créé en 1803 lors du congrès de l'Arcahaie à partir du drapeau tricolore français dont la bande blanche fut retirée", "Drapeau cérémoniel richement brodé de perles et de sequins représentant un esprit du vodou", "Créole à base lexicale française parlé par environ onze millions de personnes en Haïti"],
    correct: 2
  },
  {
    q: "Quel est le fait vérifié concernant le Carnaval de Jacmel ?",
    options: ["Seule langue officielle d'Haïti depuis 1918, durant l'occupation américaine, jusqu'à l'arrivée du créole à ce statut", "Carnaval réputé pour ses masques en papier mâché et ses costumes artisanaux élaborés", "Fondé en 1944, ce centre a révélé de nombreux artistes fondateurs de la peinture naïve haïtienne", "Créé en 1803 lors du congrès de l'Arcahaie à partir du drapeau tricolore français dont la bande blanche fut retirée"],
    correct: 1
  },
  {
    q: "Dans quelle catégorie situerait-on la manbo, prêtresse du vodou ?",
    options: ["Langue", "Danse et expression culturelle", "Religion et spiritualité", "Fête et tradition"],
    correct: 2
  },
  {
    q: "La Fête du Drapeau se caractérise principalement par :",
    options: ["Cet article proclame que tous les Haïtiens sont unis par une langue commune, le créole", "Espace commun regroupant plusieurs habitations d'une même famille élargie, cœur de la vie sociale rurale", "Célébrée chaque 18 mai, en commémoration de la création du drapeau haïtien en 1803", "Instrument rituel en forme de calebasse ornée de perles, symbole d'autorité spirituelle du prêtre ou de la prêtresse"],
    correct: 2
  },
  {
    q: "À quelle région ou quel contexte associe-t-on l'article 5 de la Constitution de 1987 ?",
    options: ["Haïti", "Port-au-Prince", "National", "Arcahaie"],
    correct: 2
  },
  {
    q: "À quel aspect de la culture haïtienne se rattache le vèvè, symbole rituel du vodou ?",
    options: ["Vie sociale et coutumes", "Fête et tradition", "Religion et spiritualité", "Langue"],
    correct: 2
  },
  {
    q: "Quel domaine de la vie culturelle haïtienne illustre le Yanvalou, danse rituelle vodou ?",
    options: ["Fête et tradition", "Langue", "Vie sociale et coutumes", "Danse et expression culturelle"],
    correct: 3
  },
  {
    q: "Quel repère temporel correspond à l'Académie créole prévue par l'article 213 ?",
    options: ["Époque contemporaine", "XIXe siècle", "Années 1970", "Milieu XXe siècle"],
    correct: 0
  },
  {
    q: "La co-officialisation du créole et du français remonte à quelle époque de l'histoire d'Haïti ?",
    options: ["Années 1940", "Années 1970", "Révolution haïtienne", "Époque contemporaine"],
    correct: 3
  },
  {
    q: "Le Rara remonte à quelle époque de l'histoire d'Haïti ?",
    options: ["Intemporel", "Milieu XXe siècle", "Années 1970", "XXe siècle"],
    correct: 0
  },
  {
    q: "Comment classerait-on le Rara dans la culture haïtienne ?",
    options: ["Fête et tradition", "Danse et expression culturelle", "Religion et spiritualité", "Langue"],
    correct: 0
  },
  {
    q: "Quelle description correspond fidèlement au houngan, prêtre du vodou ?",
    options: ["Espace commun regroupant plusieurs habitations d'une même famille élargie, cœur de la vie sociale rurale", "Officiant masculin qui dirige les cérémonies et rituels du culte vodou", "Expressions populaires transmises oralement, très présentes dans la sagesse et l'éducation traditionnelles", "Drapeau cérémoniel richement brodé de perles et de sequins représentant un esprit du vodou"],
    correct: 1
  },
  {
    q: "La Fête du Drapeau remonte à quelle époque de l'histoire d'Haïti ?",
    options: ["Intemporel", "XIXe siècle", "Révolution haïtienne", "Années 1960"],
    correct: 0
  },
  {
    q: "Quelle période historique est associée à la karabela, tenue traditionnelle ?",
    options: ["XXe siècle", "Époque contemporaine", "Intemporel", "Révolution haïtienne"],
    correct: 2
  },
  {
    q: "Comment décrirait-on la nature de la karabela, tenue traditionnelle ?",
    options: ["Artisanat et art", "Fête et tradition", "Langue", "Religion et spiritualité"],
    correct: 0
  },
  {
    q: "À quelle époque rattache-t-on le Yanvalou, danse rituelle vodou ?",
    options: ["Révolution haïtienne", "Années 1960", "XXe siècle", "Intemporel"],
    correct: 3
  },
  {
    q: "Quel lieu est le plus étroitement lié à la cérémonie du Bois-Caïman ?",
    options: ["Port-au-Prince (itinérant)", "Nord d'Haïti", "Zones rurales d'Haïti", "Haïti"],
    correct: 1
  },
  {
    q: "Quel repère temporel correspond à la tradition des pwovèb ayisyen (proverbes haïtiens) ?",
    options: ["Révolution haïtienne", "Années 1960", "Années 1970", "Intemporel"],
    correct: 3
  },
  {
    q: "À quelle époque rattache-t-on l'influence lexicale du créole haïtien ?",
    options: ["XXe siècle", "Époque contemporaine", "XIXe siècle", "Intemporel"],
    correct: 3
  },
  {
    q: "Quelle période historique est associée au catholicisme en Haïti ?",
    options: ["XIXe siècle", "Années 1970", "Intemporel", "Années 1940"],
    correct: 2
  },
  {
    q: "La tradition des contes de Bouki et Malice se caractérise principalement par :",
    options: ["« L'Union fait la Force » figure sur les armoiries et symbolise l'unité forgée pendant la lutte pour l'indépendance", "Drapeau cérémoniel richement brodé de perles et de sequins représentant un esprit du vodou", "Tradition orale populaire mettant en scène deux personnages complices et rivaux dans la sagesse paysanne", "Officiant masculin qui dirige les cérémonies et rituels du culte vodou"],
    correct: 2
  },
  {
    q: "Comment décrirait-on la nature de l'ason, hochet sacré du vodou ?",
    options: ["Religion et spiritualité", "Vie sociale et coutumes", "Danse et expression culturelle", "Artisanat et art"],
    correct: 0
  },
  {
    q: "À quelle époque rattache-t-on la mention du créole dans la Constitution de 1964 ?",
    options: ["XXe siècle", "Années 1970", "Années 1960", "Intemporel"],
    correct: 2
  },
  {
    q: "Dans quel contexte géographique situe-t-on le Konbit ?",
    options: ["Nord d'Haïti", "International", "Port-au-Prince (itinérant)", "Zones rurales d'Haïti"],
    correct: 3
  },
  {
    q: "Quel domaine de la vie culturelle haïtienne illustre le houngan, prêtre du vodou ?",
    options: ["Langue", "Danse et expression culturelle", "Fête et tradition", "Religion et spiritualité"],
    correct: 3
  },
  {
    q: "Quel repère temporel correspond au Konbit ?",
    options: ["Intemporel", "XXe siècle", "Années 1960", "Époque contemporaine"],
    correct: 0
  },
  {
    q: "La Fête du Drapeau appartient à quel volet de la tradition haïtienne ?",
    options: ["Artisanat et art", "Danse et expression culturelle", "Langue", "Fête et tradition"],
    correct: 3
  },
  {
    q: "Quelle affirmation décrit le mieux le Kanaval national ?",
    options: ["Fête nationale commémorant la proclamation de l'indépendance d'Haïti en 1804", "Créole à base lexicale française parlé par environ onze millions de personnes en Haïti", "Grande fête populaire précédant le Mercredi des Cendres, rythmée par les orchestres de konpa", "Instrument rituel en forme de calebasse ornée de perles, symbole d'autorité spirituelle du prêtre ou de la prêtresse"],
    correct: 2
  },
  {
    q: "Comment classerait-on le drapeau haïtien dans la culture haïtienne ?",
    options: ["Danse et expression culturelle", "Fête et tradition", "Vie sociale et coutumes", "Langue"],
    correct: 2
  },
  {
    q: "Dézafi, premier roman en créole haïtien est avant tout une expression de quel domaine ?",
    options: ["Fête et tradition", "Langue", "Danse et expression culturelle", "Religion et spiritualité"],
    correct: 1
  },
  {
    q: "À quelle région ou quel contexte associe-t-on le vodou haïtien ?",
    options: ["National", "Arcahaie", "Jacmel", "Nord d'Haïti"],
    correct: 0
  },
  {
    q: "Qu'est-ce qui définit la Journée internationale du créole avec exactitude ?",
    options: ["Carnaval réputé pour ses masques en papier mâché et ses costumes artisanaux élaborés", "Institution prévue par la Constitution de 1987 pour fixer et développer la langue créole", "Officiante féminine occupant un rôle spirituel équivalent à celui du houngan", "Célébrée chaque 28 octobre depuis son instauration en 1981 à l'initiative de la Dominique"],
    correct: 3
  },
  {
    q: "À quelle région ou quel contexte associe-t-on la tradition des contes de Bouki et Malice ?",
    options: ["Zones rurales d'Haïti", "Arcahaie", "National", "Milot (Nord)"],
    correct: 2
  },
  {
    q: "Quel lieu est le plus étroitement lié au Rara ?",
    options: ["National", "Port-au-Prince (itinérant)", "Milot (Nord)", "Zones rurales d'Haïti"],
    correct: 3
  },
  {
    q: "La Méringue de salon se caractérise principalement par :",
    options: ["Le créole tire l'essentiel de son vocabulaire du français, avec des apports africains, taïnos et espagnols", "Première mention du créole dans un texte constitutionnel haïtien, avant sa pleine officialisation en 1987", "Dessin tracé au sol, souvent à la farine ou à la cendre, représentant un esprit lors des cérémonies", "Danse de couple élégante, considérée comme un ancêtre du konpa moderne"],
    correct: 3
  },
  {
    q: "À quelle région ou quel contexte associe-t-on la tradition des pwovèb ayisyen (proverbes haïtiens) ?",
    options: ["Arcahaie", "National", "Jacmel", "Port-au-Prince"],
    correct: 1
  },
  {
    q: "Le catholicisme en Haïti est avant tout une expression de quel domaine ?",
    options: ["Danse et expression culturelle", "Langue", "Vie sociale et coutumes", "Religion et spiritualité"],
    correct: 3
  },
  {
    q: "Quelle description correspond fidèlement à la devise nationale d'Haïti ?",
    options: ["Espace commun regroupant plusieurs habitations d'une même famille élargie, cœur de la vie sociale rurale", "Grande fête populaire précédant le Mercredi des Cendres, rythmée par les orchestres de konpa", "Expressions populaires transmises oralement, très présentes dans la sagesse et l'éducation traditionnelles", "« L'Union fait la Force » figure sur les armoiries et symbolise l'unité forgée pendant la lutte pour l'indépendance"],
    correct: 3
  },
  {
    q: "Quel lieu est le plus étroitement lié au fer découpé de la Croix-des-Bouquets ?",
    options: ["Arcahaie", "Jacmel", "Port-au-Prince (itinérant)", "Croix-des-Bouquets"],
    correct: 3
  },
  {
    q: "Quel lieu est le plus étroitement lié au houngan, prêtre du vodou ?",
    options: ["Port-au-Prince", "Milot (Nord)", "National", "Zones rurales d'Haïti"],
    correct: 2
  },
  {
    q: "Qu'est-ce qui définit la variation dialectale du créole haïtien avec exactitude ?",
    options: ["Ce roman de Frankétienne, publié en 1975, est considéré comme le tout premier roman écrit en créole haïtien", "Cet article proclame que tous les Haïtiens sont unis par une langue commune, le créole", "On distingue traditionnellement le créole du Nord, du Centre et du Sud d'Haïti", "Célébrée chaque 18 mai, en commémoration de la création du drapeau haïtien en 1803"],
    correct: 2
  },
  {
    q: "Quelle description correspond fidèlement à la mention du créole dans la Constitution de 1964 ?",
    options: ["Institution prévue par la Constitution de 1987 pour fixer et développer la langue créole", "Tissu à carreaux colorés utilisé dans la confection des tenues traditionnelles féminines", "Première mention du créole dans un texte constitutionnel haïtien, avant sa pleine officialisation en 1987", "Carnaval réputé pour ses masques en papier mâché et ses costumes artisanaux élaborés"],
    correct: 2
  },
  {
    q: "La tradition des pwovèb ayisyen (proverbes haïtiens) est surtout ancré(e) dans quelle région d'Haïti ?",
    options: ["Zones rurales d'Haïti", "Haïti", "National", "Milot (Nord)"],
    correct: 2
  },
  {
    q: "Dans quel contexte géographique situe-t-on la Journée internationale du créole ?",
    options: ["National", "International", "Haïti", "Arcahaie"],
    correct: 1
  },
  {
    q: "Le madras, tissu traditionnel est surtout ancré(e) dans quelle région d'Haïti ?",
    options: ["National", "International", "Milot (Nord)", "Zones rurales d'Haïti"],
    correct: 0
  },
  {
    q: "L'article 5 de la Constitution de 1987 trouve son origine à quelle période ?",
    options: ["XIXe siècle", "Milieu XXe siècle", "Époque contemporaine", "Intemporel"],
    correct: 2
  },
  {
    q: "Quel est le fait vérifié concernant l'article 5 de la Constitution de 1987 ?",
    options: ["Procession musicale de rue jouée pendant la période du Carême, mêlant percussions et trompettes en bambou", "Danse de couple élégante, considérée comme un ancêtre du konpa moderne", "Danse cérémonielle vodou caractérisée par des mouvements ondulants du dos et des épaules", "Cet article proclame que tous les Haïtiens sont unis par une langue commune, le créole"],
    correct: 3
  },
  {
    q: "Quel est le fait vérifié concernant le Centre d'Art de Port-au-Prince ?",
    options: ["Cet article proclame que tous les Haïtiens sont unis par une langue commune, le créole", "Cérémonie vodou d'août 1791 considérée comme un moment fondateur de l'insurrection des esclaves", "Fondé en 1944, ce centre a révélé de nombreux artistes fondateurs de la peinture naïve haïtienne", "Procession musicale de rue jouée pendant la période du Carême, mêlant percussions et trompettes en bambou"],
    correct: 2
  },
  {
    q: "Quel repère temporel correspond à l'article 5 de la Constitution de 1987 ?",
    options: ["Années 1970", "Époque contemporaine", "Milieu XXe siècle", "Années 1940"],
    correct: 1
  },
  {
    q: "Quel repère temporel correspond à la Veye, veillée funéraire haïtienne ?",
    options: ["Années 1960", "Intemporel", "XIXe siècle", "Révolution haïtienne"],
    correct: 1
  },
  {
    q: "Quel domaine de la vie culturelle haïtienne illustre la devise nationale d'Haïti ?",
    options: ["Vie sociale et coutumes", "Artisanat et art", "Danse et expression culturelle", "Fête et tradition"],
    correct: 0
  },
  {
    q: "Quel lieu est le plus étroitement lié à la mention du créole dans la Constitution de 1964 ?",
    options: ["National", "Milot (Nord)", "Port-au-Prince", "Zones rurales d'Haïti"],
    correct: 0
  },
  {
    q: "Le vodou haïtien appartient à quel volet de la tradition haïtienne ?",
    options: ["Religion et spiritualité", "Fête et tradition", "Vie sociale et coutumes", "Langue"],
    correct: 0
  },
  {
    q: "À quelle époque rattache-t-on la variation dialectale du créole haïtien ?",
    options: ["Années 1940", "Intemporel", "Années 1960", "XIXe siècle"],
    correct: 1
  },
  {
    q: "La peinture naïve haïtienne relève principalement de quel domaine culturel ?",
    options: ["Danse et expression culturelle", "Religion et spiritualité", "Fête et tradition", "Artisanat et art"],
    correct: 3
  },
  {
    q: "Le Centre d'Art de Port-au-Prince est surtout ancré(e) dans quelle région d'Haïti ?",
    options: ["Port-au-Prince", "International", "Arcahaie", "Zones rurales d'Haïti"],
    correct: 0
  },
  {
    q: "À quel aspect de la culture haïtienne se rattache la Méringue de salon ?",
    options: ["Langue", "Fête et tradition", "Vie sociale et coutumes", "Danse et expression culturelle"],
    correct: 3
  },
  {
    q: "Comment classerait-on l'article 5 de la Constitution de 1987 dans la culture haïtienne ?",
    options: ["Artisanat et art", "Religion et spiritualité", "Langue", "Vie sociale et coutumes"],
    correct: 2
  },
  {
    q: "La variation dialectale du créole haïtien trouve son origine à quelle période ?",
    options: ["Révolution haïtienne", "XIXe siècle", "Intemporel", "Années 1970"],
    correct: 2
  },
  {
    q: "À quelle région ou quel contexte associe-t-on la variation dialectale du créole haïtien ?",
    options: ["Milot (Nord)", "Croix-des-Bouquets", "International", "National"],
    correct: 3
  },
  {
    q: "Le créole haïtien remonte à quelle époque de l'histoire d'Haïti ?",
    options: ["Années 1960", "XXe siècle", "XIXe siècle", "Intemporel"],
    correct: 3
  },
  {
    q: "À quelle époque rattache-t-on le 1er janvier, jour de l'indépendance ?",
    options: ["Milieu XXe siècle", "Années 1970", "Époque contemporaine", "Intemporel"],
    correct: 3
  },
  {
    q: "Que faut-il savoir sur la Citadelle Laferrière, symbole culturel ?",
    options: ["Forteresse classée à l'UNESCO, symbole de la résistance et de la fierté nationale haïtienne", "Le vodou est officiellement reconnu comme religion en Haïti depuis le début des années 2000", "Seule langue officielle d'Haïti depuis 1918, durant l'occupation américaine, jusqu'à l'arrivée du créole à ce statut", "Dessin tracé au sol, souvent à la farine ou à la cendre, représentant un esprit lors des cérémonies"],
    correct: 0
  },
  {
    q: "Le Kanaval national relève principalement de quel domaine culturel ?",
    options: ["Langue", "Fête et tradition", "Danse et expression culturelle", "Religion et spiritualité"],
    correct: 1
  },
  {
    q: "Quel repère temporel correspond à la tradition des contes de Bouki et Malice ?",
    options: ["Années 1960", "Révolution haïtienne", "Années 1970", "Intemporel"],
    correct: 3
  },
  {
    q: "Quelle période historique est associée à la reconnaissance du vodou comme religion ?",
    options: ["XIXe siècle", "Époque contemporaine", "Années 1970", "XXe siècle"],
    correct: 1
  },
  {
    q: "Qu'est-ce qui définit le Yanvalou, danse rituelle vodou avec exactitude ?",
    options: ["Fondé en 1944, ce centre a révélé de nombreux artistes fondateurs de la peinture naïve haïtienne", "Costume traditionnel porté notamment lors des danses folkloriques et fêtes patriotiques", "Danse cérémonielle vodou caractérisée par des mouvements ondulants du dos et des épaules", "Actée par la Constitution de mars 1987, qui fait du créole une langue officielle à égalité avec le français"],
    correct: 2
  },
  {
    q: "Que faut-il savoir sur le 1er janvier, jour de l'indépendance ?",
    options: ["Fête nationale commémorant la proclamation de l'indépendance d'Haïti en 1804", "Actée par la Constitution de mars 1987, qui fait du créole une langue officielle à égalité avec le français", "Officiant masculin qui dirige les cérémonies et rituels du culte vodou", "Le vodou est officiellement reconnu comme religion en Haïti depuis le début des années 2000"],
    correct: 0
  },
  {
    q: "Dans quelle catégorie situerait-on la co-officialisation du créole et du français ?",
    options: ["Artisanat et art", "Langue", "Fête et tradition", "Danse et expression culturelle"],
    correct: 1
  },
  {
    q: "Comment classerait-on le catholicisme en Haïti dans la culture haïtienne ?",
    options: ["Danse et expression culturelle", "Vie sociale et coutumes", "Langue", "Religion et spiritualité"],
    correct: 3
  },
  {
    q: "La peinture naïve haïtienne remonte à quelle époque de l'histoire d'Haïti ?",
    options: ["Époque contemporaine", "Années 1970", "Milieu XXe siècle", "Intemporel"],
    correct: 2
  },
  {
    q: "À quelle région ou quel contexte associe-t-on la reconnaissance du vodou comme religion ?",
    options: ["Arcahaie", "Haïti", "National", "Croix-des-Bouquets"],
    correct: 1
  },
  {
    q: "À quelle région ou quel contexte associe-t-on le Konbit ?",
    options: ["Arcahaie", "Milot (Nord)", "Nord d'Haïti", "Zones rurales d'Haïti"],
    correct: 3
  },
  {
    q: "Dans quel contexte géographique situe-t-on le catholicisme en Haïti ?",
    options: ["Nord d'Haïti", "National", "Milot (Nord)", "Zones rurales d'Haïti"],
    correct: 1
  },
  {
    q: "Dans quel contexte géographique situe-t-on le Banda, danse rituelle vodou ?",
    options: ["National", "Jacmel", "Haïti", "Port-au-Prince"],
    correct: 0
  },
  {
    q: "Le vodou haïtien relève principalement de quel domaine culturel ?",
    options: ["Danse et expression culturelle", "Religion et spiritualité", "Artisanat et art", "Vie sociale et coutumes"],
    correct: 1
  },
  {
    q: "La karabela, tenue traditionnelle trouve son origine à quelle période ?",
    options: ["Années 1940", "Années 1960", "Époque contemporaine", "Intemporel"],
    correct: 3
  },
  {
    q: "À quelle époque rattache-t-on la Citadelle Laferrière, symbole culturel ?",
    options: ["Milieu XXe siècle", "XIXe siècle", "Années 1970", "XXe siècle"],
    correct: 1
  },
  {
    q: "Dans quel contexte géographique situe-t-on dézafi, premier roman en créole haïtien ?",
    options: ["Croix-des-Bouquets", "Milot (Nord)", "Haïti", "Zones rurales d'Haïti"],
    correct: 2
  },
  {
    q: "Qu'est-ce qui définit la cérémonie du Bois-Caïman avec exactitude ?",
    options: ["Créole à base lexicale française parlé par environ onze millions de personnes en Haïti", "Cérémonie vodou d'août 1791 considérée comme un moment fondateur de l'insurrection des esclaves", "Institution prévue par la Constitution de 1987 pour fixer et développer la langue créole", "Le créole tire l'essentiel de son vocabulaire du français, avec des apports africains, taïnos et espagnols"],
    correct: 1
  },
  {
    q: "Dans quel contexte géographique situe-t-on la mention du créole dans la Constitution de 1964 ?",
    options: ["Jacmel", "National", "Nord d'Haïti", "Milot (Nord)"],
    correct: 1
  },
  {
    q: "Le vèvè, symbole rituel du vodou se caractérise principalement par :",
    options: ["Danse cérémonielle vodou caractérisée par des mouvements ondulants du dos et des épaules", "On distingue traditionnellement le créole du Nord, du Centre et du Sud d'Haïti", "Forme traditionnelle d'entraide agricole où les paysans travaillent collectivement la terre", "Dessin tracé au sol, souvent à la farine ou à la cendre, représentant un esprit lors des cérémonies"],
    correct: 3
  },
  {
    q: "La co-officialisation du créole et du français relève principalement de quel domaine culturel ?",
    options: ["Langue", "Danse et expression culturelle", "Fête et tradition", "Artisanat et art"],
    correct: 0
  },
  {
    q: "Le houngan, prêtre du vodou est surtout ancré(e) dans quelle région d'Haïti ?",
    options: ["National", "International", "Haïti", "Milot (Nord)"],
    correct: 0
  },
  {
    q: "La devise nationale d'Haïti se caractérise principalement par :",
    options: ["« L'Union fait la Force » figure sur les armoiries et symbolise l'unité forgée pendant la lutte pour l'indépendance", "Institution prévue par la Constitution de 1987 pour fixer et développer la langue créole", "Le vodou est officiellement reconnu comme religion en Haïti depuis le début des années 2000", "Danse associée aux esprits Gede, marquée par des mouvements de bassin très expressifs"],
    correct: 0
  },
  {
    q: "Quelle description correspond fidèlement au Carnaval de Jacmel ?",
    options: ["Carnaval réputé pour ses masques en papier mâché et ses costumes artisanaux élaborés", "Institution prévue par la Constitution de 1987 pour fixer et développer la langue créole", "Célébrée chaque 18 mai, en commémoration de la création du drapeau haïtien en 1803", "Expressions populaires transmises oralement, très présentes dans la sagesse et l'éducation traditionnelles"],
    correct: 0
  },
  {
    q: "Quelle période historique est associée au Carnaval de Jacmel ?",
    options: ["Années 1960", "XIXe siècle", "Intemporel", "Époque contemporaine"],
    correct: 2
  },
  {
    q: "Quelle affirmation décrit le mieux la Méringue de salon ?",
    options: ["Danse de couple élégante, considérée comme un ancêtre du konpa moderne", "Espace commun regroupant plusieurs habitations d'une même famille élargie, cœur de la vie sociale rurale", "Seule langue officielle d'Haïti depuis 1918, durant l'occupation américaine, jusqu'à l'arrivée du créole à ce statut", "Camionnette ou bus coloré, richement décoré de motifs religieux et populaires, servant de transport collectif"],
    correct: 0
  },
  {
    q: "Dans quel contexte géographique situe-t-on le créole haïtien ?",
    options: ["Zones rurales d'Haïti", "Jacmel", "Nord d'Haïti", "National"],
    correct: 3
  },
  {
    q: "La tradition des contes de Bouki et Malice remonte à quelle époque de l'histoire d'Haïti ?",
    options: ["Intemporel", "Époque contemporaine", "Années 1970", "XXe siècle"],
    correct: 0
  },
  {
    q: "L'article 5 de la Constitution de 1987 appartient à quel volet de la tradition haïtienne ?",
    options: ["Vie sociale et coutumes", "Langue", "Religion et spiritualité", "Artisanat et art"],
    correct: 1
  },
  {
    q: "À quel aspect de la culture haïtienne se rattache la manbo, prêtresse du vodou ?",
    options: ["Religion et spiritualité", "Artisanat et art", "Langue", "Fête et tradition"],
    correct: 0
  },
  {
    q: "Dans quel contexte géographique situe-t-on la Fête Gede ?",
    options: ["Haïti", "Croix-des-Bouquets", "National", "Jacmel"],
    correct: 2
  },
  {
    q: "Quel lieu est le plus étroitement lié à la devise nationale d'Haïti ?",
    options: ["Croix-des-Bouquets", "Port-au-Prince", "Jacmel", "National"],
    correct: 3
  },
  {
    q: "Quel lieu est le plus étroitement lié au vodou haïtien ?",
    options: ["Jacmel", "Port-au-Prince", "Port-au-Prince (itinérant)", "National"],
    correct: 3
  },
  {
    q: "Quelle période historique est associée au statut du français avant 1987 ?",
    options: ["Révolution haïtienne", "Années 1960", "Intemporel", "XXe siècle"],
    correct: 3
  },
  {
    q: "Le catholicisme en Haïti trouve son origine à quelle période ?",
    options: ["Intemporel", "Époque contemporaine", "Années 1960", "Années 1940"],
    correct: 0
  },
  {
    q: "Le houngan, prêtre du vodou appartient à quel volet de la tradition haïtienne ?",
    options: ["Danse et expression culturelle", "Vie sociale et coutumes", "Fête et tradition", "Religion et spiritualité"],
    correct: 3
  },
  {
    q: "Quel domaine de la vie culturelle haïtienne illustre la Veye, veillée funéraire haïtienne ?",
    options: ["Fête et tradition", "Religion et spiritualité", "Vie sociale et coutumes", "Langue"],
    correct: 2
  },
  {
    q: "Comment décrirait-on la nature du Centre d'Art de Port-au-Prince ?",
    options: ["Religion et spiritualité", "Artisanat et art", "Danse et expression culturelle", "Vie sociale et coutumes"],
    correct: 1
  },
  {
    q: "Quelle période historique est associée au Centre d'Art de Port-au-Prince ?",
    options: ["Années 1970", "Années 1960", "Époque contemporaine", "Années 1940"],
    correct: 3
  },
  {
    q: "Dans quel contexte géographique situe-t-on le drapeau haïtien ?",
    options: ["Arcahaie", "Milot (Nord)", "Port-au-Prince", "Port-au-Prince (itinérant)"],
    correct: 0
  },
  {
    q: "Qu'est-ce qui définit le Konbit avec exactitude ?",
    options: ["Instrument rituel en forme de calebasse ornée de perles, symbole d'autorité spirituelle du prêtre ou de la prêtresse", "Courant pictural né autour du Centre d'Art, mêlant scènes de vie quotidienne et imaginaire vodou", "Forme traditionnelle d'entraide agricole où les paysans travaillent collectivement la terre", "Tissu à carreaux colorés utilisé dans la confection des tenues traditionnelles féminines"],
    correct: 2
  },
  {
    q: "Quel domaine de la vie culturelle haïtienne illustre l'article 5 de la Constitution de 1987 ?",
    options: ["Artisanat et art", "Langue", "Vie sociale et coutumes", "Fête et tradition"],
    correct: 1
  },
  {
    q: "Comment décrit-on précisément la reconnaissance du vodou comme religion ?",
    options: ["Forme traditionnelle d'entraide agricole où les paysans travaillent collectivement la terre", "Officiante féminine occupant un rôle spirituel équivalent à celui du houngan", "Le vodou est officiellement reconnu comme religion en Haïti depuis le début des années 2000", "Tradition orale populaire mettant en scène deux personnages complices et rivaux dans la sagesse paysanne"],
    correct: 2
  },
  {
    q: "Comment classerait-on le vodou haïtien dans la culture haïtienne ?",
    options: ["Religion et spiritualité", "Artisanat et art", "Danse et expression culturelle", "Langue"],
    correct: 0
  },
  {
    q: "Le fer découpé de la Croix-des-Bouquets relève principalement de quel domaine culturel ?",
    options: ["Fête et tradition", "Danse et expression culturelle", "Vie sociale et coutumes", "Artisanat et art"],
    correct: 3
  },
  {
    q: "Quelle description correspond fidèlement à la tradition des pwovèb ayisyen (proverbes haïtiens) ?",
    options: ["Expressions populaires transmises oralement, très présentes dans la sagesse et l'éducation traditionnelles", "Religion syncrétique mêlant croyances ouest-africaines et éléments catholiques, pratiquée par une large partie de la population", "Le vodou est officiellement reconnu comme religion en Haïti depuis le début des années 2000", "« L'Union fait la Force » figure sur les armoiries et symbolise l'unité forgée pendant la lutte pour l'indépendance"],
    correct: 0
  },
  {
    q: "La Veye, veillée funéraire haïtienne trouve son origine à quelle période ?",
    options: ["Époque contemporaine", "Intemporel", "XIXe siècle", "Années 1960"],
    correct: 1
  },
  {
    q: "La reconnaissance du vodou comme religion remonte à quelle époque de l'histoire d'Haïti ?",
    options: ["Années 1960", "Époque contemporaine", "XXe siècle", "Années 1940"],
    correct: 1
  },
  {
    q: "Quelle description correspond fidèlement au Kanaval national ?",
    options: ["Danse associée aux esprits Gede, marquée par des mouvements de bassin très expressifs", "Grande fête populaire précédant le Mercredi des Cendres, rythmée par les orchestres de konpa", "Carnaval réputé pour ses masques en papier mâché et ses costumes artisanaux élaborés", "Art du métal martelé et découpé, né dans cette commune devenue capitale haïtienne de cet artisanat"],
    correct: 1
  },
  {
    q: "Comment décrirait-on la nature du Lakou ?",
    options: ["Langue", "Vie sociale et coutumes", "Danse et expression culturelle", "Artisanat et art"],
    correct: 1
  },
  {
    q: "Quel lieu est le plus étroitement lié à la Veye, veillée funéraire haïtienne ?",
    options: ["Zones rurales d'Haïti", "Milot (Nord)", "Haïti", "National"],
    correct: 3
  },
  {
    q: "Dans quelle catégorie situerait-on la peinture naïve haïtienne ?",
    options: ["Vie sociale et coutumes", "Artisanat et art", "Fête et tradition", "Religion et spiritualité"],
    correct: 1
  },
  {
    q: "Qu'est-ce qui définit la Fête Gede avec exactitude ?",
    options: ["Forme traditionnelle d'entraide agricole où les paysans travaillent collectivement la terre", "Célébration vodou du début du mois de novembre honorant les esprits des morts", "Expressions populaires transmises oralement, très présentes dans la sagesse et l'éducation traditionnelles", "Le vodou est officiellement reconnu comme religion en Haïti depuis le début des années 2000"],
    correct: 1
  },
  {
    q: "Depuis quand le Centre d'Art de Port-au-Prince fait-il/elle partie de la culture haïtienne ?",
    options: ["Intemporel", "Révolution haïtienne", "Époque contemporaine", "Années 1940"],
    correct: 3
  },
  {
    q: "Que faut-il savoir sur le fer découpé de la Croix-des-Bouquets ?",
    options: ["Cet article proclame que tous les Haïtiens sont unis par une langue commune, le créole", "Fondé en 1944, ce centre a révélé de nombreux artistes fondateurs de la peinture naïve haïtienne", "Art du métal martelé et découpé, né dans cette commune devenue capitale haïtienne de cet artisanat", "Danse cérémonielle vodou caractérisée par des mouvements ondulants du dos et des épaules"],
    correct: 2
  },
  {
    q: "Le catholicisme en Haïti appartient à quel volet de la tradition haïtienne ?",
    options: ["Religion et spiritualité", "Fête et tradition", "Artisanat et art", "Danse et expression culturelle"],
    correct: 0
  },
  {
    q: "À quel aspect de la culture haïtienne se rattache la Veye, veillée funéraire haïtienne ?",
    options: ["Religion et spiritualité", "Danse et expression culturelle", "Vie sociale et coutumes", "Fête et tradition"],
    correct: 2
  },
  {
    q: "À quel aspect de la culture haïtienne se rattache la co-officialisation du créole et du français ?",
    options: ["Religion et spiritualité", "Fête et tradition", "Langue", "Artisanat et art"],
    correct: 2
  },
  {
    q: "Le drapeau haïtien trouve son origine à quelle période ?",
    options: ["Milieu XXe siècle", "Révolution haïtienne", "Intemporel", "Époque contemporaine"],
    correct: 1
  },
  {
    q: "La Veye, veillée funéraire haïtienne se caractérise principalement par :",
    options: ["Rassemblement communautaire organisé après un décès, mêlant prières, chants et souvenirs du défunt", "Actée par la Constitution de mars 1987, qui fait du créole une langue officielle à égalité avec le français", "Célébration vodou du début du mois de novembre honorant les esprits des morts", "Carnaval réputé pour ses masques en papier mâché et ses costumes artisanaux élaborés"],
    correct: 0
  },
  {
    q: "Le Kanaval national se caractérise principalement par :",
    options: ["Procession musicale de rue jouée pendant la période du Carême, mêlant percussions et trompettes en bambou", "Rassemblement communautaire organisé après un décès, mêlant prières, chants et souvenirs du défunt", "Cet article proclame que tous les Haïtiens sont unis par une langue commune, le créole", "Grande fête populaire précédant le Mercredi des Cendres, rythmée par les orchestres de konpa"],
    correct: 3
  },
  {
    q: "Quel est le fait vérifié concernant la Veye, veillée funéraire haïtienne ?",
    options: ["Créé en 1803 lors du congrès de l'Arcahaie à partir du drapeau tricolore français dont la bande blanche fut retirée", "Forme traditionnelle d'entraide agricole où les paysans travaillent collectivement la terre", "Rassemblement communautaire organisé après un décès, mêlant prières, chants et souvenirs du défunt", "Le créole tire l'essentiel de son vocabulaire du français, avec des apports africains, taïnos et espagnols"],
    correct: 2
  },
  {
    q: "Dans quelle catégorie situerait-on la Fête Gede ?",
    options: ["Religion et spiritualité", "Vie sociale et coutumes", "Langue", "Fête et tradition"],
    correct: 0
  },
  {
    q: "Comment décrirait-on la nature de la peinture naïve haïtienne ?",
    options: ["Fête et tradition", "Danse et expression culturelle", "Artisanat et art", "Langue"],
    correct: 2
  },
  {
    q: "Qu'est-ce qui définit l'article 5 de la Constitution de 1987 avec exactitude ?",
    options: ["Cet article proclame que tous les Haïtiens sont unis par une langue commune, le créole", "Procession musicale de rue jouée pendant la période du Carême, mêlant percussions et trompettes en bambou", "Ce roman de Frankétienne, publié en 1975, est considéré comme le tout premier roman écrit en créole haïtien", "Art du métal martelé et découpé, né dans cette commune devenue capitale haïtienne de cet artisanat"],
    correct: 0
  },
  {
    q: "Comment classerait-on le Konbit dans la culture haïtienne ?",
    options: ["Vie sociale et coutumes", "Artisanat et art", "Religion et spiritualité", "Langue"],
    correct: 0
  },
  {
    q: "Le drapo vodou appartient à quel volet de la tradition haïtienne ?",
    options: ["Langue", "Religion et spiritualité", "Danse et expression culturelle", "Artisanat et art"],
    correct: 3
  },
  {
    q: "Quel lieu est le plus étroitement lié au Kanaval national ?",
    options: ["Arcahaie", "Zones rurales d'Haïti", "Port-au-Prince (itinérant)", "Haïti"],
    correct: 2
  },
  {
    q: "Quel repère temporel correspond au catholicisme en Haïti ?",
    options: ["XXe siècle", "Intemporel", "Années 1960", "XIXe siècle"],
    correct: 1
  },
  {
    q: "Comment décrit-on précisément le drapeau haïtien ?",
    options: ["Le vodou est officiellement reconnu comme religion en Haïti depuis le début des années 2000", "Créé en 1803 lors du congrès de l'Arcahaie à partir du drapeau tricolore français dont la bande blanche fut retirée", "On distingue traditionnellement le créole du Nord, du Centre et du Sud d'Haïti", "Institution prévue par la Constitution de 1987 pour fixer et développer la langue créole"],
    correct: 1
  },
  {
    q: "À quelle région ou quel contexte associe-t-on le catholicisme en Haïti ?",
    options: ["National", "Croix-des-Bouquets", "Port-au-Prince", "International"],
    correct: 0
  },
  {
    q: "Le fer découpé de la Croix-des-Bouquets est avant tout une expression de quel domaine ?",
    options: ["Fête et tradition", "Vie sociale et coutumes", "Religion et spiritualité", "Artisanat et art"],
    correct: 3
  },
  {
    q: "Dans quelle catégorie situerait-on la Fête du Drapeau ?",
    options: ["Vie sociale et coutumes", "Artisanat et art", "Fête et tradition", "Danse et expression culturelle"],
    correct: 2
  },
  {
    q: "Le Yanvalou, danse rituelle vodou est avant tout une expression de quel domaine ?",
    options: ["Fête et tradition", "Vie sociale et coutumes", "Langue", "Danse et expression culturelle"],
    correct: 3
  },
  {
    q: "Quelle affirmation décrit le mieux la Journée internationale du créole ?",
    options: ["On distingue traditionnellement le créole du Nord, du Centre et du Sud d'Haïti", "Célébrée chaque 28 octobre depuis son instauration en 1981 à l'initiative de la Dominique", "Créé en 1803 lors du congrès de l'Arcahaie à partir du drapeau tricolore français dont la bande blanche fut retirée", "Instrument rituel en forme de calebasse ornée de perles, symbole d'autorité spirituelle du prêtre ou de la prêtresse"],
    correct: 1
  },
  {
    q: "La Veye, veillée funéraire haïtienne relève principalement de quel domaine culturel ?",
    options: ["Religion et spiritualité", "Artisanat et art", "Langue", "Vie sociale et coutumes"],
    correct: 3
  },
  {
    q: "Quelle description correspond fidèlement à la variation dialectale du créole haïtien ?",
    options: ["Fondé en 1944, ce centre a révélé de nombreux artistes fondateurs de la peinture naïve haïtienne", "On distingue traditionnellement le créole du Nord, du Centre et du Sud d'Haïti", "Religion la plus pratiquée du pays aux côtés du protestantisme et du vodou, souvent en syncrétisme avec ce dernier", "Courant pictural né autour du Centre d'Art, mêlant scènes de vie quotidienne et imaginaire vodou"],
    correct: 1
  },
  {
    q: "La variation dialectale du créole haïtien appartient à quel volet de la tradition haïtienne ?",
    options: ["Fête et tradition", "Langue", "Danse et expression culturelle", "Religion et spiritualité"],
    correct: 1
  },
  {
    q: "Dans quelle catégorie situerait-on l'ason, hochet sacré du vodou ?",
    options: ["Artisanat et art", "Vie sociale et coutumes", "Religion et spiritualité", "Danse et expression culturelle"],
    correct: 2
  },
  {
    q: "Qu'est-ce qui définit la reconnaissance du vodou comme religion avec exactitude ?",
    options: ["Célébrée chaque 28 octobre depuis son instauration en 1981 à l'initiative de la Dominique", "Forme traditionnelle d'entraide agricole où les paysans travaillent collectivement la terre", "Fête nationale commémorant la proclamation de l'indépendance d'Haïti en 1804", "Le vodou est officiellement reconnu comme religion en Haïti depuis le début des années 2000"],
    correct: 3
  },
  {
    q: "L'article 5 de la Constitution de 1987 est surtout ancré(e) dans quelle région d'Haïti ?",
    options: ["Croix-des-Bouquets", "Zones rurales d'Haïti", "National", "Port-au-Prince (itinérant)"],
    correct: 2
  },
  {
    q: "Dans quel contexte géographique situe-t-on l'Académie créole prévue par l'article 213 ?",
    options: ["National", "Nord d'Haïti", "Port-au-Prince", "International"],
    correct: 0
  },
  {
    q: "Que faut-il savoir sur la Journée internationale du créole ?",
    options: ["Célébrée chaque 28 octobre depuis son instauration en 1981 à l'initiative de la Dominique", "Officiante féminine occupant un rôle spirituel équivalent à celui du houngan", "Officiant masculin qui dirige les cérémonies et rituels du culte vodou", "Grande fête populaire précédant le Mercredi des Cendres, rythmée par les orchestres de konpa"],
    correct: 0
  },
  {
    q: "Quel lieu est le plus étroitement lié à la Méringue de salon ?",
    options: ["International", "Haïti", "Port-au-Prince", "Arcahaie"],
    correct: 2
  },
  {
    q: "À quel aspect de la culture haïtienne se rattache la devise nationale d'Haïti ?",
    options: ["Danse et expression culturelle", "Vie sociale et coutumes", "Fête et tradition", "Religion et spiritualité"],
    correct: 1
  },
  {
    q: "Dans quelle catégorie situerait-on la Méringue de salon ?",
    options: ["Danse et expression culturelle", "Religion et spiritualité", "Langue", "Vie sociale et coutumes"],
    correct: 0
  },
  {
    q: "La karabela, tenue traditionnelle se caractérise principalement par :",
    options: ["Cérémonie vodou d'août 1791 considérée comme un moment fondateur de l'insurrection des esclaves", "Costume traditionnel porté notamment lors des danses folkloriques et fêtes patriotiques", "On distingue traditionnellement le créole du Nord, du Centre et du Sud d'Haïti", "Institution prévue par la Constitution de 1987 pour fixer et développer la langue créole"],
    correct: 1
  },
  {
    q: "Comment décrit-on précisément l'ason, hochet sacré du vodou ?",
    options: ["Ce roman de Frankétienne, publié en 1975, est considéré comme le tout premier roman écrit en créole haïtien", "Drapeau cérémoniel richement brodé de perles et de sequins représentant un esprit du vodou", "Fondé en 1944, ce centre a révélé de nombreux artistes fondateurs de la peinture naïve haïtienne", "Instrument rituel en forme de calebasse ornée de perles, symbole d'autorité spirituelle du prêtre ou de la prêtresse"],
    correct: 3
  },
  {
    q: "Quelle période historique est associée à dézafi, premier roman en créole haïtien ?",
    options: ["Années 1970", "Milieu XXe siècle", "Révolution haïtienne", "Années 1960"],
    correct: 0
  },
  {
    q: "À quelle région ou quel contexte associe-t-on la Journée internationale du créole ?",
    options: ["International", "Croix-des-Bouquets", "National", "Port-au-Prince (itinérant)"],
    correct: 0
  },
  {
    q: "Le fer découpé de la Croix-des-Bouquets trouve son origine à quelle période ?",
    options: ["Révolution haïtienne", "Intemporel", "XXe siècle", "Années 1940"],
    correct: 2
  },
  {
    q: "Quel repère temporel correspond à la Citadelle Laferrière, symbole culturel ?",
    options: ["Années 1940", "Époque contemporaine", "Années 1960", "XIXe siècle"],
    correct: 3
  },
  {
    q: "La Citadelle Laferrière, symbole culturel trouve son origine à quelle période ?",
    options: ["Intemporel", "XIXe siècle", "Années 1940", "Révolution haïtienne"],
    correct: 1
  },
  {
    q: "Depuis quand le Yanvalou, danse rituelle vodou fait-il/elle partie de la culture haïtienne ?",
    options: ["Années 1940", "Intemporel", "XXe siècle", "Années 1960"],
    correct: 1
  },
  {
    q: "Quel est le fait vérifié concernant le Yanvalou, danse rituelle vodou ?",
    options: ["Seule langue officielle d'Haïti depuis 1918, durant l'occupation américaine, jusqu'à l'arrivée du créole à ce statut", "Espace commun regroupant plusieurs habitations d'une même famille élargie, cœur de la vie sociale rurale", "Danse cérémonielle vodou caractérisée par des mouvements ondulants du dos et des épaules", "Grande fête populaire précédant le Mercredi des Cendres, rythmée par les orchestres de konpa"],
    correct: 2
  },
  {
    q: "La tradition des contes de Bouki et Malice est surtout ancré(e) dans quelle région d'Haïti ?",
    options: ["National", "International", "Haïti", "Nord d'Haïti"],
    correct: 0
  },
  {
    q: "Le Rara trouve son origine à quelle période ?",
    options: ["XXe siècle", "Intemporel", "Années 1940", "XIXe siècle"],
    correct: 1
  },
  {
    q: "Dans quelle catégorie situerait-on la karabela, tenue traditionnelle ?",
    options: ["Artisanat et art", "Fête et tradition", "Religion et spiritualité", "Danse et expression culturelle"],
    correct: 0
  },
  {
    q: "Qu'est-ce qui définit le statut du français avant 1987 avec exactitude ?",
    options: ["Célébrée chaque 18 mai, en commémoration de la création du drapeau haïtien en 1803", "Première mention du créole dans un texte constitutionnel haïtien, avant sa pleine officialisation en 1987", "Seule langue officielle d'Haïti depuis 1918, durant l'occupation américaine, jusqu'à l'arrivée du créole à ce statut", "Tissu à carreaux colorés utilisé dans la confection des tenues traditionnelles féminines"],
    correct: 2
  },
  {
    q: "Quel est le fait vérifié concernant le créole haïtien ?",
    options: ["Religion syncrétique mêlant croyances ouest-africaines et éléments catholiques, pratiquée par une large partie de la population", "Dessin tracé au sol, souvent à la farine ou à la cendre, représentant un esprit lors des cérémonies", "Ce roman de Frankétienne, publié en 1975, est considéré comme le tout premier roman écrit en créole haïtien", "Créole à base lexicale française parlé par environ onze millions de personnes en Haïti"],
    correct: 3
  },
  {
    q: "Dans quelle catégorie situerait-on la Citadelle Laferrière, symbole culturel ?",
    options: ["Langue", "Artisanat et art", "Danse et expression culturelle", "Vie sociale et coutumes"],
    correct: 1
  },
  {
    q: "La karabela, tenue traditionnelle appartient à quel volet de la tradition haïtienne ?",
    options: ["Langue", "Fête et tradition", "Artisanat et art", "Religion et spiritualité"],
    correct: 2
  },
  {
    q: "Que faut-il savoir sur la tradition des pwovèb ayisyen (proverbes haïtiens) ?",
    options: ["Expressions populaires transmises oralement, très présentes dans la sagesse et l'éducation traditionnelles", "Costume traditionnel porté notamment lors des danses folkloriques et fêtes patriotiques", "Créé en 1803 lors du congrès de l'Arcahaie à partir du drapeau tricolore français dont la bande blanche fut retirée", "Officiante féminine occupant un rôle spirituel équivalent à celui du houngan"],
    correct: 0
  },
  {
    q: "Quel domaine de la vie culturelle haïtienne illustre la Méringue de salon ?",
    options: ["Danse et expression culturelle", "Artisanat et art", "Religion et spiritualité", "Fête et tradition"],
    correct: 0
  },
  {
    q: "À quel aspect de la culture haïtienne se rattache le Banda, danse rituelle vodou ?",
    options: ["Danse et expression culturelle", "Fête et tradition", "Artisanat et art", "Langue"],
    correct: 0
  },
  {
    q: "Quel est le fait vérifié concernant la variation dialectale du créole haïtien ?",
    options: ["Célébration vodou du début du mois de novembre honorant les esprits des morts", "Danse cérémonielle vodou caractérisée par des mouvements ondulants du dos et des épaules", "On distingue traditionnellement le créole du Nord, du Centre et du Sud d'Haïti", "Officiante féminine occupant un rôle spirituel équivalent à celui du houngan"],
    correct: 2
  },
  {
    q: "Depuis quand la Citadelle Laferrière, symbole culturel fait-il/elle partie de la culture haïtienne ?",
    options: ["Époque contemporaine", "Années 1970", "Années 1960", "XIXe siècle"],
    correct: 3
  },
  {
    q: "Que faut-il savoir sur le Konbit ?",
    options: ["Forme traditionnelle d'entraide agricole où les paysans travaillent collectivement la terre", "Art du métal martelé et découpé, né dans cette commune devenue capitale haïtienne de cet artisanat", "Institution prévue par la Constitution de 1987 pour fixer et développer la langue créole", "Carnaval réputé pour ses masques en papier mâché et ses costumes artisanaux élaborés"],
    correct: 0
  },
  {
    q: "À quelle région ou quel contexte associe-t-on la Veye, veillée funéraire haïtienne ?",
    options: ["Jacmel", "Arcahaie", "National", "International"],
    correct: 2
  },
  {
    q: "À quelle époque rattache-t-on le Lakou ?",
    options: ["Années 1940", "Années 1960", "Intemporel", "Années 1970"],
    correct: 2
  },
  {
    q: "Depuis quand le créole haïtien fait-il/elle partie de la culture haïtienne ?",
    options: ["Années 1940", "Années 1960", "Milieu XXe siècle", "Intemporel"],
    correct: 3
  },
  {
    q: "À quelle époque rattache-t-on le houngan, prêtre du vodou ?",
    options: ["Milieu XXe siècle", "Intemporel", "XXe siècle", "Révolution haïtienne"],
    correct: 1
  },
  {
    q: "Quel lieu est le plus étroitement lié au vèvè, symbole rituel du vodou ?",
    options: ["National", "Haïti", "Port-au-Prince (itinérant)", "Croix-des-Bouquets"],
    correct: 0
  },
  {
    q: "Quel lieu est le plus étroitement lié à l'article 5 de la Constitution de 1987 ?",
    options: ["National", "International", "Croix-des-Bouquets", "Jacmel"],
    correct: 0
  },
  {
    q: "Dans quelle catégorie situerait-on la Journée internationale du créole ?",
    options: ["Langue", "Fête et tradition", "Danse et expression culturelle", "Vie sociale et coutumes"],
    correct: 0
  },
  {
    q: "Où le Centre d'Art de Port-au-Prince est-il/elle particulièrement présent(e) ou pratiqué(e) ?",
    options: ["International", "Port-au-Prince", "Milot (Nord)", "Zones rurales d'Haïti"],
    correct: 1
  },
  {
    q: "La karabela, tenue traditionnelle remonte à quelle époque de l'histoire d'Haïti ?",
    options: ["Intemporel", "Années 1940", "XIXe siècle", "Époque contemporaine"],
    correct: 0
  },
  {
    q: "Quelle période historique est associée au Yanvalou, danse rituelle vodou ?",
    options: ["XIXe siècle", "Milieu XXe siècle", "Époque contemporaine", "Intemporel"],
    correct: 3
  },
  {
    q: "Le tap-tap, transport en commun peint relève principalement de quel domaine culturel ?",
    options: ["Vie sociale et coutumes", "Artisanat et art", "Fête et tradition", "Langue"],
    correct: 1
  },
  {
    q: "Dans quelle catégorie situerait-on la reconnaissance du vodou comme religion ?",
    options: ["Langue", "Religion et spiritualité", "Danse et expression culturelle", "Fête et tradition"],
    correct: 1
  },
  {
    q: "Le tap-tap, transport en commun peint trouve son origine à quelle période ?",
    options: ["Années 1940", "Intemporel", "Milieu XXe siècle", "Révolution haïtienne"],
    correct: 1
  },
  {
    q: "Quelle description correspond fidèlement au 1er janvier, jour de l'indépendance ?",
    options: ["Dessin tracé au sol, souvent à la farine ou à la cendre, représentant un esprit lors des cérémonies", "Ce roman de Frankétienne, publié en 1975, est considéré comme le tout premier roman écrit en créole haïtien", "Drapeau cérémoniel richement brodé de perles et de sequins représentant un esprit du vodou", "Fête nationale commémorant la proclamation de l'indépendance d'Haïti en 1804"],
    correct: 3
  },
  {
    q: "Où la manbo, prêtresse du vodou est-il/elle particulièrement présent(e) ou pratiqué(e) ?",
    options: ["National", "Jacmel", "Croix-des-Bouquets", "Nord d'Haïti"],
    correct: 0
  },
  {
    q: "Le Yanvalou, danse rituelle vodou remonte à quelle époque de l'histoire d'Haïti ?",
    options: ["Intemporel", "Années 1970", "Révolution haïtienne", "Années 1960"],
    correct: 0
  },
  {
    q: "Comment décrit-on précisément le Konbit ?",
    options: ["Institution prévue par la Constitution de 1987 pour fixer et développer la langue créole", "Courant pictural né autour du Centre d'Art, mêlant scènes de vie quotidienne et imaginaire vodou", "Le vodou est officiellement reconnu comme religion en Haïti depuis le début des années 2000", "Forme traditionnelle d'entraide agricole où les paysans travaillent collectivement la terre"],
    correct: 3
  },
  {
    q: "Comment classerait-on la Citadelle Laferrière, symbole culturel dans la culture haïtienne ?",
    options: ["Langue", "Danse et expression culturelle", "Artisanat et art", "Vie sociale et coutumes"],
    correct: 2
  },
  {
    q: "Comment décrit-on précisément la Fête Gede ?",
    options: ["Danse de couple élégante, considérée comme un ancêtre du konpa moderne", "Célébration vodou du début du mois de novembre honorant les esprits des morts", "Fête nationale commémorant la proclamation de l'indépendance d'Haïti en 1804", "Religion syncrétique mêlant croyances ouest-africaines et éléments catholiques, pratiquée par une large partie de la population"],
    correct: 1
  },
  {
    q: "À quelle région ou quel contexte associe-t-on la Citadelle Laferrière, symbole culturel ?",
    options: ["Milot (Nord)", "Haïti", "International", "Arcahaie"],
    correct: 0
  },
  {
    q: "Depuis quand le drapo vodou fait-il/elle partie de la culture haïtienne ?",
    options: ["Années 1960", "Intemporel", "Milieu XXe siècle", "Époque contemporaine"],
    correct: 1
  },
  {
    q: "Le statut du français avant 1987 est surtout ancré(e) dans quelle région d'Haïti ?",
    options: ["Arcahaie", "National", "Jacmel", "Nord d'Haïti"],
    correct: 1
  },
  {
    q: "Où l'influence lexicale du créole haïtien est-il/elle particulièrement présent(e) ou pratiqué(e) ?",
    options: ["Jacmel", "Port-au-Prince", "National", "Haïti"],
    correct: 2
  },
  {
    q: "Quelle période historique est associée à la Veye, veillée funéraire haïtienne ?",
    options: ["Années 1940", "Révolution haïtienne", "XIXe siècle", "Intemporel"],
    correct: 3
  },
  {
    q: "Comment décrit-on précisément le Kanaval national ?",
    options: ["Cet article proclame que tous les Haïtiens sont unis par une langue commune, le créole", "Forme traditionnelle d'entraide agricole où les paysans travaillent collectivement la terre", "Carnaval réputé pour ses masques en papier mâché et ses costumes artisanaux élaborés", "Grande fête populaire précédant le Mercredi des Cendres, rythmée par les orchestres de konpa"],
    correct: 3
  },
  {
    q: "La reconnaissance du vodou comme religion relève principalement de quel domaine culturel ?",
    options: ["Fête et tradition", "Artisanat et art", "Danse et expression culturelle", "Religion et spiritualité"],
    correct: 3
  },
  {
    q: "La tradition des contes de Bouki et Malice est avant tout une expression de quel domaine ?",
    options: ["Langue", "Vie sociale et coutumes", "Fête et tradition", "Religion et spiritualité"],
    correct: 1
  },
  {
    q: "Quel lieu est le plus étroitement lié à la manbo, prêtresse du vodou ?",
    options: ["International", "Zones rurales d'Haïti", "Haïti", "National"],
    correct: 3
  },
  {
    q: "La variation dialectale du créole haïtien est avant tout une expression de quel domaine ?",
    options: ["Danse et expression culturelle", "Fête et tradition", "Religion et spiritualité", "Langue"],
    correct: 3
  },
  {
    q: "Depuis quand le 1er janvier, jour de l'indépendance fait-il/elle partie de la culture haïtienne ?",
    options: ["Intemporel", "Années 1960", "XIXe siècle", "Années 1970"],
    correct: 0
  },
  {
    q: "La cérémonie du Bois-Caïman remonte à quelle époque de l'histoire d'Haïti ?",
    options: ["Révolution haïtienne", "Années 1940", "XIXe siècle", "Années 1970"],
    correct: 0
  },
  {
    q: "Le Kanaval national est avant tout une expression de quel domaine ?",
    options: ["Artisanat et art", "Religion et spiritualité", "Langue", "Fête et tradition"],
    correct: 3
  },
  {
    q: "Le Rara appartient à quel volet de la tradition haïtienne ?",
    options: ["Religion et spiritualité", "Fête et tradition", "Artisanat et art", "Vie sociale et coutumes"],
    correct: 1
  },
  {
    q: "Comment décrirait-on la nature du catholicisme en Haïti ?",
    options: ["Fête et tradition", "Danse et expression culturelle", "Religion et spiritualité", "Langue"],
    correct: 2
  },
  {
    q: "Comment décrirait-on la nature du drapo vodou ?",
    options: ["Danse et expression culturelle", "Religion et spiritualité", "Artisanat et art", "Fête et tradition"],
    correct: 2
  },
  {
    q: "Dans quelle catégorie situerait-on l'Académie créole prévue par l'article 213 ?",
    options: ["Danse et expression culturelle", "Religion et spiritualité", "Langue", "Vie sociale et coutumes"],
    correct: 2
  },
  {
    q: "Comment décrit-on précisément le catholicisme en Haïti ?",
    options: ["Religion la plus pratiquée du pays aux côtés du protestantisme et du vodou, souvent en syncrétisme avec ce dernier", "Seule langue officielle d'Haïti depuis 1918, durant l'occupation américaine, jusqu'à l'arrivée du créole à ce statut", "« L'Union fait la Force » figure sur les armoiries et symbolise l'unité forgée pendant la lutte pour l'indépendance", "Institution prévue par la Constitution de 1987 pour fixer et développer la langue créole"],
    correct: 0
  },
  {
    q: "Dans quelle catégorie situerait-on le 1er janvier, jour de l'indépendance ?",
    options: ["Vie sociale et coutumes", "Artisanat et art", "Religion et spiritualité", "Fête et tradition"],
    correct: 3
  },
  {
    q: "Quel repère temporel correspond au Banda, danse rituelle vodou ?",
    options: ["XIXe siècle", "Intemporel", "Années 1970", "XXe siècle"],
    correct: 1
  },
  {
    q: "À quelle époque rattache-t-on le Kanaval national ?",
    options: ["Années 1960", "Milieu XXe siècle", "Années 1940", "Intemporel"],
    correct: 3
  },
  {
    q: "Que faut-il savoir sur le Rara ?",
    options: ["Cérémonie vodou d'août 1791 considérée comme un moment fondateur de l'insurrection des esclaves", "On distingue traditionnellement le créole du Nord, du Centre et du Sud d'Haïti", "Costume traditionnel porté notamment lors des danses folkloriques et fêtes patriotiques", "Procession musicale de rue jouée pendant la période du Carême, mêlant percussions et trompettes en bambou"],
    correct: 3
  },
  {
    q: "À quelle région ou quel contexte associe-t-on le vèvè, symbole rituel du vodou ?",
    options: ["Arcahaie", "Zones rurales d'Haïti", "Croix-des-Bouquets", "National"],
    correct: 3
  },
  {
    q: "Quel est le fait vérifié concernant la tradition des pwovèb ayisyen (proverbes haïtiens) ?",
    options: ["Institution prévue par la Constitution de 1987 pour fixer et développer la langue créole", "Célébrée chaque 18 mai, en commémoration de la création du drapeau haïtien en 1803", "Carnaval réputé pour ses masques en papier mâché et ses costumes artisanaux élaborés", "Expressions populaires transmises oralement, très présentes dans la sagesse et l'éducation traditionnelles"],
    correct: 3
  },
  {
    q: "Quelle période historique est associée au Banda, danse rituelle vodou ?",
    options: ["XXe siècle", "Années 1940", "Intemporel", "Milieu XXe siècle"],
    correct: 2
  },
  {
    q: "Dans quelle catégorie situerait-on le Lakou ?",
    options: ["Artisanat et art", "Danse et expression culturelle", "Langue", "Vie sociale et coutumes"],
    correct: 3
  },
  {
    q: "Quel repère temporel correspond au houngan, prêtre du vodou ?",
    options: ["Années 1940", "Milieu XXe siècle", "Intemporel", "Années 1960"],
    correct: 2
  },
  {
    q: "La manbo, prêtresse du vodou appartient à quel volet de la tradition haïtienne ?",
    options: ["Danse et expression culturelle", "Langue", "Religion et spiritualité", "Fête et tradition"],
    correct: 2
  },
  {
    q: "À quel aspect de la culture haïtienne se rattache le Kanaval national ?",
    options: ["Langue", "Religion et spiritualité", "Vie sociale et coutumes", "Fête et tradition"],
    correct: 3
  },
  {
    q: "Quelle période historique est associée au Kanaval national ?",
    options: ["Révolution haïtienne", "Intemporel", "XXe siècle", "Époque contemporaine"],
    correct: 1
  },
  {
    q: "Comment classerait-on la Journée internationale du créole dans la culture haïtienne ?",
    options: ["Artisanat et art", "Danse et expression culturelle", "Religion et spiritualité", "Langue"],
    correct: 3
  },
  {
    q: "L'influence lexicale du créole haïtien appartient à quel volet de la tradition haïtienne ?",
    options: ["Langue", "Fête et tradition", "Vie sociale et coutumes", "Danse et expression culturelle"],
    correct: 0
  },
  {
    q: "Dans quelle catégorie situerait-on le vèvè, symbole rituel du vodou ?",
    options: ["Religion et spiritualité", "Langue", "Fête et tradition", "Artisanat et art"],
    correct: 0
  },
  {
    q: "La Fête du Drapeau trouve son origine à quelle période ?",
    options: ["XXe siècle", "Années 1970", "Intemporel", "XIXe siècle"],
    correct: 2
  },
  {
    q: "Quel repère temporel correspond à la mention du créole dans la Constitution de 1964 ?",
    options: ["Années 1940", "XIXe siècle", "Époque contemporaine", "Années 1960"],
    correct: 3
  },
  {
    q: "Depuis quand la cérémonie du Bois-Caïman fait-il/elle partie de la culture haïtienne ?",
    options: ["XXe siècle", "Années 1960", "Révolution haïtienne", "Intemporel"],
    correct: 2
  },
  {
    q: "À quelle époque rattache-t-on la tradition des pwovèb ayisyen (proverbes haïtiens) ?",
    options: ["XIXe siècle", "XXe siècle", "Milieu XXe siècle", "Intemporel"],
    correct: 3
  },
  {
    q: "Quel domaine de la vie culturelle haïtienne illustre le vodou haïtien ?",
    options: ["Fête et tradition", "Langue", "Religion et spiritualité", "Artisanat et art"],
    correct: 2
  },
  {
    q: "Quelle période historique est associée à la peinture naïve haïtienne ?",
    options: ["Intemporel", "Milieu XXe siècle", "Époque contemporaine", "Révolution haïtienne"],
    correct: 1
  },
  {
    q: "La cérémonie du Bois-Caïman est avant tout une expression de quel domaine ?",
    options: ["Danse et expression culturelle", "Artisanat et art", "Langue", "Religion et spiritualité"],
    correct: 3
  },
  {
    q: "Dans quelle catégorie situerait-on le Kanaval national ?",
    options: ["Fête et tradition", "Vie sociale et coutumes", "Langue", "Religion et spiritualité"],
    correct: 0
  },
  {
    q: "L'Académie créole prévue par l'article 213 relève principalement de quel domaine culturel ?",
    options: ["Religion et spiritualité", "Artisanat et art", "Danse et expression culturelle", "Langue"],
    correct: 3
  },
  {
    q: "Dans quel contexte géographique situe-t-on l'article 5 de la Constitution de 1987 ?",
    options: ["Port-au-Prince", "Port-au-Prince (itinérant)", "National", "Haïti"],
    correct: 2
  },
  {
    q: "Quel est le fait vérifié concernant le Rara ?",
    options: ["Fondé en 1944, ce centre a révélé de nombreux artistes fondateurs de la peinture naïve haïtienne", "Courant pictural né autour du Centre d'Art, mêlant scènes de vie quotidienne et imaginaire vodou", "Tissu à carreaux colorés utilisé dans la confection des tenues traditionnelles féminines", "Procession musicale de rue jouée pendant la période du Carême, mêlant percussions et trompettes en bambou"],
    correct: 3
  },
  {
    q: "Quel domaine de la vie culturelle haïtienne illustre la peinture naïve haïtienne ?",
    options: ["Artisanat et art", "Religion et spiritualité", "Danse et expression culturelle", "Vie sociale et coutumes"],
    correct: 0
  },
  {
    q: "À quel aspect de la culture haïtienne se rattache le houngan, prêtre du vodou ?",
    options: ["Danse et expression culturelle", "Religion et spiritualité", "Vie sociale et coutumes", "Fête et tradition"],
    correct: 1
  },
  {
    q: "Que faut-il savoir sur la peinture naïve haïtienne ?",
    options: ["Courant pictural né autour du Centre d'Art, mêlant scènes de vie quotidienne et imaginaire vodou", "Seule langue officielle d'Haïti depuis 1918, durant l'occupation américaine, jusqu'à l'arrivée du créole à ce statut", "Tissu à carreaux colorés utilisé dans la confection des tenues traditionnelles féminines", "Officiant masculin qui dirige les cérémonies et rituels du culte vodou"],
    correct: 0
  },
  {
    q: "Quel domaine de la vie culturelle haïtienne illustre le Centre d'Art de Port-au-Prince ?",
    options: ["Langue", "Vie sociale et coutumes", "Fête et tradition", "Artisanat et art"],
    correct: 3
  },
  {
    q: "Où la mention du créole dans la Constitution de 1964 est-il/elle particulièrement présent(e) ou pratiqué(e) ?",
    options: ["Zones rurales d'Haïti", "Croix-des-Bouquets", "National", "Haïti"],
    correct: 2
  },
  {
    q: "Comment décrit-on précisément la peinture naïve haïtienne ?",
    options: ["Forteresse classée à l'UNESCO, symbole de la résistance et de la fierté nationale haïtienne", "Courant pictural né autour du Centre d'Art, mêlant scènes de vie quotidienne et imaginaire vodou", "Danse cérémonielle vodou caractérisée par des mouvements ondulants du dos et des épaules", "Danse associée aux esprits Gede, marquée par des mouvements de bassin très expressifs"],
    correct: 1
  },
  {
    q: "La variation dialectale du créole haïtien remonte à quelle époque de l'histoire d'Haïti ?",
    options: ["Années 1970", "Intemporel", "Années 1940", "Milieu XXe siècle"],
    correct: 1
  },
  {
    q: "Depuis quand le statut du français avant 1987 fait-il/elle partie de la culture haïtienne ?",
    options: ["Années 1940", "Époque contemporaine", "XXe siècle", "Années 1970"],
    correct: 2
  },
  {
    q: "Quelle affirmation décrit le mieux la reconnaissance du vodou comme religion ?",
    options: ["Institution prévue par la Constitution de 1987 pour fixer et développer la langue créole", "Rassemblement communautaire organisé après un décès, mêlant prières, chants et souvenirs du défunt", "Le vodou est officiellement reconnu comme religion en Haïti depuis le début des années 2000", "Forme traditionnelle d'entraide agricole où les paysans travaillent collectivement la terre"],
    correct: 2
  },
  {
    q: "Quelle description correspond fidèlement au madras, tissu traditionnel ?",
    options: ["Tissu à carreaux colorés utilisé dans la confection des tenues traditionnelles féminines", "Créole à base lexicale française parlé par environ onze millions de personnes en Haïti", "Courant pictural né autour du Centre d'Art, mêlant scènes de vie quotidienne et imaginaire vodou", "Religion syncrétique mêlant croyances ouest-africaines et éléments catholiques, pratiquée par une large partie de la population"],
    correct: 0
  },
  {
    q: "Qu'est-ce qui définit dézafi, premier roman en créole haïtien avec exactitude ?",
    options: ["Créole à base lexicale française parlé par environ onze millions de personnes en Haïti", "Courant pictural né autour du Centre d'Art, mêlant scènes de vie quotidienne et imaginaire vodou", "Danse associée aux esprits Gede, marquée par des mouvements de bassin très expressifs", "Ce roman de Frankétienne, publié en 1975, est considéré comme le tout premier roman écrit en créole haïtien"],
    correct: 3
  },
  {
    q: "Dans quel contexte géographique situe-t-on la Veye, veillée funéraire haïtienne ?",
    options: ["Port-au-Prince (itinérant)", "Arcahaie", "Port-au-Prince", "National"],
    correct: 3
  },
  {
    q: "Dans quel contexte géographique situe-t-on l'influence lexicale du créole haïtien ?",
    options: ["Port-au-Prince (itinérant)", "National", "Milot (Nord)", "Arcahaie"],
    correct: 1
  },
  {
    q: "Où le madras, tissu traditionnel est-il/elle particulièrement présent(e) ou pratiqué(e) ?",
    options: ["Port-au-Prince", "Jacmel", "National", "Milot (Nord)"],
    correct: 2
  },
  {
    q: "Quelle description correspond fidèlement à l'ason, hochet sacré du vodou ?",
    options: ["Espace commun regroupant plusieurs habitations d'une même famille élargie, cœur de la vie sociale rurale", "Tradition orale populaire mettant en scène deux personnages complices et rivaux dans la sagesse paysanne", "On distingue traditionnellement le créole du Nord, du Centre et du Sud d'Haïti", "Instrument rituel en forme de calebasse ornée de perles, symbole d'autorité spirituelle du prêtre ou de la prêtresse"],
    correct: 3
  },
  {
    q: "Quel repère temporel correspond au 1er janvier, jour de l'indépendance ?",
    options: ["Années 1970", "XXe siècle", "Milieu XXe siècle", "Intemporel"],
    correct: 3
  },
  {
    q: "Où le Yanvalou, danse rituelle vodou est-il/elle particulièrement présent(e) ou pratiqué(e) ?",
    options: ["Milot (Nord)", "National", "Jacmel", "Haïti"],
    correct: 1
  },
  {
    q: "Qu'est-ce qui définit le tap-tap, transport en commun peint avec exactitude ?",
    options: ["Camionnette ou bus coloré, richement décoré de motifs religieux et populaires, servant de transport collectif", "Célébrée chaque 28 octobre depuis son instauration en 1981 à l'initiative de la Dominique", "Tradition orale populaire mettant en scène deux personnages complices et rivaux dans la sagesse paysanne", "Officiante féminine occupant un rôle spirituel équivalent à celui du houngan"],
    correct: 0
  },
  {
    q: "La co-officialisation du créole et du français appartient à quel volet de la tradition haïtienne ?",
    options: ["Religion et spiritualité", "Fête et tradition", "Danse et expression culturelle", "Langue"],
    correct: 3
  },
  {
    q: "Quel est le fait vérifié concernant le 1er janvier, jour de l'indépendance ?",
    options: ["Fête nationale commémorant la proclamation de l'indépendance d'Haïti en 1804", "Célébration vodou du début du mois de novembre honorant les esprits des morts", "Le vodou est officiellement reconnu comme religion en Haïti depuis le début des années 2000", "Dessin tracé au sol, souvent à la farine ou à la cendre, représentant un esprit lors des cérémonies"],
    correct: 0
  },
  {
    q: "L'influence lexicale du créole haïtien remonte à quelle époque de l'histoire d'Haïti ?",
    options: ["Époque contemporaine", "XXe siècle", "Intemporel", "Années 1940"],
    correct: 2
  },
  {
    q: "Quelle période historique est associée à la Méringue de salon ?",
    options: ["Révolution haïtienne", "Intemporel", "Années 1940", "XIXe siècle"],
    correct: 3
  },
  {
    q: "La manbo, prêtresse du vodou trouve son origine à quelle période ?",
    options: ["Intemporel", "XXe siècle", "Révolution haïtienne", "Époque contemporaine"],
    correct: 0
  },
  {
    q: "Le tap-tap, transport en commun peint remonte à quelle époque de l'histoire d'Haïti ?",
    options: ["Années 1970", "Intemporel", "XIXe siècle", "Années 1960"],
    correct: 1
  },
  {
    q: "À quelle région ou quel contexte associe-t-on la karabela, tenue traditionnelle ?",
    options: ["Arcahaie", "Croix-des-Bouquets", "Haïti", "National"],
    correct: 3
  },
  {
    q: "Quel domaine de la vie culturelle haïtienne illustre le statut du français avant 1987 ?",
    options: ["Danse et expression culturelle", "Langue", "Artisanat et art", "Fête et tradition"],
    correct: 1
  },
  {
    q: "Où le statut du français avant 1987 est-il/elle particulièrement présent(e) ou pratiqué(e) ?",
    options: ["Haïti", "Nord d'Haïti", "National", "Croix-des-Bouquets"],
    correct: 2
  },
  {
    q: "Comment classerait-on la manbo, prêtresse du vodou dans la culture haïtienne ?",
    options: ["Fête et tradition", "Vie sociale et coutumes", "Artisanat et art", "Religion et spiritualité"],
    correct: 3
  },
  {
    q: "Quelle description correspond fidèlement à la Veye, veillée funéraire haïtienne ?",
    options: ["Rassemblement communautaire organisé après un décès, mêlant prières, chants et souvenirs du défunt", "Actée par la Constitution de mars 1987, qui fait du créole une langue officielle à égalité avec le français", "Célébration vodou du début du mois de novembre honorant les esprits des morts", "Célébrée chaque 18 mai, en commémoration de la création du drapeau haïtien en 1803"],
    correct: 0
  },
  {
    q: "Comment décrirait-on la nature de la manbo, prêtresse du vodou ?",
    options: ["Vie sociale et coutumes", "Langue", "Religion et spiritualité", "Fête et tradition"],
    correct: 2
  },
  {
    q: "La karabela, tenue traditionnelle est avant tout une expression de quel domaine ?",
    options: ["Fête et tradition", "Langue", "Religion et spiritualité", "Artisanat et art"],
    correct: 3
  },
  {
    q: "Dans quel contexte géographique situe-t-on le vodou haïtien ?",
    options: ["Milot (Nord)", "National", "Arcahaie", "Port-au-Prince"],
    correct: 1
  },
  {
    q: "Quel repère temporel correspond à l'influence lexicale du créole haïtien ?",
    options: ["Intemporel", "Années 1970", "Années 1940", "Époque contemporaine"],
    correct: 0
  },
  {
    q: "Le Banda, danse rituelle vodou remonte à quelle époque de l'histoire d'Haïti ?",
    options: ["Intemporel", "Époque contemporaine", "Années 1940", "Années 1960"],
    correct: 0
  },
  {
    q: "Le Lakou appartient à quel volet de la tradition haïtienne ?",
    options: ["Langue", "Vie sociale et coutumes", "Fête et tradition", "Artisanat et art"],
    correct: 1
  },
  {
    q: "Comment décrit-on précisément le créole haïtien ?",
    options: ["Créole à base lexicale française parlé par environ onze millions de personnes en Haïti", "Officiant masculin qui dirige les cérémonies et rituels du culte vodou", "Grande fête populaire précédant le Mercredi des Cendres, rythmée par les orchestres de konpa", "On distingue traditionnellement le créole du Nord, du Centre et du Sud d'Haïti"],
    correct: 0
  },
  {
    q: "À quelle époque rattache-t-on le statut du français avant 1987 ?",
    options: ["Années 1960", "XXe siècle", "Intemporel", "Années 1940"],
    correct: 1
  },
  {
    q: "Depuis quand la Journée internationale du créole fait-il/elle partie de la culture haïtienne ?",
    options: ["XXe siècle", "Intemporel", "Époque contemporaine", "Milieu XXe siècle"],
    correct: 2
  },
  {
    q: "Quel domaine de la vie culturelle haïtienne illustre le vèvè, symbole rituel du vodou ?",
    options: ["Danse et expression culturelle", "Langue", "Religion et spiritualité", "Fête et tradition"],
    correct: 2
  },
  {
    q: "Quelle affirmation décrit le mieux la manbo, prêtresse du vodou ?",
    options: ["« L'Union fait la Force » figure sur les armoiries et symbolise l'unité forgée pendant la lutte pour l'indépendance", "Fête nationale commémorant la proclamation de l'indépendance d'Haïti en 1804", "Officiante féminine occupant un rôle spirituel équivalent à celui du houngan", "Costume traditionnel porté notamment lors des danses folkloriques et fêtes patriotiques"],
    correct: 2
  },
  {
    q: "La peinture naïve haïtienne est surtout ancré(e) dans quelle région d'Haïti ?",
    options: ["Zones rurales d'Haïti", "Port-au-Prince", "National", "International"],
    correct: 1
  },
  {
    q: "Quel lieu est le plus étroitement lié à l'Académie créole prévue par l'article 213 ?",
    options: ["International", "National", "Jacmel", "Milot (Nord)"],
    correct: 1
  },
  {
    q: "Où la reconnaissance du vodou comme religion est-il/elle particulièrement présent(e) ou pratiqué(e) ?",
    options: ["Haïti", "Zones rurales d'Haïti", "National", "Croix-des-Bouquets"],
    correct: 0
  },
  {
    q: "Comment décrirait-on la nature du houngan, prêtre du vodou ?",
    options: ["Langue", "Danse et expression culturelle", "Religion et spiritualité", "Artisanat et art"],
    correct: 2
  },
  {
    q: "Le Banda, danse rituelle vodou relève principalement de quel domaine culturel ?",
    options: ["Danse et expression culturelle", "Fête et tradition", "Langue", "Religion et spiritualité"],
    correct: 0
  },
  {
    q: "À quelle époque rattache-t-on le Centre d'Art de Port-au-Prince ?",
    options: ["Années 1940", "Époque contemporaine", "XIXe siècle", "Intemporel"],
    correct: 0
  },
  {
    q: "Dans quelle catégorie situerait-on le drapeau haïtien ?",
    options: ["Fête et tradition", "Vie sociale et coutumes", "Danse et expression culturelle", "Artisanat et art"],
    correct: 1
  },
  {
    q: "Dans quel contexte géographique situe-t-on la co-officialisation du créole et du français ?",
    options: ["National", "Port-au-Prince", "Croix-des-Bouquets", "International"],
    correct: 0
  },
  {
    q: "Que faut-il savoir sur le drapeau haïtien ?",
    options: ["Procession musicale de rue jouée pendant la période du Carême, mêlant percussions et trompettes en bambou", "Le créole tire l'essentiel de son vocabulaire du français, avec des apports africains, taïnos et espagnols", "Créé en 1803 lors du congrès de l'Arcahaie à partir du drapeau tricolore français dont la bande blanche fut retirée", "Officiant masculin qui dirige les cérémonies et rituels du culte vodou"],
    correct: 2
  },
  {
    q: "À quel aspect de la culture haïtienne se rattache le Rara ?",
    options: ["Langue", "Religion et spiritualité", "Fête et tradition", "Danse et expression culturelle"],
    correct: 2
  },
  {
    q: "Quel domaine de la vie culturelle haïtienne illustre le drapeau haïtien ?",
    options: ["Religion et spiritualité", "Fête et tradition", "Vie sociale et coutumes", "Danse et expression culturelle"],
    correct: 2
  },
  {
    q: "Le drapo vodou relève principalement de quel domaine culturel ?",
    options: ["Danse et expression culturelle", "Religion et spiritualité", "Fête et tradition", "Artisanat et art"],
    correct: 3
  },
  {
    q: "Quelle période historique est associée à la Citadelle Laferrière, symbole culturel ?",
    options: ["Révolution haïtienne", "XIXe siècle", "Années 1970", "Milieu XXe siècle"],
    correct: 1
  },
  {
    q: "Le Carnaval de Jacmel relève principalement de quel domaine culturel ?",
    options: ["Artisanat et art", "Langue", "Danse et expression culturelle", "Fête et tradition"],
    correct: 3
  },
  {
    q: "La mention du créole dans la Constitution de 1964 appartient à quel volet de la tradition haïtienne ?",
    options: ["Religion et spiritualité", "Fête et tradition", "Langue", "Danse et expression culturelle"],
    correct: 2
  },
  {
    q: "À quelle époque rattache-t-on l'article 5 de la Constitution de 1987 ?",
    options: ["Intemporel", "Époque contemporaine", "Milieu XXe siècle", "Révolution haïtienne"],
    correct: 1
  },
  {
    q: "Le Lakou est surtout ancré(e) dans quelle région d'Haïti ?",
    options: ["Nord d'Haïti", "Port-au-Prince", "Zones rurales d'Haïti", "Jacmel"],
    correct: 2
  },
  {
    q: "Dans quel contexte géographique situe-t-on le Lakou ?",
    options: ["Jacmel", "Haïti", "Port-au-Prince", "Zones rurales d'Haïti"],
    correct: 3
  },
  {
    q: "À quel aspect de la culture haïtienne se rattache la karabela, tenue traditionnelle ?",
    options: ["Vie sociale et coutumes", "Artisanat et art", "Langue", "Danse et expression culturelle"],
    correct: 1
  },
  {
    q: "Comment décrirait-on la nature du drapeau haïtien ?",
    options: ["Religion et spiritualité", "Langue", "Vie sociale et coutumes", "Fête et tradition"],
    correct: 2
  },
  {
    q: "Le vodou haïtien est avant tout une expression de quel domaine ?",
    options: ["Danse et expression culturelle", "Fête et tradition", "Vie sociale et coutumes", "Religion et spiritualité"],
    correct: 3
  },
  {
    q: "Quelle description correspond fidèlement au drapeau haïtien ?",
    options: ["Grande fête populaire précédant le Mercredi des Cendres, rythmée par les orchestres de konpa", "Première mention du créole dans un texte constitutionnel haïtien, avant sa pleine officialisation en 1987", "Créé en 1803 lors du congrès de l'Arcahaie à partir du drapeau tricolore français dont la bande blanche fut retirée", "Célébration vodou du début du mois de novembre honorant les esprits des morts"],
    correct: 2
  },
  {
    q: "Qu'est-ce qui définit le Kanaval national avec exactitude ?",
    options: ["Grande fête populaire précédant le Mercredi des Cendres, rythmée par les orchestres de konpa", "Danse cérémonielle vodou caractérisée par des mouvements ondulants du dos et des épaules", "Le créole tire l'essentiel de son vocabulaire du français, avec des apports africains, taïnos et espagnols", "Forme traditionnelle d'entraide agricole où les paysans travaillent collectivement la terre"],
    correct: 0
  },
  {
    q: "Quelle affirmation décrit le mieux le tap-tap, transport en commun peint ?",
    options: ["Tradition orale populaire mettant en scène deux personnages complices et rivaux dans la sagesse paysanne", "Religion syncrétique mêlant croyances ouest-africaines et éléments catholiques, pratiquée par une large partie de la population", "Tissu à carreaux colorés utilisé dans la confection des tenues traditionnelles féminines", "Camionnette ou bus coloré, richement décoré de motifs religieux et populaires, servant de transport collectif"],
    correct: 3
  },
  {
    q: "La Citadelle Laferrière, symbole culturel relève principalement de quel domaine culturel ?",
    options: ["Artisanat et art", "Fête et tradition", "Religion et spiritualité", "Danse et expression culturelle"],
    correct: 0
  },
  {
    q: "La cérémonie du Bois-Caïman trouve son origine à quelle période ?",
    options: ["Révolution haïtienne", "Années 1940", "Intemporel", "Époque contemporaine"],
    correct: 0
  },
  {
    q: "Dans quelle catégorie situerait-on la devise nationale d'Haïti ?",
    options: ["Fête et tradition", "Artisanat et art", "Vie sociale et coutumes", "Religion et spiritualité"],
    correct: 2
  },
  {
    q: "À quelle région ou quel contexte associe-t-on le drapeau haïtien ?",
    options: ["Milot (Nord)", "Jacmel", "Arcahaie", "Zones rurales d'Haïti"],
    correct: 2
  },
  {
    q: "Dans quel contexte géographique situe-t-on la tradition des pwovèb ayisyen (proverbes haïtiens) ?",
    options: ["International", "Arcahaie", "National", "Zones rurales d'Haïti"],
    correct: 2
  },
  {
    q: "La Fête Gede est avant tout une expression de quel domaine ?",
    options: ["Religion et spiritualité", "Langue", "Artisanat et art", "Danse et expression culturelle"],
    correct: 0
  },
  {
    q: "Dans quelle catégorie situerait-on la mention du créole dans la Constitution de 1964 ?",
    options: ["Religion et spiritualité", "Artisanat et art", "Langue", "Danse et expression culturelle"],
    correct: 2
  },
  {
    q: "Comment classerait-on le fer découpé de la Croix-des-Bouquets dans la culture haïtienne ?",
    options: ["Religion et spiritualité", "Langue", "Artisanat et art", "Danse et expression culturelle"],
    correct: 2
  },
  {
    q: "Quel repère temporel correspond à la devise nationale d'Haïti ?",
    options: ["Époque contemporaine", "Milieu XXe siècle", "Révolution haïtienne", "XIXe siècle"],
    correct: 2
  },
  {
    q: "La tradition des pwovèb ayisyen (proverbes haïtiens) est avant tout une expression de quel domaine ?",
    options: ["Danse et expression culturelle", "Vie sociale et coutumes", "Religion et spiritualité", "Artisanat et art"],
    correct: 1
  },
  {
    q: "Comment classerait-on la Fête Gede dans la culture haïtienne ?",
    options: ["Langue", "Religion et spiritualité", "Danse et expression culturelle", "Artisanat et art"],
    correct: 1
  },
  {
    q: "Qu'est-ce qui définit le madras, tissu traditionnel avec exactitude ?",
    options: ["Le vodou est officiellement reconnu comme religion en Haïti depuis le début des années 2000", "Religion la plus pratiquée du pays aux côtés du protestantisme et du vodou, souvent en syncrétisme avec ce dernier", "Tissu à carreaux colorés utilisé dans la confection des tenues traditionnelles féminines", "Grande fête populaire précédant le Mercredi des Cendres, rythmée par les orchestres de konpa"],
    correct: 2
  },
  {
    q: "Quelle description correspond fidèlement à la Fête du Drapeau ?",
    options: ["Officiant masculin qui dirige les cérémonies et rituels du culte vodou", "Célébrée chaque 18 mai, en commémoration de la création du drapeau haïtien en 1803", "Art du métal martelé et découpé, né dans cette commune devenue capitale haïtienne de cet artisanat", "Première mention du créole dans un texte constitutionnel haïtien, avant sa pleine officialisation en 1987"],
    correct: 1
  },
  {
    q: "Quelle affirmation décrit le mieux la Fête Gede ?",
    options: ["« L'Union fait la Force » figure sur les armoiries et symbolise l'unité forgée pendant la lutte pour l'indépendance", "Courant pictural né autour du Centre d'Art, mêlant scènes de vie quotidienne et imaginaire vodou", "Célébration vodou du début du mois de novembre honorant les esprits des morts", "Forteresse classée à l'UNESCO, symbole de la résistance et de la fierté nationale haïtienne"],
    correct: 2
  },
  {
    q: "Quel lieu est le plus étroitement lié à la Fête du Drapeau ?",
    options: ["National", "Zones rurales d'Haïti", "Nord d'Haïti", "International"],
    correct: 0
  },
  {
    q: "La mention du créole dans la Constitution de 1964 trouve son origine à quelle période ?",
    options: ["Révolution haïtienne", "Époque contemporaine", "XIXe siècle", "Années 1960"],
    correct: 3
  },
  {
    q: "Quel repère temporel correspond à la manbo, prêtresse du vodou ?",
    options: ["XXe siècle", "Intemporel", "Années 1940", "Années 1960"],
    correct: 1
  },
  {
    q: "À quelle époque rattache-t-on le tap-tap, transport en commun peint ?",
    options: ["Intemporel", "Époque contemporaine", "XXe siècle", "Années 1940"],
    correct: 0
  },
  {
    q: "Comment décrit-on précisément la Citadelle Laferrière, symbole culturel ?",
    options: ["Rassemblement communautaire organisé après un décès, mêlant prières, chants et souvenirs du défunt", "Première mention du créole dans un texte constitutionnel haïtien, avant sa pleine officialisation en 1987", "Créole à base lexicale française parlé par environ onze millions de personnes en Haïti", "Forteresse classée à l'UNESCO, symbole de la résistance et de la fierté nationale haïtienne"],
    correct: 3
  },
  {
    q: "Quel lieu est le plus étroitement lié au catholicisme en Haïti ?",
    options: ["Arcahaie", "Croix-des-Bouquets", "Port-au-Prince", "National"],
    correct: 3
  },
  {
    q: "Comment classerait-on le Carnaval de Jacmel dans la culture haïtienne ?",
    options: ["Vie sociale et coutumes", "Danse et expression culturelle", "Fête et tradition", "Religion et spiritualité"],
    correct: 2
  },
  {
    q: "Quelle affirmation décrit le mieux la tradition des pwovèb ayisyen (proverbes haïtiens) ?",
    options: ["Fête nationale commémorant la proclamation de l'indépendance d'Haïti en 1804", "Expressions populaires transmises oralement, très présentes dans la sagesse et l'éducation traditionnelles", "Drapeau cérémoniel richement brodé de perles et de sequins représentant un esprit du vodou", "Célébrée chaque 28 octobre depuis son instauration en 1981 à l'initiative de la Dominique"],
    correct: 1
  },
  {
    q: "Depuis quand le houngan, prêtre du vodou fait-il/elle partie de la culture haïtienne ?",
    options: ["Années 1940", "Intemporel", "Révolution haïtienne", "XXe siècle"],
    correct: 1
  },
  {
    q: "Comment classerait-on le madras, tissu traditionnel dans la culture haïtienne ?",
    options: ["Langue", "Religion et spiritualité", "Artisanat et art", "Danse et expression culturelle"],
    correct: 2
  },
  {
    q: "La tradition des contes de Bouki et Malice appartient à quel volet de la tradition haïtienne ?",
    options: ["Danse et expression culturelle", "Langue", "Vie sociale et coutumes", "Fête et tradition"],
    correct: 2
  },
  {
    q: "Dans quelle catégorie situerait-on l'article 5 de la Constitution de 1987 ?",
    options: ["Langue", "Fête et tradition", "Artisanat et art", "Danse et expression culturelle"],
    correct: 0
  },
  {
    q: "Quelle description correspond fidèlement au vèvè, symbole rituel du vodou ?",
    options: ["Dessin tracé au sol, souvent à la farine ou à la cendre, représentant un esprit lors des cérémonies", "Célébrée chaque 28 octobre depuis son instauration en 1981 à l'initiative de la Dominique", "Carnaval réputé pour ses masques en papier mâché et ses costumes artisanaux élaborés", "Tradition orale populaire mettant en scène deux personnages complices et rivaux dans la sagesse paysanne"],
    correct: 0
  },
  {
    q: "Que faut-il savoir sur le vèvè, symbole rituel du vodou ?",
    options: ["Fondé en 1944, ce centre a révélé de nombreux artistes fondateurs de la peinture naïve haïtienne", "Créé en 1803 lors du congrès de l'Arcahaie à partir du drapeau tricolore français dont la bande blanche fut retirée", "Art du métal martelé et découpé, né dans cette commune devenue capitale haïtienne de cet artisanat", "Dessin tracé au sol, souvent à la farine ou à la cendre, représentant un esprit lors des cérémonies"],
    correct: 3
  },
  {
    q: "La devise nationale d'Haïti est avant tout une expression de quel domaine ?",
    options: ["Fête et tradition", "Vie sociale et coutumes", "Danse et expression culturelle", "Artisanat et art"],
    correct: 1
  },
  {
    q: "Quelle affirmation décrit le mieux le catholicisme en Haïti ?",
    options: ["Religion la plus pratiquée du pays aux côtés du protestantisme et du vodou, souvent en syncrétisme avec ce dernier", "Procession musicale de rue jouée pendant la période du Carême, mêlant percussions et trompettes en bambou", "Danse cérémonielle vodou caractérisée par des mouvements ondulants du dos et des épaules", "Officiant masculin qui dirige les cérémonies et rituels du culte vodou"],
    correct: 0
  },
  {
    q: "Depuis quand le fer découpé de la Croix-des-Bouquets fait-il/elle partie de la culture haïtienne ?",
    options: ["Époque contemporaine", "Milieu XXe siècle", "XXe siècle", "Intemporel"],
    correct: 2
  },
  {
    q: "Quel repère temporel correspond au madras, tissu traditionnel ?",
    options: ["Intemporel", "Années 1970", "Révolution haïtienne", "Milieu XXe siècle"],
    correct: 0
  },
  {
    q: "Comment décrirait-on la nature du tap-tap, transport en commun peint ?",
    options: ["Langue", "Religion et spiritualité", "Artisanat et art", "Fête et tradition"],
    correct: 2
  },
  {
    q: "Comment décrit-on précisément la devise nationale d'Haïti ?",
    options: ["« L'Union fait la Force » figure sur les armoiries et symbolise l'unité forgée pendant la lutte pour l'indépendance", "Forteresse classée à l'UNESCO, symbole de la résistance et de la fierté nationale haïtienne", "Art du métal martelé et découpé, né dans cette commune devenue capitale haïtienne de cet artisanat", "Officiant masculin qui dirige les cérémonies et rituels du culte vodou"],
    correct: 0
  },
  {
    q: "À quelle région ou quel contexte associe-t-on le drapo vodou ?",
    options: ["Port-au-Prince", "Zones rurales d'Haïti", "Croix-des-Bouquets", "National"],
    correct: 3
  },
  {
    q: "Le Banda, danse rituelle vodou trouve son origine à quelle période ?",
    options: ["XXe siècle", "Années 1960", "Intemporel", "Époque contemporaine"],
    correct: 2
  },
  {
    q: "Quel lieu est le plus étroitement lié au Centre d'Art de Port-au-Prince ?",
    options: ["Croix-des-Bouquets", "Port-au-Prince", "National", "Zones rurales d'Haïti"],
    correct: 1
  },
  {
    q: "L'ason, hochet sacré du vodou est avant tout une expression de quel domaine ?",
    options: ["Vie sociale et coutumes", "Religion et spiritualité", "Artisanat et art", "Fête et tradition"],
    correct: 1
  },
  {
    q: "Comment décrit-on précisément la co-officialisation du créole et du français ?",
    options: ["Dessin tracé au sol, souvent à la farine ou à la cendre, représentant un esprit lors des cérémonies", "Le créole tire l'essentiel de son vocabulaire du français, avec des apports africains, taïnos et espagnols", "Courant pictural né autour du Centre d'Art, mêlant scènes de vie quotidienne et imaginaire vodou", "Actée par la Constitution de mars 1987, qui fait du créole une langue officielle à égalité avec le français"],
    correct: 3
  },
  {
    q: "Dans quelle catégorie situerait-on la Veye, veillée funéraire haïtienne ?",
    options: ["Fête et tradition", "Artisanat et art", "Religion et spiritualité", "Vie sociale et coutumes"],
    correct: 3
  },
  {
    q: "La Citadelle Laferrière, symbole culturel appartient à quel volet de la tradition haïtienne ?",
    options: ["Artisanat et art", "Religion et spiritualité", "Fête et tradition", "Vie sociale et coutumes"],
    correct: 0
  },
  {
    q: "Quel domaine de la vie culturelle haïtienne illustre le 1er janvier, jour de l'indépendance ?",
    options: ["Vie sociale et coutumes", "Langue", "Artisanat et art", "Fête et tradition"],
    correct: 3
  },
  {
    q: "Quelle description correspond fidèlement à dézafi, premier roman en créole haïtien ?",
    options: ["Fête nationale commémorant la proclamation de l'indépendance d'Haïti en 1804", "Cérémonie vodou d'août 1791 considérée comme un moment fondateur de l'insurrection des esclaves", "Rassemblement communautaire organisé après un décès, mêlant prières, chants et souvenirs du défunt", "Ce roman de Frankétienne, publié en 1975, est considéré comme le tout premier roman écrit en créole haïtien"],
    correct: 3
  },
  {
    q: "Que faut-il savoir sur le catholicisme en Haïti ?",
    options: ["Religion la plus pratiquée du pays aux côtés du protestantisme et du vodou, souvent en syncrétisme avec ce dernier", "Espace commun regroupant plusieurs habitations d'une même famille élargie, cœur de la vie sociale rurale", "Cérémonie vodou d'août 1791 considérée comme un moment fondateur de l'insurrection des esclaves", "Officiante féminine occupant un rôle spirituel équivalent à celui du houngan"],
    correct: 0
  },
  {
    q: "Quel est le fait vérifié concernant le drapeau haïtien ?",
    options: ["« L'Union fait la Force » figure sur les armoiries et symbolise l'unité forgée pendant la lutte pour l'indépendance", "Célébration vodou du début du mois de novembre honorant les esprits des morts", "Créé en 1803 lors du congrès de l'Arcahaie à partir du drapeau tricolore français dont la bande blanche fut retirée", "Dessin tracé au sol, souvent à la farine ou à la cendre, représentant un esprit lors des cérémonies"],
    correct: 2
  },
  {
    q: "Qu'est-ce qui définit la peinture naïve haïtienne avec exactitude ?",
    options: ["Courant pictural né autour du Centre d'Art, mêlant scènes de vie quotidienne et imaginaire vodou", "Seule langue officielle d'Haïti depuis 1918, durant l'occupation américaine, jusqu'à l'arrivée du créole à ce statut", "Costume traditionnel porté notamment lors des danses folkloriques et fêtes patriotiques", "Première mention du créole dans un texte constitutionnel haïtien, avant sa pleine officialisation en 1987"],
    correct: 0
  },
  {
    q: "Dans quelle catégorie situerait-on la tradition des contes de Bouki et Malice ?",
    options: ["Danse et expression culturelle", "Artisanat et art", "Religion et spiritualité", "Vie sociale et coutumes"],
    correct: 3
  },
  {
    q: "Comment classerait-on la Méringue de salon dans la culture haïtienne ?",
    options: ["Vie sociale et coutumes", "Artisanat et art", "Fête et tradition", "Danse et expression culturelle"],
    correct: 3
  },
  {
    q: "Quel lieu est le plus étroitement lié à l'ason, hochet sacré du vodou ?",
    options: ["National", "Zones rurales d'Haïti", "Jacmel", "Croix-des-Bouquets"],
    correct: 0
  },
  {
    q: "À quelle région ou quel contexte associe-t-on le Lakou ?",
    options: ["Milot (Nord)", "Jacmel", "Arcahaie", "Zones rurales d'Haïti"],
    correct: 3
  },
  {
    q: "Comment décrit-on précisément l'article 5 de la Constitution de 1987 ?",
    options: ["« L'Union fait la Force » figure sur les armoiries et symbolise l'unité forgée pendant la lutte pour l'indépendance", "Cet article proclame que tous les Haïtiens sont unis par une langue commune, le créole", "Rassemblement communautaire organisé après un décès, mêlant prières, chants et souvenirs du défunt", "Créole à base lexicale française parlé par environ onze millions de personnes en Haïti"],
    correct: 1
  },
  {
    q: "Dans quel contexte géographique situe-t-on le Centre d'Art de Port-au-Prince ?",
    options: ["Port-au-Prince", "Zones rurales d'Haïti", "Jacmel", "Milot (Nord)"],
    correct: 0
  },
  {
    q: "Où le tap-tap, transport en commun peint est-il/elle particulièrement présent(e) ou pratiqué(e) ?",
    options: ["National", "Milot (Nord)", "Zones rurales d'Haïti", "Jacmel"],
    correct: 0
  },
  {
    q: "Dans quel contexte géographique situe-t-on le fer découpé de la Croix-des-Bouquets ?",
    options: ["Croix-des-Bouquets", "Milot (Nord)", "National", "Haïti"],
    correct: 0
  },
  {
    q: "Que faut-il savoir sur le Lakou ?",
    options: ["Institution prévue par la Constitution de 1987 pour fixer et développer la langue créole", "Cérémonie vodou d'août 1791 considérée comme un moment fondateur de l'insurrection des esclaves", "Espace commun regroupant plusieurs habitations d'une même famille élargie, cœur de la vie sociale rurale", "Forteresse classée à l'UNESCO, symbole de la résistance et de la fierté nationale haïtienne"],
    correct: 2
  },
  {
    q: "Comment décrirait-on la nature du madras, tissu traditionnel ?",
    options: ["Fête et tradition", "Religion et spiritualité", "Artisanat et art", "Vie sociale et coutumes"],
    correct: 2
  },
  {
    q: "Le vèvè, symbole rituel du vodou est surtout ancré(e) dans quelle région d'Haïti ?",
    options: ["Zones rurales d'Haïti", "Arcahaie", "National", "Port-au-Prince (itinérant)"],
    correct: 2
  },
  {
    q: "Comment décrit-on précisément le vèvè, symbole rituel du vodou ?",
    options: ["Forteresse classée à l'UNESCO, symbole de la résistance et de la fierté nationale haïtienne", "Dessin tracé au sol, souvent à la farine ou à la cendre, représentant un esprit lors des cérémonies", "Cet article proclame que tous les Haïtiens sont unis par une langue commune, le créole", "Célébration vodou du début du mois de novembre honorant les esprits des morts"],
    correct: 1
  },
  {
    q: "Quelle description correspond fidèlement au tap-tap, transport en commun peint ?",
    options: ["Danse associée aux esprits Gede, marquée par des mouvements de bassin très expressifs", "Camionnette ou bus coloré, richement décoré de motifs religieux et populaires, servant de transport collectif", "Courant pictural né autour du Centre d'Art, mêlant scènes de vie quotidienne et imaginaire vodou", "Procession musicale de rue jouée pendant la période du Carême, mêlant percussions et trompettes en bambou"],
    correct: 1
  },
  {
    q: "Quelle affirmation décrit le mieux le Lakou ?",
    options: ["Religion syncrétique mêlant croyances ouest-africaines et éléments catholiques, pratiquée par une large partie de la population", "Espace commun regroupant plusieurs habitations d'une même famille élargie, cœur de la vie sociale rurale", "Costume traditionnel porté notamment lors des danses folkloriques et fêtes patriotiques", "Fondé en 1944, ce centre a révélé de nombreux artistes fondateurs de la peinture naïve haïtienne"],
    correct: 1
  },
  {
    q: "Quel repère temporel correspond au créole haïtien ?",
    options: ["Révolution haïtienne", "Années 1970", "Époque contemporaine", "Intemporel"],
    correct: 3
  },
  {
    q: "Où l'ason, hochet sacré du vodou est-il/elle particulièrement présent(e) ou pratiqué(e) ?",
    options: ["Port-au-Prince", "Nord d'Haïti", "National", "Port-au-Prince (itinérant)"],
    correct: 2
  },
  {
    q: "Comment décrit-on précisément le tap-tap, transport en commun peint ?",
    options: ["Forteresse classée à l'UNESCO, symbole de la résistance et de la fierté nationale haïtienne", "Créé en 1803 lors du congrès de l'Arcahaie à partir du drapeau tricolore français dont la bande blanche fut retirée", "Espace commun regroupant plusieurs habitations d'une même famille élargie, cœur de la vie sociale rurale", "Camionnette ou bus coloré, richement décoré de motifs religieux et populaires, servant de transport collectif"],
    correct: 3
  },
  {
    q: "Quelle affirmation décrit le mieux l'ason, hochet sacré du vodou ?",
    options: ["Camionnette ou bus coloré, richement décoré de motifs religieux et populaires, servant de transport collectif", "Carnaval réputé pour ses masques en papier mâché et ses costumes artisanaux élaborés", "Instrument rituel en forme de calebasse ornée de perles, symbole d'autorité spirituelle du prêtre ou de la prêtresse", "Officiante féminine occupant un rôle spirituel équivalent à celui du houngan"],
    correct: 2
  },
  {
    q: "Dans quelle catégorie situerait-on dézafi, premier roman en créole haïtien ?",
    options: ["Danse et expression culturelle", "Artisanat et art", "Vie sociale et coutumes", "Langue"],
    correct: 3
  },
  {
    q: "Comment classerait-on la tradition des pwovèb ayisyen (proverbes haïtiens) dans la culture haïtienne ?",
    options: ["Langue", "Artisanat et art", "Religion et spiritualité", "Vie sociale et coutumes"],
    correct: 3
  },
  {
    q: "Où la Méringue de salon est-il/elle particulièrement présent(e) ou pratiqué(e) ?",
    options: ["Milot (Nord)", "Port-au-Prince", "Arcahaie", "Croix-des-Bouquets"],
    correct: 1
  },
  {
    q: "Le statut du français avant 1987 relève principalement de quel domaine culturel ?",
    options: ["Artisanat et art", "Langue", "Religion et spiritualité", "Danse et expression culturelle"],
    correct: 1
  },
  {
    q: "Qu'est-ce qui définit l'Académie créole prévue par l'article 213 avec exactitude ?",
    options: ["On distingue traditionnellement le créole du Nord, du Centre et du Sud d'Haïti", "Institution prévue par la Constitution de 1987 pour fixer et développer la langue créole", "Procession musicale de rue jouée pendant la période du Carême, mêlant percussions et trompettes en bambou", "Officiante féminine occupant un rôle spirituel équivalent à celui du houngan"],
    correct: 1
  },
  {
    q: "Comment décrirait-on la nature de l'article 5 de la Constitution de 1987 ?",
    options: ["Religion et spiritualité", "Langue", "Artisanat et art", "Danse et expression culturelle"],
    correct: 1
  },
  {
    q: "À quelle région ou quel contexte associe-t-on le Kanaval national ?",
    options: ["Jacmel", "Port-au-Prince (itinérant)", "International", "Zones rurales d'Haïti"],
    correct: 1
  },
  {
    q: "Le drapo vodou trouve son origine à quelle période ?",
    options: ["Milieu XXe siècle", "Années 1970", "Années 1940", "Intemporel"],
    correct: 3
  },
  {
    q: "Quelle affirmation décrit le mieux la co-officialisation du créole et du français ?",
    options: ["Danse associée aux esprits Gede, marquée par des mouvements de bassin très expressifs", "Forme traditionnelle d'entraide agricole où les paysans travaillent collectivement la terre", "Rassemblement communautaire organisé après un décès, mêlant prières, chants et souvenirs du défunt", "Actée par la Constitution de mars 1987, qui fait du créole une langue officielle à égalité avec le français"],
    correct: 3
  },
  {
    q: "Dans quelle catégorie situerait-on le houngan, prêtre du vodou ?",
    options: ["Religion et spiritualité", "Fête et tradition", "Vie sociale et coutumes", "Artisanat et art"],
    correct: 0
  },
  {
    q: "Dans quelle catégorie situerait-on le tap-tap, transport en commun peint ?",
    options: ["Langue", "Religion et spiritualité", "Fête et tradition", "Artisanat et art"],
    correct: 3
  },
  {
    q: "Qu'est-ce qui définit le Centre d'Art de Port-au-Prince avec exactitude ?",
    options: ["Religion syncrétique mêlant croyances ouest-africaines et éléments catholiques, pratiquée par une large partie de la population", "Fondé en 1944, ce centre a révélé de nombreux artistes fondateurs de la peinture naïve haïtienne", "Actée par la Constitution de mars 1987, qui fait du créole une langue officielle à égalité avec le français", "« L'Union fait la Force » figure sur les armoiries et symbolise l'unité forgée pendant la lutte pour l'indépendance"],
    correct: 1
  },
  {
    q: "Quel domaine de la vie culturelle haïtienne illustre le fer découpé de la Croix-des-Bouquets ?",
    options: ["Religion et spiritualité", "Fête et tradition", "Artisanat et art", "Vie sociale et coutumes"],
    correct: 2
  },
  {
    q: "La Journée internationale du créole se caractérise principalement par :",
    options: ["Expressions populaires transmises oralement, très présentes dans la sagesse et l'éducation traditionnelles", "Fondé en 1944, ce centre a révélé de nombreux artistes fondateurs de la peinture naïve haïtienne", "Célébrée chaque 28 octobre depuis son instauration en 1981 à l'initiative de la Dominique", "Danse de couple élégante, considérée comme un ancêtre du konpa moderne"],
    correct: 2
  },
  {
    q: "Quel repère temporel correspond au Yanvalou, danse rituelle vodou ?",
    options: ["Révolution haïtienne", "Intemporel", "XIXe siècle", "XXe siècle"],
    correct: 1
  },
  {
    q: "Quelle affirmation décrit le mieux la variation dialectale du créole haïtien ?",
    options: ["Le créole tire l'essentiel de son vocabulaire du français, avec des apports africains, taïnos et espagnols", "Fondé en 1944, ce centre a révélé de nombreux artistes fondateurs de la peinture naïve haïtienne", "Carnaval réputé pour ses masques en papier mâché et ses costumes artisanaux élaborés", "On distingue traditionnellement le créole du Nord, du Centre et du Sud d'Haïti"],
    correct: 3
  },
  {
    q: "L'Académie créole prévue par l'article 213 appartient à quel volet de la tradition haïtienne ?",
    options: ["Langue", "Danse et expression culturelle", "Fête et tradition", "Artisanat et art"],
    correct: 0
  },
  {
    q: "Comment classerait-on la co-officialisation du créole et du français dans la culture haïtienne ?",
    options: ["Langue", "Danse et expression culturelle", "Artisanat et art", "Fête et tradition"],
    correct: 0
  },
  {
    q: "Comment classerait-on le Banda, danse rituelle vodou dans la culture haïtienne ?",
    options: ["Artisanat et art", "Vie sociale et coutumes", "Langue", "Danse et expression culturelle"],
    correct: 3
  },
  {
    q: "Comment décrit-on précisément le statut du français avant 1987 ?",
    options: ["Célébration vodou du début du mois de novembre honorant les esprits des morts", "Seule langue officielle d'Haïti depuis 1918, durant l'occupation américaine, jusqu'à l'arrivée du créole à ce statut", "Officiant masculin qui dirige les cérémonies et rituels du culte vodou", "Dessin tracé au sol, souvent à la farine ou à la cendre, représentant un esprit lors des cérémonies"],
    correct: 1
  },
  {
    q: "Quel domaine de la vie culturelle haïtienne illustre la variation dialectale du créole haïtien ?",
    options: ["Langue", "Vie sociale et coutumes", "Danse et expression culturelle", "Fête et tradition"],
    correct: 0
  },
  {
    q: "À quelle époque rattache-t-on le drapeau haïtien ?",
    options: ["XIXe siècle", "Milieu XXe siècle", "XXe siècle", "Révolution haïtienne"],
    correct: 3
  },
  {
    q: "Quel est le fait vérifié concernant la cérémonie du Bois-Caïman ?",
    options: ["Fondé en 1944, ce centre a révélé de nombreux artistes fondateurs de la peinture naïve haïtienne", "Cérémonie vodou d'août 1791 considérée comme un moment fondateur de l'insurrection des esclaves", "Créé en 1803 lors du congrès de l'Arcahaie à partir du drapeau tricolore français dont la bande blanche fut retirée", "Rassemblement communautaire organisé après un décès, mêlant prières, chants et souvenirs du défunt"],
    correct: 1
  },
  {
    q: "Le vodou haïtien est surtout ancré(e) dans quelle région d'Haïti ?",
    options: ["Croix-des-Bouquets", "National", "Milot (Nord)", "Haïti"],
    correct: 1
  },
  {
    q: "Quelle description correspond fidèlement à la tradition des contes de Bouki et Malice ?",
    options: ["Célébrée chaque 18 mai, en commémoration de la création du drapeau haïtien en 1803", "Tradition orale populaire mettant en scène deux personnages complices et rivaux dans la sagesse paysanne", "Danse associée aux esprits Gede, marquée par des mouvements de bassin très expressifs", "Costume traditionnel porté notamment lors des danses folkloriques et fêtes patriotiques"],
    correct: 1
  },
  {
    q: "Dans quel contexte géographique situe-t-on la Citadelle Laferrière, symbole culturel ?",
    options: ["Zones rurales d'Haïti", "Milot (Nord)", "Jacmel", "Haïti"],
    correct: 1
  },
  {
    q: "Quel domaine de la vie culturelle haïtienne illustre la Fête du Drapeau ?",
    options: ["Vie sociale et coutumes", "Fête et tradition", "Danse et expression culturelle", "Artisanat et art"],
    correct: 1
  },
  {
    q: "Quel est le fait vérifié concernant la Journée internationale du créole ?",
    options: ["Rassemblement communautaire organisé après un décès, mêlant prières, chants et souvenirs du défunt", "Expressions populaires transmises oralement, très présentes dans la sagesse et l'éducation traditionnelles", "Célébrée chaque 28 octobre depuis son instauration en 1981 à l'initiative de la Dominique", "Carnaval réputé pour ses masques en papier mâché et ses costumes artisanaux élaborés"],
    correct: 2
  },
  {
    q: "L'influence lexicale du créole haïtien relève principalement de quel domaine culturel ?",
    options: ["Vie sociale et coutumes", "Religion et spiritualité", "Langue", "Artisanat et art"],
    correct: 2
  },
  {
    q: "Quel repère temporel correspond à la Journée internationale du créole ?",
    options: ["Intemporel", "Années 1940", "Époque contemporaine", "XIXe siècle"],
    correct: 2
  },
  {
    q: "Quelle période historique est associée à la co-officialisation du créole et du français ?",
    options: ["Milieu XXe siècle", "Intemporel", "Années 1940", "Époque contemporaine"],
    correct: 3
  },
  {
    q: "À quelle région ou quel contexte associe-t-on le Rara ?",
    options: ["Port-au-Prince", "Nord d'Haïti", "National", "Zones rurales d'Haïti"],
    correct: 3
  },
  {
    q: "La Fête du Drapeau est avant tout une expression de quel domaine ?",
    options: ["Langue", "Religion et spiritualité", "Fête et tradition", "Vie sociale et coutumes"],
    correct: 2
  },
  {
    q: "La Méringue de salon remonte à quelle époque de l'histoire d'Haïti ?",
    options: ["Années 1970", "XIXe siècle", "Révolution haïtienne", "Années 1960"],
    correct: 1
  },
  {
    q: "Que faut-il savoir sur le Banda, danse rituelle vodou ?",
    options: ["Cet article proclame que tous les Haïtiens sont unis par une langue commune, le créole", "Ce roman de Frankétienne, publié en 1975, est considéré comme le tout premier roman écrit en créole haïtien", "Danse cérémonielle vodou caractérisée par des mouvements ondulants du dos et des épaules", "Danse associée aux esprits Gede, marquée par des mouvements de bassin très expressifs"],
    correct: 3
  },
  {
    q: "Comment classerait-on la Fête du Drapeau dans la culture haïtienne ?",
    options: ["Religion et spiritualité", "Danse et expression culturelle", "Fête et tradition", "Langue"],
    correct: 2
  },
  {
    q: "Comment classerait-on la variation dialectale du créole haïtien dans la culture haïtienne ?",
    options: ["Langue", "Religion et spiritualité", "Fête et tradition", "Artisanat et art"],
    correct: 0
  },
  {
    q: "Quelle période historique est associée au vodou haïtien ?",
    options: ["Révolution haïtienne", "Intemporel", "Années 1960", "Années 1940"],
    correct: 1
  },
  {
    q: "Dans quel contexte géographique situe-t-on le statut du français avant 1987 ?",
    options: ["Port-au-Prince", "Haïti", "National", "Zones rurales d'Haïti"],
    correct: 2
  },
  {
    q: "Depuis quand le madras, tissu traditionnel fait-il/elle partie de la culture haïtienne ?",
    options: ["Intemporel", "Années 1970", "Années 1940", "Révolution haïtienne"],
    correct: 0
  },
  {
    q: "La devise nationale d'Haïti trouve son origine à quelle période ?",
    options: ["Milieu XXe siècle", "Intemporel", "Années 1970", "Révolution haïtienne"],
    correct: 3
  },
  {
    q: "Quel lieu est le plus étroitement lié à la variation dialectale du créole haïtien ?",
    options: ["National", "Port-au-Prince", "Arcahaie", "Croix-des-Bouquets"],
    correct: 0
  },
  {
    q: "La tradition des pwovèb ayisyen (proverbes haïtiens) trouve son origine à quelle période ?",
    options: ["Milieu XXe siècle", "Intemporel", "XXe siècle", "XIXe siècle"],
    correct: 1
  },
  {
    q: "À quel aspect de la culture haïtienne se rattache la Fête Gede ?",
    options: ["Langue", "Artisanat et art", "Religion et spiritualité", "Danse et expression culturelle"],
    correct: 2
  },
  {
    q: "La Veye, veillée funéraire haïtienne appartient à quel volet de la tradition haïtienne ?",
    options: ["Fête et tradition", "Artisanat et art", "Religion et spiritualité", "Vie sociale et coutumes"],
    correct: 3
  },
  {
    q: "À quel aspect de la culture haïtienne se rattache le catholicisme en Haïti ?",
    options: ["Vie sociale et coutumes", "Religion et spiritualité", "Danse et expression culturelle", "Artisanat et art"],
    correct: 1
  },
  {
    q: "À quelle région ou quel contexte associe-t-on le tap-tap, transport en commun peint ?",
    options: ["Port-au-Prince", "Croix-des-Bouquets", "Jacmel", "National"],
    correct: 3
  },
  {
    q: "Dans quelle catégorie situerait-on la variation dialectale du créole haïtien ?",
    options: ["Langue", "Artisanat et art", "Fête et tradition", "Vie sociale et coutumes"],
    correct: 0
  },
  {
    q: "Quelle affirmation décrit le mieux le drapeau haïtien ?",
    options: ["Créé en 1803 lors du congrès de l'Arcahaie à partir du drapeau tricolore français dont la bande blanche fut retirée", "Tissu à carreaux colorés utilisé dans la confection des tenues traditionnelles féminines", "Tradition orale populaire mettant en scène deux personnages complices et rivaux dans la sagesse paysanne", "Expressions populaires transmises oralement, très présentes dans la sagesse et l'éducation traditionnelles"],
    correct: 0
  },
  {
    q: "Quel est le fait vérifié concernant la co-officialisation du créole et du français ?",
    options: ["Danse cérémonielle vodou caractérisée par des mouvements ondulants du dos et des épaules", "Religion syncrétique mêlant croyances ouest-africaines et éléments catholiques, pratiquée par une large partie de la population", "Actée par la Constitution de mars 1987, qui fait du créole une langue officielle à égalité avec le français", "Cérémonie vodou d'août 1791 considérée comme un moment fondateur de l'insurrection des esclaves"],
    correct: 2
  },
  {
    q: "Qu'est-ce qui définit la karabela, tenue traditionnelle avec exactitude ?",
    options: ["Célébrée chaque 28 octobre depuis son instauration en 1981 à l'initiative de la Dominique", "Drapeau cérémoniel richement brodé de perles et de sequins représentant un esprit du vodou", "Costume traditionnel porté notamment lors des danses folkloriques et fêtes patriotiques", "Créole à base lexicale française parlé par environ onze millions de personnes en Haïti"],
    correct: 2
  },
  {
    q: "La Citadelle Laferrière, symbole culturel se caractérise principalement par :",
    options: ["Forteresse classée à l'UNESCO, symbole de la résistance et de la fierté nationale haïtienne", "Seule langue officielle d'Haïti depuis 1918, durant l'occupation américaine, jusqu'à l'arrivée du créole à ce statut", "Drapeau cérémoniel richement brodé de perles et de sequins représentant un esprit du vodou", "Officiant masculin qui dirige les cérémonies et rituels du culte vodou"],
    correct: 0
  },
  {
    q: "Que faut-il savoir sur le houngan, prêtre du vodou ?",
    options: ["Cérémonie vodou d'août 1791 considérée comme un moment fondateur de l'insurrection des esclaves", "Espace commun regroupant plusieurs habitations d'une même famille élargie, cœur de la vie sociale rurale", "Fondé en 1944, ce centre a révélé de nombreux artistes fondateurs de la peinture naïve haïtienne", "Officiant masculin qui dirige les cérémonies et rituels du culte vodou"],
    correct: 3
  },
  {
    q: "La Méringue de salon relève principalement de quel domaine culturel ?",
    options: ["Langue", "Danse et expression culturelle", "Vie sociale et coutumes", "Fête et tradition"],
    correct: 1
  },
  {
    q: "La manbo, prêtresse du vodou est avant tout une expression de quel domaine ?",
    options: ["Religion et spiritualité", "Fête et tradition", "Vie sociale et coutumes", "Artisanat et art"],
    correct: 0
  },
  {
    q: "Quel est le fait vérifié concernant la tradition des contes de Bouki et Malice ?",
    options: ["Danse cérémonielle vodou caractérisée par des mouvements ondulants du dos et des épaules", "Cet article proclame que tous les Haïtiens sont unis par une langue commune, le créole", "Tradition orale populaire mettant en scène deux personnages complices et rivaux dans la sagesse paysanne", "« L'Union fait la Force » figure sur les armoiries et symbolise l'unité forgée pendant la lutte pour l'indépendance"],
    correct: 2
  },
  {
    q: "Quel est le fait vérifié concernant le statut du français avant 1987 ?",
    options: ["Le créole tire l'essentiel de son vocabulaire du français, avec des apports africains, taïnos et espagnols", "Seule langue officielle d'Haïti depuis 1918, durant l'occupation américaine, jusqu'à l'arrivée du créole à ce statut", "Cet article proclame que tous les Haïtiens sont unis par une langue commune, le créole", "Tradition orale populaire mettant en scène deux personnages complices et rivaux dans la sagesse paysanne"],
    correct: 1
  },
  {
    q: "Le madras, tissu traditionnel est avant tout une expression de quel domaine ?",
    options: ["Vie sociale et coutumes", "Langue", "Artisanat et art", "Fête et tradition"],
    correct: 2
  },
  {
    q: "Le drapeau haïtien remonte à quelle époque de l'histoire d'Haïti ?",
    options: ["Années 1960", "Milieu XXe siècle", "XXe siècle", "Révolution haïtienne"],
    correct: 3
  },
  {
    q: "Depuis quand la karabela, tenue traditionnelle fait-il/elle partie de la culture haïtienne ?",
    options: ["Années 1960", "Intemporel", "Années 1970", "Révolution haïtienne"],
    correct: 1
  },
  {
    q: "Le Lakou relève principalement de quel domaine culturel ?",
    options: ["Religion et spiritualité", "Fête et tradition", "Artisanat et art", "Vie sociale et coutumes"],
    correct: 3
  },
  {
    q: "Depuis quand la tradition des pwovèb ayisyen (proverbes haïtiens) fait-il/elle partie de la culture haïtienne ?",
    options: ["Intemporel", "Années 1960", "Révolution haïtienne", "Années 1970"],
    correct: 0
  },
  {
    q: "Quelle affirmation décrit le mieux l'article 5 de la Constitution de 1987 ?",
    options: ["Espace commun regroupant plusieurs habitations d'une même famille élargie, cœur de la vie sociale rurale", "Grande fête populaire précédant le Mercredi des Cendres, rythmée par les orchestres de konpa", "Cet article proclame que tous les Haïtiens sont unis par une langue commune, le créole", "« L'Union fait la Force » figure sur les armoiries et symbolise l'unité forgée pendant la lutte pour l'indépendance"],
    correct: 2
  },
  {
    q: "Que faut-il savoir sur le madras, tissu traditionnel ?",
    options: ["Créole à base lexicale française parlé par environ onze millions de personnes en Haïti", "Tissu à carreaux colorés utilisé dans la confection des tenues traditionnelles féminines", "Seule langue officielle d'Haïti depuis 1918, durant l'occupation américaine, jusqu'à l'arrivée du créole à ce statut", "Espace commun regroupant plusieurs habitations d'une même famille élargie, cœur de la vie sociale rurale"],
    correct: 1
  },
  {
    q: "Qu'est-ce qui définit la Citadelle Laferrière, symbole culturel avec exactitude ?",
    options: ["Carnaval réputé pour ses masques en papier mâché et ses costumes artisanaux élaborés", "Forteresse classée à l'UNESCO, symbole de la résistance et de la fierté nationale haïtienne", "Grande fête populaire précédant le Mercredi des Cendres, rythmée par les orchestres de konpa", "Tissu à carreaux colorés utilisé dans la confection des tenues traditionnelles féminines"],
    correct: 1
  },
  {
    q: "La Journée internationale du créole relève principalement de quel domaine culturel ?",
    options: ["Religion et spiritualité", "Artisanat et art", "Vie sociale et coutumes", "Langue"],
    correct: 3
  },
  {
    q: "La Journée internationale du créole appartient à quel volet de la tradition haïtienne ?",
    options: ["Religion et spiritualité", "Fête et tradition", "Vie sociale et coutumes", "Langue"],
    correct: 3
  },
  {
    q: "Comment décrit-on précisément la Journée internationale du créole ?",
    options: ["Créole à base lexicale française parlé par environ onze millions de personnes en Haïti", "Religion la plus pratiquée du pays aux côtés du protestantisme et du vodou, souvent en syncrétisme avec ce dernier", "Courant pictural né autour du Centre d'Art, mêlant scènes de vie quotidienne et imaginaire vodou", "Célébrée chaque 28 octobre depuis son instauration en 1981 à l'initiative de la Dominique"],
    correct: 3
  },
  {
    q: "Quelle description correspond fidèlement à la Citadelle Laferrière, symbole culturel ?",
    options: ["Instrument rituel en forme de calebasse ornée de perles, symbole d'autorité spirituelle du prêtre ou de la prêtresse", "Forteresse classée à l'UNESCO, symbole de la résistance et de la fierté nationale haïtienne", "Dessin tracé au sol, souvent à la farine ou à la cendre, représentant un esprit lors des cérémonies", "Carnaval réputé pour ses masques en papier mâché et ses costumes artisanaux élaborés"],
    correct: 1
  },
  {
    q: "Quel domaine de la vie culturelle haïtienne illustre le Carnaval de Jacmel ?",
    options: ["Langue", "Vie sociale et coutumes", "Artisanat et art", "Fête et tradition"],
    correct: 3
  },
  {
    q: "Qu'est-ce qui définit la mention du créole dans la Constitution de 1964 avec exactitude ?",
    options: ["Première mention du créole dans un texte constitutionnel haïtien, avant sa pleine officialisation en 1987", "Créole à base lexicale française parlé par environ onze millions de personnes en Haïti", "Le vodou est officiellement reconnu comme religion en Haïti depuis le début des années 2000", "Danse associée aux esprits Gede, marquée par des mouvements de bassin très expressifs"],
    correct: 0
  },
  {
    q: "Quelle affirmation décrit le mieux le créole haïtien ?",
    options: ["Créole à base lexicale française parlé par environ onze millions de personnes en Haïti", "Procession musicale de rue jouée pendant la période du Carême, mêlant percussions et trompettes en bambou", "Tradition orale populaire mettant en scène deux personnages complices et rivaux dans la sagesse paysanne", "Forteresse classée à l'UNESCO, symbole de la résistance et de la fierté nationale haïtienne"],
    correct: 0
  },
  {
    q: "Quel est le fait vérifié concernant la Méringue de salon ?",
    options: ["Danse de couple élégante, considérée comme un ancêtre du konpa moderne", "Fête nationale commémorant la proclamation de l'indépendance d'Haïti en 1804", "Actée par la Constitution de mars 1987, qui fait du créole une langue officielle à égalité avec le français", "Célébrée chaque 28 octobre depuis son instauration en 1981 à l'initiative de la Dominique"],
    correct: 0
  },
  {
    q: "Comment décrit-on précisément la mention du créole dans la Constitution de 1964 ?",
    options: ["Première mention du créole dans un texte constitutionnel haïtien, avant sa pleine officialisation en 1987", "Art du métal martelé et découpé, né dans cette commune devenue capitale haïtienne de cet artisanat", "Expressions populaires transmises oralement, très présentes dans la sagesse et l'éducation traditionnelles", "On distingue traditionnellement le créole du Nord, du Centre et du Sud d'Haïti"],
    correct: 0
  },
  {
    q: "Dans quel contexte géographique situe-t-on la cérémonie du Bois-Caïman ?",
    options: ["Croix-des-Bouquets", "Milot (Nord)", "Nord d'Haïti", "Arcahaie"],
    correct: 2
  },
  {
    q: "Comment classerait-on la devise nationale d'Haïti dans la culture haïtienne ?",
    options: ["Fête et tradition", "Religion et spiritualité", "Vie sociale et coutumes", "Danse et expression culturelle"],
    correct: 2
  },
  {
    q: "Comment décrirait-on la nature du Rara ?",
    options: ["Langue", "Fête et tradition", "Vie sociale et coutumes", "Danse et expression culturelle"],
    correct: 1
  },
  {
    q: "Comment décrit-on précisément le 1er janvier, jour de l'indépendance ?",
    options: ["Actée par la Constitution de mars 1987, qui fait du créole une langue officielle à égalité avec le français", "Fondé en 1944, ce centre a révélé de nombreux artistes fondateurs de la peinture naïve haïtienne", "Fête nationale commémorant la proclamation de l'indépendance d'Haïti en 1804", "Créole à base lexicale française parlé par environ onze millions de personnes en Haïti"],
    correct: 2
  },
  {
    q: "À quelle époque rattache-t-on le drapo vodou ?",
    options: ["Époque contemporaine", "XXe siècle", "Milieu XXe siècle", "Intemporel"],
    correct: 3
  },
  {
    q: "À quelle époque rattache-t-on dézafi, premier roman en créole haïtien ?",
    options: ["Années 1970", "Époque contemporaine", "Milieu XXe siècle", "Intemporel"],
    correct: 0
  },
  {
    q: "Où la devise nationale d'Haïti est-il/elle particulièrement présent(e) ou pratiqué(e) ?",
    options: ["Zones rurales d'Haïti", "International", "National", "Croix-des-Bouquets"],
    correct: 2
  },
  {
    q: "Dézafi, premier roman en créole haïtien appartient à quel volet de la tradition haïtienne ?",
    options: ["Fête et tradition", "Religion et spiritualité", "Danse et expression culturelle", "Langue"],
    correct: 3
  },
  {
    q: "Comment décrit-on précisément la tradition des contes de Bouki et Malice ?",
    options: ["Procession musicale de rue jouée pendant la période du Carême, mêlant percussions et trompettes en bambou", "Instrument rituel en forme de calebasse ornée de perles, symbole d'autorité spirituelle du prêtre ou de la prêtresse", "Tradition orale populaire mettant en scène deux personnages complices et rivaux dans la sagesse paysanne", "Fondé en 1944, ce centre a révélé de nombreux artistes fondateurs de la peinture naïve haïtienne"],
    correct: 2
  },
  {
    q: "Le Konbit trouve son origine à quelle période ?",
    options: ["Révolution haïtienne", "Intemporel", "XIXe siècle", "Années 1960"],
    correct: 1
  },
  {
    q: "Dans quel contexte géographique situe-t-on le 1er janvier, jour de l'indépendance ?",
    options: ["National", "Port-au-Prince (itinérant)", "Nord d'Haïti", "Croix-des-Bouquets"],
    correct: 0
  },
  {
    q: "Que faut-il savoir sur le statut du français avant 1987 ?",
    options: ["Seule langue officielle d'Haïti depuis 1918, durant l'occupation américaine, jusqu'à l'arrivée du créole à ce statut", "Dessin tracé au sol, souvent à la farine ou à la cendre, représentant un esprit lors des cérémonies", "Créé en 1803 lors du congrès de l'Arcahaie à partir du drapeau tricolore français dont la bande blanche fut retirée", "Fondé en 1944, ce centre a révélé de nombreux artistes fondateurs de la peinture naïve haïtienne"],
    correct: 0
  },
  {
    q: "À quel aspect de la culture haïtienne se rattache le Konbit ?",
    options: ["Danse et expression culturelle", "Fête et tradition", "Religion et spiritualité", "Vie sociale et coutumes"],
    correct: 3
  },
  {
    q: "Le statut du français avant 1987 appartient à quel volet de la tradition haïtienne ?",
    options: ["Langue", "Religion et spiritualité", "Danse et expression culturelle", "Artisanat et art"],
    correct: 0
  },
  {
    q: "Le madras, tissu traditionnel remonte à quelle époque de l'histoire d'Haïti ?",
    options: ["Intemporel", "Époque contemporaine", "Années 1960", "Années 1940"],
    correct: 0
  },
  {
    q: "Quel lieu est le plus étroitement lié au drapeau haïtien ?",
    options: ["International", "Port-au-Prince", "Arcahaie", "Milot (Nord)"],
    correct: 2
  },
  {
    q: "Qu'est-ce qui définit la co-officialisation du créole et du français avec exactitude ?",
    options: ["Carnaval réputé pour ses masques en papier mâché et ses costumes artisanaux élaborés", "Procession musicale de rue jouée pendant la période du Carême, mêlant percussions et trompettes en bambou", "Première mention du créole dans un texte constitutionnel haïtien, avant sa pleine officialisation en 1987", "Actée par la Constitution de mars 1987, qui fait du créole une langue officielle à égalité avec le français"],
    correct: 3
  },
  {
    q: "Qu'est-ce qui définit le houngan, prêtre du vodou avec exactitude ?",
    options: ["Camionnette ou bus coloré, richement décoré de motifs religieux et populaires, servant de transport collectif", "Officiant masculin qui dirige les cérémonies et rituels du culte vodou", "Courant pictural né autour du Centre d'Art, mêlant scènes de vie quotidienne et imaginaire vodou", "Le créole tire l'essentiel de son vocabulaire du français, avec des apports africains, taïnos et espagnols"],
    correct: 1
  },
  {
    q: "Quel repère temporel correspond à la variation dialectale du créole haïtien ?",
    options: ["Milieu XXe siècle", "Années 1960", "XIXe siècle", "Intemporel"],
    correct: 3
  },
  {
    q: "Le créole haïtien relève principalement de quel domaine culturel ?",
    options: ["Artisanat et art", "Langue", "Religion et spiritualité", "Danse et expression culturelle"],
    correct: 1
  },
  {
    q: "À quelle époque rattache-t-on la peinture naïve haïtienne ?",
    options: ["Intemporel", "XIXe siècle", "Années 1940", "Milieu XXe siècle"],
    correct: 3
  },
  {
    q: "Depuis quand le vèvè, symbole rituel du vodou fait-il/elle partie de la culture haïtienne ?",
    options: ["XXe siècle", "Milieu XXe siècle", "Intemporel", "Années 1970"],
    correct: 2
  },
  {
    q: "La Fête Gede appartient à quel volet de la tradition haïtienne ?",
    options: ["Religion et spiritualité", "Fête et tradition", "Langue", "Artisanat et art"],
    correct: 0
  },
  {
    q: "Quel domaine de la vie culturelle haïtienne illustre la tradition des contes de Bouki et Malice ?",
    options: ["Fête et tradition", "Artisanat et art", "Danse et expression culturelle", "Vie sociale et coutumes"],
    correct: 3
  },
  {
    q: "Le drapeau haïtien relève principalement de quel domaine culturel ?",
    options: ["Vie sociale et coutumes", "Fête et tradition", "Artisanat et art", "Langue"],
    correct: 0
  },
  {
    q: "Comment décrit-on précisément la Veye, veillée funéraire haïtienne ?",
    options: ["Forme traditionnelle d'entraide agricole où les paysans travaillent collectivement la terre", "Ce roman de Frankétienne, publié en 1975, est considéré comme le tout premier roman écrit en créole haïtien", "Fondé en 1944, ce centre a révélé de nombreux artistes fondateurs de la peinture naïve haïtienne", "Rassemblement communautaire organisé après un décès, mêlant prières, chants et souvenirs du défunt"],
    correct: 3
  },
  {
    q: "Quel lieu est le plus étroitement lié à la karabela, tenue traditionnelle ?",
    options: ["Zones rurales d'Haïti", "Arcahaie", "National", "International"],
    correct: 2
  },
  {
    q: "Quelle description correspond fidèlement à la Fête Gede ?",
    options: ["Fête nationale commémorant la proclamation de l'indépendance d'Haïti en 1804", "Grande fête populaire précédant le Mercredi des Cendres, rythmée par les orchestres de konpa", "Célébration vodou du début du mois de novembre honorant les esprits des morts", "Art du métal martelé et découpé, né dans cette commune devenue capitale haïtienne de cet artisanat"],
    correct: 2
  },
  {
    q: "Depuis quand le Kanaval national fait-il/elle partie de la culture haïtienne ?",
    options: ["Années 1940", "XIXe siècle", "Intemporel", "Milieu XXe siècle"],
    correct: 2
  },
  {
    q: "Depuis quand la tradition des contes de Bouki et Malice fait-il/elle partie de la culture haïtienne ?",
    options: ["Années 1940", "Intemporel", "Révolution haïtienne", "Années 1970"],
    correct: 1
  },
  {
    q: "Quel domaine de la vie culturelle haïtienne illustre le drapo vodou ?",
    options: ["Fête et tradition", "Danse et expression culturelle", "Artisanat et art", "Langue"],
    correct: 2
  },
  {
    q: "Quel domaine de la vie culturelle haïtienne illustre la Fête Gede ?",
    options: ["Langue", "Danse et expression culturelle", "Vie sociale et coutumes", "Religion et spiritualité"],
    correct: 3
  },
  {
    q: "Dans quel contexte géographique situe-t-on la variation dialectale du créole haïtien ?",
    options: ["Port-au-Prince (itinérant)", "National", "Jacmel", "Port-au-Prince"],
    correct: 1
  },
  {
    q: "La Fête Gede relève principalement de quel domaine culturel ?",
    options: ["Fête et tradition", "Vie sociale et coutumes", "Religion et spiritualité", "Artisanat et art"],
    correct: 2
  },
  {
    q: "L'ason, hochet sacré du vodou est surtout ancré(e) dans quelle région d'Haïti ?",
    options: ["National", "Jacmel", "International", "Port-au-Prince"],
    correct: 0
  },
  {
    q: "Quel domaine de la vie culturelle haïtienne illustre le tap-tap, transport en commun peint ?",
    options: ["Fête et tradition", "Religion et spiritualité", "Artisanat et art", "Vie sociale et coutumes"],
    correct: 2
  },
  {
    q: "À quel aspect de la culture haïtienne se rattache la mention du créole dans la Constitution de 1964 ?",
    options: ["Artisanat et art", "Langue", "Vie sociale et coutumes", "Religion et spiritualité"],
    correct: 1
  },
  {
    q: "Quel repère temporel correspond à la cérémonie du Bois-Caïman ?",
    options: ["Années 1960", "Intemporel", "Révolution haïtienne", "Années 1970"],
    correct: 2
  },
  {
    q: "Quel repère temporel correspond à la reconnaissance du vodou comme religion ?",
    options: ["XXe siècle", "Milieu XXe siècle", "Époque contemporaine", "Années 1960"],
    correct: 2
  },
  {
    q: "Que faut-il savoir sur dézafi, premier roman en créole haïtien ?",
    options: ["Ce roman de Frankétienne, publié en 1975, est considéré comme le tout premier roman écrit en créole haïtien", "Danse cérémonielle vodou caractérisée par des mouvements ondulants du dos et des épaules", "Institution prévue par la Constitution de 1987 pour fixer et développer la langue créole", "Forteresse classée à l'UNESCO, symbole de la résistance et de la fierté nationale haïtienne"],
    correct: 0
  },
  {
    q: "Le Centre d'Art de Port-au-Prince relève principalement de quel domaine culturel ?",
    options: ["Artisanat et art", "Danse et expression culturelle", "Fête et tradition", "Langue"],
    correct: 0
  },
  {
    q: "À quel aspect de la culture haïtienne se rattache la variation dialectale du créole haïtien ?",
    options: ["Artisanat et art", "Religion et spiritualité", "Fête et tradition", "Langue"],
    correct: 3
  },
  {
    q: "Le 1er janvier, jour de l'indépendance est avant tout une expression de quel domaine ?",
    options: ["Vie sociale et coutumes", "Religion et spiritualité", "Artisanat et art", "Fête et tradition"],
    correct: 3
  },
  {
    q: "Quel repère temporel correspond au fer découpé de la Croix-des-Bouquets ?",
    options: ["XXe siècle", "Années 1970", "Révolution haïtienne", "Milieu XXe siècle"],
    correct: 0
  },
  {
    q: "Depuis quand la manbo, prêtresse du vodou fait-il/elle partie de la culture haïtienne ?",
    options: ["Intemporel", "Années 1970", "Années 1940", "Milieu XXe siècle"],
    correct: 0
  },
  {
    q: "Comment décrirait-on la nature de l'influence lexicale du créole haïtien ?",
    options: ["Danse et expression culturelle", "Fête et tradition", "Religion et spiritualité", "Langue"],
    correct: 3
  },
  {
    q: "Comment décrirait-on la nature de la Citadelle Laferrière, symbole culturel ?",
    options: ["Artisanat et art", "Danse et expression culturelle", "Langue", "Religion et spiritualité"],
    correct: 0
  },
  {
    q: "Dans quel contexte géographique situe-t-on la karabela, tenue traditionnelle ?",
    options: ["National", "Arcahaie", "Croix-des-Bouquets", "International"],
    correct: 0
  },
  {
    q: "Qu'est-ce qui définit le vodou haïtien avec exactitude ?",
    options: ["Courant pictural né autour du Centre d'Art, mêlant scènes de vie quotidienne et imaginaire vodou", "Danse de couple élégante, considérée comme un ancêtre du konpa moderne", "Religion syncrétique mêlant croyances ouest-africaines et éléments catholiques, pratiquée par une large partie de la population", "Créole à base lexicale française parlé par environ onze millions de personnes en Haïti"],
    correct: 2
  },
  {
    q: "Comment décrit-on précisément la Fête du Drapeau ?",
    options: ["Le créole tire l'essentiel de son vocabulaire du français, avec des apports africains, taïnos et espagnols", "Célébrée chaque 18 mai, en commémoration de la création du drapeau haïtien en 1803", "Expressions populaires transmises oralement, très présentes dans la sagesse et l'éducation traditionnelles", "Carnaval réputé pour ses masques en papier mâché et ses costumes artisanaux élaborés"],
    correct: 1
  },
  {
    q: "Quelle période historique est associée à la Fête Gede ?",
    options: ["Années 1940", "Intemporel", "XXe siècle", "Années 1970"],
    correct: 1
  },
  {
    q: "Quel repère temporel correspond au Kanaval national ?",
    options: ["Années 1960", "Intemporel", "Époque contemporaine", "Années 1970"],
    correct: 1
  },
  {
    q: "Qu'est-ce qui définit le fer découpé de la Croix-des-Bouquets avec exactitude ?",
    options: ["Costume traditionnel porté notamment lors des danses folkloriques et fêtes patriotiques", "Camionnette ou bus coloré, richement décoré de motifs religieux et populaires, servant de transport collectif", "Art du métal martelé et découpé, né dans cette commune devenue capitale haïtienne de cet artisanat", "Expressions populaires transmises oralement, très présentes dans la sagesse et l'éducation traditionnelles"],
    correct: 2
  },
  {
    q: "Comment décrit-on précisément la manbo, prêtresse du vodou ?",
    options: ["Danse de couple élégante, considérée comme un ancêtre du konpa moderne", "Tissu à carreaux colorés utilisé dans la confection des tenues traditionnelles féminines", "Officiante féminine occupant un rôle spirituel équivalent à celui du houngan", "Première mention du créole dans un texte constitutionnel haïtien, avant sa pleine officialisation en 1987"],
    correct: 2
  },
  {
    q: "Que faut-il savoir sur l'ason, hochet sacré du vodou ?",
    options: ["Ce roman de Frankétienne, publié en 1975, est considéré comme le tout premier roman écrit en créole haïtien", "Officiant masculin qui dirige les cérémonies et rituels du culte vodou", "Instrument rituel en forme de calebasse ornée de perles, symbole d'autorité spirituelle du prêtre ou de la prêtresse", "Première mention du créole dans un texte constitutionnel haïtien, avant sa pleine officialisation en 1987"],
    correct: 2
  },
  {
    q: "Quelle affirmation décrit le mieux le Carnaval de Jacmel ?",
    options: ["Le créole tire l'essentiel de son vocabulaire du français, avec des apports africains, taïnos et espagnols", "Carnaval réputé pour ses masques en papier mâché et ses costumes artisanaux élaborés", "Costume traditionnel porté notamment lors des danses folkloriques et fêtes patriotiques", "Créole à base lexicale française parlé par environ onze millions de personnes en Haïti"],
    correct: 1
  },
  {
    q: "À quelle région ou quel contexte associe-t-on la cérémonie du Bois-Caïman ?",
    options: ["Port-au-Prince (itinérant)", "Port-au-Prince", "Nord d'Haïti", "Milot (Nord)"],
    correct: 2
  },
  {
    q: "Le madras, tissu traditionnel appartient à quel volet de la tradition haïtienne ?",
    options: ["Langue", "Artisanat et art", "Vie sociale et coutumes", "Danse et expression culturelle"],
    correct: 1
  },
  {
    q: "Quel est le fait vérifié concernant la karabela, tenue traditionnelle ?",
    options: ["Ce roman de Frankétienne, publié en 1975, est considéré comme le tout premier roman écrit en créole haïtien", "Costume traditionnel porté notamment lors des danses folkloriques et fêtes patriotiques", "Danse de couple élégante, considérée comme un ancêtre du konpa moderne", "Créé en 1803 lors du congrès de l'Arcahaie à partir du drapeau tricolore français dont la bande blanche fut retirée"],
    correct: 1
  },
  {
    q: "Comment décrit-on précisément la karabela, tenue traditionnelle ?",
    options: ["Le créole tire l'essentiel de son vocabulaire du français, avec des apports africains, taïnos et espagnols", "Costume traditionnel porté notamment lors des danses folkloriques et fêtes patriotiques", "Fête nationale commémorant la proclamation de l'indépendance d'Haïti en 1804", "Officiant masculin qui dirige les cérémonies et rituels du culte vodou"],
    correct: 1
  },
  {
    q: "Dans quel contexte géographique situe-t-on la manbo, prêtresse du vodou ?",
    options: ["National", "Zones rurales d'Haïti", "Croix-des-Bouquets", "Haïti"],
    correct: 0
  },
  {
    q: "À quel aspect de la culture haïtienne se rattache l'Académie créole prévue par l'article 213 ?",
    options: ["Artisanat et art", "Fête et tradition", "Langue", "Danse et expression culturelle"],
    correct: 2
  },
  {
    q: "À quelle époque rattache-t-on la manbo, prêtresse du vodou ?",
    options: ["Années 1960", "Époque contemporaine", "Révolution haïtienne", "Intemporel"],
    correct: 3
  },
  {
    q: "Quelle période historique est associée au houngan, prêtre du vodou ?",
    options: ["Intemporel", "Années 1970", "Révolution haïtienne", "XIXe siècle"],
    correct: 0
  },
  {
    q: "Quel est le fait vérifié concernant dézafi, premier roman en créole haïtien ?",
    options: ["Ce roman de Frankétienne, publié en 1975, est considéré comme le tout premier roman écrit en créole haïtien", "Religion syncrétique mêlant croyances ouest-africaines et éléments catholiques, pratiquée par une large partie de la population", "On distingue traditionnellement le créole du Nord, du Centre et du Sud d'Haïti", "Courant pictural né autour du Centre d'Art, mêlant scènes de vie quotidienne et imaginaire vodou"],
    correct: 0
  },
  {
    q: "Comment décrit-on précisément la variation dialectale du créole haïtien ?",
    options: ["Créole à base lexicale française parlé par environ onze millions de personnes en Haïti", "Officiant masculin qui dirige les cérémonies et rituels du culte vodou", "Carnaval réputé pour ses masques en papier mâché et ses costumes artisanaux élaborés", "On distingue traditionnellement le créole du Nord, du Centre et du Sud d'Haïti"],
    correct: 3
  },
]

export default cultureQuestions
