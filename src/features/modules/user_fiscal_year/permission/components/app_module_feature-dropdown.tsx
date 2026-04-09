
import { capitalizeAllWords } from "@/utils/removeEmptyStrings";
import { useQuery } from "@tanstack/react-query";
import type { UseFormReturn } from "react-hook-form";

import FormInputField from "@/components/web/form-input-field";


import type { PermissionForm } from "../data/schema";
import { appModuleFeatureQueryOptions } from "@/features/modules/app_module_feature/data/queryOptions";
import type { AppModuleFeature } from "@/features/modules/app_module_feature/data/schema";




type Props = {
    form: UseFormReturn<PermissionForm>;
};
const AppModuleFetureDropdown = (props: Props) => {
    const { form } = props as Props;
    const { data: AppModuleFetureList, isLoading } = useQuery(appModuleFeatureQueryOptions());


    if (isLoading) {
        return <div>Loading...</div>;
    }
    return <FormInputField type='select' form={form} name='appModuleFeatureId' label='Feature'
        items={
            AppModuleFetureList?.data.map((appModuleFeture: AppModuleFeature) => ({
                label: capitalizeAllWords(appModuleFeture.name + (appModuleFeture.name ? ` (${appModuleFeture.appModule?.name})` : '')),
                value: String(appModuleFeture.id),
            }))
        } />


}

export default AppModuleFetureDropdown