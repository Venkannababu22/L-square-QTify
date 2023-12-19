import { useState } from "react";
import React from "react"
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero"

function App() {
  const [searchData, setSearchData] = useState();
  return (
    <>
      <Navbar searchData={searchData}></Navbar>
      <Hero />
    </>
  );
}

export default App;
