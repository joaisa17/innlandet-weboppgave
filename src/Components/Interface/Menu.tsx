import { FC, SetStateAction, Dispatch } from 'react';
import Drawer from '@muim/Drawer';

interface Props {
    setVisible : Dispatch<SetStateAction<boolean>>
    visible : boolean
}

const Menu : FC<Props> = props => {
    

    return <Drawer
        open={props.visible}
        onClose={() => props.setVisible(false)}
    >
        <div className="menu">
            <h4 style={{margin: '20px'}}>HELLO dnilea</h4>
        </div>
    </Drawer>
}

export default Menu;