// import Todo from './Todo';
import './App.css'
import Sports from './Sports'
import Users from './Users'
//import Task from './Task';
// import Book from './Book';


function App() {

  // const books = ['Physics', 'Chemistry', 'Biology', 'Math', 'Bangla', 'English'];

  return (
    <>
      <Users></Users>
      <Sports></Sports>
      {/* {
        books.map(book => <Book name={book}></Book>)
      } */}
      {/* {
        books.map(book => <li>Book name: {book}</li>)
      } */}
      {/* <h1>Get started</h1>
      <Person></Person>
      <button disabled></button>
      <img src="" width="200" height="200" alt="My Pic" />
      <Person/> */}
      {/* <Student1 name='Bony Amin' gpa='3.00'></Student1> */}
      {/* <Student0 name="Md Bony Amin" id="101" gpa='5.00'></Student0>
      <Student0 name='Bony' id='102'></Student0>
      <Developer language='javascript' experience='3'></Developer>
      <Developer language='python' experience='2'></Developer> */}
      {/* <Gadget></Gadget>
      <Student/>
      <Student/>
      <Student/>
      <Student2/> */}
      {/* <Todo task='Practice Coding' time='5.00'></Todo>
      <Todo task='take a shower' time='10.00'></Todo>
      <Todo task='no social media today'></Todo> */}
      {/* <Task name='Finish Module' isDone={true}></Task>
      <Task name='Complete assignment' isDone={false}></Task> */}
    </>
  )
}

// function Person(){
//   return <p>I'm a person</p>
// }

// function Student1(props){
//   console.log('Inside the student1 component', props);
//   console.log(props.name);
//   console.log(props.gpa);
//   const studentStyle = {
//     border : '2px solid red',
//     borderRadius : '10px',
//     margin : '10px'
//     }
//   return(
//     <div style={studentStyle}>
//       <h1>Name: {props.name}</h1>
//       <p>Grades: {props.gpa}</p>
//     </div>
//   )
// }

// function Student0(props) {
//   const styleFun = {
//     border: '2px solid white',
//     borderRadius: '5px'
//   }

//   return (
//     <div style={styleFun}>
//       <h1>Name: {props.name}</h1>
//       <p>Id: {props.id}</p>
//     </div>
//   )
// }

// function Developer(props){
//   return(
//     <div className='student'>
//         <h4>Programming Language: {props.language} </h4>
//         <p>Experience: {props.experience}</p>
//     </div>
//   )
// }

// interface myDetails {
//   name : string;
//   id : number;
// }

// function Gadget(){
//   const total = 10;
//   const details : myDetails = {
//     name : 'Bony',
//     id : 123,
//   }
//   return(
//     <>
//       <p>Some {3+9}</p>
//       <p>Sum {total}</p>
//       <p>Come</p>
//       <p>My details: {details.name}</p>
//     </>
//   )
// }

// function Student(){
//   return (
//     <div className='student'>
//       <h3>Name: </h3>
//       <p>Grades: </p>
//     </div>
//   )
// }


// function Student2(){
//   return (
//     <div style={{
//       border : '5px solid blue',
//       margin : '4px',
//       borderRadius : '16px'
//     }}>
//       <h3>Name: </h3>
//       <p>Grades: </p>
//     </div>
//   )
// }

export default App
