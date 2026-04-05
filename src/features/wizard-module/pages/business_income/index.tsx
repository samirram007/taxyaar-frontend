import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'
import HelpSidebar from '../../components/HelpSidebar'
import WizardFooter from '../../components/wizard_footer'
import WizardHeader from '../../components/wizard_header'

const BusinessIncomePage = () => {
    return (
        <div className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
            <WizardHeader />

            <div className='mb-24 grid gap-8 lg:grid-cols-3'>
                <div className='lg:col-span-2'>
                    <div className='grid grid-cols-1 gap-6 rounded-lg bg-white shadow'>
                        <div className='grid grid-cols-1 items-start gap-6 pb-6'>
                            <div className='border-b-2 p-6 text-2xl'>Business Profession</div>

                            <div className='rounded-md border border-slate-200 bg-slate-50/70 px-6 py-8'>
                                <h2 className='mb-4 text-4xl font-medium text-slate-900'>
                                    Our Tax Experts will take it from here
                                </h2>

                                <p className='mb-6 text-lg leading-8 text-slate-800'>
                                    You indicated that you are filing a Business / Profession return. To complete this
                                    process, we provide Assisted Filing Services.
                                    <br />
                                    Our experts will contact you via live chat to gather additional information about
                                    your income and other financial statements and prepare your Income-tax return.
                                    <br />
                                    <br />
                                    Please click on "Choose Assisted Filing" button below for simplified Return Filing
                                    with the help of a Tax Expert.
                                </p>

                                <Button asChild className='bg-blue-600 hover:bg-blue-700'>
                                    <Link to='/assistance_service'>CHOOSE ASSISTED FILING SERVICES</Link>
                                </Button>
                            </div>
                        </div>

                        <WizardFooter
                            previousPageLink='/house_property'
                            previousPageName='House Property'
                            nextPageLink='/deduction_start'
                            nextPageName='Deductions Start'
                            progress={{ percentage: '38%', remaining: '11 min more' }}
                        />
                    </div>
                </div>

                <HelpSidebar />
            </div>
        </div>
    )
}

export default BusinessIncomePage