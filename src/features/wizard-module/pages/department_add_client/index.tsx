"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import BreadCrumb from "../../components/CustomBreadCrumb";
import { Button } from "@/components/ui/button";
import SupportDropDown from "../../components/support/support";
import { useRouter } from "@tanstack/react-router";





export function DepartmentAddClientPage() {

    const router = useRouter();

    return (
        <div className="min-h-screen">

            <BreadCrumb title="Verify User" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">

                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <Card className="py-6">
                            <CardHeader className="border-b-2 py-7">
                                <CardTitle className="text-2xl px-3">
                                    Income-tax Department PAN verification process
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-left text-sm">
                                    Your verification with the Income-tax Department is pending.
                                    To continue filing your IT return we have to mandatorily add you as our client first.
                                    An OTP will be sent to the mobile number registered with your aadhar card.
                                    In case you require another option to verify or receive any error in this process, we will guide you complete it.
                                </p>
                            </CardContent>
                            <CardFooter className="flex items-center gap-3">
                                <Button className="bg-blue-500 rounded-sm">
                                    Request OTP
                                </Button>
                                <Button onClick={() => router.navigate({ to: "/dashboard_filer" })} className="bg-gray-200 text-gray-500 hover:bg-gray-600 cursor-pointer hover:text-gray-50 px-6 rounded-sm">
                                    Skip for Now
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                    <div className="lg:col-span-1">
                        <SupportDropDown />
                        {/* <HelpArticles slugs={[
                            "0001-tax-made-easy-series-1",
                            "0001-tax-made-easy-series-2",
                        ]} /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}