import React, { use, useEffect, useState } from 'react'
import HelpSidebar from '../../components/HelpSidebar'

import WizardHeader from '../../components/wizard_header'
import WizardFooter from '../../components/wizard_footer'

import { Input } from '@/components/ui/input'



import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { cn } from '@/lib/utils'
import { countryQueryOptions } from '@/features/modules/country/data/queryOptions'
import { useQuery } from '@tanstack/react-query'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import type { Country } from '@/features/modules/country/data/schema'
import { Label } from '@/components/ui/label'

import { Button } from '@/components/ui/button'
import { IconRowRemove } from '@tabler/icons-react'
import HelpMeDecide from './help-me-decide'



import {
    AlertDialog,
    AlertDialogContent,
} from "@/components/ui/alert-dialog"
import { Check } from "lucide-react"

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
                    <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-green-300 bg-green-50 animate-[scale-in_0.4s_ease-out_0.15s]">

                        {/* Check animation with more delay */}
                        <Check className="h-12 w-12 text-green-600 animate-[check-pop_0.45s_ease-out_0.35s]" />

                    </div>

                    <h2 className="text-lg font-semibold text-gray-900">
                        Good job!
                    </h2>

                    <p className="text-sm text-muted-foreground">
                        Your status:{" "}
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
const questions = [
    {
        id: '1',
        level: 1,
        question: 'Click on your Residential Status',
        description: 'Click on your Residential Status',
        answer: [
            {
                key: 'RES',
                value: "Indian Resident",
                isDefault: true
            },
            {
                key: 'NRI',
                value: 'Non-Resident Indian (NRI)',
                isDefault: false
            },
            {
                key: 'NOR',
                value: "Not Ordinary Resident (NOR)",
                isDefault: false
            },
            {
                key: 'HELP_ME_DECIDE',
                value: "Help me decide",
                isDefault: false,
                label: "Or we can help you decide."
            }
        ],
    },
]

