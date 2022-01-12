import { FC, SetStateAction, Dispatch } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import AppBar from '@muim/AppBar';

import Toolbar from '@muim/Toolbar';
import Typography from '@muim/Typography';

import IconButton from '@muim/IconButton';
import MenuIcon from '@muii/Menu';

interface Props {
    setMenuVisible : Dispatch<SetStateAction<boolean>>
    menuVisible : boolean;
}

const Header : FC<Props> = props => {

    const navigate = useNavigate();
    const { isAuthenticated, user } = useAuth0();

    return <AppBar id="header">
        <Toolbar disableGutters>
            <IconButton color="inherit" sx={{ml: '8px'}} onClick={() => props.setMenuVisible(!props.menuVisible)}><MenuIcon /></IconButton>
            <Typography className='brand no-select cursor-pointer' noWrap variant="h6" onClick={() => navigate('/')}>Innlandet Fylkeskommune</Typography>

            {isAuthenticated && <div className='logged-in'>Logget inn som <strong>{user?.name}</strong></div>}
        </Toolbar>
    </AppBar>
}

export default Header;