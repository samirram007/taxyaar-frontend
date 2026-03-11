
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { IconBrandWhatsapp } from '@tabler/icons-react'

import { Link } from '@tanstack/react-router'
import { Minus, Plus } from 'lucide-react'


import { useWizardModule } from '../../contexts/wizard_module-context'
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

import { articleSlugQueryOptions } from '../../data/queryOptions'
import { useQuery } from '@tanstack/react-query'
import './render.css'

const helpUrl = import.meta.env.VITE_HELP_URL || "https://help.taxyaar.com"
const helpArticles = [
    {
        page: "dashboard",
        suppurtLink: true,
        topics: [
            {
                trigger: "How to Add or Edit a member?",
                content: "Click on \"ADD\" button or \"Edit\" option as required on dashboard page.",
                linkText: "more",
                slug: "0001-tax-made-easy-series-1"
            },
            {
                trigger: "How to enable ERI manually?",
                content: "You need to login to Income-tax portal to activate or de-activate ERI. Refer the step-wise guide",
                linkText: "more",
                slug: "0001-tax-made-easy-series-2"
            },
            {
                trigger: "How to file ITR using Taxyaar?",
                content: "Refer to our detailed guide on filing ITR using Taxyaar",
                linkText: "more",
                slug: "0001-tax-made-easy-series-3"
            }
        ]
    },

]
type HelpArticleType = {
    page: string,
}
const HelpArticles = ({ page }: HelpArticleType) => {

    const { setOpen: setOpenDialog, setCurrentRow: setSelectedSlug } = useWizardModule()

    const handleSlugClick = (slug: string) => {
        const article = helpArticles
            .flatMap((item) => item.topics)
            .find((article) => article.slug === slug);
        
        if (article) {
            setOpenDialog('add');
            setSelectedSlug({
                id: article.slug,
                title: article.trigger,
                content: article.content,
                slug: article.slug,
                linkText: article.linkText,
                page: page
            });
        }
    };



    return (
        <div className="bg-background text-muted-foreground border border-border rounded-lg p-6 sticky top-24">
            <h3 className="text-sm font-semibold  mb-4 flex items-center gap-2">
                <span>ℹ️</span> HELP ARTICLES
            </h3>
            <div className="space-y-2">


                <Accordion type="single" collapsible>
                    {helpArticles
                        .filter((item) => item.page === page)
                        .flatMap((item) => item.topics)
                        .map((article, index) => (
                            <AccordionItem key={index} value={article.slug}>
                                <AccordionTrigger className="group cursor-pointer [&>svg]:hidden ">
                                    <div className="flex w-full items-center justify-between">
                                        <span>{article.trigger}</span>

                                        <span className="relative h-4 w-4">
                                            <Plus className="absolute h-4 w-4 transition-opacity group-data-[state=open]:opacity-0" />
                                            <Minus className="absolute h-4 w-4 opacity-0 transition-opacity group-data-[state=open]:opacity-100" />
                                        </span>
                                    </div>
                                </AccordionTrigger>

                                <AccordionContent className='text-wrap  ' >
                                    <span className='mr-2'> {article.content}</span>
                                    <span onClick={() => handleSlugClick(article.slug)} className="text-blue-500 hover:underline cursor-pointer">
                                        {/* {openDialog ? 'close' : 'more'} */}
                                        {/* <ArticleDialog /> */}


                                        <Dialog >
                                            <DialogTrigger asChild>
                                                <Button variant="link" className="ml-0! pl-0! text-blue-500 hover:underline cursor-pointer">{article.linkText}</Button>
                                            </DialogTrigger>
                                            {<DialogContent className="sm:max-w-4xl  ">
                                                <DialogHeader>
                                                    <DialogTitle>Article: {article?.trigger}</DialogTitle>
                                                    {/* <DialogDescription>
                                                        This is helpful information about {article.trigger.toLowerCase()}.
                                                    </DialogDescription> */}
                                                </DialogHeader>
                                                <DialogContentComponent slug={article.slug} />
                                                <DialogFooter className="sm:justify-start hidden">
                                                    <DialogClose asChild>
                                                        <Button type="button">Close</Button>
                                                    </DialogClose>
                                                </DialogFooter>
                                            </DialogContent>}
                                        </Dialog>
                                    </span>

                                </AccordionContent>
                            </AccordionItem>
                        ))}
                </Accordion>

            </div>

            {helpArticles
                .filter((item) => item.page === page)
                .some((item) => item.suppurtLink) && (
                    <div className=" border-t border-border pt-4">
                        <div className='text-xl flex gap-2 items-center '><IconBrandWhatsapp />SUPPORT</div>

                        <Link
                            to={helpUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-4 text-blue-500 hover:underline text-sm mt-4 block">
                            View all help articles →
                        </Link>
                    </div>
                )}
        </div>
    )
}

export default HelpArticles

const DialogContentComponent = ({ slug }: { slug: string }) => {
    const { data: article } = useQuery(articleSlugQueryOptions(slug || ""))
    if (!article) {
        return null;
    }
    return (

        <div className="flex items-center gap-2">
            <div className="grid flex-1 gap-2 max-h-[80vh] overflow-y-auto">
                <section className='article-info'>
                    <div className="article-content  article-container not-prose">
                        <div className="isolate-content article-body">
                            {article && (
                                <>
                                    <h2 className="text-xl font-bold mb-4">{article.data?.title}</h2>
                                    <div dangerouslySetInnerHTML={{ __html: article.data?.content || "" }} />
                                </>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </div>

    )
}