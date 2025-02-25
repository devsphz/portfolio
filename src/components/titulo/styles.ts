import styled from "styled-components";

// Defina o tipo Props corretamente
type Props = {
  fontSize?: number; // fontSize é opcional
};

export const Titulo = styled.h3<Props>`
  color: #282a35;
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '14px')};
  font-weight: bold;
  margin-bottom: 16px;
`;
