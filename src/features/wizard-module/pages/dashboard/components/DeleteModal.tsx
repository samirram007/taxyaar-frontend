"use client"

import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog"

import type { Client } from "../../taxfiler/data/schema"
import { useClientDestoryMutation } from "../data/queryOptions"
import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"

interface Props {
    client: Client;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function DeleteModal({ client, open, setOpen }: Props) {
    const { mutateAsync, isPending } = useClientDestoryMutation();
    const [inputText, setInputText] = useState<string>("");
    const [sumValidate, setSumValidate] = useState<boolean>(false);
    const [numa, setNumA] = useState<number>(0);
    const [numb, setNumB] = useState<number>(0);
    const [numc, setNumC] = useState<number>(0);
    const sum = numa + numb + numc;

    useEffect(() => {
        if (open) {
            setNumA(Math.floor(Math.random() * 9) + 1);
            setNumB(Math.floor(Math.random() * 9) + 1);
            setNumC(Math.floor(Math.random() * 9) + 1);
            setInputText("");
            setSumValidate(false);
        }
    }, [open]);


    const onDestroyValidationCheck = () => {
        if (Number(sum) === Number(inputText)) {
            setSumValidate(true);
        }
        else {
            toast.error("Please enter correct number");
        }
    }

    const handleDelete = async () => {
        console.log(client.pan);
        if (!client.pan) {
            toast.success("No Pan Available");
            return;
        }
        try {
            await mutateAsync(client.pan);
            setOpen(false);
        } catch (e) {
            console.error(e);
        }
    }


    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Are you sure?</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to delete your account? This action cannot be undone.
                    </DialogDescription>
                </DialogHeader>

                {
                    !sumValidate && (
                        <div className="grid grid-cols-[120px_1fr_80px] gap-2 my-3 items-center">
                            <div>
                                {numa} + {numb} + {numc} =
                            </div>
                            <Input
                                type="text"
                                value={inputText}
                                placeholder="Enter the sum"
                                onChange={(e) => setInputText(e.target.value)}
                            />
                            <Button onClick={onDestroyValidationCheck}>
                                Submit
                            </Button>
                        </div>
                    )
                }


                <DialogFooter className="gap-2">
                    <Button onClick={() => setOpen(false)} variant="outline" disabled={isPending}>
                        Cancel
                    </Button>

                    {sumValidate && (
                        <Button
                            variant="destructive"
                            onClick={handleDelete}
                            disabled={isPending}
                        >
                            {isPending && (
                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            )}
                            Delete
                        </Button>
                    )}

                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}