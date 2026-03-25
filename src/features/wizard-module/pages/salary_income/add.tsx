
import HelpSidebar from '../../components/HelpSidebar'

import WizardHeader from '../../components/wizard_header'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Link } from '@tanstack/react-router'
import Relief89ADetails from './relief-89a-details'
import { Button } from '@/components/ui/button'


import {
    AlertDialog,
    AlertDialogContent,
} from "@/components/ui/alert-dialog"
import { Info } from "lucide-react"
import { useState } from 'react'


export function AlertDialogComponent({
    showAlert,
    setShowAlert,
}: {
    showAlert: string | null
    setShowAlert: React.Dispatch<React.SetStateAction<string | null>>
}) {
    return (
        <AlertDialog
            open={!!showAlert}
            onOpenChange={(open) => {
                if (!open) setShowAlert(null)
            }}
        >
            <AlertDialogContent className="sm:max-w-md text-center animate-[dialog-appear_0.25s_ease-out]">

                <div className="flex flex-col items-center gap-4 py-6">

                    {/* Circle animation with delay */}
                    <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-blue-300 bg-blue-50 animate-[scale-in_0.4s_ease-out_0.15s]">

                        {/* Check animation with more delay */}
                        <Info className="h-12 w-12 text-blue-400 animate-[check-pop_0.45s_ease-out_0.35s]" />

                    </div>



                    <p className="text-md text-muted-foreground">

                        <span className="font-medium text-gray-900">
                            {showAlert}
                        </span>
                    </p>

                    <Button
                        className=" mt-4
  bg-blue-500 hover:bg-blue-600
  transition-all duration-200 ease-out
  hover:shadow-lg hover:-translate-y-px
  active:scale-[0.97] cursor-pointer"
                        onClick={() => setShowAlert(null)}
                    >
                        OK
                    </Button>

                </div>

            </AlertDialogContent>
        </AlertDialog>
    )
}


