import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Chukwuemeka Okafor',
      location: 'Lagos, Nigeria',
      image: '👨‍💻',
      text: 'This course changed my life! I went from zero coding knowledge to building my first website in just 3 weeks. Now I\'m earning ₦150,000 monthly as a freelance web developer.',
      rating: 5,
    },
    {
      name: 'Amina Ibrahim',
      location: 'Abuja, Nigeria',
      image: '👩‍💼',
      text: 'I was skeptical at first, but the step-by-step approach made everything so clear. The JavaScript section especially helped me understand concepts I struggled with for months.',
      rating: 5,
    },
    {
      name: 'David Okonkwo',
      location: 'Port Harcourt, Nigeria',
      image: '👨‍🎓',
      text: 'Best investment I\'ve made this year! The course is comprehensive and the support is amazing. I landed a job at a tech company just 2 months after completing it.',
      rating: 5,
    },
    {
      name: 'Blessing Adeyemi',
      location: 'Ibadan, Nigeria',
      image: '👩‍💻',
      text: 'As a complete beginner, I was worried I wouldn\'t understand. But the explanations are so clear and practical. I\'m now building websites for clients!',
      rating: 5,
    },
  ];

  return (
    <div className="testimonials-section">
      <h2 className="testimonials-title">🎉 Success Stories from Nigerian Students</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-header">
              <div className="testimonial-avatar">{testimonial.image}</div>
              <div className="testimonial-info">
                <div className="testimonial-name">{testimonial.name}</div>
                <div className="testimonial-location">{testimonial.location}</div>
              </div>
            </div>
            <div className="testimonial-rating">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="star">⭐</span>
              ))}
            </div>
            <p className="testimonial-text">"{testimonial.text}"</p>
            <div className="testimonial-verified">✓ Verified Purchase</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

