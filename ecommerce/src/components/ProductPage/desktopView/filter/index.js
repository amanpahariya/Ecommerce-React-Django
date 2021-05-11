import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

export default function Filter(props) {

    console.log(props)
    return (
        <div className="filter-container">
            <div>
                <div className="d-flex justify-content-between">
                    <h5 style={{ fontSize: 18 }}>Category</h5>
                </div>
                <ul className="list-unstyled mb-0 mt-3">
                    <li className="mb-2">
                        <Link to="/product/?category=cars"
                            className="nav-link">Cars</Link>

                    </li><li className="mb-2">
                        <Link to="/product/?category=bikes"
                            className="nav-link">Bikes</Link>
                    </li><li className="mb-2">
                        <Link to="/product/?category=commercials & other vehicles"
                            className="nav-link">Commercials & Other Vehicles</Link>
                    </li><li className="mb-2">
                        <Link to="/product/?category=scooter"
                            className="nav-link">Scooter</Link>
                    </li>
                </ul>
            </div>
            <div>
                <div className="d-flex justify-content-between">
                    <h5 style={{ fontSize: 18 }}>Brands</h5>
                </div>
                <ul className="list-unstyled mb-0 mt-3">
                    <li className="mb-2">
                        <input type="checkbox" /> Maruti Suzuki
                    </li><li className="mb-2">
                        <input type="checkbox" /> Hyundai
                    </li><li className="mb-2">
                        <input type="checkbox" /> Mahindra
                    </li><li className="mb-2">
                        <input type="checkbox" /> Tata
                    </li>
                </ul>
            </div>
        </div>
    );
}
