import "./App.css";
import Register from "./components/Registration/Register";
import NavBar from "./components/NavBar/NavBar";

import "bootstrap/dist/css/bootstrap.min.css";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function App() {
  return (
    <div>
      <NavBar />
      <div className="homepage-bgimage">
        <div className="container d-flex justify-content-center ">
          <div
            className=" col-md-5 mt-5 shadow-lg p-5 mb-10 bg-white rounded"
            style={{ marginBottom: "15%" }}
          >
            <Register initialValues={initialValues} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
