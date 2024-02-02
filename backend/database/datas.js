const mashedPotatoe = require("../public/assets/images/Joel_Robuchon_mashed_web.jpg");
const hassbSalmon = require("../public/assets/images/Hasseback_salmon_web.jpg");
const steamed = require("../public/assets/images/Steamed_potatoe_web.jpg");
const baconSalad = require("../public/assets/images/Potatoe_salad_bacon_radish_web.jpg");

const recipes = [
  {
    id: 4001,
    title: "Pommes de terre roties à la suedoise",
    picture: { hassbSalmon },
    difficulty: "Facile",
    prep_time: "10 minutes",
    cooking_time: "45 minutes",
    steps:
      "Préchauffer le four à 180° (th.6). //Couper les pomme de terre en lamelles (de 0,5 cm environ) mais sans les détacher de la base. La pomme de terre doit rester unie. //Couper le beurre en tranches et insérez les entre chaque tranche de pomme de terre. //Soupoudrez de Paprika puis salez et poivrez.//Paresemez de romarin et de thym frais. //Enfournez à 180° pour 45 à 60 min. Le temps de cuisson dépendra du calibre et de la variété de la pomme de terre. Une chair ferme nécessitera davantage de temps de cuisson. //Sortez les pommes de terre du four, ajoutez le percil et dégustez avec le saumon fumé.",
    user_id: 1,
    cooking_tech_id: 2005,
    is_approved: 1,
  },
  {
    id: 4002,
    title: "Purée à la Joël Robuchon",
    picture: { mashedPotatoe },
    difficulty: "Facile",
    prep_time: "15 minutes",
    cooking_time: "25 minutes",
    step_id:
      "Lavez les pommes de terre, mettez-les dans une casserole. Recouvrez-les d’eau froide, 2 cm au-dessus des pommes de terre. //Salez à raison de 10 g de sel par litre d’eau et faites cuire sur le feu, à découvert pendant 20 à 25 minutes jusqu’à ce que la lame d’un couteau transperce facilement les pommes de terre. //Égouttez-les, pelez-les encore tièdes, passez-les au moulin à légumes grille fine. Remettez la purée obtenue dans la casserole sur feu doux en remuant pour la dessécher un peu. //Dans une casserole, faites bouillir 20 cl de lait. Ajoutez à la purée le beurre bien froid coupé en morceaux, en mélangeant vivement avec une spatule de bois. Puis versez le lait chaud, toujours en mélangeant. Rectifiez l’assaisonnement et servez aussitôt.",
    user_id: 1,
    cooking_tech_id: 2002,
    is_approved: 1,
  },
  {
    id: 4003,
    title: "Pommes de terre vapeur",
    picture: { steamed },
    difficulty: "Facile",
    prep_time: "10 minutes",
    cooking_time: "20 à 25 minutes en fonction de la taille de vos patates",
    step_id:
      "Remplir une grande casserole d’un pouce d’eau et y placer une marguerite. //Déposez les pommes de terre dans la marguerite et amenez l’eau à ébullition. //Couvrir et cuire jusqu’à ce qu’elles soient tendres, 10 à 15 minutes. //Assaisonnez de poivre, de sel, d'herbes fraiches et d'une noix de beurre.",
    user_id: 1,
    cooking_tech_id: 2003,
    is_approved: 1,
  },
  {
    id: 4004,
    title: "Salade pomme de terre œufs et lardons",
    picture: { baconSalad },
    difficulty: "Facile",
    prep_time: "10 minutes",
    cooking_time: "10 à 15 minutes en fonction de la taille de vos patates",
    step_id:
      "Remplir une grande casserole d’un pouce d’eau et y placer une marguerite.\nEpluchez et découpez les pommes de terre en dés moyens. Déposez-les dans la marguerite et amenez l’eau à ébullition. \nCouvrir et cuire jusqu’à ce qu’elles soient tendres, 10 à 15 minutes. //Remplir une seconde casserole et remplissez-la pour que l'eau soit suffisante pour recouvrir les œufs. Une fois l'eau à ébullition, placez-y délicatement les œufs à l'aide d'une cuillère à soupe. Laissez-les cuire pendant 10 minute puis plongez-les dans l'eau froide //Pendant ce temps, épluchez et coupez les oignons en lamelles d'un demi-centimètre environ. Faites-les revenir à la poêle pendant 5 min jusqu'à ce que les oignons soient fondants. Ajoutez les lardons et laissez cuire encore 5 minutes. //Laisssez refroidir toutes les préparations : pommes de terre vapeur, oignons, lardons puis mélangez-les. Ajouter les œufs écaillés et coupés en lamelles et les herbes fraiches émincées. //Mélangez l'huile et le vinaigre et assaisonnez votre salade.",
    user_id: 1,
    cooking_tech_id: 2004,
    is_approved: 1,
  },
];
const varieties = [
  {
    id: 1001,
    name: "Agata",
    outside_color: "Jaune",
    inside_color: "Jaune",
    origin: "Pays-Bas - Culture : Europe du Sud",
    flesh: "Ferme",
    description:
      "Pomme de terre très polyvalente, fondante mais qui se tient bien à la cuisson, l'Agata est idéale pour une raclette, un pot-au-feu ou autre plats mijotés. Son goût est cependant très peu pronnoncé.",
  },
  {
    id: 1002,
    name: "Agria",
    outside_color: "Jaune",
    inside_color: "Jaune pâle",
    origin: "Pays-Bas - Culture : Europe du Sud",
    flesh: "Farineuse",
    description:
      "Agia possède une chair farineuse et une peau relativement épaisse qui la rende particulièrement adaptée, entre autre, à la cuisson au four.",
  },
  {
    id: 1003,
    name: "Amandine",
    outside_color: "Jaune Pale",
    inside_color: "Jaune pâle",
    origin: "France",
    flesh: "Ferme",
    description:
      "La \"princesse Amandine\" se tient très bien à la cuisson et se cuit en poêlée, à la vapeur ou en plats mijotés. Sa peau fine permet d'éviter la corvée de l'économe (à condition de l'acheter en bio).",
  },
  {
    id: 1004,
    name: "Annabelle",
    outside_color: "Jaune",
    inside_color: "Jaune foncé",
    origin: "Pays-Bas - Culture : Europe du Sud",
    flesh: "Ferme",
    description: "Goût doux",
  },
  {
    id: 1005,
    name: "Belle de Fontenay",
    outside_color: "Jaune",
    inside_color: "Jaune",
    origin: "France (Fontenay sous-bois)",
    flesh: "Ferme",
    description:
      "La Belle de Fontenay est l'une des plus ancienne pomme de terre à chair ferme. Texture fine et saveur subtile elles resteront ferme à la cuisson.",
  },
  {
    id: 1006,
    name: "BF15",
    outside_color: "Jaune",
    inside_color: "Jaune Foncé",
    origin: "France",
    flesh: "Ferme",
    description:
      "Malgré ce que pourrait laisser penser son patronyme, la BF15 est une variété rustique ancienne.",
  },
  {
    id: 1007,
    name: "Bintje",
    outside_color: "Jaune",
    inside_color: "Jaune",
    origin: "France / Belgique",
    flesh: "Farineuse",
    description:
      'On pourrait la nommer la "reine de la frite" car la Bintje et sa chair farineuse absorbe particulièrement bien l\'huile de friture ! Assez bonne tenue à la cuisson.',
  },
  {
    id: 1009,
    name: "Bleue d'Artois",
    outside_color: "Bleue-violette",
    inside_color: "Bleue-violette",
    origin: "France",
    flesh: "Ferme",
    description:
      "Ferme et non farineuse, la Bleue d'Artois relèvera vos plats de sa couleur originale. \nAstuce : pour conserver sa couleur bleue, cuisez-là dans une eau vinaigrée",
  },
  {
    id: 1010,
    name: "Blue Belle",
    outside_color: "Jaune et violette",
    inside_color: "Jaune pâle",
    origin: "Irlande-BretagneB11A11:D11",
    flesh: 65,
    description:
      "Pomme de terre polyvalente mais rare sur nos étales de marché.",
  },
  {
    id: 1011,
    name: "Caesar",
    outside_color: "Jaune",
    inside_color: "Jaune",
    origin: "Pays-Bas",
    flesh: "Farineuse",
    description:
      "Pomme de terre à la chair très farineuse, n'essayez pas d'en faire un gratin, vous finirez avec une purée !",
  },
  {
    id: 1012,
    name: "Charlotte",
    outside_color: "Jaune",
    inside_color: "Jaune",
    origin: "Ile de Ré",
    flesh: "Ferme",
    description:
      "C'est une vraie star cette Charlotte. On la voit partout et ma foi, c'est assez justifié : bonne tenue et bon goût elle est donc très polyvalente en cuisine.",
  },
  {
    id: 1013,
    name: "Chérie",
    outside_color: "Rouge",
    inside_color: "Jaune",
    origin: "France",
    flesh: "Ferme",
    description:
      "Bonne tenue à la cuisson et petit goût de châtaigne qui accompagne à merveille la raclette !",
  },
  {
    id: 1014,
    name: "Corne de Gatte",
    outside_color: "Rose pâle",
    inside_color: "Jaune pâle",
    origin: "Incertaine",
    flesh: 65,
    description:
      'Rien que pour sa forme oblongue allongée la Corne de Gatte (aussi appelée "Pink Fire Apple") vaut bien le détour. Mais ajoutez-y un goût noisette délicat et vous tenez une pomme de terre de grande qualité gustative.',
  },
  {
    id: 1015,
    name: "Etincelle",
    outside_color: "Jaune",
    inside_color: "Jaune",
    origin: "",
    flesh: "Tendre",
    description: "Polyvalente",
  },
  {
    id: 1016,
    name: "Franceline",
    outside_color: "Rouge",
    inside_color: "Jaune",
    origin: "France",
    flesh: "Ferme",
    description: "La « Charlotte rouge » possède une bonne tenue à la cuisson",
  },
  {
    id: 1017,
    name: "Goldmarie",
    outside_color: "Jaune",
    inside_color: "Jaune",
    origin: "Allemagne",
    flesh: "Ferme",
    description:
      "Une pomme de terre au goût affirmé de longue conservation. Un délice.",
  },
  {
    id: 1019,
    name: "Marabel",
    outside_color: "Jaune",
    inside_color: "Jaune foncée",
    origin: "Allemagne",
    flesh: "Farineuse",
    description:
      "Polyvalente souvent utilisée pour les frites ou les pommes de terre au four.",
  },
  {
    id: 1020,
    name: "Mona Lisa",
    outside_color: "Jaune",
    inside_color: "Jaune",
    origin: "Pays-Bas",
    flesh: "Tendre",
    description:
      "La Mona Lisa est appréciée pour sa polyvalence culinaire, sa texture fine et sa saveur délicate",
  },
  {
    id: 1021,
    name: "Nicola",
    outside_color: "Jaune Pâle",
    inside_color: "Jaune pâle",
    origin: "Allemagne",
    flesh: "Ferme",
    description:
      "Pomme de terre à chair ferme, la Nicola se tient bien à la cuisson ce qui en fait la patate idéale pour les salades.",
  },
  {
    id: 1022,
    name: "Œil de Perdrix",
    outside_color: "Jaune mabré de rouge",
    inside_color: "Jaune Pâle",
    origin: "Ecosse",
    flesh: "Farineuse",
    description: 'Aussi appelée "King Edward VII',
  },
  {
    id: 1023,
    name: "Osiris",
    outside_color: "Jaune",
    inside_color: "Jaune",
    origin: "",
    flesh: "Farineuse",
    description:
      "Pomme de terre polyvalente à la chair farineuse, très gustative et idéale en primeur.",
  },
  {
    id: 1024,
    name: "Penni",
    outside_color: "Jaune clair",
    inside_color: "Jaune",
    origin: "",
    flesh: "Ferme",
    description:
      "La Penni est une variété de type grenaille qui possède une bonne tenue à la cuisson idéale pour la cuisson vapeur ou les salades.",
  },
  {
    id: 1025,
    name: "Pompadour",
    outside_color: "Jaune cuivrée",
    inside_color: "Jaune",
    origin: "France",
    flesh: "Ferme",
    description:
      "La Pompadour est issue de la variété Roseval d'où sa couleur légèrement cuivrée. Elle possède une bonne tenue à la cuisson et se révèle Tendre et fondant en bouche. Le Label Rouge récompense ses qualités gustatives.",
  },
  {
    id: 1026,
    name: "Ratte",
    outside_color: "Jaune",
    inside_color: "Jaune",
    origin: "France",
    flesh: "Ferme",
    description:
      "Appelée aussi \"Corne de bélier\", la pomme de terre Ratte est une vieille variété originaire du Lyonnais, de l'Ardèche et de la Haute-Loire sans que l'on connaisse précisément son origine. Bien que de chair ferme, le  cuisinier Joël Robucho recommandait son usage pour sa célèbre purée. Elle possède en effet un petit goût noisette.",
  },
  {
    id: 1027,
    name: "Roseval",
    outside_color: "Rouge",
    inside_color: "Jaune",
    origin: "France",
    flesh: "Ferme",
    description:
      "La Roseval possède une chair ferme de bonne tenue à la cuisson.",
  },
  {
    id: 1028,
    name: "Rouge des flandres",
    outside_color: "Rouge",
    inside_color: "Rouge",
    origin: "France",
    flesh: "Tendre",
    description:
      "Comme tout ce qui vient des Flandres, cette pomme de terre rustique est délicieuse et très polyvalente en plus d'être magnifique grâce à sa chair rouge. Ne voyez aucun chauvinisme de l'auteur de ces quelques ligne…",
  },
  {
    id: 1029,
    name: "Samba",
    outside_color: "Jaune",
    inside_color: "Jaune",
    origin: "France",
    flesh: "Tendre",
    description:
      "La Samba possède une chair Tendre mais se tient assez bien à la cuisson. Elle est particulièrement bien adaptée à une cuisson au four.",
  },
  {
    id: 1030,
    name: "Ulysse",
    outside_color: "Violette",
    inside_color: "Violette",
    origin: "Pérou",
    flesh: "Tendre",
    description:
      "La pomme de terre Ulysse possède une peau fine et une chair Tendre qui permet un usage polyvalent en cuisine. En plus elle possède une couleur originale qui se conserve à la cuisson. Essayez-la en chips !",
  },
  {
    id: 1031,
    name: "Vitabella",
    outside_color: "Jaune",
    inside_color: "Jaune",
    origin: "Pays-Bas",
    flesh: "Ferme",
    description:
      "La Vitabella est très polyvalente et possède un bon goût qui la rende populaire en cuisine.",
  },
  {
    id: 1032,
    name: "Viterolle",
    outside_color: "Violette foncée",
    inside_color: "Violette",
    origin: "France",
    flesh: "Tendre",
    description:
      "Si vous cherchez une pomme de terre au rendu original c'est la Viterolle qu'il vous faut ! Son bleu-violet se conserve parfaitement à la cuisson, idéale pour colorer un repas de fête. Malheureusement sa culture se fait de plus en plus rare…",
  },
  {
    id: 1033,
    name: "Jeannette",
    outside_color: "Rouge",
    inside_color: "Jaune pâle",
    origin: "France",
    flesh: "Ferme",
    description:
      "Une pomme de terre au bon goût et très polyvalente en cuisine.",
  },
  {
    id: 1034,
    name: "Rose de France",
    outside_color: "Rouge",
    inside_color: "Jaune pâle",
    origin: "France",
    flesh: "Ferme",
    description:
      "Une pomme de terre au bon goût et une bonne tenue à la cuisson qui en ont une variété très polyvalente en cuisine.",
  },
];

