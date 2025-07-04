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


  const [article, setArticle] = useState<any>({});

  const router = useRouter()

  const loadArticle = async () => {

    const result = await fetch("https://api.letterform.app/public/pages/get?user_email=chris@goodcodeclub.com&project_slug=goodcodeclub-work&article_slug=" + props.params.slug);
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
      className="my-auto0 pb-4 font-neodgm1 text-uppercase1"
      ref={refToComponent}
    >
        <Nav />

      <div className="px-lg-0 px-3">
        <div className="container">
          <div className="row gx-lg-0 align-items-stretch justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="mb-0 reveal2">
                <h5 className="text-uppercase d-inline-flex bg-dark text-white lh-1 py-2 px-2 fw-normal m-0">
                  {article.title}
                </h5>

                {metadata.date &&

                  <h6 className="fw-normal m-0 mt-2">
                    {new Date(metadata.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </h6>

                }


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

            <div className="col-xl-4 col-lg-5 d-none">
              <div className="row gx-lg-0 h-100">
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
