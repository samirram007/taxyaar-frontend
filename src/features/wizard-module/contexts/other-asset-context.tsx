import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from 'react'

interface OtherAsset {
  id: number
  countryName: string
  zipCode: string
  natureOfAsset: string
  ownership: string
  dateOfAcquisition: string
  totalInvestment: string
  incomeDerived: string
  natureOfIncome: string
  incomeTaxable: string
  scheduleWhere: string
  itemNo: string
}

interface OtherAssetContextType {
  assets: OtherAsset[]
  addAsset: (asset: Omit<OtherAsset, 'id'>) => void
  updateAsset: (id: number, asset: Omit<OtherAsset, 'id'>) => void
  deleteAsset: (id: number) => void
  getAssetById: (id: number) => OtherAsset | undefined
}

const OtherAssetContext = createContext<OtherAssetContextType | undefined>(
  undefined,
)

export const OtherAssetProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [assets, setAssets] = useState<OtherAsset[]>([])

  const addAsset = (asset: Omit<OtherAsset, 'id'>) => {
    const newAsset: OtherAsset = {
      ...asset,
      id: Date.now(),
    }
    setAssets([...assets, newAsset])
  }

  const updateAsset = (id: number, updatedData: Omit<OtherAsset, 'id'>) => {
    setAssets(
      assets.map((ast) => (ast.id === id ? { ...ast, ...updatedData } : ast)),
    )
  }

  const deleteAsset = (id: number) => {
    setAssets(assets.filter((ast) => ast.id !== id))
  }

  const getAssetById = (id: number) => {
    return assets.find((ast) => ast.id === id)
  }

  return (
    <OtherAssetContext.Provider
      value={{ assets, addAsset, updateAsset, deleteAsset, getAssetById }}
    >
      {children}
    </OtherAssetContext.Provider>
  )
}

export const useOtherAssets = () => {
  const context = useContext(OtherAssetContext)
  if (!context) {
    throw new Error('useOtherAssets must be used within OtherAssetProvider')
  }
  return context
}
