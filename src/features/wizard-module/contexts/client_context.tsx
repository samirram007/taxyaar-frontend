import React, { useState } from "react";
import type { Client, ClientList } from "../pages/taxfiler/data/schema";


type RequestDialogType = 'invite' | 'add' | 'edit' | 'delete'

interface ClientContextType {
    open: RequestDialogType | null,
    setOpen: (str: RequestDialogType | null) => void;
    clients: ClientList | null;
    setClients: React.Dispatch<React.SetStateAction<ClientList | null>>;
    client: Client | null;
    setClient: React.Dispatch<React.SetStateAction<Client | null>>;
    editPan: string | null;
    setEditPan: React.Dispatch<React.SetStateAction<string | null>>;
}


const ClientContext = React.createContext<ClientContextType | null>(null);



interface Props {
    children: React.ReactNode
}

export default function ClientProvider({ children }: Props) {
    const [client, setClient] = useState<Client | null>(null);
    const [clients, setClients] = useState<ClientList | null>(null);
    const [editPan, setEditPan] = useState<string | null>(null);
    const [open, setOpen] = useState<RequestDialogType | null>("add");


    return (
        <ClientContext value={{
            client, clients, setClient, setClients, editPan, setEditPan, open, setOpen
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