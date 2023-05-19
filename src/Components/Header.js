import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <nav class="navbar navbar-expand-xl">
      <div class="container">
        <a class="logo" href="#">
          NewsNow
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="nav navbar-nav ms-auto">
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://github.com/AltonDsilva3010/NewsAppReact"
                target="none"
              >
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
