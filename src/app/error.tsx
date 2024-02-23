'use client'

import { Button } from "@nextui-org/react"
import { useRouter } from "next/navigation"



export default function Error(
    { error, reset}: {error: Error & { digest?: string}, reset: () => void}
) {

const router = useRouter()
    return (
        <div className="flex flex-col items-center justify-center gap-16 h-screen font-sans font-medium">
            <p className="text-base md:text-lg">  {error.message}</p>
            <div>
                <Button
                    onClick={() => router.back()}
                    className="font-sans font-medium text-sm md:text-base bg-sky-600 text-white"
                >
                    Try again.
                </Button>
            </div>
          
        </div>
    )
}