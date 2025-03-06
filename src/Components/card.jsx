const Card = ({ children, className }) => (
    <div className={`border rounded-lg p-4 shadow ${className}`}>{children}</div>
  );
  
  const CardContent = ({ children }) => <div>{children}</div>;
  
  export { Card, CardContent };
  