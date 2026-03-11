import { YesNoToggle } from "@/components/yes-no-toggle"
import { useState } from "react"
import HelpSidebar from "../../components/HelpSidebar"
import { MoveLeft, MoveRight } from "lucide-react"
import { useWizardModule } from "../../contexts/wizard_module-context"

const questions = [
    {
        id: 1,
        question: "Did you earn salary / pension?",
        description: "Salary includes income earned from employment, salary pension, salary arrears",
        answer: undefined as "yes" | "no" | undefined
    },
    {
        id: 2,
        question: "Do you Own House Property?",
        description: "House Property includes flat, House, Bungalow, etc.",
        answer: undefined as "yes" | "no" | undefined
    },
    {
        id: 3,
        question: "Did you earn any Interest / Dividend Income?",
        description: "Interest received from Banks, Post office or others",
        answer: undefined as "yes" | "no" | undefined
    },
    {
        id: 4,
        question: "Income from Crypto Currency?",
        description: "If you have transferred or sold any crypto currency like BitCoin, Ether, DodgeCoin, Arthur, etc.",
        answer: undefined as "yes" | "no" | undefined
    },
    {
        id: 5,
        question: "Income from Business, Profession or Freelancing, etc.",
        description: "Income from sale of goods, share trading business, Transport business, freelancing, architect, medical profession, consultancy or any other business or Profession",
        answer: undefined as "yes" | "no" | undefined
    },
    {
        id: 6,
        question: "Do you hold Directorship position?",
        description: "If you are a director in a private or public limited company",
        answer: undefined as "yes" | "no" | undefined
    },
    {
        id: 7,
        question: "Do you own unlisted shares?",
        description: "If you have shareholding in any company which is not listed on any stock exchange",
        answer: undefined as "yes" | "no" | undefined
    },
    {
        id: 8,
        question: "Any other Income",
        description: "Other Income like Family Pension, Agricultural Income, Rent on letting-out of machinery, etc.",
        answer: undefined as "yes" | "no" | undefined,
        optionalQuestions: [
            {
                id: 8.1,
                question: "Family Pension",
                description: "Pension received on behalf of a deceased pensioner, being his legal heir",
                answer: undefined as "yes" | "no" | undefined
            },
            {
                id: 8.2,
                question: "Tax Free Income",
                description: "PPF Interest, Dividend Income is taxable from F.Y 2021-22, etc are not taxable",
                answer: undefined as "yes" | "no" | undefined
            },
            {
                id: 8.3,
                question: "Income from Lottery winnings, etc.",
                description: "Lottery or winning from other games, commission Income, etc.",
                answer: undefined as "yes" | "no" | undefined
            },

        ]
    },
]

const Start = () => {
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
                    <div className="lg:col-span-2 grid grid-cols-[150px_1fr] bg-gray-50 rounded-lg p-6  gap-6">
                        <div className="grid w-full">
                            <img src="/images/income.png" alt="Income" className="w-full" />
                        </div>
                        <div className="grid grid-cols-1 justify-center items-start gap-6 px-2">
                            <div className="space-y-1">
                                <div className="text-2xl">Tell us about your Income between 1st April 2024 to 31st March 2025.</div>
                                <div className="text-sm">Help us identify the heads under which you have earned Income</div>
                                <div className="mt-5 space-y-8 ">


                                    {questionsState.map((q) => (
                                        <div key={q.id}>
                                            <div className="grid grid-cols-[1fr_auto] justify-center items-start gap-6">
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

                                            {q.optionalQuestions && q.answer === "yes" && (
                                                <div className="ml-2 mt-6 space-y-6 bg-gray-300/10">
                                                    {q.optionalQuestions.map((oq) => (
                                                        <div key={oq.id} className="grid grid-cols-[1fr_auto] justify-center items-start gap-6">
                                                            <div key={oq.id} className="space-y-1">
                                                                <p className="text-lg font-medium">
                                                                    {oq.question}
                                                                </p>
                                                                <p className="text-sm text-slate-700">
                                                                    {oq.description}
                                                                </p>
                                                            </div>
                                                            <YesNoToggle
                                                                value={oq.answer}
                                                                onChange={(value) => {
                                                                    const updatedQuestions = questionsState.map((question) => {
                                                                        if (question.id === q.id) {
                                                                            const updatedOptionalQuestions = question.optionalQuestions?.map((optionalQuestion) =>
                                                                                optionalQuestion.id === oq.id ? { ...optionalQuestion, answer: value } : optionalQuestion
                                                                            )
                                                                            return { ...question, optionalQuestions: updatedOptionalQuestions }
                                                                        }
                                                                        return question
                                                                    })
                                                                    setQuestionsState(updatedQuestions)
                                                                }}
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}

                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="bg-gray-400/20 p-4 w-full lg:col-span-2 flex justify-between items-center gap-4">
                        <div >
                            <div>Previous</div>
                            <div className="flex flex-row gap-2 items-center"><MoveLeft /> Previous Page</div>
                        </div>
                        <div className="flex flex-col items-end">
                            <div>Next</div>
                            <div className="flex flex-row text-xl text-sky-600 cursor-pointer ">
                                <span className="flex flex-row gap-1 items-center">Choose Return Type <MoveRight /></span>
                            </div>
                        </div>
                    </div>
                </div>
                <HelpSidebar />
            </div>
        </div>
    )
}



export default Start