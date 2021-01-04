import React from "react";
import {
  Title,
  HorizontalLine,
  TodosStatus,
  TodoElement,
  Link,
  Image,
} from "../ui/StatusStyled";
const Status = (props) => {
  return (
    <>
      <Title>TODO - List </Title>
      <HorizontalLine />
      <TodosStatus>
        <TodoElement>Total: {props.totalTodos}</TodoElement>
        <TodoElement>by Petar Boshkoski</TodoElement>
        <TodoElement>
          <Link href="https://github.com/PetarBoshkoski" target="_blank"> <Image
            src="https://avatars0.githubusercontent.com/u/36934997?s=460&u=21f7677ab2d73a7e0e9f1c20d4a88add4a5e7d84&v=4"
            title="by Petar Boshkoski"
            alt="Petar B"
          />
          </Link>
        </TodoElement>
      </TodosStatus>
    </>
  );
};

export default Status;
