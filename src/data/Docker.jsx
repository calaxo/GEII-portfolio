const titre = "Introduction a la conteneurisation via docker";

const intro = "Le but de ce projet est de réaliser un site web qui permettra de mettre en avant les projets réalisés par les étudiants de DUT GEII.";

const content = [
    { id: 1, tache: "decouverte des méthodes pour héberger plusieurs services sur la même machine", ressource: "Lors de cette étape, j'ai exploré différentes méthodes permettant d'héberger plusieurs services sur une même machine. J'ai pris connaissance des diverses approches et techniques disponibles pour optimiser les ressources matérielles.", trace: "image1", evaluation: "evaluation1" },
    { id: 2, tache: "decouverte de docker", ressource: "Au cours de cette phase, j'ai plongé dans l'univers de Docker. J'ai acquis des connaissances sur la création et la gestion de conteneurs, en mettant particulièrement l'accent sur la mise en place de bases de données grâce à Docker.", trace: "image1", evaluation: "evaluation1" },
    { id: 3, tache: "creation d'environnement de test", ressource: "J'ai appris à créer des environnements de test pour évaluer le fonctionnement des applications dans des conditions contrôlées. Cette étape a été cruciale pour garantir la fiabilité et la stabilité des conteneurs que nous avons développés.", trace: "image1", evaluation: "evaluation1" },
    { id: 4, tache: "creaton de mes propres conteneurs", ressource: "J'ai pris en charge la création de mes propres conteneurs. Cela m'a permis de personnaliser les conteneurs en fonction des besoins spécifiques du projet, en mettant l'accent sur l'efficacité et la sécurité.", trace: "image1", evaluation: "evaluation1" },
    { id: 5, tache: "interconnexion des conteneurs via des réseaux virtuels", ressource: "J'ai étudié et mis en œuvre l'interconnexion des conteneurs en utilisant des réseaux virtuels. Cette étape a été cruciale pour assurer une communication fluide entre les différents services déployés dans l'environnement Docker.", trace: "image1", evaluation: "evaluation1" },
    { id: 6, tache: "resolution des problemes", ressource: "Fort de mes compétences, j'ai résolu les problèmes rencontrés au cours du projet. J'ai mis en œuvre des solutions efficaces, notamment en développant un site React pour mettre en valeur les résultats de notre travail.", trace: "image1", evaluation: "evaluation1" },
    { id: 7, tache: "passage en infrastructure de production", ressource: "Grâce à mes compétences en développement et en conteneurisation, j'ai orchestré le passage de notre projet vers une infrastructure de production. Cela a impliqué des ajustements et des optimisations pour garantir des performances optimales en environnement réel.", trace: "image1", evaluation: "evaluation1" },
    { id: 8, tache: "tentative de réparation de Docker sur Windows", ressource: "J'ai entrepris des efforts pour résoudre les problèmes liés à Docker sur la plateforme Windows. Mes tentatives de réparation ont été documentées, détaillant les étapes entreprises pour garantir le bon fonctionnement de Docker dans cet environnement spécifique.", trace: "image1", evaluation: "evaluation1" },
    { id: 9, tache: "installation de Linux", ressource: "Afin de surmonter certaines limitations, j'ai pris la décision d'installer Linux, améliorant ainsi la compatibilité de notre projet avec différentes plates-formes. Cette étape a été nécessaire pour assurer la portabilité et la stabilité de notre solution.", trace: "image1", evaluation: "evaluation1" },
];

const conclu = "finito";

const data = { 
    titre,
    intro,
    content,
    conclu,
};

export default data;
