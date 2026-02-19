import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { JobProvider } from './context/JobContext';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import JobListings from './pages/JobListings';
import JobDetails from './pages/JobDetails';
import CompanyDashboard from './pages/CompanyDashboard';
import CandidateDashboard from './pages/CandidateDashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PostJob from './pages/PostJob';

function App() {
  return (
    <Router>
      <AuthProvider>
        <JobProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/jobs" element={<JobListings />} />
              <Route path="/jobs/:id" element={<JobDetails />} />
              <Route path="/company/dashboard" element={<CompanyDashboard />} />
              <Route path="/candidate/dashboard" element={<CandidateDashboard />} />
              <Route path="/post-job" element={<PostJob />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </Layout>
        </JobProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;