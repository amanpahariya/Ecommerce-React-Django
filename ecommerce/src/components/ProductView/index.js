import React from 'react';
import LeftContainer from './LeftContainer';
import MainContainer from './MainContainer';

export default function ProductView(props) {
    const { items } = props;
    return (
        <div className="container d-flex pt-3">
            <LeftContainer items={items.image}  />
            <MainContainer items={items} />
        </div>
    );
}
