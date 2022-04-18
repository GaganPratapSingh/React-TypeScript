import React from 'react';
import logo from './logo.svg';
import './App.css';
import GreetMessage from './Components/GreetMessage';
import { Person } from './Components/Person';
import { PersonList } from './Components/PersonList';
import { Status } from './Components/Status';

function App() {

  const personDetail={
    fname:"Bruce",
    lname:"Wayne"
  }


  const person=[
  {
    fname:'Bruce',
    lname:'Wayne'
  },
  {
    fname:'Harry',
    lname:'Potter'
  },
  {
    fname:'Rambo',
    lname:'Desuja'
  }
]

  return (
    <div className="App">
      <GreetMessage name='Gagan' msgCount={20} flag={false} />
      <Person name={personDetail}/>
      <PersonList  names={person}/>
      <Status status="successfull"/>
    </div>
  );
}

export default App;
