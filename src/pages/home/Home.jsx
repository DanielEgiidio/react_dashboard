import React from "react";
import "./Home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Sidebar />
      <div className="homeContainer">container</div>
    </div>
  );
};

export default Home;