const cookingTechs = [
  {
    id: 2001,
    name: "Frites",
  },
  {
    id: 2002,
    name: "Purée",
  },
  {
    id: 2003,
    name: "Vapeur",
  },
  {
    id: 2004,
    name: "Salade",
  },
  {
    id: 2005,
    name: "Four",
  },
  {
    id: 2006,
    name: "Gratin",
  },
  {
    id: 2007,
    name: "Mijotée",
  },
  {
    id: 2008,
    name: "Rissolée",
  },
  {
    id: 2009,
    name: "Soupe",
  },
  {
    id: 2010,
    name: "Robe des champs",
  },
  {
    id: 2011,
    name: "Chips",
  },
];

// const steps = [
//   {
//     id: 55101,
//     step_1: "Préchauffer le four à 180° (th.6)",
//     step_2:
//       "Couper les pomme de terre en lamelles (de 0,5 cm environ) mais sans les détacher de la base. La pomme de terre doit rester unie",
//     step_3:
//       "Couper le beurre en tranches et insérez les entre chaque tranche de pomme de terre.",
//     step_4: "Soupoudrez de Paprika puis salez et poivrez",
//     step_5: "Paresemez de romarin et de thym.",
//     step_6:
//       "Enfournez à 180° pour 45 à 60 min. Le temps de cuisson dépendra du calibre et de la variété de la pomme de terre. Une chair ferme nécessitera davantage de temps de cuisson.",
//     step_7:
//       "Sortez les pommes de terre du four, ajoutez le percil et dégustez avec le saumon fumé.",
//     step_8: "",
//     step_9: "",
//     step_10: "",
//   },

