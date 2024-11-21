import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext/AuthContext.tsx';
import {PrivateRouteProps} from './types.ts';

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;