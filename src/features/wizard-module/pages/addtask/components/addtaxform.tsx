"use client"

import Breadcrumb from "../../../components/CustomBreadCrumb"
import FormFields from "./FormFields"
import HelpSidebar from "./HelpSidebar"


export default function AddTaxForm() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border bg-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumb title="Add Tax Filer" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <FormFields />
          </div>

          <div className="lg:col-span-1">
            <HelpSidebar />
          </div>
        </div>
      </div>
    </div>
  )
}
