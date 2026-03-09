
import { Main } from "@/layouts/components/main";
import MembersPage from "../members";
import ArticleDialog from "../../components/help-articles/article-dialog";
import { Dialog } from "radix-ui";
import { Dialogs } from "../../components/dialogs";
import WizardModuleProvider from "../../contexts/wizard_module-context";



const Dashboard = () => {

    return (
        <>
            <WizardModuleProvider>


                <Main className='min-w-full'>


                    <MembersPage />
                </Main>
                <Dialogs />
            </WizardModuleProvider>
        </>
    )
}

export default Dashboard