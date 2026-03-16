import { useState } from 'react'
import HelpSidebar from '../../components/HelpSidebar'

import WizardHeader from '../../components/wizard_header'
import WizardFooter from '../../components/wizard_footer'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'

const questions = [
  {
    id: 8,
    attributeName: 'section',
    question:
      'Is this a New / First (Original) Income-tax return for the Income earned between 1st April 2024 and 31st March 2025 that you are filing this year?',
    description: '',
    answer: [
      {
        key: 'yes',
        value: 'Yes (New / Original Return)',
      },
      {
        key: 'no',
        value: "No (I'm filing a Revised Return)",
      },
    ],
  },
]

const ChooseReturnType = () => {
  const [questionsState, _setQuestionsState] = useState(questions)
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
            className="lg:col-span-2 grid grid-cols-1 bg-white
                    shadow rounded-lg   gap-6"
          >
            <div className="grid grid-cols-1 justify-center items-start gap-6 p-6">
              <div className="space-y-1">
                <div className="mt-5 space-y-8 ">
                  {questionsState.map((q) => (
                    <div key={q.id}>
                      <div className="grid grid-cols-[1fr_1fr] justify-center items-start gap-6">
                        <div key={q.id} className="space-y-1">
                          <p className="text-md ">{q.question}</p>
                        </div>
                        <div>
                          <Select
                            defaultValue={answer}
                            onValueChange={(value) => handleChange(value)}
                          >
                            <SelectTrigger className="w-full max-w-72">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              {q.answer.map((option) => (
                                <SelectItem key={option.key} value={option.key}>
                                  {option.value}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
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
            </div>
            <WizardFooter
              previousPageLink="/start"
              previousPageName="Start"
              nextPageLink="/choose_regime"
              nextPageName="Choose Regime"
            />
          </div>
        </div>
        <HelpSidebar />
      </div>
    </div>
  )
}

export default ChooseReturnType
