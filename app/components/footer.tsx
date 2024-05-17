import React from "react";

export default function Footer() {

    return <>

        <section className="container bg-transparent mt-5">


            <div className="mx-auto pt-51 small">

                <div className="d-flex justify-content-center align-items-center">
                    <img src="https://goodcodeclub.com/images/gcc_alt.png" style={{ height: "1.5rem" }} className="me-2" />
                    <span className=" fw-semibold">GoodCodeClub</span>
                </div>

                <p className="m-0 mt-3 text-center small d-none">
                    Hosted by <a href="https://flexboxtoronto.com" target="_blank">Flexbox Toronto</a><br />
                        222 Finch Ave W Suite 105<br />
                        Toronto, ON<br />
                        M2R 1M6
                </p>

            </div>
        </section>

    </>
}