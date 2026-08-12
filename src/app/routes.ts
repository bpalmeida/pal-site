import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Aulas from "./pages/escola/Aulas";
import Passeios from "./pages/escola/Passeios";
import Eventos from "./pages/escola/Eventos";
// ATLs hidden for now
// import ATLs from "./pages/escola/ATLs";
import CavalosAPenso from "./pages/CavalosAPenso";
import Instalacoes from "./pages/Instalacoes";
import OndeEstamos from "./pages/OndeEstamos";
import Galeria from "./pages/Galeria";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "escola/aulas", Component: Aulas },
      { path: "escola/passeios", Component: Passeios },
      { path: "escola/eventos", Component: Eventos },
      // { path: "escola/atls", Component: ATLs },
      { path: "cavalos-penso", Component: CavalosAPenso },
      { path: "instalacoes", Component: Instalacoes },
      { path: "galeria", Component: Galeria },
      { path: "onde-estamos", Component: OndeEstamos },
    ],
  },
]);