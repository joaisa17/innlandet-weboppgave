import { FC, Fragment, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import Link from '@CommonComponents/Link';

import CombineClasses from '@CommonTS/CombineClasses';
import Capitalize from '@CommonTS/Capitalize';

import Header from '@Components/Interface/Header';
import Footer from '@Components/Interface/Footer';
import Menu from '@Components/Interface/Menu';

import Breadcrumbs from '@muim/Breadcrumbs';

interface Crumb {
    path: string;
    name: string;
}

export type Crumbs = Crumb[];

interface Props {
    title: string;

    className?: string;
    pageClass?: string;

    crumbs?: Crumbs;
    lightCrumbs?: boolean;

    hideHeader?: boolean;
    hideFooter?: boolean;

    disableMenu?: boolean;

    disableScrollOnLoad?: boolean;
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

        {props.crumbs && <Breadcrumbs className="breadcrumbs">
            {props.crumbs.map((crumb, i) => <Link {...props.lightCrumbs ? {dark: false} : {dark: true}} key={i} to={crumb.path}>{crumb.name}</Link>)}
        </Breadcrumbs>}

        <div className={CombineClasses('content', CombineClasses(props.className, props.pageClass && 'page-' + props.pageClass))} children={props.children} />

        {!props.hideFooter && <Footer />}
    </Fragment>
}

export default Page;