export type question = {
    id: string
    level: number
    question: string
    description: string
    answer: {
        key: string
        value: string
        isDefault: boolean
        label?: string
    }[]
}
// const helpUrl = import.meta.env.VITE_HELP_URL || "https://help.taxyaar.com"
const Residential = () => {
    const [questionsState,/* setQuestionsState*/] = useState<question[]>(questions)
    const [answer, setAnswer] = useState<string>(questions[0].answer[0].key)
    const [showAlert, setShowAlert] = useState<string | null>(null)
    const [clickEvent, setClickEvent] = useState<boolean>(false)
    const handleChange = (value: string) => {
        setAnswer(value)
        setShowAlert(null)
        setClickEvent(true)


    }
    useEffect(() => {
        if (clickEvent) {
            setClickEvent(false)
            return
        }
        if (["HELP_ME_DECIDE", 'RES'].includes(answer)) {
            return
        }
        setShowAlert(`You selected ${answer === 'RES' ? 'Indian Resident' : answer === 'NRI' ? 'Non-Resident Indian (NRI)' : answer === 'NOR' ? "Not Ordinary Resident (NOR)" : "Help me decide"}`)
    }, [answer])


    return (
        <>
            {showAlert && (
                <AlertDialogComponent showAlert={showAlert} setShowAlert={setShowAlert} />
            )}

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8  ">
            <WizardHeader />
            <div className="grid lg:grid-cols-3 gap-8 mb-24">

                <div className="grid grid-rows-1   lg:col-span-2">

                    <div
                        className="lg:col-span-2    grid-cols-1 bg-white
                    shadow rounded-lg   gap-6"
                    >
                        <div className="grid grid-cols-1 justify-center items-start gap-6 pb-6">
                                <div className='border-b-2 p-6 text-2xl'>Residential Status for F.Y. 2024-25</div>

                            <div className="space-y-1 px-6">
                                <div className="mt-5 space-y-8 ">
                                    {questionsState.map((q) => (
                                        <div key={q.id}>
                                            <div className="grid grid-rows-1 grid-cols-1 justify-center items-start gap-2">
                                                <div key={q.id} className="space-y-1">
                                                    <p className="text-md ">{q.question}</p>
                                                </div>
                                                <div>
                                                    {/* Button Group */}
                                                    <ToggleGroup
                                                        value={answer}
                                                        onValueChange={(val) => handleChange(val)}
                                                        type="single"
                                                        className=" grid grid-cols-3  w-auto mt-1 space-y-4 space-x-4 "
                                                    >
                                                        {q.answer.map((option) => (
                                                            <React.Fragment key={option.key}>
                                                                {option.label && (
                                                                    <div className="col-span-3 text-sm text-muted-foreground block">
                                                                        {option.label}
                                                                    </div>
                                                                )}
                                                                <ToggleGroupItem
                                                                    key={option.key}
                                                                    value={option.key}

                                                                    className={cn("px-4 cursor-pointer bg-gray-100 data-[state=on]:bg-sky-500  text-gray-800 data-[state=on]:text-white border border-gray-300 data-[state=on]:border-sky-600 rounded-md!")}
                                                                >
                                                                    {option.value}

                                                                </ToggleGroupItem>
                                                            </React.Fragment>
                                                        ))}




                                                    </ToggleGroup>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                        {answer === 'NOR' && (
                                            <>
                                                <div>
                                                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded">
                                                        <p className="text-sm text-yellow-800">
                                                            In case you are a Citizen of India or a Person of Indian Origin (POI), please specify :
                                                        </p>
                                                    </div>
                                                    <div className="mt-5 mb-8 space-y-8 ">
                                                        <div className="grid  grid-cols-2 gap-4">
                                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                                Total period of stay in India during the previous year (in days)
                                                            </label>
                                                            <Input
                                                                type="number"
                                                                className="block w-10/12 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                                placeholder=""
                                                            />
                                                        </div>
                                                        <div className="grid  grid-cols-2 gap-4">
                                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                                Total period of stay in India during the 4 preceding years (in days)
                                                            </label>
                                                            <Input
                                                                type="number"
                                                                className=" block w-10/12 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                                placeholder=""
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div>
                                                    <p className="text-sm text-muted-foreground">
                                                        Please specify the jurisdiction(s) of residence during the previous year :
                                                    </p>
                                                    <JurisdictionList />
                                                </div>
                                            </>

                                        )}
                                        {answer === 'HELP_ME_DECIDE' && (
                                            <>
                                                <HelpMeDecide answer={answer} setAnswer={setAnswer} />
                                            </>
                                        )}
                                    </div>
                                </div>
                        </div>
                        <WizardFooter
                            previousPageLink="/choose_regime"
                            previousPageName="Choose Regime"
                            nextPageLink="/salary_income"
                            nextPageName="Salary"
                            progress={{ percentage: '3%', remaining: '17 min more' }}
                        />
                    </div>
                </div>
                <HelpSidebar />
            </div>
        </div>
        </>
    )
}

export default Residential

const JurisdictionList = () => {

    const { data: country } = useQuery(countryQueryOptions())
    if (!country) {
        return <div className="flex items-center justify-center min-h-screen">Loading...</div>
    }
    return (
        <div className="grid grid-cols-1  gap-4 mt-4">
            <JurisdictionCardList country={country?.data ?? []} />
        </div>
    )
}




const JurisdictionCardList = ({ country }: { country: Country[] }) => {
    const [nriJuridictionData, setNriJuridictionData] = useState([
        {
            index: 0,
            juridiction: "",
            tin: "",
            isDefault: true,
            isError: false
        },
    ])


    return (
        <>
            <div className="w-full grid grid-cols-[50px_1fr_1fr_50px] gap-4">
                <div></div>
                <Label htmlFor="country" className="block text-sm font-medium text-foreground ">
                    Juridiction(s) of Residence <span className="text-red-500">*</span>
                </Label>
                <Label htmlFor="tin" className="block text-sm font-medium text-foreground  ">
                    Tax Identification Number (TIN) <span className="text-red-500">*</span>
                </Label>
                <div></div>
            </div>
            {!nriJuridictionData ? (

                <div className="space-y-3">
                    <div className="h-20 rounded-md bg-muted animate-pulse"></div>
                    <div className="h-20 rounded-md bg-muted animate-pulse"></div>
                </div>

            ) : (
                nriJuridictionData.map((c, index) => (
                    <JurisdictionCard
                        key={index}
                        arrayIndex={index}
                        country={country}
                        data={c}
                        nriJuridictionData={nriJuridictionData}
                        setNriJuridictionData={setNriJuridictionData}
                    />
                ))
            )}


            <div>
                <AddJuridictionCard nriJuridictionData={nriJuridictionData} setNriJuridictionData={setNriJuridictionData} />
            </div>
        </>
    )
}

const JurisdictionCard = ({ arrayIndex, country, data, nriJuridictionData, setNriJuridictionData }: { arrayIndex: number, country: Country[], data: any, nriJuridictionData: any[], setNriJuridictionData: React.Dispatch<React.SetStateAction<any[]>> }) => {

    const handleValueChange = (value: string) => {
        const dataItem = nriJuridictionData.find((item) => item.index === data.index)
        if (!dataItem) return
        dataItem.juridiction = value
        setNriJuridictionData((prev) => prev.map((item) => item.index === data.index ? dataItem : item))
    }
    const handleDelete = () => {
        const dataItemIndex = nriJuridictionData.findIndex((item) => item.index === data.index)
        if (dataItemIndex === -1) return
        setNriJuridictionData((prev) => prev.filter((_, index) => index !== dataItemIndex))
    }
    return (
        <div key={data.index} className='w-full grid grid-cols-1 gap-6'
        >
            <div className="w-full grid grid-cols-[50px_1fr_1fr_50px] items-center gap-4">
                <div className="w-10 h-10 rounded-md bg-sky-50 flex items-center justify-center text-sky-600 font-bold">{arrayIndex + 1}</div>

                <Select onValueChange={handleValueChange} defaultValue={data.juridiction}  >
                    <SelectTrigger className="w-full cursor-pointer">
                        <SelectValue placeholder="--Select--" />
                    </SelectTrigger>

                    <SelectContent>
                        {country.map((c) => (
                            <SelectItem key={c.id} value={c.name}>
                                {c.name}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <Input id="tin" placeholder="Enter your TIN" name='tin' onChange={(e) => handleValueChange(e.target.value)} />
                <div>
                    {!data.isDefault && (
                        <Button type='button' variant={'outline'} className="text-red-500 cursor-pointer" onClick={handleDelete}>
                            <IconRowRemove size={16} className="h-4 w-4" />
                        </Button>
                    )}
                </div>
            </div>

        </div >
    )
}

const AddJuridictionCard = ({ nriJuridictionData, setNriJuridictionData }: { nriJuridictionData: any[], setNriJuridictionData: React.Dispatch<React.SetStateAction<any[]>> }) => {
    const handleClick = () => {
        setNriJuridictionData([
            ...nriJuridictionData,
            {
                id: nriJuridictionData.length + 1,
                juridiction: "",
                tin: "",
                isDefault: false,
                isError: false
            }
        ])
    }
    return (<Button type="button" variant={'outline'}
        className="cursor-pointer bg-blue-400 hover:bg-blue-400/20 text-blue-50" onClick={handleClick}>
        + Add Jurisdiction
    </Button>)
}


