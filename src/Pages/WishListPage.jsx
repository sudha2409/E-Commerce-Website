import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import axios from "axios";
import {Button} from "react-bootstrap"
import { Delete } from "@mui/icons-material";
import Endpoints from "../Api/EndPoints";
import { ActionTypes } from "../Redux/Constants";
import Header from "../Components/Header";
import { Card, Col, Container, Row } from "react-bootstrap";

const WishListPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wishList =
  useSelector((state) => state.wishList) || localStorage.getItem("wishList") || [];

  const cart =
  useSelector((state) => state.carts) || localStorage.getItem("cart") || [];
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
    if (!wishList.length && localStorage.getItem("wishlist")) {
      dispatch({
        type: ActionTypes.SET_WISHLIST,
        payload: {
          data: localStorage.getItem("wishlist"),
        },
      });
    }
  }, []);

  const subCategory = subCategories.filter((ele) => wishList.includes(ele.id));

  return (
    <Container>
      <Row className="align-items-center my-4">
        <Header />
      </Row>
      <Row className="justify-content-evenly">
        {subCategory.length ? (
          subCategory.map((data) => (
            <div className="col-md-3 my-2">
              <div className="card">
              <img
          className="card-top-image"
          src={data.image}
          style={{
            display: "flex",
            height: "45vh",
            minwidth: "40vh",
            margin: "12px",
          }}
        />
                <div className="card-body">
                  <div className="card-title">{data.title}</div>
                  <div className="rating">
                    <span>&#9733;</span>
                    {data.rating.rate}
                  </div>
                  <div className="price">
                    <span>&#36;</span>
                    {data.price}
                  </div>
                  <Button
                            variant="danger"
                            className="btn-sm"
                            onClick={() => {
                              dispatch({
                                type: ActionTypes.UPDATE_WISHLIST_CART,
                                payload: {
                                  data: data.id,
                                  isDelete: wishList.includes(data.id),
                                },
                              });
                            }}
                    >
                    <Delete/>
                    </Button>

                </div>
              </div>
            </div>
          ))
        ) : (
          <Col>
            <div className="text-center">
              <h2>No Item in WishList</h2>
              <button
                className="btn btn-primary"
                onClick={() => {
                  navigate("/");
                }}
              >
                Continue Shopping
              </button>
            </div>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default WishListPage;
