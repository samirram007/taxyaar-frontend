import { YesNoToggle } from "@/components/yes-no-toggle"
import { useState } from "react"
import HelpSidebar from "../../components/HelpSidebar"



const Start = () => {
    const [salary, setSalary] = useState<"yes" | "no">("no")

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8  ">
            <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 grid grid-cols-[auto_1fr] bg-gray-50 rounded-lg p-6  gap-6">
                    <div className="grid w-3/12">
                        <img src="/images/income.png" alt="Income" width={80} height={80} />
                    </div>
                    <div className="grid grid-cols-[1fr_100px]">
                        <div>

                            <div>Help us identify the heads under which you have earned Income</div>
                            <div>
                                <p className="text-lg font-medium">
                                    Did you earn salary / pension?
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    Salary includes income earned from employment, salary pension,
                                    salary arrears
                                </p>
                            </div>
                        </div>

                        <YesNoToggle
                            value={salary}
                            onChange={setSalary}
                        />
                    </div>

                </div>

                <div className="lg:col-span-1">
                    <HelpSidebar />
                </div>
            </div>
        </div>


    )
}

export default Start