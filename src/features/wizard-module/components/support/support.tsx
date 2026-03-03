import { Card, CardContent } from "@/components/ui/card"
import { Link } from "@tanstack/react-router";
import { Headset } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";



const SupportDropDown = () => {

    return (
        <div className="bg-transparent sticky top-24">
            <Card>
                <CardContent className="p-4">
                    <div className="pb-6 border-b-2">
                        <div className="flex items-center gap-2 mb-3">
                            <FaWhatsapp className="text-green-500 text-xl" />
                            <p className="uppercase text-gray-500 font-semibold">Support</p>
                        </div>

                        <ul className="list-disc pl-5 ml-4">
                            <li>
                                <Link
                                    to="/"
                                    className="text-blue-600 text-sm hover:underline"
                                >
                                    Ask our Support Team
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="pt-4">
                        <div className="flex items-center gap-2 mb-3">
                            <Headset size={20} />
                            <p className="uppercase text-gray-500 font-semibold">Assisted Filing</p>
                        </div>

                        <div>
                            <p className="text-sm">
                                Need assistance? Let our experts     help you.
                            </p>
                            <Link className="text-blue-500" to="/">
                                Learn more
                            </Link>
                        </div>
                    </div>
                </CardContent>
            </Card>
            {/* <Link to="/" className="text-primary hover:underline text-sm mt-4 block">
                View all help articles →
            </Link> */}
        </div>
    )
}

export default SupportDropDown