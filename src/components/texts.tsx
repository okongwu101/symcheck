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
        <span className="text-xs font-sans font-semibold tracking-wider">
            { props.text}
        </span>
    )
}

export const ValuesText = (props: TextPropTypes) => {
    return(
        <span className="text-xs font-mono font-semibold tracking-wide px-4 text-rose-950">
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