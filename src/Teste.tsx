import styled from 'styled-components'

// Definindo o tipo das props do botão
type ButaoProps = {
  principal: boolean;
  fontSize?: string;
}

// Estilizando o botão usando styled-components
const Butao = styled.button<ButaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`;

// Criando um botão derivado com estilos adicionais
const ButaoPerigo = styled(Butao)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`;

// O componente funcional retorna os botões estilizados dentro do JSX
function Teste() {
  return (
    <>
      <Butao principal>Enviar</Butao>
      <Butao fontSize="14px" principal={false}>Cancelar</Butao>
      {/* O atributo `as="a"` faz com que o botão seja renderizado como uma âncora (<a>) mantendo os estilos */}
      <ButaoPerigo as="a" principal>
        <span>Não clique aqui</span>
      </ButaoPerigo>
    </>
  );
}

export default Teste;
