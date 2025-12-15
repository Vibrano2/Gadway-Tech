import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { subscribeToMailchimp, trackEvent } from '../services/mailchimpService';
import SocialProof from '../components/SocialProof';
import './SqueezePage.css';

const SqueezePage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Webinar replay video URL
  const webinarVideoUrl = 'https://youtu.be/a1Whx_5ApgE?si=Fozv1tBsJ9-5zzMY';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      setLoading(false);
      return;
    }

    try {
      // Store email in localStorage for use throughout funnel
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userFirstName', firstName);

      // Subscribe to Mailchimp
      const result = await subscribeToMailchimp(
        email,
        firstName,
        '',
        'subscribed',
        ['squeeze-page', 'webinar-viewer']
      );

      if (result.success) {
        // Track event
        await trackEvent(email, 'viewed-squeeze-page');
        
        setSuccess(true);
        // Redirect to sales page after 2 seconds
        setTimeout(() => {
          navigate('/sales');
        }, 2000);
      } else {
        // Even if Mailchimp fails, still redirect (graceful degradation)
        console.error('Mailchimp error:', result.error);
        setTimeout(() => {
          navigate('/sales');
        }, 1000);
      }
    } catch (err) {
      console.error('Error:', err);
      // Still redirect even on error
      setTimeout(() => {
        navigate('/sales');
      }, 1000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="squeeze-page">
      <div className="squeeze-container">
        <header className="squeeze-header">
          <div className="logo">🚀 WebDev Mastery</div>
          <div className="header-badge">FREE Training</div>
        </header>

        <div className="squeeze-content">
          <div className="squeeze-main">
            <h1 className="squeeze-title">
              Discover How Nigerian Developers Are Earning <span className="highlight">₦200,000+ Monthly</span> With These 3 Simple Web Development Skills
            </h1>

            <p className="squeeze-subtitle">
              Watch this exclusive webinar replay where I reveal the exact step-by-step system I used to go from zero coding knowledge to building websites for clients across Nigeria.
            </p>

            <div className="video-container">
              <ReactPlayer
                url={webinarVideoUrl}
                controls
                width="100%"
                height="100%"
                playing={false}
                className="webinar-video"
              />
            </div>

            <div className="email-capture-section">
              {!success ? (
                <>
                  <h2 className="capture-title">
                    Enter Your Email Below to Watch the Full Webinar Replay
                  </h2>
                  <form onSubmit={handleSubmit} className="email-form">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Your First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        placeholder="Enter Your Best Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="form-input"
                      />
                    </div>
                    {error && <div className="error-message">{error}</div>}
                    <button
                      type="submit"
                      disabled={loading}
                      className="cta-button primary"
                    >
                      {loading ? 'Loading...' : '🎯 YES! Show Me The Webinar'}
                    </button>
                  </form>
                  <p className="privacy-note">
                    🔒 Your information is 100% secure. We respect your privacy and will never spam you.
                  </p>
                </>
              ) : (
                <div className="success-message">
                  <div className="success-icon">✓</div>
                  <h2>Success! Redirecting you now...</h2>
                </div>
              )}
            </div>
          </div>

          <div className="squeeze-sidebar">
            <SocialProof />
            
            <div className="benefits-box">
              <h3>What You'll Learn:</h3>
              <ul className="benefits-list">
                <li>✓ How to build professional websites from scratch</li>
                <li>✓ The exact HTML, CSS & JavaScript skills employers want</li>
                <li>✓ How to land your first client in 30 days</li>
                <li>✓ Pricing strategies that work in the Nigerian market</li>
                <li>✓ How to avoid common beginner mistakes</li>
              </ul>
            </div>

            <div className="trust-badges">
              <div className="badge">✓ 2,847+ Students</div>
              <div className="badge">✓ 4.9/5 Rating</div>
              <div className="badge">✓ Money-Back Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SqueezePage;

