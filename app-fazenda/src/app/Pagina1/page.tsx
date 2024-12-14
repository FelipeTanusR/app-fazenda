import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import ButtonContainer from '../../components/ButtonContainer';
import Button from '../../components/Button';
import { currentUser } from '@clerk/nextjs/server';
import prisma from '@/lib/db';
import JsonEditor from '@/components/json-editor';


function buscar(){
  return <Link href="/api/animal"></Link>
}


export default async function HomePage() {

  const user = await currentUser();
  if(!user){
    return null;
  }

  const loggedInUser = await prisma.user.findUnique({
    where: {clerkUserId: user.id}
  });

  if(!loggedInUser){
    await prisma.user.create({
      data:{
        clerkUserId: user.id,
        name: `${user.firstName} ${user.lastName}`,
        imageUrl: user.imageUrl,
        email: user.emailAddresses[0].emailAddress
      },
    })
  }
    return (
        <div>
          <div className='my-8'>
            <h1 className='text-3xl font-bold'>Dashboard</h1>
            <p>
              Gerencie seus animais e compartilher com outros.
            </p>
          </div>
          <JsonEditor />
        </div>
    );
}