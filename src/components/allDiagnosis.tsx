'use client'

import { GenderSelectData } from "@/lib/dataSource/patientGenderDataSource"
import { LocalMultiSelect, SymptomsInterface, ValueLabelSelect } from "./selectFormComponents"
import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { allDiagnosisAtom, errorMessageAtom } from "@/lib/atoms"
import { useAtom } from "jotai"
import { YearPickerInput } from '@mantine/dates';
import axios from "axios"
import dayjs from "dayjs"
import SectionCard from "./sectionCard"
import { ErrorText, LabelText } from "./texts"



export default function AllDiagnosis({ token }: { token: string }) {


    const [birthYear, setBirthYear] = useState<Date | null>(null);
    const [patientGender, setPatientGender] = useState("")
    const [symptoms, setSymptoms] = useState<SymptomsInterface[]>()


    /*
        format the birthYear
        i.e. retrieve the actual year from the date object
    */
    const dateString = birthYear?.toDateString()
    const date = dayjs(dateString)
    const year = date.year().toString()



    const [, setFetchedDiagnoses] = useAtom(allDiagnosisAtom)


    // notification atoms
    const [, setErrorMessage] = useAtom(errorMessageAtom)


    // fetch symptoms
    const { data: symptomsData } = useQuery<SymptomsInterface[]>({
        queryKey: [`${process.env.NEXT_PUBLIC_SYMPTOMS_BASE}token=${token}&format=json&language=en-gb`],
        initialData: [{ ID: "", Name: "" }]
    })

    // get array of symptoms ID
    let IDArray: string[][] = []
    if (symptoms !== undefined) {
        IDArray.push(symptoms.map((s) => s.ID))

    }


    // Get diagnosis
    const getDiagnoses = async () => {
        if (birthYear === null) {
            setErrorMessage('Birth year is required')
        }
        if (patientGender === "") {
            setErrorMessage("Gender is required")
        }
        if (symptoms === undefined) {
            setErrorMessage("Symptoms is required")
        }

        if (birthYear !== null && patientGender !== "" && symptoms !== undefined) {
            // fetch dignoses
            const res = await axios.get(`${process.env.NEXT_PUBLIC_DIAGNOSIS_BASE}symptoms=[${IDArray}]&gender=${patientGender}&year_of_birth=${year}&token=${token}&language=en-gb`)

            const allDiag = await res.data

            setFetchedDiagnoses(allDiag)
        }
    }
    return (
        <div className='px-4'>

            <SectionCard>
                <div className="grid grid-cols-12 gap-x-4 mb-8 mx-auto">
                    <div className="col-span-6">
                        <LabelText text="Birth year"/>

                        <YearPickerInput
                            // label="Pick date"
                            // placeholder="Pick date"
                            value={birthYear}
                            onChange={setBirthYear}

                            mx="auto"
                            maw={400}
                            clearable
                            maxDate={new Date()}
                        />
                        {birthYear === null && <ErrorText text='Required' />}
                    </div>

                    <div className="col-span-6">
                       
                        <LabelText text="Gender"/>
                        <ValueLabelSelect
                            data={GenderSelectData}
                            onChange={(value: any) => setPatientGender(value)}
                        />
                        {patientGender === "" && <ErrorText text='Required' />}
                    </div>

                </div>

                <div>
                  
                    <LabelText text="Symptoms"/>
                    <LocalMultiSelect
                        data={symptomsData}
                        // onChange={}
                        onChange={(values: any) => {
                            setSymptoms((values).map((value: string) => symptomsData.find((item: SymptomsInterface) => item.ID === value)))
                        }}
                        value={symptoms ? symptoms.map((c) => c.ID) : []}
                    />
                    {symptoms === undefined && <ErrorText text='Required' />}
                </div>

                <div className="flex justify-end mt-8">
                    <button
                        className="bg-blue-400 hover:bg-green-400 px-4 py-2 rounded-lg font-mono text-sm lg:text-base font-semibold"
                        onClick={() => getDiagnoses()}
                    >
                        Get diagnosis
                    </button>
                </div>
            </SectionCard>
        </div>
    )
}