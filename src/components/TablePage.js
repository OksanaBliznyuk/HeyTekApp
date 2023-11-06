//TablePage.js
import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
//import Modal from "@mui/material/Modal";
//import EquipmentTable from "./EquipmentTable";
import ArduinoInfo from "./ArduinoInfo";
import CricutInfo from "./CricutInfo";
import EdisonRobotsetInfo from "./EdisonRobotsetInfo";
import EdisonRoboterInfo from "./EdisonRoboterInfo";
import HvikingOverlInfo from "./HvikingOverlInfo";
import HvikingSymaskinlInfo from "./HvikingSymaskinInfo";
import LittleBitsInfo from "./LittleBitsInfo";
import MicrobitInfo from "./MicrobitInfo";
import MicrobitBotInfo from "./MicrobitBotInfo";
import MicrobitMinodekitInfo from "./MicrobitMinodekitInfo";
import MicrobitSmarthmkitInfo from "./MicrobitSmarthmkitInfo";
import MicrobitStartkitInfo from "./MicrobitStartkitInfo";
import ArduinoStatus from "./ArduinoStatus";
import CricutStatus from "./CricutStatus";
import PfaffSymaskinInfo from "./PfaffSymaskinInfo";
import RaspberryPiInfo from "./RaspberryPiInfo";
import SpheroBoltInfo from "./SpheroBoltInfo";

const columns = [
  { id: "name", label: "Utstyr", minWidth: 170 },
  { id: "number", label: "Antall", minWidth: 100 },
  {
    id: "available",
    label: "Tilgjengelig",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "status",
    label: "Status",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
];

function createData(name, number, available, status) {
  const density = available / status;
  return { name, number, available, status };
}
//Antall rows må redigeres til flere!!!
export default function TablePage() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(100);
  const [selectedEquipment, setSelectedEquipment] = React.useState(null);

  const [rows, setRows] = useState(() => {
    // Definerer dataene direkte 
    const initialData = [
      createData("Arduino starter kits", 12, 12),
      createData("Cricut vinylkutter", 2, 2),
      createData("Edison robot expansion set", 10, 10),
      createData("Edison roboter", 28, 28),
      createData("Husquarna Viking Overlock", 1, 1),
      createData("Husquarna Viking symaskin", 2, 2),
      createData("Little bits", 3, 3),
      createData("Mikro:bit", 50, 50),
      createData("Mikro:bit Bot", 6, 6),
      createData("Mikro:bit minode kit", 8, 8),
      createData("Mikro:bit Smart home kit", 28, 28),
      createData("Mikro:bit starter kit elecfreaks", 18, 18),
      createData("Pfaff symaskin", 4, 4),
      createData("Raspberry pi4", 17, 17),
      createData("SpheroBolt", 15, 15),
    ];

    return initialData;
  });

  //Modal
  const handleOpenEquipmentModal = (equipment) => {
    setSelectedEquipment(equipment);
  };
  const handleCloseEquipmentModal = () => {
    setSelectedEquipment(null);
  };

  //updateEquipmentData
  const updateEquipmentData = (equipmentName, newAntall) => {
    const updatedRows = [...rows];
    updatedRows.forEach((row) => {
      if (row.name === equipmentName) {
        row.number = newAntall;
      }
    });
    setRows(updatedRows);
  };

  //For Equipment table
  const handleEquipmentChange = () => {
    // Dette er der kan oppdateres eller refreshes EquipmentTable
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 650 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  <strong>{column.label}</strong>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === "name" && (
                            <div>
                              {row.name === "Arduino starter kits" && (
                                <ArduinoInfo equipment={row} />
                              )}
                              {row.name === "Cricut vinylkutter" && (
                                <CricutInfo equipment={row} />
                              )}
                              {row.name === "Edison robot expansion set" && (
                                <EdisonRobotsetInfo equipment={row} />
                              )}
                                 {row.name === "Edison roboter" && (
                                <EdisonRoboterInfo equipment={row} />
                              )}
                              {row.name === "Husquarna Viking Overlock" && (
                                <HvikingOverlInfo equipment={row} />
                              )}
                               {row.name === "Husquarna Viking symaskin" && (
                                <HvikingSymaskinlInfo equipment={row} />
                               )}
                             
                              {row.name === "Little bits" && (
                                <LittleBitsInfo equipment={row} />
                              )}
                               {row.name === "Mikro:bit" && (
                                <MicrobitInfo equipment={row} />
                              )}
                                 {row.name === "Mikro:bit Bot" && (
                                <MicrobitBotInfo equipment={row} />
                              )}
                               {row.name === "Mikro:bit minode kit" && (
                                <MicrobitMinodekitInfo equipment={row} />
                              )}
                                {row.name === "Mikro:bit Smart home kit" && (
                                <MicrobitSmarthmkitInfo equipment={row} />
                              )}
                              {row.name === "Mikro:bit starter kit elecfreaks" && (
                                <MicrobitStartkitInfo equipment={row} />
                              )}
                              {row.name === "Pfaff symaskin" && (
                                <PfaffSymaskinInfo equipment={row} />
                              )}
                              {row.name === "Raspberry pi4" && (
                                <RaspberryPiInfo equipment={row} />
                              )}
                              {row.name === "SpheroBolt" && (
                                <SpheroBoltInfo equipment={row} />
                              )}
                            </div>
                            
                          )}
                          {/*Status komponenter*/}
                          {column.id === "status" && (
                            <div>
                              {row.name === "Arduino starter kits" && (
                                <ArduinoStatus
                                  equipment={row}
                                  updateEquipmentData={updateEquipmentData}
                                  onEquipmentChange={handleEquipmentChange}
                                />
                              )}

                              {row.name === "Cricut vinylkutter" && (
                                <CricutStatus equipment={row} />
                              )}
                            </div>
                          )}

                          {column.format && typeof value === "number" ? (
                            <span>{column.format(value)}</span>
                          ) : (
                            <span>{value}</span>
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
