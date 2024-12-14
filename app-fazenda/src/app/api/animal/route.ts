import prisma from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const {userId} = await auth();
    if(!userId){
        return NextResponse.json({error: "Não autorizado"}, {status: 401})
    }

    const {brinco, idade, d_nasc, d_obt} = await req.json();

    try{
        const json = await prisma.animal.create({
            data: {
                brinco,
                idade,
                d_nasc,
                d_obt,
                userId
            }
        });
        return NextResponse.json (json);
    }catch(error){
        console.error('Erro salvando JSON', error);
        return NextResponse.json({error: "Erro salvando JSON"}, {status:500});
    }

}