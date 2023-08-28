'use client'

import { SymptomsInterface } from "@/components/selectFormComponents"
import { atom } from "jotai"
import { DiagnosisInterface } from "./interfaces"

export const errorMessageAtom = atom<string>('')
export const successMessageAtom = atom<string>('')
export const infoMessageAtom = atom<string>('')
export const warnMessageAtom = atom<string>('')


export const allDiagnosisAtom = atom<DiagnosisInterface[]>([])