"use client"


import BreadCrumb from '../../components/CustomBreadCrumb'
import HelpSidebar from "../../components/HelpSidebar"
import FormFields from "./components/FormFields"
import type { Client } from './data/schema'


interface TaxFilerProps {
    data?: Client
}




export default function TaxFiler({ data }: TaxFilerProps) {
    return (
        <div className="min-h-screen  max-w-max mx-auto">
            {/* <div className=" bg-transparent">
                <div className="mx-auto max-w-7xl   py-3">
                    <CustomBreadcrumb title="Add Tax Filer" />
                </div>
            </div> */}
            <BreadCrumb title="Add Tax Filer" />
            <div className="mx-auto max-w-7xl  py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <FormFields data={data} />
                    </div>

                    <div className="lg:col-span-1">
                        <HelpSidebar />
                    </div>
                </div>
            </div>
        </div>
    )
}
