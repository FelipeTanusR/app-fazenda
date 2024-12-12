import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import ButtonContainer from '../components/ButtonContainer';
import Button from '../components/Button';


function buscar(){
  return <Link href="/api/animal"></Link>
}


export default function HomePage() {
    return (
      
      <Layout>

          <Button>Cadastrar animal</Button>
          <Button>Buscar
            <button onClick={buscar}></button>
          </Button>
      </Layout>
    );
}