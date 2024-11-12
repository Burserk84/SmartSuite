import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../styles/Global.css";
import { Link } from "react-router-dom";
import { navData } from "../utils/navData";
import { useExpand } from "./useExpand";

export const Header = () => {
  const { expand, toggleExpand } = useExpand(); // custom hook for toggle

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {" "}
        {/* start of navbar */}
        <div className="container-fluid">
          {" "}
          {/* name of project that lead to home */}
          <Link className="navbar-brand" to="/">
            SmartSuite
          </Link>
          {/* start of toggle button */}{" "}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={expand === 1}
            aria-label="Toggle navigation"
            onClick={toggleExpand}
          >
            <span className="navbar-toggler-icon"></span>
          </button>{" "}
          {/* End of toggle button */}
          <div
            className={`collapse navbar-collapse ${expand === 1 ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav">
              {" "}
              {/* start of ul li */}
              {expand === 1 &&
                navData.map((item) => (
                  <li className="nav-item" key={item.id}>
                    <Link className="nav-link" to={item.src}>
                      | {item.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </nav>
      {/* end of navbar */}
    </React.Fragment>
  );
};
