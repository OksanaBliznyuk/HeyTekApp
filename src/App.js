import React, { useState } from "react";
import "./App.css";
import "./components/childModal.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RentHomepage from "./components/RentHomepage";
import TablePage from "./components/TablePage";
import EquipmentTable from "./components/EquipmentTable";
import ArduinoInfo from "./components/ArduinoInfo";
import CricutInfo from "./components/CricutInfo";
import EdisonRobotsetInfo from './components/EdisonRobotsetInfo';
import EdisonRoboterInfo from "./components/EdisonRoboterInfo";
import HvikingOverlInfo from "./components/HvikingOverlInfo";
import HvikingSyvmaskinInfo from "./components/HvikingSymaskinInfo";
import LittleBitsInfo from "./components/LittleBitsInfo";
import MicrobitInfo from "./components/MicrobitInfo";
import MicrobitBotInfo from "./components/MicrobitBotInfo";
import MicrobitMinodekitInfo from "./components/MicrobitMinodekitInfo";
import MicrobitSmarthmkitInfo from "./components/MicrobitSmarthmkitInfo";

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>;

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<RentHomepage />} />
          <Route path="/TablePage" element={<TablePage />} />
        </Routes>
        </Router>
    </>
  );
};

export default App;

