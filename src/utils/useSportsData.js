import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addSports } from "./sportsSlice";

const useSportsData = () => {
  useEffect(() => {
    getSportsData();
  }, []);
  const dispatch = useDispatch();
  const getSportsData = async () => {
    const sportsData = await fetch(
      "https://mocki.io/v1/b4544a37-0765-405f-baf6-6675845d5a0e"
    );
    const jsonData = await sportsData.json();
    console.log(jsonData, "jsondata");
    dispatch(addSports({data: jsonData, isUpdate: false}));
  };
};

export default useSportsData;
