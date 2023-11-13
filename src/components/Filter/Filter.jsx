import React, { useContext, useEffect, useState } from "react";
import { FilterBox } from "./FilterBox";
import { UserContext } from "../../Data";
import { Navbar } from "react-bootstrap";

const Filter = () => {
  const [products, setProduct] = useState([]);

  const {
    colorList,
    genderList,
    priceList,
    typeList,
    colorFilterHandler,
    colorFilterList,
    typeFilterHandler,
    typefilterList,
    genderFilterHandler,
    genderFilterList,
    priceFilterHandler,
    priceFilterList,
  } = useContext(UserContext);

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary filter">
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          {" "}
          <span className="text-primary"> Filters</span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav filter">
          <FilterBox
            filterList={colorFilterList}
            FilterHandler={colorFilterHandler}
            config={"Color"}
            data={colorList}
          />
          <FilterBox
            config={"Gender"}
            data={genderList}
            filterList={genderFilterList}
            FilterHandler={genderFilterHandler}
          />
          <FilterBox
            config={"Type"}
            data={typeList}
            filterList={typefilterList}
            FilterHandler={typeFilterHandler}
          />
          <FilterBox
            config={"price"}
            data={priceList}
            filterList={priceFilterList}
            FilterHandler={priceFilterHandler}
          />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default Filter;
