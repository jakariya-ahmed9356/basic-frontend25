
const FormSubmit = () => {
    const style = {
        margin: '30px 0',
    }

    const preventFormDefault = (e) => {
        e.preventDefault();
        const emailVal = document.getElementById('email').value;
        alert(emailVal);
        
    }


    return(
        <div style={style}>
            <form onSubmit={preventFormDefault}>
                <input id="email" type="email" placeholder="E-mail" />
                <input id="pwd" type="password" placeholder="******" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}



export default FormSubmit;