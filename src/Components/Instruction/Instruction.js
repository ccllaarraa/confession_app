import React from 'react'
import "./Instruction.css" 

class Instruction extends React.Component {
    render (){
        return (
            <div className= "instruction-style">
            <p>if you type a note <span id="green">here</span> , <br></br> 
            you’ll get a note back, <br></br>  and your note will be engraved here <br></br>forever</p>

        </div>
        )
    }
}


// or we could also:
// const Instruction = () => {
//     return (
//         <p>if you type a note here, <br></br> 
//             you’ll get a note back, <br></br>  and your note will be engraved here <br></br>forever</p>
//     )
// }


export default Instruction