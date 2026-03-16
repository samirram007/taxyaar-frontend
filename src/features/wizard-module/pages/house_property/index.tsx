import { useState } from 'react'
import HelpSidebar from '../../components/HelpSidebar'

import WizardHeader from '../../components/wizard_header'
import WizardFooter from '../../components/wizard_footer'

import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

const questions = [
    {
        id: 8,
        attributeName: 'regime_type',
        question:
            'Under which regime you want to file?',
        description: 'Under which regime you want to file?',
        answer: [
            {
                key: 'new',
                value: "New Regime",
                disabled: false,
            },
            {
                key: 'old',
                value: 'Old Regime',
                disabled: true,
            },

        ],
    },
]
const helpUrl = import.meta.env.VITE_HELP_URL || "https://help.taxyaar.com"
const SalaryIncome = () => {
    const [questionsState /*, setQuestionsState */] = useState(questions)
    const [answer, setAnswer] = useState(questions[0].answer[0].key)
    const handleChange = (value: string) => {
        setAnswer(value)
    }

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8  ">
            <WizardHeader />
            <div className="grid lg:grid-cols-3 gap-8 mb-24">

                <div className="grid grid-rows-1   lg:col-span-2">

                    <div
                        className="lg:col-span-2    grid-cols-1 bg-white
                    shadow rounded-lg   gap-6"
                    >
                        <div className="grid grid-cols-1 justify-center items-start gap-6 pb-6">
                            <div className='border-b-2 p-6 text-2xl'>
                                <div>
                                    House Property Income details
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Enter details of your housing loan and rental income from house

                                </div>
                            </div>
                            <div className="space-y-1 px-6 flex flex-col items-center gap-4">
                                <p>Add details of your Housing Loan and Rental Income from House</p>
                                <p>
                                    <Button
                                        asChild
                                        className="
  bg-violet-800 hover:bg-violet-600
  transition-all duration-200 ease-out
  hover:shadow-lg hover:-translate-y-px
  active:scale-[0.97] cursor-pointer">
                                        <Link to={"/house_property/add"} className="text-violet-50 ">
                                            + ADD HOUSE PROPERTY
                                        </Link>
                                    </Button>
                                </p>
                                <p>OR</p>

                            </div>



                        </div>
                        <WizardFooter
                            previousPageLink="/salary_income"
                            previousPageName="Salary / Pension Income"
                            nextPageLink="/general_business"
                            nextPageName="General Business"
                            progress={{ percentage: '9%', remaining: '16 min more' }}

                        />
                    </div>
                </div>
                <HelpSidebar />
            </div>
        </div>
    )
}

export default SalaryIncome
