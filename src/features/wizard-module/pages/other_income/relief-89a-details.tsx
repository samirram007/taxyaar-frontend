import { Dialog, DialogContent, DialogFooter } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { DialogTrigger } from "@radix-ui/react-dialog"

import { countryQueryOptions } from '@/features/modules/country/data/queryOptions';
import { useQuery } from '@tanstack/react-query';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useMemo, useState } from 'react';
import type { Country } from '@/features/modules/country/data/schema';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';



const Relief89ADetails = () => {
    const { data: country } = useQuery(countryQueryOptions())

    const [open, setOpen] = useState(false);

    const countries = useMemo(() => {
        if (!country) return []
        return country?.data
    }, [country])
    const handleValueChange = (value: string) => {
        // Handle the value change here
        console.log("Selected country:", value);
    };
    if (!country) {
        return <div className="flex items-center justify-center min-h-screen">Loading...</div>
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className="text-blue-500 hover:underline text-sm cursor-pointer">
                Add Relief 89A Details
            </DialogTrigger>
            <DialogContent className='max-w-md'>

                <div className="p-6">
                    <h2 className="text-xl font-bold mb-4">Relief 89A Details</h2>
                    <p className="mb-4">
                        Relief 89A is applicable to Individuals having retirement account in foreign countries.
                    </p>
                    <p className="mb-4">
                        <Label htmlFor="country" className="block text-sm font-medium text-foreground px-1 ">Country<span className="text-red-500">*</span></Label>
                        <Select onValueChange={handleValueChange}   >
                            <SelectTrigger className="w-full cursor-pointer">
                                <SelectValue placeholder="--Select--" />
                            </SelectTrigger>

                            <SelectContent position="popper" className="w-auto max-h-60">
                                {countries.map((c: Country) => (
                                    <SelectItem key={c.id} value={c.name}>
                                        {c.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </p>
                    <p className="mb-4">
                        <Label htmlFor="amount" className="block text-sm font-medium text-foreground px-1 ">Relief Amount<span className="text-red-500">*</span></Label>
                        <Input
                            id="amount"
                            placeholder="Enter relief amount"
                            className="mt-1 w-full"
                            defaultValue={0}
                        />

                    </p>
                    <p>
                        <Label htmlFor="income_claimed" className="block text-sm font-medium text-foreground px-1 ">Income Claimed<span className="text-red-500">*</span></Label>
                        <Input
                            id="income_claimed"
                            placeholder="Enter income claimed"
                            className="mt-1 w-full"
                            defaultValue={0}
                        />
                    </p>
                </div>
                <DialogFooter className="flex justify-end p-6">
                    <Button
                        variant="outline"
                        onClick={() => setOpen(false)}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded mr-2">
                        Cancel
                    </Button>
                    <Button
                        onClick={() => setOpen(false)}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
                        Save
                    </Button>

                </DialogFooter>


            </DialogContent>
        </Dialog>
    )
}

export default Relief89ADetails