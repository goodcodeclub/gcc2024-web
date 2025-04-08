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


    const [articles, setArticles] = useState([]);
    const [projects, setProjects] = useState([]);

    const loadBlog = async () => {

        const result = await fetch("https://api.letterform.app/public/pages/list?user_email=chris@goodcodeclub.com&project_slug=goodcodeclub-blog");
        const data = await result.json();

        setArticles(data.data);

    }

    const loadWork = async () => {

        const result = await fetch("https://api.letterform.app/public/pages/list?user_email=chris@goodcodeclub.com&project_slug=goodcodeclub-work");
        const data = await result.json();

        setProjects(data.data);

    }

    useEffect(() => {

        loadBlog();
        loadWork();


    }, [])


    return (
        <div
            className="my-auto0 py-lg-4 py-4 font-neodgm1 text-uppercase1"
            ref={refToComponent}
        >
            <div className="reveal1 mb-lg-5 mb-4">
                <Nav />
            </div>

            <div className="px-lg-0 px-3">
                <div className="container">
                    <div className="row gx-lg-5 align-items-stretch">
                        <div className="col-xl-8 col-lg-7">

                            <h4 className="text-uppercase d-inline-flex bg-white text-primary lh-1 py-2 px-3 fw-normal m-0 mb-3">
                                Featured Stories
                            </h4>

                            <div className="mb-0 reveal2 row gx-3 gy-3 mb-4">
                                {projects.map((po, pi) => {
                                    let metadata: any = {};

                                    try {
                                        metadata = YAML.parse(po.metadata);
                                    } catch (ex) {
                                    }

                                    if (metadata === null || metadata.category === undefined || metadata.category != "insights") {

                                        return <></>

                                    }

                                    return (
                                        <div
                                            className="d-flex1 align-items-center lh-sm col-6"
                                            key={"work_" + pi}
                                        >


                                            <Link
                                                className="d-block w-100 opacity-15 text-decoration-none"
                                                style={{ whiteSpace: "" }}
                                                href={"/work/" + po.slug}
                                            >

                                                <div className="border1 mb-2 bg-white opacity-251" style={{
                                                    paddingBottom: "100%",
                                                    backgroundSize: "cover",
                                                    backgroundPosition: "center",
                                                    backgroundImage: "url(" + metadata.thumbnail + ")"
                                                }}></div>

                                                {po.title}
                                            </Link>

                                            <div className=" mt-1">
                                                <p
                                                    className="m-0 ms-auto fw-light"
                                                    style={{ whiteSpace: "" }}
                                                >
                                                </p>
                                                <p className="fw-light opacity-50 small text-truncate text-nowrap overflow-hidden m-0">
                                                    <em>{metadata?.url.replaceAll("https://", "")}</em>
                                                </p>
                                            </div>

                                        </div>
                                    );
                                })}
                            </div>

                            <h4 className="text-uppercase d-inline-flex bg-white text-primary lh-1 py-2 px-3 fw-normal m-0 mb-3">
                                Selected Work
                            </h4>

                            <div className="mb-0 reveal2 row gx-3 gy-3 mb-lg-4">
                                {projects.map((po, pi) => {
                                    let metadata: any = {};

                                    try {
                                        metadata = YAML.parse(po.metadata);
                                    } catch (ex) {
                                    }

                                    if (metadata !== null && metadata.category !== undefined && metadata.category === "insights") {

                                        return <></>

                                    }


                                    return (
                                        <div
                                            className="d-flex1 align-items-center lh-sm col-lg-4 col-6"
                                            key={"work_" + pi}
                                        >


                                            <Link
                                                className="d-block w-100 opacity-15 text-decoration-none"
                                                style={{ whiteSpace: "" }}
                                                href={metadata ? metadata?.url : ""}
                                                target="_blank"
                                            >

                                                <div className="border1 mb-2 bg-white" style={{
                                                    paddingBottom: "100%",
                                                    backgroundSize: "cover",
                                                    backgroundPosition: "center",
                                                    backgroundImage: "url(" + metadata?.thumbnail + ")"
                                                }}></div>

                                                {po.title}
                                                <small>
                                                    <i className=" bi bi-box-arrow-up-right ms-1 small"></i>
                                                </small>
                                            </Link>

                                            <div className=" mt-1">
                                                <p
                                                    className="m-0 ms-auto fw-light"
                                                    style={{ whiteSpace: "" }}
                                                >
                                                </p>
                                                <p className="fw-light opacity-50 small text-truncate text-nowrap overflow-hidden m-0">
                                                    <em>{metadata?.url.replaceAll("https://", "")}</em>
                                                </p>
                                            </div>

                                        </div>
                                    );
                                })}
                            </div>

                        </div>

                        <div className="col-xl-4 col-lg-5">
                            <div className="row gx-lg-5 h-100">
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
