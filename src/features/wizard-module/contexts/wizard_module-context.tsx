import useDialogState from '@/core/hooks/use-dialog-state'
import React, { useState } from 'react'
import type { Article, TaxFilerData } from '../data/schema'
import { _set } from 'zod/v4/core'
import { deductionQuestions, startQuestions } from './wizard-data'



type WizardModuleDialogType = 'article' | 'add' | 'edit' | 'delete'
type StartQuestionType = {
    id: number
    question: string
    description: string
    answer: "yes" | "no" | undefined
    optionalQuestions?: {
        id: number
        question: string
        description: string
        answer: "yes" | "no" | undefined
    }[]
}[]
type DeductionQuestionType = {
    id: number
    question: string
    description: string
    answer: "yes" | "no" | undefined
}

interface WizardModuleContextType {
    open: WizardModuleDialogType | null
    setOpen: (str: WizardModuleDialogType | null) => void
    currentRow: Article | null
    setCurrentRow: React.Dispatch<React.SetStateAction<Article | null>>
    keyName: string 
    member: TaxFilerData | null
    setMember: React.Dispatch<React.SetStateAction<TaxFilerData | null>>

    startQuestionsState: StartQuestionType
    setStartQuestionsState: React.Dispatch<React.SetStateAction<StartQuestionType>>

    deductionType: "salary_arrears" | "foreign_tax_relief" | "taxes_paid" | null

    deductionQuestionsState: DeductionQuestionType[]
    setDeductionQuestionsState: React.Dispatch<React.SetStateAction<DeductionQuestionType[]>>

    _setDeductionType: React.Dispatch<React.SetStateAction<"salary_arrears" | "foreign_tax_relief" | "taxes_paid" | null>>
    setDeductionType: (optionOne: 'yes' | 'no', optionTwo: 'yes' | 'no', optionThree: 'yes' | 'no') => void
}

const WizardModuleContext = React.createContext<WizardModuleContextType | null>(null)

interface Props {
    children: React.ReactNode
}

export default function WizardModuleProvider({ children }: Props) {
    const [open, setOpen] = useDialogState<WizardModuleDialogType>(null)
    const [currentRow, setCurrentRow] = useState<Article | null>(null)
    const [member, _setMember] = useState<TaxFilerData | null>(sessionStorage.getItem("taxFilerData") ? JSON.parse(sessionStorage.getItem("taxFilerData")!) : null);
    const setMember: React.Dispatch<React.SetStateAction<TaxFilerData | null>> = (value) => {
        _setMember((prev) => {
            const nextValue = typeof value === 'function' ? value(prev) : value
            sessionStorage.setItem("taxFilerData", JSON.stringify(nextValue));
            return nextValue
        })
    }
    const [startQuestionsState, _setStartQuestionsState] = useState<StartQuestionType>(localStorage.getItem("startQuestions") ? JSON.parse(atob(localStorage.getItem("startQuestions")!)) : startQuestions)


    const [deductionQuestionsState, _setDeductionQuestionsState] = useState<DeductionQuestionType[]>(localStorage.getItem("deductionQuestions") ? JSON.parse(atob(localStorage.getItem("deductionQuestions")!)) : deductionQuestions)

    const setStartQuestionsState: React.Dispatch<React.SetStateAction<StartQuestionType>> = (value) => {
        _setStartQuestionsState((prev) => {
            const nextValue = typeof value === 'function' ? value(prev) : value
            localStorage.setItem("startQuestions", btoa(JSON.stringify(nextValue)));
            return nextValue
        })
    }
    const setDeductionQuestionsState: React.Dispatch<React.SetStateAction<DeductionQuestionType[]>> = (value) => {
        _setDeductionQuestionsState((prev) => {
            const nextValue = typeof value === 'function' ? value(prev) : value
            localStorage.setItem("deductionQuestions", btoa(JSON.stringify(nextValue)));
            return nextValue
        })
    }
    const [deductionType, _setDeductionType] = useState<"salary_arrears" | "foreign_tax_relief" | "taxes_paid" | null>('taxes_paid');



    const setDeductionType = (optionOne: 'yes' | 'no', optionTwo: 'yes' | 'no', optionThree: 'yes' | 'no') => {


        // y y y Relief on Salary Arrears
        //         y y n Relief on Salary Arrears
        // n y y Relief on Salary Arrears
        // y n y Foreign Tax Relief
        // n n y Foreign Tax Relief
        // n n n Taxes Paid
        //console.log(optionOne, optionTwo, optionThree)
        if (optionOne === 'yes' && optionTwo === 'yes' && optionThree === 'yes') {
            _setDeductionType('salary_arrears')
        } else if (optionOne === 'yes' && optionTwo === 'yes' && optionThree === 'no') {
            _setDeductionType('salary_arrears')
        } else if (optionOne === 'no' && optionTwo === 'yes' && optionThree === 'yes') {
            _setDeductionType('salary_arrears')
        } else if (optionOne === 'yes' && optionTwo === 'no' && optionThree === 'yes') {
            _setDeductionType('foreign_tax_relief')
        } else if (optionOne === 'no' && optionTwo === 'no' && optionThree === 'yes') {
            _setDeductionType('foreign_tax_relief')
        } else if(optionOne === 'no' && optionTwo === 'yes' && optionThree === 'no') {
            _setDeductionType('salary_arrears')

        } else if (optionOne === 'no' && optionTwo === 'no' && optionThree === 'no') {
            _setDeductionType('taxes_paid')
        }
        localStorage.setItem("deductionQuestionState", JSON.stringify(deductionQuestionsState))


    }
    return (
        <WizardModuleContext.Provider value={{ open, setOpen, member, setMember, currentRow, setCurrentRow, keyName: "Wizard_modules", deductionType, _setDeductionType, setDeductionType, deductionQuestionsState, setDeductionQuestionsState, startQuestionsState, setStartQuestionsState }}>
            {children}
        </WizardModuleContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useWizardModule = () => {
    const context = React.useContext(WizardModuleContext)

    if (!context) {
        throw new Error('useWizardModule has to be used within <WizardModuleContext>')
    }

    return context
}
