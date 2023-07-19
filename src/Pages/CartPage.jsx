import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ActionTypes } from "../Redux/Constants";
import Endpoints from "../Api/EndPoints";
import OrderSummary from "../Components/OrderSummary";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Header from "../Components/Header";

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.carts) || localStorage.getItem("carts");
  const subCategories = useSelector((state) => state.subCategories);

  const fetchData = () => {
    axios
      .get(Endpoints.PRODUCT_URL)
      .then((response) => {
        dispatch({
          type: ActionTypes.SET_SUBCATEGORIES, 
          payload: {
            data: response.data,
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
    if (!cart.length && localStorage.getItem("carts")) {
      dispatch({
        type: ActionTypes.UPDATE_CART,
        payload: {
          data: localStorage.getItem("carts"),
        },
      });
    }
  }, []);

  const subCategory = subCategories.filter((ele) => cart.includes(ele.id));

  return (
    <Container>
      <Row className="align-items-center my-4">
        <Header />
      </Row>
      {subCategory.length ? (
        <Row className="justify-content-between">
          <Col sm={8}>
            {subCategory.map((data) => (
              <Card key={data.id} className="mb-3">
                <Row>
                  <Col sm={3}>
                    <Card.Img src={data.image} className="card-img-top" alt="Product" />
                  </Col>
                  <Col sm={7}>
                    <Card.Body>
                      <Card.Title>{data.title}</Card.Title>
                      <Card.Text>
                        <span>&#36;</span>
                        {data.price}
                      </Card.Text>
                    </Card.Body>
                  </Col>
                  <Col sm={2} className="d-flex align-items-center">
                    <Button
                      variant="danger"
                      onClick={() => {
                        dispatch({
                          type: ActionTypes.UPDATE_CART,
                          payload: {
                            data: data.id,
                            isDelete: cart.includes(data.id),
                          },
                        });
                      }}
                    >
                      Delete
                    </Button>
                  </Col>
                </Row>
              </Card>
            ))}
          </Col>
          <Col sm={4}>
            <OrderSummary />
          </Col>
        </Row>
      ) : (
        <Row className="text-center">
          <Col>
            <h2>No Item in Cart</h2>
            <Button variant="primary" onClick={() => navigate("/")}>
              Continue Shopping
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default CartPage;
