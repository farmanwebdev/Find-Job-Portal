import { useParams, Link } from 'react-router-dom';
import { useContext } from 'react';
import { JobContext } from '../context/JobContext';
import { AuthContext } from '../context/AuthContext';
import { MapPin, Briefcase, DollarSign, Clock, Building, Globe, Mail, Calendar, CheckCircle, ArrowLeft, Share2, Bookmark } from 'lucide-react';
import { format } from 'date-fns';

const JobDetails = () => {
  const { id } = useParams();
  const { jobs } = useContext(JobContext);
  const { user } = useContext(AuthContext);
  
  const job = jobs.find(j => j.id === parseInt(id));

  if (!job) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Job Not Found</h2>
          <p className="text-gray-600 mb-4">The job you're looking for doesn't exist.</p>
          <Link to="/jobs" className="btn-primary inline-flex items-center">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Jobs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/jobs" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Jobs
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="card mb-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-start space-x-4">
                  <div className="h-16 w-16 bg-primary-100 rounded-xl flex items-center justify-center">
                    <Building className="h-8 w-8 text-primary-600" />
                  </div>
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      {job.title}
                    </h1>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                        {job.type}
                      </span>
                      {job.remote && (
                        <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                          Remote
                        </span>
                      )}
                      <span className="bg-purple-100 text-purple-800 text-sm font-semibold px-3 py-1 rounded-full">
                        {job.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <Bookmark className="h-5 w-5 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <Share2 className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="flex items-center">
                  <Building className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-600">Company</p>
                    <p className="font-semibold">{job.company}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="font-semibold">{job.location}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-600">Salary</p>
                    <p className="font-semibold">{job.salary}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-600">Posted</p>
                    <p className="font-semibold">
                      {format(new Date(job.postedDate), 'MMM d, yyyy')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Job Description</h3>
                <p className="text-gray-700 mb-6">{job.description}</p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Requirements</h3>
                <ul className="space-y-2 mb-8">
                  {job.requirements.map((req, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Responsibilities</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-8">
                  <li>Design and implement user interface components</li>
                  <li>Collaborate with cross-functional teams</li>
                  <li>Write clean, maintainable, and efficient code</li>
                  <li>Participate in code reviews and team meetings</li>
                  <li>Troubleshoot and debug applications</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Competitive salary and equity package</li>
                  <li>Health, dental, and vision insurance</li>
                  <li>Flexible work hours and remote options</li>
                  <li>Professional development budget</li>
                  <li>Unlimited paid time off</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">About the Company</h3>
                <p className="text-gray-600 mb-4">
                  {job.company} is a leading technology company focused on innovation and excellence.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Globe className="h-4 w-4 text-gray-400 mr-3" />
                    <a href="#" className="text-primary-600 hover:underline">www.company.com</a>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="h-4 w-4 text-gray-400 mr-3" />
                    <span className="text-gray-600">500+ employees</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-gray-400 mr-3" />
                    <span className="text-gray-600">Technology • Finance • Healthcare</span>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Apply</h3>
                {user ? (
                  <>
                    {user.role === 'candidate' ? (
                      <div className="space-y-4">
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <div className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                            <span className="text-green-800">Your profile is complete!</span>
                          </div>
                        </div>
                        <button className="w-full btn-primary">
                          Apply Now
                        </button>
                        <button className="w-full btn-secondary">
                          Save for Later
                        </button>
                      </div>
                    ) : (
                      <div className="text-center p-4">
                        <p className="text-gray-600 mb-4">
                          You're registered as an employer. Switch to candidate account to apply.
                        </p>
                        <button className="btn-primary w-full">
                          Switch to Candidate
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center">
                    <p className="text-gray-600 mb-4">Sign in to apply for this job</p>
                    <Link to="/login" className="btn-primary w-full mb-2">
                      Sign In
                    </Link>
                    <Link to="/signup" className="btn-secondary w-full">
                      Create Account
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;