import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");
  const searchCocktail = () => {
    const searchText = searchValue.current.value;
    setSearchTerm(searchText);
  };

  React.useEffect(() => {
    searchValue.current.focus();
    // console.log("hello");
  }, []);

  // console.log(searchValue.current.value);

  return (
    <section className="section search">
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-control">
          <label htmlFor="name">search your favourite</label>

          <input
            id="name"
            placeholder="type drinks..."
            onChange={searchCocktail}
            ref={searchValue}
          />
        </div>
      </form>

      {/* is this even correct? */}
    </section>
  );
};

export default SearchForm;
