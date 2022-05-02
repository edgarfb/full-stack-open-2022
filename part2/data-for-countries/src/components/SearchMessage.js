const SearchMessage = ({ state, searchResult }) => {
  // conver an object to an array
  const flatLanguages = () => {
    const languages = [];
    for (const lang in searchResult.languages) {
      languages.push(searchResult.languages[lang]);
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
          <p key={country.name.common}>{country.name.common}</p>
        ))}
      {state === "justOne" && (
        <div>
          <h2>{searchResult.name.common}</h2>
          <p>capital: {searchResult.capital[0]}</p>
          <p>area: {searchResult.area}</p>
          <div>
            <h3>languages: </h3>
            <ul>
              {flatLanguages().map((lang) => (
                <li key={lang}>{lang}</li>
              ))}
            </ul>
          </div>
          <div>
            <img src={searchResult.flags.png} alt={searchResult.name.common} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchMessage;
