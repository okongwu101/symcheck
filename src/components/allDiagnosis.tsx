'use client'

import { GenderSelectData } from "@/lib/dataSource/patientGenderDataSource"
import { YearPickerInput } from '@mantine/dates'
import dayjs from "dayjs"
import Link from "next/link"
import { useState } from "react"
import SectionCard from "./sectionCard"
import { LocalMultiSelect, SymptomsInterface, ValueLabelSelect } from "./selectFormComponents"
import { ErrorText, LabelText, SectionCardHeading } from "./texts"



export default function AllDiagnosis({ symptomsData }: { symptomsData: SymptomsInterface[] }) {


    const [birthYear, setBirthYear] = useState<Date | null>(null);
    const [patientGender, setPatientGender] = useState("")
    const [symptoms, setSymptoms] = useState<string[]>([])
    


    /*
        format the birthYear
        i.e. retrieve the actual year from the date object
    */
    const dateString = birthYear?.toDateString()
    const date = dayjs(dateString)
  


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
                            onChange={(value: any) => {setPatientGender(value)}}
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
                    {
                        birthYear !== null && patientGender !== "" && symptoms.length > 0 &&
                        <Link
                            className="bg-blue-400 hover:bg-green-400 px-4 py-2 rounded-lg font-mono text-sm lg:text-base font-semibold"
                            href={{
                                pathname: '/display-diagnoses',
                                query: {
                                    symptoms: symptoms,
                                    gender: patientGender,
                                    year: Number(dayjs(birthYear).format("YYYY"))
                                }
                            }}
                        >
                            Get diagnoses
                        </Link>
                    }

                </div>


            </SectionCard>
        </div>
    )
}