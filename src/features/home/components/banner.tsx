import { Link } from '@tanstack/react-router'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { useIsMobile } from '@/hooks/use-mobile'

import { FaStar, FaStarHalf } from 'react-icons/fa'

const Banner: React.FC = () => {
  const isMobile = useIsMobile()
  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    cssEase: 'linear',
    infinite: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 8000,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: (
      <button
        type="button"
        className="slick-prev slick-arrow"
        aria-label="Previous Slide"
      >
        <i className="fa fa-angle-left" aria-hidden="true"></i>
        {/* <span className="sr-only">Previous</span> */}
      </button>
    ),
    nextArrow: (
      <button
        type="button"
        className="slick-next slick-arrow"
        aria-label="Next Slide"
      >
        <i className="fa fa-angle-right" aria-hidden="true"></i>
        {/* <span className="sr-only">Next</span> */}
      </button>
    ),
  }

  const slides = [
    {
      id: 1,
      title: 'Complete',
      subtitle: 'Submit & Relax',
      desc: 'Return Filing Made Easy',
      img: 'img/ban-img.webp',
    },

    {
      id: 2,
      title: 'File Tax',
      subtitle: 'Easily & Securely',
      desc: '100% Secured Filing',
      img: 'img/ban-img.webp',
    },
    {
      id: 3,
      title: 'Smart Tax',
      subtitle: 'Simple & Better',
      desc: 'Zero Tax Stress',
      img: 'img/ban-img.webp',
    },
  ]
  return (
    <section className="c-banner-main">
      <Slider
        {...settings}
        className="slick-slider c-banner-w slick-initialized"
      >
        {slides.map((slide) => (
          <div key={slide.id} className="c-banner-slide">
            <div className="container px-12!important mx-auto flex items-center justify-between gap-8">
              <div className="space-y-0 text-white px-4! md:px-0! max-w-2xl">
                <div className="c-banner-tag text-6xl md:text-9xl font-bold   mb-4">
                  {slide.title}
                  <span>,</span>
                </div>
                <div className="c-banner-subtag text-4xl md:text-7xl   font-bold  mb-6">
                  <span className='text-[#ffb401]'>{slide.subtitle.split(' ')[0]}</span> &nbsp;
                  {slide.subtitle.split(' ')[1]} &nbsp;
                  {slide.subtitle.split(' ')[2]}
                </div>
                <div className='text-3xl md:text-4xl'>{slide.desc}</div>

                <div className="rating-section">
                  <div className="rating-section-star">
                    <FaStar size={20} className="text-yellow-400" />
                    <FaStar size={20} className="text-yellow-400" />
                    <FaStar size={20} className="text-yellow-400" />
                    <FaStar size={20} className="text-yellow-400" />
                    <FaStar size={20} className="text-yellow-400" />
                    <FaStarHalf size={20} className="text-yellow-400" />
                  </div>
                  <div className="rating-section-text">
                    <span className="actual-rating">4.7</span> <span>|</span>{' '}
                    <span className="total-review">22,500+ Reviews</span>
                  </div>
                  <div className="banner-button">
                    <Link to={'/'} className="c-btn-3" tabIndex={-1}>
                      <span>Start Filing Now</span>
                    </Link>
                  </div>
                </div>
              </div>
              {!isMobile && (
                <div className="c-banner-img-new">
                  <img src={slide.img} alt="" />
                </div>
              )}
            </div>
          </div>
        ))}
      </Slider>

      <div className="banner-bottom">
        <img src="img/ban-wave.png" alt="" />
      </div>
    </section>
  )
}

export default Banner