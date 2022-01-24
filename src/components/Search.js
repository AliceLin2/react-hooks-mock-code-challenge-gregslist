import React, {useState} from "react";

function Search({onChangeSearchTerm}) {
  const [input, setInput] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    onChangeSearchTerm(input.toLowerCase());
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
