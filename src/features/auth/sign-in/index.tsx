import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import { Separator } from '@/components/ui/separator'
import Header from '@/features/home/components/header'
import Footer from '@/features/home/components/footer'
import { UserAuthForm } from './components/user-auth-form'
import { GoogleSignInButton } from '../components/google-sign-in-button'
import { Link } from '@tanstack/react-router'
// import { useEffect } from 'react'

export default function SignIn() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[30rem]">
          <div className="space-y-6 p-8">
            <div className="text-center">
              <h1 className="text-2xl font-semibold text-gray-900">
                Sign in to myITreturn Income tax efiling
              </h1>
              <p className="mt-2 text-sm text-gray-600">
                Login to your myITreturn income tax return filing account
              </p>
            </div>

            <GoogleSignInButton />
            <p className="text-center text-xs leading-relaxed text-gray-600">
              Google login may not work on some machines. Use email to login or{' '}
              <Link
                to="/sign-up"
                className="font-medium text-blue-600 hover:text-blue-700"
              >
                sign up
              </Link>{' '}
              as a new user
            </p>

            <GoogleSignInDivider />

            <UserAuthForm className="space-y-4" />

            <div className="space-y-3 text-center">
              <p className="text-sm text-gray-600">
                Don&apos;t have an account yet?
              </p>
              <Link
                to="/sign-up"
                className="inline-block w-full rounded-lg bg-blue-100 px-4 py-2.5 text-center font-medium text-blue-600 transition-colors hover:bg-blue-100"
              >
                New User? Sign up here
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 w-full max-w-3xl px-4">
          <h2 className="mb-8 text-center text-2xl font-semibold text-gray-900">
            Common Questions
          </h2>
          <div className="rounded-lg bg-white shadow-sm p-6">
            <Accordion type="single" collapsible defaultValue="q-1">
              {faqItems.map((item, idx) => (
                <AccordionItem
                  key={item.question}
                  value={`q-${idx + 1}`}
                  className="border-gray-200"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600 hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

const faqItems = [
  {
    question: 'Is Taxyaar authorised eRI by incometax.gov.in?',
    answer:
      'Yes. Taxyaar is the oldest eRI of the Income Tax Department and the site can help you file your income-tax return quickly and accurately.',
  },
  {
    question: 'Is my data safe with Taxyaar?',
    answer:
      'Yes. Taxyaar follows secure standards and encryption to protect your profile and tax filing information.',
  },
  {
    question: 'What if I forget my username or password?',
    answer:
      'Use the Forgot Password option on this page. You can recover access through your registered email.',
  },
  {
    question: 'What if Google Sign In does not work?',
    answer:
      'Some systems block popup sign-in. You can still continue with your email and password login on this page.',
  },
  {
    question:
      'Do I have to enter my Income-tax website credentials on this page?',
    answer: 'No. You only need your Taxyaar account login for this step.',
  },
]

const GoogleSignInDivider = () => {
  return (
    <div className="relative flex items-center">
      <div className="flex-grow border-t border-gray-300"></div>
      <span className="mx-4 text-sm font-medium text-gray-600">OR</span>
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
  )
}
