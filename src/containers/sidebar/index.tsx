import Avatar from "../../components/avatar";
import Paragrafo from "../../components/paragrafo";
import Titulo from "../../components/titulo";

import { BotaoTema, Descricao, SidebarContainer  } from './styles';

const SideBar = () => (
  <aside>
    <SidebarContainer>
    <Avatar/>
    <Titulo fontSize={20}>Pedro Henrique</Titulo>
    <Paragrafo tipo="secundario" fontSize={16} >Devsphz</Paragrafo>
    <Descricao tipo="principal" fontSize={12}>Engenheiro Front-End</Descricao>
    <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
);

export default SideBar;
