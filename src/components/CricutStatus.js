// ArduinoStatus.js

import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import EquipmentTable from './EquipmentTable';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 850,
  bgcolor: 'background.paper',
  border: '2px #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const someEquipment = {
  name: 'Cricut', // Erstatt med riktig navn på utstyret
};

function CricutStatus({ equipment }) {
  const [open, setOpen] = useState(false);
  const [equipmentData, setEquipmentData] = useState({ antall: 0 }); // Initialiser med standarddata

  useEffect(() => {
    // Last utstyrdata fra localStorage når modalen åpnes
    const localStorageData = JSON.parse(localStorage.getItem('equipmentData')) || {};
    const storedData = localStorageData[someEquipment.name];
    if (storedData) {
      setEquipmentData(storedData);
    }
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updateEquipmentData = (newAntall) => {
    const updatedData = { ...equipmentData, antall: newAntall };
    setEquipmentData(updatedData);

    // Lagre de oppdaterte dataene til localStorage
    const localStorageData = JSON.parse(localStorage.getItem('equipmentData')) || {};
    localStorageData[someEquipment.name] = updatedData;
    localStorage.setItem('equipmentData', JSON.stringify(localStorageData));
  };

  return (
    <div>
      <Button onClick={handleOpen}><AddCircleTwoToneIcon /></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="status-modal-title"
        aria-describedby="status-modal-description"
      >
        <Box sx={{ ...style }}>
          <h2 id="status-modal-title">{equipment.name} Status</h2>

          {/* Bruk equipmentData for å vise og oppdatere data */}
          <p>Antall: {equipmentData.antall}</p>
          <input
            type="number"
            value={equipmentData.antall}
            onChange={(e) => updateEquipmentData(parseInt(e.target.value))}
          />

          {/* EquipmentTable */}
          <EquipmentTable />

          <Button onClick={handleClose}>Lukk vindu</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default CricutStatus;


/*import React, { useState } from "react";
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
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 850,
  bgcolor: "background.paper",
  border: "2px #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const CricutStatus = ({ equipment }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}><AddCircleTwoToneIcon /></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="status-modal-title"
        aria-describedby="status-modal-description"
      >
        <Box sx={{ ...style }}>
          <h2 id="status-modal-title">{equipment.name} Status</h2>
          <EquipmentTable />
          <Button onClick={handleClose}>Lukk vindu</Button>
        </Box>
      </Modal>
    </div>
  );
};
export default CricutStatus;*/