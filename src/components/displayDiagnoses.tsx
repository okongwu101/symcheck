"use client";

import { allDiagnosisAtom } from "@/lib/atoms";
import { useAtom } from "jotai";
import SectionCard from "./sectionCard";
import { DiagnosisInterface } from "@/lib/interfaces";
import { Card } from "@mantine/core";
import { LabelText, ValuesText } from "./texts";

export default function DisplayDiagnoses() {
    const [fetchedDiagnoses] = useAtom<DiagnosisInterface[]>(allDiagnosisAtom);

    console.log("this is fetched diagnosis", fetchedDiagnoses);

    return (
        <div>
            {fetchedDiagnoses.length !== 0 && (
                <div className="px-4 mt-8">
                    <SectionCard>
                        <div className="text-center text-sm font-sans font-semibold">Diagnoses</div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-2 gap-y-4 mt-4">
                            {fetchedDiagnoses.map((item) => (
                                <div key={item.Issue.Ranking}>
                                    <Card className="border border-blue-200 p-4 w-full rounded-lg">
                                        <div>
                                            <div>
                                                <LabelText text="Diagnosis:" />{" "}
                                                <ValuesText text={`${item.Issue.Name}`} />
                                            </div>
                                            <div>
                                                <LabelText text="Accuracy:" />
                                                <span className={`
                                                text-xs font-semibold font-mono font tracking-wide px-4 rounded-lg py-2 mx-6
                                                ${item.Issue.Accuracy >= 85 ? "bg-green-200" : null}
                                                ${item.Issue.Accuracy >= 65 && item.Issue.Accuracy < 85 ? "bg-orange-200" : null }
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
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </SectionCard>
                </div>
            )}
        </div>
    );
}

// const items = [
//     { id: 1, rank: 1, content: "Item with rank 1" },
//     { id: 2, rank: 2, content: "Item with rank 2" },
//     // ... and so on
//   ];

//   function ColoredElements({ items }) {
//     return (
//       <div>
//         {items.map((item) => (
//           <div key={item.id} style={{ backgroundColor: colors[(item.rank - 1) % colors.length] }}>
//             {item.content}
//           </div>
//         ))}
//       </div>
//     );
//   }
