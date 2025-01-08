// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';

// interface ItemCardProps {
//   item: any;
//   onDelete: () => void;
//   onUpdateBought: () => void;
//   onUpdate: () => void;
// }

// export default function ItemCard({ item, onDelete, onUpdateBought, onUpdate }: ItemCardProps) {
//   return (
//     <Card
//       sx={{
//         width: 600,
//         margin: "auto",
//         boxShadow: 3,
//         display: "flex",
//         justifyContent: "space-between",
//         transition: "box-shadow 0.3s ease-in-out",
//         "&:hover": {
//           boxShadow: 8,
//         },
//       }}
//     >
//       <CardContent
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'start',
//         }}
//       >
//         <Typography gutterBottom sx={{ color: 'text.primary', fontSize: 26, fontWeight: 'bold' }}>
//           {item.name}
//         </Typography>
//         <Typography variant="body2">
//           Quantité: {item.quantity}
//         </Typography>
//         <Button
//           onClick={onUpdateBought}
//           variant="contained"
//           color={item.bought ? "success" : "error"}
//           size="small"
//         >
//           {item.bought ? "Acheté" : "Pas acheté"}
//         </Button>
//       </CardContent>
//       <CardActions disableSpacing={true}>
//         <Button onClick={onDelete} size="small">
//           <DeleteIcon color='error' />
//         </Button>
//         <Button onClick={onUpdate} size="small">
//           <EditIcon color='primary' />
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }


import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";

interface ItemCardProps {
  item: {
    name: string;
    quantity: number;
    bought: boolean;
  };
  onDelete: () => void;
  onUpdateBought: () => void;
  onUpdate: (updatedItem: { name: string; quantity: number }) => void;
}

export default function ItemCard({ item, onDelete, onUpdateBought, onUpdate }: ItemCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedItem, setEditedItem] = useState({ name: item.name, quantity: item.quantity });

  // Gestion des changements dans les champs d'entrée
  const handleChange = (field: "name" | "quantity", value: string | number) => {
    setEditedItem((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Sauvegarde des modifications
  const handleSave = () => {
    onUpdate(editedItem); // Appelle la fonction parent avec les nouvelles données
    setIsEditing(false); // Sort du mode édition
  };

  return (
    <Card
      sx={{
        width: 600,
        margin: "auto",
        boxShadow: 3,
        display: "flex",
        justifyContent: "space-between",
        transition: "box-shadow 0.3s ease-in-out",
        "&:hover": {
          boxShadow: 8,
        },
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        {isEditing ? (
          <>
            <TextField
              label="Nom"
              variant="outlined"
              value={editedItem.name}
              onChange={(e) => handleChange("name", e.target.value)}
              sx={{ mb: 2, width: "100%" }}
            />
            <TextField
              label="Quantité"
              variant="outlined"
              type="number"
              value={editedItem.quantity}
              onChange={(e) => handleChange("quantity", Number(e.target.value))}
              sx={{ mb: 2, width: "100%" }}
            />
          </>
        ) : (
          <>
            <Typography gutterBottom sx={{ color: "text.primary", fontSize: 26, fontWeight: "bold" }}>
              {item.name}
            </Typography>
            <Typography variant="body2">Quantité: {item.quantity}</Typography>
          </>
        )}
        <Button
          onClick={onUpdateBought}
          variant="contained"
          color={item.bought ? "success" : "error"}
          size="small"
        >
          {item.bought ? "Acheté" : "Pas acheté"}
        </Button>
      </CardContent>
      <CardActions disableSpacing={true}>
        <Button onClick={onDelete} size="small">
          <DeleteIcon color="error" />
        </Button>
        {isEditing ? (
          <Button onClick={handleSave} size="small">
            <SaveIcon color="primary" />
          </Button>
        ) : (
          <Button onClick={() => setIsEditing(true)} size="small">
            <EditIcon color="primary" />
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
