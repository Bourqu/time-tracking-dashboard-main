import React, { useState } from "react";
import './App.css'
import Profile from './Components/Profile'
import Cardgrid from "./Components/Cardgrid"

const App = () => {

  const [selectedStatus, setSelectedStatus] = useState("daily");

  const handleStatusChange = (newStatus) => {
    setSelectedStatus(newStatus);
  };
  return (
    <div className="App">
      <Profile onStatusChange={handleStatusChange} selectedStatus={selectedStatus} />
      <Cardgrid selectedStatus={selectedStatus} />
    </div>
  );
};

export default App;