import { useState, useEffect } from "react";
import { Weekday, Month } from "./Constant";
import "./App.css";

const App = () => {
  const [inputList, setinputList] = useState("");
  const [items, setItems] = useState([]);
  const [showButton, setShowButton] = useState(true);
  const [showInput, setShowInput] = useState(false);

  const AddButton = () => <button onClick={addTodo}>+</button>;

  const addTodo = () => {
    setShowInput(!showInput);
    setShowButton(!showButton);
  };

  const onChangehandler = (event) => {
    setinputList(event.target.value);
  };

  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElement, index) => {
        return index !== id;
      });
    });
  };

  const dateObj = new Date();
  const currentDate = dateObj.getDate();

  useEffect(() => {
    let storeDate = localStorage.getItem("Date");
    let todosFromFetch = localStorage.getItem("Lists");

    // check if the storeDate fetched is equal to currentDate
    if (JSON.parse(storeDate) === currentDate) {
      setItems(JSON.parse(todosFromFetch));
    } else {
      setItems([]);
      localStorage.setItem("Lists", JSON.stringify(items));
      localStorage.setItem("Date", JSON.stringify(currentDate));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Lists", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <div className="header">
            <div className="date">
              <div className="dateStyle">
                <div>
                  {dateObj.getDate()}
                  <sup>th&nbsp;</sup>
                </div>
                <div>&nbsp;{Month[dateObj.getMonth()]}</div>
                <div>&nbsp;{dateObj.getFullYear()}</div>
              </div>

              <div>{Weekday[dateObj.getDay()]}</div>
            </div>
          </div>
          <br />

          <ol>
            {items.map((item, index) => {
              return (
                <div className="todo_style" key={index}>
                  <li>{item}</li>
                  <i
                    className="fa fa-times"
                    onClick={() => {
                      deleteItems(index);
                    }}
                  />
                </div>
              );
            })}
          </ol>

          {showButton ? <AddButton /> : null}
          {showInput ? (
            <input
              type="text"
              value={inputList}
              placeholder="Add an item"
              onChange={onChangehandler}
              onKeyDown={(event) => {
                if (event.code === "Escape") {
                  console.log("ecs");
                  setShowInput(!showInput);
                  setShowButton(!showButton);
                  setinputList("");
                }
              }}
              onKeyPress={(event) => {
                if (event.code === "Enter" || event.code === "NumpadEnter") {
                  if (inputList.replace(/\s/g, "").length <= 0) {
                    alert("Enter something");
                    return;
                  }
                  setItems((oldItems) => {
                    return [...oldItems, inputList];
                  });
                  setinputList("");
                }
              }}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default App;
