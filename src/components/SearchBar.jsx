import React from "react";

import Form from "react-bootstrap/Form";

import InputGroup from "react-bootstrap/InputGroup";
import { UserContext } from "../Data";

const SearchBar = () => {
  const { search, searchHandler } = React.useContext(UserContext);
  return (
    <InputGroup>
      <Form.Control
        className="p-2 m-5"
        value={search}
        onChange={(e) => searchHandler(e)}
        placeholder="Search your product"
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
    </InputGroup>
  );
};

export default SearchBar;
