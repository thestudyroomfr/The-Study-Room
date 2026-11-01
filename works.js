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