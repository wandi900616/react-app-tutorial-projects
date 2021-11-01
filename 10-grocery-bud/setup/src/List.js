import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = (props) => {
  const { list, removeItem, editItem } = props;
  // only destructure list property from App.js
  //list is an array containing elements
  //each element have properties of id,title
  return (
    <div className="grocery-list">
      {list.map((element) => {
        const { id, title } = element;
        return (
          <article key={id} className="grocery-item">
            <p className="title">{title}</p>
            <div className="btn-container">
              <button
                type="button"
                className="edit-btn"
                onClick={() => editItem(id)}>
                <FaEdit />
              </button>
              <button
                type="button"
                className="delete-btn"
                onClick={() => removeItem(id)}>
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
