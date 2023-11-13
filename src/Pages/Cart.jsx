import React, { useContext } from "react";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter/Filter";
import CartCard from "../components/CartCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { UserContext } from "../Data";

const Cart = () => {
  const { catalogue } = useContext(UserContext);
  return (
    <Container fluid>
      {catalogue && (
        <>
          <Row>
            <SearchBar />
          </Row>
          <Row>
            <Col lg={3} sm className="boxShadow">
              <Filter />
            </Col>
            <Col lg={9} md={12} className="" sm={12}>
              <CartCard />
            </Col>
          </Row>
        </>
      )}
      {!catalogue && (
        <div className="d-flex flex-column justify-contents-center ">
          <h2>Data Not available</h2>
          <h2 className="text-center">Sorry for the inconvenience</h2>
        </div>
      )}
    </Container>
  );
};

export default Cart;