//   {
//     id: 55102,
//     step_1:
//       "Lavez les pommes de terre, mettez-les dans une casserole. Recouvrez-les d’eau froide, 2 cm au-dessus des pommes de terre.",
//     step_2:
//       "Salez à raison de 10 g de sel par litre d’eau et faites cuire sur le feu, à découvert pendant 20 à 25 minutes jusqu’à ce que la lame d’un couteau transperce facilement les pommes de terre.",
//     step_3:
//       "Égouttez-les, pelez-les encore tièdes, passez-les au moulin à légumes grille fine. Remettez la purée obtenue dans la casserole sur feu doux en remuant pour la dessécher un peu.",
//     step_4:
//       "Dans une casserole, faites bouillir 20 cl de lait. Ajoutez à la purée le beurre bien froid coupé en morceaux, en mélangeant vivement avec une spatule de bois. Puis versez le lait chaud, toujours en mélangeant. Rectifiez l’assaisonnement et servez aussitôt.",
//     step_5: "",
//     step_6: "",
//     step_7: "",
//     step_8: "",
//     step_9: "",
//     step_10: "",
//   },
//   {
//     id: 55103,
//     step_1:
//       "Remplir une grande casserole d’un pouce d’eau et y placer une marguerite.",
//     step_2:
//       "Déposez les pommes de terre dans la marguerite et amenez l’eau à ébullition.",
//     step_3:
//       "Couvrir et cuire jusqu’à ce qu’elles soient tendres, 10 à 15 minutes.",
//     step_4:
//       "Assaisonnez de poivre, de sel, d'herbes fraiches et d'une noix de beurre.",
//     step_5: "",
//     step_6: "",
//     step_7: "",
//     step_8: "",
//     step_9: "",
//     step_10: "",
//   },
//   {
//     id: 55104,
//     step_1:
//       "Remplir une grande casserole d’un pouce d’eau et y placer une marguerite.\nDéposez les pommes de terre dans la marguerite et amenez l’eau à ébullition. \nCouvrir et cuire jusqu’à ce qu’elles soient tendres, 10 à 15 minutes.",
//     step_2:
//       "Remplir une seconde casserole et remplissez-la pour que l'eau soit suffisante pour recouvrir les œufs. Une fois l'eau à ébullition, placez-y délicatement les œufs à l'aide d'une cuillère à soupe. Laissez-les cuire pendant 10 minute puis plongez-les dans l'eau froide",
//     step_3:
//       "Pendant ce temps, épluchez et coupez les oignons en lamelles d'un demi-centimètre environ. Faites-les revenir à la poêle pendant 5 min jusqu'à ce que les oignons soient fondants. Ajoutez les lardons et laissez cuire encore 5 minutes.",
//     step_4:
//       "Laisssez refroidir toutes les préparations : pommes de terre vapeur, oignons, lardons puis mélangez-les. Ajouter les œufs écaillés et coupés en lamelles et les herbes fraiches émincées.",
//     step_5: "Mélangez l'huile et le vinaigre et assaisonnez votre salade.",
//     step_6: "",
//     step_7: "",
//     step_8: "",
//     step_9: "",
//     step_10: "",
//   },
// ];
const ingredientQtRecipes = [
  {
    id: 66001,
    recipe_id: 4001,
    ingredient_id: 77201,
    quantity_id: 88001,
  },
  {
    id: 66002,
    recipe_id: 4001,
    ingredient_id: 77202,
    quantity_id: 88001,
  },
  {
    id: 66003,
    recipe_id: 4001,
    ingredient_id: 77203,
    quantity_id: 88002,
  },
  {
    id: 66004,
    recipe_id: 4001,
    ingredient_id: 77204,
    quantity_id: 88002,
  },
  {
    id: 66005,
    recipe_id: 4001,
    ingredient_id: 77205,
    quantity_id: 88002,
  },
  {
    id: 66006,
    recipe_id: 4001,
    ingredient_id: 77206,
    quantity_id: 88008,
  },
  {
    id: 66007,
    recipe_id: 4001,
    ingredient_id: 77207,
    quantity_id: 88003,
  },
  {
    id: 66008,
    recipe_id: 4001,
    ingredient_id: 77208,
    quantity_id: 88004,
  },
  {
    id: 66009,
    recipe_id: 4001,
    ingredient_id: 77209,
    quantity_id: 88006,
  },
  {
    id: 66010,
    recipe_id: 4001,
    ingredient_id: 77210,
    quantity_id: 88007,
  },
];

