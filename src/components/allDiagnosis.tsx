'use client'

import { GenderSelectData } from "@/lib/dataSource/patientGenderDataSource"
import { LocalMultiSelect, SymptomsInterface, ValueLabelSelect } from "./selectFormComponents"
import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { allDiagnosisAtom, diagnosisFetchedAtom, errorMessageAtom, genderAtom, tokenAtom, yearOfBirthAtom } from "@/lib/atoms"
import { useAtom } from "jotai"
import { YearPickerInput } from '@mantine/dates';
import axios from "axios"
import dayjs from "dayjs"
import SectionCard from "./sectionCard"
import { ErrorText, LabelText, SectionCardHeading } from "./texts"



export default function AllDiagnosis({ token } : { token: string}) {


    const [birthYear, setBirthYear] = useState<Date | null>(null);
    const [patientGender, setPatientGender] = useState("")
    const [symptoms, setSymptoms] = useState<string[]>([])


    const [, setGenderAtom] = useAtom(genderAtom)
    const [, setYearOfBirthAtom] = useAtom(yearOfBirthAtom)
    const [, setFetchedDiagnoses] = useAtom(allDiagnosisAtom)

    // share token using atom
    const [, setToken] = useAtom(tokenAtom)

    // track the successful fetching of all diagnosis
    // use it to control the display of information to user
    // if search yielded no result.
    const [, setDiagnosisFetched] = useAtom(diagnosisFetchedAtom)




 
    /*
        format the birthYear
        i.e. retrieve the actual year from the date object
    */
    const dateString = birthYear?.toDateString()
    const date = dayjs(dateString)
    const year = date.year().toString()


    // notification atoms
    const [, setErrorMessage] = useAtom(errorMessageAtom)


    const { data: symptomsData } = useQuery<SymptomsInterface[]>({
        queryKey: [`/api/allDiagnosis?token=${token}&format=json&language=en-gb`],
        initialData: [{ ID: "", Name: "" }],
        enabled: token !== ""
    })


    // Get diagnosis
    const getDiagnoses = async () => {
        if (birthYear === null) {
            setErrorMessage('Birth year is required')
        }
        if (patientGender === "") {
            setErrorMessage("Gender is required")
        }
        if (symptoms.length === 0) {
            setErrorMessage("Symptom is required")
        }

        if (birthYear !== null && patientGender !== "" && symptoms.length > 0) {

            // fetch dignoses
            const res = await axios.get(`${process.env.NEXT_PUBLIC_DIAGNOSIS_BASE}symptoms=[${symptoms}]&gender=${patientGender}&year_of_birth=${year}&token=${token}&language=en-gb`)

            const allDiag = await res.data

            setFetchedDiagnoses(allDiag)

            setToken(token)

            setDiagnosisFetched(true)

            // set the atom to false after 2 seconds
            setTimeout(() => {
                setDiagnosisFetched(false)
            }, 500)

           
        }
    }
    return (
        <div className='px-4'>

            

            

            <SectionCard>
                <SectionCardHeading text="Enter your data" />
                <div className="grid grid-cols-12 gap-4 mb-8">
                    <div className="col-span-6">
                        <LabelText text="Birth year"/>

                        <YearPickerInput
                            value={birthYear}
                            onChange={(value) => {
                                setYearOfBirthAtom(dayjs(value?.toDateString()).year().toString()),
                                setBirthYear(value)
                            }}
                            size="sm"
                            clearable
                            maxDate={new Date()}
                        />
                        {birthYear === null && <ErrorText text='Required' />}
                    </div>

                    <div className="col-span-6">
                       
                        <LabelText text="Gender"/>
                        <ValueLabelSelect
                            data={GenderSelectData}
                            onChange={(value: any) => {setPatientGender(value), setGenderAtom(value)}}
                        />
                        {patientGender === "" && <ErrorText text='Required' />}
                    </div>

                </div>

                <div>
                  
                    <LabelText text="Symptoms"/>
                    <LocalMultiSelect
                        data={symptomsData}
                        onChange={setSymptoms}
                        value={symptoms}
                    />
                    {symptoms.length === 0 && <ErrorText text='Required' />}
                </div>

                <div className="flex justify-end mt-8">
                    <button
                    type="button"
                        className="bg-blue-400 hover:bg-green-400 px-4 py-2 rounded-lg font-mono text-sm lg:text-base font-semibold"
                        // onClick={() => getDiagnoses()}
                        onClick={getDiagnoses}
                    >
                        Get diagnoses
                    </button>
                </div>
            </SectionCard>
        </div>
    )
}