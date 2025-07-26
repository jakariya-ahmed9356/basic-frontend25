import { useState } from "react";

export default function BasicFormComponent() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        service: "",
        note: ""
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email.includes('@')) newErrors.email = "Email is invalid!";
        if (!/^01[3-9]\d{8}$/.test(formData.mobile)) newErrors.mobile = "Mobile is invalid"; 
        if (!formData.service) newErrors.service = "Please select a service";
        
        return newErrors;  
    }

    // On change input
    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    // form handle 
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors.length > 0)) {
            setErrors(validationErrors);
            return;
        }
        console.log('Form submitted');
    }

    return (
        <div className="px-6">
            <form onSubmit={handleSubmit} className="text-left max-w-lg mx-auto p-6 mt-10 space-y-6">
                <h2 className="text-xl text-left text-gray-500">Basic Form </h2>
                <input type="text"
                    value={formData.name}
                    placeholder="Full Name"
                    onChange={handleChange}
                    name="name"
                    className="w-full border border-gray-300 px-4 py-2 focus:border-gray-300 focus:ring-1 focus:ring-gray-200 focus:outline-none transition"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

                <input type="email" 
                    value={formData.email}
                    placeholder="Email"
                    onChange={handleChange}
                    name="email"
                    className="w-full border border-gray-300 focus:border-gray-300 focus:ring-1 focus:ring-gray-200 focus:outline-none transition px-4 py-2"
                />
                {errors.email && <p className="text-red-500 tex-sm">{errors.email}</p>}
                <input type="number" 
                    placeholder="Mobile"
                    onChange={handleChange}
                    name="mobile"
                    value={formData.mobile}
                    className="w-full border border-gray-300 focus:border-gray-300 focus:ring-1 focus:ring-gray-200 focus:outline-none transition px-4 py-2"
                />
                {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
                
                
                {/* Service Selection */}
                <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full border border-gray-300 focus:border-gray-300 focus:ring-1 focus:ring-gray-200 focus:outline-none transition px-4 py-2"
                >
                    <option value="">Select a Service</option>
                    <option value="web-design">Web Design</option>
                    <option value="web-development">Web Development</option>
                    <option value="seo">SEO Optimization</option>
                    <option value="app-dev">Mobile App Development</option>
                </select>
                {errors.service && <p className="text-red-500 text-sm">{errors.service}</p>}

                <textarea 
                    value={formData.note}
                    onChange={handleChange}
                    name="note"
                    className="w-full border border-gray-300 focus:border-gray-300 focus:ring-1 focus:ring-gray-200 focus:outline-none transition px-4 py-2"

                ></textarea>

                <button type="submit" className="bg-orange-400 px-6 py-2 hover:bg-orange-500 text-white rounded-full">
                    Submit Form
                </button>
            </form>
        </div>
    );
}

