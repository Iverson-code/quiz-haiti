const cuisineQuestions = [
  {
    q: "Quel plat à base de porc mariné et frit est emblématique de la cuisine haïtienne ?",
    options: ["Le Griot", "Le Tasso", "Le Boukannen", "Le Lambi"],
    correct: 0
  },
  {
    q: "Quel accompagnement épicé à base de chou et carottes accompagne souvent les plats haïtiens ?",
    options: ["Le Pikliz", "Le Ti-Malice", "La Sauce Pois", "Le Bannann Peze"],
    correct: 0
  },
  {
    q: "Quel riz noir typique tire sa couleur d'un champignon local ?",
    options: ["Riz collé", "Riz djon djon", "Riz national", "Riz jaune"],
    correct: 1
  },
  {
    q: "Quelle soupe traditionnelle se déguste le 1er janvier pour célébrer l'indépendance ?",
    options: ["Bouillon", "Soup joumou", "Soupe tête", "Bouyon"],
    correct: 1
  },
  {
    q: "Quel est l'ingrédient principal de « Diri djon djon » ?",
    options: ["Viande de bœuf et légumes racines", "Malanga râpé", "Riz et haricots rouges ou noirs", "Riz et champignons noirs djon djon"],
    correct: 3
  },
  {
    q: "Quel est l'ingrédient principal de « Legim » ?",
    options: ["Pâte feuilletée garnie de viande, de morue ou de légumes", "Légumes variés (aubergine, chou, carotte...)", "Farine de maïs", "Farine de maïs, sucre et lait de coco"],
    correct: 1
  },
  {
    q: "Dans quelle catégorie culinaire classerait-on « Kasav » ?",
    options: ["Plat de petit-déjeuner", "Accompagnement / fritay", "Confiserie", "Pain / galette"],
    correct: 3
  },
  {
    q: "Quel est l'ingrédient principal de « Lambi » ?",
    options: ["Maïs concassé et haricots", "Conque (lambi)", "Malanga râpé", "Riz et haricots rouges ou noirs"],
    correct: 1
  },
  {
    q: "Dans quelle catégorie culinaire classerait-on « Akra » ?",
    options: ["Plat de petit-déjeuner", "Boisson (liqueur)", "Fritay (entrée)", "Catégorie de plats frits"],
    correct: 2
  },
  {
    q: "Qu'est-ce que « Rhum Barbancourt » dans la cuisine haïtienne ?",
    options: ["Morceaux de porc marinés puis frits, l'un des plats les plus emblématiques d'Haïti", "Marque de rhum haïtien fondée en 1862 par Dupré Barbancourt", "Bière blonde produite par la Brasserie Nationale d'Haïti (Brana)", "Beignets de pâte frite, parfois fourrés de morue ou de fruits de mer"],
    correct: 1
  },
  {
    q: "Quel est l'ingrédient principal de « Akra » ?",
    options: ["Viande de bœuf et légumes racines", "Pâte de farine, parfois avec morue ou fruits de mer", "Rapadou (sucre de canne non raffiné) avec arachides ou noix de coco", "Malanga râpé"],
    correct: 3
  },
  {
    q: "Dans quelle catégorie culinaire classerait-on « Pain patat » ?",
    options: ["Dessert", "Condiment", "Fritay / en-cas", "Boisson (alcool)"],
    correct: 0
  },
  {
    q: "Quel est l'ingrédient principal de « Pain patat » ?",
    options: ["Maïs concassé et haricots", "Patate douce râpée", "Lait de coco et rhum", "Légumes variés (aubergine, chou, carotte...)"],
    correct: 1
  },
  {
    q: "Qu'est-ce que « Akasan » dans la cuisine haïtienne ?",
    options: ["Boisson chaude à base de farine de maïs, de lait, de cannelle et de vanille", "Viande marinée coupée en lanières puis frite jusqu'à devenir croustillante", "Plat de spaghetti relevé, souvent accompagné de saucisses type hot-dog, couramment servi au petit-déjeuner", "Riz cuit avec de petits champignons noirs typiquement haïtiens, qui lui donnent une couleur grisâtre"],
    correct: 0
  },
  {
    q: "Dans quelle catégorie culinaire classerait-on « Akasan » ?",
    options: ["Accompagnement / fritay", "Boisson chaude", "Condiment", "Pain / galette"],
    correct: 1
  },
  {
    q: "Qu'est-ce que « Prestige » dans la cuisine haïtienne ?",
    options: ["Beurre d'arachide haïtien, souvent plus relevé que le beurre de cacahuète classique", "Bière blonde produite par la Brasserie Nationale d'Haïti (Brana)", "Terme désignant un assortiment de fritures haïtiennes (griot, akra, bannann peze...), souvent vendu dans la rue", "Sauce onctueuse à base de haricots, souvent servie sur du riz ou de la farine de maïs"],
    correct: 1
  },
  {
    q: "Dans quelle catégorie culinaire classerait-on « Lambi » ?",
    options: ["Sauce / accompagnement", "Confiserie", "Plat principal (fruits de mer)", "Bouillie de petit-déjeuner"],
    correct: 2
  },
  {
    q: "À quelle occasion consomme-t-on traditionnellement « Akasan » ?",
    options: ["Souvent au petit-déjeuner", "Les fêtes de fin d'année (Noël et Nouvel An)", "Les repas de fête", "Le 1er janvier, jour de l'indépendance"],
    correct: 0
  },
  {
    q: "Dans quelle catégorie culinaire classerait-on « Marinad » ?",
    options: ["Plat principal (viande)", "Fritay (entrée)", "Bouillie de petit-déjeuner", "Accompagnement / fritay"],
    correct: 1
  },
  {
    q: "À quelle occasion consomme-t-on traditionnellement « Labouyi » ?",
    options: ["Le 8 décembre, fête de l'Immaculée Conception", "Les fêtes de fin d'année (Noël et Nouvel An)", "Souvent au petit-déjeuner", "Le 1er janvier, jour de l'indépendance"],
    correct: 2
  },
  {
    q: "Quel est l'ingrédient principal de « Mamba » ?",
    options: ["Maïs concassé et haricots", "Chou, carottes et piment", "Conque (lambi)", "Arachides"],
    correct: 3
  },
  {
    q: "Quel est l'ingrédient principal de « Doukounou » ?",
    options: ["Farine de maïs, sucre et lait de coco", "Pâte de farine, parfois avec morue ou fruits de mer", "Plantain vert", "Giraumon (courge/potiron)"],
    correct: 0
  },
  {
    q: "Qu'est-ce que « Sos pwa » dans la cuisine haïtienne ?",
    options: ["Pudding de maïs sucré cuit, enveloppé dans une feuille de bananier", "Viande marinée coupée en lanières puis frite jusqu'à devenir croustillante", "Sauce onctueuse à base de haricots, souvent servie sur du riz ou de la farine de maïs", "Beurre d'arachide haïtien, souvent plus relevé que le beurre de cacahuète classique"],
    correct: 2
  },
  {
    q: "Quel est l'ingrédient principal de « Konparet » ?",
    options: ["Farine de maïs, lait et cannelle", "Rapadou (sucre de canne non raffiné) avec arachides ou noix de coco", "Farine, épices et noix de coco", "Pâtes spaghetti, souvent avec saucisse hot-dog"],
    correct: 2
  },
  {
    q: "Dans quelle catégorie culinaire classerait-on « Tchaka » ?",
    options: ["Sauce / accompagnement", "Confiserie", "Plat principal (ragoût)", "Accompagnement / fritay"],
    correct: 2
  },
  {
    q: "Dans quelle catégorie culinaire classerait-on « Diri ak pwa » ?",
    options: ["Accompagnement (féculent)", "Bouillie de petit-déjeuner", "Sauce / accompagnement", "Boisson (liqueur)"],
    correct: 0
  },
  {
    q: "Dans quelle catégorie culinaire classerait-on « Fritay » ?",
    options: ["Pâtisserie / biscuit", "Boisson (alcool)", "Condiment", "Catégorie de plats frits"],
    correct: 3
  },
  {
    q: "Qu'est-ce que « Bouyon » dans la cuisine haïtienne ?",
    options: ["Bière blonde produite par la Brasserie Nationale d'Haïti (Brana)", "Semoule de maïs cuite façon polenta, souvent servie avec de la sauce pois", "Soupe consistante à base de viande de bœuf et de légumes racines", "Biscuit dense et épicé, spécialité culinaire traditionnelle de la ville du Cap-Haïtien"],
    correct: 2
  },
  {
    q: "Dans quelle catégorie culinaire classerait-on « Pikliz » ?",
    options: ["Bouillie de petit-déjeuner", "Pain / galette", "Fritay / en-cas", "Condiment"],
    correct: 3
  },
  {
    q: "À quelle occasion consomme-t-on traditionnellement « Soup joumou » ?",
    options: ["Le 8 décembre, fête de l'Immaculée Conception", "Souvent au petit-déjeuner", "Le 1er janvier, jour de l'indépendance", "Les repas de fête"],
    correct: 2
  },
  {
    q: "Dans quelle catégorie culinaire classerait-on « Kremas » ?",
    options: ["Accompagnement / fritay", "Dessert", "Boisson (liqueur)", "Soupe"],
    correct: 2
  },
  {
    q: "Dans quelle catégorie culinaire classerait-on « Rhum Barbancourt » ?",
    options: ["Boisson (alcool)", "Accompagnement (féculent)", "Pain / galette", "Plat principal (ragoût)"],
    correct: 0
  },
  {
    q: "Qu'est-ce que « Diri djon djon » dans la cuisine haïtienne ?",
    options: ["Riz cuit avec de petits champignons noirs typiquement haïtiens, qui lui donnent une couleur grisâtre", "Tranches de plantain vert frites puis aplaties avant une seconde friture", "Riz cuit avec des haricots, l'un des accompagnements de base de la cuisine haïtienne", "Ragoût à base de maïs concassé et de haricots"],
    correct: 0
  },
  {
    q: "Quel est l'ingrédient principal de « Soup joumou » ?",
    options: ["Arachides", "Farine, épices et noix de coco", "Pâte de farine, parfois avec morue ou fruits de mer", "Giraumon (courge/potiron)"],
    correct: 3
  },
  {
    q: "Qu'est-ce que « Soup joumou » dans la cuisine haïtienne ?",
    options: ["Condiment épicé à base de légumes marinés dans du vinaigre, servi avec les fritures", "Pudding dense à base de patate douce râpée, de lait de coco et d'épices", "Soupe traditionnellement consommée le 1er janvier pour célébrer l'indépendance d'Haïti", "Plat de spaghetti relevé, souvent accompagné de saucisses type hot-dog, couramment servi au petit-déjeuner"],
    correct: 2
  },
  {
    q: "À quelle occasion consomme-t-on traditionnellement « Tchaka » ?",
    options: ["Souvent au petit-déjeuner", "Les repas de fête", "Le 8 décembre, fête de l'Immaculée Conception", "Le 1er janvier, jour de l'indépendance"],
    correct: 2
  },
  {
    q: "Dans quelle catégorie culinaire classerait-on « Doukounou » ?",
    options: ["Dessert", "Condiment", "Confiserie", "Boisson (bière)"],
    correct: 0
  },
  {
    q: "Dans quelle catégorie culinaire classerait-on « Soup joumou » ?",
    options: ["Fritay (entrée)", "Dessert", "Soupe", "Bouillie de petit-déjeuner"],
    correct: 2
  },
  {
    q: "Qu'est-ce que « Lambi » dans la cuisine haïtienne ?",
    options: ["Gros mollusque marin préparé grillé ou en sauce, plat emblématique des régions côtières", "Liqueur crémeuse à base de lait de coco, de lait concentré et de rhum", "Beignets de pâte frite, parfois fourrés de morue ou de fruits de mer", "Riz cuit avec des haricots, l'un des accompagnements de base de la cuisine haïtienne"],
    correct: 0
  },
  {
    q: "À quelle occasion consomme-t-on traditionnellement « Kremas » ?",
    options: ["Les repas de fête", "Les fêtes de fin d'année (Noël et Nouvel An)", "Souvent au petit-déjeuner", "Le 8 décembre, fête de l'Immaculée Conception"],
    correct: 1
  },
  {
    q: "Qu'est-ce que « Pate » dans la cuisine haïtienne ?",
    options: ["Ragoût à base de maïs concassé et de haricots", "Biscuit dense et épicé, spécialité culinaire traditionnelle de la ville du Cap-Haïtien", "Sauce onctueuse à base de haricots, souvent servie sur du riz ou de la farine de maïs", "Chausson feuilleté, frit ou cuit au four, garni de viande, de morue ou de légumes"],
    correct: 3
  },
  {
    q: "Qu'est-ce que « Espageti ayisyen » dans la cuisine haïtienne ?",
    options: ["Riz cuit avec des haricots, l'un des accompagnements de base de la cuisine haïtienne", "Plat de spaghetti relevé, souvent accompagné de saucisses type hot-dog, couramment servi au petit-déjeuner", "Semoule de maïs cuite façon polenta, souvent servie avec de la sauce pois", "Condiment épicé à base de légumes marinés dans du vinaigre, servi avec les fritures"],
    correct: 1
  },
  {
    q: "À quelle occasion consomme-t-on traditionnellement « Diri djon djon » ?",
    options: ["Les fêtes de fin d'année (Noël et Nouvel An)", "Le 8 décembre, fête de l'Immaculée Conception", "Souvent au petit-déjeuner", "Les repas de fête"],
    correct: 3
  },
  {
    q: "Quel est l'ingrédient principal de « Griot » ?",
    options: ["Chou, carottes et piment", "Pâtes spaghetti, souvent avec saucisse hot-dog", "Plantain vert", "Porc"],
    correct: 3
  },
  {
    q: "Qu'est-ce que « Tassot » dans la cuisine haïtienne ?",
    options: ["Terme désignant un assortiment de fritures haïtiennes (griot, akra, bannann peze...), souvent vendu dans la rue", "Viande marinée coupée en lanières puis frite jusqu'à devenir croustillante", "Boisson chaude à base de farine de maïs, de lait, de cannelle et de vanille", "Biscuit dense et épicé, spécialité culinaire traditionnelle de la ville du Cap-Haïtien"],
    correct: 1
  },
  {
    q: "Qu'est-ce que « Labouyi » dans la cuisine haïtienne ?",
    options: ["Bouillie chaude à base de céréale, souvent servie au petit-déjeuner", "Soupe traditionnellement consommée le 1er janvier pour célébrer l'indépendance d'Haïti", "Sauce onctueuse à base de haricots, souvent servie sur du riz ou de la farine de maïs", "Confiserie croquante à base de rapadou mélangé à des arachides ou de la noix de coco râpée"],
    correct: 0
  },
  {
    q: "Dans quelle catégorie culinaire classerait-on « Prestige » ?",
    options: ["Boisson (bière)", "Boisson (liqueur)", "Accompagnement / fritay", "Plat principal (fruits de mer)"],
    correct: 0
  },
  {
    q: "Qu'est-ce que « Kremas » dans la cuisine haïtienne ?",
    options: ["Confiserie croquante à base de rapadou mélangé à des arachides ou de la noix de coco râpée", "Tranches de plantain vert frites puis aplaties avant une seconde friture", "Liqueur crémeuse à base de lait de coco, de lait concentré et de rhum", "Bière blonde produite par la Brasserie Nationale d'Haïti (Brana)"],
    correct: 2
  },
  {
    q: "Dans quelle catégorie culinaire classerait-on « Sos pwa » ?",
    options: ["Sauce / accompagnement", "Fritay / en-cas", "Accompagnement (féculent)", "Condiment"],
    correct: 0
  },
  {
    q: "Qu'est-ce que « Bannann peze » dans la cuisine haïtienne ?",
    options: ["Tranches de plantain vert frites puis aplaties avant une seconde friture", "Riz cuit avec de petits champignons noirs typiquement haïtiens, qui lui donnent une couleur grisâtre", "Bouillie chaude à base de céréale, souvent servie au petit-déjeuner", "Biscuit dense et épicé, spécialité culinaire traditionnelle de la ville du Cap-Haïtien"],
    correct: 0
  },
  {
    q: "Qu'est-ce que « Tablet » dans la cuisine haïtienne ?",
    options: ["Soupe consistante à base de viande de bœuf et de légumes racines", "Semoule de maïs cuite façon polenta, souvent servie avec de la sauce pois", "Confiserie croquante à base de rapadou mélangé à des arachides ou de la noix de coco râpée", "Pudding de maïs sucré cuit, enveloppé dans une feuille de bananier"],
    correct: 2
  },
  {
    q: "Quel est l'ingrédient principal de « Labouyi » ?",
    options: ["Plantain vert", "Farine de maïs, sucre et lait de coco", "Riz et haricots rouges ou noirs", "Céréale (maïs, banane ou avoine selon la variante)"],
    correct: 3
  },
  {
    q: "Dans quelle catégorie culinaire classerait-on « Mamba » ?",
    options: ["Plat de petit-déjeuner", "Condiment", "Bouillie de petit-déjeuner", "Tartinade / condiment"],
    correct: 3
  },
  {
    q: "Dans quelle catégorie culinaire classerait-on « Bouyon » ?",
    options: ["Sauce / accompagnement", "Accompagnement / fritay", "Fritay / en-cas", "Soupe"],
    correct: 3
  },
  {
    q: "Quel est l'ingrédient principal de « Marinad » ?",
    options: ["Pâte de farine, parfois avec morue ou fruits de mer", "Porc", "Lait de coco et rhum", "Malanga râpé"],
    correct: 0
  },
  {
    q: "Quel est l'ingrédient principal de « Bouyon » ?",
    options: ["Manioc râpé", "Riz et haricots rouges ou noirs", "Viande de bœuf et légumes racines", "Farine, épices et noix de coco"],
    correct: 2
  },
  {
    q: "Qu'est-ce que « Konparet » dans la cuisine haïtienne ?",
    options: ["Beignets frits à base de malanga râpé", "Gros mollusque marin préparé grillé ou en sauce, plat emblématique des régions côtières", "Biscuit dense et épicé, spécialité culinaire traditionnelle de la ville du Cap-Haïtien", "Beurre d'arachide haïtien, souvent plus relevé que le beurre de cacahuète classique"],
    correct: 2
  },
  {
    q: "Quel est l'ingrédient principal de « Sos pwa » ?",
    options: ["Jus de canne à sucre fermenté et distillé", "Riz et champignons noirs djon djon", "Rapadou (sucre de canne non raffiné) avec arachides ou noix de coco", "Haricots réduits en purée"],
    correct: 3
  },
  {
    q: "Qu'est-ce que « Mayi moulen » dans la cuisine haïtienne ?",
    options: ["Bière blonde produite par la Brasserie Nationale d'Haïti (Brana)", "Semoule de maïs cuite façon polenta, souvent servie avec de la sauce pois", "Alcool distillé artisanalement à partir de jus de canne à sucre, non vieilli", "Chausson feuilleté, frit ou cuit au four, garni de viande, de morue ou de légumes"],
    correct: 1
  },
  {
    q: "Qu'est-ce que « Pain patat » dans la cuisine haïtienne ?",
    options: ["Confiserie croquante à base de rapadou mélangé à des arachides ou de la noix de coco râpée", "Morceaux de porc marinés puis frits, l'un des plats les plus emblématiques d'Haïti", "Pudding dense à base de patate douce râpée, de lait de coco et d'épices", "Sauce onctueuse à base de haricots, souvent servie sur du riz ou de la farine de maïs"],
    correct: 2
  },
  {
    q: "Quel est l'ingrédient principal de « Tassot » ?",
    options: ["Viande (bœuf, cabri ou dinde) en lanières", "Légumes variés (aubergine, chou, carotte...)", "Haricots réduits en purée", "Plantain vert"],
    correct: 0
  },
  {
    q: "Quel est l'ingrédient principal de « Diri ak pwa » ?",
    options: ["Viande de bœuf et légumes racines", "Rapadou (sucre de canne non raffiné) avec arachides ou noix de coco", "Giraumon (courge/potiron)", "Riz et haricots rouges ou noirs"],
    correct: 3
  },
  {
    q: "Dans quelle catégorie culinaire classerait-on « Bannann peze » ?",
    options: ["Boisson (bière)", "Plat principal (viande)", "Sauce / accompagnement", "Accompagnement / fritay"],
    correct: 3
  },
  {
    q: "Qu'est-ce que « Tchaka » dans la cuisine haïtienne ?",
    options: ["Ragoût à base de maïs concassé et de haricots", "Beignets de pâte frite, parfois fourrés de morue ou de fruits de mer", "Sauce onctueuse à base de haricots, souvent servie sur du riz ou de la farine de maïs", "Marque de rhum haïtien fondée en 1862 par Dupré Barbancourt"],
    correct: 0
  },
  {
    q: "Qu'est-ce que « Legim » dans la cuisine haïtienne ?",
    options: ["Ragoût de légumes mijotés, parfois avec de la viande, réduit en texture épaisse", "Beignets frits à base de malanga râpé", "Riz cuit avec des haricots, l'un des accompagnements de base de la cuisine haïtienne", "Galette plate et sans levain à base de manioc râpé et pressé"],
    correct: 0
  },
  {
    q: "Qu'est-ce que « Pikliz » dans la cuisine haïtienne ?",
    options: ["Marque de rhum haïtien fondée en 1862 par Dupré Barbancourt", "Soupe traditionnellement consommée le 1er janvier pour célébrer l'indépendance d'Haïti", "Beignets de pâte frite, parfois fourrés de morue ou de fruits de mer", "Condiment épicé à base de légumes marinés dans du vinaigre, servi avec les fritures"],
    correct: 3
  },
  {
    q: "Qu'est-ce que « Griot » dans la cuisine haïtienne ?",
    options: ["Riz cuit avec de petits champignons noirs typiquement haïtiens, qui lui donnent une couleur grisâtre", "Morceaux de porc marinés puis frits, l'un des plats les plus emblématiques d'Haïti", "Boisson chaude à base de farine de maïs, de lait, de cannelle et de vanille", "Chausson feuilleté, frit ou cuit au four, garni de viande, de morue ou de légumes"],
    correct: 1
  },
  {
    q: "Dans quelle catégorie culinaire classerait-on « Tassot » ?",
    options: ["Boisson (bière)", "Boisson chaude", "Plat principal (viande)", "Tartinade / condiment"],
    correct: 2
  },
  {
    q: "Quel est l'ingrédient principal de « Tablet » ?",
    options: ["Céréale (maïs, banane ou avoine selon la variante)", "Rapadou (sucre de canne non raffiné) avec arachides ou noix de coco", "Lait de coco et rhum", "Patate douce râpée"],
    correct: 1
  },
  {
    q: "Qu'est-ce que « Diri ak pwa » dans la cuisine haïtienne ?",
    options: ["Riz cuit avec des haricots, l'un des accompagnements de base de la cuisine haïtienne", "Bouillie chaude à base de céréale, souvent servie au petit-déjeuner", "Soupe consistante à base de viande de bœuf et de légumes racines", "Gros mollusque marin préparé grillé ou en sauce, plat emblématique des régions côtières"],
    correct: 0
  },
  {
    q: "Quel est l'ingrédient principal de « Prestige » ?",
    options: ["Patate douce râpée", "Farine de maïs, lait et cannelle", "Malt et houblon", "Viande (bœuf, cabri ou dinde) en lanières"],
    correct: 2
  },
  {
    q: "Quel est l'ingrédient principal de « Tchaka » ?",
    options: ["Viande (bœuf, cabri ou dinde) en lanières", "Chou, carottes et piment", "Maïs concassé et haricots", "Farine, épices et noix de coco"],
    correct: 2
  },
  {
    q: "Qu'est-ce que « Mamba » dans la cuisine haïtienne ?",
    options: ["Liqueur crémeuse à base de lait de coco, de lait concentré et de rhum", "Beignets frits à base de malanga râpé", "Ragoût de légumes mijotés, parfois avec de la viande, réduit en texture épaisse", "Beurre d'arachide haïtien, souvent plus relevé que le beurre de cacahuète classique"],
    correct: 3
  },
  {
    q: "Qu'est-ce que « Akra » dans la cuisine haïtienne ?",
    options: ["Gros mollusque marin préparé grillé ou en sauce, plat emblématique des régions côtières", "Beignets de pâte frite, parfois fourrés de morue ou de fruits de mer", "Beignets frits à base de malanga râpé", "Soupe consistante à base de viande de bœuf et de légumes racines"],
    correct: 2
  },
  {
    q: "Quel est l'ingrédient principal de « Kremas » ?",
    options: ["Pâtes spaghetti, souvent avec saucisse hot-dog", "Lait de coco et rhum", "Plantain vert", "Rapadou (sucre de canne non raffiné) avec arachides ou noix de coco"],
    correct: 1
  },
  {
    q: "À quelle occasion consomme-t-on traditionnellement « Espageti ayisyen » ?",
    options: ["Le 8 décembre, fête de l'Immaculée Conception", "Les repas de fête", "Les fêtes de fin d'année (Noël et Nouvel An)", "Souvent au petit-déjeuner"],
    correct: 3
  },
  {
    q: "Dans quelle catégorie culinaire classerait-on « Labouyi » ?",
    options: ["Boisson chaude", "Bouillie de petit-déjeuner", "Plat principal (ragoût)", "Boisson (liqueur)"],
    correct: 1
  },
  {
    q: "Dans quelle catégorie culinaire classerait-on « Diri djon djon » ?",
    options: ["Boisson chaude", "Plat de petit-déjeuner", "Accompagnement (féculent)", "Pain / galette"],
    correct: 2
  },
  {
    q: "Dans quelle catégorie culinaire classerait-on « Mayi moulen » ?",
    options: ["Catégorie de plats frits", "Confiserie", "Accompagnement (féculent)", "Fritay / en-cas"],
    correct: 2
  },
  {
    q: "Quel est l'ingrédient principal de « Kasav » ?",
    options: ["Manioc râpé", "Conque (lambi)", "Farine de maïs, lait et cannelle", "Céréale (maïs, banane ou avoine selon la variante)"],
    correct: 0
  },
  {
    q: "Dans quelle catégorie culinaire classerait-on « Konparet » ?",
    options: ["Pâtisserie / biscuit", "Accompagnement / fritay", "Plat principal (ragoût)", "Plat principal (viande)"],
    correct: 0
  },
  {
    q: "Quel est l'ingrédient principal de « Clairin » ?",
    options: ["Giraumon (courge/potiron)", "Maïs concassé et haricots", "Jus de canne à sucre fermenté et distillé", "Viande (bœuf, cabri ou dinde) en lanières"],
    correct: 2
  },
  {
    q: "Dans quelle catégorie culinaire classerait-on « Griot » ?",
    options: ["Plat principal (viande)", "Dessert", "Catégorie de plats frits", "Boisson chaude"],
    correct: 0
  },
  {
    q: "Dans quelle catégorie culinaire classerait-on « Espageti ayisyen » ?",
    options: ["Boisson (liqueur)", "Condiment", "Bouillie de petit-déjeuner", "Plat de petit-déjeuner"],
    correct: 3
  },
  {
    q: "Qu'est-ce que « Kasav » dans la cuisine haïtienne ?",
    options: ["Galette plate et sans levain à base de manioc râpé et pressé", "Plat de spaghetti relevé, souvent accompagné de saucisses type hot-dog, couramment servi au petit-déjeuner", "Semoule de maïs cuite façon polenta, souvent servie avec de la sauce pois", "Morceaux de porc marinés puis frits, l'un des plats les plus emblématiques d'Haïti"],
    correct: 0
  },
  {
    q: "Qu'est-ce que « Doukounou » dans la cuisine haïtienne ?",
    options: ["Tranches de plantain vert frites puis aplaties avant une seconde friture", "Gros mollusque marin préparé grillé ou en sauce, plat emblématique des régions côtières", "Semoule de maïs cuite façon polenta, souvent servie avec de la sauce pois", "Pudding de maïs sucré cuit, enveloppé dans une feuille de bananier"],
    correct: 3
  },
  {
    q: "Quel est l'ingrédient principal de « Akasan » ?",
    options: ["Maïs concassé et haricots", "Porc", "Farine de maïs, lait et cannelle", "Viande (bœuf, cabri ou dinde) en lanières"],
    correct: 2
  },
  {
    q: "Quel est l'ingrédient principal de « Rhum Barbancourt » ?",
    options: ["Jus de canne à sucre", "Viande de bœuf et légumes racines", "Chou, carottes et piment", "Farine de maïs, sucre et lait de coco"],
    correct: 0
  },
  {
    q: "Dans quelle catégorie culinaire classerait-on « Legim » ?",
    options: ["Plat principal (ragoût)", "Fritay / en-cas", "Sauce / accompagnement", "Boisson (liqueur)"],
    correct: 0
  },
  {
    q: "Quel est l'ingrédient principal de « Espageti ayisyen » ?",
    options: ["Farine de maïs, sucre et lait de coco", "Porc", "Pâtes spaghetti, souvent avec saucisse hot-dog", "Viande de bœuf et légumes racines"],
    correct: 2
  },
  {
    q: "Quel est l'ingrédient principal de « Bannann peze » ?",
    options: ["Malt et houblon", "Chou, carottes et piment", "Plantain vert", "Pâte feuilletée garnie de viande, de morue ou de légumes"],
    correct: 2
  },
  {
    q: "Dans quelle catégorie culinaire classerait-on « Clairin » ?",
    options: ["Boisson chaude", "Tartinade / condiment", "Plat principal (ragoût)", "Boisson (alcool)"],
    correct: 3
  },
  {
    q: "Qu'est-ce que « Fritay » dans la cuisine haïtienne ?",
    options: ["Confiserie croquante à base de rapadou mélangé à des arachides ou de la noix de coco râpée", "Biscuit dense et épicé, spécialité culinaire traditionnelle de la ville du Cap-Haïtien", "Condiment épicé à base de légumes marinés dans du vinaigre, servi avec les fritures", "Terme désignant un assortiment de fritures haïtiennes (griot, akra, bannann peze...), souvent vendu dans la rue"],
    correct: 3
  },
  {
    q: "Quel est l'ingrédient principal de « Mayi moulen » ?",
    options: ["Haricots réduits en purée", "Légumes variés (aubergine, chou, carotte...)", "Plantain vert", "Farine de maïs"],
    correct: 3
  },
  {
    q: "Qu'est-ce que « Marinad » dans la cuisine haïtienne ?",
    options: ["Terme désignant un assortiment de fritures haïtiennes (griot, akra, bannann peze...), souvent vendu dans la rue", "Riz cuit avec des haricots, l'un des accompagnements de base de la cuisine haïtienne", "Beignets frits à base de malanga râpé", "Beignets de pâte frite, parfois fourrés de morue ou de fruits de mer"],
    correct: 3
  },
  {
    q: "Dans quelle catégorie culinaire classerait-on « Pate » ?",
    options: ["Boisson chaude", "Boisson (bière)", "Plat principal (fruits de mer)", "Fritay / en-cas"],
    correct: 3
  },
  {
    q: "Dans quelle catégorie culinaire classerait-on « Tablet » ?",
    options: ["Pâtisserie / biscuit", "Confiserie", "Accompagnement (féculent)", "Soupe"],
    correct: 1
  },
  {
    q: "Qu'est-ce que « Clairin » dans la cuisine haïtienne ?",
    options: ["Soupe traditionnellement consommée le 1er janvier pour célébrer l'indépendance d'Haïti", "Chausson feuilleté, frit ou cuit au four, garni de viande, de morue ou de légumes", "Tranches de plantain vert frites puis aplaties avant une seconde friture", "Alcool distillé artisanalement à partir de jus de canne à sucre, non vieilli"],
    correct: 3
  },
  {
    q: "Quel est l'ingrédient principal de « Pikliz » ?",
    options: ["Giraumon (courge/potiron)", "Farine de maïs, lait et cannelle", "Plantain vert", "Chou, carottes et piment"],
    correct: 3
  },
  {
    q: "Quel est l'ingrédient principal de « Pate » ?",
    options: ["Conque (lambi)", "Riz et haricots rouges ou noirs", "Malanga râpé", "Pâte feuilletée garnie de viande, de morue ou de légumes"],
    correct: 3
  },
  {
    q: "En 2021, la soup joumou a été inscrite sur une liste prestigieuse de l'UNESCO. Laquelle ?",
    options: ["Liste du patrimoine mondial (sites naturels)", "Liste représentative du patrimoine culturel immatériel de l'humanité", "Liste des villes créatives de gastronomie", "Registre international des indications géographiques"],
    correct: 1
  },
  {
    q: "En quelle année la maison de rhum Barbancourt a-t-elle été fondée ?",
    options: ["1862", "1804", "1915", "1946"],
    correct: 0
  },
  {
    q: "Quelle brasserie produit la bière Prestige ?",
    options: ["La Brasserie Nationale d'Haïti (Brana)", "La Distillerie Barbancourt", "La Sucrerie Nationale", "La Minoterie d'Haïti"],
    correct: 0
  },
  {
    q: "Sous le régime colonial français, pourquoi la soup joumou est-elle devenue un symbole de liberté après 1804 ?",
    options: ["Parce que sa recette a été inventée par un chef français réputé", "Parce qu'elle était réservée aux colons et interdite aux personnes réduites en esclavage", "Parce qu'elle nécessitait des ingrédients importés très coûteux", "Parce qu'elle n'existait pas avant l'indépendance"],
    correct: 1
  },
  {
    q: "Qu'est-ce que le clairin, par rapport au rhum vieilli comme le Barbancourt ?",
    options: ["C'est le même produit, seul le nom change selon la région", "C'est un alcool de canne à sucre non vieilli, généralement produit de façon artisanale", "C'est une bière locale à base de canne à sucre", "C'est un vin de canne à sucre fermenté sans distillation"],
    correct: 1
  },
]

export default cuisineQuestions
