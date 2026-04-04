import React, { createContext, use, useContext, useEffect, type ReactNode } from 'react';

type LayoutType = 'protected' | 'protectedWeb' | 'admin' | 'mobile';


export interface LayoutContextType {
    layoutType: LayoutType;
    setLayoutType: (type: LayoutType) => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

interface LayoutProviderProps {
    children: ReactNode;
    defaultLayout?: LayoutType;
    storageKey?: string;
}

export const LayoutProvider: React.FC<LayoutProviderProps> = ({ children, defaultLayout = "protected",
    storageKey = "app-ui-layout" }) => {
    const [layoutType, setLayoutType] = React.useState<LayoutType>((localStorage.getItem(storageKey) as LayoutType) || defaultLayout);
    useEffect(() => {
        const storedLayout = localStorage.getItem(storageKey) as LayoutType;
        if (storedLayout) {
            setLayoutType(storedLayout);
        }
    }, [storageKey]);

    useEffect(() => {
        localStorage.setItem(storageKey, layoutType);
    }, [layoutType, storageKey]);

    return (
        <LayoutContext.Provider value={{ layoutType, setLayoutType }}>
            {children}
        </LayoutContext.Provider>
    );
};

export const useLayout = (): LayoutContextType => {
    const context = useContext(LayoutContext);
    if (!context) {
        throw new Error('useLayout must be used within LayoutProvider');
    }
    return context;
};