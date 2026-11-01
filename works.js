/* Programme national — Première générale 2026-2027
   Les parcours sont ceux du Bulletin officiel du 24 juillet 2025. */

const works = [
  {
    id:"chevalier-charrette", group:"roman", groupLabel:"Roman et récit",
    title:"Le Chevalier de la charrette", author:"Chrétien de Troyes",
    period:"Moyen Âge", parcours:"Le roman et l'invention de l'amour",
    note:"Édition bilingue",
    description:"Un roman médiéval qui met en scène Lancelot et son parcours chevaleresque, au cœur d'une réflexion sur l'amour et les valeurs de la chevalerie.",
    repere:"Roman courtois médiéval",
    themes:["Amour courtois","Chevalerie","Honneur","Épreuve et quête"],
    quiz:[
      {q:"À quel univers littéraire cette œuvre appartient-elle ?",a:["Au roman courtois médiéval","Au théâtre classique","À la poésie symboliste"],c:0,e:"L'œuvre appartient à la littérature médiévale et au roman courtois."},
      {q:"Quel personnage est au centre du récit ?",a:["Tartuffe","Lancelot","Candide"],c:1,e:"Lancelot est le chevalier au cœur de l'aventure."},
      {q:"Quel est le parcours associé ?",a:["Mensonge et comédie","Le roman et l'invention de l'amour","L'atelier du poète"],c:1,e:"Le parcours officiel est « Le roman et l'invention de l'amour »."}
    ]
  },
  {
    id:"pot-bouille", group:"roman", groupLabel:"Roman et récit",
    title:"Pot-Bouille", author:"Émile Zola", period:"XIXe siècle",
    parcours:"Dévoiler les rouages de la société",
    description:"Un roman naturaliste qui observe les habitants d'un immeuble parisien et dévoile les conventions, les ambitions et les hypocrisies de la bourgeoisie.",
    repere:"Naturalisme · XIXe siècle",
    themes:["Bourgeoisie","Hypocrisie sociale","Argent et ambition","Apparences"]
  },
  {
    id:"pluie-vent", group:"roman", groupLabel:"Roman et récit",
    title:"Pluie et vent sur Télumée Miracle", author:"Simone Schwarz-Bart",
    period:"XXe siècle",
    parcours:"Tisser les mémoires, habiter le monde",
    description:"Un roman qui suit le parcours de Télumée et fait entendre des mémoires, des expériences et des voix liées à la société antillaise.",
    repere:"Roman contemporain",
    themes:["Mémoire","Transmission","Identité","Résilience"]
  },
  {
    id:"servitude-volontaire", group:"idees", groupLabel:"Littérature d'idées",
    title:"Discours de la servitude volontaire", author:"Étienne de La Boétie",
    period:"XVIe siècle",
    parcours:"« Défendre » et « entretenir » la liberté",
    description:"Un texte argumentatif qui interroge le pouvoir d'un seul homme et la manière dont les peuples peuvent contribuer à leur propre soumission.",
    repere:"Humanisme · XVIe siècle",
    themes:["Liberté","Pouvoir","Obéissance","Tyrannie"]
  },
  {
    id:"entretiens-pluralite", group:"idees", groupLabel:"Littérature d'idées",
    title:"Entretiens sur la pluralité des mondes", author:"Bernard Le Bouyer de Fontenelle",
    period:"XVIIe siècle",
    parcours:"Le goût de la science",
    description:"Une œuvre de vulgarisation qui rend accessibles des idées scientifiques et invite à exercer sa curiosité et son esprit critique.",
    repere:"Vulgarisation scientifique",
    themes:["Science","Raison","Curiosité","Esprit critique"]
  },
  {
    id:"lettres-peruvienne", group:"idees", groupLabel:"Littérature d'idées",
    title:"Lettres d'une Péruvienne", author:"Françoise de Graffigny",
    period:"XVIIIe siècle · 1747",
    parcours:"« Un nouvel univers s'est offert à mes yeux »",
    note:"Inclure l'introduction historique et les lettres XXVIII, XXIX, XXX et XXXIV de l'édition augmentée de 1752.",
    description:"Zilia, jeune Péruvienne séparée de son pays et de son fiancé Aza, découvre la société française. À travers ses lettres, son regard extérieur permet de questionner les habitudes, les inégalités et la condition des femmes.",
    repere:"Roman épistolaire · Lumières",
    themes:["Condition féminine","Liberté et indépendance","Regard étranger","Critique sociale","Altérité"]
  },
  {
    id:"menteur", group:"theatre", groupLabel:"Théâtre",
    title:"Le Menteur", author:"Pierre Corneille", period:"XVIIe siècle",
    parcours:"Mensonge et comédie",
    description:"Une comédie construite autour des inventions et des mensonges de Dorante, qui provoquent quiproquos et complications.",
    repere:"Comédie classique",
    themes:["Mensonge","Apparences","Identité","Quiproquos"]
  },
  {
    id:"badine-amour", group:"theatre", groupLabel:"Théâtre",
    title:"On ne badine pas avec l'amour", author:"Alfred de Musset",
    period:"XIXe siècle",
    parcours:"Les jeux du cœur et de la parole",
    description:"Une pièce où les sentiments, l'orgueil et les jeux de parole entraînent les personnages dans une relation douloureuse.",
    repere:"Drame romantique",
    themes:["Amour","Orgueil","Parole","Jeux de pouvoir"]
  },
  {
    id:"pour-un-oui", group:"theatre", groupLabel:"Théâtre",
    title:"Pour un oui ou pour un non", author:"Nathalie Sarraute",
    period:"XXe siècle",
    parcours:"Théâtre et dispute",
    description:"Une pièce centrée sur une dispute entre deux personnages, déclenchée par des mots et des nuances de langage en apparence insignifiants.",
    repere:"Théâtre contemporain",
    themes:["Langage","Conflit","Non-dits","Relations humaines"]
  },
  {
    id:"cahier-douai", group:"poesie", groupLabel:"Poésie",
    title:"Cahier de Douai", author:"Arthur Rimbaud", period:"XIXe siècle",
    parcours:"Émancipations créatrices",
    note:"22 poèmes, de « Première soirée » à « Ma Bohème (Fantaisie) ».",
    description:"Un ensemble de poèmes de jeunesse où Rimbaud explore notamment la liberté, la nature, les sensations et le désir d'émancipation.",
    repere:"Poésie du XIXe siècle",
    themes:["Liberté","Nature","Jeunesse","Émancipation"]
  },
  {
    id:"rage-expression", group:"poesie", groupLabel:"Poésie",
    title:"La rage de l'expression", author:"Francis Ponge", period:"XXe siècle",
    parcours:"Dans l'atelier du poète",
    description:"Une œuvre qui donne à voir le travail poétique en train de se faire : observer les choses, chercher les mots et reprendre l'écriture.",
    repere:"Poésie contemporaine",
    themes:["Écriture","Langage","Observation","Création poétique"]
  },
  {
    id:"mes-forets", group:"poesie", groupLabel:"Poésie",
    title:"Mes forêts", author:"Hélène Dorion", period:"XXIe siècle",
    parcours:"La poésie, la nature, l'intime",
    description:"Un recueil qui tisse des liens entre la nature, le monde intérieur et les interrogations humaines.",
    repere:"Poésie contemporaine",
    themes:["Nature","Intime","Temps","Monde vivant"]
  }
];

