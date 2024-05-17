import React from "react";

export default function Testimonials() {
    return <div className="primary-background py-5">
        <div id="carouselControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner py-5" style={{ textAlign: 'center' }}>
                <div className="carousel-item active" >
                    <h3>"Using Cactus has simplified my course preparation immensely. <br /> It's intuitive, powerful, and incredibly reliable."</h3>
                    <p className="mt-4">Alice Murray, University Lecturer</p>
                </div>
                <div className="carousel-item">
                    <h3>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"</h3>
                    <p className="mt-4">John Doe, Product Manager</p>
                </div>
                <div className="carousel-item">
                    <h3>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"</h3>
                    <p className="mt-4">Jane Smith, Freelance Designer</p>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
}
