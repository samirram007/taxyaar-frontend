"use client"

import { useRouter } from "@tanstack/react-router"
import { useState } from "react"

type FormState = {
  pan: string
  dob: string
  email: string
  firstName: string
  middleName: string
  lastName: string
  gender: string
  fatherName: string
  mobile: string
}

export default function FormFields() {
  const router = useRouter()
  const [form, setForm] = useState<FormState>({
    pan: "",
    dob: "",
    email: "snehagholshal577@gmail.com",
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    fatherName: "",
    mobile: "",
  })

  const handleChange =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((s) => ({ ...s, [key]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const taxFillerData = {
      pan: form.pan,
      dob: form.dob,
      email: form.email,
      firstName: form.firstName,
      middleName: form.middleName,
      lastName: form.lastName,
      gender: form.gender,
      fatherName: form.fatherName,
      mobile: form.mobile,
      createdAt: new Date().toISOString(),
    }

    sessionStorage.setItem("taxFillerData", JSON.stringify(taxFillerData))

    router.navigate({ to: "/auth/member" })
    console.log("submit", form)
  }

  return (
    <div className="bg-background border border-border rounded-lg p-8">
      <h2 className="text-2xl font-bold text-foreground mb-8">Add Tax Filer</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              PAN <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="XXXXXXXXXX"
              value={form.pan}
              onChange={handleChange("pan")}
              className="w-full px-4 py-2 rounded border border-input bg-transparent text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              required
            />
            <p className="text-xs text-red-500 mt-1">This value is required.</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Date of Birth (dd/mm/yyyy) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="01/01/1990"
              value={form.dob}
              onChange={handleChange("dob")}
              className="w-full px-4 py-2 rounded border border-input bg-transparent text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={form.email}
            readOnly
            className="w-full px-4 py-2 rounded border border-input bg-muted text-foreground focus:outline-none"
          />
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
            <input
              type="text"
              value={form.firstName}
              onChange={handleChange("firstName")}
              className="w-full px-4 py-2 rounded border border-input bg-transparent text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Middle Name</label>
            <input
              type="text"
              value={form.middleName}
              onChange={handleChange("middleName")}
              className="w-full px-4 py-2 rounded border border-input bg-transparent text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={form.lastName}
              onChange={handleChange("lastName")}
              className="w-full px-4 py-2 rounded border border-input bg-transparent text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              required
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Gender <span className="text-red-500">*</span>
            </label>
            <select
              value={form.gender}
              onChange={handleChange("gender")}
              className="w-full px-4 py-2 rounded border border-input bg-transparent text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            >
              <option value="">--Select--</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Father Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={form.fatherName}
              onChange={handleChange("fatherName")}
              className="w-full px-4 py-2 rounded border border-input bg-transparent text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            placeholder="+91"
            value={form.mobile}
            onChange={handleChange("mobile")}
            className="w-full px-4 py-2 rounded border border-input bg-transparent text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            required
          />
          <p className="text-xs text-muted-foreground mt-1">WhatsApp number preferred - for updates to tax filing</p>
        </div>

        <div className="flex gap-4 pt-4">
          <button
            type="button"
            className="px-6 py-2 rounded border border-border text-foreground hover:bg-muted transition font-medium"
            onClick={() => router.navigate({ to: "/" })}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 rounded bg-blue-500 text-primary-foreground hover:opacity-90 transition font-medium"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
