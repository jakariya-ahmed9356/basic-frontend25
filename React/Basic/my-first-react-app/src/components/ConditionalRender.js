
const LoginStatus = (status) => {
    const loginStyle = {
        background: 'orange',
        padding: '8px 24px',
        border: 'none',
        borderRadius: '100px',
        fontSize: '18px',
        color: 'white',
    }
    const logoutStle = {
        background: 'red',
        padding: '8px 24px',
        border: 'none',
        borderRadius: '100px',
        fontSize: '18px',
        color: 'white',
    }


    if (status) {
        return <button style={logoutStle}> Logout </button>
    } else {
        return <button style={loginStyle}> Login </button>
    }
}



const CheckAuth = () => {
    return(
        <div>
            <h2>Login Status:</h2>
            {LoginStatus(true)}

        </div>
    );
} 


export default CheckAuth;







