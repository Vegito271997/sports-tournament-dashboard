import { Provider } from "react-redux";
import "./App.css";
//import SportsPoster1 from "./utils/SportsPoster1.png";
import DashboardContainer from "./components/DashboardContainer";
import sportsStore from "./utils/sportsStore";

function App() {
  return (
    <Provider store={sportsStore}>
      <div className="">
        {/* <div className="w-16/9 h-screen relative">
        <img
          className=""
          alt="sports-logo"
          src={SportsPoster1}
        />
      </div> */}
        <DashboardContainer />
      </div>
    </Provider>
  );
}

export default App;
