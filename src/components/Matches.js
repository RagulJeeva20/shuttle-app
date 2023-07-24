import React, { useState, useEffect } from "react";
import "../styles/Matches.css";

const Matches = ({ teams }) => {
  const [created_Match, setMatches] = useState([]);
  const [selectedMatchIndex, setSelectedMatchIndex] = useState(null);

  function createMatches(teams) {
    const matches = [];
    for (let i = 0; i < teams.length; i++) {
      for (let j = i + 1; j < teams.length; j++) {
        const team1 = teams[i];
        const team2 = teams[j];
        matches.push({ team1, team2, team1Point: 0, team2Point: 0, saved: false }); 
      }
    }
    return matches;
  }

  useEffect(() => {
    const createdMatch = createMatches(teams);
    setMatches(createdMatch);
  }, [teams]);

  const handleSave = () => 
  {
    if (selectedMatchIndex === null) 
    {
      return;
    }

    const updatedMatches = [...created_Match];
    const selectedMatch = updatedMatches[selectedMatchIndex];

    if (selectedMatch.team1Point > selectedMatch.team2Point) 
    {
      selectedMatch.team1.wins += 1;
      selectedMatch.team1.points += 3;
      selectedMatch.team1.diff += selectedMatch.team1Point - selectedMatch.team2Point;
      selectedMatch.team1.matches += 1;

      selectedMatch.team2.diff += selectedMatch.team2Point - selectedMatch.team1Point;
      selectedMatch.team2.matches += 1;
    }
     else if (selectedMatch.team1Point < selectedMatch.team2Point)
    {
      selectedMatch.team2.wins += 1;
      selectedMatch.team2.points += 3;
      selectedMatch.team2.diff += selectedMatch.team2Point - selectedMatch.team1Point;
      selectedMatch.team2.matches += 1;

      selectedMatch.team1.diff += selectedMatch.team1Point - selectedMatch.team2Point;
      selectedMatch.team1.matches += 1;
    }
    selectedMatch.saved = true;
    updatedMatches[selectedMatchIndex] = selectedMatch;
    setMatches(updatedMatches);
  };

  const handleInputChange = (index, point, value) => 
  {
    if (created_Match[index].saved) 
    {
      return;
    }
    const updatedMatch = { ...created_Match[index], [point]: parseInt(value) };
    const updatedMatches = [...created_Match];
    updatedMatches[index] = updatedMatch;
    setMatches(updatedMatches);
  };

  const pointstable = teams.sort((a, b) => {
    if (a.points !== b.points) {
        return b.points - a.points;
    } else {
        return b.diff - a.diff;
    }
});
  return (
      <div className="fulltournament">
        <div className="fullmatches">
          <div className="matcheshead">
            Tournament Matches
          </div> 
          <div className="matchesbox">
              {created_Match.map((match, index) => (
                <div key={index} className="match1">
                  <h3 className="eachmatch">
                    {match.team1.name} vs {match.team2.name}
                  </h3>
                  <div className="score" onClick={() => setSelectedMatchIndex(index)}>
                    <span className="input1">
                      {match.team1.name}
                      <input
                          className="inputbox"
                          type="number"
                          value={match.team1Point}
                          onChange={(e) => handleInputChange(index, "team1Point", e.target.value)}
                          disabled={match.saved} // Disable input if match is saved
                        />
                    </span>
                    <span className="input1">
                      {match.team2.name}
                        <input  
                          className="inputbox"
                          type="number"
                          value={match.team2Point}
                          onChange={(e) => handleInputChange(index, "team2Point", e.target.value)}
                          disabled={match.saved} // Disable input if match is saved
                        />
                    </span>
                    <button className="savebutton1" onClick={handleSave}  disabled={match.saved}>Save</button>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="table">
          <h3 className="scorehead">Scorecard</h3>
          <table border={1} cellPadding={10}>
            <thead>
              <tr>
                <td width={'35%'} align="center">Team</td>
                <td>Matches</td>
                <td>wins</td>
                <td>points</td>
                <td>difference</td>
              </tr>
            </thead>
            <tbody>
              {pointstable.map((team, index) => (
                <tr key={index}>
                  <td>{team.name}</td>
                  <td>{team.matches}</td>
                  <td>{team.wins}</td>
                  <td>{team.points}</td>
                  <td>{team.diff}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  );
};

export default Matches;
