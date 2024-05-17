import React from "react";

export default function Hero() {
    return <div className="primary-background">

        <div className="container py-5">

            <div className="row align-items-center">

                <div className="col-6">

                    <h1>
                        <i className="bi bi-star-fill me-2 "></i>
                        Teach Smarter, Not Harder
                    </h1>
                    <p className="lead">Cut prep time in half with our smart Markdown editor</p>

                    <button className="btn btn-primary btn-lg me-2 base-button">Start your project</button>
                    <button className="btn btn-outline-primary btn-lg primary-button">Explore samples</button>

                </div>

                <div className="col-6">

                    <div style={{
                        paddingBottom: "50%",
                    }} className="bg-dark"></div>

                </div>

            </div>

        </div>

    </div>
}