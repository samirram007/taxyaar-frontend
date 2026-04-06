import React from 'react'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, HelpCircle } from 'lucide-react'

const ContactUsSection: React.FC = () => {
  return (
    <section className="!py-20 md:!py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="!text-center !mb-16">
            <h2 className="!text-4xl md:!text-5xl !font-bold text-slate-900 !mb-4 leading-tight !p-0">
              Get in Touch
            </h2>
            <p className="!text-lg text-slate-600 !p-0 max-w-2xl mx-auto">
              Have questions or need assistance? Our team is here to help.
              Contact us and we'll respond as soon as possible.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 !mb-12">
            {/* Contact Info Cards */}
            <div className="bg-white rounded-xl shadow-md border border-slate-200 !p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center !mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg !p-3">
                  <Mail className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="!text-xl !font-semibold text-slate-900 !text-center !mb-2">
                Email Us
              </h3>
              <p className="text-slate-600 !text-center text-sm">
                support@taxyaar.com
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-slate-200 !p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center !mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg !p-3">
                  <Phone className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="!text-xl !font-semibold text-slate-900 !text-center !mb-2">
                Call Us
              </h3>
              <p className="text-slate-600 !text-center text-sm">
                +91 (123) 456-7890
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-slate-200 !p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center !mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg !p-3">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="!text-xl !font-semibold text-slate-900 !text-center !mb-2">
                Visit Us
              </h3>
              <p className="text-slate-600 !text-center text-sm">
                New Delhi, India
              </p>
            </div>
          </div>
          =
          <div className="flex justify-center !mt-8">
            <a
              href="https://help.taxyaar.com/help-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                type="button"
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-md !rounded-lg transition-all transform hover:scale-105 !px-8 !py-7 font-semibold"
              >
                <HelpCircle className="h-4 w-4 mr-2 inline-block" />
                Help Center
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUsSection
