import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, DollarSign, Clock, ArrowRight, ChevronLeft, ChevronRight, Zap, Shield, Users, Briefcase, Code, Palette, TrendingUp, Heart, BookOpen, Stethoscope } from 'lucide-react';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel images - professional job/career related images
  const carouselSlides = [
    {
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&h=900&fit=crop',
      title: 'Find Your Dream Job',
      description: 'Browse thousands of opportunities from top companies worldwide'
    },
    {
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600&h=900&fit=crop',
      title: 'Build Your Career',
      description: 'Take the next step in your professional journey'
    },
    {
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1600&h=900&fit=crop',
      title: 'Connect with Employers',
      description: 'Get discovered by leading companies looking for talent like you'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchTerm) params.append('search', searchTerm);
    if (location) params.append('location', location);
    if (jobType) params.append('type', jobType);
    navigate(`/jobs?${params.toString()}`);
  };

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const popularCategories = [
    {
      name: 'Technology',
      icon: Code,
      count: 2450,
      color: 'blue',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop'
    },
    {
      name: 'Finance',
      icon: DollarSign,
      count: 120,
      color: 'green',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop'
    },
    {
      name: 'Design',
      icon: Palette,
      count: 980,
      color: 'purple',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop'
    },
    {
      name: 'Marketing',
      icon: TrendingUp,
      count: 110,
      color: 'orange',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
    },
    {
      name: 'Healthcare',
      icon: Stethoscope,
      count: 750,
      color: 'red',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop'
    },
    {
      name: 'Education',
      icon: BookOpen,
      count: 620,
      color: 'yellow',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Verified Employers',
      description: 'All employers go through our verification process to ensure legitimate opportunities.'
    },
    {
      icon: Zap,
      title: 'Quick Apply',
      description: 'Apply to multiple jobs with a single profile. Track all your applications in one place.'
    },
    {
      icon: Users,
      title: 'Top Companies',
      description: 'Connect with industry-leading companies actively hiring top talent like you.'
    }
  ];

  const featuredJobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc',
      location: 'San Francisco, CA',
      salary: '$120,000 - $150,000',
      type: 'Full-time',
      logo: 'TC',
      posted: '2 days ago'
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      company: 'Design Studio',
      location: 'Remote',
      salary: '$80,000 - $100,000',
      type: 'Full-time',
      logo: 'DS',
      posted: '1 day ago'
    },
    {
      id: 3,
      title: 'Financial Analyst',
      company: 'FinancePro',
      location: 'New York, NY',
      salary: '$90,000 - $110,000',
      type: 'Full-time',
      logo: 'FP',
      posted: '3 days ago'
    }
  ];

  return (
    <div className="homepage">
      {/* Hero Section With Carousel */}
      <div className="hero-section">
        {/* Carousel Background Images */}
        {carouselSlides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : 'inactive'}`}
          >
            <div className="hero-overlay"></div>
            <img src={slide.image} alt={slide.title} className="hero-image" />
          </div>
        ))}

        {/* Carousel Arrows */}
        <div className="hero-arrows">
          <button onClick={prevSlide} className="hero-arrow" aria-label="Previous slide">
            <ChevronLeft />
          </button>
          <button onClick={nextSlide} className="hero-arrow" aria-label="Next slide">
            <ChevronRight />
          </button>
        </div>

        {/* Carousel Dots */}
        <div className="hero-dots">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="hero-content">
          <div className="hero-content-inner">
            <h1 className="hero-title">
              {carouselSlides[currentSlide].title}
            </h1>
            <p className="hero-description">
              {carouselSlides[currentSlide].description}
            </p>

            {/* Search Form */}
            <div className="hero-search">
              <form onSubmit={handleSearch} className="hero-search-form">
                <div className="hero-search-input-group">
                  <Search />
                  <input
                    type="text"
                    placeholder="Job title or keyword"
                    className="hero-search-input"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="hero-search-input-group">
                  <MapPin />
                  <input
                    type="text"
                    placeholder="Location"
                    className="hero-search-input"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                <button type="submit" className="hero-search-button">
                  Search Jobs
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Categories Section */}
      <div className="categories-section">
        <div className="categories-container">
          <div className="section-header">
            <h2 className="section-title">Popular Categories</h2>
            <p className="section-subtitle">
              Explore jobs in the most in-demand industries and find your perfect match
            </p>
          </div>
          <div className="categories-grid">
            {popularCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="category-card">
                  <div className="category-image-container">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="category-image"
                    />
                    <div className="category-image-overlay"></div>
                    <div className={`category-icon ${category.color}`}>
                      <IconComponent />
                    </div>
                  </div>
                  <div className="category-content">
                    <h3 className="category-title">{category.name}</h3>
                    <div className="category-footer">
                      <span className="category-count">{category.count} jobs</span>
                      <ArrowRight className="category-arrow" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Featured Jobs Section */}
      <div className="jobs-section">
        <div className="jobs-container">
          <div className="jobs-header">
            <div className="jobs-header-title">
              <h2>Featured Jobs</h2>
              <p>Handpicked opportunities from top companies</p>
            </div>
            <a href="/jobs" className="jobs-view-all">
              View All Jobs
              <ArrowRight />
            </a>
          </div>
          <div className="jobs-grid">
            {featuredJobs.map((job) => (
              <div key={job.id} className="job-card">
                <div className="job-card-header">
                  <div className="job-card-company">
                    <div className="job-card-logo">
                      <span>{job.logo}</span>
                    </div>
                    <div className="job-card-info">
                      <h3>{job.title}</h3>
                      <p>{job.company}</p>
                    </div>
                  </div>
                  <span className="job-card-badge full-time">{job.type}</span>
                </div>
                <div className="job-card-details">
                  <div className="job-card-detail">
                    <MapPin />
                    <span>{job.location}</span>
                  </div>
                  <div className="job-card-detail">
                    <DollarSign />
                    <span>{job.salary}</span>
                  </div>
                  <div className="job-card-detail">
                    <Clock />
                    <span>Posted {job.posted}</span>
                  </div>
                </div>
                <button className="job-card-apply">Apply Now</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="why-section">
        <div className="why-container">
          <div className="section-header">
            <h2 className="section-title">Why Choose JobNexus</h2>
            <p className="section-subtitle">
              We connect the best talent with the best companies
            </p>
          </div>
          <div className="why-grid">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="why-card">
                  <div className="why-card-icon">
                    <IconComponent />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Take the Next Step in Your Career?</h2>
          <p className="cta-description">
            Join thousands of job seekers who found their dream jobs through JobNexus
          </p>
          <div className="cta-buttons">
            <a href="/signup" className="cta-button-primary">
              Get Started Free
            </a>
            <a href="/jobs" className="cta-button-secondary">
              Browse Jobs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
