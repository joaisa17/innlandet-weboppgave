import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom';

import Routes from '@Views/index';
import Error from '@Views/Error';

export default function App() {
    return <BrowserRouter>
        <ReactRoutes>

            {/* Create a Route component for each Route in Routes */}
            {Routes.map((route, i) => {
                const Element = route.element;

                return <Route
                    key={i}
                    path={route.path}
                    element={<Element />}
                />
            })}

            {/* Redirect to the 404 page if no page was rendered */}
            <Route path="*" element={<Error code="404" />} />
            
        </ReactRoutes>
    </BrowserRouter>
}