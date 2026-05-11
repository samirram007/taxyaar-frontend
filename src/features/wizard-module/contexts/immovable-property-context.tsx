import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from 'react'

interface ImmovableProperty {
  id: number
  countryName: string
  zipCode: string
  addressOfProperty: string
  ownership: string
  dateOfAcquisition: string
  totalInvestment: string
  incomeDerived: string
  natureOfIncome: string
  incomeTaxable: string
  scheduleWhere: string
  itemNo: string
}

interface ImmovablePropertyContextType {
  properties: ImmovableProperty[]
  addProperty: (property: Omit<ImmovableProperty, 'id'>) => void
  updateProperty: (id: number, property: Omit<ImmovableProperty, 'id'>) => void
  deleteProperty: (id: number) => void
  getPropertyById: (id: number) => ImmovableProperty | undefined
}

const ImmovablePropertyContext = createContext<
  ImmovablePropertyContextType | undefined
>(undefined)

export const ImmovablePropertyProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [properties, setProperties] = useState<ImmovableProperty[]>([])

  const addProperty = (property: Omit<ImmovableProperty, 'id'>) => {
    const newProperty: ImmovableProperty = {
      ...property,
      id: Date.now(),
    }
    setProperties([...properties, newProperty])
  }

  const updateProperty = (
    id: number,
    updatedData: Omit<ImmovableProperty, 'id'>,
  ) => {
    setProperties(
      properties.map((prop) =>
        prop.id === id ? { ...prop, ...updatedData } : prop,
      ),
    )
  }

  const deleteProperty = (id: number) => {
    setProperties(properties.filter((prop) => prop.id !== id))
  }

  const getPropertyById = (id: number) => {
    return properties.find((prop) => prop.id === id)
  }

  return (
    <ImmovablePropertyContext.Provider
      value={{
        properties,
        addProperty,
        updateProperty,
        deleteProperty,
        getPropertyById,
      }}
    >
      {children}
    </ImmovablePropertyContext.Provider>
  )
}

export const useImmovableProperties = () => {
  const context = useContext(ImmovablePropertyContext)
  if (!context) {
    throw new Error(
      'useImmovableProperties must be used within ImmovablePropertyProvider',
    )
  }
  return context
}
