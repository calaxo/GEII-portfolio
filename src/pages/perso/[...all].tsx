import perdu from "@assets/perdu.jpg";

const Page404 = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center ">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="mb-4 text-xl text-gray-700">Page introuvable</p>
      <p className="mb-8 text-lg text-gray-700">
        Désolé, la page que vous recherchez n'existe pas.
      </p>
      <img
        className="h-64 w-64 rounded-full object-cover"
        src={perdu}
        alt="Page introuvable"
      />
      <p className="mt-8 text-lg text-gray-700">
        Retournez à{" "}
        <a href="/" className="text-blue-500">
          l'accueil
        </a>
        .
      </p>
    </div>
  );
};

export default Page404;
