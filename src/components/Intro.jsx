const Intro = (props) => {

    return (
    <div className="intro">
        <h1>{props.titre}</h1>
        <p>{props.intro}</p>
        </div>

    );

};

export default Intro;