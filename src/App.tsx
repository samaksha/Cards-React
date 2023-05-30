// @ts-nocheck
import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import axios from "axios";
import { io } from "socket.io-client";

interface TodoProps {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const socket = io("ws://5jbe3d-3000.csb.app");
  const [data, setData] = useState([
    {
      title: "test1",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. lasdofiajsdofjaiosfjaoisdjfiojasdoifjaoisdj foiaj sdofij aosdijf oiajds oifj aosdijf oiajs dfoijasodijf oiasjd foij asdoifj oaisd jfoaijds foi jasdoifj aodisjf oiadsj foia jsdoif jaosdif oaidsj foij aiosdfj oaidsj foiaj sdfoij adsoifj oaisdj foia jsdoifjaods ifjo iadsfjioas dfoia sdjfoijasd oif jaodsijf oji ",
    },

    {
      title: "test2",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    },
  ]);

  const [todos, setTodos] = useState<TodoProps>([]);

  useEffect(() => {
    fetchData();
  });

  // use this function
  const fetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data);
    });
  };

  const socketFetch = () => {
    socket.emit("get-data", 1);
  };

  socket.on("receive-data", (res) => {
    console.log(res);
    // setData(res.data);
    // setTodos(res.todos);
  });

  const uploadData = () => {
    // console.log("working");
    axios
      .post("https://5jbe3d-5001.csb.app/upload", { data: data, todos: todos })
      .then((res) => {
        alert("your data is uploaded");
      })
      .catch((err) => {
        alert("something went wrong");
      });
  };

  return (
    <div>
      <div>
        {data.map((e, i) => (
          <Card key={i} title={e.title} body={e.body} />
        ))}
      </div>
      <div>
        {todos.map((e, i) => (
          <p key={i}>{e.title} </p>
        ))}
      </div>
      <button onClick={() => uploadData()}> Upload </button>
    </div>
  );
}
// <button onClick={() => socketFetch()}> Socket Fetch </button>

export default App;
