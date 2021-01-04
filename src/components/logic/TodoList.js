import React from "react";
import { TodoListWrapper, Element } from "../ui/TodoListStyled";
import { MDBIcon } from "mdbreact";
const TodoList = (props) => {
  return (
    <>
      <TodoListWrapper>
        <Element>{props.item.hour} </Element>
        <Element>{props.item.text} </Element>
        <Element>{props.item.priority} </Element>
        <Element>
        <MDBIcon icon="trash-alt" onClick={() => props.removeTodo(props.index)}/>
        </Element>
      </TodoListWrapper>
    </>
  );
};

export default TodoList;
