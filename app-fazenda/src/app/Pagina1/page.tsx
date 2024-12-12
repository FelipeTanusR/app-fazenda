import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import ButtonContainer from '../../components/ButtonContainer';
import Button from '../../components/Button';


function buscar(){
  return <Link href="/api/animal"></Link>
}


export default function HomePage() {
    return (
      
      <Layout>

          <Button>Cadastrar animal</Button>
          <Button>
            <div className="flex gap-4">
              <Link href="/api/animal" className="flex items-center gap-2">
                  <span className="gont-bold"> Buscar</span>
              </Link>
            </div>
          </Button>
      </Layout>
    );
}