import "./reset.css";
import "./index.css";
import Cabecalho from "./componentes/Cabecalho/Cabecalho.js";
import Sobre from "./componentes/Sobre/Sobre.js";
import Projetos from "./componentes/Projetos/Projetos.js";
import Habilidades from "./componentes/Habilidades/Habilidades.js";
import Contato from "./componentes/Contato/Contato.js";
import Banner from "./componentes/Banner/Banner.js";
import Container from "./componentes/Container/Container.js";
import Rodape from "./componentes/Rodape/Rodape.js";

function App() {
  return (
    <>
      <Cabecalho />
      <Container>
        <Banner />
        <Sobre />
        <Habilidades />
        <Projetos />
        <Contato />
      </Container>

      <Rodape />
    </>
  );
}

export default App;
