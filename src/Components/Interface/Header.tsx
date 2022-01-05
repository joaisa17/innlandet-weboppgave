import { FC, useState, SetStateAction, Dispatch } from 'react';

import AppBar from '@muim/AppBar';
import Box from '@muim/Box';

import Toolbar from '@muim/Toolbar';
import IconButton from '@muim/IconButton';
import Typography from '@muim/Typography';

import Menu from '@muim/Menu';
import MenuIcon from '@muii/Menu';
import MenuItem from '@muim/MenuItem';

import Container from '@muim/Container';
import Avatar from '@muim/Avatar';
import Button from '@muim/Button';
import Tooltip from '@muim/Tooltip';

interface Props {
    setMenuVisible : Dispatch<SetStateAction<boolean>>
    menuVisible : boolean;
}

const Header : FC<Props> = props => {

    const [collapse, setCollapse] = useState<boolean>(false);

    return <AppBar className="header" position="static">
        <Toolbar disableGutters>
            <IconButton color="inherit" sx={{ml: '8px'}} onClick={() => props.setMenuVisible(!props.menuVisible)}><MenuIcon /></IconButton>
            <Typography noWrap variant="h6">Innlandet</Typography>

            
        </Toolbar>
    </AppBar>
}

export default Header;