import React, { useState, useEffect } from 'react';
import ProductView from '../components/ProductView';

export default function ProductDetails(props) {

  const [api, setapi] = useState('');

  const [items, setItems] = useState(null);


  useEffect(() => {
    const path = props.location.pathname.split('/');
    const params = new URLSearchParams(props.location.search);
    const getparams = params.get('pid');
    setapi(`http://localhost:8000/${path[2]}/${path[3]}/${getparams}`);
  }, []);

  useEffect(() => {
    fetch(api, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(result => result.json())
      .then(result => setItems(result));
  }, [api]);

  if (items === null) {
    return <div></div>
  }

  return (
    <div>
      <ProductView items={items} />
    </div>
  );
}
