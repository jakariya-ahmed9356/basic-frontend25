
const Hi = () => {
    const style = {
        color: 'red',
        fontSize: '3rem',
        background: 'orange'
    }
    return(
        <>
            <h1 style={style}> This is Demo Component {2+2} </h1>
            <button onClick={() => alert("React Onlick")}>Submit</button>
        </>
    );
}

const Greet = () => {
    return(
        <div> 
            <h1> Welcome ! Jakariya Ahmed Aman </h1>
        </div>
    );
}



export { Hi, Greet }
