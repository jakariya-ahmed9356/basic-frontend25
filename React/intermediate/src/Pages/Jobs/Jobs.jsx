
import { useEffect, useState } from "react";
import JobCard from "../../components/job/JobCard";
import jobsData from '../../data/jobs.json';

export default function Jobs() {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        setJobs(jobsData);
    }, [])

    return (
        <div className="px-4 py-6 bg-gray-100">
            <div className="w-full md:max-w-7xl mx-auto">
                <div className="my-4">
                    <h2 className="text-3xl font-semibold mb-2"> Open Jobs </h2>
                    <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, esse?</p>
                </div>
                <div className="grid sm:grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-3 gap-2 space-x-4 space-y-4">

                {
                    jobs.map(job => <JobCard key={job.id} job={job}/> )
                }
                </div>
            </div>
        </div>
    );
}


