import React from "react";
import {Link} from "react-router-dom"
function NavBar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-primary ">
        <div class="container-fluid my-4 mx-4">
          <Link class="navbar-brand" to='/'>
              Users            
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to='/'>
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to='/about'>
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to='/contact'>
                  Contact
                </Link>
              </li>
              <Link to='/adduser' type="button" class="btn btn-success mx-5">Add Users</Link>

              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
