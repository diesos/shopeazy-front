import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:9000",
    headers: {
        "Content-Type": "application/json",
    },
});
// get articles
export const getItem = async (token: string) => {
    const response = await apiClient.get(
        "/list",
        { headers: { Authorization: `Bearer ${token}`},
    });
    return response.data;
}

// add articles
export const addItem = async (token: string, name: string, quantity: number) => {
    const response = await apiClient.post(
        "/list/item",
        {name, quantity},
        { headers: { Authorization: `Bearer ${token}`},
    });
    return response.data;
};

// update articles
export const updateItem = async(token:string, id: number, item: object) => {
    const response = await apiClient.put(
        `/list/item/${id}`,
        item,
        { headers: { Authorization: `Bearer ${token}`},
    });
    return response.data;
};

// delete articles
export const deleteItem = async (token: string, id: number) => {
    const response = await apiClient.delete(
        `/list/item/${id}`,
        { headers: { Authorization: `Bearer ${token}`},
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