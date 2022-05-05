import axios from "axios";

// get all persons
const getAll = () => {
  return axios.get("http://localhost:3001/persons");
};

const createPerson = (person) => {
  return axios
    .post("http://localhost:3001/persons", person)
    .then((response) => console.log(response.statusText));
};

const updatePersonNumber = (id, person) => {
  return axios
    .put(`http://localhost:3001/persons/${id}`, person)
    .then((response) => console.log(response));
};

const deletePerson = (id) => {
  return axios
    .delete(`http://localhost:3001/persons/${id}`)
    .then((response) => console.log(`The deleted was ${response.statusText}`));
};

export default { getAll, createPerson, updatePersonNumber, deletePerson };
