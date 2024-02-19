'use client'

import { errorMessageAtom, successMessageAtom, infoMessageAtom, warnMessageAtom } from "@/lib/atoms";
import { useAtom } from "jotai";
import { ReactNode, useEffect } from "react"
import { ToastContainer, toast } from 'react-toastify';
import { Slide } from 'react-toastify';



export default function NotificationProvider({ children }: { children: ReactNode }) {


    const [errorMessage, setErrorMessage] = useAtom(errorMessageAtom);
    const [successMessage, setSuccessMessage] = useAtom(successMessageAtom);
    const [infoMessage, setInfoMessage] = useAtom(infoMessageAtom);
    const [warnMessage, setWarnMessage] = useAtom(warnMessageAtom);



    useEffect(() => {
        if (successMessage !== "") {
            toast.success(`${successMessage}`, {


            })
            setTimeout(() => {
                setSuccessMessage("");
            }, 1000);
        }



        if (errorMessage !== "") {
            toast.error(`${errorMessage}`, {


            })
            setTimeout(() => {
                setErrorMessage("");
            }, 1000);
        }



        if (infoMessage !== "") {
            toast.info(`${infoMessage}`, {

            })
            setTimeout(() => {
                setInfoMessage("");
            }, 1000);
        }




        if (warnMessage !== "") {
            toast.warn(`${warnMessage}`, {

                style: {
                    // backgroundColor: "black",
                    color: "black",
                }


            })
            setTimeout(() => {
                setWarnMessage("");
            }, 1000);
        }
    }, [
        errorMessage,
        successMessage,
        infoMessage,
        warnMessage,
        setSuccessMessage,
        setErrorMessage,
        setInfoMessage,
        setWarnMessage,
    ]);

    return(
        <>
           
            <ToastContainer
                autoClose={6000}
                limit={2}
                hideProgressBar
                draggable={false}
                className=""
                theme="colored"
                transition={Slide}
                style={{
                    fontSize: "14px",
                }}
                position="bottom-left"
            />
            { children }
        </>
    )
}


