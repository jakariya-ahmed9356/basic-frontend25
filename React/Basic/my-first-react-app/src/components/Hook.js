import React, { useRef } from "react";


// userRef Hook
const ElementChange = () => {

    let changeHeading = useRef();

    const change = () => {
        changeHeading.current.innerText = "Text Changed by using useRef Hook"
    }

    return(
        <div>
            <h1 ref={changeHeading} className="text-success"> This Element Will be Change by click event </h1>
        <button onClick={change}>Click</button>
        </div>
    );
}


const FocusInput = () => {

    const inputRef = useRef();

    const handleFocus = () => {
        inputRef.current.focus();
    }

    return(
        <div>
            <input type="text" ref={inputRef} placeholder="foucs..."/>
            <button onClick={handleFocus}> Focus </button>
        </div>
    );

}


function ModifyInput() {

        const inputRef = useRef();
        const disableInput = () => {
            inputRef.current.disabled = true; // change 'disabled' attribute
            inputRef.current.placeholder = 'Disabled Now';
        }

    return(
        <div>
            <input ref={inputRef} placeholder="type something.." />
            <button onClick={disableInput}>Disable</button>
        </div>
    );
}

function ModifyImage() {

    const imgRef = useRef();

    const handleImg = () => {
        imgRef.current.src = 'https://placehold.co/600x400/000000/FFF';
        imgRef.current.setAttribute('height', '400px');
        imgRef.current.setAttribute('width', '400px');
    }

    return(
        <div>
            <img ref={imgRef} src="https://placehold.co/400" alt=""/>
            <button onClick={handleImg}>Change</button>
        </div>
    );
}


function GetInputVal() {

    let firstName, lastName = useRef();
    let output = useRef();
    const formHandle = () => {
        const fName = firstName.value;
        const lName = lastName.value;
        output.current.innerText =  fName + ' ' + lName;
    }

    return(
        <div>
            <input ref={(a) => firstName = a} type="text" placeholder="First Name"/>
            <input ref={(a) => lastName = a } type="text" placeholder="Last Name"/>
            <button onClick={formHandle}>Submit</button>
            <h1 ref={output}></h1>
        </div>
    );
}


function ProductQty() {
    const qtyRef = useRef();

    // Set initial value on first render
    React.useEffect(() => {
        qtyRef.current.value = 1;
    }, []);

    const increment = () => {
        let currentQty = parseInt(qtyRef.current.value) || 0;
        qtyRef.current.value = currentQty + 1;
    }

    const deCrement = () => {
        let currentQty = parseInt(qtyRef.current.value) || 0;
        if (currentQty > 1) {
            qtyRef.current.value = currentQty - 1;
        }
    };

    return(
        <div className="text-center mt-4">
        <button onClick={deCrement}>-</button>
        <input type="number" style={{width: '50px'}} ref={qtyRef} min='1'/>
        <button onClick={increment}>+</button>
        </div>
    );
}



function IncrementDecrement() {
    const number = useRef(0);
    const output = useRef();

    // Increment number
    const increment = () => {
        number.current++;
        output.current.innerText = number.current;
    }
    // Decrease number
    const decrement = () => {
        if (number.current > 0) {
            number.current--;
            output.current.innerText = number.current;
        }
    }

    return(
        <div className="text-center my-5">
            <button onClick={decrement}>-</button>
            <h1 ref={output}>0</h1>
            <button onClick={increment}>+</button>
        </div>
    );
}


export {
    ElementChange, FocusInput, ModifyInput, ModifyImage,GetInputVal,
    ProductQty,IncrementDecrement
};





