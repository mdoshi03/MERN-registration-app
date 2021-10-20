import "./App.css";
import Register from "./components/Register";
import NavBar from "./components/NavBar";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <NavBar />
      <div className="homepage-bgimage">
        <div className="container d-flex justify-content-right ">
          <div
            className=" col-md-5 mt-5 shadow-lg p-5 mb-10 bg-white rounded-right"
            style={{ marginBottom: "16.5%" }}
          >
            <Register />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
