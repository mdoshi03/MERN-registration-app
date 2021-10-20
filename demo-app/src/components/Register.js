import { Component, React, useState, useEffect } from "react";
import { userSchema } from "../validations/UserValidation";
import { Form, Formik } from "formik";
import { TextField } from "./TextField";
// import { axios } from "axios";
import "./Register.css";
import Popup from "./Popup";
import img from "../assets/person.jpg";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const [trigger, settrigger] = useState(false);
  const [header, setheader] = useState("Initial");
  // const [message, setmessage] = useState("message");
  // const header = "I'm header";

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={userSchema}
        onSubmit={async (values, { resetForm }) => {
          const payload = {
            // make payload here using values
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password,
          };

          const dat = JSON.stringify(payload);
          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: dat,
          };

          fetch("http://localhost:8080/api/users", requestOptions)
            .then(async (response) => {
              const isJson = response.headers
                .get("content-type")
                ?.includes("application/json");
              const data = isJson && (await response.json());

              // check for error response
              if (!response.ok) {
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
              } else {
                console.log("User was successfully created");
                resetForm();
                settrigger(true);
              }
            })
            .catch((error) => {
              console.error("There was an error!", error);
            });
        }}
      >
        {(formik) => (
          <div>
            <Form>
              <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
              <TextField label="First Name" name="firstName" type="text" />
              <TextField label="last Name" name="lastName" type="text" />
              <TextField label="Email" name="email" type="email" />

              <TextField label="Password" name="password" type="password" />
              <TextField
                label="Confirm Password"
                name="confirmPassword"
                type="password"
              />
              <div class="d-flex justify-content-center">
                <button
                  className="btn btn-dark mt-4"
                  type="submit"
                  disabled={!(formik.isValid && formik.dirty)}
                >
                  Register
                </button>

                <button className="btn btn-danger mt-4 ms-4" type="reset">
                  Reset
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>

      {trigger && (
        <Popup
          trigger={true}
          header={"Form Submitted"}
          message={"User was successfully registered!"}
        />
      )}
    </div>
  );
};

export default Register;
