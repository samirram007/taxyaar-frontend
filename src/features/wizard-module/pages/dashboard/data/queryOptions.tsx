import { useMutation, useQueryClient } from "@tanstack/react-query"
import { destroyClientService } from "./api"





export function useClientDestoryMutation() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (id: string) => {
            return await destroyClientService(id);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['clientKey'] });
            queryClient.refetchQueries({ queryKey: ['clientKey'] });
        },
        onError: (error) => {
            console.error("Reporting period mutation failed:", error)
        },
    })
}