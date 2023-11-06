// ArduinoInfo.js
import React, { useState } from "react";
import { Modal, Button, Box } from "@mui/material";
import spheroBolt from "../assets/images/sphero_bolt.jpg";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
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
function ChildModal() {
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
          <img src={spheroBolt} alt="Bildebeskrivelse" className="modal-img" />
          <Button onClick={handleClose}>Lukk bilde</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

const SpheroBoltInfo = ({ equipment }) => {
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
            SpheroBolt er en appstyrt, programmerbar robot formet som en ball.
            Boten kan kodes til å rulle i ulike retninger. Den har også en
            programmerbar LED-matrise, samt infrarød sensor som gjør at den kan
            interagere med andre boter. Vi har ett sett a 15 SpheroBolt
            tilgjengelig.
          </p>
          <ChildModal />
          <Button onClick={handleClose}>Lukk vindu</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default SpheroBoltInfo;
