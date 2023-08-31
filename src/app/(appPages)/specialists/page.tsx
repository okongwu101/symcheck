import GetSpecialistsClient from "@/components/getspecialistClient";
import { PageTitle } from "@/components/texts";
import CryptoJS from "crypto-js";

export default async function GetSpecialists() {
    // obtain the token for fetch request to the api
    const uriHash = CryptoJS.HmacMD5(`${process.env.AUTH_BASE}`, `${process.env.NEXT_PUBLIC_PASSWORD}`);
    const hashString = uriHash.toString(CryptoJS.enc.Base64)


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
    return(
        <div className="lg:container mx-auto lg:px-52">
            <PageTitle text="Recommended specialists" />
            <GetSpecialistsClient token={token} />
            <div className="mt-16"></div>
        </div>
    )
}