import React from 'react';
// const element = <h1>Hello Element </h1>
const element = React.createElement("h1", null, "Hello Element"); 

function Element() {
    return element;
}


function ParentDiv() {
   return (
    <>
    <h1>Passed Element by block element</h1>
    <p>This is paragraph for block element</p>
    <button> Read More.. </button>
    </>
   );
}

function Bye() {
    return <h2>GoodBye! </h2>
}

function Calculate() {
    return <h2> 2 + 2 = {2 + 2} </h2>
}

function LogIn() {
    const loggedIn = true;
    return (
        <div>
            {loggedIn ? <h2> Welcome Back ! </h2> : <h1>Please log in!</h1>}
        </div>
    );
}

function ElementDesign() {
    const styles = {
        colo: "red",
        fontSize: "30px",
        background: "gray",
    }

    return <h2 style={styles}>Styled Heading</h2>
}

function RenderList() {
    const fruits = ["Apple", 'Banana','Orange', 'Mango'];
    return (
        <ul>
            <h2>Fruits Items:</h2>
            {fruits.map((fruit, index) => (
                <li key={index}>{fruit}</li>
            ))}
        </ul>
    );
}

// props
function Card(props) {
    const style = {
        background: 'orange',
        color: 'white',
        padding: '15px',
        margin: '10px',
        }

    return (
        <div style={style}>
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
            <a href={props.id}> Read more.. </a>
        </div>
    );
}

function Profile() {
    const person = {
        name: 'Jakariya Aman',
        designation: 'Frontend Developer',
        theme: {
            width: '33%',
            backgroundColor: 'black',
            color: '#fff',
            fontSize: '22px',
            textAlign: 'center',
            borderRadius: '20px'

        }
    };

    return (
        <div style={person.theme}>
            <img className='avatar'
            src='/logo192.png' alt='' />
            <h2>{person.name}</h2>
            <ul>
                <li>{person.designation}</li>
            </ul>

        </div>
    );
}

export default Element;
export {
    ParentDiv, Bye, Calculate, 
    LogIn, ElementDesign, RenderList,
    Card, Profile

};