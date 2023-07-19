import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const cartCount = useSelector((state) => state.carts.length);
  const [loginStatus, setLoginStatus] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) {
      setLoginStatus(false);
    } else {
      setLoginStatus(true);
    }
  }, [loginStatus]);

  const onLogoutHandler = () => {
    localStorage.clear();
    setLoginStatus(false);
    navigate("/loginPage");
  };

  return (
    <>
      <div className="heading">
        <div className="logo">
          <span className="first">SHOP</span>
          <span>LANE</span>
        </div>
        <div className="rightside">
          <div class="dropdown">
            <div
              style={{
                color: "black",
                backgroundColor: "White",
                marginRight: "15px",
                marginLeft: "15px",
              }}
              class="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {loginStatus ? (
                <Link class="btn btn-danger" onClick={onLogoutHandler}>
                  Logout
                </Link>
              ) : (
                <Link class="btn btn-primary" to="/loginPage">
                  Login
                </Link>
              )}
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <div
                className="bi bi-heart-fill"
                style={{ fontSize: "35px", marginRight: "15px" }}
                onClick={() => {
                  navigate("/wishlist");
                }}
              >
                {/* <span className="count">{wishListCount}</span> */}
              </div>
            </div>
            <div className="icon">
              <div
                className="bi bi-cart3"
                style={{ fontSize: "35px" }}
                onClick={() => {
                  navigate("/CartPage");
                }}
              >
                <span className="count">{cartCount}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
