import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
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

  // use this function
  const fetchData = () => {};

  return (
    <>
      {data.map((e, i) => {
        <Card key={i} title={e.title} body={e.body} />;
      })}
    </>
  );
}

export default App;
