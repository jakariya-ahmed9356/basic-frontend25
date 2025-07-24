import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

//   useEffect(() => {
//     fetch(`http://localhost:5000/jobs/${id}`)
//       .then((res) => {
//         if (!res.ok) throw new Error("Failed to fetch job");
//         return res.json();
//       })
//       .then((data) => setJob(data))
//       .catch((err) => {
//         console.error("Fetch error:", err);
//         setError(true);
//       });
//   }, [id]);


const fetchJobDetail = async () => {
    try {
        const res = await fetch(`http://localhost:5000/jobs/${id}`);
        const data = await res.json();
        setJob(data);
    } catch (err) {
        console.error("Fetch error:", err);
    } finally {
        setLoading(false);
    }
}

useEffect(() => {
    fetchJobDetail();
});


if (error)
    return <div className="text-red-500 text-center mt-10">❌ Failed to load job.</div>;

  if (!job)
    return <div className="text-center mt-10 text-gray-500">⏳ Loading...</div>;

return (
    <div className="max-w-6xl mx-auto mt-10 px-6">
      <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200">

        {/* Header Section */}
        <div className="flex md:flex-row justify-center items-center gap-10 mb-6">
          {/* Left: Logo */}
          <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
            <img
              src={job.image}
              alt="Company Logo"
              className="object-contain"
            />
          </div>

          {/* Right: Job Info */}
          <div className="text-center md:text-right space-y-1">
            <h2 className="text-2xl font-bold text-gray-800">{job.title}</h2>
            <p className="text-gray-600 text-sm">{job.company}</p>
            <p className="text-gray-500 text-sm">{job.location}</p>
          </div>
        </div>

        {/* Skills and Salary Section */}
        <div className="flex md:flex-row justify-center md:items-center gap-4 mb-6">
          <div>
            <p className="text-gray-600 font-semibold">Skills Required:</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {job.skills.map(skill => (
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">{skill}</span>
              ))}
              </div>
          </div>
        </div>
        <div>
            <p className="text-gray-600 font-semibold">Salary: {job.salary}</p>
        </div>
        {/* Buttons Section */}
        <div className="mt-6 flex md:flex-row justify-center items-center gap-4">
          <span className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-400 transition cursor-pointer">
            {job.type}
          </span>

          <button className="bg-orange-400 text-white px-4 py-2 rounded-full hover:bg-orange-500 transition cursor-pointer">
            Apply Now
          </button>
        </div>
        <div className="my-6">
            <h1 className="text-2xl text-gray-600">Description</h1>
            <p className="text-gray-700">{job.description}</p>
        </div>
      </div>
    </div>
  );
}
