import React from "react";
import "./App.css";
import GetWeather from "./Components/GetWeather";
import Header from "./Components/Header";

const App = () => {
  //  functionality will come here

  return (
    <div className="App">
      <div className="container">
        <div className="Header">
          <Header />
        </div>

        {/*  Form Begins */}

        <div className="GetWeather">
          <GetWeather />
        </div>

        {/* Form Ends */}
        
      </div>
    </div>
  );
};

export default App;
