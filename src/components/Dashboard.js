import React, { useEffect, useState } from "react";
import Team from "./Team";
import useSportsData from "../utils/useSportsData";
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";

const Dashboard = () => {
  const [updatedGames, setUpdatedGames] = useState([]);
  const game = useSelector((store) => store.sports.sport);

  useEffect(() => {
    // Update the state when the games prop changes
    setUpdatedGames(game);
  }, [game]);

  const handleAddPlayer = (gameIndex, teamIndex, playername, playerage) => {
    debugger;
    const updatedGamesCopy = JSON.parse(JSON.stringify(updatedGames));
    const playerDetails = { playername, playerage };

    const testdata = updatedGamesCopy[gameIndex].teams[teamIndex].players;

    testdata.unshift(playerDetails);
    setUpdatedGames(updatedGamesCopy);
    console.log(updatedGames, "updateedgames");
  };

  useSportsData();

  if (!game || Object.keys(game).length === 0) {
    return <Shimmer />;
  }
  return (
    <div className=" mt-10">
      {updatedGames?.map((item, gameIndex) => (
        <div key={gameIndex}>
          <div className="bg-slate-100 pt-4 pb-4 pl-5 border-b-2 border-spacing-4">
            <h1 className="font-bold text-3xl ">{item.game}</h1>
          </div>
          {item?.teams?.map((team, teamIndex) => (
            <Team
              key={teamIndex}
              team={team}
              gameIndex={gameIndex}
              teamIndex={teamIndex}
              onAddPlayer={handleAddPlayer}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Dashboard;


