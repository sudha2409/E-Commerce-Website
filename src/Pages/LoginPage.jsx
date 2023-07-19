import React, { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import EndPoints from "../Api/EndPoints";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
const LoginPage = () => {
  const navigate = useNavigate();
  const [RequestResponse, setRequestResponse] = useState({
    textMessage: "",
    alertClass: "",
  });

  const initialValues = {
    username: "",
    password: "",
  };
  const onSubmit = (values) => {
    // console.log(values);
    axios
      .post("https://fakestoreapi.com/auth/login", values)
      .then(
        (response) => {
          setRequestResponse({
            textMessage: "Login successful",
            alertClass: "alert alert-success",
          });

          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          navigate("/");
          console.log(response);
        },

        (error) => {
          setRequestResponse({
            textMessage: error.response.data.message,
            alertClass: "alert alert-danger",
          })
        }
      )
      .catch((error) => console.log(error));
  };
  const validationSchema = Yup.object({
    username: Yup.string().required("UserName is required"),
    //   .username("username must be a valid username address")
    password: Yup.string()
      .required("Password is required")
      .min(6, "password must be at least 6 characters long"),
  });
  return (
    <div className="container">
      <Header />
      <Navbar />
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="wrapper">
            <div class={RequestResponse.alertClass}>
              {RequestResponse.textMessage}
            </div>
            <h2 className="text-center">Login</h2>
            <br />
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
              validateOnMount
            >
              {(formik) => {
                return (
                  <Form>
                    <div className="form-group my-3">
                      <label>Email</label>
                      <Field
                        type="text"
                        name="username"
                        className={
                          formik.touched.username && formik.errors.username
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                      />
                      <ErrorMessage name="username">
                        {(errorMessage) => (
                          <small className="text-danger">{errorMessage}</small>
                        )}
                      </ErrorMessage>
                    </div>

                    <div className="form-group my-3">
                      <label>Password</label>
                      <Field
                        type="password"
                        name="password"
                        className={
                          formik.touched.password && formik.errors.password
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                      />
                      <ErrorMessage name="password">
                        {(errorMessage) => (
                          <small className="text-danger">{errorMessage}</small>
                        )}
                      </ErrorMessage>
                    </div>
                    <Field
                      type="submit"
                      value="Login"
                      className="btn btn-primary btn-block"
                      disabled={!formik.isValid}
                    />
                  </Form>
                );
              }}
            </Formik>

            <br />
            <p className="text-center">
              New User ?<Link to="/SignUpPage">Click Here</Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
