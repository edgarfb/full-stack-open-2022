import axios from "axios";

// get all persons
const getAll = () => {
  return axios.get("http://localhost:3001/api/persons");
};

const createPerson = (person) => {
  return axios.post("http://localhost:3001/api/persons", person);
};

const updatePersonNumber = (id, person) => {
  return axios
    .put(`http://localhost:3001/api/persons/${id}`, person)
    .then((response) => response);
};

const deletePerson = (id) => {
  return axios.delete(`http://localhost:3001/api/persons/${id}`);
};

export default { getAll, createPerson, updatePersonNumber, deletePerson };
