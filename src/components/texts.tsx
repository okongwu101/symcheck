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
        <span className="text-xs font-mono font-semibold tracking-wide text-rose-950">
            { props.text }
        </span>
    )
}

export const AccuracyText = (props: TextPropTypes) => {
    
    return(
        <span
        className=""
        >{props.text}</span>
    )
}

export const PageTitle = (props: TextPropTypes) => {
    return(
        <div className="text-center text-base md:text-xl font-sans font-semibold my-6 underline underline-offset-8 mb-8">
            { props.text}
        </div>
    )
}

export const AccordionPanelText = (props: TextPropTypes) => {
    return(
        <div className="text-xs font-mono font-semibold tracking-wider px-6 py-4 leading-7 text-justify">
            {props.text}
        </div>
    )
    
}

export const SectionCardHeading = (props: TextPropTypes) => {
    return(
        <div className="text-base font-mono font-semibold tracking-wider mb-8">
            {props.text}
        </div>
    )
}