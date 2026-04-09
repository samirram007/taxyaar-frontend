import { YesNoToggle } from "@/components/web/yes-no-toggle"
import { useState } from "react"
import HelpSidebar from "../../components/HelpSidebar"

import { useWizardModule } from "../../contexts/wizard_module-context"

import WizardFooter from "../../components/wizard_footer"


const questions = [
    {
        id: 1,
        question: "TDS",
        description: "TDS is the amount of tax deducted from amount receivable by you as Income (such as Salary, Bank Interest, Freelancing Income etc).",
        answer: undefined as "yes" | "no" | undefined
    },
    {
        id: 2,
        question: "Tax Paid (Advance and Self-Assessment Tax)",
        description: "Tax paid by the taxpayer for the financial year (other than TDS/TCS)",
        answer: undefined as "yes" | "no" | undefined
    },

]

const TaxesStart = () => {
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
                            <img src="/images/tax.png" alt="Income" className="w-full" />

                        </div>
                        <div className="grid grid-cols-1 justify-center items-start gap-6 px-2">
                            <div className="space-y-1">
                                <div className="text-md">Enter details of tax paid by you or on your behalf. Please refer Form 26AS(Tax credit statement) to ensure correct claim for taxes paid.</div>

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
                        previousPageLink="/deductions"
                        previousPageName="Deductions"
                        nextPageLink="/tds_tax"
                        nextPageName="TDS"
                        progress={{ percentage: '61%', remaining: '7 min more' }}
                    />


                </div>
                <HelpSidebar />
            </div>
        </div>
    )
}



export default TaxesStart