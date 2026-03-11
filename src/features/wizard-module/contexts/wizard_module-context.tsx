import useDialogState from '@/core/hooks/use-dialog-state'
import React, { useState } from 'react'
import type { Article, TaxFilerData } from '../data/schema'



type WizardModuleDialogType = 'article' | 'add' | 'edit' | 'delete'

interface WizardModuleContextType {
    open: WizardModuleDialogType | null
    setOpen: (str: WizardModuleDialogType | null) => void
    currentRow: Article | null
    setCurrentRow: React.Dispatch<React.SetStateAction<Article | null>>
    keyName: string 
    member: TaxFilerData | null
    setMember: React.Dispatch<React.SetStateAction<TaxFilerData | null>>
}

const WizardModuleContext = React.createContext<WizardModuleContextType | null>(null)

interface Props {
    children: React.ReactNode
}

export default function WizardModuleProvider({ children }: Props) {
    const [open, setOpen] = useDialogState<WizardModuleDialogType>(null)
    const [currentRow, setCurrentRow] = useState<Article | null>(null)
    const [member, _setMember] = useState<TaxFilerData | null>(null);
    const setMember: React.Dispatch<React.SetStateAction<TaxFilerData | null>> = (value) => {
        _setMember((prev) => {
            const nextValue = typeof value === 'function' ? value(prev) : value
            sessionStorage.setItem("taxFilerData", JSON.stringify(nextValue));
            return nextValue
        })
    }
    return (
        <WizardModuleContext.Provider value={{ open, setOpen, member, setMember, currentRow, setCurrentRow, keyName: "Wizard_modules" }}>
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
