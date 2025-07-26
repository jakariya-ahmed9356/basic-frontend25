import { useState } from "react";

export default function FormComponent() {

    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        mobile: '',
        service: '',
        note: ''
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name] : e.target.value,
        }));
    }

    // Handle Errors 

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('ok');
    }
    return (
        <div className="px-6 mt-15">
            <form className="text-left max-w-3xl shadow rounded mx-auto space-y-6 p-4"
                onSubmit={handleSubmit}
            >
            <h1 className="text-2xl text-left text-gray-500">Contact Us</h1>
            <div className="flex gap-4">
                <div className="w-1/2">
                    <input type="text" name="fname" placeholder="First Name" value={formData.fname}
                        onChange={handleChange}
                        className="w-full border border-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none h-10 rounded px-2 transition"
                    />
                </div>
                <div className="w-1/2">
                    <input type="text" name="fname" placeholder="First Name" value={formData.lname}
                        onChange={handleChange}
                        className="w-full border border-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none h-10 rounded px-2 transition"
                    />
                </div>
            </div> 
                
                <input type="email" name="email" placeholder="example@gamil.com" value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none h-10 rounded px-2 transition"
                />

                <input type="number" name="mobile" placeholder="016011580**" value={formData.mobile} 
                    onChange={handleChange}
                    className="w-full border border-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none h-10 rounded px-2 transition"
                />

                <select name="service" value={formData.service}
                    onChange={handleChange}
                    className="w-full border border-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none h-10 rounded px-2 transition"
                >
                    <option value=''> Select a Service </option>
                    <option value="web-design">Web Design</option>
                    <option value="web-development">Web Development</option>
                    <option value="custom-software">Custom Software</option>
                    <option value="wordpress">Wordpress Development</option>
                    <option value="ecommerce">E-commerce Web Application</option>
                </select>

                <textarea name="note" value={formData.note}
                    onChange={handleChange}
                    className="w-full border border-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none h-15 rounded px-2 transition"
                ></textarea>
                <button type="submit" className="bg-orange-400 text-white hover:bg-orange-400 px-4 py-2 rounded-full cursor-pointer">Contact Us </button>
            </form>
        </div>
    );
}
