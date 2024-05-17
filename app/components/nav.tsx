import React from "react";

export default function Nav() {
    return <>

        <div className=" text-dark1 sticky-top bg-white1 border-muted px-lg-0 px-3">

            <div className="container bg-transparent d-lg-flex d-flex align-items-center">
                <a className="active text-dark d-flex justify-content-center align-items-center text-decoration-none" href="#">
                    {/* <img src="/images/gcc.png" style={{height:"2rem"}} className="me-3" /> */}
                    <img src='https://legacy.goodcodeclub.com/images/gcc_alt.png' className="me-3" style={{height:"2rem", transformOrigin:"center", transform:""}} />

                        <div className="">
                            <h4 className="mb-0 fw-semibold lh-1 text-white">GoodCodeClub</h4>
                        </div>

                </a>

                <div className="text-decoration-none ms-lg-4 d-flex justify-content-center mt-lg-0 mt-1 d-none">

                    <a href="/" className="text-decoration-none d-lg-block d-none">Home</a>
                    <a href="/managed-hosting" className="text-decoration-none ms-lg-4 ms-0"><span className="d-lg-inline d-none">Managed</span> Hosting</a>
                    <a href="/group-learning" className="text-decoration-none ms-lg-4 ms-3"><span className="d-lg-inline d-none">Group</span> Learning</a>
                    <a href="/talent-network" className="text-decoration-none mx-lg-4 mx-3"><span className="d-lg-inline d-none">Talent</span> Network</a>
                    <a href="mailto:chris@goodcodeclub.com" className="text-decoration-none">Contact <span className="d-lg-inline d-none">Us</span></a>

                </div>

                <div className="ms-auto d-lg-flex d-flex text-center mt-lg-0 mt-0 justify-content-center align-items-center">


                    <div className="text-lg-end text-center small fs-5 d-lg-flex d-flex align-items-center">

                        <a className="ms-0" target="_blank" href="https://flexboxtoronto.com"><i className="bi bi-geo-alt-fill"></i></a>
                        <a className="ms-lg-2 ms-2" target="_blank" href="https://www.linkedin.com/company/goodcodeclub/"><i className="bi bi-linkedin"></i></a>
                        <a className="ms-lg-2 ms-2" href="mailto:chris@goodcodeclub.com"><i className="bi bi-envelope-fill"></i></a>
                    </div>



                </div>

            </div>

        </div>

    </>
}