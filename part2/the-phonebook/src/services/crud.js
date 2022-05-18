import axios from "axios";

const BASE_URL = "http://localhost:5000";

// get all persons
const getAll = () => {
  return axios.get(`${BASE_URL}/api/persons`);
};

const createPerson = (person) => {
  return axios.post(`${BASE_URL}/api/persons`, person);
};

const updatePersonNumber = (id, person) => {
  return axios
    .put(`${BASE_URL}/api/persons/${id}`, person)
    .then((response) => response);
};

const deletePerson = (id) => {
  return axios.delete(`${BASE_URL}/api/persons/${id}`);
};

export default { getAll, createPerson, updatePersonNumber, deletePerson };
