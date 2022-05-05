import axios from "axios";

// get all persons
const getAll = () => {
  return axios.get("http://localhost:3001/persons");
};

const createPerson = (person) => {
  return axios.post("http://localhost:3001/persons", person);
};

export default { getAll, createPerson };
