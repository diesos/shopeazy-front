import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/List.css";
import AddItemModal from "../Component/AddItemModal.tsx";
import Navbar from "../Component/Navbar.tsx";

interface Item {
  id: number;
  name: string;
  quantity: number;
}

const List: React.FC = () => {
  const [items, setItems] = useState<Item[]>([
    // Mettre les items de la list de la bdd ici
    { id: 1, name: "Pommes", quantity: 3 },
    { id: 2, name: "Bananes", quantity: 6 },
    { id: 3, name: "Lait", quantity: 1 },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddItem = (name: string, quantity: number) => {
    const newItem: Item = {
      id: items.length + 1,
      name,
      quantity,
    };
    setItems([...items, newItem]);
  };

  return (
    <div className="list-container">
        <Navbar />
      <h1>Ma Liste de Courses</h1>
      <ul className="item-list">
        {items.map((item) => (
          <li key={item.id} className="item">
            <Link to={`/item/${item.id}`} className="item-link">
              {item.name} - {item.quantity}
            </Link>
          </li>
        ))}
      </ul>
      <button
        className="btn-primary"
        onClick={() => setIsModalOpen(true)}
      >
        Ajouter un Article
      </button>

      {isModalOpen && (
        <AddItemModal
          onClose={() => setIsModalOpen(false)}
          onAddItem={handleAddItem}
        />
      )}
    </div>
  );
};

export default List;