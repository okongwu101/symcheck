'use client'

import { allDiagnosisAtom } from "@/lib/atoms"
import { useAtom } from "jotai"
import SectionCard from "./sectionCard"
import { DiagnosisInterface } from "@/lib/interfaces"
import { Card } from "@mantine/core"

export default function DisplayDiagnoses() {
    const [fetchedDiagnoses, ] = useAtom<DiagnosisInterface[]>(allDiagnosisAtom)

    console.log('this is fetched diagnosis', fetchedDiagnoses)

    return(
        <div >

            {
                fetchedDiagnoses.length !== 0 &&
                 <div className="px-4 mt-8">
                    <SectionCard>
                        <div className="text-center">Diagnoses</div>
                        <div className="grid grid-cols-2 gap-x-2 gap-y-4 mt-4">
                        {
                            fetchedDiagnoses.map((item) => (
                                <div 
                                key={item.Issue.Ranking}
                                
                                >
                                    <Card
                                    className="border border-blue-200 p-4 w-full"
                                    >
                                        <div>
                                            <div>Diagnosis: {item.Issue.Name}</div>
                                            <div>Accuracy: {item.Issue.Accuracy}</div>
                                            {/* <div>{item.Issue.Name}</div>
                                            <div>{item.Issue.Name}</div> */}
                                        </div>
                                    </Card>
                                </div>
                            ))
                        }
                        </div>
                        
                    </SectionCard>
                 </div>
            }

        </div>
    )
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
  