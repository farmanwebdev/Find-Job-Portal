import { Link } from 'react-router-dom';
import { MapPin, Briefcase, Clock, Building } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <div className="job-card-header">
        <div className="job-card-company-logo">
          <Building />
        </div>
        <div className="flex-1">
          <Link to={`/jobs/${job.id}`}>
            <h3 className="job-card-title">
              {job.title}
            </h3>
          </Link>
          {job.description && (
            <p className="job-card-description">
              {job.description}
            </p>
          )}
          <div className="job-card-company">
            <Building className="h-4 w-4" />
            <span>{job.company}</span>
            <span className="job-card-type">{job.type}</span>
          </div>
        </div>
        <div className="job-card-salary">
          {job.salary}
        </div>
      </div>

      <div className="job-card-details">
        <div className="job-card-detail">
          <MapPin />
          <span className="truncate">{job.location}</span>
          {job.remote && (
            <span className="job-card-remote">Remote</span>
          )}
        </div>
        <div className="job-card-detail">
          <Briefcase />
          <span>{job.category}</span>
        </div>
        <div className="job-card-detail">
          <Clock />
          <span>{formatDistanceToNow(new Date(job.postedDate), { addSuffix: true })}</span>
        </div>
      </div>

      <div className="job-card-actions">
        <Link to={`/jobs/${job.id}`} className="btn-primary">
          View Details
        </Link>
        <button className="btn-secondary">
          Save Job
        </button>
      </div>
    </div>
  );
};

export default JobCard;
