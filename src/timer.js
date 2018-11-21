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
            }
             this.start = this.start.bind(this)   
             this.resetTimer = this.resetTimer.bind(this)      
             this.pause = this.pause.bind(this)  
    }
    start(){
        if(this.state.interval) {
            return
        }
        const interval = setInterval(
            () => {
               this.setState({
                   timer: this.state.timer + 1000
               }) 
            },
            1000
        )
        this.setState({
            interval: interval
        })
    }


    resetTimer() {
        this.setState({timer: 0})
      }
      pause () {
        if(!this.state.interval) {
            return
        }
        clearInterval(this.state.interval)
        this.setState({
            interval: undefined
        })
    }

render () {

    return (<div>
    
    <Transform obj = {this.state.timer}/>
    <div className="grp-button d-flex flex-column align-items-center justify-content-center">
        <button type="button" className="btn btn-outline-primary m-3" onClick={() => {
   this.start();
   this.pause();
}}>Start</button>
        <button type="button" className="btn btn-outline-danger" onClick={() =>{this.resetTimer(); this.pause();}}>resetTimer</button></div>
   );
     </div>
     )

}
}


export default Timer;







