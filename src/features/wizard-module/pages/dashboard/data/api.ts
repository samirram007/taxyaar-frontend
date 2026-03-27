import { deleteData } from "@/utils/dataClient";




export async function destroyClientService(pan: string) {
    return await deleteData(`/clients/${pan}`)
}