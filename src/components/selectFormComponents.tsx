
import { MultiSelect, Select } from '@mantine/core';

export type SelectItem = {
    value: string;
    label: string;
};



type ValueLabelSelectPropsTypes = {
    data: readonly SelectItem[];
    value?: any;
    onChange: (value: string) => void;
}

export function ValueLabelSelect(props: ValueLabelSelectPropsTypes) {
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


type LocalMultiSelectProps = {
    data: { ID: string; Name: string; }[];
    onChange: (value: string[]) => void;
    value?: any[];
}

export const LocalMultiSelect = (props: LocalMultiSelectProps) => {
    return (
        <>
            <MultiSelect
                data={(props.data).map((option) => ({
                    value: option?.ID,
                    label: option?.Name
                }))}
                searchable
                onChange={props.onChange}
                nothingFound="Nothing found"
                clearable
                value={props.value}
                initiallyOpened={false}
                size="sm"
                limit={200}
            />
        </>
    )
}