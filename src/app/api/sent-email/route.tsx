// import {Resend} from "resend";
// import WelcomeTemplate from "../../../../emails/WelcomeTemplate";
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(){
//     resend.emails.send({
//         from:"...",
//         to:"...",
//         subject:"...",
//         react:<WelcomeTemplate name="John Doe" />
//     })

//     return NextResponse.json({message:"Email sent successfully"},{status:200})
// }

export async function GET(request: NextRequest) {
  return NextResponse.json({ seccess: "true" }, { status: 200 });
}
