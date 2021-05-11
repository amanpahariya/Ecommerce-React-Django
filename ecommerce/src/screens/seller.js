import React, { useState } from 'react';
import { storage } from '../firebase';

export default function Seller() {
    const [image, setImage] = useState(null);

    const handelChange = e => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    }

    const handleUpload = (e) => {
        e.preventDefault();
        const uploadTask = storage.ref(`upload/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => { },
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref("upload")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        console.log(url);
                    });
            }
        )
    };
    return (

        <form className="container mt-5">
            <div className="mb-3">
                <label className="form-label">Upload image</label>
                <input type="file" className="form-control" onChange={handelChange} />
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleUpload}>Submit</button>
        </form>

    );
}
