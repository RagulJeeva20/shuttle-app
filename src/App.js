import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { useState } from "react";
import MatchInfo from "./components/MatchInfo";
import Match from "./components/Match";
import Home from "./components/Home";
import Tournament from "./components/Tournament";
import Matches from "./components/Matches";

function App() {
  const [player1, setPlayer1] = useState("player 1");
  const [player2, setPlayer2] = useState("player 2");
  const [points, setPoints] = useState(16);
  const [point1, setPoint1] = useState(0);
  const [point2, setPoint2] = useState(0);
  const [count, setCount] = useState(0);
  const [prevPoints, setPrev] = useState(16);
  const [teams, setTeams] = useState([]);

  if (point1 === points - 1 && point2 === points - 1) {
    setPoints(+points + 1);
    setCount(+count + 1);
  }

  const handleAdd = (newteamname) => {
    setTeams([...teams, newteamname]);
  };

  const onRemove = (index) => {
    const newteams = teams.filter((team) => team.index !== index);
    setTeams(newteams);
  };


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route
          path="matchinfo"
          element={
            <MatchInfo
              player1={player1}
              setPlayer1={setPlayer1}
              player2={player2}
              setPlayer2={setPlayer2}
              points={points}
              setPoints={setPoints}
              setPrev={setPrev}
            />
          }
        />
        <Route
          path="match"
          element={
            <Match
              player1={player1}
              player2={player2}
              points={points}
              point1={point1}
              point2={point2}
              setPoint1={setPoint1}
              setPoint2={setPoint2}
              setPoints={setPoints}
              prevPoints={prevPoints}
              count={count}
              setCount={setCount}
            />
          }
        />
        <Route
          path="tournament"
          element={<Tournament teams={teams} handleAdd={handleAdd} onRemove={onRemove} />}
        />
        <Route path="matches" element={<Matches teams={teams} setTeams={setTeams}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
