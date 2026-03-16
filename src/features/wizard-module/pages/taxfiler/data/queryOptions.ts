import { queryOptions, useMutation, useQueryClient } from "@tanstack/react-query"
import { fetchAllClientService, fetchClientByIdService, storeClientService, updateClientService } from "./api";
import type { ClientForm } from "./schema";



const BASE_KEY = "clientKey";

export const clientQueryOptions = (id?: number) => {

    return queryOptions({
        queryKey: id ? [BASE_KEY, id] : [BASE_KEY],
        queryFn: () =>
            id ? fetchClientByIdService(id) : fetchAllClientService(),
        staleTime: 1000 * 60 * 5,
        retry: 1,
    });
};




export function useClientMutation() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async (data: ClientForm & { id?: number }) => {
            if (data.id) {
                // Update if id exists
                return await updateClientService(data)
            }
            // Otherwise create
            return await storeClientService(data)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [BASE_KEY] })
        },
        onError: (error) => {
            console.error("Client mutation failed:", error)
        },
    })
}