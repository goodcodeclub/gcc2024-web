"use client";

import React, { useEffect, useState } from "react";
import Nav from "./components/nav";
import Footer from "./components/footer";
import { Noto_Sans_KR } from "next/font/google";
import TalentList from "./components/talent";
import YAML from 'yaml'
import Link from "next/link";
import { Sidebar } from "./components/sidebar";

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
    {
      name: "Professional training",
      role: "Tutorials and concepts",
    },
  ];

  const [articles, setArticles] = useState([]);

  const loadBlog = async () => {

    const result = await fetch("https://api.letterform.app/public/pages/list?user_email=chris@goodcodeclub.com&project_slug=goodcodeclub-blog");
    const data = await result.json();

    setArticles(data.data);


  }

  useEffect(() => {

    loadBlog();

  }, [])

  const [projects2, setProjects] = useState([]);
  const loadWork = async () => {

    const result = await fetch("https://api.letterform.app/public/pages/list?user_email=chris@goodcodeclub.com&project_slug=goodcodeclub-work");
    const data = await result.json();

    setProjects(data.data);

  }

  useEffect(() => {

    loadWork();


  }, [])

  let counter = 0;


  const internal = [

    {
      image: "../../htmlcats.svg",
      url: "https://htmlcats.com",
      name: "HTMLCATS",
      description: "Web development tutorials"
    },
    {
      image: "../../flexbox.svg",
      url: "https://flexboxtoronto.com",
      name: "Flexbox",
      description: "Flexible studio rental"
    },
    {
      image: "../../saboten.svg",
      url: "https://letterform.app",
      name: "Letterform",
      description: "Minimalist publishing platform"
    },
    {
      image: "../../kindervillage.svg",
      url: "https://kindervillage.ca",
      name: "Kindervillage",
      description: "Child care resources and solutions"
    },
    {
      image: "../../nextfirststeps.svg",
      url: "https://nextfirststeps.com/",
      name: "NextFirstSteps",
      description: "Recruitment and upskilling support"
    },
    {
      image: "../../tinyartificial.svg",
      url: "https://tinyartificial.com/",
      name: "TinyArtificial",
      description: "AI agents for websites"
    },
    // {
    //     image: "../../uptimetrace.svg",
    //     url: "#",
    //     name: "UptimeTrace",
    //     description: "Website monitoring solution"
    // },
  ]

  return (
    <>
      <div className="text-white bg-dark text-center small d-none">
        <a href="https://nextfirststeps.com/" target="_blank" className="text-decoration-none py-2 d-block px-2 lh-sm">
          🚀 Check out NextFirstSteps: our new consulting service for emerging talent recruitment  🚀
        </a>
      </div>
      <div
        className="my-auto0 pb-4 font-neodgm1 text-uppercase1"
        ref={refToComponent}
      >

        <Nav />

        <div className="px-lg-0 px-3">
          <div className="container">
            <div className="row gx-lg-0 align-items-stretch justify-content-center">
              <div className="col-xl-8 col-lg-7">
                <div className="mb-xl-4 mb-4 reveal2">
                  {/* <h5 className="fw-bold text-uppercase d-inline-flex bg-dark text-white lh-1 py-2 px-2 fw-normal m-0 mb-2">
                    About us
                  </h5> */}

                  <p className="m-0 mb-2 display-4 fw-bold lh-1 mb-3">
                    Good code for cultural impact, clear marketing, and business growth.
                  </p>

                  <p className="m-0 mb-2">
                    The Web Is a Beautiful Mess.
                  </p>

                  <p className="m-0 mb-2 ">
                    Here at GoodCodeClub, we vividly remember the early days of
                    the World Wide Web, where we celebrated every online
                    interaction on painfully slow dial-up networks.
                  </p>

                  <p className="m-0 mb-2 ">
                    Fast forward to today, where every web project feels heavier,
                    its production process more convoluted than ever. The
                    cyberspace certainly is more crowded and hectic now, but your
                    codebase doesn't have to be.
                  </p>

                  <p className="m-0 mb-2 ">
                    We sift through all the fluff and get down to the substance.
                    We build grounded solutions to your creative and business
                    challenges.
                  </p>

                  <p className="m-0 fw-bold">Good code done well. We are GoodCodeClub.</p>

                  {/* 


                  <p className="m-0">Good code done well. We are GoodCodeClub.</p> */}
                </div>

                <div className="row gx-lg-0">

                  <div className="col-xl-12">


                    <h5 className="fw-bold text-uppercase d-inline-flex bg-dark text-white lh-1 py-2 px-2 fw-normal m-0 mb-3">
                      Founder + Lead Developer
                    </h5>

                    <div className="d-flex1 align-items-start mb-4">


                      <img src="/profile.jpg" className="d-block float-end opacity-100 rounded-circle ms-2 mb-2" style={{
                        width: "5rem",
                        filter: "saturate(0)"
                      }} />

                      <div>

                        <p className="m-0 mb-2">
                          Chris K. Kim, PhD is a user-focused software developer in pursuit of using technology to facilitate interdisciplinary collaborations and address today's talent gap in digital media.
                        </p>

                        <p className="small mb-2 opacity-50">
                          Trained in media production and information visualization, Chris works with institutional stakeholders, including University of Toronto, DARPA, and MIT, to build platforms that democratize AI and promote human-in-the-loop automation.
                        </p>
                        <p className="small mb-2 opacity-50">

Chris also operates a software studio GoodCodeClub, where he works with emerging talents in promoting underserved communities and facilitating youth entrepreneurship.
                        </p>

                        <div className="m-0 d-flex">
                          <a href="https://chriskkim.com" target="_blank" className="me-1"><i className="bi bi-globe"></i></a>
                          <a href="http://ca.linkedin.com/pub/chris-kim/12/a52/8b9/" target="_blank" className=""><i className="bi bi-linkedin"></i></a>
                        </div>

                      </div>





                    </div>



                    <h5 className="fw-bold text-uppercase d-inline-flex bg-dark text-white lh-1 py-2 px-2 fw-normal m-0 mb-3">
                      Original Projects
                    </h5>

                    <div>


                      <div className="row gy-1 mb-4 gy-3 align-items-center">

                        {internal.map((io, ii) => {
                          return <div className="col-md-6">
                            <a href={io.url == "#" ? "" : io.url} target={io.url == "#" ? "" : "_blank"} className="d-flex align-items-center text-decoration-none  text-truncate overflow-hidden ">
                              <img src={io.image} className="d-block me-1 opacity-50" style={{
                                width: "2.5rem"
                              }} />

                              <div className="w-100 ms-2 text-truncate overflow-hidden">

                                <h5 className="fw-bold fw-normal m-0 text-decoration-none d-flex align-items-center">
                                  {io.name}
                                </h5>
                                <p
                                  className="m-0 small ms-auto opacity-50 fw-light w-100 text-truncate overflow-hidden"
                                  style={{ whiteSpace: "nowrap" }}
                                >
                                  {io.description}
                                </p>
                              </div>

                            </a>
                          </div>

                        })}

                      </div>



                    </div>


                    <h5 className="fw-bold text-uppercase d-inline-flex bg-dark text-white lh-1 py-2 px-2 fw-normal m-0 mb-3">
                      Featured Stories
                    </h5>

                    <div className="mb-0 reveal2 row gx-3 gy-3 mb-4">

                      {projects2.map((po, pi) => {
                        let metadata: any = {};

                        try {
                          metadata = YAML.parse(po.metadata);
                        } catch (ex) {
                        }

                        if (metadata === null || metadata.category === undefined || metadata.category != "insights") {

                          return <></>

                        }

                        if (counter > 1) {

                          return <></>
                        }

                        counter++;

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

                              <div className="border1 mb-2 bg-dark opacity-251" style={{
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

                    <h5 className="fw-bold text-uppercase d-inline-flex bg-dark text-white lh-1 py-2 px-2 fw-normal m-0 mb-2">
                      Services
                    </h5>
                    <div className="mb-4 reveal2 row gy-md-0 gy-1">
                      {services.map((po, pi) => {
                        return (
                          <div
                            className="d-md-flex align-items-center lh-sm col-12"
                            key={pi}
                          >
                            <span
                              className="d-block"
                              style={{ whiteSpace: "nowrap" }}
                            >
                              {po.name}
                            </span>
                            <hr className="border-dark border border-bottom-0 border-1 m-0 mx-2 w-100 opacity-25 d-md-block d-none" />
                            <p
                              className="m-0  ms-auto opacity-50 fw-light small d-sm-block d-none1"
                              style={{ whiteSpace: "nowrap" }}
                            >
                              {po.role}
                            </p>
                          </div>
                        );
                      })}
                    </div>

                  </div>

                  <div className="col-xl-12 mb-0">



                    <h5 className="fw-bold text-uppercase d-inline-flex bg-dark text-white lh-1 py-2 px-2 fw-normal m-0 mb-2">
                      Collaborators
                    </h5>

                    <div className="mb-4 reveal2 row gy-md-0 gy-1">

                      {projects.map((po, pi) => {
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


                  </div>

                </div>




              </div>

              <div className="col-xl-4 col-lg-5 d-none">
                <div className="row gx-lg-0 h-100">
                  <div className="col-xl-12 mt-lg-0 mt-4 h-100">




                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <Footer /> */}
      </div>
    </>
  );
}
