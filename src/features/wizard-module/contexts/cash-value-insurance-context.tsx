import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from 'react'

interface CashValueInsurance {
  id: number
  countryName: string
  nameOfInstitution: string
  addressOfInstitution: string
  zipCode: string
  dateOfContract: string
  cashValue: string
  totalGrossAmountPaid: string
}

interface CashValueInsuranceContextType {
  insurances: CashValueInsurance[]
  addInsurance: (insurance: Omit<CashValueInsurance, 'id'>) => void
  updateInsurance: (
    id: number,
    insurance: Omit<CashValueInsurance, 'id'>,
  ) => void
  deleteInsurance: (id: number) => void
  getInsuranceById: (id: number) => CashValueInsurance | undefined
}

const CashValueInsuranceContext = createContext<
  CashValueInsuranceContextType | undefined
>(undefined)

export const CashValueInsuranceProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [insurances, setInsurances] = useState<CashValueInsurance[]>([])

  const addInsurance = (insurance: Omit<CashValueInsurance, 'id'>) => {
    const newInsurance: CashValueInsurance = {
      ...insurance,
      id: Date.now(),
    }
    setInsurances([...insurances, newInsurance])
  }

  const updateInsurance = (
    id: number,
    updatedData: Omit<CashValueInsurance, 'id'>,
  ) => {
    setInsurances(
      insurances.map((insurance) =>
        insurance.id === id ? { ...insurance, ...updatedData } : insurance,
      ),
    )
  }

  const deleteInsurance = (id: number) => {
    setInsurances(insurances.filter((insurance) => insurance.id !== id))
  }

  const getInsuranceById = (id: number) => {
    return insurances.find((insurance) => insurance.id === id)
  }

  return (
    <CashValueInsuranceContext.Provider
      value={{
        insurances,
        addInsurance,
        updateInsurance,
        deleteInsurance,
        getInsuranceById,
      }}
    >
      {children}
    </CashValueInsuranceContext.Provider>
  )
}

export const useCashValueInsurance = () => {
  const context = useContext(CashValueInsuranceContext)
  if (!context) {
    throw new Error(
      'useCashValueInsurance must be used within CashValueInsuranceProvider',
    )
  }
  return context
}
