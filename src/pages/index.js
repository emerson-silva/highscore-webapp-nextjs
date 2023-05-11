import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../components/Header';
import Footer from '@/components/Footer';
import { Main } from 'next/document';
import WelcomeMessage from '@/components/WelcomeMessage';
import LoginForm from '@/components/LoginForm';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [userName, setUserName] = useState("Fulano");

  return (
    <>
      <Head>
        <title>Curso Outono URI</title>
        <meta name="description" content="JavaScript + React + NextJs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <WelcomeMessage userName={userName}/>
      <LoginForm setUserName={setUserName}/>
      <Footer />
    </>
  )
}
