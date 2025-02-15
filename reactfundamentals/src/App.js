import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/hello';

function App() {
//   return (
//     <div className="App">
//       {/* <Greet /> */}
//       {/* <Welcome /> */}
// <Hello/>
//     </div>
//   );
      return React.createElement('div',null,<h1>Hello Moon</h1>)

}


export default App;
