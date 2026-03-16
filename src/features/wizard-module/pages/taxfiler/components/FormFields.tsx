"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useRouter } from "@tanstack/react-router"
import { useState } from "react"
import { clientFormSchema, type ClientForm } from "../data/schema"
import { Button } from "@/components/ui/button"
import { useClientMutation } from "../data/queryOptions"
import { useQueryClient } from "@tanstack/react-query"

export default function FormFields() {
  const router = useRouter();
  const { mutate } = useClientMutation();
  const queryClient = useQueryClient();

  const [form, setForm] = useState<ClientForm>({
    pan: "",
    dob: "",
    email: "",
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "M",
    fatherName: "",
    mobileNumber: "",
  })

  const handleChange =
    (key: keyof ClientForm) =>
      (e: React.ChangeEvent<HTMLInputElement>) =>
        setForm((s) => ({ ...s, [key]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const result = clientFormSchema.safeParse(form)

    if (!result.success) {
      console.log(result.error)
      return
    }

    mutate(result.data, {
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ["clientKey"] });
        setTimeout(() => {
          router.navigate({ to: "/dashboard" });
        }, 200);
      },
    })

  }

  return (
    <div className="bg-background border border-border rounded-lg p-8 shadow shadow-gray-400">
      <h2 className="text-xl font-bold text-foreground mb-8">Add Tax Filer</h2>

      <form onSubmit={handleSubmit} className="space-y-6">

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <Label>PAN *</Label>
            <Input
              type="text"
              placeholder="ABCDE1234F"
              value={form.pan}
              onChange={handleChange("pan")}
              required
            />
          </div>

          <div>
            <Label>Date of Birth *</Label>
            <Input
              type="date"
              value={form.dob}
              onChange={handleChange("dob")}
              required
            />
          </div>
        </div>


        <div>
          <Label>Email *</Label>
          <Input
            type="email"
            value={form.email}
            onChange={handleChange("email")}
            required
          />
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          <div>
            <Label>First Name</Label>
            <Input
              value={form.firstName ?? ""}
              onChange={handleChange("firstName")}
            />
          </div>

          <div>
            <Label>Middle Name</Label>
            <Input
              value={form.middleName ?? ""}
              onChange={handleChange("middleName")}
            />
          </div>

          <div>
            <Label>Last Name *</Label>
            <Input
              value={form.lastName}
              onChange={handleChange("lastName")}
              required
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <Label>Gender *</Label>
            <Select
              value={form.gender}
              onValueChange={(value) =>
                setForm((prev) => ({
                  ...prev,
                  gender: value as "M" | "F" | "O",
                }))
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Gender" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="M">Male</SelectItem>
                <SelectItem value="F">Female</SelectItem>
                <SelectItem value="O">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Father Name *</Label>
            <Input
              value={form.fatherName}
              onChange={handleChange("fatherName")}
              required
            />
          </div>
        </div>

        {/* Mobile */}
        <div>
          <Label>Mobile Number *</Label>
          <Input
            type="tel"
            placeholder="+91XXXXXXXXXX"
            value={form.mobileNumber}
            onChange={handleChange("mobileNumber")}
            required
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-4">
          <Button
            type="button"
            className="px-6 py-2 rounded cursor-pointer border bg-gray-400 hover:bg-gray-500 border-border"
            onClick={() => router.navigate({ to: "/dashboard" })}
          >
            Cancel
          </Button>

          <Button
            type="submit"
            className="px-6 py-2 cursor-pointer rounded bg-blue-500 hover:bg-blue-600 text-white"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}