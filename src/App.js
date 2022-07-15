import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import "./App.css";
import Banner from "./Component/Banner/Banner";
import RowPost from "./Component/RowPost/RowPost";
import {originals,action,comedy} from "./urls"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <RowPost url={originals} title="Netflix Originals"/>
      <RowPost url={action} title="Action" isSmall/>
      <RowPost url={comedy} title="Comedy" isSmall/>
    </div>
  );
}

export default App;
