import React from "react";
import useSportsData from "../utils/useSportsData";
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";
import Dashboard from "./Dashboard";

const DashboardContainer = () => {
  // useSportsData();

  // const games = useSelector((store) => store.sports.sport);
  // if (!games || Object.keys(games).length === 0) {
  //   return <Shimmer />;
  // }
  // console.log(games, "games");

  return (
    <div className="w-[80%] absolute my-20 mx-auto right-0 left-0 p-12 rounded-md border-2 border-slate-200">
      {/* {games?.map((game) => ( */}
        <Dashboard
        //  key={game?.game?.name} game={game} 
         />
      {/* ))} */}
    </div>
  );
};

export default DashboardContainer;
