import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Status from "./Status";
import {
  TodosContainer,
  TodosWrapper,
  ToDoInput,
  TodoListContainer,
  Header,
  ClearSection,
  Button,
} from "../ui/MainStyled";
import { TodoListWrapper } from "../ui/TodoListStyled";
import { MDBIcon } from "mdbreact";

const Main = () => {
  const [todoText, setTodoText] = useState("");
  const [clockValue, setClockValue] = useState("10:00");
  const [priority, setPriority] = useState("None");
  const [totalTodos, setTotalTodos] = useState(0);
  const [clearDisabled, setClearDisabled] = useState(true);
  const [todoList, setTodoList] = useState([]);

  const submitTodo = (event) => {
    event.preventDefault();
    setTodoList([
      ...todoList,
      {
        hour: clockValue,
        text: todoText,
        priority: priority,
        done: false,
      },
    ]);
    setTotalTodos(totalTodos + 1);
    setClearDisabled(false);
  };
  const clearTodos = () => {
    setTodoList([]);
    setTotalTodos(0);
    setClearDisabled(true);
  };

  const removeTodo = (ind) => {
    const updatedList = todoList.filter((item, index) => index !== ind);
    setTodoList(updatedList);
    setTotalTodos(totalTodos - 1);
  };
  useEffect(() => {
    if (totalTodos === 0) {
      setClearDisabled(true);
    }
  }, [totalTodos]);
  return (
    <>
      <TodosContainer>
        <TodosWrapper>
          <Status totalTodos={totalTodos} />
          <ToDoInput>
            <TodoForm
              setTodoText={setTodoText}
              setClockValue={setClockValue}
              clockValue={clockValue}
              submitTodo={submitTodo}
              priority={priority}
              setPriority={setPriority}
            />
          </ToDoInput>
          <TodoListContainer>
            <TodoListWrapper>
              <Header>Todo Name</Header>
              <Header>Description</Header>
              <Header>Priority</Header>
              <Header>Remove</Header>
            </TodoListWrapper>
            {todoList.map((item, index) => {
              return (
                <TodoList
                  key={index}
                  index={index}
                  item={item}
                  removeTodo={removeTodo}
                />
              );
            })}
          </TodoListContainer>
          <ClearSection>
            <Button clearDisabled={clearDisabled} disabled={clearDisabled} type="button" onClick={clearTodos}>
            <MDBIcon icon="trash-alt" /> Clear all
            </Button>
          </ClearSection>
        </TodosWrapper>
      </TodosContainer>
    </>
  );
};

export default Main;
