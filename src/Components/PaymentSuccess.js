import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {
  const navigate = useNavigate();

  // Redirect after 5 seconds to another page (e.g., Home or Profile)
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/Home'); // Redirect to the homepage or any other page after successful payment
    }, 20000); // 20 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={styles.container}>
      <div style={styles.messageContainer}>
        <h1 style={styles.header}>Thank You for Your Purchase!</h1>
        <p style={styles.subHeader}>
          Your payment was successful, and your order is being processed.
        </p>
        <p style={styles.info}>
          We truly appreciate your support and trust in Curiocrates. A confirmation email will be sent to you shortly.
        </p>
        <p style={styles.redirectMessage}>
          You will be redirected shortly. If not, please{' '}
          <a href="/" style={styles.link}>click here</a> to go back to the homepage.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f4f4f4',
    fontFamily: 'Arial, sans-serif',
    padding: '0 20px',
  },
  messageContainer: {
    backgroundColor: '#fff',
    padding: '40px 30px',
    borderRadius: '12px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '600px',
    width: '100%',
    border: '2px solid #e3e3e3',
  },
  header: {
    fontSize: '32px',
    color: '#9b59b6', // Purple color
    fontWeight: 'bold',
    marginBottom: '15px',
  },
  subHeader: {
    fontSize: '20px',
    color: '#1abc9c', // Turquoise color
    fontStyle: 'italic',
    marginBottom: '20px',
  },
  info: {
    fontSize: '16px',
    color: '#34495e', // Dark Gray
    marginBottom: '25px',
    lineHeight: '1.6',
  },
  redirectMessage: {
    fontSize: '14px',
    color: '#f39c12', // Gold color
    marginTop: '20px',
  },
  link: {
    color: '#9b59b6', // Purple color
    textDecoration: 'none',
    fontWeight: 'bold',
  }
};

export default PaymentSuccess;
