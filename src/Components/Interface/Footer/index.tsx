import { FC } from 'react';

import Typography from '@muim/Typography';

import CombineClasses from '@CommonTS/CombineClasses';
import Link from '@CommonComponents/Link';

import Category from './Category';

interface Props {
    hidden? : boolean;
}

const Footer : FC<Props> = props => <div id={CombineClasses("footer", props.hidden && 'hidden')}>
    <Typography variant="h5" className="title">Innlandet fylkeskommune</Typography>

    <div className="categories">
        <Category title="lenker">
            <Link to="/">Hjem</Link>
            <Link to="/about">Om Oss</Link>
            <Link to="/contact">Kontakt Oss</Link>
            <Link to="https://innlandetfylke.no/">Offisiell hjemmeside</Link>
        </Category>

        <Category title="kontakt oss 2">
            <Link to="mailto:test">E-Post</Link>
            <Link to="/">Hjem test</Link>
            <Link dark to="https://youtube.com/ignwombat">Youtube</Link>
        </Category>

        <Category title="kontakt oss 3">
            <Link to="mailto:test">E-Post</Link>
            <Link to="/">Hjem test</Link>
            <Link dark to="https://youtube.com/ignwombat">Youtube</Link>
        </Category>
    </div>
</div>

export default Footer;