import logo from "./logo.svg";
import "./App.css";
import AppRoutes from "./Routes";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react"

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


function App() {
 

  return (
    <div>
     
      <h3>Home page</h3>
      <Link to="/secondPage" ><h3>SecondPage</h3></Link> 
      <h3>ThirdPage</h3>
      {/* <ul
        className="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm"
        id="pillNav2"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active rounded-5"
            id="home-tab2"
            data-bs-toggle="tab"
            type="button"
            role="tab"
            aria-selected="true"
          >
            first
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link rounded-5"
            id="profile-tab2"
            data-bs-toggle="tab"
            type="button"
            role="tab"
            aria-selected="false"
          >
            <Link to="/secondPage">second</Link>
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link rounded-5"
            id="contact-tab2"
            data-bs-toggle="tab"
            type="button"
            role="tab"
            aria-selected="false"
          >
            third
          </button>
        </li>
      </ul> */}

      <AppRoutes />
    </div>
  );
}

export default App;
