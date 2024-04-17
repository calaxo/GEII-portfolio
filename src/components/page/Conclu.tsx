interface PropsConclu {
  conclu: string;
}



const Conclu = ({conclu}:PropsConclu) => {


  return (
    <div className="rounded-lg bg-gray-100 p-8 shadow-md">
      <h1 className="mb-4 text-3xl font-bold">Conclusion</h1>
      <p
        className="text-lg leading-relaxed text-gray-700"
        dangerouslySetInnerHTML={{ __html: conclu }}
      ></p>
    </div>
  );
};

export default Conclu;
