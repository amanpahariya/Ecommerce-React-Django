import React, { useEffect, useState } from 'react';
import { API } from '../api-service';
import './style.css'
export default function VeifyScreen() {
    const [state, setState] = useState('');
    useEffect(() => {
        let params = new URL(window.location);
        var token = params.searchParams.get('token');
        if (token) {
            API.VerifyEmail({ token: token })
                .then(resp => {
                    if (resp.error) {
                        setState(resp.error)
                    }
                    else if (resp.email) {
                        setState(resp.email)
                    }
                })
        }
    }, []);
    return (
        <div>
            <div className="card-container">
                <div className="card text-center">
                    {state === '' ? <div className="card-body">
                        <h5 className="card-title">Verify your Email</h5>
                        <p className="card-text">
                            A activation link is send on your email please click on it and verify your email address for better expirence
                        </p>
                        <a href="/login">Login</a>
                    </div> : ''}
                    {state === 'Successfully activated' ? <div className="card-body">
                        <h5 className="card-title">Email Verification Successful</h5>
                        <p className="card-text">
                            Your email address is successfully verified
                        </p>
                        <a href="/login">Login</a>
                    </div> : ''}
                    {state === 'Activation Expired' ? <div className="card-body">
                        <h5 className="card-title">Email Verification</h5>
                        <p className="card-text">
                            email verfication failed because link is expired
                        </p>
                    </div> : ''}
                    {state === 'Invalid Token' ? <div className="card-body">
                        <h5 className="card-title">Email Verification</h5>
                        <p className="card-text">
                            email verfication failed due to invalid url
                        </p>
                    </div> : ''}
                </div>
            </div>
        </div>
    );
}
