const SearchMessage = ({ state, searchResult, country, setCountry }) => {
  // conver an object to an array
  const flatLanguages = () => {
    const languages = [];
    for (const lang in country.languages) {
      languages.push(country.languages[lang]);
    }
    return languages;
  };

  return (
    <div>
      {state === "empty" && <p>Type to find a country</p>}
      {state === "toMany" && <p>To many matches, specify another filter</p>}
      {state === "noMatches" && <p>There are no matches for that query</p>}
      {state === "correct" &&
        searchResult.map((country) => (
          <p key={country.name.common}>
            {country.name.common}{" "}
            <button onClick={() => setCountry(country)}>show</button>{" "}
          </p>
        ))}
      {country !== null && (
        <div>
          <h2>{country.name.common}</h2>
          <p>capital: {country.capital[0]}</p>
          <p>area: {country.area}</p>
          <div>
            <h3>languages: </h3>
            <ul>
              {flatLanguages().map((lang) => (
                <li key={lang}>{lang}</li>
              ))}
            </ul>
          </div>
          <div>
            <img src={country.flags.png} alt={country.name.common} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchMessage;
