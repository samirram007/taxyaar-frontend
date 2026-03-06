import { useMutation } from "@tanstack/react-query";
import { addClient, authenticationUser, logout, validateAddClient } from "./api";
import type { AddClientRequest, AddClientResponse, AuthResponse, ValidateAddClientRequest, ValidateAddClientResponse } from "./schema";
import type { AxiosResponse } from "axios";

export function useAuthenticationUser() {
    return useMutation<AxiosResponse<AuthResponse>, Error>({
        mutationFn: authenticationUser,
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
    authToken: string;
};

export function useLogout() {
    return useMutation<AxiosResponse<AuthResponse>, Error, LogoutPayload>({
        mutationFn: ({ pan, authToken }) => logout(pan, authToken),

        onSuccess: () => {
            localStorage.removeItem("autkn");
            sessionStorage.clear();
        },
    });
}