import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import { INICIO, CONOCENOS, SERVICIOS, CONTACTANOS } from "./ui/routes/Paths";
import Inicio from "./ui/pages/Inicio";
import Conocenos from "./ui/pages/Conocenos";
import Servicios from "./ui/pages/Servicios";
import Contactanos from "./ui/pages/Contactanos";
import Root from "./ui/pages/Root";
import ErrorPage from "./ui/pages/ErrorPage";

//loader: () => redirect(INICIO), en lugar del componente Delete

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => redirect(INICIO),
      },
      {
        path: INICIO,
        element: <Inicio />,
      },
      {
        path: CONOCENOS,
        element: <Conocenos />,
      },
      {
        path: SERVICIOS,
        element: <Servicios />,
      },
      {
        path: CONTACTANOS,
        element: <Contactanos />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
