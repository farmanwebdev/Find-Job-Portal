const CandidateDashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Candidate Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Applied Jobs</h3>
          <p className="text-3xl font-bold text-primary-600">8</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Saved Jobs</h3>
          <p className="text-3xl font-bold text-primary-600">15</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Interviews</h3>
          <p className="text-3xl font-bold text-primary-600">3</p>
        </div>
      </div>
    </div>
  );
};

export default CandidateDashboard;