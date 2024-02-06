const Conclu = (props) => {
  const markupconclu = { __html: props.conclu };
  return (
    <div className="conclu">
      <h1>Conclusion</h1>
      <p dangerouslySetInnerHTML={markupconclu }></p>
    </div>
  );
};

export default Conclu;
