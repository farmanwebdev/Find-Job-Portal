// Second script to fix remaining Layout.jsx issues
const fs = require('fs');
let content = fs.readFileSync('./src/components/Layout.jsx', 'utf8');

// Fix 1: Update desktop nav links - replace Home, Find Jobs, Companies with Find Jobs, Blogs, About
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

// Fix 2: Replace Login/Sign Up buttons with Get Started button
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

// Fix 3: Uncomment mobile navigation
content = content.replace(
    `{/* Mobile Navigation */}
      {/* {mobileMenuOpen && (`,
    `{/* Mobile Navigation */}
      {mobileMenuOpen && (`
);

content = content.replace(
    `)}
      </nav>`,
    `)}
      </nav>`
);

// Fix 4: Update mobile nav links
content = content.replace(
    `<div className="px-2 pt-2 pb-3 space-y-1">
              {navigationLinks.map((link) => (`,
    `<div className="px-4 py-3 space-y-2">
              {[{ name: 'Find Jobs', path: '/jobs' }, { name: 'Blogs', path: '/blogs' }, { name: 'About', path: '/about' }].map((item) => (`
);

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

// Fix 5: Update mobile Sign Up to Get Started button
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

// Fix 6: Add auth modal and padding to main
content = content.replace(
    `</nav>

      {/* Main Content }}
      <main>`,
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

      {/* Main Content }}
      <main className="pt-16">`
);

// Fix 7: Add fixed nav and proper styling
content = content.replace(
    `<nav className="bg-white shadow-sm border-b">`,
    `<nav className="bg-white shadow-sm border-b fixed w-full z-50 top-0 left-0 right-0">`
);

fs.writeFileSync('./src/components/Layout.jsx', content);
console.log('Layout.jsx updated with remaining changes!');
