"use client"

import { useEffect, useState } from "react"
import { useRouter } from "@tanstack/react-router"
import Breadcrumb from "../../components/CustomBreadCrumb"
import { Button } from "@/components/ui/button"

type TaxFiler = {
  pan?: string
  firstName?: string
  middleName?: string
  lastName?: string
  dob?: string
  email?: string
  gender?: string
  fatherName?: string
  mobile?: string
  createdAt?: string
}

export default function DashboardFiler() {
  const router = useRouter()
  const [taxFiler, setTaxFiler] = useState<TaxFiler | null>(null)
  const [fy, setFy] = useState<string>("2024-25")

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("taxFillerData")
      if (raw) setTaxFiler(JSON.parse(raw))
      else setTaxFiler(null)
    } catch {
      setTaxFiler(null)
    }
  }, [])

  const displayName = taxFiler
    ? `${taxFiler.firstName ?? ""} ${taxFiler.lastName ?? ""}`.trim()
    : "Tax Filer"
  const displayPan = taxFiler?.pan ?? "XXXX0000X"

  return (
    <div className="min-h-screen bg-slate-50">
      <Breadcrumb title="Dashboard" />


      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
          <div className="flex items-start justify-between gap-4 p-6">
            <div>
              <h1 className="text-lg font-semibold text-slate-800">
                Dashboard of {displayName} [{displayPan}]
                <span
                  className="ml-3 inline-block align-middle px-3 py-1 text-xs font-medium rounded-full bg-amber-100 text-amber-800 cursor-pointer"
                  onClick={() => router.navigate({ to: "/" })}
                >
                  Click to Verify
                </span>
              </h1>
              <p className="mt-3 text-slate-600 font-medium">Financial Year: <span className="text-slate-800">{fy}</span></p>
            </div>

            <div className="flex items-center gap-4">
              <label className="sr-only">Financial year</label>
              <select
                name="fy"
                aria-label="Financial year"
                value={fy}
                onChange={(e) => setFy(e.target.value)}
                className="border border-slate-200 bg-white rounded px-4 py-2 text-sm"
              >
                <option>2024-25</option>
                <option>2023-24</option>
                <option>2022-23</option>
              </select>
            </div>
          </div>

          <div className="border-t border-slate-100 p-6">
            <div className="bg-white rounded shadow-sm border border-slate-100 p-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-2">How do you want to continue?</h2>
              <p className="text-sm text-slate-500 mb-6">
                You have started preparing your tax-return but have completed 0% of your return. Click Continue to complete and file your return.
              </p>

              <div className="grid gap-6 md:grid-cols-3">

                <div className="rounded-lg border border-slate-200 bg-white p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-md bg-sky-50 flex items-center justify-center text-sky-600 font-bold">⇩</div>
                      <h3 className="text-md font-medium text-slate-800">Quick Import from ITD</h3>
                    </div>

                    <p className="mt-4 text-sm text-slate-500">
                      Enter OTP and quick file
                      <br />
                      <span className="block mt-2">• 5 minutes - 10 minutes</span>
                      <span className="block">• Easy Process. See Guide</span>
                    </p>
                  </div>

                  <div className="mt-6">
                    <Button
                      onClick={() => router.navigate({ to: "/" })}
                      className="w-full inline-flex items-center justify-center gap-2  p-6 bg-sky-600 text-white rounded hover:bg-sky-700"
                    >
                      <span>Import and Continue</span>
                    </Button>
                  </div>
                </div>


                <div className="rounded-lg border border-slate-200 bg-white p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-md bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold">↥</div>
                      <h3 className="text-md font-medium text-slate-800">Upload Form 16 and file yourself</h3>
                    </div>

                    <p className="mt-4 text-sm text-slate-500">
                      Upload Form 16 pdf and quick file
                      <br />
                      <span className="block mt-2">• 10 minutes - 15 minutes</span>
                      <span className="block">• Option to upload multiple Form 16. See Guide</span>
                    </p>
                  </div>

                  <div className="mt-6">
                    <Button
                      onClick={() => router.navigate({ to: "/" })}
                      className="w-full inline-flex items-center justify-center gap-2 p-6 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                    >
                      <span>Upload</span>
                    </Button>
                  </div>
                </div>


                <div className="rounded-lg border border-slate-200 bg-white p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-md bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold">QA</div>
                      <h3 className="text-md font-medium text-slate-800">Answer Easy Q & A and File yourself</h3>
                    </div>

                    <p className="mt-4 text-sm text-slate-500">
                      Answer simple questions and file
                      <br />
                      <span className="block mt-2">• 15 minutes - 20 minutes</span>
                      <span className="block">• Option to ask expert to review accuracy.</span>
                    </p>
                  </div>

                  <div className="mt-6">
                    <Button
                      onClick={() => router.navigate({ to: "/start" })}
                      className="p-6 w-full inline-flex items-center justify-center gap-2   bg-emerald-600 text-white rounded hover:bg-emerald-700"
                    >
                      <span>Continue..</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}