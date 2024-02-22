import { SymptomsInterface } from "@/components/selectFormComponents";

export async function getSymptoms(token: string): Promise<SymptomsInterface[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SYMPTOMS_BASE}token=${token}&format=json&language=en-gb`
  );
 

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Symptoms not fetched. Try again.");
  }

  return res.json();
}
