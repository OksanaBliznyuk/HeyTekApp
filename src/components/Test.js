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
