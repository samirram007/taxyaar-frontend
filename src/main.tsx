import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google'
import * as TanstackQuery from './integrations/tanstack-query/root-provider'

// Import the generated route tree

import { AppRouter } from './AppRouter'
import { Toaster } from './components/ui/sonner'
import { FontProvider } from './core/contexts/font-context'
import { ThemeContextProvider } from './core/contexts/ThemeContextProvider'
import { AuthProvider } from './features/auth/contexts/AuthContext'
import { env } from './env'
import './styles.css'
import { Form16Provider } from './features/wizard-module/pages/form16/contexts/Form16Context'
import { Layout } from 'lucide-react'
import { LayoutProvider } from './core/contexts/layout-context'

// Render the app
const rootElement = document.getElementById('app')
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <GoogleOAuthProvider clientId={env.VITE_GOOGLE_CLIENT_ID}>
        <TanstackQuery.Provider>
          <ThemeContextProvider defaultTheme="light" storageKey="vite-ui-theme">
            <FontProvider>
              <AuthProvider>
                <LayoutProvider defaultLayout="protected" storageKey="app-ui-layout">
                  <Form16Provider>
                    <Toaster position="top-center" richColors />
                    <AppRouter />
                  </Form16Provider>
                </LayoutProvider>
              </AuthProvider>
            </FontProvider>

          </ThemeContextProvider>
        </TanstackQuery.Provider>
      </GoogleOAuthProvider>
    </StrictMode>,
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
