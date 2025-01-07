import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../style/Item.css";
import { addItem } from "../services/api.ts"; // Import de l'API pour ajouter un article

interface Item {
    id: number;
    name: string;
    quantity: number;
    description: string;
}

const Item: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);


    const mockItems: Item[] = [
        { id: 1, name: "Pommes", quantity: 3, description: "Pommes rouges bio." },
        { id: 2, name: "Bananes", quantity: 6, description: "Bananes mûres et sucrées." },
        { id: 3, name: "Lait", quantity: 1, description: "Lait demi-écrémé 1L." },
    ];

    const item = mockItems.find((item) => item.id === Number(id));

    const handleAddToList = async () => {
        if (!item) return;

        setLoading(true);
        setError(null);

        try {
            await addItem(item.name, item.quantity);
            alert("Article ajouté à la liste !");
        } catch (err) {
            console.error("Erreur lors de l'ajout de l'article :", err);
            setError("Impossible d'ajouter l'article. Réessayez plus tard.");
        } finally {
            setLoading(false);
        }
    };

    if (!item) {
        return <div>Article non trouvé</div>;
    }

    return (
        <div className="item-container">
            <h1>{item.name}</h1>
            <p>Quantité : {item.quantity}</p>
            <p>Description : {item.description}</p>

            {error && <p className="error-message">{error}</p>}

            <button
                className="btn-primary"
                onClick={handleAddToList}
                disabled={loading}
            >
                {loading ? "Ajout en cours..." : "Ajouter à la liste"}
            </button>

            <Link to="/list" className="btn-secondary">
                Retour à la liste
            </Link>
        </div>
    );
};

export default Item;