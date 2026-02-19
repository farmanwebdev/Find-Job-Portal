// Complete script to update Layout.jsx with all required changes
const fs = require('fs');
let content = fs.readFileSync('./src/components/Layout.jsx', 'utf8');

// 1. Update imports - replace the lucide-react import line
content = content.replace(
  "import { Search, Bell, User, Briefcase, Home, Building, Menu, X } from 'lucide-react';",
  "import { Bell, User as UserIcon, Briefcase, Building2, Menu, X } from 'lucide-react';"
);

// 2. Add showAuthModal state after mobileMenuOpen state
content = content.replace(
  "const [mobileMenuOpen, setMobileMenuOpen] = useState(false);",
  "const [mobileMenuOpen, setMobileMenuOpen] = useState(false);\n  const [showAuthModal, setShowAuthModal] = useState(false);"
);

// 3. Add handleAuthSelect function after the useEffect
content = content.replace(
  "  }, [mobileMenuOpen]);",
  "  }, [mobileMenuOpen]);\n\n  // Handle auth selection\n  const handleAuthSelect = (role) => {\n    setShowAuthModal(false);\n    navigate(`/signup?role=${role}`);\n  };"
);

// 4. Update Desktop Navigation links - remove Home and Companies, add Blogs and About
content = content.replace(
  `<div className="flex items-center space-x-6">
                <Link to="/" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Home
                </Link>
                <Link to="/jobs" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Find Jobs
                </Link>
                <Link to="/companies" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Companies
                </Link>
                {user?.role === 'company' && (`,
  `<div className="flex items-center space-x-8">
                <Link to="/jobs" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">
                  Find Jobs
                </Link>
                <Link to="/blogs" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">
                  Blogs
                </Link>
                <Link to="/about" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">
                  About
                </Link>
                {user?.role === 'company' && (`
);

// 5. Replace Login/Sign Up buttons with "Get Started" button
content = content.replace(
  `<div className="flex items-center space-x-4">
                  <Link to="/login" className="btn-secondary">
                    Login
                  </Link>
                  <Link to="/signup" className="btn-primary">
                    Sign Up
                  </Link>
                </div>`,
  `<button
                  onClick={() => setShowAuthModal(true)}
                  className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-2.5 px-6 rounded-lg transition-all shadow-md hover:shadow-lg"
                >
                  Get Started
                </button>`
);

// 6. Enable mobile menu - replace the commented mobile navigation with uncommented version
content = content.replace(
  `{/* Mobile Navigation */}
      {/* {mobileMenuOpen && (`,
  `{/* Mobile Navigation */}
      {mobileMenuOpen && (`
);

// Replace the closing of commented mobile nav
content = content.replace(
  `)} */}`,
  `)}`
);

// 7. Update mobile nav links to match desktop
content = content.replace(
  `<div className="px-2 pt-2 pb-3 space-y-1">
              {navigationLinks.map((link) => (`,
  `<div className="px-4 py-3 space-y-2">
              {[{ name: 'Find Jobs', path: '/jobs' }, { name: 'Blogs', path: '/blogs' }, { name: 'About', path: '/about' }].map((item) => (`
);

// Update the Link in mobile nav
content = content.replace(
  `to={link.path}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}`,
  `to={item.path}
                  className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}`
);

// 8. Update mobile Get Started button
content = content.replace(
  `<Link
                    to="/signup"
                    className="block px-3 py-2 rounded-md text-base font-medium text-white bg-primary-600 hover:bg-primary-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign Up
                  </Link>`,
  `<button
                    onClick={() => {
                      setShowAuthModal(true);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold py-3 px-4 rounded-lg transition-all"
                  >
                    Get Started
                  </button>`
);

// 9. Add the auth modal at the end of the nav element (before closing </nav>)
content = content.replace(
  `</nav>

      {/* Main Content }}`,
  `</nav>

      {/* Auth Selection Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 transform transition-all">
            <div className="text-center mb-6">
              <div className="h-16 w-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Welcome to JobNexus</h2>
              <p className="text-gray-500 mt-2">Choose how you want to get started</p>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => handleAuthSelect('candidate')}
                className="w-full p-4 border-2 border-gray-100 rounded-xl hover:border-primary-500 hover:bg-primary-50 transition-all group"
              >
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <UserIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900">I'm a Job Seeker</h3>
                    <p className="text-sm text-gray-500">Find your dream job</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => handleAuthSelect('company')}
                className="w-full p-4 border-2 border-gray-100 rounded-xl hover:border-primary-500 hover:bg-primary-50 transition-all group"
              >
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <Building2 className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900">I'm an Employer</h3>
                    <p className="text-sm text-gray-500">Post jobs & find talent</p>
                  </div>
                </div>
              </button>
            </div>

            <button
              onClick={() => setShowAuthModal(false)}
              className="mt-6 w-full py-2 text-gray-500 hover:text-gray-700 transition-colors"
            >
              Maybe later
            </button>
          </div>
        </div>
      )}

      {/* Main Content }}`
);

// 10. Add padding-top to main to account for fixed nav
content = content.replace(
  `<main>
        {children}
      </main>`,
  `<main className="pt-16">
        {children}
      </main>`
);

fs.writeFileSync('./src/components/Layout.jsx', content);
console.log('Layout.jsx updated successfully!');