// Fiches enrichies : synthèses de révision générales à compléter avec l'édition et le cours.
const studySheets = {
  "chevalier-charrette": {
    "summary": [
      "La reine Guenièvre est enlevée par Méléagant. Lancelot se lance à sa recherche et accepte des épreuves qui mettent à l'épreuve son courage et son amour.",
      "Le chevalier poursuit sa quête malgré les humiliations et les dangers. L'épisode de la charrette, véhicule associé à la honte, révèle le conflit entre réputation sociale et amour.",
      "Le récit met en scène les exploits de Lancelot et la tension entre devoir chevaleresque, fidélité au roi Arthur et passion pour Guenièvre. Les épisodes précis doivent être revus dans l'édition étudiée."
    ],
    "figures": [
      "Lancelot : chevalier courageux, entièrement soumis à l'amour de Guenièvre.",
      "Guenièvre : reine aimée, dont l'enlèvement déclenche la quête.",
      "Méléagant : adversaire qui provoque les épreuves et les affrontements.",
      "Gauvain : autre chevalier, qui permet de comparer différentes attitudes chevaleresques."
    ],
    "analysis": [
      "L'amour courtois place la dame au centre de la quête et transforme le service amoureux en moteur de l'action.",
      "La charrette fonctionne comme un symbole de déshonneur : Lancelot accepte de perdre sa réputation pour retrouver la reine.",
      "Les épreuves construisent un héros dont la valeur se mesure autant à sa fidélité qu'à sa force."
    ],
    "bac": [
      "Relier l'aventure chevaleresque à l'invention d'une représentation littéraire de l'amour.",
      "Étudier la tension entre amour privé et devoir public.",
      "Montrer comment les épreuves extérieures révèlent la hiérarchie des valeurs du héros."
    ],
    "oral": [
      "Pourquoi Lancelot accepte-t-il de monter dans la charrette ?",
      "Comment le roman représente-t-il l'amour courtois ?",
      "En quoi la quête amoureuse transforme-t-elle le récit d'aventures ?"
    ]
  },
  "pot-bouille": {
    "summary": [
      "Octave Mouret arrive à Paris et s'installe dans un immeuble bourgeois. Il découvre progressivement les habitants, leurs ambitions, leurs secrets et les règles tacites de leur milieu.",
      "Derrière les façades respectables, les relations sont traversées par l'adultère, l'intérêt matériel, les calculs matrimoniaux et le souci du qu'en-dira-t-on.",
      "L'immeuble devient un microcosme : Zola observe les comportements individuels pour faire apparaître les mécanismes d'une classe sociale. Pour les épisodes et personnages secondaires, suivre l'ordre de votre édition."
    ],
    "figures": [
      "Octave Mouret : jeune homme ambitieux qui cherche à réussir dans le commerce et la société parisienne.",
      "Les habitants de l'immeuble : ensemble de personnages qui incarnent différentes stratégies de respectabilité.",
      "Les femmes de la bourgeoisie : leurs situations permettent d'observer les contraintes sociales et matrimoniales."
    ],
    "analysis": [
      "L'immeuble fonctionne comme un espace d'observation sociale, presque comme un laboratoire.",
      "Le contraste entre façade respectable et vie privée nourrit l'ironie du roman.",
      "Le regard naturaliste relie les comportements aux milieux, aux intérêts et aux déterminismes sociaux."
    ],
    "bac": [
      "Expliquer comment le roman dévoile les rouages d'une société.",
      "Analyser le rôle du lieu collectif et de la circulation des regards.",
      "Relier les destins individuels à la critique de la bourgeoisie."
    ],
    "oral": [
      "Pourquoi l'immeuble peut-il être considéré comme un microcosme ?",
      "Comment Zola oppose-t-il apparence et réalité ?",
      "En quoi le regard naturaliste donne-t-il une portée critique au récit ?"
    ]
  },
  "pluie-vent": {
    "summary": [
      "Télumée raconte son parcours et celui des femmes de sa lignée dans une société antillaise marquée par l'héritage de l'esclavage et les inégalités.",
      "Le récit fait alterner souvenirs personnels, mémoire familiale et mémoire collective. Les expériences transmises façonnent l'identité de la narratrice.",
      "À travers les épreuves, les liens humains, la relation à la terre et la parole des anciens, le roman explore les formes de résistance et de dignité."
    ],
    "figures": [
      "Télumée : narratrice dont la voix donne unité au récit et transmet une mémoire.",
      "Les femmes de sa famille : figures de transmission, de force et de continuité.",
      "Les personnages rencontrés : ils incarnent différentes manières d'affronter les contraintes historiques et sociales."
    ],
    "analysis": [
      "La narration à la première personne associe expérience intime et mémoire collective.",
      "Les images de la nature et des éléments donnent une dimension symbolique au parcours.",
      "La langue mêle oralité, poésie et mémoire culturelle, ce qui donne une voix singulière au récit."
    ],
    "bac": [
      "Étudier comment une histoire individuelle devient mémoire collective.",
      "Analyser la transmission entre générations et la place des voix féminines.",
      "Montrer comment le rapport au monde et à la nature participe à la construction de soi."
    ],
    "oral": [
      "Comment la narration de Télumée transmet-elle une mémoire ?",
      "Quelle place le roman accorde-t-il aux femmes et à la filiation ?",
      "Comment la langue contribue-t-elle à l'identité de l'œuvre ?"
    ]
  },
  "servitude-volontaire": {
    "summary": [
      "La Boétie part d'une interrogation : pourquoi des peuples nombreux acceptent-ils d'obéir à un seul homme ?",
      "Il montre que le tyran ne possède pas une force suffisante par lui-même : son pouvoir dépend des soutiens, des habitudes et des renoncements de ceux qui lui obéissent.",
      "Le texte invite à retrouver le désir de liberté et à comprendre les mécanismes politiques, sociaux et psychologiques qui entretiennent la domination."
    ],
    "figures": [
      "Le tyran : figure du pouvoir concentré, dépendant pourtant de ceux qui le servent.",
      "Le peuple : collectif auquel l'auteur s'adresse pour éveiller la conscience de sa liberté.",
      "Les courtisans et relais du pouvoir : ils prolongent la domination en tirant avantage de leur proximité avec le tyran."
    ],
    "analysis": [
      "La question initiale transforme le lecteur en interlocuteur et donne au texte une force polémique.",
      "Les oppositions entre liberté et servitude structurent le raisonnement.",
      "Les exemples historiques et les images rendent concrète une réflexion politique abstraite.",
      "L'accumulation et les questions rhétoriques renforcent l'indignation et l'appel à la réflexion."
    ],
    "bac": [
      "Distinguer force du tyran et consentement des sujets.",
      "Étudier les procédés qui rendent l'argumentation persuasive.",
      "Relier la réflexion humaniste à la défense de la liberté."
    ],
    "oral": [
      "Comment La Boétie explique-t-il la puissance du tyran ?",
      "Pourquoi la servitude est-elle qualifiée de volontaire ?",
      "Comment le texte cherche-t-il à faire réagir son lecteur ?"
    ]
  },
  "entretiens-pluralite": {
    "summary": [
      "Fontenelle met en scène une conversation entre un philosophe et une marquise, au fil de soirées consacrées à l'explication du système du monde.",
      "Le dialogue présente des idées astronomiques et physiques en les rendant accessibles grâce à des comparaisons, des exemples et des images familières.",
      "La forme conversationnelle associe plaisir, pédagogie et réflexion : la marquise pose des questions et le lecteur apprend avec elle à exercer sa curiosité."
    ],
    "figures": [
      "Le philosophe : guide qui expose les hypothèses scientifiques et adapte son discours.",
      "La marquise : interlocutrice vive, dont les questions représentent celles d'un public non spécialiste.",
      "Le lecteur : invité à suivre le raisonnement et à remettre en question les idées reçues."
    ],
    "analysis": [
      "Le dialogue rend le savoir vivant et met en scène la construction progressive de la compréhension.",
      "Les analogies rapprochent des phénomènes lointains de l'expérience quotidienne.",
      "Le ton mondain et léger facilite la diffusion d'idées nouvelles sans renoncer à la rigueur du raisonnement."
    ],
    "bac": [
      "Montrer comment l'œuvre associe littérature et diffusion des savoirs.",
      "Analyser la vulgarisation par le dialogue et les comparaisons.",
      "Expliquer comment la curiosité devient une méthode pour penser."
    ],
    "oral": [
      "Pourquoi Fontenelle choisit-il la forme du dialogue ?",
      "Comment rend-il la science accessible ?",
      "En quoi l'œuvre invite-t-elle à remettre en question les idées reçues ?"
    ]
  },
  "lettres-peruvienne": {
    "summary": [
      "Zilia, jeune Péruvienne séparée de son pays et d'Aza, écrit des lettres dans lesquelles elle raconte sa capture, son déplacement et sa découverte de l'Europe.",
      "Son regard extérieur lui permet d'observer les usages français comme des coutumes qui ne vont pas de soi. Les lettres confrontent ainsi les valeurs de sa culture d'origine à celles de la société qu'elle découvre.",
      "Au fil du récit, Zilia développe son jugement et son indépendance. L'œuvre interroge la condition féminine, l'éducation, la liberté et la possibilité pour une femme de choisir sa propre existence."
    ],
    "figures": [
      "Zilia : narratrice épistolaire, dont le regard critique organise le roman.",
      "Aza : fiancé resté au Pérou, auquel Zilia adresse une partie de ses lettres.",
      "Déterville : Français qui recueille Zilia et éprouve des sentiments pour elle.",
      "Céline : personnage qui contribue à l'éducation et à l'intégration de Zilia dans la société française."
    ],
    "analysis": [
      "La forme épistolaire donne accès aux pensées de Zilia et permet de suivre l'évolution de son regard.",
      "Le regard étranger crée un effet de décentrement : les habitudes françaises deviennent observables et discutables.",
      "L'ironie et la comparaison révèlent les contradictions entre les discours de civilisation et les pratiques sociales.",
      "L'évolution de Zilia conduit d'une identité définie par les liens amoureux à une affirmation de l'autonomie."
    ],
    "bac": [
      "Étudier le regard étranger comme outil de critique sociale.",
      "Relier l'éducation de Zilia à la conquête de l'indépendance.",
      "Analyser la forme épistolaire et l'évolution de la narratrice.",
      "Pour l'édition augmentée de 1752, intégrer l'introduction historique et les lettres XXVIII, XXIX, XXX et XXXIV indiquées dans votre programme."
    ],
    "oral": [
      "Comment le regard de Zilia permet-il de critiquer la société française ?",
      "En quoi la forme épistolaire est-elle adaptée à l'évolution du personnage ?",
      "Comment le roman défend-il l'indépendance féminine ?"
    ]
  },
  "menteur": {
    "summary": [
      "Dorante revient à Paris après ses études et rencontre Clarice et Lucrèce. Pour séduire, il invente des récits et transforme la réalité en spectacle.",
      "Ses mensonges provoquent une série de quiproquos : les personnages interprètent les paroles selon des informations incomplètes et les identités se brouillent.",
      "La comédie repose sur l'écart entre ce que Dorante raconte, ce que les autres croient et ce que le public sait. Le dénouement rétablit les identités et les couples."
    ],
    "figures": [
      "Dorante : jeune homme brillant, maître de l'invention verbale, mais prisonnier de ses propres récits.",
      "Cliton : valet de Dorante, témoin et commentateur de ses inventions.",
      "Clarice et Lucrèce : deux jeunes femmes au cœur des malentendus amoureux.",
      "Géronte : père de Dorante, qui représente l'autorité familiale."
    ],
    "analysis": [
      "Le mensonge devient un moteur dramaturgique : chaque invention produit de nouvelles complications.",
      "Le spectateur dispose souvent d'informations qui créent une ironie dramatique.",
      "La parole est performative : elle construit une identité et modifie les relations entre personnages.",
      "Les quiproquos montrent les limites de la communication et de la confiance."
    ],
    "bac": [
      "Analyser les fonctions comiques du mensonge.",
      "Étudier les rapports entre parole, identité et vérité.",
      "Montrer comment la construction dramatique entretient le quiproquo."
    ],
    "oral": [
      "Pourquoi Dorante ment-il ?",
      "Comment le mensonge fait-il avancer l'intrigue ?",
      "Quels effets produit le décalage entre le spectateur et les personnages ?"
    ]
  },
  "badine-amour": {
    "summary": [
      "Perdican revient au château après ses études et retrouve sa cousine Camille, élevée au couvent. Les deux jeunes gens sont destinés à se marier, mais leurs conceptions de l'amour s'opposent.",
      "Camille se méfie de l'amour, tandis que Perdican défend la sincérité du sentiment et souffre de son refus. L'orgueil les pousse à utiliser Rosette, jeune paysanne, dans leur affrontement.",
      "Les paroles et les manipulations prennent une dimension tragique. La pièce montre les conséquences destructrices d'un amour transformé en jeu de pouvoir."
    ],
    "figures": [
      "Perdican : jeune homme cultivé, passionné, mais blessé dans son orgueil.",
      "Camille : jeune femme marquée par l'éducation religieuse et la peur de souffrir.",
      "Rosette : jeune paysanne entraînée dans le conflit amoureux, dont la vulnérabilité révèle la cruauté du jeu."
    ],
    "analysis": [
      "Le proverbe du titre annonce la gravité d'un jeu amoureux qui n'a rien d'inoffensif.",
      "Les dialogues opposent deux visions de l'amour et révèlent les blessures des personnages.",
      "Le recours à Rosette transforme un conflit intime en faute morale.",
      "Le mélange du comique, du lyrisme et du tragique caractérise le drame romantique."
    ],
    "bac": [
      "Étudier les jeux du cœur et de la parole.",
      "Analyser comment l'orgueil détourne les sentiments.",
      "Montrer comment le registre évolue vers le tragique."
    ],
    "oral": [
      "Pourquoi Camille et Perdican ne parviennent-ils pas à se parler sincèrement ?",
      "Quel rôle Rosette joue-t-elle dans le conflit ?",
      "Comment la pièce fait-elle basculer le jeu amoureux dans le tragique ?"
    ]
  },
  "pour-un-oui": {
    "summary": [
      "Deux amis, désignés par H.1 et H.2, se retrouvent après une rupture de leur relation. L'un reproche à l'autre une intonation et une formule apparemment anodines.",
      "La dispute fait émerger des interprétations opposées : un mot, un silence ou une inflexion révèle des ressentiments accumulés.",
      "La pièce donne à entendre le conflit intérieur caché sous les paroles ordinaires et montre combien le langage peut fragiliser une relation."
    ],
    "figures": [
      "H.1 et H.2 : les deux amis, dont les points de vue se répondent et se contredisent.",
      "Les proches évoqués : ils élargissent la dispute à la question du regard social et de la place de chacun."
    ],
    "analysis": [
      "Le sous-entendu et l'intonation deviennent des événements dramatiques.",
      "Les silences, reprises et hésitations donnent une forme scénique à l'indicible.",
      "L'absence de décor spectaculaire concentre l'attention sur la parole et ses effets.",
      "La dispute révèle des rapports de pouvoir et des blessures que les personnages peinent à nommer."
    ],
    "bac": [
      "Étudier le théâtre de la dispute et la naissance du conflit.",
      "Analyser les non-dits et les micro-événements du langage.",
      "Montrer comment une situation minimale devient un affrontement dramatique."
    ],
    "oral": [
      "Comment une nuance de langage peut-elle déclencher une crise ?",
      "Quel rôle les silences et les répétitions jouent-ils ?",
      "En quoi cette pièce renouvelle-t-elle le théâtre de la dispute ?"
    ]
  },
  "cahier-douai": {
    "summary": [
      "Les poèmes réunis sous le titre Cahiers de Douai sont des textes de jeunesse écrits par Rimbaud en 1870 et conservés dans deux ensembles manuscrits.",
      "Le recueil fait entendre une voix adolescente qui explore la liberté, la fugue, les sensations, la satire sociale et la découverte du monde.",
      "Rimbaud reprend des formes poétiques héritées tout en les transformant par l'énergie du langage, les images audacieuses et un regard critique sur la société."
    ],
    "figures": [
      "Le jeune poète : voix mobile qui observe, fuit, rêve et conteste.",
      "Les figures sociales caricaturées : bourgeois, militaires ou adultes peuvent devenir les cibles de la satire.",
      "Les figures de liberté : marcheur, vagabond ou amoureux incarnent différentes formes d'émancipation."
    ],
    "analysis": [
      "La nature est un espace de sensations et de liberté, mais aussi un partenaire de l'expérience poétique.",
      "Les formes fixes héritées sont travaillées de l'intérieur par des images neuves et des ruptures de ton.",
      "La satire et l'ironie contestent les normes sociales et morales.",
      "Le corps, les sensations et le mouvement donnent une énergie particulière à cette poésie de jeunesse."
    ],
    "bac": [
      "Montrer comment la poésie devient un moyen d'émancipation.",
      "Étudier le dialogue entre héritage formel et invention.",
      "Relier la liberté du sujet poétique à la critique des normes."
    ],
    "oral": [
      "Comment Rimbaud renouvelle-t-il les formes poétiques ?",
      "Quelle place la fugue et la liberté occupent-elles ?",
      "Comment les poèmes associent-ils sensations et critique sociale ?"
    ]
  },
  "rage-expression": {
    "summary": [
      "La rage de l'expression rassemble des textes où Ponge observe des objets, des lieux et des phénomènes naturels en cherchant une manière juste de les dire.",
      "Le lecteur suit les essais, les reprises, les hésitations et les corrections qui accompagnent l'écriture. Le poème ne se présente pas seulement comme un résultat achevé : il montre son propre processus.",
      "L'expression est une recherche exigeante, parfois conflictuelle, entre la résistance des choses et les possibilités du langage."
    ],
    "figures": [
      "Le poète-observateur : il examine le réel avec précision et refuse les formules toutes faites.",
      "La chose observée : elle résiste aux mots et oblige l'écrivain à renouveler son regard.",
      "Le lecteur : il assiste à la recherche et devient témoin de l'atelier poétique."
    ],
    "analysis": [
      "Les brouillons, variantes et commentaires rendent visible la fabrique du texte.",
      "La précision lexicale et les jeux sur les mots cherchent à approcher la singularité des choses.",
      "Les reprises montrent que l'écriture est un travail et non une inspiration instantanée.",
      "La poésie déplace l'attention du lyrisme personnel vers l'observation du monde matériel."
    ],
    "bac": [
      "Étudier la poésie comme travail et expérimentation.",
      "Analyser les liens entre observation, langage et connaissance du réel.",
      "Montrer comment le texte expose ses propres hésitations."
    ],
    "oral": [
      "Pourquoi Ponge donne-t-il à voir le travail d'écriture ?",
      "Comment le poète tente-t-il de dire les choses avec précision ?",
      "En quoi cette œuvre renouvelle-t-elle la conception traditionnelle du poème ?"
    ]
  },
  "mes-forets": {
    "summary": [
      "Dans Mes forêts, Hélène Dorion construit un parcours poétique où la forêt devient un lieu réel, sensoriel et symbolique.",
      "Les poèmes font dialoguer le monde vivant, les saisons, le temps et l'intériorité. La nature n'est pas un simple décor : elle permet de penser la fragilité et les transformations de l'existence.",
      "Le recueil ouvre une réflexion sur la place de l'être humain dans le monde et sur la possibilité de retrouver une relation attentive au vivant."
    ],
    "figures": [
      "La voix poétique : elle observe la forêt et y cherche des échos à l'expérience intérieure.",
      "La forêt : espace vivant, mémoire et métaphore des chemins de l'existence.",
      "Le lecteur : invité à ralentir, écouter et relier expérience intime et monde commun."
    ],
    "analysis": [
      "Les images végétales et les motifs de croissance, de racines et de saisons structurent le recueil.",
      "Les sensations rapprochent le corps du monde naturel.",
      "La forêt fonctionne comme une métaphore de l'intériorité et du temps.",
      "Le rythme et les images créent une poésie méditative attentive à la fragilité du vivant."
    ],
    "bac": [
      "Étudier les relations entre nature, poésie et expérience intime.",
      "Analyser la forêt comme espace concret et métaphore.",
      "Montrer comment le recueil invite à repenser la place de l'humain dans le vivant."
    ],
    "oral": [
      "Comment la forêt devient-elle un espace intérieur ?",
      "Quelle relation le recueil construit-il entre l'humain et le vivant ?",
      "Comment les images de la nature organisent-elles la réflexion poétique ?"
    ]
  }
};
