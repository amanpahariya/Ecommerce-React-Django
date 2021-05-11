import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import logo from '../../asserts/images/logo.png';
import MobileSidebar from './MobileSidebar';
import { API } from '../../api-service';
import { useHistory } from 'react-router-dom';
export default function Header() {
    const history = useHistory();
    const [toogle, setToogle] = useState(false);
    const [scroll, setScroll] = useState(0);
    const [search, setSearch] = useState(false);

    const [username, setUserName] = useState(null);

    const onclick = () => {
        setToogle(!toogle);
    }

    const onScroll = () => {
        const scrollPosition = window.scrollY
        return setScroll(scrollPosition);
    }
    const searchBox = () => {
        setSearch(!search);
    }


    useEffect(() => {
        if (localStorage.getItem('access_token') && localStorage.getItem('access_token') !== "undefined") {
            API.getUser()
                .then(resp => {
                    if (resp.name) {
                        setUserName(resp.name)
                    }
                })
                .catch(error => console.error(error))
        }
    }, []);


    const handleLogout = (e) => {
        e.preventDefault();
        API.logoutUser({ refresh: localStorage.getItem('refresh_token') })
            .then(resp => {
                localStorage.removeItem('access_token');
                localStorage.removeItem('refresh_token');
                window.location.href = "/login"
            })
    }

    window.addEventListener('scroll', onScroll);
    return (
        <div>
            <div className="sidebar">
                <MobileSidebar toogle={toogle} onclick={onclick} />
            </div>

            <nav className={scroll < 200 ? 'navbar' : 'navbar fixed'}>
                <div className="d-flex justify-content-between w-100 mx-5 header-margin" style={{ alignItems: 'center' }}>
                    <div className="navbar-brand">
                        <div className="mx-2 bars" onClick={onclick}>
                            <i className="fas fa-bars" style={{ fontSize: 25 }}></i>
                        </div>
                        <img src={logo} className="navbar-logo" alt="Vehicle - sell or buy" />
                        <Link to="/" className="fs-4 text-black ms-2">
                            Ecommerce
                        </Link>
                    </div>
                    <div className="nav-bar-collapse first-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-items px-3" >
                                <p
                                    className="nav-link dropdown-toggle"

                                    role="button"
                                    id="dropDownFashion"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Fashions
                                </p>

                                <ul className="dropdown-menu" style={{ left: 'auto' }} aria-labelledby="dropDownFashion">
                                    <li className="dropDown-sub-menu px-3 pb-3">
                                        <a className="dropdown-item" href="#">Men's Top Wear</a>
                                        <ul className="dropdown-sub">
                                            <li><a href="/product/fashions?category=all">All</a></li>
                                            <li><a href="/product/fashions?category=mens_tshirt">Men's T-Shirts</a></li>
                                            <li><a href="/product/fashions?category=mens_casualshirt">Men's Casual Shirts</a></li>
                                            <li><a href="/product/fashions?category=mens_formalshirt">Men's Formal Shirts</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropDown-sub-menu px-3 pb-3 alternate">
                                        <a className="dropdown-item" href="#">Men's Bottom Wear</a>
                                        <ul className="dropdown-sub">
                                            <li>All</li>
                                            <li>Men's Jeans</li>
                                            <li>Men's Trouser</li>
                                            <li>Men's Shorts</li>
                                        </ul>
                                    </li>
                                    <li className="dropDown-sub-menu px-3 pb-3">
                                        <a className="dropdown-item" href="#">Men's Footwear</a>
                                        <ul className="dropdown-sub">
                                            <li>All</li>
                                            <li>Men's Sport Shoes</li>
                                            <li>Men's Casual Shoes</li>
                                            <li>Men's Formal Shoes</li>
                                        </ul>
                                    </li>
                                </ul>

                            </li>
                            <li className="nav-items px-3" >
                                <p
                                    className="nav-link"

                                >
                                    Mobiles
                                </p>
                            </li>
                            <li className="nav-items px-3" >
                                <p
                                    className="nav-link"

                                >
                                    Grocery
                                </p>
                            </li>
                            <li className="nav-items px-3" >
                                <p
                                    className="nav-link dropdown-toggle"

                                    role="button"
                                    id="dropDownElectronics"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Electronics
                                </p>
                                <ul className="dropdown-menu" style={{ left: 'auto' }} aria-labelledby="dropDownElectronics">
                                    <li className="dropDown-sub-menu px-3 pb-3">
                                        <a className="dropdown-item" href="#">Health & Personal Care</a>
                                        <ul className="dropdown-sub">
                                            <li>All</li>
                                            <li>Health & Personal Care</li>
                                            <li>Men's Casual Shirts</li>
                                            <li>Men's Formal Shirts</li>
                                        </ul>
                                    </li>
                                    <li className="dropDown-sub-menu px-3 pb-3 alternate">
                                        <a className="dropdown-item" href="#">Men's Bottom Wear</a>
                                        <ul className="dropdown-sub">
                                            <li>All</li>
                                            <li>Men's Jeans</li>
                                            <li>Men's Trouser</li>
                                            <li>Men's Shorts</li>
                                        </ul>
                                    </li>
                                    <li className="dropDown-sub-menu px-3 pb-3">
                                        <a className="dropdown-item" href="#">Men's Footwear</a>
                                        <ul className="dropdown-sub">
                                            <li>All</li>
                                            <li>Men's Sport Shoes</li>
                                            <li>Men's Casual Shoes</li>
                                            <li>Men's Formal Shoes</li>
                                        </ul>
                                    </li>
                                </ul>

                            </li>
                            <li className="nav-items px-3" >
                                <p
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    id="dropDownAppliances"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Appliances
                                </p>

                                <ul className="dropdown-menu" aria-labelledby="dropDownAppliances">
                                    <li className="dropDown-sub-menu px-3 pb-3">
                                        <a className="dropdown-item" href="#">Television</a>
                                        <ul className="dropdown-sub">
                                            <li>All</li>
                                            <li>Men's T-Shirts</li>
                                            <li>Men's Casual Shirts</li>
                                            <li>Men's Formal Shirts</li>
                                        </ul>
                                    </li>
                                    <li className="dropDown-sub-menu px-3 pb-3 alternate">
                                        <a className="dropdown-item" href="#">Washing Machine</a>
                                        <ul className="dropdown-sub">
                                            <li>All</li>
                                            <li>Men's Jeans</li>
                                            <li>Men's Trouser</li>
                                            <li>Men's Shorts</li>
                                        </ul>
                                    </li>
                                    <li className="dropDown-sub-menu px-3 pb-3">
                                        <a className="dropdown-item" href="#">Air Conditioners</a>
                                        <ul className="dropdown-sub">
                                            <li>All</li>
                                            <li>Men's Sport Shoes</li>
                                            <li>Men's Casual Shoes</li>
                                            <li>Men's Formal Shoes</li>
                                        </ul>
                                    </li>
                                </ul>

                            </li>
                        </ul>
                    </div>
                    <div className="nav-bar-collapse">
                        <ul className="navbar-nav justify-content-between">
                            <li className="nav-items search">
                                <Link to="/" className="nav-link" onClick={searchBox}>
                                    {!search ? <i className="fas fa-search" style={{ width: 16, height: 16 }}></i>
                                        : <i className="fas fa-times" style={{ width: 16, height: 16 }}></i>
                                    }
                                    <span>Search</span></Link>
                                {search
                                    ? <div className="searchBox">
                                        <form action="#" style={{ display: 'flex', alignItems: 'center' }} >
                                            <input placeholder="type here to search" />
                                            <i className="fas fa-search"></i>
                                        </form>
                                    </div>
                                    : ""
                                }
                            </li>
                            <li className="nav-items px-3" >
                                {!username ? <Link to="/login" className="nav-link"><i className="fas fa-sign-in-alt"></i> <span>Login</span></Link>
                                    : <div className="dropdown">
                                        <a
                                            className="nav-link dropdown-toggle"
                                            href="#"
                                            role="button"
                                            id="dropdownMenuLink"
                                            data-mdb-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            {username}
                                        </a>

                                        <ul className="dropdown-menu user me-1  mt-4 shadow-5" aria-labelledby="dropdownMenuLink">
                                            <li><a className="dropdown-item" href="#"><i className="fas fa-user"></i> My Profile</a></li>
                                            <li><a className="dropdown-item" href="#"><i className="fab fa-first-order-alt"></i> Orders</a></li>
                                            <li><a className="dropdown-item" href="#"><i className="fas fa-heart"></i> Wishlist</a></li>
                                            <li><a className="dropdown-item" href="/seller">Become a Seller</a></li>
                                            <li><a className="dropdown-item" href="#" onClick={handleLogout}>Logout</a></li>
                                        </ul>
                                    </div>}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
