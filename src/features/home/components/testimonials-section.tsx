import React from 'react'

interface Testimonial {
  id: number
  name: string
  role: string
  text: string
  rating: number
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Freelancer',
      text: 'Filing taxes has never been easier! The process is so straightforward and the support team was very helpful. Highly recommended!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Business Owner',
      text: 'As a business owner, I was worried about complex filings. This platform made it simple and fast. Great experience!',
      rating: 5,
    },
    {
      id: 3,
      name: 'Amit Patel',
      role: 'Student',
      text: 'Perfect for first-time filers. The guided process explains everything clearly. Made my first filing stress-free!',
      rating: 5,
    },
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i
        key={i}
        className={`fa fa-star text-orange-400 text-base ${i < rating ? '' : 'fa-star-o'}`}
      ></i>
    ))
  }

  return (
    <section className="!py-24 md:!py-32 bg-gradient-to-r from-blue-900 to-black">
      <div className="container mx-auto">
        <div className="!text-center !mb-20">
          <h2 className="!text-4xl md:!text-5xl !font-bold text-white !mb-6 !leading-tight">
            What Our Users Say
          </h2>
          <p className="!text-lg md:!text-xl text-gray-300 !m-0 !p-0">
            See why thousands of users trust us with their tax filing
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 !mt-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl !p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all"
            >
              <div className="flex gap-1 !mb-6">
                {renderStars(testimonial.rating)}
              </div>
              <div className="!mb-8">
                <p className="!text-base text-gray-700 !m-0 !p-0 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
              <div>
                <h4 className="!text-xl !font-semibold text-blue-600 !mb-2 !leading-tight">
                  {testimonial.name}
                </h4>
                <span className="!text-sm text-gray-600 !m-0 !p-0">
                  {testimonial.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
