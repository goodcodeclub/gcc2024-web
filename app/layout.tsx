"use client";

import React, { useState } from "react";
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

    const [title, setTitle] = useState("GoodCodeClub - digital media, web development, prototyping - Toronto, Canada");

    
    if (pathname.indexOf("/blog/") === 0) {


        const loadArticle = async () => {


            const pathArray = pathname.split("/");

            if (pathArray.length > 2) {

                const result = await fetch("https://api.letterform.app/public/pages/get?project_slug=goodcodeclub-blog&article_slug=" + pathArray[2]);
                const data = await result.json();

                if (data.data) {

                    setTitle(data.data.title + " - " + "GoodCodeClub - Toronto, Canada");

                }

            }


        }
        loadArticle();


    }

    return (
        <html lang="en">
            <head>
                <title>{title}</title>
                <meta name="title" property="og:title" content={title}></meta>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-LYZDGJWZ8G"></script>
                <script dangerouslySetInnerHTML={{ __html: gaTag }}></script>
            </head>
            <body className=" bg-primary text-white d-flex flex-column" style={{

            }}>{children}</body>
        </html>
    )
}