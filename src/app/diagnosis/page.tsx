// 'use client'

import AllDiagnosis from "@/components/allDiagnosis";
import Description from "@/components/description";
import DisplayDiagnoses from "@/components/displayDiagnoses";
import { PageTitle } from "@/components/texts";
import React from "react";

import { HmacMD5 } from "crypto-js";



import CryptoJS from "crypto-js";




export default async function Diagnosis() {

    

    // obtain the token for fetch request to the api
    const uriHash = CryptoJS.HmacMD5(`${process.env.AUTH_BASE}`, `${process.env.NEXT_PUBLIC_PASSWORD}`);
    // const uriHash = HmacMD5(`${process.env.AUTH_BASE}`, `${process.env.NEXT_PUBLIC_PASSWORD}`);
    // const uriHash = CryptoJS
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




    return (
        <div className="lg:container mx-auto lg:px-52">

            <PageTitle text="Diagnosis checker" />
            <Description />

            <div>
                <AllDiagnosis token={token} />
            </div>

            <div>
                <DisplayDiagnoses />
            </div>

            <div className="mt-16"></div>

        </div>
    )
}