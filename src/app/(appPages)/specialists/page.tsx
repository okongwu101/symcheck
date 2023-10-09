'use client'

import { diagnosisIDAtom, genderAtom, tokenAtom, yearOfBirthAtom } from "@/lib/atoms"
import { SpecialistsInterface } from "@/lib/interfaces"
import { useQuery } from "@tanstack/react-query"
import { useAtom } from "jotai"
import { Card } from "@mantine/core"
import SectionCard from "@/components/sectionCard"
import { PageTitle, LabelText, ValuesText } from "@/components/texts"



export default function GetSpecialistsClient() {

    // retrieve the diagnosis id
    const [diagnosisID,] = useAtom(diagnosisIDAtom)
    const [gender,] = useAtom(genderAtom)
    const [year,] = useAtom(yearOfBirthAtom)

    // get token via jotai
    const [newToken,] = useAtom(tokenAtom)


    // fetch specialists for a disease
    const { data: specialists, isSuccess } = useQuery<SpecialistsInterface[]>({
        queryKey: [`${process.env.NEXT_PUBLIC_SPECIALIZATION_BASE}token=${newToken}&symptoms=[${diagnosisID}]&gender=${gender}&year_of_birth=${year}&format=json&language=en-gb`],
        enabled: diagnosisID !== 0
    })

    console.log('this is specialists', specialists)
    console.log('this is success', isSuccess)



    return (
        <div className="px-4 mt-8 lg:container mx-auto lg:px-52">
            <PageTitle text="Recommended specialists" />
            {
                specialists !== undefined && specialists.length !== 0 &&
                <SectionCard>
                    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-x-2 gap-y-4 mt-4">
                        {
                            specialists?.map((item) => (
                                <div key={item.ID}>
                                    <Card className="border border-blue-200 w-full p-4 rounded-lg
                                    flex flex-row justify-between gap-4 px-4">
                                        <div className="flex flex-col gap-4">
                                            <div className="flex flex-row gap-2 lg:gap-6">
                                                <LabelText text="Name" />
                                                <ValuesText text={`${item.Name}`} />
                                            </div>
                                            <div className="flex flex-row gap-2 lg:gap-6 items-baseline">
                                                <LabelText text="Accuracy:" />
                                                <span className={`
                                                text-xs font-semibold font-mono font tracking-wide px-4 rounded-lg py-2
                                                ${item.Accuracy >= 85 ? "bg-green-200" : null}
                                                ${item.Accuracy >= 65 && item.Accuracy < 85 ? "bg-orange-200" : null}
                                                ${item.Accuracy >= 50 && item.Accuracy < 65 ? "bg-amber-200" : null}
                                                ${item.Accuracy < 50 ? "bg-red-200" : null}
                                                `}>
                                                    <span
                                                    >
                                                        {item.Accuracy.toFixed(1)}%
                                                    </span>

                                                </span>


                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            ))


                        }
                    </div>
                </SectionCard>
            }



        </div>
    )
}