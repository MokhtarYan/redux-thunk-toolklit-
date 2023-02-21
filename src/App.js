import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { fetchData, getMovies } from "./redux/slice";

function App() {
  const dispatch = useDispatch();
  const options = {
    method: "GET",
    url: "https://imdb-top-100-movies.p.rapidapi.com/",
    headers: {
      "X-RapidAPI-Key": "3486f354cfmsh6e6ebdcd1c5d748p1297a1jsne7c8e10b6e0b",
      "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
    },
  };

  return (
    <div className="App">
      <button onClick={() => dispatch(getMovies(options))}>zkjfnklnz</button>
    </div>
  );
}

export default App;
