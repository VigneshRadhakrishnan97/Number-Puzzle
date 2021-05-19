import React from 'react'
import  '../style.css'

class Time extends React.Component
{
 


state ={Seconds:0, Minutes:0};

componentDidUpdate(){
    if(this.state.Seconds===10 || this.props.status==='completed')
    {
        document.removeEventListener('keydown',this.setEvent);
        clearInterval(window.t);
        alert((this.props.status==='completed')?"Completed in "+this.state.Seconds:"Time up : "+this.state.Seconds);
        this.setState({Seconds:0});
    }
    
}


startTimer=()=>{
    console.log('start')
    document.addEventListener('keydown',this.setEvent=(e)=>{this.props.addevent(e);});
    window.t=setInterval(() => {
        if(this.state.Seconds===60)
        {
            this.setState({Seconds:0,Minutes:this.state.Minutes+1}); 
        }
        else
        this.setState({Seconds:this.state.Seconds+1});
        
    }, 1000);
}

stopTimer=()=>{
    document.removeEventListener('keydown',this.setEvent);
clearInterval(window.t);
}

    render(){
        
        return(

            <div className="row border border-success" >
                <div className="col-md-1">
                    <button className="btn btn-primary"  onClick={this.startTimer} >Start</button>
                </div>
                <div className="col-md-1" />
                <div className="col-md-1">
                    <button className="btn btn-primary" onClick={this.stopTimer} >Stop</button>
                </div>
                <div className="col-md-7" />
            <div className="butt-time col-md-1" >
                {this.state.Minutes<=9 ? `0${this.state.Minutes}`:this.state.Minutes}:{this.state.Seconds<=9 ? `0${this.state.Seconds}`:this.state.Seconds}

            </div>
            </div>
        );
    }
}

export default Time;