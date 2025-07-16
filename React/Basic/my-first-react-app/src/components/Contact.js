import { useRef } from "react";

function ContactForm() {
    const inputRef = useRef({});
    const outputRef = useRef();

    //submit form data 
    const handleSubmit = (e) => {
        e.preventDefault();

        // get input values 
        const name = inputRef.current.name.value;
        const email = inputRef.current.email.value;
        const mobile = inputRef.current.mobile.value;
        const msg = inputRef.current.msg.value;

        // show output
        outputRef.current.innerHTML = `
            <div class="alert alert-success mt-4"> 
                <strong> Sumitted Successfully! </strong>
                Name: ${name} <br/>
                Name: ${email} <br/>
                Name: ${mobile} <br/>
                Name: ${msg} <br/>
            </div>
        `; 

        // Clear inputs
        inputRef.current.name.value = '';
        inputRef.current.email.value = '';
        inputRef.current.mobile.value = '';
        inputRef.current.msg.value = '';
        // alert(msg);
    }

    return(
        <div className="container mt-5 pb-4 shadow rounded-bg bg-light" style={{maxWdith: '400px'}}>
            <h2 className="mb-4 text-center"> Contact Us </h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-2 form-group">
                    <label className="mb-2">Full Name <span className="text-success">*</span></label>
                    <input type="text" ref={(el) => (inputRef.current.name = el)}
                     className="form-control" placeholder="Full Name"/>
                </div>
                <div className="mb-2 form-group">
                    <label className="mb-2">Email <span className="text-success">*</span></label>
                    <input type="email" ref={(el) => (inputRef.current.email = el)}
                     className="form-control" placeholder="Email"/>
                </div>
                <div className="mb-2 form-group">
                    <label className="mb-2">Mobile <span className="text-success">*</span></label>
                    <input type="tel" ref={(el) => (inputRef.current.mobile = el)}
                     className="form-control" placeholder="Mobile"/>
                </div>
                <div className="mb-2 form-group">
                    <label className="mb-2">Full Name <span className="text-success">*</span></label>
                    <textarea type="text" ref={(el) => (inputRef.current.msg = el)}
                     className="form-control" placeholder="Message..."/>
                </div>
                <div className="mb-2 mt-2 form-group">
                    <button className="btn btn-md btn-primary ">Contact</button>
                </div>
            </form>

            {/* // display output */}
            <div ref={outputRef}></div>
        </div>
    );
}


export default ContactForm;







