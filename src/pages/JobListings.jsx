import { useState, useContext, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { JobContext } from '../context/JobContext';
import { Search, MapPin, Briefcase, DollarSign, Clock, Filter, ChevronDown } from 'lucide-react';
import JobCard from '../components/JobCard';

const JobListings = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { filteredJobs, filters, setFilters } = useContext(JobContext);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const search = searchParams.get('search') || '';
    const location = searchParams.get('location') || '';
    const category = searchParams.get('category') || '';
    
    setFilters(prev => ({
      ...prev,
      search,
      location,
      category
    }));
  }, [searchParams, setFilters]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    setSearchParams(prev => {
      if (value) {
        prev.set(key, value);
      } else {
        prev.delete(key);
      }
      return prev;
    });
  };

  const categories = [
    'Technology', 'Finance', 'Design', 'Marketing', 'Healthcare', 'Education',
    'Sales', 'Engineering', 'Operations', 'Customer Service'
  ];

  const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Internship', 'Remote'];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Find Your Dream Job
          </h1>
          <p className="text-gray-600">
            {filteredJobs.length} jobs found
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden"
                >
                  <ChevronDown className={`h-5 w-5 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                </button>
              </div>

              <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                {/* Search */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Search
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Job title, company, keyword"
                      className="input-field pl-10"
                      value={filters.search}
                      onChange={(e) => handleFilterChange('search', e.target.value)}
                    />
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="City, state, or remote"
                      className="input-field pl-10"
                      value={filters.location}
                      onChange={(e) => handleFilterChange('location', e.target.value)}
                    />
                  </div>
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    className="input-field"
                    value={filters.category}
                    onChange={(e) => handleFilterChange('category', e.target.value)}
                  >
                    <option value="">All Categories</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                {/* Job Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Type
                  </label>
                  <select
                    className="input-field"
                    value={filters.type}
                    onChange={(e) => handleFilterChange('type', e.target.value)}
                  >
                    <option value="">All Types</option>
                    {jobTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Remote Only */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remote"
                    checked={filters.remote}
                    onChange={(e) => handleFilterChange('remote', e.target.checked)}
                    className="h-4 w-4 text-primary-600 rounded"
                  />
                  <label htmlFor="remote" className="ml-2 text-sm text-gray-700">
                    Remote Only
                  </label>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => {
                    setFilters({
                      search: '',
                      location: '',
                      category: '',
                      type: '',
                      remote: false,
                      salaryMin: '',
                      salaryMax: ''
                    });
                    setSearchParams({});
                  }}
                  className="w-full btn-secondary"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="lg:w-3/4">
            {filteredJobs.length === 0 ? (
              <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                <Briefcase className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No jobs found</h3>
                <p className="text-gray-600">Try adjusting your filters or search terms</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredJobs.map(job => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListings;