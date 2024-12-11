import { NextApiRequest,NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function (req:NextApiRequest, res:NextApiResponse) {
    const prisma = new PrismaClient({log: ["query"]});
    
    try{
        const {animal: animalData} = req.body;
        const animal = await prisma.animal.create({
            data: {
                brinco: animalData.brinco,
                idade: animalData.idade,
                d_nasc: animalData.d_nasc
            }
        })
    }catch(e){
        res.status(500);
        res.json({error: "Não foi possível salvar o animal"});
    }finally{
        await prisma.$disconnect();
    }

    res.status(201);
    res.json({ animal: "salvo"});
    
}