"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useForm, FormProvider } from "react-hook-form"
import type { ClientRegistrationForm } from "../data/schema"
import StateDropdown from "./StateDropDown"
import CountryDropdown from "./CountryDropDown"

export default function RegistrationCard() {

    const form = useForm<ClientRegistrationForm>({
        defaultValues: {
            addrLine1Txt: "",
            addrLine2Txt: "",
            addrLine3Txt: "",
            addrLine4Txt: "",
            addrLine5Txt: "",
            residentialStatusCd: "RES",
            pinCd: "",
            countryCd: "",
            stateCd: "",
        },
    })

    const { register, watch } = form
    const values = watch()

    return (
        <FormProvider {...form}>
            <div className="max-w-4xl mx-auto bg-background border rounded-xl shadow p-8">
                <h2 className="text-2xl font-semibold mb-2">
                    Income-tax Department PAN verification process
                </h2>

                <p className="text-muted-foreground mb-6">
                    Below details are required to register you with the Income-tax Department.
                    Ensure you enter details correctly.
                </p>

                <form className="space-y-6">

                    <div>
                        <Label>Residential Status</Label>
                        <Input value={values.residentialStatusCd} disabled />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <Label>Flat/Door/Block No.</Label>
                            <Input {...register("addrLine1Txt")} />
                        </div>

                        <div>
                            <Label>Premises Building</Label>
                            <Input {...register("addrLine2Txt")} />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <Label>Street/Road</Label>
                            <Input {...register("addrLine3Txt")} />
                        </div>

                        <div>
                            <Label>Area/Locality</Label>
                            <Input {...register("addrLine4Txt")} />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <Label>Town/City/District</Label>
                            <Input {...register("addrLine5Txt")} />
                        </div>

                        <div>
                            <Label>Pin Code</Label>
                            <Input {...register("pinCd")} />
                        </div>
                    </div>

                    <CountryDropdown form={form} />
                    <StateDropdown form={form} />

                    <Button className="bg-blue-600 hover:bg-blue-700">
                        Submit
                    </Button>
                </form>
            </div>
        </FormProvider>
    )
}