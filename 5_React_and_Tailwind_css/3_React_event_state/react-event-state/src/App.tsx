import { Suspense } from 'react';
import './App.css'
import Batter from './Batter';
import Counter from './Counter';
import Users from './Users';
import Posts from './Posts';
// import Cart from './Cart';


const usersDataPromise = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = res.json();
  return data;
}

const postDataPromise = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = res.json();
  return data;
}


function App() {

  function handleClick(){
    alert("Button clicked");
  }

  const handleClick2 = () => {
    alert('Button pressed');
  }

  const handleAddToCart = (item : number) => {
    alert('Confirm Buy '+ item);
  }

  return (
    <>
      <button onClick={handleClick}>Click Me</button>
      <h2>React Practice</h2>
      <button onClick={handleClick2}>Click Me 2</button>
      <p>Gap</p>
      <button onClick={() => alert('Inside function')}>Click Me 3</button>
      <p>Another Gap</p>
      <button onClick={() => handleAddToCart(50)}>Click Me 4</button>
      {/* <Cart></Cart> */}
      <Counter></Counter>
      <Batter></Batter>



      <Suspense fallback={<p>Loading...</p>}>
        <Users usersDataPromise = {usersDataPromise()}></Users>
      </Suspense>

      <Suspense fallback={<p>Loading post data...</p>}>
        <Posts postDataPromise={postDataPromise()}></Posts>
      </Suspense>
      
    </>
  )
}

export default App


/**
 * 1. Suspense fallback
 * 2. Create a promise function to load data
 * 3. Send the promise to the component to load data
*/


/**
 * 1. Component
 * 2. jsx (conditional rendering, list render)
 * 3. props
 * 4. event
 * 5. state
 * 6. data loading (use)
 */