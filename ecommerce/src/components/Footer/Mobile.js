import React, { useState } from 'react';
import './style.css'

export default function Mobile() {

    const [storeInfo, setStoreInfo] = useState(false);
    const [productInfo, setProductInfo] = useState(false);
    const [companyInfo, setCompanyInfo] = useState(false);
    const [accountInfo, setaccountInfo] = useState(false);

    return (
        <div className="mobile-footer">
            <div className="bg-dark text-white pt-4">
                <div className="container">
                    <section>
                        <div className="footer-container">
                            <div className="mb-4 mb-md-0">
                                <div className="d-flex justify-content-between" onClick={(() => setStoreInfo(!storeInfo))}>
                                    <h5 style={{ fontSize: 18 }}>Store Informations</h5>
                                    <i className="fas fa-sort-down icons-footer"></i>
                                </div>
                                <ul className={storeInfo ? "list-unstyled mb-0 toogle-footer active" : "list-unstyled mb-0 mt-3 toogle-footer"}>
                                    <li className="d-flex mb-2" style={{ alignItems: 'baseline' }}>
                                        <i style={{ width: 50, color: '#e99b9b' }} className="fas fa-map-marker-alt"></i>
                                        <span style={{ color: '#888', fontSize: 13 }}>
                                            Store - your company address
                                            <br />
                                            city state
                                            <br />
                                            country
                                        </span>
                                    </li>
                                    <li className="d-flex mb-2" style={{ alignItems: 'baseline' }}>
                                        <i style={{ width: 50, color: '#e99b9b' }} className="fas fa-phone-alt"></i>
                                        <span style={{ color: '#888', fontSize: 13 }}>
                                            000-000-0000
                                        </span>
                                    </li>
                                    <li className="d-flex mb-2" style={{ alignItems: 'baseline' }}>
                                        <i style={{ width: 50, color: '#e99b9b' }} className="fas fa-fax"></i>
                                        <span style={{ color: '#888', fontSize: 13 }}>
                                            123456
                                        </span>
                                    </li>
                                    <li className="d-flex mb-2" style={{ alignItems: 'baseline' }}>
                                        <i style={{ width: 50, color: '#e99b9b' }} className="far fa-envelope" ></i>
                                        <span style={{ color: '#888', fontSize: 13 }}>
                                            sales@yourcompany.com
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="mb-4 mb-md-0">
                                <div className="d-flex justify-content-between" onClick={(() => setaccountInfo(!accountInfo))}>
                                    <h5 style={{ fontSize: 18 }}>Your Account</h5>
                                    <i className="fas fa-sort-down icons-footer"></i>
                                </div>
                                <ul className={accountInfo ? "list-unstyled mb-0 mt-3 toogle-footer active" : "list-unstyled mb-0 mt-3 toogle-footer"}>
                                    <li className="mb-2">
                                        <span style={{ color: '#888', fontSize: 13 }}>
                                            Personal info
                                        </span>
                                    </li><li className="mb-2">
                                        <span style={{ color: '#888', fontSize: 13 }}>
                                            Orders
                                        </span>
                                    </li><li className="mb-2">
                                        <span style={{ color: '#888', fontSize: 13 }}>
                                            Credit slips
                                        </span>
                                    </li><li className="mb-2">
                                        <span style={{ color: '#888', fontSize: 13 }}>
                                            Address
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="mb-4 mb-md-0">
                                <div className="d-flex justify-content-between" onClick={(() => setProductInfo(!productInfo))}>
                                    <h5 style={{ fontSize: 18 }}>Products</h5>
                                    <i className="fas fa-sort-down icons-footer"></i>
                                </div>
                                <ul className={productInfo ? "list-unstyled mb-0 mt-3 toogle-footer active" : "list-unstyled mb-0 mt-3 toogle-footer"}>
                                    <li className="mb-2">
                                        <span style={{ color: '#888', fontSize: 13 }}>
                                            Fashions
                                        </span>
                                    </li><li className="mb-2">
                                        <span style={{ color: '#888', fontSize: 13 }}>
                                            Electronics
                                        </span>
                                    </li><li className="mb-2">
                                        <span style={{ color: '#888', fontSize: 13 }}>
                                           Appliances
                                        </span>
                                    </li><li className="mb-2">
                                        <span style={{ color: '#888', fontSize: 13 }}>
                                            Mobiles
                                        </span>
                                    </li>
                                    <li className="mb-2">
                                        <span style={{ color: '#888', fontSize: 13 }}>
                                            Grocery
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="mb-4 mb-md-0">
                                <div className="d-flex justify-content-between" onClick={(() => setCompanyInfo(!companyInfo))}>
                                    <h5 style={{ fontSize: 18 }}>Our Company</h5>
                                    <i className="fas fa-sort-down icons-footer"></i>
                                </div>
                                <ul className={companyInfo ? "list-unstyled mb-0 mt-3 toogle-footer active" : "list-unstyled mb-0 mt-3 toogle-footer"}>
                                    <li className="mb-2">
                                        <span style={{ color: '#888', fontSize: 13 }}>
                                            Legal Notice
                                        </span>
                                    </li><li className="mb-2">
                                        <span style={{ color: '#888', fontSize: 13 }}>
                                            Terms and conditions of use
                                        </span>
                                    </li><li className="mb-2">
                                        <span style={{ color: '#888', fontSize: 13 }}>
                                            About us
                                        </span>
                                    </li><li className="mb-2">
                                        <span style={{ color: '#888', fontSize: 13 }}>
                                            Secure payment
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="mb-4 mb-md-0">
                                <h5 style={{ fontSize: 18 }}>Our NewsLetter!</h5>
                                <ul className="list-unstyled mb-0 mt-4">
                                    <li className="mb-2" style={{ color: '#888', fontSize: 13 }}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </li>
                                    <li className="mb-2">
                                        <form action="#" method="post" className="d-flex footer-form">
                                            <input placeholder="your email address" style={{ color: '#888', fontSize: 13 }} />
                                            <button type="submit"><i className="far fa-paper-plane"></i></button>
                                        </form>
                                    </li>
                                    <li className="mb-2">
                                        <a className="btn-floating m-1" href="#!" role="button"
                                        ><i className="fab fa-facebook-f" style={{ color: '#888', fontSize: 13 }}></i
                                        ></a>

                                        <a className="btn-floating m-1" href="#!" role="button"
                                        ><i className="fab fa-twitter" style={{ color: '#888', fontSize: 13 }}></i
                                        ></a>

                                        <a className="btn-floating m-1" href="#!" role="button"
                                        ><i className="fab fa-google" style={{ color: '#888', fontSize: 13 }}></i
                                        ></a>

                                        <a className="btn-floating m-1" href="#!" role="button"
                                        ><i className="fab fa-instagram" style={{ color: '#888', fontSize: 13 }}></i
                                        ></a>

                                        <a className="btn-floating m-1" href="#!" role="button"
                                        ><i className="fab fa-linkedin-in" style={{ color: '#888', fontSize: 13 }}></i
                                        ></a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </section>
                </div>
                <div className="text-center p-3" style={{ color: '#888', fontSize: 13 }}>
                    © {new Date().getFullYear()} Copyright : &nbsp;
                    <a className="text-white" href="https://mdbootstrap.com/">Domain.com</a>
                </div>
            </div>
        </div>
    );
}
