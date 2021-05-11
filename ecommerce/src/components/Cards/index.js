import React from 'react';
import './style.css';

export default function Cards(props) {

    const { item,category } = props;


    const priceFormat = (price) => {
        const num = price;

        const NumberFormatter = new Intl.NumberFormat("en-IN", {
            currency: 'INR',
            minimumFractionDigits: 1
        });

        var x = NumberFormatter.format(num);
        return x.split('.')[0]
    }

    const dict = JSON.parse(item.image)
    return (
        <a className="card hover-overlay ripple" style={{ color: '#000' }} href={`/view/fashions/${item.type ? item.type.toLowerCase():category}?product_name=${item.product_name}&pid=${item.id}`} onClick={() => console.log(item.id)}>
            <div className="bg-image">
                <img src={dict[1]} className="img-fluid" alt="product" />
            </div>
            <div className="card-body">
                <p>{item.user.firstname}</p>
                <h5 className="card-title">{item.product_name}</h5>
                <div className="d-flex justify-content-between">
                    <p><i className="fas fa-rupee-sign"></i> {priceFormat(item.product_price)}</p>
                </div>
            </div>
            {/* <div className="card-footer d-flex justify-content-between">
                <p>{item.city}</p>
                <p>{moment(item.createdAt).fromNow()}</p>
            </div> */}
        </a>
    );
}
