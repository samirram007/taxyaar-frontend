import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from 'react'

interface FinancialEntity {
  id: number
  countryName: string
  zipCode: string
  natureOfEntity: string
  nameOfEntity: string
  addressOfEntity: string
  natureOfInterest: string
  dateSinceHeld: string
  totalInvestment: string
  incomeAmount: string
  natureOfIncome: string
  incomeTaxable: string
  itemNo: string
}

interface FinancialEntityContextType {
  entities: FinancialEntity[]
  addEntity: (entity: Omit<FinancialEntity, 'id'>) => void
  updateEntity: (id: number, entity: Omit<FinancialEntity, 'id'>) => void
  deleteEntity: (id: number) => void
  getEntityById: (id: number) => FinancialEntity | undefined
}

const FinancialEntityContext = createContext<
  FinancialEntityContextType | undefined
>(undefined)

export const FinancialEntityProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [entities, setEntities] = useState<FinancialEntity[]>([])

  const addEntity = (entity: Omit<FinancialEntity, 'id'>) => {
    const newEntity: FinancialEntity = {
      ...entity,
      id: Date.now(),
    }
    setEntities([...entities, newEntity])
  }

  const updateEntity = (
    id: number,
    updatedData: Omit<FinancialEntity, 'id'>,
  ) => {
    setEntities(
      entities.map((ent) => (ent.id === id ? { ...ent, ...updatedData } : ent)),
    )
  }

  const deleteEntity = (id: number) => {
    setEntities(entities.filter((ent) => ent.id !== id))
  }

  const getEntityById = (id: number) => {
    return entities.find((ent) => ent.id === id)
  }

  return (
    <FinancialEntityContext.Provider
      value={{ entities, addEntity, updateEntity, deleteEntity, getEntityById }}
    >
      {children}
    </FinancialEntityContext.Provider>
  )
}

export const useFinancialEntities = () => {
  const context = useContext(FinancialEntityContext)
  if (!context) {
    throw new Error(
      'useFinancialEntities must be used within FinancialEntityProvider',
    )
  }
  return context
}
