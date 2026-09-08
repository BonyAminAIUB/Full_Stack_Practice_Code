import { Suspense } from 'react';
import './App.css'
import type { CountryType } from './type';
import Countries from './component/Countries/Countries';

// Step-1 : Create a promise to load data
const countriesPromise = async ():Promise<CountryType[]> => {
    const res = await fetch('https://openapi.programming-hero.com/api/all');
    const data = await res.json();
    return data.countries;
  }


function App() {
  return (
    <>
      <h2>World On The Go...</h2>

      <Suspense fallback={<div>Data Loading...</div>}>
        <Countries countriesPromise={countriesPromise()}></Countries>
      </Suspense>
    </>
  )
}

export default App
