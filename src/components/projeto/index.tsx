import Paragrafo from "../paragrafo";
import Titulo from "../titulo";

import { Card, LinkBotao } from "./styles";

const Projeto = () => {
  return(
  <Card>
    <Titulo>Projeto lista de tarefas</Titulo>
    <Paragrafo tipo="secundario">
      Lista de tarefas feitas com VueJS
    </Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
  )
}

export default Projeto
