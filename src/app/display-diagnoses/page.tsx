
import NoFindingPrompt from "@/components/noFindingPrompt";
import SectionCard from "@/components/sectionCard";
import { LabelText, PageTitle, ValuesText } from "@/components/texts";
import { getDiagnoses } from "@/lib/dataFetch/diagnosesFetch";
import { Card } from "@nextui-org/react";
import { IconHome } from '@tabler/icons-react';
import CryptoJS from "crypto-js";
import Link from "next/link";

export default async function DisplayDiagnoses({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {

    // obtain the token for fetch request to the api
    const uriHash = CryptoJS.HmacMD5(`${process.env.NEXT_PUBLIC_AUTH_BASE}`, `${process.env.NEXT_PUBLIC_PASSWORD}`);
    const hashString = uriHash.toString(CryptoJS.enc.Base64)


    // fetch the token and revalidate every 2 hours
    const res = await fetch(`${process.env.NEXT_PUBLIC_AUTH_BASE}`, {
        next: { revalidate: 7200 },
        method: "POST",
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_USERNAME}:${hashString}`,
            "Content-Type": "application/json"
        }
    })

    const data = await res.json()
    const token = await data.Token



    const symptomsParams = searchParams.symptoms
    const genderParams = searchParams.gender
    const yearParam = searchParams.year




    let finalSymptomsParams: number[] = [0]

    if (typeof symptomsParams === "string") {
        finalSymptomsParams = [Number(symptomsParams)]
    }

    if (typeof symptomsParams === "object") {
        finalSymptomsParams = symptomsParams?.map(s => {
            return Number(s)
        })
    }

    let finalGenderParams: string = ""
    if (!!genderParams && typeof genderParams !== "object") {
        finalGenderParams = genderParams
    }

    let finalYearParams: string = ""
    if (!!yearParam && typeof yearParam !== "object") {
        finalYearParams = yearParam
    }



    // fetch diagnosis for display
    const diagnoses = await getDiagnoses(finalSymptomsParams, finalGenderParams, finalYearParams, token)

   if (diagnoses.length === 0) {
    return(
        <NoFindingPrompt />
    )
   }





    return (
        <div>
            <div className="flex justify-start mt-4 ml-4 mb-6">
                <Link href="/diagnosis">
                    <IconHome />
                </Link>

            </div>
            <PageTitle text="Diagnoses" />
            <div>
                {diagnoses.length !== 0 && (
                    <div className="px-4 mt-8">
                        <SectionCard>

                            <div className={`
                        grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-8 mt-4
                        `}>
                                {diagnoses.map((item) => (
                                    <div key={item.Issue.Ranking}>
                                        <Card className="border border-blue-200 w-full p-4 rounded-lg
                                     px-4
                                    ">
                                            <div className="flex flex-row gap-4 justify-between">
                                                <div className="flex flex-col gap-4">
                                                    <div className="flex flex-row gap-2 lg:gap-6">
                                                        <LabelText text="Diagnosis:" />
                                                        <ValuesText text={`${item.Issue.Name}`} />
                                                    </div>
                                                    <div className="flex flex-row gap-2 lg:gap-6 items-baseline">
                                                        <LabelText text="Accuracy:" />
                                                        <span className={`
                                                text-xs font-semibold font-mono font tracking-wide px-4 rounded-lg py-2
                                                ${item.Issue.Accuracy >= 85 ? "bg-green-200" : null}
                                                ${item.Issue.Accuracy >= 65 && item.Issue.Accuracy < 85 ? "bg-orange-200" : null}
                                                ${item.Issue.Accuracy >= 50 && item.Issue.Accuracy < 65 ? "bg-amber-200" : null}
                                                ${item.Issue.Accuracy < 50 ? "bg-red-200" : null}
                                                `}>
                                                            <span
                                                            >
                                                                {item.Issue.Accuracy.toFixed(1)}%
                                                            </span>

                                                        </span>


                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-4">

                                                    <Link
                                                        href={{
                                                            pathname: "/diagnosis-details",
                                                            query: {
                                                                diagnosisId: item.Issue.ID,
                                                                symptoms: searchParams.symptoms,
                                                                gender: searchParams.gender,
                                                                year: searchParams.year
                                                            }
                                                        }}

                                                        className="text-xs font-mono font-medium tracking-wider text-blue-600"
                                                    >
                                                        Read more
                                                    </Link>


                                                    <Link
                                                        href={{
                                                            pathname: "/specialists",
                                                            query: {
                                                                diagnosisId: item.Issue.ID,
                                                                symptoms: searchParams.symptoms,
                                                                gender: searchParams.gender,
                                                                year: searchParams.year
                                                            }
                                                        }}

                                                        className="text-xs font-mono font-medium tracking-wider text-blue-600"
                                                    >
                                                        Doctors
                                                    </Link>


                                                    {/* <div className="text-xs font-sans font-semibold tracking-wider text-blue-600">Doctors</div> */}

                                                </div>
                                            </div>

                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </SectionCard>
                    </div>
                )}
            </div>
        </div>
    )
}