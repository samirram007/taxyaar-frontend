import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

type Props = {
    value?: "yes" | "no"
    onChange?: (value: "yes" | "no") => void
}

export function YesNoToggle({ value, onChange }: Props) {
    return (
        <ToggleGroup
            type="single"
            value={value}
            onValueChange={(v) => {
                if (v) onChange?.(v as "yes" | "no")
            }}
            className="bg-blue-500  h-auto w-auto mt-1 shadow-2xl rounded-lg"
        >
            <ToggleGroupItem
                value="yes"
                className="px-4 cursor-pointer bg-gray-100 data-[state=on]:bg-blue-600 text-gray-800 data-[state=on]:text-white border border-gray-300 data-[state=on]:border-blue-600"
            >
                YES
            </ToggleGroupItem>

            <ToggleGroupItem
                value="no"
                className="px-4 cursor-pointer bg-gray-100 data-[state=on]:bg-[#ff9800] text-gray-800 data-[state=on]:text-white border border-gray-300 data-[state=on]:border-[#ff9800]"
            >
                NO
            </ToggleGroupItem>
        </ToggleGroup>
    )
}