import { Button } from "@/components/ui/button";
import { Main } from "@/layouts/components/main";
import { IconUpload } from "@tabler/icons-react";

export default function Documents() {
    return (
        <Main>

            <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Documents</h1>
                    <Button variant="outline" size="sm">
                        <IconUpload className="mr-2" />
                        Upload Document
                    </Button>
                </div>
            </div>
        </Main>
    )
}