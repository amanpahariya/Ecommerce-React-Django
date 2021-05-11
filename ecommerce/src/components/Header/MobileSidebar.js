import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../asserts/images/logo.png';


export default function MobileSidebar({ toogle, onclick }) {
    return (
        <div className={toogle?"sidebar-container active":"sidebar-container"}>
            <div className="side-bar">
                <div className="menu-icon">
                    <div className="d-flex sidebar-title justify-content-between" style={{ alignItems: 'center' }}>
                        <div className="d-flex justify-content-between">
                            <i className="fas fa-times" onClick={() => {
                                onclick(false);
                            }}></i>
                            <h5>Menu</h5>
                        </div>
                        <div className="menu-image mx-3">
                            <img src={logo} alt="logo" />
                            <span className="ms-1">Ecommerce</span>
                        </div>
                    </div>
                </div>
                <ul>
                    <li className="sidenav-items" >
                        <Link to="/" className="nav-link">Fashions</Link>
                    </li>
                    <li className="sidenav-items" >
                        <Link to="/" className="nav-link">Mobiles</Link>
                    </li>
                    <li className="sidenav-items" >
                        <Link to="/" className="nav-link">Grocery</Link>
                    </li>
                    <li className="sidenav-items" >
                        <Link to="/" className="nav-link">Electronics</Link>
                    </li>
                    <li className="sidenav-items" >
                        <Link to="/" className="nav-link">Offer Zone</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
