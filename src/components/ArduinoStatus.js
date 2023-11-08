
// ArduinoStatus.js
import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import EquipmentTable from "./EquipmentTable";
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";


//Kalkulator for antall tilgjengelig
function ArduinoStatus(props) {
  const { equipment, updateEquipmentData, onEquipmentChange } = props;

  const handleAntallChange = (newAntall) => {
    // Oppdater antall enheter i utstyrsdata
    updateEquipmentData(equipment.name, newAntall);

    //Midlertidig lagre data i localStorage
    const localStorageData = JSON.parse(localStorage.getItem("equipmentData")) || {};
    localStorageData[equipment.name] = newAntall;
    localStorage.setItem("equipmentData", JSON.stringify(localStorageData));

    // Kall funksjonen for å varsle at data har endret seg
  onEquipmentChange();

  }


  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 950,
    bgcolor: "background.paper",
    border: "2px #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  // Åpning og lukking av modalen
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        <AddCircleTwoToneIcon />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="status-modal-title"
        aria-describedby="status-modal-description"
      >
        <Box sx={{ ...style }}>
          <h2 id="status-modal-title">{props.equipment.name} Status</h2>
          {<EquipmentTable />}
          <Button onClick={handleClose}>Lukk vindu</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default ArduinoStatus;