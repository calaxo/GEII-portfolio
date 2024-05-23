import ref_geii from "@assets/ref_geii.pdf";

const TimelineEN = () => {
  return (
    <div className="">

      <div className="mt-20 w-full text-center justify-center">
        <div>
          <h2 className="pt-4 font-bold text-3xl mb-4 justify-center">À propos de moi</h2>
          <p>
            Je m'appelle Axel Calendreau et ceci est mon portfolio.
          </p>
          <p>
            Un portfolio est un moyen de présenter son parcours et ses connaissances via la présentation des différents projets accomplis.
          </p>
          <p>
            Prenez plaisir à découvrir ce que j'ai pu explorer dans l'électronique et l'informatique.
          </p>
          <p>
            Merci pour votre lecture, pour toute question, les moyens de me contacter sont affichés un peu partout.
          </p>
          <p className="pt-4 font-bold text-3xl">
            Mon parcours :
          </p>
        </div>
      </div>
      
      <div className="mt-20 w-full flex justify-center">
        <div className="max-w-screen-lg w-full flex">
          <div className="flex-1 pr-8">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Point de départ</h2>
              <p>
                Depuis que j'ai l'âge de me souvenir, je n'ai pas arrêté d'être curieux et de vouloir repousser mes limites pour pouvoir découvrir et apprendre le plus de choses possible.
              </p>
              <p>
                C'est pour cela que je me suis très vite tourné vers des domaines techniques tels que l'électronique et la science, car la quantité de choses à connaître est quasiment infinie.
              </p>
              <p>
                Depuis peu, j'essaie aussi d'acquérir un savoir-faire artistique, car je me rends compte que cela peut être utile notamment pour faire des sites web comme ce portfolio.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Universitaire</h2>
              <p>
                Je suis actuellement en Bachelor Universitaire de Technologie en Génie Électrique et Informatique Industrielle à l'IUT d'Angoulême.
                Durant 3 années, j'ai pu apprendre de nombreuses choses en rapport avec l'électronique, l'informatique embarquée et l'automatisme.
                Je ne pense pas que je travaillerai dans un métier strictement en rapport avec ce que j'ai appris, mais je sais que j'ai pu apprendre de nombreuses choses utiles pour plus tard.
                <a className="text-blue-600 font-semibold text-2xl" href={ref_geii}> lien vers le referentiels de compétences </a>
              </p>
            </div>
          </div>
          <div className="w-20 flex justify-center items-center">
            <div className="h-[35rem] w-6 bg-gradient-to-b animate-text from-teal-500 via-emerald-500-500 to-purple-500
            text-5xl font-black text-transparent hover:from-purple-500 hover:via-emerald-500 hover:to-teal-500"></div>
          </div>
          <div className="flex-1 pl-8">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Professionnel</h2>
              <p>
                Durant mes premières années dans le monde professionnel, j'ai fait de nombreuses vacances scolaires en intérim et dans des métiers physiques,
                ce qui me permet d'apprécier encore plus le fait d'être utile grâce à mes connaissances et mon savoir-faire actuellement.
              </p>
              <p>
                Grâce à la filière GEII, j'ai pu trouver une alternance dans l'entreprise Héli Union Training Center, une école de pilotage d'hélicoptère.
                C'est le meilleur métier que j'ai pu faire, j'y suis technicien simulateur d'hélicoptère et administrateur réseau.
                Je peux apprendre et mettre en pratique l'informatique, la maintenance et l'aéronautique, qui sont des domaines passionnants.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Futur</h2>
              <p>
                Depuis quelque temps, je me suis inscrit en école d'ingénieur en cursus informatique avec la même entreprise en alternance pour me permettre de continuer à travailler 
                dans la même entreprise tout en obtenant un meilleur diplôme.
                J'espère aussi que ce cursus me permettra de trouver ma voie et de choisir dans quel domaine informatique je veux travailler.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-20 w-full text-center justify-center">
        <div>
          <h2 className="pt-4 font-bold text-3xl mb-4 justify-center">Loisirs</h2>
          <p>
            En dehors de mes activités académiques et professionnelles, j'aime profiter de la vie, faire du sport pour me vider l'esprit et être curieux de tout grâce au bricolage, aux discussions et à l'exploration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimelineEN;
