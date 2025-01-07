import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';



interface ItemCardProps {
  item: any;
  onDelete: () => void;
  onUpdateBought: () => void;
}

export default function ItemCard({ item, onDelete, onUpdateBought }: ItemCardProps) {

  console.log(item);
  return (
    <Card sx={{ width: 600, margin: "auto", boxShadow: 3, display: "flex", justifyContent: "space-between" }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 22 }}>
          {item.name}
        </Typography>
        <Typography variant="body2">
          Quantité: {item.quantity}
        </Typography>
        <Button onClick={onUpdateBought}variant="contained" color={item.bought ? "success" : "error"} size="small">{item.bought ? "Acheté" : "Pas acheté"}</Button>
      </CardContent>
      <CardActions>
        <Button onClick={onDelete} size="small">
        <span className="material-icons-outlined">
          <DeleteIcon color='error'/>
        </span>
        </Button>
      </CardActions>
    </Card>
  );
}