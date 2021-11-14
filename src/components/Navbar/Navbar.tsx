import React, { useState } from "react";
import "./Navbar.css";

interface NavbarProps {}

const Navbar = ({}: NavbarProps) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top pt-3 position-sticky">
      <div className="container-fluid">
        <a href={process.env.PUBLIC_URL + "/"} className="navbar-brand">
          <img
            src={process.env.PUBLIC_URL + "/assets/logos/ab-dates.png"}
            width="150"
            alt="abhiyantriki"
            className="d-inline-block align-middle mr-2"
          />
        </a>

        {/* <!-- toggle button --> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* <!-- links --> */}
        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item px-2 highlight">
              <a
                href={process.env.PUBLIC_URL + "/"}
                className="box foo text-decoration-none"
              >
                Home
              </a>
            </li>
            <li className="nav-item px-2 highlight">
              <a
                href={process.env.PUBLIC_URL + "/events"}
                className="box foo text-decoration-none"
              >
                Events
              </a>
            </li>
            <li className="dropdown nav-item px-2 highlight">
              <a
                href={process.env.PUBLIC_URL + "/expos-and-speakers"}
                className="foo box text-decoration-none"
              >
                <span className="truncate-expo">Expos & Speakers </span>
              </a>
            </li>

            <li className="nav-item px-2 highlight">
              <a
                href={process.env.PUBLIC_URL + "/get-involved"}
                className="box foo text-decoration-none"
              >
                <span className="truncate-get-involved">Get Involved</span>
              </a>
            </li>
            <li className="nav-item px-2 highlight">
              <a
                href={process.env.PUBLIC_URL + "/parvaah"}
                className="box foo text-decoration-none"
              >
                Parvaah
              </a>
            </li>
            <li className="nav-item px-2 highlight">
              <a
                href={process.env.PUBLIC_URL + "/sponsors"}
                className="box foo text-decoration-none"
              >
                Sponsors
              </a>
            </li>
            <li className="nav-item px-2 highlight">
              <a
                href={process.env.PUBLIC_URL + "#contact"}
                className="box foo text-decoration-none"
              >
                Contact
              </a>
            </li>

            {/* <!-- right images --> */}
            <ul className="d-flex me-auto">
              <li className="nav-item somaiya left-wala-somaiya-logo">
                <span className="navbar-brand">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/logos/somaiya-trust.png"
                    }
                    width="50"
                    alt=""
                    className="d-inline-block align-middle mr-2"
                  />
                </span>
              </li>
              <li className="nav-item somaiya right-wala-somaiya-logo">
                <span className="navbar-brand">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/logos/somaiya-white-logo.png"
                    }
                    width="125"
                    alt=""
                    className="d-inline-block align-middle mr-2"
                  />
                </span>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
