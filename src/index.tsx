import { render } from 'react-dom';

import App from '@/App';
import DefaultHead from '@Components/Essential/DefaultHead';

import '@scss/_main.scss';

render(
    <div id="react-app">
        <DefaultHead />
        <App />
    </div>,
    document.getElementById('main')
);