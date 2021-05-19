import React from 'react'
import ReactDOM from 'react-dom'
import App3 from './components/App3'


const index = () =>{

    return(
        <div className="container-fluid">
            
            <App3 />
           
        </div>
    );
}

ReactDOM.render(<div>{index()}</div>, document.querySelector("#root"));