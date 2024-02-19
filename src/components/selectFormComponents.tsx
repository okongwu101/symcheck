
import { MultiSelect, Select } from '@mantine/core';

export type SelectItem = {
    value: string;
    label: string;
};





export function ValueLabelSelect({ ...props }) {
    return (
        <Select
            data={props.data}
            value={props.value}
            onChange={props.onChange}
            size="sm"
            clearable
        />
    )
}


export interface SymptomsInterface {
    ID: string;
    Name: string;
}[]


export const LocalMultiSelect = ({ ...props }) => {
    return (
        <>
            <MultiSelect
                data={(props.data)?.map((option: SymptomsInterface) => ({
                    value: String(option?.ID),
                    label: option?.Name
                }))}
                searchable
                onChange={props.onChange}
                nothingFoundMessage="Nothing found"
                clearable
                hidePickedOptions
                value={props.value}
                defaultDropdownOpened={false}
                size="sm"
                limit={200}
            />
        </>
    )
}