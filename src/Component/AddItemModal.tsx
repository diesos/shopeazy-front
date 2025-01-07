import React, { useState } from "react";
import "../style/AddItemModal.css";

interface AddItemModalProps {
    onClose: () => void;
    onAddItem: (name: string, quantity: number) => void;
}

const AddItemModal: React.FC<AddItemModalProps> = ({ onClose, onAddItem }) => {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState<number>(1);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.trim()) {
            onAddItem(name, quantity);
            onClose();
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Ajouter un Article</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Nom de l'article</label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="quantity">Quantité</label>
                        <input
                            id="quantity"
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                            min="1"
                            required
                        />
                    </div>
                    <button type="submit" className="btn-primary">Ajouter</button>
                    <button type="button" className="btn-secondary" onClick={onClose}>
                        Annuler
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItemModal;