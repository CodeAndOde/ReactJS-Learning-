import React from 'react'

function Greet(){
    // return <h1>Welcome to react js application</h1>
    const Greet = () => <h1></h1>
}

const hello =(props)=> {
console.log(props);

return <h1>hey hello {props.name} and your username is {props.username} fav color is {props.color}</h1>
}

export default hello;