const ingredients = [
  {
    id: 77201,
    name: "Pommes de terre",
  },
  {
    id: 77202,
    name: "Tranches de saumon fumé",
  },
  {
    id: 77203,
    name: "Romarin",
  },
  {
    id: 77204,
    name: "Persil",
  },
  {
    id: 77205,
    name: "Thym",
  },
  {
    id: 77206,
    name: "Poivre",
  },
  {
    id: 77207,
    name: "Sel",
  },
  {
    id: 77208,
    name: "Paprika",
  },
  {
    id: 77209,
    name: "Beurre",
  },
  {
    id: 77210,
    name: "Huile d'olive",
  },
];

const quantities = [
  {
    id: 88001,
    value: 2,
    type_id: 99001,
  },
  {
    id: 88002,
    value: 0,
    type_id: 99009,
  },
  {
    id: 88003,
    value: 2,
    type_id: 99011,
  },
  {
    id: 88004,
    value: 5,
    type_id: 99007,
  },
  {
    id: 88005,
    value: 2,
    type_id: 99011,
  },
  {
    id: 88006,
    value: 40,
    type_id: 99007,
  },
  {
    id: 88007,
    value: 1,
    type_id: 99012,
  },
];

const types = [
  {
    id: 99001,
    name: "nombre",
  },
  {
    id: 99002,
    name: "Cac",
  },
  {
    id: 99003,
    name: "Cas",
  },
  {
    id: 99004,
    name: "ml",
  },
  {
    id: 99005,
    name: "cl",
  },
  {
    id: 99006,
    name: "l",
  },
  {
    id: 99007,
    name: "g",
  },
  {
    id: 99008,
    name: "kg",
  },
  {
    id: 99009,
    name: "à votre goût",
  },
  {
    id: 99011,
    name: "Tour",
  },
  {
    id: 99012,
    name: "Pincée",
  },
  {
    id: 99013,
    name: "Filet",
  },
];

