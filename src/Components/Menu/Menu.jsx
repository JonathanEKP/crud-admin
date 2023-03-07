import React from 'react'
import { Link } from "react-router-dom";
import './Menu.css'
import { MdAdminPanelSettings } from 'react-icons/md';

function Menu() {
  return (
    <div>
        <nav className="navbar navbar-expand-md bg-custom">
        <div className="container-fluid ">
          <Link className="navbar-brand text-white fs-1" to='/'>
            <MdAdminPanelSettings className='d-flex align-items-center'/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-white fw-normal text-uppercase" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-white fw-normal text-uppercase" aria-current="page" to="/Celulares">
                  Celulares
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-white fw-normal text-uppercase" aria-current="page" to="/">
                  Juegos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Menu