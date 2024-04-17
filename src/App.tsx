import { Suspense, StrictMode } from "react";
import { RouterProvider, createHashRouter  } from "react-router-dom";
import Layout from "@layout/Layout";


import routes from "~react-pages";
const router = createHashRouter([
  {
    element: <Layout />,
    children: routes,
  },
]);

// Définition du composant App
function App() {
  return (
    <Suspense fallback={<a>Loading</a>}>
      <StrictMode>
        {/* Conteneur principal avec en-tête, contenu et pied de page */}
        <div className="flex min-h-screen flex-col">

          <RouterProvider router={router} /> {/* Contenu */}

        </div>
      </StrictMode>
    </Suspense>
  );
}

export default App;