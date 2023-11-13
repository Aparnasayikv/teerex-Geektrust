import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Row, Button } from "react-bootstrap";
import { UserContext } from "../Data";

const CartCard = () => {
  const {
    catalogue,
    addProductstoCart,
    selectedProducts,
    RemoveProductsFromCart,
  } = useContext(UserContext);

  return (
    <>
      <Row xs={1} md={3} lg={4} sm={2} className="p-3 ">
        {catalogue.map((item) => (
          <Col key={item.id} className="py-2 cardShadow">
            <Card border="light" className="p-3">
              <Card.Img variant="top" src={item.imageURL} />
              <Card.Body className="cardBody">
                <Card.Title className="text-secondary cardTitle">
                  {item.name}
                </Card.Title>
                <Card.Text border="secondary mb-0 ">
                  {item.gender} | {item.color}
                </Card.Text>
                <Card.Text className="priceTag">
                  <span>&#8377;</span>
                  {item.price}
                </Card.Text>
                <Button
                  key={item.id}
                  className="px-4"
                  variant="primary"
                  onClick={() => {
                    selectedProducts[item.id] !== item.quantity &&
                      addProductstoCart(item.id);
                  }}
                >
                  {selectedProducts[item.id] > 0 ? "+" : "Add to cart"}
                </Button>
                <span className="mx-2">
                  {" "}
                  {selectedProducts[item.id] > 0 &&
                    selectedProducts[item.id]}{" "}
                </span>
                {selectedProducts[item.id] > 0 && (
                  <Button
                    key={item.id}
                    variant="primary"
                    className="px-4"
                    onClick={() => {
                      console.log(selectedProducts);
                      RemoveProductsFromCart(item.id);
                    }}
                  >
                    {" "}
                    -
                  </Button>
                )}
                {selectedProducts[item.id] === item.quantity && (
                  <Card.Text className="text-danger">
                    {" "}
                    Maximum Available Quantity reached{" "}
                  </Card.Text>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CartCard;
