import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';


import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'


import { Button } from '@/components/ui/button'


import {
    AlertDialog,
    AlertDialogContent,
} from "@/components/ui/alert-dialog"
import { Info } from "lucide-react"
import { useState } from 'react'

const natureOfPayments = [
    { value: '', label: '--Select--' },
    { value: 'contractor', label: 'Contractor' },
    { value: 'professional', label: 'Professional Fees' },
    { value: 'rent', label: 'Rent' },
    { value: 'commission', label: 'Commission' },
    { value: 'interest', label: 'Interest' },
    // ...add more as needed
];

const sections = [
    { value: '', label: '--Select--' },
    { value: '194C', label: '194C - Contractor' },
    { value: '194J', label: '194J - Professional Fees' },
    { value: '194I', label: '194I - Rent' },
    { value: '194H', label: '194H - Commission' },
    { value: '194A', label: '194A - Interest' },
    // ...add more as needed
];

const years = [
    { value: '', label: 'Select Year' },
    { value: '2024', label: '2024' },
    { value: '2023', label: '2023' },
    { value: '2022', label: '2022' },
    // ...add more as needed
];

const TdsTaxAdd = () => {
    const [form, setForm] = useState({
        nature: '',
        tan: '',
        name: '',
        section: '',
        amount: '',
        tds: '',
        year: '',
    });
    const [touched, setTouched] = useState<{ [k: string]: boolean }>({});
    const [submitting, setSubmitting] = useState(false);
    const navigate = (window as any).navigate || (() => { });

    const handleChange = (field: string, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };
    const handleBlur = (field: string) => {
        setTouched((prev) => ({ ...prev, [field]: true }));
    };
    const validate = () => {
        return {
            nature: !form.nature,
            tan: !form.tan,
            name: !form.name,
            section: !form.section,
            amount: !form.amount,
            tds: !form.tds,
            year: !form.year,
        };
    };
    const errors = validate();
    const isError = Object.values(errors).some(Boolean);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setTouched({ nature: true, tan: true, name: true, section: true, amount: true, tds: true, year: true });
        if (isError) return;
        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false);
            navigate({ to: '/tds_tax' });
        }, 1000);
    };

    return (
        <div className="mx-auto max-w-3xl px-2 sm:px-6 lg:px-8 py-8">
            <div className="bg-white shadow rounded-lg">
                <div className="border-b-2 p-6 text-2xl font-semibold">
                    Tax Deducted at Source (Other than Salary)
                    <div className="text-base font-normal mt-1">Add New Details</div>
                </div>
                <form className="p-6 space-y-6" onSubmit={handleSubmit}>
                    {/* Nature of Payment (Sheet) */}
                    <div>
                        <Label htmlFor="nature" className="block mb-1 font-medium">Nature of Payment <span className="text-red-500">*</span></Label>
                        <Sheet>
                            <SheetTrigger asChild>
                                <button
                                    type="button"
                                    id="nature"
                                    className={`w-full text-left px-3 py-2 border rounded bg-white ${errors.nature && touched.nature ? 'border-red-500' : 'border-gray-300'} focus:outline-none`}
                                    onBlur={() => handleBlur('nature')}
                                >
                                    {natureOfPayments.find(opt => opt.value === form.nature)?.label || '--Select--'}
                                </button>
                            </SheetTrigger>
                            <SheetContent side="bottom">
                                <SheetHeader>
                                    <SheetTitle>Select Nature of Payment</SheetTitle>
                                </SheetHeader>
                                <div className="flex flex-col gap-2 p-2">
                                    {natureOfPayments.map(opt => (
                                        <button
                                            key={opt.value}
                                            type="button"
                                            className={`w-full text-left px-4 py-2 rounded ${form.nature === opt.value ? 'bg-blue-100 font-semibold' : 'hover:bg-gray-100'}`}
                                            onClick={() => { handleChange('nature', opt.value); setTouched(t => ({ ...t, nature: true })); }}
                                        >
                                            {opt.label}
                                        </button>
                                    ))}
                                </div>
                            </SheetContent>
                        </Sheet>
                        {errors.nature && touched.nature && <div className="text-red-500 text-xs mt-1">This value is required.</div>}
                    </div>
                    {/* TAN */}
                    <div>
                        <Input
                            id="tan"
                            placeholder="TAN of Deductor *"
                            value={form.tan}
                            onChange={e => handleChange('tan', e.target.value)}
                            onBlur={() => handleBlur('tan')}
                            className={errors.tan && touched.tan ? 'border-red-500' : ''}
                        />
                        {errors.tan && touched.tan && <div className="text-red-500 text-xs mt-1">This value is required.</div>}
                    </div>
                    {/* Name of Deductor */}
                    <div>
                        <Input
                            id="name"
                            placeholder="Name of Deductor *"
                            value={form.name}
                            onChange={e => handleChange('name', e.target.value)}
                            onBlur={() => handleBlur('name')}
                            className={errors.name && touched.name ? 'border-red-500' : ''}
                        />
                        {errors.name && touched.name && <div className="text-red-500 text-xs mt-1">This value is required.</div>}
                    </div>
                    {/* Section (Sheet) */}
                    <div>
                        <Label htmlFor="section" className="block mb-1 font-medium">Section <span className="text-red-500">*</span></Label>
                        <Sheet>
                            <SheetTrigger asChild>
                                <button
                                    type="button"
                                    id="section"
                                    className={`w-full text-left px-3 py-2 border rounded bg-white ${errors.section && touched.section ? 'border-red-500' : 'border-gray-300'} focus:outline-none`}
                                    onBlur={() => handleBlur('section')}
                                >
                                    {sections.find(opt => opt.value === form.section)?.label || '--Select--'}
                                </button>
                            </SheetTrigger>
                            <SheetContent side="bottom">
                                <SheetHeader>
                                    <SheetTitle>Select Section</SheetTitle>
                                </SheetHeader>
                                <div className="flex flex-col gap-2 p-2">
                                    {sections.map(opt => (
                                        <button
                                            key={opt.value}
                                            type="button"
                                            className={`w-full text-left px-4 py-2 rounded ${form.section === opt.value ? 'bg-blue-100 font-semibold' : 'hover:bg-gray-100'}`}
                                            onClick={() => { handleChange('section', opt.value); setTouched(t => ({ ...t, section: true })); }}
                                        >
                                            {opt.label}
                                        </button>
                                    ))}
                                </div>
                            </SheetContent>
                        </Sheet>
                        {errors.section && touched.section && <div className="text-red-500 text-xs mt-1">This value is required.</div>}
                    </div>
                    {/* Amount Paid/Credited */}
                    <div>
                        <Input
                            id="amount"
                            type="number"
                            placeholder="Amount Paid/Credited *"
                            value={form.amount}
                            onChange={e => handleChange('amount', e.target.value)}
                            onBlur={() => handleBlur('amount')}
                            className={errors.amount && touched.amount ? 'border-red-500' : ''}
                        />
                        {errors.amount && touched.amount && <div className="text-red-500 text-xs mt-1">This value is required.</div>}
                    </div>
                    {/* TDS Deducted */}
                    <div>
                        <Input
                            id="tds"
                            type="number"
                            placeholder="TDS Deducted *"
                            value={form.tds}
                            onChange={e => handleChange('tds', e.target.value)}
                            onBlur={() => handleBlur('tds')}
                            className={errors.tds && touched.tds ? 'border-red-500' : ''}
                        />
                        {errors.tds && touched.tds && <div className="text-red-500 text-xs mt-1">This value is required.</div>}
                    </div>
                    {/* Year (Sheet) */}
                    <div>
                        <Label htmlFor="year" className="block mb-1 font-medium">Year <span className="text-red-500">*</span></Label>
                        <Sheet>
                            <SheetTrigger asChild>
                                <button
                                    type="button"
                                    id="year"
                                    className={`w-full text-left px-3 py-2 border rounded bg-white ${errors.year && touched.year ? 'border-red-500' : 'border-gray-300'} focus:outline-none`}
                                    onBlur={() => handleBlur('year')}
                                >
                                    {years.find(opt => opt.value === form.year)?.label || 'Select Year'}
                                </button>
                            </SheetTrigger>
                            <SheetContent side="bottom">
                                <SheetHeader>
                                    <SheetTitle>Select Year</SheetTitle>
                                </SheetHeader>
                                <div className="flex flex-col gap-2 p-2">
                                    {years.map(opt => (
                                        <button
                                            key={opt.value}
                                            type="button"
                                            className={`w-full text-left px-4 py-2 rounded ${form.year === opt.value ? 'bg-blue-100 font-semibold' : 'hover:bg-gray-100'}`}
                                            onClick={() => { handleChange('year', opt.value); setTouched(t => ({ ...t, year: true })); }}
                                        >
                                            {opt.label}
                                        </button>
                                    ))}
                                </div>
                            </SheetContent>
                        </Sheet>
                        {errors.year && touched.year && <div className="text-red-500 text-xs mt-1">This value is required.</div>}
                    </div>
                    {/* Buttons */}
                    <div className="flex gap-4 mt-6">
                        <Button type="button" variant="outline" className="bg-gray-100 text-gray-700" onClick={() => navigate({ to: '/tds_tax' })}>
                            CANCEL
                        </Button>
                        <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6" disabled={submitting}>
                            SAVE
                        </Button>
                    </div>
                    <div className="text-xs text-gray-500 mt-2">* indicates mandatory field</div>
                </form>
            </div>
        </div>
    );
};

