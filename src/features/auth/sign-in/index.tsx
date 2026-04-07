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
      <div className="c-signin-main">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-12">
              <div className="c-card p-4 mb-4 mt-5">
                <div className="text-center mb-4">
                  <h1 className="c-signin-title mb-2">Sign in to Taxyaar Income tax efiling</h1>
                  <p className="c-signin-desc">Login to your Taxyaar income tax return filing account</p>
                </div>
                <div className="c-card-alt mb-3 p-3">
                  <GoogleSignInButton />
                  <p className="c-signin-note mt-2">
                    Google login may not work on some machines. Use email to login or{' '}
                    <Link to="/sign-up" className="c-link-alt">sign up</Link> as a new user.
                  </p>
                </div>
                <GoogleSignInDivider />
                <UserAuthForm className="mt-3" />
                <p className="text-center mt-4 mb-2">Don&apos;t have an account yet?</p>
                <div className="text-center">
                  <Link to="/sign-up" className="c-btn-1">
                    <span>New User? Sign up here</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12">
              <div className="c-card p-4">
                <h2 className="text-center mb-4" style={{ fontSize: 32, fontWeight: 600 }}>Common Questions</h2>
                <Accordion type="single" collapsible defaultValue="q-1">
                  {faqItems.map((item, idx) => (
                    <AccordionItem key={item.question} value={`q-${idx + 1}`} className="mb-2">
                      <AccordionTrigger className="c-faq-question">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="c-faq-answer">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
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
    <div className="c-divider d-flex align-items-center my-4">
      <div className="flex-fill"><Separator className="c-separator" /></div>
      <div className="c-divider-label px-3">OR</div>
      <div className="flex-fill"><Separator className="c-separator" /></div>
    </div>
  )
}
