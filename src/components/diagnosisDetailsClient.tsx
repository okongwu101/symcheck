'use client'

import { useState } from 'react';


import { diagnosisIDAtom } from "@/lib/atoms"
import { DiagnosisDescriptionInterface } from "@/lib/interfaces"
import { useQuery } from "@tanstack/react-query"
import { useAtom } from "jotai"
import MyAccordion, { AccordionControl, AccordionItem, AccordionPanel } from './accordion';
import { AccordionPanelText, LabelText } from './texts';

export default function DiagnosisDetailsClient({ token }: { token: string }) {

    // retrieve the diagnosis id
    const [diagnosisID,] = useAtom(diagnosisIDAtom)

    const [value, setValue] = useState<string>("")

    // fetch diagnosis details

    const { data: detail } = useQuery<DiagnosisDescriptionInterface>({
        queryKey: [`${process.env.NEXT_PUBLIC_ISSUES_BASE}${diagnosisID}/info?token=${token}&format=json&language=en-gb`],
        enabled: diagnosisID !== 0
    })


    return (
        <div className='mb-8'>

            {
                detail !== null && detail !== undefined &&
                <MyAccordion value={value} onChange={(value: string) => setValue(value)}>

                    <AccordionItem value="name">
                        <AccordionControl> 
                                <LabelText text="Diagnosis" />
                            
                            </AccordionControl>
                        <AccordionPanel>
                            
                            <AccordionPanelText text={detail.Name} />
                        </AccordionPanel>

                    </AccordionItem>


                        <AccordionItem value="description">
                            <AccordionControl> <LabelText text="Description" /></AccordionControl>
                            <AccordionPanel>
                                <AccordionPanelText text={detail.Description} />
                            </AccordionPanel>

                        </AccordionItem>


                        <AccordionItem value="shortDescription">
                            <AccordionControl> <LabelText text="Other description" /></AccordionControl>
                            <AccordionPanel>
                                <AccordionPanelText text={detail.DescriptionShort} />
                            </AccordionPanel>

                        </AccordionItem>


                        <AccordionItem value="medicalCondition">
                            <AccordionControl> <LabelText text="Medical condition" /></AccordionControl>
                            <AccordionPanel>
                                <AccordionPanelText text={detail.MedicalCondition} />
                            </AccordionPanel>

                        </AccordionItem>


                        <AccordionItem value="synonyms">
                            <AccordionControl> <LabelText text="Other names" /></AccordionControl>
                            <AccordionPanel>
                                <AccordionPanelText text={detail.Synonyms === null ? detail.ProfName : `${detail.ProfName} | ${detail.Synonyms}`} />
                            </AccordionPanel>

                        </AccordionItem>


                        <AccordionItem value="symptoms">
                            <AccordionControl> <LabelText text="Possible symptoms" /></AccordionControl>
                            <AccordionPanel>
                                <AccordionPanelText text={detail.PossibleSymptoms} />
                            </AccordionPanel>

                        </AccordionItem>

                        <AccordionItem value="treatment">
                            <AccordionControl> <LabelText text="Treatment description" /></AccordionControl>
                            <AccordionPanel>
                                <AccordionPanelText text={detail.TreatmentDescription} />
                            </AccordionPanel>

                        </AccordionItem>




                </MyAccordion>

            }





        </div>
    )
}






