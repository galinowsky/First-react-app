import React from 'react';


const Form = () => (
    <form>
        <input placeholder="name" name="name"></input>
        <input placeholder="link" name="link"></input>
        <input placeholder="image" name="image"></input>
        <textarea placeholder="description" name="description"></textarea>
        <button>add new item</button>
        
    </form>

);

export default Form;