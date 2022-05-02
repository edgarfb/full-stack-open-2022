import { useState, useEffect } from "react";
import axios from "axios";

// components
import SearchFilter from "./components/SearchFilter";
import SearchMessage from "./components/SearchMessage";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchResult, setSearchResult] = useState(null);
  const [country, setCountry] = useState(null);
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
      setCountry(null);
      setSearchResult(null);
    } else if (filteredCountries.length === 1) {
      setState("justOne");
      setCountry(filteredCountries[0]);
      setSearchResult(null);
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
      <SearchMessage
        state={state}
        searchResult={searchResult}
        country={country}
        setCountry={setCountry}
      />
    </div>
  );
}

export default App;
