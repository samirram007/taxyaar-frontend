
import { Main } from "@/layouts/components/main";
import type { ClientList } from "../taxfiler/data/schema";
import MemberCard from "./components/MemberCard";

interface DashboardProps {
    data: ClientList
}



export default function Dashboard({ data }: DashboardProps) {

    console.log("data: ", data);

    return (
        <>
            <Main className='min-w-full'>
                <MemberCard clientList={data} />
            </Main>
        </>
    )
}