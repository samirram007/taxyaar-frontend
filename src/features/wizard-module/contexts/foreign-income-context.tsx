import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from 'react'

interface ForeignIncome {
  id: number
  countryName: string
  zipCode: string
  nameOfPerson: string
  addressOfPerson: string
  incomeDerived: string
  natureOfIncome: string
  incomeTaxable: string
}

interface ForeignIncomeContextType {
  incomes: ForeignIncome[]
  addIncome: (income: Omit<ForeignIncome, 'id'>) => void
  updateIncome: (id: number, income: Omit<ForeignIncome, 'id'>) => void
  deleteIncome: (id: number) => void
  getIncomeById: (id: number) => ForeignIncome | undefined
}

const ForeignIncomeContext = createContext<
  ForeignIncomeContextType | undefined
>(undefined)

export const ForeignIncomeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [incomes, setIncomes] = useState<ForeignIncome[]>([])

  const addIncome = (income: Omit<ForeignIncome, 'id'>) => {
    const newIncome: ForeignIncome = {
      ...income,
      id: Date.now(),
    }
    setIncomes([...incomes, newIncome])
  }

  const updateIncome = (id: number, updatedData: Omit<ForeignIncome, 'id'>) => {
    setIncomes(
      incomes.map((income) =>
        income.id === id ? { ...income, ...updatedData } : income,
      ),
    )
  }

  const deleteIncome = (id: number) => {
    setIncomes(incomes.filter((income) => income.id !== id))
  }

  const getIncomeById = (id: number) => {
    return incomes.find((income) => income.id === id)
  }

  return (
    <ForeignIncomeContext.Provider
      value={{
        incomes,
        addIncome,
        updateIncome,
        deleteIncome,
        getIncomeById,
      }}
    >
      {children}
    </ForeignIncomeContext.Provider>
  )
}

export const useForeignIncome = () => {
  const context = useContext(ForeignIncomeContext)
  if (!context) {
    throw new Error(
      'useForeignIncome must be used within ForeignIncomeProvider',
    )
  }
  return context
}
