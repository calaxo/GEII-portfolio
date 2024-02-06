const Intro = (props) => {
  const markupintro = { __html: props.intro };
  return (
    <div className="intro">
      <h1>{props.titre}</h1>
      <p  dangerouslySetInnerHTML={markupintro}></p>
    </div>
  );
};

export default Intro;
