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
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import CreateIcon from "@mui/icons-material/Create";
import ClearIcon from "@mui/icons-material/Clear";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// Fjern importen for DeleteOutlineIcon hvis du ikke trenger den

const getInitialData = () => [
  // Legg til flere data etter behov
];

const EquipmentTable = () => {
  const [editRowIndex, setEditRowIndex] = useState(-1);
  const [data, setData] = useState(getInitialData);
  const [newRow, setNewRow] = useState({
    id: "",
    name: "",
    number: "",
    loanDate: "",
    deliveryDate: "",
    comments: "",
    status: "",
  });

  const handleAddRow = () => {
    setData([...data, newRow]);
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
    // Implementerer lagring av redigerte data her
    setEditRowIndex(-1);
  };

  const handleDeleteRow = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
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
    <div>
      <TableContainer component={Paper}>
      <Button color="primary" onClick={handleAddRow}>
        + Legg til
      </Button>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Number</TableCell>
              <TableCell>Loan Date</TableCell>
              <TableCell>Delivery Date</TableCell>
              <TableCell>Comments</TableCell>
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
                {/* Resten av tabellrader og kolonner her */}
                {/* ... */}
                {/* IKONER */}
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
      </TableContainer>
    
    </div>
  );
};

export default EquipmentTable;
