import React from 'react';

class MyComponent extends React.Component {


    state = {
        text : 'test state',
    }

    render() {
        return (
            <>
            <input placeholder='your text' />
            <h1>{this.state.text}</h1>
            </>
        )
    }
}

export default MyComponent