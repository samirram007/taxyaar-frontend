"use client"

import { useState, useEffect, type ChangeEvent, type FormEvent } from "react"
import { Link, useRouter } from "@tanstack/react-router"

type VerifyForm = {
  residentialStatus: string
  flatNo: string
  premises: string
  street: string
  area: string
  town: string
  pin: string
  country: string
  state: string
}

export default function VerifyPan() {
  const router = useRouter()
  const [form, setForm] = useState<VerifyForm>({
    residentialStatus: "RES",
    flatNo: "",
    premises: "",
    street: "",
    area: "",
    town: "",
    pin: "",
    country: "",
    state: "",
  })

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("taxFillerData")
      if (raw) {
        const tf = JSON.parse(raw)
        setForm((s) => ({
          ...s,
          country: tf.country ?? s.country,
          state: tf.state ?? s.state,
        }))
      }
    } catch {
    }
  }, [])

  const handleChange =
    (key: keyof VerifyForm) =>
      (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
        setForm((s) => ({ ...s, [key]: e.target.value }))

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    sessionStorage.setItem("taxFilerVerification", JSON.stringify({ ...form, submittedAt: new Date().toISOString() }))
    router.navigate({ to: "/sign-in" })
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <nav className="text-sm text-slate-500">
          <Link to="/" className="text-primary hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700">Verify User</span>
        </nav>
      </div>

      <main className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid lg:grid-cols-3 gap-6">
          <section className="lg:col-span-2">
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
              <h1 className="text-xl font-semibold text-slate-800 mb-4">Income-tax Department PAN verification process</h1>
              <p className="text-sm text-slate-500 mb-6">Below details are required to register you with the Income-tax Department. Ensure you enter details correctly.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Residential Status</label>
                  <input
                    type="text"
                    aria-label="Residential Status"
                    value={form.residentialStatus}
                    onChange={handleChange("residentialStatus")}
                    className="w-full rounded border border-slate-200 px-3 py-2 bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-slate-700 mb-2">Flat/Door/Block No.</label>
                    <input
                      type="text"
                      aria-label="Flat/Door/Block No."
                      value={form.flatNo}
                      onChange={handleChange("flatNo")}
                      className="w-full rounded border border-slate-200 px-3 py-2 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-slate-700 mb-2">Premises / Building</label>
                    <input
                      type="text"
                      aria-label="Premises / Building"
                      value={form.premises}
                      onChange={handleChange("premises")}
                      className="w-full rounded border border-slate-200 px-3 py-2 bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-slate-700 mb-2">Street / Road</label>
                    <input
                      type="text"
                      aria-label="Street / Road"
                      value={form.street}
                      onChange={handleChange("street")}
                      className="w-full rounded border border-slate-200 px-3 py-2 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-slate-700 mb-2">Area / Locality</label>
                    <input
                      type="text"
                      aria-label="Area / Locality"
                      value={form.area}
                      onChange={handleChange("area")}
                      className="w-full rounded border border-slate-200 px-3 py-2 bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-slate-700 mb-2">Town / City / District</label>
                    <input
                      type="text"
                      aria-label="Town / City / District"
                      value={form.town}
                      onChange={handleChange("town")}
                      className="w-full rounded border border-slate-200 px-3 py-2 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-slate-700 mb-2">Pin Code</label>
                    <input
                      type="text"
                      aria-label="Pin Code"
                      value={form.pin}
                      onChange={handleChange("pin")}
                      className="w-full rounded border border-slate-200 px-3 py-2 bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-slate-700 mb-2">Country</label>
                    <select value={form.country} onChange={handleChange("country")} className="w-full rounded border border-slate-200 px-3 py-2 bg-white" aria-label="Country">
                      <option value="">--Select--</option>
                      <option>India</option>
                      <option>United States</option>
                      <option>United Kingdom</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-slate-700 mb-2">State</label>
                    <select value={form.state} onChange={handleChange("state")} className="w-full rounded border border-slate-200 px-3 py-2 bg-white" aria-label="State">
                      <option value="">--Select--</option>
                      <option>Andhra Pradesh</option>
                      <option>Delhi</option>
                      <option>Maharashtra</option>
                      <option>Karnataka</option>
                    </select>
                  </div>
                </div>

                <div>
                  <button type="submit" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </section>

          <aside className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-700 mb-3">SUPPORT</h3>
              <ul className="text-sm text-slate-500">
                <li className="mb-2"><a className="text-sky-600 hover:underline" href="#">Ask our Support Team</a></li>
              </ul>

              <hr className="my-4" />

              <h3 className="text-sm font-semibold text-slate-700 mb-3">ASSISTED FILING</h3>
              <p className="text-sm text-slate-500">Need assistance? Let our experts help you. <a className="text-sky-600 hover:underline" href="#">Learn more</a></p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}
