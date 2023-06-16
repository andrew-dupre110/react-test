import styled from "styled-components";
import theme from "../defaultTheme";

const Tag = styled.div`
  width: max-content;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  color: #fff;
  background: ${({ backgroundColor = theme.colors.blue }) => backgroundColor};
`;

export default Tag;
