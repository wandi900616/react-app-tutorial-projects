import React, { useState, useEffect, useRef } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalstorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalstorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  const exampleRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
    console.log(exampleRef);
  }, [list]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("hello");
    if (!name) {
      // console.log("name is empty");
      //i.e if name is falsie@nil
      //set some alert
      // setAlert({ show: true, type: "danger", msg: "please enter value" });
      showAlert(true, "danger", "enter value please");
    } else if (name && isEditing) {
      console.log("name and isEditing is true");
      console.log(name, editId);

      const newList = list.map((object) => {
        if (object.id == editId) {
          // object.title = name; option 1
          // a better way to do this is
          // object = { ...object, title: name }; option 2
          return { ...object, title: name }; //option 3
          // destructure item i.e. copy every key-value pair from object, then add@change title:name
          // actually dont need to assign to object again
          //this actually change object
          // { ...object, title: name }//not work. return must be there
        }
        return object;
      });

      setList(newList);
      setEditId(null);
      setIsEditing(false);
      setName("");
      showAlert(true, "success", "item edited");

      //deal with edit
    } else {
      //means user want to add
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
      showAlert(true, "success", "item added");
      // console.log(list);
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show: show, type: type, msg: msg });
  };
  const clearAllItems = () => {
    showAlert(
      true,
      "danger",
      `${list.length} item${list.length > 1 ? "s" : ""} cleared`
    );
    setList([]);
  };

  const removeItem = (id) => {
    //id will be acquired button in List.js
    const newList = list.filter((object) => {
      return object.id !== id;
    });

    setList(newList);
    showAlert(true, "danger", `one item remove from list`);
  };

  const editItem = (id) => {
    const editObject = list.find((object) => {
      return object.id == id;
    });
    setEditId(editObject.id);
    setName(editObject.title);
    setIsEditing(true);
  };

  const logOut = () => {
    localStorage.clear();
  };

  return (
    <section className="section-center">
      <nav onClick={logOut} ref={exampleRef}>
        LOG OUT
      </nav>
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
        <h3 ref={exampleRef}>grocery buds</h3>
        {/* <h2 ref={exampleRef}>testing exampleRef</h2> */}
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. sayur"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="submit-btn" type="submit">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 ? (
        <div className="grocery-container">
          <List list={list} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearAllItems}>
            clear items
          </button>
        </div>
      ) : null}
    </section>
  );
}

export default App;
