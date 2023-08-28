'use client'

import { allDiagnosisAtom } from "@/lib/atoms";
import { DiagnosisInterface } from "@/lib/interfaces";
import { useAtom } from "jotai";


type TextPropTypes = {
    text: string;
}


export function ErrorText(props: TextPropTypes) {
    return (
        <div className="text-red-700 text-xs mt-1">
            {props.text}
        </div>
    )
}

export const LabelText = (props: TextPropTypes) => {
    return(
        <span className="text-xs lg:text-sm font-sans font-medium">
            { props.text}
        </span>
    )
}

export const ValuesText = (props: TextPropTypes) => {
    return(
        <span className="text-xs lg:text-sm font-mono font-semibold tracking-wide px-4 text-rose-950">
            { props.text }
        </span>
    )
}

export const AccuracyText = (props: TextPropTypes) => {
    const [fetchedDiagnoses, ] = useAtom<DiagnosisInterface[]>(allDiagnosisAtom)
    
    return(
        <span
        className=""
        >{props.text}</span>
    )
}