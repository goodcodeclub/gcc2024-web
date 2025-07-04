"use client";

import React, { useEffect, useState } from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { Noto_Sans_KR } from "next/font/google";
import TalentList from "../components/talent";
import YAML, { stringify } from 'yaml'
import Link from "next/link";
import { Sidebar } from "../components/sidebar";

const noto = Noto_Sans_KR({ subsets: ["latin"] });

export default function Page() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const refToComponent = React.useRef(null);


    const clients = [
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
            name: "Latitude",
            url: "https://latitudecountertops.com",
            role: "Countertop products",
        },
        {
            name: "Robust AI",
            url: "https://robust.ai",
            role: "Collaborative robots",
        },

        {
            name: "Partial",
            url: "https://partial.gallery/",
            role: "Art marketplace",
        },

        {
            name: "Unite Creative",
            url: "https://unitecreative.ca",
            role: "Design and marketing"
        },


        {
            name: "KRAK XR",
            url: "https://www.krakxr.co/",
            role: "Experimental media"
        },


        {
            name: "Giioii",
            url: "https://www.giioii.com/",
            role: "Immersive storytelling"
        },

        {
            name: "Emmy Awards",
            url: "https://theemmys.tv/",
            role: "Industry recognition",
        },
        {
            name: "Effie Awards",
            url: "https://www.effie.org/",
            role: "Advertising recognition"
        },

        {
            name: "Securitas",
            url: "https://www.securitas.com/",
            role: "Employee recognition",
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

        {
            name: "Krinos",
            url: "https://krinos.ca/",
            role: "Food manufacturing"
        },
        // {
        //     name: "PragerNuform",
        //     url: "https://pragernuform.com/",
        //     role: "Retail displays"
        // },

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
        {
            name: "George Brown College",
            url: "http://georgebrown.ca/",
            role: "Developer training",
        },
        // {
        //     name: "Woodbridge School of Dance",
        //     url: "https://woodbridgedance.com"
        // },
    ];



    const images = [
        "mitsubishi.svg",
        "bell.svg",
        // "corelab.jpg",
        "effie.jpg",
        // "hc365.png",
        // "hc365b.png",
        // "latitude.jpg",
        "partial.svg",
        "krinos.jpg",
        // "mt.png",
        "natas2.jpg",
        "nfb.jpg",
        "malala.png",
        // "ocad.jpg",
        "oxfam.jpg",
        "securitas.svg",
        // "ryerson.jpg",
        // "squab.jpg",
        "stregis2.jpg",
        // "wmprager.png",
        "yorku2.png",
        // "ca.jpg",
    ];



    const projects = [
        {
            title: "Web Standards",
            org: "George Brown College",
            funder: "the Government of Ontario",
            icon: "globe",
        },
        {
            title: "Visual Text Analytics",
            org: "Ontario Tech University",
            funder: "the University of Guelph",
            icon: "blockquote-left",
        },
        {
            title: "Continuing Studies",
            org: "OCAD University",
            funder: "the Government of Ontario",
            icon: "mortarboard-fill",
        },
        {
            title: "Visual Storytelling",
            org: "SRI International",
            funder: "DARPA",
            icon: "chat-left-dots-fill",
        },
        {
            title: "Content Analysis",
            org: "OCAD University",
            funder: "Magnify Digital and TELUS Fund",
            icon: "camera-video-fill",
        },
        {
            title: "Generative Music",
            org: "MUSICA Research",
            funder: "DARPA",
            icon: "music-note-beamed",
        },
        {
            title: "AI Data Annotation",
            org: "University of Toronto",
            funder: "the Vector Institute",
            icon: "pencil-fill",
        },
        {
            title: "Explainable AI",
            org: "Ontario Tech University",
            funder: "SRI International, University of Guelph and the Vector Institute",
            icon: "ui-checks-grid",
        },
        {
            title: "Universal Learning",
            org: "George Brown College",
            funder: "Abilities to Work and SSHRC",
            icon: "reception-4",
        },
    ];

    const columns = [
        {
            title: "Design-to-Code",
            image:
                "https://images.unsplash.com/photo-1510832842230-87253f48d74f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            summary: "Your personal web developer",
            target: "Agencies and small businesses",
            billing: "Custom quote, billed in parts",
            tech: "Development and deployment",
        },
        {
            title: "App Prototype",
            image:
                "https://images.unsplash.com/photo-1631106256072-54c89defe828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            summary: "Your personal R&D division",
            target: "Startups and research labs",
            billing: "Custom quote, billed in phases",
            tech: "Proof-of-concept development",
        },
        {
            title: "Adhoc Support",
            image:
                "https://images.unsplash.com/photo-1560268744-aaab797cdfc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            summary: "Your personal tech hotline",
            target: "Agencies and startups",
            billing: "Hourly rate, billed biweekly",
            tech: "Email, teleconference, monitoring",
        },
        {
            title: "Web Hosting",
            image:
                "https://images.unsplash.com/photo-1564936160099-21731cfc82b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            summary: "Your private server technician",
            target: "Businesses on shared hosting",
            billing: "Fixed rate, billed monthly",
            tech: "Cloud infrastructure",
        },
    ];

    const types = [
        {
            title: "A creative agency with strong art direction",
            body: "Pixel-perfect is what we strive to achieve. We can quickly assess feasibility of your creative vision and translate to a final product without creative compromise.",
            image: "https://site-assets.fontawesome.com/releases/v6.3.0/svgs/solid/icons.svg",
        },
        {
            title: "A visionary team leader with novel product ideas",
            body: "MVP is the name of the game. We can create functional, production-ready prototypes to share with your stakeholders, and when you are ready, quickly shift gears to productize.",
            image: "https://site-assets.fontawesome.com/releases/v6.3.0/svgs/solid/head-side-heart.svg",
        },
        {
            title: "A small to medium-sized business with IT needs",
            body: "Solid infrastructure with a human touch. We source from a variety of cloud-based service providers and offer additional redundancies and monitoring.",
            image: "https://site-assets.fontawesome.com/releases/v6.3.0/svgs/solid/server.svg",
        },
    ];

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



                            <>


                                <h5 className="text-uppercase d-inline-flex bg-dark text-white lh-1 py-2 px-2 fw-normal m-0 mb-3">
                                    Target Customers
                                </h5>
                                <div className="row gy-3 mb-4">
                                    {types.map((type, index) => (
                                        <div className="col-lg-12 col-12" key={index}>

                                            <div className="d-flex align-items-start">
                                                <img src={type.image} alt="" className="opacity-25 mt-2" style={{
                                                    width: "3rem"
                                                }} />

                                                <div className="ms-3">
                                                    <h3 className="fw-bold">{type.title}</h3>
                                                    <p className="m-0">{type.body}</p>
                                                </div>

                                            </div>

                                        </div>
                                    ))}
                                </div>

                            </>


                            <>



                                <h5 className="text-uppercase d-inline-flex bg-dark text-white lh-1 py-2 px-2 fw-normal m-0 mb-3">
                                    Service Offerings
                                </h5>
                                <div className="row text-white1 gx-4 gy-4 mb-4">
                                    {columns.map((column, index) => (
                                        <div className="col-lg-6 col-md-6 col-12 " key={index}>
                                            <div className="h-100 border border-0 p-13 rounded1 pb-41">
                                                <div className="mx-auto bg-transparent mb-3">
                                                    <div
                                                        className="bg-dark1"
                                                        style={{
                                                            filter: "invert(0)",
                                                            paddingBottom: "50%",
                                                            backgroundRepeat: "no-repeat",
                                                            backgroundPosition: "center",
                                                            backgroundSize: "cover",
                                                            backgroundImage: `url(${column.image})`,
                                                        }}
                                                    />
                                                </div>

                                                <div className="p-0">
                                                    <h5 className="m-0 mb-0">{column.title}</h5>
                                                    <p className="m-0 mb-2">{column.summary}</p>

                                                    {/* <hr className="m-0 my-2" /> */}

                                                    <ul className="ps-0 m-0 small fw-normal" style={{ listStyle: "none" }}>
                                                        <li className="mb-0 small">
                                                            <i className="bi bi-person-fill"></i> {column.target}
                                                        </li>
                                                        <li className="mb-0 small">
                                                            <i className="bi bi-gear-fill"></i> {column.tech}
                                                        </li>
                                                        <li className="mb-0 small">
                                                            <i className="bi bi-currency-dollar"></i> {column.billing}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </>

                            <>

                                <div className="row justify-content-center">
                                    <div className="col-12">


                                        <h5 className="text-uppercase d-inline-flex bg-dark text-white lh-1 py-2 px-2 fw-normal m-0 mb-2">
                                            Research Areas
                                        </h5>
                                        <div className="row bg-transparent mb-4 gy-2">
                                            {projects.map((item, index) => (
                                                <div className="col-lg-4 col-12" key={index}>
                                                    <div className="row align-items-start 1text-center">

                                                        <div className="d-lg-block1 d-flex align-items-center">

                                                            <i className={"fs-3 bi bi-" + item.icon}></i>

                                                            <h6 className="m-0 ms-lg-3 ms-2">{item.title}</h6>
                                                            {/* <p className="m-0 text-muted">{item.org}</p> */}
                                                            {/* {item.funder && (
                                                                <p className="m-0 mt-1 d-lg-block d-none small text-muted lh-sm">
                                                                    Supported in part by {item.funder}
                                                                </p>
                                                            )} */}

                                                        </div>

                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                </div>

                            </>

                            <>


                                <h5 className="text-uppercase d-inline-flex bg-dark text-white lh-1 py-2 px-2 fw-normal m-0 mb-2">
                                    Collaborators
                                </h5>
                                <div className="mb-4 reveal2 row gy-md-0 gy-1">

                                    {clients.map((po, pi) => {
                                        return (
                                            <div className="d-md-flex align-items-center lh-sm col-12" key={pi}>
                                                <a
                                                    href={po.url}
                                                    target="_blank"
                                                    className="d-block1"
                                                    style={{ whiteSpace: "nowrap" }}
                                                >
                                                    {po.name}
                                                </a>
                                                <hr className="border-dark border border-bottom-0 border-1 m-0 mx-2 w-100 opacity-25 d-md-block d-none" />
                                                <p
                                                    className="m-0  ms-auto opacity-50 fw-light small d-sm-block"
                                                    style={{ whiteSpace: "nowrap" }}
                                                >
                                                    {po.role}
                                                </p>
                                            </div>
                                        );
                                    })}

                                </div>




                            </>

                        </div>
                    </div>
                </div>
            </div>

            {/* <Footer /> */}
        </div >
    );
}
