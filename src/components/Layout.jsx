import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Briefcase as BriefcaseIcon, Menu, X, User as UserIcon, Building2 } from 'lucide-react';
import './Layout.css';

const Layout = ({ children }) => {
  const { user, logout } = useContext(AuthContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const navigate = useNavigate();

  // Handle window resize to close mobile menu on desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Handle auth selection
  const handleAuthSelect = (role) => {
    setShowAuthModal(false);
    navigate(`/signup?role=${role}`);
  };

  const navItems = [
    { name: 'Find Jobs', path: '/jobs' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'About', path: '/about' },
  ];

  return (
    <div className="layout-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <div className="navbar-logo-icon">
              <BriefcaseIcon className="h-6 w-6 text-white" />
            </div>
            <span className="navbar-logo-text">JobNexus</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar-desktop">
            <div className="navbar-links">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="navbar-link"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {user ? (
              <div className="navbar-user">
                <button className="navbar-user-button">
                  <div className="navbar-user-avatar">
                    <UserIcon className="h-5 w-5 text-primary-600" />
                  </div>
                  <span className="navbar-user-name">{user.name}</span>
                </button>

                <div className="navbar-user-dropdown">
                  <div className="navbar-user-dropdown-header">
                    <p className="navbar-user-dropdown-name">{user.name}</p>
                    <p className="navbar-user-dropdown-email">{user.email}</p>
                  </div>
                  {user.role === 'company' ? (
                    <Link to="/company/dashboard" className="navbar-user-dropdown-item">
                      Company Dashboard
                    </Link>
                  ) : (
                    <Link to="/candidate/dashboard" className="navbar-user-dropdown-item">
                      Candidate Dashboard
                    </Link>
                  )}
                  <Link to="/profile" className="navbar-user-dropdown-item">
                    Profile Settings
                  </Link>
                  <button
                    onClick={logout}
                    className="navbar-user-dropdown-logout"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setShowAuthModal(true)}
                className="navbar-get-started"
              >
                Get Started
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="navbar-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="navbar-mobile active">
            <div className="navbar-mobile-content">
              <div className="navbar-mobile-links">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="navbar-mobile-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                {user ? (
                  <div className="navbar-mobile-divider"></div>
                ) : (
                  <div className="navbar-mobile-divider"></div>
                )}
              </div>

              {user ? (
                <div className="navbar-mobile-user">
                  <div className="navbar-mobile-user-avatar">
                    <UserIcon className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="navbar-mobile-user-info-name">{user.name}</p>
                    <p className="navbar-mobile-user-info-email">{user.email}</p>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => {
                    setShowAuthModal(true);
                    setMobileMenuOpen(false);
                  }}
                  className="navbar-mobile-get-started"
                >
                  Get Started
                </button>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Auth Selection Modal */}
      {showAuthModal && (
        <div className="modal-overlay" onClick={() => setShowAuthModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-icon">
              <BriefcaseIcon className="h-8 w-8 text-white" />
            </div>
            <h2 className="modal-title">Welcome to JobNexus</h2>
            <p className="modal-subtitle">Choose how you want to get started</p>

            <div className="modal-options">
              <button
                onClick={() => handleAuthSelect('candidate')}
                className="modal-option"
              >
                <div className="modal-option-icon blue">
                  <UserIcon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="modal-option-content">
                  <h3 className="modal-option-title">I'm a Job Seeker</h3>
                  <p className="modal-option-desc">Find your dream job</p>
                </div>
              </button>

              <button
                onClick={() => handleAuthSelect('company')}
                className="modal-option"
              >
                <div className="modal-option-icon purple">
                  <Building2 className="h-6 w-6 text-purple-600" />
                </div>
                <div className="modal-option-content">
                  <h3 className="modal-option-title">I'm an Employer</h3>
                  <p className="modal-option-desc">Post jobs & find talent</p>
                </div>
              </button>
            </div>

            <button
              onClick={() => setShowAuthModal(false)}
              className="modal-close"
            >
              Maybe later
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="layout-main">
        {children}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="footer-logo-icon">
                  <BriefcaseIcon className="h-6 w-6 text-white" />
                </div>
                <span className="footer-logo-text">JobNexus</span>
              </div>
              <p className="footer-desc">
                Connect with top employers and discover opportunities that match your skills and aspirations.
              </p>
            </div>

            <div>
              <h3 className="footer-title">For Job Seekers</h3>
              <ul className="footer-links">
                <li><Link to="/jobs" className="footer-link">Browse Jobs</Link></li>
                <li><Link to="/companies" className="footer-link">Companies</Link></li>
                <li><Link to="/blogs" className="footer-link">Blogs</Link></li>
                <li><Link to="/about" className="footer-link">About Us</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="footer-title">For Employers</h3>
              <ul className="footer-links">
                <li><Link to="/post-job" className="footer-link">Post a Job</Link></li>
                <li><Link to="/pricing" className="footer-link">Pricing</Link></li>
                <li><Link to="/employer-dashboard" className="footer-link">Employer Dashboard</Link></li>
                <li><Link to="/candidate-search" className="footer-link">Candidate Search</Link></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2024 JobNexus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
