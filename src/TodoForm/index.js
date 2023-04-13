import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm () {
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const {
    addTodo,
    setOpenModal
  } = React.useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }

  const onCancel = () => {
    setOpenModal(false);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue); 
    setOpenModal(false);
  }

  return(
    <form className="FormTodo" onSubmit={onSubmit}>
      <label>Escribe tu nuevo ToDo  </label>

      <textarea 
        value={newTodoValue}
        onChange ={onChange}
        placeholder="Agrega tu tarea aqui"
      />

      <div>
        <button className="Button Button-cancel" type = "submit" onClick = {onCancel} >
          Cancelar
        </button>
        <button className="Button Button-submit" type = "submit" >
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };