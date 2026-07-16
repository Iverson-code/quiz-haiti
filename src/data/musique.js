const musiqueQuestions = [
  {
    q: "Klass appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Époque coloniale à aujourd'hui", "Fondé en 2005", "Années 1960-1970", "Fondé en 1982"],
    correct: 1
  },
  {
    q: "Qu'est-ce que Fèt Gede exactement ?",
    options: ["Groupe", "Genre musical", "Artiste solo", "Festival/Événement culturel"],
    correct: 3
  },
  {
    q: "Quel trait particulier caractérise Rap kreyòl ?",
    options: ["Hip-hop chanté en créole haïtien", "Chansons engagées portant un message social ou politique", "Chanteuse engagée connue pour ses textes politiques", "Style de konpa romantique et mélodique"],
    correct: 0
  },
  {
    q: "Méringue haïtienne est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["XIXe siècle", "Années 1950-1960", "Fondé en 2018", "Années 1990-2000"],
    correct: 0
  },
  {
    q: "Kanaval (Carnaval haïtien) provient principalement de quelle zone ?",
    options: ["National (Port-au-Prince, Jacmel...)", "Port-au-Prince et diaspora", "Port-au-Prince / Cuba", "Régions rurales du Nord et du Sud"],
    correct: 0
  },
  {
    q: "Mizik angaje désigne principalement :",
    options: ["Artiste solo", "Groupe", "Instrument", "Genre musical"],
    correct: 3
  },
  {
    q: "Quelle caractéristique définit le mieux Djakout Mizik (Fabrice Rouzier) ?",
    options: ["Pianiste et arrangeur, cofondateur de Djakout Mizik", "Groupe majeur du konpa des années 1980", "Groupe de konpa contemporain très populaire chez les jeunes", "Groupe de konpa populaire des années 1990-2000"],
    correct: 0
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Kanaval (Carnaval haïtien) ?",
    options: ["National (surtout zones rurales)", "Port-au-Prince (famille Duplessis)", "Port-au-Prince (Hôtel Oloffson)", "National (Port-au-Prince, Jacmel...)"],
    correct: 3
  },
  {
    q: "Quelle caractéristique définit le mieux Tanbou ?",
    options: ["Coquillage utilisé comme instrument à vent rituel et festif", "DJ et producteur électro fusionnant konpa et musique électronique", "Groupe de mizik rasin dirigé par Richard Morse", "Tambour central des musiques vodou et rara"],
    correct: 3
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Banza ?",
    options: ["National (surtout zones rurales)", "Pétion-Ville", "National (tradition rara)", "National"],
    correct: 3
  },
  {
    q: "Où situe-t-on l'origine de Rap kreyòl ?",
    options: ["Port-au-Prince / international", "Pétion-Ville", "Port-au-Prince et diaspora", "Port-au-Prince"],
    correct: 2
  },
  {
    q: "Comment reconnaît-on Zing Experience parmi les autres éléments de la musique haïtienne ?",
    options: ["Artiste populaire mêlant konpa et musique urbaine", "Groupe de konpa reconnu pour ses harmonies vocales", "Groupe majeur de mizik rasin engagée", "Orchestre populaire du quartier de Bel-Air"],
    correct: 1
  },
  {
    q: "Mini-jazz est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Fondé en 1968", "Fondé en 1963", "Depuis les années 1970", "Années 1960-1970"],
    correct: 3
  },
  {
    q: "Quel trait particulier caractérise Djakout Mizik ?",
    options: ["Le plus grand des tambours dans un ensemble rituel", "Groupe de konpa issu de la scission de Djakout Mizik", "Groupe de konpa reconnu pour ses tubes dansants", "Rythme dansant à base de guitare, cuivres et percussions"],
    correct: 2
  },
  {
    q: "Quel élément résume le mieux Wyclef Jean ?",
    options: ["Rappeur et musicien, ex-membre des Fugees d'origine haïtienne", "Chanteur emblématique de konpa social et engagé", "Grand orchestre de konpa toujours actif", "Coquillage utilisé comme instrument à vent rituel et festif"],
    correct: 0
  },
  {
    q: "Quel trait particulier caractérise Kadans (Kadans Ranpa) ?",
    options: ["Figure populaire du konpa avant de devenir président d'Haïti", "Ancêtre du konpa mêlant jazz et rythmes afro-caribéens", "Trio de konpa formé par Carlo, Richard et Mickaël", "Groupe de konpa formé par d'anciens membres de Nu Look et Kreyòl La"],
    correct: 1
  },
  {
    q: "Où situe-t-on l'origine de Graj (güira) ?",
    options: ["National", "Port-au-Prince / diaspora", "National (surtout zones rurales)", "Port-au-Prince / New York"],
    correct: 0
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Banza ?",
    options: ["Instrument à percussion métallique gratté avec une baguette", "Le plus grand des tambours dans un ensemble rituel", "Chanteur, ancien leader de Zenglen puis Djakout Mizik", "Ancêtre du banjo d'origine afro-haïtienne"],
    correct: 3
  },
  {
    q: "Nu Look correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Artiste solo", "Groupe", "Instrument", "Festival/Événement culturel"],
    correct: 1
  },
  {
    q: "Quelle est la période de référence pour Konpa ?",
    options: ["Années 1980-1990", "Fondé en 1980", "Années 1950-1960", "Fondé en 2018"],
    correct: 2
  },
  {
    q: "Où situe-t-on l'origine de Système Band ?",
    options: ["Port-au-Prince (Hôtel Oloffson)", "Port-au-Prince / diaspora", "Port-au-Prince", "National (surtout zones rurales)"],
    correct: 2
  },
  {
    q: "Belo se distingue principalement par :",
    options: ["Chanteur fusionnant rock, reggae et konpa", "Chanteur emblématique de konpa social et engagé", "Coquillage utilisé comme instrument à vent rituel et festif", "Groupe de konpa reconnu pour ses harmonies vocales"],
    correct: 0
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Belo ?",
    options: ["Années 1950", "Depuis les années 2000", "Fondé en 2016", "Début du XXe siècle"],
    correct: 1
  },
  {
    q: "Où Rap kreyòl a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["Port-au-Prince et diaspora", "National (surtout zones rurales)", "Port-au-Prince (Hôtel Oloffson)", "Jacmel"],
    correct: 0
  },
  {
    q: "À quelle époque associe-t-on Nu Look ?",
    options: ["Depuis les années 2000", "Fondé en 1982", "Début du XXe siècle", "Fondé en 1998"],
    correct: 3
  },
  {
    q: "Quelle description correspond le mieux à Ibo Combo ?",
    options: ["Groupe de konpa fondé par une famille de musiciens", "Figure populaire du konpa avant de devenir président d'Haïti", "Groupe emblématique du konpa de la diaspora", "Orchestre historique du mini-jazz"],
    correct: 3
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Boule zombi ?",
    options: ["Fondé en 2005", "Années 1980-1990", "Années 1970-1980", "Fondé en 1962"],
    correct: 2
  },
  {
    q: "Comment reconnaît-on Konpa parmi les autres éléments de la musique haïtienne ?",
    options: ["Chanteur emblématique de konpa social et engagé", "Groupe emblématique du konpa de la diaspora", "Chanteuse engagée connue pour ses textes politiques", "Rythme dansant à base de guitare, cuivres et percussions"],
    correct: 3
  },
  {
    q: "Qu'est-ce qui distingue T-Vice sur le plan musical ou culturel ?",
    options: ["Instrument à percussion métallique gratté avec une baguette", "Groupe de mizik rasin dirigé par Richard Morse", "Chanteur engagé, figure de la mizik angaje", "Groupe de konpa fondé par une famille de musiciens"],
    correct: 3
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Djakout Mizik ?",
    options: ["Depuis les années 1970", "Années 1950", "Tradition annuelle (juillet)", "Fondé en 1990"],
    correct: 3
  },
  {
    q: "Quelle période correspond le mieux à Bel Air Orchestra ?",
    options: ["Années 1990-2000", "Fondé en 1965", "Années 1950", "Fondé en 2020"],
    correct: 1
  },
  {
    q: "BIC appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Fondé en 1965", "Début du XXe siècle", "Depuis les années 2010", "Années 1950"],
    correct: 2
  },
  {
    q: "Qu'est-ce qui distingue Les Frères Dejean sur le plan musical ou culturel ?",
    options: ["Chanteuse et actrice, figure de la chanson racine", "Chansons engagées portant un message social ou politique", "Groupe majeur du konpa des années 1980", "Fratrie fondatrice d'un grand orchestre de konpa"],
    correct: 3
  },
  {
    q: "Quelle période correspond le mieux à Graj (güira) ?",
    options: ["Fondé en 2007", "Années 1950", "Fondé en 2010", "Époque coloniale à aujourd'hui"],
    correct: 3
  },
  {
    q: "T-Vice est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Fondé en 1990", "Années 1980-1990", "XIXe siècle", "Fondé en 2005"],
    correct: 0
  },
  {
    q: "Quelle est la nature de Banza dans le paysage musical haïtien ?",
    options: ["Groupe", "Artiste solo", "Instrument", "Festival/Événement culturel"],
    correct: 2
  },
  {
    q: "Quelle est la nature de Twoubadou dans le paysage musical haïtien ?",
    options: ["Instrument", "Genre musical", "Festival/Événement culturel", "Artiste solo"],
    correct: 1
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Gypsies de Pétion-Ville ?",
    options: ["Régions rurales du Nord et du Sud", "Miami (diaspora)", "Port-au-Prince (famille Duplessis)", "Pétion-Ville"],
    correct: 3
  },
  {
    q: "Ti Manno se distingue principalement par :",
    options: ["Chanteur de konpa reconnu pour sa voix et ses ballades", "Groupe de konpa contemporain très populaire chez les jeunes", "Groupe de konpa reconnu pour ses tubes dansants", "Chanteur emblématique de konpa social et engagé"],
    correct: 3
  },
  {
    q: "Dans quelle décennie Tabou Combo a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Fondé en 1968", "Fondé en 1980", "Époque coloniale à aujourd'hui", "Depuis les années 1970"],
    correct: 0
  },
  {
    q: "Quel trait particulier caractérise Mizik angaje ?",
    options: ["Pianiste et arrangeur, cofondateur de Djakout Mizik", "Chansons engagées portant un message social ou politique", "Grand orchestre de konpa toujours actif", "DJ et producteur électro fusionnant konpa et musique électronique"],
    correct: 1
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Kanpèch ?",
    options: ["Orchestre régional connu dans le Nord d'Haïti", "Groupe majeur de mizik rasin engagée", "Groupe de konpa reconnu pour ses harmonies vocales", "Fratrie fondatrice d'un grand orchestre de konpa"],
    correct: 0
  },
  {
    q: "Quelle caractéristique définit le mieux Kanpèch ?",
    options: ["Musique festive liée aux célébrations agraires", "Artiste populaire mêlant konpa et musique urbaine", "Orchestre régional connu dans le Nord d'Haïti", "Hip-hop chanté en créole haïtien"],
    correct: 2
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Konpa Love ?",
    options: ["Années 1970-1980", "Années 1990-2000", "Années 1980", "Fondé en 1965"],
    correct: 1
  },
  {
    q: "Quelle caractéristique définit le mieux Skah Shah ?",
    options: ["Groupe de konpa fondé par une famille de musiciens", "Le plus grand des tambours dans un ensemble rituel", "Coquillage utilisé comme instrument à vent rituel et festif", "Groupe emblématique du konpa de la diaspora"],
    correct: 3
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux Ibo Combo ?",
    options: ["Instrument", "Groupe", "Festival/Événement culturel", "Artiste solo"],
    correct: 1
  },
  {
    q: "Quelle est la période de référence pour Boule zombi ?",
    options: ["Années 1990-2000", "Fondé en 1965", "Années 1960-1990", "Années 1970-1980"],
    correct: 3
  },
  {
    q: "À quelle époque associe-t-on Original Instrumental Sextet (OIS) ?",
    options: ["Fondé en 1963", "Fondé en 2016", "Fondé en 1962", "Années 1950-1960"],
    correct: 2
  },
  {
    q: "Quelle période correspond le mieux à Carimi ?",
    options: ["Fondé en 1968", "Fondé en 2016", "Fondé en 1996", "Époque coloniale"],
    correct: 2
  },
  {
    q: "Où Original Instrumental Sextet (OIS) a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["Cap-Haïtien", "National (Port-au-Prince, Jacmel...)", "Port-au-Prince", "Régions rurales"],
    correct: 2
  },
  {
    q: "Quel trait particulier caractérise Tanbou ?",
    options: ["Groupe de konpa contemporain très populaire chez les jeunes", "Orchestre de mini-jazz influent des années 1960-1970", "Chanteur mêlant konpa, RnB et musique urbaine", "Tambour central des musiques vodou et rara"],
    correct: 3
  },
  {
    q: "Quelle région ou ville est le berceau de Fabrice Rouzier ?",
    options: ["Miami (diaspora)", "Port-au-Prince", "Pétion-Ville", "National"],
    correct: 1
  },
  {
    q: "Comment définit-on Bel Air Orchestra dans la musique haïtienne ?",
    options: ["Groupe", "Festival/Événement culturel", "Artiste solo", "Genre musical"],
    correct: 0
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Boule zombi ?",
    options: ["Pianiste et producteur de konpa influent", "Style de konpa rapide et énergique pour la danse", "Trompette en bambou utilisée dans les groupes de rara", "Groupe de konpa new-generation à succès"],
    correct: 1
  },
  {
    q: "Kesta B appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Depuis les années 2010", "Fondé en 1996", "Fondé en 1966", "Depuis les années 1980"],
    correct: 0
  },
  {
    q: "D'où est originaire Tcha tcha ?",
    options: ["National (surtout rara)", "National (Port-au-Prince, Jacmel...)", "National", "Diaspora (New York)"],
    correct: 2
  },
  {
    q: "Quelle caractéristique définit le mieux Krezi Mizik ?",
    options: ["Groupe de konpa fondé par d'anciens membres de Kreyòl La", "Groupe de konpa new-generation à succès", "Chanteur emblématique de konpa social et engagé", "Orchestre régional connu dans le Nord d'Haïti"],
    correct: 0
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux Les Frères Dejean ?",
    options: ["Artiste solo", "Instrument", "Festival/Événement culturel", "Groupe"],
    correct: 3
  },
  {
    q: "Dans quelle catégorie classerait-on Coupé Cloué et l'Ensemble Select ?",
    options: ["Festival/Événement culturel", "Genre musical", "Groupe", "Instrument"],
    correct: 2
  },
  {
    q: "À quelle époque associe-t-on Zing Experience ?",
    options: ["Fondé en 2010", "Années 1950-1960", "Époque coloniale", "Fondé en 1996"],
    correct: 3
  },
  {
    q: "Fèt Gede est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Années 1970-1980", "Tradition annuelle (novembre)", "Années 1950-1960", "Années 1950"],
    correct: 1
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Michael Brun ?",
    options: ["Style de konpa rapide et énergique pour la danse", "Artiste populaire mêlant konpa et musique urbaine", "DJ et producteur électro fusionnant konpa et musique électronique", "Carnaval réputé pour ses masques et costumes artisanaux"],
    correct: 2
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux Kesta B ?",
    options: ["Instrument", "Festival/Événement culturel", "Groupe", "Artiste solo"],
    correct: 3
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Volo Volo ?",
    options: ["Fondé en 1998", "Début du XXe siècle", "Époque coloniale à aujourd'hui", "Fondé en 1975"],
    correct: 3
  },
  {
    q: "Comment qualifierait-on Zing Experience sur le plan musical ?",
    options: ["Festival/Événement culturel", "Groupe", "Artiste solo", "Genre musical"],
    correct: 1
  },
  {
    q: "Dans quelle décennie Conque (lambi) a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Années 1960-1970", "Années 1940-1990", "Fondé en 1998", "Époque coloniale à aujourd'hui"],
    correct: 3
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Original H (originaire de Brooklyn) ?",
    options: ["Pétion-Ville", "National (surtout rara)", "Port-au-Prince (famille Duplessis)", "Diaspora (New York)"],
    correct: 3
  },
  {
    q: "Tcha tcha est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Époque coloniale à aujourd'hui", "Fondé en 1998", "Années 1970-1980", "Fondé en 1968"],
    correct: 0
  },
  {
    q: "Qu'est-ce qui distingue Fabrice Rouzier sur le plan musical ou culturel ?",
    options: ["Pianiste et producteur de konpa influent", "Fusion de rythmes vodou traditionnels et de rock/pop", "Groupe de konpa formé par d'anciens membres de Nu Look et Kreyòl La", "Hip-hop chanté en créole haïtien"],
    correct: 0
  },
  {
    q: "Où Vaksin a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["National (tradition rara)", "Gonaïves / diaspora", "National (surtout zones rurales)", "Port-au-Prince / diaspora"],
    correct: 0
  },
  {
    q: "Quel trait particulier caractérise Mikaben ?",
    options: ["Chanteur de konpa reconnu pour sa voix et ses ballades", "DJ et producteur électro fusionnant konpa et musique électronique", "Auteur-compositeur de folk et chanson engagée", "Instrument à percussion métallique gratté avec une baguette"],
    correct: 0
  },
  {
    q: "À quelle époque associe-t-on Vayb ?",
    options: ["Fondé en 2018", "Fondé en 1975", "Fondé en 1989", "Fondé en 1980"],
    correct: 0
  },
  {
    q: "Quel lieu géographique est lié à Klass ?",
    options: ["Port-au-Prince", "Régions rurales du Nord et du Sud", "Diaspora et Port-au-Prince", "National (tradition rara)"],
    correct: 0
  },
  {
    q: "Quel lieu géographique est lié à Caribbean Sextet ?",
    options: ["Port-au-Prince", "Port-au-Prince / New York", "National (tradition rara)", "Diaspora (New York/Miami)"],
    correct: 0
  },
  {
    q: "Où Méringue haïtienne a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["Diaspora (New York)", "Diaspora et Port-au-Prince", "Port-au-Prince", "Régions rurales du Nord et du Sud"],
    correct: 2
  },
  {
    q: "Quel trait particulier caractérise Original Instrumental Sextet (OIS) ?",
    options: ["Groupe précurseur du mini-jazz haïtien", "Pionnier mondial du konpa avec des tubes internationaux", "Groupe de konpa reconnu pour ses harmonies vocales", "Figure populaire du konpa avant de devenir président d'Haïti"],
    correct: 0
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Tcha tcha ?",
    options: ["Années 1960-1970", "Années 1970-1980", "Fondé en 1989", "Époque coloniale à aujourd'hui"],
    correct: 3
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux Original H (originaire de Brooklyn) ?",
    options: ["Genre musical", "Instrument", "Festival/Événement culturel", "Artiste solo"],
    correct: 3
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Caribbean Sextet ?",
    options: ["National (tradition rara)", "Port-au-Prince", "Port-au-Prince / international", "National"],
    correct: 1
  },
  {
    q: "Qu'est-ce qui distingue Krezi Mizik sur le plan musical ou culturel ?",
    options: ["Groupe de konpa fondé par d'anciens membres de Kreyòl La", "Rythme dansant à base de guitare, cuivres et percussions", "Musique de rue processionnelle jouée en période de Carême", "Chanteuse surnommée « la Grande Dame de la chanson haïtienne »"],
    correct: 0
  },
  {
    q: "Comment définit-on Kanpèch dans la musique haïtienne ?",
    options: ["Artiste solo", "Genre musical", "Groupe", "Festival/Événement culturel"],
    correct: 2
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Toto Bissainthe ?",
    options: ["Maracas traditionnelles utilisées dans plusieurs genres", "Fusion du konpa avec le zouk antillais", "Rappeur et musicien, ex-membre des Fugees d'origine haïtienne", "Chanteuse et actrice, figure de la chanson racine"],
    correct: 3
  },
  {
    q: "Où Mikaben a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["Gonaïves / diaspora", "Port-au-Prince / diaspora", "Port-au-Prince / Cuba", "National (surtout zones rurales)"],
    correct: 1
  },
  {
    q: "Quel trait particulier caractérise Manno Charlemagne ?",
    options: ["Musique festive liée aux célébrations agraires", "Groupe de konpa reconnu pour ses harmonies vocales", "Chanteur engagé, figure de la mizik angaje", "Orchestre fondateur du style konpa dit méringue-konpa"],
    correct: 2
  },
  {
    q: "Quelle caractéristique définit le mieux Alan Cavé ?",
    options: ["Instrument à percussion métallique gratté avec une baguette", "Ancêtre du banjo d'origine afro-haïtienne", "Chanteur de konpa reconnu pour sa voix et ses ballades", "Chanteur, ancien leader de Zenglen puis Djakout Mizik"],
    correct: 3
  },
  {
    q: "À quelle époque associe-t-on RAM ?",
    options: ["Fondé en 2016", "Années 1980", "Depuis les années 1970", "Fondé en 1990"],
    correct: 3
  },
  {
    q: "Quelle est la période de référence pour Skah Shah ?",
    options: ["Fondé en 1974", "Années 1950-1960", "Tradition annuelle", "Époque coloniale à aujourd'hui"],
    correct: 0
  },
  {
    q: "Comment qualifierait-on Konpa Love sur le plan musical ?",
    options: ["Instrument", "Artiste solo", "Festival/Événement culturel", "Genre musical"],
    correct: 3
  },
  {
    q: "De quel type d'entité musicale s'agit-il pour Konpa ?",
    options: ["Festival/Événement culturel", "Groupe", "Genre musical", "Instrument"],
    correct: 2
  },
  {
    q: "À quelle époque associe-t-on Vaksin ?",
    options: ["Fondé en 2018", "Fondé en 1962", "Années 1950", "Époque coloniale à aujourd'hui"],
    correct: 3
  },
  {
    q: "Quelle est la période de référence pour Mizik rasin ?",
    options: ["Fondé en 1990", "Années 1980", "Époque coloniale à aujourd'hui", "Fondé en 2007"],
    correct: 1
  },
  {
    q: "Dans quelle décennie Beethova Obas a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Fondé en 2007", "Fondé en 1975", "Années 1950-1960", "Depuis les années 1980"],
    correct: 3
  },
  {
    q: "Quel lieu géographique est lié à Konpa ?",
    options: ["Diaspora (New York/Miami)", "Pétion-Ville / New York", "Port-au-Prince", "Port-au-Prince (famille Duplessis)"],
    correct: 2
  },
  {
    q: "Quelle période correspond le mieux à Nu Look ?",
    options: ["Fondé en 1998", "Début du XXe siècle", "Fondé en 1996", "Fondé en 1963"],
    correct: 0
  },
  {
    q: "Quel élément résume le mieux RAM ?",
    options: ["Trompette en bambou utilisée dans les groupes de rara", "Musique acoustique de guitare inspirée du son cubain", "Groupe de mizik rasin dirigé par Richard Morse", "Chansons engagées portant un message social ou politique"],
    correct: 2
  },
  {
    q: "Twoubadou est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Fondé en 1990", "Depuis les années 1990", "Années 1960-1970", "Début du XXe siècle"],
    correct: 3
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Beethova Obas ?",
    options: ["Diaspora et Port-au-Prince", "Jacmel", "Port-au-Prince", "New York (diaspora)"],
    correct: 2
  },
  {
    q: "Quel trait particulier caractérise Bel Air Orchestra ?",
    options: ["Chanteuse engagée connue pour ses textes politiques", "Fusion de rythmes vodou traditionnels et de rock/pop", "Style de konpa rapide et énergique pour la danse", "Orchestre populaire du quartier de Bel-Air"],
    correct: 3
  },
  {
    q: "Rap kreyòl désigne principalement :",
    options: ["Festival/Événement culturel", "Artiste solo", "Instrument", "Genre musical"],
    correct: 3
  },
  {
    q: "De quel type d'entité musicale s'agit-il pour Alan Cavé ?",
    options: ["Genre musical", "Artiste solo", "Festival/Événement culturel", "Instrument"],
    correct: 1
  },
  {
    q: "Kompa Dirèk désigne principalement :",
    options: ["Groupe", "Genre musical", "Artiste solo", "Instrument"],
    correct: 1
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Mizik vodou ?",
    options: ["National", "Pétion-Ville / New York", "Pétion-Ville", "National (surtout zones rurales)"],
    correct: 0
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Twoubadou ?",
    options: ["Années 1980", "Fondé en 1998", "Fondé en 2005", "Début du XXe siècle"],
    correct: 3
  },
  {
    q: "Quelle description correspond le mieux à Skah Shah ?",
    options: ["Groupe emblématique du konpa de la diaspora", "Festival mettant à l'honneur la mizik rasin", "Groupe de konpa populaire des années 1990-2000", "Ancêtre du konpa mêlant jazz et rythmes afro-caribéens"],
    correct: 0
  },
  {
    q: "Quel élément résume le mieux Djakout #1 ?",
    options: ["Chanteur engagé, figure de la mizik angaje", "Groupe pionnier de la mizik rasin", "Groupe né en 2010 d'une scission avec Djakout Mizik", "Trompette en bambou utilisée dans les groupes de rara"],
    correct: 2
  },
  {
    q: "Toto Bissainthe correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Groupe", "Festival/Événement culturel", "Artiste solo", "Genre musical"],
    correct: 2
  },
  {
    q: "Dans quelle catégorie classerait-on Les Frères Dejean ?",
    options: ["Festival/Événement culturel", "Artiste solo", "Instrument", "Groupe"],
    correct: 3
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Coupé Cloué et l'Ensemble Select ?",
    options: ["Fondé en 1963", "Fondé en 1990", "XIXe siècle", "Fondé en 1998"],
    correct: 0
  },
  {
    q: "Où Harmonik a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["Port-au-Prince / New York", "National (Port-au-Prince, Jacmel...)", "Port-au-Prince", "National (surtout zones rurales)"],
    correct: 2
  },
  {
    q: "J Perry appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Fondé en 1963", "Depuis les années 1990", "Depuis les années 2010", "Depuis les années 1970"],
    correct: 2
  },
  {
    q: "Comment reconnaît-on Kompa Dirèk parmi les autres éléments de la musique haïtienne ?",
    options: ["Style fondateur du konpa moderne à tempo régulier", "Groupe de konpa fondé par d'anciens membres de Kreyòl La", "Pianiste et producteur de konpa influent", "Groupe de konpa contemporain très populaire chez les jeunes"],
    correct: 0
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux Rara ?",
    options: ["Instrument", "Artiste solo", "Festival/Événement culturel", "Genre musical"],
    correct: 3
  },
  {
    q: "De quel type d'entité musicale s'agit-il pour Coupé Cloué et l'Ensemble Select ?",
    options: ["Genre musical", "Groupe", "Instrument", "Artiste solo"],
    correct: 1
  },
  {
    q: "Où Carnaval des Fleurs (Cap-Haïtien) a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["Cap-Haïtien", "Port-au-Prince et diaspora", "Diaspora (New York)", "Région frontalière (Sud-Est)"],
    correct: 0
  },
  {
    q: "Où Rara a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["Diaspora (New York)", "National (surtout rara)", "National (surtout zones rurales)", "Gonaïves / diaspora"],
    correct: 2
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Kadans (Kadans Ranpa) ?",
    options: ["New Jersey (diaspora)", "Port-au-Prince", "National (surtout zones rurales)", "Port-au-Prince et diaspora"],
    correct: 1
  },
  {
    q: "Si l'on devait classer Boukman Eksperyans, ce serait comme :",
    options: ["Festival/Événement culturel", "Groupe", "Genre musical", "Instrument"],
    correct: 1
  },
  {
    q: "Quelle est la période de référence pour Tcha tcha ?",
    options: ["XIXe siècle", "Années 1970-1980", "Époque coloniale à aujourd'hui", "Fondé en 2016"],
    correct: 2
  },
  {
    q: "D'où est originaire Zing Experience ?",
    options: ["New Jersey (diaspora)", "Port-au-Prince", "Diaspora (New York)", "National (mouvement culturel)"],
    correct: 1
  },
  {
    q: "Emeline Michel est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Années 1940-1990", "Début du XXe siècle", "Fondé en 1989", "Depuis les années 1980"],
    correct: 3
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Rap kreyòl ?",
    options: ["Hip-hop chanté en créole haïtien", "Orchestre historique du mini-jazz", "Style fondateur du konpa moderne à tempo régulier", "Groupe majeur du konpa des années 1980"],
    correct: 0
  },
  {
    q: "Quelle période correspond le mieux à Tcha tcha ?",
    options: ["Fondé en 1982", "Époque coloniale", "Époque coloniale à aujourd'hui", "Années 1970-1980"],
    correct: 2
  },
  {
    q: "Où Bel Air Orchestra a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["Port-au-Prince", "Diaspora (New York/Miami)", "Port-au-Prince (famille Duplessis)", "Jacmel"],
    correct: 0
  },
  {
    q: "Vayb est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Fondé en 2018", "Fondé en 1998", "Fondé en 1970", "Années 1950-1960"],
    correct: 0
  },
  {
    q: "À quelle époque associe-t-on Zenglen ?",
    options: ["Fondé en 1982", "Depuis les années 2000", "XIXe siècle", "Fondé en 1993"],
    correct: 3
  },
  {
    q: "À quelle époque associe-t-on Martha Jean-Claude ?",
    options: ["Années 1940-1990", "Années 1990-2000", "Fondé en 1982", "Fondé en 1978"],
    correct: 0
  },
  {
    q: "Si l'on devait classer Banza, ce serait comme :",
    options: ["Genre musical", "Artiste solo", "Festival/Événement culturel", "Instrument"],
    correct: 3
  },
  {
    q: "Quelle période correspond le mieux à Kai ?",
    options: ["Fondé en 1990", "Fondé en 1980", "Fondé en 1978", "Fondé en 2020"],
    correct: 3
  },
  {
    q: "Dans quelle catégorie classerait-on Mizik rasin ?",
    options: ["Instrument", "Festival/Événement culturel", "Artiste solo", "Genre musical"],
    correct: 3
  },
  {
    q: "Quelle est la nature de J Perry dans le paysage musical haïtien ?",
    options: ["Artiste solo", "Groupe", "Instrument", "Festival/Événement culturel"],
    correct: 0
  },
  {
    q: "Qu'est-ce que Boule zombi exactement ?",
    options: ["Groupe", "Artiste solo", "Genre musical", "Instrument"],
    correct: 2
  },
  {
    q: "Qu'est-ce qui distingue Skah Shah sur le plan musical ou culturel ?",
    options: ["Groupe emblématique du konpa de la diaspora", "Grand orchestre de konpa des années 1970-1980", "DJ et producteur électro fusionnant konpa et musique électronique", "Groupe de konpa new-generation à succès"],
    correct: 0
  },
  {
    q: "Où Klass a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["Régions rurales du Nord et du Sud", "New York (diaspora)", "Port-au-Prince", "Gonaïves / diaspora"],
    correct: 2
  },
  {
    q: "Où Festival Racines a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["National", "Port-au-Prince / diaspora", "Port-au-Prince (famille Duplessis)", "National (Port-au-Prince, Jacmel...)"],
    correct: 0
  },
  {
    q: "Quelle caractéristique définit le mieux Carimi ?",
    options: ["Groupe de konpa reconnu pour ses tubes dansants", "Groupe de konpa issu de la scission de Djakout Mizik", "Célébration vodou en l'honneur des esprits des morts", "Trio de konpa formé par Carlo, Richard et Mickaël"],
    correct: 3
  },
  {
    q: "Vaksin désigne principalement :",
    options: ["Genre musical", "Festival/Événement culturel", "Instrument", "Artiste solo"],
    correct: 2
  },
  {
    q: "Comment reconnaît-on Les Frères Dejean parmi les autres éléments de la musique haïtienne ?",
    options: ["Fratrie fondatrice d'un grand orchestre de konpa", "Groupe précurseur du mini-jazz haïtien", "Style fondateur du konpa moderne à tempo régulier", "Chants et percussions liés aux cérémonies religieuses vodou"],
    correct: 0
  },
  {
    q: "À quelle époque associe-t-on Coupé Cloué et l'Ensemble Select ?",
    options: ["XIXe siècle", "Fondé en 1963", "Années 1960-1970", "Fondé en 1968"],
    correct: 1
  },
  {
    q: "À quelle époque associe-t-on Rara ?",
    options: ["Depuis les années 1970", "Tradition annuelle (novembre)", "Fondé en 1966", "Époque coloniale à aujourd'hui"],
    correct: 3
  },
  {
    q: "Skah Shah se distingue principalement par :",
    options: ["Artiste populaire mêlant konpa et musique urbaine", "Carnaval d'été célèbre dans le Nord d'Haïti", "Groupe emblématique du konpa de la diaspora", "Grand orchestre de konpa toujours actif"],
    correct: 2
  },
  {
    q: "Où Gaga a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["National", "Port-au-Prince (famille Duplessis)", "Région frontalière (Sud-Est)", "New Jersey (diaspora)"],
    correct: 2
  },
  {
    q: "Comment reconnaît-on Emeline Michel parmi les autres éléments de la musique haïtienne ?",
    options: ["Chanteuse surnommée « la Grande Dame de la chanson haïtienne »", "DJ et producteur électro fusionnant konpa et musique électronique", "Ancêtre du konpa mêlant jazz et rythmes afro-caribéens", "Chants et percussions liés aux cérémonies religieuses vodou"],
    correct: 0
  },
  {
    q: "Comment définit-on Mizik angaje dans la musique haïtienne ?",
    options: ["Instrument", "Festival/Événement culturel", "Groupe", "Genre musical"],
    correct: 3
  },
  {
    q: "Où Banza a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["Port-au-Prince / diaspora", "Port-au-Prince / international", "Port-au-Prince / New York", "National"],
    correct: 3
  },
  {
    q: "Dans quelle catégorie classerait-on Djakout Mizik ?",
    options: ["Instrument", "Genre musical", "Artiste solo", "Groupe"],
    correct: 3
  },
  {
    q: "Quelle est la nature de Mini-jazz dans le paysage musical haïtien ?",
    options: ["Instrument", "Artiste solo", "Genre musical", "Groupe"],
    correct: 2
  },
  {
    q: "Comment reconnaît-on Carnaval des Fleurs (Cap-Haïtien) parmi les autres éléments de la musique haïtienne ?",
    options: ["Groupe de konpa reconnu pour ses harmonies vocales", "Carnaval d'été célèbre dans le Nord d'Haïti", "Pionnier mondial du konpa avec des tubes internationaux", "Festival mettant à l'honneur la mizik rasin"],
    correct: 1
  },
  {
    q: "Dans quelle catégorie classerait-on Graj (güira) ?",
    options: ["Instrument", "Festival/Événement culturel", "Genre musical", "Groupe"],
    correct: 0
  },
  {
    q: "Comment définit-on RAM dans la musique haïtienne ?",
    options: ["Groupe", "Instrument", "Artiste solo", "Genre musical"],
    correct: 0
  },
  {
    q: "Qu'est-ce qui distingue Original Instrumental Sextet (OIS) sur le plan musical ou culturel ?",
    options: ["Groupe précurseur du mini-jazz haïtien", "Groupe de konpa nouvelle génération", "Pionnière du folklore chanté haïtien", "Groupe de konpa fondé par une famille de musiciens"],
    correct: 0
  },
  {
    q: "Dans quelle décennie Les Frères Dejean a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Depuis les années 2000", "Fondé en 1974", "Fondé en 1970", "Depuis les années 1980"],
    correct: 2
  },
  {
    q: "Michael Brun se distingue principalement par :",
    options: ["Ancêtre du banjo d'origine afro-haïtienne", "DJ et producteur électro fusionnant konpa et musique électronique", "Rappeur et musicien, ex-membre des Fugees d'origine haïtienne", "Orchestre régional connu dans le Nord d'Haïti"],
    correct: 1
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Boukan Ginen ?",
    options: ["Groupe majeur de mizik rasin engagée", "Style de konpa romantique et mélodique", "Tambour central des musiques vodou et rara", "Chanteur de konpa reconnu pour sa voix et ses ballades"],
    correct: 0
  },
  {
    q: "Dans quelle catégorie classerait-on Konpa Love ?",
    options: ["Instrument", "Artiste solo", "Genre musical", "Festival/Événement culturel"],
    correct: 2
  },
  {
    q: "Si l'on devait classer Mizik vodou, ce serait comme :",
    options: ["Genre musical", "Artiste solo", "Festival/Événement culturel", "Instrument"],
    correct: 0
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Gaga ?",
    options: ["Années 1980-1990", "Époque coloniale à aujourd'hui", "Années 1950-1960", "Depuis les années 2010"],
    correct: 1
  },
  {
    q: "Si l'on devait classer Belo, ce serait comme :",
    options: ["Genre musical", "Artiste solo", "Festival/Événement culturel", "Groupe"],
    correct: 1
  },
  {
    q: "Les Frères Dejean désigne principalement :",
    options: ["Groupe", "Festival/Événement culturel", "Instrument", "Genre musical"],
    correct: 0
  },
  {
    q: "Quelle description correspond le mieux à Carnaval des Fleurs (Cap-Haïtien) ?",
    options: ["Maracas traditionnelles utilisées dans plusieurs genres", "Carnaval d'été célèbre dans le Nord d'Haïti", "Auteur-compositeur de folk et chanson engagée", "Groupe de konpa nouvelle génération"],
    correct: 1
  },
  {
    q: "Comment définit-on Alan Cavé dans la musique haïtienne ?",
    options: ["Artiste solo", "Groupe", "Genre musical", "Festival/Événement culturel"],
    correct: 0
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Vaksin ?",
    options: ["Époque coloniale à aujourd'hui", "Fondé en 1966", "Années 1960-1970", "Années 1940-1990"],
    correct: 0
  },
  {
    q: "Carimi se distingue principalement par :",
    options: ["Groupe emblématique du konpa de la diaspora", "Tambour central des musiques vodou et rara", "Trio de konpa formé par Carlo, Richard et Mickaël", "Pionnier du mini-jazz haïtien"],
    correct: 2
  },
  {
    q: "Boukan Ginen appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Années 1980-1990", "Fondé en 1989", "Depuis les années 1980", "Fondé en 2007"],
    correct: 1
  },
  {
    q: "Wyclef Jean désigne principalement :",
    options: ["Genre musical", "Instrument", "Festival/Événement culturel", "Artiste solo"],
    correct: 3
  },
  {
    q: "Où situe-t-on l'origine de Boukman Eksperyans ?",
    options: ["Port-au-Prince / Cuba", "National (Port-au-Prince, Jacmel...)", "Port-au-Prince", "New Jersey (diaspora)"],
    correct: 2
  },
  {
    q: "Dans quelle catégorie classerait-on Skah Shah ?",
    options: ["Genre musical", "Festival/Événement culturel", "Groupe", "Instrument"],
    correct: 2
  },
  {
    q: "Quel élément résume le mieux Djakout Mizik (Fabrice Rouzier) ?",
    options: ["Groupe de konpa fondé par d'anciens membres de Kreyòl La", "Grand orchestre de konpa toujours actif", "Pianiste et arrangeur, cofondateur de Djakout Mizik", "Tambour central des musiques vodou et rara"],
    correct: 2
  },
  {
    q: "Dans quelle décennie Fabrice Rouzier a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Depuis les années 1990", "Fondé en 1966", "XIXe siècle", "Fondé en 1970"],
    correct: 0
  },
  {
    q: "Klass est le plus étroitement associé(e) à quel lieu ?",
    options: ["National (surtout rara)", "Jacmel", "Port-au-Prince", "National"],
    correct: 2
  },
  {
    q: "Dans quelle décennie Gaga a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Fondé en 1980", "Époque coloniale à aujourd'hui", "Depuis les années 1970", "Fondé en 1968"],
    correct: 1
  },
  {
    q: "Si l'on devait classer Gaga, ce serait comme :",
    options: ["Artiste solo", "Festival/Événement culturel", "Groupe", "Genre musical"],
    correct: 3
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de BIC ?",
    options: ["Époque coloniale", "Fondé en 1968", "Fondé en 2010", "Depuis les années 2010"],
    correct: 3
  },
  {
    q: "Qu'est-ce qui distingue Carnaval des Fleurs (Cap-Haïtien) sur le plan musical ou culturel ?",
    options: ["Groupe de konpa fondé par d'anciens membres de Kreyòl La", "Musique festive liée aux célébrations agraires", "Ancêtre du banjo d'origine afro-haïtienne", "Carnaval d'été célèbre dans le Nord d'Haïti"],
    correct: 3
  },
  {
    q: "Quel trait particulier caractérise Tabou Combo ?",
    options: ["Groupe de konpa fondé par une famille de musiciens", "Pionnier mondial du konpa avec des tubes internationaux", "Groupe de konpa reconnu pour ses harmonies vocales", "Musique de rue processionnelle jouée en période de Carême"],
    correct: 1
  },
  {
    q: "Zenglen est le plus étroitement associé(e) à quel lieu ?",
    options: ["Port-au-Prince", "Port-au-Prince (Hôtel Oloffson)", "New York (diaspora)", "New Jersey (diaspora)"],
    correct: 0
  },
  {
    q: "Dans quelle catégorie classerait-on Klass ?",
    options: ["Artiste solo", "Groupe", "Festival/Événement culturel", "Instrument"],
    correct: 1
  },
  {
    q: "D'où est originaire Kreyòl La ?",
    options: ["Diaspora et Port-au-Prince", "Port-au-Prince", "New York (diaspora)", "Port-au-Prince / New York"],
    correct: 1
  },
  {
    q: "Quelle région ou ville est le berceau de Beethova Obas ?",
    options: ["Port-au-Prince", "New Jersey (diaspora)", "New York (diaspora)", "Pétion-Ville / New York"],
    correct: 0
  },
  {
    q: "Si l'on devait classer Tanbou, ce serait comme :",
    options: ["Genre musical", "Instrument", "Groupe", "Artiste solo"],
    correct: 1
  },
  {
    q: "Mini-jazz correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Artiste solo", "Festival/Événement culturel", "Genre musical", "Groupe"],
    correct: 2
  },
  {
    q: "Où RAM a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["Pétion-Ville / New York", "Port-au-Prince (famille Duplessis)", "Port-au-Prince (Hôtel Oloffson)", "National (tradition rara)"],
    correct: 2
  },
  {
    q: "Quelle période correspond le mieux à Djakout Mizik ?",
    options: ["Époque coloniale", "Années 1960-1990", "Depuis les années 2000", "Fondé en 1990"],
    correct: 3
  },
  {
    q: "Quelle description correspond le mieux à Original Instrumental Sextet (OIS) ?",
    options: ["Festival mettant à l'honneur la mizik rasin", "Musique de rue processionnelle jouée en période de Carême", "Groupe de konpa fondé par d'anciens membres de Kreyòl La", "Groupe précurseur du mini-jazz haïtien"],
    correct: 3
  },
  {
    q: "Gypsies de Pétion-Ville est le plus étroitement associé(e) à quel lieu ?",
    options: ["Pétion-Ville", "Port-au-Prince", "New Jersey (diaspora)", "National (surtout rara)"],
    correct: 0
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Vayb ?",
    options: ["Groupe de konpa contemporain très populaire chez les jeunes", "Chanteur emblématique de konpa social et engagé", "Chansons engagées portant un message social ou politique", "Style de konpa romantique et mélodique"],
    correct: 0
  },
  {
    q: "Quelle période correspond le mieux à Kadans (Kadans Ranpa) ?",
    options: ["Époque coloniale à aujourd'hui", "Années 1970-1980", "Années 1950-1960", "Fondé en 1968"],
    correct: 2
  },
  {
    q: "Coupé Cloué et l'Ensemble Select est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Depuis les années 1970", "Fondé en 1996", "Fondé en 1963", "Fondé en 1978"],
    correct: 2
  },
  {
    q: "Où situe-t-on l'origine de Tcha tcha ?",
    options: ["National", "Miami (diaspora)", "Pétion-Ville", "Port-au-Prince (Hôtel Oloffson)"],
    correct: 0
  },
  {
    q: "Quelle est la nature de Konpa Love dans le paysage musical haïtien ?",
    options: ["Groupe", "Artiste solo", "Genre musical", "Festival/Événement culturel"],
    correct: 2
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Mini-jazz ?",
    options: ["Pianiste et arrangeur, cofondateur de Djakout Mizik", "Orchestre historique du mini-jazz", "Petits orchestres de guitares électriques inspirés du rock", "Chants et percussions liés aux cérémonies religieuses vodou"],
    correct: 2
  },
  {
    q: "Où situe-t-on l'origine de Zenglen ?",
    options: ["New York (diaspora)", "Pétion-Ville", "Port-au-Prince / New York", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Beethova Obas ?",
    options: ["Chanteur emblématique de konpa social et engagé", "Musique acoustique de guitare inspirée du son cubain", "Auteur-compositeur de folk et chanson engagée", "Figure populaire du konpa avant de devenir président d'Haïti"],
    correct: 2
  },
  {
    q: "D'où est originaire Mizik vodou ?",
    options: ["Port-au-Prince (famille Duplessis)", "Régions rurales", "Diaspora et Port-au-Prince", "National"],
    correct: 3
  },
  {
    q: "Quel élément résume le mieux Boukan Ginen ?",
    options: ["Chanteuse et actrice, figure de la chanson racine", "Groupe majeur de mizik rasin engagée", "Groupe de mizik rasin dirigé par Richard Morse", "Chanteur fusionnant rock, reggae et konpa"],
    correct: 1
  },
  {
    q: "Quelle description correspond le mieux à Zing Experience ?",
    options: ["Groupe de konpa reconnu pour ses harmonies vocales", "Groupe de konpa fondé par d'anciens membres de Kreyòl La", "Musique de rue processionnelle jouée en période de Carême", "Groupe emblématique du konpa de la diaspora"],
    correct: 0
  },
  {
    q: "Quelle caractéristique définit le mieux Mikaben ?",
    options: ["Chanteur de konpa reconnu pour sa voix et ses ballades", "Pionnier du mini-jazz haïtien", "Groupe de mizik rasin dirigé par Richard Morse", "Groupe de konpa issu de la scission de Djakout Mizik"],
    correct: 0
  },
  {
    q: "Quelle est la période de référence pour Krezi Mizik ?",
    options: ["Années 1990-2000", "Fondé en 1968", "Fondé en 2016", "Fondé en 1970"],
    correct: 2
  },
  {
    q: "De quel type d'entité musicale s'agit-il pour Accordéon (twoubadou) ?",
    options: ["Festival/Événement culturel", "Artiste solo", "Instrument", "Groupe"],
    correct: 2
  },
  {
    q: "De quel type d'entité musicale s'agit-il pour Carnaval des Fleurs (Cap-Haïtien) ?",
    options: ["Groupe", "Artiste solo", "Festival/Événement culturel", "Instrument"],
    correct: 2
  },
  {
    q: "T-Vice désigne principalement :",
    options: ["Artiste solo", "Groupe", "Instrument", "Festival/Événement culturel"],
    correct: 1
  },
  {
    q: "D'où est originaire Les Shleu Shleu ?",
    options: ["Port-au-Prince", "Pétion-Ville", "Port-au-Prince / Cuba", "National (Port-au-Prince, Jacmel...)"],
    correct: 0
  },
  {
    q: "Djakout #1 correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Genre musical", "Instrument", "Artiste solo", "Groupe"],
    correct: 3
  },
  {
    q: "Comment reconnaît-on Farah Juste parmi les autres éléments de la musique haïtienne ?",
    options: ["Chanteur de konpa contemporain", "Orchestre fondateur du style konpa dit méringue-konpa", "Ancêtre du konpa mêlant jazz et rythmes afro-caribéens", "Chanteuse engagée connue pour ses textes politiques"],
    correct: 3
  },
  {
    q: "Si l'on devait classer Toto Bissainthe, ce serait comme :",
    options: ["Artiste solo", "Genre musical", "Festival/Événement culturel", "Groupe"],
    correct: 0
  },
  {
    q: "Comment définit-on Konpa dans la musique haïtienne ?",
    options: ["Groupe", "Instrument", "Genre musical", "Artiste solo"],
    correct: 2
  },
  {
    q: "Ibo Combo est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Depuis les années 1990", "Fondé en 1996", "Fondé en 1965", "Années 1960-1970"],
    correct: 2
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Harmonik ?",
    options: ["Groupe de konpa fondé par d'anciens membres de Kreyòl La", "Carnaval réputé pour ses masques et costumes artisanaux", "Groupe de konpa nouvelle génération", "Orchestre historique du mini-jazz"],
    correct: 2
  },
  {
    q: "Quelle description correspond le mieux à Boule zombi ?",
    options: ["Trompette en bambou utilisée dans les groupes de rara", "Groupe de konpa reconnu pour ses ballades romantiques", "DJ et producteur électro fusionnant konpa et musique électronique", "Style de konpa rapide et énergique pour la danse"],
    correct: 3
  },
  {
    q: "Quel trait particulier caractérise Beethova Obas ?",
    options: ["Coquillage utilisé comme instrument à vent rituel et festif", "Auteur-compositeur de folk et chanson engagée", "Danse de salon d'origine haïtienne aux rythmes élégants", "Orchestre régional connu dans le Nord d'Haïti"],
    correct: 1
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Belo ?",
    options: ["Orchestre fondateur du style konpa dit méringue-konpa", "Chanteur fusionnant rock, reggae et konpa", "Groupe de konpa issu de la scission de Djakout Mizik", "Style de konpa romantique et mélodique"],
    correct: 1
  },
  {
    q: "Quelle région ou ville est le berceau de Kanaval de Jacmel ?",
    options: ["Port-au-Prince / diaspora", "Jacmel", "Cap-Haïtien", "Pétion-Ville / New York"],
    correct: 1
  },
  {
    q: "Quelle description correspond le mieux à Gypsies de Pétion-Ville ?",
    options: ["Grande fête populaire précédant le Carême, rythmée par les orchestres de konpa", "Instrument central des ensembles de twoubadou", "Hip-hop chanté en créole haïtien", "Grand orchestre de konpa des années 1970-1980"],
    correct: 3
  },
  {
    q: "Les Frères Dejean est le plus étroitement associé(e) à quel lieu ?",
    options: ["Port-au-Prince / New York", "Port-au-Prince", "Jacmel", "New Jersey (diaspora)"],
    correct: 1
  },
  {
    q: "Quel élément résume le mieux Ibo Combo ?",
    options: ["Chanteur emblématique de konpa social et engagé", "Groupe emblématique du konpa de la diaspora", "Rappeur haïtiano-américain connu pour ses collaborations konpa-hip-hop", "Orchestre historique du mini-jazz"],
    correct: 3
  },
  {
    q: "Si l'on devait classer Kai, ce serait comme :",
    options: ["Festival/Événement culturel", "Instrument", "Groupe", "Artiste solo"],
    correct: 2
  },
  {
    q: "Quelle est la nature de Kesta B dans le paysage musical haïtien ?",
    options: ["Groupe", "Festival/Événement culturel", "Instrument", "Artiste solo"],
    correct: 3
  },
  {
    q: "Quelle caractéristique définit le mieux Klass ?",
    options: ["Groupe de konpa reconnu pour ses ballades romantiques", "Fratrie fondatrice d'un grand orchestre de konpa", "Pionnier du mini-jazz haïtien", "Trio de konpa formé par Carlo, Richard et Mickaël"],
    correct: 0
  },
  {
    q: "Où situe-t-on l'origine de Carimi ?",
    options: ["Miami (diaspora)", "New Jersey (diaspora)", "National (tradition rara)", "Port-au-Prince / New York"],
    correct: 0
  },
  {
    q: "Comment qualifierait-on Beethova Obas sur le plan musical ?",
    options: ["Genre musical", "Instrument", "Artiste solo", "Groupe"],
    correct: 2
  },
  {
    q: "Où Twoubadou a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["Port-au-Prince (Hôtel Oloffson)", "Port-au-Prince / New York", "Régions rurales du Nord et du Sud", "National (Port-au-Prince, Jacmel...)"],
    correct: 2
  },
  {
    q: "Quelle caractéristique définit le mieux Conque (lambi) ?",
    options: ["Trio de konpa formé par Carlo, Richard et Mickaël", "Coquillage utilisé comme instrument à vent rituel et festif", "Style de konpa romantique et mélodique", "Grand orchestre de konpa des années 1970-1980"],
    correct: 1
  },
  {
    q: "Roody Roodboy est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Fondé en 1975", "Depuis les années 2010", "Fondé en 1965", "Années 1950-1960"],
    correct: 1
  },
  {
    q: "Comment qualifierait-on Twoubadou sur le plan musical ?",
    options: ["Festival/Événement culturel", "Artiste solo", "Groupe", "Genre musical"],
    correct: 3
  },
  {
    q: "Quelle est la nature de Ti Manno dans le paysage musical haïtien ?",
    options: ["Artiste solo", "Festival/Événement culturel", "Groupe", "Genre musical"],
    correct: 0
  },
  {
    q: "Quelle période correspond le mieux à Ti Manno ?",
    options: ["Années 1970-1980", "Fondé en 1996", "Fondé en 1980", "Depuis les années 1990"],
    correct: 0
  },
  {
    q: "Où situe-t-on l'origine de Rara ?",
    options: ["Port-au-Prince / Cuba", "Diaspora (New York)", "National (surtout zones rurales)", "National (tradition rara)"],
    correct: 2
  },
  {
    q: "Comment qualifierait-on Mini-jazz sur le plan musical ?",
    options: ["Festival/Événement culturel", "Genre musical", "Artiste solo", "Instrument"],
    correct: 1
  },
  {
    q: "Quelle caractéristique définit le mieux Festival Racines ?",
    options: ["Chanteur mêlant konpa, RnB et musique urbaine", "Festival mettant à l'honneur la mizik rasin", "Orchestre régional connu dans le Nord d'Haïti", "Groupe de konpa réputé pour ses ballades"],
    correct: 1
  },
  {
    q: "Comment reconnaît-on Beethova Obas parmi les autres éléments de la musique haïtienne ?",
    options: ["Auteur-compositeur de folk et chanson engagée", "Orchestre de mini-jazz influent des années 1960-1970", "Hip-hop chanté en créole haïtien", "Danse de salon d'origine haïtienne aux rythmes élégants"],
    correct: 0
  },
  {
    q: "De quel type d'entité musicale s'agit-il pour Nu Look ?",
    options: ["Artiste solo", "Festival/Événement culturel", "Groupe", "Genre musical"],
    correct: 2
  },
  {
    q: "Comment reconnaît-on Mizik angaje parmi les autres éléments de la musique haïtienne ?",
    options: ["Chansons engagées portant un message social ou politique", "Artiste populaire mêlant konpa et musique urbaine", "Chanteur emblématique de konpa social et engagé", "Orchestre fondateur du style konpa dit méringue-konpa"],
    correct: 0
  },
  {
    q: "Konpa Love est le plus étroitement associé(e) à quel lieu ?",
    options: ["National (Port-au-Prince, Jacmel...)", "National (surtout zones rurales)", "Diaspora et Port-au-Prince", "Jacmel"],
    correct: 2
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de J Perry ?",
    options: ["Fondé en 1963", "Depuis les années 2010", "Fondé en 1966", "Fondé en 1990"],
    correct: 1
  },
  {
    q: "Krezi Mizik est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Fondé en 1963", "Fondé en 2016", "Fondé en 2005", "Années 1980"],
    correct: 1
  },
  {
    q: "Qu'est-ce que Système Band exactement ?",
    options: ["Groupe", "Genre musical", "Festival/Événement culturel", "Instrument"],
    correct: 0
  },
  {
    q: "Qu'est-ce qui distingue Emeline Michel sur le plan musical ou culturel ?",
    options: ["Groupe de konpa formé par d'anciens membres de Nu Look et Kreyòl La", "Chanteur fusionnant rock, reggae et konpa", "Groupe de konpa contemporain très populaire chez les jeunes", "Chanteuse surnommée « la Grande Dame de la chanson haïtienne »"],
    correct: 3
  },
  {
    q: "Mini-jazz est le plus étroitement associé(e) à quel lieu ?",
    options: ["Gonaïves / diaspora", "Port-au-Prince / international", "Cap-Haïtien", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Qu'est-ce que J Perry exactement ?",
    options: ["Genre musical", "Festival/Événement culturel", "Groupe", "Artiste solo"],
    correct: 3
  },
  {
    q: "Dans quelle décennie Ibo Combo a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Fondé en 1965", "Années 1990-2000", "Fondé en 2016", "Depuis les années 1990"],
    correct: 0
  },
  {
    q: "Dans quelle catégorie classerait-on Kanaval de Jacmel ?",
    options: ["Groupe", "Festival/Événement culturel", "Artiste solo", "Genre musical"],
    correct: 1
  },
  {
    q: "Nu Look provient principalement de quelle zone ?",
    options: ["Cap-Haïtien", "Miami (diaspora)", "Diaspora (New York/Miami)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Où situe-t-on l'origine de Krezi Mizik ?",
    options: ["Port-au-Prince (Hôtel Oloffson)", "Port-au-Prince / international", "Port-au-Prince", "Régions rurales du Nord et du Sud"],
    correct: 2
  },
  {
    q: "Les Shleu Shleu provient principalement de quelle zone ?",
    options: ["Jacmel", "Port-au-Prince", "National", "Port-au-Prince / New York"],
    correct: 1
  },
  {
    q: "Qu'est-ce que Kanaval (Carnaval haïtien) exactement ?",
    options: ["Genre musical", "Instrument", "Festival/Événement culturel", "Groupe"],
    correct: 2
  },
  {
    q: "Comment reconnaît-on Klass parmi les autres éléments de la musique haïtienne ?",
    options: ["Groupe de konpa reconnu pour ses ballades romantiques", "Chansons engagées portant un message social ou politique", "Groupe de konpa nouvelle génération", "Style fondateur du konpa moderne à tempo régulier"],
    correct: 0
  },
  {
    q: "Dans quelle catégorie classerait-on Tanbou ?",
    options: ["Artiste solo", "Genre musical", "Instrument", "Festival/Événement culturel"],
    correct: 2
  },
  {
    q: "Les Frères Dejean correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Artiste solo", "Genre musical", "Instrument", "Groupe"],
    correct: 3
  },
  {
    q: "T-Vice correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Genre musical", "Artiste solo", "Festival/Événement culturel", "Groupe"],
    correct: 3
  },
  {
    q: "Si l'on devait classer Tabou Combo, ce serait comme :",
    options: ["Genre musical", "Groupe", "Instrument", "Artiste solo"],
    correct: 1
  },
  {
    q: "Djakout Mizik désigne principalement :",
    options: ["Festival/Événement culturel", "Groupe", "Genre musical", "Instrument"],
    correct: 1
  },
  {
    q: "Quelle description correspond le mieux à Kanpèch ?",
    options: ["Orchestre régional connu dans le Nord d'Haïti", "Grande fête populaire précédant le Carême, rythmée par les orchestres de konpa", "Groupe de konpa réputé pour ses ballades", "Musique de rue processionnelle jouée en période de Carême"],
    correct: 0
  },
  {
    q: "Quelle période correspond le mieux à Manman tanbou ?",
    options: ["Fondé en 1990", "Époque coloniale à aujourd'hui", "Fondé en 1962", "Fondé en 1975"],
    correct: 1
  },
  {
    q: "Quelle région ou ville est le berceau de Kompa Dirèk ?",
    options: ["Miami (diaspora)", "Port-au-Prince (famille Duplessis)", "Port-au-Prince", "New Jersey (diaspora)"],
    correct: 2
  },
  {
    q: "Quelle caractéristique définit le mieux Ti Manno ?",
    options: ["Autre nom sous lequel Djakout Mizik est parfois connu à ses débuts", "Carnaval d'été célèbre dans le Nord d'Haïti", "Chanteur emblématique de konpa social et engagé", "Groupe de konpa issu de la scission de Djakout Mizik"],
    correct: 2
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux Caribbean Sextet ?",
    options: ["Instrument", "Groupe", "Festival/Événement culturel", "Artiste solo"],
    correct: 1
  },
  {
    q: "J Perry correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Artiste solo", "Genre musical", "Instrument", "Groupe"],
    correct: 0
  },
  {
    q: "Où Accordéon (twoubadou) a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["Régions rurales du Nord et du Sud", "Régions rurales", "Port-au-Prince / New York", "New York (diaspora)"],
    correct: 1
  },
  {
    q: "D'où est originaire Gypsies de Pétion-Ville ?",
    options: ["National", "Miami (diaspora)", "Port-au-Prince (Hôtel Oloffson)", "Pétion-Ville"],
    correct: 3
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Wyclef Jean ?",
    options: ["Fondé en 1963", "Depuis les années 1990", "Fondé en 1974", "Fondé en 2020"],
    correct: 1
  },
  {
    q: "Boukan Ginen provient principalement de quelle zone ?",
    options: ["Port-au-Prince", "Diaspora (New York)", "Cap-Haïtien", "Région frontalière (Sud-Est)"],
    correct: 0
  },
  {
    q: "Dans quelle catégorie classerait-on J Perry ?",
    options: ["Genre musical", "Artiste solo", "Groupe", "Instrument"],
    correct: 1
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Farah Juste ?",
    options: ["Port-au-Prince et diaspora", "Diaspora (New York)", "Jacmel", "National (tradition rara)"],
    correct: 1
  },
  {
    q: "D'où est originaire Alan Cavé ?",
    options: ["Pétion-Ville", "Régions rurales", "Port-au-Prince", "Port-au-Prince / international"],
    correct: 2
  },
  {
    q: "Quelle description correspond le mieux à Roody Roodboy ?",
    options: ["Groupe de konpa nouvelle génération", "Artiste populaire mêlant konpa et musique urbaine", "Groupe majeur du konpa des années 1980", "Groupe de konpa populaire des années 1990-2000"],
    correct: 1
  },
  {
    q: "Qu'est-ce qui distingue Konpa sur le plan musical ou culturel ?",
    options: ["Groupe précurseur du mini-jazz haïtien", "Rythme dansant à base de guitare, cuivres et percussions", "Groupe de konpa populaire des années 1990-2000", "Musique festive liée aux célébrations agraires"],
    correct: 1
  },
  {
    q: "Quelle description correspond le mieux à BIC ?",
    options: ["Rappeur pionnier du rap kreyòl", "Tambour central des musiques vodou et rara", "Grand orchestre de konpa toujours actif", "Chanteur engagé, figure de la mizik angaje"],
    correct: 0
  },
  {
    q: "Boukman Eksperyans se distingue principalement par :",
    options: ["Ancêtre du konpa mêlant jazz et rythmes afro-caribéens", "Auteur-compositeur de folk et chanson engagée", "Groupe pionnier de la mizik rasin", "Carnaval réputé pour ses masques et costumes artisanaux"],
    correct: 2
  },
  {
    q: "Graj (güira) provient principalement de quelle zone ?",
    options: ["Port-au-Prince / Cuba", "New York (diaspora)", "Port-au-Prince / diaspora", "National"],
    correct: 3
  },
  {
    q: "Où situe-t-on l'origine de Toto Bissainthe ?",
    options: ["Port-au-Prince / international", "Port-au-Prince / diaspora", "Port-au-Prince (Hôtel Oloffson)", "National (tradition rara)"],
    correct: 1
  },
  {
    q: "Quelle description correspond le mieux à Martha Jean-Claude ?",
    options: ["Rappeur et musicien, ex-membre des Fugees d'origine haïtienne", "Groupe de mizik rasin dirigé par Richard Morse", "Pionnière du folklore chanté haïtien", "Trio de konpa formé par Carlo, Richard et Mickaël"],
    correct: 2
  },
  {
    q: "Emeline Michel désigne principalement :",
    options: ["Artiste solo", "Instrument", "Festival/Événement culturel", "Groupe"],
    correct: 0
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux Carimi ?",
    options: ["Festival/Événement culturel", "Instrument", "Artiste solo", "Groupe"],
    correct: 3
  },
  {
    q: "Qu'est-ce que Tcha tcha exactement ?",
    options: ["Festival/Événement culturel", "Instrument", "Artiste solo", "Genre musical"],
    correct: 1
  },
  {
    q: "Quel trait particulier caractérise T-Vice ?",
    options: ["Groupe de konpa fondé par une famille de musiciens", "Rythme dansant à base de guitare, cuivres et percussions", "Groupe de konpa issu de la scission de Djakout Mizik", "Style de konpa romantique et mélodique"],
    correct: 0
  },
  {
    q: "Dans quelle catégorie classerait-on Carnaval des Fleurs (Cap-Haïtien) ?",
    options: ["Artiste solo", "Groupe", "Festival/Événement culturel", "Genre musical"],
    correct: 2
  },
  {
    q: "Qu'est-ce qui distingue Manman tanbou sur le plan musical ou culturel ?",
    options: ["Le plus grand des tambours dans un ensemble rituel", "Musique festive liée aux célébrations agraires", "Chansons engagées portant un message social ou politique", "Orchestre populaire du quartier de Bel-Air"],
    correct: 0
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Volo Volo ?",
    options: ["Jacmel", "National (Port-au-Prince, Jacmel...)", "Port-au-Prince", "Diaspora (New York)"],
    correct: 2
  },
  {
    q: "Quelle est la période de référence pour Bel Air Orchestra ?",
    options: ["XIXe siècle", "Fondé en 1982", "Fondé en 1965", "Fondé en 1996"],
    correct: 2
  },
  {
    q: "Dans quelle catégorie classerait-on Fèt Gede ?",
    options: ["Festival/Événement culturel", "Groupe", "Instrument", "Artiste solo"],
    correct: 0
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Festival Racines ?",
    options: ["Fondé en 1974", "Depuis les années 1990", "Années 1940-1990", "Fondé en 1998"],
    correct: 1
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Kompa Dirèk ?",
    options: ["Fondé en 1982", "Fondé en 1962", "Tradition annuelle (juillet)", "Années 1950"],
    correct: 3
  },
  {
    q: "À quelle époque associe-t-on Mizik rasin ?",
    options: ["Années 1980", "Années 1970-1980", "Depuis les années 2000", "Depuis les années 1990"],
    correct: 0
  },
  {
    q: "Quelle description correspond le mieux à Harmonik ?",
    options: ["Style de konpa rapide et énergique pour la danse", "Groupe pionnier de la mizik rasin", "Groupe de konpa nouvelle génération", "Chanteur, ancien leader de Zenglen puis Djakout Mizik"],
    correct: 2
  },
  {
    q: "De quel type d'entité musicale s'agit-il pour Martha Jean-Claude ?",
    options: ["Groupe", "Festival/Événement culturel", "Artiste solo", "Genre musical"],
    correct: 2
  },
  {
    q: "Zing Experience provient principalement de quelle zone ?",
    options: ["New Jersey (diaspora)", "National", "Port-au-Prince", "Diaspora (New York)"],
    correct: 2
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Système Band ?",
    options: ["Années 1970-1980", "Années 1990-2000", "Fondé en 1982", "Depuis les années 2000"],
    correct: 2
  },
  {
    q: "Quelle est la période de référence pour Djakout Mizik (Fabrice Rouzier) ?",
    options: ["Depuis les années 1980", "Depuis les années 1990", "Fondé en 1978", "Fondé en 1980"],
    correct: 1
  },
  {
    q: "Quelle période correspond le mieux à Fèt Gede ?",
    options: ["Fondé en 2007", "Tradition annuelle (novembre)", "Fondé en 1968", "Fondé en 1998"],
    correct: 1
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux Tabou Combo ?",
    options: ["Instrument", "Groupe", "Festival/Événement culturel", "Genre musical"],
    correct: 1
  },
  {
    q: "Quelle caractéristique définit le mieux Kadans (Kadans Ranpa) ?",
    options: ["Festival mettant à l'honneur la mizik rasin", "Ancêtre du konpa mêlant jazz et rythmes afro-caribéens", "Chanteur fusionnant rock, reggae et konpa", "Grande fête populaire précédant le Carême, rythmée par les orchestres de konpa"],
    correct: 1
  },
  {
    q: "Quel lieu géographique est lié à Banza ?",
    options: ["Port-au-Prince (famille Duplessis)", "National", "Régions rurales", "Région frontalière (Sud-Est)"],
    correct: 1
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Rap kreyòl ?",
    options: ["Fondé en 1968", "Années 1990-2000", "Depuis les années 1970", "Fondé en 1989"],
    correct: 1
  },
  {
    q: "Où situe-t-on l'origine de Skah Shah ?",
    options: ["New York (diaspora)", "Jacmel", "Cap-Haïtien", "National (surtout zones rurales)"],
    correct: 0
  },
  {
    q: "Quel élément résume le mieux Gypsies de Pétion-Ville ?",
    options: ["Grand orchestre de konpa des années 1970-1980", "Chanteur fusionnant rock, reggae et konpa", "Groupe majeur du konpa des années 1980", "Festival mettant à l'honneur la mizik rasin"],
    correct: 0
  },
  {
    q: "Quel trait particulier caractérise Mizik vodou ?",
    options: ["Musique festive liée aux célébrations agraires", "Carnaval d'été célèbre dans le Nord d'Haïti", "Chants et percussions liés aux cérémonies religieuses vodou", "DJ et producteur électro fusionnant konpa et musique électronique"],
    correct: 2
  },
  {
    q: "Quel lieu géographique est lié à Mizik vodou ?",
    options: ["Port-au-Prince / international", "National", "Port-au-Prince / New York", "Jacmel"],
    correct: 1
  },
  {
    q: "Où BIC a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["Diaspora et Port-au-Prince", "Port-au-Prince", "Cap-Haïtien", "Régions rurales du Nord et du Sud"],
    correct: 1
  },
  {
    q: "Où situe-t-on l'origine de RAM ?",
    options: ["Port-au-Prince (famille Duplessis)", "National (surtout zones rurales)", "Diaspora (New York/Miami)", "Port-au-Prince (Hôtel Oloffson)"],
    correct: 3
  },
  {
    q: "Quelle est la nature de Tanbou dans le paysage musical haïtien ?",
    options: ["Groupe", "Artiste solo", "Festival/Événement culturel", "Instrument"],
    correct: 3
  },
  {
    q: "Quelle période correspond le mieux à Mini-jazz ?",
    options: ["Fondé en 1978", "Années 1960-1970", "Années 1980", "Fondé en 1990"],
    correct: 1
  },
  {
    q: "Les Shleu Shleu se distingue principalement par :",
    options: ["Ancêtre du banjo d'origine afro-haïtienne", "Grande fête populaire précédant le Carême, rythmée par les orchestres de konpa", "Orchestre régional connu dans le Nord d'Haïti", "Pionnier du mini-jazz haïtien"],
    correct: 3
  },
  {
    q: "Quelle est la période de référence pour Les Shleu Shleu ?",
    options: ["Tradition annuelle", "Tradition annuelle (juillet)", "Fondé en 1963", "Fondé en 1962"],
    correct: 2
  },
  {
    q: "À quelle époque associe-t-on Djakout Mizik ?",
    options: ["Fondé en 1982", "Fondé en 1990", "Tradition annuelle (novembre)", "Fondé en 1998"],
    correct: 1
  },
  {
    q: "Quelle caractéristique définit le mieux Emeline Michel ?",
    options: ["Chanteuse surnommée « la Grande Dame de la chanson haïtienne »", "Fusion du konpa avec le zouk antillais", "Carnaval d'été célèbre dans le Nord d'Haïti", "Chansons engagées portant un message social ou politique"],
    correct: 0
  },
  {
    q: "Kai se distingue principalement par :",
    options: ["Chanteur, ancien leader de Zenglen puis Djakout Mizik", "Groupe de konpa réputé pour ses ballades", "Célébration vodou en l'honneur des esprits des morts", "Groupe de konpa formé par d'anciens membres de Nu Look et Kreyòl La"],
    correct: 3
  },
  {
    q: "Comment qualifierait-on Djakout Mizik sur le plan musical ?",
    options: ["Festival/Événement culturel", "Instrument", "Artiste solo", "Groupe"],
    correct: 3
  },
  {
    q: "Comment définit-on Les Frères Dejean dans la musique haïtienne ?",
    options: ["Instrument", "Groupe", "Genre musical", "Festival/Événement culturel"],
    correct: 1
  },
  {
    q: "Comment définit-on Wyclef Jean dans la musique haïtienne ?",
    options: ["Artiste solo", "Genre musical", "Groupe", "Instrument"],
    correct: 0
  },
  {
    q: "Quelle caractéristique définit le mieux Twoubadou ?",
    options: ["Musique acoustique de guitare inspirée du son cubain", "Chants et percussions liés aux cérémonies religieuses vodou", "Groupe pionnier de la mizik rasin", "Groupe de konpa nouvelle génération"],
    correct: 0
  },
  {
    q: "Kai provient principalement de quelle zone ?",
    options: ["Port-au-Prince", "National (tradition rara)", "Jacmel", "Port-au-Prince / international"],
    correct: 0
  },
  {
    q: "Quelle région ou ville est le berceau de Les Shleu Shleu ?",
    options: ["National (Port-au-Prince, Jacmel...)", "National", "Port-au-Prince", "Régions rurales du Nord et du Sud"],
    correct: 2
  },
  {
    q: "Quelle période correspond le mieux à Méringue haïtienne ?",
    options: ["Fondé en 1990", "Fondé en 2005", "XIXe siècle", "Depuis les années 1980"],
    correct: 2
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Coupé Cloué et l'Ensemble Select ?",
    options: ["Fondé en 1996", "Époque coloniale", "Années 1990-2000", "Fondé en 1963"],
    correct: 3
  },
  {
    q: "Quelle période correspond le mieux à Belo ?",
    options: ["Depuis les années 2000", "Fondé en 1980", "Années 1940-1990", "Début du XXe siècle"],
    correct: 0
  },
  {
    q: "Comment définit-on Zing Experience dans la musique haïtienne ?",
    options: ["Groupe", "Genre musical", "Artiste solo", "Festival/Événement culturel"],
    correct: 0
  },
  {
    q: "Dans quelle décennie T-Vice a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Fondé en 1980", "Fondé en 1966", "Années 1940-1990", "Fondé en 1990"],
    correct: 3
  },
  {
    q: "Si l'on devait classer Alan Cavé, ce serait comme :",
    options: ["Instrument", "Groupe", "Genre musical", "Artiste solo"],
    correct: 3
  },
  {
    q: "Carnaval des Fleurs (Cap-Haïtien) désigne principalement :",
    options: ["Artiste solo", "Groupe", "Festival/Événement culturel", "Genre musical"],
    correct: 2
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Belo ?",
    options: ["Fondé en 1975", "Fondé en 2016", "Depuis les années 2000", "Fondé en 1970"],
    correct: 2
  },
  {
    q: "Où Ti Manno a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["Port-au-Prince", "Diaspora et Port-au-Prince", "Jacmel", "National"],
    correct: 0
  },
  {
    q: "Qu'est-ce que Caribbean Sextet exactement ?",
    options: ["Instrument", "Genre musical", "Festival/Événement culturel", "Groupe"],
    correct: 3
  },
  {
    q: "Quelle est la nature de Accordéon (twoubadou) dans le paysage musical haïtien ?",
    options: ["Festival/Événement culturel", "Groupe", "Artiste solo", "Instrument"],
    correct: 3
  },
  {
    q: "Quelle caractéristique définit le mieux Gaga ?",
    options: ["Instrument central des ensembles de twoubadou", "Musique festive liée aux célébrations agraires", "DJ et producteur électro fusionnant konpa et musique électronique", "Rappeur pionnier du rap kreyòl"],
    correct: 1
  },
  {
    q: "À quelle époque associe-t-on Rap kreyòl ?",
    options: ["Tradition annuelle", "Fondé en 1978", "Années 1990-2000", "Années 1980-1990"],
    correct: 2
  },
  {
    q: "Caribbean Sextet correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Genre musical", "Instrument", "Festival/Événement culturel", "Groupe"],
    correct: 3
  },
  {
    q: "Quel lieu géographique est lié à Wyclef Jean ?",
    options: ["Port-au-Prince / diaspora", "New Jersey (diaspora)", "Diaspora et Port-au-Prince", "Régions rurales"],
    correct: 1
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Wyclef Jean ?",
    options: ["Années 1950", "Tradition annuelle (juillet)", "Fondé en 1996", "Depuis les années 1990"],
    correct: 3
  },
  {
    q: "D'où est originaire Festival Racines ?",
    options: ["National", "Port-au-Prince / Cuba", "Pétion-Ville", "Région frontalière (Sud-Est)"],
    correct: 0
  },
  {
    q: "Quelle période correspond le mieux à Kanpèch ?",
    options: ["Fondé en 2010", "Fondé en 2005", "Fondé en 1975", "Fondé en 2007"],
    correct: 2
  },
  {
    q: "Quelle description correspond le mieux à Kanaval de Jacmel ?",
    options: ["DJ et producteur électro fusionnant konpa et musique électronique", "Orchestre fondateur du style konpa dit méringue-konpa", "Orchestre régional connu dans le Nord d'Haïti", "Carnaval réputé pour ses masques et costumes artisanaux"],
    correct: 3
  },
  {
    q: "Krezi Mizik appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Années 1990-2000", "Tradition annuelle (juillet)", "Fondé en 2016", "Fondé en 1968"],
    correct: 2
  },
  {
    q: "Djakout Mizik (Fabrice Rouzier) provient principalement de quelle zone ?",
    options: ["Port-au-Prince", "Port-au-Prince / New York", "New York (diaspora)", "National (tradition rara)"],
    correct: 0
  },
  {
    q: "Qu'est-ce qui distingue Fèt Gede sur le plan musical ou culturel ?",
    options: ["Artiste populaire mêlant konpa et musique urbaine", "Groupe de mizik rasin dirigé par Richard Morse", "Célébration vodou en l'honneur des esprits des morts", "Grande fête populaire précédant le Carême, rythmée par les orchestres de konpa"],
    correct: 2
  },
  {
    q: "D'où est originaire Magnum Band ?",
    options: ["Port-au-Prince / New York", "National (tradition rara)", "National (Port-au-Prince, Jacmel...)", "Diaspora (New York/Miami)"],
    correct: 0
  },
  {
    q: "Dans quelle catégorie classerait-on Banza ?",
    options: ["Instrument", "Festival/Événement culturel", "Groupe", "Artiste solo"],
    correct: 0
  },
  {
    q: "Zouk haïtien provient principalement de quelle zone ?",
    options: ["National (surtout zones rurales)", "Région frontalière (Sud-Est)", "Diaspora (New York/Miami)", "Pétion-Ville / New York"],
    correct: 2
  },
  {
    q: "Quel élément résume le mieux Tcha tcha ?",
    options: ["Groupe de konpa réputé pour ses ballades", "Maracas traditionnelles utilisées dans plusieurs genres", "Chansons engagées portant un message social ou politique", "Groupe de mizik rasin dirigé par Richard Morse"],
    correct: 1
  },
  {
    q: "Quelle région ou ville est le berceau de Volo Volo ?",
    options: ["Gonaïves / diaspora", "Cap-Haïtien", "Miami (diaspora)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Quel lieu géographique est lié à Conque (lambi) ?",
    options: ["Jacmel", "Diaspora (New York/Miami)", "National (surtout rara)", "Port-au-Prince / New York"],
    correct: 2
  },
  {
    q: "Quel lieu géographique est lié à Kanaval (Carnaval haïtien) ?",
    options: ["Miami (diaspora)", "National (Port-au-Prince, Jacmel...)", "Port-au-Prince / New York", "Diaspora (New York/Miami)"],
    correct: 1
  },
  {
    q: "Où situe-t-on l'origine de Fèt Gede ?",
    options: ["National (tradition rara)", "Port-au-Prince", "Région frontalière (Sud-Est)", "National"],
    correct: 3
  },
  {
    q: "Dans quelle décennie Djakout #1 a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Fondé en 2018", "Fondé en 1963", "Fondé en 2010", "Fondé en 1965"],
    correct: 2
  },
  {
    q: "Mizik rasin est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Années 1960-1970", "Années 1980", "Fondé en 1996", "Fondé en 1989"],
    correct: 1
  },
  {
    q: "Kreyòl La appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Années 1990-2000", "Tradition annuelle (novembre)", "Fondé en 2007", "Années 1960-1970"],
    correct: 2
  },
  {
    q: "Les Shleu Shleu désigne principalement :",
    options: ["Instrument", "Groupe", "Festival/Événement culturel", "Artiste solo"],
    correct: 1
  },
  {
    q: "Comment définit-on Klass dans la musique haïtienne ?",
    options: ["Genre musical", "Groupe", "Instrument", "Festival/Événement culturel"],
    correct: 1
  },
  {
    q: "D'où est originaire Rap kreyòl ?",
    options: ["Région frontalière (Sud-Est)", "Port-au-Prince / New York", "Port-au-Prince", "Port-au-Prince et diaspora"],
    correct: 3
  },
  {
    q: "Twoubadou est le plus étroitement associé(e) à quel lieu ?",
    options: ["Régions rurales du Nord et du Sud", "National (surtout rara)", "Port-au-Prince / diaspora", "Port-au-Prince / Cuba"],
    correct: 0
  },
  {
    q: "Si l'on devait classer Rap kreyòl, ce serait comme :",
    options: ["Genre musical", "Groupe", "Artiste solo", "Festival/Événement culturel"],
    correct: 0
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Bel Air Orchestra ?",
    options: ["Tradition annuelle (novembre)", "Fondé en 1965", "Fondé en 1975", "Tradition annuelle"],
    correct: 1
  },
  {
    q: "Rara provient principalement de quelle zone ?",
    options: ["Port-au-Prince / international", "Région frontalière (Sud-Est)", "Port-au-Prince / Cuba", "National (surtout zones rurales)"],
    correct: 3
  },
  {
    q: "Manman tanbou est le plus étroitement associé(e) à quel lieu ?",
    options: ["Cap-Haïtien", "National (mouvement culturel)", "Gonaïves / diaspora", "National"],
    correct: 3
  },
  {
    q: "Qu'est-ce qui distingue Coupé Cloué et l'Ensemble Select sur le plan musical ou culturel ?",
    options: ["Auteur-compositeur de folk et chanson engagée", "Chanteuse surnommée « la Grande Dame de la chanson haïtienne »", "Orchestre fondateur du style konpa dit méringue-konpa", "Chanteur engagé, figure de la mizik angaje"],
    correct: 2
  },
  {
    q: "Les Frères Dejean provient principalement de quelle zone ?",
    options: ["Port-au-Prince", "Pétion-Ville / New York", "Jacmel", "Gonaïves / diaspora"],
    correct: 0
  },
  {
    q: "Quel trait particulier caractérise Michael Brun ?",
    options: ["DJ et producteur électro fusionnant konpa et musique électronique", "Grand orchestre de konpa toujours actif", "Hip-hop chanté en créole haïtien", "Auteur-compositeur de folk et chanson engagée"],
    correct: 0
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Volo Volo ?",
    options: ["Fondé en 1978", "Depuis les années 2010", "Fondé en 1970", "Fondé en 1975"],
    correct: 3
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Mikaben ?",
    options: ["Depuis les années 2000", "Depuis les années 1980", "Tradition annuelle", "Fondé en 2005"],
    correct: 0
  },
  {
    q: "Si l'on devait classer Fèt Gede, ce serait comme :",
    options: ["Instrument", "Festival/Événement culturel", "Groupe", "Genre musical"],
    correct: 1
  },
  {
    q: "Les Shleu Shleu est le plus étroitement associé(e) à quel lieu ?",
    options: ["Cap-Haïtien", "Régions rurales", "Port-au-Prince", "Port-au-Prince et diaspora"],
    correct: 2
  },
  {
    q: "Où Farah Juste a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["Pétion-Ville", "Port-au-Prince / international", "Port-au-Prince et diaspora", "Diaspora (New York)"],
    correct: 3
  },
  {
    q: "Comment définit-on Kreyòl La dans la musique haïtienne ?",
    options: ["Instrument", "Artiste solo", "Genre musical", "Groupe"],
    correct: 3
  },
  {
    q: "D'où est originaire Méringue haïtienne ?",
    options: ["Diaspora (New York/Miami)", "Port-au-Prince", "Port-au-Prince (Hôtel Oloffson)", "Diaspora et Port-au-Prince"],
    correct: 1
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on T-Vice ?",
    options: ["Fondé en 1990", "Depuis les années 1970", "Époque coloniale", "Fondé en 2018"],
    correct: 0
  },
  {
    q: "D'où est originaire Zouk haïtien ?",
    options: ["Pétion-Ville / New York", "Diaspora (New York/Miami)", "National (Port-au-Prince, Jacmel...)", "National"],
    correct: 1
  },
  {
    q: "Quel lieu géographique est lié à Les Frères Dejean ?",
    options: ["Port-au-Prince", "Miami (diaspora)", "Diaspora (New York)", "Diaspora (New York/Miami)"],
    correct: 0
  },
  {
    q: "Kadans (Kadans Ranpa) provient principalement de quelle zone ?",
    options: ["Pétion-Ville", "Diaspora (New York)", "Port-au-Prince / international", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Quelle région ou ville est le berceau de Toto Bissainthe ?",
    options: ["National (surtout rara)", "National (tradition rara)", "New Jersey (diaspora)", "Port-au-Prince / diaspora"],
    correct: 3
  },
  {
    q: "Quel élément résume le mieux Manno Charlemagne ?",
    options: ["Coquillage utilisé comme instrument à vent rituel et festif", "Ancêtre du banjo d'origine afro-haïtienne", "Chanteur engagé, figure de la mizik angaje", "Groupe de konpa contemporain très populaire chez les jeunes"],
    correct: 2
  },
  {
    q: "De quel type d'entité musicale s'agit-il pour Kreyòl La ?",
    options: ["Groupe", "Instrument", "Genre musical", "Artiste solo"],
    correct: 0
  },
  {
    q: "Tcha tcha provient principalement de quelle zone ?",
    options: ["Port-au-Prince", "Port-au-Prince / New York", "Cap-Haïtien", "National"],
    correct: 3
  },
  {
    q: "Quelle description correspond le mieux à Festival Racines ?",
    options: ["Festival mettant à l'honneur la mizik rasin", "Groupe majeur du konpa des années 1980", "Hip-hop chanté en créole haïtien", "Groupe de konpa contemporain très populaire chez les jeunes"],
    correct: 0
  },
  {
    q: "Dans quelle décennie Zouk haïtien a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["XIXe siècle", "Fondé en 1965", "Années 1980-1990", "Fondé en 2005"],
    correct: 2
  },
  {
    q: "Dans quelle catégorie classerait-on Magnum Band ?",
    options: ["Artiste solo", "Genre musical", "Groupe", "Instrument"],
    correct: 2
  },
  {
    q: "Quelle caractéristique définit le mieux Système Band ?",
    options: ["Danse de salon d'origine haïtienne aux rythmes élégants", "Groupe de konpa réputé pour ses ballades", "Carnaval d'été célèbre dans le Nord d'Haïti", "Grand orchestre de konpa toujours actif"],
    correct: 3
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Toto Bissainthe ?",
    options: ["Fondé en 1965", "Années 1960-1990", "Fondé en 1982", "Années 1980-1990"],
    correct: 1
  },
  {
    q: "Rap kreyòl est le plus étroitement associé(e) à quel lieu ?",
    options: ["Port-au-Prince et diaspora", "New York (diaspora)", "National (mouvement culturel)", "National (tradition rara)"],
    correct: 0
  },
  {
    q: "Manman tanbou appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Années 1990-2000", "Années 1940-1990", "Fondé en 1978", "Époque coloniale à aujourd'hui"],
    correct: 3
  },
  {
    q: "D'où est originaire Manman tanbou ?",
    options: ["New Jersey (diaspora)", "National", "National (mouvement culturel)", "Régions rurales"],
    correct: 1
  },
  {
    q: "Quelle période correspond le mieux à Caribbean Sextet ?",
    options: ["Fondé en 1996", "Années 1970-1980", "Fondé en 1963", "Fondé en 1966"],
    correct: 3
  },
  {
    q: "Quelle région ou ville est le berceau de Sweet Micky (Michel Martelly) ?",
    options: ["Port-au-Prince", "Région frontalière (Sud-Est)", "National (surtout zones rurales)", "Port-au-Prince / diaspora"],
    correct: 0
  },
  {
    q: "Si l'on devait classer Emeline Michel, ce serait comme :",
    options: ["Artiste solo", "Groupe", "Genre musical", "Instrument"],
    correct: 0
  },
  {
    q: "Fèt Gede appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Depuis les années 2000", "Tradition annuelle (novembre)", "XIXe siècle", "Tradition annuelle"],
    correct: 1
  },
  {
    q: "Zouk haïtien correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Groupe", "Instrument", "Festival/Événement culturel", "Genre musical"],
    correct: 3
  },
  {
    q: "Comment reconnaît-on Festival Racines parmi les autres éléments de la musique haïtienne ?",
    options: ["Musique festive liée aux célébrations agraires", "Musique acoustique de guitare inspirée du son cubain", "Orchestre populaire du quartier de Bel-Air", "Festival mettant à l'honneur la mizik rasin"],
    correct: 3
  },
  {
    q: "Quel trait particulier caractérise Ti Manno ?",
    options: ["Chanteur emblématique de konpa social et engagé", "Chants et percussions liés aux cérémonies religieuses vodou", "Ancêtre du konpa mêlant jazz et rythmes afro-caribéens", "Pionnier mondial du konpa avec des tubes internationaux"],
    correct: 0
  },
  {
    q: "Accordéon (twoubadou) correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Festival/Événement culturel", "Genre musical", "Groupe", "Instrument"],
    correct: 3
  },
  {
    q: "Quelle région ou ville est le berceau de Kreyòl La ?",
    options: ["Diaspora (New York)", "Port-au-Prince (Hôtel Oloffson)", "Port-au-Prince / Cuba", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Méringue haïtienne ?",
    options: ["Depuis les années 2000", "Fondé en 1974", "XIXe siècle", "Fondé en 1970"],
    correct: 2
  },
  {
    q: "Quelle région ou ville est le berceau de Rap kreyòl ?",
    options: ["National (tradition rara)", "National (Port-au-Prince, Jacmel...)", "Port-au-Prince et diaspora", "Port-au-Prince / international"],
    correct: 2
  },
  {
    q: "Quel lieu géographique est lié à Méringue haïtienne ?",
    options: ["National (mouvement culturel)", "National", "National (tradition rara)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Quelle période correspond le mieux à Kreyòl La ?",
    options: ["Années 1960-1970", "Fondé en 2007", "Depuis les années 2010", "Fondé en 2018"],
    correct: 1
  },
  {
    q: "D'où est originaire Emeline Michel ?",
    options: ["Gonaïves / diaspora", "Port-au-Prince", "Pétion-Ville", "National"],
    correct: 0
  },
  {
    q: "De quel type d'entité musicale s'agit-il pour Graj (güira) ?",
    options: ["Festival/Événement culturel", "Instrument", "Genre musical", "Groupe"],
    correct: 1
  },
  {
    q: "Dans quelle décennie Harmonik a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Depuis les années 2010", "XIXe siècle", "Tradition annuelle (juillet)", "Fondé en 2010"],
    correct: 3
  },
  {
    q: "Comment qualifierait-on Boukman Eksperyans sur le plan musical ?",
    options: ["Instrument", "Artiste solo", "Groupe", "Festival/Événement culturel"],
    correct: 2
  },
  {
    q: "Dans quelle décennie Mikaben a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Depuis les années 1980", "Fondé en 2020", "Années 1940-1990", "Depuis les années 2000"],
    correct: 3
  },
  {
    q: "Dans quelle décennie Graj (güira) a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Fondé en 2010", "Époque coloniale à aujourd'hui", "Depuis les années 2010", "Depuis les années 1970"],
    correct: 1
  },
  {
    q: "Dans quelle catégorie classerait-on Rap kreyòl ?",
    options: ["Instrument", "Artiste solo", "Festival/Événement culturel", "Genre musical"],
    correct: 3
  },
  {
    q: "Quelle région ou ville est le berceau de Kai ?",
    options: ["Port-au-Prince", "Régions rurales du Nord et du Sud", "National (surtout rara)", "Port-au-Prince / Cuba"],
    correct: 0
  },
  {
    q: "Djakout Mizik (Fabrice Rouzier) appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Fondé en 1993", "Fondé en 1975", "Depuis les années 2000", "Depuis les années 1990"],
    correct: 3
  },
  {
    q: "À quelle époque associe-t-on Tabou Combo ?",
    options: ["Époque coloniale à aujourd'hui", "Fondé en 1968", "Fondé en 2016", "Années 1960-1990"],
    correct: 1
  },
  {
    q: "Qu'est-ce que Mikaben exactement ?",
    options: ["Instrument", "Genre musical", "Artiste solo", "Groupe"],
    correct: 2
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Les Shleu Shleu ?",
    options: ["Grand orchestre de konpa toujours actif", "Pionnier du mini-jazz haïtien", "Groupe de konpa formé par d'anciens membres de Nu Look et Kreyòl La", "Tambour central des musiques vodou et rara"],
    correct: 1
  },
  {
    q: "Tanbou correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Groupe", "Genre musical", "Artiste solo", "Instrument"],
    correct: 3
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Beethova Obas ?",
    options: ["Depuis les années 1980", "Depuis les années 1990", "Fondé en 1980", "Années 1970-1980"],
    correct: 0
  },
  {
    q: "Système Band provient principalement de quelle zone ?",
    options: ["Gonaïves / diaspora", "Diaspora et Port-au-Prince", "National", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Kreyòl La ?",
    options: ["Port-au-Prince", "Miami (diaspora)", "National (tradition rara)", "Port-au-Prince / Cuba"],
    correct: 0
  },
  {
    q: "Dans quelle catégorie classerait-on Kadans (Kadans Ranpa) ?",
    options: ["Genre musical", "Instrument", "Artiste solo", "Festival/Événement culturel"],
    correct: 0
  },
  {
    q: "De quel type d'entité musicale s'agit-il pour Mizik angaje ?",
    options: ["Genre musical", "Festival/Événement culturel", "Groupe", "Artiste solo"],
    correct: 0
  },
  {
    q: "Dans quelle décennie Festival Racines a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Fondé en 1974", "Fondé en 1990", "Années 1940-1990", "Depuis les années 1990"],
    correct: 3
  },
  {
    q: "Magnum Band appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Fondé en 1980", "Années 1990-2000", "Depuis les années 1970", "Fondé en 1975"],
    correct: 0
  },
  {
    q: "Qu'est-ce que Kompa Dirèk exactement ?",
    options: ["Artiste solo", "Genre musical", "Instrument", "Festival/Événement culturel"],
    correct: 1
  },
  {
    q: "Où situe-t-on l'origine de Méringue haïtienne ?",
    options: ["New Jersey (diaspora)", "Régions rurales", "Port-au-Prince", "Diaspora (New York/Miami)"],
    correct: 2
  },
  {
    q: "Quelle est la période de référence pour Mikaben ?",
    options: ["Fondé en 1970", "Fondé en 1965", "Années 1960-1970", "Depuis les années 2000"],
    correct: 3
  },
  {
    q: "Où Manno Charlemagne a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["Port-au-Prince / Cuba", "Port-au-Prince / New York", "Port-au-Prince", "Pétion-Ville / New York"],
    correct: 2
  },
  {
    q: "Quelle est la période de référence pour Volo Volo ?",
    options: ["Fondé en 2020", "Tradition annuelle (juillet)", "Fondé en 1975", "Fondé en 1998"],
    correct: 2
  },
  {
    q: "Quelle région ou ville est le berceau de Ti Manno ?",
    options: ["Régions rurales du Nord et du Sud", "Port-au-Prince", "Diaspora (New York/Miami)", "National (tradition rara)"],
    correct: 1
  },
  {
    q: "Quelle région ou ville est le berceau de Carnaval des Fleurs (Cap-Haïtien) ?",
    options: ["National (surtout zones rurales)", "Cap-Haïtien", "Port-au-Prince", "Jacmel"],
    correct: 1
  },
  {
    q: "Si l'on devait classer Djakout Mizik (Fabrice Rouzier), ce serait comme :",
    options: ["Artiste solo", "Genre musical", "Groupe", "Festival/Événement culturel"],
    correct: 0
  },
  {
    q: "Quelle est la période de référence pour Graj (güira) ?",
    options: ["XIXe siècle", "Époque coloniale à aujourd'hui", "Depuis les années 2010", "Années 1980-1990"],
    correct: 1
  },
  {
    q: "Quel lieu géographique est lié à Original Instrumental Sextet (OIS) ?",
    options: ["Gonaïves / diaspora", "Jacmel", "Port-au-Prince", "National (surtout zones rurales)"],
    correct: 2
  },
  {
    q: "D'où est originaire Mikaben ?",
    options: ["Port-au-Prince / New York", "Port-au-Prince / diaspora", "Port-au-Prince (Hôtel Oloffson)", "Régions rurales"],
    correct: 1
  },
  {
    q: "Konpa est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Années 1980-1990", "Fondé en 1963", "Années 1950-1960", "Fondé en 1998"],
    correct: 2
  },
  {
    q: "Comment reconnaît-on Tcha tcha parmi les autres éléments de la musique haïtienne ?",
    options: ["Maracas traditionnelles utilisées dans plusieurs genres", "Groupe de konpa fondé par d'anciens membres de Kreyòl La", "Musique acoustique de guitare inspirée du son cubain", "Chanteuse surnommée « la Grande Dame de la chanson haïtienne »"],
    correct: 0
  },
  {
    q: "Où situe-t-on l'origine de Original Instrumental Sextet (OIS) ?",
    options: ["National (mouvement culturel)", "National (surtout zones rurales)", "Port-au-Prince et diaspora", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Où situe-t-on l'origine de Mikaben ?",
    options: ["Port-au-Prince / diaspora", "Cap-Haïtien", "Diaspora (New York)", "Pétion-Ville"],
    correct: 0
  },
  {
    q: "À quelle époque associe-t-on Kai ?",
    options: ["Fondé en 2020", "Tradition annuelle (novembre)", "Fondé en 1996", "Années 1950-1960"],
    correct: 0
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Original Instrumental Sextet (OIS) ?",
    options: ["Tradition annuelle", "Fondé en 1962", "Tradition annuelle (juillet)", "Depuis les années 2000"],
    correct: 1
  },
  {
    q: "Graj (güira) est le plus étroitement associé(e) à quel lieu ?",
    options: ["Port-au-Prince (famille Duplessis)", "Miami (diaspora)", "National", "Gonaïves / diaspora"],
    correct: 2
  },
  {
    q: "De quel type d'entité musicale s'agit-il pour Kai ?",
    options: ["Genre musical", "Instrument", "Groupe", "Festival/Événement culturel"],
    correct: 2
  },
  {
    q: "Kreyòl La provient principalement de quelle zone ?",
    options: ["New York (diaspora)", "Port-au-Prince", "National (tradition rara)", "Diaspora et Port-au-Prince"],
    correct: 1
  },
  {
    q: "Qu'est-ce qui distingue Manno Charlemagne sur le plan musical ou culturel ?",
    options: ["Groupe de konpa issu de la scission de Djakout Mizik", "Chanteuse engagée connue pour ses textes politiques", "Fusion du konpa avec le zouk antillais", "Chanteur engagé, figure de la mizik angaje"],
    correct: 3
  },
  {
    q: "Si l'on devait classer Djakout #1, ce serait comme :",
    options: ["Genre musical", "Instrument", "Festival/Événement culturel", "Groupe"],
    correct: 3
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Emeline Michel ?",
    options: ["Chanteuse surnommée « la Grande Dame de la chanson haïtienne »", "Rappeur et musicien, ex-membre des Fugees d'origine haïtienne", "Groupe de konpa nouvelle génération", "Chanteuse engagée connue pour ses textes politiques"],
    correct: 0
  },
  {
    q: "Quelle région ou ville est le berceau de Graj (güira) ?",
    options: ["National", "National (mouvement culturel)", "National (tradition rara)", "Port-au-Prince / diaspora"],
    correct: 0
  },
  {
    q: "Konpa Love provient principalement de quelle zone ?",
    options: ["Diaspora et Port-au-Prince", "Pétion-Ville / New York", "Port-au-Prince / international", "Miami (diaspora)"],
    correct: 0
  },
  {
    q: "Quel trait particulier caractérise Martha Jean-Claude ?",
    options: ["Pionnière du folklore chanté haïtien", "Pianiste et arrangeur, cofondateur de Djakout Mizik", "Groupe emblématique du konpa de la diaspora", "Groupe de mizik rasin dirigé par Richard Morse"],
    correct: 0
  },
  {
    q: "Dans quelle décennie Zing Experience a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Fondé en 1974", "Années 1960-1990", "Depuis les années 2010", "Fondé en 1996"],
    correct: 3
  },
  {
    q: "Qu'est-ce qui distingue Kanaval (Carnaval haïtien) sur le plan musical ou culturel ?",
    options: ["Fusion du konpa avec le zouk antillais", "Le plus grand des tambours dans un ensemble rituel", "Grande fête populaire précédant le Carême, rythmée par les orchestres de konpa", "Style fondateur du konpa moderne à tempo régulier"],
    correct: 2
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de RAM ?",
    options: ["Fondé en 1990", "Années 1980-1990", "Fondé en 1966", "Fondé en 2010"],
    correct: 0
  },
  {
    q: "Quel élément résume le mieux Skah Shah ?",
    options: ["Chanteur de konpa contemporain", "Groupe de konpa issu de la scission de Djakout Mizik", "Groupe emblématique du konpa de la diaspora", "Pionnier mondial du konpa avec des tubes internationaux"],
    correct: 2
  },
  {
    q: "Kai correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Instrument", "Groupe", "Genre musical", "Artiste solo"],
    correct: 1
  },
  {
    q: "À quelle époque associe-t-on Klass ?",
    options: ["Années 1940-1990", "Époque coloniale", "Fondé en 2005", "Fondé en 1996"],
    correct: 2
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux Roody Roodboy ?",
    options: ["Genre musical", "Artiste solo", "Groupe", "Festival/Événement culturel"],
    correct: 1
  },
  {
    q: "Quel lieu géographique est lié à Kanpèch ?",
    options: ["Cap-Haïtien", "Port-au-Prince (famille Duplessis)", "National (Port-au-Prince, Jacmel...)", "Port-au-Prince / New York"],
    correct: 0
  },
  {
    q: "Kanaval (Carnaval haïtien) correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Genre musical", "Festival/Événement culturel", "Artiste solo", "Groupe"],
    correct: 1
  },
  {
    q: "Ibo Combo désigne principalement :",
    options: ["Festival/Événement culturel", "Genre musical", "Artiste solo", "Groupe"],
    correct: 3
  },
  {
    q: "Quel élément résume le mieux Kesta B ?",
    options: ["Chanteuse engagée connue pour ses textes politiques", "Groupe emblématique du konpa de la diaspora", "Fratrie fondatrice d'un grand orchestre de konpa", "Chanteur de konpa contemporain"],
    correct: 3
  },
  {
    q: "Comment définit-on Zouk haïtien dans la musique haïtienne ?",
    options: ["Genre musical", "Artiste solo", "Instrument", "Groupe"],
    correct: 0
  },
  {
    q: "Quelle est la nature de Mizik rasin dans le paysage musical haïtien ?",
    options: ["Genre musical", "Artiste solo", "Festival/Événement culturel", "Groupe"],
    correct: 0
  },
  {
    q: "À quelle époque associe-t-on Wyclef Jean ?",
    options: ["Depuis les années 1990", "Tradition annuelle", "Époque coloniale", "Fondé en 1974"],
    correct: 0
  },
  {
    q: "Quelle est la ville ou région d'origine associée à T-Vice ?",
    options: ["Régions rurales", "Cap-Haïtien", "New Jersey (diaspora)", "Port-au-Prince (famille Duplessis)"],
    correct: 3
  },
  {
    q: "Système Band est le plus étroitement associé(e) à quel lieu ?",
    options: ["Région frontalière (Sud-Est)", "Port-au-Prince", "Port-au-Prince (Hôtel Oloffson)", "Diaspora (New York/Miami)"],
    correct: 1
  },
  {
    q: "Quelle caractéristique définit le mieux Ibo Combo ?",
    options: ["Orchestre historique du mini-jazz", "Musique de rue processionnelle jouée en période de Carême", "Hip-hop chanté en créole haïtien", "Célébration vodou en l'honneur des esprits des morts"],
    correct: 0
  },
  {
    q: "Quelle caractéristique définit le mieux Boukan Ginen ?",
    options: ["Ancêtre du konpa mêlant jazz et rythmes afro-caribéens", "Chanteur engagé, figure de la mizik angaje", "Auteur-compositeur de folk et chanson engagée", "Groupe majeur de mizik rasin engagée"],
    correct: 3
  },
  {
    q: "D'où est originaire Klass ?",
    options: ["Port-au-Prince / Cuba", "Port-au-Prince / diaspora", "New York (diaspora)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Dans quelle décennie Gypsies de Pétion-Ville a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Fondé en 1982", "Fondé en 1970", "Années 1980", "Fondé en 1978"],
    correct: 1
  },
  {
    q: "Comment reconnaît-on J Perry parmi les autres éléments de la musique haïtienne ?",
    options: ["Tambour central des musiques vodou et rara", "Chanteur mêlant konpa, RnB et musique urbaine", "Orchestre de mini-jazz influent des années 1960-1970", "Style fondateur du konpa moderne à tempo régulier"],
    correct: 1
  },
  {
    q: "Quelle caractéristique définit le mieux Djakout Mizik ?",
    options: ["Groupe de konpa reconnu pour ses tubes dansants", "Chants et percussions liés aux cérémonies religieuses vodou", "Orchestre régional connu dans le Nord d'Haïti", "Grande fête populaire précédant le Carême, rythmée par les orchestres de konpa"],
    correct: 0
  },
  {
    q: "Dans quelle décennie Volo Volo a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Fondé en 1975", "Années 1940-1990", "Tradition annuelle", "Fondé en 1989"],
    correct: 0
  },
  {
    q: "Dans quelle décennie Mizik angaje a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Fondé en 1998", "Années 1970-1980", "Années 1950-1960", "Années 1940-1990"],
    correct: 1
  },
  {
    q: "Quelle caractéristique définit le mieux Mizik vodou ?",
    options: ["Célébration vodou en l'honneur des esprits des morts", "Carnaval d'été célèbre dans le Nord d'Haïti", "Groupe de konpa formé par d'anciens membres de Nu Look et Kreyòl La", "Chants et percussions liés aux cérémonies religieuses vodou"],
    correct: 3
  },
  {
    q: "À quelle époque associe-t-on Mizik angaje ?",
    options: ["Années 1970-1980", "Fondé en 2016", "Depuis les années 1980", "Depuis les années 1990"],
    correct: 0
  },
  {
    q: "De quel type d'entité musicale s'agit-il pour Zouk haïtien ?",
    options: ["Genre musical", "Groupe", "Instrument", "Artiste solo"],
    correct: 0
  },
  {
    q: "Qu'est-ce que Ti Manno exactement ?",
    options: ["Festival/Événement culturel", "Groupe", "Genre musical", "Artiste solo"],
    correct: 3
  },
  {
    q: "Sweet Micky (Michel Martelly) correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Groupe", "Genre musical", "Artiste solo", "Festival/Événement culturel"],
    correct: 2
  },
  {
    q: "Rap kreyòl provient principalement de quelle zone ?",
    options: ["Port-au-Prince et diaspora", "National (mouvement culturel)", "National (Port-au-Prince, Jacmel...)", "Région frontalière (Sud-Est)"],
    correct: 0
  },
  {
    q: "Quelle est la nature de Nu Look dans le paysage musical haïtien ?",
    options: ["Instrument", "Groupe", "Genre musical", "Artiste solo"],
    correct: 1
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Manno Charlemagne ?",
    options: ["Style fondateur du konpa moderne à tempo régulier", "Fusion du konpa avec le zouk antillais", "Chanteur engagé, figure de la mizik angaje", "Maracas traditionnelles utilisées dans plusieurs genres"],
    correct: 2
  },
  {
    q: "Vayb est le plus étroitement associé(e) à quel lieu ?",
    options: ["National (tradition rara)", "National (surtout rara)", "Port-au-Prince", "Cap-Haïtien"],
    correct: 2
  },
  {
    q: "Alan Cavé provient principalement de quelle zone ?",
    options: ["National", "Port-au-Prince", "Régions rurales", "National (Port-au-Prince, Jacmel...)"],
    correct: 1
  },
  {
    q: "Coupé Cloué et l'Ensemble Select est le plus étroitement associé(e) à quel lieu ?",
    options: ["Cap-Haïtien", "Régions rurales du Nord et du Sud", "Port-au-Prince", "National (surtout rara)"],
    correct: 2
  },
  {
    q: "De quel type d'entité musicale s'agit-il pour Gaga ?",
    options: ["Festival/Événement culturel", "Genre musical", "Groupe", "Instrument"],
    correct: 1
  },
  {
    q: "Dans quelle décennie Zenglen a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Époque coloniale à aujourd'hui", "Fondé en 2016", "Fondé en 1993", "Années 1960-1970"],
    correct: 2
  },
  {
    q: "Boukan Ginen est le plus étroitement associé(e) à quel lieu ?",
    options: ["Port-au-Prince", "Région frontalière (Sud-Est)", "Cap-Haïtien", "Pétion-Ville"],
    correct: 0
  },
  {
    q: "J Perry est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Depuis les années 2010", "Fondé en 1968", "Fondé en 1989", "Fondé en 1963"],
    correct: 0
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Boukman Eksperyans ?",
    options: ["Port-au-Prince", "Port-au-Prince / diaspora", "Pétion-Ville / New York", "Port-au-Prince / international"],
    correct: 0
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Ti Manno ?",
    options: ["Port-au-Prince / Cuba", "Pétion-Ville / New York", "Port-au-Prince", "Diaspora (New York/Miami)"],
    correct: 2
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux Magnum Band ?",
    options: ["Genre musical", "Festival/Événement culturel", "Instrument", "Groupe"],
    correct: 3
  },
  {
    q: "Quelle description correspond le mieux à Vayb ?",
    options: ["Groupe de konpa contemporain très populaire chez les jeunes", "Orchestre de mini-jazz influent des années 1960-1970", "Danse de salon d'origine haïtienne aux rythmes élégants", "Maracas traditionnelles utilisées dans plusieurs genres"],
    correct: 0
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux Boukman Eksperyans ?",
    options: ["Instrument", "Genre musical", "Groupe", "Artiste solo"],
    correct: 2
  },
  {
    q: "Dans quelle décennie Mizik vodou a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Années 1960-1970", "Fondé en 1998", "Années 1980", "Époque coloniale à aujourd'hui"],
    correct: 3
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de T-Vice ?",
    options: ["Fondé en 1963", "Depuis les années 1980", "Fondé en 1990", "Fondé en 1978"],
    correct: 2
  },
  {
    q: "Qu'est-ce que Michael Brun exactement ?",
    options: ["Genre musical", "Festival/Événement culturel", "Artiste solo", "Groupe"],
    correct: 2
  },
  {
    q: "Quel lieu géographique est lié à Alan Cavé ?",
    options: ["Diaspora et Port-au-Prince", "Cap-Haïtien", "Diaspora (New York)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Comment définit-on Martha Jean-Claude dans la musique haïtienne ?",
    options: ["Instrument", "Festival/Événement culturel", "Artiste solo", "Genre musical"],
    correct: 2
  },
  {
    q: "Tabou Combo appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Fondé en 1980", "Années 1960-1990", "Fondé en 1965", "Fondé en 1968"],
    correct: 3
  },
  {
    q: "Comment qualifierait-on Banza sur le plan musical ?",
    options: ["Genre musical", "Artiste solo", "Groupe", "Instrument"],
    correct: 3
  },
  {
    q: "Quelle est la nature de Michael Brun dans le paysage musical haïtien ?",
    options: ["Artiste solo", "Festival/Événement culturel", "Instrument", "Genre musical"],
    correct: 0
  },
  {
    q: "Quelle période correspond le mieux à Djakout #1 ?",
    options: ["Années 1980", "Fondé en 2010", "Années 1970-1980", "Fondé en 2005"],
    correct: 1
  },
  {
    q: "Quelle caractéristique définit le mieux Zouk haïtien ?",
    options: ["Groupe de konpa reconnu pour ses tubes dansants", "Chanteur fusionnant rock, reggae et konpa", "Fusion du konpa avec le zouk antillais", "Fusion de rythmes vodou traditionnels et de rock/pop"],
    correct: 2
  },
  {
    q: "Comment reconnaît-on Tabou Combo parmi les autres éléments de la musique haïtienne ?",
    options: ["Groupe de konpa fondé par d'anciens membres de Kreyòl La", "Pionnier mondial du konpa avec des tubes internationaux", "Festival mettant à l'honneur la mizik rasin", "Orchestre régional connu dans le Nord d'Haïti"],
    correct: 1
  },
  {
    q: "Rara appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Époque coloniale à aujourd'hui", "Tradition annuelle (juillet)", "Fondé en 2005", "Années 1990-2000"],
    correct: 0
  },
  {
    q: "Roody Roodboy appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Fondé en 1996", "Depuis les années 2010", "Années 1950-1960", "Fondé en 1968"],
    correct: 1
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Fèt Gede ?",
    options: ["Années 1950", "Tradition annuelle (novembre)", "Années 1960-1990", "Fondé en 1982"],
    correct: 1
  },
  {
    q: "Qu'est-ce que Coupé Cloué et l'Ensemble Select exactement ?",
    options: ["Groupe", "Instrument", "Genre musical", "Festival/Événement culturel"],
    correct: 0
  },
  {
    q: "Quelle est la période de référence pour Alan Cavé ?",
    options: ["Fondé en 1966", "Fondé en 1970", "Depuis les années 1990", "Fondé en 1998"],
    correct: 2
  },
  {
    q: "T-Vice est le plus étroitement associé(e) à quel lieu ?",
    options: ["Port-au-Prince (famille Duplessis)", "Port-au-Prince et diaspora", "Pétion-Ville", "New Jersey (diaspora)"],
    correct: 0
  },
  {
    q: "Dans quelle catégorie classerait-on Volo Volo ?",
    options: ["Festival/Événement culturel", "Instrument", "Genre musical", "Groupe"],
    correct: 3
  },
  {
    q: "Quelle période correspond le mieux à Les Frères Dejean ?",
    options: ["Années 1980-1990", "Fondé en 1965", "Fondé en 2020", "Fondé en 1970"],
    correct: 3
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Fèt Gede ?",
    options: ["Jacmel", "Région frontalière (Sud-Est)", "National", "Diaspora (New York)"],
    correct: 2
  },
  {
    q: "Quel trait particulier caractérise Fèt Gede ?",
    options: ["Style de konpa romantique et mélodique", "Célébration vodou en l'honneur des esprits des morts", "Maracas traditionnelles utilisées dans plusieurs genres", "Groupe de konpa fondé par une famille de musiciens"],
    correct: 1
  },
  {
    q: "Dans quelle catégorie classerait-on Mizik angaje ?",
    options: ["Genre musical", "Artiste solo", "Instrument", "Groupe"],
    correct: 0
  },
  {
    q: "Comment reconnaît-on Les Shleu Shleu parmi les autres éléments de la musique haïtienne ?",
    options: ["Rappeur et musicien, ex-membre des Fugees d'origine haïtienne", "Chanteur de konpa reconnu pour sa voix et ses ballades", "Pionnier du mini-jazz haïtien", "Groupe précurseur du mini-jazz haïtien"],
    correct: 2
  },
  {
    q: "Gypsies de Pétion-Ville se distingue principalement par :",
    options: ["Groupe précurseur du mini-jazz haïtien", "Rappeur et musicien, ex-membre des Fugees d'origine haïtienne", "Grand orchestre de konpa des années 1970-1980", "Trio de konpa formé par Carlo, Richard et Mickaël"],
    correct: 2
  },
  {
    q: "Quelle caractéristique définit le mieux Kanaval (Carnaval haïtien) ?",
    options: ["Festival mettant à l'honneur la mizik rasin", "Groupe de konpa contemporain très populaire chez les jeunes", "Groupe de konpa fondé par une famille de musiciens", "Grande fête populaire précédant le Carême, rythmée par les orchestres de konpa"],
    correct: 3
  },
  {
    q: "Qu'est-ce qui distingue Mini-jazz sur le plan musical ou culturel ?",
    options: ["Fusion du konpa avec le zouk antillais", "Ancêtre du konpa mêlant jazz et rythmes afro-caribéens", "Groupe de konpa reconnu pour ses tubes dansants", "Petits orchestres de guitares électriques inspirés du rock"],
    correct: 3
  },
  {
    q: "Quelle région ou ville est le berceau de Djakout Mizik (Fabrice Rouzier) ?",
    options: ["New Jersey (diaspora)", "National", "Port-au-Prince", "Régions rurales"],
    correct: 2
  },
  {
    q: "Dans quelle décennie Les Shleu Shleu a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Fondé en 1982", "Fondé en 1963", "Fondé en 1980", "Fondé en 2007"],
    correct: 1
  },
  {
    q: "Original Instrumental Sextet (OIS) correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Artiste solo", "Genre musical", "Instrument", "Groupe"],
    correct: 3
  },
  {
    q: "Quelle description correspond le mieux à Alan Cavé ?",
    options: ["Groupe de mizik rasin dirigé par Richard Morse", "Chanteur, ancien leader de Zenglen puis Djakout Mizik", "Style fondateur du konpa moderne à tempo régulier", "Rappeur pionnier du rap kreyòl"],
    correct: 1
  },
  {
    q: "Quel élément résume le mieux T-Vice ?",
    options: ["Groupe de konpa fondé par une famille de musiciens", "Célébration vodou en l'honneur des esprits des morts", "Artiste populaire mêlant konpa et musique urbaine", "Instrument à percussion métallique gratté avec une baguette"],
    correct: 0
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Gypsies de Pétion-Ville ?",
    options: ["Fondé en 1968", "Fondé en 1970", "Fondé en 1980", "Époque coloniale à aujourd'hui"],
    correct: 1
  },
  {
    q: "Comment définit-on Festival Racines dans la musique haïtienne ?",
    options: ["Artiste solo", "Festival/Événement culturel", "Genre musical", "Instrument"],
    correct: 1
  },
  {
    q: "Qu'est-ce que T-Vice exactement ?",
    options: ["Genre musical", "Groupe", "Festival/Événement culturel", "Artiste solo"],
    correct: 1
  },
  {
    q: "Mizik rasin désigne principalement :",
    options: ["Groupe", "Genre musical", "Artiste solo", "Instrument"],
    correct: 1
  },
  {
    q: "Quel lieu géographique est lié à Boule zombi ?",
    options: ["National (Port-au-Prince, Jacmel...)", "Port-au-Prince", "Diaspora (New York/Miami)", "Jacmel"],
    correct: 1
  },
  {
    q: "Skah Shah est le plus étroitement associé(e) à quel lieu ?",
    options: ["New York (diaspora)", "Port-au-Prince (Hôtel Oloffson)", "National (surtout rara)", "Port-au-Prince (famille Duplessis)"],
    correct: 0
  },
  {
    q: "Quelle caractéristique définit le mieux Sweet Micky (Michel Martelly) ?",
    options: ["Figure populaire du konpa avant de devenir président d'Haïti", "Artiste populaire mêlant konpa et musique urbaine", "Groupe de konpa populaire des années 1990-2000", "Grande fête populaire précédant le Carême, rythmée par les orchestres de konpa"],
    correct: 0
  },
  {
    q: "Quel élément résume le mieux Conque (lambi) ?",
    options: ["Fratrie fondatrice d'un grand orchestre de konpa", "Coquillage utilisé comme instrument à vent rituel et festif", "Chanteuse surnommée « la Grande Dame de la chanson haïtienne »", "Ancêtre du konpa mêlant jazz et rythmes afro-caribéens"],
    correct: 1
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Les Frères Dejean ?",
    options: ["Rappeur haïtiano-américain connu pour ses collaborations konpa-hip-hop", "Groupe de mizik rasin dirigé par Richard Morse", "Fratrie fondatrice d'un grand orchestre de konpa", "Pionnière du folklore chanté haïtien"],
    correct: 2
  },
  {
    q: "RAM est le plus étroitement associé(e) à quel lieu ?",
    options: ["Port-au-Prince / international", "Miami (diaspora)", "Pétion-Ville", "Port-au-Prince (Hôtel Oloffson)"],
    correct: 3
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Kanpèch ?",
    options: ["Cap-Haïtien", "National (surtout zones rurales)", "New Jersey (diaspora)", "Port-au-Prince (famille Duplessis)"],
    correct: 0
  },
  {
    q: "De quel type d'entité musicale s'agit-il pour Harmonik ?",
    options: ["Groupe", "Artiste solo", "Genre musical", "Instrument"],
    correct: 0
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Twoubadou ?",
    options: ["Fondé en 1974", "Années 1980-1990", "Début du XXe siècle", "Fondé en 2010"],
    correct: 2
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux Zouk haïtien ?",
    options: ["Festival/Événement culturel", "Artiste solo", "Groupe", "Genre musical"],
    correct: 3
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Tanbou ?",
    options: ["Fondé en 1993", "Fondé en 1970", "Fondé en 1998", "Époque coloniale à aujourd'hui"],
    correct: 3
  },
  {
    q: "Quelle est la nature de Djakout #1 dans le paysage musical haïtien ?",
    options: ["Festival/Événement culturel", "Groupe", "Artiste solo", "Instrument"],
    correct: 1
  },
  {
    q: "Skah Shah désigne principalement :",
    options: ["Genre musical", "Instrument", "Groupe", "Artiste solo"],
    correct: 2
  },
  {
    q: "Dans quelle catégorie classerait-on BIC ?",
    options: ["Festival/Événement culturel", "Instrument", "Artiste solo", "Genre musical"],
    correct: 2
  },
  {
    q: "Dans quelle catégorie classerait-on Vaksin ?",
    options: ["Festival/Événement culturel", "Groupe", "Artiste solo", "Instrument"],
    correct: 3
  },
  {
    q: "Quelle caractéristique définit le mieux Manno Charlemagne ?",
    options: ["Chanteuse et actrice, figure de la chanson racine", "Groupe emblématique du konpa de la diaspora", "Chanteur engagé, figure de la mizik angaje", "Groupe pionnier de la mizik rasin"],
    correct: 2
  },
  {
    q: "Quel élément résume le mieux Les Frères Dejean ?",
    options: ["Orchestre régional connu dans le Nord d'Haïti", "Fratrie fondatrice d'un grand orchestre de konpa", "Grand orchestre de konpa toujours actif", "Festival mettant à l'honneur la mizik rasin"],
    correct: 1
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Skah Shah ?",
    options: ["Années 1980", "Fondé en 1974", "Fondé en 2007", "Fondé en 2010"],
    correct: 1
  },
  {
    q: "Quel élément résume le mieux Tanbou ?",
    options: ["Coquillage utilisé comme instrument à vent rituel et festif", "Tambour central des musiques vodou et rara", "Groupe de konpa reconnu pour ses harmonies vocales", "Groupe de konpa reconnu pour ses tubes dansants"],
    correct: 1
  },
  {
    q: "Comment définit-on Farah Juste dans la musique haïtienne ?",
    options: ["Genre musical", "Artiste solo", "Instrument", "Festival/Événement culturel"],
    correct: 1
  },
  {
    q: "Quelle est la période de référence pour Klass ?",
    options: ["Fondé en 1970", "Fondé en 2005", "Fondé en 1965", "Fondé en 1978"],
    correct: 1
  },
  {
    q: "D'où est originaire Michael Brun ?",
    options: ["National", "Diaspora et Port-au-Prince", "Cap-Haïtien", "Port-au-Prince / international"],
    correct: 3
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Djakout Mizik ?",
    options: ["Fondé en 1968", "Fondé en 1990", "Fondé en 1963", "Fondé en 2010"],
    correct: 1
  },
  {
    q: "Quelle période correspond le mieux à Les Shleu Shleu ?",
    options: ["Fondé en 1963", "Fondé en 1975", "Fondé en 2018", "Années 1960-1970"],
    correct: 0
  },
  {
    q: "Accordéon (twoubadou) désigne principalement :",
    options: ["Festival/Événement culturel", "Groupe", "Genre musical", "Instrument"],
    correct: 3
  },
  {
    q: "Dans quelle décennie Emeline Michel a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Années 1980", "Depuis les années 1980", "Années 1960-1990", "Années 1980-1990"],
    correct: 1
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux Beethova Obas ?",
    options: ["Festival/Événement culturel", "Instrument", "Artiste solo", "Genre musical"],
    correct: 2
  },
  {
    q: "Quelle description correspond le mieux à Belo ?",
    options: ["Groupe de konpa reconnu pour ses harmonies vocales", "Chanteur fusionnant rock, reggae et konpa", "Style fondateur du konpa moderne à tempo régulier", "Orchestre régional connu dans le Nord d'Haïti"],
    correct: 1
  },
  {
    q: "Quelle période correspond le mieux à Mizik angaje ?",
    options: ["Tradition annuelle (novembre)", "Années 1960-1970", "Années 1970-1980", "Fondé en 1962"],
    correct: 2
  },
  {
    q: "De quel type d'entité musicale s'agit-il pour Michael Brun ?",
    options: ["Artiste solo", "Instrument", "Festival/Événement culturel", "Genre musical"],
    correct: 0
  },
  {
    q: "Où situe-t-on l'origine de Konpa Love ?",
    options: ["National", "Diaspora et Port-au-Prince", "Port-au-Prince (famille Duplessis)", "Diaspora (New York)"],
    correct: 1
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Système Band ?",
    options: ["Fondé en 1996", "Fondé en 1982", "Époque coloniale", "Depuis les années 1970"],
    correct: 1
  },
  {
    q: "D'où est originaire Carnaval des Fleurs (Cap-Haïtien) ?",
    options: ["New York (diaspora)", "National", "National (Port-au-Prince, Jacmel...)", "Cap-Haïtien"],
    correct: 3
  },
  {
    q: "Dans quelle décennie Kanpèch a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Fondé en 1975", "Fondé en 1962", "Fondé en 1963", "Fondé en 2018"],
    correct: 0
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Carnaval des Fleurs (Cap-Haïtien) ?",
    options: ["Tradition annuelle", "Depuis les années 2000", "Années 1980-1990", "Tradition annuelle (juillet)"],
    correct: 3
  },
  {
    q: "Dans quelle catégorie classerait-on Sweet Micky (Michel Martelly) ?",
    options: ["Genre musical", "Festival/Événement culturel", "Artiste solo", "Instrument"],
    correct: 2
  },
  {
    q: "Quelle période correspond le mieux à Coupé Cloué et l'Ensemble Select ?",
    options: ["Fondé en 1990", "XIXe siècle", "Fondé en 1978", "Fondé en 1963"],
    correct: 3
  },
  {
    q: "Qu'est-ce qui distingue Boukan Ginen sur le plan musical ou culturel ?",
    options: ["Groupe majeur de mizik rasin engagée", "Chants et percussions liés aux cérémonies religieuses vodou", "Chanteur emblématique de konpa social et engagé", "Figure populaire du konpa avant de devenir président d'Haïti"],
    correct: 0
  },
  {
    q: "Quel élément résume le mieux Farah Juste ?",
    options: ["Orchestre de mini-jazz influent des années 1960-1970", "Pianiste et arrangeur, cofondateur de Djakout Mizik", "Trio de konpa formé par Carlo, Richard et Mickaël", "Chanteuse engagée connue pour ses textes politiques"],
    correct: 3
  },
  {
    q: "Alan Cavé est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Depuis les années 1990", "Fondé en 1962", "Depuis les années 1980", "Fondé en 2010"],
    correct: 0
  },
  {
    q: "Dans quelle catégorie classerait-on Martha Jean-Claude ?",
    options: ["Groupe", "Artiste solo", "Instrument", "Genre musical"],
    correct: 1
  },
  {
    q: "Quelle est la période de référence pour Vayb ?",
    options: ["Fondé en 2020", "Fondé en 2018", "Années 1940-1990", "Époque coloniale à aujourd'hui"],
    correct: 1
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Klass ?",
    options: ["Depuis les années 1980", "Fondé en 1974", "Fondé en 2020", "Fondé en 2005"],
    correct: 3
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux Emeline Michel ?",
    options: ["Genre musical", "Instrument", "Groupe", "Artiste solo"],
    correct: 3
  },
  {
    q: "D'où est originaire Manno Charlemagne ?",
    options: ["Régions rurales", "National (surtout zones rurales)", "Cap-Haïtien", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "D'où est originaire Ibo Combo ?",
    options: ["National (mouvement culturel)", "Port-au-Prince", "Port-au-Prince (Hôtel Oloffson)", "Régions rurales du Nord et du Sud"],
    correct: 1
  },
  {
    q: "Quelle période correspond le mieux à BIC ?",
    options: ["Fondé en 2007", "Fondé en 1982", "Années 1950-1960", "Depuis les années 2010"],
    correct: 3
  },
  {
    q: "Vayb désigne principalement :",
    options: ["Instrument", "Genre musical", "Groupe", "Artiste solo"],
    correct: 2
  },
  {
    q: "Qu'est-ce que Djakout Mizik exactement ?",
    options: ["Genre musical", "Groupe", "Instrument", "Artiste solo"],
    correct: 1
  },
  {
    q: "Qu'est-ce que Emeline Michel exactement ?",
    options: ["Instrument", "Groupe", "Genre musical", "Artiste solo"],
    correct: 3
  },
  {
    q: "De quel type d'entité musicale s'agit-il pour Belo ?",
    options: ["Groupe", "Genre musical", "Artiste solo", "Festival/Événement culturel"],
    correct: 2
  },
  {
    q: "Comment qualifierait-on Vaksin sur le plan musical ?",
    options: ["Artiste solo", "Groupe", "Genre musical", "Instrument"],
    correct: 3
  },
  {
    q: "Quel trait particulier caractérise Kanpèch ?",
    options: ["Carnaval réputé pour ses masques et costumes artisanaux", "Pionnier mondial du konpa avec des tubes internationaux", "Orchestre régional connu dans le Nord d'Haïti", "Chants et percussions liés aux cérémonies religieuses vodou"],
    correct: 2
  },
  {
    q: "Si l'on devait classer Zenglen, ce serait comme :",
    options: ["Artiste solo", "Groupe", "Genre musical", "Festival/Événement culturel"],
    correct: 1
  },
  {
    q: "Quel élément résume le mieux Krezi Mizik ?",
    options: ["Groupe de konpa reconnu pour ses tubes dansants", "Célébration vodou en l'honneur des esprits des morts", "Tambour central des musiques vodou et rara", "Groupe de konpa fondé par d'anciens membres de Kreyòl La"],
    correct: 3
  },
  {
    q: "Konpa est le plus étroitement associé(e) à quel lieu ?",
    options: ["National (surtout rara)", "Port-au-Prince / international", "Port-au-Prince", "Région frontalière (Sud-Est)"],
    correct: 2
  },
  {
    q: "Comment qualifierait-on Boukan Ginen sur le plan musical ?",
    options: ["Genre musical", "Groupe", "Instrument", "Festival/Événement culturel"],
    correct: 1
  },
  {
    q: "Ibo Combo se distingue principalement par :",
    options: ["Instrument à percussion métallique gratté avec une baguette", "Orchestre régional connu dans le Nord d'Haïti", "Orchestre historique du mini-jazz", "Groupe de konpa reconnu pour ses harmonies vocales"],
    correct: 2
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Méringue haïtienne ?",
    options: ["Fondé en 1980", "Fondé en 1975", "XIXe siècle", "Époque coloniale"],
    correct: 2
  },
  {
    q: "Belo correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Festival/Événement culturel", "Groupe", "Artiste solo", "Instrument"],
    correct: 2
  },
  {
    q: "Harmonik est le plus étroitement associé(e) à quel lieu ?",
    options: ["Port-au-Prince", "Régions rurales du Nord et du Sud", "Jacmel", "Port-au-Prince / diaspora"],
    correct: 0
  },
  {
    q: "Quel lieu géographique est lié à Fabrice Rouzier ?",
    options: ["National", "Jacmel", "National (surtout rara)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Mini-jazz ?",
    options: ["Années 1960-1970", "XIXe siècle", "Fondé en 1970", "Depuis les années 1990"],
    correct: 0
  },
  {
    q: "Qu'est-ce que Boukan Ginen exactement ?",
    options: ["Groupe", "Festival/Événement culturel", "Genre musical", "Instrument"],
    correct: 0
  },
  {
    q: "Quelle description correspond le mieux à Djakout Mizik (Fabrice Rouzier) ?",
    options: ["Pianiste et arrangeur, cofondateur de Djakout Mizik", "Rappeur et musicien, ex-membre des Fugees d'origine haïtienne", "Groupe de konpa fondé par une famille de musiciens", "Fratrie fondatrice d'un grand orchestre de konpa"],
    correct: 0
  },
  {
    q: "Martha Jean-Claude est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Depuis les années 1970", "Fondé en 2005", "Années 1940-1990", "Fondé en 2007"],
    correct: 2
  },
  {
    q: "Quel trait particulier caractérise Tcha tcha ?",
    options: ["Maracas traditionnelles utilisées dans plusieurs genres", "Groupe de konpa réputé pour ses ballades", "Trio de konpa formé par Carlo, Richard et Mickaël", "Célébration vodou en l'honneur des esprits des morts"],
    correct: 0
  },
  {
    q: "Konpa Love appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Années 1990-2000", "Fondé en 2007", "Tradition annuelle (juillet)", "Fondé en 1968"],
    correct: 0
  },
  {
    q: "Twoubadou provient principalement de quelle zone ?",
    options: ["Miami (diaspora)", "Régions rurales du Nord et du Sud", "New York (diaspora)", "Diaspora et Port-au-Prince"],
    correct: 1
  },
  {
    q: "Comment qualifierait-on Tanbou sur le plan musical ?",
    options: ["Genre musical", "Instrument", "Festival/Événement culturel", "Artiste solo"],
    correct: 1
  },
  {
    q: "Quelle région ou ville est le berceau de Konpa ?",
    options: ["Port-au-Prince", "Diaspora (New York)", "New Jersey (diaspora)", "Diaspora (New York/Miami)"],
    correct: 0
  },
  {
    q: "Dans quelle décennie Bel Air Orchestra a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Fondé en 1965", "Depuis les années 2000", "Années 1940-1990", "Tradition annuelle"],
    correct: 0
  },
  {
    q: "Quelle région ou ville est le berceau de Tabou Combo ?",
    options: ["Port-au-Prince / Cuba", "Pétion-Ville", "Pétion-Ville / New York", "Port-au-Prince (Hôtel Oloffson)"],
    correct: 2
  },
  {
    q: "Comment définit-on Twoubadou dans la musique haïtienne ?",
    options: ["Instrument", "Festival/Événement culturel", "Genre musical", "Artiste solo"],
    correct: 2
  },
  {
    q: "Si l'on devait classer Système Band, ce serait comme :",
    options: ["Groupe", "Instrument", "Festival/Événement culturel", "Artiste solo"],
    correct: 0
  },
  {
    q: "Qu'est-ce que Djakout Mizik (Fabrice Rouzier) exactement ?",
    options: ["Artiste solo", "Genre musical", "Festival/Événement culturel", "Instrument"],
    correct: 0
  },
  {
    q: "Kai désigne principalement :",
    options: ["Instrument", "Genre musical", "Groupe", "Artiste solo"],
    correct: 2
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Gaga ?",
    options: ["Trio de konpa formé par Carlo, Richard et Mickaël", "Carnaval d'été célèbre dans le Nord d'Haïti", "DJ et producteur électro fusionnant konpa et musique électronique", "Musique festive liée aux célébrations agraires"],
    correct: 3
  },
  {
    q: "Dans quelle catégorie classerait-on Zing Experience ?",
    options: ["Genre musical", "Groupe", "Instrument", "Artiste solo"],
    correct: 1
  },
  {
    q: "Quelle description correspond le mieux à RAM ?",
    options: ["Groupe de mizik rasin dirigé par Richard Morse", "Fratrie fondatrice d'un grand orchestre de konpa", "Maracas traditionnelles utilisées dans plusieurs genres", "Chanteur fusionnant rock, reggae et konpa"],
    correct: 0
  },
  {
    q: "Quelle est la période de référence pour Kompa Dirèk ?",
    options: ["Années 1960-1990", "Années 1980", "Années 1950", "Années 1970-1980"],
    correct: 2
  },
  {
    q: "Fabrice Rouzier se distingue principalement par :",
    options: ["Groupe de konpa fondé par d'anciens membres de Kreyòl La", "Figure populaire du konpa avant de devenir président d'Haïti", "Chanteur fusionnant rock, reggae et konpa", "Pianiste et producteur de konpa influent"],
    correct: 3
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Kompa Dirèk ?",
    options: ["Chanteur de konpa contemporain", "Chanteuse et actrice, figure de la chanson racine", "Chants et percussions liés aux cérémonies religieuses vodou", "Style fondateur du konpa moderne à tempo régulier"],
    correct: 3
  },
  {
    q: "Comment qualifierait-on Carimi sur le plan musical ?",
    options: ["Groupe", "Festival/Événement culturel", "Artiste solo", "Instrument"],
    correct: 0
  },
  {
    q: "Original Instrumental Sextet (OIS) est le plus étroitement associé(e) à quel lieu ?",
    options: ["Jacmel", "Port-au-Prince", "Pétion-Ville", "Régions rurales du Nord et du Sud"],
    correct: 1
  },
  {
    q: "Quel élément résume le mieux J Perry ?",
    options: ["Chanteur mêlant konpa, RnB et musique urbaine", "Ancêtre du banjo d'origine afro-haïtienne", "Chanteuse surnommée « la Grande Dame de la chanson haïtienne »", "Festival mettant à l'honneur la mizik rasin"],
    correct: 0
  },
  {
    q: "D'où est originaire Système Band ?",
    options: ["Diaspora et Port-au-Prince", "Régions rurales", "Pétion-Ville", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Comment qualifierait-on Système Band sur le plan musical ?",
    options: ["Genre musical", "Artiste solo", "Groupe", "Festival/Événement culturel"],
    correct: 2
  },
  {
    q: "Beethova Obas est le plus étroitement associé(e) à quel lieu ?",
    options: ["Port-au-Prince (famille Duplessis)", "Port-au-Prince", "Port-au-Prince / New York", "Port-au-Prince / Cuba"],
    correct: 1
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux Fabrice Rouzier ?",
    options: ["Artiste solo", "Genre musical", "Festival/Événement culturel", "Instrument"],
    correct: 0
  },
  {
    q: "Tabou Combo se distingue principalement par :",
    options: ["Groupe pionnier de la mizik rasin", "Pionnier mondial du konpa avec des tubes internationaux", "Orchestre populaire du quartier de Bel-Air", "Pionnière du folklore chanté haïtien"],
    correct: 1
  },
  {
    q: "Comment reconnaît-on Harmonik parmi les autres éléments de la musique haïtienne ?",
    options: ["Groupe de konpa fondé par d'anciens membres de Kreyòl La", "Autre nom sous lequel Djakout Mizik est parfois connu à ses débuts", "Groupe de konpa nouvelle génération", "Petits orchestres de guitares électriques inspirés du rock"],
    correct: 2
  },
  {
    q: "Où Wyclef Jean a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["National (surtout zones rurales)", "Port-au-Prince", "New Jersey (diaspora)", "Diaspora (New York/Miami)"],
    correct: 2
  },
  {
    q: "BIC provient principalement de quelle zone ?",
    options: ["Pétion-Ville", "Port-au-Prince", "National (surtout zones rurales)", "Port-au-Prince / international"],
    correct: 1
  },
  {
    q: "Quelle description correspond le mieux à Emeline Michel ?",
    options: ["Chanteuse surnommée « la Grande Dame de la chanson haïtienne »", "Musique festive liée aux célébrations agraires", "Autre nom sous lequel Djakout Mizik est parfois connu à ses débuts", "Rappeur et musicien, ex-membre des Fugees d'origine haïtienne"],
    correct: 0
  },
  {
    q: "Mizik vodou appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Époque coloniale à aujourd'hui", "Fondé en 1974", "Fondé en 1989", "Fondé en 1993"],
    correct: 0
  },
  {
    q: "Système Band appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Fondé en 1975", "Fondé en 1982", "Fondé en 1965", "Depuis les années 1980"],
    correct: 1
  },
  {
    q: "Rara est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Depuis les années 2000", "Années 1960-1970", "Époque coloniale à aujourd'hui", "Fondé en 1990"],
    correct: 2
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Carimi ?",
    options: ["Trio de konpa formé par Carlo, Richard et Mickaël", "Ancêtre du konpa mêlant jazz et rythmes afro-caribéens", "Groupe pionnier de la mizik rasin", "Chanteur, ancien leader de Zenglen puis Djakout Mizik"],
    correct: 0
  },
  {
    q: "Dans quelle décennie Nu Look a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Tradition annuelle", "Années 1950", "Fondé en 1998", "Tradition annuelle (juillet)"],
    correct: 2
  },
  {
    q: "Volo Volo appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Tradition annuelle (juillet)", "Fondé en 1975", "Fondé en 2005", "Tradition annuelle"],
    correct: 1
  },
  {
    q: "Si l'on devait classer Manman tanbou, ce serait comme :",
    options: ["Groupe", "Genre musical", "Instrument", "Artiste solo"],
    correct: 2
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Krezi Mizik ?",
    options: ["Fondé en 1980", "Fondé en 2016", "Époque coloniale", "Années 1950-1960"],
    correct: 1
  },
  {
    q: "Comment qualifierait-on Djakout Mizik (Fabrice Rouzier) sur le plan musical ?",
    options: ["Groupe", "Genre musical", "Festival/Événement culturel", "Artiste solo"],
    correct: 3
  },
  {
    q: "Comment reconnaît-on Alan Cavé parmi les autres éléments de la musique haïtienne ?",
    options: ["Groupe de konpa formé par d'anciens membres de Nu Look et Kreyòl La", "Chanteur mêlant konpa, RnB et musique urbaine", "DJ et producteur électro fusionnant konpa et musique électronique", "Chanteur, ancien leader de Zenglen puis Djakout Mizik"],
    correct: 3
  },
  {
    q: "Si l'on devait classer Boukan Ginen, ce serait comme :",
    options: ["Genre musical", "Artiste solo", "Groupe", "Instrument"],
    correct: 2
  },
  {
    q: "Quelle caractéristique définit le mieux Toto Bissainthe ?",
    options: ["Groupe majeur de mizik rasin engagée", "Groupe de konpa populaire des années 1990-2000", "Chanteuse et actrice, figure de la chanson racine", "Pionnière du folklore chanté haïtien"],
    correct: 2
  },
  {
    q: "Quelle description correspond le mieux à Tanbou ?",
    options: ["Groupe de konpa nouvelle génération", "Tambour central des musiques vodou et rara", "Chanteur, ancien leader de Zenglen puis Djakout Mizik", "Groupe pionnier de la mizik rasin"],
    correct: 1
  },
  {
    q: "Krezi Mizik provient principalement de quelle zone ?",
    options: ["Port-au-Prince", "Région frontalière (Sud-Est)", "National (mouvement culturel)", "Diaspora (New York/Miami)"],
    correct: 0
  },
  {
    q: "RAM se distingue principalement par :",
    options: ["Ancêtre du banjo d'origine afro-haïtienne", "Fratrie fondatrice d'un grand orchestre de konpa", "Célébration vodou en l'honneur des esprits des morts", "Groupe de mizik rasin dirigé par Richard Morse"],
    correct: 3
  },
  {
    q: "Dans quelle décennie Coupé Cloué et l'Ensemble Select a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Fondé en 1980", "Depuis les années 1980", "Fondé en 1963", "Fondé en 1998"],
    correct: 2
  },
  {
    q: "T-Vice appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Fondé en 1990", "Fondé en 1963", "Fondé en 2010", "Époque coloniale à aujourd'hui"],
    correct: 0
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Harmonik ?",
    options: ["Fondé en 1998", "Années 1980-1990", "Fondé en 2010", "XIXe siècle"],
    correct: 2
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Kreyòl La ?",
    options: ["Fondé en 1993", "Tradition annuelle", "Fondé en 2007", "Fondé en 1970"],
    correct: 2
  },
  {
    q: "De quel type d'entité musicale s'agit-il pour Original Instrumental Sextet (OIS) ?",
    options: ["Genre musical", "Groupe", "Artiste solo", "Festival/Événement culturel"],
    correct: 1
  },
  {
    q: "Quel lieu géographique est lié à Skah Shah ?",
    options: ["Diaspora (New York/Miami)", "Cap-Haïtien", "New York (diaspora)", "National (surtout zones rurales)"],
    correct: 2
  },
  {
    q: "Quelle région ou ville est le berceau de Mini-jazz ?",
    options: ["National (mouvement culturel)", "National", "Diaspora (New York/Miami)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Quel élément résume le mieux Accordéon (twoubadou) ?",
    options: ["Groupe précurseur du mini-jazz haïtien", "Fratrie fondatrice d'un grand orchestre de konpa", "Instrument central des ensembles de twoubadou", "Orchestre historique du mini-jazz"],
    correct: 2
  },
  {
    q: "Djakout Mizik (Fabrice Rouzier) est le plus étroitement associé(e) à quel lieu ?",
    options: ["Port-au-Prince", "Port-au-Prince (famille Duplessis)", "Port-au-Prince (Hôtel Oloffson)", "Cap-Haïtien"],
    correct: 0
  },
  {
    q: "Comment reconnaît-on Bel Air Orchestra parmi les autres éléments de la musique haïtienne ?",
    options: ["Rappeur et musicien, ex-membre des Fugees d'origine haïtienne", "Instrument à percussion métallique gratté avec une baguette", "Orchestre populaire du quartier de Bel-Air", "Célébration vodou en l'honneur des esprits des morts"],
    correct: 2
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Fabrice Rouzier ?",
    options: ["Époque coloniale à aujourd'hui", "Depuis les années 2010", "Depuis les années 1990", "Fondé en 1963"],
    correct: 2
  },
  {
    q: "Ibo Combo provient principalement de quelle zone ?",
    options: ["Port-au-Prince", "Port-au-Prince / international", "Diaspora et Port-au-Prince", "Port-au-Prince (Hôtel Oloffson)"],
    correct: 0
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux BIC ?",
    options: ["Artiste solo", "Groupe", "Festival/Événement culturel", "Genre musical"],
    correct: 0
  },
  {
    q: "Qu'est-ce qui distingue Mizik angaje sur le plan musical ou culturel ?",
    options: ["Fratrie fondatrice d'un grand orchestre de konpa", "Musique festive liée aux célébrations agraires", "Chansons engagées portant un message social ou politique", "Orchestre populaire du quartier de Bel-Air"],
    correct: 2
  },
  {
    q: "Quelle période correspond le mieux à Tanbou ?",
    options: ["Fondé en 1970", "Époque coloniale", "Début du XXe siècle", "Époque coloniale à aujourd'hui"],
    correct: 3
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Mizik angaje ?",
    options: ["Depuis les années 2010", "Tradition annuelle", "Depuis les années 1990", "Années 1970-1980"],
    correct: 3
  },
  {
    q: "Quel trait particulier caractérise Fabrice Rouzier ?",
    options: ["Artiste populaire mêlant konpa et musique urbaine", "Fratrie fondatrice d'un grand orchestre de konpa", "Chanteur fusionnant rock, reggae et konpa", "Pianiste et producteur de konpa influent"],
    correct: 3
  },
  {
    q: "Quelle est la nature de Beethova Obas dans le paysage musical haïtien ?",
    options: ["Artiste solo", "Festival/Événement culturel", "Instrument", "Groupe"],
    correct: 0
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux Mizik angaje ?",
    options: ["Groupe", "Genre musical", "Artiste solo", "Instrument"],
    correct: 1
  },
  {
    q: "Beethova Obas est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Fondé en 1962", "Années 1980-1990", "Depuis les années 1980", "Fondé en 1990"],
    correct: 2
  },
  {
    q: "Quel trait particulier caractérise Roody Roodboy ?",
    options: ["Artiste populaire mêlant konpa et musique urbaine", "Grand orchestre de konpa toujours actif", "Auteur-compositeur de folk et chanson engagée", "Fusion du konpa avec le zouk antillais"],
    correct: 0
  },
  {
    q: "Quel trait particulier caractérise Toto Bissainthe ?",
    options: ["Chanteuse et actrice, figure de la chanson racine", "Groupe de konpa reconnu pour ses harmonies vocales", "Musique acoustique de guitare inspirée du son cubain", "Grand orchestre de konpa toujours actif"],
    correct: 0
  },
  {
    q: "Quel élément résume le mieux Fèt Gede ?",
    options: ["Festival mettant à l'honneur la mizik rasin", "Maracas traditionnelles utilisées dans plusieurs genres", "Groupe de konpa new-generation à succès", "Célébration vodou en l'honneur des esprits des morts"],
    correct: 3
  },
  {
    q: "Qu'est-ce qui distingue Michael Brun sur le plan musical ou culturel ?",
    options: ["Trompette en bambou utilisée dans les groupes de rara", "Groupe de konpa réputé pour ses ballades", "DJ et producteur électro fusionnant konpa et musique électronique", "Pionnière du folklore chanté haïtien"],
    correct: 2
  },
  {
    q: "Méringue haïtienne correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Artiste solo", "Groupe", "Genre musical", "Festival/Événement culturel"],
    correct: 2
  },
  {
    q: "Quelle est la nature de Rap kreyòl dans le paysage musical haïtien ?",
    options: ["Groupe", "Genre musical", "Festival/Événement culturel", "Artiste solo"],
    correct: 1
  },
  {
    q: "Si l'on devait classer Farah Juste, ce serait comme :",
    options: ["Festival/Événement culturel", "Artiste solo", "Groupe", "Genre musical"],
    correct: 1
  },
  {
    q: "Quel trait particulier caractérise Gaga ?",
    options: ["Grand orchestre de konpa toujours actif", "Musique festive liée aux célébrations agraires", "Groupe précurseur du mini-jazz haïtien", "Fratrie fondatrice d'un grand orchestre de konpa"],
    correct: 1
  },
  {
    q: "Quel lieu géographique est lié à Manman tanbou ?",
    options: ["National", "Diaspora et Port-au-Prince", "Port-au-Prince / New York", "Régions rurales du Nord et du Sud"],
    correct: 0
  },
  {
    q: "À quelle époque associe-t-on Sweet Micky (Michel Martelly) ?",
    options: ["Années 1980-1990", "Depuis les années 1980", "Fondé en 1963", "Fondé en 1966"],
    correct: 1
  },
  {
    q: "Quelle région ou ville est le berceau de J Perry ?",
    options: ["New York (diaspora)", "Pétion-Ville", "Port-au-Prince", "Port-au-Prince / New York"],
    correct: 2
  },
  {
    q: "Comment définit-on Vayb dans la musique haïtienne ?",
    options: ["Festival/Événement culturel", "Artiste solo", "Instrument", "Groupe"],
    correct: 3
  },
  {
    q: "Quelle période correspond le mieux à Système Band ?",
    options: ["Fondé en 1982", "Époque coloniale", "Fondé en 2020", "Années 1970-1980"],
    correct: 0
  },
  {
    q: "Quelle caractéristique définit le mieux Harmonik ?",
    options: ["Trio de konpa formé par Carlo, Richard et Mickaël", "Orchestre de mini-jazz influent des années 1960-1970", "Groupe de konpa nouvelle génération", "Groupe de konpa fondé par d'anciens membres de Kreyòl La"],
    correct: 2
  },
  {
    q: "Quelle caractéristique définit le mieux Accordéon (twoubadou) ?",
    options: ["Chansons engagées portant un message social ou politique", "Trompette en bambou utilisée dans les groupes de rara", "Instrument central des ensembles de twoubadou", "Groupe de konpa reconnu pour ses ballades romantiques"],
    correct: 2
  },
  {
    q: "À quelle époque associe-t-on Kanaval (Carnaval haïtien) ?",
    options: ["Tradition annuelle", "Fondé en 1965", "Tradition annuelle (juillet)", "Fondé en 2005"],
    correct: 0
  },
  {
    q: "Quelle caractéristique définit le mieux Zing Experience ?",
    options: ["Groupe de konpa réputé pour ses ballades", "Tambour central des musiques vodou et rara", "Groupe de konpa reconnu pour ses harmonies vocales", "Groupe de konpa populaire des années 1990-2000"],
    correct: 2
  },
  {
    q: "Manman tanbou se distingue principalement par :",
    options: ["Le plus grand des tambours dans un ensemble rituel", "Groupe pionnier de la mizik rasin", "Grand orchestre de konpa toujours actif", "Groupe de mizik rasin dirigé par Richard Morse"],
    correct: 0
  },
  {
    q: "Quelle période correspond le mieux à Boukman Eksperyans ?",
    options: ["Années 1990-2000", "Époque coloniale à aujourd'hui", "Fondé en 1978", "Fondé en 2020"],
    correct: 2
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Emeline Michel ?",
    options: ["National", "Pétion-Ville", "Port-au-Prince / diaspora", "Gonaïves / diaspora"],
    correct: 3
  },
  {
    q: "Si l'on devait classer Vayb, ce serait comme :",
    options: ["Genre musical", "Instrument", "Groupe", "Festival/Événement culturel"],
    correct: 2
  },
  {
    q: "Quelle est la période de référence pour Sweet Micky (Michel Martelly) ?",
    options: ["Fondé en 1980", "Depuis les années 1980", "Fondé en 2020", "Époque coloniale à aujourd'hui"],
    correct: 1
  },
  {
    q: "Quel élément résume le mieux Nu Look ?",
    options: ["Pionnier mondial du konpa avec des tubes internationaux", "Groupe emblématique du konpa de la diaspora", "Chants et percussions liés aux cérémonies religieuses vodou", "Groupe de konpa new-generation à succès"],
    correct: 3
  },
  {
    q: "Zouk haïtien appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Fondé en 1980", "Fondé en 1998", "Fondé en 1966", "Années 1980-1990"],
    correct: 3
  },
  {
    q: "Carimi est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Depuis les années 1980", "Depuis les années 1970", "Fondé en 1996", "Années 1970-1980"],
    correct: 2
  },
  {
    q: "Vaksin est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Depuis les années 1970", "Époque coloniale à aujourd'hui", "Fondé en 2018", "Début du XXe siècle"],
    correct: 1
  },
  {
    q: "Comment décrirait-on le style ou le rôle de J Perry ?",
    options: ["Grande fête populaire précédant le Carême, rythmée par les orchestres de konpa", "Ancêtre du banjo d'origine afro-haïtienne", "Chanteur fusionnant rock, reggae et konpa", "Chanteur mêlant konpa, RnB et musique urbaine"],
    correct: 3
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux Festival Racines ?",
    options: ["Genre musical", "Groupe", "Festival/Événement culturel", "Instrument"],
    correct: 2
  },
  {
    q: "Quelle est la période de référence pour Original H (originaire de Brooklyn) ?",
    options: ["Fondé en 1989", "Fondé en 2018", "Depuis les années 1970", "Depuis les années 2000"],
    correct: 3
  },
  {
    q: "Quel lieu géographique est lié à Harmonik ?",
    options: ["National (surtout zones rurales)", "Port-au-Prince (famille Duplessis)", "Port-au-Prince", "Diaspora (New York)"],
    correct: 2
  },
  {
    q: "Où situe-t-on l'origine de Les Frères Dejean ?",
    options: ["New Jersey (diaspora)", "Port-au-Prince (famille Duplessis)", "Région frontalière (Sud-Est)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Conque (lambi) est le plus étroitement associé(e) à quel lieu ?",
    options: ["National (surtout rara)", "Port-au-Prince / diaspora", "Diaspora et Port-au-Prince", "Pétion-Ville"],
    correct: 0
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Boukman Eksperyans ?",
    options: ["Depuis les années 2010", "Fondé en 1974", "Fondé en 1978", "Fondé en 2007"],
    correct: 2
  },
  {
    q: "À quelle époque associe-t-on Mizik vodou ?",
    options: ["Fondé en 1993", "Depuis les années 1990", "Époque coloniale à aujourd'hui", "Années 1960-1970"],
    correct: 2
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Mizik rasin ?",
    options: ["Pionnier du mini-jazz haïtien", "Chanteur engagé, figure de la mizik angaje", "Maracas traditionnelles utilisées dans plusieurs genres", "Fusion de rythmes vodou traditionnels et de rock/pop"],
    correct: 3
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Festival Racines ?",
    options: ["Groupe de konpa contemporain très populaire chez les jeunes", "Groupe de konpa reconnu pour ses harmonies vocales", "Groupe emblématique du konpa de la diaspora", "Festival mettant à l'honneur la mizik rasin"],
    correct: 3
  },
  {
    q: "Comment définit-on Fabrice Rouzier dans la musique haïtienne ?",
    options: ["Genre musical", "Artiste solo", "Groupe", "Festival/Événement culturel"],
    correct: 1
  },
  {
    q: "Où situe-t-on l'origine de Michael Brun ?",
    options: ["Port-au-Prince / international", "Cap-Haïtien", "National (tradition rara)", "Port-au-Prince / diaspora"],
    correct: 0
  },
  {
    q: "Comment reconnaît-on Accordéon (twoubadou) parmi les autres éléments de la musique haïtienne ?",
    options: ["Pianiste et arrangeur, cofondateur de Djakout Mizik", "Chanteur mêlant konpa, RnB et musique urbaine", "Chanteur fusionnant rock, reggae et konpa", "Instrument central des ensembles de twoubadou"],
    correct: 3
  },
  {
    q: "Comment qualifierait-on BIC sur le plan musical ?",
    options: ["Artiste solo", "Groupe", "Festival/Événement culturel", "Genre musical"],
    correct: 0
  },
  {
    q: "Si l'on devait classer Carnaval des Fleurs (Cap-Haïtien), ce serait comme :",
    options: ["Genre musical", "Groupe", "Artiste solo", "Festival/Événement culturel"],
    correct: 3
  },
  {
    q: "À quelle époque associe-t-on Kesta B ?",
    options: ["Depuis les années 2010", "Fondé en 2005", "Fondé en 1970", "XIXe siècle"],
    correct: 0
  },
  {
    q: "Quel lieu géographique est lié à Magnum Band ?",
    options: ["Port-au-Prince / New York", "Région frontalière (Sud-Est)", "Pétion-Ville", "Diaspora (New York)"],
    correct: 0
  },
  {
    q: "Comment reconnaît-on Volo Volo parmi les autres éléments de la musique haïtienne ?",
    options: ["Groupe de konpa réputé pour ses ballades", "Groupe de konpa reconnu pour ses tubes dansants", "Grand orchestre de konpa des années 1970-1980", "Rappeur et musicien, ex-membre des Fugees d'origine haïtienne"],
    correct: 0
  },
  {
    q: "Quelle description correspond le mieux à Manman tanbou ?",
    options: ["Groupe emblématique du konpa de la diaspora", "Le plus grand des tambours dans un ensemble rituel", "Orchestre fondateur du style konpa dit méringue-konpa", "Coquillage utilisé comme instrument à vent rituel et festif"],
    correct: 1
  },
  {
    q: "Quelle région ou ville est le berceau de Mizik rasin ?",
    options: ["Port-au-Prince (Hôtel Oloffson)", "Diaspora (New York)", "National (mouvement culturel)", "Régions rurales"],
    correct: 2
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux Tcha tcha ?",
    options: ["Artiste solo", "Genre musical", "Instrument", "Festival/Événement culturel"],
    correct: 2
  },
  {
    q: "Dans quelle catégorie classerait-on Accordéon (twoubadou) ?",
    options: ["Festival/Événement culturel", "Groupe", "Artiste solo", "Instrument"],
    correct: 3
  },
  {
    q: "Kai appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Fondé en 1963", "Années 1960-1970", "Fondé en 2020", "Années 1940-1990"],
    correct: 2
  },
  {
    q: "Quelle période correspond le mieux à Skah Shah ?",
    options: ["Fondé en 1970", "Depuis les années 1970", "Fondé en 1989", "Fondé en 1974"],
    correct: 3
  },
  {
    q: "Où Les Shleu Shleu a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["National", "Port-au-Prince", "Pétion-Ville", "Gonaïves / diaspora"],
    correct: 1
  },
  {
    q: "Quelle est la nature de Kai dans le paysage musical haïtien ?",
    options: ["Genre musical", "Festival/Événement culturel", "Groupe", "Artiste solo"],
    correct: 2
  },
  {
    q: "Quel élément résume le mieux Zenglen ?",
    options: ["Chanteur engagé, figure de la mizik angaje", "Groupe majeur de mizik rasin engagée", "Chanteur mêlant konpa, RnB et musique urbaine", "Groupe de konpa populaire des années 1990-2000"],
    correct: 3
  },
  {
    q: "Quel élément résume le mieux Méringue haïtienne ?",
    options: ["Auteur-compositeur de folk et chanson engagée", "Orchestre fondateur du style konpa dit méringue-konpa", "Chanteur, ancien leader de Zenglen puis Djakout Mizik", "Danse de salon d'origine haïtienne aux rythmes élégants"],
    correct: 3
  },
  {
    q: "Quel trait particulier caractérise Festival Racines ?",
    options: ["Orchestre historique du mini-jazz", "Groupe majeur de mizik rasin engagée", "Festival mettant à l'honneur la mizik rasin", "Rappeur haïtiano-américain connu pour ses collaborations konpa-hip-hop"],
    correct: 2
  },
  {
    q: "Kompa Dirèk provient principalement de quelle zone ?",
    options: ["Pétion-Ville / New York", "National (mouvement culturel)", "Port-au-Prince", "New Jersey (diaspora)"],
    correct: 2
  },
  {
    q: "Quelle est la ville ou région d'origine associée à J Perry ?",
    options: ["Miami (diaspora)", "Régions rurales", "Port-au-Prince / international", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "De quel type d'entité musicale s'agit-il pour Ti Manno ?",
    options: ["Groupe", "Festival/Événement culturel", "Genre musical", "Artiste solo"],
    correct: 3
  },
  {
    q: "Quel lieu géographique est lié à Michael Brun ?",
    options: ["Diaspora et Port-au-Prince", "Port-au-Prince / international", "Port-au-Prince / diaspora", "National (tradition rara)"],
    correct: 1
  },
  {
    q: "Quelle période correspond le mieux à Toto Bissainthe ?",
    options: ["Fondé en 1968", "Fondé en 1996", "Fondé en 1974", "Années 1960-1990"],
    correct: 3
  },
  {
    q: "Quel lieu géographique est lié à T-Vice ?",
    options: ["Port-au-Prince (Hôtel Oloffson)", "Port-au-Prince / international", "Cap-Haïtien", "Port-au-Prince (famille Duplessis)"],
    correct: 3
  },
  {
    q: "Quel élément résume le mieux Graj (güira) ?",
    options: ["Instrument à percussion métallique gratté avec une baguette", "Musique de rue processionnelle jouée en période de Carême", "Fusion du konpa avec le zouk antillais", "Groupe pionnier de la mizik rasin"],
    correct: 0
  },
  {
    q: "Comment qualifierait-on Rap kreyòl sur le plan musical ?",
    options: ["Festival/Événement culturel", "Groupe", "Genre musical", "Instrument"],
    correct: 2
  },
  {
    q: "Quelle caractéristique définit le mieux Kesta B ?",
    options: ["Chanteur, ancien leader de Zenglen puis Djakout Mizik", "Chanteur de konpa contemporain", "Groupe pionnier de la mizik rasin", "Instrument central des ensembles de twoubadou"],
    correct: 1
  },
  {
    q: "Mikaben est le plus étroitement associé(e) à quel lieu ?",
    options: ["Port-au-Prince (famille Duplessis)", "New Jersey (diaspora)", "Port-au-Prince / diaspora", "New York (diaspora)"],
    correct: 2
  },
  {
    q: "Quelle est la nature de Boukman Eksperyans dans le paysage musical haïtien ?",
    options: ["Artiste solo", "Groupe", "Instrument", "Festival/Événement culturel"],
    correct: 1
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Klass ?",
    options: ["Groupe de konpa reconnu pour ses ballades romantiques", "Carnaval d'été célèbre dans le Nord d'Haïti", "Chanteuse engagée connue pour ses textes politiques", "Grand orchestre de konpa des années 1970-1980"],
    correct: 0
  },
  {
    q: "Martha Jean-Claude est le plus étroitement associé(e) à quel lieu ?",
    options: ["Port-au-Prince / Cuba", "New York (diaspora)", "National (surtout zones rurales)", "National"],
    correct: 0
  },
  {
    q: "Vayb provient principalement de quelle zone ?",
    options: ["Port-au-Prince", "Port-au-Prince et diaspora", "Port-au-Prince / Cuba", "National (Port-au-Prince, Jacmel...)"],
    correct: 0
  },
  {
    q: "Manno Charlemagne appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Depuis les années 1970", "Années 1940-1990", "Fondé en 1974", "XIXe siècle"],
    correct: 0
  },
  {
    q: "Comment reconnaît-on Vayb parmi les autres éléments de la musique haïtienne ?",
    options: ["Groupe de konpa contemporain très populaire chez les jeunes", "Style fondateur du konpa moderne à tempo régulier", "Grand orchestre de konpa toujours actif", "Grand orchestre de konpa des années 1970-1980"],
    correct: 0
  },
  {
    q: "Quelle région ou ville est le berceau de Kanaval (Carnaval haïtien) ?",
    options: ["Pétion-Ville", "New Jersey (diaspora)", "National (Port-au-Prince, Jacmel...)", "Régions rurales du Nord et du Sud"],
    correct: 2
  },
  {
    q: "Comment reconnaît-on Djakout #1 parmi les autres éléments de la musique haïtienne ?",
    options: ["Rythme dansant à base de guitare, cuivres et percussions", "Fusion du konpa avec le zouk antillais", "Groupe né en 2010 d'une scission avec Djakout Mizik", "Musique festive liée aux célébrations agraires"],
    correct: 2
  },
  {
    q: "Où situe-t-on l'origine de Boukan Ginen ?",
    options: ["Port-au-Prince", "Port-au-Prince (Hôtel Oloffson)", "Région frontalière (Sud-Est)", "Cap-Haïtien"],
    correct: 0
  },
  {
    q: "Quel lieu géographique est lié à Boukman Eksperyans ?",
    options: ["Port-au-Prince", "Port-au-Prince / Cuba", "Port-au-Prince / diaspora", "Port-au-Prince (Hôtel Oloffson)"],
    correct: 0
  },
  {
    q: "Ti Manno est le plus étroitement associé(e) à quel lieu ?",
    options: ["Diaspora et Port-au-Prince", "Cap-Haïtien", "Port-au-Prince", "National (mouvement culturel)"],
    correct: 2
  },
  {
    q: "T-Vice se distingue principalement par :",
    options: ["Groupe précurseur du mini-jazz haïtien", "Groupe de konpa fondé par une famille de musiciens", "Groupe de konpa nouvelle génération", "Chanteur, ancien leader de Zenglen puis Djakout Mizik"],
    correct: 1
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Krezi Mizik ?",
    options: ["Fondé en 2016", "Fondé en 1970", "Depuis les années 2000", "Fondé en 1990"],
    correct: 0
  },
  {
    q: "Zing Experience désigne principalement :",
    options: ["Groupe", "Artiste solo", "Genre musical", "Instrument"],
    correct: 0
  },
  {
    q: "À quelle époque associe-t-on Les Shleu Shleu ?",
    options: ["Fondé en 1963", "Années 1980", "Fondé en 1965", "Tradition annuelle (novembre)"],
    correct: 0
  },
  {
    q: "À quelle époque associe-t-on Kreyòl La ?",
    options: ["Années 1990-2000", "Fondé en 2007", "Fondé en 2018", "Fondé en 2005"],
    correct: 1
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Boule zombi ?",
    options: ["Port-au-Prince", "National (surtout zones rurales)", "Port-au-Prince (Hôtel Oloffson)", "Diaspora et Port-au-Prince"],
    correct: 0
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Manman tanbou ?",
    options: ["Fondé en 1980", "Époque coloniale à aujourd'hui", "Fondé en 1968", "Années 1990-2000"],
    correct: 1
  },
  {
    q: "Comment reconnaît-on Boule zombi parmi les autres éléments de la musique haïtienne ?",
    options: ["Style de konpa rapide et énergique pour la danse", "Instrument central des ensembles de twoubadou", "Groupe de mizik rasin dirigé par Richard Morse", "Fusion de rythmes vodou traditionnels et de rock/pop"],
    correct: 0
  },
  {
    q: "Kreyòl La est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Fondé en 2010", "Fondé en 2018", "Années 1980-1990", "Fondé en 2007"],
    correct: 3
  },
  {
    q: "Quelle est la période de référence pour Kanpèch ?",
    options: ["Fondé en 1975", "Années 1980", "Depuis les années 2000", "Fondé en 2020"],
    correct: 0
  },
  {
    q: "Gaga désigne principalement :",
    options: ["Groupe", "Festival/Événement culturel", "Instrument", "Genre musical"],
    correct: 3
  },
  {
    q: "Comment qualifierait-on Vayb sur le plan musical ?",
    options: ["Artiste solo", "Instrument", "Groupe", "Festival/Événement culturel"],
    correct: 2
  },
  {
    q: "Vaksin se distingue principalement par :",
    options: ["Trompette en bambou utilisée dans les groupes de rara", "Trio de konpa formé par Carlo, Richard et Mickaël", "Musique festive liée aux célébrations agraires", "Groupe de konpa fondé par d'anciens membres de Kreyòl La"],
    correct: 0
  },
  {
    q: "Qu'est-ce que Vaksin exactement ?",
    options: ["Instrument", "Genre musical", "Festival/Événement culturel", "Artiste solo"],
    correct: 0
  },
  {
    q: "Si l'on devait classer Magnum Band, ce serait comme :",
    options: ["Festival/Événement culturel", "Genre musical", "Artiste solo", "Groupe"],
    correct: 3
  },
  {
    q: "De quel type d'entité musicale s'agit-il pour Farah Juste ?",
    options: ["Genre musical", "Festival/Événement culturel", "Instrument", "Artiste solo"],
    correct: 3
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Original H (originaire de Brooklyn) ?",
    options: ["Depuis les années 1970", "Depuis les années 2000", "Fondé en 1989", "Fondé en 2010"],
    correct: 1
  },
  {
    q: "Quelle est la nature de Original Instrumental Sextet (OIS) dans le paysage musical haïtien ?",
    options: ["Artiste solo", "Festival/Événement culturel", "Groupe", "Instrument"],
    correct: 2
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Djakout #1 ?",
    options: ["Fondé en 2010", "Fondé en 1989", "Années 1980-1990", "Années 1960-1970"],
    correct: 0
  },
  {
    q: "De quel type d'entité musicale s'agit-il pour Djakout Mizik ?",
    options: ["Instrument", "Groupe", "Genre musical", "Artiste solo"],
    correct: 1
  },
  {
    q: "Comment qualifierait-on Gaga sur le plan musical ?",
    options: ["Genre musical", "Instrument", "Artiste solo", "Groupe"],
    correct: 0
  },
  {
    q: "Quel trait particulier caractérise Konpa ?",
    options: ["Style fondateur du konpa moderne à tempo régulier", "Carnaval réputé pour ses masques et costumes artisanaux", "Rythme dansant à base de guitare, cuivres et percussions", "Maracas traditionnelles utilisées dans plusieurs genres"],
    correct: 2
  },
  {
    q: "Qu'est-ce qui distingue Kompa Dirèk sur le plan musical ou culturel ?",
    options: ["Grande fête populaire précédant le Carême, rythmée par les orchestres de konpa", "Rythme dansant à base de guitare, cuivres et percussions", "Style fondateur du konpa moderne à tempo régulier", "Pionnier mondial du konpa avec des tubes internationaux"],
    correct: 2
  },
  {
    q: "Sweet Micky (Michel Martelly) provient principalement de quelle zone ?",
    options: ["Port-au-Prince / diaspora", "Port-au-Prince", "National (mouvement culturel)", "National (surtout zones rurales)"],
    correct: 1
  },
  {
    q: "Quel élément résume le mieux Konpa Love ?",
    options: ["Danse de salon d'origine haïtienne aux rythmes élégants", "Style de konpa romantique et mélodique", "Orchestre de mini-jazz influent des années 1960-1970", "Pianiste et arrangeur, cofondateur de Djakout Mizik"],
    correct: 1
  },
  {
    q: "Comment définit-on Conque (lambi) dans la musique haïtienne ?",
    options: ["Festival/Événement culturel", "Artiste solo", "Groupe", "Instrument"],
    correct: 3
  },
  {
    q: "Quelle région ou ville est le berceau de Carimi ?",
    options: ["National (tradition rara)", "Port-au-Prince / New York", "Diaspora et Port-au-Prince", "Miami (diaspora)"],
    correct: 3
  },
  {
    q: "Dans quelle décennie Toto Bissainthe a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Fondé en 2010", "Tradition annuelle (juillet)", "Années 1960-1990", "Années 1990-2000"],
    correct: 2
  },
  {
    q: "Quelle est la nature de Roody Roodboy dans le paysage musical haïtien ?",
    options: ["Festival/Événement culturel", "Groupe", "Artiste solo", "Instrument"],
    correct: 2
  },
  {
    q: "À quelle époque associe-t-on Krezi Mizik ?",
    options: ["Fondé en 1998", "Fondé en 1968", "Fondé en 1982", "Fondé en 2016"],
    correct: 3
  },
  {
    q: "Sweet Micky (Michel Martelly) est le plus étroitement associé(e) à quel lieu ?",
    options: ["Jacmel", "National (surtout rara)", "Port-au-Prince", "Port-au-Prince (famille Duplessis)"],
    correct: 2
  },
  {
    q: "Skah Shah provient principalement de quelle zone ?",
    options: ["New York (diaspora)", "Port-au-Prince", "Pétion-Ville", "Régions rurales du Nord et du Sud"],
    correct: 0
  },
  {
    q: "Quel lieu géographique est lié à Accordéon (twoubadou) ?",
    options: ["Port-au-Prince / international", "Port-au-Prince et diaspora", "Cap-Haïtien", "Régions rurales"],
    correct: 3
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Rap kreyòl ?",
    options: ["Fondé en 2020", "Années 1980", "Fondé en 1968", "Années 1990-2000"],
    correct: 3
  },
  {
    q: "Dans quelle décennie Mizik rasin a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Années 1980", "Fondé en 1965", "Fondé en 2016", "Tradition annuelle"],
    correct: 0
  },
  {
    q: "Quelle caractéristique définit le mieux Volo Volo ?",
    options: ["Groupe de konpa réputé pour ses ballades", "Orchestre historique du mini-jazz", "Groupe emblématique du konpa de la diaspora", "Rappeur pionnier du rap kreyòl"],
    correct: 0
  },
  {
    q: "Ti Manno provient principalement de quelle zone ?",
    options: ["Port-au-Prince / Cuba", "Port-au-Prince", "National (mouvement culturel)", "Régions rurales"],
    correct: 1
  },
  {
    q: "Quelle région ou ville est le berceau de Zing Experience ?",
    options: ["Port-au-Prince", "Diaspora (New York/Miami)", "National (Port-au-Prince, Jacmel...)", "Port-au-Prince / diaspora"],
    correct: 0
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Bel Air Orchestra ?",
    options: ["Fondé en 1993", "Fondé en 1965", "Époque coloniale à aujourd'hui", "Fondé en 1975"],
    correct: 1
  },
  {
    q: "Dans quelle catégorie classerait-on T-Vice ?",
    options: ["Festival/Événement culturel", "Artiste solo", "Groupe", "Genre musical"],
    correct: 2
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Tcha tcha ?",
    options: ["DJ et producteur électro fusionnant konpa et musique électronique", "Maracas traditionnelles utilisées dans plusieurs genres", "Orchestre populaire du quartier de Bel-Air", "Tambour central des musiques vodou et rara"],
    correct: 1
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Djakout #1 ?",
    options: ["Années 1960-1970", "Fondé en 2010", "Années 1950", "Tradition annuelle (novembre)"],
    correct: 1
  },
  {
    q: "Quelle période correspond le mieux à Gaga ?",
    options: ["Époque coloniale à aujourd'hui", "Fondé en 1989", "Époque coloniale", "Depuis les années 1970"],
    correct: 0
  },
  {
    q: "Quelle période correspond le mieux à Roody Roodboy ?",
    options: ["Fondé en 1996", "Depuis les années 1990", "Depuis les années 2010", "Fondé en 1989"],
    correct: 2
  },
  {
    q: "Si l'on devait classer Mizik angaje, ce serait comme :",
    options: ["Groupe", "Artiste solo", "Genre musical", "Instrument"],
    correct: 2
  },
  {
    q: "Comment définit-on Ibo Combo dans la musique haïtienne ?",
    options: ["Genre musical", "Instrument", "Groupe", "Festival/Événement culturel"],
    correct: 2
  },
  {
    q: "D'où est originaire Kanpèch ?",
    options: ["Cap-Haïtien", "Pétion-Ville", "Port-au-Prince (famille Duplessis)", "National (surtout zones rurales)"],
    correct: 0
  },
  {
    q: "Qu'est-ce qui distingue Wyclef Jean sur le plan musical ou culturel ?",
    options: ["Groupe majeur de mizik rasin engagée", "Rappeur et musicien, ex-membre des Fugees d'origine haïtienne", "Rythme dansant à base de guitare, cuivres et percussions", "Style de konpa rapide et énergique pour la danse"],
    correct: 1
  },
  {
    q: "Qu'est-ce qui distingue Les Shleu Shleu sur le plan musical ou culturel ?",
    options: ["Pionnier du mini-jazz haïtien", "Carnaval réputé pour ses masques et costumes artisanaux", "Ancêtre du banjo d'origine afro-haïtienne", "Grande fête populaire précédant le Carême, rythmée par les orchestres de konpa"],
    correct: 0
  },
  {
    q: "À quelle époque associe-t-on Michael Brun ?",
    options: ["Depuis les années 1980", "Tradition annuelle", "Fondé en 2016", "Depuis les années 2010"],
    correct: 3
  },
  {
    q: "Quelle région ou ville est le berceau de Coupé Cloué et l'Ensemble Select ?",
    options: ["Pétion-Ville / New York", "Port-au-Prince / Cuba", "National (mouvement culturel)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Comment reconnaît-on Skah Shah parmi les autres éléments de la musique haïtienne ?",
    options: ["Style de konpa romantique et mélodique", "Chanteuse et actrice, figure de la chanson racine", "Groupe emblématique du konpa de la diaspora", "Trompette en bambou utilisée dans les groupes de rara"],
    correct: 2
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Tcha tcha ?",
    options: ["Fondé en 1998", "Années 1940-1990", "Fondé en 1974", "Époque coloniale à aujourd'hui"],
    correct: 3
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux Mizik vodou ?",
    options: ["Groupe", "Instrument", "Artiste solo", "Genre musical"],
    correct: 3
  },
  {
    q: "De quel type d'entité musicale s'agit-il pour Roody Roodboy ?",
    options: ["Instrument", "Groupe", "Artiste solo", "Genre musical"],
    correct: 2
  },
  {
    q: "Quel trait particulier caractérise Boukan Ginen ?",
    options: ["Maracas traditionnelles utilisées dans plusieurs genres", "Chanteur de konpa reconnu pour sa voix et ses ballades", "Groupe majeur de mizik rasin engagée", "Chanteuse engagée connue pour ses textes politiques"],
    correct: 2
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Boukman Eksperyans ?",
    options: ["Fondé en 1978", "Fondé en 1974", "Fondé en 1962", "Début du XXe siècle"],
    correct: 0
  },
  {
    q: "De quel type d'entité musicale s'agit-il pour Mini-jazz ?",
    options: ["Festival/Événement culturel", "Instrument", "Genre musical", "Groupe"],
    correct: 2
  },
  {
    q: "Qu'est-ce qui distingue Kesta B sur le plan musical ou culturel ?",
    options: ["Chanteur de konpa contemporain", "Carnaval d'été célèbre dans le Nord d'Haïti", "Le plus grand des tambours dans un ensemble rituel", "Groupe de konpa nouvelle génération"],
    correct: 0
  },
  {
    q: "Fabrice Rouzier désigne principalement :",
    options: ["Artiste solo", "Instrument", "Festival/Événement culturel", "Groupe"],
    correct: 0
  },
  {
    q: "Konpa provient principalement de quelle zone ?",
    options: ["Port-au-Prince", "Port-au-Prince / diaspora", "National (tradition rara)", "National (surtout zones rurales)"],
    correct: 0
  },
  {
    q: "Dans quelle décennie Kai a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Fondé en 2020", "Tradition annuelle (juillet)", "Années 1950", "Depuis les années 1990"],
    correct: 0
  },
  {
    q: "Comment qualifierait-on Caribbean Sextet sur le plan musical ?",
    options: ["Groupe", "Genre musical", "Artiste solo", "Festival/Événement culturel"],
    correct: 0
  },
  {
    q: "Caribbean Sextet désigne principalement :",
    options: ["Groupe", "Genre musical", "Festival/Événement culturel", "Artiste solo"],
    correct: 0
  },
  {
    q: "Toto Bissainthe appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Fondé en 2018", "Années 1950", "Années 1960-1990", "Années 1980"],
    correct: 2
  },
  {
    q: "À quelle époque associe-t-on Accordéon (twoubadou) ?",
    options: ["Début du XXe siècle", "Années 1990-2000", "Fondé en 1996", "Fondé en 1965"],
    correct: 0
  },
  {
    q: "Où Kanaval de Jacmel a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["Diaspora (New York)", "National (surtout zones rurales)", "Cap-Haïtien", "Jacmel"],
    correct: 3
  },
  {
    q: "Qu'est-ce que Festival Racines exactement ?",
    options: ["Festival/Événement culturel", "Groupe", "Instrument", "Artiste solo"],
    correct: 0
  },
  {
    q: "Quelle caractéristique définit le mieux Martha Jean-Claude ?",
    options: ["Groupe de konpa reconnu pour ses tubes dansants", "Groupe précurseur du mini-jazz haïtien", "Célébration vodou en l'honneur des esprits des morts", "Pionnière du folklore chanté haïtien"],
    correct: 3
  },
  {
    q: "Alan Cavé se distingue principalement par :",
    options: ["Musique de rue processionnelle jouée en période de Carême", "Chants et percussions liés aux cérémonies religieuses vodou", "Hip-hop chanté en créole haïtien", "Chanteur, ancien leader de Zenglen puis Djakout Mizik"],
    correct: 3
  },
  {
    q: "De quel type d'entité musicale s'agit-il pour Krezi Mizik ?",
    options: ["Instrument", "Festival/Événement culturel", "Artiste solo", "Groupe"],
    correct: 3
  },
  {
    q: "Quel lieu géographique est lié à Kreyòl La ?",
    options: ["National (surtout rara)", "New Jersey (diaspora)", "Port-au-Prince", "Miami (diaspora)"],
    correct: 2
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Roody Roodboy ?",
    options: ["Tradition annuelle (juillet)", "Depuis les années 1980", "Années 1950-1960", "Depuis les années 2010"],
    correct: 3
  },
  {
    q: "D'où est originaire Mizik rasin ?",
    options: ["Cap-Haïtien", "National (tradition rara)", "National (mouvement culturel)", "National (surtout zones rurales)"],
    correct: 2
  },
  {
    q: "Quel trait particulier caractérise Vaksin ?",
    options: ["Chanteur engagé, figure de la mizik angaje", "Trompette en bambou utilisée dans les groupes de rara", "Orchestre régional connu dans le Nord d'Haïti", "Chanteur, ancien leader de Zenglen puis Djakout Mizik"],
    correct: 1
  },
  {
    q: "Quelle est la période de référence pour Rap kreyòl ?",
    options: ["Fondé en 1962", "Fondé en 1989", "Années 1990-2000", "Années 1980-1990"],
    correct: 2
  },
  {
    q: "Où situe-t-on l'origine de T-Vice ?",
    options: ["Port-au-Prince (famille Duplessis)", "National (surtout rara)", "National (tradition rara)", "Diaspora (New York)"],
    correct: 0
  },
  {
    q: "Où Kreyòl La a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["Port-au-Prince (famille Duplessis)", "Région frontalière (Sud-Est)", "Port-au-Prince", "Cap-Haïtien"],
    correct: 2
  },
  {
    q: "Quelle est la période de référence pour Roody Roodboy ?",
    options: ["Années 1950-1960", "Fondé en 1970", "Fondé en 1975", "Depuis les années 2010"],
    correct: 3
  },
  {
    q: "Comment reconnaît-on Conque (lambi) parmi les autres éléments de la musique haïtienne ?",
    options: ["Chanteur fusionnant rock, reggae et konpa", "Coquillage utilisé comme instrument à vent rituel et festif", "Chanteur engagé, figure de la mizik angaje", "Chanteur de konpa reconnu pour sa voix et ses ballades"],
    correct: 1
  },
  {
    q: "Comment qualifierait-on Méringue haïtienne sur le plan musical ?",
    options: ["Genre musical", "Artiste solo", "Groupe", "Instrument"],
    correct: 0
  },
  {
    q: "Belo est le plus étroitement associé(e) à quel lieu ?",
    options: ["Port-au-Prince et diaspora", "Port-au-Prince / New York", "Port-au-Prince", "Port-au-Prince / international"],
    correct: 2
  },
  {
    q: "Dans quelle catégorie classerait-on Zouk haïtien ?",
    options: ["Artiste solo", "Groupe", "Genre musical", "Festival/Événement culturel"],
    correct: 2
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Mizik rasin ?",
    options: ["Port-au-Prince / diaspora", "National (mouvement culturel)", "Port-au-Prince (Hôtel Oloffson)", "Pétion-Ville / New York"],
    correct: 1
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Konpa ?",
    options: ["Jacmel", "Port-au-Prince", "Port-au-Prince / Cuba", "Port-au-Prince / diaspora"],
    correct: 1
  },
  {
    q: "Mizik rasin appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Années 1960-1990", "Fondé en 1970", "Années 1980", "Tradition annuelle"],
    correct: 2
  },
  {
    q: "Konpa Love est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Tradition annuelle", "Fondé en 1966", "Années 1990-2000", "Fondé en 1982"],
    correct: 2
  },
  {
    q: "Quelle période correspond le mieux à Farah Juste ?",
    options: ["Fondé en 1990", "Depuis les années 1980", "Fondé en 1982", "Fondé en 1965"],
    correct: 1
  },
  {
    q: "Où situe-t-on l'origine de Les Shleu Shleu ?",
    options: ["Port-au-Prince", "Gonaïves / diaspora", "Port-au-Prince et diaspora", "Port-au-Prince / international"],
    correct: 0
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Graj (güira) ?",
    options: ["Depuis les années 1990", "Depuis les années 2010", "Époque coloniale à aujourd'hui", "Fondé en 1962"],
    correct: 2
  },
  {
    q: "D'où est originaire Bel Air Orchestra ?",
    options: ["Port-au-Prince", "Diaspora (New York/Miami)", "Port-au-Prince / international", "Port-au-Prince et diaspora"],
    correct: 0
  },
  {
    q: "Quel élément résume le mieux Ti Manno ?",
    options: ["DJ et producteur électro fusionnant konpa et musique électronique", "Chanteur emblématique de konpa social et engagé", "Rappeur pionnier du rap kreyòl", "Style de konpa rapide et énergique pour la danse"],
    correct: 1
  },
  {
    q: "Comment reconnaît-on Djakout Mizik parmi les autres éléments de la musique haïtienne ?",
    options: ["Grand orchestre de konpa toujours actif", "Musique festive liée aux célébrations agraires", "Orchestre de mini-jazz influent des années 1960-1970", "Groupe de konpa reconnu pour ses tubes dansants"],
    correct: 3
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Sweet Micky (Michel Martelly) ?",
    options: ["Groupe de konpa issu de la scission de Djakout Mizik", "Groupe de konpa reconnu pour ses ballades romantiques", "Figure populaire du konpa avant de devenir président d'Haïti", "Musique festive liée aux célébrations agraires"],
    correct: 2
  },
  {
    q: "Roody Roodboy se distingue principalement par :",
    options: ["Autre nom sous lequel Djakout Mizik est parfois connu à ses débuts", "Pionnier du mini-jazz haïtien", "Groupe majeur du konpa des années 1980", "Artiste populaire mêlant konpa et musique urbaine"],
    correct: 3
  },
  {
    q: "Comment reconnaît-on Gaga parmi les autres éléments de la musique haïtienne ?",
    options: ["Petits orchestres de guitares électriques inspirés du rock", "DJ et producteur électro fusionnant konpa et musique électronique", "Chanteur de konpa reconnu pour sa voix et ses ballades", "Musique festive liée aux célébrations agraires"],
    correct: 3
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Fabrice Rouzier ?",
    options: ["National (tradition rara)", "Port-au-Prince (famille Duplessis)", "Port-au-Prince", "National (surtout rara)"],
    correct: 2
  },
  {
    q: "Où situe-t-on l'origine de Emeline Michel ?",
    options: ["Jacmel", "Gonaïves / diaspora", "National (tradition rara)", "Région frontalière (Sud-Est)"],
    correct: 1
  },
  {
    q: "Quelle caractéristique définit le mieux RAM ?",
    options: ["Pianiste et arrangeur, cofondateur de Djakout Mizik", "Danse de salon d'origine haïtienne aux rythmes élégants", "Groupe de mizik rasin dirigé par Richard Morse", "Groupe de konpa formé par d'anciens membres de Nu Look et Kreyòl La"],
    correct: 2
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Zenglen ?",
    options: ["Tradition annuelle (novembre)", "Fondé en 1993", "Tradition annuelle", "Fondé en 2007"],
    correct: 1
  },
  {
    q: "Djakout Mizik (Fabrice Rouzier) correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Festival/Événement culturel", "Artiste solo", "Groupe", "Genre musical"],
    correct: 1
  },
  {
    q: "Comment qualifierait-on Harmonik sur le plan musical ?",
    options: ["Groupe", "Genre musical", "Artiste solo", "Instrument"],
    correct: 0
  },
  {
    q: "Tanbou se distingue principalement par :",
    options: ["Ancêtre du konpa mêlant jazz et rythmes afro-caribéens", "Tambour central des musiques vodou et rara", "Chanteuse surnommée « la Grande Dame de la chanson haïtienne »", "Orchestre populaire du quartier de Bel-Air"],
    correct: 1
  },
  {
    q: "De quel type d'entité musicale s'agit-il pour Zing Experience ?",
    options: ["Genre musical", "Artiste solo", "Groupe", "Festival/Événement culturel"],
    correct: 2
  },
  {
    q: "Qu'est-ce qui distingue Ibo Combo sur le plan musical ou culturel ?",
    options: ["Chanteur fusionnant rock, reggae et konpa", "Petits orchestres de guitares électriques inspirés du rock", "Orchestre historique du mini-jazz", "Ancêtre du konpa mêlant jazz et rythmes afro-caribéens"],
    correct: 2
  },
  {
    q: "Si l'on devait classer RAM, ce serait comme :",
    options: ["Artiste solo", "Groupe", "Festival/Événement culturel", "Genre musical"],
    correct: 1
  },
  {
    q: "Où situe-t-on l'origine de Manman tanbou ?",
    options: ["National", "Diaspora et Port-au-Prince", "Diaspora (New York)", "Pétion-Ville"],
    correct: 0
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Fèt Gede ?",
    options: ["Chanteuse engagée connue pour ses textes politiques", "Chanteur engagé, figure de la mizik angaje", "Groupe de konpa réputé pour ses ballades", "Célébration vodou en l'honneur des esprits des morts"],
    correct: 3
  },
  {
    q: "À quelle époque associe-t-on Alan Cavé ?",
    options: ["Depuis les années 1990", "Années 1980-1990", "Tradition annuelle (novembre)", "Fondé en 2007"],
    correct: 0
  },
  {
    q: "Qu'est-ce que Les Shleu Shleu exactement ?",
    options: ["Artiste solo", "Instrument", "Groupe", "Genre musical"],
    correct: 2
  },
  {
    q: "Farah Juste correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Artiste solo", "Festival/Événement culturel", "Groupe", "Instrument"],
    correct: 0
  },
  {
    q: "Gaga provient principalement de quelle zone ?",
    options: ["National (Port-au-Prince, Jacmel...)", "Pétion-Ville", "Régions rurales", "Région frontalière (Sud-Est)"],
    correct: 3
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Kanaval (Carnaval haïtien) ?",
    options: ["Musique de rue processionnelle jouée en période de Carême", "Festival mettant à l'honneur la mizik rasin", "Grande fête populaire précédant le Carême, rythmée par les orchestres de konpa", "Carnaval réputé pour ses masques et costumes artisanaux"],
    correct: 2
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux Système Band ?",
    options: ["Festival/Événement culturel", "Genre musical", "Instrument", "Groupe"],
    correct: 3
  },
  {
    q: "Où Konpa Love a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["Jacmel", "Cap-Haïtien", "Diaspora et Port-au-Prince", "Port-au-Prince (famille Duplessis)"],
    correct: 2
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux Kai ?",
    options: ["Artiste solo", "Instrument", "Groupe", "Festival/Événement culturel"],
    correct: 2
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Konpa Love ?",
    options: ["Fondé en 2016", "Fondé en 1965", "Années 1990-2000", "Années 1950-1960"],
    correct: 2
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Méringue haïtienne ?",
    options: ["Ancêtre du banjo d'origine afro-haïtienne", "Danse de salon d'origine haïtienne aux rythmes élégants", "Instrument à percussion métallique gratté avec une baguette", "Groupe de konpa réputé pour ses ballades"],
    correct: 1
  },
  {
    q: "Comment qualifierait-on Michael Brun sur le plan musical ?",
    options: ["Instrument", "Festival/Événement culturel", "Genre musical", "Artiste solo"],
    correct: 3
  },
  {
    q: "Comment reconnaît-on Banza parmi les autres éléments de la musique haïtienne ?",
    options: ["Groupe de konpa réputé pour ses ballades", "Chanteur, ancien leader de Zenglen puis Djakout Mizik", "Ancêtre du banjo d'origine afro-haïtienne", "Style fondateur du konpa moderne à tempo régulier"],
    correct: 2
  },
  {
    q: "Mizik vodou est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Depuis les années 1970", "Années 1960-1990", "Années 1980", "Époque coloniale à aujourd'hui"],
    correct: 3
  },
  {
    q: "Dans quelle décennie Klass a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Fondé en 2018", "Fondé en 2005", "Depuis les années 1970", "Fondé en 2007"],
    correct: 1
  },
  {
    q: "Quel lieu géographique est lié à Kesta B ?",
    options: ["Port-au-Prince", "Pétion-Ville", "New Jersey (diaspora)", "National (mouvement culturel)"],
    correct: 0
  },
  {
    q: "Quel lieu géographique est lié à Belo ?",
    options: ["Port-au-Prince", "Port-au-Prince et diaspora", "National (tradition rara)", "Diaspora (New York/Miami)"],
    correct: 0
  },
  {
    q: "Comment qualifierait-on Kai sur le plan musical ?",
    options: ["Festival/Événement culturel", "Artiste solo", "Groupe", "Instrument"],
    correct: 2
  },
  {
    q: "Qu'est-ce qui distingue Sweet Micky (Michel Martelly) sur le plan musical ou culturel ?",
    options: ["Tambour central des musiques vodou et rara", "Figure populaire du konpa avant de devenir président d'Haïti", "Fusion du konpa avec le zouk antillais", "Pionnière du folklore chanté haïtien"],
    correct: 1
  },
  {
    q: "Tcha tcha désigne principalement :",
    options: ["Festival/Événement culturel", "Genre musical", "Instrument", "Artiste solo"],
    correct: 2
  },
  {
    q: "Zenglen se distingue principalement par :",
    options: ["Groupe de konpa new-generation à succès", "Groupe de konpa populaire des années 1990-2000", "Orchestre de mini-jazz influent des années 1960-1970", "Grande fête populaire précédant le Carême, rythmée par les orchestres de konpa"],
    correct: 1
  },
  {
    q: "Quelle caractéristique définit le mieux Original H (originaire de Brooklyn) ?",
    options: ["Orchestre de mini-jazz influent des années 1960-1970", "Pionnier du mini-jazz haïtien", "Rappeur haïtiano-américain connu pour ses collaborations konpa-hip-hop", "Rappeur pionnier du rap kreyòl"],
    correct: 2
  },
  {
    q: "Magnum Band désigne principalement :",
    options: ["Groupe", "Instrument", "Festival/Événement culturel", "Genre musical"],
    correct: 0
  },
  {
    q: "Mizik rasin provient principalement de quelle zone ?",
    options: ["National (mouvement culturel)", "Port-au-Prince (famille Duplessis)", "National (Port-au-Prince, Jacmel...)", "Port-au-Prince / diaspora"],
    correct: 0
  },
  {
    q: "Quelle est la nature de Gypsies de Pétion-Ville dans le paysage musical haïtien ?",
    options: ["Festival/Événement culturel", "Instrument", "Groupe", "Genre musical"],
    correct: 2
  },
  {
    q: "Où Emeline Michel a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["Régions rurales", "Gonaïves / diaspora", "Cap-Haïtien", "National"],
    correct: 1
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Banza ?",
    options: ["Années 1960-1990", "Fondé en 1974", "Fondé en 1970", "Époque coloniale"],
    correct: 3
  },
  {
    q: "Comment qualifierait-on Belo sur le plan musical ?",
    options: ["Instrument", "Festival/Événement culturel", "Artiste solo", "Genre musical"],
    correct: 2
  },
  {
    q: "Tcha tcha est le plus étroitement associé(e) à quel lieu ?",
    options: ["Port-au-Prince (famille Duplessis)", "Pétion-Ville", "Port-au-Prince / international", "National"],
    correct: 3
  },
  {
    q: "Comment définit-on Vaksin dans la musique haïtienne ?",
    options: ["Artiste solo", "Instrument", "Festival/Événement culturel", "Groupe"],
    correct: 1
  },
  {
    q: "Quelle description correspond le mieux à Klass ?",
    options: ["Groupe de konpa reconnu pour ses ballades romantiques", "Pionnière du folklore chanté haïtien", "Chansons engagées portant un message social ou politique", "Groupe de konpa issu de la scission de Djakout Mizik"],
    correct: 0
  },
  {
    q: "Quelle région ou ville est le berceau de Nu Look ?",
    options: ["Port-au-Prince", "National (surtout zones rurales)", "Diaspora (New York)", "Port-au-Prince et diaspora"],
    correct: 0
  },
  {
    q: "Quel lieu géographique est lié à Boukan Ginen ?",
    options: ["Port-au-Prince / Cuba", "National (Port-au-Prince, Jacmel...)", "Diaspora et Port-au-Prince", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Dans quelle décennie Kompa Dirèk a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Fondé en 1998", "Depuis les années 1990", "Fondé en 1980", "Années 1950"],
    correct: 3
  },
  {
    q: "Tcha tcha se distingue principalement par :",
    options: ["Groupe de konpa issu de la scission de Djakout Mizik", "Maracas traditionnelles utilisées dans plusieurs genres", "Fratrie fondatrice d'un grand orchestre de konpa", "Chanteuse engagée connue pour ses textes politiques"],
    correct: 1
  },
  {
    q: "Dans quelle catégorie classerait-on Mizik vodou ?",
    options: ["Groupe", "Genre musical", "Festival/Événement culturel", "Artiste solo"],
    correct: 1
  },
  {
    q: "Dans quelle décennie Original H (originaire de Brooklyn) a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Depuis les années 1990", "Depuis les années 2000", "Fondé en 1982", "Fondé en 2010"],
    correct: 1
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Boukan Ginen ?",
    options: ["Années 1970-1980", "Années 1950-1960", "Fondé en 2010", "Fondé en 1989"],
    correct: 3
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Djakout #1 ?",
    options: ["Groupe né en 2010 d'une scission avec Djakout Mizik", "Musique acoustique de guitare inspirée du son cubain", "Carnaval d'été célèbre dans le Nord d'Haïti", "Style de konpa rapide et énergique pour la danse"],
    correct: 0
  },
  {
    q: "Quelle période correspond le mieux à Zing Experience ?",
    options: ["Fondé en 1996", "Fondé en 1980", "Années 1960-1970", "Tradition annuelle (novembre)"],
    correct: 0
  },
  {
    q: "Quelle est la nature de Zenglen dans le paysage musical haïtien ?",
    options: ["Groupe", "Instrument", "Genre musical", "Artiste solo"],
    correct: 0
  },
  {
    q: "BIC est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Fondé en 2007", "Fondé en 1990", "Depuis les années 2010", "Années 1940-1990"],
    correct: 2
  },
  {
    q: "Dans quelle catégorie classerait-on Boukan Ginen ?",
    options: ["Festival/Événement culturel", "Groupe", "Instrument", "Artiste solo"],
    correct: 1
  },
  {
    q: "À quelle époque associe-t-on Beethova Obas ?",
    options: ["Années 1960-1970", "Fondé en 2007", "Depuis les années 1980", "Fondé en 1965"],
    correct: 2
  },
  {
    q: "Quel élément résume le mieux Original H (originaire de Brooklyn) ?",
    options: ["Rappeur haïtiano-américain connu pour ses collaborations konpa-hip-hop", "Musique de rue processionnelle jouée en période de Carême", "Instrument central des ensembles de twoubadou", "Groupe de konpa nouvelle génération"],
    correct: 0
  },
  {
    q: "Djakout Mizik (Fabrice Rouzier) désigne principalement :",
    options: ["Artiste solo", "Groupe", "Genre musical", "Festival/Événement culturel"],
    correct: 0
  },
  {
    q: "Carimi correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Instrument", "Artiste solo", "Genre musical", "Groupe"],
    correct: 3
  },
  {
    q: "Quelle période correspond le mieux à Rap kreyòl ?",
    options: ["Depuis les années 2010", "Fondé en 1998", "Fondé en 1980", "Années 1990-2000"],
    correct: 3
  },
  {
    q: "Comment reconnaît-on Mikaben parmi les autres éléments de la musique haïtienne ?",
    options: ["Ancêtre du konpa mêlant jazz et rythmes afro-caribéens", "Le plus grand des tambours dans un ensemble rituel", "Chanteur de konpa reconnu pour sa voix et ses ballades", "Musique acoustique de guitare inspirée du son cubain"],
    correct: 2
  },
  {
    q: "Comment définit-on Boukman Eksperyans dans la musique haïtienne ?",
    options: ["Groupe", "Festival/Événement culturel", "Artiste solo", "Instrument"],
    correct: 0
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Original Instrumental Sextet (OIS) ?",
    options: ["National (mouvement culturel)", "Jacmel", "Port-au-Prince", "Port-au-Prince et diaspora"],
    correct: 2
  },
  {
    q: "Zing Experience se distingue principalement par :",
    options: ["Groupe de konpa reconnu pour ses harmonies vocales", "Style de konpa rapide et énergique pour la danse", "Pionnier mondial du konpa avec des tubes internationaux", "Artiste populaire mêlant konpa et musique urbaine"],
    correct: 0
  },
  {
    q: "Alan Cavé désigne principalement :",
    options: ["Instrument", "Artiste solo", "Genre musical", "Festival/Événement culturel"],
    correct: 1
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Nu Look ?",
    options: ["Cap-Haïtien", "Diaspora et Port-au-Prince", "Port-au-Prince", "Pétion-Ville"],
    correct: 2
  },
  {
    q: "Mikaben correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Festival/Événement culturel", "Artiste solo", "Genre musical", "Groupe"],
    correct: 1
  },
  {
    q: "RAM appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Fondé en 1990", "XIXe siècle", "Fondé en 1974", "Années 1950"],
    correct: 0
  },
  {
    q: "Quel lieu géographique est lié à Rap kreyòl ?",
    options: ["National (mouvement culturel)", "Port-au-Prince et diaspora", "National (surtout zones rurales)", "Port-au-Prince (Hôtel Oloffson)"],
    correct: 1
  },
  {
    q: "Les Shleu Shleu appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Années 1950", "Fondé en 1970", "Fondé en 1963", "Depuis les années 1970"],
    correct: 2
  },
  {
    q: "Konpa se distingue principalement par :",
    options: ["Orchestre régional connu dans le Nord d'Haïti", "Rythme dansant à base de guitare, cuivres et percussions", "Style de konpa rapide et énergique pour la danse", "Pionnier du mini-jazz haïtien"],
    correct: 1
  },
  {
    q: "Quel lieu géographique est lié à J Perry ?",
    options: ["Miami (diaspora)", "National (surtout zones rurales)", "New Jersey (diaspora)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Quel trait particulier caractérise Caribbean Sextet ?",
    options: ["Groupe de konpa populaire des années 1990-2000", "Autre nom sous lequel Djakout Mizik est parfois connu à ses débuts", "Coquillage utilisé comme instrument à vent rituel et festif", "Orchestre de mini-jazz influent des années 1960-1970"],
    correct: 3
  },
  {
    q: "Beethova Obas se distingue principalement par :",
    options: ["Groupe majeur de mizik rasin engagée", "Ancêtre du konpa mêlant jazz et rythmes afro-caribéens", "Auteur-compositeur de folk et chanson engagée", "Rappeur pionnier du rap kreyòl"],
    correct: 2
  },
  {
    q: "Comment définit-on Toto Bissainthe dans la musique haïtienne ?",
    options: ["Instrument", "Festival/Événement culturel", "Artiste solo", "Groupe"],
    correct: 2
  },
  {
    q: "Quelle période correspond le mieux à Boule zombi ?",
    options: ["Fondé en 1975", "Fondé en 1962", "Années 1970-1980", "Depuis les années 1970"],
    correct: 2
  },
  {
    q: "Les Shleu Shleu correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Instrument", "Groupe", "Artiste solo", "Festival/Événement culturel"],
    correct: 1
  },
  {
    q: "Tanbou est le plus étroitement associé(e) à quel lieu ?",
    options: ["Port-au-Prince et diaspora", "National (surtout rara)", "National", "New York (diaspora)"],
    correct: 2
  },
  {
    q: "Festival Racines correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Instrument", "Groupe", "Festival/Événement culturel", "Genre musical"],
    correct: 2
  },
  {
    q: "Où situe-t-on l'origine de Belo ?",
    options: ["Port-au-Prince", "Port-au-Prince / New York", "Port-au-Prince / diaspora", "National (tradition rara)"],
    correct: 0
  },
  {
    q: "Où Zing Experience a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["Jacmel", "Port-au-Prince", "Port-au-Prince / international", "National (Port-au-Prince, Jacmel...)"],
    correct: 1
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Skah Shah ?",
    options: ["Cap-Haïtien", "New York (diaspora)", "Port-au-Prince / Cuba", "National (surtout rara)"],
    correct: 1
  },
  {
    q: "Gypsies de Pétion-Ville est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Fondé en 1970", "Fondé en 2010", "Années 1940-1990", "Tradition annuelle (novembre)"],
    correct: 0
  },
  {
    q: "Où situe-t-on l'origine de Tanbou ?",
    options: ["Gonaïves / diaspora", "National", "Diaspora et Port-au-Prince", "Diaspora (New York/Miami)"],
    correct: 1
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Emeline Michel ?",
    options: ["Tradition annuelle (juillet)", "Depuis les années 1980", "Années 1950-1960", "Années 1990-2000"],
    correct: 1
  },
  {
    q: "À quelle époque associe-t-on Original H (originaire de Brooklyn) ?",
    options: ["Fondé en 2005", "Fondé en 1989", "Début du XXe siècle", "Depuis les années 2000"],
    correct: 3
  },
  {
    q: "De quel type d'entité musicale s'agit-il pour Kesta B ?",
    options: ["Artiste solo", "Instrument", "Festival/Événement culturel", "Groupe"],
    correct: 0
  },
  {
    q: "Quelle région ou ville est le berceau de Gypsies de Pétion-Ville ?",
    options: ["Pétion-Ville", "Port-au-Prince (famille Duplessis)", "National (surtout zones rurales)", "Port-au-Prince et diaspora"],
    correct: 0
  },
  {
    q: "De quel type d'entité musicale s'agit-il pour Manman tanbou ?",
    options: ["Genre musical", "Groupe", "Artiste solo", "Instrument"],
    correct: 3
  },
  {
    q: "Bel Air Orchestra est le plus étroitement associé(e) à quel lieu ?",
    options: ["New York (diaspora)", "Pétion-Ville / New York", "Région frontalière (Sud-Est)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Beethova Obas ?",
    options: ["Depuis les années 1980", "Années 1940-1990", "Années 1960-1970", "Depuis les années 2010"],
    correct: 0
  },
  {
    q: "Mikaben appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Fondé en 1962", "Époque coloniale à aujourd'hui", "Depuis les années 2000", "Fondé en 1990"],
    correct: 2
  },
  {
    q: "Dans quelle catégorie classerait-on Ibo Combo ?",
    options: ["Groupe", "Genre musical", "Festival/Événement culturel", "Instrument"],
    correct: 0
  },
  {
    q: "Comment qualifierait-on Konpa sur le plan musical ?",
    options: ["Genre musical", "Festival/Événement culturel", "Artiste solo", "Groupe"],
    correct: 0
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Kompa Dirèk ?",
    options: ["Années 1980", "Années 1950", "Depuis les années 1970", "Fondé en 1982"],
    correct: 1
  },
  {
    q: "Qu'est-ce que Kanpèch exactement ?",
    options: ["Artiste solo", "Genre musical", "Groupe", "Instrument"],
    correct: 2
  },
  {
    q: "Quelle période correspond le mieux à Konpa Love ?",
    options: ["Depuis les années 1970", "Années 1950-1960", "Tradition annuelle (juillet)", "Années 1990-2000"],
    correct: 3
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Kadans (Kadans Ranpa) ?",
    options: ["Tradition annuelle", "Années 1950-1960", "Fondé en 2016", "Fondé en 1980"],
    correct: 1
  },
  {
    q: "Si l'on devait classer Original H (originaire de Brooklyn), ce serait comme :",
    options: ["Instrument", "Groupe", "Genre musical", "Artiste solo"],
    correct: 3
  },
  {
    q: "Manman tanbou est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Années 1980", "Époque coloniale à aujourd'hui", "Fondé en 1993", "Fondé en 1980"],
    correct: 1
  },
  {
    q: "Quelle est la nature de Bel Air Orchestra dans le paysage musical haïtien ?",
    options: ["Instrument", "Artiste solo", "Genre musical", "Groupe"],
    correct: 3
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Conque (lambi) ?",
    options: ["Époque coloniale à aujourd'hui", "Fondé en 2020", "Depuis les années 1970", "Tradition annuelle"],
    correct: 0
  },
  {
    q: "D'où est originaire Kanaval de Jacmel ?",
    options: ["National (surtout rara)", "Région frontalière (Sud-Est)", "Port-au-Prince (Hôtel Oloffson)", "Jacmel"],
    correct: 3
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Magnum Band ?",
    options: ["Jacmel", "Port-au-Prince (famille Duplessis)", "National (tradition rara)", "Port-au-Prince / New York"],
    correct: 3
  },
  {
    q: "Comment qualifierait-on Farah Juste sur le plan musical ?",
    options: ["Groupe", "Artiste solo", "Festival/Événement culturel", "Instrument"],
    correct: 1
  },
  {
    q: "Quelle région ou ville est le berceau de Vaksin ?",
    options: ["National", "Cap-Haïtien", "National (tradition rara)", "Port-au-Prince (famille Duplessis)"],
    correct: 2
  },
  {
    q: "Mizik vodou correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Groupe", "Genre musical", "Festival/Événement culturel", "Instrument"],
    correct: 1
  },
  {
    q: "Comment qualifierait-on Zouk haïtien sur le plan musical ?",
    options: ["Genre musical", "Instrument", "Artiste solo", "Groupe"],
    correct: 0
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Djakout Mizik (Fabrice Rouzier) ?",
    options: ["National (mouvement culturel)", "New Jersey (diaspora)", "Pétion-Ville", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Quelle est la période de référence pour Farah Juste ?",
    options: ["Depuis les années 1980", "Années 1980", "Fondé en 1989", "Fondé en 2010"],
    correct: 0
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Kai ?",
    options: ["Cap-Haïtien", "Diaspora et Port-au-Prince", "Port-au-Prince", "Pétion-Ville / New York"],
    correct: 2
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Carnaval des Fleurs (Cap-Haïtien) ?",
    options: ["Carnaval d'été célèbre dans le Nord d'Haïti", "Auteur-compositeur de folk et chanson engagée", "Autre nom sous lequel Djakout Mizik est parfois connu à ses débuts", "Fratrie fondatrice d'un grand orchestre de konpa"],
    correct: 0
  },
  {
    q: "Dans quelle décennie Caribbean Sextet a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Fondé en 1996", "Fondé en 1975", "Fondé en 1990", "Fondé en 1966"],
    correct: 3
  },
  {
    q: "Où situe-t-on l'origine de Zouk haïtien ?",
    options: ["Régions rurales", "Miami (diaspora)", "Diaspora (New York/Miami)", "Port-au-Prince (Hôtel Oloffson)"],
    correct: 2
  },
  {
    q: "Quelle description correspond le mieux à Les Frères Dejean ?",
    options: ["Fratrie fondatrice d'un grand orchestre de konpa", "Rappeur pionnier du rap kreyòl", "Chants et percussions liés aux cérémonies religieuses vodou", "Rappeur et musicien, ex-membre des Fugees d'origine haïtienne"],
    correct: 0
  },
  {
    q: "Qu'est-ce qui distingue Kreyòl La sur le plan musical ou culturel ?",
    options: ["Maracas traditionnelles utilisées dans plusieurs genres", "Groupe de konpa issu de la scission de Djakout Mizik", "Groupe emblématique du konpa de la diaspora", "Groupe de mizik rasin dirigé par Richard Morse"],
    correct: 1
  },
  {
    q: "Comment définit-on Emeline Michel dans la musique haïtienne ?",
    options: ["Groupe", "Artiste solo", "Instrument", "Festival/Événement culturel"],
    correct: 1
  },
  {
    q: "Si l'on devait classer Accordéon (twoubadou), ce serait comme :",
    options: ["Instrument", "Festival/Événement culturel", "Genre musical", "Groupe"],
    correct: 0
  },
  {
    q: "Comment reconnaît-on Manman tanbou parmi les autres éléments de la musique haïtienne ?",
    options: ["Groupe de mizik rasin dirigé par Richard Morse", "Le plus grand des tambours dans un ensemble rituel", "Groupe de konpa réputé pour ses ballades", "Figure populaire du konpa avant de devenir président d'Haïti"],
    correct: 1
  },
  {
    q: "Mizik vodou se distingue principalement par :",
    options: ["Groupe de konpa issu de la scission de Djakout Mizik", "Chants et percussions liés aux cérémonies religieuses vodou", "Fratrie fondatrice d'un grand orchestre de konpa", "Petits orchestres de guitares électriques inspirés du rock"],
    correct: 1
  },
  {
    q: "Djakout #1 provient principalement de quelle zone ?",
    options: ["Cap-Haïtien", "Port-au-Prince", "Port-au-Prince / diaspora", "National (surtout rara)"],
    correct: 1
  },
  {
    q: "Qu'est-ce qui distingue Tabou Combo sur le plan musical ou culturel ?",
    options: ["Style fondateur du konpa moderne à tempo régulier", "Pionnier mondial du konpa avec des tubes internationaux", "Groupe de konpa contemporain très populaire chez les jeunes", "Maracas traditionnelles utilisées dans plusieurs genres"],
    correct: 1
  },
  {
    q: "Quel élément résume le mieux Kompa Dirèk ?",
    options: ["Auteur-compositeur de folk et chanson engagée", "Style fondateur du konpa moderne à tempo régulier", "Orchestre de mini-jazz influent des années 1960-1970", "Coquillage utilisé comme instrument à vent rituel et festif"],
    correct: 1
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Nu Look ?",
    options: ["Groupe de konpa new-generation à succès", "Groupe emblématique du konpa de la diaspora", "Groupe majeur de mizik rasin engagée", "Chanteur mêlant konpa, RnB et musique urbaine"],
    correct: 0
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Tanbou ?",
    options: ["Époque coloniale à aujourd'hui", "Fondé en 1975", "Années 1960-1970", "Tradition annuelle (juillet)"],
    correct: 0
  },
  {
    q: "Quelle région ou ville est le berceau de Kanpèch ?",
    options: ["Port-au-Prince / diaspora", "Pétion-Ville / New York", "Port-au-Prince et diaspora", "Cap-Haïtien"],
    correct: 3
  },
  {
    q: "Où Coupé Cloué et l'Ensemble Select a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["Diaspora (New York)", "National (surtout rara)", "Région frontalière (Sud-Est)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Comment définit-on Gaga dans la musique haïtienne ?",
    options: ["Festival/Événement culturel", "Groupe", "Genre musical", "Artiste solo"],
    correct: 2
  },
  {
    q: "À quelle époque associe-t-on Konpa Love ?",
    options: ["Années 1980-1990", "Fondé en 1974", "Fondé en 1966", "Années 1990-2000"],
    correct: 3
  },
  {
    q: "Vaksin appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Époque coloniale à aujourd'hui", "Années 1960-1970", "Fondé en 1970", "XIXe siècle"],
    correct: 0
  },
  {
    q: "Quelle région ou ville est le berceau de Michael Brun ?",
    options: ["Port-au-Prince / international", "Pétion-Ville", "Port-au-Prince et diaspora", "Cap-Haïtien"],
    correct: 0
  },
  {
    q: "Qu'est-ce qui distingue Boukman Eksperyans sur le plan musical ou culturel ?",
    options: ["Groupe de konpa reconnu pour ses harmonies vocales", "Groupe pionnier de la mizik rasin", "Chanteur de konpa contemporain", "Auteur-compositeur de folk et chanson engagée"],
    correct: 1
  },
  {
    q: "Quelle période correspond le mieux à T-Vice ?",
    options: ["Fondé en 2007", "Années 1990-2000", "Fondé en 1990", "Fondé en 1965"],
    correct: 2
  },
  {
    q: "Comment reconnaît-on Coupé Cloué et l'Ensemble Select parmi les autres éléments de la musique haïtienne ?",
    options: ["Ancêtre du banjo d'origine afro-haïtienne", "Pianiste et producteur de konpa influent", "DJ et producteur électro fusionnant konpa et musique électronique", "Orchestre fondateur du style konpa dit méringue-konpa"],
    correct: 3
  },
  {
    q: "D'où est originaire Skah Shah ?",
    options: ["Jacmel", "National", "National (tradition rara)", "New York (diaspora)"],
    correct: 3
  },
  {
    q: "Qu'est-ce que Mizik rasin exactement ?",
    options: ["Groupe", "Genre musical", "Instrument", "Festival/Événement culturel"],
    correct: 1
  },
  {
    q: "Quel lieu géographique est lié à Gaga ?",
    options: ["National (surtout rara)", "Régions rurales", "Région frontalière (Sud-Est)", "Cap-Haïtien"],
    correct: 2
  },
  {
    q: "Quelle région ou ville est le berceau de Emeline Michel ?",
    options: ["Régions rurales", "Gonaïves / diaspora", "National (Port-au-Prince, Jacmel...)", "New Jersey (diaspora)"],
    correct: 1
  },
  {
    q: "Où situe-t-on l'origine de Vaksin ?",
    options: ["Cap-Haïtien", "National (tradition rara)", "National (surtout zones rurales)", "Région frontalière (Sud-Est)"],
    correct: 1
  },
  {
    q: "D'où est originaire Accordéon (twoubadou) ?",
    options: ["Port-au-Prince (Hôtel Oloffson)", "Région frontalière (Sud-Est)", "Régions rurales", "Diaspora (New York/Miami)"],
    correct: 2
  },
  {
    q: "Comment reconnaît-on Roody Roodboy parmi les autres éléments de la musique haïtienne ?",
    options: ["Artiste populaire mêlant konpa et musique urbaine", "Chanteuse et actrice, figure de la chanson racine", "Rappeur pionnier du rap kreyòl", "Fratrie fondatrice d'un grand orchestre de konpa"],
    correct: 0
  },
  {
    q: "Volo Volo désigne principalement :",
    options: ["Genre musical", "Instrument", "Groupe", "Festival/Événement culturel"],
    correct: 2
  },
  {
    q: "Quelle description correspond le mieux à Manno Charlemagne ?",
    options: ["Instrument central des ensembles de twoubadou", "Chanteur engagé, figure de la mizik angaje", "Orchestre fondateur du style konpa dit méringue-konpa", "Groupe de konpa fondé par d'anciens membres de Kreyòl La"],
    correct: 1
  },
  {
    q: "Wyclef Jean provient principalement de quelle zone ?",
    options: ["New Jersey (diaspora)", "Port-au-Prince / Cuba", "Diaspora (New York)", "Jacmel"],
    correct: 0
  },
  {
    q: "Quel trait particulier caractérise Nu Look ?",
    options: ["Groupe de konpa new-generation à succès", "Autre nom sous lequel Djakout Mizik est parfois connu à ses débuts", "Tambour central des musiques vodou et rara", "Fratrie fondatrice d'un grand orchestre de konpa"],
    correct: 0
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Kadans (Kadans Ranpa) ?",
    options: ["Groupe majeur du konpa des années 1980", "Style fondateur du konpa moderne à tempo régulier", "Ancêtre du konpa mêlant jazz et rythmes afro-caribéens", "Maracas traditionnelles utilisées dans plusieurs genres"],
    correct: 2
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux Zing Experience ?",
    options: ["Artiste solo", "Genre musical", "Groupe", "Festival/Événement culturel"],
    correct: 2
  },
  {
    q: "Quelle description correspond le mieux à Mizik vodou ?",
    options: ["Chanteur mêlant konpa, RnB et musique urbaine", "Chants et percussions liés aux cérémonies religieuses vodou", "Tambour central des musiques vodou et rara", "Pianiste et producteur de konpa influent"],
    correct: 1
  },
  {
    q: "D'où est originaire Kompa Dirèk ?",
    options: ["Gonaïves / diaspora", "Diaspora et Port-au-Prince", "Port-au-Prince", "Pétion-Ville"],
    correct: 2
  },
  {
    q: "Où situe-t-on l'origine de Coupé Cloué et l'Ensemble Select ?",
    options: ["National (Port-au-Prince, Jacmel...)", "National (surtout rara)", "Régions rurales", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Comment qualifierait-on Original H (originaire de Brooklyn) sur le plan musical ?",
    options: ["Instrument", "Groupe", "Artiste solo", "Festival/Événement culturel"],
    correct: 2
  },
  {
    q: "Tcha tcha correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Artiste solo", "Groupe", "Genre musical", "Instrument"],
    correct: 3
  },
  {
    q: "Roody Roodboy correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Instrument", "Groupe", "Festival/Événement culturel", "Artiste solo"],
    correct: 3
  },
  {
    q: "De quel type d'entité musicale s'agit-il pour RAM ?",
    options: ["Artiste solo", "Groupe", "Instrument", "Genre musical"],
    correct: 1
  },
  {
    q: "Si l'on devait classer Fabrice Rouzier, ce serait comme :",
    options: ["Genre musical", "Festival/Événement culturel", "Artiste solo", "Groupe"],
    correct: 2
  },
  {
    q: "Boukman Eksperyans est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Fondé en 1968", "Depuis les années 1980", "Fondé en 1978", "Depuis les années 2010"],
    correct: 2
  },
  {
    q: "Comment définit-on Accordéon (twoubadou) dans la musique haïtienne ?",
    options: ["Genre musical", "Instrument", "Groupe", "Festival/Événement culturel"],
    correct: 1
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Système Band ?",
    options: ["Pétion-Ville", "Port-au-Prince", "Port-au-Prince (famille Duplessis)", "Gonaïves / diaspora"],
    correct: 1
  },
  {
    q: "Où situe-t-on l'origine de Kai ?",
    options: ["Port-au-Prince / diaspora", "Port-au-Prince (Hôtel Oloffson)", "New Jersey (diaspora)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Quelle région ou ville est le berceau de Conque (lambi) ?",
    options: ["Pétion-Ville / New York", "Port-au-Prince / Cuba", "National (surtout rara)", "Miami (diaspora)"],
    correct: 2
  },
  {
    q: "Qu'est-ce que Roody Roodboy exactement ?",
    options: ["Artiste solo", "Groupe", "Instrument", "Festival/Événement culturel"],
    correct: 0
  },
  {
    q: "Kesta B correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Genre musical", "Festival/Événement culturel", "Instrument", "Artiste solo"],
    correct: 3
  },
  {
    q: "Où situe-t-on l'origine de Fabrice Rouzier ?",
    options: ["Pétion-Ville", "Port-au-Prince", "New Jersey (diaspora)", "Gonaïves / diaspora"],
    correct: 1
  },
  {
    q: "Quelle caractéristique définit le mieux Magnum Band ?",
    options: ["Groupe de konpa réputé pour ses ballades", "Chanteur fusionnant rock, reggae et konpa", "Groupe majeur du konpa des années 1980", "Rappeur pionnier du rap kreyòl"],
    correct: 2
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Magnum Band ?",
    options: ["Époque coloniale", "Depuis les années 2000", "Fondé en 2016", "Fondé en 1980"],
    correct: 3
  },
  {
    q: "À quelle époque associe-t-on Ti Manno ?",
    options: ["Fondé en 1975", "Fondé en 1982", "Années 1960-1970", "Années 1970-1980"],
    correct: 3
  },
  {
    q: "Ti Manno correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Festival/Événement culturel", "Artiste solo", "Groupe", "Genre musical"],
    correct: 1
  },
  {
    q: "Kadans (Kadans Ranpa) est le plus étroitement associé(e) à quel lieu ?",
    options: ["Port-au-Prince", "Diaspora (New York/Miami)", "National (surtout zones rurales)", "New Jersey (diaspora)"],
    correct: 0
  },
  {
    q: "Comment qualifierait-on Zenglen sur le plan musical ?",
    options: ["Festival/Événement culturel", "Genre musical", "Groupe", "Artiste solo"],
    correct: 2
  },
  {
    q: "Qu'est-ce qui distingue Conque (lambi) sur le plan musical ou culturel ?",
    options: ["Chanteur emblématique de konpa social et engagé", "Instrument à percussion métallique gratté avec une baguette", "Rappeur pionnier du rap kreyòl", "Coquillage utilisé comme instrument à vent rituel et festif"],
    correct: 3
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Boule zombi ?",
    options: ["Fondé en 1989", "Fondé en 2007", "Fondé en 1978", "Années 1970-1980"],
    correct: 3
  },
  {
    q: "Quelle région ou ville est le berceau de Mizik angaje ?",
    options: ["National", "Diaspora et Port-au-Prince", "Port-au-Prince et diaspora", "Port-au-Prince / diaspora"],
    correct: 0
  },
  {
    q: "Qu'est-ce que Magnum Band exactement ?",
    options: ["Genre musical", "Artiste solo", "Groupe", "Instrument"],
    correct: 2
  },
  {
    q: "Si l'on devait classer Kanaval de Jacmel, ce serait comme :",
    options: ["Genre musical", "Instrument", "Festival/Événement culturel", "Artiste solo"],
    correct: 2
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Les Frères Dejean ?",
    options: ["Fondé en 1978", "Depuis les années 1990", "Fondé en 1970", "Années 1960-1970"],
    correct: 2
  },
  {
    q: "Qu'est-ce que Banza exactement ?",
    options: ["Groupe", "Instrument", "Genre musical", "Artiste solo"],
    correct: 1
  },
  {
    q: "Quelle région ou ville est le berceau de Zouk haïtien ?",
    options: ["National (surtout zones rurales)", "New Jersey (diaspora)", "Diaspora (New York/Miami)", "Port-au-Prince"],
    correct: 2
  },
  {
    q: "Kanpèch se distingue principalement par :",
    options: ["Orchestre régional connu dans le Nord d'Haïti", "Pionnier du mini-jazz haïtien", "Orchestre fondateur du style konpa dit méringue-konpa", "Chanteur, ancien leader de Zenglen puis Djakout Mizik"],
    correct: 0
  },
  {
    q: "De quel type d'entité musicale s'agit-il pour Toto Bissainthe ?",
    options: ["Groupe", "Genre musical", "Festival/Événement culturel", "Artiste solo"],
    correct: 3
  },
  {
    q: "RAM correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Festival/Événement culturel", "Genre musical", "Artiste solo", "Groupe"],
    correct: 3
  },
  {
    q: "Quelle région ou ville est le berceau de Belo ?",
    options: ["Diaspora (New York/Miami)", "National (surtout zones rurales)", "Port-au-Prince", "Miami (diaspora)"],
    correct: 2
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux Gaga ?",
    options: ["Festival/Événement culturel", "Artiste solo", "Genre musical", "Groupe"],
    correct: 2
  },
  {
    q: "Mizik vodou provient principalement de quelle zone ?",
    options: ["National (tradition rara)", "Port-au-Prince / Cuba", "Port-au-Prince et diaspora", "National"],
    correct: 3
  },
  {
    q: "Qu'est-ce qui distingue Volo Volo sur le plan musical ou culturel ?",
    options: ["Groupe de mizik rasin dirigé par Richard Morse", "DJ et producteur électro fusionnant konpa et musique électronique", "Groupe de konpa réputé pour ses ballades", "Orchestre populaire du quartier de Bel-Air"],
    correct: 2
  },
  {
    q: "Quelle description correspond le mieux à Sweet Micky (Michel Martelly) ?",
    options: ["Groupe de konpa issu de la scission de Djakout Mizik", "Figure populaire du konpa avant de devenir président d'Haïti", "Pionnier mondial du konpa avec des tubes internationaux", "Groupe pionnier de la mizik rasin"],
    correct: 1
  },
  {
    q: "Quel trait particulier caractérise Alan Cavé ?",
    options: ["Groupe de konpa fondé par une famille de musiciens", "Musique festive liée aux célébrations agraires", "Chanteur, ancien leader de Zenglen puis Djakout Mizik", "Groupe majeur du konpa des années 1980"],
    correct: 2
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux Konpa ?",
    options: ["Festival/Événement culturel", "Instrument", "Artiste solo", "Genre musical"],
    correct: 3
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Kanaval (Carnaval haïtien) ?",
    options: ["Époque coloniale", "Époque coloniale à aujourd'hui", "Tradition annuelle", "Fondé en 1968"],
    correct: 2
  },
  {
    q: "Gaga se distingue principalement par :",
    options: ["Musique festive liée aux célébrations agraires", "Grand orchestre de konpa toujours actif", "Fusion du konpa avec le zouk antillais", "Groupe de konpa nouvelle génération"],
    correct: 0
  },
  {
    q: "Boule zombi correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Festival/Événement culturel", "Groupe", "Instrument", "Genre musical"],
    correct: 3
  },
  {
    q: "Quelle est la nature de Djakout Mizik (Fabrice Rouzier) dans le paysage musical haïtien ?",
    options: ["Genre musical", "Festival/Événement culturel", "Instrument", "Artiste solo"],
    correct: 3
  },
  {
    q: "Djakout Mizik (Fabrice Rouzier) se distingue principalement par :",
    options: ["Pianiste et arrangeur, cofondateur de Djakout Mizik", "Artiste populaire mêlant konpa et musique urbaine", "Groupe de konpa réputé pour ses ballades", "Coquillage utilisé comme instrument à vent rituel et festif"],
    correct: 0
  },
  {
    q: "Qu'est-ce que Konpa Love exactement ?",
    options: ["Genre musical", "Groupe", "Festival/Événement culturel", "Artiste solo"],
    correct: 0
  },
  {
    q: "Quelle description correspond le mieux à Toto Bissainthe ?",
    options: ["Chanteur, ancien leader de Zenglen puis Djakout Mizik", "Chanteuse et actrice, figure de la chanson racine", "Chanteur mêlant konpa, RnB et musique urbaine", "Orchestre populaire du quartier de Bel-Air"],
    correct: 1
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on RAM ?",
    options: ["Années 1980-1990", "Tradition annuelle (juillet)", "Fondé en 1963", "Fondé en 1990"],
    correct: 3
  },
  {
    q: "Comment reconnaît-on Original Instrumental Sextet (OIS) parmi les autres éléments de la musique haïtienne ?",
    options: ["Pionnier du mini-jazz haïtien", "Chansons engagées portant un message social ou politique", "Groupe précurseur du mini-jazz haïtien", "Instrument central des ensembles de twoubadou"],
    correct: 2
  },
  {
    q: "Quelle est la période de référence pour BIC ?",
    options: ["Début du XXe siècle", "Fondé en 1990", "Depuis les années 2010", "Fondé en 1968"],
    correct: 2
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Wyclef Jean ?",
    options: ["Rappeur et musicien, ex-membre des Fugees d'origine haïtienne", "Groupe de konpa reconnu pour ses tubes dansants", "Groupe de konpa contemporain très populaire chez les jeunes", "Groupe pionnier de la mizik rasin"],
    correct: 0
  },
  {
    q: "Quelle est la période de référence pour J Perry ?",
    options: ["Fondé en 1989", "Depuis les années 2010", "Fondé en 1965", "Fondé en 2018"],
    correct: 1
  },
  {
    q: "Quel lieu géographique est lié à Bel Air Orchestra ?",
    options: ["Port-au-Prince", "Port-au-Prince / Cuba", "New York (diaspora)", "Jacmel"],
    correct: 0
  },
  {
    q: "Quelle région ou ville est le berceau de Gaga ?",
    options: ["Région frontalière (Sud-Est)", "Port-au-Prince (famille Duplessis)", "Port-au-Prince (Hôtel Oloffson)", "Diaspora (New York)"],
    correct: 0
  },
  {
    q: "Comment reconnaît-on Krezi Mizik parmi les autres éléments de la musique haïtienne ?",
    options: ["Style fondateur du konpa moderne à tempo régulier", "Figure populaire du konpa avant de devenir président d'Haïti", "Groupe de konpa fondé par d'anciens membres de Kreyòl La", "Instrument central des ensembles de twoubadou"],
    correct: 2
  },
  {
    q: "Klass correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Groupe", "Instrument", "Genre musical", "Festival/Événement culturel"],
    correct: 0
  },
  {
    q: "Tcha tcha appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Fondé en 2020", "Fondé en 2016", "Années 1950-1960", "Époque coloniale à aujourd'hui"],
    correct: 3
  },
  {
    q: "Comment reconnaît-on Nu Look parmi les autres éléments de la musique haïtienne ?",
    options: ["Rappeur et musicien, ex-membre des Fugees d'origine haïtienne", "Musique acoustique de guitare inspirée du son cubain", "Groupe emblématique du konpa de la diaspora", "Groupe de konpa new-generation à succès"],
    correct: 3
  },
  {
    q: "Comment définit-on Kesta B dans la musique haïtienne ?",
    options: ["Artiste solo", "Genre musical", "Festival/Événement culturel", "Instrument"],
    correct: 0
  },
  {
    q: "Quelle période correspond le mieux à Gypsies de Pétion-Ville ?",
    options: ["Depuis les années 1990", "Fondé en 1968", "Fondé en 1970", "Fondé en 2020"],
    correct: 2
  },
  {
    q: "Qu'est-ce qui distingue Magnum Band sur le plan musical ou culturel ?",
    options: ["Groupe majeur du konpa des années 1980", "Grande fête populaire précédant le Carême, rythmée par les orchestres de konpa", "Grand orchestre de konpa toujours actif", "Groupe de konpa populaire des années 1990-2000"],
    correct: 0
  },
  {
    q: "Quelle description correspond le mieux à Fabrice Rouzier ?",
    options: ["Grand orchestre de konpa toujours actif", "Fusion de rythmes vodou traditionnels et de rock/pop", "Fusion du konpa avec le zouk antillais", "Pianiste et producteur de konpa influent"],
    correct: 3
  },
  {
    q: "Quel trait particulier caractérise Original H (originaire de Brooklyn) ?",
    options: ["Groupe de konpa new-generation à succès", "Rappeur haïtiano-américain connu pour ses collaborations konpa-hip-hop", "Grande fête populaire précédant le Carême, rythmée par les orchestres de konpa", "Chants et percussions liés aux cérémonies religieuses vodou"],
    correct: 1
  },
  {
    q: "Comment définit-on Les Shleu Shleu dans la musique haïtienne ?",
    options: ["Genre musical", "Festival/Événement culturel", "Instrument", "Groupe"],
    correct: 3
  },
  {
    q: "Dans quelle décennie RAM a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Époque coloniale à aujourd'hui", "Fondé en 1990", "Fondé en 1982", "Fondé en 2018"],
    correct: 1
  },
  {
    q: "Quel trait particulier caractérise Graj (güira) ?",
    options: ["Instrument à percussion métallique gratté avec une baguette", "Chanteuse surnommée « la Grande Dame de la chanson haïtienne »", "Musique acoustique de guitare inspirée du son cubain", "Carnaval réputé pour ses masques et costumes artisanaux"],
    correct: 0
  },
  {
    q: "Kesta B désigne principalement :",
    options: ["Genre musical", "Groupe", "Artiste solo", "Festival/Événement culturel"],
    correct: 2
  },
  {
    q: "Si l'on devait classer Twoubadou, ce serait comme :",
    options: ["Instrument", "Genre musical", "Groupe", "Festival/Événement culturel"],
    correct: 1
  },
  {
    q: "Dans quelle catégorie classerait-on Système Band ?",
    options: ["Artiste solo", "Groupe", "Festival/Événement culturel", "Instrument"],
    correct: 1
  },
  {
    q: "Quelle période correspond le mieux à Twoubadou ?",
    options: ["Fondé en 1990", "Fondé en 2020", "Fondé en 1993", "Début du XXe siècle"],
    correct: 3
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Les Frères Dejean ?",
    options: ["Années 1960-1970", "Fondé en 1966", "Fondé en 1970", "Fondé en 1965"],
    correct: 2
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Caribbean Sextet ?",
    options: ["Fondé en 1975", "Fondé en 2005", "Années 1960-1970", "Fondé en 1966"],
    correct: 3
  },
  {
    q: "Gaga correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Instrument", "Genre musical", "Groupe", "Festival/Événement culturel"],
    correct: 1
  },
  {
    q: "Quelle description correspond le mieux à Tabou Combo ?",
    options: ["Maracas traditionnelles utilisées dans plusieurs genres", "Chants et percussions liés aux cérémonies religieuses vodou", "Rappeur pionnier du rap kreyòl", "Pionnier mondial du konpa avec des tubes internationaux"],
    correct: 3
  },
  {
    q: "Quel trait particulier caractérise Carnaval des Fleurs (Cap-Haïtien) ?",
    options: ["Chanteuse engagée connue pour ses textes politiques", "Tambour central des musiques vodou et rara", "Chanteuse et actrice, figure de la chanson racine", "Carnaval d'été célèbre dans le Nord d'Haïti"],
    correct: 3
  },
  {
    q: "Quel trait particulier caractérise Zenglen ?",
    options: ["Groupe de konpa populaire des années 1990-2000", "Chanteur, ancien leader de Zenglen puis Djakout Mizik", "Musique acoustique de guitare inspirée du son cubain", "Tambour central des musiques vodou et rara"],
    correct: 0
  },
  {
    q: "Qu'est-ce qui distingue Accordéon (twoubadou) sur le plan musical ou culturel ?",
    options: ["Pionnier du mini-jazz haïtien", "Grand orchestre de konpa toujours actif", "Auteur-compositeur de folk et chanson engagée", "Instrument central des ensembles de twoubadou"],
    correct: 3
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Zing Experience ?",
    options: ["Groupe de konpa populaire des années 1990-2000", "Orchestre régional connu dans le Nord d'Haïti", "Groupe de konpa reconnu pour ses harmonies vocales", "Groupe de konpa fondé par d'anciens membres de Kreyòl La"],
    correct: 2
  },
  {
    q: "Emeline Michel correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Groupe", "Artiste solo", "Genre musical", "Festival/Événement culturel"],
    correct: 1
  },
  {
    q: "Quelle région ou ville est le berceau de Mizik vodou ?",
    options: ["National (mouvement culturel)", "National", "Port-au-Prince (famille Duplessis)", "Régions rurales du Nord et du Sud"],
    correct: 1
  },
  {
    q: "Quelle est la nature de Alan Cavé dans le paysage musical haïtien ?",
    options: ["Festival/Événement culturel", "Genre musical", "Artiste solo", "Groupe"],
    correct: 2
  },
  {
    q: "Quel lieu géographique est lié à Festival Racines ?",
    options: ["National", "Jacmel", "Régions rurales du Nord et du Sud", "National (mouvement culturel)"],
    correct: 0
  },
  {
    q: "Comment qualifierait-on Djakout #1 sur le plan musical ?",
    options: ["Groupe", "Genre musical", "Artiste solo", "Festival/Événement culturel"],
    correct: 0
  },
  {
    q: "J Perry provient principalement de quelle zone ?",
    options: ["Port-au-Prince", "Port-au-Prince et diaspora", "National (mouvement culturel)", "Régions rurales du Nord et du Sud"],
    correct: 0
  },
  {
    q: "Carimi désigne principalement :",
    options: ["Artiste solo", "Genre musical", "Instrument", "Groupe"],
    correct: 3
  },
  {
    q: "Dans quelle catégorie classerait-on Zenglen ?",
    options: ["Artiste solo", "Instrument", "Groupe", "Festival/Événement culturel"],
    correct: 2
  },
  {
    q: "Quelle région ou ville est le berceau de RAM ?",
    options: ["Port-au-Prince (Hôtel Oloffson)", "New York (diaspora)", "Port-au-Prince / Cuba", "Miami (diaspora)"],
    correct: 0
  },
  {
    q: "Mizik angaje appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Fondé en 1974", "Fondé en 1966", "Tradition annuelle (novembre)", "Années 1970-1980"],
    correct: 3
  },
  {
    q: "Qu'est-ce qui distingue Tcha tcha sur le plan musical ou culturel ?",
    options: ["Pionnier mondial du konpa avec des tubes internationaux", "Groupe emblématique du konpa de la diaspora", "Maracas traditionnelles utilisées dans plusieurs genres", "Pionnière du folklore chanté haïtien"],
    correct: 2
  },
  {
    q: "Qu'est-ce que Rap kreyòl exactement ?",
    options: ["Artiste solo", "Instrument", "Groupe", "Genre musical"],
    correct: 3
  },
  {
    q: "Quelle caractéristique définit le mieux Les Shleu Shleu ?",
    options: ["Pionnier du mini-jazz haïtien", "Grand orchestre de konpa des années 1970-1980", "Groupe majeur du konpa des années 1980", "Groupe pionnier de la mizik rasin"],
    correct: 0
  },
  {
    q: "Comment reconnaît-on Caribbean Sextet parmi les autres éléments de la musique haïtienne ?",
    options: ["Groupe de konpa populaire des années 1990-2000", "Carnaval réputé pour ses masques et costumes artisanaux", "Le plus grand des tambours dans un ensemble rituel", "Orchestre de mini-jazz influent des années 1960-1970"],
    correct: 3
  },
  {
    q: "Quelle est la période de référence pour Magnum Band ?",
    options: ["Années 1980", "Fondé en 1962", "Fondé en 1980", "Fondé en 1965"],
    correct: 2
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux Banza ?",
    options: ["Artiste solo", "Instrument", "Genre musical", "Festival/Événement culturel"],
    correct: 1
  },
  {
    q: "Dans quelle catégorie classerait-on Belo ?",
    options: ["Artiste solo", "Instrument", "Festival/Événement culturel", "Groupe"],
    correct: 0
  },
  {
    q: "Qu'est-ce que Krezi Mizik exactement ?",
    options: ["Artiste solo", "Festival/Événement culturel", "Genre musical", "Groupe"],
    correct: 3
  },
  {
    q: "Quelle caractéristique définit le mieux Les Frères Dejean ?",
    options: ["Chanteur emblématique de konpa social et engagé", "DJ et producteur électro fusionnant konpa et musique électronique", "Fratrie fondatrice d'un grand orchestre de konpa", "Auteur-compositeur de folk et chanson engagée"],
    correct: 2
  },
  {
    q: "Qu'est-ce qui distingue Vaksin sur le plan musical ou culturel ?",
    options: ["Trompette en bambou utilisée dans les groupes de rara", "Groupe de konpa fondé par une famille de musiciens", "Autre nom sous lequel Djakout Mizik est parfois connu à ses débuts", "Festival mettant à l'honneur la mizik rasin"],
    correct: 0
  },
  {
    q: "Où Krezi Mizik a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["Port-au-Prince", "Pétion-Ville", "National (Port-au-Prince, Jacmel...)", "Port-au-Prince (Hôtel Oloffson)"],
    correct: 0
  },
  {
    q: "Quelle région ou ville est le berceau de Konpa Love ?",
    options: ["New Jersey (diaspora)", "Diaspora et Port-au-Prince", "Port-au-Prince (famille Duplessis)", "National"],
    correct: 1
  },
  {
    q: "Qu'est-ce qui distingue Tanbou sur le plan musical ou culturel ?",
    options: ["Pianiste et producteur de konpa influent", "Tambour central des musiques vodou et rara", "Musique de rue processionnelle jouée en période de Carême", "Chanteuse engagée connue pour ses textes politiques"],
    correct: 1
  },
  {
    q: "Fabrice Rouzier appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Fondé en 2007", "Époque coloniale", "Depuis les années 1990", "Fondé en 1996"],
    correct: 2
  },
  {
    q: "À quelle époque associe-t-on Carimi ?",
    options: ["Années 1980-1990", "Fondé en 2007", "Fondé en 1996", "Depuis les années 2010"],
    correct: 2
  },
  {
    q: "Tanbou appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Fondé en 2016", "Fondé en 1982", "XIXe siècle", "Époque coloniale à aujourd'hui"],
    correct: 3
  },
  {
    q: "Djakout #1 appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Depuis les années 2000", "Fondé en 2010", "Fondé en 1996", "Années 1950-1960"],
    correct: 1
  },
  {
    q: "Quelle région ou ville est le berceau de Festival Racines ?",
    options: ["National", "Pétion-Ville / New York", "National (surtout rara)", "Gonaïves / diaspora"],
    correct: 0
  },
  {
    q: "Comment définit-on Coupé Cloué et l'Ensemble Select dans la musique haïtienne ?",
    options: ["Groupe", "Instrument", "Festival/Événement culturel", "Genre musical"],
    correct: 0
  },
  {
    q: "Ti Manno appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Fondé en 2007", "Années 1970-1980", "Fondé en 2016", "Années 1960-1970"],
    correct: 1
  },
  {
    q: "Michael Brun est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Tradition annuelle (juillet)", "Fondé en 1963", "Années 1990-2000", "Depuis les années 2010"],
    correct: 3
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Djakout Mizik (Fabrice Rouzier) ?",
    options: ["Fondé en 1970", "Depuis les années 1990", "Fondé en 1968", "Depuis les années 2000"],
    correct: 1
  },
  {
    q: "Quel élément résume le mieux Caribbean Sextet ?",
    options: ["Hip-hop chanté en créole haïtien", "Orchestre de mini-jazz influent des années 1960-1970", "Instrument à percussion métallique gratté avec une baguette", "Musique de rue processionnelle jouée en période de Carême"],
    correct: 1
  },
  {
    q: "Quelle période correspond le mieux à RAM ?",
    options: ["Début du XXe siècle", "Fondé en 1990", "Fondé en 2005", "Fondé en 1998"],
    correct: 1
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Tcha tcha ?",
    options: ["National (mouvement culturel)", "Diaspora (New York/Miami)", "Port-au-Prince et diaspora", "National"],
    correct: 3
  },
  {
    q: "Quel trait particulier caractérise Emeline Michel ?",
    options: ["Rappeur pionnier du rap kreyòl", "Groupe pionnier de la mizik rasin", "Groupe de mizik rasin dirigé par Richard Morse", "Chanteuse surnommée « la Grande Dame de la chanson haïtienne »"],
    correct: 3
  },
  {
    q: "Quelle description correspond le mieux à Vaksin ?",
    options: ["Fusion du konpa avec le zouk antillais", "Trompette en bambou utilisée dans les groupes de rara", "Orchestre régional connu dans le Nord d'Haïti", "Maracas traditionnelles utilisées dans plusieurs genres"],
    correct: 1
  },
  {
    q: "Conque (lambi) se distingue principalement par :",
    options: ["Orchestre historique du mini-jazz", "Coquillage utilisé comme instrument à vent rituel et festif", "Ancêtre du konpa mêlant jazz et rythmes afro-caribéens", "Chanteuse et actrice, figure de la chanson racine"],
    correct: 1
  },
  {
    q: "Dans quelle catégorie classerait-on Fabrice Rouzier ?",
    options: ["Genre musical", "Festival/Événement culturel", "Instrument", "Artiste solo"],
    correct: 3
  },
  {
    q: "Où situe-t-on l'origine de Bel Air Orchestra ?",
    options: ["National (mouvement culturel)", "Port-au-Prince", "National (tradition rara)", "Miami (diaspora)"],
    correct: 1
  },
  {
    q: "Où situe-t-on l'origine de Kompa Dirèk ?",
    options: ["Port-au-Prince", "Cap-Haïtien", "National (surtout rara)", "Port-au-Prince / New York"],
    correct: 0
  },
  {
    q: "Comment définit-on J Perry dans la musique haïtienne ?",
    options: ["Festival/Événement culturel", "Genre musical", "Artiste solo", "Instrument"],
    correct: 2
  },
  {
    q: "Quelle est la période de référence pour Kai ?",
    options: ["Fondé en 1965", "Fondé en 2020", "Années 1990-2000", "Fondé en 1966"],
    correct: 1
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux Vayb ?",
    options: ["Groupe", "Genre musical", "Artiste solo", "Festival/Événement culturel"],
    correct: 0
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Mini-jazz ?",
    options: ["Années 1980", "Fondé en 1963", "Années 1960-1970", "Fondé en 1968"],
    correct: 2
  },
  {
    q: "Où Tanbou a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["Miami (diaspora)", "Port-au-Prince / New York", "National (surtout zones rurales)", "National"],
    correct: 3
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Manno Charlemagne ?",
    options: ["New York (diaspora)", "Port-au-Prince", "Port-au-Prince (famille Duplessis)", "Miami (diaspora)"],
    correct: 1
  },
  {
    q: "Quelle est la nature de Kanaval (Carnaval haïtien) dans le paysage musical haïtien ?",
    options: ["Instrument", "Groupe", "Festival/Événement culturel", "Genre musical"],
    correct: 2
  },
  {
    q: "Kai est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Époque coloniale à aujourd'hui", "Années 1940-1990", "Fondé en 2020", "Fondé en 1993"],
    correct: 2
  },
  {
    q: "Comment qualifierait-on Ti Manno sur le plan musical ?",
    options: ["Festival/Événement culturel", "Artiste solo", "Groupe", "Instrument"],
    correct: 1
  },
  {
    q: "Quelle est la nature de Djakout Mizik dans le paysage musical haïtien ?",
    options: ["Artiste solo", "Genre musical", "Groupe", "Instrument"],
    correct: 2
  },
  {
    q: "Quelle est la période de référence pour Twoubadou ?",
    options: ["Début du XXe siècle", "Depuis les années 1980", "Fondé en 1975", "Époque coloniale à aujourd'hui"],
    correct: 0
  },
  {
    q: "Dans quelle décennie Fèt Gede a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Fondé en 1989", "Tradition annuelle (novembre)", "Fondé en 1962", "Début du XXe siècle"],
    correct: 1
  },
  {
    q: "Kanaval de Jacmel est le plus étroitement associé(e) à quel lieu ?",
    options: ["Port-au-Prince (Hôtel Oloffson)", "Miami (diaspora)", "Jacmel", "National (surtout rara)"],
    correct: 2
  },
  {
    q: "Où situe-t-on l'origine de Boule zombi ?",
    options: ["Régions rurales", "Port-au-Prince (famille Duplessis)", "Port-au-Prince", "Gonaïves / diaspora"],
    correct: 2
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Kanaval (Carnaval haïtien) ?",
    options: ["Fondé en 2007", "Années 1970-1980", "Années 1940-1990", "Tradition annuelle"],
    correct: 3
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux Boule zombi ?",
    options: ["Instrument", "Artiste solo", "Festival/Événement culturel", "Genre musical"],
    correct: 3
  },
  {
    q: "Où situe-t-on l'origine de Gaga ?",
    options: ["Pétion-Ville", "Région frontalière (Sud-Est)", "Diaspora (New York/Miami)", "Port-au-Prince / international"],
    correct: 1
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Roody Roodboy ?",
    options: ["Port-au-Prince", "Port-au-Prince / Cuba", "National (tradition rara)", "Port-au-Prince / diaspora"],
    correct: 0
  },
  {
    q: "Mikaben est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Fondé en 1965", "Depuis les années 2000", "Depuis les années 2010", "Tradition annuelle (juillet)"],
    correct: 1
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Accordéon (twoubadou) ?",
    options: ["Instrument central des ensembles de twoubadou", "Pionnier du mini-jazz haïtien", "Le plus grand des tambours dans un ensemble rituel", "Groupe de konpa issu de la scission de Djakout Mizik"],
    correct: 0
  },
  {
    q: "Twoubadou correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Instrument", "Artiste solo", "Genre musical", "Groupe"],
    correct: 2
  },
  {
    q: "Quelle est la période de référence pour Wyclef Jean ?",
    options: ["Fondé en 1993", "Tradition annuelle (juillet)", "Depuis les années 1990", "Fondé en 1990"],
    correct: 2
  },
  {
    q: "Dans quelle décennie Accordéon (twoubadou) a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Depuis les années 1990", "Début du XXe siècle", "Fondé en 1970", "Époque coloniale"],
    correct: 1
  },
  {
    q: "Où Manman tanbou a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["National", "National (mouvement culturel)", "National (tradition rara)", "Diaspora (New York)"],
    correct: 0
  },
  {
    q: "Quel élément résume le mieux Carimi ?",
    options: ["Trio de konpa formé par Carlo, Richard et Mickaël", "Fratrie fondatrice d'un grand orchestre de konpa", "Instrument à percussion métallique gratté avec une baguette", "Groupe de mizik rasin dirigé par Richard Morse"],
    correct: 0
  },
  {
    q: "Qu'est-ce que BIC exactement ?",
    options: ["Groupe", "Genre musical", "Artiste solo", "Instrument"],
    correct: 2
  },
  {
    q: "D'où est originaire Conque (lambi) ?",
    options: ["Diaspora (New York)", "Pétion-Ville / New York", "Port-au-Prince et diaspora", "National (surtout rara)"],
    correct: 3
  },
  {
    q: "Méringue haïtienne appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Années 1990-2000", "Fondé en 1965", "XIXe siècle", "Fondé en 2018"],
    correct: 2
  },
  {
    q: "Comment définit-on Djakout Mizik (Fabrice Rouzier) dans la musique haïtienne ?",
    options: ["Groupe", "Instrument", "Artiste solo", "Genre musical"],
    correct: 2
  },
  {
    q: "Quelle est la période de référence pour Méringue haïtienne ?",
    options: ["Tradition annuelle (juillet)", "Époque coloniale", "XIXe siècle", "Fondé en 1974"],
    correct: 2
  },
  {
    q: "Quelle est la nature de Mikaben dans le paysage musical haïtien ?",
    options: ["Artiste solo", "Genre musical", "Festival/Événement culturel", "Groupe"],
    correct: 0
  },
  {
    q: "À quelle époque associe-t-on T-Vice ?",
    options: ["Tradition annuelle (juillet)", "Tradition annuelle (novembre)", "Fondé en 1990", "Tradition annuelle"],
    correct: 2
  },
  {
    q: "Quelle est la nature de Tabou Combo dans le paysage musical haïtien ?",
    options: ["Instrument", "Groupe", "Genre musical", "Artiste solo"],
    correct: 1
  },
  {
    q: "Quel trait particulier caractérise Méringue haïtienne ?",
    options: ["Pionnier du mini-jazz haïtien", "Groupe de konpa réputé pour ses ballades", "Danse de salon d'origine haïtienne aux rythmes élégants", "Orchestre fondateur du style konpa dit méringue-konpa"],
    correct: 2
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Carimi ?",
    options: ["Fondé en 1996", "Fondé en 2018", "Fondé en 2020", "Tradition annuelle"],
    correct: 0
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Kesta B ?",
    options: ["Depuis les années 2010", "Depuis les années 1990", "Fondé en 1963", "Fondé en 1996"],
    correct: 0
  },
  {
    q: "Comment reconnaît-on Twoubadou parmi les autres éléments de la musique haïtienne ?",
    options: ["Rappeur et musicien, ex-membre des Fugees d'origine haïtienne", "Style fondateur du konpa moderne à tempo régulier", "Musique de rue processionnelle jouée en période de Carême", "Musique acoustique de guitare inspirée du son cubain"],
    correct: 3
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Mini-jazz ?",
    options: ["Port-au-Prince", "Miami (diaspora)", "National (Port-au-Prince, Jacmel...)", "Région frontalière (Sud-Est)"],
    correct: 0
  },
  {
    q: "Quelle période correspond le mieux à Festival Racines ?",
    options: ["Depuis les années 1990", "Depuis les années 1970", "Années 1960-1970", "Fondé en 1996"],
    correct: 0
  },
  {
    q: "Quelle région ou ville est le berceau de Martha Jean-Claude ?",
    options: ["Cap-Haïtien", "Port-au-Prince / Cuba", "National", "National (Port-au-Prince, Jacmel...)"],
    correct: 1
  },
  {
    q: "Krezi Mizik désigne principalement :",
    options: ["Instrument", "Genre musical", "Artiste solo", "Groupe"],
    correct: 3
  },
  {
    q: "Où situe-t-on l'origine de Carnaval des Fleurs (Cap-Haïtien) ?",
    options: ["Port-au-Prince", "Cap-Haïtien", "Pétion-Ville", "National (Port-au-Prince, Jacmel...)"],
    correct: 1
  },
  {
    q: "Quelle est la ville ou région d'origine associée à BIC ?",
    options: ["Port-au-Prince / Cuba", "Jacmel", "National (tradition rara)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Manno Charlemagne se distingue principalement par :",
    options: ["Chanteur fusionnant rock, reggae et konpa", "Célébration vodou en l'honneur des esprits des morts", "Ancêtre du banjo d'origine afro-haïtienne", "Chanteur engagé, figure de la mizik angaje"],
    correct: 3
  },
  {
    q: "Qu'est-ce qui distingue Boule zombi sur le plan musical ou culturel ?",
    options: ["Style de konpa rapide et énergique pour la danse", "Fratrie fondatrice d'un grand orchestre de konpa", "Groupe de konpa contemporain très populaire chez les jeunes", "Le plus grand des tambours dans un ensemble rituel"],
    correct: 0
  },
  {
    q: "Caribbean Sextet provient principalement de quelle zone ?",
    options: ["National (tradition rara)", "Port-au-Prince / Cuba", "New Jersey (diaspora)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "De quel type d'entité musicale s'agit-il pour Tanbou ?",
    options: ["Artiste solo", "Festival/Événement culturel", "Genre musical", "Instrument"],
    correct: 3
  },
  {
    q: "De quel type d'entité musicale s'agit-il pour Kanaval de Jacmel ?",
    options: ["Festival/Événement culturel", "Artiste solo", "Groupe", "Genre musical"],
    correct: 0
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Graj (güira) ?",
    options: ["National", "Port-au-Prince", "Gonaïves / diaspora", "Régions rurales"],
    correct: 0
  },
  {
    q: "Alan Cavé correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Artiste solo", "Festival/Événement culturel", "Groupe", "Genre musical"],
    correct: 0
  },
  {
    q: "Comment définit-on Roody Roodboy dans la musique haïtienne ?",
    options: ["Artiste solo", "Instrument", "Groupe", "Genre musical"],
    correct: 0
  },
  {
    q: "Dans quelle décennie Konpa Love a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Fondé en 2016", "Début du XXe siècle", "Années 1990-2000", "Fondé en 1970"],
    correct: 2
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Belo ?",
    options: ["Port-au-Prince", "Miami (diaspora)", "New Jersey (diaspora)", "Jacmel"],
    correct: 0
  },
  {
    q: "Qu'est-ce que Alan Cavé exactement ?",
    options: ["Artiste solo", "Instrument", "Groupe", "Genre musical"],
    correct: 0
  },
  {
    q: "Quelle description correspond le mieux à Kai ?",
    options: ["Musique de rue processionnelle jouée en période de Carême", "Rappeur pionnier du rap kreyòl", "Groupe de konpa formé par d'anciens membres de Nu Look et Kreyòl La", "Trio de konpa formé par Carlo, Richard et Mickaël"],
    correct: 2
  },
  {
    q: "Zenglen est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Depuis les années 1970", "Depuis les années 2010", "Fondé en 2016", "Fondé en 1993"],
    correct: 3
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Gypsies de Pétion-Ville ?",
    options: ["Fondé en 1970", "Depuis les années 1980", "Fondé en 1962", "Début du XXe siècle"],
    correct: 0
  },
  {
    q: "Si l'on devait classer Sweet Micky (Michel Martelly), ce serait comme :",
    options: ["Artiste solo", "Instrument", "Genre musical", "Groupe"],
    correct: 0
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Mizik rasin ?",
    options: ["Fondé en 2018", "Années 1980", "Depuis les années 1970", "XIXe siècle"],
    correct: 1
  },
  {
    q: "Quelle est la période de référence pour Fabrice Rouzier ?",
    options: ["Fondé en 1962", "Depuis les années 1990", "Tradition annuelle", "Fondé en 1978"],
    correct: 1
  },
  {
    q: "Qu'est-ce qui distingue Djakout Mizik (Fabrice Rouzier) sur le plan musical ou culturel ?",
    options: ["Groupe de konpa issu de la scission de Djakout Mizik", "Pianiste et arrangeur, cofondateur de Djakout Mizik", "Fusion de rythmes vodou traditionnels et de rock/pop", "Groupe de konpa fondé par d'anciens membres de Kreyòl La"],
    correct: 1
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Festival Racines ?",
    options: ["National", "National (Port-au-Prince, Jacmel...)", "National (tradition rara)", "Région frontalière (Sud-Est)"],
    correct: 0
  },
  {
    q: "Quel trait particulier caractérise BIC ?",
    options: ["Groupe de konpa formé par d'anciens membres de Nu Look et Kreyòl La", "Rappeur pionnier du rap kreyòl", "Groupe de konpa populaire des années 1990-2000", "Groupe emblématique du konpa de la diaspora"],
    correct: 1
  },
  {
    q: "Kanaval de Jacmel se distingue principalement par :",
    options: ["Carnaval réputé pour ses masques et costumes artisanaux", "Groupe de konpa reconnu pour ses ballades romantiques", "Groupe de konpa réputé pour ses ballades", "Chanteur, ancien leader de Zenglen puis Djakout Mizik"],
    correct: 0
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux RAM ?",
    options: ["Artiste solo", "Instrument", "Groupe", "Genre musical"],
    correct: 2
  },
  {
    q: "Quel élément résume le mieux Martha Jean-Claude ?",
    options: ["Instrument central des ensembles de twoubadou", "Pionnière du folklore chanté haïtien", "Rappeur pionnier du rap kreyòl", "Style de konpa romantique et mélodique"],
    correct: 1
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Kai ?",
    options: ["Fondé en 2020", "Fondé en 1975", "Années 1980", "Tradition annuelle (novembre)"],
    correct: 0
  },
  {
    q: "Kompa Dirèk est le plus étroitement associé(e) à quel lieu ?",
    options: ["National (surtout rara)", "National", "New York (diaspora)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Où situe-t-on l'origine de Kanpèch ?",
    options: ["Diaspora et Port-au-Prince", "Cap-Haïtien", "Port-au-Prince", "Diaspora (New York/Miami)"],
    correct: 1
  },
  {
    q: "Quelle période correspond le mieux à Vayb ?",
    options: ["Années 1970-1980", "Depuis les années 1990", "Fondé en 2018", "Depuis les années 2000"],
    correct: 2
  },
  {
    q: "Kesta B est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Depuis les années 1980", "Depuis les années 2010", "Fondé en 1996", "Fondé en 1975"],
    correct: 1
  },
  {
    q: "Où Mizik angaje a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["Miami (diaspora)", "Pétion-Ville", "National", "Diaspora (New York)"],
    correct: 2
  },
  {
    q: "Nu Look est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Tradition annuelle (novembre)", "Depuis les années 1970", "Fondé en 1998", "Fondé en 2010"],
    correct: 2
  },
  {
    q: "Quelle est la période de référence pour Tabou Combo ?",
    options: ["Fondé en 1974", "Fondé en 1980", "Fondé en 1990", "Fondé en 1968"],
    correct: 3
  },
  {
    q: "Quelle région ou ville est le berceau de Magnum Band ?",
    options: ["National (tradition rara)", "Port-au-Prince / New York", "New Jersey (diaspora)", "Régions rurales"],
    correct: 1
  },
  {
    q: "Où Caribbean Sextet a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["Diaspora (New York/Miami)", "Port-au-Prince et diaspora", "Régions rurales", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Quel trait particulier caractérise Gypsies de Pétion-Ville ?",
    options: ["Hip-hop chanté en créole haïtien", "Festival mettant à l'honneur la mizik rasin", "Rappeur haïtiano-américain connu pour ses collaborations konpa-hip-hop", "Grand orchestre de konpa des années 1970-1980"],
    correct: 3
  },
  {
    q: "Qu'est-ce qui distingue Mizik vodou sur le plan musical ou culturel ?",
    options: ["Groupe de konpa nouvelle génération", "Style fondateur du konpa moderne à tempo régulier", "Le plus grand des tambours dans un ensemble rituel", "Chants et percussions liés aux cérémonies religieuses vodou"],
    correct: 3
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Mikaben ?",
    options: ["Style de konpa romantique et mélodique", "Ancêtre du konpa mêlant jazz et rythmes afro-caribéens", "Rappeur haïtiano-américain connu pour ses collaborations konpa-hip-hop", "Chanteur de konpa reconnu pour sa voix et ses ballades"],
    correct: 3
  },
  {
    q: "Comment qualifierait-on Boule zombi sur le plan musical ?",
    options: ["Genre musical", "Instrument", "Groupe", "Festival/Événement culturel"],
    correct: 0
  },
  {
    q: "Où situe-t-on l'origine de Djakout Mizik (Fabrice Rouzier) ?",
    options: ["Diaspora (New York)", "Port-au-Prince (Hôtel Oloffson)", "Port-au-Prince", "Régions rurales"],
    correct: 2
  },
  {
    q: "Quelle est la nature de Méringue haïtienne dans le paysage musical haïtien ?",
    options: ["Groupe", "Artiste solo", "Instrument", "Genre musical"],
    correct: 3
  },
  {
    q: "Quel lieu géographique est lié à Zing Experience ?",
    options: ["Port-au-Prince (Hôtel Oloffson)", "Port-au-Prince", "Diaspora et Port-au-Prince", "New York (diaspora)"],
    correct: 1
  },
  {
    q: "Comment qualifierait-on Manman tanbou sur le plan musical ?",
    options: ["Groupe", "Artiste solo", "Instrument", "Festival/Événement culturel"],
    correct: 2
  },
  {
    q: "Quelle description correspond le mieux à Bel Air Orchestra ?",
    options: ["Groupe de konpa populaire des années 1990-2000", "Hip-hop chanté en créole haïtien", "Orchestre populaire du quartier de Bel-Air", "Célébration vodou en l'honneur des esprits des morts"],
    correct: 2
  },
  {
    q: "Quelle description correspond le mieux à Kanaval (Carnaval haïtien) ?",
    options: ["Ancêtre du banjo d'origine afro-haïtienne", "Pionnier du mini-jazz haïtien", "Grande fête populaire précédant le Carême, rythmée par les orchestres de konpa", "Groupe de konpa formé par d'anciens membres de Nu Look et Kreyòl La"],
    correct: 2
  },
  {
    q: "Rara correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Instrument", "Festival/Événement culturel", "Artiste solo", "Genre musical"],
    correct: 3
  },
  {
    q: "Quelle région ou ville est le berceau de Boukman Eksperyans ?",
    options: ["National (Port-au-Prince, Jacmel...)", "National (surtout rara)", "Port-au-Prince", "Miami (diaspora)"],
    correct: 2
  },
  {
    q: "Quelle région ou ville est le berceau de Djakout #1 ?",
    options: ["Diaspora (New York)", "Port-au-Prince", "Port-au-Prince / diaspora", "New York (diaspora)"],
    correct: 1
  },
  {
    q: "Quelle est la nature de Les Frères Dejean dans le paysage musical haïtien ?",
    options: ["Festival/Événement culturel", "Groupe", "Artiste solo", "Instrument"],
    correct: 1
  },
  {
    q: "Dans quelle décennie Michael Brun a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Années 1980-1990", "Depuis les années 2010", "Années 1940-1990", "Fondé en 1982"],
    correct: 1
  },
  {
    q: "Où situe-t-on l'origine de Alan Cavé ?",
    options: ["Pétion-Ville / New York", "Port-au-Prince", "Port-au-Prince / diaspora", "Port-au-Prince / New York"],
    correct: 1
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Vaksin ?",
    options: ["Pianiste et arrangeur, cofondateur de Djakout Mizik", "Grand orchestre de konpa toujours actif", "Pionnier mondial du konpa avec des tubes internationaux", "Trompette en bambou utilisée dans les groupes de rara"],
    correct: 3
  },
  {
    q: "Quelle région ou ville est le berceau de Roody Roodboy ?",
    options: ["National (tradition rara)", "Port-au-Prince", "Port-au-Prince / diaspora", "Diaspora et Port-au-Prince"],
    correct: 1
  },
  {
    q: "Quel élément résume le mieux Zing Experience ?",
    options: ["Groupe de konpa reconnu pour ses harmonies vocales", "Ancêtre du konpa mêlant jazz et rythmes afro-caribéens", "Orchestre fondateur du style konpa dit méringue-konpa", "Groupe majeur de mizik rasin engagée"],
    correct: 0
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Krezi Mizik ?",
    options: ["Miami (diaspora)", "Port-au-Prince", "Port-au-Prince et diaspora", "Port-au-Prince / New York"],
    correct: 1
  },
  {
    q: "Mini-jazz provient principalement de quelle zone ?",
    options: ["Diaspora et Port-au-Prince", "Port-au-Prince", "Port-au-Prince (Hôtel Oloffson)", "Port-au-Prince (famille Duplessis)"],
    correct: 1
  },
  {
    q: "Quelle est la période de référence pour Konpa Love ?",
    options: ["Fondé en 1962", "Années 1970-1980", "Tradition annuelle (novembre)", "Années 1990-2000"],
    correct: 3
  },
  {
    q: "Quel élément résume le mieux Beethova Obas ?",
    options: ["DJ et producteur électro fusionnant konpa et musique électronique", "Auteur-compositeur de folk et chanson engagée", "Orchestre populaire du quartier de Bel-Air", "Groupe de konpa new-generation à succès"],
    correct: 1
  },
  {
    q: "Kadans (Kadans Ranpa) appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Fondé en 1989", "Années 1950-1960", "Années 1980-1990", "Époque coloniale"],
    correct: 1
  },
  {
    q: "Dans quelle décennie Original Instrumental Sextet (OIS) a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Années 1970-1980", "Années 1960-1970", "Fondé en 1962", "Fondé en 2016"],
    correct: 2
  },
  {
    q: "Comment reconnaît-on Belo parmi les autres éléments de la musique haïtienne ?",
    options: ["Groupe de konpa réputé pour ses ballades", "Auteur-compositeur de folk et chanson engagée", "Chanteur fusionnant rock, reggae et konpa", "Fratrie fondatrice d'un grand orchestre de konpa"],
    correct: 2
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Sweet Micky (Michel Martelly) ?",
    options: ["Depuis les années 1980", "Tradition annuelle", "Fondé en 1993", "Fondé en 1996"],
    correct: 0
  },
  {
    q: "D'où est originaire Tabou Combo ?",
    options: ["Région frontalière (Sud-Est)", "Jacmel", "Port-au-Prince (famille Duplessis)", "Pétion-Ville / New York"],
    correct: 3
  },
  {
    q: "Quelle est la nature de Manman tanbou dans le paysage musical haïtien ?",
    options: ["Genre musical", "Instrument", "Festival/Événement culturel", "Artiste solo"],
    correct: 1
  },
  {
    q: "Quelle caractéristique définit le mieux Caribbean Sextet ?",
    options: ["Orchestre historique du mini-jazz", "Ancêtre du konpa mêlant jazz et rythmes afro-caribéens", "Orchestre de mini-jazz influent des années 1960-1970", "Pianiste et producteur de konpa influent"],
    correct: 2
  },
  {
    q: "Toto Bissainthe provient principalement de quelle zone ?",
    options: ["National", "Port-au-Prince (Hôtel Oloffson)", "Port-au-Prince / diaspora", "Port-au-Prince"],
    correct: 2
  },
  {
    q: "Système Band est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Tradition annuelle", "Années 1990-2000", "Fondé en 1982", "Fondé en 1970"],
    correct: 2
  },
  {
    q: "Comment reconnaît-on Zouk haïtien parmi les autres éléments de la musique haïtienne ?",
    options: ["Chanteur, ancien leader de Zenglen puis Djakout Mizik", "Groupe de konpa réputé pour ses ballades", "Chanteur engagé, figure de la mizik angaje", "Fusion du konpa avec le zouk antillais"],
    correct: 3
  },
  {
    q: "Martha Jean-Claude se distingue principalement par :",
    options: ["Musique acoustique de guitare inspirée du son cubain", "Pionnière du folklore chanté haïtien", "Orchestre historique du mini-jazz", "Fusion de rythmes vodou traditionnels et de rock/pop"],
    correct: 1
  },
  {
    q: "Qu'est-ce que Kadans (Kadans Ranpa) exactement ?",
    options: ["Instrument", "Groupe", "Genre musical", "Festival/Événement culturel"],
    correct: 2
  },
  {
    q: "Quelle période correspond le mieux à Klass ?",
    options: ["Années 1940-1990", "Fondé en 1996", "Fondé en 2005", "Depuis les années 1980"],
    correct: 2
  },
  {
    q: "Quelle est la nature de Kanaval de Jacmel dans le paysage musical haïtien ?",
    options: ["Instrument", "Genre musical", "Festival/Événement culturel", "Groupe"],
    correct: 2
  },
  {
    q: "Mikaben désigne principalement :",
    options: ["Festival/Événement culturel", "Instrument", "Genre musical", "Artiste solo"],
    correct: 3
  },
  {
    q: "De quel type d'entité musicale s'agit-il pour Original H (originaire de Brooklyn) ?",
    options: ["Artiste solo", "Festival/Événement culturel", "Groupe", "Instrument"],
    correct: 0
  },
  {
    q: "Comment définit-on Mikaben dans la musique haïtienne ?",
    options: ["Genre musical", "Groupe", "Instrument", "Artiste solo"],
    correct: 3
  },
  {
    q: "Quel trait particulier caractérise Kompa Dirèk ?",
    options: ["Pionnière du folklore chanté haïtien", "Pianiste et producteur de konpa influent", "Figure populaire du konpa avant de devenir président d'Haïti", "Style fondateur du konpa moderne à tempo régulier"],
    correct: 3
  },
  {
    q: "Quelle est la période de référence pour Beethova Obas ?",
    options: ["Fondé en 1966", "Fondé en 2007", "Tradition annuelle", "Depuis les années 1980"],
    correct: 3
  },
  {
    q: "Belo appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Depuis les années 1990", "Depuis les années 2000", "Fondé en 1965", "Fondé en 1996"],
    correct: 1
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux Ti Manno ?",
    options: ["Artiste solo", "Instrument", "Groupe", "Festival/Événement culturel"],
    correct: 0
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Original H (originaire de Brooklyn) ?",
    options: ["Fusion de rythmes vodou traditionnels et de rock/pop", "Groupe de konpa reconnu pour ses tubes dansants", "Rappeur haïtiano-américain connu pour ses collaborations konpa-hip-hop", "Chants et percussions liés aux cérémonies religieuses vodou"],
    correct: 2
  },
  {
    q: "D'où est originaire Tanbou ?",
    options: ["Port-au-Prince / international", "National (surtout rara)", "Port-au-Prince / Cuba", "National"],
    correct: 3
  },
  {
    q: "Quel trait particulier caractérise Banza ?",
    options: ["Rappeur pionnier du rap kreyòl", "Ancêtre du banjo d'origine afro-haïtienne", "Fusion de rythmes vodou traditionnels et de rock/pop", "Orchestre populaire du quartier de Bel-Air"],
    correct: 1
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux Méringue haïtienne ?",
    options: ["Festival/Événement culturel", "Genre musical", "Instrument", "Groupe"],
    correct: 1
  },
  {
    q: "Qu'est-ce qui distingue Original H (originaire de Brooklyn) sur le plan musical ou culturel ?",
    options: ["Autre nom sous lequel Djakout Mizik est parfois connu à ses débuts", "Instrument central des ensembles de twoubadou", "Tambour central des musiques vodou et rara", "Rappeur haïtiano-américain connu pour ses collaborations konpa-hip-hop"],
    correct: 3
  },
  {
    q: "Rara est le plus étroitement associé(e) à quel lieu ?",
    options: ["National (surtout zones rurales)", "National (Port-au-Prince, Jacmel...)", "New York (diaspora)", "Port-au-Prince (famille Duplessis)"],
    correct: 0
  },
  {
    q: "Comment qualifierait-on Original Instrumental Sextet (OIS) sur le plan musical ?",
    options: ["Instrument", "Groupe", "Genre musical", "Festival/Événement culturel"],
    correct: 1
  },
  {
    q: "Caribbean Sextet est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Époque coloniale", "Fondé en 2018", "Depuis les années 2010", "Fondé en 1966"],
    correct: 3
  },
  {
    q: "De quel type d'entité musicale s'agit-il pour Mizik rasin ?",
    options: ["Groupe", "Genre musical", "Instrument", "Artiste solo"],
    correct: 1
  },
  {
    q: "Kompa Dirèk appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Années 1980-1990", "Fondé en 2020", "Fondé en 2016", "Années 1950"],
    correct: 3
  },
  {
    q: "Fabrice Rouzier est le plus étroitement associé(e) à quel lieu ?",
    options: ["Pétion-Ville / New York", "Port-au-Prince", "National (mouvement culturel)", "Jacmel"],
    correct: 1
  },
  {
    q: "Comment définit-on Boule zombi dans la musique haïtienne ?",
    options: ["Genre musical", "Festival/Événement culturel", "Instrument", "Artiste solo"],
    correct: 0
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Emeline Michel ?",
    options: ["Époque coloniale à aujourd'hui", "Depuis les années 1980", "Années 1990-2000", "Années 1960-1970"],
    correct: 1
  },
  {
    q: "Où situe-t-on l'origine de Accordéon (twoubadou) ?",
    options: ["Port-au-Prince et diaspora", "Régions rurales", "Pétion-Ville", "Pétion-Ville / New York"],
    correct: 1
  },
  {
    q: "Dans quelle décennie Tanbou a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Depuis les années 1990", "Époque coloniale à aujourd'hui", "Fondé en 2007", "Fondé en 1989"],
    correct: 1
  },
  {
    q: "Quelle est la nature de Système Band dans le paysage musical haïtien ?",
    options: ["Instrument", "Artiste solo", "Genre musical", "Groupe"],
    correct: 3
  },
  {
    q: "Nu Look appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Années 1950", "Tradition annuelle (juillet)", "Fondé en 1982", "Fondé en 1998"],
    correct: 3
  },
  {
    q: "Quelle est la période de référence pour Mini-jazz ?",
    options: ["Depuis les années 2010", "Fondé en 2007", "Années 1960-1970", "Années 1960-1990"],
    correct: 2
  },
  {
    q: "Quelle description correspond le mieux à Krezi Mizik ?",
    options: ["Groupe de konpa fondé par d'anciens membres de Kreyòl La", "Trio de konpa formé par Carlo, Richard et Mickaël", "Célébration vodou en l'honneur des esprits des morts", "Chansons engagées portant un message social ou politique"],
    correct: 0
  },
  {
    q: "À quelle époque associe-t-on Graj (güira) ?",
    options: ["Début du XXe siècle", "Fondé en 2007", "Tradition annuelle (juillet)", "Époque coloniale à aujourd'hui"],
    correct: 3
  },
  {
    q: "Comment qualifierait-on Nu Look sur le plan musical ?",
    options: ["Festival/Événement culturel", "Genre musical", "Groupe", "Artiste solo"],
    correct: 2
  },
  {
    q: "Quel élément résume le mieux Kanpèch ?",
    options: ["Orchestre régional connu dans le Nord d'Haïti", "Groupe de konpa reconnu pour ses ballades romantiques", "Grande fête populaire précédant le Carême, rythmée par les orchestres de konpa", "Carnaval d'été célèbre dans le Nord d'Haïti"],
    correct: 0
  },
  {
    q: "Si l'on devait classer Ti Manno, ce serait comme :",
    options: ["Festival/Événement culturel", "Groupe", "Genre musical", "Artiste solo"],
    correct: 3
  },
  {
    q: "Comment reconnaît-on Kreyòl La parmi les autres éléments de la musique haïtienne ?",
    options: ["Carnaval réputé pour ses masques et costumes artisanaux", "Coquillage utilisé comme instrument à vent rituel et festif", "Groupe de konpa reconnu pour ses ballades romantiques", "Groupe de konpa issu de la scission de Djakout Mizik"],
    correct: 3
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Vayb ?",
    options: ["Fondé en 2007", "Fondé en 2018", "Depuis les années 2000", "Depuis les années 1970"],
    correct: 1
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Kanaval de Jacmel ?",
    options: ["Fondé en 1989", "Tradition annuelle", "Depuis les années 1980", "Années 1980-1990"],
    correct: 1
  },
  {
    q: "Où Nu Look a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["Diaspora (New York/Miami)", "Diaspora (New York)", "Port-au-Prince", "Régions rurales"],
    correct: 2
  },
  {
    q: "Comment définit-on Banza dans la musique haïtienne ?",
    options: ["Genre musical", "Groupe", "Artiste solo", "Instrument"],
    correct: 3
  },
  {
    q: "Comment définit-on Fèt Gede dans la musique haïtienne ?",
    options: ["Genre musical", "Groupe", "Instrument", "Festival/Événement culturel"],
    correct: 3
  },
  {
    q: "Kanaval (Carnaval haïtien) est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Début du XXe siècle", "Années 1970-1980", "Fondé en 1990", "Tradition annuelle"],
    correct: 3
  },
  {
    q: "Martha Jean-Claude appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Années 1960-1990", "Années 1990-2000", "Depuis les années 1970", "Années 1940-1990"],
    correct: 3
  },
  {
    q: "Méringue haïtienne provient principalement de quelle zone ?",
    options: ["National", "Port-au-Prince", "Port-au-Prince / international", "National (tradition rara)"],
    correct: 1
  },
  {
    q: "Quel élément résume le mieux Twoubadou ?",
    options: ["Chants et percussions liés aux cérémonies religieuses vodou", "Musique acoustique de guitare inspirée du son cubain", "Chanteur fusionnant rock, reggae et konpa", "Chanteur, ancien leader de Zenglen puis Djakout Mizik"],
    correct: 1
  },
  {
    q: "Comment définit-on Harmonik dans la musique haïtienne ?",
    options: ["Groupe", "Artiste solo", "Instrument", "Genre musical"],
    correct: 0
  },
  {
    q: "D'où est originaire Mini-jazz ?",
    options: ["Diaspora (New York)", "Port-au-Prince", "New Jersey (diaspora)", "National (mouvement culturel)"],
    correct: 1
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Martha Jean-Claude ?",
    options: ["Années 1940-1990", "Époque coloniale à aujourd'hui", "Fondé en 1990", "Fondé en 1980"],
    correct: 0
  },
  {
    q: "Quelle est la période de référence pour Mizik vodou ?",
    options: ["Époque coloniale à aujourd'hui", "Années 1950", "Fondé en 1996", "Fondé en 1993"],
    correct: 0
  },
  {
    q: "Quelle est la nature de Konpa dans le paysage musical haïtien ?",
    options: ["Instrument", "Genre musical", "Groupe", "Artiste solo"],
    correct: 1
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Klass ?",
    options: ["Port-au-Prince", "Diaspora et Port-au-Prince", "New York (diaspora)", "Miami (diaspora)"],
    correct: 0
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Original H (originaire de Brooklyn) ?",
    options: ["Fondé en 1963", "Depuis les années 2000", "Fondé en 1965", "Fondé en 1982"],
    correct: 1
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Klass ?",
    options: ["Fondé en 1975", "Fondé en 1962", "Tradition annuelle (novembre)", "Fondé en 2005"],
    correct: 3
  },
  {
    q: "Quelle est la période de référence pour RAM ?",
    options: ["Fondé en 1990", "Années 1950", "Depuis les années 1990", "Tradition annuelle (juillet)"],
    correct: 0
  },
  {
    q: "Kanpèch est le plus étroitement associé(e) à quel lieu ?",
    options: ["Régions rurales", "Port-au-Prince / diaspora", "Pétion-Ville", "Cap-Haïtien"],
    correct: 3
  },
  {
    q: "Dans quelle décennie J Perry a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Époque coloniale à aujourd'hui", "Depuis les années 2010", "Fondé en 1974", "Années 1950-1960"],
    correct: 1
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Kanaval de Jacmel ?",
    options: ["Pétion-Ville", "Port-au-Prince / Cuba", "Jacmel", "Diaspora (New York/Miami)"],
    correct: 2
  },
  {
    q: "Quelle description correspond le mieux à Magnum Band ?",
    options: ["Groupe de konpa formé par d'anciens membres de Nu Look et Kreyòl La", "Pionnier mondial du konpa avec des tubes internationaux", "Figure populaire du konpa avant de devenir président d'Haïti", "Groupe majeur du konpa des années 1980"],
    correct: 3
  },
  {
    q: "De quel type d'entité musicale s'agit-il pour Skah Shah ?",
    options: ["Groupe", "Artiste solo", "Festival/Événement culturel", "Genre musical"],
    correct: 0
  },
  {
    q: "À quelle époque associe-t-on Belo ?",
    options: ["Fondé en 2007", "Depuis les années 2000", "Années 1950-1960", "Tradition annuelle"],
    correct: 1
  },
  {
    q: "Comment reconnaît-on Kanaval de Jacmel parmi les autres éléments de la musique haïtienne ?",
    options: ["Ancêtre du konpa mêlant jazz et rythmes afro-caribéens", "Groupe de mizik rasin dirigé par Richard Morse", "Carnaval réputé pour ses masques et costumes artisanaux", "Pionnière du folklore chanté haïtien"],
    correct: 2
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux Kanaval de Jacmel ?",
    options: ["Groupe", "Artiste solo", "Instrument", "Festival/Événement culturel"],
    correct: 3
  },
  {
    q: "Comment qualifierait-on T-Vice sur le plan musical ?",
    options: ["Groupe", "Artiste solo", "Festival/Événement culturel", "Genre musical"],
    correct: 0
  },
  {
    q: "D'où est originaire Beethova Obas ?",
    options: ["New Jersey (diaspora)", "Port-au-Prince", "Diaspora et Port-au-Prince", "Port-au-Prince / Cuba"],
    correct: 1
  },
  {
    q: "Mizik vodou désigne principalement :",
    options: ["Genre musical", "Festival/Événement culturel", "Artiste solo", "Instrument"],
    correct: 0
  },
  {
    q: "RAM provient principalement de quelle zone ?",
    options: ["Pétion-Ville / New York", "New York (diaspora)", "Port-au-Prince (Hôtel Oloffson)", "Diaspora (New York)"],
    correct: 2
  },
  {
    q: "Quelle période correspond le mieux à Sweet Micky (Michel Martelly) ?",
    options: ["Fondé en 1975", "Tradition annuelle (juillet)", "Fondé en 1968", "Depuis les années 1980"],
    correct: 3
  },
  {
    q: "Quel lieu géographique est lié à Tcha tcha ?",
    options: ["New Jersey (diaspora)", "National (surtout rara)", "National", "Jacmel"],
    correct: 2
  },
  {
    q: "Si l'on devait classer Beethova Obas, ce serait comme :",
    options: ["Artiste solo", "Festival/Événement culturel", "Instrument", "Genre musical"],
    correct: 0
  },
  {
    q: "Comment décrirait-on le style ou le rôle de T-Vice ?",
    options: ["Pianiste et producteur de konpa influent", "Groupe de konpa fondé par une famille de musiciens", "Style de konpa rapide et énergique pour la danse", "Le plus grand des tambours dans un ensemble rituel"],
    correct: 1
  },
  {
    q: "Qu'est-ce qui distingue Ti Manno sur le plan musical ou culturel ?",
    options: ["Le plus grand des tambours dans un ensemble rituel", "Chanteur emblématique de konpa social et engagé", "Pionnier mondial du konpa avec des tubes internationaux", "Groupe de konpa reconnu pour ses ballades romantiques"],
    correct: 1
  },
  {
    q: "Coupé Cloué et l'Ensemble Select désigne principalement :",
    options: ["Instrument", "Groupe", "Artiste solo", "Festival/Événement culturel"],
    correct: 1
  },
  {
    q: "Quel trait particulier caractérise RAM ?",
    options: ["Groupe de konpa reconnu pour ses tubes dansants", "Style de konpa rapide et énergique pour la danse", "Groupe de mizik rasin dirigé par Richard Morse", "Chansons engagées portant un message social ou politique"],
    correct: 2
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Manno Charlemagne ?",
    options: ["Depuis les années 1970", "Fondé en 1990", "Fondé en 1963", "Fondé en 1975"],
    correct: 0
  },
  {
    q: "Martha Jean-Claude provient principalement de quelle zone ?",
    options: ["National (tradition rara)", "Pétion-Ville", "Port-au-Prince / Cuba", "New Jersey (diaspora)"],
    correct: 2
  },
  {
    q: "Quel trait particulier caractérise Farah Juste ?",
    options: ["Groupe de konpa reconnu pour ses harmonies vocales", "Pionnier mondial du konpa avec des tubes internationaux", "Chanteuse engagée connue pour ses textes politiques", "Fusion du konpa avec le zouk antillais"],
    correct: 2
  },
  {
    q: "Où situe-t-on l'origine de Caribbean Sextet ?",
    options: ["Port-au-Prince", "Port-au-Prince / New York", "Gonaïves / diaspora", "New York (diaspora)"],
    correct: 0
  },
  {
    q: "Kanpèch désigne principalement :",
    options: ["Artiste solo", "Groupe", "Festival/Événement culturel", "Instrument"],
    correct: 1
  },
  {
    q: "Beethova Obas désigne principalement :",
    options: ["Instrument", "Genre musical", "Artiste solo", "Groupe"],
    correct: 2
  },
  {
    q: "Tanbou désigne principalement :",
    options: ["Instrument", "Festival/Événement culturel", "Artiste solo", "Groupe"],
    correct: 0
  },
  {
    q: "Quelle description correspond le mieux à Boukman Eksperyans ?",
    options: ["Groupe de konpa fondé par une famille de musiciens", "Groupe pionnier de la mizik rasin", "Groupe de konpa populaire des années 1990-2000", "Ancêtre du konpa mêlant jazz et rythmes afro-caribéens"],
    correct: 1
  },
  {
    q: "Méringue haïtienne est le plus étroitement associé(e) à quel lieu ?",
    options: ["Gonaïves / diaspora", "Miami (diaspora)", "Pétion-Ville", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Krezi Mizik ?",
    options: ["Chanteuse surnommée « la Grande Dame de la chanson haïtienne »", "Groupe de konpa reconnu pour ses harmonies vocales", "Maracas traditionnelles utilisées dans plusieurs genres", "Groupe de konpa fondé par d'anciens membres de Kreyòl La"],
    correct: 3
  },
  {
    q: "Zouk haïtien est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Fondé en 1970", "Fondé en 1982", "Années 1980-1990", "Fondé en 1966"],
    correct: 2
  },
  {
    q: "Quel trait particulier caractérise Kreyòl La ?",
    options: ["Tambour central des musiques vodou et rara", "Chanteur fusionnant rock, reggae et konpa", "Groupe de konpa issu de la scission de Djakout Mizik", "Chanteur emblématique de konpa social et engagé"],
    correct: 2
  },
  {
    q: "Quel élément résume le mieux Toto Bissainthe ?",
    options: ["Chanteuse et actrice, figure de la chanson racine", "Chanteur de konpa reconnu pour sa voix et ses ballades", "Autre nom sous lequel Djakout Mizik est parfois connu à ses débuts", "Artiste populaire mêlant konpa et musique urbaine"],
    correct: 0
  },
  {
    q: "Quelle est la période de référence pour Djakout #1 ?",
    options: ["Années 1960-1970", "Fondé en 2018", "Années 1960-1990", "Fondé en 2010"],
    correct: 3
  },
  {
    q: "Quelle caractéristique définit le mieux Bel Air Orchestra ?",
    options: ["Orchestre historique du mini-jazz", "Groupe de konpa réputé pour ses ballades", "Orchestre populaire du quartier de Bel-Air", "Pionnière du folklore chanté haïtien"],
    correct: 2
  },
  {
    q: "Farah Juste appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Depuis les années 1980", "Années 1960-1970", "Depuis les années 1990", "Années 1990-2000"],
    correct: 0
  },
  {
    q: "Comment qualifierait-on Gypsies de Pétion-Ville sur le plan musical ?",
    options: ["Genre musical", "Groupe", "Instrument", "Artiste solo"],
    correct: 1
  },
  {
    q: "Quel trait particulier caractérise Vayb ?",
    options: ["Fusion du konpa avec le zouk antillais", "Groupe de konpa contemporain très populaire chez les jeunes", "Chanteur, ancien leader de Zenglen puis Djakout Mizik", "Figure populaire du konpa avant de devenir président d'Haïti"],
    correct: 1
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux Alan Cavé ?",
    options: ["Festival/Événement culturel", "Artiste solo", "Groupe", "Genre musical"],
    correct: 1
  },
  {
    q: "Qu'est-ce que RAM exactement ?",
    options: ["Genre musical", "Groupe", "Artiste solo", "Instrument"],
    correct: 1
  },
  {
    q: "Quelle description correspond le mieux à Conque (lambi) ?",
    options: ["Instrument à percussion métallique gratté avec une baguette", "Pionnier du mini-jazz haïtien", "Coquillage utilisé comme instrument à vent rituel et festif", "Style de konpa rapide et énergique pour la danse"],
    correct: 2
  },
  {
    q: "Kreyòl La désigne principalement :",
    options: ["Instrument", "Genre musical", "Festival/Événement culturel", "Groupe"],
    correct: 3
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Boukan Ginen ?",
    options: ["Port-au-Prince", "New York (diaspora)", "Gonaïves / diaspora", "Port-au-Prince / international"],
    correct: 0
  },
  {
    q: "Dans quelle décennie Boule zombi a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Fondé en 2020", "Début du XXe siècle", "Années 1970-1980", "Fondé en 2007"],
    correct: 2
  },
  {
    q: "Quel lieu géographique est lié à Mizik rasin ?",
    options: ["Région frontalière (Sud-Est)", "Port-au-Prince (Hôtel Oloffson)", "Port-au-Prince", "National (mouvement culturel)"],
    correct: 3
  },
  {
    q: "Quelle région ou ville est le berceau de Klass ?",
    options: ["Gonaïves / diaspora", "New York (diaspora)", "Cap-Haïtien", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Vayb ?",
    options: ["Fondé en 2018", "Années 1990-2000", "Fondé en 2020", "Fondé en 1993"],
    correct: 0
  },
  {
    q: "Qu'est-ce que Original H (originaire de Brooklyn) exactement ?",
    options: ["Instrument", "Festival/Événement culturel", "Genre musical", "Artiste solo"],
    correct: 3
  },
  {
    q: "Quelle description correspond le mieux à Zouk haïtien ?",
    options: ["Fratrie fondatrice d'un grand orchestre de konpa", "Pionnier mondial du konpa avec des tubes internationaux", "Rappeur haïtiano-américain connu pour ses collaborations konpa-hip-hop", "Fusion du konpa avec le zouk antillais"],
    correct: 3
  },
  {
    q: "Mikaben se distingue principalement par :",
    options: ["Chanteur fusionnant rock, reggae et konpa", "Chanteur de konpa reconnu pour sa voix et ses ballades", "Instrument central des ensembles de twoubadou", "Pianiste et producteur de konpa influent"],
    correct: 1
  },
  {
    q: "Où Mizik vodou a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["Port-au-Prince (famille Duplessis)", "Diaspora (New York/Miami)", "National", "Port-au-Prince / New York"],
    correct: 2
  },
  {
    q: "Quelle est la nature de RAM dans le paysage musical haïtien ?",
    options: ["Instrument", "Festival/Événement culturel", "Genre musical", "Groupe"],
    correct: 3
  },
  {
    q: "À quelle époque associe-t-on Gypsies de Pétion-Ville ?",
    options: ["XIXe siècle", "Fondé en 1970", "Fondé en 1963", "Fondé en 2005"],
    correct: 1
  },
  {
    q: "Quelle description correspond le mieux à Michael Brun ?",
    options: ["Maracas traditionnelles utilisées dans plusieurs genres", "Musique acoustique de guitare inspirée du son cubain", "DJ et producteur électro fusionnant konpa et musique électronique", "Groupe de konpa reconnu pour ses ballades romantiques"],
    correct: 2
  },
  {
    q: "Quel trait particulier caractérise Ibo Combo ?",
    options: ["Orchestre historique du mini-jazz", "Groupe majeur du konpa des années 1980", "Chanteur engagé, figure de la mizik angaje", "Orchestre populaire du quartier de Bel-Air"],
    correct: 0
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Alan Cavé ?",
    options: ["Pianiste et producteur de konpa influent", "Chanteur, ancien leader de Zenglen puis Djakout Mizik", "Groupe de konpa reconnu pour ses ballades romantiques", "Groupe majeur de mizik rasin engagée"],
    correct: 1
  },
  {
    q: "Quelle est la période de référence pour Zing Experience ?",
    options: ["Fondé en 1996", "Fondé en 1970", "Fondé en 1978", "Fondé en 1998"],
    correct: 0
  },
  {
    q: "Quel lieu géographique est lié à Système Band ?",
    options: ["New York (diaspora)", "Cap-Haïtien", "Diaspora et Port-au-Prince", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Quelle région ou ville est le berceau de Vayb ?",
    options: ["Diaspora et Port-au-Prince", "Port-au-Prince / diaspora", "National (surtout rara)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Où situe-t-on l'origine de Conque (lambi) ?",
    options: ["Cap-Haïtien", "Régions rurales du Nord et du Sud", "National (surtout rara)", "Gonaïves / diaspora"],
    correct: 2
  },
  {
    q: "Comment définit-on Manman tanbou dans la musique haïtienne ?",
    options: ["Groupe", "Festival/Événement culturel", "Artiste solo", "Instrument"],
    correct: 3
  },
  {
    q: "Quelle région ou ville est le berceau de Original H (originaire de Brooklyn) ?",
    options: ["National (mouvement culturel)", "Port-au-Prince (famille Duplessis)", "Diaspora (New York)", "Régions rurales du Nord et du Sud"],
    correct: 2
  },
  {
    q: "De quel type d'entité musicale s'agit-il pour Zenglen ?",
    options: ["Instrument", "Artiste solo", "Groupe", "Genre musical"],
    correct: 2
  },
  {
    q: "Si l'on devait classer Tcha tcha, ce serait comme :",
    options: ["Groupe", "Festival/Événement culturel", "Artiste solo", "Instrument"],
    correct: 3
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Alan Cavé ?",
    options: ["Fondé en 1965", "Années 1970-1980", "Fondé en 1963", "Depuis les années 1990"],
    correct: 3
  },
  {
    q: "Qu'est-ce que Volo Volo exactement ?",
    options: ["Festival/Événement culturel", "Genre musical", "Groupe", "Instrument"],
    correct: 2
  },
  {
    q: "Les Frères Dejean appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Fondé en 1970", "Fondé en 1966", "Fondé en 1965", "Depuis les années 1980"],
    correct: 0
  },
  {
    q: "Quelle caractéristique définit le mieux Kreyòl La ?",
    options: ["Groupe de konpa formé par d'anciens membres de Nu Look et Kreyòl La", "Chanteuse surnommée « la Grande Dame de la chanson haïtienne »", "Groupe de konpa issu de la scission de Djakout Mizik", "Fusion du konpa avec le zouk antillais"],
    correct: 2
  },
  {
    q: "À quelle époque associe-t-on Carnaval des Fleurs (Cap-Haïtien) ?",
    options: ["Fondé en 1978", "Tradition annuelle (juillet)", "Fondé en 1980", "Époque coloniale à aujourd'hui"],
    correct: 1
  },
  {
    q: "Emeline Michel est le plus étroitement associé(e) à quel lieu ?",
    options: ["New Jersey (diaspora)", "Diaspora (New York)", "Régions rurales du Nord et du Sud", "Gonaïves / diaspora"],
    correct: 3
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Mizik angaje ?",
    options: ["Chanteuse et actrice, figure de la chanson racine", "Danse de salon d'origine haïtienne aux rythmes élégants", "Chansons engagées portant un message social ou politique", "Groupe de konpa contemporain très populaire chez les jeunes"],
    correct: 2
  },
  {
    q: "Comment définit-on Manno Charlemagne dans la musique haïtienne ?",
    options: ["Groupe", "Genre musical", "Festival/Événement culturel", "Artiste solo"],
    correct: 3
  },
  {
    q: "Si l'on devait classer Rara, ce serait comme :",
    options: ["Genre musical", "Festival/Événement culturel", "Instrument", "Artiste solo"],
    correct: 0
  },
  {
    q: "Quelle période correspond le mieux à Wyclef Jean ?",
    options: ["Depuis les années 1990", "Fondé en 1975", "Fondé en 1978", "Années 1980-1990"],
    correct: 0
  },
  {
    q: "Zenglen appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Fondé en 1993", "Époque coloniale à aujourd'hui", "Années 1970-1980", "Fondé en 1978"],
    correct: 0
  },
  {
    q: "Où Graj (güira) a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["Cap-Haïtien", "Diaspora (New York/Miami)", "Gonaïves / diaspora", "National"],
    correct: 3
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Zouk haïtien ?",
    options: ["Années 1980", "Années 1960-1990", "Années 1980-1990", "Fondé en 2020"],
    correct: 2
  },
  {
    q: "Carimi appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Fondé en 1996", "Depuis les années 1980", "Fondé en 1970", "Fondé en 1962"],
    correct: 0
  },
  {
    q: "Sweet Micky (Michel Martelly) est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Depuis les années 1980", "Fondé en 2007", "Fondé en 1970", "Années 1990-2000"],
    correct: 0
  },
  {
    q: "Comment qualifierait-on Roody Roodboy sur le plan musical ?",
    options: ["Artiste solo", "Instrument", "Festival/Événement culturel", "Genre musical"],
    correct: 0
  },
  {
    q: "À quelle époque associe-t-on Boukan Ginen ?",
    options: ["Fondé en 1989", "Années 1940-1990", "Fondé en 1963", "Fondé en 2007"],
    correct: 0
  },
  {
    q: "Quel lieu géographique est lié à Fèt Gede ?",
    options: ["National (surtout rara)", "Cap-Haïtien", "National", "National (tradition rara)"],
    correct: 2
  },
  {
    q: "Farah Juste est le plus étroitement associé(e) à quel lieu ?",
    options: ["Port-au-Prince / diaspora", "National", "Diaspora (New York)", "Pétion-Ville / New York"],
    correct: 2
  },
  {
    q: "Qu'est-ce qui distingue Méringue haïtienne sur le plan musical ou culturel ?",
    options: ["Danse de salon d'origine haïtienne aux rythmes élégants", "Groupe de konpa reconnu pour ses tubes dansants", "Groupe de konpa new-generation à succès", "Festival mettant à l'honneur la mizik rasin"],
    correct: 0
  },
  {
    q: "Quelle caractéristique définit le mieux Michael Brun ?",
    options: ["Groupe de konpa fondé par une famille de musiciens", "Instrument central des ensembles de twoubadou", "DJ et producteur électro fusionnant konpa et musique électronique", "Chanteuse engagée connue pour ses textes politiques"],
    correct: 2
  },
  {
    q: "Quelle est la période de référence pour Festival Racines ?",
    options: ["Depuis les années 1990", "Fondé en 2005", "Fondé en 1980", "Début du XXe siècle"],
    correct: 0
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Carimi ?",
    options: ["Années 1980-1990", "Fondé en 1965", "Fondé en 1996", "Fondé en 1980"],
    correct: 2
  },
  {
    q: "Toto Bissainthe est le plus étroitement associé(e) à quel lieu ?",
    options: ["Port-au-Prince / New York", "Port-au-Prince / diaspora", "National (surtout zones rurales)", "Port-au-Prince (Hôtel Oloffson)"],
    correct: 1
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Zouk haïtien ?",
    options: ["Diaspora (New York/Miami)", "New York (diaspora)", "Jacmel", "Port-au-Prince / New York"],
    correct: 0
  },
  {
    q: "Djakout #1 désigne principalement :",
    options: ["Groupe", "Genre musical", "Instrument", "Artiste solo"],
    correct: 0
  },
  {
    q: "Quel trait particulier caractérise Zouk haïtien ?",
    options: ["Fusion du konpa avec le zouk antillais", "Rappeur pionnier du rap kreyòl", "Auteur-compositeur de folk et chanson engagée", "Style fondateur du konpa moderne à tempo régulier"],
    correct: 0
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Tabou Combo ?",
    options: ["Artiste populaire mêlant konpa et musique urbaine", "Grand orchestre de konpa toujours actif", "Pionnier mondial du konpa avec des tubes internationaux", "Chants et percussions liés aux cérémonies religieuses vodou"],
    correct: 2
  },
  {
    q: "Comment reconnaît-on Wyclef Jean parmi les autres éléments de la musique haïtienne ?",
    options: ["Pionnier du mini-jazz haïtien", "Ancêtre du banjo d'origine afro-haïtienne", "Rappeur et musicien, ex-membre des Fugees d'origine haïtienne", "Musique de rue processionnelle jouée en période de Carême"],
    correct: 2
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Zouk haïtien ?",
    options: ["Fusion du konpa avec le zouk antillais", "Musique festive liée aux célébrations agraires", "Trio de konpa formé par Carlo, Richard et Mickaël", "Style de konpa romantique et mélodique"],
    correct: 0
  },
  {
    q: "Si l'on devait classer Mini-jazz, ce serait comme :",
    options: ["Instrument", "Genre musical", "Artiste solo", "Festival/Événement culturel"],
    correct: 1
  },
  {
    q: "Quel lieu géographique est lié à Mini-jazz ?",
    options: ["Régions rurales", "Gonaïves / diaspora", "Diaspora et Port-au-Prince", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Kanpèch ?",
    options: ["Fondé en 2010", "Fondé en 1975", "Fondé en 1970", "Années 1990-2000"],
    correct: 1
  },
  {
    q: "Quel lieu géographique est lié à Kompa Dirèk ?",
    options: ["Port-au-Prince / international", "Régions rurales du Nord et du Sud", "Régions rurales", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Si l'on devait classer J Perry, ce serait comme :",
    options: ["Festival/Événement culturel", "Artiste solo", "Instrument", "Groupe"],
    correct: 1
  },
  {
    q: "À quelle époque associe-t-on J Perry ?",
    options: ["Années 1950", "Années 1990-2000", "Tradition annuelle (novembre)", "Depuis les années 2010"],
    correct: 3
  },
  {
    q: "Dans quelle décennie Ti Manno a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Fondé en 1989", "Fondé en 1998", "Années 1970-1980", "Fondé en 1996"],
    correct: 2
  },
  {
    q: "Quelle période correspond le mieux à Beethova Obas ?",
    options: ["Depuis les années 1980", "Fondé en 1996", "Fondé en 2010", "Fondé en 1962"],
    correct: 0
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Rara ?",
    options: ["Fondé en 1968", "Depuis les années 2000", "Fondé en 1966", "Époque coloniale à aujourd'hui"],
    correct: 3
  },
  {
    q: "Kanpèch appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Fondé en 1975", "Fondé en 1970", "Années 1990-2000", "Depuis les années 1970"],
    correct: 0
  },
  {
    q: "Qu'est-ce que Original Instrumental Sextet (OIS) exactement ?",
    options: ["Festival/Événement culturel", "Instrument", "Groupe", "Genre musical"],
    correct: 2
  },
  {
    q: "Quel élément résume le mieux Alan Cavé ?",
    options: ["Chanteur, ancien leader de Zenglen puis Djakout Mizik", "Orchestre populaire du quartier de Bel-Air", "Rappeur haïtiano-américain connu pour ses collaborations konpa-hip-hop", "Groupe de konpa fondé par d'anciens membres de Kreyòl La"],
    correct: 0
  },
  {
    q: "Quelle est la nature de Coupé Cloué et l'Ensemble Select dans le paysage musical haïtien ?",
    options: ["Instrument", "Groupe", "Genre musical", "Festival/Événement culturel"],
    correct: 1
  },
  {
    q: "Où J Perry a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["Port-au-Prince", "Port-au-Prince / New York", "Port-au-Prince / diaspora", "Port-au-Prince (famille Duplessis)"],
    correct: 0
  },
  {
    q: "Twoubadou désigne principalement :",
    options: ["Genre musical", "Artiste solo", "Festival/Événement culturel", "Groupe"],
    correct: 0
  },
  {
    q: "Magnum Band se distingue principalement par :",
    options: ["Groupe de konpa populaire des années 1990-2000", "Orchestre de mini-jazz influent des années 1960-1970", "Musique festive liée aux célébrations agraires", "Groupe majeur du konpa des années 1980"],
    correct: 3
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Original Instrumental Sextet (OIS) ?",
    options: ["Carnaval réputé pour ses masques et costumes artisanaux", "Fusion du konpa avec le zouk antillais", "Groupe de konpa nouvelle génération", "Groupe précurseur du mini-jazz haïtien"],
    correct: 3
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Michael Brun ?",
    options: ["Port-au-Prince / international", "New York (diaspora)", "Port-au-Prince", "Miami (diaspora)"],
    correct: 0
  },
  {
    q: "Farah Juste provient principalement de quelle zone ?",
    options: ["Régions rurales", "Diaspora (New York)", "Pétion-Ville", "National (tradition rara)"],
    correct: 1
  },
  {
    q: "Qu'est-ce que Mizik angaje exactement ?",
    options: ["Artiste solo", "Groupe", "Genre musical", "Instrument"],
    correct: 2
  },
  {
    q: "Quelle est la période de référence pour Kanaval (Carnaval haïtien) ?",
    options: ["Fondé en 1998", "Fondé en 1980", "Tradition annuelle", "Fondé en 2010"],
    correct: 2
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Tabou Combo ?",
    options: ["Pétion-Ville / New York", "Port-au-Prince (Hôtel Oloffson)", "Diaspora (New York/Miami)", "Port-au-Prince"],
    correct: 0
  },
  {
    q: "Qu'est-ce qui distingue Farah Juste sur le plan musical ou culturel ?",
    options: ["Chanteuse engagée connue pour ses textes politiques", "Groupe de konpa fondé par d'anciens membres de Kreyòl La", "Style de konpa rapide et énergique pour la danse", "Carnaval d'été célèbre dans le Nord d'Haïti"],
    correct: 0
  },
  {
    q: "Quel lieu géographique est lié à Djakout Mizik ?",
    options: ["National (surtout zones rurales)", "National (surtout rara)", "Port-au-Prince", "Régions rurales"],
    correct: 2
  },
  {
    q: "Quel trait particulier caractérise Kai ?",
    options: ["Trio de konpa formé par Carlo, Richard et Mickaël", "Groupe de konpa formé par d'anciens membres de Nu Look et Kreyòl La", "Chanteur mêlant konpa, RnB et musique urbaine", "Groupe de konpa reconnu pour ses harmonies vocales"],
    correct: 1
  },
  {
    q: "Magnum Band est le plus étroitement associé(e) à quel lieu ?",
    options: ["Port-au-Prince / Cuba", "Port-au-Prince (Hôtel Oloffson)", "Port-au-Prince / New York", "Gonaïves / diaspora"],
    correct: 2
  },
  {
    q: "Quelle est la nature de Fabrice Rouzier dans le paysage musical haïtien ?",
    options: ["Artiste solo", "Instrument", "Groupe", "Festival/Événement culturel"],
    correct: 0
  },
  {
    q: "Dans quelle décennie Banza a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Fondé en 1993", "Fondé en 1975", "Époque coloniale", "Fondé en 2005"],
    correct: 2
  },
  {
    q: "Festival Racines provient principalement de quelle zone ?",
    options: ["National", "Gonaïves / diaspora", "National (Port-au-Prince, Jacmel...)", "Port-au-Prince / international"],
    correct: 0
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Rara ?",
    options: ["Fondé en 1993", "Tradition annuelle (juillet)", "Fondé en 1978", "Époque coloniale à aujourd'hui"],
    correct: 3
  },
  {
    q: "BIC correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Instrument", "Genre musical", "Groupe", "Artiste solo"],
    correct: 3
  },
  {
    q: "Dans quelle décennie Alan Cavé a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Depuis les années 1990", "Fondé en 1974", "Années 1940-1990", "Fondé en 2020"],
    correct: 0
  },
  {
    q: "Comment qualifierait-on Manno Charlemagne sur le plan musical ?",
    options: ["Artiste solo", "Festival/Événement culturel", "Instrument", "Genre musical"],
    correct: 0
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Manman tanbou ?",
    options: ["Cap-Haïtien", "National (surtout rara)", "National", "Régions rurales du Nord et du Sud"],
    correct: 2
  },
  {
    q: "Martha Jean-Claude correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Instrument", "Groupe", "Genre musical", "Artiste solo"],
    correct: 3
  },
  {
    q: "Comment définit-on Carimi dans la musique haïtienne ?",
    options: ["Instrument", "Genre musical", "Artiste solo", "Groupe"],
    correct: 3
  },
  {
    q: "Dans quelle catégorie classerait-on Mikaben ?",
    options: ["Festival/Événement culturel", "Groupe", "Instrument", "Artiste solo"],
    correct: 3
  },
  {
    q: "Kanaval (Carnaval haïtien) appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Tradition annuelle", "Fondé en 2020", "Depuis les années 1990", "Années 1940-1990"],
    correct: 0
  },
  {
    q: "D'où est originaire Toto Bissainthe ?",
    options: ["Port-au-Prince / diaspora", "Gonaïves / diaspora", "Diaspora (New York/Miami)", "Diaspora et Port-au-Prince"],
    correct: 0
  },
  {
    q: "Krezi Mizik est le plus étroitement associé(e) à quel lieu ?",
    options: ["Port-au-Prince / New York", "National (tradition rara)", "Port-au-Prince", "Pétion-Ville"],
    correct: 2
  },
  {
    q: "Comment reconnaît-on Tanbou parmi les autres éléments de la musique haïtienne ?",
    options: ["Groupe de mizik rasin dirigé par Richard Morse", "Fratrie fondatrice d'un grand orchestre de konpa", "Tambour central des musiques vodou et rara", "Groupe de konpa fondé par d'anciens membres de Kreyòl La"],
    correct: 2
  },
  {
    q: "Quelle est la période de référence pour Toto Bissainthe ?",
    options: ["Fondé en 1990", "Fondé en 1970", "Années 1960-1990", "Tradition annuelle (juillet)"],
    correct: 2
  },
  {
    q: "Quel lieu géographique est lié à Vaksin ?",
    options: ["National (tradition rara)", "Régions rurales du Nord et du Sud", "National (surtout rara)", "Diaspora et Port-au-Prince"],
    correct: 0
  },
  {
    q: "Kanaval de Jacmel est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Fondé en 2005", "Années 1950-1960", "Années 1990-2000", "Tradition annuelle"],
    correct: 3
  },
  {
    q: "Quel trait particulier caractérise Accordéon (twoubadou) ?",
    options: ["Fusion de rythmes vodou traditionnels et de rock/pop", "Musique de rue processionnelle jouée en période de Carême", "Instrument central des ensembles de twoubadou", "Pianiste et producteur de konpa influent"],
    correct: 2
  },
  {
    q: "Qu'est-ce que Méringue haïtienne exactement ?",
    options: ["Instrument", "Festival/Événement culturel", "Groupe", "Genre musical"],
    correct: 3
  },
  {
    q: "D'où est originaire Wyclef Jean ?",
    options: ["Port-au-Prince (Hôtel Oloffson)", "New Jersey (diaspora)", "Port-au-Prince / diaspora", "Pétion-Ville / New York"],
    correct: 1
  },
  {
    q: "Dans quelle décennie Krezi Mizik a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Fondé en 2020", "Fondé en 1974", "Fondé en 2016", "Fondé en 1968"],
    correct: 2
  },
  {
    q: "Quel trait particulier caractérise Mini-jazz ?",
    options: ["Groupe de konpa nouvelle génération", "Petits orchestres de guitares électriques inspirés du rock", "Autre nom sous lequel Djakout Mizik est parfois connu à ses débuts", "Orchestre populaire du quartier de Bel-Air"],
    correct: 1
  },
  {
    q: "Où Kai a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["New Jersey (diaspora)", "National (mouvement culturel)", "Diaspora (New York/Miami)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Rara ?",
    options: ["Fusion du konpa avec le zouk antillais", "Carnaval réputé pour ses masques et costumes artisanaux", "Musique de rue processionnelle jouée en période de Carême", "Musique festive liée aux célébrations agraires"],
    correct: 2
  },
  {
    q: "Quelle période correspond le mieux à Emeline Michel ?",
    options: ["Depuis les années 1990", "Années 1990-2000", "Depuis les années 1980", "Fondé en 1966"],
    correct: 2
  },
  {
    q: "Quelle est la nature de Harmonik dans le paysage musical haïtien ?",
    options: ["Groupe", "Instrument", "Artiste solo", "Genre musical"],
    correct: 0
  },
  {
    q: "Harmonik se distingue principalement par :",
    options: ["Groupe de konpa nouvelle génération", "Chansons engagées portant un message social ou politique", "Danse de salon d'origine haïtienne aux rythmes élégants", "Figure populaire du konpa avant de devenir président d'Haïti"],
    correct: 0
  },
  {
    q: "De quel type d'entité musicale s'agit-il pour Konpa Love ?",
    options: ["Festival/Événement culturel", "Artiste solo", "Genre musical", "Instrument"],
    correct: 2
  },
  {
    q: "Quelle est la nature de Klass dans le paysage musical haïtien ?",
    options: ["Instrument", "Festival/Événement culturel", "Genre musical", "Groupe"],
    correct: 3
  },
  {
    q: "Si l'on devait classer Vaksin, ce serait comme :",
    options: ["Instrument", "Artiste solo", "Genre musical", "Groupe"],
    correct: 0
  },
  {
    q: "Harmonik correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Instrument", "Festival/Événement culturel", "Groupe", "Genre musical"],
    correct: 2
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Farah Juste ?",
    options: ["Groupe de konpa reconnu pour ses ballades romantiques", "Chanteuse engagée connue pour ses textes politiques", "Fratrie fondatrice d'un grand orchestre de konpa", "Grande fête populaire précédant le Carême, rythmée par les orchestres de konpa"],
    correct: 1
  },
  {
    q: "Comment qualifierait-on Les Shleu Shleu sur le plan musical ?",
    options: ["Festival/Événement culturel", "Instrument", "Groupe", "Artiste solo"],
    correct: 2
  },
  {
    q: "Dans quelle décennie Kadans (Kadans Ranpa) a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Depuis les années 1990", "Fondé en 2018", "Depuis les années 1980", "Années 1950-1960"],
    correct: 3
  },
  {
    q: "Quelle région ou ville est le berceau de Kadans (Kadans Ranpa) ?",
    options: ["Jacmel", "Port-au-Prince et diaspora", "Port-au-Prince", "Gonaïves / diaspora"],
    correct: 2
  },
  {
    q: "À quelle époque associe-t-on Système Band ?",
    options: ["Fondé en 1965", "Années 1990-2000", "Fondé en 1982", "Fondé en 1970"],
    correct: 2
  },
  {
    q: "Nu Look se distingue principalement par :",
    options: ["Groupe précurseur du mini-jazz haïtien", "Ancêtre du konpa mêlant jazz et rythmes afro-caribéens", "Groupe de konpa new-generation à succès", "Chanteuse engagée connue pour ses textes politiques"],
    correct: 2
  },
  {
    q: "Quel lieu géographique est lié à Carimi ?",
    options: ["National (Port-au-Prince, Jacmel...)", "Diaspora (New York/Miami)", "Miami (diaspora)", "Régions rurales du Nord et du Sud"],
    correct: 2
  },
  {
    q: "Graj (güira) appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Années 1940-1990", "Depuis les années 1980", "Époque coloniale à aujourd'hui", "Tradition annuelle"],
    correct: 2
  },
  {
    q: "Banza appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Époque coloniale", "Début du XXe siècle", "Années 1970-1980", "Tradition annuelle"],
    correct: 0
  },
  {
    q: "Quel élément résume le mieux Vaksin ?",
    options: ["Orchestre populaire du quartier de Bel-Air", "Groupe de konpa populaire des années 1990-2000", "Trompette en bambou utilisée dans les groupes de rara", "Musique acoustique de guitare inspirée du son cubain"],
    correct: 2
  },
  {
    q: "Quelle est la nature de Mizik vodou dans le paysage musical haïtien ?",
    options: ["Genre musical", "Artiste solo", "Instrument", "Groupe"],
    correct: 0
  },
  {
    q: "Vayb se distingue principalement par :",
    options: ["Chanteur emblématique de konpa social et engagé", "Orchestre populaire du quartier de Bel-Air", "Festival mettant à l'honneur la mizik rasin", "Groupe de konpa contemporain très populaire chez les jeunes"],
    correct: 3
  },
  {
    q: "Dans quelle catégorie classerait-on Gaga ?",
    options: ["Genre musical", "Instrument", "Artiste solo", "Festival/Événement culturel"],
    correct: 0
  },
  {
    q: "Zouk haïtien se distingue principalement par :",
    options: ["Groupe de konpa formé par d'anciens membres de Nu Look et Kreyòl La", "Tambour central des musiques vodou et rara", "Groupe de konpa reconnu pour ses harmonies vocales", "Fusion du konpa avec le zouk antillais"],
    correct: 3
  },
  {
    q: "Coupé Cloué et l'Ensemble Select se distingue principalement par :",
    options: ["Hip-hop chanté en créole haïtien", "Orchestre fondateur du style konpa dit méringue-konpa", "Chanteur de konpa reconnu pour sa voix et ses ballades", "Groupe de konpa formé par d'anciens membres de Nu Look et Kreyòl La"],
    correct: 1
  },
  {
    q: "D'où est originaire Graj (güira) ?",
    options: ["Port-au-Prince / Cuba", "National", "Port-au-Prince (Hôtel Oloffson)", "Port-au-Prince et diaspora"],
    correct: 1
  },
  {
    q: "Dans quelle catégorie classerait-on Les Shleu Shleu ?",
    options: ["Instrument", "Groupe", "Artiste solo", "Festival/Événement culturel"],
    correct: 1
  },
  {
    q: "Quelle période correspond le mieux à Fabrice Rouzier ?",
    options: ["Fondé en 2018", "Depuis les années 1990", "Époque coloniale", "Fondé en 1965"],
    correct: 1
  },
  {
    q: "Quelle description correspond le mieux à Mizik rasin ?",
    options: ["Style de konpa rapide et énergique pour la danse", "Groupe de konpa réputé pour ses ballades", "DJ et producteur électro fusionnant konpa et musique électronique", "Fusion de rythmes vodou traditionnels et de rock/pop"],
    correct: 3
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux Nu Look ?",
    options: ["Groupe", "Instrument", "Artiste solo", "Genre musical"],
    correct: 0
  },
  {
    q: "Quel élément résume le mieux Magnum Band ?",
    options: ["Tambour central des musiques vodou et rara", "Groupe majeur du konpa des années 1980", "Groupe de konpa fondé par une famille de musiciens", "Orchestre historique du mini-jazz"],
    correct: 1
  },
  {
    q: "Quel lieu géographique est lié à Vayb ?",
    options: ["National (tradition rara)", "Miami (diaspora)", "Pétion-Ville / New York", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Où situe-t-on l'origine de Mizik angaje ?",
    options: ["National", "National (tradition rara)", "Jacmel", "Port-au-Prince / New York"],
    correct: 0
  },
  {
    q: "Où Magnum Band a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["National (mouvement culturel)", "Port-au-Prince / New York", "Port-au-Prince et diaspora", "National"],
    correct: 1
  },
  {
    q: "Quelle période correspond le mieux à Djakout Mizik (Fabrice Rouzier) ?",
    options: ["Années 1960-1990", "Années 1980-1990", "Fondé en 1970", "Depuis les années 1990"],
    correct: 3
  },
  {
    q: "Fèt Gede est le plus étroitement associé(e) à quel lieu ?",
    options: ["Pétion-Ville", "Port-au-Prince (famille Duplessis)", "Port-au-Prince (Hôtel Oloffson)", "National"],
    correct: 3
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Caribbean Sextet ?",
    options: ["Orchestre de mini-jazz influent des années 1960-1970", "Ancêtre du konpa mêlant jazz et rythmes afro-caribéens", "Trio de konpa formé par Carlo, Richard et Mickaël", "Musique acoustique de guitare inspirée du son cubain"],
    correct: 0
  },
  {
    q: "Gaga est le plus étroitement associé(e) à quel lieu ?",
    options: ["Région frontalière (Sud-Est)", "National (Port-au-Prince, Jacmel...)", "National (tradition rara)", "Régions rurales"],
    correct: 0
  },
  {
    q: "Comment définit-on Kai dans la musique haïtienne ?",
    options: ["Festival/Événement culturel", "Instrument", "Artiste solo", "Groupe"],
    correct: 3
  },
  {
    q: "Original H (originaire de Brooklyn) est le plus étroitement associé(e) à quel lieu ?",
    options: ["Diaspora (New York)", "National (tradition rara)", "Diaspora (New York/Miami)", "Miami (diaspora)"],
    correct: 0
  },
  {
    q: "Quelle caractéristique définit le mieux Vaksin ?",
    options: ["Orchestre régional connu dans le Nord d'Haïti", "Festival mettant à l'honneur la mizik rasin", "Groupe de konpa new-generation à succès", "Trompette en bambou utilisée dans les groupes de rara"],
    correct: 3
  },
  {
    q: "Quelle description correspond le mieux à T-Vice ?",
    options: ["Groupe de konpa fondé par une famille de musiciens", "Ancêtre du konpa mêlant jazz et rythmes afro-caribéens", "Groupe de konpa formé par d'anciens membres de Nu Look et Kreyòl La", "Hip-hop chanté en créole haïtien"],
    correct: 0
  },
  {
    q: "Quelle caractéristique définit le mieux BIC ?",
    options: ["Pionnier mondial du konpa avec des tubes internationaux", "Pionnière du folklore chanté haïtien", "Carnaval réputé pour ses masques et costumes artisanaux", "Rappeur pionnier du rap kreyòl"],
    correct: 3
  },
  {
    q: "Quelle description correspond le mieux à Accordéon (twoubadou) ?",
    options: ["Groupe précurseur du mini-jazz haïtien", "Instrument central des ensembles de twoubadou", "Musique acoustique de guitare inspirée du son cubain", "Rythme dansant à base de guitare, cuivres et percussions"],
    correct: 1
  },
  {
    q: "Qu'est-ce que Les Frères Dejean exactement ?",
    options: ["Artiste solo", "Instrument", "Groupe", "Genre musical"],
    correct: 2
  },
  {
    q: "Comment définit-on Volo Volo dans la musique haïtienne ?",
    options: ["Artiste solo", "Instrument", "Festival/Événement culturel", "Groupe"],
    correct: 3
  },
  {
    q: "Coupé Cloué et l'Ensemble Select appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Fondé en 1990", "Fondé en 1996", "Années 1950-1960", "Fondé en 1963"],
    correct: 3
  },
  {
    q: "Qu'est-ce que Vayb exactement ?",
    options: ["Artiste solo", "Festival/Événement culturel", "Groupe", "Genre musical"],
    correct: 2
  },
  {
    q: "Quel élément résume le mieux Sweet Micky (Michel Martelly) ?",
    options: ["Figure populaire du konpa avant de devenir président d'Haïti", "Orchestre de mini-jazz influent des années 1960-1970", "Chanteur de konpa contemporain", "Rappeur pionnier du rap kreyòl"],
    correct: 0
  },
  {
    q: "D'où est originaire Les Frères Dejean ?",
    options: ["Région frontalière (Sud-Est)", "Cap-Haïtien", "Port-au-Prince", "National"],
    correct: 2
  },
  {
    q: "Quelle caractéristique définit le mieux Boukman Eksperyans ?",
    options: ["Chanteuse engagée connue pour ses textes politiques", "Groupe pionnier de la mizik rasin", "Pianiste et arrangeur, cofondateur de Djakout Mizik", "Orchestre historique du mini-jazz"],
    correct: 1
  },
  {
    q: "Si l'on devait classer Skah Shah, ce serait comme :",
    options: ["Groupe", "Genre musical", "Festival/Événement culturel", "Artiste solo"],
    correct: 0
  },
  {
    q: "Où Gypsies de Pétion-Ville a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["National", "Pétion-Ville / New York", "Port-au-Prince", "Pétion-Ville"],
    correct: 3
  },
  {
    q: "Rap kreyòl appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Époque coloniale", "Années 1960-1990", "Années 1990-2000", "Fondé en 2010"],
    correct: 2
  },
  {
    q: "Quelle période correspond le mieux à Kesta B ?",
    options: ["Tradition annuelle (novembre)", "Fondé en 1963", "Fondé en 1962", "Depuis les années 2010"],
    correct: 3
  },
  {
    q: "Quelle caractéristique définit le mieux Tabou Combo ?",
    options: ["Groupe de konpa fondé par d'anciens membres de Kreyòl La", "Instrument central des ensembles de twoubadou", "Pionnier mondial du konpa avec des tubes internationaux", "Groupe majeur de mizik rasin engagée"],
    correct: 2
  },
  {
    q: "Où Boukan Ginen a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["National", "Port-au-Prince", "Gonaïves / diaspora", "Port-au-Prince / Cuba"],
    correct: 1
  },
  {
    q: "Dans quelle catégorie classerait-on Farah Juste ?",
    options: ["Groupe", "Genre musical", "Artiste solo", "Festival/Événement culturel"],
    correct: 2
  },
  {
    q: "Quel lieu géographique est lié à Les Shleu Shleu ?",
    options: ["Port-au-Prince / diaspora", "Port-au-Prince", "Port-au-Prince et diaspora", "National (mouvement culturel)"],
    correct: 1
  },
  {
    q: "À quelle époque associe-t-on Farah Juste ?",
    options: ["Fondé en 1978", "Fondé en 1962", "Depuis les années 1980", "Depuis les années 1990"],
    correct: 2
  },
  {
    q: "Manno Charlemagne est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Fondé en 1982", "Fondé en 1996", "Depuis les années 1990", "Depuis les années 1970"],
    correct: 3
  },
  {
    q: "Quelle région ou ville est le berceau de Farah Juste ?",
    options: ["Port-au-Prince (famille Duplessis)", "Pétion-Ville / New York", "Diaspora (New York)", "Port-au-Prince / Cuba"],
    correct: 2
  },
  {
    q: "Qu'est-ce qui distingue Djakout #1 sur le plan musical ou culturel ?",
    options: ["Musique de rue processionnelle jouée en période de Carême", "Groupe né en 2010 d'une scission avec Djakout Mizik", "Fratrie fondatrice d'un grand orchestre de konpa", "Groupe de konpa reconnu pour ses tubes dansants"],
    correct: 1
  },
  {
    q: "Quelle est la nature de Ibo Combo dans le paysage musical haïtien ?",
    options: ["Festival/Événement culturel", "Artiste solo", "Instrument", "Groupe"],
    correct: 3
  },
  {
    q: "Où situe-t-on l'origine de Kadans (Kadans Ranpa) ?",
    options: ["Port-au-Prince", "Jacmel", "New York (diaspora)", "Port-au-Prince / international"],
    correct: 0
  },
  {
    q: "Où situe-t-on l'origine de BIC ?",
    options: ["Régions rurales", "Port-au-Prince", "Port-au-Prince (Hôtel Oloffson)", "Gonaïves / diaspora"],
    correct: 1
  },
  {
    q: "Quelle est la nature de Farah Juste dans le paysage musical haïtien ?",
    options: ["Festival/Événement culturel", "Instrument", "Artiste solo", "Genre musical"],
    correct: 2
  },
  {
    q: "Quelle description correspond le mieux à Ti Manno ?",
    options: ["Groupe emblématique du konpa de la diaspora", "Groupe majeur de mizik rasin engagée", "Style de konpa rapide et énergique pour la danse", "Chanteur emblématique de konpa social et engagé"],
    correct: 3
  },
  {
    q: "Quel trait particulier caractérise Kanaval de Jacmel ?",
    options: ["Groupe de konpa fondé par d'anciens membres de Kreyòl La", "Danse de salon d'origine haïtienne aux rythmes élégants", "Grand orchestre de konpa des années 1970-1980", "Carnaval réputé pour ses masques et costumes artisanaux"],
    correct: 3
  },
  {
    q: "De quel type d'entité musicale s'agit-il pour Volo Volo ?",
    options: ["Genre musical", "Festival/Événement culturel", "Artiste solo", "Groupe"],
    correct: 3
  },
  {
    q: "Dans quelle décennie Belo a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Années 1950-1960", "Depuis les années 2000", "Fondé en 1974", "Fondé en 1965"],
    correct: 1
  },
  {
    q: "Michael Brun appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Fondé en 1962", "Depuis les années 1990", "Depuis les années 2010", "Depuis les années 1970"],
    correct: 2
  },
  {
    q: "Nu Look est le plus étroitement associé(e) à quel lieu ?",
    options: ["National (surtout rara)", "Port-au-Prince (Hôtel Oloffson)", "Port-au-Prince (famille Duplessis)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Les Frères Dejean ?",
    options: ["Port-au-Prince", "New York (diaspora)", "Région frontalière (Sud-Est)", "New Jersey (diaspora)"],
    correct: 0
  },
  {
    q: "Quel trait particulier caractérise Conque (lambi) ?",
    options: ["Groupe de konpa reconnu pour ses harmonies vocales", "Maracas traditionnelles utilisées dans plusieurs genres", "Coquillage utilisé comme instrument à vent rituel et festif", "Style fondateur du konpa moderne à tempo régulier"],
    correct: 2
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Kreyòl La ?",
    options: ["Fondé en 2007", "Époque coloniale à aujourd'hui", "Fondé en 1963", "Depuis les années 1980"],
    correct: 0
  },
  {
    q: "Quel élément résume le mieux Kreyòl La ?",
    options: ["Groupe de konpa issu de la scission de Djakout Mizik", "Rappeur haïtiano-américain connu pour ses collaborations konpa-hip-hop", "Groupe emblématique du konpa de la diaspora", "Pianiste et arrangeur, cofondateur de Djakout Mizik"],
    correct: 0
  },
  {
    q: "Zing Experience est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Années 1970-1980", "Depuis les années 1980", "Fondé en 1996", "Depuis les années 2000"],
    correct: 2
  },
  {
    q: "De quel type d'entité musicale s'agit-il pour Fèt Gede ?",
    options: ["Groupe", "Festival/Événement culturel", "Artiste solo", "Instrument"],
    correct: 1
  },
  {
    q: "Comment définit-on Caribbean Sextet dans la musique haïtienne ?",
    options: ["Festival/Événement culturel", "Genre musical", "Groupe", "Instrument"],
    correct: 2
  },
  {
    q: "Krezi Mizik correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Instrument", "Artiste solo", "Genre musical", "Groupe"],
    correct: 3
  },
  {
    q: "Qu'est-ce qui distingue Vayb sur le plan musical ou culturel ?",
    options: ["Célébration vodou en l'honneur des esprits des morts", "Ancêtre du konpa mêlant jazz et rythmes afro-caribéens", "Groupe de konpa contemporain très populaire chez les jeunes", "Orchestre de mini-jazz influent des années 1960-1970"],
    correct: 2
  },
  {
    q: "Dans quelle catégorie classerait-on Beethova Obas ?",
    options: ["Artiste solo", "Genre musical", "Festival/Événement culturel", "Instrument"],
    correct: 0
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Vaksin ?",
    options: ["Depuis les années 1970", "Époque coloniale à aujourd'hui", "Fondé en 1975", "Fondé en 1965"],
    correct: 1
  },
  {
    q: "Où situe-t-on l'origine de Mizik vodou ?",
    options: ["Régions rurales du Nord et du Sud", "Cap-Haïtien", "National (mouvement culturel)", "National"],
    correct: 3
  },
  {
    q: "Quel lieu géographique est lié à Farah Juste ?",
    options: ["Port-au-Prince / New York", "Pétion-Ville / New York", "Diaspora (New York)", "Pétion-Ville"],
    correct: 2
  },
  {
    q: "À quelle époque associe-t-on Manno Charlemagne ?",
    options: ["Années 1980-1990", "Depuis les années 1970", "Fondé en 1989", "Fondé en 1996"],
    correct: 1
  },
  {
    q: "Où Martha Jean-Claude a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["Cap-Haïtien", "Jacmel", "Port-au-Prince / Cuba", "National"],
    correct: 2
  },
  {
    q: "Djakout Mizik provient principalement de quelle zone ?",
    options: ["Port-au-Prince", "Pétion-Ville", "Port-au-Prince et diaspora", "Régions rurales"],
    correct: 0
  },
  {
    q: "Comment reconnaît-on Fèt Gede parmi les autres éléments de la musique haïtienne ?",
    options: ["Orchestre de mini-jazz influent des années 1960-1970", "Rappeur pionnier du rap kreyòl", "Groupe majeur du konpa des années 1980", "Célébration vodou en l'honneur des esprits des morts"],
    correct: 3
  },
  {
    q: "Quelle description correspond le mieux à Carimi ?",
    options: ["Groupe majeur de mizik rasin engagée", "Trio de konpa formé par Carlo, Richard et Mickaël", "Pionnier mondial du konpa avec des tubes internationaux", "Groupe pionnier de la mizik rasin"],
    correct: 1
  },
  {
    q: "Où Alan Cavé a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["Port-au-Prince / Cuba", "Jacmel", "New Jersey (diaspora)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Volo Volo ?",
    options: ["Maracas traditionnelles utilisées dans plusieurs genres", "Danse de salon d'origine haïtienne aux rythmes élégants", "Ancêtre du banjo d'origine afro-haïtienne", "Groupe de konpa réputé pour ses ballades"],
    correct: 3
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux Fèt Gede ?",
    options: ["Artiste solo", "Festival/Événement culturel", "Genre musical", "Instrument"],
    correct: 1
  },
  {
    q: "Où situe-t-on l'origine de Twoubadou ?",
    options: ["Pétion-Ville / New York", "National (tradition rara)", "Régions rurales du Nord et du Sud", "Diaspora (New York)"],
    correct: 2
  },
  {
    q: "Manno Charlemagne correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Artiste solo", "Groupe", "Festival/Événement culturel", "Instrument"],
    correct: 0
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux Mikaben ?",
    options: ["Artiste solo", "Groupe", "Festival/Événement culturel", "Instrument"],
    correct: 0
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Banza ?",
    options: ["Début du XXe siècle", "Années 1940-1990", "Époque coloniale", "Fondé en 2016"],
    correct: 2
  },
  {
    q: "Si l'on devait classer Les Shleu Shleu, ce serait comme :",
    options: ["Groupe", "Artiste solo", "Festival/Événement culturel", "Genre musical"],
    correct: 0
  },
  {
    q: "Qu'est-ce qui distingue Twoubadou sur le plan musical ou culturel ?",
    options: ["Chanteur, ancien leader de Zenglen puis Djakout Mizik", "Groupe majeur du konpa des années 1980", "Musique acoustique de guitare inspirée du son cubain", "Autre nom sous lequel Djakout Mizik est parfois connu à ses débuts"],
    correct: 2
  },
  {
    q: "Accordéon (twoubadou) appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Fondé en 2010", "Début du XXe siècle", "Fondé en 1974", "Fondé en 1989"],
    correct: 1
  },
  {
    q: "J Perry désigne principalement :",
    options: ["Artiste solo", "Instrument", "Festival/Événement culturel", "Genre musical"],
    correct: 0
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Coupé Cloué et l'Ensemble Select ?",
    options: ["Groupe emblématique du konpa de la diaspora", "Groupe de konpa reconnu pour ses ballades romantiques", "Orchestre fondateur du style konpa dit méringue-konpa", "Carnaval d'été célèbre dans le Nord d'Haïti"],
    correct: 2
  },
  {
    q: "Quelle est la nature de Volo Volo dans le paysage musical haïtien ?",
    options: ["Genre musical", "Festival/Événement culturel", "Groupe", "Artiste solo"],
    correct: 2
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux Bel Air Orchestra ?",
    options: ["Groupe", "Festival/Événement culturel", "Genre musical", "Artiste solo"],
    correct: 0
  },
  {
    q: "À quelle époque associe-t-on Banza ?",
    options: ["Fondé en 1989", "Années 1990-2000", "Fondé en 1978", "Époque coloniale"],
    correct: 3
  },
  {
    q: "Conque (lambi) correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Groupe", "Instrument", "Genre musical", "Festival/Événement culturel"],
    correct: 1
  },
  {
    q: "Comment qualifierait-on Wyclef Jean sur le plan musical ?",
    options: ["Instrument", "Genre musical", "Artiste solo", "Festival/Événement culturel"],
    correct: 2
  },
  {
    q: "Où situe-t-on l'origine de Kanaval de Jacmel ?",
    options: ["Port-au-Prince / New York", "National (tradition rara)", "Jacmel", "New York (diaspora)"],
    correct: 2
  },
  {
    q: "Quelle caractéristique définit le mieux Belo ?",
    options: ["Figure populaire du konpa avant de devenir président d'Haïti", "Chanteur fusionnant rock, reggae et konpa", "Orchestre historique du mini-jazz", "Instrument à percussion métallique gratté avec une baguette"],
    correct: 1
  },
  {
    q: "De quel type d'entité musicale s'agit-il pour Wyclef Jean ?",
    options: ["Genre musical", "Festival/Événement culturel", "Artiste solo", "Instrument"],
    correct: 2
  },
  {
    q: "Qu'est-ce qui distingue Roody Roodboy sur le plan musical ou culturel ?",
    options: ["Style de konpa rapide et énergique pour la danse", "DJ et producteur électro fusionnant konpa et musique électronique", "Figure populaire du konpa avant de devenir président d'Haïti", "Artiste populaire mêlant konpa et musique urbaine"],
    correct: 3
  },
  {
    q: "Quel lieu géographique est lié à Roody Roodboy ?",
    options: ["Port-au-Prince", "Régions rurales", "Jacmel", "National (Port-au-Prince, Jacmel...)"],
    correct: 0
  },
  {
    q: "Qu'est-ce qui distingue Système Band sur le plan musical ou culturel ?",
    options: ["Groupe de konpa fondé par d'anciens membres de Kreyòl La", "Groupe de konpa fondé par une famille de musiciens", "Grand orchestre de konpa toujours actif", "Groupe de konpa populaire des années 1990-2000"],
    correct: 2
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Zing Experience ?",
    options: ["Fondé en 1978", "Années 1940-1990", "Tradition annuelle (novembre)", "Fondé en 1996"],
    correct: 3
  },
  {
    q: "Dans quelle décennie Sweet Micky (Michel Martelly) a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Fondé en 1968", "Années 1950", "XIXe siècle", "Depuis les années 1980"],
    correct: 3
  },
  {
    q: "Coupé Cloué et l'Ensemble Select correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Artiste solo", "Groupe", "Genre musical", "Instrument"],
    correct: 1
  },
  {
    q: "Qu'est-ce qui distingue Djakout Mizik sur le plan musical ou culturel ?",
    options: ["Chanteuse surnommée « la Grande Dame de la chanson haïtienne »", "Le plus grand des tambours dans un ensemble rituel", "Groupe de konpa fondé par d'anciens membres de Kreyòl La", "Groupe de konpa reconnu pour ses tubes dansants"],
    correct: 3
  },
  {
    q: "Si l'on devait classer T-Vice, ce serait comme :",
    options: ["Genre musical", "Groupe", "Artiste solo", "Instrument"],
    correct: 1
  },
  {
    q: "Dans quelle catégorie classerait-on Kompa Dirèk ?",
    options: ["Artiste solo", "Groupe", "Genre musical", "Festival/Événement culturel"],
    correct: 2
  },
  {
    q: "Kanaval (Carnaval haïtien) est le plus étroitement associé(e) à quel lieu ?",
    options: ["Diaspora et Port-au-Prince", "National (mouvement culturel)", "Pétion-Ville", "National (Port-au-Prince, Jacmel...)"],
    correct: 3
  },
  {
    q: "Quel élément résume le mieux Vayb ?",
    options: ["DJ et producteur électro fusionnant konpa et musique électronique", "Chanteuse surnommée « la Grande Dame de la chanson haïtienne »", "Chanteur emblématique de konpa social et engagé", "Groupe de konpa contemporain très populaire chez les jeunes"],
    correct: 3
  },
  {
    q: "Quelle est la nature de Magnum Band dans le paysage musical haïtien ?",
    options: ["Genre musical", "Groupe", "Instrument", "Festival/Événement culturel"],
    correct: 1
  },
  {
    q: "Dans quelle décennie Konpa a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Années 1960-1970", "Fondé en 1982", "Années 1950-1960", "Début du XXe siècle"],
    correct: 2
  },
  {
    q: "Quelle région ou ville est le berceau de Mikaben ?",
    options: ["Diaspora (New York/Miami)", "Port-au-Prince (famille Duplessis)", "Pétion-Ville", "Port-au-Prince / diaspora"],
    correct: 3
  },
  {
    q: "Quel lieu géographique est lié à Original H (originaire de Brooklyn) ?",
    options: ["Port-au-Prince / New York", "Port-au-Prince (Hôtel Oloffson)", "Diaspora (New York)", "National (surtout rara)"],
    correct: 2
  },
  {
    q: "Carnaval des Fleurs (Cap-Haïtien) appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Fondé en 1968", "Tradition annuelle (juillet)", "Fondé en 1990", "Années 1960-1970"],
    correct: 1
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Toto Bissainthe ?",
    options: ["Fondé en 1965", "Époque coloniale", "Fondé en 2010", "Années 1960-1990"],
    correct: 3
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Manno Charlemagne ?",
    options: ["Depuis les années 1970", "Tradition annuelle (juillet)", "Fondé en 1982", "Fondé en 1996"],
    correct: 0
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Mizik vodou ?",
    options: ["Chanteuse et actrice, figure de la chanson racine", "Chants et percussions liés aux cérémonies religieuses vodou", "Carnaval réputé pour ses masques et costumes artisanaux", "Chanteur engagé, figure de la mizik angaje"],
    correct: 1
  },
  {
    q: "Quelle description correspond le mieux à Tcha tcha ?",
    options: ["Maracas traditionnelles utilisées dans plusieurs genres", "Chanteuse engagée connue pour ses textes politiques", "Musique festive liée aux célébrations agraires", "Groupe de konpa fondé par une famille de musiciens"],
    correct: 0
  },
  {
    q: "Michael Brun désigne principalement :",
    options: ["Groupe", "Instrument", "Artiste solo", "Festival/Événement culturel"],
    correct: 2
  },
  {
    q: "Quelle est la période de référence pour Kanaval de Jacmel ?",
    options: ["Tradition annuelle", "Années 1970-1980", "Années 1950-1960", "Fondé en 1980"],
    correct: 0
  },
  {
    q: "Où Djakout Mizik (Fabrice Rouzier) a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["Port-au-Prince (Hôtel Oloffson)", "National (Port-au-Prince, Jacmel...)", "Port-au-Prince", "New York (diaspora)"],
    correct: 2
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Carnaval des Fleurs (Cap-Haïtien) ?",
    options: ["Années 1950", "Fondé en 1982", "Tradition annuelle (juillet)", "Fondé en 2005"],
    correct: 2
  },
  {
    q: "Quel lieu géographique est lié à Mikaben ?",
    options: ["Pétion-Ville / New York", "Port-au-Prince / diaspora", "Jacmel", "Port-au-Prince"],
    correct: 1
  },
  {
    q: "Où situe-t-on l'origine de Manno Charlemagne ?",
    options: ["Port-au-Prince et diaspora", "Port-au-Prince / international", "Diaspora et Port-au-Prince", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Djakout Mizik appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Fondé en 1963", "Depuis les années 1990", "Fondé en 1990", "Fondé en 1970"],
    correct: 2
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Magnum Band ?",
    options: ["Chanteuse et actrice, figure de la chanson racine", "Pianiste et producteur de konpa influent", "Autre nom sous lequel Djakout Mizik est parfois connu à ses débuts", "Groupe majeur du konpa des années 1980"],
    correct: 3
  },
  {
    q: "Où Djakout #1 a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["Port-au-Prince / diaspora", "Port-au-Prince / Cuba", "Diaspora et Port-au-Prince", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Dans quelle décennie Kanaval de Jacmel a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Fondé en 2016", "Tradition annuelle", "Fondé en 1968", "Depuis les années 2000"],
    correct: 1
  },
  {
    q: "Original H (originaire de Brooklyn) désigne principalement :",
    options: ["Genre musical", "Instrument", "Artiste solo", "Festival/Événement culturel"],
    correct: 2
  },
  {
    q: "Kanaval (Carnaval haïtien) désigne principalement :",
    options: ["Festival/Événement culturel", "Groupe", "Genre musical", "Instrument"],
    correct: 0
  },
  {
    q: "À quelle époque associe-t-on Emeline Michel ?",
    options: ["Tradition annuelle (novembre)", "Fondé en 1996", "Années 1960-1970", "Depuis les années 1980"],
    correct: 3
  },
  {
    q: "Skah Shah est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Années 1960-1990", "Fondé en 1968", "Fondé en 1974", "Fondé en 2005"],
    correct: 2
  },
  {
    q: "D'où est originaire Djakout #1 ?",
    options: ["Port-au-Prince / international", "Jacmel", "National (surtout rara)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Quel lieu géographique est lié à Martha Jean-Claude ?",
    options: ["New York (diaspora)", "Port-au-Prince / Cuba", "Port-au-Prince / diaspora", "Port-au-Prince (Hôtel Oloffson)"],
    correct: 1
  },
  {
    q: "Si l'on devait classer Djakout Mizik, ce serait comme :",
    options: ["Genre musical", "Groupe", "Festival/Événement culturel", "Artiste solo"],
    correct: 1
  },
  {
    q: "Wyclef Jean se distingue principalement par :",
    options: ["Musique acoustique de guitare inspirée du son cubain", "Orchestre fondateur du style konpa dit méringue-konpa", "Rappeur et musicien, ex-membre des Fugees d'origine haïtienne", "Ancêtre du banjo d'origine afro-haïtienne"],
    correct: 2
  },
  {
    q: "Comment définit-on Graj (güira) dans la musique haïtienne ?",
    options: ["Artiste solo", "Instrument", "Festival/Événement culturel", "Groupe"],
    correct: 1
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Zing Experience ?",
    options: ["National (mouvement culturel)", "Port-au-Prince (Hôtel Oloffson)", "Port-au-Prince / international", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Comment qualifierait-on Conque (lambi) sur le plan musical ?",
    options: ["Festival/Événement culturel", "Groupe", "Artiste solo", "Instrument"],
    correct: 3
  },
  {
    q: "Comment reconnaît-on Boukan Ginen parmi les autres éléments de la musique haïtienne ?",
    options: ["Chanteur de konpa contemporain", "Chanteur emblématique de konpa social et engagé", "Groupe de konpa reconnu pour ses ballades romantiques", "Groupe majeur de mizik rasin engagée"],
    correct: 3
  },
  {
    q: "Quelle caractéristique définit le mieux Manman tanbou ?",
    options: ["Groupe majeur de mizik rasin engagée", "Le plus grand des tambours dans un ensemble rituel", "Chanteur de konpa contemporain", "Chanteuse et actrice, figure de la chanson racine"],
    correct: 1
  },
  {
    q: "À quelle époque associe-t-on Kanpèch ?",
    options: ["Fondé en 2005", "Fondé en 1975", "Depuis les années 1990", "Depuis les années 1970"],
    correct: 1
  },
  {
    q: "À quelle époque associe-t-on Harmonik ?",
    options: ["Fondé en 2010", "Tradition annuelle (juillet)", "Années 1950-1960", "Fondé en 1962"],
    correct: 0
  },
  {
    q: "D'où est originaire Farah Juste ?",
    options: ["Pétion-Ville / New York", "Port-au-Prince et diaspora", "Diaspora (New York)", "Port-au-Prince (Hôtel Oloffson)"],
    correct: 2
  },
  {
    q: "Quelle période correspond le mieux à Mikaben ?",
    options: ["Années 1980-1990", "Depuis les années 2000", "Fondé en 1975", "Fondé en 2010"],
    correct: 1
  },
  {
    q: "Zing Experience est le plus étroitement associé(e) à quel lieu ?",
    options: ["Miami (diaspora)", "Diaspora et Port-au-Prince", "Jacmel", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Quelle caractéristique définit le mieux Fèt Gede ?",
    options: ["Trompette en bambou utilisée dans les groupes de rara", "Célébration vodou en l'honneur des esprits des morts", "DJ et producteur électro fusionnant konpa et musique électronique", "Groupe emblématique du konpa de la diaspora"],
    correct: 1
  },
  {
    q: "D'où est originaire Carimi ?",
    options: ["National (surtout zones rurales)", "Miami (diaspora)", "National (Port-au-Prince, Jacmel...)", "Port-au-Prince / international"],
    correct: 1
  },
  {
    q: "Ibo Combo appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Fondé en 1965", "Début du XXe siècle", "Tradition annuelle", "Années 1980-1990"],
    correct: 0
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux Djakout Mizik (Fabrice Rouzier) ?",
    options: ["Artiste solo", "Instrument", "Groupe", "Festival/Événement culturel"],
    correct: 0
  },
  {
    q: "Quelle caractéristique définit le mieux Vayb ?",
    options: ["Groupe de konpa fondé par une famille de musiciens", "Grand orchestre de konpa des années 1970-1980", "Groupe de konpa populaire des années 1990-2000", "Groupe de konpa contemporain très populaire chez les jeunes"],
    correct: 3
  },
  {
    q: "Quelle description correspond le mieux à Beethova Obas ?",
    options: ["Auteur-compositeur de folk et chanson engagée", "Grande fête populaire précédant le Carême, rythmée par les orchestres de konpa", "Orchestre de mini-jazz influent des années 1960-1970", "Ancêtre du banjo d'origine afro-haïtienne"],
    correct: 0
  },
  {
    q: "À quelle époque associe-t-on Mikaben ?",
    options: ["Années 1960-1990", "Fondé en 1982", "Depuis les années 2000", "Début du XXe siècle"],
    correct: 2
  },
  {
    q: "Si l'on devait classer BIC, ce serait comme :",
    options: ["Artiste solo", "Groupe", "Genre musical", "Instrument"],
    correct: 0
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Zenglen ?",
    options: ["Régions rurales du Nord et du Sud", "Diaspora (New York)", "Port-au-Prince (Hôtel Oloffson)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Konpa Love se distingue principalement par :",
    options: ["Célébration vodou en l'honneur des esprits des morts", "Autre nom sous lequel Djakout Mizik est parfois connu à ses débuts", "Tambour central des musiques vodou et rara", "Style de konpa romantique et mélodique"],
    correct: 3
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux Manno Charlemagne ?",
    options: ["Instrument", "Genre musical", "Artiste solo", "Festival/Événement culturel"],
    correct: 2
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Accordéon (twoubadou) ?",
    options: ["Début du XXe siècle", "Fondé en 1966", "Fondé en 1975", "Fondé en 1993"],
    correct: 0
  },
  {
    q: "Harmonik est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Fondé en 2010", "Fondé en 2016", "Fondé en 1978", "Depuis les années 2000"],
    correct: 0
  },
  {
    q: "Comment définit-on Magnum Band dans la musique haïtienne ?",
    options: ["Instrument", "Artiste solo", "Genre musical", "Groupe"],
    correct: 3
  },
  {
    q: "Graj (güira) correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Festival/Événement culturel", "Artiste solo", "Instrument", "Genre musical"],
    correct: 2
  },
  {
    q: "Quelle description correspond le mieux à Mizik angaje ?",
    options: ["Musique festive liée aux célébrations agraires", "Chansons engagées portant un message social ou politique", "Groupe précurseur du mini-jazz haïtien", "Pianiste et producteur de konpa influent"],
    correct: 1
  },
  {
    q: "Quelle caractéristique définit le mieux Mizik angaje ?",
    options: ["Artiste populaire mêlant konpa et musique urbaine", "Groupe de konpa reconnu pour ses tubes dansants", "Chants et percussions liés aux cérémonies religieuses vodou", "Chansons engagées portant un message social ou politique"],
    correct: 3
  },
  {
    q: "Vaksin est le plus étroitement associé(e) à quel lieu ?",
    options: ["Diaspora (New York)", "National (tradition rara)", "National (Port-au-Prince, Jacmel...)", "Port-au-Prince et diaspora"],
    correct: 1
  },
  {
    q: "Boule zombi se distingue principalement par :",
    options: ["Musique de rue processionnelle jouée en période de Carême", "Ancêtre du konpa mêlant jazz et rythmes afro-caribéens", "Groupe de konpa reconnu pour ses harmonies vocales", "Style de konpa rapide et énergique pour la danse"],
    correct: 3
  },
  {
    q: "Dans quelle catégorie classerait-on Tcha tcha ?",
    options: ["Genre musical", "Groupe", "Instrument", "Festival/Événement culturel"],
    correct: 2
  },
  {
    q: "Quelle région ou ville est le berceau de Caribbean Sextet ?",
    options: ["Pétion-Ville / New York", "Port-au-Prince", "National", "Jacmel"],
    correct: 1
  },
  {
    q: "Festival Racines est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Depuis les années 1990", "Fondé en 1965", "XIXe siècle", "Années 1950-1960"],
    correct: 0
  },
  {
    q: "Dans quelle catégorie classerait-on Gypsies de Pétion-Ville ?",
    options: ["Genre musical", "Instrument", "Festival/Événement culturel", "Groupe"],
    correct: 3
  },
  {
    q: "Dans quelle catégorie classerait-on Ti Manno ?",
    options: ["Genre musical", "Groupe", "Instrument", "Artiste solo"],
    correct: 3
  },
  {
    q: "De quel type d'entité musicale s'agit-il pour Mizik vodou ?",
    options: ["Instrument", "Genre musical", "Groupe", "Artiste solo"],
    correct: 1
  },
  {
    q: "Quel élément résume le mieux Mizik angaje ?",
    options: ["Auteur-compositeur de folk et chanson engagée", "Groupe de konpa nouvelle génération", "Fratrie fondatrice d'un grand orchestre de konpa", "Chansons engagées portant un message social ou politique"],
    correct: 3
  },
  {
    q: "BIC est le plus étroitement associé(e) à quel lieu ?",
    options: ["Port-au-Prince / international", "Diaspora (New York)", "Diaspora (New York/Miami)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Qu'est-ce que Tabou Combo exactement ?",
    options: ["Genre musical", "Festival/Événement culturel", "Groupe", "Artiste solo"],
    correct: 2
  },
  {
    q: "Wyclef Jean correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Genre musical", "Artiste solo", "Groupe", "Festival/Événement culturel"],
    correct: 1
  },
  {
    q: "Quelle est la nature de Conque (lambi) dans le paysage musical haïtien ?",
    options: ["Groupe", "Instrument", "Genre musical", "Artiste solo"],
    correct: 1
  },
  {
    q: "Dans quelle décennie Vaksin a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Depuis les années 2010", "Années 1950", "Tradition annuelle (novembre)", "Époque coloniale à aujourd'hui"],
    correct: 3
  },
  {
    q: "À quelle époque associe-t-on Conque (lambi) ?",
    options: ["Époque coloniale à aujourd'hui", "Fondé en 1970", "Fondé en 1968", "Fondé en 1965"],
    correct: 0
  },
  {
    q: "Festival Racines appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Fondé en 1996", "Depuis les années 1990", "Fondé en 2007", "Fondé en 2020"],
    correct: 1
  },
  {
    q: "Quelle est la nature de Fèt Gede dans le paysage musical haïtien ?",
    options: ["Festival/Événement culturel", "Groupe", "Instrument", "Artiste solo"],
    correct: 0
  },
  {
    q: "Où situe-t-on l'origine de Nu Look ?",
    options: ["Port-au-Prince", "Région frontalière (Sud-Est)", "Jacmel", "New Jersey (diaspora)"],
    correct: 0
  },
  {
    q: "Harmonik désigne principalement :",
    options: ["Groupe", "Instrument", "Artiste solo", "Genre musical"],
    correct: 0
  },
  {
    q: "Qu'est-ce qui distingue Festival Racines sur le plan musical ou culturel ?",
    options: ["Groupe majeur de mizik rasin engagée", "Festival mettant à l'honneur la mizik rasin", "Groupe de konpa reconnu pour ses ballades romantiques", "Style de konpa romantique et mélodique"],
    correct: 1
  },
  {
    q: "À quelle époque associe-t-on Djakout Mizik (Fabrice Rouzier) ?",
    options: ["Depuis les années 1990", "Fondé en 1978", "XIXe siècle", "Fondé en 2005"],
    correct: 0
  },
  {
    q: "Quelle période correspond le mieux à Kompa Dirèk ?",
    options: ["Années 1950", "Fondé en 1996", "Depuis les années 1970", "Fondé en 2007"],
    correct: 0
  },
  {
    q: "Dans quelle catégorie classerait-on Original H (originaire de Brooklyn) ?",
    options: ["Artiste solo", "Festival/Événement culturel", "Instrument", "Groupe"],
    correct: 0
  },
  {
    q: "Dans quelle décennie Système Band a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Années 1970-1980", "Fondé en 1982", "Tradition annuelle", "Années 1980"],
    correct: 1
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux Les Shleu Shleu ?",
    options: ["Groupe", "Festival/Événement culturel", "Artiste solo", "Instrument"],
    correct: 0
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux Boukan Ginen ?",
    options: ["Artiste solo", "Groupe", "Festival/Événement culturel", "Genre musical"],
    correct: 1
  },
  {
    q: "Alan Cavé est le plus étroitement associé(e) à quel lieu ?",
    options: ["Port-au-Prince et diaspora", "Port-au-Prince", "Régions rurales", "National (surtout rara)"],
    correct: 1
  },
  {
    q: "Comment reconnaît-on Konpa Love parmi les autres éléments de la musique haïtienne ?",
    options: ["Style de konpa rapide et énergique pour la danse", "Groupe de konpa reconnu pour ses harmonies vocales", "Style de konpa romantique et mélodique", "Instrument central des ensembles de twoubadou"],
    correct: 2
  },
  {
    q: "Tabou Combo provient principalement de quelle zone ?",
    options: ["National (tradition rara)", "New Jersey (diaspora)", "Pétion-Ville / New York", "National (surtout zones rurales)"],
    correct: 2
  },
  {
    q: "Qu'est-ce que Gypsies de Pétion-Ville exactement ?",
    options: ["Artiste solo", "Festival/Événement culturel", "Genre musical", "Groupe"],
    correct: 3
  },
  {
    q: "Farah Juste désigne principalement :",
    options: ["Artiste solo", "Instrument", "Groupe", "Festival/Événement culturel"],
    correct: 0
  },
  {
    q: "De quel type d'entité musicale s'agit-il pour Emeline Michel ?",
    options: ["Genre musical", "Artiste solo", "Instrument", "Festival/Événement culturel"],
    correct: 1
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Twoubadou ?",
    options: ["Groupe majeur de mizik rasin engagée", "Hip-hop chanté en créole haïtien", "Groupe de konpa formé par d'anciens membres de Nu Look et Kreyòl La", "Musique acoustique de guitare inspirée du son cubain"],
    correct: 3
  },
  {
    q: "Quelle est la nature de BIC dans le paysage musical haïtien ?",
    options: ["Genre musical", "Artiste solo", "Instrument", "Groupe"],
    correct: 1
  },
  {
    q: "Quel élément résume le mieux Carnaval des Fleurs (Cap-Haïtien) ?",
    options: ["Fusion du konpa avec le zouk antillais", "Groupe de konpa reconnu pour ses tubes dansants", "Chanteur engagé, figure de la mizik angaje", "Carnaval d'été célèbre dans le Nord d'Haïti"],
    correct: 3
  },
  {
    q: "Conque (lambi) désigne principalement :",
    options: ["Instrument", "Festival/Événement culturel", "Groupe", "Genre musical"],
    correct: 0
  },
  {
    q: "Système Band se distingue principalement par :",
    options: ["Chanteur, ancien leader de Zenglen puis Djakout Mizik", "Coquillage utilisé comme instrument à vent rituel et festif", "Grand orchestre de konpa toujours actif", "Pionnière du folklore chanté haïtien"],
    correct: 2
  },
  {
    q: "D'où est originaire Original H (originaire de Brooklyn) ?",
    options: ["Diaspora (New York/Miami)", "National (surtout rara)", "New Jersey (diaspora)", "Diaspora (New York)"],
    correct: 3
  },
  {
    q: "Qu'est-ce que Martha Jean-Claude exactement ?",
    options: ["Groupe", "Instrument", "Festival/Événement culturel", "Artiste solo"],
    correct: 3
  },
  {
    q: "À quelle époque associe-t-on Fèt Gede ?",
    options: ["Années 1950-1960", "Tradition annuelle (novembre)", "Fondé en 2020", "Fondé en 1974"],
    correct: 1
  },
  {
    q: "Quelle caractéristique définit le mieux Kanaval de Jacmel ?",
    options: ["Pionnier mondial du konpa avec des tubes internationaux", "Chanteur fusionnant rock, reggae et konpa", "Carnaval réputé pour ses masques et costumes artisanaux", "Groupe de konpa reconnu pour ses harmonies vocales"],
    correct: 2
  },
  {
    q: "Qu'est-ce que Toto Bissainthe exactement ?",
    options: ["Artiste solo", "Festival/Événement culturel", "Groupe", "Instrument"],
    correct: 0
  },
  {
    q: "Quelle caractéristique définit le mieux Carnaval des Fleurs (Cap-Haïtien) ?",
    options: ["Carnaval d'été célèbre dans le Nord d'Haïti", "DJ et producteur électro fusionnant konpa et musique électronique", "Instrument central des ensembles de twoubadou", "Tambour central des musiques vodou et rara"],
    correct: 0
  },
  {
    q: "Quelle période correspond le mieux à Boukan Ginen ?",
    options: ["Années 1950-1960", "Fondé en 1989", "Fondé en 1963", "Fondé en 2020"],
    correct: 1
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Zenglen ?",
    options: ["Années 1940-1990", "Fondé en 1965", "Fondé en 2010", "Fondé en 1993"],
    correct: 3
  },
  {
    q: "Mini-jazz appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Depuis les années 2000", "Années 1960-1970", "Depuis les années 1980", "Fondé en 1970"],
    correct: 1
  },
  {
    q: "Quel lieu géographique est lié à Kai ?",
    options: ["Port-au-Prince", "Port-au-Prince / international", "National (Port-au-Prince, Jacmel...)", "Jacmel"],
    correct: 0
  },
  {
    q: "Djakout Mizik se distingue principalement par :",
    options: ["Groupe de konpa reconnu pour ses tubes dansants", "Pianiste et producteur de konpa influent", "Carnaval réputé pour ses masques et costumes artisanaux", "Chanteur, ancien leader de Zenglen puis Djakout Mizik"],
    correct: 0
  },
  {
    q: "Si l'on devait classer Roody Roodboy, ce serait comme :",
    options: ["Genre musical", "Artiste solo", "Festival/Événement culturel", "Groupe"],
    correct: 1
  },
  {
    q: "Quelle est la période de référence pour Kesta B ?",
    options: ["Fondé en 2020", "Depuis les années 2010", "Époque coloniale à aujourd'hui", "Fondé en 2007"],
    correct: 1
  },
  {
    q: "D'où est originaire Vayb ?",
    options: ["Diaspora et Port-au-Prince", "Régions rurales du Nord et du Sud", "Diaspora (New York)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Original H (originaire de Brooklyn) provient principalement de quelle zone ?",
    options: ["National (Port-au-Prince, Jacmel...)", "Jacmel", "New Jersey (diaspora)", "Diaspora (New York)"],
    correct: 3
  },
  {
    q: "Zouk haïtien désigne principalement :",
    options: ["Artiste solo", "Groupe", "Genre musical", "Instrument"],
    correct: 2
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Ibo Combo ?",
    options: ["Années 1940-1990", "Tradition annuelle (juillet)", "Fondé en 1965", "Depuis les années 1980"],
    correct: 2
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Bel Air Orchestra ?",
    options: ["Chanteur engagé, figure de la mizik angaje", "Orchestre populaire du quartier de Bel-Air", "Groupe pionnier de la mizik rasin", "Chanteur emblématique de konpa social et engagé"],
    correct: 1
  },
  {
    q: "Où T-Vice a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["Port-au-Prince (famille Duplessis)", "Cap-Haïtien", "Gonaïves / diaspora", "Miami (diaspora)"],
    correct: 0
  },
  {
    q: "Quelle description correspond le mieux à Graj (güira) ?",
    options: ["Orchestre historique du mini-jazz", "Instrument à percussion métallique gratté avec une baguette", "Chanteur fusionnant rock, reggae et konpa", "Célébration vodou en l'honneur des esprits des morts"],
    correct: 1
  },
  {
    q: "Comment définit-on Zenglen dans la musique haïtienne ?",
    options: ["Artiste solo", "Genre musical", "Festival/Événement culturel", "Groupe"],
    correct: 3
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux Michael Brun ?",
    options: ["Artiste solo", "Festival/Événement culturel", "Groupe", "Instrument"],
    correct: 0
  },
  {
    q: "Où Zenglen a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["National (Port-au-Prince, Jacmel...)", "Port-au-Prince", "Diaspora et Port-au-Prince", "Port-au-Prince / New York"],
    correct: 1
  },
  {
    q: "Comment qualifierait-on Mizik vodou sur le plan musical ?",
    options: ["Artiste solo", "Instrument", "Genre musical", "Festival/Événement culturel"],
    correct: 2
  },
  {
    q: "Quel lieu géographique est lié à Zouk haïtien ?",
    options: ["National (surtout zones rurales)", "Pétion-Ville / New York", "Régions rurales du Nord et du Sud", "Diaspora (New York/Miami)"],
    correct: 3
  },
  {
    q: "Si l'on devait classer Kanpèch, ce serait comme :",
    options: ["Genre musical", "Groupe", "Instrument", "Artiste solo"],
    correct: 1
  },
  {
    q: "Quelle région ou ville est le berceau de Accordéon (twoubadou) ?",
    options: ["Gonaïves / diaspora", "Pétion-Ville", "Pétion-Ville / New York", "Régions rurales"],
    correct: 3
  },
  {
    q: "D'où est originaire RAM ?",
    options: ["Région frontalière (Sud-Est)", "Port-au-Prince (Hôtel Oloffson)", "Diaspora et Port-au-Prince", "Port-au-Prince / international"],
    correct: 1
  },
  {
    q: "Michael Brun correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Festival/Événement culturel", "Artiste solo", "Groupe", "Instrument"],
    correct: 1
  },
  {
    q: "Mizik angaje est le plus étroitement associé(e) à quel lieu ?",
    options: ["Jacmel", "Régions rurales", "National", "Diaspora (New York)"],
    correct: 2
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Fabrice Rouzier ?",
    options: ["Fondé en 1966", "Depuis les années 1990", "Années 1980", "Fondé en 1998"],
    correct: 1
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Carimi ?",
    options: ["Gonaïves / diaspora", "National", "Miami (diaspora)", "Région frontalière (Sud-Est)"],
    correct: 2
  },
  {
    q: "Quelle région ou ville est le berceau de Boukan Ginen ?",
    options: ["Régions rurales", "Port-au-Prince (Hôtel Oloffson)", "Région frontalière (Sud-Est)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Gypsies de Pétion-Ville ?",
    options: ["Chanteuse et actrice, figure de la chanson racine", "DJ et producteur électro fusionnant konpa et musique électronique", "Grand orchestre de konpa des années 1970-1980", "Grande fête populaire précédant le Carême, rythmée par les orchestres de konpa"],
    correct: 2
  },
  {
    q: "Quel élément résume le mieux Système Band ?",
    options: ["Orchestre fondateur du style konpa dit méringue-konpa", "Danse de salon d'origine haïtienne aux rythmes élégants", "Grand orchestre de konpa toujours actif", "Orchestre régional connu dans le Nord d'Haïti"],
    correct: 2
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux Toto Bissainthe ?",
    options: ["Genre musical", "Groupe", "Artiste solo", "Instrument"],
    correct: 2
  },
  {
    q: "De quel type d'entité musicale s'agit-il pour Les Shleu Shleu ?",
    options: ["Festival/Événement culturel", "Artiste solo", "Groupe", "Genre musical"],
    correct: 2
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Roody Roodboy ?",
    options: ["Fondé en 1974", "Années 1960-1990", "Années 1990-2000", "Depuis les années 2010"],
    correct: 3
  },
  {
    q: "D'où est originaire Konpa ?",
    options: ["Port-au-Prince", "Port-au-Prince (famille Duplessis)", "Port-au-Prince / international", "Jacmel"],
    correct: 0
  },
  {
    q: "Qu'est-ce que Manno Charlemagne exactement ?",
    options: ["Groupe", "Genre musical", "Instrument", "Artiste solo"],
    correct: 3
  },
  {
    q: "Zouk haïtien est le plus étroitement associé(e) à quel lieu ?",
    options: ["Cap-Haïtien", "New Jersey (diaspora)", "National (mouvement culturel)", "Diaspora (New York/Miami)"],
    correct: 3
  },
  {
    q: "Comment qualifierait-on Klass sur le plan musical ?",
    options: ["Artiste solo", "Groupe", "Instrument", "Genre musical"],
    correct: 1
  },
  {
    q: "Où situe-t-on l'origine de Zing Experience ?",
    options: ["Port-au-Prince / New York", "Port-au-Prince", "Port-au-Prince (famille Duplessis)", "Région frontalière (Sud-Est)"],
    correct: 1
  },
  {
    q: "Quelle région ou ville est le berceau de BIC ?",
    options: ["Diaspora (New York)", "Régions rurales du Nord et du Sud", "Port-au-Prince", "Port-au-Prince / diaspora"],
    correct: 2
  },
  {
    q: "D'où est originaire Boukan Ginen ?",
    options: ["Diaspora (New York/Miami)", "Diaspora et Port-au-Prince", "National (tradition rara)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "D'où est originaire Zenglen ?",
    options: ["National (surtout rara)", "Port-au-Prince", "National", "Pétion-Ville / New York"],
    correct: 1
  },
  {
    q: "D'où est originaire BIC ?",
    options: ["Port-au-Prince", "Régions rurales", "Port-au-Prince / New York", "National (mouvement culturel)"],
    correct: 0
  },
  {
    q: "Fabrice Rouzier provient principalement de quelle zone ?",
    options: ["Port-au-Prince / diaspora", "Miami (diaspora)", "Diaspora (New York/Miami)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Où Kesta B a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["Port-au-Prince / international", "National (surtout rara)", "Port-au-Prince", "National (Port-au-Prince, Jacmel...)"],
    correct: 2
  },
  {
    q: "Si l'on devait classer Michael Brun, ce serait comme :",
    options: ["Genre musical", "Instrument", "Groupe", "Artiste solo"],
    correct: 3
  },
  {
    q: "Comment qualifierait-on Bel Air Orchestra sur le plan musical ?",
    options: ["Genre musical", "Instrument", "Festival/Événement culturel", "Groupe"],
    correct: 3
  },
  {
    q: "Qu'est-ce que Konpa exactement ?",
    options: ["Artiste solo", "Genre musical", "Groupe", "Festival/Événement culturel"],
    correct: 1
  },
  {
    q: "Où situe-t-on l'origine de Djakout Mizik ?",
    options: ["Port-au-Prince", "Pétion-Ville / New York", "Cap-Haïtien", "National (surtout zones rurales)"],
    correct: 0
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Méringue haïtienne ?",
    options: ["Port-au-Prince / international", "New York (diaspora)", "Port-au-Prince", "Diaspora (New York/Miami)"],
    correct: 2
  },
  {
    q: "Festival Racines se distingue principalement par :",
    options: ["Groupe de konpa formé par d'anciens membres de Nu Look et Kreyòl La", "Danse de salon d'origine haïtienne aux rythmes élégants", "Chanteur emblématique de konpa social et engagé", "Festival mettant à l'honneur la mizik rasin"],
    correct: 3
  },
  {
    q: "Comment définit-on Rara dans la musique haïtienne ?",
    options: ["Genre musical", "Artiste solo", "Festival/Événement culturel", "Groupe"],
    correct: 0
  },
  {
    q: "Où Sweet Micky (Michel Martelly) a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["Port-au-Prince (famille Duplessis)", "Port-au-Prince", "National (tradition rara)", "Port-au-Prince et diaspora"],
    correct: 1
  },
  {
    q: "Quelle caractéristique définit le mieux Konpa Love ?",
    options: ["Chanteur emblématique de konpa social et engagé", "Groupe pionnier de la mizik rasin", "Pianiste et producteur de konpa influent", "Style de konpa romantique et mélodique"],
    correct: 3
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Vaksin ?",
    options: ["National (tradition rara)", "Miami (diaspora)", "Diaspora (New York/Miami)", "National (mouvement culturel)"],
    correct: 0
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Kreyòl La ?",
    options: ["Orchestre de mini-jazz influent des années 1960-1970", "Chanteuse et actrice, figure de la chanson racine", "Groupe de konpa issu de la scission de Djakout Mizik", "Chanteur mêlant konpa, RnB et musique urbaine"],
    correct: 2
  },
  {
    q: "Alan Cavé appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Années 1960-1990", "Fondé en 2007", "Fondé en 1996", "Depuis les années 1990"],
    correct: 3
  },
  {
    q: "Kanpèch est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Fondé en 2010", "Années 1990-2000", "Depuis les années 1970", "Fondé en 1975"],
    correct: 3
  },
  {
    q: "Dans quelle catégorie classerait-on Alan Cavé ?",
    options: ["Genre musical", "Groupe", "Instrument", "Artiste solo"],
    correct: 3
  },
  {
    q: "Kompa Dirèk se distingue principalement par :",
    options: ["Orchestre de mini-jazz influent des années 1960-1970", "Style fondateur du konpa moderne à tempo régulier", "Groupe de konpa reconnu pour ses tubes dansants", "Coquillage utilisé comme instrument à vent rituel et festif"],
    correct: 1
  },
  {
    q: "Manman tanbou provient principalement de quelle zone ?",
    options: ["New York (diaspora)", "Diaspora et Port-au-Prince", "Régions rurales du Nord et du Sud", "National"],
    correct: 3
  },
  {
    q: "Quelle période correspond le mieux à Kanaval de Jacmel ?",
    options: ["Début du XXe siècle", "Années 1950", "Fondé en 1962", "Tradition annuelle"],
    correct: 3
  },
  {
    q: "Quelle description correspond le mieux à Fèt Gede ?",
    options: ["Orchestre populaire du quartier de Bel-Air", "Instrument à percussion métallique gratté avec une baguette", "Grand orchestre de konpa toujours actif", "Célébration vodou en l'honneur des esprits des morts"],
    correct: 3
  },
  {
    q: "Qu'est-ce qui distingue Kanaval de Jacmel sur le plan musical ou culturel ?",
    options: ["Carnaval réputé pour ses masques et costumes artisanaux", "Grand orchestre de konpa des années 1970-1980", "Rythme dansant à base de guitare, cuivres et percussions", "Chanteur emblématique de konpa social et engagé"],
    correct: 0
  },
  {
    q: "Gaga est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Depuis les années 2000", "Depuis les années 1970", "Époque coloniale à aujourd'hui", "Depuis les années 1990"],
    correct: 2
  },
  {
    q: "Klass désigne principalement :",
    options: ["Genre musical", "Festival/Événement culturel", "Artiste solo", "Groupe"],
    correct: 3
  },
  {
    q: "Quelle est la période de référence pour Coupé Cloué et l'Ensemble Select ?",
    options: ["Depuis les années 1990", "Fondé en 1996", "Fondé en 1963", "Années 1970-1980"],
    correct: 2
  },
  {
    q: "Si l'on devait classer Zing Experience, ce serait comme :",
    options: ["Festival/Événement culturel", "Groupe", "Instrument", "Genre musical"],
    correct: 1
  },
  {
    q: "Où Fèt Gede a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["Port-au-Prince (Hôtel Oloffson)", "National", "Jacmel", "Diaspora et Port-au-Prince"],
    correct: 1
  },
  {
    q: "J Perry se distingue principalement par :",
    options: ["Chanteur mêlant konpa, RnB et musique urbaine", "Rappeur et musicien, ex-membre des Fugees d'origine haïtienne", "Groupe de konpa reconnu pour ses tubes dansants", "Chanteur de konpa contemporain"],
    correct: 0
  },
  {
    q: "À quelle époque associe-t-on Zouk haïtien ?",
    options: ["Années 1980-1990", "Fondé en 2007", "Fondé en 1982", "Fondé en 1974"],
    correct: 0
  },
  {
    q: "Belo désigne principalement :",
    options: ["Artiste solo", "Festival/Événement culturel", "Groupe", "Instrument"],
    correct: 0
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux Vaksin ?",
    options: ["Festival/Événement culturel", "Instrument", "Genre musical", "Groupe"],
    correct: 1
  },
  {
    q: "D'où est originaire Nu Look ?",
    options: ["Port-au-Prince (famille Duplessis)", "Régions rurales", "Port-au-Prince", "National (surtout rara)"],
    correct: 2
  },
  {
    q: "Quel lieu géographique est lié à Graj (güira) ?",
    options: ["Port-au-Prince / diaspora", "National", "National (mouvement culturel)", "Port-au-Prince (Hôtel Oloffson)"],
    correct: 1
  },
  {
    q: "Kesta B se distingue principalement par :",
    options: ["Autre nom sous lequel Djakout Mizik est parfois connu à ses débuts", "DJ et producteur électro fusionnant konpa et musique électronique", "Instrument à percussion métallique gratté avec une baguette", "Chanteur de konpa contemporain"],
    correct: 3
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Conque (lambi) ?",
    options: ["Port-au-Prince et diaspora", "Port-au-Prince / New York", "Port-au-Prince / international", "National (surtout rara)"],
    correct: 3
  },
  {
    q: "Si l'on devait classer Original Instrumental Sextet (OIS), ce serait comme :",
    options: ["Instrument", "Artiste solo", "Groupe", "Genre musical"],
    correct: 2
  },
  {
    q: "Où Boukman Eksperyans a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["Port-au-Prince (famille Duplessis)", "Port-au-Prince", "National (Port-au-Prince, Jacmel...)", "Jacmel"],
    correct: 1
  },
  {
    q: "Quel élément résume le mieux Boule zombi ?",
    options: ["Style fondateur du konpa moderne à tempo régulier", "Style de konpa rapide et énergique pour la danse", "DJ et producteur électro fusionnant konpa et musique électronique", "Rappeur pionnier du rap kreyòl"],
    correct: 1
  },
  {
    q: "Quelle est la période de référence pour Belo ?",
    options: ["Époque coloniale", "Fondé en 1970", "Fondé en 2018", "Depuis les années 2000"],
    correct: 3
  },
  {
    q: "Dans quelle catégorie classerait-on Krezi Mizik ?",
    options: ["Artiste solo", "Festival/Événement culturel", "Genre musical", "Groupe"],
    correct: 3
  },
  {
    q: "Boule zombi appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Années 1970-1980", "Depuis les années 1980", "Années 1960-1990", "Depuis les années 2010"],
    correct: 0
  },
  {
    q: "Dans quelle catégorie classerait-on Roody Roodboy ?",
    options: ["Genre musical", "Instrument", "Festival/Événement culturel", "Artiste solo"],
    correct: 3
  },
  {
    q: "Quelle période correspond le mieux à Martha Jean-Claude ?",
    options: ["Années 1940-1990", "Tradition annuelle (juillet)", "Fondé en 2005", "Fondé en 1996"],
    correct: 0
  },
  {
    q: "D'où est originaire Roody Roodboy ?",
    options: ["National (surtout rara)", "Port-au-Prince", "Port-au-Prince / New York", "Gonaïves / diaspora"],
    correct: 1
  },
  {
    q: "Si l'on devait classer Harmonik, ce serait comme :",
    options: ["Groupe", "Artiste solo", "Instrument", "Genre musical"],
    correct: 0
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Graj (güira) ?",
    options: ["Époque coloniale à aujourd'hui", "XIXe siècle", "Fondé en 1962", "Années 1960-1970"],
    correct: 0
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Fèt Gede ?",
    options: ["Fondé en 2018", "Début du XXe siècle", "Tradition annuelle (novembre)", "Fondé en 1996"],
    correct: 2
  },
  {
    q: "Quelle caractéristique définit le mieux Rap kreyòl ?",
    options: ["Groupe pionnier de la mizik rasin", "Fusion de rythmes vodou traditionnels et de rock/pop", "DJ et producteur électro fusionnant konpa et musique électronique", "Hip-hop chanté en créole haïtien"],
    correct: 3
  },
  {
    q: "Dans quelle décennie Rap kreyòl a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Tradition annuelle (juillet)", "Années 1990-2000", "Fondé en 1963", "Années 1940-1990"],
    correct: 1
  },
  {
    q: "Dans quelle décennie Kanaval (Carnaval haïtien) a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Tradition annuelle", "Années 1980-1990", "Fondé en 1963", "Fondé en 2016"],
    correct: 0
  },
  {
    q: "Comment qualifierait-on Les Frères Dejean sur le plan musical ?",
    options: ["Genre musical", "Groupe", "Festival/Événement culturel", "Instrument"],
    correct: 1
  },
  {
    q: "Quelle est la période de référence pour Ti Manno ?",
    options: ["Années 1970-1980", "Fondé en 2016", "Fondé en 2018", "Fondé en 1998"],
    correct: 0
  },
  {
    q: "Quelle période correspond le mieux à Ibo Combo ?",
    options: ["Époque coloniale à aujourd'hui", "Fondé en 1965", "Fondé en 1998", "Fondé en 1996"],
    correct: 1
  },
  {
    q: "Où Carimi a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["National (tradition rara)", "New York (diaspora)", "Miami (diaspora)", "New Jersey (diaspora)"],
    correct: 2
  },
  {
    q: "Kanaval de Jacmel provient principalement de quelle zone ?",
    options: ["Jacmel", "National (surtout zones rurales)", "Pétion-Ville", "Diaspora (New York/Miami)"],
    correct: 0
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Les Shleu Shleu ?",
    options: ["Tradition annuelle", "Fondé en 1998", "Depuis les années 1990", "Fondé en 1963"],
    correct: 3
  },
  {
    q: "Quelle région ou ville est le berceau de Original Instrumental Sextet (OIS) ?",
    options: ["Région frontalière (Sud-Est)", "Gonaïves / diaspora", "National (surtout rara)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Kesta B ?",
    options: ["Années 1960-1990", "Depuis les années 2010", "Années 1940-1990", "Époque coloniale"],
    correct: 1
  },
  {
    q: "Où situe-t-on l'origine de Volo Volo ?",
    options: ["Diaspora (New York)", "Port-au-Prince et diaspora", "Port-au-Prince", "National"],
    correct: 2
  },
  {
    q: "Dans quelle catégorie classerait-on Konpa ?",
    options: ["Groupe", "Instrument", "Artiste solo", "Genre musical"],
    correct: 3
  },
  {
    q: "Où Belo a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["Jacmel", "Port-au-Prince", "Région frontalière (Sud-Est)", "National (Port-au-Prince, Jacmel...)"],
    correct: 1
  },
  {
    q: "Boukman Eksperyans est le plus étroitement associé(e) à quel lieu ?",
    options: ["Diaspora (New York/Miami)", "Région frontalière (Sud-Est)", "Cap-Haïtien", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Où situe-t-on l'origine de Wyclef Jean ?",
    options: ["Port-au-Prince / Cuba", "New Jersey (diaspora)", "Port-au-Prince / New York", "National (surtout zones rurales)"],
    correct: 1
  },
  {
    q: "Fèt Gede provient principalement de quelle zone ?",
    options: ["New Jersey (diaspora)", "Port-au-Prince / diaspora", "National", "Port-au-Prince et diaspora"],
    correct: 2
  },
  {
    q: "Quelle description correspond le mieux à Djakout #1 ?",
    options: ["Groupe né en 2010 d'une scission avec Djakout Mizik", "Chanteur mêlant konpa, RnB et musique urbaine", "Style fondateur du konpa moderne à tempo régulier", "Chanteur emblématique de konpa social et engagé"],
    correct: 0
  },
  {
    q: "Quel lieu géographique est lié à Djakout Mizik (Fabrice Rouzier) ?",
    options: ["Cap-Haïtien", "Diaspora (New York)", "Port-au-Prince", "National (surtout zones rurales)"],
    correct: 2
  },
  {
    q: "Où situe-t-on l'origine de Festival Racines ?",
    options: ["Pétion-Ville", "National", "Gonaïves / diaspora", "Port-au-Prince / New York"],
    correct: 1
  },
  {
    q: "Quelle caractéristique définit le mieux Zenglen ?",
    options: ["Maracas traditionnelles utilisées dans plusieurs genres", "Fusion du konpa avec le zouk antillais", "Groupe de konpa issu de la scission de Djakout Mizik", "Groupe de konpa populaire des années 1990-2000"],
    correct: 3
  },
  {
    q: "Comment reconnaît-on BIC parmi les autres éléments de la musique haïtienne ?",
    options: ["Grand orchestre de konpa toujours actif", "Rappeur pionnier du rap kreyòl", "Fusion du konpa avec le zouk antillais", "Style fondateur du konpa moderne à tempo régulier"],
    correct: 1
  },
  {
    q: "Quel trait particulier caractérise Zing Experience ?",
    options: ["Groupe de konpa nouvelle génération", "Groupe de konpa reconnu pour ses harmonies vocales", "Chanteur fusionnant rock, reggae et konpa", "Groupe précurseur du mini-jazz haïtien"],
    correct: 1
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Konpa ?",
    options: ["Ancêtre du banjo d'origine afro-haïtienne", "Groupe de konpa reconnu pour ses harmonies vocales", "Rythme dansant à base de guitare, cuivres et percussions", "Rappeur et musicien, ex-membre des Fugees d'origine haïtienne"],
    correct: 2
  },
  {
    q: "Quelle est la nature de Tcha tcha dans le paysage musical haïtien ?",
    options: ["Groupe", "Instrument", "Festival/Événement culturel", "Artiste solo"],
    correct: 1
  },
  {
    q: "Qu'est-ce que Gaga exactement ?",
    options: ["Groupe", "Artiste solo", "Genre musical", "Instrument"],
    correct: 2
  },
  {
    q: "Quel élément résume le mieux Festival Racines ?",
    options: ["Festival mettant à l'honneur la mizik rasin", "Orchestre historique du mini-jazz", "Fratrie fondatrice d'un grand orchestre de konpa", "Groupe pionnier de la mizik rasin"],
    correct: 0
  },
  {
    q: "Méringue haïtienne désigne principalement :",
    options: ["Groupe", "Artiste solo", "Festival/Événement culturel", "Genre musical"],
    correct: 3
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Boukman Eksperyans ?",
    options: ["Pianiste et producteur de konpa influent", "Groupe pionnier de la mizik rasin", "Fusion de rythmes vodou traditionnels et de rock/pop", "Pianiste et arrangeur, cofondateur de Djakout Mizik"],
    correct: 1
  },
  {
    q: "Quelle période correspond le mieux à Krezi Mizik ?",
    options: ["Fondé en 2016", "Fondé en 2007", "Tradition annuelle", "Fondé en 1965"],
    correct: 0
  },
  {
    q: "Qu'est-ce qui distingue Kai sur le plan musical ou culturel ?",
    options: ["Rappeur pionnier du rap kreyòl", "Groupe de konpa formé par d'anciens membres de Nu Look et Kreyòl La", "Groupe précurseur du mini-jazz haïtien", "Hip-hop chanté en créole haïtien"],
    correct: 1
  },
  {
    q: "J Perry est le plus étroitement associé(e) à quel lieu ?",
    options: ["Gonaïves / diaspora", "National (mouvement culturel)", "Port-au-Prince", "Port-au-Prince (famille Duplessis)"],
    correct: 2
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Farah Juste ?",
    options: ["Années 1980", "Fondé en 1980", "Depuis les années 1980", "Tradition annuelle (novembre)"],
    correct: 2
  },
  {
    q: "Quelle caractéristique définit le mieux Mini-jazz ?",
    options: ["Groupe de konpa reconnu pour ses tubes dansants", "Ancêtre du banjo d'origine afro-haïtienne", "Le plus grand des tambours dans un ensemble rituel", "Petits orchestres de guitares électriques inspirés du rock"],
    correct: 3
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Michael Brun ?",
    options: ["Fondé en 1996", "Années 1960-1970", "Fondé en 2005", "Depuis les années 2010"],
    correct: 3
  },
  {
    q: "Comment reconnaît-on Carimi parmi les autres éléments de la musique haïtienne ?",
    options: ["Chanteur engagé, figure de la mizik angaje", "Trio de konpa formé par Carlo, Richard et Mickaël", "Auteur-compositeur de folk et chanson engagée", "Chansons engagées portant un message social ou politique"],
    correct: 1
  },
  {
    q: "Quelle description correspond le mieux à Méringue haïtienne ?",
    options: ["Orchestre régional connu dans le Nord d'Haïti", "Danse de salon d'origine haïtienne aux rythmes élégants", "Orchestre historique du mini-jazz", "Chanteur, ancien leader de Zenglen puis Djakout Mizik"],
    correct: 1
  },
  {
    q: "Quel élément résume le mieux Konpa ?",
    options: ["Groupe de mizik rasin dirigé par Richard Morse", "Groupe de konpa issu de la scission de Djakout Mizik", "Trio de konpa formé par Carlo, Richard et Mickaël", "Rythme dansant à base de guitare, cuivres et percussions"],
    correct: 3
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Ti Manno ?",
    options: ["Chanteur de konpa reconnu pour sa voix et ses ballades", "Pionnier du mini-jazz haïtien", "Rappeur et musicien, ex-membre des Fugees d'origine haïtienne", "Chanteur emblématique de konpa social et engagé"],
    correct: 3
  },
  {
    q: "Volo Volo correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Festival/Événement culturel", "Genre musical", "Artiste solo", "Groupe"],
    correct: 3
  },
  {
    q: "Quelle est la période de référence pour Rara ?",
    options: ["Années 1980-1990", "Époque coloniale à aujourd'hui", "Années 1980", "Fondé en 1974"],
    correct: 1
  },
  {
    q: "Quelle période correspond le mieux à Kanaval (Carnaval haïtien) ?",
    options: ["Tradition annuelle (novembre)", "Fondé en 1962", "Tradition annuelle", "Fondé en 1963"],
    correct: 2
  },
  {
    q: "Quelle région ou ville est le berceau de Bel Air Orchestra ?",
    options: ["Régions rurales du Nord et du Sud", "Port-au-Prince", "Diaspora (New York/Miami)", "Gonaïves / diaspora"],
    correct: 1
  },
  {
    q: "Quelle période correspond le mieux à Mizik vodou ?",
    options: ["Depuis les années 1990", "Époque coloniale à aujourd'hui", "Années 1990-2000", "Fondé en 2018"],
    correct: 1
  },
  {
    q: "Quelle caractéristique définit le mieux Boule zombi ?",
    options: ["Orchestre de mini-jazz influent des années 1960-1970", "Grand orchestre de konpa des années 1970-1980", "Style de konpa rapide et énergique pour la danse", "Chanteur, ancien leader de Zenglen puis Djakout Mizik"],
    correct: 2
  },
  {
    q: "Les Frères Dejean se distingue principalement par :",
    options: ["Fratrie fondatrice d'un grand orchestre de konpa", "Chanteur mêlant konpa, RnB et musique urbaine", "Danse de salon d'origine haïtienne aux rythmes élégants", "Grande fête populaire précédant le Carême, rythmée par les orchestres de konpa"],
    correct: 0
  },
  {
    q: "Harmonik appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Fondé en 2010", "Depuis les années 2010", "Tradition annuelle (novembre)", "Fondé en 1998"],
    correct: 0
  },
  {
    q: "Dans quelle catégorie classerait-on Bel Air Orchestra ?",
    options: ["Instrument", "Genre musical", "Groupe", "Festival/Événement culturel"],
    correct: 2
  },
  {
    q: "Quelle est la période de référence pour Emeline Michel ?",
    options: ["Depuis les années 1980", "Tradition annuelle (juillet)", "Années 1960-1970", "Fondé en 1980"],
    correct: 0
  },
  {
    q: "À quelle époque associe-t-on Fabrice Rouzier ?",
    options: ["Fondé en 1963", "Fondé en 2016", "Depuis les années 1990", "Fondé en 1966"],
    correct: 2
  },
  {
    q: "Comment définit-on Mini-jazz dans la musique haïtienne ?",
    options: ["Artiste solo", "Festival/Événement culturel", "Genre musical", "Groupe"],
    correct: 2
  },
  {
    q: "Qu'est-ce que Bel Air Orchestra exactement ?",
    options: ["Groupe", "Genre musical", "Artiste solo", "Festival/Événement culturel"],
    correct: 0
  },
  {
    q: "Comment définit-on Tcha tcha dans la musique haïtienne ?",
    options: ["Instrument", "Groupe", "Genre musical", "Artiste solo"],
    correct: 0
  },
  {
    q: "Dans quelle catégorie classerait-on Harmonik ?",
    options: ["Artiste solo", "Genre musical", "Instrument", "Groupe"],
    correct: 3
  },
  {
    q: "Où situe-t-on l'origine de Kesta B ?",
    options: ["Port-au-Prince / New York", "Port-au-Prince", "Diaspora (New York)", "National (tradition rara)"],
    correct: 1
  },
  {
    q: "Où Original H (originaire de Brooklyn) a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["Diaspora (New York)", "National (surtout rara)", "Port-au-Prince (Hôtel Oloffson)", "Région frontalière (Sud-Est)"],
    correct: 0
  },
  {
    q: "Quel lieu géographique est lié à Nu Look ?",
    options: ["Pétion-Ville", "Diaspora (New York/Miami)", "Port-au-Prince", "Port-au-Prince / international"],
    correct: 2
  },
  {
    q: "Quel trait particulier caractérise Djakout Mizik (Fabrice Rouzier) ?",
    options: ["Grand orchestre de konpa des années 1970-1980", "Carnaval réputé pour ses masques et costumes artisanaux", "Pianiste et arrangeur, cofondateur de Djakout Mizik", "Groupe emblématique du konpa de la diaspora"],
    correct: 2
  },
  {
    q: "D'où est originaire Kesta B ?",
    options: ["Port-au-Prince / Cuba", "Port-au-Prince", "Pétion-Ville", "Gonaïves / diaspora"],
    correct: 1
  },
  {
    q: "Quelle est la période de référence pour Fèt Gede ?",
    options: ["Fondé en 1993", "Fondé en 2020", "Tradition annuelle (novembre)", "Fondé en 2010"],
    correct: 2
  },
  {
    q: "Quel trait particulier caractérise Kanaval (Carnaval haïtien) ?",
    options: ["Orchestre de mini-jazz influent des années 1960-1970", "Grande fête populaire précédant le Carême, rythmée par les orchestres de konpa", "Fratrie fondatrice d'un grand orchestre de konpa", "Tambour central des musiques vodou et rara"],
    correct: 1
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Farah Juste ?",
    options: ["Années 1970-1980", "Années 1960-1990", "Depuis les années 1980", "Années 1950"],
    correct: 2
  },
  {
    q: "De quel type d'entité musicale s'agit-il pour Beethova Obas ?",
    options: ["Artiste solo", "Festival/Événement culturel", "Genre musical", "Groupe"],
    correct: 0
  },
  {
    q: "Comment définit-on Carnaval des Fleurs (Cap-Haïtien) dans la musique haïtienne ?",
    options: ["Artiste solo", "Festival/Événement culturel", "Instrument", "Groupe"],
    correct: 1
  },
  {
    q: "Quelle est la nature de Boule zombi dans le paysage musical haïtien ?",
    options: ["Instrument", "Artiste solo", "Genre musical", "Festival/Événement culturel"],
    correct: 2
  },
  {
    q: "Banza correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Groupe", "Genre musical", "Artiste solo", "Instrument"],
    correct: 3
  },
  {
    q: "D'où est originaire Kai ?",
    options: ["Miami (diaspora)", "Pétion-Ville", "Port-au-Prince", "Diaspora et Port-au-Prince"],
    correct: 2
  },
  {
    q: "Toto Bissainthe se distingue principalement par :",
    options: ["Rappeur haïtiano-américain connu pour ses collaborations konpa-hip-hop", "Rythme dansant à base de guitare, cuivres et percussions", "Chanteur fusionnant rock, reggae et konpa", "Chanteuse et actrice, figure de la chanson racine"],
    correct: 3
  },
  {
    q: "Quelle période correspond le mieux à Original Instrumental Sextet (OIS) ?",
    options: ["Depuis les années 2010", "Fondé en 1975", "Fondé en 1962", "Fondé en 2007"],
    correct: 2
  },
  {
    q: "À quelle époque associe-t-on Manman tanbou ?",
    options: ["Époque coloniale à aujourd'hui", "Années 1990-2000", "Depuis les années 1980", "XIXe siècle"],
    correct: 0
  },
  {
    q: "Boukan Ginen correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Instrument", "Artiste solo", "Groupe", "Festival/Événement culturel"],
    correct: 2
  },
  {
    q: "À quelle époque associe-t-on Twoubadou ?",
    options: ["Fondé en 1968", "Début du XXe siècle", "Fondé en 1989", "Époque coloniale à aujourd'hui"],
    correct: 1
  },
  {
    q: "Comment définit-on Djakout #1 dans la musique haïtienne ?",
    options: ["Groupe", "Festival/Événement culturel", "Genre musical", "Artiste solo"],
    correct: 0
  },
  {
    q: "Comment définit-on T-Vice dans la musique haïtienne ?",
    options: ["Groupe", "Genre musical", "Artiste solo", "Festival/Événement culturel"],
    correct: 0
  },
  {
    q: "Comment qualifierait-on Mikaben sur le plan musical ?",
    options: ["Festival/Événement culturel", "Artiste solo", "Instrument", "Genre musical"],
    correct: 1
  },
  {
    q: "Si l'on devait classer Ibo Combo, ce serait comme :",
    options: ["Instrument", "Artiste solo", "Festival/Événement culturel", "Groupe"],
    correct: 3
  },
  {
    q: "Méringue haïtienne se distingue principalement par :",
    options: ["Danse de salon d'origine haïtienne aux rythmes élégants", "Chanteuse et actrice, figure de la chanson racine", "Rappeur et musicien, ex-membre des Fugees d'origine haïtienne", "Chants et percussions liés aux cérémonies religieuses vodou"],
    correct: 0
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Conque (lambi) ?",
    options: ["Rappeur et musicien, ex-membre des Fugees d'origine haïtienne", "Style fondateur du konpa moderne à tempo régulier", "Figure populaire du konpa avant de devenir président d'Haïti", "Coquillage utilisé comme instrument à vent rituel et festif"],
    correct: 3
  },
  {
    q: "Ti Manno désigne principalement :",
    options: ["Instrument", "Festival/Événement culturel", "Genre musical", "Artiste solo"],
    correct: 3
  },
  {
    q: "Qu'est-ce que Carnaval des Fleurs (Cap-Haïtien) exactement ?",
    options: ["Genre musical", "Festival/Événement culturel", "Groupe", "Artiste solo"],
    correct: 1
  },
  {
    q: "Qu'est-ce que Beethova Obas exactement ?",
    options: ["Festival/Événement culturel", "Genre musical", "Instrument", "Artiste solo"],
    correct: 3
  },
  {
    q: "Comment décrirait-on le style ou le rôle de BIC ?",
    options: ["Groupe de konpa nouvelle génération", "Groupe de konpa reconnu pour ses tubes dansants", "Rappeur pionnier du rap kreyòl", "Hip-hop chanté en créole haïtien"],
    correct: 2
  },
  {
    q: "Dans quelle catégorie classerait-on Emeline Michel ?",
    options: ["Genre musical", "Artiste solo", "Festival/Événement culturel", "Groupe"],
    correct: 1
  },
  {
    q: "Qu'est-ce qui distingue Graj (güira) sur le plan musical ou culturel ?",
    options: ["Rappeur haïtiano-américain connu pour ses collaborations konpa-hip-hop", "Orchestre populaire du quartier de Bel-Air", "Instrument à percussion métallique gratté avec une baguette", "Chanteur mêlant konpa, RnB et musique urbaine"],
    correct: 2
  },
  {
    q: "Quelle région ou ville est le berceau de Harmonik ?",
    options: ["National (Port-au-Prince, Jacmel...)", "Port-au-Prince", "Pétion-Ville / New York", "Régions rurales du Nord et du Sud"],
    correct: 1
  },
  {
    q: "Konpa correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Artiste solo", "Groupe", "Instrument", "Genre musical"],
    correct: 3
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Gaga ?",
    options: ["Diaspora (New York/Miami)", "National", "Région frontalière (Sud-Est)", "Port-au-Prince / diaspora"],
    correct: 2
  },
  {
    q: "Où situe-t-on l'origine de Harmonik ?",
    options: ["Régions rurales du Nord et du Sud", "Port-au-Prince / diaspora", "Port-au-Prince", "Port-au-Prince (famille Duplessis)"],
    correct: 2
  },
  {
    q: "Quelle est la nature de Gaga dans le paysage musical haïtien ?",
    options: ["Genre musical", "Artiste solo", "Instrument", "Festival/Événement culturel"],
    correct: 0
  },
  {
    q: "Rap kreyòl est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Années 1990-2000", "Époque coloniale à aujourd'hui", "Années 1940-1990", "Fondé en 1989"],
    correct: 0
  },
  {
    q: "D'où est originaire Harmonik ?",
    options: ["Pétion-Ville / New York", "Port-au-Prince", "Miami (diaspora)", "Port-au-Prince (famille Duplessis)"],
    correct: 1
  },
  {
    q: "Quelle région ou ville est le berceau de T-Vice ?",
    options: ["Régions rurales", "Port-au-Prince (famille Duplessis)", "Port-au-Prince / Cuba", "Port-au-Prince / New York"],
    correct: 1
  },
  {
    q: "Quelle est la période de référence pour Martha Jean-Claude ?",
    options: ["Années 1940-1990", "Fondé en 1990", "Depuis les années 1980", "Fondé en 1980"],
    correct: 0
  },
  {
    q: "D'où est originaire Original Instrumental Sextet (OIS) ?",
    options: ["Port-au-Prince", "Cap-Haïtien", "Port-au-Prince (famille Duplessis)", "Régions rurales"],
    correct: 0
  },
  {
    q: "Quel lieu géographique est lié à Kanaval de Jacmel ?",
    options: ["Jacmel", "National (tradition rara)", "National (mouvement culturel)", "Port-au-Prince (Hôtel Oloffson)"],
    correct: 0
  },
  {
    q: "Quelle est la période de référence pour Carnaval des Fleurs (Cap-Haïtien) ?",
    options: ["Tradition annuelle (juillet)", "Fondé en 2020", "Années 1970-1980", "Fondé en 1980"],
    correct: 0
  },
  {
    q: "Comment reconnaît-on Original H (originaire de Brooklyn) parmi les autres éléments de la musique haïtienne ?",
    options: ["Rappeur haïtiano-américain connu pour ses collaborations konpa-hip-hop", "Chanteur mêlant konpa, RnB et musique urbaine", "Carnaval d'été célèbre dans le Nord d'Haïti", "Chanteur de konpa reconnu pour sa voix et ses ballades"],
    correct: 0
  },
  {
    q: "Si l'on devait classer Nu Look, ce serait comme :",
    options: ["Instrument", "Groupe", "Festival/Événement culturel", "Artiste solo"],
    correct: 1
  },
  {
    q: "Où situe-t-on l'origine de Vayb ?",
    options: ["Port-au-Prince", "Miami (diaspora)", "Port-au-Prince / diaspora", "National (surtout rara)"],
    correct: 0
  },
  {
    q: "Accordéon (twoubadou) est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Années 1960-1990", "Fondé en 1963", "Début du XXe siècle", "Fondé en 2016"],
    correct: 2
  },
  {
    q: "Quel trait particulier caractérise Carimi ?",
    options: ["Groupe de konpa reconnu pour ses tubes dansants", "Trio de konpa formé par Carlo, Richard et Mickaël", "Groupe de konpa reconnu pour ses harmonies vocales", "Chanteur fusionnant rock, reggae et konpa"],
    correct: 1
  },
  {
    q: "Quel lieu géographique est lié à Toto Bissainthe ?",
    options: ["New Jersey (diaspora)", "New York (diaspora)", "Port-au-Prince / diaspora", "Miami (diaspora)"],
    correct: 2
  },
  {
    q: "Quelle description correspond le mieux à Gaga ?",
    options: ["Maracas traditionnelles utilisées dans plusieurs genres", "Groupe de konpa fondé par d'anciens membres de Kreyòl La", "Musique festive liée aux célébrations agraires", "Musique de rue processionnelle jouée en période de Carême"],
    correct: 2
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Tabou Combo ?",
    options: ["Époque coloniale", "Fondé en 1968", "Années 1980-1990", "Années 1990-2000"],
    correct: 1
  },
  {
    q: "D'où est originaire Djakout Mizik ?",
    options: ["Port-au-Prince", "New York (diaspora)", "Régions rurales", "Port-au-Prince / international"],
    correct: 0
  },
  {
    q: "Accordéon (twoubadou) provient principalement de quelle zone ?",
    options: ["Régions rurales du Nord et du Sud", "Cap-Haïtien", "New York (diaspora)", "Régions rurales"],
    correct: 3
  },
  {
    q: "Quelle caractéristique définit le mieux Gypsies de Pétion-Ville ?",
    options: ["Instrument à percussion métallique gratté avec une baguette", "Pionnier du mini-jazz haïtien", "Ancêtre du banjo d'origine afro-haïtienne", "Grand orchestre de konpa des années 1970-1980"],
    correct: 3
  },
  {
    q: "Kai est le plus étroitement associé(e) à quel lieu ?",
    options: ["Port-au-Prince (famille Duplessis)", "Miami (diaspora)", "Régions rurales du Nord et du Sud", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "De quel type d'entité musicale s'agit-il pour Conque (lambi) ?",
    options: ["Instrument", "Artiste solo", "Festival/Événement culturel", "Groupe"],
    correct: 0
  },
  {
    q: "Quelle est la période de référence pour Mizik angaje ?",
    options: ["Années 1970-1980", "Années 1990-2000", "Années 1950-1960", "Fondé en 1970"],
    correct: 0
  },
  {
    q: "Mizik angaje se distingue principalement par :",
    options: ["Groupe de konpa populaire des années 1990-2000", "Chanteur de konpa reconnu pour sa voix et ses ballades", "Le plus grand des tambours dans un ensemble rituel", "Chansons engagées portant un message social ou politique"],
    correct: 3
  },
  {
    q: "Dans quelle catégorie classerait-on Tabou Combo ?",
    options: ["Groupe", "Genre musical", "Artiste solo", "Instrument"],
    correct: 0
  },
  {
    q: "Quelle région ou ville est le berceau de Skah Shah ?",
    options: ["Port-au-Prince", "Pétion-Ville / New York", "New York (diaspora)", "National (surtout rara)"],
    correct: 2
  },
  {
    q: "De quel type d'entité musicale s'agit-il pour Gypsies de Pétion-Ville ?",
    options: ["Instrument", "Genre musical", "Artiste solo", "Groupe"],
    correct: 3
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux Djakout Mizik ?",
    options: ["Genre musical", "Artiste solo", "Instrument", "Groupe"],
    correct: 3
  },
  {
    q: "Quel trait particulier caractérise Volo Volo ?",
    options: ["Orchestre historique du mini-jazz", "Chanteur, ancien leader de Zenglen puis Djakout Mizik", "Fratrie fondatrice d'un grand orchestre de konpa", "Groupe de konpa réputé pour ses ballades"],
    correct: 3
  },
  {
    q: "Quel élément résume le mieux Emeline Michel ?",
    options: ["Rappeur et musicien, ex-membre des Fugees d'origine haïtienne", "Chanteuse surnommée « la Grande Dame de la chanson haïtienne »", "Grand orchestre de konpa toujours actif", "Groupe précurseur du mini-jazz haïtien"],
    correct: 1
  },
  {
    q: "Quel élément résume le mieux Rap kreyòl ?",
    options: ["Hip-hop chanté en créole haïtien", "Orchestre populaire du quartier de Bel-Air", "Fusion du konpa avec le zouk antillais", "Fusion de rythmes vodou traditionnels et de rock/pop"],
    correct: 0
  },
  {
    q: "Qu'est-ce que Klass exactement ?",
    options: ["Instrument", "Genre musical", "Festival/Événement culturel", "Groupe"],
    correct: 3
  },
  {
    q: "Banza est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Fondé en 2007", "Tradition annuelle (juillet)", "Époque coloniale", "Fondé en 1978"],
    correct: 2
  },
  {
    q: "À quelle époque associe-t-on Les Frères Dejean ?",
    options: ["Fondé en 2010", "Fondé en 1970", "Années 1940-1990", "Fondé en 1980"],
    correct: 1
  },
  {
    q: "Kompa Dirèk correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Artiste solo", "Instrument", "Festival/Événement culturel", "Genre musical"],
    correct: 3
  },
  {
    q: "Quel élément résume le mieux Kai ?",
    options: ["Groupe de konpa formé par d'anciens membres de Nu Look et Kreyòl La", "Groupe de konpa nouvelle génération", "Groupe pionnier de la mizik rasin", "Groupe de konpa reconnu pour ses ballades romantiques"],
    correct: 0
  },
  {
    q: "À quelle époque associe-t-on BIC ?",
    options: ["Années 1960-1970", "Fondé en 1996", "Fondé en 1982", "Depuis les années 2010"],
    correct: 3
  },
  {
    q: "Comment reconnaît-on Zenglen parmi les autres éléments de la musique haïtienne ?",
    options: ["Chanteur de konpa contemporain", "Orchestre de mini-jazz influent des années 1960-1970", "Groupe de konpa populaire des années 1990-2000", "Trio de konpa formé par Carlo, Richard et Mickaël"],
    correct: 2
  },
  {
    q: "Comment qualifierait-on Festival Racines sur le plan musical ?",
    options: ["Genre musical", "Festival/Événement culturel", "Artiste solo", "Groupe"],
    correct: 1
  },
  {
    q: "Quel lieu géographique est lié à Tanbou ?",
    options: ["Port-au-Prince et diaspora", "Diaspora et Port-au-Prince", "National", "Miami (diaspora)"],
    correct: 2
  },
  {
    q: "Quelle caractéristique définit le mieux Original Instrumental Sextet (OIS) ?",
    options: ["Orchestre fondateur du style konpa dit méringue-konpa", "Chansons engagées portant un message social ou politique", "Groupe de mizik rasin dirigé par Richard Morse", "Groupe précurseur du mini-jazz haïtien"],
    correct: 3
  },
  {
    q: "Quelle région ou ville est le berceau de Manno Charlemagne ?",
    options: ["Port-au-Prince", "National (mouvement culturel)", "New York (diaspora)", "Port-au-Prince et diaspora"],
    correct: 0
  },
  {
    q: "Comment qualifierait-on Kanpèch sur le plan musical ?",
    options: ["Genre musical", "Festival/Événement culturel", "Groupe", "Artiste solo"],
    correct: 2
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Ti Manno ?",
    options: ["Depuis les années 1980", "Années 1970-1980", "Fondé en 1996", "Tradition annuelle (juillet)"],
    correct: 1
  },
  {
    q: "Quel trait particulier caractérise Système Band ?",
    options: ["Instrument à percussion métallique gratté avec une baguette", "Orchestre régional connu dans le Nord d'Haïti", "Chansons engagées portant un message social ou politique", "Grand orchestre de konpa toujours actif"],
    correct: 3
  },
  {
    q: "Quelle est la période de référence pour Ibo Combo ?",
    options: ["Fondé en 1965", "Années 1980", "Années 1970-1980", "Années 1960-1970"],
    correct: 0
  },
  {
    q: "Quelle est la période de référence pour Gypsies de Pétion-Ville ?",
    options: ["Fondé en 2018", "Fondé en 1965", "Fondé en 1975", "Fondé en 1970"],
    correct: 3
  },
  {
    q: "Comment définit-on Belo dans la musique haïtienne ?",
    options: ["Artiste solo", "Groupe", "Genre musical", "Festival/Événement culturel"],
    correct: 0
  },
  {
    q: "À quelle époque associe-t-on Djakout #1 ?",
    options: ["Début du XXe siècle", "Fondé en 1975", "Fondé en 2010", "Années 1980"],
    correct: 2
  },
  {
    q: "Quelle est la nature de Vayb dans le paysage musical haïtien ?",
    options: ["Groupe", "Festival/Événement culturel", "Instrument", "Artiste solo"],
    correct: 0
  },
  {
    q: "Quel élément résume le mieux Manman tanbou ?",
    options: ["Le plus grand des tambours dans un ensemble rituel", "Rappeur et musicien, ex-membre des Fugees d'origine haïtienne", "Auteur-compositeur de folk et chanson engagée", "Rappeur haïtiano-américain connu pour ses collaborations konpa-hip-hop"],
    correct: 0
  },
  {
    q: "Quelle est la nature de T-Vice dans le paysage musical haïtien ?",
    options: ["Genre musical", "Instrument", "Artiste solo", "Groupe"],
    correct: 3
  },
  {
    q: "Qu'est-ce que Fabrice Rouzier exactement ?",
    options: ["Artiste solo", "Groupe", "Instrument", "Festival/Événement culturel"],
    correct: 0
  },
  {
    q: "Original H (originaire de Brooklyn) appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Depuis les années 2010", "Tradition annuelle (juillet)", "Fondé en 1966", "Depuis les années 2000"],
    correct: 3
  },
  {
    q: "Quelle caractéristique définit le mieux Roody Roodboy ?",
    options: ["Groupe de konpa reconnu pour ses tubes dansants", "Le plus grand des tambours dans un ensemble rituel", "Artiste populaire mêlant konpa et musique urbaine", "DJ et producteur électro fusionnant konpa et musique électronique"],
    correct: 2
  },
  {
    q: "Twoubadou appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Début du XXe siècle", "Depuis les années 2010", "Années 1960-1990", "Années 1940-1990"],
    correct: 0
  },
  {
    q: "Si l'on devait classer Les Frères Dejean, ce serait comme :",
    options: ["Artiste solo", "Instrument", "Genre musical", "Groupe"],
    correct: 3
  },
  {
    q: "Quelle région ou ville est le berceau de Rara ?",
    options: ["National (surtout zones rurales)", "Gonaïves / diaspora", "National (surtout rara)", "Port-au-Prince (Hôtel Oloffson)"],
    correct: 0
  },
  {
    q: "Comment qualifierait-on Volo Volo sur le plan musical ?",
    options: ["Festival/Événement culturel", "Groupe", "Instrument", "Artiste solo"],
    correct: 1
  },
  {
    q: "Roody Roodboy est le plus étroitement associé(e) à quel lieu ?",
    options: ["Port-au-Prince", "Diaspora et Port-au-Prince", "Cap-Haïtien", "Miami (diaspora)"],
    correct: 0
  },
  {
    q: "Comment reconnaît-on T-Vice parmi les autres éléments de la musique haïtienne ?",
    options: ["Festival mettant à l'honneur la mizik rasin", "Pianiste et arrangeur, cofondateur de Djakout Mizik", "Groupe emblématique du konpa de la diaspora", "Groupe de konpa fondé par une famille de musiciens"],
    correct: 3
  },
  {
    q: "Qu'est-ce qui distingue RAM sur le plan musical ou culturel ?",
    options: ["Groupe de konpa new-generation à succès", "Musique de rue processionnelle jouée en période de Carême", "Groupe de mizik rasin dirigé par Richard Morse", "Artiste populaire mêlant konpa et musique urbaine"],
    correct: 2
  },
  {
    q: "Quel trait particulier caractérise Belo ?",
    options: ["Autre nom sous lequel Djakout Mizik est parfois connu à ses débuts", "Orchestre régional connu dans le Nord d'Haïti", "Chanteur fusionnant rock, reggae et konpa", "Chanteur de konpa contemporain"],
    correct: 2
  },
  {
    q: "De quel type d'entité musicale s'agit-il pour Kanpèch ?",
    options: ["Festival/Événement culturel", "Genre musical", "Artiste solo", "Groupe"],
    correct: 3
  },
  {
    q: "Système Band désigne principalement :",
    options: ["Festival/Événement culturel", "Genre musical", "Artiste solo", "Groupe"],
    correct: 3
  },
  {
    q: "Comment définit-on Mizik rasin dans la musique haïtienne ?",
    options: ["Groupe", "Genre musical", "Artiste solo", "Festival/Événement culturel"],
    correct: 1
  },
  {
    q: "Quelle est la nature de Skah Shah dans le paysage musical haïtien ?",
    options: ["Instrument", "Festival/Événement culturel", "Groupe", "Artiste solo"],
    correct: 2
  },
  {
    q: "Quelle région ou ville est le berceau de Djakout Mizik ?",
    options: ["Miami (diaspora)", "Diaspora (New York)", "Port-au-Prince", "Port-au-Prince (Hôtel Oloffson)"],
    correct: 2
  },
  {
    q: "Quelle est la période de référence pour Les Frères Dejean ?",
    options: ["Années 1960-1970", "Années 1990-2000", "Fondé en 1965", "Fondé en 1970"],
    correct: 3
  },
  {
    q: "Quel élément résume le mieux Kanaval (Carnaval haïtien) ?",
    options: ["Ancêtre du konpa mêlant jazz et rythmes afro-caribéens", "Grande fête populaire précédant le Carême, rythmée par les orchestres de konpa", "Instrument central des ensembles de twoubadou", "DJ et producteur électro fusionnant konpa et musique électronique"],
    correct: 1
  },
  {
    q: "Quel élément résume le mieux Tabou Combo ?",
    options: ["Pionnier mondial du konpa avec des tubes internationaux", "Groupe emblématique du konpa de la diaspora", "Orchestre régional connu dans le Nord d'Haïti", "Pianiste et producteur de konpa influent"],
    correct: 0
  },
  {
    q: "Dans quelle catégorie classerait-on Boule zombi ?",
    options: ["Instrument", "Festival/Événement culturel", "Artiste solo", "Genre musical"],
    correct: 3
  },
  {
    q: "T-Vice provient principalement de quelle zone ?",
    options: ["Régions rurales", "Port-au-Prince et diaspora", "Cap-Haïtien", "Port-au-Prince (famille Duplessis)"],
    correct: 3
  },
  {
    q: "Quel lieu géographique est lié à Ti Manno ?",
    options: ["Port-au-Prince", "Jacmel", "Port-au-Prince / Cuba", "Port-au-Prince (Hôtel Oloffson)"],
    correct: 0
  },
  {
    q: "Magnum Band est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Fondé en 1980", "Époque coloniale à aujourd'hui", "Années 1990-2000", "Années 1950-1960"],
    correct: 0
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Mikaben ?",
    options: ["Depuis les années 2000", "Fondé en 1968", "Années 1950", "Années 1940-1990"],
    correct: 0
  },
  {
    q: "Vayb appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Fondé en 2010", "Années 1960-1990", "Fondé en 1982", "Fondé en 2018"],
    correct: 3
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Caribbean Sextet ?",
    options: ["Années 1970-1980", "Années 1960-1970", "Fondé en 1996", "Fondé en 1966"],
    correct: 3
  },
  {
    q: "Qu'est-ce qui distingue Alan Cavé sur le plan musical ou culturel ?",
    options: ["Chanteur, ancien leader de Zenglen puis Djakout Mizik", "Grande fête populaire précédant le Carême, rythmée par les orchestres de konpa", "Style de konpa rapide et énergique pour la danse", "Musique acoustique de guitare inspirée du son cubain"],
    correct: 0
  },
  {
    q: "De quel type d'entité musicale s'agit-il pour Les Frères Dejean ?",
    options: ["Groupe", "Artiste solo", "Festival/Événement culturel", "Genre musical"],
    correct: 0
  },
  {
    q: "À quelle époque associe-t-on Boule zombi ?",
    options: ["Années 1970-1980", "Fondé en 2020", "Fondé en 2016", "Fondé en 1978"],
    correct: 0
  },
  {
    q: "Klass provient principalement de quelle zone ?",
    options: ["Régions rurales", "Port-au-Prince", "New Jersey (diaspora)", "Gonaïves / diaspora"],
    correct: 1
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Festival Racines ?",
    options: ["Depuis les années 1990", "Années 1980", "Fondé en 1980", "Années 1950-1960"],
    correct: 0
  },
  {
    q: "Dans quelle décennie Kreyòl La a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Années 1950-1960", "Fondé en 2007", "Fondé en 2020", "Tradition annuelle"],
    correct: 1
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Mizik angaje ?",
    options: ["National (Port-au-Prince, Jacmel...)", "Port-au-Prince (famille Duplessis)", "National (tradition rara)", "National"],
    correct: 3
  },
  {
    q: "De quel type d'entité musicale s'agit-il pour Ibo Combo ?",
    options: ["Artiste solo", "Groupe", "Genre musical", "Festival/Événement culturel"],
    correct: 1
  },
  {
    q: "Quelle description correspond le mieux à Konpa Love ?",
    options: ["Musique de rue processionnelle jouée en période de Carême", "Style de konpa romantique et mélodique", "Grande fête populaire précédant le Carême, rythmée par les orchestres de konpa", "Groupe de konpa reconnu pour ses harmonies vocales"],
    correct: 1
  },
  {
    q: "Quel lieu géographique est lié à Tabou Combo ?",
    options: ["Pétion-Ville / New York", "Pétion-Ville", "Port-au-Prince et diaspora", "Port-au-Prince / Cuba"],
    correct: 0
  },
  {
    q: "Quelle caractéristique définit le mieux Nu Look ?",
    options: ["Musique de rue processionnelle jouée en période de Carême", "Chanteur de konpa reconnu pour sa voix et ses ballades", "Orchestre fondateur du style konpa dit méringue-konpa", "Groupe de konpa new-generation à succès"],
    correct: 3
  },
  {
    q: "Comment reconnaît-on Kesta B parmi les autres éléments de la musique haïtienne ?",
    options: ["Chanteur de konpa contemporain", "Chanteur engagé, figure de la mizik angaje", "Pionnière du folklore chanté haïtien", "Style fondateur du konpa moderne à tempo régulier"],
    correct: 0
  },
  {
    q: "Skah Shah appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Époque coloniale à aujourd'hui", "Fondé en 1966", "Fondé en 1974", "Fondé en 2010"],
    correct: 2
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux Graj (güira) ?",
    options: ["Groupe", "Festival/Événement culturel", "Artiste solo", "Instrument"],
    correct: 3
  },
  {
    q: "Qu'est-ce qui distingue Mizik rasin sur le plan musical ou culturel ?",
    options: ["Fusion du konpa avec le zouk antillais", "Fusion de rythmes vodou traditionnels et de rock/pop", "Pionnière du folklore chanté haïtien", "Style fondateur du konpa moderne à tempo régulier"],
    correct: 1
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Sweet Micky (Michel Martelly) ?",
    options: ["Port-au-Prince", "Diaspora (New York)", "National (surtout rara)", "Port-au-Prince / diaspora"],
    correct: 0
  },
  {
    q: "Comment décrirait-on le style ou le rôle de Graj (güira) ?",
    options: ["Orchestre historique du mini-jazz", "Carnaval d'été célèbre dans le Nord d'Haïti", "Instrument à percussion métallique gratté avec une baguette", "Groupe de konpa reconnu pour ses harmonies vocales"],
    correct: 2
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Djakout Mizik ?",
    options: ["Pétion-Ville / New York", "Port-au-Prince", "National", "Diaspora et Port-au-Prince"],
    correct: 1
  },
  {
    q: "Quel trait particulier caractérise Skah Shah ?",
    options: ["Autre nom sous lequel Djakout Mizik est parfois connu à ses débuts", "Groupe de konpa réputé pour ses ballades", "Coquillage utilisé comme instrument à vent rituel et festif", "Groupe emblématique du konpa de la diaspora"],
    correct: 3
  },
  {
    q: "D'où est originaire Banza ?",
    options: ["Régions rurales", "Port-au-Prince", "National", "National (tradition rara)"],
    correct: 2
  },
  {
    q: "Quelle description correspond le mieux à Mikaben ?",
    options: ["Grand orchestre de konpa toujours actif", "Chanteuse et actrice, figure de la chanson racine", "Chanteur de konpa reconnu pour sa voix et ses ballades", "Rythme dansant à base de guitare, cuivres et percussions"],
    correct: 2
  },
  {
    q: "Kanpèch correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Instrument", "Groupe", "Genre musical", "Festival/Événement culturel"],
    correct: 1
  },
  {
    q: "Comment reconnaît-on Martha Jean-Claude parmi les autres éléments de la musique haïtienne ?",
    options: ["Chanteur de konpa reconnu pour sa voix et ses ballades", "Chansons engagées portant un message social ou politique", "Pionnière du folklore chanté haïtien", "Coquillage utilisé comme instrument à vent rituel et festif"],
    correct: 2
  },
  {
    q: "Quelle caractéristique définit le mieux Beethova Obas ?",
    options: ["Auteur-compositeur de folk et chanson engagée", "Autre nom sous lequel Djakout Mizik est parfois connu à ses débuts", "Pianiste et arrangeur, cofondateur de Djakout Mizik", "Orchestre historique du mini-jazz"],
    correct: 0
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Konpa ?",
    options: ["Années 1950-1960", "Fondé en 1974", "Début du XXe siècle", "Fondé en 1980"],
    correct: 0
  },
  {
    q: "Kanaval de Jacmel correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Instrument", "Festival/Événement culturel", "Artiste solo", "Groupe"],
    correct: 1
  },
  {
    q: "De quel type d'entité musicale s'agit-il pour Système Band ?",
    options: ["Festival/Événement culturel", "Genre musical", "Groupe", "Artiste solo"],
    correct: 2
  },
  {
    q: "Comment reconnaît-on Vaksin parmi les autres éléments de la musique haïtienne ?",
    options: ["Groupe majeur du konpa des années 1980", "Orchestre populaire du quartier de Bel-Air", "Fusion de rythmes vodou traditionnels et de rock/pop", "Trompette en bambou utilisée dans les groupes de rara"],
    correct: 3
  },
  {
    q: "Carimi est le plus étroitement associé(e) à quel lieu ?",
    options: ["National (Port-au-Prince, Jacmel...)", "Pétion-Ville", "Port-au-Prince", "Miami (diaspora)"],
    correct: 3
  },
  {
    q: "Comment reconnaît-on Fabrice Rouzier parmi les autres éléments de la musique haïtienne ?",
    options: ["Auteur-compositeur de folk et chanson engagée", "Pianiste et producteur de konpa influent", "Chants et percussions liés aux cérémonies religieuses vodou", "Groupe de konpa issu de la scission de Djakout Mizik"],
    correct: 1
  },
  {
    q: "Si l'on devait classer Méringue haïtienne, ce serait comme :",
    options: ["Artiste solo", "Genre musical", "Groupe", "Festival/Événement culturel"],
    correct: 1
  },
  {
    q: "Où Ibo Combo a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["Port-au-Prince", "Diaspora (New York)", "Gonaïves / diaspora", "National"],
    correct: 0
  },
  {
    q: "Quelle caractéristique définit le mieux T-Vice ?",
    options: ["Chanteur mêlant konpa, RnB et musique urbaine", "Groupe de konpa fondé par une famille de musiciens", "Groupe de konpa populaire des années 1990-2000", "Musique acoustique de guitare inspirée du son cubain"],
    correct: 1
  },
  {
    q: "Dans quelle catégorie classerait-on Rara ?",
    options: ["Genre musical", "Groupe", "Festival/Événement culturel", "Instrument"],
    correct: 0
  },
  {
    q: "Si l'on devait classer Boule zombi, ce serait comme :",
    options: ["Festival/Événement culturel", "Groupe", "Genre musical", "Artiste solo"],
    correct: 2
  },
  {
    q: "Comment définit-on Système Band dans la musique haïtienne ?",
    options: ["Festival/Événement culturel", "Artiste solo", "Instrument", "Groupe"],
    correct: 3
  },
  {
    q: "Quel lieu géographique est lié à RAM ?",
    options: ["Port-au-Prince et diaspora", "National (surtout rara)", "Miami (diaspora)", "Port-au-Prince (Hôtel Oloffson)"],
    correct: 3
  },
  {
    q: "Quelle description correspond le mieux à Kesta B ?",
    options: ["Orchestre fondateur du style konpa dit méringue-konpa", "Autre nom sous lequel Djakout Mizik est parfois connu à ses débuts", "Chanteur de konpa contemporain", "Groupe majeur du konpa des années 1980"],
    correct: 2
  },
  {
    q: "Quel lieu géographique est lié à Kadans (Kadans Ranpa) ?",
    options: ["National (surtout zones rurales)", "Diaspora (New York)", "Régions rurales du Nord et du Sud", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Michael Brun ?",
    options: ["Fondé en 1975", "Depuis les années 1970", "Fondé en 1965", "Depuis les années 2010"],
    correct: 3
  },
  {
    q: "À quelle époque associe-t-on Kadans (Kadans Ranpa) ?",
    options: ["Début du XXe siècle", "Fondé en 1982", "Époque coloniale à aujourd'hui", "Années 1950-1960"],
    correct: 3
  },
  {
    q: "Comment qualifierait-on RAM sur le plan musical ?",
    options: ["Genre musical", "Groupe", "Instrument", "Artiste solo"],
    correct: 1
  },
  {
    q: "Où Kanpèch a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["New Jersey (diaspora)", "Cap-Haïtien", "Jacmel", "National (mouvement culturel)"],
    correct: 1
  },
  {
    q: "Comment reconnaît-on Ibo Combo parmi les autres éléments de la musique haïtienne ?",
    options: ["Chanteur mêlant konpa, RnB et musique urbaine", "Chanteur de konpa reconnu pour sa voix et ses ballades", "Grand orchestre de konpa des années 1970-1980", "Orchestre historique du mini-jazz"],
    correct: 3
  },
  {
    q: "Comment reconnaît-on Ti Manno parmi les autres éléments de la musique haïtienne ?",
    options: ["Groupe emblématique du konpa de la diaspora", "Chanteuse et actrice, figure de la chanson racine", "Chanteur emblématique de konpa social et engagé", "Groupe de konpa contemporain très populaire chez les jeunes"],
    correct: 2
  },
  {
    q: "Michael Brun provient principalement de quelle zone ?",
    options: ["National", "Diaspora (New York/Miami)", "Port-au-Prince / international", "Port-au-Prince et diaspora"],
    correct: 2
  },
  {
    q: "D'où est originaire Djakout Mizik (Fabrice Rouzier) ?",
    options: ["National (surtout rara)", "Port-au-Prince", "National", "Port-au-Prince / Cuba"],
    correct: 1
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux Klass ?",
    options: ["Instrument", "Artiste solo", "Groupe", "Festival/Événement culturel"],
    correct: 2
  },
  {
    q: "Comment qualifierait-on Magnum Band sur le plan musical ?",
    options: ["Groupe", "Artiste solo", "Instrument", "Genre musical"],
    correct: 0
  },
  {
    q: "Gypsies de Pétion-Ville correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Groupe", "Instrument", "Artiste solo", "Festival/Événement culturel"],
    correct: 0
  },
  {
    q: "Quel élément résume le mieux Mizik vodou ?",
    options: ["Danse de salon d'origine haïtienne aux rythmes élégants", "Chants et percussions liés aux cérémonies religieuses vodou", "Style fondateur du konpa moderne à tempo régulier", "Pionnier mondial du konpa avec des tubes internationaux"],
    correct: 1
  },
  {
    q: "Qu'est-ce qui distingue Zing Experience sur le plan musical ou culturel ?",
    options: ["Groupe de konpa reconnu pour ses harmonies vocales", "Rappeur haïtiano-américain connu pour ses collaborations konpa-hip-hop", "Chants et percussions liés aux cérémonies religieuses vodou", "Hip-hop chanté en créole haïtien"],
    correct: 0
  },
  {
    q: "Quel trait particulier caractérise Twoubadou ?",
    options: ["Autre nom sous lequel Djakout Mizik est parfois connu à ses débuts", "Musique acoustique de guitare inspirée du son cubain", "Fusion de rythmes vodou traditionnels et de rock/pop", "Pianiste et producteur de konpa influent"],
    correct: 1
  },
  {
    q: "À quelle époque associe-t-on Mini-jazz ?",
    options: ["Années 1960-1970", "Fondé en 1989", "Fondé en 1965", "Tradition annuelle (juillet)"],
    correct: 0
  },
  {
    q: "Kanaval de Jacmel désigne principalement :",
    options: ["Genre musical", "Groupe", "Instrument", "Festival/Événement culturel"],
    correct: 3
  },
  {
    q: "Quel trait particulier caractérise Wyclef Jean ?",
    options: ["Groupe de mizik rasin dirigé par Richard Morse", "Pionnière du folklore chanté haïtien", "Figure populaire du konpa avant de devenir président d'Haïti", "Rappeur et musicien, ex-membre des Fugees d'origine haïtienne"],
    correct: 3
  },
  {
    q: "Qu'est-ce que Skah Shah exactement ?",
    options: ["Festival/Événement culturel", "Genre musical", "Instrument", "Groupe"],
    correct: 3
  },
  {
    q: "Quelle est la période de référence pour Gaga ?",
    options: ["Époque coloniale à aujourd'hui", "Fondé en 1968", "Fondé en 1963", "Fondé en 1966"],
    correct: 0
  },
  {
    q: "À quelle époque associe-t-on Ibo Combo ?",
    options: ["Fondé en 1975", "Années 1950", "Fondé en 2018", "Fondé en 1965"],
    correct: 3
  },
  {
    q: "Comment qualifierait-on Carnaval des Fleurs (Cap-Haïtien) sur le plan musical ?",
    options: ["Groupe", "Festival/Événement culturel", "Genre musical", "Instrument"],
    correct: 1
  },
  {
    q: "Quelle description correspond le mieux à Les Shleu Shleu ?",
    options: ["Rythme dansant à base de guitare, cuivres et percussions", "Grand orchestre de konpa toujours actif", "Chanteuse engagée connue pour ses textes politiques", "Pionnier du mini-jazz haïtien"],
    correct: 3
  },
  {
    q: "Qu'est-ce que Kanaval de Jacmel exactement ?",
    options: ["Instrument", "Festival/Événement culturel", "Groupe", "Genre musical"],
    correct: 1
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux Kadans (Kadans Ranpa) ?",
    options: ["Artiste solo", "Festival/Événement culturel", "Genre musical", "Groupe"],
    correct: 2
  },
  {
    q: "Quelle est la période de référence pour Zenglen ?",
    options: ["Fondé en 1993", "Fondé en 1968", "Fondé en 1978", "Années 1980"],
    correct: 0
  },
  {
    q: "Comment reconnaît-on Michael Brun parmi les autres éléments de la musique haïtienne ?",
    options: ["Chanteur emblématique de konpa social et engagé", "Grand orchestre de konpa toujours actif", "Ancêtre du banjo d'origine afro-haïtienne", "DJ et producteur électro fusionnant konpa et musique électronique"],
    correct: 3
  },
  {
    q: "À quel moment de l'histoire musicale haïtienne rattache-t-on Alan Cavé ?",
    options: ["Fondé en 1993", "Depuis les années 1990", "Fondé en 1965", "Années 1960-1970"],
    correct: 1
  },
  {
    q: "Quelle période correspond le mieux à Manno Charlemagne ?",
    options: ["Fondé en 1989", "Tradition annuelle", "Depuis les années 1970", "XIXe siècle"],
    correct: 2
  },
  {
    q: "Quel trait particulier caractérise Rara ?",
    options: ["Musique festive liée aux célébrations agraires", "Musique de rue processionnelle jouée en période de Carême", "Orchestre régional connu dans le Nord d'Haïti", "Groupe de konpa issu de la scission de Djakout Mizik"],
    correct: 1
  },
  {
    q: "Konpa Love désigne principalement :",
    options: ["Festival/Événement culturel", "Genre musical", "Groupe", "Instrument"],
    correct: 1
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Les Shleu Shleu ?",
    options: ["Miami (diaspora)", "National (Port-au-Prince, Jacmel...)", "Port-au-Prince / Cuba", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Dans quelle décennie Carimi a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Fondé en 1962", "Fondé en 1996", "Depuis les années 1980", "Années 1980"],
    correct: 1
  },
  {
    q: "Où Boule zombi a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["Port-au-Prince", "Pétion-Ville", "Port-au-Prince / diaspora", "Diaspora et Port-au-Prince"],
    correct: 0
  },
  {
    q: "Qu'est-ce que Nu Look exactement ?",
    options: ["Genre musical", "Instrument", "Groupe", "Artiste solo"],
    correct: 2
  },
  {
    q: "Manman tanbou correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Groupe", "Instrument", "Genre musical", "Artiste solo"],
    correct: 1
  },
  {
    q: "Où Vayb a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["Pétion-Ville / New York", "Pétion-Ville", "Port-au-Prince / Cuba", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Quand situe-t-on l'apogée ou l'apparition de Magnum Band ?",
    options: ["Fondé en 1980", "Fondé en 1970", "Tradition annuelle (novembre)", "XIXe siècle"],
    correct: 0
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Bel Air Orchestra ?",
    options: ["Port-au-Prince", "Diaspora (New York/Miami)", "Jacmel", "Cap-Haïtien"],
    correct: 0
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux Krezi Mizik ?",
    options: ["Genre musical", "Instrument", "Groupe", "Festival/Événement culturel"],
    correct: 2
  },
  {
    q: "Quelle période correspond le mieux à J Perry ?",
    options: ["Depuis les années 2010", "Fondé en 1978", "Fondé en 1963", "Fondé en 1968"],
    correct: 0
  },
  {
    q: "Comment reconnaît-on Méringue haïtienne parmi les autres éléments de la musique haïtienne ?",
    options: ["Danse de salon d'origine haïtienne aux rythmes élégants", "Groupe de konpa populaire des années 1990-2000", "Groupe de konpa nouvelle génération", "Groupe de konpa fondé par une famille de musiciens"],
    correct: 0
  },
  {
    q: "Où Michael Brun a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["Miami (diaspora)", "Diaspora (New York/Miami)", "New Jersey (diaspora)", "Port-au-Prince / international"],
    correct: 3
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Alan Cavé ?",
    options: ["Port-au-Prince", "Port-au-Prince / New York", "Régions rurales du Nord et du Sud", "National (surtout zones rurales)"],
    correct: 0
  },
  {
    q: "Dans quelle catégorie classerait-on Kai ?",
    options: ["Artiste solo", "Festival/Événement culturel", "Groupe", "Genre musical"],
    correct: 2
  },
  {
    q: "De quel type d'entité musicale s'agit-il pour Carimi ?",
    options: ["Festival/Événement culturel", "Groupe", "Instrument", "Genre musical"],
    correct: 1
  },
  {
    q: "Quel élément résume le mieux Kadans (Kadans Ranpa) ?",
    options: ["Groupe de konpa reconnu pour ses ballades romantiques", "Groupe emblématique du konpa de la diaspora", "Ancêtre du konpa mêlant jazz et rythmes afro-caribéens", "Ancêtre du banjo d'origine afro-haïtienne"],
    correct: 2
  },
  {
    q: "Djakout Mizik est le plus étroitement associé(e) à quel lieu ?",
    options: ["National (surtout zones rurales)", "Port-au-Prince", "National (tradition rara)", "New Jersey (diaspora)"],
    correct: 1
  },
  {
    q: "Où situe-t-on l'origine de Kanaval (Carnaval haïtien) ?",
    options: ["National (Port-au-Prince, Jacmel...)", "Port-au-Prince", "Port-au-Prince (famille Duplessis)", "Port-au-Prince / New York"],
    correct: 0
  },
  {
    q: "Comment reconnaît-on Graj (güira) parmi les autres éléments de la musique haïtienne ?",
    options: ["Groupe de konpa reconnu pour ses tubes dansants", "Maracas traditionnelles utilisées dans plusieurs genres", "Orchestre historique du mini-jazz", "Instrument à percussion métallique gratté avec une baguette"],
    correct: 3
  },
  {
    q: "Quelle description correspond le mieux à Zenglen ?",
    options: ["Style de konpa romantique et mélodique", "Grand orchestre de konpa des années 1970-1980", "Groupe de konpa populaire des années 1990-2000", "Groupe précurseur du mini-jazz haïtien"],
    correct: 2
  },
  {
    q: "D'où est originaire Rara ?",
    options: ["Pétion-Ville / New York", "Région frontalière (Sud-Est)", "Port-au-Prince", "National (surtout zones rurales)"],
    correct: 3
  },
  {
    q: "Dans quelle décennie Magnum Band a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Fondé en 1970", "Début du XXe siècle", "Années 1970-1980", "Fondé en 1980"],
    correct: 3
  },
  {
    q: "Quelle est la période de référence pour Carimi ?",
    options: ["Depuis les années 2000", "Fondé en 1998", "Fondé en 1966", "Fondé en 1996"],
    correct: 3
  },
  {
    q: "Quelle description correspond le mieux à Wyclef Jean ?",
    options: ["Trompette en bambou utilisée dans les groupes de rara", "Rappeur et musicien, ex-membre des Fugees d'origine haïtienne", "Rythme dansant à base de guitare, cuivres et percussions", "Carnaval d'été célèbre dans le Nord d'Haïti"],
    correct: 1
  },
  {
    q: "Quel lieu géographique est lié à Zenglen ?",
    options: ["Cap-Haïtien", "National (surtout zones rurales)", "Miami (diaspora)", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Rap kreyòl correspond à quel type d'élément dans la culture musicale haïtienne ?",
    options: ["Festival/Événement culturel", "Groupe", "Genre musical", "Instrument"],
    correct: 2
  },
  {
    q: "Djakout #1 est le plus étroitement associé(e) à quel lieu ?",
    options: ["Port-au-Prince", "Port-au-Prince / Cuba", "National (surtout rara)", "Régions rurales"],
    correct: 0
  },
  {
    q: "Quelle caractéristique définit le mieux Farah Juste ?",
    options: ["Pionnier du mini-jazz haïtien", "Chanteuse engagée connue pour ses textes politiques", "Groupe majeur du konpa des années 1980", "Chanteur de konpa contemporain"],
    correct: 1
  },
  {
    q: "Qu'est-ce qui distingue Belo sur le plan musical ou culturel ?",
    options: ["Chanteur fusionnant rock, reggae et konpa", "Musique de rue processionnelle jouée en période de Carême", "DJ et producteur électro fusionnant konpa et musique électronique", "Rappeur pionnier du rap kreyòl"],
    correct: 0
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux Original Instrumental Sextet (OIS) ?",
    options: ["Festival/Événement culturel", "Artiste solo", "Groupe", "Instrument"],
    correct: 2
  },
  {
    q: "Carnaval des Fleurs (Cap-Haïtien) se distingue principalement par :",
    options: ["Chanteuse surnommée « la Grande Dame de la chanson haïtienne »", "Carnaval d'été célèbre dans le Nord d'Haïti", "Instrument à percussion métallique gratté avec une baguette", "Danse de salon d'origine haïtienne aux rythmes élégants"],
    correct: 1
  },
  {
    q: "Quel trait particulier caractérise Konpa Love ?",
    options: ["Style de konpa romantique et mélodique", "Groupe de konpa réputé pour ses ballades", "Le plus grand des tambours dans un ensemble rituel", "Fusion de rythmes vodou traditionnels et de rock/pop"],
    correct: 0
  },
  {
    q: "Où situe-t-on l'origine de Konpa ?",
    options: ["Port-au-Prince / international", "National (mouvement culturel)", "Port-au-Prince", "New York (diaspora)"],
    correct: 2
  },
  {
    q: "Gaga appartient à quelle période de l'histoire musicale haïtienne ?",
    options: ["Fondé en 1998", "Fondé en 1989", "Époque coloniale à aujourd'hui", "Années 1950"],
    correct: 2
  },
  {
    q: "Quel trait particulier caractérise Harmonik ?",
    options: ["Musique festive liée aux célébrations agraires", "Style de konpa rapide et énergique pour la danse", "Orchestre de mini-jazz influent des années 1960-1970", "Groupe de konpa nouvelle génération"],
    correct: 3
  },
  {
    q: "Original Instrumental Sextet (OIS) est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Fondé en 2010", "Fondé en 1962", "Fondé en 1993", "Époque coloniale à aujourd'hui"],
    correct: 1
  },
  {
    q: "Dans quelle catégorie classerait-on Manno Charlemagne ?",
    options: ["Groupe", "Genre musical", "Artiste solo", "Instrument"],
    correct: 2
  },
  {
    q: "Comment définit-on Mizik vodou dans la musique haïtienne ?",
    options: ["Instrument", "Festival/Événement culturel", "Groupe", "Genre musical"],
    correct: 3
  },
  {
    q: "Quelle est la nature de Zouk haïtien dans le paysage musical haïtien ?",
    options: ["Festival/Événement culturel", "Genre musical", "Artiste solo", "Instrument"],
    correct: 1
  },
  {
    q: "Quelle est la période de référence pour Nu Look ?",
    options: ["Fondé en 1968", "Fondé en 1998", "Années 1950-1960", "Tradition annuelle"],
    correct: 1
  },
  {
    q: "Où situe-t-on l'origine de Kreyòl La ?",
    options: ["Pétion-Ville / New York", "Gonaïves / diaspora", "Port-au-Prince", "Port-au-Prince et diaspora"],
    correct: 2
  },
  {
    q: "Quel trait particulier caractérise Coupé Cloué et l'Ensemble Select ?",
    options: ["Pionnier du mini-jazz haïtien", "Orchestre fondateur du style konpa dit méringue-konpa", "DJ et producteur électro fusionnant konpa et musique électronique", "Groupe de konpa réputé pour ses ballades"],
    correct: 1
  },
  {
    q: "Comment qualifierait-on Skah Shah sur le plan musical ?",
    options: ["Groupe", "Genre musical", "Instrument", "Festival/Événement culturel"],
    correct: 0
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Harmonik ?",
    options: ["National", "Port-au-Prince", "Pétion-Ville", "Jacmel"],
    correct: 1
  },
  {
    q: "Quelle caractéristique définit le mieux Wyclef Jean ?",
    options: ["Groupe majeur de mizik rasin engagée", "Pionnière du folklore chanté haïtien", "Fusion du konpa avec le zouk antillais", "Rappeur et musicien, ex-membre des Fugees d'origine haïtienne"],
    correct: 3
  },
  {
    q: "Quelle caractéristique définit le mieux Rara ?",
    options: ["Style de konpa romantique et mélodique", "Rappeur pionnier du rap kreyòl", "Trompette en bambou utilisée dans les groupes de rara", "Musique de rue processionnelle jouée en période de Carême"],
    correct: 3
  },
  {
    q: "Dans quelle décennie Méringue haïtienne a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Depuis les années 1990", "XIXe siècle", "Époque coloniale à aujourd'hui", "Fondé en 1982"],
    correct: 1
  },
  {
    q: "Qu'est-ce que Carimi exactement ?",
    options: ["Genre musical", "Groupe", "Artiste solo", "Instrument"],
    correct: 1
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Konpa Love ?",
    options: ["Port-au-Prince / diaspora", "Pétion-Ville / New York", "Diaspora et Port-au-Prince", "Port-au-Prince / Cuba"],
    correct: 2
  },
  {
    q: "Dans quelle décennie Carnaval des Fleurs (Cap-Haïtien) a-t-il/elle émergé ou marqué la scène musicale haïtienne ?",
    options: ["Tradition annuelle", "Fondé en 2005", "Tradition annuelle (juillet)", "Fondé en 1989"],
    correct: 2
  },
  {
    q: "Klass se distingue principalement par :",
    options: ["Chanteur de konpa contemporain", "Groupe de konpa reconnu pour ses ballades romantiques", "Grande fête populaire précédant le Carême, rythmée par les orchestres de konpa", "Groupe de mizik rasin dirigé par Richard Morse"],
    correct: 1
  },
  {
    q: "Dans quelle catégorie classerait-on Original Instrumental Sextet (OIS) ?",
    options: ["Instrument", "Genre musical", "Groupe", "Artiste solo"],
    correct: 2
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux Sweet Micky (Michel Martelly) ?",
    options: ["Groupe", "Artiste solo", "Instrument", "Festival/Événement culturel"],
    correct: 1
  },
  {
    q: "Les Shleu Shleu est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Fondé en 2010", "Fondé en 1968", "Fondé en 1993", "Fondé en 1963"],
    correct: 3
  },
  {
    q: "De quel type d'entité musicale s'agit-il pour Festival Racines ?",
    options: ["Instrument", "Festival/Événement culturel", "Artiste solo", "Genre musical"],
    correct: 1
  },
  {
    q: "Les Frères Dejean est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Fondé en 1970", "Fondé en 1965", "Années 1960-1990", "Fondé en 1968"],
    correct: 0
  },
  {
    q: "Comment reconnaît-on Djakout Mizik (Fabrice Rouzier) parmi les autres éléments de la musique haïtienne ?",
    options: ["Groupe de mizik rasin dirigé par Richard Morse", "Petits orchestres de guitares électriques inspirés du rock", "Pianiste et arrangeur, cofondateur de Djakout Mizik", "Coquillage utilisé comme instrument à vent rituel et festif"],
    correct: 2
  },
  {
    q: "RAM est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Fondé en 1996", "Fondé en 1990", "Fondé en 1966", "Fondé en 1970"],
    correct: 1
  },
  {
    q: "Quelle est la période de référence pour Original Instrumental Sextet (OIS) ?",
    options: ["Fondé en 1962", "Années 1980-1990", "Fondé en 2007", "Fondé en 2016"],
    correct: 0
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux Martha Jean-Claude ?",
    options: ["Instrument", "Genre musical", "Artiste solo", "Groupe"],
    correct: 2
  },
  {
    q: "D'où est originaire Belo ?",
    options: ["Port-au-Prince", "Régions rurales", "National (surtout zones rurales)", "National (mouvement culturel)"],
    correct: 0
  },
  {
    q: "Mini-jazz désigne principalement :",
    options: ["Groupe", "Genre musical", "Festival/Événement culturel", "Instrument"],
    correct: 1
  },
  {
    q: "Quelle est la ville ou région d'origine associée à Wyclef Jean ?",
    options: ["National (surtout zones rurales)", "Pétion-Ville / New York", "New Jersey (diaspora)", "Pétion-Ville"],
    correct: 2
  },
  {
    q: "Kadans (Kadans Ranpa) est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Depuis les années 1990", "Depuis les années 2010", "Années 1950-1960", "Fondé en 1975"],
    correct: 2
  },
  {
    q: "Djakout #1 se distingue principalement par :",
    options: ["Orchestre historique du mini-jazz", "Rappeur pionnier du rap kreyòl", "Groupe né en 2010 d'une scission avec Djakout Mizik", "Trio de konpa formé par Carlo, Richard et Mickaël"],
    correct: 2
  },
  {
    q: "Quelle description correspond le mieux à Kadans (Kadans Ranpa) ?",
    options: ["Grande fête populaire précédant le Carême, rythmée par les orchestres de konpa", "Ancêtre du konpa mêlant jazz et rythmes afro-caribéens", "Chanteuse surnommée « la Grande Dame de la chanson haïtienne »", "Figure populaire du konpa avant de devenir président d'Haïti"],
    correct: 1
  },
  {
    q: "Où Conque (lambi) a-t-il/elle vu le jour ou s'est-il/elle développé(e) ?",
    options: ["Port-au-Prince / international", "Port-au-Prince / diaspora", "New York (diaspora)", "National (surtout rara)"],
    correct: 3
  },
  {
    q: "Quel élément résume le mieux Boukman Eksperyans ?",
    options: ["Petits orchestres de guitares électriques inspirés du rock", "Groupe pionnier de la mizik rasin", "Pianiste et producteur de konpa influent", "Carnaval d'été célèbre dans le Nord d'Haïti"],
    correct: 1
  },
  {
    q: "Toto Bissainthe est apparu(e) ou actif(ve) à partir de quelle période ?",
    options: ["Années 1940-1990", "Années 1960-1990", "Depuis les années 2010", "Fondé en 2020"],
    correct: 1
  },
  {
    q: "Parmi les propositions suivantes, laquelle décrit le mieux Conque (lambi) ?",
    options: ["Artiste solo", "Instrument", "Genre musical", "Groupe"],
    correct: 1
  },
  {
    q: "Quel élément résume le mieux Banza ?",
    options: ["Fratrie fondatrice d'un grand orchestre de konpa", "Chanteuse et actrice, figure de la chanson racine", "Groupe majeur du konpa des années 1980", "Ancêtre du banjo d'origine afro-haïtienne"],
    correct: 3
  },
  {
    q: "Où situe-t-on l'origine de Roody Roodboy ?",
    options: ["Port-au-Prince (famille Duplessis)", "Diaspora (New York/Miami)", "Port-au-Prince", "Port-au-Prince / international"],
    correct: 2
  },
  {
    q: "Quel trait particulier caractérise Boule zombi ?",
    options: ["Rappeur pionnier du rap kreyòl", "Artiste populaire mêlant konpa et musique urbaine", "Style de konpa rapide et énergique pour la danse", "Orchestre fondateur du style konpa dit méringue-konpa"],
    correct: 2
  },
  {
    q: "Quelle caractéristique définit le mieux J Perry ?",
    options: ["Auteur-compositeur de folk et chanson engagée", "Carnaval d'été célèbre dans le Nord d'Haïti", "Chanteur mêlant konpa, RnB et musique urbaine", "Figure populaire du konpa avant de devenir président d'Haïti"],
    correct: 2
  },
]

export default musiqueQuestions
