import React, { useState } from 'react';
import './DeliveryPage.css';

const DeliveryPage = () => {
  const [orderId] = useState(localStorage.getItem('orderId') || `ORD-${Date.now()}`);
  const whatsappNumber = '2349020738847'; // WhatsApp number
  const whatsappMessage = encodeURIComponent(
    `Hello! I just purchased the Web Development Course. My Order ID is: ${orderId}. Can you help me access my course?`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const deliverySteps = [
    {
      step: 1,
      title: 'Check Your Email',
      description: 'We\'ve sent your course access link to your email. Check your inbox and spam folder.',
      icon: '📧',
    },
    {
      step: 2,
      title: 'Access Your Dashboard',
      description: 'Click the link in your email to access your personalized learning dashboard.',
      icon: '🎓',
    },
    {
      step: 3,
      title: 'Start Learning',
      description: 'Begin with Module 1 and follow the step-by-step curriculum at your own pace.',
      icon: '🚀',
    },
    {
      step: 4,
      title: 'Join Support Group',
      description: 'You\'ll receive a WhatsApp group invite. Join to connect with other students and get help.',
      icon: '💬',
    },
  ];

  return (
    <div className="delivery-page">
      <div className="delivery-container">
        <div className="delivery-header">
          <div className="delivery-icon">📦</div>
          <h1 className="delivery-title">Your Course is Ready!</h1>
          <p className="delivery-subtitle">
            Here's everything you need to know about accessing your course and getting support.
          </p>
        </div>

        <div className="order-tracking">
          <h2>Order Tracking</h2>
          <div className="tracking-info">
            <div className="tracking-item">
              <span className="tracking-label">Order ID:</span>
              <span className="tracking-value">{orderId}</span>
            </div>
            <div className="tracking-item">
              <span className="tracking-label">Status:</span>
              <span className="tracking-value status-active">✓ Active</span>
            </div>
            <div className="tracking-item">
              <span className="tracking-label">Package:</span>
              <span className="tracking-value">
                {localStorage.getItem('selectedPackage')?.charAt(0).toUpperCase() + 
                 localStorage.getItem('selectedPackage')?.slice(1) || 'Premium'} Package
              </span>
            </div>
          </div>
        </div>

        <div className="delivery-steps">
          <h2>How to Access Your Course</h2>
          <div className="steps-grid">
            {deliverySteps.map((item) => (
              <div key={item.step} className="delivery-step-card">
                <div className="step-icon">{item.icon}</div>
                <div className="step-number">Step {item.step}</div>
                <h3 className="step-title">{item.title}</h3>
                <p className="step-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="support-section">
          <h2>Need Help? We're Here for You!</h2>
          <div className="support-options">
            <div className="support-card">
              <div className="support-icon">💬</div>
              <h3>WhatsApp Support</h3>
              <p>Get instant help via WhatsApp. Our team responds within 2 hours during business hours.</p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="support-button whatsapp"
              >
                💬 Chat on WhatsApp
              </a>
            </div>

            <div className="support-card">
              <div className="support-icon">📧</div>
              <h3>Email Support</h3>
              <p>Send us an email and we'll get back to you within 24 hours.</p>
              <a
                href="mailto:admin@gadwaytech.online"
                className="support-button email"
              >
                📧 Send Email
              </a>
            </div>

            <div className="support-card">
              <div className="support-icon">👥</div>
              <h3>Community Support</h3>
              <p>Join our exclusive WhatsApp group to connect with other students and get peer support.</p>
              <button className="support-button community">
                👥 Join Community
              </button>
            </div>
          </div>
        </div>

        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>When will I receive my course access?</h3>
              <p>You'll receive your course access email within 5-10 minutes of purchase. If you don't see it, check your spam folder.</p>
            </div>
            <div className="faq-item">
              <h3>How long do I have access to the course?</h3>
              <p>You have lifetime access to the course, including all future updates and new content.</p>
            </div>
            <div className="faq-item">
              <h3>Can I access the course on my phone?</h3>
              <p>Yes! The course is fully mobile-responsive and can be accessed on any device - phone, tablet, or computer.</p>
            </div>
            <div className="faq-item">
              <h3>What if I need help with the course?</h3>
              <p>We offer multiple support channels: WhatsApp support, email support, and our exclusive student community group.</p>
            </div>
            <div className="faq-item">
              <h3>Do you offer refunds?</h3>
              <p>Yes, we offer a 30-day money-back guarantee. If you're not satisfied, contact us for a full refund.</p>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h2>Ready to Start Your Journey?</h2>
          <p>Check your email now and begin your transformation into a professional web developer!</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            💬 Contact Us on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPage;

