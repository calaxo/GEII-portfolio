interface PropsIntro {
  titre: string;
  intro: string;
}



const Intro = ({ titre, intro }: PropsIntro) => {


  return (
    <div className="rounded-lg bg-gray-100 p-8 shadow-md">
      <h1 className="mb-4 text-3xl font-bold">{titre}</h1>
      <p
        className="text-lg leading-relaxed text-gray-700"
        dangerouslySetInnerHTML={{ __html: intro }}
      ></p>
    </div>
  );
};

export default Intro;
