import { useEffect, useState } from "react";
import "./Search.scss";

const Search = ({ searchProducts }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    searchProducts(search);
  };
  useEffect(() => {
    handleSearch();
  }, [search]);

  return (
    <div className="search">
      <input
        onChange={(e) => setSearch(e.target.value)}
        className="search__input"
        type="text"
        placeholder="Search..."
        name="search"
        value={search}
      />
      <i className="fas fa-search"></i>
    </div>
  );
};

export default Search;
