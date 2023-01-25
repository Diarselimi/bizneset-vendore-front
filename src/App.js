import React from "react";
import Home from "./pages/Home";
import "./assets/css/main.css";
import Navigation from "./components/nav";
import MainMessage from "./components/main_message";


function App() {
  return (
    <>
        <Navigation />
        <div className="container mx-auto">
            <Home />
        </div>
    </>
  );
}

export default App;
