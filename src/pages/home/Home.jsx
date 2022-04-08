import React from "react";
import "./Home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Chart from "../../components/chart/Chart";
import TableList from "../../components/tablelist/TableList";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Últimos 6 Meses (Receita)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Últimas Transações</div>
          <TableList />
        </div>
      </div>
    </div>
  );
};

export default Home;
