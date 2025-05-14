
import { Navigate } from 'react-router-dom';

const Index = () => {
  // Redirect from / to /dashboard
  return <Navigate to="/dashboard" replace />;
};

export default Index;
