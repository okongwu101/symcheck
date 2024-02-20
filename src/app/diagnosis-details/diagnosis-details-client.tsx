'use client'

import { DiagnosisDescriptionInterface } from "@/lib/interfaces"
import { Accordion, AccordionItem } from "@nextui-org/react"


export default function DiagnosisDetailsClient({detail}: {detail: DiagnosisDescriptionInterface}) {
    return(
        <div>
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

        </div>
    )
}