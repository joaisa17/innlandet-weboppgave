import { FC } from 'react';
import Page from '@Components/Essential/Page';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import Button from '@muim/Button';

interface Props {
    redirect?: string;
}

const Login: FC<Props> = props => {

    const { loginWithRedirect, isAuthenticated } = useAuth0();

    if (isAuthenticated) return <Navigate to="/account/manage" />

    return <Page title='log in' pageClass='login'>
        <div className='text-content'>
            <h2>Logg inn for å fortsette</h2>
            <Button variant="contained" onClick={() => loginWithRedirect({redirectUri: props.redirect})}>Logg inn</Button>
        </div>
    </Page>
}

export default Login;