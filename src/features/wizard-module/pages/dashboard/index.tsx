
import { Main } from "@/layouts/components/main";
import type { ClientList } from "../taxfiler/data/schema";
import MemberCard from "./components/MemberCard";

interface DashboardProps {
    data: ClientList
}



export default function Dashboard({ data }: DashboardProps) {

    return (
        <>
            <Main className='min-w-full'>
                <MemberCard clientList={data} />
            </Main>
        </>
    )
}