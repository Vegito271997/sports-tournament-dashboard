import { useState } from "react";
import Players from "./Players";
import Validate from "../utils/Validate";
import { useDispatch, useSelector } from "react-redux";
import { addSports } from "../utils/sportsSlice";

const Team = ({ team, gameIndex, teamIndex, onAddPlayer }) => {
  const [visibleData, setVisibleData] = useState(team.players.slice(0, 3));
  const [showMore, setShowMore] = useState(false);
  const [addPlayer, setAddPlayer] = useState({
    playerName: "",
    playerAge: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const newData = useSelector((store) => store.sports.sport);
  const showMorePlayer = () => {
    setShowMore(!showMore);
    if (!showMore) {
      setVisibleData(team.players);
    } else {
      setVisibleData(team.players.slice(0, 3));
    }
  };

  const handleAddPlayer = (e) => {
    debugger;
    const message = Validate(addPlayer.playerName, addPlayer.playerAge);
    if (message) setErrorMessage(message);
    else {
      errorMessage && setErrorMessage("");
      dispatch(
        addSports({
          data: {
            gameIndex: gameIndex,
            teamIndex: teamIndex,
            name: addPlayer.playerName,
            age: addPlayer.playerAge,
          },
          isUpdate: true,
        })
      );
      console.log(gameIndex);
      console.log(teamIndex);
      console.log(newData);

      // onAddPlayer(
      //   gameIndex,
      //   teamIndex,
      //   addPlayer.playerName,
      //   addPlayer.playerAge
      // );
      // setAddPlayer({
      //   playerName: "",
      //   playerAge: "",
      // });
    }
  };

  const handleChange = (input, value) => {
    setAddPlayer((prevValues) => ({
      ...prevValues,
      [input]: value,
    }));
  };

  const handleBlur = () => {
    setErrorMessage("");
  };
  return (
    <div>
      <div>
        <h3 className="font-semibold pr-32 pb-4 text-center pt-6 text-xl">
          {team.team_name} ({team.players.length})
        </h3>
      </div>
      <div className="flex pl-16 pt-10">
        <input
          type="text"
          value={addPlayer.playerName}
          onChange={(e) => handleChange("playerName", e.target.value)}
          onBlur={handleBlur}
          placeholder="Enter players name"
          className="p-2 placeholder:italic placeholder:text-slate-400 focus:bg-slate-100 transition-colors duration-300  border-spacing-1 mr-5 bg-slate-200 h-10 rounded-lg w-1/2"
        ></input>
        <input
          type="number"
          value={addPlayer.age}
          onChange={(e) => handleChange("playerAge", e.target.value)}
          onBlur={handleBlur}
          placeholder="age"
          className="p-2 placeholder:italic placeholder:text-slate-400 focus:bg-slate-100 transition-colors duration-300   border border-spacing-1 mr-5 bg-slate-200 h-10 rounded-lg w-36 "
        ></input>
        <button
          onClick={handleAddPlayer}
          className="bg-purple-400 w-32 hover:bg-purple-500 rounded-lg"
        >
          Add
        </button>
        <p className="text-red-500 pl-4 italic">{errorMessage}</p>
      </div>
      {visibleData.map((player, index) => (
        <Players key={index} player={player} />
      ))}
      {team.players.length > 3 && (
        <p
          onClick={showMorePlayer}
          className="mt-3 mb-5 cursor-pointer h-4 text-xs w-20 rounded-lg pl-2 ml-16 italic bg-slate-200 text-slate-800"
        >
          {showMore ? "view less" : "view more"}
        </p>
      )}
    </div>
  );
};

export default Team;
