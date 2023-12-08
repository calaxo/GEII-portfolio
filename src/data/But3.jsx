const titre = "But 3 : SAE ";

const intro = "Le but de ce projet est de réaliser un site web qui permettra de mettre en avant les projets réalisés par les étudiants de DUT GEII."

const content = [
    { id: 1, tache: "choix projet/groupe", ressource: "Sélection du projet et constitution du groupe", trace: "image1", evaluation: "Évaluation de la sélection" },
    { id: 2, tache: "réflexion/exploration datasheet du ESP32", ressource: "Étude approfondie de la datasheet du ESP32", trace: "image2", evaluation: "Évaluation de la compréhension" },
    { id: 3, tache: "prise d'information et conseil à mes collègues durant mon alternance", ressource: "Partage d'informations et conseils pendant l'alternance", trace: "image1", evaluation: "Évaluation de l'impact des conseils" },
    { id: 4, tache: "création de documentation sur l'aspect serveur et requête", ressource: "Production de documentation sur le serveur et les requêtes", trace: "image1", evaluation: "Évaluation de la documentation" },
    { id: 5, tache: "achat d'un nom de domaine", ressource: "Achat d'un nom de domaine pour le projet", trace: "image1", evaluation: "Évaluation de l'acquisition du nom de domaine" },
    { id: 6, tache: "lien entre serveur existant et DNS", ressource: "Établissement du lien entre le serveur existant et le DNS", trace: "image1", evaluation: "Évaluation de la connexion DNS" },
    { id: 7, tache: "mise en place d'une API web simple", ressource: "Création d'une API web simple pour le projet", trace: "image1", evaluation: "Évaluation de l'API web" },
    // ... (répéter le processus pour chaque tâche)
    { id: 17, tache: "amélioration de l'interface entre le web et l'API", ressource: "Amélioration de l'interface entre le site web et l'API", trace: "image2", evaluation: "Évaluation de l'interface améliorée" },
];

const conclu = "finito"

const data = {
    titre,
    intro,
    content,
    conclu,
}

export default data;
