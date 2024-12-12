import { NextApiRequest,NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log: ["query"]});

export default async function (req:NextApiRequest, res:NextApiResponse) {
    
    
    try{
        const animais = await prisma.animal.findMany();
        console.log(animais)
        res.status(200);
        res.json({animais});
    }catch(e){
        console.log(e);
        res.status(500);
        res.json({error: "Não foi possível resgatar os animais"});
    }finally{
        await prisma.$disconnect();
    }
    
}