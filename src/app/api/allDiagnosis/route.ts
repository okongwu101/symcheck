import { NextResponse } from "next/server";


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");
//   const query = { "token": `${token}` };

  try {
  
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SYMPTOMS_BASE}token=${token}&format=json&language=en-gb`
    );

    const result = await res.json()

    return NextResponse.json(result);
  } catch (error) {
   
  }
}