const helpUrl = import.meta.env.VITE_HELP_URL || "https://help.taxyaar.com"
const SalaryIncomeAdd = () => {
    const [showAlert, setShowAlert] = useState<string | null>(null)
    const [clickEvent, setClickEvent] = useState<boolean>(false)

    const cardClassName = "bg-white grid grid-cols-1 justify-center items-start gap-6 pb-6   shadow-md rounded-lg border border-gray-200"

    const handleSaveAndProceed = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        if (clickEvent) {
            setClickEvent(false)
            return
        }

        setShowAlert(`Your TDS amount cannot be greater than your Salary Amount. You can claim max TDS upto Rs0/-`)
    }

    return (
        <>
            {showAlert && (
                <AlertDialogComponent showAlert={showAlert} setShowAlert={setShowAlert} />
            )}

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8  ">
                <WizardHeader />
                <div className="grid lg:grid-cols-3 gap-8 mb-24 ">

                    <div className="grid grid-rows-1   lg:col-span-2 ">

                        <div
                            className="lg:col-span-2 grid   grid-cols-1  gap-12  "
                        >
                            <div className={cardClassName}>
                                <div className='border-b-2 p-6 text-2xl'>
                                    <div>Enter details of the company</div>
                                    <div className='text-sm'>Enter details of the organisation where you have worked</div>
                                </div>
                                <div className="space-y-1 px-6 flex flex-col items-start gap-8">
                                    <div>
                                        <Label htmlFor="name" className="block text-sm font-medium text-foreground ">Name of Organisation/Company<span className="text-red-500">*</span></Label>
                                        <Input
                                            id="name"
                                            placeholder="e.g. Google India Pvt Ltd"
                                            className="mt-1 w-96"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="pan" className="block text-sm font-medium text-foreground ">PAN of Organisation/Company (if available)</Label>
                                        <Input
                                            id="pan"
                                            placeholder="e.g. AABCG1234D"
                                            className="mt-1 w-96"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="city" className="block text-sm font-medium text-foreground ">Town / City / District<span className="text-red-500">*</span></Label>
                                        <Input
                                            id="city"
                                            placeholder="e.g. Mumbai"
                                            className="mt-1 w-96"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="pin" className="block text-sm font-medium text-foreground ">Pin Code<span className="text-red-500">*</span></Label>
                                        <Input
                                            id="pin"
                                            placeholder="e.g. 400001"
                                            className="mt-1 w-96"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="state" className="block text-sm font-medium text-foreground ">State<span className="text-red-500">*</span></Label>
                                        <Input
                                            id="state"
                                            placeholder="e.g. Maharashtra"
                                            className="mt-1 w-96"
                                        />
                                    </div>

                                </div>

                            </div>

                            <div className={cardClassName}>
                                <div className='border-b-2 p-6 text-2xl'>
                                    <div>Salary / Pension details</div>
                                    <div className='text-sm'>Enter your Salary details as per Form-16 provided by your employer. If you are a pension holder, just enter the total pension amount received in 17(1).</div>
                                </div>
                                <div className="space-y-1 px-6 flex flex-col items-start gap-8">
                                    <div>
                                        <Label htmlFor="section_17_1" className="block text-sm font-medium text-foreground px-1 ">
                                            Salary Section 17(1)<span className="text-red-500">*</span></Label>
                                        <div className='w-96'>

                                            <Input
                                                id="section_17_1"
                                                placeholder="Salary Section 17(1) amount as per Form-16"
                                                className="mt-1 w-full"
                                                defaultValue={0}
                                            />
                                            <div className='text-xs flex flex-row justify-between px-1'>
                                                <div className='text-gray-400'>Point no.1(a) of Form-16 (Part-B)</div>
                                                <div>
                                                    <Link to={helpUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                                        Find in Form-16
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <Label htmlFor="section_17_2" className="block text-sm font-medium text-foreground px-1 ">
                                            Perquisites Section 17(2)<span className="text-red-500">*</span></Label>
                                        <div className='w-96'>

                                            <Input
                                                id="section_17_2"
                                                placeholder="Perquisites Section 17(2) amount as per Form-16"
                                                className="mt-1 w-full "
                                                defaultValue={0}

                                            />
                                            <div className='text-xs flex flex-row justify-between px-1'>
                                                <div className='text-gray-400'>Point no.1(b) of Form-16 (Part-B)</div>
                                                <div>
                                                    <Link to={helpUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                                        Find in Form-16
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <Label htmlFor="section_17_3" className="block text-sm font-medium text-foreground px-1 ">
                                            Profits in lieu of Salary Section 17(3)<span className="text-red-500">*</span></Label>
                                        <div className='w-96'>

                                            <Input
                                                id="section_17_3"
                                                placeholder="Profits in lieu of Salary Section 17(3)"
                                                className="mt-1 w-full "
                                                defaultValue={0}
                                            />
                                            <div className='text-xs flex flex-row justify-between px-1'>
                                                <div className='text-gray-400'>Point no.1(c) of Form-16 (Part-B)</div>
                                                <div>
                                                    <Link to={helpUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                                        Find in Form-16
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <Label htmlFor="gross_salary" className="block text-sm font-medium text-foreground px-1 ">
                                            Gross Salary<span className="text-red-500">*</span></Label>
                                        <div className='w-96'>

                                            <Input
                                                id="gross_salary"
                                                placeholder="Gross Salary"
                                                className="mt-1 w-full "
                                                defaultValue={0}

                                            />

                                        </div>
                                    </div>

                                    <div>
                                        <Label htmlFor="section_10" className="block text-sm font-medium text-foreground px-1 ">
                                            Allowances Exempt Under Section 10<span className="text-red-500">*</span></Label>
                                        <div className='w-96'>

                                            <Input
                                                id="section_10"
                                                placeholder="Allowances Exempt Under Section 10"
                                                className="mt-1 w-full "
                                                defaultValue={0}
                                            />
                                            <div className='text-xs flex flex-row justify-between px-1'>
                                                <div className='text-gray-400'>Point no.2 of Form-16 (Part-B)</div>
                                                <div>
                                                    <Link to={helpUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                                        Find in Form-16
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <Label htmlFor="balance" className="block text-sm font-medium text-foreground px-1 ">
                                            Balance<span className="text-red-500">*</span></Label>
                                        <div className='w-96'>

                                            <Input
                                                id="balance"
                                                placeholder="Balance"
                                                className="mt-1 w-full "
                                                defaultValue={0}
                                            />

                                        </div>
                                    </div>
                                    <div className='px-1 py-6'>
                                        <Relief89ADetails />
                                    </div>

                                    <div>
                                        <Label htmlFor="standard_deduction" className="block text-sm font-medium text-foreground px-1 ">
                                            Standard Deduction<span className="text-red-500">*</span></Label>
                                        <div className='w-96'>

                                            <Input
                                                id="standard_deduction"
                                                placeholder="Standard Deduction"
                                                className="mt-1 w-full "
                                                defaultValue={0}
                                            />
                                            <div className='text-xs flex flex-row justify-between px-1'>
                                                <div className='text-gray-400'>Point no.4(a) of Form-16 (Part-B)</div>
                                                <div>
                                                    <Link to={helpUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                                        Find in Form-16
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                    </div>


                                    <div>
                                        <Label htmlFor="income_from_salary" className="block text-sm font-medium text-foreground px-1 ">
                                            Income from Salary<span className="text-red-500">*</span></Label>
                                        <div className='w-96'>

                                            <Input
                                                id="income_from_salary"
                                                placeholder="Income from Salary"
                                                className="mt-1 w-full "
                                                defaultValue={0}
                                            />
                                            <div className='text-xs flex flex-row justify-between px-1'>
                                                <div className='text-gray-400'>Point no.6 of Form-16 (Part-B)</div>
                                                <div>
                                                    <Link to={helpUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                                        Find in Form-16
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                            </div>



                            <div className={cardClassName}>
                                <div className='border-b-2 p-6 text-2xl'>
                                    <div>TDS details</div>
                                    <div className='text-sm'>Please provide your Tax Deducted at Source (TDS) details as per the Form-16 (Part-A), provided by your employer. If you are a pension holder, simply enter the total Tax deducted amount. You can also refer your 26AS for the details.</div>
                                </div>
                                <div className="space-y-1 px-6 flex flex-col items-start gap-8">

                                    <div>
                                        <Label htmlFor="total_tds" className="block text-sm font-medium text-foreground px-1 ">
                                            Total Tax Deducted at Source <span className="text-red-500">*</span></Label>
                                        <div className='w-96'>

                                            <Input
                                                id="total_tds"
                                                placeholder="Total Tax Deducted at Source"
                                                className="mt-1 w-full "
                                                defaultValue={0}
                                            />
                                            <div className='text-xs flex flex-row justify-between px-1'>
                                                <div className='text-gray-400'>Point no.16 of Form-16 (Part-A)</div>
                                                <div>
                                                    <Link to={helpUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                                        Find in Form-16
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div>
                                        <Label htmlFor="tan_of_organisation" className="block text-sm font-medium text-foreground ">TAN of Organisation/Company<span className="text-red-500">*</span></Label>
                                        <Input
                                            id="tan_of_organisation"
                                            placeholder="e.g. Google India Pvt Ltd"
                                            className="mt-1 w-96"
                                        />
                                        <div className='text-xs flex flex-row justify-between px-1'>
                                            <div className='text-gray-400'>Point no.16 of Form-16 (Part-A)</div>
                                            <div>
                                                <Link to={helpUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                                    What is TAN?
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div className='p-6'>
                                    <div className=''>

                                        <Button type='button' className="bg-[#5e35b1] hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
                                            onClick={handleSaveAndProceed}>

                                            SAVE AND PROCEED

                                        </Button>
                                        <Button variant="outline" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded ml-4">
                                            <Link to={"/salary_income"} className="text-gray-800 ">
                                                CANCEL
                                            </Link>
                                        </Button>
                                    </div>
                                    <div className='py-2'>
                                        <span className='text-red-500'>*</span> indicates mandatory field
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <HelpSidebar />
                </div>
            </div >
        </>
    )
}

export default SalaryIncomeAdd