export default TdsTaxAdd



export function AlertDialogComponent({
    showAlert,
    setShowAlert,
}: {
    showAlert: string | null
    setShowAlert: React.Dispatch<React.SetStateAction<string | null>>
}) {
    return (
        <AlertDialog
            open={!!showAlert}
            onOpenChange={(open) => {
                if (!open) setShowAlert(null)
            }}
        >
            <AlertDialogContent className="sm:max-w-md text-center animate-[dialog-appear_0.25s_ease-out]">

                <div className="flex flex-col items-center gap-4 py-6">

                    {/* Circle animation with delay */}
                    <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-blue-300 bg-blue-50 animate-[scale-in_0.4s_ease-out_0.15s]">

                        {/* Check animation with more delay */}
                        <Info className="h-12 w-12 text-blue-400 animate-[check-pop_0.45s_ease-out_0.35s]" />

                    </div>



                    <p className="text-md text-muted-foreground">

                        <span className="font-medium text-gray-900">
                            {showAlert}
                        </span>
                    </p>

                    <Button
                        className=" mt-4
  bg-blue-500 hover:bg-blue-600
  transition-all duration-200 ease-out
  hover:shadow-lg hover:-translate-y-px
  active:scale-[0.97] cursor-pointer"
                        onClick={() => setShowAlert(null)}
                    >
                        OK
                    </Button>

                </div>

            </AlertDialogContent>
        </AlertDialog>
    )
}

