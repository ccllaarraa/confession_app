import React from 'react';
import './App.css';
import Instruction from "./Components/Instruction/Instruction"
import TextBlocks from "./Components/TextBlocks/TextBlocks"

  

class App extends React.Component {
  state = {
    data: []
  }

  render() { //between render and return here is the place to put the consts
   
    return (
      <div className="App" style={{backgroundColor: "grey", width:"100%", marginTop: "-10px", height: "100vh"}}>
         
        <Instruction/>
        <TextBlocks/>
      </div>
    );
  }
}

export default App;
