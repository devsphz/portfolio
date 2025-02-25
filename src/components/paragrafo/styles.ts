import styled from "styled-components";

// Defina o tipo Props corretamente
type Props = {
  fontSize?: number; // fontSize é opcional
};

export const P = styled.p<Props>`
  font-size: 14px;
  color: ${(props) => (props.tipo === 'principal' ? '#282a35' : '#949494')};
  line-height: 22px;
`;
