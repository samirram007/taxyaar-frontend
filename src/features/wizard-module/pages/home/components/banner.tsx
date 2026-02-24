import { Link } from "@tanstack/react-router";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
const Banner: React.FC = () => {
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: (
            <button type="button" className="slick-prev slick-arrow" aria-label="Previous Slide">
                <i className="fa fa-angle-left" aria-hidden="true"></i>
                {/* <span className="sr-only">Previous</span> */}
            </button>
        ),
        nextArrow: (
            <button type="button" className="slick-next slick-arrow" aria-label="Next Slide">
                <i className="fa fa-angle-right" aria-hidden="true"></i>
                {/* <span className="sr-only">Next</span> */}
            </button>
        ),
    };

    const slides = [
        {
            id: 1,
            title: "Complete",
            subtitle: "Submit & Relax",
            desc: "Return Filing Made Easy",
            img: "img/ban-img.png",
        },
        {
            id: 2,
            title: "Complete",
            subtitle: "Submit & Relax",
            desc: "Return Filing Made Easy",
            img: "img/ban-img.png",
        },
        {
            id: 3,
            title: "Complete",
            subtitle: "Submit & Relax",
            desc: "Return Filing Made Easy",
            img: "img/ban-img.png",
        },
    ];
    return (
        <section className="c-banner-main">
            <Slider {...settings} className="slick-slider c-banner-w slick-initialized"  >
                {slides.map((slide) => (
                    <div key={slide.id} className="c-banner-slide">
                        <div className="container">
                            <div className="col-lg-12 col-md-12">
                                <h1>
                                    {slide.title}
                                    <span>,</span>
                                </h1>
                                <h2>
                                    <span>{slide.subtitle.split(" ")[0]}</span> &nbsp;
                                    {slide.subtitle.split(" ")[1]} &nbsp;
                                    {slide.subtitle.split(" ")[2]}
                                </h2>
                                <h4>{slide.desc}</h4>

                                <div className="rating-section">
                                    <div className="rating-section-star">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star-half-o" />
                                    </div>
                                    <div className="rating-section-text">
                                        <span className="actual-rating">4.7</span> <span>|</span>{" "}
                                        <span className="total-review">22,500+ Reviews</span>
                                    </div>
                                    <div className="banner-button">
                                        <Link to={"/"} className="c-btn-3" tabIndex={-1}>
                                            <span>Start Filing Now</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="c-banner-img-new">
                                <img src={slide.img} alt="" />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>

            <div className="banner-bottom">
                <img src="img/ban-wave.png" alt="" />
            </div>
        </section>
    );
}

export default Banner