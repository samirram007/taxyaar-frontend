import React, { useState } from "react";
import type { Client, ClientList } from "../pages/taxfiler/data/schema";



interface ClientContextType {
    clients: ClientList | null;
    setClients: React.Dispatch<React.SetStateAction<ClientList | null>>;
    client: Client | null;
    setClient: React.Dispatch<React.SetStateAction<Client | null>>;
}


const ClientContext = React.createContext<ClientContextType | null>(null);



interface Props {
    children: React.ReactNode
}

export default function ClientProvider({ children }: Props) {
    const [client, setClient] = useState<Client | null>(null);
    const [clients, setClients] = useState<ClientList | null>(null);


    return (
        <ClientContext value={{
            client, clients, setClient, setClients
        }}>
            {children}
        </ClientContext>
    )
}


export const useClient = () => {
    const clientContext = React.useContext(ClientContext);

    if (!clientContext) {
        throw new Error("ClientContext has to be inside ClientProvider");
    }
    return clientContext;
}