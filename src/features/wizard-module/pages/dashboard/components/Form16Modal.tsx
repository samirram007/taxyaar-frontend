import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";



function Form16Confirmation() {
    return (
        <>
            <div className="py-4 border-b-2">
                <div className="py-6 text-center text-sm">
                    Do you wish to upload the Form-16 PDF now?
                </div>
                <div className="text-center py-4 text-sm">
                    We will try to auto read your Form-16 and populate data for finishing your return quickly.
                </div>
            </div>
        </>
    )
}


function Form16Upload() {
    return (
        <div>
            <div className="py-6 text-center text-sm">
                We will try to read your Form 16 to help you quick file
            </div>
            <div>

                <div className="py-2 grid grid-cols-2 gap-4">
                    <div>
                        <Label className="pb-2">Select Form 16 PDF</Label>
                        <Input id="picture" type="file" className="w-" />
                    </div>
                    <div>
                        <Label className="pb-2">Form-16 password (if any)</Label>
                        <Input id="picture" type="text" />
                    </div>
                </div>
            </div>
        </div>
    )
}




export function Form16Modal() {

    const [form16Upload, setForm16Upload] = useState<boolean>(false);

    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button className="bg-blue-500 hover:bg-blue-600 cursor-pointer w-full h-full py-3 text-base">
                        Upload
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Upload Form 16?</DialogTitle>
                        {
                            form16Upload ?
                                <Form16Upload />
                                :
                                <Form16Confirmation />
                        }

                        <DialogFooter className="py-3">
                            <DialogClose onClick={() => setForm16Upload(false)}>
                                <Button className="bg-gray-400 cursor-pointer hover:bg-gray-500">
                                    Skip
                                </Button>
                            </DialogClose>

                            {
                                form16Upload ?
                                    <Button className="bg-blue-500 cursor-pointer hover:bg-blue-600">
                                        Submit
                                    </Button>
                                    :
                                    <Button onClick={() => setForm16Upload(true)} className="bg-blue-500 cursor-pointer hover:bg-blue-600">
                                        Yes
                                    </Button>

                            }

                        </DialogFooter>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    )
}