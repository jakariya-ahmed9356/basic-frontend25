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
export default Element;
export {ParentDiv, Bye };