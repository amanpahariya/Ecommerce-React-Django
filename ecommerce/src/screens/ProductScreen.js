import React from 'react';
import ProductPage from '../components/ProductPage';
import banner from '../asserts/images/banner.jpg'
export default function ProductScreen(props) {
    const query = new URLSearchParams(props.location.search);
    const category = query.get('category');
    const pathname = props.location.pathname;

    return (
        <div className="container mb-5">
            <div className="text-center">
                <img src={banner} style={{ width: '50%', objectFit: 'contain' }} alt="banner" />
            </div>
            <ProductPage category={category} pathname={pathname} />
        </div>
    );
}
