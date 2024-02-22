'use client'

import { AccordionTexts } from "@/components/accordionTexts"
import { DiagnosisDescriptionInterface } from "@/lib/interfaces"
import { Accordion, AccordionItem } from "@nextui-org/react"


export default function DiagnosisDetailsClient({ detail }: { detail: DiagnosisDescriptionInterface }) {
    return (
        <div className="mx-4 rounded-lg text-3xl">
            <Accordion
                variant="bordered"
                selectionMode="single"
                hideIndicator


            >
                <AccordionItem key="description" aria-label="diagnosis description" title={<AccordionTexts title="Description" />}
                    className="text-5xl"
                >

                    <AccordionTexts content={detail.Description} />

                </AccordionItem>


                <AccordionItem key="shortDescription" aria-label="diagnosis short description" title={<AccordionTexts title="Other description" />}>
                   
                    <AccordionTexts content={detail.DescriptionShort} />
                </AccordionItem>


                <AccordionItem key="medicalCondition" aria-label="medical condition" title={<AccordionTexts title="Medical condition" />}>

                    <AccordionTexts content={detail.MedicalCondition} />
                </AccordionItem>


                <AccordionItem key="synonyms" aria-label="other names" title={<AccordionTexts title="Other names" />}>

                    <AccordionTexts content={detail.Synonyms === null ? detail.ProfName : `${detail.ProfName} | ${detail.Synonyms}`} />
                </AccordionItem>


                <AccordionItem key="symptoms" aria-label="possible symptoms" title={<AccordionTexts title="Possible symptoms" />}>

                    <AccordionTexts content={detail.PossibleSymptoms} />
                </AccordionItem>



                <AccordionItem key="treatment" aria-label="treatment description" title={<AccordionTexts title="Treatment description" />}>
                  
                    <AccordionTexts content={detail.TreatmentDescription} />
                </AccordionItem>
            </Accordion>

        </div>
    )
}