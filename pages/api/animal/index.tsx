import { NextApiRequest,NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function (req:NextApiRequest, res:NextApiResponse) {
    const prisma = new PrismaClient({log: ["query"]});
    
    try{
        const animais = await prisma.animal.findMany();
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