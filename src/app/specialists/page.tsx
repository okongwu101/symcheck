

import SectionCard from "@/components/sectionCard"
import { LabelText, PageTitle, ValuesText } from "@/components/texts"
import { getSpecialists } from "@/lib/dataFetch/specialistsFetch"
import { Card } from "@mantine/core"
import { IconChevronLeft, IconHome } from "@tabler/icons-react"
import CryptoJS from "crypto-js"
import Link from "next/link"



export default async function GetSpecialistsClient({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {




    // obtain the token for fetch request to the api
    const uriHash = CryptoJS.HmacMD5(`${process.env.AUTH_BASE}`, `${process.env.NEXT_PUBLIC_PASSWORD}`);
    const hashString = uriHash.toString(CryptoJS.enc.Base64)


    // fetch the token and revalidate every 2 hours
    const res = await fetch(`${process.env.AUTH_BASE}`, {
        next: { revalidate: 7200 },
        method: "POST",
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_USERNAME}:${hashString}`,
            "Content-Type": "application/json"
        }
    })

    const data = await res.json()
    const token = await data.Token



// retrieve the fetch params from url
    const symptomsParams = searchParams.symptoms
    const genderParams = searchParams.gender
    const yearParam = searchParams.year

    let finalSymptomsParams: string[] = [""]

    if (typeof symptomsParams === "string") {
        finalSymptomsParams = [(symptomsParams)]
    }

    if (typeof symptomsParams === "object") {
        finalSymptomsParams = symptomsParams?.map(s => {
            return (s)
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



    const specialists = await getSpecialists(token, finalSymptomsParams, finalGenderParams, finalYearParams)

 


    return (
        <div className="px-4 mt-8 lg:container mx-auto lg:px-52">
            <div className='flex justify-start flex-row items-center gap-4 ml-4 mt-4 mb-6'>

                <div>
                    <Link href="/diagnosis">
                        <IconHome />
                    </Link>
                </div>

                <div>
                    <Link href={{
                        pathname: "/display-diagnoses",
                        query: {
                            symptoms: searchParams.symptoms,
                            gender: searchParams.gender,
                            year: searchParams.year
                        }
                    }}>
                        <IconChevronLeft />
                    </Link>
                </div>

            </div>
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

            <div className="flex justify-end mt-6 mr-4">
                <Link href={{
                    pathname: "/display-diagnoses",
                    query: {
                        symptoms: searchParams.symptoms,
                        gender: searchParams.gender,
                        year: searchParams.year
                    }
                }}
                className="bg-sky-950 py-2 px-4 rounded-lg text-white font-sans text-sm md:text-base"
                >
                    Back
                </Link>
            </div>

        </div>
    )
}