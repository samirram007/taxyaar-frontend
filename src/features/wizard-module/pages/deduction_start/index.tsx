import { YesNoToggle } from "@/components/web/yes-no-toggle"
// import { useState } from "react"
import HelpSidebar from "../../components/HelpSidebar"



import WizardFooter from "../../components/wizard_footer"

import WizardHeader from "../../components/wizard_header"
import { useWizardModule } from "../../contexts/wizard_module-context"



// y y n Relief on Salary Arrears
// y y y Relief on Salary Arrears
// n y y Relief on Salary Arrears
// y n y Foreign Tax Relief
// n n y Foreign Tax Relief
// n n n Taxes Paid
const DeductionStart = () => {

    // const [deductionQuestionsState, setDeductionQuestionsState] = useState(deductionQuestions)
    const { deductionQuestionsState, setDeductionQuestionsState } = useWizardModule()

    // const routeOptions = ['salary_arrears', , 'foreign_tax_relief', 'taxes_paid']

    // const chosenOption = 'taxes_paid'
    // const handleValueChange = (id: number) => (value: "yes" | "no") => {
    //     setDeductionQuestionsState((prev) => {
    //         console.log("this", prev);

    //         const nextValue = prev.map((q) => {
    //             if (q.id === id) {
    //                 return { ...q, answer: value }
    //             }
    //             return q
    //         })
    //         // if three questions are answered then only set the deduction type
    //         if (nextValue.every((q) => q.answer !== undefined)) {
    //             setDeductionType(nextValue[0].answer!, nextValue[1].answer!, nextValue[2].answer!)
    //         }
    //         return nextValue
    //     })
    // }

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8  ">
            <WizardHeader />
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


                                    {deductionQuestionsState.map((q) => (
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
                                                        // onChange={handleValueChange(q.id)}
                                                        onChange={(value) => {
                                                            const updatedQuestions = deductionQuestionsState.map((question) =>
                                                                question.id === q.id ? { ...question, answer: value } : question
                                                            )
                                                            setDeductionQuestionsState(updatedQuestions)
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