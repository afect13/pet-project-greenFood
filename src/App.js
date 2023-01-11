import React from "react";
import Card from "./components/Card/Card";
import FoodRecept from "./components/FoodRecept/FoodRecept";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <Card>
      <NavBar />
      <Header />
      <FoodRecept/>
    </Card>
  );
}

export default App;
