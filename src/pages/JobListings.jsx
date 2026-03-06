import { useState, useContext, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { JobContext } from '../context/JobContext';
import { Search, MapPin, Briefcase, Filter, ChevronDown, Sparkles } from 'lucide-react';
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
        <div className="min-h-screen">
            {/* ========== Professional Header ============ */}
            <div className="job-listings-hero">
                <div className="job-listings-hero-bg">
                    <div className="hero-pattern"></div>
                </div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="job-listings-hero-content">
                        <div className="hero-badge">
                            <Sparkles className="h-4 w-4" />
                            <span>Career Opportunities</span>
                        </div>
                        <h1 className="job-listings-title">
                            Find Your <span className="title-highlight">Dream Job</span>
                        </h1>
                        <p className="job-listings-subtitle">
                            Discover thousands of opportunities from top companies worldwide
                        </p>
                        <div className="jobs-count-badge">
                            <span className="jobs-count-number">{filteredJobs.length}</span>
                            <span className="jobs-count-label">jobs found</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/*============== Filters Sidebar ======= */}
                    <div className="lg:w-1/4">
                        <div className="filters-sidebar-professional">
                            <div className="filters-header-professional">
                                <h2>
                                    <Filter className="h-5 w-5" />
                                    Filters
                                </h2>
                                <button
                                    onClick={() => setShowFilters(!showFilters)}
                                    className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                                >
                                    <ChevronDown className={`h-5 w-5 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                                </button>
                            </div>

                            <div className={`filters-body ${showFilters ? 'block' : 'hidden lg:block'}`}>
                                {/*========== Search ==========*/}
                                <div className="filter-group">
                                    <label className="filter-label">
                                        <Search className="h-4 w-4" />
                                        Search
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Job title, keyword..."
                                            className="filter-input-professional"
                                            value={filters.search}
                                            onChange={(e) => handleFilterChange('search', e.target.value)}
                                        />
                                    </div>
                                </div>

                                {/* ======= Location =========*/}
                                <div className="filter-group">
                                    <label className="filter-label">
                                        <MapPin className="h-4 w-4" />
                                        Location
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="City, state..."
                                            className="filter-input-professional"
                                            value={filters.location}
                                            onChange={(e) => handleFilterChange('location', e.target.value)}
                                        />
                                    </div>
                                </div>

                                {/* ========== Category ============*/}
                                <div className="filter-group">
                                    <label className="filter-label">
                                        <Briefcase className="h-4 w-4" />
                                        Category
                                    </label>
                                    <select
                                        className="filter-select-professional"
                                        value={filters.category}
                                        onChange={(e) => handleFilterChange('category', e.target.value)}
                                    >
                                        <option value="">All Categories</option>
                                        {categories.map(category => (
                                            <option key={category} value={category}>{category}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* ======= Job Type ========*/}
                                <div className="filter-group">
                                    <label className="filter-label">Job Type</label>
                                    <select
                                        className="filter-select-professional"
                                        value={filters.type}
                                        onChange={(e) => handleFilterChange('type', e.target.value)}
                                    >
                                        <option value="">All Types</option>
                                        {jobTypes.map(type => (
                                            <option key={type} value={type}>{type}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* ======== Remote Only ======== */}
                                <div className="filter-checkbox-professional">
                                    <input
                                        type="checkbox"
                                        id="remote"
                                        checked={filters.remote}
                                        onChange={(e) => handleFilterChange('remote', e.target.checked)}
                                    />
                                    <label htmlFor="remote">
                                        <span className="remote-indicator"></span>
                                        Remote Only
                                    </label>
                                </div>

                                {/* ======== Clear Filters =========*/}
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
                                    className="clear-filters-btn-professional"
                                >
                                    Clear All Filters
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* ========== Job Listings ========= */}
                    <div className="lg:w-3/4">
                        {filteredJobs.length === 0 ? (
                            <div className="empty-state-professional">
                                <div className="empty-state-icon">
                                    <Briefcase className="h-16 w-16" />
                                </div>
                                <h3>No jobs found</h3>
                                <p>Try adjusting your filters or search terms to find more opportunities</p>
                            </div>
                        ) : (
                            <div className="jobs-grid-professional">
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
