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

  // get user
  export const getUser = async() => {
    const response = await apiClient.get("/user/me");
    return response.data;
  };

 // login
 export const login = async (email: string, password: string) => {
    const response = await apiClient.post("/user/login", {email, password});
    return response.data;
 };

 // register
 export const register = async (name: string, email: string, password: string) => {
    const response = await apiClient.post("/user/register", {name, email, password});
    return response.data;
 };

 // reset password
 export const resetPassword = async (token: string, newPassword: string) => {
    const response = await apiClient.post(
      "/user/reset-password",
      { newPassword }, 
      {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      }
    );
    return response.data; 
  };