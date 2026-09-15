import { Suspense } from 'react';
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

  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Players playersPromise={playersPromise()}></Players>
      </Suspense>
    </>
  )
}

export default App
