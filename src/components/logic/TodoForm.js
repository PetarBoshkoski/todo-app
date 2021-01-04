import React from "react";
import TimePicker from "react-time-picker";
import {
  Form,
  Label,
  Input,
  TimePriorityWrapper,
  Button,
  ElementWrapper,
  ElementTitle,
  Select,
  Option
} from "../ui/TodoFormStyled";
const TodoForm = (props) => {
  return (
    <>
      <Form onSubmit={(event) => props.submitTodo(event)}>
        <Label htmlFor="insertTodo" className="hidden">
          Insert
        </Label>
        <Input
          type="text"
          id="insertTodo"
          required
          placeholder="What do you need to do?"
          autoComplete="off"
          onChange={(event) => props.setTodoText(event.target.value)}
        ></Input>
        <TimePriorityWrapper>
          <ElementWrapper>
            <ElementTitle>Todo time</ElementTitle>
            <TimePicker
              onChange={props.setClockValue}
              value={props.clockValue}
            />
          </ElementWrapper>
          <ElementWrapper>
            <ElementTitle>Todo priority</ElementTitle>
            <Select
              value={props.priority}
              onChange={(event) => props.setPriority(event.target.value)}
            >
              <Option value="None">Choose</Option>
              <Option value="Low">Low priority</Option>
              <Option value="Medium">Medium priority</Option>
              <Option value="High">High priority</Option>
            </Select>
          </ElementWrapper>
        </TimePriorityWrapper>
        <Button>Submit</Button>
      </Form>
    </>
  );
};

export default TodoForm;
