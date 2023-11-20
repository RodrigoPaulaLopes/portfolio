import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Habilidades from "../pages/Habilidades";

const Rotas = () => {
  return (
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/sobre" Component={Sobre} />
        <Route path="/habilidades" Component={Habilidades} />
      </Routes>
  );
};

export { Rotas };
