"use client";

import { allDiagnosisAtom, diagnosisFetchedAtom, diagnosisIDAtom, errorMessageAtom } from "@/lib/atoms";
import { useAtom } from "jotai";
import SectionCard from "./sectionCard";
import { DiagnosisInterface } from "@/lib/interfaces";
import { Card } from "@mantine/core";
import { LabelText, PageTitle, ValuesText } from "./texts";
import Link from "next/link";
import { useEffect } from "react";

export default function DisplayDiagnoses() {
    const [fetchedDiagnoses] = useAtom<DiagnosisInterface[]>(allDiagnosisAtom);



    const [diagnosisFetched,] = useAtom(diagnosisFetchedAtom)

    // fetch diagnosis details and pass it to its atom
    const [, setDiagnosisID] = useAtom(diagnosisIDAtom)

    const [, setErrorMessage] = useAtom(errorMessageAtom)
    


    useEffect(() => {
        if (fetchedDiagnoses.length === 0 && diagnosisFetched) {
            setErrorMessage('No result. Modify your symptoms.')
        }
    }, [diagnosisFetched, fetchedDiagnoses.length, setErrorMessage])

    return (
        <div>
            <div>
                {fetchedDiagnoses.length !== 0 && (
                    <div className="px-4 mt-8">
                        <SectionCard>
                            <PageTitle text="Diagnoses" />
                            <div className={`
                        grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-8 mt-4
                        `}>
                                {fetchedDiagnoses.map((item) => (
                                    <div key={item.Issue.Ranking}>
                                        <Card className="border border-blue-200 w-full p-4 rounded-lg
                                     px-4
                                    ">
                                            <div className="flex flex-row gap-4 justify-between">
                                                <div className="flex flex-col gap-4">
                                                    <div className="flex flex-row gap-2 lg:gap-6">
                                                        <LabelText text="Diagnosis:" />
                                                        <ValuesText text={`${item.Issue.Name}`} />
                                                    </div>
                                                    <div className="flex flex-row gap-2 lg:gap-6 items-baseline">
                                                        <LabelText text="Accuracy:" />
                                                        <span className={`
                                                text-xs font-semibold font-mono font tracking-wide px-4 rounded-lg py-2
                                                ${item.Issue.Accuracy >= 85 ? "bg-green-200" : null}
                                                ${item.Issue.Accuracy >= 65 && item.Issue.Accuracy < 85 ? "bg-orange-200" : null}
                                                ${item.Issue.Accuracy >= 50 && item.Issue.Accuracy < 65 ? "bg-amber-200" : null}
                                                ${item.Issue.Accuracy < 50 ? "bg-red-200" : null}
                                                `}>
                                                            <span
                                                            >
                                                                {item.Issue.Accuracy.toFixed(1)}%
                                                            </span>

                                                        </span>


                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-4">

                                                    <Link
                                                        href="/diagnosis-details"
                                                        onClick={() => setDiagnosisID(item.Issue.ID)}
                                                        className="text-xs font-mono font-medium tracking-wider text-blue-600"
                                                    >
                                                        Read more
                                                    </Link>


                                                    <Link
                                                        href="/specialists"
                                                        onClick={() => setDiagnosisID(item.Issue.ID)}
                                                        className="text-xs font-mono font-medium tracking-wider text-blue-600"
                                                    >
                                                        Doctors
                                                    </Link>


                                                    {/* <div className="text-xs font-sans font-semibold tracking-wider text-blue-600">Doctors</div> */}

                                                </div>
                                            </div>

                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </SectionCard>
                    </div>
                )}
            </div>
        </div>
    );
}


// fetchedDiagnoses.length === 0 && diagnosisFetched === true &&