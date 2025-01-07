import Link from "next/link";
import YAML from 'yaml'


export function Sidebar(props) {

    const internal = [

        {
            image: "../../htmlcats.svg",
            url: "https://htmlcats.com",
            name: "HTMLCATS",
            description: "Free web development tutorials"
        },
        {
            image: "https://flexboxtoronto.com/images/logo_white.svg",
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
    ]
    return <>

        <h4 className="text-uppercase d-inline-flex bg-white text-primary lh-1 py-2 px-3 fw-normal m-0 mb-2">
            Contact Us
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
            <i className="bi bi-calendar2"></i>{" "}
            <a href="https://chriskkim.youcanbook.me/" target="_blank">
                Book a meeting
            </a>
        </p>


        <h4 className="text-uppercase d-inline-flex bg-white text-primary lh-1 py-2 px-3 fw-normal m-0 mb-2">
            Current projects
        </h4>

        <div className="row gy-1 mb-4 align-items-center">

            {internal.map((io, ii) => {
                return <div className="col-12">
                    <a href={io.url} target="_blank" className="d-flex align-items-center text-decoration-none ">
                        <img src={io.image} className="d-block" style={{
                            width: "2rem"
                        }} />
                        <div className="w-100 ms-2 text-truncate overflow-hidden">

                            <h6 className="fw-normal m-0 text-decoration-underline">
                                {io.name}
                            </h6>
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




        <h4 className="text-uppercase d-inline-flex bg-white text-primary lh-1 py-2 px-3 fw-normal m-0 mb-2">
            Latest News
        </h4>

        <div className="mb-0 reveal2">
            {structuredClone(props.list).reverse().map((po, pi) => {

                if (pi > 0) {
                    return <></>
                }

                let metadata: any = {};

                try {

                    metadata = YAML.parse(po.metadata);

                } catch (ex) {


                }


                return (
                    <div
                        className="d-flex1 align-items-center lh-sm"
                        key={"article_" + pi}
                    >
                        <Link
                            className="d-block w-100 opacity-15"
                            style={{ whiteSpace: "" }}
                            href={"/blog/" + po.slug}
                        >
                            {po.title}
                        </Link>

                        <div className="small mt-1">
                            <p
                                className="m-0 small ms-auto fw-light"
                                style={{ whiteSpace: "" }}
                            >
                                <span className="opacity-50">{new Date(metadata.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} - {metadata.excerpt}</span> <Link href={"/blog/" + po.slug} className="text-white opacity-100">(Read more)</Link>
                            </p>
                        </div>

                    </div>
                );
            })}
        </div>


    </>

}