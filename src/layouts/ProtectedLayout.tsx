import SkipToMain from '@/components/web/skip-to-main'
import { Toaster } from '@/components/ui/sonner'
import { SearchProvider } from '@/core/contexts/search-context'
import { Outlet } from '@tanstack/react-router'
import { Suspense, useEffect } from 'react'
import HeaderComponent from './components/HeaderComponent'
import { BankAccountProvider } from '@/features/wizard-module/contexts/bank-account-context'
import { FinancialEntityProvider } from '@/features/wizard-module/contexts/financial-entity-context'
import { ImmovablePropertyProvider } from '@/features/wizard-module/contexts/immovable-property-context'
import { OtherAssetProvider } from '@/features/wizard-module/contexts/other-asset-context'
import { TrustProvider } from '@/features/wizard-module/contexts/trust-context'
import { ForeignIncomeProvider } from '@/features/wizard-module/contexts/foreign-income-context'
import { CustodialAccountProvider } from '@/features/wizard-module/contexts/custodial-account-context'
import { CashValueInsuranceProvider } from '@/features/wizard-module/contexts/cash-value-insurance-context'
import { SigningAuthorityProvider } from '@/features/wizard-module/contexts/signing-authority-context'
import { FinancialEquityProvider } from '@/features/wizard-module/contexts/financial-equity-context'

const ProtectedLayout = () => {
  useEffect(() => {
    document.querySelectorAll('link').forEach((styleTag) => {
      const id = styleTag.getAttribute('href') || ''

      // Keep ONLY your styles.css (exact path match)
      if (
        id.includes('slick-theme.css') ||
        id.includes('slick.css') ||
        id.includes('bootstrap.min.css') ||
        id.includes('font-awesome.min.css') ||
        id.includes('custom.css')
      ) {
        styleTag.remove()
      }
    })
  }, [])
  return (
    <Suspense fallback={<Toaster />}>
      <SearchProvider>
        <BankAccountProvider>
          <FinancialEntityProvider>
            <ImmovablePropertyProvider>
              <OtherAssetProvider>
                <TrustProvider>
                  <ForeignIncomeProvider>
                    <CustodialAccountProvider>
                      <CashValueInsuranceProvider>
                        <SigningAuthorityProvider>
                          <FinancialEquityProvider>
                            <SkipToMain />

                            <div className="scroll-container flex sticky top-50 z-50">
                              {/* <!-- ===== Page Wrapper Start ===== --> */}
                              <div className="max-w-screen w-full relative flex  h-screen overflow-hidden ">
                                {/* <AppSidebar />  */}
                                <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden ">
                                  <div className="min-h-dvh grid grid-rows-[auto_1fr_auto]">
                                    <HeaderComponent />
                                    {/* <!-- ===== Header End ===== --> */}

                                    {/* <!-- ===== Main Content Start ===== --> */}
                                    <main
                                      className="max-w-screen 
                                                                   bg-linear-to-b
                                from-slate-100 from-10%  to-slate-300 to-20% flex-1  "
                                    >
                                      <div className="container mx-auto h-full w-full pt-12">
                                        <Suspense fallback={<Toaster />}>
                                          <Outlet />
                                        </Suspense>
                                      </div>
                                    </main>
                                  </div>
                                </div>
                              </div>
                              {/* <!-- ===== Page Wrapper End ===== --> */}
                            </div>
                          </FinancialEquityProvider>
                        </SigningAuthorityProvider>
                      </CashValueInsuranceProvider>
                    </CustodialAccountProvider>
                  </ForeignIncomeProvider>
                </TrustProvider>
              </OtherAssetProvider>
            </ImmovablePropertyProvider>
          </FinancialEntityProvider>
        </BankAccountProvider>
      </SearchProvider>
    </Suspense>
  )
}

export default ProtectedLayout