const cookingTechVars = [
  {
    id: 10,
    cooking_tech_id: 2001,
    potatoe_variety_id: 1002,
  },
  {
    id: 11,
    cooking_tech_id: 2001,
    potatoe_variety_id: 1007,
  },
  {
    id: 12,
    cooking_tech_id: 2001,
    potatoe_variety_id: 1010,
  },
  {
    id: 13,
    cooking_tech_id: 2001,
    potatoe_variety_id: 1011,
  },
  {
    id: 14,
    cooking_tech_id: 2001,
    potatoe_variety_id: 1015,
  },
  {
    id: 15,
    cooking_tech_id: 2001,
    potatoe_variety_id: 1019,
  },
  {
    id: 16,
    cooking_tech_id: 2001,
    potatoe_variety_id: 1023,
  },
  {
    id: 17,
    cooking_tech_id: 2001,
    potatoe_variety_id: 1028,
  },
  {
    id: 18,
    cooking_tech_id: 2001,
    potatoe_variety_id: 1029,
  },
  {
    id: 19,
    cooking_tech_id: 2001,
    potatoe_variety_id: 1030,
  },
  {
    id: 20,
    cooking_tech_id: 2002,
    potatoe_variety_id: 1001,
  },
  {
    id: 21,
    cooking_tech_id: 2002,
    potatoe_variety_id: 1002,
  },
  {
    id: 22,
    cooking_tech_id: 2002,
    potatoe_variety_id: 1007,
  },
  {
    id: 23,
    cooking_tech_id: 2002,
    potatoe_variety_id: 1009,
  },
  {
    id: 24,
    cooking_tech_id: 2002,
    potatoe_variety_id: 1010,
  },
  {
    id: 25,
    cooking_tech_id: 2002,
    potatoe_variety_id: 1011,
  },
  {
    id: 26,
    cooking_tech_id: 2002,
    potatoe_variety_id: 1015,
  },
  {
    id: 27,
    cooking_tech_id: 2002,
    potatoe_variety_id: 1033,
  },
  {
    id: 28,
    cooking_tech_id: 2002,
    potatoe_variety_id: 1019,
  },
  {
    id: 29,
    cooking_tech_id: 2002,
    potatoe_variety_id: 1023,
  },
  {
    id: 30,
    cooking_tech_id: 2002,
    potatoe_variety_id: 1026,
  },
  {
    id: 31,
    cooking_tech_id: 2002,
    potatoe_variety_id: 1034,
  },
  {
    id: 32,
    cooking_tech_id: 2002,
    potatoe_variety_id: 1029,
  },
  {
    id: 33,
    cooking_tech_id: 2002,
    potatoe_variety_id: 1030,
  },
  {
    id: 34,
    cooking_tech_id: 2002,
    potatoe_variety_id: 1031,
  },
  {
    id: 35,
    cooking_tech_id: 2002,
    potatoe_variety_id: 1032,
  },
  {
    id: 36,
    cooking_tech_id: 2003,
    potatoe_variety_id: 1002,
  },
  {
    id: 37,
    cooking_tech_id: 2003,
    potatoe_variety_id: 1003,
  },
  {
    id: 38,
    cooking_tech_id: 2003,
    potatoe_variety_id: 1004,
  },
  {
    id: 39,
    cooking_tech_id: 2003,
    potatoe_variety_id: 1005,
  },
  {
    id: 40,
    cooking_tech_id: 2003,
    potatoe_variety_id: 1006,
  },
  {
    id: 41,
    cooking_tech_id: 2003,
    potatoe_variety_id: 1012,
  },
  {
    id: 42,
    cooking_tech_id: 2003,
    potatoe_variety_id: 1013,
  },
  {
    id: 43,
    cooking_tech_id: 2003,
    potatoe_variety_id: 1014,
  },
  {
    id: 44,
    cooking_tech_id: 2003,
    potatoe_variety_id: 1016,
  },
  {
    id: 45,
    cooking_tech_id: 2003,
    potatoe_variety_id: 1017,
  },
  {
    id: 46,
    cooking_tech_id: 2003,
    potatoe_variety_id: 1033,
  },
  {
    id: 47,
    cooking_tech_id: 2003,
    potatoe_variety_id: 1020,
  },
  {
    id: 48,
    cooking_tech_id: 2003,
    potatoe_variety_id: 1021,
  },
  {
    id: 49,
    cooking_tech_id: 2003,
    potatoe_variety_id: 1022,
  },
  {
    id: 50,
    cooking_tech_id: 2003,
    potatoe_variety_id: 1023,
  },
  {
    id: 51,
    cooking_tech_id: 2003,
    potatoe_variety_id: 1024,
  },
  {
    id: 52,
    cooking_tech_id: 2003,
    potatoe_variety_id: 1025,
  },
  {
    id: 53,
    cooking_tech_id: 2003,
    potatoe_variety_id: 1026,
  },
  {
    id: 54,
    cooking_tech_id: 2003,
    potatoe_variety_id: 1034,
  },
  {
    id: 55,
    cooking_tech_id: 2003,
    potatoe_variety_id: 1027,
  },
  {
    id: 56,
    cooking_tech_id: 2003,
    potatoe_variety_id: 1031,
  },
  {
    id: 57,
    cooking_tech_id: 2004,
    potatoe_variety_id: 1003,
  },
  {
    id: 58,
    cooking_tech_id: 2004,
    potatoe_variety_id: 1004,
  },
  {
    id: 59,
    cooking_tech_id: 2004,
    potatoe_variety_id: 1005,
  },
  {
    id: 60,
    cooking_tech_id: 2004,
    potatoe_variety_id: 1006,
  },
  {
    id: 61,
    cooking_tech_id: 2004,
    potatoe_variety_id: 1016,
  },
  {
    id: 62,
    cooking_tech_id: 2004,
    potatoe_variety_id: 1017,
  },
  {
    id: 63,
    cooking_tech_id: 2004,
    potatoe_variety_id: 1033,
  },
  {
    id: 64,
    cooking_tech_id: 2004,
    potatoe_variety_id: 1020,
  },
  {
    id: 65,
    cooking_tech_id: 2004,
    potatoe_variety_id: 1021,
  },
  {
    id: 66,
    cooking_tech_id: 2004,
    potatoe_variety_id: 1024,
  },
  {
    id: 67,
    cooking_tech_id: 2004,
    potatoe_variety_id: 1025,
  },
  {
    id: 68,
    cooking_tech_id: 2004,
    potatoe_variety_id: 1034,
  },
  {
    id: 69,
    cooking_tech_id: 2004,
    potatoe_variety_id: 1028,
  },
  {
    id: 70,
    cooking_tech_id: 2004,
    potatoe_variety_id: 1031,
  },
  {
    id: 71,
    cooking_tech_id: 2004,
    potatoe_variety_id: 1032,
  },
  {
    id: 72,
    cooking_tech_id: 2005,
    potatoe_variety_id: 1001,
  },
  {
    id: 73,
    cooking_tech_id: 2005,
    potatoe_variety_id: 1002,
  },
  {
    id: 74,
    cooking_tech_id: 2005,
    potatoe_variety_id: 1010,
  },
  {
    id: 75,
    cooking_tech_id: 2005,
    potatoe_variety_id: 1033,
  },
  {
    id: 76,
    cooking_tech_id: 2005,
    potatoe_variety_id: 1022,
  },
  {
    id: 77,
    cooking_tech_id: 2005,
    potatoe_variety_id: 1023,
  },
  {
    id: 78,
    cooking_tech_id: 2005,
    potatoe_variety_id: 1026,
  },
  {
    id: 79,
    cooking_tech_id: 2005,
    potatoe_variety_id: 1029,
  },
  {
    id: 80,
    cooking_tech_id: 2005,
    potatoe_variety_id: 1031,
  },
  {
    id: 81,
    cooking_tech_id: 2006,
    potatoe_variety_id: 1001,
  },
  {
    id: 82,
    cooking_tech_id: 2006,
    potatoe_variety_id: 1006,
  },
  {
    id: 83,
    cooking_tech_id: 2006,
    potatoe_variety_id: 1012,
  },
  {
    id: 84,
    cooking_tech_id: 2006,
    potatoe_variety_id: 1028,
  },
  {
    id: 85,
    cooking_tech_id: 2007,
    potatoe_variety_id: 1016,
  },
  {
    id: 86,
    cooking_tech_id: 2007,
    potatoe_variety_id: 1026,
  },
  {
    id: 87,
    cooking_tech_id: 2007,
    potatoe_variety_id: 1001,
  },
  {
    id: 88,
    cooking_tech_id: 2007,
    potatoe_variety_id: 1003,
  },
  {
    id: 89,
    cooking_tech_id: 2007,
    potatoe_variety_id: 1030,
  },
  {
    id: 90,
    cooking_tech_id: 2007,
    potatoe_variety_id: 1029,
  },
  {
    id: 91,
    cooking_tech_id: 2008,
    potatoe_variety_id: 1004,
  },
  {
    id: 92,
    cooking_tech_id: 2008,
    potatoe_variety_id: 1005,
  },
  {
    id: 93,
    cooking_tech_id: 2008,
    potatoe_variety_id: 1006,
  },
  {
    id: 94,
    cooking_tech_id: 2008,
    potatoe_variety_id: 1012,
  },
  {
    id: 95,
    cooking_tech_id: 2008,
    potatoe_variety_id: 1016,
  },
  {
    id: 96,
    cooking_tech_id: 2008,
    potatoe_variety_id: 1033,
  },
  {
    id: 97,
    cooking_tech_id: 2008,
    potatoe_variety_id: 1022,
  },
  {
    id: 98,
    cooking_tech_id: 2008,
    potatoe_variety_id: 1025,
  },
  {
    id: 99,
    cooking_tech_id: 2008,
    potatoe_variety_id: 1026,
  },
  {
    id: 100,
    cooking_tech_id: 2008,
    potatoe_variety_id: 1030,
  },
  {
    id: 101,
    cooking_tech_id: 2009,
    potatoe_variety_id: 1001,
  },
  {
    id: 102,
    cooking_tech_id: 2009,
    potatoe_variety_id: 1010,
  },
  {
    id: 103,
    cooking_tech_id: 2009,
    potatoe_variety_id: 1011,
  },
  {
    id: 104,
    cooking_tech_id: 2009,
    potatoe_variety_id: 1028,
  },
  {
    id: 105,
    cooking_tech_id: 2010,
    potatoe_variety_id: 1012,
  },
  {
    id: 106,
    cooking_tech_id: 2010,
    potatoe_variety_id: 1015,
  },
  {
    id: 107,
    cooking_tech_id: 2010,
    potatoe_variety_id: 1019,
  },
  {
    id: 108,
    cooking_tech_id: 2010,
    potatoe_variety_id: 1020,
  },
  {
    id: 109,
    cooking_tech_id: 2010,
    potatoe_variety_id: 1029,
  },
  {
    id: 110,
    cooking_tech_id: 2011,
    potatoe_variety_id: 1022,
  },
  {
    id: 111,
    cooking_tech_id: 2011,
    potatoe_variety_id: 1028,
  },
  {
    id: 112,
    cooking_tech_id: 2011,
    potatoe_variety_id: 1030,
  },
];

module.exports = {
  varieties,
  cookingTechs,
  recipes,
  ingredientQtRecipes,
  ingredients,
  quantities,
  types,
  cookingTechVars,
};
