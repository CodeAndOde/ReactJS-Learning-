import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';


function App() {
  return (
    <div className="App">
      <Greet  name='kumar' userame='kk' color='green'/>
      <Greet  name='Sujin'username='su' color='blue'/>
      <Greet name='arjun' username ='arjun' color='red'/>
      {/* <Welcome /> */}
{/* <Hello/> */}
    </div>
  );
      //return React.createElement('div',null,<h1>Hello Moon</h1>)

}


export default App;
