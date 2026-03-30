
import HelpSidebar from '../../components/HelpSidebar'

import WizardHeader from '../../components/wizard_header'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Link } from '@tanstack/react-router'

import { Button } from '@/components/ui/button'


import {
    AlertDialog,
    AlertDialogContent,
} from "@/components/ui/alert-dialog"
import { Info } from "lucide-react"
import { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'



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

const natureOfHousePropertyOptions = [
    { key: "let_out_property", value: "Let out property", disabled: false },
    { key: "self_occupied_property", value: "Self occupied property", disabled: false },
    { key: "deemed_let_out_property", value: "Deemed Let out property", disabled: false },
]

const helpUrl = import.meta.env.VITE_HELP_URL || "https://help.taxyaar.com"
const ReliefForeignAdd = () => {
    const [showAlert, setShowAlert] = useState<string | null>(null)
    const [clickEvent, setClickEvent] = useState<boolean>(false)
    const [natureOfHouseProperty, setNatureOfHouseProperty] = useState<string>("")

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
                                    <div>Tax Deducted at Source (Other than Salary)</div>
                                    <div className='text-sm'>Enter details of your TDS (Other than Salary)</div>
                                </div>
                                <div className="space-y-1 px-6 flex flex-col items-start gap-8">
                                    <div className='w-6/12'>
                                        <Label htmlFor="nature_of_house_property" className="block text-sm font-medium text-foreground ">Nature of House Property <span className="text-red-500">*</span></Label>
                                        <Select
                                            name="nature_of_house_property"
                                            onValueChange={(value) => {
                                                setNatureOfHouseProperty(value)
                                            }}
                                        >
                                            <SelectTrigger className="w-full cursor-pointer">
                                                <SelectValue className="w-full" placeholder="--Select--" />
                                            </SelectTrigger>
                                            <SelectContent className="w-full" position="popper">

                                                {natureOfHousePropertyOptions.map((option) => (
                                                    <SelectItem key={option.key} value={option.key} disabled={option.disabled}>
                                                        {option.value}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>

                                        </Select>
                                        <div className='text-xs flex flex-row justify-between px-1'>
                                            <div className='text-gray-400'></div>
                                            <div>
                                                <Link to={helpUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                                    know more
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            {natureOfHouseProperty && (
                                <>
                                    <div className={cardClassName}>
                                        <div className='border-b-2 p-6 text-2xl'>
                                            <div className='text-sm'>Address of House Property</div>
                                        </div>

                                        <div className="space-y-1 px-6 flex flex-col items-start gap-4">
                                            <div>
                                                <Label htmlFor="name_of_property" className="block text-sm font-medium text-foreground px-1 ">
                                                    Name of Property<span className="text-red-500">*</span></Label>
                                                <div className='w-96'>

                                                    <Input
                                                        id="name_of_property"
                                                        placeholder="Name of Property"
                                                        className="mt-1 w-full"

                                                    />

                                                </div>
                                            </div>


                                            <div>
                                                <Label htmlFor="address" className="block text-sm font-medium text-foreground px-1 ">
                                                    Address<span className="text-red-500">*</span></Label>
                                                <div className='w-96'>

                                                    <Input
                                                        id="address"
                                                        placeholder="Address"
                                                        className="mt-1 w-full "
                                                    />
                                                    <div className='text-xs flex flex-row justify-between px-1'>
                                                        <div className='text-gray-400'>Maximum 50 characters allowed</div>
                                                        <div>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>


                                            <div>
                                                <Label htmlFor="city" className="block text-sm font-medium text-foreground px-1 ">
                                                    City<span className="text-red-500">*</span></Label>
                                                <div className='w-96'>

                                                    <Input
                                                        id="city"
                                                        placeholder="City"
                                                        className="mt-1 w-full "
                                                    />
                                                    <div className='text-xs flex flex-row justify-between px-1'>
                                                        <div className='text-gray-400'></div>
                                                        <div>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                            <div>
                                                <Label htmlFor="state" className="block text-sm font-medium text-foreground px-1 ">
                                                    State<span className="text-red-500">*</span></Label>
                                                <div className='w-96'>

                                                    <Input
                                                        id="state"
                                                        placeholder="State"
                                                        className="mt-1 w-full "
                                                    />
                                                    <div className='text-xs flex flex-row justify-between px-1'>
                                                        <div className='text-gray-400'></div>
                                                        <div>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                            <div>
                                                <Label htmlFor="country" className="block text-sm font-medium text-foreground px-1 ">
                                                    Country<span className="text-red-500">*</span></Label>
                                                <div className='w-96'>

                                                    <Input
                                                        id="country"
                                                        placeholder="Country"
                                                        className="mt-1 w-full "
                                                    />
                                                    <div className='text-xs flex flex-row justify-between px-1'>
                                                        <div className='text-gray-400'></div>
                                                        <div>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                            <div>
                                                <Label htmlFor="pin" className="block text-sm font-medium text-foreground px-1 ">
                                                    PIN Code / Zipcode<span className="text-red-500">*</span></Label>
                                                <div className='w-96'>

                                                    <Input
                                                        id="pin"
                                                        placeholder="PIN Code / Zipcode"
                                                        className="mt-1 w-full "
                                                    />
                                                    <div className='text-xs flex flex-row justify-between px-1'>
                                                        <div className='text-gray-400'></div>
                                                        <div>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    {
                                        ["let_out_property", 'deemed_let_out_property'].includes(natureOfHouseProperty) && (
                                            <>

                                                <div className={cardClassName}>
                                                    <div className=' p-6 text-2xl'>
                                                        <div className='text-sm'>Rental Income on House Property</div>
                                                        <div className='text-sm'>(Enter details of rent received and Municipal tax paid)</div>
                                                    </div>

                                                    <div className="space-y-1 px-6 flex flex-col items-start gap-4">
                                                        <div>
                                                            <Label htmlFor="annual_fair_market_rent" className="block text-sm font-medium text-foreground px-1 ">
                                                                {natureOfHouseProperty === "let_out_property" ? "Total amount of rent received" : "Annual Fair Market Rent Amount"}

                                                            </Label>
                                                            <div className='w-96'>

                                                                <Input
                                                                    id="annual_fair_market_rent"
                                                                    placeholder="Annual Fair Market Rent Amount"
                                                                    className="mt-1 w-full"
                                                                    defaultValue={0}

                                                                />

                                                            </div>
                                                        </div>
                                                        <div>
                                                            <Label htmlFor="municipal_tax_paid" className="block text-sm font-medium text-foreground px-1 ">
                                                                Municipal Tax Paid</Label>
                                                            <div className='w-96'>

                                                                <Input
                                                                    id="municipal_tax_paid"
                                                                    placeholder="Municipal Tax Paid"
                                                                    className="mt-1 w-full"
                                                                    defaultValue={0}

                                                                />
                                                                <div>
                                                                    <div className='text-xs flex flex-row justify-between px-1'>
                                                                        <div className='text-gray-400'>Tax paid to local authority  </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div className={cardClassName}>
                                                    <div className='pt-6 px-6 py-4 text-sm'>
                                                        <div className='text-sm'>Interest on borrowings</div>
                                                        <div className='text-sm'>(Enter details of Interest on House property loan)</div>
                                                    </div>


                                                    <div className="space-y-1 px-6 flex flex-col items-start gap-4">

                                                        <div>
                                                            <Label htmlFor="interest_on_loan" className="block text-sm font-medium text-foreground px-1 ">
                                                                Interest on loan borrowed<span className="text-red-500">*</span></Label>
                                                            <div className='w-96'>
                                                                <div className='flex flex-row items-center gap-2'>

                                                                    <Input
                                                                        id="interest_on_loan"
                                                                        placeholder="Interest on loan borrowed"

                                                                        className="mt-1 w-full "
                                                                        defaultValue={0}
                                                                        readOnly={true}
                                                                    />


                                                                </div>
                                                                <div className='text-xs flex flex-row justify-between px-1'>
                                                                    <div className='text-gray-400'>Refer Interest Certificate</div>
                                                                    <div>
                                                                        <Link to={helpUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                                                            know more
                                                                        </Link>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>


                                                    </div>


                                                </div>
                                            </>
                                        )}
                                    {["let_out_property"].includes(natureOfHouseProperty) &&
                                        (
                                            <>
                                                <div className={cardClassName}>
                                                    <div className='pt-6 px-6 py-4 text-sm'>
                                                        <div className='text-sm'>Detail of Tenants occuping Property</div>
                                                        <div className='text-sm'>(Information about Tenant / Renter / Occupant)</div>
                                                    </div>
                                                    <div className="space-y-1 px-6 flex flex-col items-start gap-6">
                                                        <div className='w-full grid grid-rows-1 gap-0 pr-6'>

                                                            <div className='grid grid-cols-[50px_1fr_1fr_100px] gap-x-4 items-center'>
                                                                <div className=''>
                                                                    <span className='text-sm font-medium text-foreground'>#</span>
                                                                </div>

                                                                <Label htmlFor="tenant_name" className="block text-sm font-medium text-foreground px-1 ">
                                                                    Name of Tenant<span className="text-red-500">*</span></Label>
                                                                <Label htmlFor="tenant_pan" className="block text-sm font-medium text-foreground px-1 ">
                                                                    Pan of Tenant<span className="text-red-500">*</span></Label>
                                                                <div></div>

                                                            </div>

                                                            <div className='grid grid-cols-[50px_1fr_1fr_100px] gap-4 items-start'>
                                                                <div className='pt-2'>
                                                                    <span className='text-sm font-medium text-foreground'>1</span>
                                                                </div>
                                                                <div className='w-full'>

                                                                    <Input
                                                                        id="tenant_name"
                                                                        placeholder="Name of Tenant"

                                                                        className="mt-1 w-full "
                                                                    />
                                                                    <div className='text-xs flex flex-row justify-between px-1'>
                                                                        <div className='text-gray-400'>A person residing in your property on rent</div>
                                                                        <div>

                                                                        </div>
                                                                    </div>

                                                                </div>
                                                                <div className='w-full'>

                                                                    <Input
                                                                        id="tenant_pan"
                                                                        placeholder="Pan of Tenant"

                                                                        className="mt-1 w-full "
                                                                    />
                                                                    <div className='text-xs flex flex-row justify-between px-1'>
                                                                        <div className='text-gray-400'>Permanent Account Number of the tenant</div>
                                                                        <div>

                                                                        </div>
                                                                    </div>

                                                                </div>
                                                                <div className='pt-1'>
                                                                    <Button className='bg-red-500 hover:bg-red-600 cursor-pointer'>
                                                                        Remove
                                                                    </Button>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div>
                                                            <div></div>
                                                            <Button className='bg-blue-500 hover:bg-blue-600 cursor-pointer'>
                                                                + ADD TENANT
                                                            </Button>
                                                        </div>

                                                    </div>
                                                </div>
                                            </>
                                        )
                                    }
                                    {["deemed_let_out_property"].includes(natureOfHouseProperty) &&
                                        (
                                            <>

                                            </>
                                        )}

                                    <div className={cardClassName}>
                                        <div className='pt-6 px-6 py-4 text-sm'>
                                            <div className='text-sm'>Arrear / Unrealized rent received</div>
                                        </div>
                                        <div className="space-y-1 px-6 flex flex-col items-start gap-4">

                                            <div>
                                                <Label htmlFor="arrear_amount_received" className="block text-sm font-medium text-foreground px-1 ">
                                                    Arrear amount received<span className="text-red-500">*</span></Label>
                                                <div className='w-96'>

                                                    <Input
                                                        id="arrear_amount_received"
                                                        placeholder="Arrear amount received"

                                                        className="mt-1 w-full "
                                                        defaultValue={0}
                                                    />
                                                    <div className='text-xs flex flex-row justify-between px-1'>
                                                        <div className='text-gray-400'>Rent of earlier years received in this year</div>
                                                        <div className='mr-8'>
                                                            <Link to={helpUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"></Link>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                    <div className={cardClassName}>
                                        <div className='pt-6 px-6 py-4 text-sm'>
                                            <div>Details of ownership in Property</div>
                                            <div className='text-sm'>(Share in property and details of co-owners)</div>
                                        </div>
                                        <div className="space-y-1 px-6 flex flex-col items-start gap-4">

                                            <div>
                                                <Label htmlFor="owenership" className="block text-sm font-medium text-foreground px-1 ">
                                                    Owenership % <span className="text-red-500">*</span></Label>
                                                <div className='w-96'>

                                                    <Input
                                                        id="owenership"
                                                        placeholder="Owenership %"

                                                        className="mt-1 w-full "
                                                        defaultValue={100}
                                                    />
                                                    <div className='text-xs flex flex-row justify-between px-1'>
                                                        <div className='text-gray-400'>Your ownership percentage</div>
                                                        <div>

                                                        </div>
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
                                                    <Link to={"/house_property"} className="text-gray-800 ">
                                                        CANCEL
                                                    </Link>
                                                </Button>
                                            </div>
                                            <div className='py-2'>
                                                <span className='text-red-500'>*</span> indicates mandatory field
                                            </div>
                                        </div>

                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                    <HelpSidebar />
                </div>
            </div >
        </>
    )
}

export default ReliefForeignAdd
