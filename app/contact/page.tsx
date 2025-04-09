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

    const specs = [
        {
            name: "Name",
            type: "text"
        },
        {
            name: "Email",
            type: "email"
        },
        {
            name: "Phone",
            type: "phone",
            optional: true
        },
        {
            name: "Message",
            type: "textarea"
        },
    ]

    const [form, setForm] = useState({
        "name": "",
        "email": "",
        "phone": "",
        "message": "",
    })

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

                            <h4 className="text-uppercase d-inline-flex bg-white text-primary lh-1 py-2 px-3 fw-normal m-0 mb-2">
                                Get in touch
                            </h4>

                            <p className="m-0 lh-sm mb-4 text-truncate">
                                <i className="bi bi-person"></i>{" "}
                                <a href="https://chriskkim.com/" target="_blank">
                                    Chris Kim, PhD
                                </a>{" "}
                                <br />
                                <i className="bi bi-envelope"></i>{" "}
                                <a href="mailto:chris@goodcodeclub.com">
                                    chris@goodcodeclub.com
                                </a>
                                <br />
                                <i className="bi bi-geo-alt"></i>{" "}
                                <a href="http://flexboxtoronto.com/" target="_blank">
                                    222 Finch Ave W Suite 105, North York, ON M2R 1M6
                                </a>
                                <br />
                                <i className="bi bi-linkedin"></i>{" "}
                                <a href="https://www.linkedin.com/company/goodcodeclub/" target="_blank">
                                    LinkedIn
                                </a>                                
                                <br />
                                <i className="bi bi-calendar2"></i>{" "}
                                <a href="https://chriskkim.youcanbook.me/" target="_blank">
                                    Book a meeting
                                </a>
                            </p>

                            <form onSubmit={async (e) => {

                                e.preventDefault();

                                const url = 'https://api.letterform.app/public/pages/create';
                                const options = {
                                    method: 'POST',
                                    headers: { 'content-type': 'application/json' },
                                    body: JSON.stringify({
                                        "title": "Contact form submission: "+ new Date().toISOString(),
                                        "content": JSON.stringify(form),
                                        "project_uuid": "58f7f50b-eac1-4c9f-b7fa-d44b8c37c173",
                                        "metadata": stringify(form),
                                    })
                                };

                                try {
                                    const response = await fetch(url, options);
                                    const data = await response.json();
                                    alert("Thank you for your submission!");
                                    window.location.reload();
                                } catch (error) {
                                    console.error(error);
                                }

                            }}>

                                {/* <pre>
                                    {JSON.stringify(form)}
                                </pre> */}

                                {specs.map((spec, index) => {

                                    return <div>

                                        <h6 className="m-0 mb-1">
                                            {spec.name}
                                            {spec.optional &&
                                                <small className="opacity-50"> (Optional)</small>
                                            }
                                        </h6>
                                        {spec.type == "textarea" &&
                                            <textarea name={spec.name.toLowerCase()} required={spec.optional ? false : true} className="form-control bg-transparent border-1 border-white mb-3 text-white fw-normal" rows={5} onChange={(e) => setForm({
                                                ...form,
                                                [spec.name.toLowerCase()]: e.target.value
                                            })} ></textarea>
                                        }
                                        {spec.type != "textarea" &&
                                            <input name={spec.name.toLowerCase()} type={spec.type} required={spec.optional ? false : true} className="form-control bg-transparent border-1 border-white mb-3 text-white fw-normal" onChange={(e) => setForm({
                                                ...form,
                                                [spec.name.toLowerCase()]: e.target.value
                                            })} />
                                        }

                                    </div>

                                })}


                                <div className="d-flex">
                                    <button className="btn btn-outline-light border-white ms-auto">
                                        Submit form
                                    </button>
                                </div>

                            </form>


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
        </div >
    );
}
