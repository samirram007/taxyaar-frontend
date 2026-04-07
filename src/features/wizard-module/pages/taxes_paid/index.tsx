import WizardHeader from '../../components/wizard_header';
import WizardFooter from '../../components/wizard_footer';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';

const TaxesPaid = () => {
    return (
        <div className="mx-auto max-w-4xl px-2 sm:px-6 lg:px-8 py-8">
            <WizardHeader />
            <div className="bg-white shadow rounded-lg">
                <div className="border-b-2 p-6 text-2xl font-semibold flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        Taxes Paid
                        <div className="text-sm text-muted-foreground font-normal mt-1">
                            Enter details of Advance Tax/Self Assessment Tax paid
                        </div>
                    </div>
                    <Button
                        asChild
                        className="bg-emerald-700 hover:bg-emerald-800 text-white px-5 py-2 text-base font-semibold mt-4 sm:mt-0"
                    >
                        <Link to={"/taxes_paid/add"}>
                            + ADD
                        </Link>
                    </Button>
                </div>
                {/* Table */}
                <div className="overflow-x-auto px-6 pb-6">
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                        <thead>
                            <tr className="bg-gray-50 text-gray-700 text-sm">
                                <th className="px-4 py-3 font-semibold text-left border-b">BSR Code</th>
                                <th className="px-4 py-3 font-semibold text-left border-b">Date of Deposit</th>
                                <th className="px-4 py-3 font-semibold text-left border-b">Challan Serial No.</th>
                                <th className="px-4 py-3 font-semibold text-left border-b">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={4} className="text-center text-gray-500 py-8 border-b">
                                    No record to display.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <WizardFooter
                    previousPageLink="/other_details_start"
                    previousPageName="Other Details Start"
                    nextPageLink="/tds_tax"
                    nextPageName="TDS (Other than Salary)"
                    progress={{ percentage: '58%', remaining: '7 min more' }}
                />
            </div>
        </div>
    );
}

export default TaxesPaid
