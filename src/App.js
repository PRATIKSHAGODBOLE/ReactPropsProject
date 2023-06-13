
//MovieProject comment
//import Movies_App from ./Components/MoviesProject/Movies_App;

import './App.css';
// render manual for below using index.js file
import ReactDOM from 'react-dom/client';

import '../node_modules/bootstrap/dist/css/bootstrap.css'

import Summary from './Components/Summary';
import { Component } from 'react';
// we send array data to summary file same we can send btnclick function

let students = ["Fatima", "Pratiksha", "Krishna", "Vinod", "Santosh", "Chandrashekar", "Nisha Yadav", "Samir Kumar"]

function App() {
  function btnClick(){
    console.log("btn click")
    students.reverse() //reverse string manupulation reverse data
    console.log(students)
     // for Manual rendering because we are not implementing State Management from index.js file
     const root = ReactDOM.createRoot(document.getElementById('root'));
     root.render( <App />);
  }

  //  create promote function
  function promoteName(name){
    console.log("Promote", name) //output = Promote Pratiksha
    //condition
    students = [name, ...students.filter((stu)=> stu !== name)] //jis name wali button but click krege wo first aayega baki data uske bad aayega
    const root = ReactDOM.createRoot(document.getElementById('root'));
     root.render( <App />);
  }

  return (
    <div className="container">
      <h2 className='text-center bg-warning mb-10 border border-dark'>Eduonix Students</h2>
      {/* array ko table formate me add kiya ! table data from bootstrap */}
      {/* table-hover class used */}
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Character</th>
            <th scope="col">Actions</th>
            <th scope="col">Promote</th>
          </tr>
        </thead>

        <tbody>
          {/* table body ke andar ham map function use krege for data*/}

          {
            students.map((student, i) => (
                                                         // summary js td ke tr define here(tr ke andar wo data likhege jo hame summary component ko send krna hai)
              <tr key={i}>                              {/* key define kiya kyuki console me error aa raha tha */}
                <Summary name={student} index={i} callback={btnClick} 
                Promotecallback={promoteName}/>          {/* index use for S.NO in output(using this line we send data to summary file)*/}
              </tr>
            ))
          }

        </tbody>
      </table>
      {/* after complete table work we work on btn event */}
      {/* <button className='btn btn-primary' onClick={btnClick}>Click me</button> */}
      {/* we used this button on summary js file */}

      {/* Movie project */}
      {/* <Movies_App /> */}
    </div>
  );
}

export default App;
