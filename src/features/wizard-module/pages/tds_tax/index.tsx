
import HelpSidebar from '../../components/HelpSidebar'

import WizardHeader from '../../components/wizard_header'
import WizardFooter from '../../components/wizard_footer'

import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { IconTax } from '@tabler/icons-react'

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
const TdsTax = () => {
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
                            <div className='border-b-2 p-6 text-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between'>
                                <div>
                                    Tax Deducted at Source (Other than Salary)
                                    <div className="text-sm text-muted-foreground font-normal mt-1">
                                        Enter details of your TDS (Other than Salary)
                                    </div>
                                </div>
                                <Button
                                    asChild
                                    className="bg-pink-600/80 hover:bg-pink-700/80 transition-all duration-200 ease-out hover:shadow-lg hover:-translate-y-px active:scale-[0.97] cursor-pointer px-5 py-2 text-base font-semibold mt-4 sm:mt-0"
                                >
                                    <Link to={"/tds_tax/add"} className="text-white">
                                        + ADD
                                    </Link>
                                </Button>
                            </div>
                            {/* Table */}
                            <div className="overflow-x-auto px-6 pb-6">
                                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                    <thead>
                                        <tr className="bg-gray-50 text-gray-700 text-sm">
                                            <th className="px-4 py-3 font-semibold text-left border-b">Name of Deductor</th>
                                            <th className="px-4 py-3 font-semibold text-left border-b">Section</th>
                                            <th className="px-4 py-3 font-semibold text-left border-b">TAN</th>
                                            <th className="px-4 py-3 font-semibold text-left border-b">TDS Deducted</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td colSpan={4} className="text-center text-gray-500 py-8 border-b">
                                                No record to display.
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
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

export default TdsTax
