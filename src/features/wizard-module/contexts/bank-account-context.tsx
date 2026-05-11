import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from 'react'

interface BankAccount {
  id: number
  countryName: string
  nameOfBank: string
  bankAccountNumber: string
  addressOfBank: string
  zipCode: string
  peakBalance: string
  closingBalance: string
  statusOfAccountHolder: string
  accountOpeningDate: string
}

interface BankAccountContextType {
  accounts: BankAccount[]
  addAccount: (account: Omit<BankAccount, 'id'>) => void
  updateAccount: (id: number, account: Omit<BankAccount, 'id'>) => void
  deleteAccount: (id: number) => void
  getAccountById: (id: number) => BankAccount | undefined
}

const BankAccountContext = createContext<BankAccountContextType | undefined>(
  undefined,
)

export const BankAccountProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [accounts, setAccounts] = useState<BankAccount[]>([])

  const addAccount = (account: Omit<BankAccount, 'id'>) => {
    const newAccount: BankAccount = {
      ...account,
      id: Date.now(),
    }
    setAccounts([...accounts, newAccount])
  }

  const updateAccount = (id: number, updatedData: Omit<BankAccount, 'id'>) => {
    setAccounts(
      accounts.map((acc) => (acc.id === id ? { ...acc, ...updatedData } : acc)),
    )
  }

  const deleteAccount = (id: number) => {
    setAccounts(accounts.filter((acc) => acc.id !== id))
  }

  const getAccountById = (id: number) => {
    return accounts.find((acc) => acc.id === id)
  }

  return (
    <BankAccountContext.Provider
      value={{
        accounts,
        addAccount,
        updateAccount,
        deleteAccount,
        getAccountById,
      }}
    >
      {children}
    </BankAccountContext.Provider>
  )
}

export const useBankAccounts = () => {
  const context = useContext(BankAccountContext)
  if (!context) {
    throw new Error('useBankAccounts must be used within BankAccountProvider')
  }
  return context
}
