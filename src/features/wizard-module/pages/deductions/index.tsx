
import HelpSidebar from '../../components/HelpSidebar'

import WizardHeader from '../../components/wizard_header'
import WizardFooter from '../../components/wizard_footer'

import { Input } from '@/components/ui/input'

import { Card, CardHeader } from '@/components/ui/card'
import { Label } from '@/components/ui/label'

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
const Deductions = () => {
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
                        className="lg:col-span-2    grid-cols-1 bg-gray-50
                    shadow rounded-lg   gap-6"
                    >
                        <div className="grid grid-cols-1 justify-center items-start gap-6 pb-6">
                            <div className='border-b-2 p-6 text-2xl'>
                                <div>Deductions</div>
                                <div className="text-sm text-muted-foreground">
                                    Deductions under Chapter VI A
                                </div>
                            </div>
                            <div className="space-y-1 px-6 flex flex-col   gap-4">
                                <p className="text-2xl text-slate-700">
                                    80CCD- Pension scheme of Central Government
                                </p>
                                <Card className="border border-gray-300 gap-2">
                                    <CardHeader>
                                        <p className="text-lg font-medium">
                                            Contribution to Retirement Benefit Pension Scheme- NPS
                                        </p>
                                    </CardHeader>

                                    <div className="px-6 py-4 grid grid-cols-1   gap-4">
                                        <div className='grid grid-cols-2'>
                                            <Label htmlFor="description_ccd80_2">Aggregate Basic Salary & DA(if so allowed)</Label>
                                            <Input type="text" name="description_ccd80_2" placeholder="Enter amount" className="mt-1" defaultValue={0} />
                                        </div>
                                        <div className='grid grid-cols-2'>
                                            <Label htmlFor="amount_80ccd_2">Amount of NPS Invested by employer</Label>
                                            <Input type="text" name="amount_80ccd_2" placeholder="Enter amount" className="mt-1" defaultValue={0} />
                                        </div>
                                        <div className='grid grid-cols-2'>
                                            <Label htmlFor="amount_80ccd">By Employer</Label>
                                            <Input type="text" name="amount_80ccd" placeholder="Enter amount" className="mt-1" defaultValue={0} />
                                        </div>
                                        <div className='grid grid-cols-2'>
                                            <Label htmlFor="amount_80ccd_deductible">Deductible Amount</Label>
                                            <Input type="text" name="amount_80ccd_deductible" placeholder="Enter amount" className="mt-1" defaultValue={0} />
                                        </div>
                                    </div>


                                </Card>



                            </div>

                            <div className="space-y-1 px-6 flex flex-col   gap-4 mt-8">
                                <div>

                                    <p className="text-2xl text-slate-700">
                                        80CCH- Agniveer Corpus Fund
                                    </p>
                                    <p>Deduction u/s 80CCH is allowed only for persons enrolled in the Agnipath Scheme, a recruitment scheme for the Indian Armed Forces.</p>
                                </div>
                                <Card className="border border-gray-300 gap-2">
                                    <CardHeader>
                                        <p className="text-lg font-medium">
                                            Contribution to Agniveer Corpus Fund
                                        </p>
                                    </CardHeader>

                                    <div className="px-6 py-4 grid grid-cols-1   gap-4">
                                        <div className='grid grid-cols-2'>
                                            <Label htmlFor="amount_80cch">Contribution to Agniveer Corpus Fund</Label>
                                            <Input type="text" name="amount_80cch" placeholder="Enter amount" className="mt-1" defaultValue={0} />
                                        </div>

                                        <div className='grid grid-cols-2'>
                                            <Label htmlFor="amount_80cch_deductible">Deductible Amount</Label>
                                            <Input type="text" name="amount_80cch_deductible" placeholder="Enter amount" className="mt-1" defaultValue={0} />
                                        </div>
                                    </div>


                                </Card>
                            </div>


                        </div>
                        <WizardFooter
                            indicatorTextLeft="Previous"
                            indicatorTextRight="Save & Next"
                            previousPageLink="/deduction_start"
                            previousPageName="Deductions Start"
                            nextPageLink="/taxes_start"
                            nextPageName="Taxes Paid"
                            progress={{ percentage: '51%', remaining: '8 min more' }}

                        />
                    </div>
                </div>
                <HelpSidebar />
            </div>
        </div>
    )
}

export default Deductions
