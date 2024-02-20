

import { PageTitle } from '@/components/texts';
import { getDiagnosisDetail } from '@/lib/dataFetch/diagnosisDetailFetch';
import { IconChevronLeft, IconHome } from '@tabler/icons-react';
import CryptoJS from "crypto-js";
import Link from 'next/link';
import DiagnosisDetailsClient from './diagnosis-details-client';


export default async function DiagnosisDetailsPage({ searchParams }: {
    searchParams: { [key: string]: string | string[] | undefined }
}) {

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



    // retrieve the diagnosis id
    const search = searchParams.diagnosisId

    let diagnosisID: string = ""
    if (!!search && typeof search === "string") {
        diagnosisID = search
    }



    const detail = await getDiagnosisDetail(diagnosisID, token)






    return (
        <div className='mb-8 lg:container mx-auto lg:px-52'>

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

            <PageTitle text="Diagnosis detail" />


                <DiagnosisDetailsClient detail={detail} />


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






