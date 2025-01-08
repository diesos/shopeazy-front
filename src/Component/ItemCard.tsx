import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

interface ItemCardProps {
  item: any;
  onDelete: () => void;
  onUpdateBought: () => void;
  onUpdate: () => void;
}

export default function ItemCard({ item, onDelete, onUpdateBought, onUpdate }: ItemCardProps) {
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
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
        }}
      >
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 22 }}>
          {item.name}
        </Typography>
        <Typography variant="body2">
          Quantité: {item.quantity}
        </Typography>
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
          <DeleteIcon color='error' />
        </Button>
        <Button onClick={onUpdate} size="small">
          <EditIcon color='primary' />
        </Button>
      </CardActions>
    </Card>
  );
}
