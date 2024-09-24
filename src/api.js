// api.js
import axios from "axios";

const API_URL_TODOS = 'http://localhost:8000/api/todos/';

export const fetchTodos = () => fetch(API_URL).then(response => response.json());

export const createTodo = (todo) => fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo)
}).then(response => response.json());

export const updateTodo = (id, updates) => fetch(${API_URL}${id}/, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates)
}).then(response => response.json());

export const deleteTodo = (id) => fetch(${API_URL}${id}/, {
    method: 'DELETE'   
});


const API_URL_STUDENTS='http://127.0.0.1:8000/api/students/'

export const fetchStudents = async () => {
    try {
        const token = localStorage.getItem('access_token'); 
        const response = await axios.get(API_URL_STUDENTS, {
            headers: {
                Authorization: Bearer ${token}, // Use backticks for template literals
            },
        });
        return response.data; 
    } catch (error) {
        console.error("Error fetching students:", error);
        return []; // Fixed extra character issue
    }
};

const API_URL = "http://127.0.0.1:8000/api/";

export const fetchProducts = async () => {
  try {
    const token = localStorage.getItem("access_token");
    const response = await axios.get(API_URL + "Products/", {
      headers: {
        Authorization: Bearer ${token},
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching students:", error);
    return [];
  }
};
export const createProduct = (product) =>
  fetch(API_URL + "Products/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  }).then((response) => response.json());

export const updateProduct = (id, updates) =>
  fetch(${API_URL + "Products/"}${id}/, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  }).then((response) => response.json());

export const deleteProduct = (id) =>
  fetch(${API_URL +'Products/'}${id}/, {
    method: "DELETE",
});




  export const fetchuserapp = async () => {
    try {
      const token = localStorage.getItem("access_token");
      const response = await axios.get(
        API_URL + "Register-user/",
          {
          headers: {
            Authorization: Bearer ${token},
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching students:", error);
      return [];
    }
  };

  export const updateuserapp = (id, updates) =>
    fetch(${API_URL + "Register-user/"}${id}/, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    }).then((response) => response.json());

  export const deleteuserapp = (id) =>
    fetch(${API_URL + "Register-user/"}${id}/, {
      method: "DELETE",
    });

  export const fetch_Products = async () => {
    try {
      const response = await axios.get(API_URL + "Products/");
      return response.data;
    } catch (error) {
      console.error("Error fetching students:", error);
      return [];
    }
  };
