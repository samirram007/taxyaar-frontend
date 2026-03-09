
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { IconBrandWhatsapp } from '@tabler/icons-react'

import { Link } from '@tanstack/react-router'
import { Minus, Plus } from 'lucide-react'

import { useState } from 'react'
import ArticleDialog from './article-dialog'
import { useWizardModule } from '../../contexts/wizard_module-context'

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

    const { open: openDialog, setOpen: setOpenDialog, currentRow: selectedSlug, setCurrentRow: setSelectedSlug } = useWizardModule()

    const handleSlugClick = (slug: string) => {
        const article = helpArticles
            .flatMap((item) => item.topics)
            .find((article) => article.slug === slug);
        
        if (article) {
            setOpenDialog('article');
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




    console.log(
        helpArticles.filter((item) => item.page === page)
    )

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

                                <AccordionContent >
                                    {article.content}
                                    <span onClick={() => handleSlugClick(article.slug)} className="text-blue-500 hover:underline cursor-pointer">{article.linkText}</span>



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