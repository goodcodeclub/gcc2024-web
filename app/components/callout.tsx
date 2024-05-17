import React from "react";

export default function Callout() {
    return <div className="base-background py-5">

        <div className="container">

            <div className="row align-items-center">

                <div className="col-6">

                    <h1 className="mb-4">
                        Ready to Teach Smarter?
                    </h1>

                    <button className="btn btn-primary btn-lg me-2 primary-button">Sign up for free</button>
                    <button className="btn btn-outline-primary btn-lg base-button">Explore samples</button>

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