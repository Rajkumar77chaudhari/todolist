import React from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import AddToDo from "./AddToDo";
import { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState("");
  const [items, setItems] = useState([]);

  const inputEvent = (e) => {
    e.preventDefault();
    setTodo(e.target.value);
  };

  const listOfItems = (e) => {
    if (todo === "" || todo === null) {
      alert("Todo can't be empty, Enter something");
    } else {
      setItems((oldItems) => {
        return [...oldItems, todo];
      });
    }
  };

  const deleteItem = (id) => {
    console.log("Deleted");

    setItems((oldItems) => {
      return oldItems.filter((arrEle, index) => {
        console.log(arrEle);
        return index !== id;
      });
    });
  };

  return (
    <div className="App-container">
      <h1>ToDo-List</h1>
      <div className="input">
        <input type="text" id="inputBar" value={todo} onChange={inputEvent} />
        <AddCircleIcon
          color="secondary"
          style={{ fontSize: 45, margin: "inherit" }}
          onClick={listOfItems}
        />
      </div>
      <ul className="list">
        {items.map((item, index) => {
          return (
            <>
              <AddToDo
                text={item}
                key={index}
                id={index}
                onSelect={deleteItem}
                srNo={index + 1}
              />
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
