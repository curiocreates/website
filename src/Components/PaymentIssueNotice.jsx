import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PaymentIssueNotice = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://www.instagram.com/curio_crates"; // Redirect to Instagram
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.messageContainer}>
        <h1 style={styles.header}>We're Facing Payment Issues</h1>
        <p style={styles.subHeader}>
          Our payment gateway is temporarily unavailable. We sincerely apologize for the inconvenience.
        </p>
        <p style={styles.info}>Please reach out to us:</p>
        <div>
          <a
            href="https://www.instagram.com/curio_crates"
            style={styles.contactLink}
            target="_blank"
            rel="noopener noreferrer"
          >📷 Click here to visit @curio_crates</a>
        </div>
        <div>
          <a
            href="mailto:curiocratessurprises@gmail.com"
            style={styles.contactLink}
          >📧 Click here to mail us at curiocratessurprises@gmail.com</a>
        </div>
        <p style={styles.redirectMessage}>
          The payment gateway will be back in a few days. Thank you for your patience and support! 💜
        </p>
        <p style={styles.redirectMessage}>
          You will be redirected shortly. If not, please <a href="https://www.instagram.com/curio_crates" style={styles.link}>click here</a> to visit our Instagram.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f4f4f4",
    fontFamily: "Arial, sans-serif",
    padding: "0 20px",
  },
  messageContainer: {
    backgroundColor: "#fff",
    padding: "40px 30px",
    borderRadius: "12px",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    maxWidth: "600px",
    width: "100%",
    border: "2px solid #e3e3e3",
  },
  header: {
    fontSize: "32px",
    color: "#e74c3c", // Red color for error
    fontWeight: "bold",
    marginBottom: "15px",
  },
  subHeader: {
    fontSize: "20px",
    color: "#1abc9c", // Turquoise
    fontStyle: "italic",
    marginBottom: "20px",
  },
  info: {
    fontSize: "18px",
    color: "#34495e", // Dark Gray
    marginBottom: "20px",
    fontWeight: "bold",
  },
  contactLink: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#9b59b6", // Purple
    textDecoration: "none",
    display: "block",
    marginBottom: "15px",
  },
  redirectMessage: {
    fontSize: "16px",
    color: "#f39c12", // Gold
    marginTop: "20px",
  },
  link: {
    color: "#9b59b6", // Purple
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default PaymentIssueNotice;