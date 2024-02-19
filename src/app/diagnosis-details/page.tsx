'use client'

import { useState } from 'react';
import { PageTitle } from '@/components/texts';
import { diagnosisIDAtom, tokenAtom } from "@/lib/atoms";
import { DiagnosisDescriptionInterface } from "@/lib/interfaces";
import { Accordion, AccordionItem } from '@nextui-org/react';
import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";

// { token }: { token: string }

export default function DiagnosisDetailsClient() {

    // retrieve the diagnosis id
    const [diagnosisID,] = useAtom(diagnosisIDAtom)



    const [value, setValue] = useState<string>("")

    const [newToken,] = useAtom(tokenAtom)


    // fetch diagnosis details

    const { data: detail } = useQuery<DiagnosisDescriptionInterface>({
        // queryKey: [`${process.env.NEXT_PUBLIC_ISSUES_BASE}${diagnosisID}/info?token=${newToken}&format=json&language=en-gb`],
        queryKey: [`/api/diagnosisInfo?diagnosisID=${diagnosisID}&token=${newToken}`],
        enabled: diagnosisID !== 0
    })

    console.log('this is detail', detail)
    // console.log('this is new token', newToken)




    return (
        <div className='mb-8 lg:container mx-auto lg:px-52'>

            <PageTitle text="Diagnosis detail" />


            {
                detail !== null && detail !== undefined &&
                <Accordion>
                    <AccordionItem key="description" aria-label="diagnosis description" title="Description">
                        {detail.Description}
                    </AccordionItem>
                    <AccordionItem key="shortDescription" aria-label="diagnosis short description" title="Other description">
                        {detail.DescriptionShort}
                    </AccordionItem>
                    <AccordionItem key="medicalCondition" aria-label="medical condition" title="Medical condition">
                        {detail.MedicalCondition}
                    </AccordionItem>


                    <AccordionItem key="synonyms" aria-label="other names" title="Other names">
                        {detail.Synonyms === null ? detail.ProfName : `${detail.ProfName} | ${detail.Synonyms}`}
                    </AccordionItem>
                    <AccordionItem key="symptoms" aria-label="possible symptoms" title="Possible symptoms">
                        {detail.PossibleSymptoms}
                    </AccordionItem>
                    <AccordionItem key="treatment" aria-label="treatment description" title="Treatment description">
                        {detail.TreatmentDescription}
                    </AccordionItem>
                </Accordion>

            }





        </div>
    )
}






