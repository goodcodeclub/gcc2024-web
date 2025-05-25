"use client";

import React, { useEffect, useState } from "react";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import { Noto_Sans_KR } from "next/font/google";
import TalentList from "../../components/talent";
import YAML from 'yaml'
import Link from "next/link";
import remarkGfm from "remark-gfm";
import Markdown from "react-markdown";
import rehypeExternalLinks from "rehype-external-links";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { useRouter } from "next/navigation"
import { Sidebar } from "../../components/sidebar";

const noto = Noto_Sans_KR({ subsets: ["latin"] });

export default function Page(props) {
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

  const [article, setArticle] = useState<any>({});

  const router = useRouter()

  const loadArticle = async () => {

    const result = await fetch("https://api.letterform.app/public/pages/get?user_email=chris@goodcodeclub.com&project_slug=goodcodeclub-blog&article_slug=" + props.params.slug);
    const data = await result.json();

    if (data.data) {

      setArticle(data.data);

    } else {
      router.replace("/")
    }


  }

  useEffect(() => {

    loadArticle();
    loadBlog();


  }, [])


  const [articles, setArticles] = useState([]);

  const loadBlog = async () => {

    const result = await fetch("https://api.letterform.app/public/pages/list?user_email=chris@goodcodeclub.com&project_slug=goodcodeclub-blog");
    const data = await result.json();

    setArticles(data.data);


  }




  let metadata: any = {};

  try {

    metadata = YAML.parse(article.metadata);

  } catch (ex) {


  }


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
              <div className="mb-0 reveal2">
                <h4 className="text-uppercase d-inline-flex bg-white text-primary lh-1 py-2 px-3 fw-normal m-0">
                  {article.title}
                </h4>
{/* 
                {metadata.date &&

                  <h6 className="fw-normal m-0 mt-2">
                    {new Date(metadata.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </h6>

                } */}


                <div className="fw-light mt-3" id="view">

                  <Markdown
                    remarkPlugins={[remarkGfm]}
                    children={article.content}
                    rehypePlugins={[
                      [rehypeExternalLinks, { target: "_blank" }],
                      rehypeRaw,
                    ]}
                    components={{
                      code(props) {
                        const { children, className, node, ...rest } = props;
                        const match = /language-(\w+)/.exec(className || "");
                        return match ? (
                          <SyntaxHighlighter
                            {...rest}
                            PreTag="div"
                            children={String(children).replace(/\n$/, "")}
                            language={match[1]}
                          />
                        ) : (
                          <code {...rest} className={className}>
                            {children}
                          </code>
                        );
                      },
                      img(props) {
                        const { children, className, node, ...rest } = props;
                        console.log(rest);
                        const randomClass = "img_" + Math.random().toString(36).slice(2);
                        return <><img src={rest.src} id={randomClass} /><style>{"#" + randomClass} {"{"} {rest.alt} {"}"}</style></>
                      }
                    }}
                  />

                </div>

              </div>




            </div>

            <div className="col-xl-4 col-lg-5 ">
              <div className="row gx-lg-5 h-100">
                <div className="col-xl-12 mt-lg-0 mt-4 ">


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
