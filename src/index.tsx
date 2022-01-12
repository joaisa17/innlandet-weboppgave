import { render } from 'react-dom';

import App from '@/App';
import DefaultHead from '@Components/Essential/DefaultHead';
import { Auth0Provider } from '@auth0/auth0-react';

import '@scss/_main.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

render(
    <Auth0Provider
        domain="joaisa17.eu.auth0.com"
        clientId="KjZcanXS3MIdweZLcoHTEd5O52zob6Is"
        redirectUri={window.location.origin}
    >
        <DefaultHead />
        <App />
    </Auth0Provider>,
    document.getElementById('main')
);