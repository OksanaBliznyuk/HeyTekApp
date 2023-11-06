//EquipmentTable.js Tabbel som viser info fra ...Status.js komponenter
/*import  React, {useState, useEffect} from 'react';
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
  randomCreatedDate,
  randomTraderName,
  randomId,
  randomArrayItem,
} from '@mui/x-data-grid-generator';


  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
  import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js"; // Import Firestore
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAGundVe3Ufln_w8_qGndGcXEjOPM1hU34",
    authDomain: "test-c6ed9.firebaseapp.com",
    projectId: "test-c6ed9",
    storageBucket: "test-c6ed9.appspot.com",
    messagingSenderId: "1093985743663",
    appId: "1:1093985743663:web:4ea52547143b9c9af8e7da",
    measurementId: "G-5R9YB5S68S"
  };


      
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);


//Kommentar
const roles = ['Arbeids- og hverdagslivstrening', 'Bygg- og anleggsteknikk', 'Elektro og datateknologi'];
const randomRole = () => {
  return randomArrayItem(roles);
};

const initialRows = [
  {
    id: randomId(),
    name: randomTraderName(),
    number: 25,//antall
    joinDate: randomCreatedDate(),
    deliveryDate: randomCreatedDate(),
    role: randomRole(),//kommentar
  },
  
  {
    id: randomId(),
    name: randomTraderName(),
    number: 36,
    joinDate: randomCreatedDate(),
    deliveryDate: randomCreatedDate(),
    role: randomRole(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    number: 19,
    joinDate: randomCreatedDate(),
    deliveryDate: randomCreatedDate(),
    role: randomRole(),
  },
];

  
//_____________________________________________________
addDoc(collection(db, "UtlånForElever"), initialRows[0])

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [...oldRows, { id, name: '', number: '', isNew: true }]); //number
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
    const editedRow = rows.find((row) => row.id === id);
    
    // Legg til koden for å lagre data i Firebase her!!!!!!
    addDoc(collection(db, "UtlånForElever"), editedRow)
      .then(() => {
        // Dataen er lagret vellykket, du kan oppdatere grensesnittet eller tilbakestille redigeringsmodus
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
      })
      .catch((error) => {
        // Håndter feil her, for eksempel ved å vise en feilmelding til brukeren
        console.error("Feil ved lagring av data:", error);
      });
  };
  

  /*const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };*/

 /* const handleDeleteClick = (id) => () => {
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
    { field: 'name', headerName: 'Navn', width: 180, editable: true },
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
*/
