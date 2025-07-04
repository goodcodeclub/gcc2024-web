"use client";

import React, { useEffect, useState } from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { Noto_Sans_KR } from "next/font/google";
import TalentList from "../components/talent";
import YAML from 'yaml'
import Link from "next/link";
import { Sidebar } from "../components/sidebar";

const noto = Noto_Sans_KR({ subsets: ["latin"] });

export default function Page() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const refToComponent = React.useRef(null);

    // useEffect(() => {

    //     async function animate() {
    //         if (refToComponent.current) {
    //             const sr = (await import("scrollreveal")).default
    //             sr().reveal(".reveal1", { delay: 0 })
    //             sr().reveal(".reveal2", { delay: 500 })
    //             sr().reveal(".reveal3", { delay: 1000 })
    //         }
    //     }
    //     animate()

    // }, []);

    const projects = [
        // {
        //     name: "The Hellenic Initiative Canada",
        //     url: "https://thehellenicinitiative.ca/"
        // },
        {
            name: "St Regis Group",
            url: "https://stregisgrp.com",
            role: "Recognition products",
        },

        {
            name: "Emmy Awards",
            url: "https://theemmys.tv/",
            role: "Industry recognition",
        },
        // {
        //     name: "Effie Awards",
        //     url: "https://www.effie.org/",
        //     role: "industry recognition (Ad)"
        // },
        {
            name: "Partial",
            url: "https://partial.gallery/",
            role: "Art marketplace",
        },
        {
            name: "Securitas",
            url: "https://www.securitas.com/",
            role: "Employee recognition",
        },
        {
            name: "Latitude",
            url: "https://latitudecountertops.com",
            role: "Countertop products",
        },

        {
            name: "Oxfam",
            url: "https://oxfam.com",
            role: "Humanitarian relief",
        },
        // {
        //     name: "The Malala Fund",
        //     url: "https://malala.org/",
        //     role: "Education rights"
        // },
        //    {
        //         name: "Unite Creative",
        //         url: "https://unitecreative.ca",
        //         role: "Design and marketing"
        //     },
        // {
        //     name: "Krinos",
        //     url: "https://krinos.ca/",
        //     role: "Food manufacturing"
        // },
        // {
        //     name: "PragerNuform",
        //     url: "https://pragernuform.com/",
        //     role: "Retail displays"
        // },
        {
            name: "Robust AI",
            url: "https://robust.ai",
            role: "Collaborative robots",
        },
        {
            name: "Texas A&M University",
            url: "https://www.tamu.edu",
            role: "Serious games",
        },
        {
            name: "OCAD University",
            url: "https://ocadu.ca",
            role: "Data visualization",
        },
        {
            name: "University of Toronto",
            url: "https://www.utoronto.ca/",
            role: "AI training",
        },
        // {
        //     name: "Woodbridge School of Dance",
        //     url: "https://woodbridgedance.com"
        // },
    ];

    const services = [
        {
            name: "Design-to-code",
            role: "Web development",
        },
        {
            name: "App prototype",
            role: "Proof-of-concept",
        },
        {
            name: "Adhoc support",
            role: "Support / monitoring",
        },
        {
            name: "Web hosting",
            role: "Cloud infrastructure",
        },
    ];

    const [articles, setArticles] = useState([]);
    const [articles2, setArticles2] = useState([]);

    const loadBlog = async () => {

        const result = await fetch("https://api.letterform.app/public/pages/list?user_email=chris@goodcodeclub.com&project_slug=goodcodeclub-blog");
        const data = await result.json();

        setArticles(data.data);
        setArticles2(structuredClone(data.data));


    }

    useEffect(() => {

        loadBlog();


    }, [])


    return (
        <div
            className="my-auto0 pb-4 font-neodgm1 text-uppercase1"
            ref={refToComponent}
        >
                <Nav />

            <div className="px-lg-0 px-3">
                <div className="container">
                    <div className="row gx-lg-0 align-items-stretch justify-content-center">
                        <div className="col-xl-8 col-lg-10">

                            <h5 className="text-uppercase d-inline-flex bg-dark text-white lh-1 py-2 px-2 fw-normal m-0 mb-2">
                                Blog
                            </h5>

                            <div className="mb-0 reveal2 row gy-2">
                                {articles2.map((po, pi) => {

                                    let metadata: any = {};

                                    try {

                                        metadata = YAML.parse(po.metadata);

                                    } catch (ex) {


                                    }


                                    return (
                                        <div
                                            className="d-flex1 align-items-center lh-sm"
                                            key={"article_" + pi}
                                        >
                                            <Link
                                                className="d-block w-100 opacity-15 fs-6"
                                                style={{ whiteSpace: "" }}
                                                href={"/blog/" + po.slug}
                                            >
                                                {po.title}
                                            </Link>


                                            <div className="small mt-1 me-lg-5">
                                                <p
                                                    className="m-0 small ms-auto fw-light"
                                                    style={{ whiteSpace: "" }}
                                                >
                                                    <span className="opacity-50">{metadata.excerpt}</span>
                                                </p>
                                            </div>

                                            <div className="mt-1 d-none">
                                                <p
                                                    className="m-0 ms-auto fw-light small"
                                                    style={{ whiteSpace: "" }}
                                                >
                                                    <span className="opacity-50">{new Date(metadata.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                                </p>

                                            </div>

                                        </div>
                                    );
                                })}
                            </div>



                        </div>

                        <div className="col-xl-4 col-lg-5 d-none">
                            <div className="row gx-lg-0 h-100">
                                <div className="col-xl-12 mt-lg-0 mt-4 h-100">


                                    <div className="position-sticky" style={{
                                        top: "1.5rem"
                                    }}>


                                        <Sidebar list={articles} noto={noto} />


                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <Footer /> */}
        </div>
    );
}
