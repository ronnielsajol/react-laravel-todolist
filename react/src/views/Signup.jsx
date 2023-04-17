import React, { useRef } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();

    const onSubmit = (ev) => {
        ev.preventDefault();
        const payLoad = {
            nameRef: nameRef.current.value,
            emailRef: emailRef.current.value,
            passwordRef: passwordRef.current.value,
            passwordConfirmationRef: passwordConfirmationRef.current.value
        };
    };

    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title">Sign Up for free!</h1>
                    <input ref={nameRef} type="text" placeholder="Full Name" />
                    <input ref={emailRef} type="email" placeholder="Email" />
                    <input
                        ref={passwordRef}
                        type="password"
                        placeholder="Password"
                    />
                    <input
                        ref={passwordConfirmationRef}
                        type="password"
                        placeholder="Password Confirmation"
                    />
                    <button className="btn btn-block">Sign Up</button>
                    <p className="message">
                        Already Register?
                        <Link to="/login"> Sign In instead</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
