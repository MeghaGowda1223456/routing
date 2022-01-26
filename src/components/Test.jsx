import React from 'react'
import {withRouter} from 'react-router-dom'


function Test(props) {
    console.log('test props',props);
    const navigateToLogin=()=>{
        props.history.push('./login')
    }

    return (
        
        <div>
            TEST COMPONENT
            <button onClick={()=>{navigateToLogin()}}>Login</button>
        </div>
    )
}

export default withRouter(Test) 
