'use client'


import { atom } from "jotai"
import { DiagnosisInterface } from "./interfaces"



export const errorMessageAtom = atom<string>('')
export const successMessageAtom = atom<string>('')
export const infoMessageAtom = atom<string>('')
export const warnMessageAtom = atom<string>('')


export const allDiagnosisAtom = atom<DiagnosisInterface[]>([])

export const diagnosisIDAtom = atom<number>(0)

export const genderAtom = atom<string>("")

export const yearOfBirthAtom = atom<string>("")

export const tokenAtom = atom<string>("")


// atom to track when all diagnosis is successfully fetched 
// in alldiagnosis component
export const diagnosisFetchedAtom = atom<boolean>(false)


