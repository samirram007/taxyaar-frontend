import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "@tanstack/react-router";






export default function VerificationCard({ onHandleRequestOtp }: { onHandleRequestOtp: () => void }) {

    const router = useRouter();

    return (
        <>
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
                        onClick={() => onHandleRequestOtp()}
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
        </>
    )
}