import "./App.css";
import Register from "./components/Registration/Register";
import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Usertable from "./components/Table/Usertable";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function App() {
  return (
    <Router>
      <div className="homepage-bgimage">
        <NavBar />
        {/* <div className="homepage-bgimage">
        <div className="container d-flex justify-content-center ">
          <div
            className=" col-md-5 mt-5 shadow-lg p-5 mb-10 bg-white rounded"
            style={{ marginBottom: "15%" }}
          >
            <Register initialValues={initialValues} />
          </div>
        </div>
      </div>
      <Usertable /> */}
        <Switch>
          <Route exact path="/" component={Usertable} />
          <Route path="/Register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
