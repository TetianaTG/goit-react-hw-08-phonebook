import axios from "axios";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

const getAllContacts = () => axios.get("/contacts");
const addContact = (contact) => axios.post("/contacts", contact);
const deleteContact = (id) => axios.delete(`/contacts/${id}`);

const getCurrentUser = () => axios.get("/users/current");

const login = (loginObject) => axios.post("/users/login", loginObject);

const register = (registerObject) => {
  console.log(registerObject);
  return axios.post("/users/signup", registerObject);
};

const logout = () => axios.post("/users/logout");

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export default {
  getAllContacts,
  addContact,
  deleteContact,
  getCurrentUser,
  login,
  register,
  logout,
  token,
};