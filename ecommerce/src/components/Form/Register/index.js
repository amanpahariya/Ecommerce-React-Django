import React, { useState, useEffect } from 'react';
import { API } from '../../../api-service';

export default function Register() {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cnfPassword, setCnfPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [isEmailError, setIsEmailError] = useState(null);
    const [isPasswordError, setIsPasswordError] = useState(null);
    const [isFirstName, setIsFirstName] = useState(null);
    const [isLastName, setIsLastName] = useState(null);
    const [button, setButton] = useState(false);


    const handleChangeFirstName = (e) => {
        let str = e.target.value;
        setFirstName(str.split(' ').join(''));
    }

    const handelChangeLastName = (e) => {
        let str = e.target.value;
        setLastName(str.split(' ').join(''));
    }

    const handelChangeEmail = (e) => {
        let str = e.target.value;
        setEmail(str.split(' ').join(''));
    }

    const handelChangePasword = (e) => {
        let str = e.target.value;
        setPassword(str.split(' ').join(''));
    }

    const handelChangeConfirmPasword = (e) => {
        let str = e.target.value;
        setCnfPassword(str.split(' ').join(''));
    }
    useEffect(() => {

        if (cnfPassword === password) {
            setPasswordMatch(true);
        } else {
            setPasswordMatch(false);
        }
    }, [cnfPassword]);

    const handelSubmit = (e) => {
        e.preventDefault();
        if (email !== '' && password !== '' && first_name !== '' && last_name !== '') {
            setButton(true)
            API.RegisterUser({ email, password, first_name, last_name })
                .then(resp => {
                    if (resp.exist) {
                        setIsEmailError('This email is already registered')
                    }
                    else if (resp.id && resp.email) {
                        window.location.href = "/register/verify"
                    }
                })
                .catch(error => console.log(error))
        } else {
            if (email === '') {
                setIsEmailError('Email is required');
            }
            if (password === '') {
                setIsPasswordError('Password is required');
            }
            if (first_name === '') {
                setIsFirstName('Firstname is required');
            }
            if (last_name === '') {
                setIsLastName('Lastname is required');
            }
        }
        setButton(false)
    }
    return (
        <>
            {button ? <div className="spinner-wait">
                <div className="spinner-position">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
                : ''}
            <div className="login-container">
                <h1 className="login-title">New User</h1>
                <form className="login-form" method="POST">
                    <div className="row mb-4">
                        <div className="col">
                            <div className="form-outline">
                                <input type="text" className="form-control" onChange={handleChangeFirstName} />
                                <p className="form-label">First name * </p>
                                <div className={isFirstName === '' ? 'd-none' : "block ps-3"}>
                                    <small className="m-0 text-danger">{isFirstName}</small>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-outline">
                                <input type="text" className="form-control" onChange={handelChangeLastName} />
                                <p className="form-label">Last name * </p>
                                <div className={isLastName === '' ? 'd-none' : "block ps-3"}>
                                    <small className="m-0 text-danger">{isLastName}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-outline mb-4">
                        <input type="email" className="form-control" value={email} onChange={handelChangeEmail} />
                        <p className="form-label">Email address * </p>
                        <div className={isEmailError === '' ? 'd-none' : "block ps-3"}>
                            <small className="m-0 text-danger">{isEmailError}</small>
                        </div>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="password" className="form-control" value={password} name="password" onChange={handelChangePasword} />
                        <p className="form-label">Password * </p>
                        <div className={isPasswordError === '' ? 'd-none' : "block ps-3"}>
                            <small className="m-0 text-danger">{isPasswordError}</small>
                        </div>
                    </div>
                    <div className="form-outline mb-4">
                        <input type="password" className="form-control" value={cnfPassword} name="confirm password" onChange={handelChangeConfirmPasword} />
                        <p className="form-label">Confirm Password * </p>
                        <div className={passwordMatch ? 'd-none' : "block ps-3"}>
                            <small className="m-0 text-danger">
                                confirm password and password should be same
                        </small>
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="col text-center">
                            <div className="form-check">
                                <a href="/login" className="form-check-label">Existing User ?</a>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block" onClick={handelSubmit} disabled={button}>Sign up</button>
                </form>
            </div>
        </>
    );
}
