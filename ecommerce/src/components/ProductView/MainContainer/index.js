import React from 'react';
import './style.css'
export default function MainContainer(props) {

  const { items } = props;

  return (
    <div className="details-container">
      <div>
        <p className="mb-0">{items.seller_name}</p>
        <p className="mb-0" style={{ color: '#000' }}>{items.product_name}</p>
        <p className="mb-0">{items.product_price}</p>
        <div className="mt-3">
          <ul className="list-unstyled">
            <li className="m-1">
              <i className="fas fa-tag" style={{ color: 'green' }}></i>
              <span className="mx-1">
                Special PriceGet extra 22% off (price inclusive of discount)
              </span>
            </li>
            <li className="m-1" >
              <i className="fas fa-tag" style={{ color: 'green' }}></i>
              <span className="mx-1">
                Buy Now, Get Extra 5% Off On Home & Kitchen Appliances
              </span>
            </li>
            <li className="m-1" >
              <i className="fas fa-tag" style={{ color: 'green' }}></i>
              <span className="mx-1">
                Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card
              </span>
            </li>
            <li className="m-1" >
              <i className="fas fa-tag" style={{ color: 'green' }}></i>
              <span className="mx-1">
                Bank Offer10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply
              </span>
            </li>
          </ul>
        </div>
        <div className="d-flex justify-content-between mt-3" style={{ fontSize: 15 }}>
          <div>
            <div className="mb-2">
              <i className="fas fa-map-marker me-2" style={{ color: 'blue' }}></i><span>Deliver to</span>
            </div>
            <input placeholder="" style={{ height: 40, width: 350 }} />
          </div>
          <div>
            <p className="mb-0 mx-1">Services</p>
            <p className="mb-0"><i className="me-2 fas fa-sync" style={{ color: 'blue', fontSize: 12 }}></i>{items.return_policy} Days Return Policy</p>
            <p className="mb-0"><i className="me-2 fas fa-rupee-sign" style={{ color: 'blue', fontSize: 12 }}></i> Cash on Delivery available</p>
          </div>
        </div>
        <div className="size-container">
          <p>Size</p>
          <ul>
            <li><button className="">S</button></li>
            <li><button className="">M</button></li>
            <li><button className="">L</button></li>
            <li><button className="">XL</button></li>
            <li><button className="">XXL</button></li>
          </ul>
        </div>
        <div className="d-flex">
          <p>Seller</p>
          <ul style={{ listStyle: 'none', fontSize: 15 }}>
            <li style={{ color: 'blue' }}>{items.seller_name}</li>
            <li>{items.return_policy} Days Return Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
