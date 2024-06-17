import imgadmin from "@assetspreuve/admin.png";
import imgprocedure from "@assetspreuve/procedure.png";
import imgvisio from "@assetspreuve/visio.png";
import imgdga from "@assetspreuve/dga.png";
const titre = "Mise en conformité cyber avec DGA.";

const intro =
"Le but de ce projet est de mettre aux normes mon entreprise au niveau de la cybersécurité pour être en conformité et ainsi que nos clients (des pays/armées) aient confiance.";

const content = [
{
id: 1,
titretache: "Visionnage d'un webinar de la DGAC.",
tache:
"Mon patron m'a missionné pour rejoindre un Webinar lié à la cybersécurité des entreprises en relation avec la direction générale de l'armement.",
granddescription:
"Ce webinar a expliqué comment la direction de l'armement veut réglementer la cybersécurité des entreprises avec qui elle est en lien. C'est pourquoi je dois améliorer certains aspects de la cybersécurité et que nous devons réaliser des audits.",
ressource: "Le webinar.",
trace: [imgdga],
evaluation: "",
date: "29/06/2023.",
note: 4,
},

{
id: 3,
titretache: "Compte rendu à ma direction.",
tache:
"J'ai fait un compte rendu des différents aspects du webinar et de leurs effets sur l'entreprise.",
granddescription:
"J'ai dû expliquer par quelles démarches administratives il faut passer et les quelques changements informatiques qu'il faut appliquer.",
ressource: "Mes compétences de vulgarisation.",
trace: [],
evaluation: "",
date: "36/07/2023.",
note: 3,
},

{
id: 4,
titretache: "Amélioration de l'infrastructure en conséquence.",
tache:
"Pour permettre de réduire les démarches, je mets certaines choses déjà au niveau requis par la DGA.",
granddescription:
"Il est par exemple demandé d'avoir un compte administrateur par utilisateur pour permettre de suivre les actions et les erreurs. J'ai donc créé un compte admin pour chacun de mes collègues techniciens.",
ressource: "Mes connaissances en gestion de compte Windows.",
trace: [imgadmin],
evaluation: "",
date: "Fin 2023.",
note: 3,
},

{
id: 5,
titretache: "Rédaction de plus de procédures informatiques.",
tache:
"Pour que n'importe qui puisse apprendre le fonctionnement du système informatique et savoir quoi faire s'il se passe quelque chose, j'écris des procédures détaillées sur tous les aspects informatiques de l'entreprise.",
granddescription:
"Pour permettre à la DGA de vérifier notre infrastructure informatique et pour une meilleure transmission d'informations à mes collègues, je rédige des procédures qui expliquent tout le fonctionnement informatique de l'entreprise.",
ressource: "Les connaissances en la matière de mes collègues.",
trace: [imgprocedure],
evaluation: "",
date: "2023-2024.",
note: 3,
},

{
id: 6,
titretache: "Création de plans et de schémas du réseau.",
tache:
"Pour suivre les conseils de la DGA et simplifier la gestion informatique, je suis en train de créer des schémas détaillés du système informatique de l'entreprise.",
granddescription:
"J'utilise Microsoft Visio Professionnel qui permet de réaliser des schémas de tout type. Ceci va me permettre de détailler toute l'infrastructure dans le même document.",
ressource: "",
trace: [imgvisio],
evaluation: "",
date: "2024.",
note: 3,
},
];

const conclu =
"Je n'ai pas encore fini car c'est un projet qui prend beaucoup de temps à cause des démarches techniques et administratives. Malgré tout, les différentes parties nécessaires sont déjà prêtes.";

const data = {
titre,
intro,
content,
conclu,
};

export default data;