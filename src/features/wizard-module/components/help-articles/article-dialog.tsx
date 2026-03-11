
import { Dialog, DialogClose, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DialogContent } from "@radix-ui/react-dialog";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";


const ArticleDialog = () => {


    // const { data: article, isLoading, error } = useQuery(articleSlugQueryOptions(currentRow?.slug || ""))
    // // if (!currentRow) {
    // //     toast.error("No article selected");
    // //     return null;
    // // }
    // console
    //     .log("article dialog", { currentRow, article, isLoading, error, open })
    return (
        <Dialog >
            <DialogTrigger asChild>
                <Button variant="link" className="text-blue-500 hover:underline cursor-pointer">more</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Share link</DialogTitle>
                    <DialogDescription>
                        Anyone who has this link will be able to view this.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center gap-2">
                    <div className="grid flex-1 gap-2">
                        <Label htmlFor="link" className="sr-only">
                            Link
                        </Label>
                        <Input
                            id="link"
                            defaultValue="https://ui.shadcn.com/docs/installation"
                            readOnly
                        />
                    </div>
                </div>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button type="button">Close</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>

    )


    // return <ShowDialog article={article} isLoading={isLoading} error={error} open={open} onOpenChange={onOpenChange} />

}

export default ArticleDialog





