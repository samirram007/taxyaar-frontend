import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useRouter } from "@tanstack/react-router";
import { useState } from "react";






export default function OTPCard() {

    const [otp, setOtp] = useState<string>("");
    const router = useRouter();

    return (
        <>
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
        </>
    )
}