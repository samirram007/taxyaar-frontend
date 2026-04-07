import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Label } from '@/components/ui/label';
import { useNavigate } from '@tanstack/react-router';


const modeOfPayments = [
    { value: '', label: '-- Select --' },
    { value: 'cash', label: 'Cash' },
    { value: 'cheque', label: 'Cheque' },
    { value: 'online', label: 'Online/Net Banking' },
    // ...add more as needed
];

const years = [
    { value: '', label: 'Select Year' },
    { value: '2024', label: '2024' },
    { value: '2023', label: '2023' },
    { value: '2022', label: '2022' },
    // ...add more as needed
];

const TaxesPaidAdd = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        bank: '',
        branch: '',
        mode: '',
        bsr: '',
        challan: '',
        date: '',
        amount: '',
        year: '',
    });
    const [touched, setTouched] = useState<{ [k: string]: boolean }>({});
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (field: string, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };
    const handleBlur = (field: string) => {
        setTouched((prev) => ({ ...prev, [field]: true }));
    };
    const validate = () => {
        return {
            bank: !form.bank,
            branch: !form.branch,
            mode: !form.mode,
            bsr: !form.bsr,
            challan: !form.challan,
            date: !form.date,
            amount: !form.amount,
            year: !form.year,
        };
    };
    const errors = validate();
    const isError = Object.values(errors).some(Boolean);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setTouched({ bank: true, branch: true, mode: true, bsr: true, challan: true, date: true, amount: true, year: true });
        if (isError) return;
        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false);
            navigate({ to: '/taxes_paid' });
        }, 1000);
    };

    return (
        <div className="mx-auto max-w-3xl px-2 sm:px-6 lg:px-8 py-8">
            <div className="bg-white shadow rounded-lg">
                <div className="border-b-2 p-6 text-2xl font-semibold">
                    Taxes Paid
                    <div className="text-base font-normal mt-1">Add New Details</div>
                </div>
                <form className="p-6 space-y-6" onSubmit={handleSubmit}>
                    {/* Name of Bank */}
                    <div>
                        <Input
                            id="bank"
                            placeholder="Name of Bank"
                            value={form.bank}
                            onChange={e => handleChange('bank', e.target.value)}
                            onBlur={() => handleBlur('bank')}
                            className={errors.bank && touched.bank ? 'border-red-500' : ''}
                        />
                        {errors.bank && touched.bank && <div className="text-red-500 text-xs mt-1">This value is required.</div>}
                    </div>
                    {/* Name of Branch */}
                    <div>
                        <Input
                            id="branch"
                            placeholder="Name of the Branch"
                            value={form.branch}
                            onChange={e => handleChange('branch', e.target.value)}
                            onBlur={() => handleBlur('branch')}
                            className={errors.branch && touched.branch ? 'border-red-500' : ''}
                        />
                        {errors.branch && touched.branch && <div className="text-red-500 text-xs mt-1">This value is required.</div>}
                    </div>
                    {/* Mode of Payment (Sheet) */}
                    <div>
                        <Label htmlFor="mode" className="block mb-1 font-medium">Mode of Payment <span className="text-red-500">*</span></Label>
                        <Sheet>
                            <SheetTrigger asChild>
                                <button
                                    type="button"
                                    id="mode"
                                    className={`w-full text-left px-3 py-2 border rounded bg-white ${errors.mode && touched.mode ? 'border-red-500' : 'border-gray-300'} focus:outline-none`}
                                    onBlur={() => handleBlur('mode')}
                                >
                                    {modeOfPayments.find(opt => opt.value === form.mode)?.label || '-- Select --'}
                                </button>
                            </SheetTrigger>
                            <SheetContent side="bottom">
                                <SheetHeader>
                                    <SheetTitle>Select Mode of Payment</SheetTitle>
                                </SheetHeader>
                                <div className="flex flex-col gap-2 p-2">
                                    {modeOfPayments.map(opt => (
                                        <button
                                            key={opt.value}
                                            type="button"
                                            className={`w-full text-left px-4 py-2 rounded ${form.mode === opt.value ? 'bg-emerald-100 font-semibold' : 'hover:bg-gray-100'}`}
                                            onClick={() => { handleChange('mode', opt.value); setTouched(t => ({ ...t, mode: true })); }}
                                        >
                                            {opt.label}
                                        </button>
                                    ))}
                                </div>
                            </SheetContent>
                        </Sheet>
                        {errors.mode && touched.mode && <div className="text-red-500 text-xs mt-1">This value is required.</div>}
                    </div>
                    {/* BSR Code */}
                    <div>
                        <Input
                            id="bsr"
                            placeholder="BSR Code *"
                            value={form.bsr}
                            onChange={e => handleChange('bsr', e.target.value)}
                            onBlur={() => handleBlur('bsr')}
                            className={errors.bsr && touched.bsr ? 'border-red-500' : ''}
                        />
                        <div className="flex justify-between text-xs text-gray-400 mt-1">
                            <span>Refer Challan</span>
                            <a href="#" className="text-blue-600 hover:underline">Know more</a>
                        </div>
                        {errors.bsr && touched.bsr && <div className="text-red-500 text-xs mt-1">This value is required.</div>}
                    </div>
                    {/* Challan Serial No. */}
                    <div>
                        <Input
                            id="challan"
                            placeholder="Challan Serial No. *"
                            value={form.challan}
                            onChange={e => handleChange('challan', e.target.value)}
                            onBlur={() => handleBlur('challan')}
                            className={errors.challan && touched.challan ? 'border-red-500' : ''}
                        />
                        <div className="flex justify-between text-xs text-gray-400 mt-1">
                            <span>Refer Challan</span>
                            <a href="#" className="text-blue-600 hover:underline">Know more</a>
                        </div>
                        {errors.challan && touched.challan && <div className="text-red-500 text-xs mt-1">This value is required.</div>}
                    </div>
                    {/* Date of Payment */}
                    <div>
                        <Input
                            id="date"
                            type="date"
                            placeholder="Date of Payment *"
                            value={form.date}
                            onChange={e => handleChange('date', e.target.value)}
                            onBlur={() => handleBlur('date')}
                            className={errors.date && touched.date ? 'border-red-500' : ''}
                        />
                        {errors.date && touched.date && <div className="text-red-500 text-xs mt-1">This value is required.</div>}
                    </div>
                    {/* Amount */}
                    <div>
                        <Input
                            id="amount"
                            type="number"
                            placeholder="Amount *"
                            value={form.amount}
                            onChange={e => handleChange('amount', e.target.value)}
                            onBlur={() => handleBlur('amount')}
                            className={errors.amount && touched.amount ? 'border-red-500' : ''}
                        />
                        {errors.amount && touched.amount && <div className="text-red-500 text-xs mt-1">This value is required.</div>}
                    </div>
                    {/* Buttons */}
                    <div className="flex gap-4 mt-6">
                        <Button type="button" variant="outline" className="bg-gray-100 text-gray-700" onClick={() => navigate({ to: '/taxes_paid' })}>
                            CANCEL
                        </Button>
                        <Button type="submit" className="bg-emerald-700 hover:bg-emerald-800 text-white px-6" disabled={submitting}>
                            SAVE
                        </Button>
                    </div>
                    <div className="text-xs text-gray-500 mt-2">* indicates mandatory field</div>
                </form>
            </div>
        </div>
    );
};

export default TaxesPaidAdd;
