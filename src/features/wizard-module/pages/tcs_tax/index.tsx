import WizardHeader from '../../components/wizard_header';

import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';

const TcsTax = () => {
    return (
        <div className="mx-auto max-w-4xl px-2 sm:px-6 lg:px-8 py-8">
            <WizardHeader />
            <div className="bg-white shadow rounded-lg">
                <div className="border-b-2 p-6 text-2xl font-semibold">
                    Tax Collected at Source (TCS)
                </div>
                <div className="flex flex-col items-center justify-center py-12">
                    <div className="text-gray-600 text-lg mb-6 text-center">
                        Use your TCS certificates/Form 26AS to add details
                    </div>
                    <Button
                        asChild
                        className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2 rounded font-semibold text-base shadow-sm"
                    >
                        <Link to="/tcs_tax/add">
                            + ADD TCS
                        </Link>
                    </Button>
                </div>
                <div className="border-t px-4 py-3 bg-gray-50 rounded-b-lg flex flex-col sm:flex-row items-center justify-between">
                    <div className="text-left w-full sm:w-auto mb-2 sm:mb-0">
                        <span className="text-gray-500 text-sm">Previous</span>
                        <br />
                        <Link to="/taxes_start" className="text-gray-700 text-base hover:underline">&larr; Taxes Paid</Link>
                    </div>
                    <div className="text-right w-full sm:w-auto">
                        <span className="text-gray-500 text-sm">Next</span>
                        <br />
                        <Link to="/other_details_start" className="text-emerald-700 text-base font-semibold hover:underline">Other Details Start &rarr;</Link>
                        <div className="text-xs text-gray-400 mt-1">68% completed &nbsp;•&nbsp; 5 min more</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TcsTax;
