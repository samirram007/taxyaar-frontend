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
        >
            <ToggleGroupItem
                value="yes"
                className="px-4"
            >
                YES
            </ToggleGroupItem>

            <ToggleGroupItem
                value="no"
                className="px-4"
            >
                NO
            </ToggleGroupItem>
        </ToggleGroup>
    )
}