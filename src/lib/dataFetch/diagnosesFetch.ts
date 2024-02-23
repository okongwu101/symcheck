"use server";

import { DiagnosisInterface } from "../interfaces";

export async function getDiagnoses(
  symptoms: number[],
  gender: string,
  year: string,
  token: string
): Promise<DiagnosisInterface[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DIAGNOSIS_BASE}symptoms=[${symptoms}]&gender=${gender}&year_of_birth=${year}&token=${token}&language=en-gb`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("No diagnosis fetched. Try again.");
  }

  return res.json();
}
