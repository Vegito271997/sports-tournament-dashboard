import { useState } from "react";
import Validate from "../utils/Validate";

const Players = ({ player, onAddPlayer }) => {
  const [addPlayer, setAddPlayer] = useState({
    playerName: player.name,
    playerAge: player.age,
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (input, value) => {
    setAddPlayer((prevValues) => ({
      ...prevValues,
      [input]: value,
    }));
  };

  const handleSave = () => {
    const message = Validate(addPlayer.playerName, addPlayer.playerAge);
    if (message) setErrorMessage(message);
    else errorMessage && setErrorMessage("");
  };

  return (
    <div>
      <div className="flex pl-16 pt-10">
        <input
          type="text"
          placeholder="Enter players name"
          value={addPlayer.playerName}
          onChange={(e) => handleChange("playerName", e.target.value)}
          className="p-2 placeholder:italic placeholder:text-slate-400 focus:bg-slate-100 transition-colors duration-300  border-spacing-1 mr-5 bg-slate-200 h-10 rounded-lg w-1/2"
        ></input>
        <input
          type="text"
          placeholder="age"
          value={addPlayer.playerAge}
          onChange={(e) => handleChange("playerAge", e.target.value)}
          className="p-2 placeholder:italic placeholder:text-slate-400 focus:bg-slate-100 transition-colors duration-300   border border-spacing-1 mr-5 bg-slate-200 h-10 rounded-lg w-36 "
        ></input>
        <button
          className="bg-purple-400 w-32 hover:bg-purple-500 rounded-lg"
          onClick={handleSave}
        >
          Save
        </button>
        <p className="text-red-500 pl-4 italic">{errorMessage}</p>
      </div>
    </div>
  );
};

export default Players;
