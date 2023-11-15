// EquipmentTable.js
import React, { useState } from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
  TextField,
  IconButton,
  Pagination,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import CreateIcon from "@mui/icons-material/Create";
import ClearIcon from "@mui/icons-material/Clear";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const getInitialData = () => [
  // Legg til flere data etter behov
];

const EquipmentTable = ({ data, setData }) => {
  const [editRowIndex, setEditRowIndex] = useState(-1);
  const [newRow, setNewRow] = useState({
    id: "",
    name: "",
    number: "",
    loanDate: "",
    deliveryDate: "",
    comments: "",
    status: "",
  });

  const saveDataToLocalStorage = (data) => {
    localStorage.setItem("equipmentData", JSON.stringify(data));
  };

  const loadDataFromLocalStorage = () => {
    const storedData = localStorage.getItem("equipmentData");
    return storedData ? JSON.parse(storedData) : getInitialData();
  };

  const handleAddRow = () => {
    const updatedData = [newRow, ...data];  // Legger til newRow øverst i arrayet
    setData(updatedData);
    saveDataToLocalStorage(updatedData);
    setNewRow({
      id: "",
      name: "",
      number: "",
      loanDate: "",
      deliveryDate: "",
      comments: "",
      status: "",
    });
  };
  

  const handleEditRow = (index) => {
    setEditRowIndex(index);
  };

  const handleSaveRow = (index) => {
    // Implement saving edited data here
    const updatedData = [...data];
    setEditRowIndex(-1);
    setData(updatedData);
    saveDataToLocalStorage(updatedData);
  };

  const handleDeleteRow = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
    saveDataToLocalStorage(updatedData);
  };

  const handleChange = (e, field, index) => {
    if (index === -1) {
      setNewRow({ ...newRow, [field]: e.target.value });
    } else {
      const newData = [...data];
      newData[index] = { ...newData[index], [field]: e.target.value };
      setData(newData);
    }
  };

  return (
    <div style={{ height: "400px", overflow: "auto" }}>
      <TableContainer component={Paper}>
        <Button color="primary" onClick={handleAddRow}>
          + Legg til
        </Button>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Navn</TableCell>
              <TableCell>Antall</TableCell>
              <TableCell>Lånedato</TableCell>
              <TableCell>Innleveringsdato</TableCell>
              <TableCell>Kommentar</TableCell>
              <TableCell>Handling</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  {editRowIndex === index ? (
                    <TextField
                      value={row.id}
                      onChange={(e) => handleChange(e, "id", index)}
                    />
                  ) : (
                    row.id
                  )}
                </TableCell>
                <TableCell>
                  {editRowIndex === index ? (
                    <TextField
                      value={row.name}
                      onChange={(e) => handleChange(e, "name", index)}
                    />
                  ) : (
                    row.name
                  )}
                </TableCell>
                <TableCell>
                  {editRowIndex === index ? (
                    <TextField
                      value={row.number}
                      onChange={(e) => handleChange(e, "number", index)}
                    />
                  ) : (
                    row.number
                  )}
                </TableCell>
                <TableCell>
                  {editRowIndex === index ? (
                    <TextField
                      value={row.loanDate}
                      onChange={(e) => handleChange(e, "loanDate", index)}
                    />
                  ) : (
                    row.loanDate
                  )}
                </TableCell>
                <TableCell>
                  {editRowIndex === index ? (
                    <TextField
                      value={row.deliveryDate}
                      onChange={(e) => handleChange(e, "deliveryDate", index)}
                    />
                  ) : (
                    row.deliveryDate
                  )}
                </TableCell>
                <TableCell>
                  {editRowIndex === index ? (
                    <TextField
                      value={row.comments}
                      onChange={(e) => handleChange(e, "comments", index)}
                    />
                  ) : (
                    row.comments
                  )}
                </TableCell>
                {/* ... (Repeat for other columns) */}
                <TableCell>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                    }}
                  >
                    {editRowIndex === index ? (
                      <>
                        <IconButton
                          color="primary"
                          onClick={() => handleSaveRow(index)}
                        >
                          <SaveIcon />
                        </IconButton>
                        <IconButton onClick={() => handleDeleteRow(index)}>
                          <ClearIcon />
                        </IconButton>
                      </>
                    ) : (
                      <>
                        <IconButton onClick={() => handleEditRow(index)}>
                          <CreateIcon />
                        </IconButton>
                        <IconButton onClick={() => handleDeleteRow(index)}>
                          <DeleteOutlineIcon />
                        </IconButton>
                      </>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Pagination count={Math.ceil(data.length / 10)} color="primary" />
      </TableContainer>
    </div>
  );
};

export default EquipmentTable;
