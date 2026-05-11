import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from 'react'

interface Trust {
  id: number
  countryName: string
  zipCode: string
  nameOfTrust: string
  addressOfTrust: string
  nameOfSettlor: string
  addressOfSettlor: string
  dateOfPosition: string
  incomeTaxable: string
  otherTrustees?: Array<{ name: string; address: string }>
  beneficiaries?: Array<{ name: string; address: string }>
}

interface TrustContextType {
  trusts: Trust[]
  addTrust: (trust: Omit<Trust, 'id'>) => void
  updateTrust: (id: number, trust: Omit<Trust, 'id'>) => void
  deleteTrust: (id: number) => void
  getTrustById: (id: number) => Trust | undefined
}

const TrustContext = createContext<TrustContextType | undefined>(undefined)

export const TrustProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [trusts, setTrusts] = useState<Trust[]>([])

  const addTrust = (trust: Omit<Trust, 'id'>) => {
    const newTrust: Trust = {
      ...trust,
      id: Date.now(),
    }
    setTrusts([...trusts, newTrust])
  }

  const updateTrust = (id: number, updatedData: Omit<Trust, 'id'>) => {
    setTrusts(
      trusts.map((trust) =>
        trust.id === id ? { ...trust, ...updatedData } : trust,
      ),
    )
  }

  const deleteTrust = (id: number) => {
    setTrusts(trusts.filter((trust) => trust.id !== id))
  }

  const getTrustById = (id: number) => {
    return trusts.find((trust) => trust.id === id)
  }

  return (
    <TrustContext.Provider
      value={{
        trusts,
        addTrust,
        updateTrust,
        deleteTrust,
        getTrustById,
      }}
    >
      {children}
    </TrustContext.Provider>
  )
}

export const useTrust = () => {
  const context = useContext(TrustContext)
  if (!context) {
    throw new Error('useTrust must be used within TrustProvider')
  }
  return context
}
