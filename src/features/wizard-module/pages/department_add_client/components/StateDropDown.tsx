import { SelectDropdown } from '@/components/web/select-dropdown'
import {
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { capitalizeAllWords } from '@/utils/removeEmptyStrings'
import { useSuspenseQuery } from '@tanstack/react-query'
import type { UseFormReturn } from 'react-hook-form'

import { cn } from '@/lib/utils'
import type { State } from '@/features/modules/state/data/schema'
import { stateQueryOptions } from '@/features/modules/state/data/queryOptions'
import { Suspense } from 'react'
import type { ClientRegistrationForm } from '../data/schema'

type Props = {
    form: UseFormReturn<ClientRegistrationForm>
    gapClass?: string
    rtl?: boolean
}

const StateDropdown = ({ form, gapClass, rtl }: Props) => {
    const { data: stateList } = useSuspenseQuery(stateQueryOptions())

    const handleValueChange = (value: string) => {
        form.setValue('stateCd', value, { shouldValidate: true })
    }

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <FormField
                control={form.control}
                name="stateCd"
                render={({ field }) => (
                    <FormItem
                        className={cn(
                            'grid grid-cols-[100px_1fr] items-center space-y-0 gap-x-4 gap-y-1',
                            gapClass,
                        )}
                    >
                        <FormLabel className={rtl ? 'order-last' : ''}>
                            State
                        </FormLabel>

                        <SelectDropdown
                            defaultValue={field.value ? field.value.toString() : ''}
                            onValueChange={handleValueChange}
                            placeholder="Select a state"
                            className="w-full"
                            items={
                                stateList?.data?.map((state: State) => ({
                                    label: capitalizeAllWords(state.name),
                                    value: state.gstCode, // map gstCode → stateCd
                                })) ?? []
                            }
                        />

                        <FormMessage className="col-span-4 col-start-3" />
                    </FormItem>
                )}
            />
        </Suspense>
    )
}

export default StateDropdown