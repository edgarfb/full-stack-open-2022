import axios from "axios";

// get all persons
const getAll = () => {
  return axios.get("http://localhost:3001/persons");
};

const createPerson = (person) => {
  return axios.post("http://localhost:3001/persons", person);
};

const updatePersonNumber = (id, person) => {
  return axios
    .put(`http://localhost:3001/persons/${id}`, person)
    .then((response) => response);
};

const deletePerson = (id) => {
  return axios.delete(`http://localhost:3001/persons/${id}`);
};

export default { getAll, createPerson, updatePersonNumber, deletePerson };
