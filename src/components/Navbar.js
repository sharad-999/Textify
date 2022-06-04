import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode==='dark'?'black':'light'} bg-${props.mode==='dark'?'black':'light'}`}>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link className="navbar-brand" to="/" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{props.title}</Link>
                    <ul className="navbar-nav mtoe-auto mb-2 mb-lg-0">
                            <li className="nav-item" >
                            <Link className="nav-link active" aria-current="page" to="/" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/about" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>About</Link>
                            </li>
                        <li className="nav-item">
                            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} my-2 mx-2`}>
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Dark Mode</label>
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                            </div>
                        </li>
                    </ul>
                </div>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success btn-orimary" type="submit">Search</button>
                    </form>
            </div>
        </nav>
    )
}

Navbar.propTypes = { title: propTypes.string.isRequired }
Navbar.defaultProps = { title: 'Textify' }     //incase title is not send