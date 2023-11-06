//MicrobitInfo
import React, { useState } from "react";
import { Link, Modal, Button, Box } from "@mui/material";
import microbit from "../assets/images/microbit..png";
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
          <img src={microbit} alt="Bildebeskrivelse" className="modal-img" />
          <Button onClick={handleClose}>Lukk bilde</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

const MicrobitInfo = ({ equipment }) => {
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
            Micro:bit er en datamaskin i lommeformat som du kan programmere,
            tilpasse og kontrollere for å sette dine digitale ideer, spill og
            programmer ut i livet. Vi har flere ulike tilleggsprodukter/
            utvidelsessett tilgjengelig. Vi har mer enn 50 tilgjengelig.
            Programmeres med programmet makecode{" "}
            <Link
              href="https://www.google.no/search?q=Microsoft+MakeCode+for+micro%3Abit+%28microbit.org%29&sca_esv=576067890&hl=no&source=hp&ei=6KU3ZZvAAtyVxc8PjY-v2A0&iflsig=AO6bgOgAAAAAZTez-NKO6FQo29-D3qg7AKJul-yeLaqL&ved=0ahUKEwib1J_6xY6CAxXcSvEDHY3HC9sQ4dUDCAk&uact=5&oq=Microsoft+MakeCode+for+micro%3Abit+%28microbit.org%29&gs_lp=Egdnd3Mtd2l6Ii9NaWNyb3NvZnQgTWFrZUNvZGUgZm9yIG1pY3JvOmJpdCAobWljcm9iaXQub3JnKUj4kgFQAFgAcAF4AJABAJgBPKABPKoBATG4AQPIAQD4AQKoAgA&sclient=gws-wiz#ip=1"
              underline="always"
            >
              {"Trykk her til å finne mer"}
            </Link>
          </p>
          <ChildModal />
          <Button onClick={handleClose}>Lukk vindu</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default MicrobitInfo;
