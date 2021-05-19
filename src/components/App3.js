import React from 'react'
import  '../style.css'
import _ from 'lodash'
import Time from './Time'



class App3 extends React.Component
{
    state={ arr:[ [1,1,1,1],[2,2,2,2],[3,3,4,3],[4,4,3,0] ], i:3,j:3,status:'not completed' };

    
    renderList= () =>{
        return this.state.arr.map((singledim,index)=>{
            return (
                <div key={index}>
            {singledim.map((singlebox, inde)=>{
               if(!singlebox)
               return <div className="butt-empty" key={inde} > {singlebox} </div>
                return (
                    <div className="butt" key={inde} >
                        <div>{singlebox}</div>
                    </div>
                );
            })
        }
            </div>
            );

        }
            
        );

    }

    addEvent=(e)=>
    {
       
        var {arr,i,j}=this.state;
            
            
        var t;
        if(e.key==='ArrowUp')
        {
            if(i!==0)
            {
            t=arr[i][j];
            arr[i][j]=arr[i-1][j];
            arr[i-1][j]=t;

           
            this.setState({arr:arr,i:(i-1),j:j});
            }
        }
        else if(e.key==='ArrowLeft')
        {
            if(j!==0)
            {
            t=arr[i][j];
            arr[i][j]=arr[i][j-1];
            arr[i][j-1]=t;

           
            this.setState({arr:arr,i:(i),j:(j-1)});
            }
        }
        else if(e.key==='ArrowRight')
        {
            if(j!==3)
            {
            t=arr[i][j];
            arr[i][j]=arr[i][j+1];
            arr[i][j+1]=t;

            
            this.setState({arr:arr,i:(i),j:(j+1)});
            }
        }
        else if(e.key==='ArrowDown')
        {
            if(i!==3)
            {
            t=arr[i][j];
            arr[i][j]=arr[i+1][j];
            arr[i+1][j]=t;

            
            this.setState({arr:arr,i:(i+1),j:(j)});
            }
        }
        
        console.log (_.isEqual([ [1,1,1,1],[2,2,2,2],[3,3,3,3],[4,4,4,0] ],arr));
        if(_.isEqual([ [1,1,1,1],[2,2,2,2],[3,3,3,3],[4,4,4,0] ],arr) && e.key.includes("Arrow"))
        {
            
            this.setState({status:'completed'});
           
            //remove even listner
        }
        
        
    }
    
    componentDidUpdate(){
        if(this.state.status==='completed')
        this.setState({status:'not completed'});
    }
  
    render(){
      
        return(
           
            <div className="container-fluid">
            <div className="row">
            <div className="col-3" />
                <div className="col-6">
            <Time addevent={this.addEvent} status={this.state.status} />
            </div>
            <div className="col-3" />
            </div>

            <div className="row">
                <div className="col-5" />
                <div className="col-6">
                {this.renderList()}
            </div>
            <div className="col-1" />
            
            </div>
        </div>
        );
    }

}

export default App3;
