import { createContext, useContext, useState, type ReactNode } from 'react'

type SalaryDetails = {
  gross_salary: number
  income_from_salary: number
  income_from_other_source: number
  net_tax_payable: number
  relief_89: number
  standard_deduction: number
  total_tds: number
}

type Form16Data = {
  assessment_year: string
  certificate_no: string
  employee_pan: string
  employer_name: string
  employer_pan: string
  employer_tan: string
  salary_details: SalaryDetails
}

type Form16ContextType = {
  form16: Form16Data | null
  setForm16: (data: Form16Data) => void
}

const Form16Context = createContext<Form16ContextType | undefined>(undefined)

export function Form16Provider({ children }: { children: ReactNode }) {
  const [form16, setForm16] = useState<Form16Data | null>(null)

  return (
    <Form16Context.Provider value={{ form16, setForm16 }}>
      {children}
    </Form16Context.Provider>
  )
}

export function useForm16() {
  const context = useContext(Form16Context)

  if (!context) {
    throw new Error('useForm16 must be used inside Form16Provider')
  }

  return context
}
