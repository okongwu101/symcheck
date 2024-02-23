"use server";

import { SpecialistsInterface } from "../interfaces";

export async function getSpecialists(
  token: string,
  symptoms: string[],
  gender: string,
  year: string
): Promise<SpecialistsInterface[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SPECIALIZATION_BASE}token=${token}&symptoms=[${symptoms}]&gender=${gender}&year_of_birth=${year}&format=json&language=en-gb`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("No diagnosis fetched. Try again.");
  }

  return res.json();
}
