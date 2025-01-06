import React from "react";
import { useParams, Link } from "react-router-dom";
import "../style/Item.css"; // Assurez-vous d'avoir un fichier CSS pour styliser la page

interface Item {
  id: number;
  name: string;
  quantity: number;
  description: string;
}

// Exemple de données simulées
const mockItems: Item[] = [
  { id: 1, name: "Pommes", quantity: 3, description: "Pommes rouges bio." },
  { id: 2, name: "Bananes", quantity: 6, description: "Bananes mûres et sucrées." },
  { id: 3, name: "Lait", quantity: 1, description: "Lait demi-écrémé 1L." },
];

const Item: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const item = mockItems.find((item) => item.id === Number(id));

  if (!item) {
    return <div>Article non trouvé</div>;
  }

  return (
    <div className="item-container">
      <h1>{item.name}</h1>
      <p>Quantité : {item.quantity}</p>
      <p>Description : {item.description}</p>
      <Link to="/list" className="btn-secondary">
        Retour à la liste
      </Link>
    </div>
  );
};

export default Item;