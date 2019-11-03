import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../ErrorPage/css/style.css'
function ErrorPage(params) {
    return (
        <section className="error-page">
            <div className="covers-main w3layouts">
                <div className="wrapper">
                    <div className="main-cover w3">
                        <h1>
                            <a href="index.html" className="logo">Wed Error Page</a>
                        </h1>
                        <h4 className="cover-para w3ls">4<span className="fa fa-heart-o" aria-hidden="true" />4</h4>
                        <p className="form-text">Sorry, we're offline right now to make our site even better.
                                    Please, come back later and check what we've been up to.</p>
                        <a className="back-button"><Link to="/">Back to Home</Link></a>
                    </div>
                    <div className="copyright text-center">
                        <p>© 2019 Wed Error Page . All rights reserved | Design by <a href="http://w3layouts.com/" target="_blank">W3Layouts</a></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ErrorPage;