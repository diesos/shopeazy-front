import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/List.css";
import AddItemModal from "../Component/AddItemModal.tsx";
import Navbar from "../Component/Navbar.tsx";
import { getItem, addItem } from "../services/api.ts";  

interface Item {
    id: number;
    name: string;
    quantity: number;
}

const List: React.FC = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Récupérer les articles depuis le backend
    const fetchItems = async () => {
        try {
            const data = await getItem();
            setItems(data);
        } catch (err) {
            console.error("Erreur lors de la récupération des articles :", err);
        }
    };

    useEffect(() => {
        fetchItems();
    }, []);


    const handleAddItem = async (name: string, quantity: number) => {
        try {
            await addItem(name, quantity);
            fetchItems();
        } catch (err) {
            console.error("Erreur lors de l'ajout de l'article :", err);
        }
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
            <button className="btn-primary" onClick={() => setIsModalOpen(true)}>
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