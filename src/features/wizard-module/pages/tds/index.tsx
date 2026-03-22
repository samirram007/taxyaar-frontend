import { useState } from 'react'
import HelpSidebar from '../../components/HelpSidebar'

import WizardHeader from '../../components/wizard_header'
import WizardFooter from '../../components/wizard_footer'

import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Field, FieldContent, FieldDescription, FieldLabel } from '@/components/ui/field'
import { Link } from '@tanstack/react-router'

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
const Tds = () => {
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
                            <div className='border-b-2 p-6 text-2xl'>Which tax regime have you opted for?</div>
                            <div className="space-y-1 px-6">
                                <div className="mt-5 space-y-8 ">
                                    {questionsState.map((q) => (
                                        <div key={q.id}>
                                            <div className="grid grid-cols-[1fr_1fr] justify-center items-start gap-6">
                                                <div key={q.id} className="space-y-1">
                                                    <p className="text-md ">{q.question}</p>
                                                </div>
                                                <div>
                                                    <RadioGroup value={answer} onValueChange={handleChange} className="w-fit">
                                                        {q.answer.map((a) => (
                                                            <Field key={a.key} orientation="horizontal" className='border p-2 rounded-md shadow-sm'>
                                                                <RadioGroupItem value={a.key} id={`desc-${a.key}`} disabled={a.disabled} />
                                                                <FieldContent>
                                                                    <FieldLabel htmlFor={`desc-${a.key}`} className='flex flex-col items-start'>
                                                                        {a.value}
                                                                        <FieldDescription>
                                                                            Standard spacing for most use cases.
                                                                        </FieldDescription>
                                                                    </FieldLabel>

                                                                </FieldContent>
                                                            </Field>
                                                        ))}

                                                    </RadioGroup>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    {answer === 'no' && (
                                        <div>
                                            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded">
                                                <p className="text-sm text-yellow-800">
                                                    If revised, then enter following details of Original
                                                    Return filed.:
                                                </p>
                                            </div>
                                            <div className="mt-5 mb-8 space-y-8 ">
                                                <div className="grid  grid-cols-2 gap-4">
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                        E-filing Acknowledgement No./Receipt No. *
                                                    </label>
                                                    <Input
                                                        type="text"
                                                        className="block w-10/12 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                        placeholder=""
                                                    />
                                                </div>
                                                <div className="grid  grid-cols-2 gap-4">
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                        Date of Original Return *
                                                    </label>
                                                    <Input
                                                        disabled
                                                        type="date"
                                                        className=" block w-10/12 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                        placeholder=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="mx-6 mt-6 py-4 px-8 bg-blue-50 border border-blue-200 rounded-md">
                                <p className="text-sm text-blue-900">
                                    <ul className="list-disc list-inside space-y-2">
                                        <li>New tax regime allows fewer deduction and have lower tax rates.</li>
                                        <li>Old tax regime allows all deductions and have higher tax rates.</li>
                                        <li className=' gap-2'>To read more about the two regimes please read  <Link to={helpUrl} target="_blank"
                                            rel="noopener noreferrer"
                                            className="  text-blue-500 hover:underline text-sm " >this article</Link>.
                                        </li>
                                    </ul>
                                </p>
                            </div>


                        </div>
                        <WizardFooter
                            previousPageLink="/taxes_start"
                            previousPageName="Taxes Paid"
                            nextPageLink="/other_details_start"
                            nextPageName="Other Details Start"
                            progress={{ percentage: '62%', remaining: '6 min more' }}

                        />
                    </div>
                </div>
                <HelpSidebar />
            </div>
        </div>
    )
}

export default Tds
