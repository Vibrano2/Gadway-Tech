import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CountdownTimer from '../components/CountdownTimer';
import Testimonials from '../components/Testimonials';
import SocialProof from '../components/SocialProof';
import { trackEvent } from '../services/mailchimpService';
import './SalesPage.css';

const SalesPage = () => {
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState('premium');
  const [email, setEmail] = useState(localStorage.getItem('userEmail') || '');
  
  // Countdown target: 24 hours from now
  const countdownTarget = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();

  useEffect(() => {
    // Track page view
    if (email) {
      trackEvent(email, 'viewed-sales-page');
    }
  }, [email]);

  const packages = {
    basic: {
      name: 'Starter Package',
      price: 14900,
      originalPrice: 29900,
      features: [
        'Complete HTML, CSS & JavaScript Course',
        '30+ Video Lessons',
        '5 Real-World Projects',
        'Downloadable Resources',
        'Email Support',
        'Certificate of Completion',
      ],
      popular: false,
    },
    premium: {
      name: 'Premium Package',
      price: 24900,
      originalPrice: 49900,
      features: [
        'Everything in Starter Package',
        '60+ Advanced Video Lessons',
        '15 Real-World Projects',
        '1-on-1 Mentorship Session (30 mins)',
        'WhatsApp Support Group Access',
        'Job Placement Assistance',
        'Portfolio Review',
        'Lifetime Access to Updates',
        'Bonus: Freelancing Guide',
        'Bonus: Client Acquisition System',
      ],
      popular: true,
      savings: 25000,
    },
    vip: {
      name: 'VIP Package',
      price: 39900,
      originalPrice: 79900,
      features: [
        'Everything in Premium Package',
        '100+ Masterclass Videos',
        '25 Real-World Projects',
        '3 One-on-One Mentorship Sessions',
        'Priority WhatsApp Support',
        'Guaranteed Job Placement',
        'Personal Portfolio Website Built For You',
        'Monthly Group Coaching Calls',
        'Access to Private Community',
        'Bonus: Advanced JavaScript Mastery',
        'Bonus: React.js Fundamentals',
        'Bonus: Business Setup Guide',
      ],
      popular: false,
      savings: 40000,
    },
  };

  const handlePurchase = (packageType) => {
    // Track purchase intent
    if (email) {
      trackEvent(email, 'purchase-intent');
    }

    // Generate order ID
    const orderId = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

    // Store selected package and order info
    localStorage.setItem('selectedPackage', packageType);
    localStorage.setItem('packagePrice', packages[packageType].price);
    localStorage.setItem('orderId', orderId);

    // In a real implementation, you would integrate with a payment gateway
    // For now, we'll redirect to thank you page
    // Replace this with your actual payment integration (Paystack, Flutterwave, etc.)
    navigate('/thank-you');
  };

  const currentPackage = packages[selectedPackage];

  return (
    <div className="sales-page">
      <div className="sales-container">
        {/* Hero Section */}
        <header className="sales-hero">
          <div className="hero-badge">🎯 LIMITED TIME OFFER</div>
          <h1 className="hero-title">
            Master Web Development in 90 Days and Start Earning <span className="highlight">₦200,000+ Monthly</span>
          </h1>
          <p className="hero-subtitle">
            The Complete HTML, CSS & JavaScript Course Designed Specifically for the Nigerian Market
          </p>
          <CountdownTimer targetDate={countdownTarget} />
        </header>

        {/* Social Proof */}
        <SocialProof />

        {/* Problem/Solution Section */}
        <section className="problem-solution">
          <div className="problem-box">
            <h2>❌ Are You Struggling With...</h2>
            <ul>
              <li>Watching countless YouTube tutorials but still can't build a real website?</li>
              <li>Feeling overwhelmed by confusing coding concepts?</li>
              <li>Not knowing where to start or what to learn next?</li>
              <li>Wasting money on courses that don't teach practical skills?</li>
              <li>Wanting to earn money as a developer but don't know how to get clients?</li>
            </ul>
          </div>
          <div className="solution-box">
            <h2>✅ This Course Will Help You...</h2>
            <ul>
              <li>Build professional websites from scratch in just 90 days</li>
              <li>Master HTML, CSS & JavaScript with step-by-step guidance</li>
              <li>Create a portfolio that gets you hired or attracts clients</li>
              <li>Learn the exact skills Nigerian employers and clients are looking for</li>
              <li>Start earning money as a freelance web developer</li>
            </ul>
          </div>
        </section>

        {/* What's Inside Section */}
        <section className="whats-inside">
          <h2 className="section-title">What's Inside This Complete Course</h2>
          <div className="curriculum-grid">
            <div className="curriculum-item">
              <div className="curriculum-icon">📚</div>
              <h3>HTML Mastery</h3>
              <p>Learn semantic HTML5, forms, accessibility, and best practices used by professional developers.</p>
            </div>
            <div className="curriculum-item">
              <div className="curriculum-icon">🎨</div>
              <h3>CSS Mastery</h3>
              <p>Master Flexbox, Grid, animations, responsive design, and modern CSS techniques.</p>
            </div>
            <div className="curriculum-item">
              <div className="curriculum-icon">⚡</div>
              <h3>JavaScript Mastery</h3>
              <p>From basics to advanced: DOM manipulation, async programming, ES6+, and more.</p>
            </div>
            <div className="curriculum-item">
              <div className="curriculum-icon">🚀</div>
              <h3>Real Projects</h3>
              <p>Build actual websites: landing pages, portfolios, e-commerce sites, and more.</p>
            </div>
            <div className="curriculum-item">
              <div className="curriculum-icon">💼</div>
              <h3>Freelancing Guide</h3>
              <p>Learn how to find clients, price your services, and build a sustainable business.</p>
            </div>
            <div className="curriculum-item">
              <div className="curriculum-icon">🤝</div>
              <h3>Community Support</h3>
              <p>Join a community of Nigerian developers helping each other succeed.</p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="pricing-section">
          <h2 className="section-title">Choose Your Package</h2>
          <p className="pricing-subtitle">All packages include lifetime access and future updates</p>
          
          <div className="pricing-grid">
            {Object.entries(packages).map(([key, pkg]) => (
              <div
                key={key}
                className={`pricing-card ${pkg.popular ? 'popular' : ''} ${selectedPackage === key ? 'selected' : ''}`}
                onClick={() => setSelectedPackage(key)}
              >
                {pkg.popular && <div className="popular-badge">MOST POPULAR</div>}
                <h3 className="package-name">{pkg.name}</h3>
                <div className="price-container">
                  <div className="original-price">₦{pkg.originalPrice.toLocaleString()}</div>
                  <div className="current-price">₦{pkg.price.toLocaleString()}</div>
                  {pkg.savings && (
                    <div className="savings">Save ₦{pkg.savings.toLocaleString()}</div>
                  )}
                </div>
                <ul className="package-features">
                  {pkg.features.map((feature, index) => (
                    <li key={index}>✓ {feature}</li>
                  ))}
                </ul>
                <button
                  className="purchase-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePurchase(key);
                  }}
                >
                  Get {pkg.name} Now
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* Guarantee Section */}
        <section className="guarantee-section">
          <div className="guarantee-box">
            <div className="guarantee-icon">🛡️</div>
            <h2>30-Day Money-Back Guarantee</h2>
            <p>
              We're so confident you'll love this course that we offer a full 30-day money-back guarantee. 
              If you're not completely satisfied, we'll refund every naira - no questions asked.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta">
          <CountdownTimer targetDate={countdownTarget} />
          <h2>Don't Miss This Opportunity</h2>
          <p>Join 2,847+ Nigerian developers who are already building their future with web development</p>
          <button
            className="final-cta-button"
            onClick={() => handlePurchase(selectedPackage)}
          >
            🚀 Start Learning Now - Get Instant Access
          </button>
          <p className="cta-note">⚡ Instant access after payment • 📱 Works on all devices • 🔒 Secure payment</p>
        </section>
      </div>
    </div>
  );
};

export default SalesPage;

