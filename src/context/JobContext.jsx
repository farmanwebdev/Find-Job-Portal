import { createContext, useState, useCallback } from 'react';

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      salary: '$120,000 - $150,000',
      type: 'Full-time',
      category: 'Technology',
      description: 'We are looking for a talented Frontend Developer to join our team...',
      requirements: ['5+ years experience', 'React expertise', 'TypeScript'],
      postedDate: '2024-01-15',
      remote: true
    },
    // Add more jobs as needed
  ]);

  const [filters, setFilters] = useState({
    search: '',
    location: '',
    category: '',
    type: '',
    remote: false,
    salaryMin: '',
    salaryMax: ''
  });

  const addJob = useCallback((job) => {
    setJobs(prev => [...prev, { ...job, id: prev.length + 1 }]);
  }, []);

  const updateJob = useCallback((id, updatedJob) => {
    setJobs(prev => prev.map(job => job.id === id ? { ...job, ...updatedJob } : job));
  }, []);

  const deleteJob = useCallback((id) => {
    setJobs(prev => prev.filter(job => job.id !== id));
  }, []);

  const filteredJobs = jobs.filter(job => {
    if (filters.search && !job.title.toLowerCase().includes(filters.search.toLowerCase()) && 
        !job.company.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    }
    if (filters.location && !job.location.toLowerCase().includes(filters.location.toLowerCase())) {
      return false;
    }
    if (filters.category && job.category !== filters.category) {
      return false;
    }
    if (filters.type && job.type !== filters.type) {
      return false;
    }
    if (filters.remote && !job.remote) {
      return false;
    }
    return true;
  });

  return (
    <JobContext.Provider value={{
      jobs,
      filteredJobs,
      filters,
      setFilters,
      addJob,
      updateJob,
      deleteJob
    }}>
      {children}
    </JobContext.Provider>
  );
};