
import { Button } from '@/components/ui/button'

import { Card } from '@/components/ui/card'
import { Main } from '@/layouts/components/main'
import {
  IconArrowRight,
  IconBulbFilled,
  IconQuestionMark,
  IconShieldCheckFilled,
  IconUserCircle,
} from '@tabler/icons-react'
import { Link } from '@tanstack/react-router'
import CustomBreadcrumb from '../wizard-module/components/CustomBreadCrumb'


const helpUrl = import.meta.env.VITE_HELP_URL || "https://help.taxyaar.com"
const requestUrl = helpUrl + "/requests"
const knowledgeBaseUrl = helpUrl + "/help-center/topic_category/knowledge-base"

const ProductLaunchboard = () => {
  const title = 'Tax Filing Services'
  const title2 = 'More Services'
  return (
    <Main className="min-w-full">
      <div className="min-h-screen   max-w-max mx-auto">
        <CustomBreadcrumb title="Services" />

      <div className="mx-auto grid max-w-5xl grid-rows-1 gap-16 place-items-center">
        <div className="grid grid-rows-1 gap-16 place-items-center">
          <div className="text-center text-xl font-bold">{title}</div>
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-2 md:gap-12">
            <Card className="w-126 h-72 p-8 mb-4">
              <div className="card-header">
                <div className="card-icon text-center flex items-center justify-center   rounded-md mb-2">
                  <IconShieldCheckFilled size={36} className="text-blue-300" />
                </div>
                <div className="card-title text-xl font-bold">
                  File your Income-tax Return
                </div>
              </div>
              <div className="card-content">
                Prepare your Income-tax Return yourself. Finish filing in less
                than 15 minutes.
              </div>
              <div className="card-footer">
                <Button
                  className="btn btn-primary bg-blue-500 hover:bg-blue-600 text-white"
                  asChild
                >
                  <Link to="/dashboard" className="text-blue-500   mr-4">
                    Get Started <IconArrowRight className="" />
                  </Link>
                </Button>
              </div>
            </Card>
            <Card className="w-126 h-72 p-8 mb-4">
              <div className="card-header">
                <div className="card-icon text-center flex items-center justify-center   rounded-md mb-2">
                  <IconUserCircle size={36} className="text-blue-300" />
                </div>

                <div className="card-title text-xl font-bold">
                  Tax Expart Service
                </div>
              </div>
              <div className="card-content">
                Prepare your Income-tax Return yourself. Finish filing in less
                than 15 minutes.
              </div>
              <div className="card-footer">
                <Button
                  className="btn btn-primary bg-blue-100 hover:bg-blue-600 text-blue-500"
                  asChild
                >
                  <Link to="/dashboard" className="text-blue-500   mr-4">
                    Learn More <IconArrowRight className="" />
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
        <div className="grid grid-rows-1 gap-16 place-items-center">
          <div className="text-center text-xl font-bold">{title2}</div>
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-2 md:gap-12">
            <Card className="w-126 h-72 p-8 mb-4">
              <div className="card-header">
                <div className="card-icon text-center flex items-center justify-center   rounded-md mb-2">
                  <IconQuestionMark size={36} className="text-blue-300" />
                </div>
                <div className="card-title text-xl font-bold">My Tickets</div>
              </div>
              <div className="card-content">
                See and Manage all the support tickets that you have raised with
                us.
              </div>
              <div className="card-footer">
                <Button
                  className="btn btn-primary bg-blue-50/5 hover:text-blue-600 hover:bg-blue-50/5 text-blue-500"
                  asChild
                >
                    <Link to={requestUrl}
                      target='_blank'
                      rel="noopener noreferrer"
                      className="text-blue-500   mr-4">
                    Get Started <IconArrowRight className="" />
                  </Link>
                </Button>
              </div>
            </Card>
            <Card className="w-126 h-72 p-8 mb-4">
              <div className="card-header">
                <div className="card-icon text-center flex items-center justify-center   rounded-md mb-2">
                  <IconBulbFilled size={36} className="text-blue-300" />
                </div>

                <div className="card-title text-xl font-bold">
                  Knowledge Base
                </div>
              </div>
              <div className="card-content">
                Have questions on Tax Filings? Our comprehensive set of Guides,
                How-to articles and FAQs will help you.
              </div>
              <div className="card-footer">
                <Button
                  className="btn btn-primary bg-blue-50/5 hover:text-blue-600 hover:bg-blue-50/5 text-blue-500"
                  asChild
                >
                    <Link
                      to={knowledgeBaseUrl}
                    className="text-blue-500   mr-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read Articles <IconArrowRight className="" />
                    </Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
      </div>
    </Main>
  )
}

export default ProductLaunchboard
