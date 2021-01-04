import styled from "styled-components";
export const Title = styled.h2`
  text-align: left;
  margin: 5px 0px 5px 10px;
  padding: 2px;
  color: #ca22a4;
`;

export const HorizontalLine = styled.hr``;

export const TodosStatus = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;

  @media screen and (max-width: 432px) {
    grid-template-columns: auto;
    font-weight: normal;
    font-size: 14px;
  }
`;

export const TodoElement = styled.p`
  font-weight: bold;
`;

export const Link = styled.a``;

export const Image = styled.img`
  border-radius: 50%;
  width: 30px;
  height: 30px;
`;
