import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./CreateUser.module.css";
import React, { useState } from "react";

const CreateUser = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [error, setError] = useState();

  const CreateUserHandler = (event) => {
    event.preventDefault();
    if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
      setError({
        title: "не корректвый ввод",
        message: "Эти поля могут быть пустыми",
      });
      return;
    }
    if (+inputAge < 1) {
      setError({
        title: "Не корректный возраст",
        message: "Возраст должен быть больше 0",
      });
      return;
    }

    props.onClickUser(inputName, inputAge);
    setInputName("");
    setInputAge("");
  };

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setInputAge(event.target.value);
  };
  const errorHandler = () => {
    setError(false);
  };

  return (
    <div>
      {error && <ErrorModal onCloseModal={errorHandler} title={error.title} message={error.message} />}
      <Card className={styles.input}>
        <form action="" onSubmit={CreateUserHandler}>
          <label htmlFor="name">Имя</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            value={inputName}
          />
          <label htmlFor="age">Возраст</label>
          <input
            type="number"
            id="age"
            onChange={ageChangeHandler}
            value={inputAge}
          />
          <Button type="submit">Добавить пользователя</Button>
        </form>
      </Card>
    </div>
  );
};
export default CreateUser;
