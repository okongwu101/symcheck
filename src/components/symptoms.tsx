'use client'

import { useQuery } from "@tanstack/react-query"
import { FetchedMultiSelect, SymptomsInterface } from "./selectFormComponents"
import { selectedSymptomsAtom } from "@/lib/atoms"
import { useAtom } from "jotai"



export default function Symptoms() {

    const [selectedSymptoms, setSelectedSymptoms] = useAtom(selectedSymptomsAtom)

    const { data: symptomsData } = useQuery<SymptomsInterface[]>({
        queryKey: [`${process.env.NEXT_PUBLIC_SYMPTOMS_BASE}`]
    })



    return (
        <div className="px-4">
            <div>
                Symptoms
            </div>
            <FetchedMultiSelect
                data={symptomsData ?? []}
                onChange={(value: any) => setSelectedSymptoms(symptomsData.find((item: SymptomsInterface) => item.ID === value))}
                // searchValue={complaintInputValue}
                // onSearchChange={setComplaintInputValue}
                value={selectedSymptoms !== [] ? selectedSymptoms?.ID : ""}
                searchable
                allowDeselect
            />
        </div>
    )
}