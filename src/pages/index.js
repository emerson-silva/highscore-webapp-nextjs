import Head from 'next/head'
import Header from '../components/Header';
import Footer from '@/components/Footer';
import WelcomeMessage from '@/components/WelcomeMessage';
import LoginForm from '@/components/LoginForm';
import GameInfo from '@/components/GameInfo';
import { useState } from 'react';
import { LoggedUserContext } from '@/components/LoggedUserContext/LoggedUserContext';

export default function Home() {

  const [userName, setUserName] = useState("Fulano");

  return (
    <LoggedUserContext.Provider value={userName}>
      <Head>
        <title>Curso Outono URI</title>
        <meta name="description" content="JavaScript + React + NextJs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <WelcomeMessage userName={userName}/>
      <LoginForm userName={userName} setUserName={setUserName}/>
      <GameInfo />
      <Footer />
    </LoggedUserContext.Provider>
  )
}
