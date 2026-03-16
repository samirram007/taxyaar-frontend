import axiosClient from "./axios-client"
import { errorHandler } from "./dataClient"
import { removeEmptyStrings } from "./removeEmptyStrings"



export const postData = async <TResponse, TPayload extends object>(
    apiPath: string,
    payload: TPayload
): Promise<TResponse> => {
    try {
        const response = await axiosClient.post<TResponse>(
            apiPath,
            removeEmptyStrings(payload)
        );
        return response.data
    } catch (error) {
        errorHandler(error)
        throw error
    }
}


