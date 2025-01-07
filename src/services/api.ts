import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:9000",
    headers: {
        "Content-Type": "application/json",
    },
});
// get articles
export const getItem = async () => {
    const response = await apiClient.get("/list/item");
    return response.data;
}

// add articles
export const addItem = async (name: string, quantity: number) => {
    const response = await apiClient.post("/list/item", {name, quantity});
    return response.data;
};

// update articles
export const updateItem = async(name: string, quantity: number) => {
    const response = await apiClient.put("/list/item", {name, quantity});
    return response.data;
};

// delete articles
export const deleteItem = async (name: string, quantity: number) => {
    const response = await apiClient.delete(`/list/item`, {
      params: { name, quantity }, // Les paramètres sont passés ici
    });
    return response.data;
  };