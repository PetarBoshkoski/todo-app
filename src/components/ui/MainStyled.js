import styled from "styled-components";
export const TodosContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70vw;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 50px;
  background-color: #fff;
  border: 1px solid black;
  border-radius: 5px;
  -webkit-box-shadow: 0 20px 20px rgba(0, 0, 0, 0.55);
  -moz-box-shadow: 0 20px 20px rgba(0, 0, 0, 0.55);
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.55);

  @media screen and (max-width: 768px) {
    width: 90vw;
  }
`;

export const TodosWrapper = styled.div`
  width: 100%;
  min-height: 250px;
`;

export const ToDoInput = styled.div`
  width: 100%;
`;

export const TodoListContainer = styled.div`
  margin-top: 30px;
`;

export const Header = styled.span`
  font-weight: bold;
  margin-bottom: 15px;
  @media screen and (max-width: 432px) {
    font-weight: normal;
    font-size: 10px;
  }
  @media screen and (max-width: 390px) {
    font-weight: normal;
    font-size: 10px;
  }
`;

export const ClearSection = styled.div`
  text-align: right;
  @media screen and (max-width: 432px) {
    text-align: center;
  }
`;

export const Button = styled.button`
  display: ${(props) => (props.clearDisabled ? "none" : "")};
  margin: 20px 20px 20px 0;
  width: 20%;
  height: 30px;
  border: 2px solid #a00008;
  color: #a00008;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  background: transparent;
  &:focus {
    outline: none;
    box-shadow: none;
  }
  &:hover {
    background: #ddd;
  }
  @media screen and (max-width: 768px) {
    font-weight: normal;
    font-size: 14px;
  }
  @media screen and (max-width: 432px) {
    font-weight: normal;
    font-size: 10px;
    width: 50%;
    margin: 0;
    margin: 20px 0 20px 0;
    padding: 0;
  }
`;
