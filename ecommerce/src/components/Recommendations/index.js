import React, { useEffect, useState } from 'react';
import Cards from '../Cards';
export default function Recommendations() {
    const [items, setItems] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/fashions/all", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(result => result.json())
            .then(result => setItems(result.results));
    }, []);
    if (items === null) {
        return <div></div>
    }
    return (
        <div className="container">
            <h1>Recommendations</h1>
            <div className="row justify-content-center">

                {
                    items.map((item) =>
                        // console.log(item)
                        <Cards item={item} key={item.id} />
                    )
                }
            </div>
        </div>
    );
}
