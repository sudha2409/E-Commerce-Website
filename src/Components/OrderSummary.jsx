import React from "react";
import { useSelector } from "react-redux";

export default function OrderSummary() {
  const cart = useSelector((state) => state.carts) || localStorage.getItem("carts");
  const subCategories = useSelector((state) => state.subCategories);
  const priceStyle = {
    display: "flex",
    justifyContent: "space-between",
    flexBasis: "100%",
    margin: "5px",
  };
  const subCategory = subCategories.filter((ele) => cart.includes(ele.id));

  const summaryCost = subCategory.reduce((sum, cartItem) => sum + cartItem.price, 0);

  return (
    <div className="border m-3 p-3" style={{ width: "20vw", height: "250px" }}>
      <div className="fs-5">Order Summary</div>
      <div className="d-flex flex-wrap">
        <div className="d-flex justify-content-between w-100 mb-2">
          <div>Summary</div>
          <div>
            <span>&#36;</span> {summaryCost}
          </div>
        </div>
        <div className="d-flex justify-content-between w-100 mb-2">
          <div>Shipping Charges</div>
          <div>
            <span>&#36;</span> 5
          </div>
        </div>
        <div className="d-flex justify-content-between w-100 mb-2">
          <div>Tax Estimate</div>
          <div>
            <span>&#36;</span> 5
          </div>
        </div>
        <div className="d-flex justify-content-between w-100">
          <div>
            <b>Total Cost</b>
          </div>
          <div>
            <b>
              <span>&#36;</span>
              {(summaryCost + 10).toFixed(2)}
            </b>
          </div>
        </div>
      </div>
    </div>
  );
}
