"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import BreadCrumb from "../../components/CustomBreadCrumb";
import { Button } from "@/components/ui/button";
import SupportDropDown from "../../components/support/support";
import { useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useAddClient, useValidateAddClient } from "../../data/queryOptions";
import { toast } from "sonner";

function getValidUpto(monthsToAdd: number) {

    const date = new Date();

    date.setMonth(date.getMonth() + monthsToAdd);

    // Manually format the new Date object back to 'YYYY-MM-DD'
    const year = date.getFullYear();
    // getMonth() is 0-based, so add 1 and pad with a leading '0' if necessary.
    const month = String(date.getMonth() + 1).padStart(2, '0');
    // getDate() returns the day of the month (1-31).
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}


export function DepartmentAddClientPage() {
    const [requestOtp, setRequestOtp] = useState(false);
    const router = useRouter();
    const validateClientMutation = useValidateAddClient();
    const [otp, setOtp] = useState("");
    const addClientMutation = useAddClient();

    const handleRequestOtp = () => {

        const memberData = sessionStorage.getItem("taxFilerData");
        const token = localStorage.getItem("autkn");

        if (!memberData || !token) {
            alert("Session expired. Please login again.");
            router.navigate({ to: "/dashboard" });
            return;
        }

        const parsed = JSON.parse(memberData);

        addClientMutation.mutate(
            {
                pan: parsed.pan,
                dateOfBirth: parsed.dateOfBirth,
                authToken: token
            },
            {
                onSuccess: (data) => {
                    setRequestOtp(true);
                    localStorage.setItem("transactionId", data.data.data.result.transactionId)
                },
                onError: (error) => {
                    alert(error.message);
                }
            }
        );
    };

    const handleVerifyOtp = () => {

        const memberData = sessionStorage.getItem("taxFilerData");
        const token = localStorage.getItem("autkn");
        const transactionId = localStorage.getItem("transactionId");

        console.log("", transactionId, token, memberData);

        if (!memberData || !token || !transactionId) {
            alert("Session expired. Please try again.");
            return;
        }

        const parsed = JSON.parse(memberData);

        validateClientMutation.mutate(
            {
                Pan: parsed.pan,
                transactionId: transactionId,
                Otp: otp,
                validUpto: getValidUpto(3),
                authToken: token
            },
            {
                onSuccess: (data) => {
                    if (data.data.data.result.httpStatus == "REJECTED") {
                        toast.error(data.data.data.result.errors[0].desc);
                        return;
                    }
                    const memberData = sessionStorage.getItem("taxFilerData");
                    if (memberData) {
                        const { pan } = JSON.parse(memberData);

                        const stored = localStorage.getItem("verifiedPans");
                        const verifiedMap = stored ? JSON.parse(stored) : {};

                        verifiedMap[pan] = true;

                        localStorage.setItem("verifiedPans", JSON.stringify(verifiedMap));
                    }

                    router.navigate({ to: "/dashboard_filer" });
                },
                onError: (error) => {
                    alert(error.message);
                }
            }
        );
    };

    return (
        <div className="min-h-screen">
            <BreadCrumb title="Verify User" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid lg:grid-cols-3 gap-8">

                    <div className="lg:col-span-2 space-y-6">




                        {requestOtp ? (
                            <Card className="py-6">
                                <CardHeader className="border-b-2 py-7">
                                    <CardTitle className="text-xl px-3">
                                        Income-tax Department PAN verification process
                                    </CardTitle>
                                </CardHeader>

                                <CardContent>
                                    <p className="text-sm mb-4">
                                        Please refrain from refreshing this page or pressing "BACK" button. Kindly wait for minimum of 60 seconds to receive the OTP before attempting this process again.
                                    </p>

                                    <div className="max-w-sm">
                                        <Input
                                            type="text"
                                            placeholder="Enter OTP"
                                            value={otp}
                                            onChange={(e) => setOtp(e.target.value)}
                                        />
                                    </div>
                                </CardContent>

                                <CardFooter className="flex flex-col items-start justify-start gap-3">
                                    <div className="flex items-center gap-3">
                                        <Button
                                            onClick={handleVerifyOtp}
                                            className="bg-blue-500 rounded-sm"
                                        >
                                            Submit
                                        </Button>

                                        <Button
                                            variant="outline"
                                            className="bg-orange-300"
                                            onClick={() => router.navigate({ to: "/dashboard_filer" })}
                                        >
                                            Skip and try later
                                        </Button>
                                    </div>
                                    <div>
                                        By giving consent you understand that Taxyaar can access your data available with the Income Tax Department for Income Tax Return preparation purposes or for any related status updates.
                                    </div>
                                </CardFooter>
                            </Card>
                        )
                            :
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
                                        In case you require another option to verify or receive any error in this process,
                                        we will guide you to complete it.
                                    </p>
                                </CardContent>

                                <CardFooter className="flex items-center gap-3">
                                    <Button
                                        onClick={handleRequestOtp}
                                        className="bg-blue-500 rounded-sm"
                                    >
                                        Request OTP
                                    </Button>

                                    <Button
                                        onClick={() => router.navigate({ to: "/dashboard_filer" })}
                                        className="bg-gray-200 text-gray-500 hover:bg-gray-600 cursor-pointer hover:text-gray-50 px-6 rounded-sm"
                                    >
                                        Skip for Now
                                    </Button>
                                </CardFooter>
                            </Card>

                        }

                    </div>

                    <div className="lg:col-span-1">
                        <SupportDropDown />
                    </div>

                </div>
            </div>
        </div>
    );
}