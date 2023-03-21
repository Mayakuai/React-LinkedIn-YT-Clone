import React from "react";
import "./app.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      <Header />
      {/* App body */}
      <div className="app__body">
        <Sidebar />
        {/* Feeds */}
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
