import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";



export default function SettingCard() {
    return (
        <>
            <Card className="max-w-4xl">
                <CardHeader className="border-b-2 py-4">
                    <CardTitle>Settings</CardTitle>
                    {/* <CardDescription>Card Description</CardDescription> */}
                    {/* <CardAction>Card Action</CardAction> */}
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
        </>
    )
}