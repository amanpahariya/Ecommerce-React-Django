import React, { useEffect, useState } from 'react';
import { API } from '../../../api-service';
import '../style.css';
// import { useHistory } from 'react-router-dom';
export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isEmailError, setIsEmailError] = useState(null);
    const [isPasswordError, setIsPasswordError] = useState(null);
    
    // const history = useHistory();
    const handelChangeEmail = (e) => {
        let str = e.target.value
        setEmail(str.split(' ').join(''))
    }

    const handelChangePasword = (e) => {
        let str = e.target.value
        setPassword(str.split(' ').join(''))
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        if (email !== '' && password !== '') {
            API.loginUser({ email, password })
                .then(resp => {
                    if (resp.detail) {
                        setIsEmailError('Email is incorrect');
                        setIsPasswordError('Password is incorrect');
                    } else {
                        localStorage.setItem('access_token', resp.access);
                        localStorage.setItem('refresh_token', resp.refresh);
                        window.location.href = "/"
                    }
                })
        } else {
            if (email === '') {
                setIsEmailError('Email is required');
            }
            if (password === '') {
                setIsPasswordError('Password is required');
            }
        }
    }

    return (
        <div className="login-container">
            <h1 className="login-title">Login</h1>
            <form className="login-form" method="POST">
                <div className="form-outline mb-4">
                    <input type="email" className="form-control" value={email} name="email" onChange={handelChangeEmail} required />
                    <p className="form-label">Email address *</p>
                    <div className={isEmailError === '' ? 'd-none' : "block ps-3"}>
                        <small className="m-0 text-danger">{isEmailError}</small>
                    </div>
                </div>

                <div className="form-outline mb-4">
                    <input type="password" className="form-control" value={password} name="password" onChange={handelChangePasword} required />
                    <p className="form-label">Password *</p>
                    <div className={isPasswordError === '' ? 'd-none' : "block ps-3"}>
                        <small className="m-0 text-danger">{isPasswordError}</small>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col d-flex justify-content-between">
                        <div className="form-check">
                            <a href="/register" className="form-check-label">New User</a>
                        </div>
                    </div>

                    <div className="col text-end">
                        <a href="#!">Forgot password?</a>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block" onClick={handelSubmit}>Sign in</button>
            </form>
        </div>
    );
}
