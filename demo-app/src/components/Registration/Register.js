import { Component, React, useState, useEffect } from "react";
import { userSchema } from "../../validations/UserValidation";
import { Form, Formik } from "formik";
import { TextField } from "./TextField";
// import { axios } from "axios";
import "./Register.css";
import Popup from "../Popup/Popup";
import img from "../../assets/person.jpg";

// const initialValues = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   password: "",
//   confirmPassword: "",
// };

class Register extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      message: "",
      header: "",
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.setMessage = this.setMessage.bind(this);
    this.setHeader = this.setHeader.bind(this);
  }

  setMessage = (message) => {
    this.setState({ message: message });
  };
  setHeader = (header) => {
    this.setState({ header: header });
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  // const [trigger, settrigger] = useState(false);
  // const [header, setheader] = useState("Initial");
  // const [message, setmessage] = useState("message");
  // const header = "I'm header";
  render() {
    return (
      <div>
        <Formik
          initialValues={this.props.initialValues}
          validationSchema={userSchema}
          onSubmit={async (values, { resetForm }) => {
            const payload = {
              // make payload here using values
              firstName: values.firstName,
              lastName: values.lastName,
              email: values.email,
              password: values.password,
            };
            console.log(payload);
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
                  const error =
                    "Status:" +
                    response.status +
                    " " +
                    "Response:" +
                    response.statusText;
                  this.setHeader("ERROR!");
                  this.setMessage(error);
                  this.showModal();
                  console.log(response);
                  // return Promise.reject(error);
                } else {
                  console.log("User was successfully created");
                  resetForm();
                  this.setHeader("Success");
                  this.setMessage("User was successfully created");
                  this.showModal();
                  // setheader("Changed");
                  // settrigger(true);
                }
              })
              .catch((error) => {
                this.setHeader("ERROR");
                this.setMessage("error");
                this.showModal();
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

        <Popup
          show={this.state.show}
          handleClose={this.hideModal}
          message={this.state.message}
          header={this.state.header}
        />
        {/* <button type="button" onClick={this.showModal}>
          Open
        </button> */}
      </div>
    );
  }
}

export default Register;
