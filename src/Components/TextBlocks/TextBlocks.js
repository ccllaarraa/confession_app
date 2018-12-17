import React from 'react'
import "./TextBlocks.css" 
import axios from 'axios';


class TextBlocks extends React.Component {
    constructor(){
        super()         // state is to manage the information in "return"
        this.state={   //state should be immutable, doesnt change
            confessions: [],
            confession: '',
            randomConfession: ""
        }

    }

    handleConfessionUpdate = (evt) => { 
        this.setState({
            confession: evt.target.value
        })
    }


    handleTryoutButton = () => {
        axios.get("/api/readSecret") //axios is promise based so we need a .then
        .then((res) => {
            console.log(res.data)
        })
    }

  handlePostConfession = (evt) => { 
    evt.preventDefault() //to avoid question mark in browser
    axios.post("/api/addSecret", {
      confession: this.state.confession  
    }).then((res) => {
        console.log(res.data)
    })
  } 

handleGetRandomSecret = () => {
    axios.get("/api/getRandomSecret")
    .then ((res) => {
        console.log(res.data.confession)
        this.setState({
            randomConfession: res.data.confession
        })
    } )
}

handlePostRandomConfession = () => {
    axios.post("/api/addRandomSecret").then((res)=>{
        
    })
}


    // handleButtonClick = (evt) => {
    //    const confessionsArr = this.state.confessions.slice() //to make a copy of this.state.confessions
    //    confessionsArr.push(this.state.confession) //to push the string content inside the [ ]
    //    this.setState ({
    //        confessions: confessionsArr,
    //        confession: ""
    //    })

    //    axios.post("/api/addConfession")
    //     .then((res)=> {
    //     this.setState({confessionsArr: res.confessionsArr});
    //     })  
    // }



    render (){
   
        // const displayConfession = this.state.confessions.map((confession, index) => {
        //     return <h4 key={index}>{confession}</h4>
        // })

        console.log(this.state)
    return (
            <div className= "main">
                <form className= "" onSubmit={(e) => this.handlePostConfession(e)} >
                <input   
                        type="text"
                        className="box1"  
                        value={this.state.confession}
                        onChange={(e) => this.handleConfessionUpdate(e)}/>

                <button  className="buttons confessButton"> CONFESS FIRST</button>
               
               </form> 

                <button className="buttons confessButton" onClick={this.handleGetRandomSecret}>AFTER CONFESSING YOU ARE ALLOWED TO CLICK HERE</button>
           
{/*                 
                <div className="buttons">
                <button onClick={this.handleTryoutButton} >tryout</button>
                </div>
             */}



                <div className= "box2">{this.state.randomConfession}</div>
            </div>
        )
    }
}

export default TextBlocks