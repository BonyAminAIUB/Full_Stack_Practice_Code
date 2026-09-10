import { Suspense } from 'react';
import './App.css'
import type { ProductType } from './type';
import Products from './products/Products';
import BestSelling from './bestSelling/BestSelling';

const productPromise = async ():Promise<ProductType[]> => {
  const res = await fetch('https://fakestoreapi.com/products');
  const data = await res.json();
  return data;
}

const bestSellingPromise = async ():Promise<ProductType[]> => {
  const res = await fetch('https://fakestoreapi.com/products');
  const data = res.json();
  return data;
}

function App() {

  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Products productPromise={productPromise()}></Products>
        <h1 className="best-selling-title">Best Selling Products</h1>
        <BestSelling bestSellingPromise={bestSellingPromise()}></BestSelling>
      </Suspense>
    </>
  )
}

export default App
