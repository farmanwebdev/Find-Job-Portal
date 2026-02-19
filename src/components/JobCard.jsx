import { Link } from 'react-router-dom';
import { MapPin, Briefcase, DollarSign, Clock, Building } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

const JobCard = ({ job }) => {
  return (
    <div className="card hover:shadow-lg transition-shadow">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Building className="h-6 w-6 text-primary-600" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <Link to={`/jobs/${job.id}`}>
                    <h3 className="text-lg font-semibold text-gray-900 hover:text-primary-600">
                      {job.title}
                    </h3>
                  </Link>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="flex items-center text-gray-600">
                      <Building className="h-4 w-4 mr-1" />
                      {job.company}
                    </span>
                    <span className="bg-primary-100 text-primary-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {job.type}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold text-gray-900">{job.salary}</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="truncate">{job.location}</span>
                  {job.remote && (
                    <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                      Remote
                    </span>
                  )}
                </div>
                <div className="flex items-center text-gray-600">
                  <Briefcase className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span>{job.category}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span>
                    {formatDistanceToNow(new Date(job.postedDate), { addSuffix: true })}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 md:w-48">
          <Link
            to={`/jobs/${job.id}`}
            className="btn-primary text-center"
          >
            View Details
          </Link>
          <button className="btn-secondary">
            Save Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;