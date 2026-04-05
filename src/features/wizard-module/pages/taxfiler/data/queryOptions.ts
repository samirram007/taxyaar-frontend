import { queryOptions, useMutation, useQueryClient } from "@tanstack/react-query"
import { fetchAllClientService, fetchClientByIdService, storeClientService, updateClientService } from "./api";
import type { ClientForm } from "./schema";
import { useAuth } from "@/features/auth/contexts/AuthContext";



const BASE_KEY = "clientKey";

export const clientQueryOptions = (id?: string) => {

    return queryOptions({
        queryKey: id ? [BASE_KEY, id] : [BASE_KEY],
        queryFn: () =>
            id ? fetchClientByIdService(id) : fetchAllClientService(),
        staleTime: 1000 * 60 * 5,
        retry: 1,
    });
};




export function useClientMutation() {
    const queryClient = useQueryClient();
    const { setCurrentClient } = useAuth();
    return useMutation({
        mutationFn: async (data: ClientForm & { id?: string }) => {
            if (data.id) {
                return await updateClientService(data)
            }
            return await storeClientService(data)
        },
        onSuccess: () => {
            setCurrentClient(null);
            queryClient.invalidateQueries({ queryKey: [BASE_KEY] });
            queryClient.refetchQueries({ queryKey: [BASE_KEY] });
        },
        onError: (error) => {
            console.error("Client mutation failed:", error)
        },
    })
}