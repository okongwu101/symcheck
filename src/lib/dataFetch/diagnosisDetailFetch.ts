import { DiagnosisDescriptionInterface, DiagnosisInterface } from "../interfaces";

export async function getDiagnosisDetail(
  diagnosisID: string,
  token: string
): Promise<DiagnosisDescriptionInterface> {
 const res = await fetch(
   //   `${process.env.NEXT_PUBLIC_SYMPTOMS_BASE}token=${token}&format=json&language=en-gb`
   `${process.env.NEXT_PUBLIC_ISSUES_BASE}${diagnosisID}/info?token=${token}&format=json&language=en-gb`
 );



  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("No details. Try again.");
  }

  return res.json();
}
