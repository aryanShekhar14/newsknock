// import PropTypes from 'prop-types'
import React from 'react'
import {
    Link
} from "react-router-dom";
const NavBar = () => {
    function handleactive(e) {
        let nav = document.querySelectorAll(".nav-link");
        nav.forEach(elem => {
            elem.classList.remove("active");
        })
        e.target.classList.add("active");
    }

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" onClick={handleactive}>News<strong style={{ color: "#c72434" }}>Knock</strong></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/" onClick={handleactive}>Home</Link>
                            </li>
                            {/* <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/business" onClick={handleactive}>Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/entertainment" onClick={handleactive}>Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/general" onClick={handleactive}>General</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/health" onClick={handleactive}>Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/science" onClick={handleactive}>Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sports" onClick={handleactive}>Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/technology" onClick={handleactive}>Technology</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default NavBar