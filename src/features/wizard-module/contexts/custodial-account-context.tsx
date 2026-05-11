import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from 'react'

interface CustodialAccount {
  id: number
  countryName: string
  nameOfInstitution: string
  addressOfInstitution: string
  bankAccountNumber: string
  zipCode: string
  peakBalance: string
  closingBalance: string
  statusOfAccountHolder: string
  accountOpeningDate: string
  grossAmountPaid: string
}

interface CustodialAccountContextType {
  accounts: CustodialAccount[]
  addAccount: (account: Omit<CustodialAccount, 'id'>) => void
  updateAccount: (id: number, account: Omit<CustodialAccount, 'id'>) => void
  deleteAccount: (id: number) => void
  getAccountById: (id: number) => CustodialAccount | undefined
}

const CustodialAccountContext = createContext<
  CustodialAccountContextType | undefined
>(undefined)

export const CustodialAccountProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [accounts, setAccounts] = useState<CustodialAccount[]>([])

  const addAccount = (account: Omit<CustodialAccount, 'id'>) => {
    const newAccount: CustodialAccount = {
      ...account,
      id: Date.now(),
    }
    setAccounts([...accounts, newAccount])
  }

  const updateAccount = (
    id: number,
    updatedData: Omit<CustodialAccount, 'id'>,
  ) => {
    setAccounts(
      accounts.map((account) =>
        account.id === id ? { ...account, ...updatedData } : account,
      ),
    )
  }

  const deleteAccount = (id: number) => {
    setAccounts(accounts.filter((account) => account.id !== id))
  }

  const getAccountById = (id: number) => {
    return accounts.find((account) => account.id === id)
  }

  return (
    <CustodialAccountContext.Provider
      value={{
        accounts,
        addAccount,
        updateAccount,
        deleteAccount,
        getAccountById,
      }}
    >
      {children}
    </CustodialAccountContext.Provider>
  )
}

export const useCustodialAccount = () => {
  const context = useContext(CustodialAccountContext)
  if (!context) {
    throw new Error(
      'useCustodialAccount must be used within CustodialAccountProvider',
    )
  }
  return context
}
