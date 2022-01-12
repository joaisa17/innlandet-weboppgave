import { FC, SetStateAction, Dispatch, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';

import LogoutButton from '@CommonComponents/LogoutButton';


import Drawer from '@muim/Drawer';

import Box from '@muim/Box';
import IconButton from '@muim/IconButton';

import List from '@muim/List';
import ListItem from '@muim/ListItem';
import ListItemText from '@muim/ListItemText';
import ListItemIcon from '@muim/ListItemIcon';

import Divider from '@muim/Divider';

import HomeIcon from '@muii/Home';
import InfoIcon from '@muii/Info';
import CloseIcon from '@muii/Close';
import ContactPageIcon from '@muii/ContactPage';

import LoginIcon from '@muii/Login';
import AccountBoxIcon from '@muii/AccountBox';

type ButtonArray = [string, JSX.Element, string];

const buttonGroups: ButtonArray[][] = [
    [
        ['Hjem', <HomeIcon />, '/'],
        ['Om Oss', <InfoIcon />, '/om-oss'],
        ['Kontakt oss', <ContactPageIcon />, '/kontakt-oss']
    ]
];

interface Props {
    setVisible : Dispatch<SetStateAction<boolean>>
    visible : boolean
}

const Menu : FC<Props> = props => {
    
    const { isAuthenticated, user } = useAuth0();

    const navigate = useNavigate();

    function goTo(path: string) {
        props.setVisible(false);
        setTimeout(() => navigate(path), 150);
    }

    return <Drawer
        open={props.visible}
        onClose={() => props.setVisible(false)}
    >
        <div className="menu">
            <Box className='top' sx={{display: 'flex'}}>
                <h4 className="title">Meny</h4>
                <IconButton sx={{ml: 'auto'}} onClick={() => props.setVisible(false)}><CloseIcon /></IconButton>
            </Box>

            <Box>
                {buttonGroups.map((group, i) => <Fragment key={i}>
                    {i > 0 && <Divider />}

                    <List>
                        {group.map((btn, i) => <ListItem button key={i} onClick={() => goTo(btn[2])}>
                            <ListItemIcon children={btn[1]} />
                            <ListItemText primary={btn[0]} />
                        </ListItem>)}
                    </List>
                </Fragment>)}
                <Divider />
                <List>
                    {isAuthenticated ? <ListItem>Logget inn som: {user?.name}</ListItem> : null}
                    <ListItem button onClick={() => goTo(isAuthenticated ? "/account/manage" : "/account/login")}>
                        <ListItemIcon>{isAuthenticated ? <LoginIcon /> : <AccountBoxIcon />}</ListItemIcon>
                        <ListItemText primary={isAuthenticated ? "Profil" : "Logg inn"} />
                    </ListItem>

                    {isAuthenticated && <ListItem><LogoutButton /></ListItem>}
                </List>
            </Box>
        </div>
    </Drawer>
}

export default Menu;