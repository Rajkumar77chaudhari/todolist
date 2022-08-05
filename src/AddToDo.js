import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import "./style.css";

const AddToDo = (props) => {
  return (
    <li className="listItem">
      <div style={{ display: "flex", alignItems: "center" }}>
        <span>{props.srNo}</span>
        <h2>{props.text}</h2>
      </div>
      <DeleteIcon
        onClick={() => {
          props.onSelect(props.id);
        }}
      />
    </li>
  );
};

export default AddToDo;
