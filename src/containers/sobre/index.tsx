import Titulo from "../../components/titulo";
import Paragrafo from "../../components/paragrafo";
import { GithubSecao } from "./styles";

const Sobre = () =>(
  <section>
    <Titulo fontSize={16}>Sobre Mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Laudantium eveniet id itaque tempore et! Et obcaecati distinctio corporis, id numquam, delectus inventore ipsa culpa, doloremque quod iste odit at sunt!
    </Paragrafo>
    <GithubSecao>
    <img src="https://github-readme-stats.vercel.app/api?username=Devsphz&show_icons=true&theme=dracula&include_all_commits=true"/>
    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Devsphz&layout=compact&langs_count=7&theme=dracula"/>
    </GithubSecao>
  </section>
)

export default Sobre
