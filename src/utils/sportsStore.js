import { configureStore } from "@reduxjs/toolkit";
import sportsReducer from "./sportsSlice";

const sportsStore = configureStore({
  reducer: { sports: sportsReducer },
});

export default sportsStore;
