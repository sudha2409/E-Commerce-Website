import {  Link } from "react-router-dom";
import {Formik, ErrorMessage, Field, Form } from "formik";
import * as Yup from "yup";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";

const SignUpPage = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const onSubmit = (values) => {
    console.log(values);
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .required("EmailAddress is required")
      .email("email must be a valid email address"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "password must be at least 6 characters long"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .min(6, "confirmPassword must be at least 6 characters long"),
  });

  return (
    
    <div className="container">
      <Header />
      <Navbar />
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="wrapper">
            <h1 className="text-center">Sign Up</h1>
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
               {(formik) => {
                return(
              <Form>
                <div className="form-group my-3">
                <label>First Name</label>
                  <Field
                    type="text"
                    name="firstName"
                    className={formik.touched.firstName && formik.errors.firstName ? 'form-control is-invalid' : 'form-control'}
                    // placeholder="First Name"
                  />
                   <ErrorMessage name="firstName">
                  {(errorMessage) => (
                    <p className="text-danger">{errorMessage}</p>
                  )}
                </ErrorMessage>
                </div>
               
                <div className="form-group my-3">
                <label>Last Name</label>
                  <Field
                    type="text"
                    name="lastName"
                    className={formik.touched.lastName && formik.errors.lastName ? 'form-control is-invalid' : 'form-control'}
                    // placeholder="last Name"
                  />
                    <ErrorMessage name="lastName">
                  {(errorMessage) => (
                    <p className="text-danger">{errorMessage}</p>
                  )}
                </ErrorMessage>
                </div>
              
                <div className="form-group my-3">
                      <label>Email</label>
                      <Field
                        type="text"
                        name="email"
                        className={formik.touched.email && formik.errors.email ? 'form-control is-invalid' : 'form-control'}
                      />
                      <ErrorMessage name="email">
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
                    className={formik.touched.password && formik.errors.password ? 'form-control is-invalid' : 'form-control'}
                    // placeholder="password"
                  />
                   <ErrorMessage name="password">
                  {(errorMessage) => (
                    <p className="text-danger">{errorMessage}</p>
                  )}
                </ErrorMessage>
                </div>
               
                <div className="form-group my-3">
                <label>Confirm Password</label>
                  <Field
                    type="password"
                    name="confirmPassword"
                    className={formik.touched.confirmPassword && formik.errors.confirmPassword ? 'form-control is-invalid' : 'form-control'}
                    // placeholder="confirmPassword"
                  />
                   <ErrorMessage name="confirmPassword">
                  {(errorMessage) => (
                    <p className="text-danger">{errorMessage}</p>
                  )}
                </ErrorMessage>
                </div>
               
               <br />
            <p className="text-center">
               Already Register ? <a href="/LoginPage">Login here</a>
            </p>
            <button type="submit" className="btn btn-primary btn-block w-100"> Sign up</button>
            </Form>
                );
          }}
            </Formik>
          </div>
          </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};
export default SignUpPage;
