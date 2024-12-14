"use client";

import React, { useState } from 'react'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from './ui/button'
import { Label } from '@radix-ui/react-label'
import { Input } from './ui/input'
import { DialogClose } from '@radix-ui/react-dialog'

export default function AddJsonDialog() {

    const [brinco, setBrinco] = useState("");
    const [d_nasc, setD_nasc] = useState("");


    const handleSave = ()=>{
        console.log({
            brinco,
            d_nasc
        });
    };

  return (
    <Dialog>
        <DialogTrigger asChild>
            <Button>Adicionar animal</Button>
        </DialogTrigger>    
        <DialogContent className='max-w-4xl'>
            <DialogHeader>
            <DialogTitle>Cadastro Animal</DialogTitle>
            <DialogDescription>Registre um animal novo.</DialogDescription>
            </DialogHeader>

            <div className='grid gap-4'>
                <div className='grid gap-2'>
                    <Label>Brinco</Label>
                    <Input value={brinco}placeholder='25001' 
                    onChange={(e) => setBrinco(e.target.value) }>
                    </Input>

                </div>
                <div className='grid gap-2'>
                    <Label>Data Nascimento</Label>
                    <Input value={d_nasc} placeholder='dd/mm/aaaa'
                    onChange={(e)=> setD_nasc(e.target.value)} />
                </div>

                <DialogFooter>
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Fechar
                        </Button>
                    </DialogClose>
                    <Button disabled={!brinco||!d_nasc} onClick={handleSave}>Salvar</Button>
                </DialogFooter>


            </div>


        </DialogContent>
    </Dialog>
  )
}
