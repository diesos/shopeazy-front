import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:9000/api",
    headers: {
        "Content-Type": "application/json",
    },
});
// get articles
export const getItem = async () => {
    const response = await apiClient.get("/item");
    return response.data;
}

// add articles
export const addItem = async (name: string, quantity: number) => {
    const response - await apiClient.post("/item", {name, quantity});
    return response.data;
};
