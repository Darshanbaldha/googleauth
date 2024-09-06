import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGoogle, faFacebook,faGithub } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from "react-router-dom";

export default function Login() {
    return (
        <>
            <div className="w-25">
                <form>
                    <div data-mdb-input-init className="form-outline mb-4">
                        <input type="email" id="form2Example1" className="form-control border-success" />
                        <label className="form-label" for="form2Example1">Email address</label>
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                        <input type="password" id="form2Example2" className="form-control border-success" />
                        <label className="form-label" for="form2Example2">Password</label>
                    </div>

                    <div className="row mb-4">
                        <div className="col d-flex justify-content-center">
                            <div className="form-check">
                                <input className="form-check-input bg-success" type="checkbox" value="" id="form2Example31" />
                                <label className="form-check-label" for="form2Example31"> Remember me </label>
                            </div>
                        </div>

                        <div className="col">
                            <NavLink to="#" className="text-success link-underline-light">Forgot password?</NavLink>
                        </div>
                    </div>

                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-success btn-block mb-4">Log in</button>

                    <div className="text-center">
                        <p>Not a member? <NavLink to="/login" className="text-success link-underline-light">Register</NavLink></p>
                        <p>or Log in with:</p>
                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-floating mx-1 text-success">
                            <FontAwesomeIcon icon={faFacebook} />
                        </button>

                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-floating mx-1 text-success">
                            <FontAwesomeIcon icon={faGoogle} />
                        </button>

                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-floating mx-1 text-success">
                            <FontAwesomeIcon icon={faTwitter} />
                        </button>

                        <button type="button" className="btn btn-floating mx-1 text-success">
                            <FontAwesomeIcon icon={faGithub} />
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}