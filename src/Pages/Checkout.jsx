import React, { useContext, useState } from "react";
import { Container, Col, CardImg, Button, Row } from "react-bootstrap";
import { UserContext } from "../Data";

const Checkout = () => {
  const {
    catalogue,
    addProductstoCart,
    selectedProducts,
    RemoveProductsFromCart,
    checkoutitems,
    totalPrice,
    selectedNo,
  } = useContext(UserContext);
  const [isorderPlaced, setorderPlaced] = useState(true);
  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <Container className="py-5 h-100">
        <Row className="justify-content-center align-items-center h-100">
          <Col lg="8" className="">
            {checkoutitems.map((prod) => {
              return selectedProducts[prod.id] ? (
                <Row className="pb-3">
                  <Col lg={4} md={4} sm={12} className="text-center">
                    <img className="checkoutImg" src={prod.imageURL} />
                  </Col>
                  <Col
                    md={4}
                    sm={12}
                    className="d-flex flex-column justify-content-center align-items-center"
                  >
                    <h6> {prod.name}</h6>
                    <h6>
                      {" "}
                      {prod.currency} {prod.name}
                    </h6>
                  </Col>

                  <Col
                    md={4}
                    sm={12}
                    className="d-flex flex-row justify-content-center align-items-center"
                  >
                    <Button
                      key={prod.id}
                      className="mx-4"
                      variant="primary"
                      onClick={() => {
                        selectedProducts[prod.id] !== prod.quantity &&
                          addProductstoCart(prod.id);
                      }}
                    >
                      +
                    </Button>
                    <span> {selectedProducts[prod.id]}</span>

                    {
                      <Button
                        key={prod.id}
                        className="mx-4"
                        variant="primary"
                        onClick={() => {
                          selectedProducts[prod.id] > 0 &&
                            RemoveProductsFromCart(prod.id);
                        }}
                      >
                        {" "}
                        -
                      </Button>
                    }
                  </Col>
                  {selectedProducts[prod.id] === prod.quantity && (
                    <span className="text-danger">
                      {" "}
                      Maximum Available Quantity reached{" "}
                    </span>
                  )}
                </Row>
              ) : (
                <> </>
              );
            })}

            {selectedNo > 0 && (
              <div className="placeOrderBox">
                {" "}
                <Button
                  onClick={() => setorderPlaced(!isorderPlaced)}
                  className="placeOrder"
                >
                  {isorderPlaced ? "Place Order" : "OrderPlaced"}{" "}
                </Button>{" "}
              </div>
            )}
            {selectedNo == 0 && (
              <div className="placeOrderBox text-center">
                <h4>Your cart is empty, Continue Shopping..!</h4>
                <Button href="/"> Go to HomePage </Button>
              </div>
            )}
          </Col>

          <Col lg="4">
            <Container className="bg-white">
              <span className="checkoutHeader text-secondary ">
                Price Details
              </span>
              <Row className="py-2">
                <Col>Price </Col>
                <Col>{totalPrice} </Col>
              </Row>
              <Row className="py-2">
                <Col>Discount </Col>
                <Col>0 </Col>
              </Row>
              <Row className="py-2">
                <Col>Delivery Charges </Col>
                <Col>0</Col>
              </Row>
              <Row className="py-3 checkoutTotal ">
                <Col>Total Amount </Col>
                <Col> {totalPrice}</Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Checkout;
