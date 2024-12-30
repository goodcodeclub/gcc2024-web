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

  const loadBlog = async () => {

    const result = await fetch("https://api.letterform.app/public/pages/list?project_slug=goodcodeclub-blog");
    const data = await result.json();

    setArticles(data.data);


  }

  useEffect(() => {

    loadBlog();

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
              <div className="mb-4 reveal2">
                <h4 className="text-uppercase d-inline-flex bg-white text-primary lh-1 py-2 px-3 fw-normal m-0 mb-2">
                  About us
                </h4>

                <p className="m-0 mb-2">
                  The web is a beautiful mess.
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

                <p className="m-0">Good code done well. We are GoodCodeClub.</p>
              </div>

              <h4 className="text-uppercase d-inline-flex bg-white text-primary lh-1 py-2 px-3 fw-normal m-0 mb-2">
                Services
              </h4>
              <div className="mb-4 reveal2">
                {services.map((po, pi) => {
                  return (
                    <div
                      className="d-flex align-items-center lh-sm"
                      key={pi}
                    >
                      <span
                        className="d-block"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        {po.name}
                      </span>
                      <hr className="border-white border border-bottom-0 border-1 m-0 mx-2 w-100 opacity-25" />
                      <p
                        className="m-0  ms-auto opacity-50 fw-light small d-sm-block d-none"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        {po.role}
                      </p>
                    </div>
                  );
                })}
              </div>


              <h4 className="text-uppercase d-inline-flex bg-white text-primary lh-1 py-2 px-3 fw-normal m-0 mb-2">
                Collaborators
              </h4>

              {projects.map((po, pi) => {
                return (
                  <div className="d-flex align-items-center lh-sm" key={pi}>
                    <a
                      href={po.url}
                      target="_blank"
                      className="d-block1"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      {po.name}
                    </a>
                    <hr className="border-white border border-bottom-0 border-1 m-0 mx-2 w-100 opacity-25" />
                    <p
                      className="m-0  ms-auto opacity-50 fw-light small d-sm-block d-none"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      {po.role}
                    </p>
                  </div>
                );
              })}



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
