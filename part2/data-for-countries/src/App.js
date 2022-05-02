import { useState, useEffect } from "react";
import axios from "axios";

// components
import SearchFilter from "./components/SearchFilter";
import SearchMessage from "./components/SearchMessage";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchResult, setSearchResult] = useState(null);
  const [state, setState] = useState("empty");

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountries(response.data));
  }, []);

  const searchHanlder = (e) => {
    const query = e.target.value;
    const filteredCountries = countries.filter((country) =>
      country.name.official.toLowerCase().includes(query.toLowerCase())
    );
    if (query === "") {
      setState("empty");
      setSearchResult(null);
    } else if (filteredCountries.length === 1) {
      setState("justOne");
      setSearchResult(filteredCountries[0]);
    } else if (filteredCountries.length > 10) {
      setState("toMany");
      setSearchResult(null);
    } else if (query.length > 0 && filteredCountries.length === 0) {
      setState("noMatches");
      setSearchResult(null);
    } else {
      setState("correct");
      setSearchResult(filteredCountries);
    }
  };
  return (
    <div>
      <SearchFilter searchHanlder={searchHanlder} />
      <SearchMessage state={state} searchResult={searchResult} />
    </div>
  );
}

export default App;
