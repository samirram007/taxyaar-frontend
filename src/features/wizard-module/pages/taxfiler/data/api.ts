import { getData, postData, putData } from "@/utils/dataClient"


const ROUTE = "/clients"


export async function fetchAllClientService() {
    return await getData(ROUTE)
}

export async function fetchClientByIdService(id: number) {
    return await getData(`${ROUTE}/${id}`);
}

export async function storeClientService(payload: any) {
    return await postData(ROUTE, payload)
}


export async function updateClientService(payload: any) {
    return await putData(`${ROUTE}/${payload.id}`, payload)
}
