'use client'

import CryptoJS from "crypto-js";
import { tokenAtom } from "../atoms";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { SymptomsInterface } from "@/components/selectFormComponents";
import { useQuery } from "@tanstack/react-query";

// export const useToken = () => {
   
//     const uriHash = CryptoJS.HmacMD5(`${process.env.NEXT_PUBLIC_AUTH_BASE}`, `${process.env.NEXT_PUBLIC_SANDBOX_PASSWORD}`);
//     const hashString = uriHash.toString(CryptoJS.enc.Base64)

//     // let token: string = ""

//     const [freshToken, setFreshToken] = useState('')

//     setInterval(async () => {


//         const res = await fetch(`${process.env.NEXT_PUBLIC_AUTH_BASE}`, {
//             next: { revalidate: 7000 },
//             method: "POST",
//             headers: {
//                 Authorization: `Bearer ${process.env.NEXT_PUBLIC_SANDBOX_USERNAME}:${hashString}`,
//                 "Content-Type": "application/json"
//             }
//         })

//         const data = await res.json()
//         const token = await data.Token

//         setFreshToken(token)

//     }, 7200)

//     return freshToken
// }



// export const useSymptoms = () => {
//     const uriHash = CryptoJS.HmacMD5(`${process.env.NEXT_PUBLIC_AUTH_BASE}`, `${process.env.NEXT_PUBLIC_SANDBOX_PASSWORD}`);
//     const hashString = uriHash.toString(CryptoJS.enc.Base64)

//     const [fetchedToken, setFetchedToken] = useState<string>("")
//     const [fetchedSymptoms, setFetchedSymptoms] = useState<SymptomsInterface[]>([{ ID: "", Name: "" }])

//     // fetch token

//     async () => {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_AUTH_BASE}`, {
//             // next: { revalidate: 7000 },
//             method: "POST",
//             headers: {
//                 Authorization: `Bearer ${process.env.NEXT_PUBLIC_SANDBOX_USERNAME}:${hashString}`,
//                 "Content-Type": "application/json"
//             }
//         })

//         const data = await res.json()
//         // const token = await data.Token

//         console.log('what is going here  0000000000000000000000000000000000000000000000000000')

//         setFetchedToken(data.Token)
//     }

   

//     // fetch symptoms
    

//     // const { data: symptoms } = useQuery<SymptomsInterface[]>({
//     //     queryKey: [`${process.env.NEXT_PUBLIC_SYMPTOMS_BASE}token=${fetchedToken}&format=json&language=en-gb`],
//     //     enabled: fetchedToken !== ""
//     // })

//     // setFetchedSymptoms(symptoms ?? [])


// useEffect(() => {

// (async () => {

//     if (fetchedToken !== "") {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_SYMPTOMS_BASE}token=${fetchedToken}&format=json&language=en-gb`)
//         const resData = await res.json()
//         setFetchedSymptoms(resData)
//     }
// })()



// }, [fetchedToken])








//     return(fetchedSymptoms)
// }




