import React, { useState } from 'react';
import './style.css'

export default function LeftContainer(props) {
    const { items } = props;

    const dict = JSON.parse(items)
    const [image, setImage] = useState(dict[1]);
    return (
        <div className="image-container">
            <div className="d-flex" style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                <div className="image-list">
                    <ul>
                        <li onClick={() => setImage(dict[1])}>
                            <img src={dict[1]}  alt="product"/>
                        </li>
                        <li onClick={() => setImage(dict[2])}>
                            <img src={dict[2]} alt="product" />
                        </li>
                        <li onClick={() => setImage(dict[3])}>
                            <img src={dict[3]} alt="product" />
                        </li>
                        <li onClick={() => setImage(dict[4])}>
                            <img src={dict[4]} alt="product" />
                        </li>
                    </ul>
                </div>
                <div className="main-image">
                    <img src={image} alt="product" />
                </div>
            </div>
            <div className="d-flex mt-3">
                <button className="btn btn-warning mx-1" style={{ width: '100%', height: 50, fontSize: 15, alignItems: 'center' }}>Add To Cart</button>
                <button className="btn btn-success mx-1" style={{ width: '100%', height: 50, fontSize: 15, alignItems: 'center' }}>Buy Now</button>
            </div>
        </div>
    );
}
