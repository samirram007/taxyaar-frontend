import { Button } from "@/components/ui/button";
import CustomBreadcrumb from "@/features/wizard-module/components/CustomBreadCrumb";
import { useRouter } from "@tanstack/react-router";
import type { ClientList } from "../../taxfiler/data/schema";
import MemeberList from "./MemberList";
import HelpArticles from "@/features/wizard-module/components/help-articles";





export default function MemberCard({ clientList }: { clientList: ClientList }) {
    const router = useRouter();
    return (
        <div className="min-h-screen   max-w-max mx-auto">
            <CustomBreadcrumb title="Members" />
            <div className="mx-auto max-w-7xl  py-8">
                <div className="grid lg:grid-cols-3 gap-8">

                    <div className="lg:col-span-2">
                        <div className="bg-background border border-border rounded-lg py-8">
                            <div className="mb-8 grid grid-cols-[1fr_100px] gap-4 items-center 
                            border-b border-border pb-4 px-2 md:px-8">
                                <div className="">

                                    <h2 className="text-xl font-bold text-foreground mb-2">Click on a name to continue</h2>
                                    <p className="text-sm text-muted-foreground">
                                        Click on any of the Tax Filers listed below to start using our services. You may click on "Add" button
                                        on the right to add a new Tax Filer.
                                    </p>
                                </div>
                                <div className="h-full flex items-start justify-start md:justify-end">
                                    <Button
                                        onClick={() => router.navigate({ to: "/assessee/add" })}
                                        className="ml-auto w-full md:px-4 py-2 rounded bg-blue-100 text-blue-500 cursor-pointer hover:bg-blue-200 transition hover:opacity-90 font-medium"
                                    >
                                        Add
                                    </Button>
                                </div>
                            </div>
                            <MemeberList clientList={clientList} />
                        </div>
                    </div>
                    <div className="lg:col-span-1">
                        <HelpArticles page="dashboard" />
                    </div>
                </div>
            </div>
        </div>
    )
}