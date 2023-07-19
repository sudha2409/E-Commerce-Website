import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ActionTypes } from "../Redux/Constants";
import { IconButton } from "@mui/material";
import { useState } from "react";
import RatingStars from "react-rating-stars-component";

const Category = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.carts);
  const wishList = useSelector((state) => state.wishList);
  const [isWishlisted, setIsWishlisted] = useState(wishList.includes(props.data.id));
  const { title, price, image, rating } = props.data;

  const handleWishlistClick = () => {
    dispatch({
      type: ActionTypes.UPDATE_WISHLIST_CART,
      payload: { data: props.data.id, isDelete: isWishlisted },
    });
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="col-md-3 my-2">
      <div className="card" style={{ minHeight: "45vh" }}>
        <IconButton
          className={`bi bi-heart-fill ${isWishlisted ? "text-danger" : ""}`}
          style={{ margin: "1px 2px 0px 85%" }}
          onClick={handleWishlistClick}
        ></IconButton>
        <img
          className="card-top-image"
          src={image}
          style={{
            display: "flex",
            height: "45vh",
            minWidth: "40vh",
            margin: "12px",
          }}
        />
        <hr />
        <div className="card-body" style={{ minHeight: "25vh" }}>
          <p className="card-title">
            <b>Brand:</b> {title}
          </p>
          <div className="rating">
            <RatingStars
              count={5}
              value={rating.rate}
              size={20}
              activeColor="#ffd700"
            />
          </div>
          <div className="price">
            <b>${price}</b>
          </div>
          <button
            className="btn btn-primary btn-block w-100"
            disabled={cart.includes(props.data.id)}
            onClick={() => {
              dispatch({
                type: ActionTypes.UPDATE_CART,
                payload: { data: props.data.id, isDelete: false },
              });
            }}
          >
            <i className="bi bi-cart3" style={{ color: "white" }}></i>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
