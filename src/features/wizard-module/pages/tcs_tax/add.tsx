import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Label } from '@/components/ui/label';
import { useNavigate } from '@tanstack/react-router';

const natureOfPayments = [
    { value: '', label: '--Select--' },
    { value: 'scrap', label: 'Scrap' },
    { value: 'tendu_leaves', label: 'Tendu Leaves' },
    { value: 'timber', label: 'Timber' },
    { value: 'mining', label: 'Mining & Quarrying' },
    { value: 'parking', label: 'Parking Lot' },
    { value: 'toll_plaza', label: 'Toll Plaza' },
    { value: 'mining_others', label: 'Mining (Others)' },
    // ...add more as needed
];

const years = [
    { value: '', label: 'Select Year' },
    { value: '2024', label: '2024' },
    { value: '2023', label: '2023' },
    { value: '2022', label: '2022' },
    // ...add more as needed
];

const TcsTaxAdd = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        nature: '',
        tan: '',
        name: '',
        amount: '',
        total: '',
        collectedYear: '',
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
            nature: !form.nature,
            tan: !form.tan,
            name: !form.name,
            amount: !form.amount,
            total: !form.total,
            collectedYear: !form.collectedYear,
        };
    };
    const errors = validate();
    const isError = Object.values(errors).some(Boolean);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setTouched({ nature: true, tan: true, name: true, amount: true, total: true, collectedYear: true });
        if (isError) return;
        setSubmitting(true);
        // Simulate save
        setTimeout(() => {
            setSubmitting(false);
            navigate({ to: '/tcs_tax' });
        }, 1000);
    };

    return (
        <div className="mx-auto max-w-3xl px-2 sm:px-6 lg:px-8 py-8">
            <div className="bg-white shadow rounded-lg">
                <div className="border-b-2 p-6 text-2xl font-semibold">
                    Tax Collected at Source (TCS)
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
                                            className={`w-full text-left px-4 py-2 rounded ${form.nature === opt.value ? 'bg-emerald-100 font-semibold' : 'hover:bg-gray-100'}`}
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
                            placeholder="TAN *"
                            value={form.tan}
                            onChange={e => handleChange('tan', e.target.value)}
                            onBlur={() => handleBlur('tan')}
                            className={errors.tan && touched.tan ? 'border-red-500' : ''}
                        />
                        {errors.tan && touched.tan && <div className="text-red-500 text-xs mt-1">This value is required.</div>}
                    </div>
                    {/* Name */}
                    <div>
                        <Input
                            id="name"
                            placeholder="Name *"
                            value={form.name}
                            onChange={e => handleChange('name', e.target.value)}
                            onBlur={() => handleBlur('name')}
                            className={errors.name && touched.name ? 'border-red-500' : ''}
                        />
                        {errors.name && touched.name && <div className="text-red-500 text-xs mt-1">This value is required.</div>}
                    </div>
                    {/* Amount on which tax collected */}
                    <div>
                        <Input
                            id="amount"
                            type="number"
                            placeholder="Amount on which tax collected *"
                            value={form.amount}
                            onChange={e => handleChange('amount', e.target.value)}
                            onBlur={() => handleBlur('amount')}
                            className={errors.amount && touched.amount ? 'border-red-500' : ''}
                        />
                        {errors.amount && touched.amount && <div className="text-red-500 text-xs mt-1">This value is required.</div>}
                    </div>
                    {/* Total Tax Collected */}
                    <div>
                        <Input
                            id="total"
                            type="number"
                            placeholder="Total Tax Collected *"
                            value={form.total}
                            onChange={e => handleChange('total', e.target.value)}
                            onBlur={() => handleBlur('total')}
                            className={errors.total && touched.total ? 'border-red-500' : ''}
                        />
                        {errors.total && touched.total && <div className="text-red-500 text-xs mt-1">This value is required.</div>}
                    </div>
                    {/* Collected Year (Sheet) */}
                    <div>
                        <Label htmlFor="collectedYear" className="block mb-1 font-medium">Collected Year <span className="text-red-500">*</span></Label>
                        <Sheet>
                            <SheetTrigger asChild>
                                <button
                                    type="button"
                                    id="collectedYear"
                                    className={`w-full text-left px-3 py-2 border rounded bg-white ${errors.collectedYear && touched.collectedYear ? 'border-red-500' : 'border-gray-300'} focus:outline-none`}
                                    onBlur={() => handleBlur('collectedYear')}
                                >
                                    {years.find(opt => opt.value === form.collectedYear)?.label || 'Select Year'}
                                </button>
                            </SheetTrigger>
                            <SheetContent side="bottom">
                                <SheetHeader>
                                    <SheetTitle>Select Collected Year</SheetTitle>
                                </SheetHeader>
                                <div className="flex flex-col gap-2 p-2">
                                    {years.map(opt => (
                                        <button
                                            key={opt.value}
                                            type="button"
                                            className={`w-full text-left px-4 py-2 rounded ${form.collectedYear === opt.value ? 'bg-emerald-100 font-semibold' : 'hover:bg-gray-100'}`}
                                            onClick={() => { handleChange('collectedYear', opt.value); setTouched(t => ({ ...t, collectedYear: true })); }}
                                        >
                                            {opt.label}
                                        </button>
                                    ))}
                                </div>
                            </SheetContent>
                        </Sheet>
                        {errors.collectedYear && touched.collectedYear && <div className="text-red-500 text-xs mt-1">This value is required.</div>}
                    </div>
                    {/* Buttons */}
                    <div className="flex gap-4 mt-6">
                        <Button type="button" variant="outline" className="bg-gray-100 text-gray-700" onClick={() => navigate({ to: '/tcs_tax' })}>
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

export default TcsTaxAdd;
