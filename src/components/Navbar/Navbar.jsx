import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../../App.scss'

const Navbar = () => {
  return (
    <>
      <style jsx="true">
        {`
          button[aria-expanded='false'] > .close {
            display: none;
          }
          button[aria-expanded='true'] > .open {
            display: none;
          }
        `}
      </style>

      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container">
          <Link to="/" className="navbar-brand fs-3 ubuntu">
            Rick & Morty <span className="text-primary">Wiki</span>
          </Link>

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fas fa-bars open text-dark"></span>
            <span className="fas fa-times close text-dark"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav fs-5">
              <NavLink to="/" className="nav-link">
                Characters
              </NavLink>
              <NavLink to="/episodes" className="nav-link">
                Episode
              </NavLink>
              <NavLink
                to="/location"
                activeclassname="action"
                className="nav-link"
              >
                Location
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar
