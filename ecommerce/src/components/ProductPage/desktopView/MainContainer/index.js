import React, { useEffect, useState } from 'react';
import Cards from '../../../Cards';
export default function MainContainer(props) {
  const { category, pathname } = props;

  const [items, setItems] = useState(null);

  const [api, setApi] = useState();

  const Data = async () => {
    await fetch(api, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(result => result.json())
      .then(result => setItems(result));

  }

  useEffect(() => {
    const target = pathname.split('/')
    setApi(`http://localhost:8000/${target.reverse()[0]}/${category}/`)
  }, []);

  useEffect(() => {
    Data()
  }, [api]);

  if (items === null) {
    return <div></div>
  }
  return (
    <div>
      <div className="row justify-content-center">
        {items.results.map((item) => <Cards item={item} key={item.id} category={category} />
        )}
      </div>
      <div className="d-flex">
        {items.previous ? <button className="btn btn-primary mx-3" onClick={() => setApi(items.previous)}>Previous</button> : ''}
        {items.next ? <button className="btn btn-primary" onClick={() => setApi(items.next)}>Next</button> : ''}
      </div>
      {/* <button className="btn btn-primary" onClick={() => { handelChange('gupta') }}>Change</button> */}
    </div>
  );
}
