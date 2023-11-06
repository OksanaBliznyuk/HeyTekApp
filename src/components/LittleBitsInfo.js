// LittleBitsInfo.js
import React, { useState } from "react";
import { Icon, Modal, Button, Box } from "@mui/material";
import arduino from "../assets/images/arduino.jpg";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import "./childModal.css";


//Info vindu style:
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 300,
  bgcolor: "background.paper",
  border: "2px #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

//Bilde vindu childModal:
function ChildModal () {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Åpen bilde</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 400, height: 300 }}>
          <img src={arduino} alt="Bildebeskrivelse" className="modal-img" />
          <Button onClick={handleClose}>Lukk bilde</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

const LittleBitsInfo = ({ equipment }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className="info-icon" onClick={handleOpen}>
        <InfoOutlinedIcon />
      </Button>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="equipment-modal-title"
        aria-describedby="equipment-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="equipment-modal-title">{equipment.name}</h2>
          <p id="equipment-modal-description">
            Annen informasjon om utstyret her
            Annen informasjon om utstyret her
            Annen informasjon om utstyret her
            Annen informasjon om utstyret her
            Annen informasjon om utstyret her
            Annen informasjon om utstyret her
            Annen informasjon om utstyret her
          </p>
          <ChildModal />
          <Button onClick={handleClose}>Lukk vindu</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default LittleBitsInfo;