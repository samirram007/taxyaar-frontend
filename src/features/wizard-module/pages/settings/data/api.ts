import { patchData } from "@/utils/dataClient";



export async function updateUserPasswordService(password: string) {
    return await patchData("/current_liability_groups", { password })
}