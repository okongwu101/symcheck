'use client'

import { Button } from "@nextui-org/react"
import { useRouter } from "next/navigation"


export default function NoFindingPrompt() {

    const router = useRouter()
    return(
        <div className="flex flex-col items-center justify-center gap-16 h-screen font-sans font-medium">
            <p className="text-base md:text-lg">No finding. Try again.</p>

            <div>
                <Button 
                onClick={() => router.back()}
                className="font-sans font-medium text-sm md:text-base bg-sky-600 text-white"
                >
                    Back
                </Button>
            </div>

        </div>
    )
}