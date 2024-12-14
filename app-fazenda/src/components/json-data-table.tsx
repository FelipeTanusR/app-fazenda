import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { format } from 'date-fns'

  const ListaAnimais = [
    {
        brinco: '24004',
        idade: 46,
        d_nasc: "2024-01-23T18:25:43.511Z",
        d_obt: null
    },
  ]

export default function JsonDataTable() {
  return (
    <Table>
        <TableHeader>
            <TableRow>
            <TableHead>Brinco</TableHead>
            <TableHead>Idade</TableHead>
            <TableHead>D_Nasc</TableHead>
            <TableHead>D_Obt</TableHead>
            <TableHead>
                <span className='sr-only'> Compartilhar</span>
            </TableHead>


            </TableRow>
        </TableHeader>
        <TableBody>
            {ListaAnimais.map((data) => (
                <TableRow key={data.brinco}>
                    <TableCell>{data.brinco}</TableCell>
                    <TableCell>{data.idade}</TableCell>
                    <TableCell>{format(new Date(data.d_nasc),"dd/MM/yyyy")}</TableCell>
                    <TableCell>{data.d_obt}</TableCell>
                </TableRow>
                
            ))}
            
        </TableBody>
    </Table>

//.replace(/T.*/,'').split('-').reverse().join('/')
  )
}
