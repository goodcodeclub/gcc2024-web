import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Nav() {

    const links = [
        {
            name: "Home",
            path: "/",
            class: "d-xl-block d-none"
        },
        {
            name: "Services",
            path: "/services",
        },        
        {
            name: "Work",
            path: "/work",
        },
        // {
        //     name: "Blog",
        //     path: "/blog",
        // },

        {
            name: "Contact",
            path: "/contact",
        },
    ]

    const pathname = usePathname();

    return <>


        <div className="sticky-top bg-dark1 border-muted px-lg-0 px-3 pt-4 pb-4 " style={{
            top: 0,
            left: 0,
            zIndex: 1030,
            backgroundColor:"rgba(255,255,255,0.95)",
        }}>

            <div className="container bg-transparent ">
                <div className="row justify-content-center">

                    <div className="col-xl-8 col-lg-10 d-flex align-items-center">

                        <Link className="active text-dark d-flex justify-content-center align-items-center text-decoration-none" href="/">
                            {/* <img src="/images/gcc.png" style={{height:"2rem"}} className="me-3" /> */}
                            <img src='/gcc.png' className="me-lg-3" style={{ height: "2rem", transformOrigin: "center", transform: "" }} />

                            <div className="d-lg-block d-none">
                                <h4 className="mb-0 fw-bold lh-1 text-white1">GoodCodeClub</h4>
                            </div>

                        </Link>

                        <div className="text-decoration-none ms-lg-4 ms-md-4 ms-3 d-flex justify-content-center mt-lg-0 mt-0 d-none1 text-uppercase fw-semibold small">

                            {links.map((lo, li) => {
                                return <>
                                    <Link href={lo.path} className={lo.class + " text-decoration-none d-lg-block d-none1 px-0 mx-0 me-0 me-md-3 me-sm-2 me-2 " + ((pathname == lo.path || (lo.path.length > 1 && pathname.indexOf(lo.path) === 0)) ? "border-bottom1 border-21 opacity-100" : "opacity-50")}>{lo.name}</Link>
                                </>
                            })}

                        </div>

                        <div className="ms-auto d-lg-flex d-flex d-none1 text-center mt-lg-0 mt-0 justify-content-center align-items-center">


                            <div className="text-lg-end text-center fs-5 d-lg-flex d-sm-flex d-none align-items-center">

                                <a className="ms-lg-0 ms-0" target="_blank" href="https://www.linkedin.com/company/goodcodeclub/"><i className="bi bi-linkedin"></i></a>
                                <a className="ms-lg-2 ms-2" href="mailto:chris@goodcodeclub.com"><i className="bi bi-envelope-fill"></i></a>
                            </div>



                        </div>
                    </div>
                </div>

            </div>

        </div>

    </>
}