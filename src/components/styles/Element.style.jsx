import styled from "styled-components";

export const TagELement = styled.span`
  display: inline-block;
  color: ${(props) =>props.theme.CardBack };
  background-color: blue;
  margin-bottom: 10px;
  padding: 5px 10px;
  border-radius: 50px;
  font-size: 0.7em;
`;

export const H1 = styled.h1`
  color: ${(props) => props.theme.color};
`;

export const P = styled.p`
  width: 280px;
  font-size: 13px;
  line-height: 1.4;
  color: ${(props) => props.theme.color};
  margin: 20px 0;
`;

export const Image = styled.img`
  position: absolute;
  top: 30px;
  right: -20px;
  z-index: 0;
`;
