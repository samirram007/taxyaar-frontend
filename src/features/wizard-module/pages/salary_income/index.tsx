
import HelpSidebar from '../../components/HelpSidebar'

import WizardHeader from '../../components/wizard_header'
import WizardFooter from '../../components/wizard_footer'

import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

// const questions = [
//     {
//         id: 8,
//         attributeName: 'regime_type',
//         question:
//             'Under which regime you want to file?',
//         description: 'Under which regime you want to file?',
//         answer: [
//             {
//                 key: 'new',
//                 value: "New Regime",
//                 disabled: false,
//             },
//             {
//                 key: 'old',
//                 value: 'Old Regime',
//                 disabled: true,
//             },

//         ],
//     },
// ]
// const helpUrl = import.meta.env.VITE_HELP_URL || "https://help.taxyaar.com"
const SalaryIncome = () => {
    // const [questionsState /*, setQuestionsState */] = useState(questions)
    // const [answer, setAnswer] = useState(questions[0].answer[0].key)
    // const handleChange = (value: string) => {
    //     setAnswer(value)
    // }

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
                            <div className='border-b-2 p-6 text-2xl'>Salary / Pension Income</div>
                            <div className="space-y-1 px-6 flex flex-col items-center gap-4">
                                <p>Refer your Form-16 to quickly add your salary income</p>
                                <p>
                                    <Button
                                        asChild
                                        className="
  bg-violet-800 hover:bg-violet-600
  transition-all duration-200 ease-out
  hover:shadow-lg hover:-translate-y-px
  active:scale-[0.97] cursor-pointer">
                                        <Link to={"/salary_income/add"} className="text-violet-50 ">
                                            + ADD SALARY / PENSION INCOME
                                        </Link>
                                    </Button>
                                </p>
                                <p>OR</p>
                                <p>
                                    <Button
                                        asChild
                                        className="
  bg-blue-500 hover:bg-blue-600
  transition-all duration-200 ease-out
  hover:shadow-lg hover:-translate-y-px
  active:scale-[0.97] cursor-pointer">
                                        <Link to={"/salary_income/add"} className="text-violet-50 ">
                                            UPLOAD FORM-16
                                        </Link>
                                    </Button>
                                </p>
                            </div>



                        </div>
                        <WizardFooter
                            previousPageLink="/residential"
                            previousPageName="Residential Status"
                            nextPageLink="/house_property"
                            nextPageName="House Property"
                            progress={{ percentage: '7%', remaining: '16 min more' }}

                        />
                    </div>
                </div>
                <HelpSidebar />
            </div>
        </div>
    )
}

export default SalaryIncome
