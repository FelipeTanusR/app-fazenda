import React from 'react'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from './ui/button'
import { Label } from '@radix-ui/react-label'
import { Input } from './ui/input'

export default function AddJsonDialog() {
  return (
    <Dialog>
        <DialogTrigger asChild>
            <Button>Adicionar animal</Button>
        </DialogTrigger>    
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Cadastro Animal</DialogTitle>
            <DialogDescription>Registre um animal novo.</DialogDescription>
            </DialogHeader>

            <div className='grid gap-4'>
                <div className='grid gap-2'>
                    <Label>Brinco</Label>
                    <Input placeholder='25001' />
                </div>
            </div>


        </DialogContent>
    </Dialog>
  )
}
