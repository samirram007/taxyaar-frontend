import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";


export function InterestHomeLoanDialog() {
    const [open, setOpen] = useState(false);

    const handleLoanTakenFromChange = (value: string) => {
        console.log("Selected loan taken from:", value);
    }
    return (
        <Dialog
            open={open}
            onOpenChange={setOpen}
        >
            <DialogTrigger>
                <span className='text-blue-500 cursor-pointer'>+add</span>
            </DialogTrigger>
            <DialogContent className="sm:max-w-6/12 space-y-6   animate-[dialog-appear_0.25s_ease-out]">
                <DialogHeader>
                    <DialogTitle>Interest on Home Loan (24B)</DialogTitle>
                    <DialogDescription>
                        Please provide details about your home loan to calculate the interest deduction.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-2 gap-2">
                        <Label htmlFor="loan_taken_from">Loan taken from Bank / Institution?</Label>
                        <Select onValueChange={handleLoanTakenFromChange}>
                            <SelectTrigger className=" cursor-pointer w-96">
                                <SelectValue placeholder="--Select--" />
                            </SelectTrigger>
                            <SelectContent className="w-96" position="popper">
                                <SelectItem value="bank">Bank</SelectItem>
                                <SelectItem value="institution">Institution</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <Label htmlFor="bankName">Name of the Bank / Institution from which the loan is taken</Label>
                        <Input id="bankName" type="text" placeholder="Enter bank/institution name" className="w-96" />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <Label htmlFor="loanAccountNumber">Loan Account Number of the Bank / Institution</Label>
                        <Input id="loanAccountNumber" type="text" placeholder="Enter loan account number" className="w-96" />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <Label htmlFor="sanctionDate">Date of Sanction of loan</Label>
                        <Input id="sanctionDate" type="date" placeholder="Enter date of sanction" className="w-96" />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <Label htmlFor="totalLoanAmount">Total amount of loan taken</Label>
                        <Input id="totalLoanAmount" type="text" placeholder="Enter total loan amount" className="w-96" defaultValue={0} />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <Label htmlFor="loanOutstanding">Loan outstanding as on 31/03/2025</Label>
                        <Input id="loanOutstanding" type="text" placeholder="Enter loan outstanding amount" className="w-96" defaultValue={0} />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <Label htmlFor="interestPaid">Interest paid on Housing Loan for this year</Label>
                        <Input id="interestPaid" type="text" placeholder="Enter interest paid amount" className="w-96" defaultValue={0} />
                    </div>
                </div>
                <DialogFooter className="pr-16">
                    <Button variant="destructive" onClick={() => setOpen(false)}>Delete</Button>
                    <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
                    <Button variant={'default'} type="submit">Calculate</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}