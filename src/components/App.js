import React from 'react'
import  '../style.css'

class App extends React.Component {
    
    state={ arr:[ [1,1,1,1],[2,2,2,2],[3,3,3,3],[4,4,4,0] ] };
  
    renderbox = (arr1) =>{

        return arr1.map((arr2)=>{
            return (<div className="col-3">
                <div className="numberbox" >
                    {arr2}
                </div>

            </div>);
        });

    }

 renderlist = () =>{  
    return this.state.arr.map( (arr1)=>{
        console.log(arr1);

        return (
            <div className="row">
               {this.renderbox(arr1)}
            </div>
        );
    }

    );
 }

    render() {

        return (
            <div className="container" >
                
                
                        <div className="centerbox" >
                            
                            {this.renderlist()}
                        </div>
                    
            </div>
        );
    }
}

export default App;