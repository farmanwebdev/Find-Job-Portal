import { Users, Target, Heart, Award, Briefcase, Globe, Shield, Zap } from 'lucide-react';

const teamMembers = [
    { name: "Farman Saqib", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop" },
    { name: "Sarah Ali", role: "CTO", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop" },
    { name: "Sarir Karim", role: "VP of Operations", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop" },
    { name: "AliBaz Nabi", role: "Head of Product", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop" }
];

const About = () => {
    return (
        <div className="min-h-screen">
            {/* ======= Hero Section ===========*/}
            <div className="about-hero">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="about-hero-content">
                        <div>
                            <h1 className="text-3xl md:text-5xl font-bold mb-4">
                                About GB Freelancers
                            </h1>
                            <p>
                                We're on a mission to connect talented individuals with their dream careers and help companies build their perfect teams.
                            </p>
                        </div>
                        <div className="about-hero-image">
                            <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop" alt="About JobNexus" />
                        </div>
                    </div>
                </div>
            </div>

            {/*======== Stats Section ==========*/}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="about-stats">
                    <div className="about-stat">
                        <div className="about-stat-number">50K+</div>
                        <div className="about-stat-label">Active Jobs</div>
                    </div>
                    <div className="about-stat">
                        <div className="about-stat-number">10K+</div>
                        <div className="about-stat-label">Companies</div>
                    </div>
                    <div className="about-stat">
                        <div className="about-stat-number">500K+</div>
                        <div className="about-stat-label">Job Seekers</div>
                    </div>
                    <div className="about-stat">
                        <div className="about-stat-number">25K+</div>
                        <div className="about-stat-label">Hires Made</div>
                    </div>
                </div>
            </div>

            {/*============ Mission Section =============*/}
            <div className="about-section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="about-section-title">Our Mission</h2>
                    <p className="about-section-subtitle">
                        We believe everyone deserves to find work that they love. Our platform bridges the gap between talented professionals and innovative companies.
                    </p>

                    <div className="about-features">
                        <div className="about-feature">
                            <div className="about-feature-icon">
                                <Target />
                            </div>
                            <h3>Mission Driven</h3>
                            <p>We're committed to creating meaningful connections that transform careers and organizations.</p>
                        </div>
                        <div className="about-feature">
                            <div className="about-feature-icon">
                                <Heart />
                            </div>
                            <h3>People First</h3>
                            <p>Every decision we make puts the needs of job seekers and employers at the forefront.</p>
                        </div>
                        <div className="about-feature">
                            <div className="about-feature-icon">
                                <Zap />
                            </div>
                            <h3>Innovation</h3>
                            <p>We continuously evolve our platform with cutting-edge technology to deliver the best experience.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/*========== Values Section ======== */}
            <div className="bg-gray-50 py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="about-section-title">Our Values</h2>
                    <p className="about-section-subtitle">
                        The principles that guide everything we do
                    </p>

                    <div className="about-features">
                        <div className="about-feature">
                            <div className="about-feature-icon">
                                <Globe />
                            </div>
                            <h3>Accessibility</h3>
                            <p>We make job opportunities accessible to everyone, regardless of background or location.</p>
                        </div>
                        <div className="about-feature">
                            <div className="about-feature-icon">
                                <Shield />
                            </div>
                            <h3>Trust & Transparency</h3>
                            <p>We build trust through honest communication and transparent processes.</p>
                        </div>
                        <div className="about-feature">
                            <div className="about-feature-icon">
                                <Award />
                            </div>
                            <h3>Excellence</h3>
                            <p>We strive for excellence in everything we do, from our platform to our customer service.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/*========= Team Section ============= */}
            <div className="about-section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="about-section-title">Meet Our Team</h2>
                    <p className="about-section-subtitle">
                        The passionate people behind GB Freelancers
                    </p>

                    <div className="about-team">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="about-team-member">
                                <div className="about-team-avatar">
                                    <img src={member.image} alt={member.name} />
                                </div>
                                <h3 className="about-team-name">{member.name}</h3>
                                <p className="about-team-role">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ========= CTA Section ============== */}
            <div className="bg-primary-600 py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Ready to Find Your Dream Job? let's Get Started!
                    </h2>
                    <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
                        Join thousands of job seekers who have found their perfect career match through JobNexus.
                    </p>
                    <div className="about-cta-buttons">
                        <a href="/jobs" className="about-cta-btn about-cta-btn-primary">
                            Browse Jobs
                        </a>
                        <a href="/post-job" className="about-cta-btn about-cta-btn-secondary">
                            Post a Job
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
