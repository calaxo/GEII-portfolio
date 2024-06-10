import imgadmin from "@assetspreuve/admin.png";
import imgprocedure from "@assetspreuve/procedure.png";
import imgvisio from "@assetspreuve/visio.png";
import imgdga from "@assetspreuve/dga.png";
const titre = "mise en conformité cyber avec DGA";

const intro =
  "Le but de ce projet et de metre aux normes mon entreprise au niveau de la cybersécurité pour etre en conformité et ainsi que nos client(des pays/armée) ai confiance";

const content = [
  {
    id: 1,
    titretache: "visionage d'un webinar de la DGAC",
    tache:
      "Mon patron ma missioné de rejoindre un Webinar lié a la cybersécurité des entreprise en relation avec la direction génerale de l'armement",
    granddescription:
      "ce webinar a expliquer comment la direction de l'armement veut reglementer la cybersecurité des entreprise avec qui elle est en lien, c'est pour cela que je doit ameliorer certain aspect de la cybersécurité et que nous allons devoir réaliser des audits",
    ressource: "le webinar",
    trace: [imgdga],
    evaluation: "",
    date: "29/06/2023",
    note: 4,
  },

  {
    id: 3,
    titretache: "compte rendu a ma direction",
    tache:
      "j'ai fait un compte rendu des diferents aspect du webinar et de leur effets sur l'entreprise",
    granddescription:
      "J'ai du expliquer par quelles démarches administrative il faut passer et les quelques changement informaituqe qu'il faut appliquer",
    ressource: "mes compétence de vulgarisation",
    trace: [],
    evaluation: "",
    date: "36/07/2023",
    note: 3,
  },

  {
    id: 4,
    titretache: "amelioration de l'infrastucture en conséquence",
    tache:
      "pour permetre de réduire les demarche je met certaine chose deja au niveau qui est requi par la dga",
    granddescription:
      "il est par exemple demandé d'avoir un compte administrateur par utlisateur pour permetre de suivre les action et les erreurs, j'ai donc créer un compte admin pour chacun de mes collegue techniciens",
    ressource: "mes connaissance gestion de compte windows",
    trace: [imgadmin],
    evaluation: "",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 5,
    titretache: "redaction de plus de procédure informatique",
    tache:
      "pour que n'import qui puisse apprendre le fonctionement du systeme informatique et pour savoir quoi fair si il se passe quelque chose j'ecrit des procédure detaille sur tout les aspect infromatique de l'entreoprise",
    granddescription:
      "pour permetre a la DGA de verifier notre infrastrucutre informatique et pour une meilleur transmistion d'information a mes collegue je rédigé des procédure qui explique tout le fonctionment informatique de l'entreprise",
    ressource: "les connaissanc en la matiere de mes collegue ",
    trace: [imgprocedure],
    evaluation: "",
    date: "15/11/2023",
    note: 3,
  },

  {
    id: 6,
    titretache: "creation de plan et de shéma du reseaux",
    tache:
      "pour suivre les conseil de la DGA et simplifer la gestion infroamtique je suis entrain de créer des shéma detaillé du systeme informatique de l'entreprise",
    granddescription:
      "J'utilise microsfot VISIO professionel qui permet de réaliser des schéma de tout type, ceci va me permetre de detailler tout l'infrastructure dans le meme document",
    ressource: "",
    trace: [imgvisio],
    evaluation: "",
    date: "10/01/2024",
    note: 3,
  },
];

const conclu =
  "Je n'ai pas encore fini car c'est un projet qui prend beaucoup de temps a cause des démarches technique et adminstrative, malgrés tout les diferentes partie nécesasire sont deja pretes";

const data = {
  titre,
  intro,
  content,
  conclu,
};

export default data;
