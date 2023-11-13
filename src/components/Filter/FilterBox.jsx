import React from "react";
import Accordion from "react-bootstrap/Accordion";

export const FilterBox = ({ config, data, FilterHandler, filterList }) => {
  return (
    <>
      <Accordion alwaysOpen>
        <Accordion.Item>
          <Accordion.Header className="acc">{config}</Accordion.Header>
          <Accordion.Body>
            <ul style={{ listStyleType: "none" }}>
              {data?.map((item) => {
                return (
                  <li key={item} style={{ color: "black" }}>
                    <input
                      checked={filterList?.includes(item)}
                      onChange={() => FilterHandler(item)}
                      type="checkbox"
                    />{" "}
                    {item}
                  </li>
                );
              })}
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      {/* <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {config}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {data?.map((filter) => (
            <Dropdown.Item href="#/action-1">
              <input
                checked={filterList?.includes(filter)}
                onChange={() => FilterHandler(filter)}
                type="checkbox"
              />{" "}
              {filter}
            </Dropdown.Item>
          ))}
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> */}
      {/* <h3>{config}</h3>
      <ul style={{ listStyleType: "none" }}>
        {data?.map((item) => {
          return (
            <li>
              <input
                checked={filterList?.includes(item)}
                onChange={() => FilterHandler(item)}
                type="checkbox"
              />{" "}
              {item}
            </li>
          );
        })}
      </ul> */}
    </>
  );
};
