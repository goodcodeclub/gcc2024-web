import React from "react";

export default function Benefits() {
    return <div className="base-background py-5">
        <div className="container">

            <div className="row justify-content-center">

                <div className="col-12 col-lg-6">
                    <h1 className="text-center mb-4">
                        Experience the Difference </h1>
                    <p className="text-center mb-4">Our Key Benefits</p>
                </div>

            </div>
            <div className="row gx-3">
                <div className="col-12 col-md-4 text-center">
                    <div
                        className="bg-dark"
                        style={{
                            paddingBottom: "50%",
                        }}>
                    </div>
                    <h3 className="mt-3">Benefit 1</h3>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div className="col-12 col-md-4 text-center">
                    <div
                        className="bg-dark"
                        style={{
                            paddingBottom: "50%",
                        }}>
                    </div>
                    <h3 className="mt-3">Benefit 2</h3>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div className="col-12 col-md-4 text-center">
                    <div
                        className="bg-dark"
                        style={{
                            paddingBottom: "50%",
                        }}>
                    </div>
                    <h3 className="mt-3">Benefit 3</h3>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
            </div>
        </div>
    </div>
}