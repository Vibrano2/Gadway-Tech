import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { trackEvent, addTagsToSubscriber } from '../services/mailchimpService';
import './ThankYouPage.css';

const ThankYouPage = () => {
  const navigate = useNavigate();
  const [email] = useState(localStorage.getItem('userEmail') || '');
  const [selectedPackage] = useState(localStorage.getItem('selectedPackage') || 'premium');

  useEffect(() => {
    // Track purchase completion
    if (email) {
      trackEvent(email, 'purchased');
      // Add purchase tag
      addTagsToSubscriber(email, ['purchased', 'customer']);
    }
  }, [email]);

  const upsellProducts = [
    {
      id: 'react-mastery',
      name: 'React.js Mastery Course',
      description: 'Take your skills to the next level with React.js. Build modern, interactive web applications.',
      price: 19900,
      originalPrice: 39900,
      features: [
        'Complete React.js Course',
        'Hooks, Context API, Redux',
        '10 Real-World Projects',
        'Next.js Fundamentals',
      ],
    },
    {
      id: 'freelance-blueprint',
      name: 'Freelance Developer Blueprint',
      description: 'The exact system to build a 6-figure freelance web development business in Nigeria.',
      price: 14900,
      originalPrice: 29900,
      features: [
        'Client Acquisition System',
        'Pricing Strategies',
        'Contract Templates',
        'Portfolio Optimization',
      ],
    },
    {
      id: 'job-placement',
      name: 'Guaranteed Job Placement Program',
      description: 'Get placed in a tech company within 90 days or get your money back.',
      price: 49900,
      originalPrice: 99900,
      features: [
        'Resume & Portfolio Review',
        'Interview Preparation',
        'Job Application Strategy',
        'Guaranteed Placement',
      ],
    },
  ];

  const handleUpsellPurchase = (productId) => {
    // Track upsell interest
    if (email) {
      trackEvent(email, `upsell-interest-${productId}`);
    }
    // In real implementation, redirect to payment
    alert(`Redirecting to payment for ${upsellProducts.find(p => p.id === productId)?.name}`);
  };

  const handleSkip = () => {
    navigate('/delivery');
  };

  return (
    <div className="thank-you-page">
      <div className="thank-you-container">
        <div className="success-animation">
          <div className="success-icon">✓</div>
        </div>
        
        <h1 className="thank-you-title">🎉 Congratulations! Your Order is Confirmed!</h1>
        
        <p className="thank-you-message">
          Thank you for your purchase! You've just taken the first step towards building a successful career in web development.
        </p>

        <div className="order-summary">
          <h2>Your Order Summary</h2>
          <div className="summary-item">
            <span className="summary-label">Package:</span>
            <span className="summary-value">{selectedPackage.charAt(0).toUpperCase() + selectedPackage.slice(1)} Package</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Price:</span>
            <span className="summary-value">₦{localStorage.getItem('packagePrice') || '24,900'}</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Status:</span>
            <span className="summary-value success">✓ Confirmed</span>
          </div>
        </div>

        <div className="next-steps">
          <h2>What Happens Next?</h2>
          <div className="steps-list">
            <div className="step-item">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Check Your Email</h3>
                <p>We've sent your course access details to your email address. Check your inbox (and spam folder).</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Access Your Course</h3>
                <p>Click the link in your email to access your course dashboard and start learning immediately.</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Join Our Community</h3>
                <p>You'll receive an invitation to join our exclusive WhatsApp support group.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Upsell Section */}
        <div className="upsell-section">
          <h2 className="upsell-title">🚀 Want to Accelerate Your Success?</h2>
          <p className="upsell-subtitle">
            These complementary products have helped thousands of students achieve even faster results:
          </p>

          <div className="upsell-grid">
            {upsellProducts.map((product) => (
              <div key={product.id} className="upsell-card">
                <div className="upsell-badge">BONUS OFFER</div>
                <h3 className="upsell-product-name">{product.name}</h3>
                <p className="upsell-description">{product.description}</p>
                <ul className="upsell-features">
                  {product.features.map((feature, index) => (
                    <li key={index}>✓ {feature}</li>
                  ))}
                </ul>
                <div className="upsell-pricing">
                  <span className="upsell-original">₦{product.originalPrice.toLocaleString()}</span>
                  <span className="upsell-price">₦{product.price.toLocaleString()}</span>
                </div>
                <button
                  className="upsell-button"
                  onClick={() => handleUpsellPurchase(product.id)}
                >
                  Add {product.name}
                </button>
              </div>
            ))}
          </div>

          <button className="skip-button" onClick={handleSkip}>
            No Thanks, Continue to My Course →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;

