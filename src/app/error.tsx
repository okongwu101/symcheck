'use client'

import { Button } from "@nextui-org/react"



export default function Error(
    { error, reset}: {error: Error & { digest?: string}, reset: () => void}
) {


    return (
        <div className="flex flex-col items-center justify-center gap-16 h-screen font-sans font-medium">
            <p className="text-base md:text-lg">  {error.message}</p>
            <div>
                <Button
                    onClick={() => reset()}
                    className="font-sans font-medium text-sm md:text-base bg-sky-600 text-white"
                >
                    Try again.
                </Button>
            </div>
          
        </div>
    )
}