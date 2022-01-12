import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom';
import ProtectedComponent from '@Components/Essential/Protected';

import * as Pages from '@Views/index';
import Error from '@Views/Error';

export default function App() {
    return <BrowserRouter>
        <ReactRoutes>

            <Route path="/" element={<Pages.Home />} />
            <Route path="/om-oss" element={<Pages.About />} />
            <Route path="/kontakt-oss" element={<Pages.Contact />} />

            <Route path="/account/login" element={<Pages.Login />} />
            <Route path="/account/manage" element={<ProtectedComponent><Pages.ManageAccount /></ProtectedComponent>} />

            {/* Redirect to the 404 page if no page was rendered */}
            <Route path="*" element={<Error code="404" />} />
            
        </ReactRoutes>
    </BrowserRouter>
}