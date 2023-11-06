//MicrobitInfo
import React, { useState } from "react";
import { Modal, Button, Box } from "@mui/material";
import microbitSmartHome from "../assets/images/microbit_smarthm_kit.png";
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
          <img
            src={microbitSmartHome}
            alt="Bildebeskrivelse"
            className="modal-img"
          />
          <Button onClick={handleClose}>Lukk bilde</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

const MicrobitSmarthmkitInfo = ({ equipment }) => {
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
            Micro:bit Elecfreaks smarthome kit er en utvidelse som lar deg
            designe, eksperimentere og programmere ditt eget smart-hus. Vi har
            29 sett tilgjengelig.
          </p>
          <ChildModal />
          <Button onClick={handleClose}>Lukk vindu</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default MicrobitSmarthmkitInfo;
