import React from 'react'

const Alert =(props)=>{

    return(
        <div>
            {alert(props.content)}
        </div>
    );
}

export default alert;