import React from 'react'
import AppContext from '../../context'
const ArticlesView = () => {
    
return (
    <AppContext.Consumer>
        {(context) =>    
          
        <p>This is  {context}</p> }
 
    </AppContext.Consumer>
)

 
}

export default ArticlesView