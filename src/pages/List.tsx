import React, { useState, useEffect } from "react";
import AddItemModal from "../Component/AddItemModal.tsx";
import Navbar from "../Component/Navbar.tsx";
import { getItem, addItem, deleteItem, updateItem } from "../services/api.ts";  
import ItemCard from "../Component/ItemCard.tsx";
import "../style/List.css";

interface Item {
    _id: number;
    name: string;
    quantity: number;
    bought: boolean;
}

const List: React.FC = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [token] = useState<string | null>(localStorage.getItem("token"));

    
    // Récupérer les articles depuis le backend
    const fetchItems = async () => {
        try {
            if (!token) throw new Error("Token manquant");
            const data = await getItem(token);
            setItems(data.shopList);
        } catch (err) {
            console.error("Erreur lors de la récupération des articles :", err);
        }
    };

    useEffect(() => {
        fetchItems();
    }, []);


    const handleAddItem = async (name: string, quantity: number) => {
        try {
            if (!token) throw new Error("Token manquant");
            await addItem(token, name, quantity);
            fetchItems();
        } catch (err) {
            console.error("Erreur lors de l'ajout de l'article :", err);
        }
    };
    
    const handleDeleteItem = async (id: number) => {
        try {
            if (!token) throw new Error("Token manquant");
            await deleteItem(token, id);
            fetchItems();
        } catch (err) {
            console.error("Erreur lors de la suppression de l'article :", err);
        }
    }
    
    const handleUpdateBought = async (item: Item) => {
        try {
            if (!token) throw new Error("Token manquant");
            await updateItem(token, item._id, { bought: !item.bought });
            fetchItems();
        } catch (err) {
            console.error("Erreur lors de la suppression de l'article :", err);
        }
    }
    
    return (
        <div className="list-container">
            <Navbar />
            <h1>Ma Liste de Courses</h1>
            <ul className="item-list">
                {items.map((item) => (
                    <li key={item._id} className="item">
                        <ItemCard
                            item={item}
                            onDelete={() => handleDeleteItem(item._id)}
                            onUpdateBought={() => handleUpdateBought(item)}
                            />
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