import { Route, Routes } from "react-router-dom";

import Home from "./page/Home";
import Projetos from "./page/Projetos";
import Sobre from "./page/Sobre";
import Contato from "./page/Contato";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </>
  )
}

export default App
