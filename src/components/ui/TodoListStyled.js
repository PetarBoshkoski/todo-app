import styled from "styled-components";

export const TodoListWrapper = styled.div`
  display: grid;
  grid-template-columns: 15% 55% 15% 15%;
  text-align: center;

  @media screen and (max-width: ) {
    grid-template-columns: 15% 55% 15% 15%;
    font-weight: normal;
    font-size: 6px;
  }
`;

export const Element = styled.span`
  width: 100%;
  word-wrap: break-word;
`;
