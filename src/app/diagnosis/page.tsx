import AllDiagnosis from "@/components/allDiagnosis";
import Description from "@/components/description";
import DisplayDiagnoses from "@/components/displayDiagnoses";


import CryptoJS from "crypto-js";


export default async function Diagnosis() {

    // obtain the token for fetch request to the api
    const uriHash = CryptoJS.HmacMD5(`${process.env.AUTH_BASE}`, `${process.env.SANDBOX_PASSWORD}`);
    const hashString = uriHash.toString(CryptoJS.enc.Base64)


    const res = await fetch(`${process.env.AUTH_BASE}`, {
        next: { revalidate: 7000 },
        method: "POST",
        headers: {
            Authorization:  `Bearer ${process.env.SANDBOX_USERNAME}:${hashString}`,
            "Content-Type": "application/json"
        }
    })

    const data = await res.json()
    const token = await data.Token


    return (
        <div className="lg:container mx-auto lg:px-52">

            <div className="text-base lg:text-2xl font-medium text-center mt-4 mb-6">
                Diagnosis Checker

            </div>
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