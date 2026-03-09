import { useQuery } from "@tanstack/react-query";
import { articleSlugQueryOptions } from "../../data/queryOptions";
import { Dialog, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DialogContent } from "@radix-ui/react-dialog";
import type { Article } from "../../data/schema";
interface Props {
    currentRow?: Article
    open: boolean
    onOpenChange: (open: boolean) => void
}

const ArticleDialog = (props: Props) => {
    const { currentRow, open, onOpenChange } = props;
    const { data: article, isLoading, error } = useQuery(articleSlugQueryOptions(currentRow?.slug || ""))
    //console.log(article)
    return <ShowDialog article={article} isLoading={isLoading} error={error} open={open} onOpenChange={onOpenChange} />

}

export default ArticleDialog

type ShowDialogProps = {
    article: any;
    isLoading: boolean;
    error: any;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const ShowDialog = ({ article, isLoading, error, open, onOpenChange }: ShowDialogProps) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>

            <DialogHeader>
                <DialogTitle>Article: {article?.data?.title}</DialogTitle>

            </DialogHeader>
            <DialogContent className="bg-transparent shadow-none border-0 p-0">
                <div className="bg-white p-6 rounded shadow-lg w-125">
                    {isLoading && <p>Loading...</p>}
                    {error && <p>Error loading article.</p>}
                    {article && (
                        <>
                            <h2 className="text-xl font-bold mb-4">{article.data?.title}</h2>
                            <div dangerouslySetInnerHTML={{ __html: article.data?.content || "" }} />
                        </>
                    )}
                </div>
            </DialogContent>
        </Dialog>

    )
}


