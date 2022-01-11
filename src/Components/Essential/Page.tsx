import { FC, Fragment, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import CombineClasses from '@CommonTS/CombineClasses';
import Capitalize from '@CommonTS/Capitalize';

import Header from '@Components/Interface/Header';
import Footer from '@Components/Interface/Footer';
import Menu from '@Components/Interface/Menu';

interface Props {
    title : string;

    className? : string;
    pageClass? : string;

    hideHeader? : boolean;
    hideFooter? : boolean;

    disableMenu? : boolean;

    disableScrollOnLoad? : boolean;
}

const Page : FC<Props> = (props) => {

    useEffect(() => {
        if (!props.disableScrollOnLoad) window.scrollTo(0, 0);
    });

    const [menuVisible, setMenuVisible] = useState<boolean>(false);

    return <Fragment>
        <Helmet>
            <title>{Capitalize(props.title)}</title>
        </Helmet>

        {!props.hideHeader && <Header setMenuVisible={setMenuVisible} menuVisible={menuVisible} />}
        {!props.disableMenu && <Menu setVisible={setMenuVisible} visible={menuVisible} />}

        <div className={CombineClasses('content', CombineClasses(props.className, props.pageClass && 'page-' + props.pageClass))} children={props.children} />

        {!props.hideFooter && <Footer />}
    </Fragment>
}

export default Page;