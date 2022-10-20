import React from "react";

const SearchBox = (props) => {
  return (
    <div className="col col-sm-4">
      <button type="submit">search</button>
      <input
        type="input"
        className="form-control"
        value={props.value}
        // onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder="Type to search a film..."
      ></input>
    </div>
  );
};

export default SearchBox;
