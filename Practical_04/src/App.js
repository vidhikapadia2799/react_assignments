import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { Todos } from "./Constant";

function App() {
  const [items, setitems] = useState(Todos);

  return (
    <div className="main_div">
      <div className="center_div">
        <div>
          <Header />
          <br />
          <ol>
            {items.map((item, index) => {
              return <TodoList todo={item} key={index} />;
            })}
          </ol>
          <br />
          <div className="btnstyle">
            <button>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
