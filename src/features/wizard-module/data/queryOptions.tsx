import { queryOptions, useMutation } from "@tanstack/react-query";
import { addClient, authenticationUser, fetchArticleBySlug, logout, validateAddClient } from "./api";
import type { AddClientRequest, AddClientResponse, AuthResponse, ValidateAddClientRequest, ValidateAddClientResponse } from "./schema";
import type { AxiosResponse } from "axios";


export const articleSlugQueryOptions = (slug: string) => {
    return queryOptions({
        queryKey: ['article', slug],
        queryFn: () => fetchArticleBySlug(slug),
        staleTime: 1000 * 60 * 5, // 5 minutes
        retry: 1,
    })
}

export function useAuthenticationUser() {
    return useMutation<AxiosResponse<AuthResponse>, Error, string>({
        mutationFn: (pan: string) => {
            return authenticationUser({ pan });
        },
    });
}


export function useAddClient() {
    return useMutation<AxiosResponse<AddClientResponse>, Error, AddClientRequest>({
        mutationFn: (payload) => addClient(payload),
    });
}



export function useValidateAddClient() {
    return useMutation<AxiosResponse<ValidateAddClientResponse>, Error, ValidateAddClientRequest>({
        mutationFn: (payload) => validateAddClient(payload),
    });
}

type LogoutPayload = {
    pan: string;
};

export function useLogout() {
    return useMutation<AxiosResponse<AuthResponse>, Error, LogoutPayload>({
        mutationFn: ({ pan }) => logout(pan),

        onSuccess: () => {
            localStorage.removeItem("autkn");
            sessionStorage.clear();
        },
    });
}