import { FC, Fragment, useState } from 'react';
import { Helmet } from 'react-helmet';
import Capitalize from '@CommonTS/Capitalize';
import Header from '@Components/Interface/Header';
import Menu from '@Components/Interface/Menu';

interface Props {
    title : string;

    hideHeader? : boolean;
    hideFooter? : boolean;

    disableMenu? : boolean;
}

const Page : FC<Props> = (props) => {

    const [menuVisible, setMenuVisible] = useState<boolean>(false);

    return <Fragment>
        <Helmet>
            <title>{Capitalize(props.title)}</title>
        </Helmet>

        {!props.hideHeader && <Header setMenuVisible={setMenuVisible} menuVisible={menuVisible} />}
        {!props.disableMenu && <Menu setVisible={setMenuVisible} visible={menuVisible} />}

        <div className="content" children={props.children} />
    </Fragment>
}

export default Page;