import React from "react";
import Banner from "./components/Banner";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Project from "./components/Projects";

//testing ssh key
function App() {
  return (
    <div>
      <Header/>
      <Banner/>
      <Project/>
      <Certificates />
      <Footer />
    </div>
  );
}

export default App;
