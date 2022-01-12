import { useAuth0 } from '@auth0/auth0-react';
import Page, { Crumbs } from '@Components/Essential/Page';

import LogoutButton from '@CommonComponents/LogoutButton';

const crumbs: Crumbs = [
    {
        path: "/account",
        name: "Profil"
    },

    {
        path: "/account/manage",
        name: "Behandle profil"
    }
]

const ManageAccount = () => {

    const { user } = useAuth0();

    return <Page crumbs={crumbs} title="din profil" pageClass="manage-account">
        <h1 className='text-center mt-3'>Profilinnstillinger</h1>
        <div className='text-content'>
            <div className='logged-in-as mb-2'>Logget inn som: {user?.name}</div>
            <LogoutButton returnPath="" />
        </div>
    </Page>
}

export default ManageAccount;