import { FC, Fragment } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const ProtectedComponent: FC = props => {

    const { isAuthenticated } = useAuth0();

    return isAuthenticated ? <Fragment>{props.children}</Fragment> : <Navigate to="/account/login" />
}

export default ProtectedComponent;