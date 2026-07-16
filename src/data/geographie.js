const geographieQuestions = [
  {
    q: "Quel est le chef-lieu du département de l'Ouest ?",
    options: ["Port-au-Prince", "Cap-Haïtien", "Fort-Liberté", "Hinche"],
    correct: 0
  },
  {
    q: "Quel est le chef-lieu du département du Nord ?",
    options: ["Cap-Haïtien", "Fort-Liberté", "Gonaïves", "Hinche"],
    correct: 0
  },
  {
    q: "Quel est le chef-lieu du département du Sud ?",
    options: ["Cap-Haïtien", "Fort-Liberté", "Les Cayes", "Gonaïves"],
    correct: 2
  },
  {
    q: "Quel est le chef-lieu du département de l'Artibonite ?",
    options: ["Jacmel", "Gonaïves", "Les Cayes", "Miragoâne"],
    correct: 1
  },
  {
    q: "Quel est le chef-lieu du département du Centre ?",
    options: ["Hinche", "Jacmel", "Port-de-Paix", "Fort-Liberté"],
    correct: 0
  },
  {
    q: "Quel est le chef-lieu du département des Nippes ?",
    options: ["Hinche", "Les Cayes", "Miragoâne", "Fort-Liberté"],
    correct: 2
  },
  {
    q: "Quel est le chef-lieu du département du Nord-Ouest ?",
    options: ["Gonaïves", "Port-au-Prince", "Port-de-Paix", "Hinche"],
    correct: 2
  },
  {
    q: "Quel est le chef-lieu du département du Nord-Est ?",
    options: ["Port-de-Paix", "Fort-Liberté", "Gonaïves", "Port-au-Prince"],
    correct: 1
  },
  {
    q: "Quel est le chef-lieu du département du Sud-Est ?",
    options: ["Jacmel", "Jérémie", "Les Cayes", "Hinche"],
    correct: 0
  },
  {
    q: "Quel est le chef-lieu du département de la Grand'Anse ?",
    options: ["Miragoâne", "Gonaïves", "Port-de-Paix", "Jérémie"],
    correct: 3
  },
  {
    q: "Dans quel département se trouve la ville de Port-au-Prince ?",
    options: ["l'Ouest", "les Nippes", "le Nord-Ouest", "la Grand'Anse"],
    correct: 0
  },
  {
    q: "Dans quel département se trouve la ville de Pétion-Ville ?",
    options: ["l'Ouest", "le Nord-Ouest", "l'Artibonite", "le Sud"],
    correct: 0
  },
  {
    q: "Dans quel département se trouve la ville de Carrefour ?",
    options: ["l'Ouest", "le Sud", "le Nord-Est", "le Sud-Est"],
    correct: 0
  },
  {
    q: "Dans quel département se trouve la ville de Delmas ?",
    options: ["le Centre", "le Sud-Est", "le Nord", "l'Ouest"],
    correct: 3
  },
  {
    q: "Dans quel département se trouve la ville de Croix-des-Bouquets ?",
    options: ["les Nippes", "le Sud", "l'Ouest", "l'Artibonite"],
    correct: 2
  },
  {
    q: "Dans quel département se trouve la ville de Léogâne ?",
    options: ["l'Artibonite", "l'Ouest", "le Nord-Est", "les Nippes"],
    correct: 1
  },
  {
    q: "Dans quel département se trouve la ville de Petit-Goâve ?",
    options: ["l'Ouest", "la Grand'Anse", "l'Artibonite", "le Nord"],
    correct: 0
  },
  {
    q: "Dans quel département se trouve la ville de Cabaret ?",
    options: ["l'Ouest", "le Nord", "la Grand'Anse", "le Sud-Est"],
    correct: 0
  },
  {
    q: "Dans quel département se trouve la ville de Ganthier ?",
    options: ["le Sud-Est", "l'Ouest", "le Nord-Est", "l'Artibonite"],
    correct: 1
  },
  {
    q: "Dans quel département se trouve la ville de Arcahaie ?",
    options: ["le Sud", "l'Artibonite", "l'Ouest", "la Grand'Anse"],
    correct: 2
  },
  {
    q: "Dans quel département se trouve la ville de Cornillon ?",
    options: ["le Centre", "le Nord-Ouest", "le Nord", "l'Ouest"],
    correct: 3
  },
  {
    q: "Dans quel département se trouve la ville de Fonds-Verrettes ?",
    options: ["l'Ouest", "le Centre", "le Nord", "l'Artibonite"],
    correct: 0
  },
  {
    q: "Dans quel département se trouve la ville de Grand-Goâve ?",
    options: ["le Nord-Est", "l'Ouest", "le Sud-Est", "le Nord-Ouest"],
    correct: 1
  },
  {
    q: "Dans quel département se trouve la ville de Kenscoff ?",
    options: ["l'Ouest", "le Sud-Est", "le Centre", "les Nippes"],
    correct: 0
  },
  {
    q: "Dans quel département se trouve la ville de Pointe-à-Raquette ?",
    options: ["le Sud", "le Sud-Est", "la Grand'Anse", "l'Ouest"],
    correct: 3
  },
  {
    q: "Dans quel département se trouve la ville de Thomazeau ?",
    options: ["le Centre", "le Nord-Ouest", "le Sud-Est", "l'Ouest"],
    correct: 3
  },
  {
    q: "Dans quel département se trouve la ville de Gressier ?",
    options: ["le Nord", "le Centre", "le Sud", "l'Ouest"],
    correct: 3
  },
  {
    q: "Dans quel département se trouve la ville de Cité Soleil ?",
    options: ["le Sud", "le Nord-Ouest", "l'Ouest", "le Centre"],
    correct: 2
  },
  {
    q: "Dans quel département se trouve la ville de Tabarre ?",
    options: ["le Centre", "l'Ouest", "les Nippes", "l'Artibonite"],
    correct: 1
  },
  {
    q: "Dans quel département se trouve la ville de Cap-Haïtien ?",
    options: ["le Nord", "l'Artibonite", "le Nord-Est", "le Nord-Ouest"],
    correct: 0
  },
  {
    q: "Dans quel département se trouve la ville de Acul-du-Nord ?",
    options: ["le Sud", "le Nord", "l'Artibonite", "la Grand'Anse"],
    correct: 1
  },
  {
    q: "Dans quel département se trouve la ville de Borgne ?",
    options: ["la Grand'Anse", "le Nord", "l'Ouest", "le Centre"],
    correct: 1
  },
  {
    q: "Dans quel département se trouve la ville de Limonade ?",
    options: ["le Nord-Est", "le Nord", "l'Artibonite", "le Sud-Est"],
    correct: 1
  },
  {
    q: "Dans quel département se trouve la ville de Plaine-du-Nord ?",
    options: ["le Nord", "l'Artibonite", "le Nord-Ouest", "la Grand'Anse"],
    correct: 0
  },
  {
    q: "Dans quel département se trouve la ville de Pilate ?",
    options: ["le Sud-Est", "le Sud", "le Nord", "l'Artibonite"],
    correct: 2
  },
  {
    q: "Dans quel département se trouve la ville de Plaisance ?",
    options: ["le Centre", "l'Artibonite", "le Nord", "les Nippes"],
    correct: 2
  },
  {
    q: "Dans quel département se trouve la ville de Dondon ?",
    options: ["la Grand'Anse", "le Nord-Est", "le Centre", "le Nord"],
    correct: 3
  },
  {
    q: "Dans quel département se trouve la ville de Milot ?",
    options: ["la Grand'Anse", "le Sud-Est", "le Nord", "l'Ouest"],
    correct: 2
  },
  {
    q: "Dans quel département se trouve la ville de Port-Margot ?",
    options: ["le Nord-Ouest", "l'Ouest", "le Nord", "l'Artibonite"],
    correct: 2
  },
  {
    q: "Dans quel département se trouve la ville de L'Acul-des-Pins ?",
    options: ["le Nord-Est", "le Nord-Ouest", "le Sud-Est", "le Nord"],
    correct: 3
  },
  {
    q: "Dans quel département se trouve la ville de Bahon ?",
    options: ["le Nord", "le Nord-Est", "la Grand'Anse", "le Sud-Est"],
    correct: 0
  },
  {
    q: "Dans quel département se trouve la ville de Camp-Coq ?",
    options: ["le Nord", "la Grand'Anse", "le Sud-Est", "le Nord-Ouest"],
    correct: 0
  },
  {
    q: "Dans quel département se trouve la ville de Les Cayes ?",
    options: ["la Grand'Anse", "le Sud-Est", "le Sud", "l'Artibonite"],
    correct: 2
  },
  {
    q: "Dans quel département se trouve la ville de Port-Salut ?",
    options: ["le Nord-Est", "le Sud", "le Nord-Ouest", "la Grand'Anse"],
    correct: 1
  },
  {
    q: "Dans quel département se trouve la ville de Aquin ?",
    options: ["le Nord-Ouest", "l'Ouest", "le Sud", "le Nord"],
    correct: 2
  },
  {
    q: "Dans quel département se trouve la ville de Camp-Perrin ?",
    options: ["les Nippes", "le Nord-Est", "le Nord-Ouest", "le Sud"],
    correct: 3
  },
  {
    q: "Dans quel département se trouve la ville de Chardonnières ?",
    options: ["le Sud-Est", "le Nord", "l'Artibonite", "le Sud"],
    correct: 3
  },
  {
    q: "Dans quel département se trouve la ville de Côteaux ?",
    options: ["le Nord", "le Sud", "le Nord-Est", "le Centre"],
    correct: 1
  },
  {
    q: "Dans quel département se trouve la ville de Port-à-Piment ?",
    options: ["l'Artibonite", "le Sud", "la Grand'Anse", "le Nord-Est"],
    correct: 1
  },
  {
    q: "Dans quel département se trouve la ville de Roche-à-Bateau ?",
    options: ["l'Artibonite", "le Nord-Ouest", "le Nord-Est", "le Sud"],
    correct: 3
  },
  {
    q: "Dans quel département se trouve la ville de Saint-Louis-du-Sud ?",
    options: ["le Nord", "le Sud-Est", "la Grand'Anse", "le Sud"],
    correct: 3
  },
  {
    q: "Dans quel département se trouve la ville de Torbeck ?",
    options: ["le Centre", "l'Artibonite", "les Nippes", "le Sud"],
    correct: 3
  },
  {
    q: "Dans quel département se trouve la ville de Chantal ?",
    options: ["le Sud-Est", "le Sud", "le Centre", "l'Artibonite"],
    correct: 1
  },
  {
    q: "Dans quel département se trouve la ville de Arniquet ?",
    options: ["l'Artibonite", "le Sud", "le Nord-Ouest", "le Sud-Est"],
    correct: 1
  },
  {
    q: "Dans quel département se trouve la ville de Saint-Jean-du-Sud ?",
    options: ["le Sud-Est", "le Centre", "le Nord-Est", "le Sud"],
    correct: 3
  },
  {
    q: "Dans quel département se trouve la ville de Maniche ?",
    options: ["le Sud", "le Nord-Ouest", "la Grand'Anse", "l'Ouest"],
    correct: 0
  },
  {
    q: "Dans quel département se trouve la ville de Gonaïves ?",
    options: ["l'Artibonite", "le Nord", "le Sud", "l'Ouest"],
    correct: 0
  },
  {
    q: "Dans quel département se trouve la ville de Saint-Marc ?",
    options: ["l'Artibonite", "le Sud", "le Nord-Ouest", "le Nord-Est"],
    correct: 0
  },
  {
    q: "Dans quel département se trouve la ville de Dessalines ?",
    options: ["le Sud-Est", "l'Artibonite", "le Sud", "la Grand'Anse"],
    correct: 1
  },
  {
    q: "Dans quel département se trouve la ville de Gros-Morne ?",
    options: ["le Sud-Est", "l'Artibonite", "le Nord-Est", "le Nord-Ouest"],
    correct: 1
  },
  {
    q: "Dans quel département se trouve la ville de Marmelade ?",
    options: ["le Sud", "les Nippes", "l'Artibonite", "l'Ouest"],
    correct: 2
  },
  {
    q: "Dans quel département se trouve la ville de Ennery ?",
    options: ["le Sud-Est", "le Centre", "l'Artibonite", "le Sud"],
    correct: 2
  },
  {
    q: "Dans quel département se trouve la ville de L'Estère ?",
    options: ["l'Artibonite", "le Nord-Ouest", "le Nord", "l'Ouest"],
    correct: 0
  },
  {
    q: "Dans quel département se trouve la ville de Petite-Rivière-de-l'Artibonite ?",
    options: ["l'Ouest", "le Nord-Ouest", "le Sud-Est", "l'Artibonite"],
    correct: 3
  },
  {
    q: "Dans quel département se trouve la ville de Saint-Michel-de-l'Atalaye ?",
    options: ["le Sud", "la Grand'Anse", "le Centre", "l'Artibonite"],
    correct: 3
  },
  {
    q: "Dans quel département se trouve la ville de Terre-Neuve ?",
    options: ["le Nord", "l'Ouest", "le Centre", "l'Artibonite"],
    correct: 3
  },
  {
    q: "Dans quel département se trouve la ville de Desdunes ?",
    options: ["la Grand'Anse", "le Sud", "l'Artibonite", "le Sud-Est"],
    correct: 2
  },
  {
    q: "Dans quel département se trouve la ville de Grande-Saline ?",
    options: ["le Nord-Ouest", "le Nord", "l'Artibonite", "le Sud"],
    correct: 2
  },
  {
    q: "Dans quel département se trouve la ville de La Chapelle ?",
    options: ["le Centre", "l'Artibonite", "le Nord", "la Grand'Anse"],
    correct: 1
  },
  {
    q: "Dans quel département se trouve la ville de Montrouis ?",
    options: ["le Nord-Est", "l'Artibonite", "le Sud-Est", "le Sud"],
    correct: 1
  },
  {
    q: "Dans quel département se trouve la ville de Verrettes ?",
    options: ["l'Artibonite", "le Sud", "le Nord-Est", "les Nippes"],
    correct: 0
  },
  {
    q: "Dans quel département se trouve la ville de Liancourt ?",
    options: ["le Sud", "les Nippes", "l'Artibonite", "le Nord-Ouest"],
    correct: 2
  },
  {
    q: "Dans quel département se trouve la ville de Hinche ?",
    options: ["le Centre", "les Nippes", "l'Ouest", "le Nord"],
    correct: 0
  },
  {
    q: "Dans quel département se trouve la ville de Mirebalais ?",
    options: ["les Nippes", "le Sud", "le Sud-Est", "le Centre"],
    correct: 3
  },
  {
    q: "Dans quel département se trouve la ville de Savanette ?",
    options: ["l'Artibonite", "le Centre", "le Sud-Est", "les Nippes"],
    correct: 1
  },
  {
    q: "Dans quel département se trouve la ville de Lascahobas ?",
    options: ["le Nord", "le Centre", "l'Artibonite", "le Sud-Est"],
    correct: 1
  },
  {
    q: "Dans quel département se trouve la ville de Belladère ?",
    options: ["l'Artibonite", "le Centre", "l'Ouest", "la Grand'Anse"],
    correct: 1
  },
  {
    q: "Dans quel département se trouve la ville de Boucan-Carré ?",
    options: ["l'Artibonite", "le Sud", "le Nord-Ouest", "le Centre"],
    correct: 3
  },
  {
    q: "Dans quel département se trouve la ville de Saut-d'Eau ?",
    options: ["l'Artibonite", "les Nippes", "le Centre", "la Grand'Anse"],
    correct: 2
  },
  {
    q: "Dans quel département se trouve la ville de Thomassique ?",
    options: ["le Nord-Ouest", "le Sud", "le Centre", "l'Ouest"],
    correct: 2
  },
  {
    q: "Dans quel département se trouve la ville de Thomonde ?",
    options: ["le Nord-Ouest", "l'Ouest", "le Centre", "le Sud"],
    correct: 2
  },
  {
    q: "Dans quel département se trouve la ville de Maïssade ?",
    options: ["les Nippes", "le Nord", "le Centre", "le Nord-Est"],
    correct: 2
  },
  {
    q: "Dans quel département se trouve la ville de Cerca-la-Source ?",
    options: ["le Nord-Est", "le Centre", "le Sud-Est", "l'Artibonite"],
    correct: 1
  },
  {
    q: "Dans quel département se trouve la ville de Cerca-Carvajal ?",
    options: ["le Centre", "les Nippes", "le Sud-Est", "la Grand'Anse"],
    correct: 0
  },
  {
    q: "Dans quel département se trouve la ville de Miragoâne ?",
    options: ["les Nippes", "le Sud-Est", "l'Artibonite", "le Nord"],
    correct: 0
  },
  {
    q: "Dans quel département se trouve la ville de Anse-à-Veau ?",
    options: ["le Nord-Ouest", "le Sud-Est", "le Nord-Est", "les Nippes"],
    correct: 3
  },
  {
    q: "Dans quel département se trouve la ville de Fonds-des-Nègres ?",
    options: ["la Grand'Anse", "le Nord-Est", "les Nippes", "l'Ouest"],
    correct: 2
  },
  {
    q: "Dans quel département se trouve la ville de L'Asile ?",
    options: ["la Grand'Anse", "l'Ouest", "les Nippes", "l'Artibonite"],
    correct: 2
  },
  {
    q: "Dans quel département se trouve la ville de Petit-Trou-de-Nippes ?",
    options: ["les Nippes", "le Nord", "le Nord-Ouest", "l'Artibonite"],
    correct: 0
  },
  {
    q: "Dans quel département se trouve la ville de Plaisance-du-Sud ?",
    options: ["l'Ouest", "les Nippes", "la Grand'Anse", "le Nord-Ouest"],
    correct: 1
  },
  {
    q: "Dans quel département se trouve la ville de Baradères ?",
    options: ["le Sud", "le Nord-Ouest", "le Nord-Est", "les Nippes"],
    correct: 3
  },
  {
    q: "Dans quel département se trouve la ville de Grand-Boucan ?",
    options: ["le Centre", "les Nippes", "le Sud", "le Nord-Ouest"],
    correct: 1
  },
  {
    q: "Dans quel département se trouve la ville de Paillant ?",
    options: ["le Centre", "le Nord-Est", "le Nord", "les Nippes"],
    correct: 3
  },
  {
    q: "Dans quel département se trouve la ville de Arnaud ?",
    options: ["la Grand'Anse", "les Nippes", "le Sud", "le Nord-Ouest"],
    correct: 1
  },
  {
    q: "Dans quel département se trouve la ville de Port-de-Paix ?",
    options: ["les Nippes", "le Sud", "l'Artibonite", "le Nord-Ouest"],
    correct: 3
  },
  {
    q: "Dans quel département se trouve la ville de Jean-Rabel ?",
    options: ["l'Ouest", "le Nord-Ouest", "le Nord-Est", "le Nord"],
    correct: 1
  },
  {
    q: "Dans quel département se trouve la ville de Saint-Louis-du-Nord ?",
    options: ["le Sud-Est", "l'Artibonite", "le Nord-Ouest", "la Grand'Anse"],
    correct: 2
  },
  {
    q: "Dans quel département se trouve la ville de Bassin-Bleu ?",
    options: ["le Nord-Ouest", "l'Ouest", "la Grand'Anse", "le Sud"],
    correct: 0
  },
  {
    q: "Dans quel département se trouve la ville de Chansolme ?",
    options: ["le Nord", "le Nord-Est", "les Nippes", "le Nord-Ouest"],
    correct: 3
  },
  {
    q: "Dans quel département se trouve la ville de La Tortue ?",
    options: ["l'Artibonite", "le Nord-Ouest", "le Nord-Est", "l'Ouest"],
    correct: 1
  },
  {
    q: "Dans quel département se trouve la ville de Môle-Saint-Nicolas ?",
    options: ["le Nord-Est", "le Nord-Ouest", "le Sud", "la Grand'Anse"],
    correct: 1
  },
  {
    q: "Dans quel département se trouve la ville de Baie-de-Henne ?",
    options: ["le Sud", "le Nord-Ouest", "le Centre", "la Grand'Anse"],
    correct: 1
  },
  {
    q: "Dans quel département se trouve la ville de Bombardopolis ?",
    options: ["le Nord", "les Nippes", "le Nord-Ouest", "le Centre"],
    correct: 2
  },
  {
    q: "Dans quel département se trouve la ville de Fort-Liberté ?",
    options: ["la Grand'Anse", "le Nord-Est", "l'Ouest", "les Nippes"],
    correct: 1
  },
  {
    q: "Dans quel département se trouve la ville de Ouanaminthe ?",
    options: ["le Nord-Est", "la Grand'Anse", "l'Artibonite", "le Nord-Ouest"],
    correct: 0
  },
  {
    q: "Dans quel département se trouve la ville de Trou-du-Nord ?",
    options: ["le Centre", "les Nippes", "l'Ouest", "le Nord-Est"],
    correct: 3
  },
  {
    q: "Dans quel département se trouve la ville de Terrier-Rouge ?",
    options: ["le Nord-Ouest", "le Centre", "le Nord-Est", "l'Ouest"],
    correct: 2
  },
  {
    q: "Dans quel département se trouve la ville de Carice ?",
    options: ["la Grand'Anse", "l'Artibonite", "le Nord-Est", "le Nord"],
    correct: 2
  },
  {
    q: "Dans quel département se trouve la ville de Capotille ?",
    options: ["le Nord-Est", "le Nord-Ouest", "le Sud", "les Nippes"],
    correct: 0
  },
  {
    q: "Dans quel département se trouve la ville de Mont-Organisé ?",
    options: ["l'Artibonite", "la Grand'Anse", "l'Ouest", "le Nord-Est"],
    correct: 3
  },
  {
    q: "Dans quel département se trouve la ville de Sainte-Suzanne ?",
    options: ["la Grand'Anse", "le Nord-Est", "le Sud-Est", "le Centre"],
    correct: 1
  },
  {
    q: "Dans quel département se trouve la ville de Perches ?",
    options: ["le Centre", "la Grand'Anse", "le Nord-Est", "le Nord-Ouest"],
    correct: 2
  },
  {
    q: "Dans quel département se trouve la ville de Mombin-Crochu ?",
    options: ["les Nippes", "le Centre", "l'Ouest", "le Nord-Est"],
    correct: 3
  },
  {
    q: "Dans quel département se trouve la ville de Vallières ?",
    options: ["la Grand'Anse", "le Centre", "le Nord-Est", "le Sud"],
    correct: 2
  },
  {
    q: "Dans quel département se trouve la ville de Caracol ?",
    options: ["l'Artibonite", "le Centre", "le Nord-Est", "le Nord"],
    correct: 2
  },
  {
    q: "Dans quel département se trouve la ville de Grand-Bassin ?",
    options: ["le Sud-Est", "la Grand'Anse", "le Centre", "le Nord-Est"],
    correct: 3
  },
  {
    q: "Dans quel département se trouve la ville de Jacmel ?",
    options: ["les Nippes", "le Sud", "le Nord", "le Sud-Est"],
    correct: 3
  },
  {
    q: "Dans quel département se trouve la ville de Bainet ?",
    options: ["l'Ouest", "le Nord-Ouest", "le Sud", "le Sud-Est"],
    correct: 3
  },
  {
    q: "Dans quel département se trouve la ville de Grand-Gosier ?",
    options: ["la Grand'Anse", "le Sud-Est", "le Nord", "le Nord-Est"],
    correct: 1
  },
  {
    q: "Dans quel département se trouve la ville de Belle-Anse ?",
    options: ["l'Ouest", "le Centre", "l'Artibonite", "le Sud-Est"],
    correct: 3
  },
  {
    q: "Dans quel département se trouve la ville de Thiotte ?",
    options: ["le Sud-Est", "l'Ouest", "la Grand'Anse", "le Nord-Est"],
    correct: 0
  },
  {
    q: "Dans quel département se trouve la ville de Anse-à-Pitre ?",
    options: ["le Nord", "le Sud-Est", "le Centre", "la Grand'Anse"],
    correct: 1
  },
  {
    q: "Dans quel département se trouve la ville de Cayes-Jacmel ?",
    options: ["le Nord-Est", "le Sud", "l'Artibonite", "le Sud-Est"],
    correct: 3
  },
  {
    q: "Dans quel département se trouve la ville de Marigot ?",
    options: ["le Nord-Est", "l'Ouest", "le Nord", "le Sud-Est"],
    correct: 3
  },
  {
    q: "Dans quel département se trouve la ville de La Vallée-de-Jacmel ?",
    options: ["le Sud-Est", "les Nippes", "le Nord", "le Nord-Ouest"],
    correct: 0
  },
  {
    q: "Dans quel département se trouve la ville de Côtes-de-Fer ?",
    options: ["le Sud-Est", "le Nord-Ouest", "le Nord-Est", "l'Artibonite"],
    correct: 0
  },
  {
    q: "Dans quel département se trouve la ville de Jérémie ?",
    options: ["les Nippes", "le Sud-Est", "le Nord-Est", "la Grand'Anse"],
    correct: 3
  },
  {
    q: "Dans quel département se trouve la ville de Abricots ?",
    options: ["la Grand'Anse", "les Nippes", "l'Artibonite", "le Sud"],
    correct: 0
  },
  {
    q: "Dans quel département se trouve la ville de Dame-Marie ?",
    options: ["le Centre", "le Sud-Est", "l'Artibonite", "la Grand'Anse"],
    correct: 3
  },
  {
    q: "Dans quel département se trouve la ville de Anse-d'Hainault ?",
    options: ["le Nord-Ouest", "la Grand'Anse", "le Centre", "les Nippes"],
    correct: 1
  },
  {
    q: "Dans quel département se trouve la ville de Beaumont ?",
    options: ["le Sud", "les Nippes", "le Nord", "la Grand'Anse"],
    correct: 3
  },
  {
    q: "Dans quel département se trouve la ville de Chambellan ?",
    options: ["l'Artibonite", "le Nord-Est", "le Nord-Ouest", "la Grand'Anse"],
    correct: 3
  },
  {
    q: "Dans quel département se trouve la ville de Corail ?",
    options: ["le Sud", "la Grand'Anse", "les Nippes", "l'Ouest"],
    correct: 1
  },
  {
    q: "Dans quel département se trouve la ville de Pestel ?",
    options: ["la Grand'Anse", "le Centre", "l'Artibonite", "les Nippes"],
    correct: 0
  },
  {
    q: "Dans quel département se trouve la ville de Roseaux ?",
    options: ["le Sud-Est", "la Grand'Anse", "l'Ouest", "le Sud"],
    correct: 1
  },
  {
    q: "Dans quel département se trouve la ville de Les Irois ?",
    options: ["le Nord-Ouest", "l'Ouest", "la Grand'Anse", "le Centre"],
    correct: 2
  },
  {
    q: "Dans quel département se trouve la ville de Moron ?",
    options: ["la Grand'Anse", "l'Ouest", "le Sud", "l'Artibonite"],
    correct: 0
  },
  {
    q: "Dans quel département se trouve la ville de Trou-Bonbon ?",
    options: ["le Centre", "la Grand'Anse", "l'Artibonite", "le Sud"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Port-à-Piment", "Croix-des-Bouquets", "Plaine-du-Nord", "Savanette"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Savanette", "Fonds-Verrettes", "Jacmel", "Ennery"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Trou-Bonbon", "Port-au-Prince", "Les Irois", "Anse-à-Veau"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Trou-Bonbon", "La Vallée-de-Jacmel", "Saint-Louis-du-Nord", "Kenscoff"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Lascahobas", "Maniche", "Cabaret", "Boucan-Carré"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Môle-Saint-Nicolas", "Kenscoff", "Trou-du-Nord", "Petite-Rivière-de-l'Artibonite"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Port-Margot", "Petit-Trou-de-Nippes", "Léogâne", "Baie-de-Henne"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Port-au-Prince", "La Vallée-de-Jacmel", "Chantal", "Lascahobas"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Trou-Bonbon", "Carrefour", "Ennery", "Camp-Coq"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Mirebalais", "Trou-Bonbon", "L'Asile", "Pointe-à-Raquette"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Cornillon", "Fort-Liberté", "Saint-Jean-du-Sud", "Acul-du-Nord"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Thomazeau", "Miragoâne", "Abricots", "Arniquet"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Ouanaminthe", "Cornillon", "Bombardopolis", "Gros-Morne"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Saint-Marc", "Côtes-de-Fer", "Cornillon", "Fonds-des-Nègres"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Corail", "Thomassique", "Jacmel", "Pétion-Ville"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Bassin-Bleu", "Carrefour", "Les Cayes", "Ouanaminthe"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Fonds-Verrettes", "Caracol", "Jean-Rabel", "Montrouis"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Bainet", "Thomazeau", "Les Cayes", "Port-Margot"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["L'Estère", "Arcahaie", "Chambellan", "Anse-à-Veau"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Miragoâne", "Pointe-à-Raquette", "Port-Salut", "Liancourt"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Jérémie", "L'Estère", "Grand-Goâve", "Bahon"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Cité Soleil", "Ennery", "Mont-Organisé", "Môle-Saint-Nicolas"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Dame-Marie", "Tabarre", "Thomonde", "Grand-Bassin"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Camp-Coq", "Grande-Saline", "Saint-Jean-du-Sud", "Gressier"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Delmas", "Maïssade", "Anse-à-Pitre", "Marigot"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Anse-d'Hainault", "Belle-Anse", "Cité Soleil", "Trou-Bonbon"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Petit-Goâve", "Saint-Louis-du-Sud", "Bainet", "Carice"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Tabarre", "Montrouis", "Plaine-du-Nord", "Verrettes"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Maniche", "Cornillon", "Saint-Louis-du-Nord", "L'Acul-des-Pins"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Delmas", "Côteaux", "Torbeck", "Petite-Rivière-de-l'Artibonite"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Chantal", "Marmelade", "Petit-Goâve", "Grand-Gosier"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Dondon", "Trou-du-Nord", "Dessalines", "Kenscoff"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Arniquet", "Anse-à-Pitre", "Caracol", "Fonds-Verrettes"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Thomonde", "Cayes-Jacmel", "Boucan-Carré", "Pétion-Ville"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Cap-Haïtien", "Ennery", "Pointe-à-Raquette", "Plaine-du-Nord"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Terre-Neuve", "Dondon", "Gressier", "Limonade"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Limonade", "Acul-du-Nord", "Borgne", "Petit-Goâve"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Arcahaie", "Dondon", "Chansolme", "Corail"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Hinche", "Gonaïves", "Léogâne", "Abricots"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Corail", "Gros-Morne", "Kenscoff", "Terrier-Rouge"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Terrier-Rouge", "Hinche", "Port-Margot", "Delmas"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Mont-Organisé", "Bahon", "Tabarre", "Grande-Saline"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Cabaret", "Saint-Louis-du-Nord", "Maïssade", "La Chapelle"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["La Tortue", "Cerca-la-Source", "Delmas", "Saint-Louis-du-Sud"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Bainet", "Milot", "Jacmel", "Pétion-Ville"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Mirebalais", "Maniche", "Grande-Saline", "Pétion-Ville"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Baradères", "Cornillon", "Cerca-Carvajal", "Maniche"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Moron", "Montrouis", "Léogâne", "Anse-d'Hainault"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Borgne", "Cabaret", "Aquin", "Mombin-Crochu"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Thomonde", "Port-Margot", "Saut-d'Eau", "Pointe-à-Raquette"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Port-au-Prince", "Gonaïves", "Trou-Bonbon", "Dondon"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Plaisance-du-Sud", "L'Asile", "Cornillon", "Pilate"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Cabaret", "Saint-Louis-du-Sud", "Fonds-des-Nègres", "Anse-d'Hainault"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Port-Margot", "Thomonde", "Cayes-Jacmel", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Cayes-Jacmel", "Côtes-de-Fer", "L'Asile", "Cité Soleil"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Moron", "Arnaud", "Gonaïves", "Ganthier"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Les Cayes", "Arcahaie", "Saint-Louis-du-Nord", "Grand-Gosier"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Jérémie", "Carrefour", "Port-Salut", "Anse-d'Hainault"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Grand-Goâve", "Pilate", "Grand-Gosier", "Perches"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Arnaud", "Grand-Gosier", "Carrefour", "Dessalines"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Thomazeau", "Boucan-Carré", "Marigot", "Chardonnières"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Cornillon", "Thomonde", "Hinche", "Gonaïves"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Grand-Gosier", "Delmas", "Bombardopolis", "La Vallée-de-Jacmel"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Grand-Bassin", "Port-au-Prince", "Corail", "Limonade"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Port-à-Piment", "Môle-Saint-Nicolas", "Bahon", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Savanette", "Ganthier", "Fort-Liberté", "Pilate"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Carrefour", "Gonaïves", "La Chapelle", "Grand-Gosier"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Plaine-du-Nord", "Saint-Michel-de-l'Atalaye", "Cabaret", "Mirebalais"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Pointe-à-Raquette", "Roseaux", "Carice", "Sainte-Suzanne"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Sainte-Suzanne", "Arcahaie", "Milot", "Pestel"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Milot", "Kenscoff", "Camp-Perrin", "Belle-Anse"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Acul-du-Nord", "Montrouis", "Cité Soleil", "Cerca-Carvajal"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Carice", "Marmelade", "Cité Soleil", "La Vallée-de-Jacmel"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Thomazeau", "Vallières", "Cerca-la-Source", "Perches"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Grand-Bassin", "Saint-Louis-du-Sud", "Arcahaie", "Jacmel"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Belladère", "Caracol", "Croix-des-Bouquets", "Limonade"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Cornillon", "Maniche", "La Vallée-de-Jacmel", "Trou-du-Nord"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Port-de-Paix", "Cayes-Jacmel", "Tabarre", "Môle-Saint-Nicolas"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Corail", "Carrefour", "Boucan-Carré", "Caracol"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Dondon", "Belle-Anse", "Paillant", "Cabaret"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Roseaux", "Beaumont", "Cité Soleil", "Dessalines"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Thomassique", "Trou-du-Nord", "Limonade", "Tabarre"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Jérémie", "Cerca-Carvajal", "Arnaud", "Arcahaie"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Jérémie", "Gressier", "Port-à-Piment", "Bahon"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Arniquet", "Léogâne", "Jean-Rabel", "Les Cayes"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Kenscoff", "Terrier-Rouge", "L'Acul-des-Pins", "Chambellan"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Maniche", "Les Cayes", "Gressier", "Camp-Coq"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Chantal", "L'Estère", "La Vallée-de-Jacmel", "Fonds-Verrettes"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Saint-Marc", "Chambellan", "Port-Salut", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Vallières", "Kenscoff", "Montrouis", "Anse-d'Hainault"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Bahon", "Croix-des-Bouquets", "Moron", "Abricots"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Saint-Louis-du-Sud", "Cabaret", "Paillant", "Trou-Bonbon"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Chantal", "Belle-Anse", "Port-à-Piment", "Fonds-Verrettes"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Chambellan", "Gressier", "Grand-Gosier", "Gonaïves"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["La Chapelle", "Arcahaie", "Baradères", "Thomassique"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Liancourt", "Grand-Goâve", "Thiotte", "Cayes-Jacmel"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Marigot", "Mont-Organisé", "Saint-Louis-du-Sud", "Grand-Goâve"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Trou-du-Nord", "Grand-Goâve", "Boucan-Carré", "Mombin-Crochu"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Port-au-Prince", "Bombardopolis", "Sainte-Suzanne", "Saint-Michel-de-l'Atalaye"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Ouest ?",
    options: ["Thiotte", "Petit-Goâve", "Limonade", "La Chapelle"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Cité Soleil", "Plaisance", "Miragoâne", "Marmelade"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Pestel", "Camp-Coq", "Savanette", "Desdunes"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Pilate", "Plaisance-du-Sud", "Boucan-Carré", "Cerca-Carvajal"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Croix-des-Bouquets", "Milot", "Roseaux", "Maïssade"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Aquin", "Bombardopolis", "Bahon", "Verrettes"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Port-Salut", "Pilate", "Delmas", "Léogâne"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Paillant", "Capotille", "Plaisance", "Maïssade"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Acul-du-Nord", "L'Estère", "Beaumont", "Roche-à-Bateau"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Bainet", "Camp-Coq", "Trou-du-Nord", "Saint-Marc"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Grand-Bassin", "Limonade", "Pétion-Ville", "Grand-Goâve"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Belladère", "Boucan-Carré", "Chardonnières", "L'Acul-des-Pins"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Saint-Michel-de-l'Atalaye", "Milot", "Torbeck", "Gressier"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Pétion-Ville", "Plaisance", "Perches", "Sainte-Suzanne"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Thomassique", "La Vallée-de-Jacmel", "Cerca-Carvajal", "L'Acul-des-Pins"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Acul-du-Nord", "Caracol", "Torbeck", "Saint-Michel-de-l'Atalaye"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Pilate", "Verrettes", "Saint-Jean-du-Sud", "Ganthier"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Milot", "Jean-Rabel", "Maniche", "Pestel"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Plaine-du-Nord", "Marmelade", "Anse-d'Hainault", "Torbeck"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Ouanaminthe", "Bassin-Bleu", "Camp-Coq", "Aquin"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Plaisance", "Petit-Trou-de-Nippes", "Terrier-Rouge", "Mombin-Crochu"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Petite-Rivière-de-l'Artibonite", "Bassin-Bleu", "Acul-du-Nord", "Trou-Bonbon"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Port-Margot", "La Vallée-de-Jacmel", "Baie-de-Henne", "Grand-Gosier"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Grande-Saline", "La Vallée-de-Jacmel", "Cap-Haïtien", "Boucan-Carré"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Léogâne", "Arniquet", "Les Cayes", "Pilate"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Terrier-Rouge", "Bombardopolis", "Caracol", "Cap-Haïtien"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Thomonde", "Port-Margot", "La Chapelle", "Cornillon"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Kenscoff", "Dondon", "Maïssade", "Jean-Rabel"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Tabarre", "Pétion-Ville", "Acul-du-Nord", "Perches"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Perches", "Chambellan", "Petit-Goâve", "Milot"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Perches", "Limonade", "Kenscoff", "Paillant"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Bahon", "Port-à-Piment", "Saint-Jean-du-Sud", "La Vallée-de-Jacmel"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Camp-Coq", "Bassin-Bleu", "Anse-à-Pitre", "Thiotte"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Vallières", "Port-Margot", "Bombardopolis", "L'Asile"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Saint-Michel-de-l'Atalaye", "Saint-Louis-du-Nord", "L'Acul-des-Pins", "Carice"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Marmelade", "Fonds-des-Nègres", "Arniquet", "Bahon"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Bombardopolis", "Ennery", "Côtes-de-Fer", "Bahon"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Pointe-à-Raquette", "Chansolme", "Camp-Coq", "La Chapelle"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Dondon", "Gressier", "Corail", "Léogâne"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Baradères", "Corail", "Grand-Gosier", "Borgne"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Moron", "Cerca-la-Source", "La Tortue", "Dondon"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Plaisance", "Môle-Saint-Nicolas", "Thomonde", "Port-à-Piment"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Maniche", "Marigot", "Gros-Morne", "Limonade"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Thomassique", "Camp-Coq", "La Vallée-de-Jacmel", "Miragoâne"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Petit-Goâve", "Terre-Neuve", "Port-Margot", "Plaisance-du-Sud"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["L'Asile", "Saint-Louis-du-Sud", "Camp-Coq", "La Tortue"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Bainet", "Cap-Haïtien", "Caracol", "Ganthier"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Dame-Marie", "Pestel", "Milot", "Cayes-Jacmel"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Cerca-Carvajal", "Saint-Louis-du-Sud", "Bainet", "Limonade"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Saint-Jean-du-Sud", "Cap-Haïtien", "Chambellan", "Bassin-Bleu"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Pilate", "Torbeck", "Grand-Goâve", "Kenscoff"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Dondon", "Mirebalais", "Belladère", "Pestel"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Maïssade", "Thomazeau", "Thomassique", "Limonade"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Hinche", "Pétion-Ville", "L'Acul-des-Pins", "Les Irois"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Anse-à-Veau", "Jean-Rabel", "Arcahaie", "L'Acul-des-Pins"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Pilate", "Capotille", "Paillant", "Carice"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Plaine-du-Nord", "Fonds-des-Nègres", "Fonds-Verrettes", "Saint-Louis-du-Nord"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Cerca-la-Source", "Corail", "Thomazeau", "Bahon"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Thiotte", "Plaisance-du-Sud", "Dondon", "Mirebalais"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Cap-Haïtien", "Saint-Jean-du-Sud", "Vallières", "Côtes-de-Fer"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Perches", "Vallières", "Anse-à-Pitre", "Borgne"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Camp-Perrin", "Thiotte", "Boucan-Carré", "Camp-Coq"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Miragoâne", "Limonade", "Camp-Perrin", "L'Estère"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Gonaïves", "Mombin-Crochu", "Perches", "Dondon"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Port-Margot", "Léogâne", "Bainet", "Arniquet"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["L'Estère", "Marigot", "Dondon", "Cerca-la-Source"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Thomassique", "Grande-Saline", "Savanette", "Acul-du-Nord"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Moron", "Perches", "Saint-Louis-du-Nord", "Camp-Coq"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Saint-Marc", "L'Acul-des-Pins", "Mombin-Crochu", "Caracol"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Verrettes", "Cap-Haïtien", "Fort-Liberté", "Liancourt"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Dondon", "Capotille", "Moron", "Cayes-Jacmel"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Kenscoff", "Petite-Rivière-de-l'Artibonite", "Camp-Coq", "Thiotte"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Acul-du-Nord", "Port-de-Paix", "Fonds-des-Nègres", "Marmelade"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Torbeck", "Paillant", "Plaine-du-Nord", "Miragoâne"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Saint-Louis-du-Sud", "Acul-du-Nord", "Verrettes", "Fort-Liberté"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["L'Estère", "Cerca-Carvajal", "Bassin-Bleu", "Bahon"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Grand-Bassin", "Limonade", "Liancourt", "Caracol"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Jérémie", "Saint-Louis-du-Nord", "Bahon", "Môle-Saint-Nicolas"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Saint-Marc", "Acul-du-Nord", "Cayes-Jacmel", "Grand-Gosier"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Montrouis", "Plaine-du-Nord", "Grand-Boucan", "Léogâne"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Anse-à-Pitre", "Cornillon", "Pilate", "Ganthier"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["La Vallée-de-Jacmel", "Marigot", "Saut-d'Eau", "Bahon"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Plaisance", "Dessalines", "Corail", "Bassin-Bleu"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Plaisance", "Jean-Rabel", "Tabarre", "Chambellan"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Grand-Gosier", "Petit-Trou-de-Nippes", "Bahon", "Belle-Anse"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Port-au-Prince", "Port-Margot", "Cerca-Carvajal", "Croix-des-Bouquets"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Plaisance", "Bainet", "Thomassique", "Terre-Neuve"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Chansolme", "Thiotte", "Camp-Coq", "Roseaux"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Cerca-la-Source", "Acul-du-Nord", "Pestel", "Lascahobas"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Plaisance-du-Sud", "Cap-Haïtien", "Belladère", "Fort-Liberté"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Gonaïves", "Jacmel", "Dondon", "Thomazeau"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Pétion-Ville", "Milot", "La Vallée-de-Jacmel", "Saint-Louis-du-Sud"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Grand-Gosier", "Plaisance-du-Sud", "Camp-Coq", "Côtes-de-Fer"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Montrouis", "Caracol", "Grand-Boucan", "Limonade"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Camp-Coq", "Delmas", "La Chapelle", "Croix-des-Bouquets"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Arcahaie", "Pilate", "Port-de-Paix", "Cayes-Jacmel"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Gonaïves", "Cap-Haïtien", "Ennery", "Tabarre"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Cornillon", "Mirebalais", "Plaine-du-Nord", "Côteaux"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Port-de-Paix", "Acul-du-Nord", "La Tortue", "Jérémie"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["Belle-Anse", "Limonade", "Cornillon", "Roseaux"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord ?",
    options: ["La Chapelle", "Bahon", "Aquin", "Arnaud"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Sainte-Suzanne", "Fort-Liberté", "Arniquet", "Gros-Morne"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Aquin", "Tabarre", "Montrouis", "Ouanaminthe"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Chambellan", "Saint-Michel-de-l'Atalaye", "Saint-Louis-du-Sud", "Gonaïves"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Baradères", "Gressier", "Maniche", "Camp-Coq"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Saint-Louis-du-Sud", "Montrouis", "Terre-Neuve", "Mont-Organisé"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Gonaïves", "Camp-Perrin", "Plaisance-du-Sud", "Belle-Anse"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Tabarre", "Mombin-Crochu", "Saut-d'Eau", "Côteaux"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Les Cayes", "Liancourt", "Petit-Trou-de-Nippes", "Cerca-la-Source"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Arnaud", "Jacmel", "Torbeck", "Mont-Organisé"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Camp-Perrin", "Anse-d'Hainault", "Saint-Michel-de-l'Atalaye", "Grand-Gosier"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Gonaïves", "Sainte-Suzanne", "Acul-du-Nord", "Roche-à-Bateau"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Perches", "Torbeck", "Ouanaminthe", "L'Asile"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Trou-du-Nord", "Chantal", "Cerca-Carvajal", "Hinche"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Les Irois", "Carrefour", "Roche-à-Bateau", "Trou-Bonbon"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Fort-Liberté", "Jérémie", "Bassin-Bleu", "Côteaux"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Grand-Bassin", "Roche-à-Bateau", "Kenscoff", "Belle-Anse"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Moron", "Les Irois", "Belladère", "Maniche"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Abricots", "Les Cayes", "Caracol", "Léogâne"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Saint-Marc", "Croix-des-Bouquets", "Saint-Louis-du-Sud", "Port-de-Paix"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Capotille", "Côteaux", "Mont-Organisé", "Plaine-du-Nord"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Chardonnières", "Fonds-Verrettes", "Cap-Haïtien", "Grand-Gosier"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Plaisance-du-Sud", "Grand-Boucan", "Fort-Liberté", "Chantal"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Terre-Neuve", "Montrouis", "Plaisance", "Port-Salut"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Dessalines", "Cayes-Jacmel", "Tabarre", "Chardonnières"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Tabarre", "Limonade", "Aquin", "Corail"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Tabarre", "Grand-Gosier", "Saint-Jean-du-Sud", "Boucan-Carré"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Saint-Louis-du-Sud", "Verrettes", "Saint-Michel-de-l'Atalaye", "Dondon"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Saint-Jean-du-Sud", "Port-Margot", "Ganthier", "Belladère"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Dondon", "Mont-Organisé", "Pointe-à-Raquette", "Roche-à-Bateau"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Les Irois", "Côteaux", "Chambellan", "Anse-d'Hainault"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Camp-Perrin", "Desdunes", "Port-de-Paix", "Arnaud"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Arnaud", "Petite-Rivière-de-l'Artibonite", "Miragoâne", "Port-à-Piment"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Gonaïves", "Arniquet", "Carrefour", "Corail"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Terre-Neuve", "Port-Salut", "Arnaud", "Belle-Anse"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Môle-Saint-Nicolas", "Saint-Louis-du-Sud", "Baie-de-Henne", "Petite-Rivière-de-l'Artibonite"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Maniche", "La Chapelle", "Arcahaie", "Ouanaminthe"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Léogâne", "Abricots", "Aquin", "Petit-Trou-de-Nippes"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Terre-Neuve", "Carrefour", "Savanette", "Port-Salut"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Port-à-Piment", "Plaisance-du-Sud", "Anse-à-Veau", "Gonaïves"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Baradères", "Pointe-à-Raquette", "Chantal", "Corail"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Petit-Goâve", "Thomassique", "Verrettes", "Torbeck"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Fonds-Verrettes", "Port-au-Prince", "Aquin", "Pilate"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Kenscoff", "Port-Salut", "Bombardopolis", "Borgne"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Gros-Morne", "Roche-à-Bateau", "Mirebalais", "Gressier"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Terrier-Rouge", "Gros-Morne", "Belladère", "Arniquet"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Chantal", "Jacmel", "Cayes-Jacmel", "Corail"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Arnaud", "L'Estère", "Aquin", "Jérémie"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Abricots", "Maniche", "Grand-Bassin", "Trou-Bonbon"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Acul-du-Nord", "Port-Salut", "Plaisance-du-Sud", "Marigot"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Torbeck", "Mombin-Crochu", "La Chapelle", "Anse-d'Hainault"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Saint-Louis-du-Nord", "Port-à-Piment", "Grande-Saline", "Marmelade"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["La Tortue", "Mont-Organisé", "Saint-Louis-du-Nord", "Chardonnières"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Belle-Anse", "Petit-Goâve", "Cité Soleil", "Côteaux"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Chardonnières", "Trou-Bonbon", "Gressier", "Petit-Goâve"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Mirebalais", "Port-à-Piment", "Plaisance", "Lascahobas"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Chardonnières", "Gros-Morne", "Mombin-Crochu", "Montrouis"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Maniche", "Dessalines", "Verrettes", "Sainte-Suzanne"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Môle-Saint-Nicolas", "Miragoâne", "Port-Salut", "Côtes-de-Fer"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Chantal", "Petit-Goâve", "Carrefour", "Maïssade"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["L'Asile", "Môle-Saint-Nicolas", "Les Cayes", "Grand-Gosier"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Les Cayes", "Cerca-Carvajal", "L'Acul-des-Pins", "Croix-des-Bouquets"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Petit-Goâve", "Gonaïves", "Cornillon", "Camp-Perrin"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Mirebalais", "Limonade", "Saint-Louis-du-Sud", "L'Asile"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Dessalines", "Paillant", "Maniche", "Carrefour"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Cayes-Jacmel", "Port-au-Prince", "Bassin-Bleu", "Arniquet"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Aquin", "Pilate", "Anse-à-Pitre", "Kenscoff"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Cap-Haïtien", "Port-à-Piment", "Anse-à-Pitre", "Carrefour"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Petit-Goâve", "Plaine-du-Nord", "L'Estère", "Roche-à-Bateau"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Port-à-Piment", "Saut-d'Eau", "Fonds-des-Nègres", "Ennery"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Aquin", "Cerca-Carvajal", "Terrier-Rouge", "Lascahobas"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Chantal", "La Tortue", "Cité Soleil", "Cerca-Carvajal"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Côteaux", "Hinche", "Borgne", "La Chapelle"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Côteaux", "Terrier-Rouge", "Fort-Liberté", "Grand-Bassin"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Côteaux", "Desdunes", "Caracol", "Montrouis"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Les Cayes", "Moron", "Petit-Goâve", "Carrefour"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Côtes-de-Fer", "Camp-Perrin", "Arcahaie", "Acul-du-Nord"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Moron", "Port-à-Piment", "La Tortue", "Montrouis"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Pilate", "Carrefour", "Saint-Jean-du-Sud", "Arnaud"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Carice", "Roseaux", "Torbeck", "Pestel"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Roche-à-Bateau", "Marigot", "Dessalines", "Roseaux"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Thomonde", "Arcahaie", "Saint-Louis-du-Sud", "Perches"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Mont-Organisé", "Acul-du-Nord", "Les Cayes", "Liancourt"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Saint-Louis-du-Sud", "Borgne", "Pointe-à-Raquette", "Plaine-du-Nord"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Maniche", "Carrefour", "Trou-du-Nord", "Mirebalais"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["La Tortue", "Grand-Boucan", "Chardonnières", "Port-Margot"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Maniche", "L'Acul-des-Pins", "Boucan-Carré", "Desdunes"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["La Tortue", "Croix-des-Bouquets", "Maïssade", "Camp-Perrin"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Chantal", "Dessalines", "Cayes-Jacmel", "Kenscoff"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Mirebalais", "Cabaret", "Cité Soleil", "Roche-à-Bateau"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Delmas", "Baradères", "Fonds-des-Nègres", "Port-à-Piment"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Camp-Perrin", "Jean-Rabel", "Gonaïves", "Terre-Neuve"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Ennery", "Boucan-Carré", "Chardonnières", "Trou-Bonbon"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Pilate", "Cerca-Carvajal", "Vallières", "Arniquet"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Terrier-Rouge", "Cité Soleil", "Port-à-Piment", "Dame-Marie"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Perches", "Saint-Jean-du-Sud", "Grand-Bassin", "Vallières"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["L'Estère", "Bombardopolis", "Les Cayes", "Plaisance"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Anse-à-Pitre", "Maniche", "Marmelade", "La Chapelle"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Limonade", "Pointe-à-Raquette", "Terrier-Rouge", "Chantal"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Chansolme", "Roche-à-Bateau", "Saint-Louis-du-Nord", "Petit-Trou-de-Nippes"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud ?",
    options: ["Saint-Jean-du-Sud", "Cabaret", "Gressier", "Gonaïves"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Thomazeau", "Ouanaminthe", "Desdunes", "Limonade"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Mont-Organisé", "Chantal", "Trou-du-Nord", "L'Estère"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Aquin", "Thomassique", "Plaisance", "Verrettes"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Môle-Saint-Nicolas", "Cayes-Jacmel", "Verrettes", "Baie-de-Henne"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Gros-Morne", "Torbeck", "Thiotte", "Port-Salut"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Grand-Boucan", "L'Estère", "Camp-Perrin", "Bassin-Bleu"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Ouanaminthe", "L'Acul-des-Pins", "Perches", "Gros-Morne"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Moron", "L'Acul-des-Pins", "Saint-Michel-de-l'Atalaye", "Cerca-Carvajal"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Camp-Perrin", "Mombin-Crochu", "Lascahobas", "Saint-Michel-de-l'Atalaye"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Belle-Anse", "Les Irois", "Dessalines", "Léogâne"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Corail", "Thomazeau", "Gros-Morne", "Jacmel"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Ouanaminthe", "Verrettes", "Port-à-Piment", "Bahon"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Grande-Saline", "Les Cayes", "Trou-du-Nord", "Maïssade"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Thiotte", "Beaumont", "Petite-Rivière-de-l'Artibonite", "Cayes-Jacmel"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Côteaux", "Bainet", "Gros-Morne", "Saint-Jean-du-Sud"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Carice", "Jean-Rabel", "La Chapelle", "Thiotte"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Ganthier", "Mont-Organisé", "Montrouis", "Arnaud"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Carice", "Cabaret", "Les Irois", "Gonaïves"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Milot", "Aquin", "Grande-Saline", "Mirebalais"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["L'Estère", "Bassin-Bleu", "Grand-Gosier", "L'Asile"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Vallières", "Ouanaminthe", "Arniquet", "Verrettes"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Corail", "Grande-Saline", "Milot", "Savanette"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Camp-Perrin", "Port-Salut", "Petit-Goâve", "Gonaïves"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Miragoâne", "Saint-Jean-du-Sud", "Gonaïves", "Anse-à-Pitre"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Grand-Boucan", "Gonaïves", "Arcahaie", "Abricots"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Liancourt", "Jérémie", "Mirebalais", "La Tortue"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Côteaux", "Gros-Morne", "Les Cayes", "L'Asile"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Paillant", "Saint-Louis-du-Sud", "Ennery", "Ganthier"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Cabaret", "Abricots", "Terrier-Rouge", "Desdunes"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["La Tortue", "Môle-Saint-Nicolas", "Cerca-Carvajal", "Marmelade"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Saint-Michel-de-l'Atalaye", "Cornillon", "Lascahobas", "Grand-Bassin"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Chantal", "Anse-à-Veau", "Terre-Neuve", "Cerca-la-Source"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Plaine-du-Nord", "Saut-d'Eau", "Vallières", "Terre-Neuve"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Marmelade", "Boucan-Carré", "Bahon", "Gressier"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Jérémie", "Saint-Jean-du-Sud", "Les Irois", "Grande-Saline"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Plaine-du-Nord", "Corail", "Boucan-Carré", "Montrouis"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Les Cayes", "Grand-Goâve", "Jean-Rabel", "Montrouis"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Carrefour", "Paillant", "Terre-Neuve", "Vallières"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Belladère", "Thomonde", "La Vallée-de-Jacmel", "Grande-Saline"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Petite-Rivière-de-l'Artibonite", "Ouanaminthe", "Torbeck", "Tabarre"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Dessalines", "Petit-Goâve", "Léogâne", "Port-à-Piment"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Anse-à-Veau", "Côtes-de-Fer", "Roche-à-Bateau", "Terre-Neuve"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Jean-Rabel", "La Tortue", "Gonaïves", "Dondon"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Abricots", "Chardonnières", "Baie-de-Henne", "Saint-Marc"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Desdunes", "Côtes-de-Fer", "L'Acul-des-Pins", "Mirebalais"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Saint-Louis-du-Sud", "Fonds-Verrettes", "Baradères", "Liancourt"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Dessalines", "Thomonde", "La Vallée-de-Jacmel", "Dondon"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Grande-Saline", "Côtes-de-Fer", "Jean-Rabel", "Pilate"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Camp-Coq", "Jean-Rabel", "Vallières", "Verrettes"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Delmas", "Corail", "Boucan-Carré", "Verrettes"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Port-Margot", "Terrier-Rouge", "Petite-Rivière-de-l'Artibonite", "Belladère"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Roseaux", "Plaisance", "Cerca-Carvajal", "L'Estère"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Marigot", "Saint-Marc", "Pointe-à-Raquette", "Paillant"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Montrouis", "Savanette", "Arcahaie", "Bahon"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Limonade", "Liancourt", "Sainte-Suzanne", "Marigot"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Kenscoff", "Les Cayes", "Fonds-Verrettes", "Gros-Morne"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Savanette", "Verrettes", "Cap-Haïtien", "Saint-Louis-du-Nord"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["L'Acul-des-Pins", "Saint-Marc", "Marigot", "Roseaux"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Mont-Organisé", "Petit-Trou-de-Nippes", "Saint-Michel-de-l'Atalaye", "Plaine-du-Nord"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Cornillon", "Bahon", "Baradères", "Grande-Saline"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Perches", "Port-Margot", "Thomonde", "Marmelade"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Saint-Michel-de-l'Atalaye", "Beaumont", "Croix-des-Bouquets", "Arniquet"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Saint-Marc", "Acul-du-Nord", "Gressier", "Grand-Bassin"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Camp-Perrin", "Côtes-de-Fer", "L'Estère", "Roseaux"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Port-Salut", "Desdunes", "Fort-Liberté", "Grand-Boucan"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Jean-Rabel", "Carrefour", "Cabaret", "Montrouis"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Tabarre", "Verrettes", "Cerca-la-Source", "Baradères"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Verrettes", "Maniche", "Caracol", "Léogâne"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Cerca-la-Source", "Marigot", "Saint-Michel-de-l'Atalaye", "Paillant"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Côteaux", "Dame-Marie", "Chansolme", "Gros-Morne"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Trou-du-Nord", "Grande-Saline", "Arnaud", "Delmas"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Les Irois", "L'Acul-des-Pins", "Grande-Saline", "Bainet"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Jacmel", "Côtes-de-Fer", "Liancourt", "Anse-à-Veau"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Cornillon", "Anse-à-Veau", "Gros-Morne", "Saint-Louis-du-Sud"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Belle-Anse", "Saint-Louis-du-Sud", "Cabaret", "Grande-Saline"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Mirebalais", "Pilate", "Pointe-à-Raquette", "Saint-Michel-de-l'Atalaye"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Jacmel", "Desdunes", "Dondon", "Les Irois"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Dame-Marie", "Liancourt", "Beaumont", "Chambellan"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Ennery", "Petit-Trou-de-Nippes", "Abricots", "Côteaux"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Camp-Perrin", "Pilate", "Terre-Neuve", "Fonds-Verrettes"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Gressier", "Grand-Boucan", "Caracol", "Gros-Morne"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Carrefour", "Trou-du-Nord", "Verrettes", "Gressier"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Fort-Liberté", "Thiotte", "Petite-Rivière-de-l'Artibonite", "Miragoâne"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Fonds-Verrettes", "Marmelade", "Arnaud", "Cap-Haïtien"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Petite-Rivière-de-l'Artibonite", "Anse-à-Veau", "Sainte-Suzanne", "Tabarre"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Perches", "Maïssade", "Port-Salut", "La Chapelle"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Saint-Marc", "Baie-de-Henne", "Chardonnières", "Arniquet"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Chansolme", "Caracol", "Ennery", "Paillant"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Montrouis", "Corail", "Maïssade", "Thomonde"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Saint-Jean-du-Sud", "Fonds-des-Nègres", "Grande-Saline", "Camp-Coq"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Torbeck", "Baie-de-Henne", "Abricots", "Montrouis"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Corail", "L'Estère", "Bainet", "La Tortue"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Marmelade", "Maïssade", "Grand-Bassin", "Pointe-à-Raquette"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["La Chapelle", "Plaisance", "Camp-Coq", "Marigot"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Milot", "Plaine-du-Nord", "Saint-Marc", "Ouanaminthe"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Abricots", "Saint-Louis-du-Sud", "Verrettes", "Anse-à-Pitre"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Mirebalais", "Fonds-Verrettes", "L'Estère", "Belle-Anse"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Gros-Morne", "Mombin-Crochu", "Terrier-Rouge", "Ganthier"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Marmelade", "Arnaud", "Plaisance-du-Sud", "Vallières"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de l'Artibonite ?",
    options: ["Port-au-Prince", "Chambellan", "Jean-Rabel", "Gonaïves"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Carrefour", "Dondon", "Boucan-Carré", "Aquin"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Chansolme", "Cornillon", "Thomassique", "Cité Soleil"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Savanette", "Trou-du-Nord", "Bassin-Bleu", "Saint-Jean-du-Sud"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Plaisance", "Hinche", "Petit-Goâve", "Carice"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Cerca-la-Source", "Camp-Perrin", "Côteaux", "Petit-Goâve"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Fonds-des-Nègres", "Thomassique", "Jérémie", "Miragoâne"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Roseaux", "Anse-à-Veau", "Thomassique", "Cayes-Jacmel"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Dame-Marie", "Gros-Morne", "Desdunes", "Maïssade"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Mombin-Crochu", "Cerca-la-Source", "Roseaux", "Miragoâne"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Savanette", "Plaisance", "Abricots", "Grande-Saline"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Thomonde", "Kenscoff", "Ganthier", "Pointe-à-Raquette"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Plaine-du-Nord", "Carrefour", "Belladère", "Carice"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Marmelade", "Cerca-la-Source", "Jean-Rabel", "Fonds-Verrettes"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Cerca-la-Source", "Dame-Marie", "Saint-Michel-de-l'Atalaye", "Abricots"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Belladère", "Cabaret", "Croix-des-Bouquets", "Montrouis"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Petite-Rivière-de-l'Artibonite", "Jérémie", "Port-de-Paix", "Lascahobas"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Saint-Louis-du-Sud", "Grand-Boucan", "Saut-d'Eau", "Port-Salut"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Lascahobas", "Plaisance-du-Sud", "Carrefour", "Thomazeau"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Chansolme", "Pointe-à-Raquette", "Croix-des-Bouquets", "Lascahobas"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Saut-d'Eau", "Arniquet", "Grand-Bassin", "Chantal"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Les Irois", "Cerca-la-Source", "Grand-Gosier", "Verrettes"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["La Vallée-de-Jacmel", "Roseaux", "Cerca-Carvajal", "Dondon"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Dame-Marie", "Pointe-à-Raquette", "Camp-Perrin", "Cerca-Carvajal"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Maïssade", "Arnaud", "Croix-des-Bouquets", "Plaisance"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Gressier", "Belladère", "Ennery", "Beaumont"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Cap-Haïtien", "Mirebalais", "Ennery", "Chardonnières"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Bainet", "Môle-Saint-Nicolas", "Thomazeau", "Belladère"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Petit-Goâve", "Savanette", "Pointe-à-Raquette", "Maniche"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Thomonde", "La Vallée-de-Jacmel", "Grand-Gosier", "Saint-Louis-du-Nord"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Savanette", "Petit-Trou-de-Nippes", "Limonade", "Camp-Coq"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Arcahaie", "Petit-Trou-de-Nippes", "Cayes-Jacmel", "Lascahobas"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Petit-Goâve", "Anse-à-Veau", "Maïssade", "Côteaux"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Terrier-Rouge", "Petit-Trou-de-Nippes", "L'Estère", "Maïssade"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Cerca-la-Source", "Thomazeau", "Camp-Perrin", "Corail"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Saint-Jean-du-Sud", "Jean-Rabel", "Fonds-des-Nègres", "Saut-d'Eau"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Roseaux", "Grand-Goâve", "Saut-d'Eau", "Ganthier"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Roche-à-Bateau", "Cerca-Carvajal", "La Tortue", "Marmelade"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Ennery", "Boucan-Carré", "Baie-de-Henne", "Capotille"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Plaisance-du-Sud", "Petit-Goâve", "Pointe-à-Raquette", "Boucan-Carré"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Grande-Saline", "Port-Margot", "Cabaret", "Thomonde"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Fonds-des-Nègres", "Dessalines", "Mombin-Crochu", "Belladère"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Belle-Anse", "Hinche", "Baie-de-Henne", "Limonade"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Petit-Trou-de-Nippes", "Thomonde", "Marmelade", "Sainte-Suzanne"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Ennery", "Port-au-Prince", "Capotille", "Savanette"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Hinche", "Terre-Neuve", "Arcahaie", "Belle-Anse"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Chansolme", "Saut-d'Eau", "Limonade", "Paillant"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Pointe-à-Raquette", "Carrefour", "Savanette", "Plaisance"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Fort-Liberté", "Carrefour", "Savanette", "Dondon"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Chardonnières", "Camp-Coq", "Boucan-Carré", "Jean-Rabel"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Lascahobas", "Dessalines", "Grand-Boucan", "La Chapelle"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Abricots", "Lascahobas", "Maniche", "Grand-Boucan"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Mirebalais", "Port-au-Prince", "Dondon", "Saint-Jean-du-Sud"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["La Chapelle", "Thomonde", "Chambellan", "L'Estère"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Saut-d'Eau", "Petit-Trou-de-Nippes", "Fonds-des-Nègres", "Delmas"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Léogâne", "Lascahobas", "Bombardopolis", "Arniquet"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Thomassique", "Fort-Liberté", "Port-au-Prince", "Ouanaminthe"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Grand-Bassin", "Liancourt", "Belladère", "Mont-Organisé"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Saint-Louis-du-Nord", "Cerca-la-Source", "Port-à-Piment", "Plaine-du-Nord"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Belladère", "Port-Salut", "Grand-Goâve", "Petit-Goâve"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Mombin-Crochu", "Marmelade", "Torbeck", "Thomassique"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Liancourt", "Desdunes", "Tabarre", "Hinche"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Jean-Rabel", "Arcahaie", "Vallières", "Thomassique"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Bassin-Bleu", "Thomassique", "Arnaud", "Dessalines"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Terre-Neuve", "Cerca-Carvajal", "Marmelade", "Saint-Louis-du-Sud"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Bainet", "Pointe-à-Raquette", "Aquin", "Thomassique"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Petit-Trou-de-Nippes", "Les Irois", "La Tortue", "Saut-d'Eau"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Cerca-Carvajal", "La Tortue", "Arcahaie", "Arnaud"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Boucan-Carré", "Thomazeau", "Port-Margot", "Bombardopolis"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Cerca-la-Source", "Jacmel", "Torbeck", "Terrier-Rouge"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Gressier", "Cap-Haïtien", "Abricots", "Mirebalais"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Saint-Louis-du-Nord", "Arcahaie", "Grande-Saline", "Lascahobas"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Arniquet", "Mirebalais", "Port-de-Paix", "Milot"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Dame-Marie", "L'Acul-des-Pins", "Saut-d'Eau", "Corail"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Plaine-du-Nord", "Belladère", "Pestel", "Belle-Anse"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Limonade", "Desdunes", "Cerca-la-Source", "Vallières"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Saut-d'Eau", "Acul-du-Nord", "Port-au-Prince", "Saint-Louis-du-Sud"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Port-Margot", "Carice", "Chantal", "Mirebalais"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Chansolme", "Paillant", "Maïssade", "Vallières"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Croix-des-Bouquets", "Trou-du-Nord", "Roche-à-Bateau", "Cerca-Carvajal"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Tabarre", "Mont-Organisé", "Lascahobas", "Miragoâne"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Pointe-à-Raquette", "Lascahobas", "Montrouis", "Chansolme"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Saut-d'Eau", "Carrefour", "Moron", "Camp-Perrin"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Roche-à-Bateau", "Port-Salut", "Grand-Goâve", "Saut-d'Eau"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Hinche", "Saint-Marc", "Miragoâne", "Capotille"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["La Vallée-de-Jacmel", "Ennery", "Camp-Coq", "Thomonde"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Arniquet", "Cerca-la-Source", "Saint-Louis-du-Sud", "La Vallée-de-Jacmel"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Mont-Organisé", "Cerca-la-Source", "Dessalines", "Pointe-à-Raquette"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Anse-d'Hainault", "Maïssade", "Belle-Anse", "Port-de-Paix"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Thomassique", "Carice", "Perches", "Grand-Goâve"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Camp-Coq", "Borgne", "Verrettes", "Cerca-Carvajal"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Mont-Organisé", "Port-Margot", "Saint-Marc", "Thomassique"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Côteaux", "La Chapelle", "Thomonde", "Caracol"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Lascahobas", "Fonds-Verrettes", "Gros-Morne", "Carice"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Thomonde", "Vallières", "Trou-du-Nord", "Port-de-Paix"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Beaumont", "Maïssade", "Torbeck", "Plaisance-du-Sud"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Maïssade", "Miragoâne", "Dessalines", "Camp-Coq"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Mirebalais", "Thomazeau", "Gonaïves", "Desdunes"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Cerca-Carvajal", "Cabaret", "Croix-des-Bouquets", "Gonaïves"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Chambellan", "Côteaux", "Lascahobas", "Perches"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Centre ?",
    options: ["Trou-Bonbon", "Arcahaie", "Thomonde", "Terre-Neuve"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Chansolme", "Miragoâne", "Port-de-Paix", "Anse-d'Hainault"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Port-à-Piment", "Ganthier", "Côtes-de-Fer", "Miragoâne"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Port-au-Prince", "Grand-Boucan", "Grande-Saline", "Les Cayes"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Petite-Rivière-de-l'Artibonite", "Trou-Bonbon", "Baradères", "Pétion-Ville"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Caracol", "Borgne", "Arnaud", "Pestel"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Anse-à-Veau", "Thomonde", "La Chapelle", "Jérémie"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Aquin", "Petit-Trou-de-Nippes", "Trou-Bonbon", "Cerca-Carvajal"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Corail", "Arcahaie", "Fonds-des-Nègres", "Hinche"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["L'Asile", "Capotille", "Maïssade", "Cornillon"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Môle-Saint-Nicolas", "Thomazeau", "Grand-Boucan", "Dessalines"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Dessalines", "Saint-Jean-du-Sud", "Miragoâne", "Lascahobas"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Anse-à-Veau", "Grand-Bassin", "Milot", "Port-de-Paix"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Les Irois", "Grand-Boucan", "Perches", "Mombin-Crochu"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Terre-Neuve", "Vallières", "Fonds-des-Nègres", "Corail"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Carrefour", "Paillant", "Port-au-Prince", "Pestel"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Petit-Trou-de-Nippes", "Côtes-de-Fer", "Camp-Perrin", "Grand-Goâve"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["L'Asile", "Thiotte", "Môle-Saint-Nicolas", "Milot"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Fonds-des-Nègres", "Caracol", "Beaumont", "Cerca-Carvajal"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Corail", "Chambellan", "Arnaud", "Tabarre"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Arnaud", "Bahon", "Grande-Saline", "Bassin-Bleu"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["La Vallée-de-Jacmel", "Petite-Rivière-de-l'Artibonite", "Môle-Saint-Nicolas", "Arnaud"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Thomassique", "Chantal", "Sainte-Suzanne", "Miragoâne"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Desdunes", "Pétion-Ville", "Arnaud", "Caracol"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Jérémie", "Mont-Organisé", "Trou-du-Nord", "Paillant"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Fonds-des-Nègres", "Perches", "Camp-Perrin", "Abricots"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Hinche", "Anse-à-Veau", "Delmas", "Dessalines"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Léogâne", "Fonds-des-Nègres", "Perches", "Verrettes"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Cayes-Jacmel", "Plaisance-du-Sud", "Carice", "Ennery"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Saint-Jean-du-Sud", "Fonds-des-Nègres", "Anse-d'Hainault", "Plaine-du-Nord"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Môle-Saint-Nicolas", "L'Asile", "Caracol", "Chansolme"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Cerca-Carvajal", "L'Estère", "Ouanaminthe", "Miragoâne"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Milot", "Caracol", "Arnaud", "Ouanaminthe"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["La Tortue", "Petit-Trou-de-Nippes", "Belladère", "Tabarre"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Saint-Louis-du-Nord", "Delmas", "Paillant", "Gressier"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Jérémie", "Lascahobas", "Baradères", "Cap-Haïtien"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Anse-d'Hainault", "Marmelade", "Anse-à-Veau", "Dessalines"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Port-Margot", "Anse-à-Veau", "Saint-Michel-de-l'Atalaye", "Ennery"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Pétion-Ville", "Dame-Marie", "Saint-Michel-de-l'Atalaye", "L'Asile"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Thiotte", "Paillant", "Thomassique", "Terre-Neuve"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Verrettes", "Arnaud", "Bassin-Bleu", "Carice"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Plaine-du-Nord", "Bainet", "Mombin-Crochu", "Baradères"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Croix-des-Bouquets", "Plaine-du-Nord", "Carice", "Grand-Boucan"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Cornillon", "Montrouis", "Pestel", "Fonds-des-Nègres"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Sainte-Suzanne", "Miragoâne", "Desdunes", "Torbeck"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Montrouis", "Fonds-Verrettes", "Borgne", "Paillant"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Thiotte", "Arnaud", "Moron", "La Chapelle"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Paillant", "Delmas", "Mombin-Crochu", "Aquin"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Cap-Haïtien", "Les Irois", "Maïssade", "Fonds-des-Nègres"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Trou-du-Nord", "Maïssade", "Dessalines", "Plaisance-du-Sud"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Milot", "Grand-Boucan", "Arniquet", "Limonade"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Les Cayes", "Plaisance-du-Sud", "Chardonnières", "La Tortue"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Cayes-Jacmel", "Paillant", "Jean-Rabel", "Jacmel"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Fonds-des-Nègres", "Port-Margot", "Acul-du-Nord", "Thiotte"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Grand-Goâve", "Baradères", "Gros-Morne", "Capotille"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Terrier-Rouge", "Desdunes", "Baradères", "Marmelade"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Thiotte", "Maniche", "Cerca-la-Source", "Anse-à-Veau"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Ganthier", "Plaisance", "Mombin-Crochu", "Miragoâne"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Port-Salut", "Bombardopolis", "Paillant", "Pestel"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Roche-à-Bateau", "Delmas", "Croix-des-Bouquets", "Baradères"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Anse-à-Veau", "Camp-Perrin", "Saint-Jean-du-Sud", "Ennery"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Pestel", "Anse-à-Veau", "Pétion-Ville", "Port-Salut"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Roseaux", "Trou-du-Nord", "Cornillon", "L'Asile"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Gressier", "Arnaud", "Borgne", "Delmas"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Gonaïves", "Léogâne", "Petit-Trou-de-Nippes", "Milot"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Baradères", "Cerca-la-Source", "Port-à-Piment", "Maïssade"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Grand-Boucan", "Terrier-Rouge", "Thomassique", "Carrefour"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Plaisance-du-Sud", "Gressier", "Torbeck", "Hinche"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Delmas", "Bainet", "L'Asile", "La Tortue"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Caracol", "Grand-Goâve", "Cerca-la-Source", "Arnaud"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Plaisance-du-Sud", "Chantal", "Pétion-Ville", "Arcahaie"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Roche-à-Bateau", "Belladère", "Paillant", "Lascahobas"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Petit-Trou-de-Nippes", "Côtes-de-Fer", "Grande-Saline", "Saint-Jean-du-Sud"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Grand-Goâve", "Petit-Trou-de-Nippes", "Petite-Rivière-de-l'Artibonite", "Léogâne"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Cerca-Carvajal", "Petit-Trou-de-Nippes", "Port-au-Prince", "L'Acul-des-Pins"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Tabarre", "Arnaud", "Mombin-Crochu", "Anse-d'Hainault"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Kenscoff", "Cabaret", "Cayes-Jacmel", "Anse-à-Veau"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Cerca-la-Source", "Maniche", "Gonaïves", "Miragoâne"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Petit-Trou-de-Nippes", "Fort-Liberté", "Beaumont", "Roseaux"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Saint-Jean-du-Sud", "Baradères", "L'Estère", "Jacmel"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Bainet", "Petit-Trou-de-Nippes", "Capotille", "Les Irois"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Petit-Trou-de-Nippes", "Grand-Bassin", "Bombardopolis", "Arcahaie"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Terrier-Rouge", "Baradères", "Cabaret", "Cité Soleil"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["La Chapelle", "Bahon", "Port-au-Prince", "Arnaud"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Saint-Marc", "Fonds-Verrettes", "Boucan-Carré", "Plaisance-du-Sud"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Grand-Bassin", "Grand-Boucan", "Cité Soleil", "Cayes-Jacmel"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Fonds-des-Nègres", "Ennery", "Anse-d'Hainault", "Thiotte"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Fonds-des-Nègres", "Thomonde", "Aquin", "Bahon"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Dessalines", "Thomassique", "Anse-à-Veau", "Thomonde"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Croix-des-Bouquets", "Saint-Michel-de-l'Atalaye", "Aquin", "Arnaud"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Montrouis", "Terrier-Rouge", "Croix-des-Bouquets", "Baradères"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Grand-Boucan", "Delmas", "Cerca-la-Source", "Capotille"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Anse-à-Veau", "Mont-Organisé", "Bombardopolis", "Marigot"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Liancourt", "Terre-Neuve", "Plaisance-du-Sud", "Anse-d'Hainault"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Perches", "Miragoâne", "Arcahaie", "Marmelade"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Corail", "Lascahobas", "Baradères", "Terrier-Rouge"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Delmas", "Terrier-Rouge", "Bainet", "Baradères"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Camp-Perrin", "Trou-du-Nord", "Grand-Boucan", "Chambellan"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Camp-Perrin", "La Tortue", "Petit-Trou-de-Nippes", "Jean-Rabel"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Desdunes", "Arnaud", "Delmas", "Anse-à-Pitre"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département des Nippes ?",
    options: ["Carrefour", "Acul-du-Nord", "Gros-Morne", "Plaisance-du-Sud"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Petite-Rivière-de-l'Artibonite", "Gonaïves", "Bassin-Bleu", "Port-Margot"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Baie-de-Henne", "Roche-à-Bateau", "Miragoâne", "Dondon"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Caracol", "Cabaret", "Grand-Boucan", "La Tortue"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Gonaïves", "Baie-de-Henne", "Fonds-Verrettes", "Corail"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Acul-du-Nord", "Carrefour", "Pilate", "Baie-de-Henne"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Fonds-des-Nègres", "L'Estère", "Môle-Saint-Nicolas", "Cap-Haïtien"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Marmelade", "Capotille", "Côteaux", "Chansolme"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Arnaud", "Thomassique", "Baie-de-Henne", "Maniche"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Saint-Louis-du-Nord", "Bahon", "Miragoâne", "Mirebalais"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Ouanaminthe", "La Tortue", "Abricots", "Léogâne"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["L'Acul-des-Pins", "Petite-Rivière-de-l'Artibonite", "Chansolme", "Baradères"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Cap-Haïtien", "Mombin-Crochu", "Fonds-des-Nègres", "Bombardopolis"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Acul-du-Nord", "Saint-Michel-de-l'Atalaye", "Tabarre", "Jean-Rabel"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Pestel", "La Tortue", "Trou-du-Nord", "Fonds-Verrettes"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Corail", "Plaine-du-Nord", "Camp-Perrin", "Jean-Rabel"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Limonade", "Savanette", "Camp-Coq", "Saint-Louis-du-Nord"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Chansolme", "Gressier", "Belle-Anse", "Aquin"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Maniche", "Cerca-Carvajal", "Corail", "Môle-Saint-Nicolas"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Port-de-Paix", "Sainte-Suzanne", "Hinche", "Roseaux"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Arnaud", "Baie-de-Henne", "L'Estère", "Cayes-Jacmel"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Abricots", "Cap-Haïtien", "Bainet", "Jean-Rabel"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Carrefour", "Saint-Jean-du-Sud", "Roseaux", "Port-de-Paix"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["La Tortue", "Les Irois", "Cerca-la-Source", "L'Acul-des-Pins"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Liancourt", "Môle-Saint-Nicolas", "Bainet", "Gros-Morne"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Roche-à-Bateau", "Bombardopolis", "Grand-Boucan", "Les Irois"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Fonds-des-Nègres", "Ganthier", "Baie-de-Henne", "Thomassique"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["La Vallée-de-Jacmel", "Carrefour", "Hinche", "Môle-Saint-Nicolas"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Plaisance", "Baie-de-Henne", "Cerca-la-Source", "Grande-Saline"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Gressier", "La Tortue", "Cerca-la-Source", "Abricots"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Petit-Trou-de-Nippes", "Môle-Saint-Nicolas", "Grand-Gosier", "Thomonde"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Chansolme", "Camp-Perrin", "Moron", "Ouanaminthe"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["La Tortue", "Ouanaminthe", "Port-Margot", "Aquin"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Chardonnières", "La Tortue", "Dondon", "Carice"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Pilate", "Chansolme", "Perches", "Les Irois"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Lascahobas", "Port-de-Paix", "Anse-d'Hainault", "Camp-Perrin"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Petit-Goâve", "Sainte-Suzanne", "Bombardopolis", "Plaisance"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Plaine-du-Nord", "Sainte-Suzanne", "Saint-Louis-du-Nord", "Perches"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Gressier", "Bassin-Bleu", "Trou-Bonbon", "Marmelade"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Desdunes", "Plaisance-du-Sud", "Ouanaminthe", "Saint-Louis-du-Nord"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["L'Acul-des-Pins", "Capotille", "Chansolme", "Vallières"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Port-Salut", "Saint-Marc", "Chansolme", "Mirebalais"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["La Tortue", "Bahon", "Carrefour", "Saint-Michel-de-l'Atalaye"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Baradères", "Limonade", "Ganthier", "Baie-de-Henne"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Miragoâne", "Port-à-Piment", "Môle-Saint-Nicolas", "Grand-Goâve"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Saut-d'Eau", "Saint-Louis-du-Nord", "Pestel", "Plaisance-du-Sud"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Montrouis", "Anse-d'Hainault", "Port-de-Paix", "Plaine-du-Nord"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Fonds-des-Nègres", "Saint-Louis-du-Nord", "Petite-Rivière-de-l'Artibonite", "L'Asile"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Port-Margot", "Kenscoff", "Saint-Louis-du-Nord", "Roche-à-Bateau"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Baie-de-Henne", "Léogâne", "Torbeck", "Plaisance"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Thomazeau", "Cap-Haïtien", "Chantal", "Jean-Rabel"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Savanette", "Môle-Saint-Nicolas", "Thomonde", "Mont-Organisé"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["La Chapelle", "Thomassique", "Jean-Rabel", "Grand-Bassin"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Bainet", "Pointe-à-Raquette", "Torbeck", "Chansolme"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Camp-Perrin", "Baie-de-Henne", "Anse-à-Veau", "Anse-à-Pitre"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Bainet", "Ennery", "Jean-Rabel", "Mirebalais"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Trou-du-Nord", "Marmelade", "Saint-Louis-du-Nord", "Anse-à-Pitre"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Côtes-de-Fer", "Tabarre", "L'Estère", "Bombardopolis"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Port-de-Paix", "Terrier-Rouge", "Grand-Gosier", "Montrouis"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Les Cayes", "Petit-Goâve", "Saint-Louis-du-Nord", "Limonade"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Plaisance", "Les Irois", "Saint-Louis-du-Nord", "Port-au-Prince"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Paillant", "Côtes-de-Fer", "Bombardopolis", "Mont-Organisé"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Arnaud", "Bassin-Bleu", "Les Cayes", "Fonds-des-Nègres"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Bainet", "Cornillon", "Mont-Organisé", "Jean-Rabel"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Verrettes", "L'Acul-des-Pins", "La Chapelle", "Môle-Saint-Nicolas"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Trou-Bonbon", "Môle-Saint-Nicolas", "Saut-d'Eau", "Thomonde"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Thomonde", "Môle-Saint-Nicolas", "L'Acul-des-Pins", "Dondon"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Verrettes", "Fonds-Verrettes", "Bassin-Bleu", "Chambellan"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Perches", "Léogâne", "Bombardopolis", "Chardonnières"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Bassin-Bleu", "Port-Salut", "Chardonnières", "Fort-Liberté"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Vallières", "Belladère", "Terre-Neuve", "Jean-Rabel"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Dondon", "Chansolme", "Cerca-la-Source", "Hinche"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Port-Salut", "Pestel", "Chansolme", "Ennery"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Roseaux", "Carrefour", "La Tortue", "Borgne"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Bassin-Bleu", "Thiotte", "Gressier", "Grand-Gosier"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["La Vallée-de-Jacmel", "Bassin-Bleu", "Thiotte", "Anse-à-Pitre"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Pétion-Ville", "Plaine-du-Nord", "Port-à-Piment", "Môle-Saint-Nicolas"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Jérémie", "Belladère", "Pilate", "Bassin-Bleu"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Roche-à-Bateau", "Bombardopolis", "Marmelade", "Grande-Saline"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Corail", "Thomassique", "Jean-Rabel", "Saint-Michel-de-l'Atalaye"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Jean-Rabel", "Pétion-Ville", "Camp-Perrin", "Petit-Goâve"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Chansolme", "Pestel", "Carrefour", "Baradères"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Anse-d'Hainault", "Bombardopolis", "Miragoâne", "Milot"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Cayes-Jacmel", "Camp-Coq", "Saut-d'Eau", "Chansolme"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Bassin-Bleu", "Terrier-Rouge", "Chambellan", "Montrouis"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Cabaret", "Saint-Louis-du-Nord", "Cerca-la-Source", "Liancourt"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Milot", "Ennery", "Saint-Louis-du-Nord", "Grand-Bassin"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Môle-Saint-Nicolas", "Pestel", "Cabaret", "Dondon"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Mont-Organisé", "Bombardopolis", "Grand-Boucan", "Terre-Neuve"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Bombardopolis", "Saint-Jean-du-Sud", "Carice", "Terre-Neuve"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Montrouis", "Fort-Liberté", "L'Asile", "Bombardopolis"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["La Tortue", "Léogâne", "L'Asile", "Ennery"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Dondon", "Plaisance", "Limonade", "Bombardopolis"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Anse-à-Veau", "Bassin-Bleu", "Corail", "Thiotte"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Mombin-Crochu", "Cayes-Jacmel", "Pointe-à-Raquette", "Jean-Rabel"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Torbeck", "Môle-Saint-Nicolas", "Marmelade", "Gonaïves"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Bassin-Bleu", "Les Irois", "Caracol", "Port-Margot"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Maïssade", "Pointe-à-Raquette", "Port-à-Piment", "Bombardopolis"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Petit-Goâve", "Limonade", "Mirebalais", "Saint-Louis-du-Nord"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["Beaumont", "Tabarre", "Port-à-Piment", "La Tortue"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Ouest ?",
    options: ["La Tortue", "Les Cayes", "Marigot", "Maïssade"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Cornillon", "Borgne", "Pointe-à-Raquette", "Caracol"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Saint-Louis-du-Nord", "Thomonde", "Terrier-Rouge", "Thomazeau"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Caracol", "Port-au-Prince", "Plaisance-du-Sud", "Verrettes"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Dondon", "Mombin-Crochu", "Fonds-Verrettes", "Cerca-Carvajal"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Ennery", "Port-à-Piment", "Arcahaie", "Trou-du-Nord"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Tabarre", "Montrouis", "Vallières", "Les Cayes"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Cerca-Carvajal", "Fort-Liberté", "Grand-Goâve", "Gonaïves"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Plaine-du-Nord", "Fort-Liberté", "Roche-à-Bateau", "Paillant"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Port-au-Prince", "Trou-du-Nord", "Paillant", "Maniche"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Jérémie", "Arniquet", "Borgne", "Carice"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Saut-d'Eau", "Mombin-Crochu", "Belladère", "Grand-Boucan"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Milot", "Camp-Perrin", "Cap-Haïtien", "Terrier-Rouge"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Moron", "Fort-Liberté", "Petit-Goâve", "Corail"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Carice", "Corail", "Arcahaie", "Desdunes"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Mombin-Crochu", "Arnaud", "Saint-Jean-du-Sud", "Bainet"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["La Tortue", "Trou-du-Nord", "Kenscoff", "Grande-Saline"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Caracol", "Acul-du-Nord", "Baradères", "Torbeck"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Moron", "Port-Margot", "Sainte-Suzanne", "Lascahobas"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Ouanaminthe", "Thomonde", "Thomazeau", "Pilate"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Fonds-Verrettes", "Verrettes", "Capotille", "Anse-à-Veau"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Ouanaminthe", "Delmas", "Chambellan", "Camp-Coq"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Verrettes", "Trou-du-Nord", "L'Estère", "Ennery"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Miragoâne", "Petite-Rivière-de-l'Artibonite", "Vallières", "Grand-Gosier"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Terre-Neuve", "Trou-du-Nord", "Port-de-Paix", "Desdunes"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Plaisance", "Caracol", "Thomassique", "Jérémie"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Chambellan", "Corail", "Trou-du-Nord", "Pestel"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Ennery", "Sainte-Suzanne", "Grand-Gosier", "Hinche"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Fort-Liberté", "Marigot", "Môle-Saint-Nicolas", "Saint-Michel-de-l'Atalaye"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Ennery", "Plaine-du-Nord", "L'Estère", "Mont-Organisé"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Pointe-à-Raquette", "Capotille", "Croix-des-Bouquets", "Saint-Louis-du-Sud"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Perches", "Maniche", "Tabarre", "Fonds-des-Nègres"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Belladère", "Sainte-Suzanne", "Chansolme", "Thomassique"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Mont-Organisé", "Les Irois", "Lascahobas", "Trou-Bonbon"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Abricots", "Caracol", "Maniche", "Bainet"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Mombin-Crochu", "Gros-Morne", "Abricots", "Baie-de-Henne"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Marigot", "Grand-Boucan", "Terrier-Rouge", "Port-Margot"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Limonade", "Trou-Bonbon", "Jérémie", "Fort-Liberté"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Boucan-Carré", "Carice", "Chambellan", "Carrefour"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Côteaux", "Terrier-Rouge", "Trou-Bonbon", "Delmas"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Terrier-Rouge", "Aquin", "Saint-Michel-de-l'Atalaye", "Montrouis"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Maniche", "Milot", "Fort-Liberté", "Kenscoff"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Bainet", "Trou-du-Nord", "Cerca-Carvajal", "Léogâne"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["La Vallée-de-Jacmel", "Terrier-Rouge", "Saint-Michel-de-l'Atalaye", "Belladère"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Liancourt", "Thomonde", "Montrouis", "Trou-du-Nord"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Bassin-Bleu", "Capotille", "Desdunes", "Port-Margot"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Grand-Bassin", "Saint-Marc", "Ennery", "Arnaud"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Les Cayes", "Mombin-Crochu", "Kenscoff", "Milot"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Grande-Saline", "Milot", "Pointe-à-Raquette", "Perches"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Capotille", "Chantal", "Grand-Boucan", "Gros-Morne"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Mombin-Crochu", "Chansolme", "Les Irois", "Liancourt"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Desdunes", "Grand-Goâve", "Ouanaminthe", "Fonds-Verrettes"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Terre-Neuve", "Mombin-Crochu", "Abricots", "Cabaret"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Carice", "Saint-Louis-du-Sud", "Grand-Boucan", "Ganthier"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Arniquet", "Lascahobas", "Mont-Organisé", "Delmas"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Sainte-Suzanne", "Belle-Anse", "Léogâne", "Anse-à-Pitre"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Grand-Gosier", "Montrouis", "Mont-Organisé", "Dame-Marie"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Moron", "Thomassique", "Caracol", "Baradères"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Bassin-Bleu", "Sainte-Suzanne", "Lascahobas", "La Vallée-de-Jacmel"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Bainet", "Vallières", "Saint-Marc", "Torbeck"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Corail", "L'Acul-des-Pins", "Caracol", "Fonds-des-Nègres"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Caracol", "Port-Margot", "Thomassique", "Roche-à-Bateau"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Belladère", "La Vallée-de-Jacmel", "Carice", "Belle-Anse"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Perches", "Port-Margot", "Gonaïves", "Fonds-Verrettes"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Fonds-Verrettes", "Plaisance-du-Sud", "Pointe-à-Raquette", "Vallières"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Baie-de-Henne", "Côtes-de-Fer", "Grand-Bassin", "Saint-Jean-du-Sud"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Baie-de-Henne", "Terrier-Rouge", "Limonade", "Baradères"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Mont-Organisé", "L'Asile", "Beaumont", "Plaisance"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Delmas", "Perches", "Abricots", "Petit-Trou-de-Nippes"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Les Cayes", "Fort-Liberté", "Arniquet", "Léogâne"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Grand-Goâve", "Hinche", "Côteaux", "Capotille"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Cabaret", "Port-à-Piment", "Pétion-Ville", "Ouanaminthe"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Maïssade", "Terrier-Rouge", "Roseaux", "Chardonnières"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Gros-Morne", "Terrier-Rouge", "Arniquet", "Tabarre"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Terre-Neuve", "Petit-Goâve", "Croix-des-Bouquets", "Mombin-Crochu"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Les Irois", "Saut-d'Eau", "Côtes-de-Fer", "Ouanaminthe"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Baradères", "L'Asile", "Sainte-Suzanne", "Saint-Louis-du-Sud"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Lascahobas", "Mombin-Crochu", "Gressier", "Roche-à-Bateau"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Port-de-Paix", "Verrettes", "Bainet", "Ouanaminthe"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Trou-du-Nord", "Ennery", "Port-de-Paix", "Croix-des-Bouquets"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Marigot", "Grand-Bassin", "Bahon", "Beaumont"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Hinche", "Aquin", "Vallières", "Saut-d'Eau"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Thomazeau", "Mombin-Crochu", "Port-Salut", "Grand-Gosier"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Arnaud", "Fort-Liberté", "Camp-Perrin", "Marmelade"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Boucan-Carré", "Belle-Anse", "Ouanaminthe", "Ennery"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Pilate", "Cap-Haïtien", "Trou-du-Nord", "Dondon"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Carice", "L'Asile", "Pétion-Ville", "Cabaret"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Carice", "Port-à-Piment", "Cap-Haïtien", "Petit-Trou-de-Nippes"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Capotille", "Pointe-à-Raquette", "Anse-d'Hainault", "L'Asile"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Fort-Liberté", "Thomazeau", "Jacmel", "Fonds-des-Nègres"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Verrettes", "Milot", "Petit-Trou-de-Nippes", "Carice"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Mombin-Crochu", "Thomonde", "La Chapelle", "Petite-Rivière-de-l'Artibonite"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Petit-Trou-de-Nippes", "Belle-Anse", "Trou-du-Nord", "Montrouis"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Carice", "Plaisance-du-Sud", "Belladère", "Port-de-Paix"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Cabaret", "Pointe-à-Raquette", "Mombin-Crochu", "Savanette"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Chardonnières", "Ennery", "Saint-Marc", "Carice"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Grand-Gosier", "Mombin-Crochu", "Limonade", "Thiotte"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Grand-Gosier", "Vallières", "La Tortue", "Anse-à-Veau"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["L'Estère", "Thomassique", "Cayes-Jacmel", "Carice"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Thomassique", "Plaine-du-Nord", "Vallières", "Dessalines"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Nord-Est ?",
    options: ["Vallières", "Arniquet", "Torbeck", "Thiotte"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Fonds-des-Nègres", "Dessalines", "Marigot", "Anse-d'Hainault"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Saint-Louis-du-Sud", "La Vallée-de-Jacmel", "Carice", "Bombardopolis"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Cap-Haïtien", "Petit-Goâve", "Côtes-de-Fer", "Camp-Perrin"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Jacmel", "Chantal", "Dondon", "Petit-Trou-de-Nippes"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Thomassique", "Jean-Rabel", "Sainte-Suzanne", "La Vallée-de-Jacmel"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Capotille", "Port-Margot", "Bainet", "Gressier"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Cayes-Jacmel", "Arniquet", "Saint-Michel-de-l'Atalaye", "Saint-Louis-du-Sud"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Môle-Saint-Nicolas", "L'Estère", "Cayes-Jacmel", "Maniche"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Acul-du-Nord", "Fonds-des-Nègres", "Côtes-de-Fer", "Carrefour"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Jérémie", "Thomassique", "Bainet", "Cabaret"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Belle-Anse", "Port-à-Piment", "Plaine-du-Nord", "Savanette"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["L'Asile", "Torbeck", "Anse-à-Pitre", "Tabarre"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Port-à-Piment", "Carice", "Belladère", "Jacmel"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Thomazeau", "La Tortue", "La Vallée-de-Jacmel", "Fort-Liberté"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Gonaïves", "Lascahobas", "Grand-Gosier", "Montrouis"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Grand-Boucan", "Fonds-des-Nègres", "Belle-Anse", "Desdunes"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Grand-Gosier", "Port-Margot", "Plaisance", "Carrefour"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Bombardopolis", "Mombin-Crochu", "Côteaux", "Bainet"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Verrettes", "Petite-Rivière-de-l'Artibonite", "Thiotte", "Beaumont"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Cap-Haïtien", "Cerca-la-Source", "Baradères", "Anse-à-Pitre"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Pétion-Ville", "Grand-Gosier", "L'Asile", "Chansolme"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Belle-Anse", "Borgne", "Ennery", "Saint-Marc"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Belle-Anse", "Bahon", "Chambellan", "Saint-Marc"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["La Vallée-de-Jacmel", "Petit-Trou-de-Nippes", "Abricots", "Port-au-Prince"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Cayes-Jacmel", "Milot", "Maniche", "Saint-Louis-du-Nord"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Grande-Saline", "Kenscoff", "Saint-Michel-de-l'Atalaye", "Marigot"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Bahon", "Dessalines", "Jean-Rabel", "Marigot"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Terre-Neuve", "Ouanaminthe", "Baie-de-Henne", "Grand-Gosier"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["L'Estère", "Cerca-Carvajal", "Grand-Gosier", "Capotille"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Pilate", "Petite-Rivière-de-l'Artibonite", "Dessalines", "La Vallée-de-Jacmel"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Maniche", "Thiotte", "Pestel", "Petit-Trou-de-Nippes"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Sainte-Suzanne", "Thiotte", "Anse-à-Veau", "Gonaïves"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Côtes-de-Fer", "Pointe-à-Raquette", "Camp-Perrin", "Saint-Louis-du-Sud"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Port-à-Piment", "Terre-Neuve", "Bassin-Bleu", "Bainet"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Marigot", "Torbeck", "Marmelade", "Mont-Organisé"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Arnaud", "Vallières", "Grand-Gosier", "L'Asile"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Marigot", "Moron", "Delmas", "Mombin-Crochu"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Thiotte", "Moron", "Aquin", "Carice"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Delmas", "Bainet", "Liancourt", "Chambellan"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Mombin-Crochu", "Thomassique", "Bainet", "Pétion-Ville"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Pétion-Ville", "Tabarre", "Bainet", "Capotille"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Cornillon", "Jacmel", "Dame-Marie", "Pointe-à-Raquette"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Grand-Gosier", "Thomassique", "Anse-à-Veau", "Torbeck"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Léogâne", "Belle-Anse", "Ouanaminthe", "Mont-Organisé"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Cornillon", "Carrefour", "Aquin", "Bainet"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Port-au-Prince", "Belle-Anse", "Tabarre", "Bahon"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Chambellan", "Jacmel", "Port-de-Paix", "Pétion-Ville"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Camp-Perrin", "Thiotte", "Plaisance-du-Sud", "Les Irois"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Léogâne", "Dondon", "Boucan-Carré", "Anse-à-Pitre"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Arcahaie", "Bainet", "Corail", "Acul-du-Nord"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Maïssade", "Anse-d'Hainault", "Côtes-de-Fer", "Ennery"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Saut-d'Eau", "Petite-Rivière-de-l'Artibonite", "Côtes-de-Fer", "Ouanaminthe"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Cerca-Carvajal", "La Chapelle", "Port-Margot", "Grand-Gosier"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Port-Salut", "Port-au-Prince", "Grand-Gosier", "Plaisance"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Bahon", "Tabarre", "Cayes-Jacmel", "Grande-Saline"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Belle-Anse", "Roseaux", "Aquin", "Saint-Louis-du-Nord"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Verrettes", "Cerca-Carvajal", "Jacmel", "Kenscoff"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Belle-Anse", "Thomazeau", "Ouanaminthe", "Pilate"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Bahon", "Anse-à-Pitre", "Terre-Neuve", "La Tortue"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["La Chapelle", "Boucan-Carré", "Fonds-des-Nègres", "La Vallée-de-Jacmel"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Saint-Louis-du-Nord", "Marmelade", "Moron", "Bainet"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Bombardopolis", "Anse-à-Pitre", "Léogâne", "Port-Salut"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Anse-à-Pitre", "Bassin-Bleu", "Pestel", "Montrouis"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Arniquet", "Port-Margot", "Cayes-Jacmel", "Roche-à-Bateau"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Port-Salut", "Marigot", "Cabaret", "Fonds-des-Nègres"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Baie-de-Henne", "Caracol", "Gros-Morne", "Marigot"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Port-Margot", "Saint-Marc", "Port-à-Piment", "Belle-Anse"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Camp-Perrin", "Port-au-Prince", "Grand-Gosier", "Fonds-Verrettes"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Baradères", "Grand-Gosier", "Gonaïves", "Savanette"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Marigot", "Cité Soleil", "Les Cayes", "Pilate"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Thiotte", "Borgne", "L'Estère", "Cerca-Carvajal"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Gressier", "Grand-Boucan", "Port-Salut", "La Vallée-de-Jacmel"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["L'Acul-des-Pins", "Fort-Liberté", "Ganthier", "La Vallée-de-Jacmel"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Port-de-Paix", "Jacmel", "Cerca-Carvajal", "Grande-Saline"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["L'Asile", "Jacmel", "Delmas", "Croix-des-Bouquets"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Beaumont", "Bombardopolis", "Belle-Anse", "Terre-Neuve"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Marigot", "Beaumont", "Abricots", "Baradères"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Marmelade", "Jacmel", "Cornillon", "Aquin"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Grand-Gosier", "Grand-Bassin", "Port-à-Piment", "Cerca-Carvajal"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Miragoâne", "Côtes-de-Fer", "Ganthier", "L'Estère"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Belladère", "Pointe-à-Raquette", "Pétion-Ville", "Marigot"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Marigot", "L'Asile", "Cap-Haïtien", "Grand-Boucan"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Miragoâne", "Boucan-Carré", "Anse-à-Pitre", "Port-à-Piment"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Vallières", "Bassin-Bleu", "L'Acul-des-Pins", "Grand-Gosier"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Pestel", "Paillant", "Grand-Bassin", "Côtes-de-Fer"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Bombardopolis", "Thiotte", "Moron", "Abricots"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Belle-Anse", "La Chapelle", "Aquin", "Plaisance"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Bainet", "Roche-à-Bateau", "Baradères", "Chantal"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Saut-d'Eau", "Limonade", "Baradères", "Thiotte"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["L'Acul-des-Pins", "Grand-Boucan", "Pétion-Ville", "Anse-à-Pitre"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Jacmel", "Terre-Neuve", "Perches", "Jean-Rabel"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Saint-Michel-de-l'Atalaye", "Pestel", "Belle-Anse", "Tabarre"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["La Vallée-de-Jacmel", "Jérémie", "Tabarre", "Montrouis"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Arnaud", "Cayes-Jacmel", "Grand-Boucan", "Dame-Marie"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Grand-Gosier", "Tabarre", "Môle-Saint-Nicolas", "Côteaux"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Anse-à-Veau", "Saint-Marc", "Borgne", "Thiotte"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Bainet", "Cap-Haïtien", "L'Acul-des-Pins", "Port-au-Prince"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Chambellan", "Grand-Gosier", "Lascahobas", "Carice"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Plaisance-du-Sud", "Belle-Anse", "Borgne", "Terre-Neuve"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département du Sud-Est ?",
    options: ["Port-Margot", "Petit-Trou-de-Nippes", "Gros-Morne", "Marigot"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Chambellan", "Port-Margot", "Milot", "Plaine-du-Nord"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Môle-Saint-Nicolas", "Abricots", "Saint-Michel-de-l'Atalaye", "Cabaret"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Chardonnières", "Pestel", "Anse-à-Veau", "Cerca-la-Source"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Saint-Marc", "Acul-du-Nord", "Corail", "Terrier-Rouge"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Cité Soleil", "Port-Margot", "Les Irois", "Cabaret"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Petit-Goâve", "Cayes-Jacmel", "Les Irois", "Môle-Saint-Nicolas"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Acul-du-Nord", "Corail", "Ganthier", "La Tortue"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Port-Salut", "Pointe-à-Raquette", "Les Cayes", "Les Irois"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Anse-à-Veau", "Les Irois", "Côtes-de-Fer", "Port-Salut"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Beaumont", "Port-de-Paix", "Petite-Rivière-de-l'Artibonite", "Port-au-Prince"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Borgne", "Carrefour", "Bassin-Bleu", "Beaumont"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Grand-Goâve", "Mont-Organisé", "Les Irois", "Chardonnières"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Anse-d'Hainault", "Sainte-Suzanne", "Pointe-à-Raquette", "Baradères"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Pilate", "Jérémie", "Cité Soleil", "Marigot"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Belladère", "Pestel", "Thomonde", "Ganthier"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Jérémie", "L'Estère", "Grand-Bassin", "Côteaux"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["L'Estère", "Belladère", "Arniquet", "Jérémie"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Thomassique", "Roseaux", "Maniche", "Port-Salut"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Grand-Boucan", "Grand-Gosier", "Arnaud", "Corail"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Anse-d'Hainault", "Cerca-la-Source", "Fonds-des-Nègres", "Saint-Marc"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Pointe-à-Raquette", "Camp-Perrin", "Trou-Bonbon", "Milot"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Milot", "Perches", "Les Irois", "Baie-de-Henne"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Abricots", "Gros-Morne", "Torbeck", "Marmelade"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Belladère", "Thomonde", "Trou-Bonbon", "Côteaux"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Beaumont", "Roche-à-Bateau", "Grande-Saline", "Ouanaminthe"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Cité Soleil", "Côteaux", "Bainet", "Corail"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Port-Salut", "Jean-Rabel", "Capotille", "Dame-Marie"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Petit-Trou-de-Nippes", "Côteaux", "L'Estère", "Dame-Marie"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Chambellan", "Cité Soleil", "Grand-Goâve", "Savanette"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Ennery", "Bombardopolis", "Pestel", "Lascahobas"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Montrouis", "Baradères", "Beaumont", "Acul-du-Nord"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Ganthier", "Les Irois", "Croix-des-Bouquets", "Cerca-la-Source"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Saint-Louis-du-Sud", "Terre-Neuve", "Trou-Bonbon", "Port-au-Prince"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Pestel", "Cité Soleil", "Gressier", "Belladère"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Roseaux", "Arniquet", "Gressier", "Grand-Boucan"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Milot", "Jérémie", "Port-Margot", "Hinche"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Petit-Goâve", "Acul-du-Nord", "Jérémie", "Plaisance"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Lascahobas", "Hinche", "La Chapelle", "Les Irois"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Saint-Marc", "Côteaux", "Corail", "Ganthier"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Maïssade", "Roseaux", "Thiotte", "Desdunes"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Les Irois", "Thomazeau", "Saint-Jean-du-Sud", "Dessalines"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Maïssade", "Corail", "Port-au-Prince", "Mombin-Crochu"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Pestel", "Verrettes", "Saut-d'Eau", "Fonds-Verrettes"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Moron", "Thomazeau", "Chardonnières", "Plaine-du-Nord"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Jérémie", "Boucan-Carré", "Mirebalais", "Petit-Trou-de-Nippes"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Les Irois", "Fonds-des-Nègres", "Plaine-du-Nord", "Cap-Haïtien"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Ennery", "Capotille", "Les Irois", "Marigot"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Dondon", "Belle-Anse", "Fort-Liberté", "Dame-Marie"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Moron", "Saint-Louis-du-Sud", "Léogâne", "Ganthier"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Moron", "Montrouis", "Maniche", "Torbeck"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Chansolme", "Pestel", "Cornillon", "Môle-Saint-Nicolas"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Pointe-à-Raquette", "Verrettes", "Montrouis", "Pestel"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Corail", "Capotille", "Côteaux", "Petite-Rivière-de-l'Artibonite"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Thomassique", "Pétion-Ville", "La Tortue", "Anse-d'Hainault"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Trou-Bonbon", "Kenscoff", "Grand-Goâve", "Côtes-de-Fer"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Marigot", "Jérémie", "Pilate", "Arnaud"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Roseaux", "Arnaud", "Bombardopolis", "Anse-à-Veau"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Port-Margot", "Delmas", "Corail", "Grand-Gosier"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Saint-Louis-du-Nord", "Corail", "Mombin-Crochu", "Cap-Haïtien"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Pestel", "Maniche", "Anse-à-Veau", "Belle-Anse"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Carrefour", "Trou-Bonbon", "Baradères", "Belle-Anse"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Grande-Saline", "Saint-Marc", "Sainte-Suzanne", "Jérémie"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Jacmel", "Port-Margot", "Corail", "Miragoâne"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Liancourt", "Carice", "Cabaret", "Anse-d'Hainault"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Plaisance", "Abricots", "Maniche", "Arniquet"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Les Cayes", "Pétion-Ville", "Mombin-Crochu", "Pestel"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Cabaret", "Pestel", "Belle-Anse", "Saint-Michel-de-l'Atalaye"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Limonade", "Anse-à-Pitre", "Caracol", "Abricots"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Abricots", "Saut-d'Eau", "Port-Margot", "Savanette"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Grand-Gosier", "Saint-Michel-de-l'Atalaye", "Beaumont", "Cap-Haïtien"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Thomonde", "Beaumont", "Limonade", "Baradères"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Moron", "La Vallée-de-Jacmel", "Plaisance", "Léogâne"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Limonade", "Les Cayes", "Beaumont", "Chardonnières"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Saint-Jean-du-Sud", "Roche-à-Bateau", "Dessalines", "Jérémie"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Chantal", "Milot", "La Tortue", "Dame-Marie"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Port-à-Piment", "Anse-d'Hainault", "Pilate", "Grand-Bassin"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Les Irois", "Thiotte", "Grand-Bassin", "Montrouis"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Côtes-de-Fer", "Saut-d'Eau", "L'Estère", "Pestel"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Plaisance", "Jean-Rabel", "Abricots", "Caracol"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Savanette", "Moron", "Paillant", "Bombardopolis"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Beaumont", "Chantal", "Dondon", "Ouanaminthe"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Beaumont", "Maïssade", "Gressier", "Plaisance"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Corail", "Ennery", "Terre-Neuve", "Côtes-de-Fer"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Jérémie", "Petit-Trou-de-Nippes", "Grand-Boucan", "Terrier-Rouge"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Roseaux", "Paillant", "Côteaux", "Milot"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Chantal", "Cornillon", "Beaumont", "Sainte-Suzanne"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Dessalines", "Thomonde", "Moron", "Borgne"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Petit-Trou-de-Nippes", "Léogâne", "Abricots", "Saint-Jean-du-Sud"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Kenscoff", "Pestel", "Dondon", "Thomonde"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Les Irois", "Terre-Neuve", "Marmelade", "Port-de-Paix"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Thomazeau", "Saint-Marc", "Desdunes", "Pestel"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Côtes-de-Fer", "Jérémie", "Grand-Bassin", "La Chapelle"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Delmas", "Les Cayes", "Bainet", "Roseaux"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Léogâne", "Anse-d'Hainault", "Plaisance", "Delmas"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Jérémie", "Thiotte", "Saint-Louis-du-Sud", "Pointe-à-Raquette"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Anse-d'Hainault", "La Vallée-de-Jacmel", "Verrettes", "Petite-Rivière-de-l'Artibonite"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Moron", "Montrouis", "Saint-Marc", "Môle-Saint-Nicolas"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Cité Soleil", "Fonds-Verrettes", "Port-Salut", "Dame-Marie"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Saut-d'Eau", "Port-Margot", "Anse-d'Hainault", "Acul-du-Nord"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes se trouve dans le département de la Grand'Anse ?",
    options: ["Roseaux", "Pilate", "Grand-Boucan", "Thiotte"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Cabaret", "Pétion-Ville", "Roche-à-Bateau", "Léogâne"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Pilate", "Cabaret", "Tabarre", "Ganthier"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Grand-Goâve", "Arcahaie", "Jean-Rabel", "Tabarre"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Cornillon", "Arcahaie", "Bahon", "Cabaret"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Port-de-Paix", "Cornillon", "Pointe-à-Raquette", "Petit-Goâve"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Petit-Goâve", "Port-au-Prince", "Pétion-Ville", "Saint-Marc"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Croix-des-Bouquets", "Gressier", "Savanette", "Ganthier"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Milot", "Léogâne", "Port-au-Prince", "Cabaret"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Fonds-Verrettes", "Belladère", "Gressier", "Pétion-Ville"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Arcahaie", "Grand-Goâve", "Sainte-Suzanne", "Petit-Goâve"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Cité Soleil", "Thomazeau", "Petit-Goâve", "Pestel"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Delmas", "Port-au-Prince", "Pétion-Ville", "Sainte-Suzanne"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Arcahaie", "Petit-Goâve", "Ennery", "Port-au-Prince"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Pétion-Ville", "Paillant", "Ganthier", "Arcahaie"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Grand-Goâve", "Tabarre", "Pétion-Ville", "Ennery"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Arnaud", "Cornillon", "Delmas", "Tabarre"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Grand-Goâve", "Cornillon", "Cité Soleil", "La Chapelle"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Grand-Goâve", "Milot", "Cabaret", "Gressier"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Carrefour", "Thomazeau", "Grand-Goâve", "Dame-Marie"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Grand-Goâve", "Pointe-à-Raquette", "Borgne", "Tabarre"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Ganthier", "Gros-Morne", "Tabarre", "Cité Soleil"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Port-de-Paix", "Carrefour", "Kenscoff", "Cité Soleil"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Carice", "Gressier", "Port-au-Prince", "Petit-Goâve"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Cité Soleil", "Petit-Goâve", "Tabarre", "Bainet"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Croix-des-Bouquets", "Chantal", "Fonds-Verrettes", "Léogâne"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Pointe-à-Raquette", "Delmas", "Thomonde", "Pétion-Ville"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Arcahaie", "Pilate", "Grand-Goâve", "Pointe-à-Raquette"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Tabarre", "Léogâne", "Cornillon", "Acul-du-Nord"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Petit-Goâve", "Carrefour", "Trou-Bonbon", "Thomazeau"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Cité Soleil", "Léogâne", "Boucan-Carré", "Delmas"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Petit-Goâve", "Carrefour", "Arcahaie", "Trou-Bonbon"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Cabaret", "Fonds-Verrettes", "Carrefour", "Capotille"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Léogâne", "Delmas", "Pointe-à-Raquette", "Abricots"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Gressier", "Beaumont", "Delmas", "Arcahaie"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Bassin-Bleu", "Pointe-à-Raquette", "Kenscoff", "Croix-des-Bouquets"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Pointe-à-Raquette", "Cornillon", "Léogâne", "Liancourt"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Léogâne", "Lascahobas", "Petit-Goâve", "Thomazeau"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Grand-Goâve", "Delmas", "Belladère", "Fonds-Verrettes"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Petite-Rivière-de-l'Artibonite", "Thomazeau", "Cornillon", "Ganthier"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Tabarre", "Belladère", "Carrefour", "Cornillon"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Dessalines", "Cabaret", "Pointe-à-Raquette", "Pétion-Ville"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Kenscoff", "Petit-Goâve", "Cabaret", "Bombardopolis"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Arcahaie", "Grand-Goâve", "Anse-à-Veau", "Cornillon"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Fonds-Verrettes", "Carrefour", "Carice", "Croix-des-Bouquets"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Thomazeau", "Tabarre", "Arnaud", "Kenscoff"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Kenscoff", "Cité Soleil", "La Vallée-de-Jacmel", "Petit-Goâve"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Petite-Rivière-de-l'Artibonite", "Pointe-à-Raquette", "Gressier", "Port-au-Prince"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Croix-des-Bouquets", "Kenscoff", "Montrouis", "Cabaret"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Fonds-Verrettes", "Carrefour", "Fort-Liberté", "Léogâne"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Carrefour", "Aquin", "Delmas", "Cité Soleil"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Cité Soleil", "Carrefour", "Grand-Goâve", "Boucan-Carré"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Cabaret", "Fonds-Verrettes", "Saint-Michel-de-l'Atalaye", "Pointe-à-Raquette"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Tabarre", "Dame-Marie", "Carrefour", "Léogâne"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Fonds-Verrettes", "Petit-Goâve", "Thomazeau", "Pilate"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Pointe-à-Raquette", "Bahon", "Pétion-Ville", "Kenscoff"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Port-au-Prince", "Pétion-Ville", "Arcahaie", "Petite-Rivière-de-l'Artibonite"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Cité Soleil", "Carrefour", "La Tortue", "Grand-Goâve"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Léogâne", "Grand-Boucan", "Cabaret", "Pétion-Ville"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Port-au-Prince", "Carrefour", "Abricots", "Cité Soleil"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Ganthier", "Petit-Goâve", "Gonaïves", "Cornillon"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Léogâne", "Carrefour", "Delmas", "Paillant"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Pétion-Ville", "Croix-des-Bouquets", "Gressier", "Anse-d'Hainault"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Cerca-Carvajal", "Pointe-à-Raquette", "Tabarre", "Gressier"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Carrefour", "Pointe-à-Raquette", "Paillant", "Pétion-Ville"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Kenscoff", "Fonds-Verrettes", "Anse-à-Pitre", "Tabarre"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Dessalines", "Ganthier", "Petit-Goâve", "Grand-Goâve"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Petit-Goâve", "Bombardopolis", "Thomazeau", "Kenscoff"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Arniquet", "Grand-Goâve", "Croix-des-Bouquets", "Delmas"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Port-au-Prince", "Capotille", "Léogâne", "Cabaret"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Fonds-Verrettes", "Cabaret", "Thomazeau", "Petit-Trou-de-Nippes"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Baradères", "Carrefour", "Grand-Goâve", "Cornillon"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Gressier", "Delmas", "Cité Soleil", "Bombardopolis"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Vallières", "Pointe-à-Raquette", "Petit-Goâve", "Carrefour"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Cabaret", "La Chapelle", "Petit-Goâve", "Thomazeau"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Cerca-la-Source", "Pétion-Ville", "Gressier", "Ganthier"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Fonds-Verrettes", "Pointe-à-Raquette", "Port-Margot", "Port-au-Prince"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Grand-Goâve", "Croix-des-Bouquets", "Savanette", "Cabaret"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Carice", "Gressier", "Cabaret", "Tabarre"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Aquin", "Ganthier", "Léogâne", "Pointe-à-Raquette"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Ganthier", "Carrefour", "Petit-Goâve", "Hinche"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Cité Soleil", "Tabarre", "Montrouis", "Port-au-Prince"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Petit-Goâve", "Delmas", "Chantal", "Grand-Goâve"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Ganthier", "Borgne", "Gressier", "Cabaret"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Côtes-de-Fer", "Fonds-Verrettes", "Ganthier", "Grand-Goâve"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Thomazeau", "Roche-à-Bateau", "Carrefour", "Gressier"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Pointe-à-Raquette", "Côteaux", "Fonds-Verrettes", "Carrefour"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Port-au-Prince", "Thomazeau", "Cabaret", "Anse-d'Hainault"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Arcahaie", "Carice", "Port-au-Prince", "Croix-des-Bouquets"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Tabarre", "Thomazeau", "Chambellan", "Port-au-Prince"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Plaisance", "Cornillon", "Port-au-Prince", "Thomazeau"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Tabarre", "Port-au-Prince", "Ganthier", "Liancourt"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Petit-Goâve", "Gressier", "Miragoâne", "Carrefour"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Gressier", "Carrefour", "Kenscoff", "Terrier-Rouge"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Saint-Jean-du-Sud", "Arcahaie", "Tabarre", "Cornillon"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Arcahaie", "Pétion-Ville", "Abricots", "Grand-Goâve"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Croix-des-Bouquets", "Cornillon", "Thomazeau", "Grand-Boucan"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Pointe-à-Raquette", "Kenscoff", "Gressier", "La Tortue"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Gressier", "Petit-Goâve", "Cité Soleil", "Maniche"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Delmas", "Petite-Rivière-de-l'Artibonite", "Gressier", "Pointe-à-Raquette"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Ouest ?",
    options: ["Pointe-à-Raquette", "Cité Soleil", "Sainte-Suzanne", "Thomazeau"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Dondon", "Plaisance", "Mombin-Crochu", "Plaine-du-Nord"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Bahon", "L'Acul-des-Pins", "Marigot", "Plaisance"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Port-Margot", "Limonade", "Caracol", "Dondon"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Dondon", "Arnaud", "Bahon", "Limonade"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["L'Acul-des-Pins", "Jacmel", "Dondon", "Borgne"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Cap-Haïtien", "Plaisance", "Maniche", "L'Acul-des-Pins"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Bahon", "Grand-Gosier", "Port-Margot", "Pilate"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Bahon", "Port-Margot", "Gonaïves", "Milot"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Milot", "Bainet", "L'Acul-des-Pins", "Limonade"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Milot", "Camp-Coq", "Pilate", "Thomonde"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Bahon", "Saint-Louis-du-Sud", "Milot", "Plaisance"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Jacmel", "Pilate", "Port-Margot", "Acul-du-Nord"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Camp-Coq", "Jérémie", "Cap-Haïtien", "Bahon"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Plaisance", "Pilate", "Bahon", "Maïssade"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Cap-Haïtien", "Plaisance", "Port-Margot", "Gros-Morne"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Pilate", "Bombardopolis", "Cap-Haïtien", "Limonade"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Milot", "Perches", "Acul-du-Nord", "Plaine-du-Nord"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Grand-Boucan", "Acul-du-Nord", "L'Acul-des-Pins", "Milot"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Acul-du-Nord", "Dondon", "Grand-Boucan", "Milot"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Plaisance", "Pilate", "Milot", "Camp-Perrin"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["L'Acul-des-Pins", "Milot", "Plaisance", "Ouanaminthe"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Milot", "Desdunes", "Port-Margot", "Borgne"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Pilate", "Bahon", "Plaisance", "Roche-à-Bateau"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["L'Acul-des-Pins", "Acul-du-Nord", "Dondon", "Sainte-Suzanne"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Acul-du-Nord", "Cap-Haïtien", "Dondon", "Marmelade"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Montrouis", "Camp-Coq", "Bahon", "Plaisance"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["La Chapelle", "Plaisance", "Port-Margot", "Cap-Haïtien"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Belladère", "Camp-Coq", "Acul-du-Nord", "Port-Margot"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Fort-Liberté", "Cap-Haïtien", "L'Acul-des-Pins", "Limonade"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Borgne", "Bahon", "Dondon", "Petite-Rivière-de-l'Artibonite"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Milot", "Fonds-Verrettes", "Port-Margot", "Plaine-du-Nord"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Cap-Haïtien", "Bahon", "Plaisance-du-Sud", "Port-Margot"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Milot", "Cap-Haïtien", "Dondon", "Cerca-la-Source"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Limonade", "Miragoâne", "L'Acul-des-Pins", "Port-Margot"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["L'Acul-des-Pins", "Mombin-Crochu", "Port-Margot", "Acul-du-Nord"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Port-Margot", "Léogâne", "Bahon", "Acul-du-Nord"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Borgne", "L'Acul-des-Pins", "Caracol", "Pilate"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Borgne", "Plaine-du-Nord", "Marmelade", "Cap-Haïtien"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Pilate", "Fort-Liberté", "Milot", "Camp-Coq"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Thomazeau", "Dondon", "Limonade", "Port-Margot"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Plaisance-du-Sud", "Pilate", "L'Acul-des-Pins", "Milot"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Baie-de-Henne", "Port-Margot", "Cap-Haïtien", "Limonade"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Plaine-du-Nord", "Cap-Haïtien", "Anse-à-Veau", "Milot"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Plaisance", "Borgne", "Moron", "Pilate"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Limonade", "Bahon", "Bassin-Bleu", "Camp-Coq"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Borgne", "Plaisance", "Milot", "Pétion-Ville"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Cap-Haïtien", "Léogâne", "Milot", "Limonade"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Pestel", "Limonade", "Milot", "Plaisance"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Plaine-du-Nord", "Croix-des-Bouquets", "Acul-du-Nord", "Cap-Haïtien"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Kenscoff", "Bahon", "Milot", "Limonade"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Acul-du-Nord", "Dessalines", "Bahon", "L'Acul-des-Pins"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Acul-du-Nord", "Port-Margot", "Milot", "Saint-Marc"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Cap-Haïtien", "Port-Margot", "Tabarre", "Acul-du-Nord"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Port-Margot", "Plaisance", "L'Acul-des-Pins", "Baie-de-Henne"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Saint-Michel-de-l'Atalaye", "Acul-du-Nord", "Limonade", "Dondon"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Pilate", "L'Acul-des-Pins", "Jean-Rabel", "Plaisance"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Plaisance", "Paillant", "Plaine-du-Nord", "Port-Margot"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Cap-Haïtien", "Camp-Coq", "Dame-Marie", "Plaisance"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Belladère", "Limonade", "Camp-Coq", "Plaine-du-Nord"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Limonade", "Thomonde", "L'Acul-des-Pins", "Dondon"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Bahon", "Milot", "Perches", "Borgne"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Camp-Coq", "Pilate", "Plaisance", "Cabaret"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Baie-de-Henne", "Plaine-du-Nord", "Milot", "Borgne"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Acul-du-Nord", "Bahon", "Plaisance", "Saut-d'Eau"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Petit-Trou-de-Nippes", "L'Acul-des-Pins", "Dondon", "Milot"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Bahon", "Jérémie", "Dondon", "Pilate"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Borgne", "Camp-Coq", "Fonds-des-Nègres", "Port-Margot"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Borgne", "Plaine-du-Nord", "Camp-Coq", "L'Asile"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Port-Margot", "Mont-Organisé", "Milot", "Cap-Haïtien"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Abricots", "Milot", "Bahon", "Cap-Haïtien"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Acul-du-Nord", "Camp-Coq", "Dondon", "Aquin"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Plaine-du-Nord", "Bahon", "Camp-Coq", "Port-de-Paix"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Cap-Haïtien", "Miragoâne", "Pilate", "Dondon"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Grand-Boucan", "Pilate", "L'Acul-des-Pins", "Cap-Haïtien"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Maniche", "Acul-du-Nord", "Milot", "Limonade"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Milot", "Borgne", "Delmas", "L'Acul-des-Pins"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Plaine-du-Nord", "Camp-Coq", "Bahon", "Fort-Liberté"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Verrettes", "Limonade", "Bahon", "Borgne"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Dondon", "Mont-Organisé", "Pilate", "Acul-du-Nord"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Limonade", "Cité Soleil", "Milot", "Cap-Haïtien"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Camp-Coq", "Plaine-du-Nord", "Caracol", "L'Acul-des-Pins"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Pointe-à-Raquette", "Dondon", "Camp-Coq", "Port-Margot"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Pilate", "Borgne", "Baie-de-Henne", "L'Acul-des-Pins"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Milot", "La Tortue", "Acul-du-Nord", "Plaisance"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Roseaux", "Limonade", "Plaisance", "Milot"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Pilate", "Milot", "Mombin-Crochu", "Camp-Coq"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Plaisance", "Petit-Trou-de-Nippes", "L'Acul-des-Pins", "Milot"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Jérémie", "Pilate", "Camp-Coq", "Plaine-du-Nord"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Camp-Coq", "Port-Margot", "Limonade", "Terrier-Rouge"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Limonade", "Thiotte", "Port-Margot", "Bahon"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Borgne", "Cap-Haïtien", "Dondon", "Maïssade"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Anse-d'Hainault", "Plaisance", "Borgne", "Milot"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Acul-du-Nord", "Pilate", "Thiotte", "Dondon"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Cap-Haïtien", "Saint-Marc", "Port-Margot", "L'Acul-des-Pins"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Port-Margot", "Plaine-du-Nord", "Chambellan", "Bahon"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["L'Acul-des-Pins", "Ganthier", "Pilate", "Plaisance"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Plaine-du-Nord", "Borgne", "Ganthier", "Bahon"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Milot", "Borgne", "Cité Soleil", "Pilate"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Pilate", "Port-Margot", "Camp-Coq", "Saint-Louis-du-Sud"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord ?",
    options: ["Port-Margot", "Montrouis", "Borgne", "Dondon"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Chansolme", "Maniche", "Chardonnières", "Torbeck"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Les Irois", "Roche-à-Bateau", "Arniquet", "Camp-Perrin"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Saint-Jean-du-Sud", "Chardonnières", "Petit-Trou-de-Nippes", "Port-Salut"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Les Cayes", "Dame-Marie", "Camp-Perrin", "Aquin"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["L'Acul-des-Pins", "Camp-Perrin", "Port-à-Piment", "Chardonnières"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Port-à-Piment", "Torbeck", "Camp-Perrin", "Pointe-à-Raquette"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Arniquet", "Borgne", "Aquin", "Camp-Perrin"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Camp-Perrin", "Pointe-à-Raquette", "Aquin", "Port-Salut"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Moron", "Port-à-Piment", "Chantal", "Les Cayes"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Les Cayes", "Bahon", "Arniquet", "Chantal"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Saint-Louis-du-Sud", "Port-Margot", "Camp-Perrin", "Port-Salut"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Saint-Louis-du-Sud", "Torbeck", "Môle-Saint-Nicolas", "Maniche"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Plaine-du-Nord", "Chardonnières", "Saint-Louis-du-Sud", "Port-Salut"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Dame-Marie", "Arniquet", "Roche-à-Bateau", "Camp-Perrin"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Port-à-Piment", "Saut-d'Eau", "Arniquet", "Côteaux"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Chardonnières", "Aquin", "Tabarre", "Torbeck"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Camp-Perrin", "Côteaux", "Marmelade", "Roche-à-Bateau"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Maniche", "Aquin", "Gressier", "Roche-à-Bateau"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Bainet", "Aquin", "Port-Salut", "Chantal"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Côteaux", "Arniquet", "Saint-Jean-du-Sud", "Ganthier"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Port-Salut", "Liancourt", "Roche-à-Bateau", "Arniquet"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Saint-Louis-du-Sud", "Môle-Saint-Nicolas", "Maniche", "Roche-à-Bateau"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Port-Salut", "Port-à-Piment", "Chantal", "Mombin-Crochu"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Chardonnières", "Torbeck", "Arniquet", "Marmelade"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Trou-du-Nord", "Saint-Jean-du-Sud", "Chardonnières", "Aquin"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Saint-Jean-du-Sud", "Camp-Perrin", "Saint-Louis-du-Sud", "Fonds-des-Nègres"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Cap-Haïtien", "Arniquet", "Les Cayes", "Côteaux"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Thomonde", "Arniquet", "Aquin", "Saint-Jean-du-Sud"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Torbeck", "Arniquet", "Belle-Anse", "Saint-Jean-du-Sud"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Baradères", "Arniquet", "Port-Salut", "Les Cayes"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Arniquet", "Liancourt", "Port-Salut", "Saint-Louis-du-Sud"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Aquin", "Baradères", "Torbeck", "Maniche"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["L'Estère", "Côteaux", "Saint-Jean-du-Sud", "Aquin"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Arniquet", "Acul-du-Nord", "Aquin", "Camp-Perrin"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Saint-Jean-du-Sud", "Baie-de-Henne", "Roche-à-Bateau", "Maniche"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Saint-Louis-du-Sud", "Roseaux", "Roche-à-Bateau", "Aquin"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Grand-Boucan", "Chantal", "Port-à-Piment", "Maniche"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Aquin", "Saint-Jean-du-Sud", "L'Estère", "Roche-à-Bateau"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Gonaïves", "Port-Salut", "Torbeck", "Saint-Louis-du-Sud"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Camp-Perrin", "Maniche", "Saint-Jean-du-Sud", "Petite-Rivière-de-l'Artibonite"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Roche-à-Bateau", "Torbeck", "Abricots", "Maniche"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Port-à-Piment", "Plaine-du-Nord", "Roche-à-Bateau", "Chardonnières"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Port-à-Piment", "Saint-Jean-du-Sud", "Thomazeau", "Port-Salut"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Port-Salut", "Abricots", "Port-à-Piment", "Aquin"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Aquin", "Torbeck", "Maniche", "Léogâne"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Trou-Bonbon", "Maniche", "Saint-Louis-du-Sud", "Roche-à-Bateau"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Liancourt", "Torbeck", "Arniquet", "Les Cayes"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Port-à-Piment", "Côteaux", "Arniquet", "La Vallée-de-Jacmel"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Paillant", "Chantal", "Maniche", "Saint-Louis-du-Sud"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Maniche", "Chardonnières", "Port-à-Piment", "Saint-Michel-de-l'Atalaye"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Chardonnières", "Port-Salut", "Cayes-Jacmel", "Maniche"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Côteaux", "Saint-Louis-du-Sud", "Port-à-Piment", "Marmelade"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Maniche", "Camp-Perrin", "Dessalines", "Port-Salut"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Pointe-à-Raquette", "Saint-Louis-du-Sud", "Saint-Jean-du-Sud", "Les Cayes"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Saint-Jean-du-Sud", "Torbeck", "Camp-Perrin", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Port-Salut", "Boucan-Carré", "Côteaux", "Chardonnières"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Les Cayes", "Mirebalais", "Saint-Jean-du-Sud", "Côteaux"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Roche-à-Bateau", "Saint-Jean-du-Sud", "Mont-Organisé", "Les Cayes"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Côteaux", "Saint-Louis-du-Sud", "Roche-à-Bateau", "L'Estère"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Anse-d'Hainault", "Chardonnières", "Aquin", "Les Cayes"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Port-à-Piment", "Port-Salut", "Maniche", "Tabarre"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Port-Salut", "Saint-Jean-du-Sud", "Grand-Gosier", "Aquin"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Côteaux", "Hinche", "Les Cayes", "Saint-Louis-du-Sud"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Marigot", "Chardonnières", "Port-à-Piment", "Port-Salut"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Camp-Perrin", "Pestel", "Torbeck", "Chardonnières"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Arniquet", "Aquin", "Verrettes", "Port-à-Piment"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Thomonde", "Torbeck", "Roche-à-Bateau", "Maniche"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Maniche", "Roche-à-Bateau", "Chantal", "Grand-Bassin"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Torbeck", "Arniquet", "Port-Salut", "Mombin-Crochu"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Grand-Bassin", "Camp-Perrin", "Arniquet", "Port-à-Piment"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Port-à-Piment", "Côteaux", "Saint-Louis-du-Sud", "Dessalines"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Port-Salut", "Chantal", "Aquin", "Pestel"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Roche-à-Bateau", "Chantal", "Tabarre", "Aquin"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Chardonnières", "Aquin", "Port-Salut", "Chambellan"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Chantal", "Montrouis", "Port-Salut", "Les Cayes"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Arcahaie", "Côteaux", "Port-Salut", "Torbeck"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Torbeck", "Saint-Jean-du-Sud", "Anse-à-Pitre", "Port-à-Piment"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Petit-Trou-de-Nippes", "Camp-Perrin", "Torbeck", "Port-à-Piment"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Côteaux", "Camp-Perrin", "Bombardopolis", "Torbeck"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Arniquet", "Saint-Jean-du-Sud", "La Tortue", "Aquin"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Montrouis", "Les Cayes", "Camp-Perrin", "Port-Salut"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Aquin", "Arniquet", "Roche-à-Bateau", "Miragoâne"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Les Cayes", "Dessalines", "Saint-Jean-du-Sud", "Saint-Louis-du-Sud"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Port-au-Prince", "Aquin", "Camp-Perrin", "Chardonnières"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Arniquet", "Torbeck", "Port-Salut", "Jérémie"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Saint-Jean-du-Sud", "Aquin", "Moron", "Maniche"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Petit-Trou-de-Nippes", "Arniquet", "Maniche", "Chantal"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Jacmel", "Aquin", "Saint-Jean-du-Sud", "Roche-à-Bateau"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Savanette", "Les Cayes", "Port-Salut", "Maniche"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Ennery", "Roche-à-Bateau", "Saint-Louis-du-Sud", "Saint-Jean-du-Sud"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Maniche", "Cerca-la-Source", "Camp-Perrin", "Roche-à-Bateau"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Port-Salut", "Acul-du-Nord", "Chardonnières", "Les Cayes"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Arniquet", "Cabaret", "Aquin", "Saint-Louis-du-Sud"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Terrier-Rouge", "Camp-Perrin", "Maniche", "Saint-Jean-du-Sud"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Les Cayes", "Port-de-Paix", "Aquin", "Saint-Jean-du-Sud"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Roche-à-Bateau", "Saint-Jean-du-Sud", "Thiotte", "Chardonnières"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Port-à-Piment", "Maniche", "Petit-Trou-de-Nippes", "Chantal"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Arniquet", "Chantal", "Roche-à-Bateau", "Cornillon"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Port-Salut", "Chantal", "Port-à-Piment", "Gressier"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud ?",
    options: ["Baie-de-Henne", "Saint-Jean-du-Sud", "Chantal", "Torbeck"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Petite-Rivière-de-l'Artibonite", "Grande-Saline", "Roseaux", "Verrettes"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Saint-Marc", "Grande-Saline", "Petite-Rivière-de-l'Artibonite", "Cabaret"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Gros-Morne", "Ennery", "Cité Soleil", "Terre-Neuve"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Bombardopolis", "Liancourt", "Gonaïves", "Verrettes"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Verrettes", "Roche-à-Bateau", "Liancourt", "Marmelade"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Desdunes", "Gros-Morne", "Jean-Rabel", "Dessalines"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Montrouis", "Borgne", "Gros-Morne", "Saint-Marc"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Ennery", "Terre-Neuve", "Grande-Saline", "Sainte-Suzanne"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Ennery", "Jacmel", "Saint-Marc", "Terre-Neuve"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Dessalines", "Bainet", "Saint-Michel-de-l'Atalaye", "Montrouis"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Montrouis", "Jérémie", "Dessalines", "L'Estère"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Desdunes", "Arcahaie", "Marmelade", "Gros-Morne"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Gros-Morne", "Montrouis", "Kenscoff", "Verrettes"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Saint-Marc", "Thomassique", "Liancourt", "Gros-Morne"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Saint-Marc", "Gros-Morne", "Bombardopolis", "Gonaïves"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Desdunes", "Plaisance", "Marmelade", "L'Estère"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Saint-Marc", "Liancourt", "La Chapelle", "Petit-Trou-de-Nippes"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Ennery", "Bassin-Bleu", "Terre-Neuve", "Saint-Marc"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Petite-Rivière-de-l'Artibonite", "La Chapelle", "Gonaïves", "Pilate"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Montrouis", "Port-à-Piment", "Desdunes", "La Chapelle"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Saint-Michel-de-l'Atalaye", "Gonaïves", "Savanette", "Grande-Saline"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Tabarre", "Verrettes", "Saint-Michel-de-l'Atalaye", "Saint-Marc"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Dessalines", "Liancourt", "Port-de-Paix", "Grande-Saline"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["L'Estère", "Petite-Rivière-de-l'Artibonite", "La Chapelle", "Saint-Louis-du-Sud"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Saint-Marc", "Saint-Michel-de-l'Atalaye", "Mirebalais", "Grande-Saline"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Gros-Morne", "Petite-Rivière-de-l'Artibonite", "Ennery", "Thiotte"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Maïssade", "Verrettes", "Petite-Rivière-de-l'Artibonite", "Terre-Neuve"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Montrouis", "Baie-de-Henne", "Saint-Marc", "Liancourt"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["L'Estère", "Ennery", "Môle-Saint-Nicolas", "Saint-Marc"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Miragoâne", "Ennery", "Marmelade", "Dessalines"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Liancourt", "Grande-Saline", "Petite-Rivière-de-l'Artibonite", "La Vallée-de-Jacmel"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["La Chapelle", "Port-de-Paix", "Gros-Morne", "Terre-Neuve"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Dessalines", "Ennery", "Port-Salut", "Terre-Neuve"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Saint-Michel-de-l'Atalaye", "Terrier-Rouge", "L'Estère", "Liancourt"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Gros-Morne", "Saint-Michel-de-l'Atalaye", "Gonaïves", "Fonds-Verrettes"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["La Chapelle", "Ennery", "Cap-Haïtien", "Petite-Rivière-de-l'Artibonite"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Ennery", "Belle-Anse", "Gonaïves", "Grande-Saline"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Petite-Rivière-de-l'Artibonite", "Saint-Marc", "Saint-Louis-du-Sud", "Liancourt"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Pointe-à-Raquette", "Verrettes", "Desdunes", "Terre-Neuve"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Beaumont", "Marmelade", "La Chapelle", "Desdunes"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Ennery", "Montrouis", "Thomazeau", "Saint-Marc"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Terre-Neuve", "Torbeck", "Desdunes", "Grande-Saline"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Verrettes", "Beaumont", "Marmelade", "L'Estère"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Gonaïves", "Roche-à-Bateau", "L'Estère", "Ennery"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Moron", "L'Estère", "Saint-Michel-de-l'Atalaye", "Liancourt"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Verrettes", "Ennery", "Cayes-Jacmel", "L'Estère"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Ennery", "Marmelade", "Montrouis", "Arniquet"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Cayes-Jacmel", "Liancourt", "Terre-Neuve", "Montrouis"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["La Chapelle", "Desdunes", "L'Estère", "Delmas"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Marmelade", "La Chapelle", "L'Estère", "Chantal"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Grande-Saline", "Saint-Marc", "Petite-Rivière-de-l'Artibonite", "Plaine-du-Nord"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Verrettes", "Marmelade", "Camp-Coq", "Saint-Marc"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["L'Estère", "Terre-Neuve", "Camp-Coq", "Ennery"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Petite-Rivière-de-l'Artibonite", "Acul-du-Nord", "Terre-Neuve", "Gros-Morne"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Ennery", "Petite-Rivière-de-l'Artibonite", "Abricots", "Liancourt"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Gros-Morne", "Savanette", "Petite-Rivière-de-l'Artibonite", "Verrettes"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Gros-Morne", "Belladère", "Terre-Neuve", "Grande-Saline"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Port-de-Paix", "Gros-Morne", "Gonaïves", "Ennery"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Grand-Bassin", "L'Estère", "Gonaïves", "La Chapelle"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["L'Estère", "Terre-Neuve", "Dessalines", "Port-de-Paix"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Dessalines", "Bahon", "Petite-Rivière-de-l'Artibonite", "Saint-Marc"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Verrettes", "Terre-Neuve", "Plaine-du-Nord", "Gonaïves"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Cité Soleil", "Desdunes", "Liancourt", "Verrettes"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Vallières", "La Chapelle", "Saint-Michel-de-l'Atalaye", "Petite-Rivière-de-l'Artibonite"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Ennery", "Gonaïves", "Cité Soleil", "Liancourt"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Trou-Bonbon", "Verrettes", "Montrouis", "Desdunes"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Desdunes", "Beaumont", "Montrouis", "Terre-Neuve"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Saint-Michel-de-l'Atalaye", "Gonaïves", "Chansolme", "Saint-Marc"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Desdunes", "Mirebalais", "Dessalines", "Petite-Rivière-de-l'Artibonite"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Liancourt", "Gros-Morne", "Arcahaie", "Gonaïves"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Terre-Neuve", "Anse-à-Veau", "Verrettes", "Liancourt"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Liancourt", "Dondon", "Desdunes", "La Chapelle"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Terre-Neuve", "Montrouis", "Cornillon", "Marmelade"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Chardonnières", "Grande-Saline", "Saint-Marc", "Terre-Neuve"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Terre-Neuve", "L'Estère", "Corail", "La Chapelle"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Verrettes", "Desdunes", "Gros-Morne", "Pétion-Ville"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Petite-Rivière-de-l'Artibonite", "Saint-Marc", "Ennery", "Terrier-Rouge"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Gros-Morne", "Montrouis", "Anse-à-Veau", "Ennery"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Anse-à-Pitre", "Dessalines", "L'Estère", "Ennery"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Baradères", "Saint-Michel-de-l'Atalaye", "L'Estère", "Saint-Marc"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Ennery", "Sainte-Suzanne", "Saint-Marc", "Terre-Neuve"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Milot", "Gonaïves", "Saint-Michel-de-l'Atalaye", "Gros-Morne"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Dessalines", "Terre-Neuve", "Anse-d'Hainault", "L'Estère"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["L'Estère", "Acul-du-Nord", "Terre-Neuve", "Montrouis"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["La Chapelle", "Saint-Louis-du-Sud", "Gonaïves", "Petite-Rivière-de-l'Artibonite"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Maïssade", "Ennery", "Gros-Morne", "Marmelade"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Montrouis", "L'Acul-des-Pins", "Marmelade", "L'Estère"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Grande-Saline", "Dame-Marie", "Montrouis", "Terre-Neuve"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Terre-Neuve", "Marmelade", "L'Estère", "Sainte-Suzanne"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Gros-Morne", "L'Estère", "Ennery", "Fort-Liberté"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Carice", "Gros-Morne", "Petite-Rivière-de-l'Artibonite", "Verrettes"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Kenscoff", "Desdunes", "Gros-Morne", "La Chapelle"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Miragoâne", "Marmelade", "Montrouis", "Gonaïves"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Liancourt", "Gonaïves", "Ennery", "Vallières"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Desdunes", "Terre-Neuve", "Liancourt", "Anse-à-Veau"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Saint-Marc", "Grande-Saline", "Gros-Morne", "Lascahobas"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Belladère", "Montrouis", "Gros-Morne", "Dessalines"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Desdunes", "Montrouis", "Grand-Boucan", "Petite-Rivière-de-l'Artibonite"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Desdunes", "Verrettes", "Baie-de-Henne", "Petite-Rivière-de-l'Artibonite"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de l'Artibonite ?",
    options: ["Boucan-Carré", "Verrettes", "Liancourt", "Desdunes"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Thomazeau", "Hinche", "Cerca-Carvajal", "Boucan-Carré"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Belladère", "Saint-Michel-de-l'Atalaye", "Saut-d'Eau", "Maïssade"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Fonds-des-Nègres", "Hinche", "Cerca-la-Source", "Boucan-Carré"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Gressier", "Cerca-Carvajal", "Thomonde", "Mirebalais"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Belladère", "Carrefour", "Saut-d'Eau", "Boucan-Carré"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Thomassique", "Gros-Morne", "Cerca-la-Source", "Cerca-Carvajal"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Belladère", "Thomonde", "Mirebalais", "Bombardopolis"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Savanette", "Boucan-Carré", "Belladère", "Môle-Saint-Nicolas"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Cerca-la-Source", "Lascahobas", "Belladère", "Miragoâne"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Cerca-la-Source", "Cerca-Carvajal", "Croix-des-Bouquets", "Thomassique"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Fonds-Verrettes", "Saut-d'Eau", "Thomonde", "Cerca-la-Source"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Plaisance-du-Sud", "Hinche", "Mirebalais", "Savanette"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Jérémie", "Boucan-Carré", "Maïssade", "Mirebalais"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Hinche", "Borgne", "Mirebalais", "Saut-d'Eau"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Anse-d'Hainault", "Thomassique", "Cerca-Carvajal", "Mirebalais"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Maïssade", "Grand-Goâve", "Cerca-Carvajal", "Boucan-Carré"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Boucan-Carré", "Lascahobas", "Cerca-la-Source", "Vallières"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Trou-du-Nord", "Savanette", "Hinche", "Belladère"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Vallières", "Cerca-Carvajal", "Savanette", "Saut-d'Eau"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Thomonde", "Savanette", "Saut-d'Eau", "Camp-Perrin"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Mirebalais", "Lascahobas", "Cerca-Carvajal", "Fort-Liberté"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Cerca-la-Source", "Savanette", "Petit-Goâve", "Belladère"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Cerca-la-Source", "Savanette", "Boucan-Carré", "Gressier"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Pilate", "Saut-d'Eau", "Hinche", "Cerca-la-Source"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Boucan-Carré", "Roseaux", "Savanette", "Lascahobas"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Savanette", "Dondon", "Hinche", "Thomassique"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Savanette", "Saut-d'Eau", "Hinche", "Plaisance-du-Sud"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Trou-du-Nord", "Lascahobas", "Thomassique", "Belladère"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Belladère", "Mirebalais", "Boucan-Carré", "Camp-Perrin"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Cerca-Carvajal", "Thiotte", "Belladère", "Savanette"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Thomonde", "Maïssade", "Les Irois", "Hinche"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Cerca-Carvajal", "Lascahobas", "Arnaud", "Thomassique"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Port-au-Prince", "Belladère", "Cerca-Carvajal", "Savanette"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Cerca-Carvajal", "Les Cayes", "Savanette", "Maïssade"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Cerca-Carvajal", "Thomonde", "Plaisance-du-Sud", "Saut-d'Eau"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Petite-Rivière-de-l'Artibonite", "Savanette", "Thomonde", "Belladère"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Belladère", "Cerca-Carvajal", "Mirebalais", "Plaisance-du-Sud"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Cerca-la-Source", "Môle-Saint-Nicolas", "Savanette", "Saut-d'Eau"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Thomassique", "Saint-Michel-de-l'Atalaye", "Cerca-la-Source", "Savanette"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Hinche", "Savanette", "Gros-Morne", "Maïssade"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Camp-Coq", "Hinche", "Thomassique", "Saut-d'Eau"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Belladère", "Maïssade", "Anse-à-Pitre", "Saut-d'Eau"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Savanette", "Saut-d'Eau", "Belladère", "Camp-Coq"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Cerca-la-Source", "Baie-de-Henne", "Belladère", "Mirebalais"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Maïssade", "Cerca-la-Source", "Mirebalais", "Ouanaminthe"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Savanette", "Cerca-Carvajal", "Thomonde", "Croix-des-Bouquets"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["La Vallée-de-Jacmel", "Mirebalais", "Lascahobas", "Belladère"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Capotille", "Thomonde", "Belladère", "Lascahobas"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Hinche", "Capotille", "Saut-d'Eau", "Savanette"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Ennery", "Boucan-Carré", "Mirebalais", "Cerca-Carvajal"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Belladère", "Bahon", "Cerca-Carvajal", "Saut-d'Eau"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Mirebalais", "Hinche", "Ouanaminthe", "Belladère"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Saut-d'Eau", "Cerca-la-Source", "Mirebalais", "Chantal"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Paillant", "Mirebalais", "Savanette", "Thomonde"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Grand-Boucan", "Hinche", "Saut-d'Eau", "Belladère"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Verrettes", "Belladère", "Lascahobas", "Maïssade"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Mirebalais", "Lascahobas", "Saut-d'Eau", "Chambellan"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Lascahobas", "Belladère", "Thomonde", "Port-Salut"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Beaumont", "Boucan-Carré", "Hinche", "Cerca-la-Source"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Thomonde", "Port-Margot", "Cerca-Carvajal", "Maïssade"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Saut-d'Eau", "Lascahobas", "Thomassique", "Miragoâne"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Thomassique", "Sainte-Suzanne", "Saut-d'Eau", "Belladère"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Thomassique", "Marigot", "Mirebalais", "Cerca-Carvajal"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Boucan-Carré", "La Tortue", "Maïssade", "Thomassique"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Belladère", "Plaine-du-Nord", "Thomonde", "Savanette"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Saut-d'Eau", "Boucan-Carré", "Moron", "Thomonde"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Savanette", "Cerca-la-Source", "Verrettes", "Hinche"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Lascahobas", "Savanette", "Mirebalais", "Plaisance"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Ganthier", "Mirebalais", "Belladère", "Thomassique"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Grand-Bassin", "Thomassique", "Thomonde", "Lascahobas"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Petit-Goâve", "Lascahobas", "Maïssade", "Cerca-la-Source"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Cerca-la-Source", "Thomonde", "Cerca-Carvajal", "Port-Margot"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Hinche", "Saut-d'Eau", "Thomazeau", "Boucan-Carré"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Saint-Michel-de-l'Atalaye", "Savanette", "Maïssade", "Mirebalais"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Cerca-la-Source", "Hinche", "Kenscoff", "Mirebalais"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Cerca-Carvajal", "Cerca-la-Source", "Arnaud", "Belladère"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Maïssade", "Thomonde", "Plaine-du-Nord", "Cerca-Carvajal"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Thomassique", "Chantal", "Mirebalais", "Thomonde"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Boucan-Carré", "Thomassique", "Lascahobas", "Bahon"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Boucan-Carré", "Maïssade", "Belladère", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Cerca-la-Source", "Lascahobas", "Baie-de-Henne", "Hinche"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Maïssade", "Cerca-Carvajal", "Capotille", "Thomassique"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Savanette", "Bahon", "Lascahobas", "Maïssade"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Maïssade", "Boucan-Carré", "Petit-Goâve", "Mirebalais"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Boucan-Carré", "Lascahobas", "Cerca-Carvajal", "Les Cayes"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Thomonde", "Mirebalais", "Lascahobas", "L'Acul-des-Pins"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Lascahobas", "Mirebalais", "Belladère", "Saint-Michel-de-l'Atalaye"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Cerca-la-Source", "Saint-Marc", "Lascahobas", "Cerca-Carvajal"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Port-de-Paix", "Cerca-Carvajal", "Cerca-la-Source", "Savanette"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Thomonde", "Hinche", "Thomazeau", "Savanette"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Hinche", "Thomassique", "Savanette", "L'Estère"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Thomassique", "Mirebalais", "Acul-du-Nord", "Boucan-Carré"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Thomassique", "Lascahobas", "Plaine-du-Nord", "Mirebalais"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Pointe-à-Raquette", "Cerca-la-Source", "Boucan-Carré", "Thomonde"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Belladère", "Thomassique", "Maïssade", "Miragoâne"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Port-au-Prince", "Cerca-Carvajal", "Maïssade", "Savanette"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Hinche", "La Vallée-de-Jacmel", "Maïssade", "Saut-d'Eau"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Lascahobas", "Cité Soleil", "Boucan-Carré", "Belladère"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Bahon", "Cerca-Carvajal", "Thomonde", "Savanette"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Centre ?",
    options: ["Bombardopolis", "Maïssade", "Hinche", "Savanette"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Paillant", "Petit-Trou-de-Nippes", "Capotille", "Fonds-des-Nègres"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Baradères", "Grand-Boucan", "Cayes-Jacmel", "Anse-à-Veau"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Grand-Boucan", "Anse-à-Veau", "Trou-Bonbon", "L'Asile"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Petit-Trou-de-Nippes", "Paillant", "Roseaux", "Arnaud"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Miragoâne", "Plaisance-du-Sud", "Anse-à-Veau", "Trou-Bonbon"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Thomassique", "Paillant", "Miragoâne", "Anse-à-Veau"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Miragoâne", "Grand-Boucan", "Fonds-des-Nègres", "Gonaïves"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Plaisance-du-Sud", "Arnaud", "Cap-Haïtien", "Paillant"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Carrefour", "Petit-Trou-de-Nippes", "Grand-Boucan", "Miragoâne"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Petit-Trou-de-Nippes", "Arnaud", "Marigot", "Anse-à-Veau"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Arnaud", "Capotille", "Anse-à-Veau", "L'Asile"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Arnaud", "Baradères", "Paillant", "Perches"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Ganthier", "Petit-Trou-de-Nippes", "L'Asile", "Paillant"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Fonds-des-Nègres", "Plaisance-du-Sud", "Arcahaie", "Anse-à-Veau"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Anse-à-Veau", "Pointe-à-Raquette", "Grand-Boucan", "Paillant"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Paillant", "Baradères", "Miragoâne", "Borgne"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Paillant", "L'Asile", "Arnaud", "Perches"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Cerca-Carvajal", "Paillant", "L'Asile", "Arnaud"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["L'Asile", "Anse-à-Veau", "Grand-Boucan", "Arcahaie"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Baradères", "La Tortue", "L'Asile", "Miragoâne"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Petit-Trou-de-Nippes", "Fonds-des-Nègres", "Cayes-Jacmel", "Arnaud"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Paillant", "Grand-Boucan", "Anse-à-Veau", "Cabaret"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Paillant", "Grand-Boucan", "Anse-à-Veau", "Chardonnières"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Arnaud", "L'Estère", "Plaisance-du-Sud", "Petit-Trou-de-Nippes"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["L'Asile", "Fonds-des-Nègres", "Thomonde", "Anse-à-Veau"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Plaisance-du-Sud", "Môle-Saint-Nicolas", "Petit-Trou-de-Nippes", "Miragoâne"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Anse-à-Veau", "Borgne", "Petit-Trou-de-Nippes", "Grand-Boucan"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Fonds-Verrettes", "Arnaud", "Grand-Boucan", "Petit-Trou-de-Nippes"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Bassin-Bleu", "Paillant", "Grand-Boucan", "Fonds-des-Nègres"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["L'Asile", "Cap-Haïtien", "Plaisance-du-Sud", "Fonds-des-Nègres"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Miragoâne", "Paillant", "Port-à-Piment", "Plaisance-du-Sud"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["L'Asile", "Grand-Boucan", "Paillant", "Côteaux"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Fonds-des-Nègres", "Verrettes", "Paillant", "Baradères"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Paillant", "Saint-Michel-de-l'Atalaye", "Anse-à-Veau", "Grand-Boucan"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Baradères", "Arnaud", "Cap-Haïtien", "Petit-Trou-de-Nippes"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Miragoâne", "Cabaret", "Arnaud", "Anse-à-Veau"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["L'Asile", "Moron", "Grand-Boucan", "Anse-à-Veau"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Petit-Trou-de-Nippes", "Camp-Coq", "Fonds-des-Nègres", "Plaisance-du-Sud"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Anse-à-Veau", "Savanette", "Plaisance-du-Sud", "Paillant"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Anse-à-Veau", "L'Asile", "Plaisance-du-Sud", "Petite-Rivière-de-l'Artibonite"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Anse-à-Veau", "Thomazeau", "Plaisance-du-Sud", "L'Asile"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Jean-Rabel", "Plaisance-du-Sud", "Grand-Boucan", "Miragoâne"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Plaisance-du-Sud", "Jacmel", "Paillant", "Fonds-des-Nègres"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Miragoâne", "Ganthier", "Anse-à-Veau", "L'Asile"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Milot", "Petit-Trou-de-Nippes", "Baradères", "Grand-Boucan"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Maniche", "Anse-à-Veau", "Miragoâne", "Grand-Boucan"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Kenscoff", "Grand-Boucan", "Miragoâne", "Paillant"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Paillant", "Arnaud", "Plaisance-du-Sud", "Desdunes"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Anse-à-Veau", "Cornillon", "Fonds-des-Nègres", "Arnaud"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Petit-Trou-de-Nippes", "Bombardopolis", "Miragoâne", "Anse-à-Veau"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Baradères", "Fonds-des-Nègres", "Plaisance-du-Sud", "Port-à-Piment"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Paillant", "Anse-à-Veau", "Gonaïves", "L'Asile"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Roseaux", "Miragoâne", "Arnaud", "Plaisance-du-Sud"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["L'Asile", "Grand-Boucan", "Sainte-Suzanne", "Baradères"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Baradères", "Miragoâne", "Fonds-des-Nègres", "Hinche"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Baradères", "Arnaud", "Tabarre", "Petit-Trou-de-Nippes"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Plaisance-du-Sud", "Arnaud", "Miragoâne", "Terrier-Rouge"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Grand-Boucan", "Grande-Saline", "Paillant", "Petit-Trou-de-Nippes"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Grand-Boucan", "Anse-à-Veau", "Paillant", "Roseaux"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Môle-Saint-Nicolas", "Grand-Boucan", "Anse-à-Veau", "Plaisance-du-Sud"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Baradères", "Miragoâne", "Petit-Trou-de-Nippes", "Marigot"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Arnaud", "Paillant", "Ennery", "Grand-Boucan"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Aquin", "Miragoâne", "Arnaud", "Anse-à-Veau"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Baradères", "Paillant", "L'Asile", "Aquin"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Plaisance-du-Sud", "Petite-Rivière-de-l'Artibonite", "Paillant", "Baradères"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Anse-à-Veau", "Petit-Trou-de-Nippes", "Limonade", "Fonds-des-Nègres"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Plaisance-du-Sud", "Paillant", "Cap-Haïtien", "Fonds-des-Nègres"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Plaisance-du-Sud", "Borgne", "Anse-à-Veau", "Miragoâne"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Marmelade", "L'Asile", "Fonds-des-Nègres", "Anse-à-Veau"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Paillant", "Thomazeau", "Miragoâne", "Anse-à-Veau"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Fonds-des-Nègres", "Maïssade", "Baradères", "Plaisance-du-Sud"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Miragoâne", "Petit-Trou-de-Nippes", "Fonds-Verrettes", "Anse-à-Veau"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Anse-à-Veau", "Baradères", "Petite-Rivière-de-l'Artibonite", "Petit-Trou-de-Nippes"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Fonds-des-Nègres", "Pilate", "Plaisance-du-Sud", "Miragoâne"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Petit-Trou-de-Nippes", "Paillant", "Miragoâne", "La Chapelle"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Paillant", "Grand-Boucan", "Fonds-des-Nègres", "Gonaïves"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Saut-d'Eau", "Fonds-des-Nègres", "Anse-à-Veau", "Grand-Boucan"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Arnaud", "Dessalines", "Miragoâne", "L'Asile"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Plaisance-du-Sud", "L'Asile", "Arnaud", "Pilate"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Trou-du-Nord", "Anse-à-Veau", "L'Asile", "Grand-Boucan"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Plaisance-du-Sud", "Miragoâne", "Bassin-Bleu", "Arnaud"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Grand-Boucan", "Fonds-des-Nègres", "Môle-Saint-Nicolas", "Arnaud"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Carice", "L'Asile", "Baradères", "Fonds-des-Nègres"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Baradères", "Petit-Trou-de-Nippes", "Caracol", "Arnaud"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Miragoâne", "Fonds-des-Nègres", "Paillant", "Pointe-à-Raquette"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["L'Asile", "Pestel", "Miragoâne", "Anse-à-Veau"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Arnaud", "Anse-à-Veau", "Paillant", "Grand-Bassin"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["L'Asile", "Anse-à-Pitre", "Miragoâne", "Grand-Boucan"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["L'Asile", "Jacmel", "Arnaud", "Petit-Trou-de-Nippes"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Arnaud", "Carice", "Petit-Trou-de-Nippes", "Fonds-des-Nègres"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Plaisance-du-Sud", "Paillant", "Grand-Boucan", "La Vallée-de-Jacmel"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Baradères", "Plaisance-du-Sud", "Grand-Boucan", "Anse-à-Pitre"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["L'Asile", "Plaisance-du-Sud", "Grand-Boucan", "Trou-Bonbon"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["La Tortue", "Petit-Trou-de-Nippes", "Plaisance-du-Sud", "Baradères"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Grand-Boucan", "Arnaud", "Baradères", "Arniquet"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["L'Asile", "Plaine-du-Nord", "Arnaud", "Anse-à-Veau"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Anse-à-Veau", "Arnaud", "Fonds-des-Nègres", "Léogâne"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Miragoâne", "Fonds-des-Nègres", "Baradères", "Thomassique"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Roche-à-Bateau", "Paillant", "Grand-Boucan", "Fonds-des-Nègres"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département des Nippes ?",
    options: ["Anse-à-Veau", "Grand-Boucan", "Liancourt", "Miragoâne"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["La Tortue", "Port-de-Paix", "Môle-Saint-Nicolas", "Côteaux"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Saint-Louis-du-Nord", "Bombardopolis", "La Tortue", "Grand-Goâve"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Môle-Saint-Nicolas", "Port-de-Paix", "Savanette", "La Tortue"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Port-de-Paix", "Baie-de-Henne", "Pointe-à-Raquette", "Chansolme"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Montrouis", "Baie-de-Henne", "Port-de-Paix", "La Tortue"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Jean-Rabel", "Gonaïves", "Bombardopolis", "Chansolme"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Petite-Rivière-de-l'Artibonite", "Port-de-Paix", "Baie-de-Henne", "Bombardopolis"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Jean-Rabel", "La Tortue", "Gonaïves", "Chansolme"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Chansolme", "La Tortue", "Port-de-Paix", "Pilate"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Saint-Louis-du-Sud", "Port-de-Paix", "Bombardopolis", "La Tortue"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Baie-de-Henne", "Capotille", "Bombardopolis", "La Tortue"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Bombardopolis", "Môle-Saint-Nicolas", "La Tortue", "Saint-Michel-de-l'Atalaye"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Dessalines", "Baie-de-Henne", "Môle-Saint-Nicolas", "Jean-Rabel"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Gressier", "Saint-Louis-du-Nord", "Port-de-Paix", "Jean-Rabel"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Arcahaie", "Môle-Saint-Nicolas", "La Tortue", "Port-de-Paix"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Môle-Saint-Nicolas", "Saint-Louis-du-Nord", "Mont-Organisé", "La Tortue"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Bombardopolis", "Maniche", "Bassin-Bleu", "Jean-Rabel"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Grand-Gosier", "Chansolme", "Port-de-Paix", "Bombardopolis"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["La Tortue", "Baie-de-Henne", "Jean-Rabel", "Côtes-de-Fer"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Baie-de-Henne", "Chansolme", "L'Estère", "Môle-Saint-Nicolas"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Baie-de-Henne", "Mont-Organisé", "Môle-Saint-Nicolas", "La Tortue"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Port-de-Paix", "Bombardopolis", "Jean-Rabel", "Cité Soleil"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Môle-Saint-Nicolas", "Baie-de-Henne", "Boucan-Carré", "Jean-Rabel"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Chansolme", "Saint-Louis-du-Nord", "Bassin-Bleu", "L'Acul-des-Pins"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Môle-Saint-Nicolas", "Bassin-Bleu", "Moron", "Port-de-Paix"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Moron", "La Tortue", "Port-de-Paix", "Môle-Saint-Nicolas"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Fonds-Verrettes", "Jean-Rabel", "Bombardopolis", "Chansolme"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Baie-de-Henne", "Arcahaie", "Jean-Rabel", "Port-de-Paix"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Saint-Louis-du-Nord", "Chansolme", "Sainte-Suzanne", "La Tortue"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Côteaux", "Saint-Louis-du-Nord", "Chansolme", "Bassin-Bleu"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Bombardopolis", "Môle-Saint-Nicolas", "Saint-Louis-du-Nord", "Plaisance-du-Sud"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Môle-Saint-Nicolas", "Bombardopolis", "Bassin-Bleu", "Capotille"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Môle-Saint-Nicolas", "Saint-Michel-de-l'Atalaye", "Chansolme", "Jean-Rabel"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Chansolme", "Saint-Louis-du-Nord", "Bombardopolis", "Saut-d'Eau"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Maniche", "La Tortue", "Jean-Rabel", "Port-de-Paix"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["La Tortue", "Borgne", "Chansolme", "Bombardopolis"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Port-Salut", "Bombardopolis", "Jean-Rabel", "Chansolme"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Bombardopolis", "Milot", "La Tortue", "Môle-Saint-Nicolas"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Port-de-Paix", "Môle-Saint-Nicolas", "Jean-Rabel", "Petite-Rivière-de-l'Artibonite"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Bombardopolis", "Grande-Saline", "Jean-Rabel", "Chansolme"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Môle-Saint-Nicolas", "Bombardopolis", "Saint-Louis-du-Nord", "Pestel"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Bombardopolis", "Bassin-Bleu", "Paillant", "La Tortue"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Jean-Rabel", "La Tortue", "Torbeck", "Môle-Saint-Nicolas"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Port-de-Paix", "Saint-Louis-du-Nord", "Delmas", "Baie-de-Henne"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Port-de-Paix", "Jean-Rabel", "Arcahaie", "Môle-Saint-Nicolas"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["La Chapelle", "Jean-Rabel", "Bassin-Bleu", "Môle-Saint-Nicolas"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Môle-Saint-Nicolas", "Borgne", "Port-de-Paix", "Jean-Rabel"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Baie-de-Henne", "Jean-Rabel", "Bassin-Bleu", "Marigot"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Jean-Rabel", "Port-de-Paix", "Liancourt", "La Tortue"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Bassin-Bleu", "Bombardopolis", "Petit-Goâve", "La Tortue"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Dondon", "Jean-Rabel", "Baie-de-Henne", "Môle-Saint-Nicolas"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Roche-à-Bateau", "Saint-Louis-du-Nord", "Port-de-Paix", "Bassin-Bleu"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Bassin-Bleu", "Port-de-Paix", "Chansolme", "Fort-Liberté"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Bassin-Bleu", "Bombardopolis", "Saint-Louis-du-Nord", "Milot"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Môle-Saint-Nicolas", "Bombardopolis", "Jean-Rabel", "Gonaïves"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Chansolme", "Ennery", "Saint-Louis-du-Nord", "Baie-de-Henne"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Bassin-Bleu", "Vallières", "Jean-Rabel", "Bombardopolis"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Chansolme", "Bombardopolis", "Port-de-Paix", "Bahon"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["La Tortue", "Bassin-Bleu", "Môle-Saint-Nicolas", "Caracol"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Ganthier", "Saint-Louis-du-Nord", "Jean-Rabel", "Baie-de-Henne"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Mombin-Crochu", "Bombardopolis", "Jean-Rabel", "Môle-Saint-Nicolas"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Jean-Rabel", "Chansolme", "Roche-à-Bateau", "La Tortue"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Jean-Rabel", "Bombardopolis", "Plaisance-du-Sud", "Baie-de-Henne"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Chansolme", "Anse-à-Pitre", "Saint-Louis-du-Nord", "Môle-Saint-Nicolas"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Bombardopolis", "Jean-Rabel", "Maïssade", "La Tortue"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Cayes-Jacmel", "Baie-de-Henne", "Chansolme", "La Tortue"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Chambellan", "Port-de-Paix", "Bassin-Bleu", "La Tortue"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Bassin-Bleu", "Chansolme", "Perches", "Jean-Rabel"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Môle-Saint-Nicolas", "Jean-Rabel", "Cerca-la-Source", "Bombardopolis"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Anse-à-Veau", "La Tortue", "Chansolme", "Saint-Louis-du-Nord"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Paillant", "Bassin-Bleu", "Bombardopolis", "Chansolme"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Chansolme", "Bassin-Bleu", "Port-à-Piment", "La Tortue"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Savanette", "Môle-Saint-Nicolas", "Chansolme", "Saint-Louis-du-Nord"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Port-de-Paix", "Pointe-à-Raquette", "Môle-Saint-Nicolas", "Baie-de-Henne"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Bassin-Bleu", "La Tortue", "Môle-Saint-Nicolas", "Marigot"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Baie-de-Henne", "Pilate", "Jean-Rabel", "Môle-Saint-Nicolas"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Saint-Jean-du-Sud", "Môle-Saint-Nicolas", "Port-de-Paix", "Bombardopolis"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Baie-de-Henne", "Moron", "Saint-Louis-du-Nord", "Môle-Saint-Nicolas"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Baie-de-Henne", "Chantal", "Jean-Rabel", "Port-de-Paix"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Belle-Anse", "Jean-Rabel", "Môle-Saint-Nicolas", "Bassin-Bleu"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Bassin-Bleu", "Saint-Louis-du-Nord", "Port-de-Paix", "Grand-Gosier"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Bassin-Bleu", "Jean-Rabel", "La Vallée-de-Jacmel", "La Tortue"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Bassin-Bleu", "La Tortue", "Jean-Rabel", "Saint-Jean-du-Sud"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Bombardopolis", "Port-de-Paix", "Anse-à-Pitre", "Chansolme"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Chansolme", "Baie-de-Henne", "Môle-Saint-Nicolas", "Liancourt"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Jean-Rabel", "Port-de-Paix", "Ennery", "Môle-Saint-Nicolas"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Trou-du-Nord", "Chansolme", "Saint-Louis-du-Nord", "Môle-Saint-Nicolas"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["La Tortue", "Chansolme", "Lascahobas", "Jean-Rabel"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Bassin-Bleu", "Baie-de-Henne", "Chansolme", "Verrettes"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Baie-de-Henne", "Saint-Louis-du-Nord", "Les Irois", "Jean-Rabel"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Saint-Louis-du-Nord", "Hinche", "Bombardopolis", "Môle-Saint-Nicolas"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Saint-Louis-du-Nord", "Gros-Morne", "Jean-Rabel", "Baie-de-Henne"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Port-de-Paix", "Plaine-du-Nord", "Bassin-Bleu", "Jean-Rabel"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Chansolme", "Carrefour", "Môle-Saint-Nicolas", "Baie-de-Henne"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Saint-Louis-du-Nord", "Grand-Bassin", "Baie-de-Henne", "La Tortue"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Saint-Louis-du-Nord", "Chansolme", "Jean-Rabel", "Sainte-Suzanne"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Baradères", "Bassin-Bleu", "Baie-de-Henne", "Môle-Saint-Nicolas"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Saint-Louis-du-Nord", "Maniche", "Chansolme", "Baie-de-Henne"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Jean-Rabel", "Baie-de-Henne", "Perches", "La Tortue"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Ouest ?",
    options: ["Anse-à-Pitre", "Saint-Louis-du-Nord", "Bassin-Bleu", "Baie-de-Henne"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Carice", "Port-Salut", "Sainte-Suzanne", "Mombin-Crochu"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Ouanaminthe", "Capotille", "Sainte-Suzanne", "Baie-de-Henne"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Carice", "L'Estère", "Perches", "Trou-du-Nord"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Capotille", "Perches", "Ouanaminthe", "Thomassique"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Grand-Bassin", "Mont-Organisé", "Vallières", "Savanette"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Grand-Bassin", "Perches", "Ouanaminthe", "Desdunes"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Capotille", "Sainte-Suzanne", "Mont-Organisé", "Petit-Trou-de-Nippes"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Trou-du-Nord", "Maniche", "Mombin-Crochu", "Vallières"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Capotille", "Paillant", "Mombin-Crochu", "Terrier-Rouge"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Mombin-Crochu", "Caracol", "Fort-Liberté", "Borgne"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Perches", "Ouanaminthe", "Marmelade", "Sainte-Suzanne"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Vallières", "Caracol", "Fort-Liberté", "Saint-Louis-du-Nord"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Capotille", "Jacmel", "Trou-du-Nord", "Vallières"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Terrier-Rouge", "Les Irois", "Trou-du-Nord", "Vallières"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Mont-Organisé", "Belladère", "Sainte-Suzanne", "Fort-Liberté"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Môle-Saint-Nicolas", "Carice", "Perches", "Vallières"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Chambellan", "Carice", "Trou-du-Nord", "Mont-Organisé"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Capotille", "Boucan-Carré", "Sainte-Suzanne", "Ouanaminthe"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Caracol", "Sainte-Suzanne", "Camp-Perrin", "Capotille"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Terrier-Rouge", "Perches", "La Tortue", "Sainte-Suzanne"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Fort-Liberté", "Carice", "Mont-Organisé", "Desdunes"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Sainte-Suzanne", "Bahon", "Perches", "Trou-du-Nord"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Mont-Organisé", "Sainte-Suzanne", "Trou-du-Nord", "Pétion-Ville"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Sainte-Suzanne", "Tabarre", "Vallières", "Trou-du-Nord"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Bombardopolis", "Mont-Organisé", "Sainte-Suzanne", "Perches"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["La Tortue", "Fort-Liberté", "Grand-Bassin", "Terrier-Rouge"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Gressier", "Sainte-Suzanne", "Perches", "Ouanaminthe"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Terrier-Rouge", "Sainte-Suzanne", "Fort-Liberté", "Roche-à-Bateau"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Caracol", "Trou-du-Nord", "Ouanaminthe", "Gonaïves"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Carice", "Ouanaminthe", "Terrier-Rouge", "Anse-à-Pitre"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Sainte-Suzanne", "Carice", "Capotille", "Cornillon"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Fort-Liberté", "Trou-du-Nord", "Boucan-Carré", "Mont-Organisé"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Caracol", "Sainte-Suzanne", "Carice", "Borgne"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Sainte-Suzanne", "Capotille", "Cité Soleil", "Fort-Liberté"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Ouanaminthe", "Perches", "Terrier-Rouge", "Jacmel"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Terrier-Rouge", "Mombin-Crochu", "Miragoâne", "Ouanaminthe"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Capotille", "Mont-Organisé", "Carice", "Limonade"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Vallières", "Mombin-Crochu", "Chansolme", "Grand-Bassin"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Grand-Bassin", "Fort-Liberté", "Desdunes", "Perches"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Sainte-Suzanne", "Mombin-Crochu", "Bassin-Bleu", "Fort-Liberté"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Caracol", "Marmelade", "Trou-du-Nord", "Ouanaminthe"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Miragoâne", "Carice", "Grand-Bassin", "Terrier-Rouge"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Tabarre", "Trou-du-Nord", "Mombin-Crochu", "Caracol"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["L'Acul-des-Pins", "Ouanaminthe", "Mont-Organisé", "Trou-du-Nord"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Fort-Liberté", "Vallières", "Capotille", "Plaisance-du-Sud"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Grand-Bassin", "Carice", "Pilate", "Mont-Organisé"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Mont-Organisé", "Trou-du-Nord", "Arcahaie", "Mombin-Crochu"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Grande-Saline", "Caracol", "Ouanaminthe", "Vallières"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Vallières", "Jean-Rabel", "Terrier-Rouge", "Grand-Bassin"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Mombin-Crochu", "Terre-Neuve", "Fort-Liberté", "Vallières"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Boucan-Carré", "Trou-du-Nord", "Carice", "Sainte-Suzanne"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Côteaux", "Trou-du-Nord", "Ouanaminthe", "Mont-Organisé"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Petit-Goâve", "Terrier-Rouge", "Mont-Organisé", "Trou-du-Nord"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Capotille", "Carice", "Mombin-Crochu", "Belle-Anse"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Perches", "Croix-des-Bouquets", "Fort-Liberté", "Vallières"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Fort-Liberté", "Anse-à-Veau", "Trou-du-Nord", "Ouanaminthe"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Trou-du-Nord", "Capotille", "Dame-Marie", "Grand-Bassin"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Fort-Liberté", "Capotille", "Perches", "Pestel"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Môle-Saint-Nicolas", "Mombin-Crochu", "Mont-Organisé", "Vallières"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Perches", "L'Acul-des-Pins", "Fort-Liberté", "Mont-Organisé"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Chansolme", "Sainte-Suzanne", "Capotille", "Caracol"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Mombin-Crochu", "Arcahaie", "Terrier-Rouge", "Mont-Organisé"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Mont-Organisé", "Terrier-Rouge", "Port-au-Prince", "Capotille"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Petite-Rivière-de-l'Artibonite", "Terrier-Rouge", "Sainte-Suzanne", "Ouanaminthe"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Capotille", "Sainte-Suzanne", "Carice", "Cayes-Jacmel"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Bainet", "Capotille", "Ouanaminthe", "Mont-Organisé"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Sainte-Suzanne", "Fort-Liberté", "Boucan-Carré", "Capotille"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Les Cayes", "Perches", "Sainte-Suzanne", "Carice"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Belladère", "Ouanaminthe", "Fort-Liberté", "Sainte-Suzanne"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Bombardopolis", "Trou-du-Nord", "Capotille", "Carice"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Vallières", "La Vallée-de-Jacmel", "Mont-Organisé", "Carice"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Fort-Liberté", "Vallières", "Grand-Bassin", "Gros-Morne"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Terre-Neuve", "Caracol", "Perches", "Carice"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Milot", "Capotille", "Mont-Organisé", "Trou-du-Nord"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Trou-du-Nord", "Fort-Liberté", "Vallières", "Bombardopolis"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Terrier-Rouge", "Saut-d'Eau", "Sainte-Suzanne", "Trou-du-Nord"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Mont-Organisé", "Fonds-des-Nègres", "Fort-Liberté", "Perches"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Fort-Liberté", "Perches", "L'Asile", "Grand-Bassin"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Trou-du-Nord", "Sainte-Suzanne", "Port-de-Paix", "Grand-Bassin"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Vallières", "Moron", "Trou-du-Nord", "Sainte-Suzanne"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Trou-du-Nord", "Bassin-Bleu", "Carice", "Terrier-Rouge"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Terrier-Rouge", "Fort-Liberté", "Ouanaminthe", "Cerca-Carvajal"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Fort-Liberté", "Sainte-Suzanne", "Ouanaminthe", "Torbeck"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Perches", "Lascahobas", "Sainte-Suzanne", "Grand-Bassin"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Les Cayes", "Mont-Organisé", "Caracol", "Carice"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Mombin-Crochu", "Capotille", "Chardonnières", "Trou-du-Nord"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Sainte-Suzanne", "Port-à-Piment", "Grand-Bassin", "Capotille"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Trou-du-Nord", "Terrier-Rouge", "Capotille", "Marigot"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Trou-du-Nord", "Jérémie", "Grand-Bassin", "Capotille"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Ouanaminthe", "Plaine-du-Nord", "Terrier-Rouge", "Caracol"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Grand-Bassin", "Mombin-Crochu", "Sainte-Suzanne", "Cayes-Jacmel"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Perches", "Croix-des-Bouquets", "Trou-du-Nord", "Caracol"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Caracol", "Vallières", "Môle-Saint-Nicolas", "Grand-Bassin"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Sainte-Suzanne", "Mombin-Crochu", "Ouanaminthe", "Montrouis"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Mombin-Crochu", "Carice", "Limonade", "Ouanaminthe"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Sainte-Suzanne", "Caracol", "Capotille", "Bahon"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Caracol", "Trou-du-Nord", "Mombin-Crochu", "Desdunes"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Grand-Bassin", "Saint-Louis-du-Sud", "Perches", "Fort-Liberté"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Vallières", "Anse-à-Pitre", "Capotille", "Ouanaminthe"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Nord-Est ?",
    options: ["Vallières", "Thomazeau", "Fort-Liberté", "Trou-du-Nord"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Belle-Anse", "Cayes-Jacmel", "Marigot", "Thomazeau"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Bainet", "Marigot", "Thiotte", "Gros-Morne"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Belle-Anse", "Cayes-Jacmel", "Jacmel", "Roseaux"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Bainet", "Sainte-Suzanne", "Belle-Anse", "Grand-Gosier"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Jacmel", "Anse-à-Pitre", "Grand-Gosier", "Delmas"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Cerca-Carvajal", "La Vallée-de-Jacmel", "Jacmel", "Cayes-Jacmel"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Cayes-Jacmel", "Anse-à-Pitre", "Carrefour", "Belle-Anse"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Fonds-Verrettes", "La Vallée-de-Jacmel", "Cayes-Jacmel", "Côtes-de-Fer"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Ennery", "Thiotte", "La Vallée-de-Jacmel", "Bainet"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Anse-à-Pitre", "Terrier-Rouge", "Côtes-de-Fer", "Bainet"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Bainet", "Côtes-de-Fer", "La Vallée-de-Jacmel", "Cap-Haïtien"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Jacmel", "Port-à-Piment", "Anse-à-Pitre", "Belle-Anse"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Cayes-Jacmel", "Anse-à-Pitre", "Thiotte", "Miragoâne"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Belle-Anse", "Bainet", "Grand-Gosier", "Roche-à-Bateau"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Marigot", "La Vallée-de-Jacmel", "Jacmel", "Chansolme"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Beaumont", "Jacmel", "Marigot", "La Vallée-de-Jacmel"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Anse-à-Pitre", "Chardonnières", "Jacmel", "Thiotte"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Tabarre", "Belle-Anse", "Bainet", "Anse-à-Pitre"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Gonaïves", "Grand-Gosier", "Anse-à-Pitre", "Thiotte"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Gonaïves", "Marigot", "Grand-Gosier", "La Vallée-de-Jacmel"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Maniche", "Jacmel", "Grand-Gosier", "Côtes-de-Fer"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Cayes-Jacmel", "Delmas", "Grand-Gosier", "Bainet"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Belle-Anse", "Thiotte", "Jacmel", "Môle-Saint-Nicolas"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Côtes-de-Fer", "Anse-à-Pitre", "Belle-Anse", "Acul-du-Nord"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Grand-Gosier", "Jean-Rabel", "Anse-à-Pitre", "Marigot"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Anse-à-Pitre", "Pestel", "Belle-Anse", "Jacmel"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Bainet", "Grand-Gosier", "Mombin-Crochu", "Anse-à-Pitre"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Vallières", "Belle-Anse", "Anse-à-Pitre", "Grand-Gosier"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Bainet", "Côtes-de-Fer", "Thiotte", "Milot"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Côtes-de-Fer", "Grand-Gosier", "Bainet", "Beaumont"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Marigot", "La Vallée-de-Jacmel", "Trou-du-Nord", "Bainet"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Belladère", "Belle-Anse", "Côtes-de-Fer", "Cayes-Jacmel"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Plaisance", "Grand-Gosier", "Cayes-Jacmel", "Anse-à-Pitre"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Capotille", "Jacmel", "Anse-à-Pitre", "Grand-Gosier"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["La Vallée-de-Jacmel", "Côtes-de-Fer", "Liancourt", "Thiotte"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["La Vallée-de-Jacmel", "Fort-Liberté", "Grand-Gosier", "Belle-Anse"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["L'Acul-des-Pins", "Thiotte", "Marigot", "Cayes-Jacmel"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Marigot", "Jacmel", "Maïssade", "Belle-Anse"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Paillant", "Marigot", "Grand-Gosier", "Bainet"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Belle-Anse", "Anse-à-Pitre", "Liancourt", "Grand-Gosier"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Carrefour", "Anse-à-Pitre", "Grand-Gosier", "Belle-Anse"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Grand-Gosier", "Cayes-Jacmel", "Roche-à-Bateau", "Belle-Anse"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Marigot", "Croix-des-Bouquets", "Côtes-de-Fer", "Cayes-Jacmel"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Thiotte", "Jacmel", "Boucan-Carré", "Côtes-de-Fer"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Jacmel", "Marigot", "Mont-Organisé", "Belle-Anse"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Cabaret", "Thiotte", "Grand-Gosier", "Belle-Anse"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Dame-Marie", "Belle-Anse", "Côtes-de-Fer", "La Vallée-de-Jacmel"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Anse-à-Pitre", "La Vallée-de-Jacmel", "Belle-Anse", "Arcahaie"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Belle-Anse", "Anse-à-Pitre", "Capotille", "Côtes-de-Fer"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Anse-à-Pitre", "Côtes-de-Fer", "Marigot", "Plaine-du-Nord"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Bombardopolis", "Grand-Gosier", "Bainet", "Jacmel"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Côtes-de-Fer", "Jérémie", "Grand-Gosier", "Belle-Anse"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Grand-Gosier", "Paillant", "La Vallée-de-Jacmel", "Thiotte"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Cayes-Jacmel", "Tabarre", "Anse-à-Pitre", "Grand-Gosier"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Grand-Gosier", "Marigot", "Anse-à-Pitre", "Ennery"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Cayes-Jacmel", "Anse-à-Pitre", "Bainet", "Grande-Saline"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Grand-Gosier", "La Vallée-de-Jacmel", "Thiotte", "Port-Margot"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Thiotte", "La Vallée-de-Jacmel", "Marigot", "Camp-Coq"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Bainet", "Aquin", "Jacmel", "Thiotte"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Anse-à-Pitre", "Belle-Anse", "Grand-Gosier", "L'Estère"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Marigot", "Anse-à-Pitre", "Cerca-la-Source", "La Vallée-de-Jacmel"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Anse-à-Pitre", "Môle-Saint-Nicolas", "La Vallée-de-Jacmel", "Bainet"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Limonade", "Belle-Anse", "Marigot", "Jacmel"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Bainet", "Grand-Gosier", "Marigot", "Thomonde"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Anse-à-Pitre", "Cayes-Jacmel", "Jacmel", "Caracol"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Roseaux", "Bainet", "Anse-à-Pitre", "La Vallée-de-Jacmel"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Anse-à-Pitre", "Cayes-Jacmel", "Côtes-de-Fer", "Jérémie"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Thiotte", "Grand-Gosier", "Cayes-Jacmel", "Fonds-Verrettes"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["La Vallée-de-Jacmel", "Marigot", "Jérémie", "Grand-Gosier"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Port-Margot", "Cayes-Jacmel", "Belle-Anse", "Grand-Gosier"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Côtes-de-Fer", "Ganthier", "Bainet", "Belle-Anse"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Desdunes", "Cayes-Jacmel", "Thiotte", "Anse-à-Pitre"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Jérémie", "Bainet", "Côtes-de-Fer", "Thiotte"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Cayes-Jacmel", "Kenscoff", "Côtes-de-Fer", "Marigot"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Marigot", "Grand-Gosier", "Côtes-de-Fer", "Terrier-Rouge"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Côtes-de-Fer", "Bainet", "La Tortue", "La Vallée-de-Jacmel"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Jacmel", "Plaine-du-Nord", "Anse-à-Pitre", "La Vallée-de-Jacmel"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Belle-Anse", "Dessalines", "Anse-à-Pitre", "Marigot"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Jacmel", "Hinche", "Thiotte", "Anse-à-Pitre"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Thiotte", "Trou-du-Nord", "Grand-Gosier", "Anse-à-Pitre"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Côtes-de-Fer", "Chansolme", "Bainet", "Grand-Gosier"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Jérémie", "La Vallée-de-Jacmel", "Belle-Anse", "Cayes-Jacmel"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Jacmel", "La Vallée-de-Jacmel", "Plaisance-du-Sud", "Cayes-Jacmel"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Belle-Anse", "Borgne", "Grand-Gosier", "Marigot"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Jacmel", "Cabaret", "Cayes-Jacmel", "Grand-Gosier"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Bainet", "Abricots", "Anse-à-Pitre", "Grand-Gosier"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Tabarre", "Côtes-de-Fer", "Jacmel", "Cayes-Jacmel"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Thiotte", "La Vallée-de-Jacmel", "Cap-Haïtien", "Côtes-de-Fer"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Thiotte", "Jacmel", "Grand-Gosier", "Grand-Bassin"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Grand-Gosier", "Dessalines", "Anse-à-Pitre", "Cayes-Jacmel"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Ennery", "Marigot", "Bainet", "Cayes-Jacmel"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Bainet", "Jacmel", "Anse-à-Pitre", "Miragoâne"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Grand-Gosier", "Thiotte", "La Chapelle", "Bainet"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Jacmel", "Cayes-Jacmel", "Anse-à-Pitre", "Gressier"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Cayes-Jacmel", "Anse-à-Pitre", "Léogâne", "La Vallée-de-Jacmel"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Carice", "Bainet", "Anse-à-Pitre", "Cayes-Jacmel"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Port-Salut", "Anse-à-Pitre", "Grand-Gosier", "Jacmel"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Bainet", "Jean-Rabel", "Côtes-de-Fer", "Jacmel"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Mombin-Crochu", "La Vallée-de-Jacmel", "Côtes-de-Fer", "Grand-Gosier"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département du Sud-Est ?",
    options: ["Thiotte", "Jacmel", "La Vallée-de-Jacmel", "Dondon"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Corail", "Chansolme", "Abricots", "Beaumont"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Beaumont", "Tabarre", "Dame-Marie", "Les Irois"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Trou-Bonbon", "Anse-d'Hainault", "Pestel", "Grande-Saline"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Les Irois", "Moron", "Anse-d'Hainault", "Terrier-Rouge"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Beaumont", "Arcahaie", "Abricots", "Roseaux"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Moron", "Trou-Bonbon", "Dame-Marie", "Thomonde"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Trou-Bonbon", "Les Irois", "Plaisance", "Beaumont"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Beaumont", "Jérémie", "Arcahaie", "Moron"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Pestel", "Chambellan", "Sainte-Suzanne", "Beaumont"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Chambellan", "Abricots", "Grand-Bassin", "Corail"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Jérémie", "Desdunes", "Beaumont", "Moron"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Grande-Saline", "Corail", "Roseaux", "Beaumont"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Dame-Marie", "Terrier-Rouge", "Roseaux", "Jérémie"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Trou-du-Nord", "Jérémie", "Pestel", "Les Irois"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Cornillon", "Roseaux", "Jérémie", "Dame-Marie"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Pestel", "Grand-Bassin", "Abricots", "Beaumont"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Jérémie", "Thiotte", "Chambellan", "Moron"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Côteaux", "Beaumont", "Anse-d'Hainault", "Chambellan"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Ouanaminthe", "Pestel", "Chambellan", "Beaumont"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Jérémie", "Corail", "Pestel", "Grand-Goâve"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Trou-du-Nord", "Chambellan", "Pestel", "Les Irois"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Les Irois", "Môle-Saint-Nicolas", "Beaumont", "Abricots"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Pestel", "Moron", "Jérémie", "Mont-Organisé"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["La Vallée-de-Jacmel", "Corail", "Dame-Marie", "Moron"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Corail", "Chambellan", "Thiotte", "Jérémie"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Roseaux", "Camp-Perrin", "Anse-d'Hainault", "Chambellan"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Pestel", "Delmas", "Roseaux", "Beaumont"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Port-de-Paix", "Beaumont", "Pestel", "Trou-Bonbon"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Cayes-Jacmel", "Moron", "Pestel", "Chambellan"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Beaumont", "Anse-d'Hainault", "Caracol", "Chambellan"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Grand-Gosier", "Abricots", "Jérémie", "Trou-Bonbon"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Mont-Organisé", "Anse-d'Hainault", "Pestel", "Chambellan"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Cayes-Jacmel", "Roseaux", "Pestel", "Anse-d'Hainault"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Trou-Bonbon", "Jérémie", "Plaine-du-Nord", "Corail"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Chambellan", "Corail", "Les Irois", "Arnaud"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Baradères", "Roseaux", "Chambellan", "Abricots"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Beaumont", "Corail", "Anse-d'Hainault", "Pétion-Ville"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Anse-d'Hainault", "Saint-Jean-du-Sud", "Trou-Bonbon", "Corail"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Anse-d'Hainault", "Dame-Marie", "L'Acul-des-Pins", "Jérémie"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Roseaux", "Dame-Marie", "Thomassique", "Corail"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Vallières", "Trou-Bonbon", "Pestel", "Moron"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Chambellan", "Desdunes", "Beaumont", "Moron"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Abricots", "Dame-Marie", "Roseaux", "L'Acul-des-Pins"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Chambellan", "Cornillon", "Les Irois", "Abricots"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Moron", "Savanette", "Chambellan", "Abricots"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Dame-Marie", "Croix-des-Bouquets", "Jérémie", "Anse-d'Hainault"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Port-au-Prince", "Dame-Marie", "Abricots", "Anse-d'Hainault"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Les Irois", "Maïssade", "Beaumont", "Moron"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Abricots", "Kenscoff", "Dame-Marie", "Les Irois"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Port-Salut", "Beaumont", "Trou-Bonbon", "Pestel"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Grande-Saline", "Dame-Marie", "Anse-d'Hainault", "Corail"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Saut-d'Eau", "Jérémie", "Corail", "Roseaux"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Dame-Marie", "Trou-du-Nord", "Roseaux", "Chambellan"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Pestel", "Anse-d'Hainault", "Abricots", "Petite-Rivière-de-l'Artibonite"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Moron", "Roseaux", "Les Irois", "Mombin-Crochu"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Saint-Louis-du-Sud", "Anse-d'Hainault", "Pestel", "Abricots"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["La Tortue", "Dame-Marie", "Anse-d'Hainault", "Beaumont"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Jean-Rabel", "Chambellan", "Abricots", "Dame-Marie"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Côtes-de-Fer", "Chambellan", "Jérémie", "Les Irois"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Roseaux", "Jérémie", "Moron", "Kenscoff"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Anse-d'Hainault", "Chambellan", "Côtes-de-Fer", "Dame-Marie"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Pestel", "Terre-Neuve", "Dame-Marie", "Jérémie"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Pestel", "Bombardopolis", "Beaumont", "Trou-Bonbon"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Les Irois", "Trou-Bonbon", "Lascahobas", "Anse-d'Hainault"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Jérémie", "Jacmel", "Anse-d'Hainault", "Trou-Bonbon"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Dame-Marie", "Corail", "Marmelade", "Pestel"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Corail", "Trou-Bonbon", "Saint-Louis-du-Nord", "Les Irois"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Jérémie", "Terrier-Rouge", "Trou-Bonbon", "Abricots"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Moron", "Beaumont", "Camp-Perrin", "Roseaux"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Anse-à-Veau", "Moron", "Beaumont", "Les Irois"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Beaumont", "Arnaud", "Pestel", "Jérémie"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Beaumont", "Chambellan", "Grand-Boucan", "Pestel"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Corail", "Trou-Bonbon", "Sainte-Suzanne", "Beaumont"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Roseaux", "Anse-d'Hainault", "Moron", "Arcahaie"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Les Irois", "Anse-d'Hainault", "Trou-Bonbon", "Fonds-Verrettes"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Dame-Marie", "Beaumont", "Anse-d'Hainault", "Les Cayes"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Corail", "Croix-des-Bouquets", "Jérémie", "Trou-Bonbon"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Moron", "Port-de-Paix", "Trou-Bonbon", "Jérémie"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Beaumont", "Abricots", "Anse-d'Hainault", "Grande-Saline"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Trou-Bonbon", "Chambellan", "Jérémie", "Gressier"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Anse-d'Hainault", "Fonds-Verrettes", "Abricots", "Moron"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Dame-Marie", "Pétion-Ville", "Corail", "Moron"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Pestel", "Moron", "Chambellan", "Thomazeau"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Jérémie", "Anse-d'Hainault", "Delmas", "Trou-Bonbon"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Abricots", "Marmelade", "Beaumont", "Moron"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Beaumont", "Les Irois", "Dame-Marie", "Baie-de-Henne"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Jérémie", "Beaumont", "Chambellan", "Ganthier"],
    correct: 3
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Corail", "Miragoâne", "Les Irois", "Roseaux"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Belladère", "Jérémie", "Moron", "Pestel"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Abricots", "Port-de-Paix", "Les Irois", "Corail"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Jérémie", "Jean-Rabel", "Corail", "Pestel"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Grand-Boucan", "Chambellan", "Dame-Marie", "Jérémie"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Jérémie", "Petite-Rivière-de-l'Artibonite", "Abricots", "Anse-d'Hainault"],
    correct: 1
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Trou-Bonbon", "Dame-Marie", "Milot", "Les Irois"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Savanette", "Trou-Bonbon", "Dame-Marie", "Jérémie"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Carice", "Les Irois", "Jérémie", "Abricots"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Lascahobas", "Moron", "Jérémie", "Trou-Bonbon"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Abricots", "Dame-Marie", "Saint-Marc", "Trou-Bonbon"],
    correct: 2
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Chardonnières", "Abricots", "Moron", "Corail"],
    correct: 0
  },
  {
    q: "Laquelle de ces villes ne se trouve PAS dans le département de la Grand'Anse ?",
    options: ["Chambellan", "Anse-à-Pitre", "Roseaux", "Corail"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Cornillon ?",
    options: ["Grand-Bassin", "Savanette", "Croix-des-Bouquets", "Roseaux"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Tabarre ?",
    options: ["Cap-Haïtien", "Abricots", "Cornillon", "Borgne"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Léogâne ?",
    options: ["Anse-à-Veau", "Cornillon", "Chardonnières", "Pilate"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Carrefour ?",
    options: ["Aquin", "Pilate", "Thiotte", "Fonds-Verrettes"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Pointe-à-Raquette ?",
    options: ["L'Asile", "Bombardopolis", "Thomassique", "Cornillon"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Cornillon ?",
    options: ["Bassin-Bleu", "Fonds-Verrettes", "Dondon", "L'Acul-des-Pins"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Petit-Goâve ?",
    options: ["Boucan-Carré", "Plaine-du-Nord", "Kenscoff", "Mirebalais"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Fonds-Verrettes ?",
    options: ["Cayes-Jacmel", "Tabarre", "Terrier-Rouge", "L'Estère"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Ganthier ?",
    options: ["Grand-Goâve", "Jacmel", "Camp-Coq", "Aquin"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Arcahaie ?",
    options: ["Plaine-du-Nord", "Limonade", "Port-Salut", "Pétion-Ville"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Petit-Goâve ?",
    options: ["Grand-Gosier", "Gressier", "Thomonde", "Saut-d'Eau"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Pointe-à-Raquette ?",
    options: ["Anse-à-Pitre", "Chansolme", "Desdunes", "Cité Soleil"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Fonds-Verrettes ?",
    options: ["Chantal", "Port-au-Prince", "Fonds-des-Nègres", "Ouanaminthe"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Ganthier ?",
    options: ["Cité Soleil", "Maniche", "Saint-Marc", "Saint-Louis-du-Sud"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Port-au-Prince ?",
    options: ["Montrouis", "Maïssade", "Petit-Goâve", "Ennery"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Pétion-Ville ?",
    options: ["Petit-Goâve", "Bainet", "L'Acul-des-Pins", "Bombardopolis"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Cornillon ?",
    options: ["Fonds-des-Nègres", "Pointe-à-Raquette", "L'Estère", "Thomonde"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Pointe-à-Raquette ?",
    options: ["Lascahobas", "Port-au-Prince", "Roseaux", "Jérémie"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Pointe-à-Raquette ?",
    options: ["Roseaux", "Petit-Goâve", "La Vallée-de-Jacmel", "Port-de-Paix"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Petit-Goâve ?",
    options: ["Thomazeau", "Saint-Michel-de-l'Atalaye", "Jacmel", "Bassin-Bleu"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Pointe-à-Raquette ?",
    options: ["Arnaud", "Les Irois", "Camp-Coq", "Croix-des-Bouquets"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Arcahaie ?",
    options: ["Petite-Rivière-de-l'Artibonite", "Gros-Morne", "Petit-Goâve", "Beaumont"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Kenscoff ?",
    options: ["Saint-Marc", "Lascahobas", "Pointe-à-Raquette", "Corail"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Croix-des-Bouquets ?",
    options: ["Pointe-à-Raquette", "Marmelade", "Les Irois", "La Chapelle"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Gressier ?",
    options: ["Plaisance-du-Sud", "Grande-Saline", "Cabaret", "Dessalines"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Thomazeau ?",
    options: ["Plaine-du-Nord", "Borgne", "La Chapelle", "Petit-Goâve"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Kenscoff ?",
    options: ["Baradères", "L'Estère", "Léogâne", "Thomassique"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Croix-des-Bouquets ?",
    options: ["La Vallée-de-Jacmel", "Gressier", "Hinche", "L'Asile"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Cornillon ?",
    options: ["Belle-Anse", "Saint-Marc", "Acul-du-Nord", "Pointe-à-Raquette"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Pointe-à-Raquette ?",
    options: ["Côteaux", "Petite-Rivière-de-l'Artibonite", "Gressier", "Maïssade"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Pétion-Ville ?",
    options: ["Vallières", "Thomazeau", "Anse-à-Pitre", "Montrouis"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Kenscoff ?",
    options: ["Terre-Neuve", "L'Acul-des-Pins", "Cornillon", "Capotille"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Arcahaie ?",
    options: ["Corail", "Port-au-Prince", "Jean-Rabel", "Borgne"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Port-au-Prince ?",
    options: ["Paillant", "Perches", "Saint-Michel-de-l'Atalaye", "Thomazeau"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Delmas ?",
    options: ["Baie-de-Henne", "Trou-Bonbon", "Ganthier", "Saint-Louis-du-Sud"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Grand-Goâve ?",
    options: ["Ganthier", "Thomassique", "Lascahobas", "Anse-à-Pitre"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Arcahaie ?",
    options: ["Port-Salut", "Lascahobas", "Gressier", "Abricots"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Fonds-Verrettes ?",
    options: ["Anse-à-Pitre", "Thomazeau", "Saint-Louis-du-Nord", "Les Irois"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Grand-Goâve ?",
    options: ["Jérémie", "Pétion-Ville", "Fort-Liberté", "Dessalines"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Tabarre ?",
    options: ["Cayes-Jacmel", "Fort-Liberté", "Delmas", "Les Irois"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Arcahaie ?",
    options: ["Chantal", "Gressier", "Dame-Marie", "Belle-Anse"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Petit-Goâve ?",
    options: ["Trou-Bonbon", "Carrefour", "Saint-Jean-du-Sud", "Gros-Morne"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Cornillon ?",
    options: ["Desdunes", "Liancourt", "Jérémie", "Carrefour"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Pointe-à-Raquette ?",
    options: ["Arnaud", "Cabaret", "Chantal", "Boucan-Carré"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Cité Soleil ?",
    options: ["Capotille", "Belladère", "Grande-Saline", "Croix-des-Bouquets"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Croix-des-Bouquets ?",
    options: ["Belladère", "Moron", "Corail", "Petit-Goâve"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Thomazeau ?",
    options: ["Gonaïves", "Perches", "Arcahaie", "Mombin-Crochu"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Cornillon ?",
    options: ["Kenscoff", "Paillant", "Verrettes", "Jean-Rabel"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Kenscoff ?",
    options: ["Ennery", "Thomazeau", "Anse-à-Pitre", "Thomassique"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Carrefour ?",
    options: ["Capotille", "Camp-Perrin", "Pointe-à-Raquette", "Trou-du-Nord"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Cabaret ?",
    options: ["Chardonnières", "Plaisance-du-Sud", "Corail", "Grand-Goâve"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Tabarre ?",
    options: ["Belle-Anse", "Milot", "Thomazeau", "Terre-Neuve"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Pointe-à-Raquette ?",
    options: ["Mombin-Crochu", "Limonade", "Les Irois", "Cité Soleil"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Grand-Goâve ?",
    options: ["Grand-Boucan", "Cabaret", "La Tortue", "Thiotte"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Fonds-Verrettes ?",
    options: ["Verrettes", "Anse-à-Pitre", "Petit-Goâve", "Côteaux"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Croix-des-Bouquets ?",
    options: ["Ennery", "Dessalines", "Ganthier", "Bassin-Bleu"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Pointe-à-Raquette ?",
    options: ["Cité Soleil", "Saint-Jean-du-Sud", "Mirebalais", "Baie-de-Henne"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Carrefour ?",
    options: ["L'Acul-des-Pins", "Plaisance", "Liancourt", "Tabarre"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Cité Soleil ?",
    options: ["Dessalines", "Ouanaminthe", "Moron", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Cabaret ?",
    options: ["Milot", "Pilate", "Gressier", "Ouanaminthe"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Arcahaie ?",
    options: ["Cerca-la-Source", "Maïssade", "Ganthier", "Capotille"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Petit-Goâve ?",
    options: ["Plaisance", "Perches", "Léogâne", "Lascahobas"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Cabaret ?",
    options: ["Mont-Organisé", "Cornillon", "Plaine-du-Nord", "Plaisance-du-Sud"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Léogâne ?",
    options: ["Fonds-Verrettes", "Mirebalais", "Les Irois", "Lascahobas"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Cornillon ?",
    options: ["Verrettes", "Ganthier", "Perches", "Petite-Rivière-de-l'Artibonite"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Fonds-Verrettes ?",
    options: ["Gressier", "Gros-Morne", "Cerca-la-Source", "La Chapelle"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Thomazeau ?",
    options: ["Fonds-Verrettes", "Petit-Trou-de-Nippes", "Limonade", "Port-à-Piment"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Tabarre ?",
    options: ["Port-au-Prince", "Chardonnières", "Gonaïves", "Terrier-Rouge"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Pétion-Ville ?",
    options: ["L'Acul-des-Pins", "Pestel", "Cornillon", "Sainte-Suzanne"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Delmas ?",
    options: ["Fort-Liberté", "Cerca-Carvajal", "Fonds-Verrettes", "Maïssade"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Grand-Goâve ?",
    options: ["Pointe-à-Raquette", "La Chapelle", "Pilate", "Grand-Gosier"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Cité Soleil ?",
    options: ["Gressier", "Moron", "Petit-Trou-de-Nippes", "Saint-Michel-de-l'Atalaye"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Arcahaie ?",
    options: ["Milot", "Carrefour", "Caracol", "Grand-Boucan"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Grand-Goâve ?",
    options: ["Caracol", "Cap-Haïtien", "Bainet", "Cité Soleil"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Pétion-Ville ?",
    options: ["La Vallée-de-Jacmel", "Jérémie", "Milot", "Kenscoff"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Fonds-Verrettes ?",
    options: ["Sainte-Suzanne", "Grand-Goâve", "Aquin", "Saint-Louis-du-Nord"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Ganthier ?",
    options: ["Petit-Goâve", "Maïssade", "Port-à-Piment", "Dame-Marie"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Arcahaie ?",
    options: ["Marmelade", "Vallières", "Belle-Anse", "Léogâne"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Cité Soleil ?",
    options: ["Chansolme", "Thomassique", "Petit-Goâve", "La Chapelle"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Gressier ?",
    options: ["La Chapelle", "Saint-Marc", "Cité Soleil", "Chardonnières"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Cornillon ?",
    options: ["Ouanaminthe", "Les Cayes", "Grand-Bassin", "Gressier"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Gressier ?",
    options: ["Kenscoff", "Saint-Jean-du-Sud", "Dame-Marie", "Capotille"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Arcahaie ?",
    options: ["Thomazeau", "Trou-Bonbon", "Jérémie", "Les Cayes"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Kenscoff ?",
    options: ["Beaumont", "Delmas", "Lascahobas", "Thiotte"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Carrefour ?",
    options: ["Liancourt", "Cap-Haïtien", "Fonds-des-Nègres", "Tabarre"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Grand-Goâve ?",
    options: ["Port-Margot", "Saint-Louis-du-Sud", "Pétion-Ville", "Terrier-Rouge"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Pointe-à-Raquette ?",
    options: ["Ganthier", "Limonade", "Gonaïves", "Cayes-Jacmel"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Thomazeau ?",
    options: ["Saint-Jean-du-Sud", "Desdunes", "Mombin-Crochu", "Delmas"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Delmas ?",
    options: ["Sainte-Suzanne", "La Vallée-de-Jacmel", "Carice", "Gressier"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Ganthier ?",
    options: ["Saint-Jean-du-Sud", "Cabaret", "Limonade", "Saut-d'Eau"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Carrefour ?",
    options: ["Verrettes", "Thomazeau", "Saint-Louis-du-Nord", "Bainet"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Cabaret ?",
    options: ["Perches", "Môle-Saint-Nicolas", "Grande-Saline", "Pointe-à-Raquette"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Carrefour ?",
    options: ["Roseaux", "Cornillon", "Capotille", "Saint-Jean-du-Sud"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Pointe-à-Raquette ?",
    options: ["Delmas", "Bassin-Bleu", "Grand-Boucan", "Môle-Saint-Nicolas"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Pointe-à-Raquette ?",
    options: ["Cerca-la-Source", "Cité Soleil", "Pilate", "Thiotte"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Port-au-Prince ?",
    options: ["Les Irois", "Port-de-Paix", "Vallières", "Arcahaie"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Petit-Goâve ?",
    options: ["Grand-Gosier", "Carice", "Mont-Organisé", "Grand-Goâve"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Carrefour ?",
    options: ["Cap-Haïtien", "Plaisance", "Petit-Goâve", "Miragoâne"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Ganthier ?",
    options: ["Môle-Saint-Nicolas", "Bainet", "Thomazeau", "Saint-Louis-du-Sud"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Pointe-à-Raquette ?",
    options: ["Port-Margot", "Bombardopolis", "Cornillon", "Jacmel"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Cornillon ?",
    options: ["Marigot", "Roche-à-Bateau", "Kenscoff", "Corail"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Arcahaie ?",
    options: ["Gonaïves", "Ouanaminthe", "Fonds-Verrettes", "Arnaud"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Cabaret ?",
    options: ["Ganthier", "Arniquet", "Baradères", "Maïssade"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Port-au-Prince ?",
    options: ["Cerca-la-Source", "Trou-Bonbon", "Anse-à-Veau", "Delmas"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Tabarre ?",
    options: ["Arcahaie", "Ennery", "Corail", "Perches"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Kenscoff ?",
    options: ["Port-de-Paix", "Chantal", "Saint-Jean-du-Sud", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Léogâne ?",
    options: ["Port-à-Piment", "Gonaïves", "Chardonnières", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Cabaret ?",
    options: ["Moron", "Montrouis", "Acul-du-Nord", "Pointe-à-Raquette"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Léogâne ?",
    options: ["L'Estère", "Saint-Marc", "Cité Soleil", "Verrettes"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Carrefour ?",
    options: ["Abricots", "Grand-Gosier", "Jacmel", "Pointe-à-Raquette"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Arcahaie ?",
    options: ["Petit-Goâve", "Caracol", "Capotille", "Savanette"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Grand-Goâve ?",
    options: ["Chardonnières", "Port-au-Prince", "Arniquet", "Bainet"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Kenscoff ?",
    options: ["La Tortue", "Arcahaie", "Ouanaminthe", "Fort-Liberté"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Cabaret ?",
    options: ["Pointe-à-Raquette", "Jean-Rabel", "Chansolme", "Verrettes"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Delmas ?",
    options: ["Carrefour", "Vallières", "Terrier-Rouge", "Trou-Bonbon"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Arcahaie ?",
    options: ["Ennery", "Môle-Saint-Nicolas", "Sainte-Suzanne", "Grand-Goâve"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Pointe-à-Raquette ?",
    options: ["Cabaret", "Roseaux", "Ennery", "Mirebalais"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Cité Soleil ?",
    options: ["Belladère", "Arnaud", "Grand-Goâve", "Grand-Bassin"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Grand-Goâve ?",
    options: ["Capotille", "Camp-Coq", "Fonds-Verrettes", "Milot"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Petit-Goâve ?",
    options: ["Thiotte", "Gressier", "Perches", "Jérémie"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Grand-Goâve ?",
    options: ["Montrouis", "Petite-Rivière-de-l'Artibonite", "Camp-Perrin", "Gressier"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Pointe-à-Raquette ?",
    options: ["Cabaret", "Trou-Bonbon", "Chardonnières", "Grande-Saline"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Port-au-Prince ?",
    options: ["Les Cayes", "Carrefour", "Ouanaminthe", "Cerca-la-Source"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Carrefour ?",
    options: ["Cité Soleil", "Boucan-Carré", "Borgne", "Roche-à-Bateau"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Carrefour ?",
    options: ["Thomazeau", "Saint-Louis-du-Nord", "Arniquet", "Les Cayes"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Cabaret ?",
    options: ["Thomazeau", "Plaisance", "Fonds-des-Nègres", "Fort-Liberté"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Thomazeau ?",
    options: ["Miragoâne", "Mombin-Crochu", "Hinche", "Petit-Goâve"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Arcahaie ?",
    options: ["Montrouis", "Petit-Goâve", "Maniche", "Môle-Saint-Nicolas"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Pointe-à-Raquette ?",
    options: ["Bainet", "Grande-Saline", "Maniche", "Kenscoff"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Croix-des-Bouquets ?",
    options: ["Camp-Coq", "Fonds-Verrettes", "Boucan-Carré", "Thomassique"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Cité Soleil ?",
    options: ["Gressier", "Thomonde", "Milot", "Cap-Haïtien"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Arcahaie ?",
    options: ["Camp-Coq", "Thomonde", "Sainte-Suzanne", "Pointe-à-Raquette"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Cornillon ?",
    options: ["Grand-Bassin", "La Tortue", "Pétion-Ville", "Jean-Rabel"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Fonds-Verrettes ?",
    options: ["Saint-Louis-du-Sud", "Saint-Jean-du-Sud", "Verrettes", "Carrefour"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Arcahaie ?",
    options: ["L'Estère", "Cornillon", "Thomassique", "Bahon"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Fonds-Verrettes ?",
    options: ["Pestel", "La Tortue", "Cabaret", "Saint-Michel-de-l'Atalaye"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Grand-Goâve ?",
    options: ["Chardonnières", "Pilate", "Cornillon", "Terrier-Rouge"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Cabaret ?",
    options: ["Perches", "Carrefour", "Chansolme", "Anse-d'Hainault"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Fonds-Verrettes ?",
    options: ["Arcahaie", "Roseaux", "L'Asile", "Plaisance-du-Sud"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Cornillon ?",
    options: ["Arcahaie", "Hinche", "Corail", "Plaisance"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Ganthier ?",
    options: ["Port-Salut", "Thiotte", "Petit-Goâve", "Grand-Gosier"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Grand-Goâve ?",
    options: ["Cité Soleil", "Torbeck", "Les Irois", "Perches"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Delmas ?",
    options: ["Abricots", "Camp-Coq", "Arcahaie", "Gros-Morne"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Pétion-Ville ?",
    options: ["Lascahobas", "Croix-des-Bouquets", "Côteaux", "Bombardopolis"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Petit-Goâve ?",
    options: ["Cité Soleil", "Petit-Trou-de-Nippes", "Anse-d'Hainault", "Bombardopolis"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Fonds-Verrettes ?",
    options: ["Bassin-Bleu", "Côteaux", "Thomazeau", "Perches"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Pétion-Ville ?",
    options: ["Gonaïves", "Milot", "Cité Soleil", "Camp-Coq"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Léogâne ?",
    options: ["Cerca-Carvajal", "Arcahaie", "Grand-Bassin", "Trou-Bonbon"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Léogâne ?",
    options: ["Fort-Liberté", "Jean-Rabel", "Carice", "Delmas"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Pointe-à-Raquette ?",
    options: ["La Chapelle", "Milot", "Petit-Goâve", "Marigot"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Kenscoff ?",
    options: ["Anse-d'Hainault", "Port-au-Prince", "Terrier-Rouge", "Beaumont"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Arcahaie ?",
    options: ["Ganthier", "L'Acul-des-Pins", "Verrettes", "Plaine-du-Nord"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Pointe-à-Raquette ?",
    options: ["Cerca-la-Source", "Capotille", "Arcahaie", "Grand-Boucan"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Petit-Goâve ?",
    options: ["Abricots", "Arniquet", "Croix-des-Bouquets", "Maniche"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Carrefour ?",
    options: ["Moron", "Delmas", "Grand-Boucan", "Belle-Anse"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Thomazeau ?",
    options: ["Miragoâne", "Verrettes", "Hinche", "Tabarre"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Thomazeau ?",
    options: ["Caracol", "Marmelade", "Ganthier", "Plaine-du-Nord"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Pétion-Ville ?",
    options: ["Cité Soleil", "Verrettes", "Ouanaminthe", "L'Acul-des-Pins"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Delmas ?",
    options: ["Léogâne", "Marmelade", "Grande-Saline", "Camp-Coq"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Grand-Goâve ?",
    options: ["L'Acul-des-Pins", "Marmelade", "Port-Margot", "Gressier"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Cabaret ?",
    options: ["Pointe-à-Raquette", "Liancourt", "Boucan-Carré", "Port-Margot"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Delmas ?",
    options: ["Bombardopolis", "Aquin", "Plaine-du-Nord", "Thomazeau"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Port-au-Prince ?",
    options: ["Les Cayes", "Saint-Louis-du-Nord", "Bainet", "Cabaret"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Port-au-Prince ?",
    options: ["Camp-Perrin", "Fonds-Verrettes", "Saint-Louis-du-Sud", "Arniquet"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Port-au-Prince ?",
    options: ["Les Cayes", "Croix-des-Bouquets", "L'Acul-des-Pins", "La Tortue"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Cornillon ?",
    options: ["Miragoâne", "Arcahaie", "L'Asile", "Belladère"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Léogâne ?",
    options: ["Saut-d'Eau", "Grand-Gosier", "Mirebalais", "Ganthier"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Carrefour ?",
    options: ["Gonaïves", "Tabarre", "Acul-du-Nord", "La Chapelle"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Léogâne ?",
    options: ["Fonds-Verrettes", "Verrettes", "Capotille", "Savanette"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Arcahaie ?",
    options: ["Camp-Perrin", "Pétion-Ville", "Milot", "Fonds-des-Nègres"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Thomazeau ?",
    options: ["Baradères", "Petit-Goâve", "Côtes-de-Fer", "Saint-Louis-du-Nord"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Carrefour ?",
    options: ["Cerca-Carvajal", "Les Cayes", "Thomazeau", "Port-Salut"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Pointe-à-Raquette ?",
    options: ["Bainet", "Chansolme", "Ganthier", "Saint-Marc"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Fonds-Verrettes ?",
    options: ["Grand-Gosier", "Plaine-du-Nord", "Gressier", "Boucan-Carré"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Arcahaie ?",
    options: ["Trou-du-Nord", "Dame-Marie", "Ouanaminthe", "Kenscoff"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Tabarre ?",
    options: ["L'Acul-des-Pins", "Cornillon", "Dame-Marie", "Saint-Jean-du-Sud"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Fonds-Verrettes ?",
    options: ["Baie-de-Henne", "Grand-Goâve", "Liancourt", "Cayes-Jacmel"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Thomazeau ?",
    options: ["Cayes-Jacmel", "Trou-du-Nord", "Cornillon", "Port-Margot"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Grand-Goâve ?",
    options: ["Abricots", "Croix-des-Bouquets", "Petite-Rivière-de-l'Artibonite", "Moron"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Cabaret ?",
    options: ["Ganthier", "Saint-Jean-du-Sud", "La Tortue", "Grand-Boucan"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Petit-Goâve ?",
    options: ["Corail", "Kenscoff", "Marmelade", "L'Estère"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Croix-des-Bouquets ?",
    options: ["Cornillon", "Grand-Boucan", "Dame-Marie", "Bassin-Bleu"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Léogâne ?",
    options: ["Marigot", "Delmas", "Jérémie", "Arniquet"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Delmas ?",
    options: ["Belle-Anse", "Cornillon", "Les Irois", "Terrier-Rouge"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Cornillon ?",
    options: ["Marmelade", "L'Estère", "Kenscoff", "Marigot"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Pointe-à-Raquette ?",
    options: ["L'Asile", "L'Estère", "Thomonde", "Gressier"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Fonds-Verrettes ?",
    options: ["Delmas", "Montrouis", "Roseaux", "Paillant"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Ganthier ?",
    options: ["Les Irois", "Verrettes", "Paillant", "Port-au-Prince"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Léogâne ?",
    options: ["Trou-du-Nord", "Cité Soleil", "Dondon", "Verrettes"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Grand-Goâve ?",
    options: ["Montrouis", "Les Irois", "Miragoâne", "Croix-des-Bouquets"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Cornillon ?",
    options: ["Thomazeau", "Desdunes", "Port-à-Piment", "Pestel"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Croix-des-Bouquets ?",
    options: ["Fort-Liberté", "Bainet", "Vallières", "Carrefour"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Pointe-à-Raquette ?",
    options: ["Roseaux", "Borgne", "Chansolme", "Cabaret"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Gressier ?",
    options: ["Thomazeau", "Jacmel", "Roseaux", "Savanette"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Thomazeau ?",
    options: ["Mirebalais", "L'Acul-des-Pins", "Torbeck", "Pointe-à-Raquette"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Delmas ?",
    options: ["Marmelade", "Fonds-Verrettes", "Mirebalais", "Port-Salut"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Pointe-à-Raquette ?",
    options: ["Delmas", "Port-de-Paix", "Bombardopolis", "Plaisance-du-Sud"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Arcahaie ?",
    options: ["Arniquet", "Port-au-Prince", "Môle-Saint-Nicolas", "Dame-Marie"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Cornillon ?",
    options: ["Pilate", "Terrier-Rouge", "Chardonnières", "Thomazeau"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Léogâne ?",
    options: ["Roseaux", "Tabarre", "Beaumont", "Côtes-de-Fer"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Kenscoff ?",
    options: ["Carrefour", "Marmelade", "L'Asile", "Lascahobas"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Kenscoff ?",
    options: ["Verrettes", "Cabaret", "Lascahobas", "Fort-Liberté"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Fonds-Verrettes ?",
    options: ["Mont-Organisé", "Dondon", "Gressier", "Maïssade"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Arcahaie ?",
    options: ["Terrier-Rouge", "Saint-Michel-de-l'Atalaye", "Tabarre", "Cerca-la-Source"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Thomazeau ?",
    options: ["Chansolme", "Maniche", "Boucan-Carré", "Kenscoff"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Petit-Goâve ?",
    options: ["Port-Salut", "Grand-Goâve", "Anse-d'Hainault", "Baradères"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Tabarre ?",
    options: ["Mirebalais", "Montrouis", "Croix-des-Bouquets", "Môle-Saint-Nicolas"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Croix-des-Bouquets ?",
    options: ["Chantal", "Borgne", "Fonds-Verrettes", "Saint-Louis-du-Sud"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Ganthier ?",
    options: ["Dame-Marie", "Acul-du-Nord", "Plaine-du-Nord", "Arcahaie"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Cité Soleil ?",
    options: ["Port-Margot", "Port-au-Prince", "Jérémie", "Trou-Bonbon"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Pétion-Ville ?",
    options: ["Delmas", "Côteaux", "Baie-de-Henne", "Saut-d'Eau"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Grand-Goâve ?",
    options: ["Cayes-Jacmel", "Cap-Haïtien", "Grand-Bassin", "Petit-Goâve"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Kenscoff ?",
    options: ["Saint-Marc", "Ganthier", "La Tortue", "Saint-Michel-de-l'Atalaye"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Grand-Goâve ?",
    options: ["Corail", "Cité Soleil", "Montrouis", "Dame-Marie"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Arcahaie ?",
    options: ["Maniche", "Croix-des-Bouquets", "Thomassique", "Petite-Rivière-de-l'Artibonite"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Delmas ?",
    options: ["Grand-Goâve", "Belle-Anse", "Petit-Trou-de-Nippes", "L'Acul-des-Pins"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Grand-Goâve ?",
    options: ["Jérémie", "Grand-Gosier", "Limonade", "Cabaret"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Kenscoff ?",
    options: ["Côteaux", "Liancourt", "Port-au-Prince", "Borgne"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Thomazeau ?",
    options: ["Miragoâne", "Saint-Jean-du-Sud", "Fonds-des-Nègres", "Fonds-Verrettes"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Cabaret ?",
    options: ["Limonade", "Cornillon", "Mombin-Crochu", "Chansolme"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Ganthier ?",
    options: ["Trou-du-Nord", "Léogâne", "Limonade", "Plaisance-du-Sud"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Cornillon ?",
    options: ["Carrefour", "L'Acul-des-Pins", "Mirebalais", "Port-Salut"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Port-au-Prince ?",
    options: ["Ganthier", "Port-Salut", "Saint-Louis-du-Sud", "Boucan-Carré"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Delmas ?",
    options: ["Savanette", "Grand-Goâve", "Trou-Bonbon", "Roseaux"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Arcahaie ?",
    options: ["Pointe-à-Raquette", "Grande-Saline", "Jérémie", "Acul-du-Nord"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Tabarre ?",
    options: ["Grand-Goâve", "Corail", "Arnaud", "Capotille"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Ganthier ?",
    options: ["Fonds-des-Nègres", "Bassin-Bleu", "Abricots", "Cabaret"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Kenscoff ?",
    options: ["Terre-Neuve", "L'Acul-des-Pins", "Dessalines", "Grand-Goâve"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Croix-des-Bouquets ?",
    options: ["Ennery", "Ganthier", "La Chapelle", "Saint-Louis-du-Nord"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Cité Soleil ?",
    options: ["Dondon", "Ganthier", "Port-de-Paix", "L'Estère"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Kenscoff ?",
    options: ["Grand-Goâve", "Côteaux", "Grand-Bassin", "Saint-Marc"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Tabarre ?",
    options: ["Gonaïves", "Fonds-Verrettes", "Jean-Rabel", "Chansolme"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Tabarre ?",
    options: ["Hinche", "Thomassique", "Croix-des-Bouquets", "Borgne"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Tabarre ?",
    options: ["Acul-du-Nord", "Roche-à-Bateau", "Cerca-la-Source", "Delmas"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Croix-des-Bouquets ?",
    options: ["Capotille", "La Tortue", "Kenscoff", "Lascahobas"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Pétion-Ville ?",
    options: ["Côteaux", "Maïssade", "Fort-Liberté", "Léogâne"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Petit-Goâve ?",
    options: ["Cabaret", "Terre-Neuve", "Fonds-des-Nègres", "L'Estère"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Pétion-Ville ?",
    options: ["Cap-Haïtien", "Anse-d'Hainault", "Arcahaie", "Anse-à-Pitre"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Grand-Goâve ?",
    options: ["Plaine-du-Nord", "Gressier", "Marigot", "Limonade"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Tabarre ?",
    options: ["Mirebalais", "Arcahaie", "L'Estère", "Roseaux"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Fonds-Verrettes ?",
    options: ["Abricots", "Chardonnières", "Port-à-Piment", "Kenscoff"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Tabarre ?",
    options: ["Léogâne", "Carice", "Saint-Marc", "Cayes-Jacmel"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Thomazeau ?",
    options: ["Limonade", "Môle-Saint-Nicolas", "L'Estère", "Fonds-Verrettes"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Carrefour ?",
    options: ["Grand-Goâve", "Corail", "Fonds-des-Nègres", "Port-de-Paix"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Pétion-Ville ?",
    options: ["L'Estère", "Grand-Goâve", "Dessalines", "Bainet"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Ganthier ?",
    options: ["Croix-des-Bouquets", "Grand-Boucan", "L'Asile", "Maniche"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Cabaret ?",
    options: ["La Vallée-de-Jacmel", "Fonds-Verrettes", "Bombardopolis", "Anse-d'Hainault"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Delmas ?",
    options: ["Marigot", "Môle-Saint-Nicolas", "Port-à-Piment", "Tabarre"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Petit-Goâve ?",
    options: ["Grand-Bassin", "Arcahaie", "Grand-Boucan", "Abricots"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Pointe-à-Raquette ?",
    options: ["Acul-du-Nord", "Arniquet", "Ganthier", "Saint-Marc"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Pilate ?",
    options: ["Bahon", "Boucan-Carré", "Jacmel", "Camp-Perrin"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Borgne ?",
    options: ["Baradères", "Léogâne", "L'Acul-des-Pins", "Chardonnières"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que L'Acul-des-Pins ?",
    options: ["Milot", "Sainte-Suzanne", "Bassin-Bleu", "Saint-Jean-du-Sud"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que L'Acul-des-Pins ?",
    options: ["Acul-du-Nord", "Ouanaminthe", "Roche-à-Bateau", "Marigot"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Camp-Coq ?",
    options: ["Port-Salut", "Croix-des-Bouquets", "Limonade", "Belladère"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Acul-du-Nord ?",
    options: ["Bainet", "Pilate", "Chambellan", "Dessalines"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Limonade ?",
    options: ["Abricots", "Milot", "Baradères", "La Vallée-de-Jacmel"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Plaine-du-Nord ?",
    options: ["Roseaux", "Camp-Coq", "La Tortue", "Léogâne"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Limonade ?",
    options: ["Paillant", "Gros-Morne", "Borgne", "Torbeck"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Plaine-du-Nord ?",
    options: ["Carice", "Port-Margot", "Roseaux", "Marigot"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Dondon ?",
    options: ["Moron", "Plaine-du-Nord", "Thomassique", "Arnaud"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Plaisance ?",
    options: ["Hinche", "Jacmel", "L'Acul-des-Pins", "Grand-Boucan"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Borgne ?",
    options: ["Kenscoff", "Petit-Goâve", "Bahon", "Thomassique"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Limonade ?",
    options: ["Maniche", "Belle-Anse", "Grande-Saline", "Pilate"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Borgne ?",
    options: ["Bahon", "Bombardopolis", "Jacmel", "Mont-Organisé"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Plaine-du-Nord ?",
    options: ["Fonds-Verrettes", "Trou-du-Nord", "Pilate", "La Tortue"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Cap-Haïtien ?",
    options: ["Arnaud", "Jérémie", "Port-Margot", "Grand-Gosier"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Plaisance ?",
    options: ["Abricots", "Pilate", "Jérémie", "Grand-Bassin"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Plaisance ?",
    options: ["Dame-Marie", "Arnaud", "Gros-Morne", "Borgne"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Plaisance ?",
    options: ["Ouanaminthe", "Torbeck", "Cayes-Jacmel", "Dondon"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Plaisance ?",
    options: ["Dessalines", "Port-Margot", "Perches", "Torbeck"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Acul-du-Nord ?",
    options: ["Port-Margot", "Bombardopolis", "Ennery", "Mirebalais"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Bahon ?",
    options: ["Marigot", "Borgne", "Fort-Liberté", "Port-de-Paix"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Plaisance ?",
    options: ["Croix-des-Bouquets", "Maïssade", "Mirebalais", "Borgne"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Milot ?",
    options: ["Moron", "Pilate", "Sainte-Suzanne", "La Chapelle"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Acul-du-Nord ?",
    options: ["Milot", "Marigot", "Beaumont", "Fort-Liberté"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que L'Acul-des-Pins ?",
    options: ["Abricots", "Caracol", "Plaisance", "Roseaux"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Acul-du-Nord ?",
    options: ["Roche-à-Bateau", "Carrefour", "Port-au-Prince", "Dondon"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Dondon ?",
    options: ["Cayes-Jacmel", "Port-Salut", "Port-Margot", "Chantal"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Cap-Haïtien ?",
    options: ["Desdunes", "La Tortue", "Paillant", "L'Acul-des-Pins"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Acul-du-Nord ?",
    options: ["Gros-Morne", "Fonds-des-Nègres", "Trou-Bonbon", "Camp-Coq"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Milot ?",
    options: ["Mirebalais", "Arniquet", "Grand-Gosier", "Bahon"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Limonade ?",
    options: ["Dondon", "Tabarre", "Port-de-Paix", "Plaisance-du-Sud"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Camp-Coq ?",
    options: ["Cité Soleil", "Saint-Marc", "Limonade", "Trou-Bonbon"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Borgne ?",
    options: ["Bombardopolis", "Pilate", "Dame-Marie", "Roche-à-Bateau"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Milot ?",
    options: ["Liancourt", "Arniquet", "Plaine-du-Nord", "Tabarre"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Dondon ?",
    options: ["Port-Margot", "Saint-Michel-de-l'Atalaye", "Arniquet", "Thomonde"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Limonade ?",
    options: ["Maïssade", "La Tortue", "Abricots", "Port-Margot"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Limonade ?",
    options: ["Grand-Gosier", "Côtes-de-Fer", "Lascahobas", "Camp-Coq"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que L'Acul-des-Pins ?",
    options: ["L'Asile", "Kenscoff", "Grande-Saline", "Limonade"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Acul-du-Nord ?",
    options: ["Milot", "Thomazeau", "Perches", "Baie-de-Henne"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Bahon ?",
    options: ["Caracol", "Léogâne", "Borgne", "Moron"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Plaine-du-Nord ?",
    options: ["Fonds-des-Nègres", "Mirebalais", "L'Acul-des-Pins", "Vallières"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Plaine-du-Nord ?",
    options: ["Saint-Louis-du-Sud", "Fonds-des-Nègres", "Jacmel", "Borgne"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Acul-du-Nord ?",
    options: ["Terre-Neuve", "Léogâne", "Maniche", "Pilate"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Port-Margot ?",
    options: ["Ouanaminthe", "Petit-Trou-de-Nippes", "Caracol", "Milot"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Cap-Haïtien ?",
    options: ["Trou-du-Nord", "Port-Margot", "Baie-de-Henne", "Cayes-Jacmel"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Plaisance ?",
    options: ["Ennery", "Bahon", "Jacmel", "Sainte-Suzanne"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Limonade ?",
    options: ["Bahon", "Belladère", "Tabarre", "Port-Salut"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Acul-du-Nord ?",
    options: ["Trou-Bonbon", "Cap-Haïtien", "La Chapelle", "Thomassique"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Cap-Haïtien ?",
    options: ["Anse-à-Pitre", "Trou-Bonbon", "Pointe-à-Raquette", "Plaine-du-Nord"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Pilate ?",
    options: ["Cayes-Jacmel", "Cerca-la-Source", "Moron", "Limonade"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Cap-Haïtien ?",
    options: ["Dondon", "Môle-Saint-Nicolas", "Petit-Trou-de-Nippes", "Jean-Rabel"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Borgne ?",
    options: ["Cerca-Carvajal", "Ganthier", "Dondon", "Port-de-Paix"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Cap-Haïtien ?",
    options: ["Les Cayes", "Chardonnières", "Ennery", "Limonade"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Limonade ?",
    options: ["L'Estère", "Borgne", "Pétion-Ville", "Caracol"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Port-Margot ?",
    options: ["Carrefour", "Fort-Liberté", "Jacmel", "Camp-Coq"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Borgne ?",
    options: ["Belladère", "Marmelade", "Port-de-Paix", "Acul-du-Nord"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que L'Acul-des-Pins ?",
    options: ["Plaisance", "Marmelade", "Fonds-Verrettes", "Thomassique"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Plaisance ?",
    options: ["Bombardopolis", "Beaumont", "Tabarre", "Cap-Haïtien"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Pilate ?",
    options: ["Plaisance", "Terrier-Rouge", "Mombin-Crochu", "Capotille"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Acul-du-Nord ?",
    options: ["Fonds-des-Nègres", "Belladère", "Delmas", "Cap-Haïtien"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Port-Margot ?",
    options: ["Dondon", "Abricots", "Maniche", "Port-Salut"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Limonade ?",
    options: ["L'Estère", "Acul-du-Nord", "Carice", "Saint-Michel-de-l'Atalaye"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Camp-Coq ?",
    options: ["Marigot", "Delmas", "Terrier-Rouge", "Acul-du-Nord"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Plaine-du-Nord ?",
    options: ["Vallières", "L'Acul-des-Pins", "Bassin-Bleu", "Boucan-Carré"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Plaine-du-Nord ?",
    options: ["Milot", "Paillant", "Grand-Goâve", "Port-de-Paix"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Dondon ?",
    options: ["Léogâne", "Anse-d'Hainault", "Port-au-Prince", "Bahon"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Plaine-du-Nord ?",
    options: ["Maniche", "Port-Margot", "Anse-à-Pitre", "Moron"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Cap-Haïtien ?",
    options: ["Corail", "Belle-Anse", "Port-Salut", "Milot"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Borgne ?",
    options: ["Milot", "Gressier", "Arcahaie", "Montrouis"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Borgne ?",
    options: ["Milot", "Grand-Bassin", "Saint-Marc", "Ganthier"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Camp-Coq ?",
    options: ["Paillant", "Arnaud", "Pilate", "Les Cayes"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Plaine-du-Nord ?",
    options: ["Les Irois", "Caracol", "Trou-du-Nord", "Dondon"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Limonade ?",
    options: ["Fort-Liberté", "Bombardopolis", "Plaisance-du-Sud", "Camp-Coq"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Pilate ?",
    options: ["Grand-Bassin", "Cornillon", "Fonds-des-Nègres", "Cap-Haïtien"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Pilate ?",
    options: ["Milot", "Petit-Trou-de-Nippes", "Mirebalais", "Anse-à-Pitre"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que L'Acul-des-Pins ?",
    options: ["Sainte-Suzanne", "Terrier-Rouge", "Saut-d'Eau", "Limonade"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Plaine-du-Nord ?",
    options: ["Port-Margot", "Beaumont", "Saut-d'Eau", "Grande-Saline"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Camp-Coq ?",
    options: ["Plaine-du-Nord", "Marigot", "Roseaux", "Thomazeau"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Limonade ?",
    options: ["Borgne", "Roche-à-Bateau", "Kenscoff", "Gonaïves"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que L'Acul-des-Pins ?",
    options: ["Camp-Coq", "Belladère", "Kenscoff", "L'Estère"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Plaisance ?",
    options: ["Anse-d'Hainault", "Corail", "L'Acul-des-Pins", "Cerca-Carvajal"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Plaisance ?",
    options: ["Roseaux", "Plaisance-du-Sud", "Jacmel", "Acul-du-Nord"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Plaine-du-Nord ?",
    options: ["Bassin-Bleu", "Capotille", "Trou-Bonbon", "Milot"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que L'Acul-des-Pins ?",
    options: ["Les Irois", "Arnaud", "La Tortue", "Plaine-du-Nord"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Borgne ?",
    options: ["Montrouis", "Terrier-Rouge", "Miragoâne", "Pilate"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Dondon ?",
    options: ["L'Acul-des-Pins", "Paillant", "Belle-Anse", "Montrouis"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Acul-du-Nord ?",
    options: ["Liancourt", "Cité Soleil", "Cap-Haïtien", "L'Estère"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Port-Margot ?",
    options: ["Petit-Goâve", "Limonade", "Roseaux", "Trou-du-Nord"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Cap-Haïtien ?",
    options: ["Bombardopolis", "Plaine-du-Nord", "Beaumont", "Bassin-Bleu"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Dondon ?",
    options: ["Borgne", "Camp-Perrin", "Mont-Organisé", "Saint-Louis-du-Nord"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Camp-Coq ?",
    options: ["Dessalines", "Ganthier", "Maniche", "Dondon"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Dondon ?",
    options: ["Capotille", "Borgne", "Cornillon", "Marmelade"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Limonade ?",
    options: ["Maniche", "Mont-Organisé", "Saint-Marc", "Plaisance"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Port-Margot ?",
    options: ["Plaine-du-Nord", "Chantal", "Ennery", "Léogâne"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Camp-Coq ?",
    options: ["Mont-Organisé", "Ganthier", "Camp-Perrin", "Milot"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Borgne ?",
    options: ["Jean-Rabel", "Jérémie", "Port-à-Piment", "Pilate"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Cap-Haïtien ?",
    options: ["Milot", "Jean-Rabel", "Abricots", "Jacmel"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Milot ?",
    options: ["Marmelade", "Plaisance", "Chardonnières", "Perches"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Plaine-du-Nord ?",
    options: ["Belle-Anse", "Capotille", "Limonade", "Thomonde"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Acul-du-Nord ?",
    options: ["Petit-Trou-de-Nippes", "L'Estère", "Sainte-Suzanne", "Plaine-du-Nord"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Port-Margot ?",
    options: ["Bainet", "Camp-Coq", "Saut-d'Eau", "Les Irois"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Milot ?",
    options: ["Thomassique", "Gros-Morne", "Lascahobas", "Borgne"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que L'Acul-des-Pins ?",
    options: ["Ouanaminthe", "Limonade", "Baie-de-Henne", "Saint-Jean-du-Sud"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Plaine-du-Nord ?",
    options: ["Gros-Morne", "Pilate", "Plaisance-du-Sud", "Côtes-de-Fer"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Pilate ?",
    options: ["Acul-du-Nord", "Maniche", "Ganthier", "Kenscoff"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Cap-Haïtien ?",
    options: ["Petit-Goâve", "Limonade", "Ennery", "Ouanaminthe"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Pilate ?",
    options: ["Belladère", "Port-Margot", "Saint-Louis-du-Nord", "Beaumont"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Limonade ?",
    options: ["Moron", "Paillant", "Port-Margot", "Miragoâne"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Acul-du-Nord ?",
    options: ["Verrettes", "Cornillon", "Plaisance", "Camp-Perrin"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Bahon ?",
    options: ["Pointe-à-Raquette", "Desdunes", "Grand-Gosier", "Pilate"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Limonade ?",
    options: ["Gressier", "Acul-du-Nord", "Bassin-Bleu", "Terrier-Rouge"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Acul-du-Nord ?",
    options: ["Bainet", "Cap-Haïtien", "Gros-Morne", "Carice"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Bahon ?",
    options: ["Arnaud", "Marigot", "La Chapelle", "Camp-Coq"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Milot ?",
    options: ["Port-à-Piment", "Savanette", "Camp-Coq", "Cerca-la-Source"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Plaine-du-Nord ?",
    options: ["Baie-de-Henne", "Gros-Morne", "Cerca-la-Source", "Dondon"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Limonade ?",
    options: ["Grand-Boucan", "Anse-à-Veau", "Fonds-des-Nègres", "Camp-Coq"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Pilate ?",
    options: ["Plaine-du-Nord", "Hinche", "Ouanaminthe", "La Vallée-de-Jacmel"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Camp-Coq ?",
    options: ["Port-à-Piment", "Capotille", "Plaine-du-Nord", "Ganthier"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Milot ?",
    options: ["Thiotte", "Saint-Jean-du-Sud", "Port-au-Prince", "Cap-Haïtien"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Cap-Haïtien ?",
    options: ["Terre-Neuve", "Borgne", "Port-de-Paix", "Hinche"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Dondon ?",
    options: ["Anse-à-Pitre", "Carice", "Les Cayes", "Plaisance"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Plaisance ?",
    options: ["Carrefour", "Perches", "La Chapelle", "Dondon"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Bahon ?",
    options: ["Mombin-Crochu", "Acul-du-Nord", "Kenscoff", "Tabarre"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Plaisance ?",
    options: ["Dessalines", "Pilate", "Tabarre", "Gressier"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Pilate ?",
    options: ["Roseaux", "Cerca-la-Source", "Grand-Gosier", "Borgne"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Port-Margot ?",
    options: ["Maniche", "Camp-Coq", "L'Estère", "Plaisance-du-Sud"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Milot ?",
    options: ["Thomonde", "Capotille", "Beaumont", "Pilate"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Borgne ?",
    options: ["Thomazeau", "Anse-à-Veau", "Roche-à-Bateau", "L'Acul-des-Pins"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Borgne ?",
    options: ["Grande-Saline", "Belle-Anse", "Dondon", "Chantal"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Plaisance ?",
    options: ["Torbeck", "Port-Margot", "Plaisance-du-Sud", "Pestel"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Port-Margot ?",
    options: ["Plaine-du-Nord", "Grande-Saline", "Chambellan", "Cabaret"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Camp-Coq ?",
    options: ["Cabaret", "Cap-Haïtien", "Saint-Louis-du-Sud", "Bainet"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Milot ?",
    options: ["Camp-Coq", "Ouanaminthe", "Port-au-Prince", "Croix-des-Bouquets"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Pilate ?",
    options: ["Cerca-Carvajal", "Cap-Haïtien", "Baradères", "Ouanaminthe"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Pilate ?",
    options: ["Caracol", "Dame-Marie", "Arcahaie", "Milot"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Limonade ?",
    options: ["Port-de-Paix", "Mombin-Crochu", "Baie-de-Henne", "Cap-Haïtien"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Pilate ?",
    options: ["Arniquet", "Marigot", "Camp-Coq", "Saint-Michel-de-l'Atalaye"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Limonade ?",
    options: ["Bahon", "Thomassique", "Port-de-Paix", "Chambellan"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Bahon ?",
    options: ["Carrefour", "Desdunes", "Thomonde", "Plaisance"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Camp-Coq ?",
    options: ["Mont-Organisé", "Borgne", "Fonds-des-Nègres", "Aquin"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Camp-Coq ?",
    options: ["Marigot", "L'Acul-des-Pins", "Miragoâne", "Ouanaminthe"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Borgne ?",
    options: ["Trou-Bonbon", "Marigot", "Port-Margot", "Anse-à-Veau"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Pilate ?",
    options: ["Boucan-Carré", "Port-Margot", "Chantal", "Arnaud"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Limonade ?",
    options: ["Torbeck", "Acul-du-Nord", "Les Cayes", "Terre-Neuve"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Plaine-du-Nord ?",
    options: ["Port-de-Paix", "Port-au-Prince", "Bahon", "Pétion-Ville"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Milot ?",
    options: ["Baie-de-Henne", "Beaumont", "L'Acul-des-Pins", "Paillant"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Cap-Haïtien ?",
    options: ["Plaisance", "Port-Salut", "Desdunes", "Grand-Goâve"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Bahon ?",
    options: ["Les Irois", "Corail", "Mombin-Crochu", "Pilate"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Bahon ?",
    options: ["Camp-Coq", "Camp-Perrin", "Tabarre", "La Tortue"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Cap-Haïtien ?",
    options: ["Boucan-Carré", "Gonaïves", "Moron", "Plaisance"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Pilate ?",
    options: ["Saint-Michel-de-l'Atalaye", "Gros-Morne", "Thiotte", "Acul-du-Nord"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Cap-Haïtien ?",
    options: ["Saint-Jean-du-Sud", "Belladère", "Ennery", "Dondon"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Limonade ?",
    options: ["Léogâne", "Savanette", "Baie-de-Henne", "Pilate"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Milot ?",
    options: ["Côtes-de-Fer", "L'Acul-des-Pins", "L'Estère", "Cité Soleil"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Limonade ?",
    options: ["Bainet", "Anse-à-Pitre", "Acul-du-Nord", "La Chapelle"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Pilate ?",
    options: ["Grand-Bassin", "Grand-Gosier", "Plaine-du-Nord", "Roseaux"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Milot ?",
    options: ["Chansolme", "Arcahaie", "Cap-Haïtien", "Saint-Jean-du-Sud"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Dondon ?",
    options: ["Arnaud", "Chansolme", "Limonade", "Abricots"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Bahon ?",
    options: ["Jean-Rabel", "Camp-Perrin", "Borgne", "Ouanaminthe"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Cap-Haïtien ?",
    options: ["Thomonde", "Terrier-Rouge", "Cayes-Jacmel", "Milot"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Camp-Coq ?",
    options: ["Trou-Bonbon", "Ouanaminthe", "Plaisance", "Saut-d'Eau"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Camp-Coq ?",
    options: ["Cabaret", "Thomazeau", "Pilate", "Boucan-Carré"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Port-Margot ?",
    options: ["Terrier-Rouge", "Bahon", "Arcahaie", "Bainet"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Limonade ?",
    options: ["Plaisance", "Arnaud", "Camp-Perrin", "Chambellan"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Pilate ?",
    options: ["Port-de-Paix", "Grand-Goâve", "Dondon", "Anse-d'Hainault"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Dondon ?",
    options: ["Saint-Marc", "Pilate", "Roseaux", "Thomazeau"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que L'Acul-des-Pins ?",
    options: ["Les Cayes", "Ouanaminthe", "Maniche", "Milot"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Plaine-du-Nord ?",
    options: ["Saint-Marc", "Ganthier", "Chambellan", "Acul-du-Nord"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Camp-Coq ?",
    options: ["Les Cayes", "Perches", "Cap-Haïtien", "Pétion-Ville"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Camp-Coq ?",
    options: ["Cap-Haïtien", "Tabarre", "Marmelade", "Anse-à-Veau"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Limonade ?",
    options: ["Saint-Michel-de-l'Atalaye", "Cerca-Carvajal", "Anse-d'Hainault", "Pilate"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Pilate ?",
    options: ["Delmas", "Vallières", "Limonade", "Cabaret"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Limonade ?",
    options: ["Grand-Boucan", "Maniche", "Vallières", "Dondon"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Borgne ?",
    options: ["Lascahobas", "Milot", "Ennery", "Marmelade"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Limonade ?",
    options: ["Desdunes", "Pilate", "Perches", "Mirebalais"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que L'Acul-des-Pins ?",
    options: ["Belle-Anse", "Desdunes", "Capotille", "Limonade"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Plaine-du-Nord ?",
    options: ["Cayes-Jacmel", "L'Asile", "Arniquet", "Borgne"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Camp-Coq ?",
    options: ["Port-au-Prince", "Desdunes", "Roche-à-Bateau", "Plaine-du-Nord"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Limonade ?",
    options: ["L'Acul-des-Pins", "Grand-Boucan", "Pointe-à-Raquette", "Fonds-des-Nègres"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Milot ?",
    options: ["Cap-Haïtien", "Carrefour", "Grand-Gosier", "Hinche"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Limonade ?",
    options: ["Chambellan", "Plaine-du-Nord", "Côteaux", "Petit-Trou-de-Nippes"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Dondon ?",
    options: ["Saint-Jean-du-Sud", "Limonade", "Marmelade", "Corail"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Camp-Coq ?",
    options: ["Marigot", "Cap-Haïtien", "Petit-Goâve", "Aquin"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Bahon ?",
    options: ["Grande-Saline", "Trou-du-Nord", "Pétion-Ville", "Camp-Coq"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Milot ?",
    options: ["Grand-Boucan", "La Chapelle", "Saut-d'Eau", "Limonade"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Pilate ?",
    options: ["Sainte-Suzanne", "Grand-Goâve", "Belladère", "Limonade"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Port-Margot ?",
    options: ["Miragoâne", "Borgne", "Port-à-Piment", "Carice"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Acul-du-Nord ?",
    options: ["La Vallée-de-Jacmel", "Limonade", "Baie-de-Henne", "La Tortue"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Bahon ?",
    options: ["La Chapelle", "Torbeck", "Pestel", "Borgne"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Borgne ?",
    options: ["Liancourt", "Fonds-Verrettes", "Corail", "Cap-Haïtien"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Pilate ?",
    options: ["Saint-Louis-du-Sud", "Perches", "Carrefour", "Port-Margot"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Bahon ?",
    options: ["Port-Margot", "Cité Soleil", "Port-au-Prince", "Mirebalais"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Pilate ?",
    options: ["Ouanaminthe", "Côtes-de-Fer", "Bahon", "Grand-Boucan"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Milot ?",
    options: ["Thomazeau", "Roche-à-Bateau", "Croix-des-Bouquets", "Borgne"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Pilate ?",
    options: ["Côtes-de-Fer", "Milot", "La Vallée-de-Jacmel", "Léogâne"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Dondon ?",
    options: ["Terrier-Rouge", "Cabaret", "Dame-Marie", "Borgne"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Port-Margot ?",
    options: ["Limonade", "Bombardopolis", "Port-au-Prince", "Desdunes"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Plaine-du-Nord ?",
    options: ["Cap-Haïtien", "Mont-Organisé", "Croix-des-Bouquets", "Baie-de-Henne"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Milot ?",
    options: ["La Vallée-de-Jacmel", "Chantal", "Dessalines", "Limonade"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Milot ?",
    options: ["Bainet", "Arnaud", "Pilate", "Ennery"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que L'Acul-des-Pins ?",
    options: ["La Vallée-de-Jacmel", "Plaine-du-Nord", "L'Estère", "Camp-Perrin"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que L'Acul-des-Pins ?",
    options: ["Sainte-Suzanne", "Hinche", "Côteaux", "Cap-Haïtien"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que L'Acul-des-Pins ?",
    options: ["Plaisance-du-Sud", "Trou-Bonbon", "Dondon", "Anse-d'Hainault"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Dondon ?",
    options: ["Carice", "Acul-du-Nord", "Saint-Jean-du-Sud", "Dame-Marie"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Limonade ?",
    options: ["L'Estère", "Cité Soleil", "Port-Salut", "Port-Margot"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que L'Acul-des-Pins ?",
    options: ["Bahon", "Hinche", "Baradères", "Roseaux"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Pilate ?",
    options: ["Bainet", "L'Asile", "Bombardopolis", "Limonade"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Plaine-du-Nord ?",
    options: ["Moron", "Vallières", "Belladère", "Camp-Coq"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Milot ?",
    options: ["Trou-du-Nord", "Dondon", "Chansolme", "Chambellan"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Plaisance ?",
    options: ["Montrouis", "Desdunes", "Trou-Bonbon", "L'Acul-des-Pins"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Borgne ?",
    options: ["Corail", "Desdunes", "Camp-Coq", "Chambellan"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Limonade ?",
    options: ["Terre-Neuve", "Maniche", "Plaine-du-Nord", "Marigot"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Cap-Haïtien ?",
    options: ["Gonaïves", "Acul-du-Nord", "Môle-Saint-Nicolas", "Cayes-Jacmel"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Plaine-du-Nord ?",
    options: ["Môle-Saint-Nicolas", "Gonaïves", "L'Acul-des-Pins", "Grand-Bassin"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Plaine-du-Nord ?",
    options: ["Gressier", "Port-Salut", "Sainte-Suzanne", "Plaisance"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Plaisance ?",
    options: ["Saut-d'Eau", "Chansolme", "Pilate", "Petit-Goâve"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Acul-du-Nord ?",
    options: ["Baradères", "Savanette", "Bombardopolis", "Port-Margot"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Milot ?",
    options: ["Capotille", "Perches", "Plaisance", "Paillant"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Cap-Haïtien ?",
    options: ["Verrettes", "Port-Margot", "Saint-Louis-du-Nord", "Gonaïves"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Milot ?",
    options: ["Cap-Haïtien", "Thomassique", "Léogâne", "Miragoâne"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Cap-Haïtien ?",
    options: ["Lascahobas", "Anse-d'Hainault", "Ganthier", "L'Acul-des-Pins"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Milot ?",
    options: ["Port-Margot", "Belladère", "Léogâne", "L'Estère"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Port-Margot ?",
    options: ["Milot", "Arniquet", "Dessalines", "Ouanaminthe"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Port-Margot ?",
    options: ["Port-Salut", "Maniche", "Arniquet", "Plaisance"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Plaine-du-Nord ?",
    options: ["Pilate", "Mont-Organisé", "Ennery", "Saut-d'Eau"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Borgne ?",
    options: ["Milot", "Saint-Michel-de-l'Atalaye", "Terre-Neuve", "Saint-Jean-du-Sud"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Cap-Haïtien ?",
    options: ["Corail", "Grande-Saline", "Chantal", "Borgne"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Camp-Coq ?",
    options: ["Thomassique", "Baradères", "Môle-Saint-Nicolas", "Acul-du-Nord"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Plaisance ?",
    options: ["Arniquet", "Thomazeau", "Borgne", "Saut-d'Eau"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que L'Acul-des-Pins ?",
    options: ["Trou-du-Nord", "Pilate", "Anse-d'Hainault", "Chansolme"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Pilate ?",
    options: ["Mirebalais", "Les Irois", "Plaine-du-Nord", "Gros-Morne"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Limonade ?",
    options: ["L'Acul-des-Pins", "Belle-Anse", "Delmas", "Corail"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Port-Margot ?",
    options: ["L'Estère", "Gros-Morne", "Dondon", "Ganthier"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Bahon ?",
    options: ["Milot", "Gressier", "Croix-des-Bouquets", "Thomonde"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Plaisance ?",
    options: ["Limonade", "Cerca-Carvajal", "Fonds-Verrettes", "Petite-Rivière-de-l'Artibonite"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Bahon ?",
    options: ["Grand-Bassin", "Kenscoff", "Grand-Gosier", "Pilate"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Dondon ?",
    options: ["Cap-Haïtien", "Mont-Organisé", "Belle-Anse", "Bombardopolis"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Port-Margot ?",
    options: ["Bahon", "Cabaret", "Môle-Saint-Nicolas", "Thomonde"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Limonade ?",
    options: ["Port-Margot", "Chardonnières", "Baie-de-Henne", "Capotille"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Cap-Haïtien ?",
    options: ["Borgne", "Saint-Marc", "Maïssade", "Grand-Goâve"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Bahon ?",
    options: ["Corail", "L'Acul-des-Pins", "Trou-Bonbon", "Hinche"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Bahon ?",
    options: ["Arcahaie", "Boucan-Carré", "Cerca-Carvajal", "Camp-Coq"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Milot ?",
    options: ["Port-de-Paix", "Caracol", "Mirebalais", "Pilate"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Cap-Haïtien ?",
    options: ["Trou-Bonbon", "Acul-du-Nord", "Côtes-de-Fer", "Carice"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Milot ?",
    options: ["Camp-Coq", "Carrefour", "Boucan-Carré", "Plaisance-du-Sud"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Milot ?",
    options: ["L'Acul-des-Pins", "Camp-Perrin", "Sainte-Suzanne", "Cerca-Carvajal"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Pilate ?",
    options: ["Dondon", "Fort-Liberté", "Lascahobas", "Côteaux"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Pilate ?",
    options: ["Gonaïves", "Plaine-du-Nord", "Abricots", "Mont-Organisé"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Les Cayes ?",
    options: ["Port-Margot", "Belle-Anse", "Camp-Perrin", "Thomazeau"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Camp-Perrin ?",
    options: ["Gros-Morne", "Torbeck", "Capotille", "Bombardopolis"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Port-Salut ?",
    options: ["Chardonnières", "Gonaïves", "Caracol", "Capotille"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Port-Salut ?",
    options: ["Mont-Organisé", "Hinche", "Camp-Perrin", "Croix-des-Bouquets"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Aquin ?",
    options: ["Liancourt", "Dondon", "Grand-Bassin", "Arniquet"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Port-à-Piment ?",
    options: ["Moron", "Saut-d'Eau", "Côteaux", "Fonds-Verrettes"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Port-à-Piment ?",
    options: ["Petit-Trou-de-Nippes", "Arcahaie", "Maniche", "Anse-à-Veau"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Saint-Jean-du-Sud ?",
    options: ["Montrouis", "Croix-des-Bouquets", "Mombin-Crochu", "Arniquet"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Chantal ?",
    options: ["Aquin", "Saint-Marc", "Delmas", "Saint-Michel-de-l'Atalaye"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Chantal ?",
    options: ["Perches", "Port-de-Paix", "Delmas", "Chardonnières"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Saint-Louis-du-Sud ?",
    options: ["Port-à-Piment", "Thomonde", "Arcahaie", "Anse-à-Pitre"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Camp-Perrin ?",
    options: ["Saint-Louis-du-Sud", "Anse-à-Pitre", "Dame-Marie", "Hinche"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Chardonnières ?",
    options: ["Saint-Jean-du-Sud", "Saint-Louis-du-Nord", "Miragoâne", "L'Acul-des-Pins"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Saint-Jean-du-Sud ?",
    options: ["Maniche", "Montrouis", "Marmelade", "Anse-à-Veau"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Côteaux ?",
    options: ["Maniche", "Mirebalais", "Belladère", "Cabaret"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Maniche ?",
    options: ["Anse-à-Veau", "Mombin-Crochu", "Aquin", "Saut-d'Eau"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Camp-Perrin ?",
    options: ["Carice", "Torbeck", "Pestel", "Trou-du-Nord"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Arniquet ?",
    options: ["Vallières", "Chantal", "Grand-Goâve", "Boucan-Carré"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Chardonnières ?",
    options: ["Corail", "Torbeck", "Petit-Goâve", "Boucan-Carré"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Les Cayes ?",
    options: ["Roseaux", "L'Acul-des-Pins", "Thomonde", "Camp-Perrin"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Les Cayes ?",
    options: ["Paillant", "Hinche", "Chantal", "Plaisance-du-Sud"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Saint-Jean-du-Sud ?",
    options: ["Maniche", "Anse-à-Veau", "Corail", "Plaisance-du-Sud"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Torbeck ?",
    options: ["Verrettes", "Aquin", "Fonds-Verrettes", "Môle-Saint-Nicolas"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Port-à-Piment ?",
    options: ["Torbeck", "Caracol", "Anse-à-Pitre", "Dame-Marie"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Les Cayes ?",
    options: ["Saint-Louis-du-Sud", "Verrettes", "Paillant", "Cité Soleil"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Les Cayes ?",
    options: ["Bainet", "Chantal", "Petit-Trou-de-Nippes", "Ganthier"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Port-à-Piment ?",
    options: ["Arniquet", "Terre-Neuve", "Liancourt", "Gros-Morne"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Roche-à-Bateau ?",
    options: ["Acul-du-Nord", "Les Irois", "Les Cayes", "Beaumont"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Aquin ?",
    options: ["Mont-Organisé", "Borgne", "Saint-Louis-du-Sud", "Port-de-Paix"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Arniquet ?",
    options: ["Thiotte", "Aquin", "Cap-Haïtien", "L'Asile"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Aquin ?",
    options: ["Maniche", "L'Estère", "Marmelade", "L'Asile"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Camp-Perrin ?",
    options: ["Torbeck", "Bassin-Bleu", "Cerca-Carvajal", "Côtes-de-Fer"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Côteaux ?",
    options: ["Milot", "Camp-Perrin", "Pilate", "Bahon"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Saint-Louis-du-Sud ?",
    options: ["Thiotte", "Camp-Perrin", "Roseaux", "Port-Margot"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Arniquet ?",
    options: ["Les Irois", "Thomonde", "Savanette", "Torbeck"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Arniquet ?",
    options: ["Boucan-Carré", "Côteaux", "Ouanaminthe", "Jacmel"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Arniquet ?",
    options: ["Hinche", "Maniche", "Port-au-Prince", "Delmas"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Camp-Perrin ?",
    options: ["Thomazeau", "Perches", "Plaisance-du-Sud", "Saint-Louis-du-Sud"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Maniche ?",
    options: ["Trou-du-Nord", "Savanette", "Camp-Perrin", "Ennery"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Arniquet ?",
    options: ["Dame-Marie", "Kenscoff", "Saint-Jean-du-Sud", "Trou-du-Nord"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Roche-à-Bateau ?",
    options: ["Thomazeau", "Fort-Liberté", "Aquin", "Desdunes"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Roche-à-Bateau ?",
    options: ["Chambellan", "Maniche", "Plaisance", "Milot"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Roche-à-Bateau ?",
    options: ["Petit-Trou-de-Nippes", "Aquin", "Pointe-à-Raquette", "Terre-Neuve"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Arniquet ?",
    options: ["Grand-Goâve", "Camp-Coq", "Roche-à-Bateau", "Anse-à-Veau"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Chantal ?",
    options: ["Arnaud", "Chardonnières", "L'Estère", "Arcahaie"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Saint-Jean-du-Sud ?",
    options: ["Saut-d'Eau", "Petite-Rivière-de-l'Artibonite", "Trou-du-Nord", "Chardonnières"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Aquin ?",
    options: ["Saint-Louis-du-Sud", "Liancourt", "Roseaux", "Jacmel"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Saint-Louis-du-Sud ?",
    options: ["Arniquet", "Fonds-Verrettes", "Trou-Bonbon", "Môle-Saint-Nicolas"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Aquin ?",
    options: ["Saint-Jean-du-Sud", "Bahon", "Bombardopolis", "Belladère"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Chantal ?",
    options: ["L'Acul-des-Pins", "Arnaud", "Maniche", "Limonade"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Roche-à-Bateau ?",
    options: ["Belle-Anse", "Jean-Rabel", "Moron", "Maniche"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Camp-Perrin ?",
    options: ["Anse-à-Pitre", "Carice", "Saint-Jean-du-Sud", "Arnaud"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Port-Salut ?",
    options: ["La Tortue", "Croix-des-Bouquets", "Maniche", "Beaumont"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Arniquet ?",
    options: ["Chantal", "Boucan-Carré", "Trou-Bonbon", "Saint-Louis-du-Nord"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Port-Salut ?",
    options: ["Chantal", "Pestel", "Chansolme", "Jacmel"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Maniche ?",
    options: ["Bahon", "Pestel", "Petit-Goâve", "Torbeck"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Port-Salut ?",
    options: ["Arniquet", "Anse-à-Veau", "Baie-de-Henne", "Baradères"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Saint-Jean-du-Sud ?",
    options: ["Desdunes", "Belladère", "Arniquet", "Léogâne"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Maniche ?",
    options: ["Petite-Rivière-de-l'Artibonite", "Plaisance", "Chansolme", "Roche-à-Bateau"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Côteaux ?",
    options: ["Baradères", "Camp-Perrin", "Belle-Anse", "La Chapelle"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Camp-Perrin ?",
    options: ["Saint-Louis-du-Sud", "Côtes-de-Fer", "Grand-Bassin", "Kenscoff"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Aquin ?",
    options: ["Jérémie", "Roche-à-Bateau", "Maïssade", "Belladère"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Maniche ?",
    options: ["Torbeck", "Pétion-Ville", "Delmas", "Les Irois"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Maniche ?",
    options: ["Cap-Haïtien", "Camp-Perrin", "Plaisance", "Pestel"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Les Cayes ?",
    options: ["Beaumont", "Acul-du-Nord", "Côteaux", "Carrefour"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Chardonnières ?",
    options: ["Les Cayes", "Cité Soleil", "Caracol", "Milot"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Saint-Jean-du-Sud ?",
    options: ["Roche-à-Bateau", "Lascahobas", "Croix-des-Bouquets", "Côtes-de-Fer"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Saint-Jean-du-Sud ?",
    options: ["Acul-du-Nord", "Côteaux", "Trou-du-Nord", "Roseaux"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Arniquet ?",
    options: ["Montrouis", "Saint-Marc", "Camp-Perrin", "Maïssade"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Chantal ?",
    options: ["Beaumont", "Roseaux", "Saint-Louis-du-Sud", "Saut-d'Eau"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Chantal ?",
    options: ["Miragoâne", "Torbeck", "Thiotte", "Sainte-Suzanne"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Torbeck ?",
    options: ["Aquin", "Grand-Boucan", "Mombin-Crochu", "Les Irois"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Roche-à-Bateau ?",
    options: ["Chardonnières", "Cornillon", "Perches", "Bainet"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Roche-à-Bateau ?",
    options: ["Grand-Goâve", "Port-Salut", "Cap-Haïtien", "Cerca-la-Source"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Camp-Perrin ?",
    options: ["L'Acul-des-Pins", "Fonds-des-Nègres", "Petit-Goâve", "Torbeck"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Torbeck ?",
    options: ["Bassin-Bleu", "Roche-à-Bateau", "Tabarre", "Montrouis"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Chantal ?",
    options: ["Boucan-Carré", "Baie-de-Henne", "Torbeck", "Roseaux"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Chantal ?",
    options: ["Gros-Morne", "Chambellan", "Aquin", "Perches"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Chardonnières ?",
    options: ["Jérémie", "Dame-Marie", "Port-à-Piment", "Fonds-Verrettes"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Chantal ?",
    options: ["Arniquet", "Jacmel", "Liancourt", "Pilate"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Saint-Louis-du-Sud ?",
    options: ["Plaisance-du-Sud", "Chardonnières", "Kenscoff", "Saint-Marc"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Côteaux ?",
    options: ["Port-de-Paix", "Chantal", "Lascahobas", "Dame-Marie"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Chardonnières ?",
    options: ["L'Acul-des-Pins", "Terrier-Rouge", "Roseaux", "Camp-Perrin"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Camp-Perrin ?",
    options: ["Port-au-Prince", "Cité Soleil", "Arniquet", "Cabaret"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Roche-à-Bateau ?",
    options: ["Port-à-Piment", "Tabarre", "Miragoâne", "La Vallée-de-Jacmel"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Aquin ?",
    options: ["Saint-Louis-du-Sud", "Anse-d'Hainault", "Bahon", "Cornillon"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Port-à-Piment ?",
    options: ["Dondon", "Les Cayes", "Thomazeau", "Thomassique"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Port-Salut ?",
    options: ["Camp-Perrin", "Liancourt", "Terrier-Rouge", "Roseaux"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Arniquet ?",
    options: ["L'Estère", "Borgne", "Tabarre", "Torbeck"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Chardonnières ?",
    options: ["Trou-Bonbon", "Liancourt", "Saint-Jean-du-Sud", "Cornillon"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Les Cayes ?",
    options: ["Côtes-de-Fer", "Saint-Louis-du-Nord", "Port-au-Prince", "Port-Salut"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Côteaux ?",
    options: ["Saint-Louis-du-Sud", "Terrier-Rouge", "Chansolme", "Belladère"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Roche-à-Bateau ?",
    options: ["Saint-Louis-du-Sud", "Sainte-Suzanne", "Desdunes", "Les Irois"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Aquin ?",
    options: ["Chantal", "Cap-Haïtien", "Pointe-à-Raquette", "Grand-Gosier"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Chantal ?",
    options: ["Côteaux", "Trou-du-Nord", "Acul-du-Nord", "Dessalines"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Torbeck ?",
    options: ["Boucan-Carré", "Côteaux", "Sainte-Suzanne", "L'Estère"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Les Cayes ?",
    options: ["Arniquet", "Montrouis", "Grand-Goâve", "Petit-Goâve"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Saint-Louis-du-Sud ?",
    options: ["Gros-Morne", "Torbeck", "Cité Soleil", "Liancourt"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Chardonnières ?",
    options: ["Port-Salut", "Cerca-Carvajal", "Camp-Coq", "Gros-Morne"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Maniche ?",
    options: ["Port-Margot", "Verrettes", "Torbeck", "Bainet"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Camp-Perrin ?",
    options: ["Bainet", "Port-Salut", "Jacmel", "Pestel"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Port-à-Piment ?",
    options: ["Pilate", "Saint-Louis-du-Sud", "Fonds-des-Nègres", "Cerca-Carvajal"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Côteaux ?",
    options: ["Delmas", "Ouanaminthe", "Petit-Trou-de-Nippes", "Saint-Jean-du-Sud"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Torbeck ?",
    options: ["Cerca-la-Source", "Chambellan", "Saint-Marc", "Maniche"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Torbeck ?",
    options: ["Port-au-Prince", "Carice", "Pointe-à-Raquette", "Chardonnières"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Maniche ?",
    options: ["Sainte-Suzanne", "Chardonnières", "Léogâne", "Port-Margot"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Camp-Perrin ?",
    options: ["La Chapelle", "Saint-Louis-du-Sud", "Marmelade", "Capotille"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Saint-Louis-du-Sud ?",
    options: ["L'Asile", "Port-Salut", "Paillant", "Baie-de-Henne"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Côteaux ?",
    options: ["Plaine-du-Nord", "Trou-Bonbon", "Les Cayes", "Grand-Gosier"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Chardonnières ?",
    options: ["Cerca-la-Source", "Plaisance-du-Sud", "Jacmel", "Torbeck"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Maniche ?",
    options: ["Hinche", "Plaine-du-Nord", "Ennery", "Côteaux"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Camp-Perrin ?",
    options: ["Grand-Goâve", "Môle-Saint-Nicolas", "Saint-Jean-du-Sud", "Kenscoff"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Camp-Perrin ?",
    options: ["Grand-Boucan", "Chardonnières", "La Vallée-de-Jacmel", "Carrefour"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Chardonnières ?",
    options: ["Saint-Jean-du-Sud", "Bainet", "Arnaud", "Bahon"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Les Cayes ?",
    options: ["Jean-Rabel", "Bassin-Bleu", "Camp-Perrin", "Grand-Boucan"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Les Cayes ?",
    options: ["Arniquet", "Thomazeau", "Baie-de-Henne", "Pointe-à-Raquette"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Torbeck ?",
    options: ["Boucan-Carré", "Thomonde", "Verrettes", "Saint-Louis-du-Sud"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Port-à-Piment ?",
    options: ["Terrier-Rouge", "Marigot", "Torbeck", "La Vallée-de-Jacmel"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Torbeck ?",
    options: ["Port-Salut", "Plaisance-du-Sud", "Jean-Rabel", "La Tortue"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Chardonnières ?",
    options: ["Roche-à-Bateau", "Moron", "Perches", "Grand-Bassin"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Saint-Louis-du-Sud ?",
    options: ["Chambellan", "Grand-Boucan", "Maïssade", "Côteaux"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Camp-Perrin ?",
    options: ["Gros-Morne", "Dame-Marie", "Maniche", "Borgne"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Maniche ?",
    options: ["Fort-Liberté", "Saint-Jean-du-Sud", "Terre-Neuve", "Anse-à-Pitre"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Saint-Jean-du-Sud ?",
    options: ["Port-de-Paix", "Torbeck", "Jean-Rabel", "Thomonde"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Chardonnières ?",
    options: ["Les Cayes", "Boucan-Carré", "Port-au-Prince", "Belle-Anse"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Torbeck ?",
    options: ["Port-Margot", "Cornillon", "Maniche", "La Chapelle"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Port-Salut ?",
    options: ["Anse-à-Veau", "Camp-Perrin", "Gros-Morne", "Plaisance-du-Sud"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Chantal ?",
    options: ["Thomassique", "Petit-Goâve", "Chansolme", "Saint-Louis-du-Sud"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Roche-à-Bateau ?",
    options: ["Thomonde", "Saut-d'Eau", "Chantal", "Trou-Bonbon"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Camp-Perrin ?",
    options: ["Carrefour", "Delmas", "Chantal", "Port-Margot"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Chantal ?",
    options: ["Verrettes", "Anse-à-Veau", "Carice", "Roche-à-Bateau"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Maniche ?",
    options: ["Ouanaminthe", "Côteaux", "Thomonde", "Chambellan"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Torbeck ?",
    options: ["Trou-Bonbon", "Boucan-Carré", "Miragoâne", "Côteaux"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Roche-à-Bateau ?",
    options: ["Thomazeau", "Delmas", "Maniche", "Desdunes"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Port-Salut ?",
    options: ["Hinche", "Thomazeau", "Les Cayes", "Petit-Trou-de-Nippes"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Aquin ?",
    options: ["L'Acul-des-Pins", "Saint-Jean-du-Sud", "Fonds-Verrettes", "La Tortue"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Port-Salut ?",
    options: ["Torbeck", "La Tortue", "Camp-Coq", "Anse-d'Hainault"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Chantal ?",
    options: ["Anse-d'Hainault", "Boucan-Carré", "Tabarre", "Saint-Louis-du-Sud"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Maniche ?",
    options: ["Marigot", "Les Cayes", "Grand-Goâve", "L'Estère"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Roche-à-Bateau ?",
    options: ["Borgne", "Léogâne", "Saint-Louis-du-Sud", "L'Estère"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Arniquet ?",
    options: ["Port-Salut", "Grand-Gosier", "Perches", "Bassin-Bleu"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Chantal ?",
    options: ["Vallières", "Saint-Jean-du-Sud", "Mont-Organisé", "L'Asile"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Aquin ?",
    options: ["Tabarre", "Arcahaie", "Roche-à-Bateau", "Kenscoff"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Maniche ?",
    options: ["L'Acul-des-Pins", "Bahon", "Saint-Louis-du-Sud", "Fonds-des-Nègres"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Chantal ?",
    options: ["Montrouis", "Arniquet", "Saint-Louis-du-Nord", "Pestel"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Chardonnières ?",
    options: ["Anse-à-Pitre", "Mombin-Crochu", "Marigot", "Les Cayes"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Port-Salut ?",
    options: ["Cayes-Jacmel", "Chantal", "L'Acul-des-Pins", "Plaine-du-Nord"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Chantal ?",
    options: ["Fonds-des-Nègres", "Ouanaminthe", "Dame-Marie", "Chardonnières"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Chantal ?",
    options: ["Grand-Bassin", "Bassin-Bleu", "Maniche", "Terrier-Rouge"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Saint-Louis-du-Sud ?",
    options: ["Liancourt", "Dame-Marie", "Les Cayes", "Port-Margot"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Aquin ?",
    options: ["Gonaïves", "Maniche", "Saint-Marc", "Thomassique"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Port-Salut ?",
    options: ["Anse-d'Hainault", "Camp-Perrin", "Arcahaie", "Fort-Liberté"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Port-Salut ?",
    options: ["Côteaux", "Maïssade", "Moron", "Chansolme"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Arniquet ?",
    options: ["Milot", "Baie-de-Henne", "Belladère", "Torbeck"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Les Cayes ?",
    options: ["Abricots", "Sainte-Suzanne", "Maniche", "Milot"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Torbeck ?",
    options: ["Gressier", "Port-à-Piment", "Arnaud", "Bombardopolis"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Port-à-Piment ?",
    options: ["Port-Salut", "Mombin-Crochu", "Baradères", "Môle-Saint-Nicolas"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Arniquet ?",
    options: ["Carice", "Jean-Rabel", "Terre-Neuve", "Chardonnières"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Torbeck ?",
    options: ["Port-Salut", "Mombin-Crochu", "Pétion-Ville", "Hinche"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Chardonnières ?",
    options: ["Torbeck", "Grande-Saline", "Sainte-Suzanne", "Pilate"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Port-Salut ?",
    options: ["Saint-Jean-du-Sud", "Thomazeau", "Dame-Marie", "Plaisance-du-Sud"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Camp-Perrin ?",
    options: ["Fonds-des-Nègres", "Petit-Goâve", "Montrouis", "Les Cayes"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Les Cayes ?",
    options: ["Gressier", "Roche-à-Bateau", "Carrefour", "Pétion-Ville"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Port-à-Piment ?",
    options: ["Perches", "Paillant", "Lascahobas", "Port-Salut"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Camp-Perrin ?",
    options: ["Bahon", "Maniche", "Cap-Haïtien", "Fonds-des-Nègres"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Arniquet ?",
    options: ["Tabarre", "L'Estère", "Ganthier", "Chardonnières"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Torbeck ?",
    options: ["Grand-Boucan", "Roche-à-Bateau", "Ganthier", "Marmelade"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Port-à-Piment ?",
    options: ["La Tortue", "Croix-des-Bouquets", "Maniche", "Arcahaie"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Les Cayes ?",
    options: ["Pointe-à-Raquette", "Port-à-Piment", "Chansolme", "Gros-Morne"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Maniche ?",
    options: ["Roseaux", "Dondon", "Port-Salut", "Maïssade"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Port-à-Piment ?",
    options: ["Cerca-la-Source", "Chantal", "Caracol", "Anse-à-Pitre"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Camp-Perrin ?",
    options: ["Chambellan", "L'Estère", "Jean-Rabel", "Saint-Jean-du-Sud"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Arniquet ?",
    options: ["Aquin", "Cerca-la-Source", "Thomazeau", "Delmas"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Port-à-Piment ?",
    options: ["Saint-Michel-de-l'Atalaye", "Grande-Saline", "Saint-Jean-du-Sud", "Arnaud"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Camp-Perrin ?",
    options: ["Pointe-à-Raquette", "Cité Soleil", "Aquin", "Milot"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Port-à-Piment ?",
    options: ["Camp-Perrin", "Grand-Goâve", "Cerca-la-Source", "Acul-du-Nord"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Chardonnières ?",
    options: ["Trou-du-Nord", "Jérémie", "Saint-Jean-du-Sud", "Tabarre"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Roche-à-Bateau ?",
    options: ["Les Cayes", "Camp-Coq", "Carrefour", "Milot"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Torbeck ?",
    options: ["Capotille", "Saint-Louis-du-Sud", "Fonds-Verrettes", "Cerca-la-Source"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Torbeck ?",
    options: ["L'Estère", "Port-Salut", "Thiotte", "Arcahaie"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Côteaux ?",
    options: ["La Vallée-de-Jacmel", "Chantal", "Fonds-Verrettes", "Thiotte"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Arniquet ?",
    options: ["Mont-Organisé", "Côteaux", "Thomassique", "Petite-Rivière-de-l'Artibonite"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Roche-à-Bateau ?",
    options: ["Gros-Morne", "Mont-Organisé", "Chantal", "Côtes-de-Fer"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Saint-Louis-du-Sud ?",
    options: ["Côteaux", "L'Asile", "Chambellan", "Roseaux"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Saint-Jean-du-Sud ?",
    options: ["Grand-Boucan", "Cerca-la-Source", "La Vallée-de-Jacmel", "Chantal"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Maniche ?",
    options: ["Port-Salut", "Boucan-Carré", "Caracol", "Dame-Marie"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Chardonnières ?",
    options: ["Montrouis", "Maniche", "Caracol", "Borgne"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Arniquet ?",
    options: ["Camp-Perrin", "Petite-Rivière-de-l'Artibonite", "Desdunes", "Roseaux"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Chantal ?",
    options: ["Acul-du-Nord", "Torbeck", "Cayes-Jacmel", "Ouanaminthe"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Chantal ?",
    options: ["Baradères", "Chardonnières", "Verrettes", "Dondon"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Aquin ?",
    options: ["Arniquet", "Dame-Marie", "Dondon", "Thomassique"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Chantal ?",
    options: ["Bahon", "Port-Margot", "Cerca-la-Source", "Les Cayes"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Chardonnières ?",
    options: ["Milot", "Saut-d'Eau", "Maniche", "Pétion-Ville"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Côteaux ?",
    options: ["Port-à-Piment", "Saint-Louis-du-Nord", "Port-Margot", "Grand-Goâve"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Maniche ?",
    options: ["Beaumont", "Saint-Louis-du-Sud", "Saint-Marc", "Fonds-Verrettes"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Saint-Louis-du-Sud ?",
    options: ["Camp-Coq", "Beaumont", "Chardonnières", "Sainte-Suzanne"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Chardonnières ?",
    options: ["Paillant", "La Chapelle", "Thomonde", "Arniquet"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Chantal ?",
    options: ["La Chapelle", "Marigot", "Liancourt", "Arniquet"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Camp-Perrin ?",
    options: ["Kenscoff", "Port-à-Piment", "Grand-Bassin", "Port-de-Paix"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Saint-Jean-du-Sud ?",
    options: ["Aquin", "Beaumont", "Gonaïves", "Côtes-de-Fer"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Roche-à-Bateau ?",
    options: ["Saint-Louis-du-Sud", "Marmelade", "Carice", "Bassin-Bleu"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Port-Salut ?",
    options: ["Arnaud", "Desdunes", "Camp-Perrin", "Sainte-Suzanne"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Saint-Jean-du-Sud ?",
    options: ["Baradères", "Léogâne", "Grande-Saline", "Arniquet"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Chardonnières ?",
    options: ["Thomazeau", "Corail", "Torbeck", "Ganthier"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Saint-Jean-du-Sud ?",
    options: ["Port-Salut", "Chansolme", "Savanette", "L'Asile"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Roche-à-Bateau ?",
    options: ["Fonds-des-Nègres", "Chantal", "Borgne", "Verrettes"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Côteaux ?",
    options: ["Carrefour", "Saint-Marc", "Croix-des-Bouquets", "Les Cayes"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Aquin ?",
    options: ["Léogâne", "Saint-Louis-du-Sud", "Cerca-Carvajal", "Jacmel"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Saint-Louis-du-Sud ?",
    options: ["Thomonde", "Ennery", "Camp-Perrin", "Marigot"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Aquin ?",
    options: ["Môle-Saint-Nicolas", "Les Cayes", "Ganthier", "Anse-à-Pitre"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Maniche ?",
    options: ["Les Cayes", "Plaisance-du-Sud", "La Chapelle", "Capotille"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Port-Salut ?",
    options: ["Port-à-Piment", "Cornillon", "Mombin-Crochu", "Mirebalais"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Maniche ?",
    options: ["L'Asile", "Port-Salut", "Caracol", "Verrettes"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Saint-Louis-du-Sud ?",
    options: ["Sainte-Suzanne", "Côteaux", "Cerca-la-Source", "Carice"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Côteaux ?",
    options: ["Carice", "Aquin", "Kenscoff", "Dondon"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Torbeck ?",
    options: ["Cerca-Carvajal", "Arnaud", "Boucan-Carré", "Aquin"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Chantal ?",
    options: ["Pointe-à-Raquette", "Capotille", "Grand-Bassin", "Côteaux"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Les Cayes ?",
    options: ["Savanette", "Torbeck", "Cap-Haïtien", "Belladère"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Torbeck ?",
    options: ["Port-à-Piment", "Savanette", "Petite-Rivière-de-l'Artibonite", "Croix-des-Bouquets"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Maniche ?",
    options: ["Kenscoff", "Vallières", "Maïssade", "Port-à-Piment"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Maniche ?",
    options: ["Bahon", "La Tortue", "Torbeck", "Beaumont"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Torbeck ?",
    options: ["Bombardopolis", "Môle-Saint-Nicolas", "Thomazeau", "Roche-à-Bateau"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Torbeck ?",
    options: ["Maniche", "Cabaret", "La Tortue", "Bahon"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Les Cayes ?",
    options: ["Saint-Louis-du-Sud", "Saint-Michel-de-l'Atalaye", "Saut-d'Eau", "Cornillon"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Saint-Jean-du-Sud ?",
    options: ["Aquin", "Trou-du-Nord", "Grand-Goâve", "Abricots"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Arniquet ?",
    options: ["Maniche", "Saint-Marc", "Léogâne", "Bassin-Bleu"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Port-à-Piment ?",
    options: ["Grand-Boucan", "Abricots", "Thomassique", "Port-Salut"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Arniquet ?",
    options: ["La Vallée-de-Jacmel", "Port-Salut", "Terrier-Rouge", "Jérémie"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Saint-Jean-du-Sud ?",
    options: ["L'Acul-des-Pins", "Saint-Louis-du-Nord", "Vallières", "Camp-Perrin"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Arniquet ?",
    options: ["Petite-Rivière-de-l'Artibonite", "Dessalines", "Capotille", "Camp-Perrin"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Côteaux ?",
    options: ["Saint-Jean-du-Sud", "Belle-Anse", "Mont-Organisé", "Grand-Gosier"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Saint-Jean-du-Sud ?",
    options: ["Jacmel", "La Tortue", "Ouanaminthe", "Torbeck"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Aquin ?",
    options: ["Liancourt", "Maniche", "Abricots", "Bassin-Bleu"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Saint-Louis-du-Sud ?",
    options: ["Thomazeau", "Paillant", "Corail", "Port-à-Piment"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Roche-à-Bateau ?",
    options: ["Maïssade", "Tabarre", "Côteaux", "L'Estère"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Saint-Jean-du-Sud ?",
    options: ["Sainte-Suzanne", "Chantal", "Chansolme", "Milot"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Chardonnières ?",
    options: ["Port-à-Piment", "Vallières", "Les Irois", "Boucan-Carré"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Port-Salut ?",
    options: ["Saint-Louis-du-Nord", "Cerca-Carvajal", "Saint-Louis-du-Sud", "Camp-Coq"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Saint-Louis-du-Sud ?",
    options: ["Tabarre", "Gressier", "Verrettes", "Côteaux"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Maniche ?",
    options: ["Corail", "Les Cayes", "Acul-du-Nord", "Baie-de-Henne"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Chantal ?",
    options: ["Les Irois", "Baradères", "Milot", "Port-à-Piment"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Port-à-Piment ?",
    options: ["Miragoâne", "Grande-Saline", "Saint-Jean-du-Sud", "Verrettes"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Saint-Louis-du-Sud ?",
    options: ["Lascahobas", "Pointe-à-Raquette", "Mirebalais", "Chantal"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Arniquet ?",
    options: ["Anse-à-Pitre", "Port-Salut", "Vallières", "Montrouis"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Saint-Jean-du-Sud ?",
    options: ["Lascahobas", "Capotille", "Grand-Gosier", "Saint-Louis-du-Sud"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Chardonnières ?",
    options: ["Les Irois", "Belladère", "La Tortue", "Torbeck"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Camp-Perrin ?",
    options: ["Saint-Jean-du-Sud", "L'Asile", "Cayes-Jacmel", "Plaisance"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Aquin ?",
    options: ["Port-Margot", "Thomonde", "Beaumont", "Maniche"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Côteaux ?",
    options: ["Cité Soleil", "Camp-Perrin", "Plaisance", "Miragoâne"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Torbeck ?",
    options: ["Saint-Jean-du-Sud", "Fonds-Verrettes", "Les Irois", "Cornillon"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Terre-Neuve ?",
    options: ["Montrouis", "Mombin-Crochu", "Cap-Haïtien", "Acul-du-Nord"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Liancourt ?",
    options: ["Saint-Michel-de-l'Atalaye", "Arnaud", "Léogâne", "Caracol"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Grande-Saline ?",
    options: ["Sainte-Suzanne", "Fort-Liberté", "Pétion-Ville", "Saint-Michel-de-l'Atalaye"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Dessalines ?",
    options: ["Acul-du-Nord", "Terre-Neuve", "Corail", "Tabarre"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Saint-Marc ?",
    options: ["Capotille", "Borgne", "Ennery", "Chardonnières"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Terre-Neuve ?",
    options: ["Côteaux", "Bassin-Bleu", "Grande-Saline", "Cabaret"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Saint-Marc ?",
    options: ["Roseaux", "Pilate", "Cerca-la-Source", "Dessalines"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Desdunes ?",
    options: ["Jérémie", "Abricots", "Grand-Bassin", "Gonaïves"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Ennery ?",
    options: ["Marmelade", "Bahon", "Plaisance", "Belle-Anse"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Saint-Marc ?",
    options: ["Bassin-Bleu", "Cornillon", "Aquin", "L'Estère"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Gonaïves ?",
    options: ["Cabaret", "Bainet", "Miragoâne", "Saint-Marc"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Montrouis ?",
    options: ["Desdunes", "Savanette", "Plaisance", "Petit-Trou-de-Nippes"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Gonaïves ?",
    options: ["Verrettes", "La Vallée-de-Jacmel", "Maïssade", "Arnaud"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Ennery ?",
    options: ["Chardonnières", "Thomonde", "Camp-Perrin", "Dessalines"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que La Chapelle ?",
    options: ["Port-au-Prince", "Anse-d'Hainault", "Gros-Morne", "Chantal"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Marmelade ?",
    options: ["Pestel", "Tabarre", "Torbeck", "Grande-Saline"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Gros-Morne ?",
    options: ["Camp-Perrin", "Terre-Neuve", "Plaisance", "Cabaret"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Terre-Neuve ?",
    options: ["Marmelade", "Acul-du-Nord", "Perches", "Carice"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Terre-Neuve ?",
    options: ["Bassin-Bleu", "Trou-Bonbon", "Les Cayes", "Dessalines"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Marmelade ?",
    options: ["Paillant", "Desdunes", "Boucan-Carré", "Bassin-Bleu"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Dessalines ?",
    options: ["Beaumont", "L'Estère", "Thomonde", "La Vallée-de-Jacmel"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Desdunes ?",
    options: ["Croix-des-Bouquets", "Terre-Neuve", "Thiotte", "Fort-Liberté"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Gonaïves ?",
    options: ["Chardonnières", "La Tortue", "Cité Soleil", "Desdunes"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Saint-Michel-de-l'Atalaye ?",
    options: ["Gros-Morne", "Bahon", "Perches", "Côteaux"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Gonaïves ?",
    options: ["Ganthier", "Arniquet", "Terre-Neuve", "Ouanaminthe"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Petite-Rivière-de-l'Artibonite ?",
    options: ["Cabaret", "Montrouis", "Perches", "Port-à-Piment"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Montrouis ?",
    options: ["Grande-Saline", "Saint-Jean-du-Sud", "Pétion-Ville", "Grand-Goâve"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Montrouis ?",
    options: ["Carrefour", "Terrier-Rouge", "Pétion-Ville", "Gonaïves"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Saint-Michel-de-l'Atalaye ?",
    options: ["Chantal", "Miragoâne", "La Vallée-de-Jacmel", "Marmelade"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Gonaïves ?",
    options: ["Les Irois", "Plaisance-du-Sud", "Gros-Morne", "Saint-Louis-du-Sud"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Petite-Rivière-de-l'Artibonite ?",
    options: ["Mont-Organisé", "Terre-Neuve", "Saut-d'Eau", "Roseaux"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Montrouis ?",
    options: ["Verrettes", "Belle-Anse", "Gressier", "Arniquet"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que La Chapelle ?",
    options: ["Montrouis", "Cap-Haïtien", "Hinche", "Saint-Louis-du-Sud"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Saint-Michel-de-l'Atalaye ?",
    options: ["Verrettes", "La Tortue", "Port-Margot", "Milot"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Dessalines ?",
    options: ["Grand-Goâve", "Baradères", "Grande-Saline", "Delmas"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Dessalines ?",
    options: ["Môle-Saint-Nicolas", "Terre-Neuve", "Port-Margot", "Plaine-du-Nord"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Saint-Michel-de-l'Atalaye ?",
    options: ["Gressier", "L'Asile", "Pilate", "L'Estère"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Grande-Saline ?",
    options: ["Thiotte", "Plaisance-du-Sud", "Ennery", "Limonade"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Liancourt ?",
    options: ["Camp-Coq", "Pointe-à-Raquette", "Gros-Morne", "Léogâne"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Liancourt ?",
    options: ["Les Irois", "Chardonnières", "L'Acul-des-Pins", "Montrouis"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Verrettes ?",
    options: ["Ennery", "Sainte-Suzanne", "L'Asile", "Camp-Coq"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Montrouis ?",
    options: ["Pilate", "Dessalines", "Plaine-du-Nord", "Moron"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Desdunes ?",
    options: ["Perches", "Liancourt", "Anse-à-Veau", "Trou-du-Nord"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Petite-Rivière-de-l'Artibonite ?",
    options: ["Anse-à-Pitre", "Petit-Goâve", "Côtes-de-Fer", "Saint-Michel-de-l'Atalaye"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Marmelade ?",
    options: ["Grande-Saline", "Tabarre", "Limonade", "Caracol"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Ennery ?",
    options: ["Cabaret", "Miragoâne", "Môle-Saint-Nicolas", "La Chapelle"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Gonaïves ?",
    options: ["Les Irois", "Grand-Gosier", "Verrettes", "Cornillon"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que La Chapelle ?",
    options: ["Cayes-Jacmel", "La Tortue", "Gressier", "Desdunes"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Marmelade ?",
    options: ["Bassin-Bleu", "Ennery", "Dame-Marie", "Cayes-Jacmel"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Dessalines ?",
    options: ["Port-au-Prince", "Savanette", "Terrier-Rouge", "L'Estère"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Ennery ?",
    options: ["Chambellan", "Fort-Liberté", "Terre-Neuve", "Grand-Boucan"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Montrouis ?",
    options: ["Thiotte", "Dessalines", "Cerca-la-Source", "Gressier"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Gros-Morne ?",
    options: ["Bombardopolis", "Desdunes", "Baradères", "Paillant"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Verrettes ?",
    options: ["Cornillon", "Dame-Marie", "Carrefour", "Gros-Morne"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Ennery ?",
    options: ["Trou-Bonbon", "L'Estère", "Belladère", "Grand-Goâve"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Gonaïves ?",
    options: ["Bainet", "Liancourt", "Corail", "Jacmel"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Marmelade ?",
    options: ["Verrettes", "Carice", "Aquin", "Boucan-Carré"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que La Chapelle ?",
    options: ["Maniche", "Grande-Saline", "Grand-Goâve", "Thomazeau"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Saint-Marc ?",
    options: ["Plaine-du-Nord", "Trou-du-Nord", "Camp-Perrin", "Gonaïves"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Liancourt ?",
    options: ["Gros-Morne", "Borgne", "Môle-Saint-Nicolas", "Chardonnières"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Marmelade ?",
    options: ["Grande-Saline", "Dondon", "Thomazeau", "Cayes-Jacmel"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Dessalines ?",
    options: ["Maniche", "Terrier-Rouge", "Grand-Boucan", "Petite-Rivière-de-l'Artibonite"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Marmelade ?",
    options: ["Pétion-Ville", "Trou-du-Nord", "Liancourt", "Saut-d'Eau"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Petite-Rivière-de-l'Artibonite ?",
    options: ["Chardonnières", "La Chapelle", "Léogâne", "Port-Margot"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Marmelade ?",
    options: ["Abricots", "Ennery", "Chansolme", "Beaumont"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Verrettes ?",
    options: ["Ennery", "Cité Soleil", "Grand-Goâve", "Sainte-Suzanne"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Marmelade ?",
    options: ["L'Estère", "Perches", "Thomonde", "Cabaret"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Terre-Neuve ?",
    options: ["Pilate", "Ennery", "Saint-Louis-du-Sud", "Thiotte"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Petite-Rivière-de-l'Artibonite ?",
    options: ["Dame-Marie", "Chantal", "Dessalines", "Fort-Liberté"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Saint-Marc ?",
    options: ["Hinche", "Pétion-Ville", "Côtes-de-Fer", "Gros-Morne"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Gonaïves ?",
    options: ["Baie-de-Henne", "Port-Margot", "Petite-Rivière-de-l'Artibonite", "Fonds-Verrettes"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Terre-Neuve ?",
    options: ["Marmelade", "Corail", "Arnaud", "Chardonnières"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Gonaïves ?",
    options: ["Camp-Coq", "Les Cayes", "Saint-Michel-de-l'Atalaye", "Acul-du-Nord"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Montrouis ?",
    options: ["Saint-Michel-de-l'Atalaye", "Môle-Saint-Nicolas", "Fort-Liberté", "Belladère"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Liancourt ?",
    options: ["Arcahaie", "Acul-du-Nord", "L'Asile", "Montrouis"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que La Chapelle ?",
    options: ["Les Irois", "Cerca-Carvajal", "Liancourt", "Caracol"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Terre-Neuve ?",
    options: ["Saint-Louis-du-Sud", "Saint-Marc", "Fonds-des-Nègres", "Sainte-Suzanne"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que L'Estère ?",
    options: ["Carice", "Plaisance", "Grande-Saline", "Cayes-Jacmel"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Saint-Marc ?",
    options: ["Pilate", "Beaumont", "Milot", "Saint-Michel-de-l'Atalaye"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Saint-Marc ?",
    options: ["Carrefour", "Petite-Rivière-de-l'Artibonite", "Jacmel", "Bombardopolis"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Verrettes ?",
    options: ["Thomonde", "Grand-Bassin", "Acul-du-Nord", "Gonaïves"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que La Chapelle ?",
    options: ["Dessalines", "Anse-à-Pitre", "Saint-Louis-du-Nord", "Maniche"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Liancourt ?",
    options: ["Ennery", "Torbeck", "La Tortue", "Corail"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Saint-Michel-de-l'Atalaye ?",
    options: ["Grand-Boucan", "Ennery", "Grand-Goâve", "Beaumont"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Petite-Rivière-de-l'Artibonite ?",
    options: ["Delmas", "Tabarre", "Liancourt", "Savanette"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Liancourt ?",
    options: ["Belle-Anse", "Ennery", "Port-de-Paix", "Chantal"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Grande-Saline ?",
    options: ["Anse-à-Veau", "Roseaux", "Dame-Marie", "Desdunes"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Gonaïves ?",
    options: ["Marmelade", "Les Cayes", "Grand-Gosier", "Arniquet"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Liancourt ?",
    options: ["La Vallée-de-Jacmel", "Montrouis", "Savanette", "Port-à-Piment"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Liancourt ?",
    options: ["Roche-à-Bateau", "Cité Soleil", "Pointe-à-Raquette", "Verrettes"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Grande-Saline ?",
    options: ["Maïssade", "Port-de-Paix", "Côtes-de-Fer", "Saint-Marc"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que L'Estère ?",
    options: ["Camp-Perrin", "Marigot", "Verrettes", "Chansolme"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Verrettes ?",
    options: ["Saint-Marc", "Capotille", "Savanette", "Milot"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Dessalines ?",
    options: ["Pointe-à-Raquette", "Tabarre", "Croix-des-Bouquets", "Saint-Marc"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que La Chapelle ?",
    options: ["Mombin-Crochu", "Miragoâne", "Ennery", "Pestel"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Montrouis ?",
    options: ["Arcahaie", "La Tortue", "Terre-Neuve", "Maniche"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Saint-Michel-de-l'Atalaye ?",
    options: ["Gonaïves", "Moron", "Vallières", "Arcahaie"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Gros-Morne ?",
    options: ["Marmelade", "Maniche", "Cité Soleil", "Carice"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Ennery ?",
    options: ["Delmas", "Borgne", "Beaumont", "Liancourt"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Marmelade ?",
    options: ["Belladère", "Grand-Goâve", "Saint-Michel-de-l'Atalaye", "Arcahaie"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que La Chapelle ?",
    options: ["Grand-Goâve", "Arnaud", "Grande-Saline", "Miragoâne"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Liancourt ?",
    options: ["Grand-Gosier", "Môle-Saint-Nicolas", "Roche-à-Bateau", "Gonaïves"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Petite-Rivière-de-l'Artibonite ?",
    options: ["Gonaïves", "Capotille", "Plaisance-du-Sud", "Léogâne"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Marmelade ?",
    options: ["Saint-Jean-du-Sud", "L'Asile", "Saint-Marc", "Savanette"],
    correct: 2
  },
  {
    q: "Quelle ville est située dans le même département que Verrettes ?",
    options: ["Petite-Rivière-de-l'Artibonite", "Dondon", "Grand-Bassin", "Acul-du-Nord"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Desdunes ?",
    options: ["Terre-Neuve", "La Vallée-de-Jacmel", "Cerca-la-Source", "Roseaux"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Petite-Rivière-de-l'Artibonite ?",
    options: ["Torbeck", "Grande-Saline", "Miragoâne", "Perches"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Montrouis ?",
    options: ["Mirebalais", "Ennery", "Maniche", "Hinche"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Gros-Morne ?",
    options: ["Liancourt", "Maniche", "Corail", "Cité Soleil"],
    correct: 0
  },
  {
    q: "Quelle ville est située dans le même département que Dessalines ?",
    options: ["Abricots", "La Chapelle", "Vallières", "Beaumont"],
    correct: 1
  },
  {
    q: "Quelle ville est située dans le même département que Verrettes ?",
    options: ["Marigot", "Anse-à-Veau", "Roseaux", "Montrouis"],
    correct: 3
  },
  {
    q: "Quelle ville est située dans le même département que Verrettes ?",
    options: ["Port-Salut", "Gros-Morne", "Arniquet", "Saint-Louis-du-Nord"],
    correct: 1
  },
]

export default geographieQuestions
