import type { AxiosResponse } from "axios";
import type { AddClientRequest, AddClientResponse, AuthResponse, ValidateAddClientRequest, ValidateAddClientResponse } from "./schema";
import springClient from "./config";
import axios from "axios";



export async function authenticationUser(): Promise<AxiosResponse<AuthResponse>> {
    try {
        const response = await axios.post<AuthResponse>(
            'https://sign-api.taxyaar.com/api/auth/authenticate'
        );

        return response;
    } catch (error: unknown) {
        if (axios.isAxiosError(error) && error.response) {
            const res = error.response as AxiosResponse<AuthResponse>;
            throw new Error(res.data.data.result.messages[0].desc);
        } else {
            throw new Error("Unexpected Error");
        }
    }
}

export async function logout(pan: string, authToken: string): Promise<AxiosResponse<AuthResponse>> {
    try {
        const response = await springClient.post<AuthResponse>('https://sign-api.taxyaar.com/api/auth/logout', {
            pan: pan,
            authToken: authToken
        });

        return response;
    } catch (error: unknown) {
        if (axios.isAxiosError(error) && error.response) {
            const res = error.response as AxiosResponse<AuthResponse>;
            throw new Error(res.data.data.result.messages[0].desc);
        } else {
            throw new Error("Unexpected Error");
        }
    }
}


export async function addClient(
    payload: AddClientRequest
): Promise<AxiosResponse<AddClientResponse>> {
    try {
        const response = await springClient.post<AddClientResponse>(
            "https://sign-api.taxyaar.com/api/client/add-client",
            payload
        );

        return response;
    } catch (error: unknown) {
        if (axios.isAxiosError(error) && error.response) {
            const res = error.response as AxiosResponse<AddClientResponse>;
            throw new Error(res.data.data.result.messages[0].desc);
        }

        throw new Error("Unexpected Error");
    }
}


export async function validateAddClient(
    payload: ValidateAddClientRequest
): Promise<AxiosResponse<ValidateAddClientResponse>> {
    try {
        const response = await springClient.post<ValidateAddClientResponse>(
            "https://sign-api.taxyaar.com/api/client/validate-add-client",
            payload
        );

        return response;
    } catch (error: unknown) {
        if (axios.isAxiosError(error) && error.response) {
            const res = error.response as AxiosResponse<ValidateAddClientResponse>;
            throw new Error(res.data.data.result.messages[0].desc);
        }

        throw new Error("Unexpected Error");
    }
}