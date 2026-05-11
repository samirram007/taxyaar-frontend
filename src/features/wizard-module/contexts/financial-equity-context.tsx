import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from 'react'

interface FinancialEquity {
  id: number
  countryName: string
  zipCode: string
  natureOfEntity: string
  nameOfEntity: string
  addressOfEntity: string
  dateOfAcquisition: string
  initialValue: string
  peakValue: string
  closingBalance: string
  totalGrossAmountPaid: string
  totalGrossProceeds: string
}

interface FinancialEquityContextType {
  equities: FinancialEquity[]
  addEquity: (equity: Omit<FinancialEquity, 'id'>) => void
  updateEquity: (id: number, equity: Omit<FinancialEquity, 'id'>) => void
  deleteEquity: (id: number) => void
  getEquityById: (id: number) => FinancialEquity | undefined
}

const FinancialEquityContext = createContext<
  FinancialEquityContextType | undefined
>(undefined)

export const FinancialEquityProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [equities, setEquities] = useState<FinancialEquity[]>([])

  const addEquity = (equity: Omit<FinancialEquity, 'id'>) => {
    const newEquity: FinancialEquity = {
      ...equity,
      id: Date.now(),
    }
    setEquities([...equities, newEquity])
  }

  const updateEquity = (
    id: number,
    updatedData: Omit<FinancialEquity, 'id'>,
  ) => {
    setEquities(
      equities.map((equity) =>
        equity.id === id ? { ...equity, ...updatedData } : equity,
      ),
    )
  }

  const deleteEquity = (id: number) => {
    setEquities(equities.filter((equity) => equity.id !== id))
  }

  const getEquityById = (id: number) => {
    return equities.find((equity) => equity.id === id)
  }

  return (
    <FinancialEquityContext.Provider
      value={{
        equities,
        addEquity,
        updateEquity,
        deleteEquity,
        getEquityById,
      }}
    >
      {children}
    </FinancialEquityContext.Provider>
  )
}

export const useFinancialEquity = () => {
  const context = useContext(FinancialEquityContext)
  if (!context) {
    throw new Error(
      'useFinancialEquity must be used within FinancialEquityProvider',
    )
  }
  return context
}
