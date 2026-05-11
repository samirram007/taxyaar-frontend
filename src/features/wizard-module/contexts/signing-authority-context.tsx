import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from 'react'

interface SigningAuthority {
  id: number
  countryName: string
  nameOfInstitution: string
  bankAccountNumber: string
  addressOfInstitution: string
  zipCode: string
  nameOfAccountHolder: string
  peakBalance: string
  incomeTaxable: string
}

interface SigningAuthorityContextType {
  accounts: SigningAuthority[]
  addAccount: (account: Omit<SigningAuthority, 'id'>) => void
  updateAccount: (id: number, account: Omit<SigningAuthority, 'id'>) => void
  deleteAccount: (id: number) => void
  getAccountById: (id: number) => SigningAuthority | undefined
}

const SigningAuthorityContext = createContext<
  SigningAuthorityContextType | undefined
>(undefined)

export const SigningAuthorityProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [accounts, setAccounts] = useState<SigningAuthority[]>([])

  const addAccount = (account: Omit<SigningAuthority, 'id'>) => {
    const newAccount: SigningAuthority = {
      ...account,
      id: Date.now(),
    }
    setAccounts([...accounts, newAccount])
  }

  const updateAccount = (
    id: number,
    updatedData: Omit<SigningAuthority, 'id'>,
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
    <SigningAuthorityContext.Provider
      value={{
        accounts,
        addAccount,
        updateAccount,
        deleteAccount,
        getAccountById,
      }}
    >
      {children}
    </SigningAuthorityContext.Provider>
  )
}

export const useSigningAuthority = () => {
  const context = useContext(SigningAuthorityContext)
  if (!context) {
    throw new Error(
      'useSigningAuthority must be used within SigningAuthorityProvider',
    )
  }
  return context
}
