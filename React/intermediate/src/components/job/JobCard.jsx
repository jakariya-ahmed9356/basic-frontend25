import PropTypes from "prop-types";
import { NavLink, useNavigate } from "react-router-dom";

export default function JobCard({ job }) {

    // details button click navigate 
    // Approach 01:
    const navigate = useNavigate();
    // Approach 02:
    const handleJobDeatil = () => {
        navigate(`/jobs/${job.id}`);
    }


    return (
         
    <div className="sm:w-full md:max-w-100 flex items-center md:flex-row p-3 bg-white mt-4">
        {/* Left Side: Image  */}
        <div className="sm:w-1/4">
            <img src={job.image}
            className="w-full md:full rounded-full shadow-sm object-cover"
            alt={job.title} 
        />
        </div>
        {/* Right Side: info */}
        <div className="sm:w-3/4 p-4  space-y-2 text-left">
            <h2 className="text-xl font-bold text-gray-800">{job.title}</h2>
            <p className="text-gray-600">{job.location}</p>
            <p className="text-gray-600">{job.type} | {job.experience}</p>
            <p className="text-gray-600">Salary: {job.salary}</p>
        {/* Skills  */}
        <div className="flex gap-2">
            <NavLink to={`/jobs/${job.id}`}>
                <button 
                    // onClick={() => navigate(`/jobs/${job.id}`) }
                    className="bg-orange-400 px-4 hover:bg-orange-500 transition py-1 rounded-full mt-4 text-white cursor-pointer"
                    >
                    View 👁️
                </button> 
            </NavLink>
            <button 
                onClick={ handleJobDeatil }
                className="bg-orange-500 px-4 hover:bg-orange-400 transition py-1 rounded-full mt-4 text-white cursor-pointer"
                >
                Apply →
            </button> 
        </div>
        </div>
        
    </div>

    ) ;
}



JobCard.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    experience: PropTypes.string.isRequired,
    date: PropTypes.string,
  }).isRequired,
  onDetailsClick: PropTypes.func.isRequired,
};

