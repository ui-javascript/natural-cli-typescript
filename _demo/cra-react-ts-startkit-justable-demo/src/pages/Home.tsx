import * as React from "react"
import { Route } from 'react-router-dom'
import Header from "../containers/Header";
import Sidebar from "../components/Home/Sidebar";
import RedPage from "./colors/Red";
import BluePage from "./colors/Blue";
import CircularPage from "./shape/Circular";
import SquarePage from "./shape/Square";


const HomePage = () => (
  <div className="home react">
    <Header />
    <div className="container">
      <Sidebar />
      <div className="content">
        <Route path="/home/shape/circular" component={CircularPage} />
        <Route path="/home/shape/square" component={SquarePage} />
        <Route path="/home/colors/red" component={RedPage} />
        <Route path="/home/colors/blue" component={BluePage} />
      </div>
    </div>
  </div>
)
export default HomePage