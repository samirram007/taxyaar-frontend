import { YesNoToggle } from "@/components/yes-no-toggle"
import { useState } from "react"
import HelpSidebar from "../../components/HelpSidebar"

import { useWizardModule } from "../../contexts/wizard_module-context"

import WizardFooter from "../../components/wizard_footer"


const questions = [
    {
        id: 1,
        question: "Deductions",
        description: "Only pension funds (NPS)",
        answer: undefined as "yes" | "no" | undefined
    },
    {
        id: 2,
        question: "Tax Relief on Salary arrears received",
        description: "Tax Relief u/s 89 is applicable if you have received arrears of Salary. Select “Yes” if you have received any portion of salary(including pension and gratuity) pertaining to earlier years in 2024-25 and tax relief u/s 89 is to be claimed on it.",
        answer: undefined as "yes" | "no" | undefined
    },

]

const DeductionStart = () => {
    const { member } = useWizardModule()
    const [questionsState, setQuestionsState] = useState(questions)
    const assessmentYear = "2025-26"
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8  ">
            <div className="space-x-2 text-sm">
                <span>A. Y. {assessmentYear}</span>
                <span>{member?.firstName + " " + member?.lastName}</span>
                <span>{member?.pan}</span>

            </div>
            <div className="grid lg:grid-cols-3 gap-8 mb-24">
                <div className="grid grid-rows-1   lg:col-span-2">
                    <div className="lg:col-span-2 grid grid-cols-[150px_1fr] bg-white rounded-lg p-6  gap-6">
                        <div className="grid w-full">
                            <img src="/images/deduction.png" alt="Income" className="w-full" />

                        </div>
                        <div className="grid grid-cols-1 justify-center items-start gap-6 px-2">
                            <div className="space-y-1">
                                <div className="text-md">All relevant information pertaining to income, deduction, and taxes has been saved.</div>

                                <div className="my-12 space-y-8 ">


                                    {questionsState.map((q) => (
                                        <div key={q.id}>
                                            <div className="grid grid-cols-[1fr_auto] justify-center items-start gap-6 border-b pb-6">
                                                <div key={q.id} className="space-y-1">
                                                    <p className="text-lg font-medium">
                                                        {q.question}
                                                    </p>
                                                    <p className="text-sm text-slate-700">
                                                        {q.description}
                                                    </p>
                                                </div>
                                                <div>


                                                    <YesNoToggle
                                                        value={q.answer}
                                                        onChange={(value) => {
                                                            const updatedQuestions = questionsState.map((question) =>
                                                                question.id === q.id ? { ...question, answer: value } : question
                                                            )
                                                            setQuestionsState(updatedQuestions)
                                                        }}
                                                    />
                                                    {/* {q.optionalQuestions ? 'yes' : ''}
                                                {q.answer === "yes" ? "yes" : "no"} */}
                                                </div>
                                            </div>


                                        </div>
                                    ))}

                                </div>
                            </div>

                        </div>

                    </div>

                    <WizardFooter
                        indicatorTextLeft="Previous"
                        indicatorTextRight="Next"
                        previousPageLink="/house_property"
                        previousPageName="House Property"
                        nextPageLink="/deductions"
                        nextPageName="Deductions"
                        progress={{ percentage: '50%', remaining: '9 min more' }}
                    />


                </div>
                <HelpSidebar />
            </div>
        </div>
    )
}



export default DeductionStart