import React from 'react'
import  '../style.css'

class App2 extends React.Component
{

    state={ arr:[ [1,1,1,1],[2,2,2,2],[3,3,3,3],[4,4,4,0] ] };

    renderList= () =>{
        return this.state.arr.map((singledim)=>{
            return (
                <div className="row">
            {singledim.map((singlebox)=>{
                return (
                    <div className="col-3 ">
                        <div className="box">{singlebox}</div>
                    </div>
                );
            })
        }
            </div>
            );

        }
            
        );

    }

    renderList1= () =>{
        return this.state.arr.map((singledim)=>{
            return (
                <div className="row">
            {singledim.map((singlebox)=>{
                return (
                    <div className="col-3  border border-primary">
                        <div className="box">{singlebox}</div>
                    </div>
                );
            })
        }
            </div>
            );

        }
            
        );

    }

render(){
    return(
        <div className="container ">

        {this.renderList()}
        </div>
    );
}
}

export default App2;