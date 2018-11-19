import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import Transform from './transform';
import './timer.css';




class Timer extends React.Component {
    constructor (props){
        super (props)
            this.state = {
                timer:500000,
                isclicked:false,
                start:0
            }
         
             this.start = this.start.bind(this)   
             this.resetTimer = this.resetTimer.bind(this)      
             this.pause = this.pause.bind(this)  
    }
    start(){
     
   
        if(this.state.isclicked===true ) {
            
            return 
    }

        else{
        setInterval(
            ()=> {
                this.setState({
                    timer:this.state.timer+1000,
                    isclicked:true,
                    start:this.start+1
                })
            },1000
        )
    }
    }


    resetTimer() {
        this.setState({timer: 0})
      }
      pause () {

        
      }


render () {

    return (<div>
    
    <Transform obj = {this.state.timer}/>
    <div className="grp-button d-flex flex-column align-items-center justify-content-center">
        <button type="button" className="btn btn-outline-primary  p-2 mb-4" onClick={() =>{this.start()}} >Start</button>
        <button type="button" className="btn btn-outline-danger" onClick={() =>{this.resetTimer()}}>resetTimer</button></div>
   );
     </div>
     )

}
}


export default Timer;







