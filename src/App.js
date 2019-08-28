import React from "react";
import Navbar from "./Components/Navbar.js";
import Gallery from "./Components/Gallery.js";
import Cards from "./Components/Cards.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Gallery />
      <Cards />
    </div>
  );
}

export default App;
