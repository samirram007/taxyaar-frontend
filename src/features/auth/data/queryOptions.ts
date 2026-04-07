import { queryOptions, useMutation, useQueryClient } from "@tanstack/react-query"
import { changePasswordService } from "./apis"
import { toast } from "sonner"

const Key = "AUTH"
export const authQueryOptions = (key: string = Key) => {
    return queryOptions({
        queryKey: [key],
        staleTime: 1000 * 60 * 5, // 5 minutes
        retry: 1,
    })
}

export function useChangePasswordMutation() {


    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async (data: { newPassword: string }) => {

            return await changePasswordService(data)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [Key] });
            toast.success("Your password has been updated successfully.")
        },
        onError: (error) => {
            console.error("Change password mutation failed:", error)
            toast.error("Failed to update password.")
        },
    })
}