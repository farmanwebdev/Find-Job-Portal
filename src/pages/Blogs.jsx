import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, User, Calendar, ChevronLeft, ChevronRight, Play } from 'lucide-react';

const blogs = [
    {
        id: 1,
        title: "10 Tips for Writing a Winning Resume",
        excerpt: "Learn how to craft a resume that stands out to recruiters and hiring managers. Get insider tips on formatting, content, and keywords.",
        category: "Career Advice",
        author: "Sarah Johnson",
        date: "Jan 15, 2024",
        readTime: "5 min read"
    },
    {
        id: 2,
        title: "How to Ace Your Next Job Interview",
        excerpt: "From preparation to follow-up, discover the essential strategies that will help you nail every interview you attend.",
        category: "Interview Tips",
        author: "Michael Chen",
        date: "Jan 12, 2024",
        readTime: "7 min read"
    },
    {
        id: 3,
        title: "Remote Work Trends in 2024",
        excerpt: "Explore the latest trends in remote work and learn how to thrive in the evolving landscape of digital nomad careers.",
        category: "Remote Work",
        author: "Emily Davis",
        date: "Jan 10, 2024",
        readTime: "6 min read"
    },
    {
        id: 4,
        title: "Top In-Demand Skills Employers Want",
        excerpt: "Stay competitive by knowing which skills are most sought after in today's job market and how to develop them.",
        category: "Career Development",
        author: "David Wilson",
        date: "Jan 8, 2024",
        readTime: "4 min read"
    },
    {
        id: 5,
        title: "Negotiating Your Salary with Confidence",
        excerpt: "Everything you need to know about salary negotiation, from research to the final offer letter.",
        category: "Career Advice",
        author: "Lisa Anderson",
        date: "Jan 5, 2024",
        readTime: "8 min read"
    },
    {
        id: 6,
        title: "Building Your Professional Network",
        excerpt: "Effective networking strategies that actually work. Learn how to build meaningful connections in your industry.",
        category: "Networking",
        author: "James Brown",
        date: "Jan 3, 2024",
        readTime: "5 min read"
    }
];

// Video carousel data for background
const videoSlides = [
    {
        id: 1,
        thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&h=900&fit=crop",
        title: "How to Find Your Dream Job"
    },
    {
        id: 2,
        thumbnail: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1600&h=900&fit=crop",
        title: "Resume Writing Tips"
    },
    {
        id: 3,
        thumbnail: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600&h=900&fit=crop",
        title: "Interview Preparation Guide"
    }
];

const Blogs = () => {
    const [currentVideo, setCurrentVideo] = useState(0);

    // Auto-advance the video carousel
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentVideo((prev) => (prev + 1) % videoSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextVideo = () => {
        setCurrentVideo((prev) => (prev + 1) % videoSlides.length);
    };

    const prevVideo = () => {
        setCurrentVideo((prev) => (prev - 1 + videoSlides.length) % videoSlides.length);
    };

    return (
        <div className="min-h-screen">
            {/* ======== Hero Section with Video Background ======== */}
            <div className="blogs-hero">
                <div className="video-background">
                    {videoSlides.map((video, index) => (
                        <div
                            key={video.id}
                            className={`video-background-slide ${index === currentVideo ? 'active' : ''}`}
                        >
                            <img src={video.thumbnail} alt={video.title} />
                            <div className="video-background-overlay"></div>
                        </div>
                    ))}
                </div>
                <div className="blogs-hero-arrows">
                    <button onClick={prevVideo} className="blog-hero-arrow">
                        <ChevronLeft />
                    </button>
                    <button onClick={nextVideo} className="blog-hero-arrow">
                        <ChevronRight />
                    </button>
                </div>
                <div className="blogs-hero-dots">
                    {videoSlides.map((_, index) => (
                        <button
                            key={index}
                            className={`blog-hero-dot ${index === currentVideo ? 'active' : ''}`}
                            onClick={() => setCurrentVideo(index)}
                        />
                    ))}
                </div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        Our Blog
                    </h1>
                    <p className="max-w-2xl mx-auto">
                        Expert career advice, job search tips, and industry insights to help you advance your career.
                    </p>
                </div>
            </div>

            {/*======= Blog Grid ======== */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="blogs-grid">
                    {blogs.map(blog => (
                        <article key={blog.id} className="blog-card">
                            <div className="blog-card-image">
                                <span className="blog-card-category">{blog.category}</span>
                                <BookOpen />
                            </div>
                            <div className="blog-card-content">
                                <h2 className="blog-card-title">{blog.title}</h2>
                                <p className="blog-card-excerpt">{blog.excerpt}</p>
                                <div className="blog-card-meta">
                                    <div className="blog-card-author">
                                        <div className="blog-card-author-avatar">
                                            <User className="h-4 w-4" />
                                        </div>
                                        <span className="blog-card-author-name">{blog.author}</span>
                                    </div>
                                    <div className="blog-card-date">
                                        <Calendar className="h-3 w-3 mr-1 inline" />
                                        {blog.date}
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {/*======= Newsletter Section ========== */}
            <div className="bg-gray-100 py-16 mt-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        Stay Updated with Our Newsletter
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Get the latest career advice, job listings, and industry insights delivered directly to your inbox.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto newsletter-form">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="filter-input flex-1"
                        />
                        <button type="submit" className="btn-primary newsletter-btn">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
