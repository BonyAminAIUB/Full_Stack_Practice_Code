import { Suspense, useState } from 'react';
import './App.css'
import Banner from './components/Banner';
import Nav from './components/Nav';
import Players from './components/players/Players';
import './types/player';
import type { Iplayer } from './types/player';

const playersPromise = async ():Promise<Iplayer[]> => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
}

function App() {

  const [coin, setCoin] = useState(4000);

  return (
    <>
      <Nav coin={coin}></Nav>
      <Banner></Banner>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Players playersPromise={playersPromise()} coin={coin} setCoin={setCoin}></Players>
      </Suspense>
    </>
  )
}

export default App
