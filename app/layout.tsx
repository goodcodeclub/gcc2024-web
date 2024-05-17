import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.min.css";
import './global.css';


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
    return (
        <html lang="en">
            <head>
                <title>GoodCodeClub - digital media, web development, prototyping - Toronto, Canada</title>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-LYZDGJWZ8G"></script>
                <script dangerouslySetInnerHTML={{ __html: gaTag }}></script>
            </head>
            <body className=" bg-primary text-white d-flex flex-column" style={{

            }}>{children}</body>
        </html>
    )
}