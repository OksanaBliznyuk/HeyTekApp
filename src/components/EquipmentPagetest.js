// EquipmentPage.js (generisk komponent)
import React, { useState } from "react";
import { Icon, Modal, Button, Box } from "@mui/material";
import ChildModal from "./ChildModal";
import "./childModal.css";

const EquipmentPagetest = ({ equipmentData }) => {
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
        <Icon />
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="equipment-modal-title"
        aria-describedby="equipment-modal-description"
      >
        <Box sx={{ /* styles for modal */ }}>
          <h2 id="equipment-modal-title">{equipmentData.name}</h2>
          <p id="equipment-modal-description">
            {equipmentData.description}
          </p>
          <ChildModal equipmentImage={equipmentData.image} />
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default EquipmentPagetest;
