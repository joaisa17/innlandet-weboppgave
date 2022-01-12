import { FC } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '@muim/Button';

interface Props {
    returnPath?: string;
    color?: "inherit" | "error" | "primary" | "secondary" | "success" | "info" | "warning";
}

const LogoutButton: FC<Props> = props => {

    const { logout } = useAuth0();

    return <Button variant="outlined" color={props.color || "error"} onClick={() => logout({returnTo: window.location.origin + (props.returnPath || window.location.pathname)})}>Logg ut</Button>
}

export default LogoutButton;