//EquipmentTable.js Tabbel som viser info fra ...Status.js komponenter
import * as React from 'react';
import {Box, Button} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';


import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from '@mui/x-data-grid';
import {
  randomId,
  randomArrayItem,
} from '@mui/x-data-grid-generator';

//Kommentar
const roles = ['Arbeids- og hverdagslivstrening', 'Bygg- og anleggsteknikk', 'Elektro og datateknologi'];
const randomRole = () => {
  return randomArrayItem(roles);
};


//Tomte rfader
const initialRows = [];


function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [
      ...oldRows,
      { id, name: '', number: '', isNew: true, joinDate: '', deliveryDate: '', role: '' }
    ]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Legg til
      </Button>
    </GridToolbarContainer>
  );
}
function EquipmentTable(props) {
  const { rows, onRowSave } = props;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Antall</th>
            {/* Legg til andre kolonner etter behov */}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
    </div>
  );
          }
//Tabell
export default function FullFeaturedCrudGrid() {
  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState({});

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  

  //Heading
  const columns = [
    { field: 'name', headerName: 'Name', width: 180, editable: true },
    {
      field: 'number',//number
      headerName: 'Antall',
      type: 'number',
      width: 80,
      align: 'left',
      headerAlign: 'left',
      editable: true,
    },
    {
      field: 'joinDate',
      headerName: 'Lånedato',
      type: 'date',
      width: 180,
      editable: true,
    },
    {
      field: 'deliveryDate', // Add the delivery date field
      headerName: 'Innleveringsdato', // Column header for delivery date
      type: 'date',
      width: 180,
      editable: true,
    },
    {
      field: 'role',
      headerName: 'Avdeling',
      width: 220,
      editable: true,
      type: 'singleSelect',
      valueOptions: ['Arbeids- og hverdagslivstrening', 'Elektro og datateknologi', 'Helse- og oppvekstfag'],
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Status',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: 'primary.main',
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Box
      sx={{
        height: 500,
        width: '100%',
        '& .actions': {
          color: 'text.secondary',
        },
        '& .textPrimary': {
          color: 'text.primary',
        },
      }}
    >
      <DataGrid
  rows={rows}
  columns={columns}
  editMode="row"
  rowModesModel={rowModesModel}
  onRowModesModelChange={handleRowModesModelChange}
  onRowEditStop={handleRowEditStop}
  processRowUpdate={processRowUpdate}
  slots={{
    toolbar: EditToolbar,
  }}
  slotProps={{
    toolbar: { setRows, setRowModesModel },
  }}
/>

    </Box>
  );
}

