import React, { useState } from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = async () => {
    // Here, you would make an API call to your backend
    // to handle the subscription and email sending process.
    // For simplicity, we'll just simulate the process here.
    try {
      // Simulate API call
      await subscribeToNewsletter(email);

      // Set subscribed state to true
      setSubscribed(true);
    } catch (error) {
      // Handle error
      console.error('Error subscribing to newsletter:', error.message);
    }
  };

  const subscribeToNewsletter = async (email) => {
    // Simulate API call to subscribe to newsletter
    // You would replace this with your actual backend API endpoint
    // that handles subscription and email sending
    console.log('Subscribed with email:', email);

    // Simulate sending products via email
    await sendProductsViaEmail(email);
  };

  const sendProductsViaEmail = async (email) => {
    // Simulate sending products via email
    console.log('Sending products to:', email);
    // You would integrate with your email service provider here
    // to send the products to the user's email
    // For simplicity, we'll just log the action
  };

  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers on Your Email</h1>
      {subscribed ? (
        <p>Thank you for subscribing!</p>
      ) : (
        <>
          <p>Subscribe to our newsletter and stay updated</p>
          <div>
            <input
              type="email"
              placeholder="Your Email id"
              value={email}
              onChange={handleEmailChange}
            />
            <button onClick={handleSubscribe}>Subscribe</button>
          </div>
        </>
      )}
    </div>
  );
};

export default NewsLetter;
