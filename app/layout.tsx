"use client";

import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.min.css";
import './global.css';
import { usePathname } from "next/navigation";


const gaTag = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-G8BFQSKTMQ');
`;

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const pathname = usePathname();
    const [title, setTitle] = useState("");

    useEffect(() => {


        if (pathname.indexOf("/blog/") === 0) {


            const loadArticle = async () => {


                const pathArray = pathname.split("/");

                if (pathArray.length > 2) {

                    const result = await fetch("https://api.letterform.app/public/pages/get?user_email=chris@goodcodeclub.com&project_slug=goodcodeclub-blog&article_slug=" + pathArray[2]);
                    const data = await result.json();

                    if (data.data) {

                        setTitle(data.data.title + " - " + "GoodCodeClub - Toronto, Canada");

                    }

                }


            }
            loadArticle();

        } else if (pathname.indexOf("/work/") === 0) {

            

            const loadArticle = async () => {

                const pathArray = pathname.split("/");

                if (pathArray.length > 2) {

                    const result = await fetch("https://api.letterform.app/public/pages/get?user_email=chris@goodcodeclub.com&project_slug=goodcodeclub-work&article_slug=" + pathArray[2]);
                    const data = await result.json();

                    if (data.data) {

                        setTitle(data.data.title + " - " + "GoodCodeClub - Toronto, Canada");

                    }

                }


            }
            loadArticle();
        } else if (pathname.indexOf("/blog") === 0) {

            setTitle("Blog - " + "GoodCodeClub - Toronto, Canada");

        } else if (pathname.indexOf("/work") === 0) {

            setTitle("Work - " + "GoodCodeClub - Toronto, Canada");

        } else if (pathname.indexOf("/contact") === 0) {

            setTitle("Contact - " + "GoodCodeClub - Toronto, Canada");

        } else {
            
            setTitle("GoodCodeClub - digital media, web development, prototyping - Toronto, Canada");

        }

    }, [pathname]);

    return (
        <html lang="en">
            <head>
                <title>{title}</title>
                <meta name="title" property="og:title" content={title}></meta>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-LYZDGJWZ8G"></script>
                <script dangerouslySetInnerHTML={{ __html: gaTag }}></script>
            </head>
            <body className=" bg-dark1 text-white1 d-flex flex-column" style={{}}>
                {/* <iframe src="https://threejs.org/examples/webgl_effects_ascii.html" className="position-fixed w-100 h-100 pe-none" style={{
                    left: 0,
                    top: 0,
                    zIndex: 100,
                    filter: "blur(10px)",
                    mixBlendMode: "screen",
                    opacity:0.2,

                }}></iframe> */}
                {children}
            </body>
        </html>
    )
}