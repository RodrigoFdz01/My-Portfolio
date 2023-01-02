import React from "react";
// import Home from "./components/Home/Home";
// import About from "./components/About/About";
// import Portfolio from "./components/Portfolio/Portfolio";
// import Contact from "./components/Contact/Contact";
// import Skills from "./components/Skills/Skills";
import "./Navbar.css";

const NavBar = () => {
  return (
    <nav className="center nav">
      <ul className="nav__list">
        <li className="nav__list-item">
          <a href="#Portfolio" className="link link--nav">
            Portfolio
          </a>
        </li>
        <li className="nav__list-item">
          <a href="#Skills" className="link link--nav">
            Skills
          </a>
        </li>

        <li className="nav__list-item">
          <a href="#Contact" className="link link--nav">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

/*import React, { useState } from "react";
import Todo from "./todo";

const Form = () => {
  const [textInput, setTextInput] = useState({});
  const [todos, setTodos] = useState([{ tarea: "todo 1" }]);

  const handleChange = (e) => setTextInput(e.target.value);

  const handleClick = (e) => {
    if (Object.keys(textInput).length === 0) {
      alert("el campo no puede estar vacio");
      return;
    }
    // setTodos([...todos, textInput]);
    //setTextInput("");
  };

  function handleAdd(e) {
    e.preventDefault();
    setTodos([...todos, textInput]);
  }

  const deleteTodo = (indice) => {
    const resetTodos = [...todos];
    resetTodos.splice(indice, 1);
    setTodos(resetTodos);
  };

  return (
    <>
      <form onSubmit={handleAdd}>
        <label>Agregar tarea</label>
        <br />
        <input type="text" name="tudu" onChange={handleChange} />
        <button onClick={handleClick}>Agregar</button>
      </form>
      {todos.map((value, index) => (
        <Todo
          todo={value.tudu}
          key={index}
          index={index}
          deleteTodo={deleteTodo}
        />
      ))}
    </>
  );
};

export default Form;
*/
