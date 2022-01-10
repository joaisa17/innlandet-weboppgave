import { render } from 'react-dom';

import App from '@/App';
import DefaultHead from '@Components/Essential/DefaultHead';

import '@scss/_main.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

render(
    <div id="react-app">
        <DefaultHead />
        <App />
    </div>,
    document.getElementById('main')
);