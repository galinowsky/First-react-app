import React from 'react'
import AppContext from '../../context'
const ArticlesView = () => {
    
return (
    <AppContext.Consumer>
        {(context) =>    
          
        <p>This is  view</p> }
 
    </AppContext.Consumer>
)

 
}

export default ArticlesView