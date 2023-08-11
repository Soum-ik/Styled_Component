import { styled } from "styled-components";
import Custom from "../Custom";

export const StyledCustom = styled(Custom)`
  background: ${(props) => props.color};
`;
